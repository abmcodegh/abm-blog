var num = 0;
var year = new Date().getFullYear();


var footerPlugin = function (hook, vm) {
    var footer = [
        '<hr/>',
        '<footer class="footer">',
        '<span class="sk-blue">「所有文章均可转载，转载请注明出处」</span><br/>',
        '<span class="center"> ©Copyright 2018 - ' + year + ' All rights reversed </span>',
        'by <a href="https://www.abmcode.com" target="_blank">ABMcode（北京世开科技有限公司）</a>',
        '<img id="qrcode" src="https://blog.abmcode.com/_media/abmcode_qrcode.jpg"/>',
        '</footer>'
    ].join('');

    hook.afterEach(function (html) {
        if (vm.route.file.includes('README')) {
            return html;
        }
        return html + footer;
    });
};

/**
 * 为 Dom 元素添加 class
 * 支持定义这样的 JSON 结构：
 * {
 *    "target": "id" | "class" | "name" | "tag", // 修改 dom 的类型
 *    "value" : string, target 的值，根据 target 和 value 查找 HTML 中的 dom
 *    "idx" : number, 指定找到 dom 的第几个，默认为 0，用在查找到多个 dom 时
 *    "applyToAll": boolean, 指定是否应用到所有的 dom 上，该值设置为 true 时，忽略 "idx"
 *    "class" : string, 设置要添加的 class
 * }
 * 
 */
var classPlugin = function (hook, vm) {

    var re = /(classPlugin:\{[^}]+\})/g;
    var settings;
    var parser = new DOMParser();

    var setClass = function (el, clazz) {
        var cl = el.getAttribute("class");
        el.setAttribute("class", cl ? (cl + " " + clazz) : clazz);
    }

    hook.beforeEach(function (content) {
        var anySetting = content.match(re);

        if (!anySetting) {
            settings = null;
            return content;
        }

        settings = anySetting.map(function (s) {

            s = s.substring(12);

            return JSON.parse(s);
        });

        return content.replace(re, '');
    });
    hook.afterEach(function (html) {

        if (!settings) {
            return html;
        }

        var dom = parser.parseFromString(html, "text/html");

        for (var i = 0; i < settings.length; i++) {
            var setting = settings[i];

            var el = undefined;

            if (setting.target === "class") {
                el = dom.getElementsByClassName(setting.value);
            } else if (setting.target === "id") {
                el = dom.getElementById(setting.value);
            } else if (setting.target === "name") {
                el = dom.getElementsByName(setting.value);
            } else if (setting.target === "tag") {
                el = dom.getElementsByTagName(setting.value);
            }

            if (!el || el.length === 0) {
                console.warn("can't find elment for: " + setting.target + "=" + setting.value);
                continue;
            }

            if (setting.applyToAll) {
                el.map(function (e) {
                    setClass(e, setting.class);
                })
                continue;
            }

            var idx = setting.idx || 0;
            if (idx > el.length - 1 || idx < 0) {
                console.error("idx " + idx + " is not in el size " + el.length);
                continue;
            }
            setClass(el[idx], setting.class);
        }

        return dom.documentElement.innerHTML;
    });
};


mermaid.initialize({ startOnLoad: false });
window.$docsify = {
    name: '世开 Coding',
    logo: '_media/Coding_256x50.png',
    repo: '',
    loadSidebar: true,
    subMaxLevel: 1,
    // sidebarDisplayLevel: 1,
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md'
    },
    coverpage: true,
    count: {
        countable: true,
        fontsize: '0.8em',
        color: 'var(--theme-color)',
        language: 'chinese'
    },
    copyCode: {
        buttonText: '点击复制',
        errorText: '复制出错',
        successText: '已复制'
    },
    themeable: {
        readyTransition: true,
        responsiveTables: true
    },
    toc: {
        scope: '.markdown-section',
        headings: ' h2, h3',
        title: '目录',
    },
    markdown: {
        renderer: {
            code: function (code, lang) {
                if (lang === "mermaid") {
                    return (
                        '<div class="mermaid">' + mermaid.render('mermaid-svg-' + num++, code) + "</div>"
                    );
                }
                return this.origin.code.apply(this, arguments);
            }
        }
    },
    plugins: [
        footerPlugin,
        classPlugin,
    ]
}
