var num = 0;
var year = new Date().getFullYear();

var abmDocsifyPlugins = [
    function (hook, vm) {
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
    }
];


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
    plugins: abmDocsifyPlugins
}
