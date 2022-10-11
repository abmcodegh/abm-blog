const { runCmdSync, log } = require("./common");
const fs = require('fs');
const { exit } = require("process");
const readline = require("readline");

///////////////////////////////////// funcitons ///////////////////////////////////////////////

function printUsage() {
    console.log(
        `usage: node deploy.js <env json file>
            env JSON 文件示例：
            {
                "tar":{ // 如果有 tar，则会尝试打包
                    "dist": "dist build dir name",
                    "target": "target dir name",
                },
                "remote": { // 如果有 remote，则会尝试执行远端操作
                  "user": "username",
                  "host": "host ip",
                  "dir": "remote dir to put the package tar",
                  "script": "remote cmd or script to be exec"
                }
            }
    `);
}

function appendTar(str) {
    return str + ".tar";
}

function errExit(msg) {
    log.error(msg);
    exit(1);
}

function parseEnvFile(file) {
    if (fs.existsSync(file)) {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    } else {
        errExit(`配置文件 ${file} 不存在。`);
    }
}

function package(tar) {
    var { dist, target, tarFile } = tar;

    if (!target) {
        target = dist;
    }

    if (!dist && !target) {
        errExit(`配置错误，未配置 dist/target`);
    }

    if (!tarFile) {
        tarFile = appendTar(target);
    }

    if (fs.existsSync(dist)) {
        if (target !== dist && fs.existsSync(target)) {
            fs.rmSync(target, { recursive: true, force: true });
        }

        if (fs.existsSync(tarFile)) {
            fs.rmSync(tarFile);
        }

        if (target !== dist) {
            fs.renameSync(dist, target);
        }
    } else if (!fs.existsSync(target)) {
        errExit(`[${dist} & ${target}] 不存在，请先执行 build`);
    }

    if (!fs.existsSync(tarFile)) {
        runCmdSync(`tar cf ${tarFile} ${target}`);
        log.info("打包完成！")
    } else {
        log.info(`${tarFile} 已经存在，跳过打包步骤`);
    }
    return tarFile;
}

function runRemoteCmd(remote, defaultCmd = undefined) {
    var cmd;
    if (remote.script) {
        // 如果配置了远端脚本，执行远端脚本进行部署
        cmd = `ssh ${remote.user}@${remote.host} "cd ${remote.dir}; ${remote.script}; exit;"`;
    } else if (defaultCmd) {
        // 否则如果配置了默认命令，则执行默认命令。
        cmd = `ssh ${remote.user}@${remote.host} "${defaultCmd};exit;"`;
    }

    if (cmd) {
        runCmdSync(cmd);
    } else {
        log.info("无远程可执行命令");
    }
}

function deploy(remote, tar) {

    if (remote && remote.user && remote.host && remote.dir) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        if (!!tar) {
            rl.question("是否上传？ y/n:", function (choice) {
                rl.close();
                log.info("choice:" + choice);
                const lower = choice.toLowerCase();
                if (lower === "y" || lower === "yes" || lower === "ye") {
                    // 上传文件至指定目录。
                    runCmdSync(`scp ${tarFile} ${remote.user}@${remote.host}:${remote.dir}`);
                }

                runRemoteCmd(remote, `cd ${remote.dir}; tar xf ${tar.tarFile}`);

            });
        } else {
            runRemoteCmd(remote);
        }

    } else {
        log.info("未配置 remote 或者 remote 配置不完整，不进行上传");
    }
}

///////////////////////////////////// main ///////////////////////////////////////////////

var [, , ...args] = process.argv;

if (args.length === 0) {
    printUsage();
    errExit(`没有带 env json 文件`);
}

const envFile = args[0];

var { tar, remote } = parseEnvFile(envFile);

log.info(tar);
log.info(remote);

if (tar) {
    tar.tarFile = package(tar);
}

if (remote) {
    deploy(remote, tar);
}
