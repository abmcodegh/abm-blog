const { runCmdSync, log } = require("./common");
const fs = require('fs');
const { exit } = require("process");
const readline = require("readline");

function appendTar(str) {
    return str + ".tar";
}

function errExit(msg) {
    log.error(msg);
    exit(1);
}

function parseEnvFile(file) {
    if (fs.existsSync(file)) {
        var ret = JSON.parse(fs.readFileSync(file, 'utf8'));
        if (!ret.tarFile) {
            ret.tarFile = appendTar(ret.target);
        }
        return ret;
    } else {
        errExit(`配置文件 ${file} 不存在。`);
    }
}

var { dist, target, tarFile, remote } = parseEnvFile("./env.json");

log.info({ dist, target, tarFile });
log.info(remote);

if (!target) {
    target = dist;
}

if (!dist && !target) {
    errExit(`配置错误，未配置 dist/target`);
}

if (fs.existsSync(dist)) {
    if (target !== dist && fs.existsSync(target)) {
        fs.rmDirSync(target);
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

if (remote && remote.user && remote.host && remote.dir) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("是否上传并部署？ y/n:", function (choice) {
        rl.close();
        log.info("choice:" + choice);
        const lower = choice.toLowerCase();
        if (lower === "y" || lower === "yes" || lower === "ye") {
            // 上传文件至指定目录。
            var cmd = `scp ${tarFile} ${remote.user}@${remote.host}:${remote.dir}`;
            runCmdSync(cmd);

            if (remote.script) {
                // 如果配置了远端脚本，执行远端脚本进行部署
                cmd = `ssh ${remote.user}@${remote.host} "${remote.script}"`;
            } else {
                // 否则简单在传输的目录解压
                cmd = `ssh ${remote.user}@${remote.host} "cd ${remote.dir}; tar xf ${tarFile}"`;
            }

            runCmdSync(cmd);
        }
    });
} else {
    log.info("未配置 remote 或者 remote 配置不完整，不进行上传");
}

