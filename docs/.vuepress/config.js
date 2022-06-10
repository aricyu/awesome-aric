const sidebar = {
    docs: [
        '/guide',
        {
            text: 'Visual Studio Code',
            children: ['/vscode/javasrcipt.json',],
        },
        {
            text: 'Git',
            children: ['/git/git-install', '/git/git', '/git/cherry-pick', '/git/github'],

        },
        {
            text: 'Python',
            children: ['/python/python', '/python/python-pip', '/python/python-venv', '/python/django-celery'],

        },
        {
            text: '.Net',
            children: ['/dotnet/ef', '/dotnet/path'],

        },
        {
            text: 'JavaScript',
            children: ['/javascript/js', '/javascript/axios', '/javascript/layui'],

        },
        {
            text: 'Linux',
            children: ['/linux/nginx',],

        },
        {
            text: 'Docker',
            children: ['/docker/docker', '/docker/deploy'],

        },
    ]
}
const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { searchConsolePlugin } = require('vuepress-plugin-china-search-console')

module.exports = {
    lang: 'zh-CN',
    title: 'awesome-aric',
    description: 'awesome-aric',

    head: [
        ['link', { rel: 'icon', href: '/images/logo_16_16.png' }]
    ],
    theme: defaultTheme({
        logo: '/logo.png',
        navbar: [
            {
                text: '文档',
                link: '/guide/',
            },
        ],

        repo: 'https://github.com/aricyu/awesome-aric',

        sidebarDepth: 2,
        sidebar: sidebar.docs,

        docsDir: 'docs',
        editLink: true,
        editLinkText: '编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        tip: '提示',
        warning: '注意',
        danger: '警告',

        notFound: [
            '这里什么都没有',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],

        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
    }),

    plugins: [
        searchPlugin({
            maxSuggestions: 10
        }),
        searchConsolePlugin({
            baiduId: "2d9be53517f0a4e3bd0d2abd3ba639fc",
            toutiaoAutoPushId: "",
            autoPushBaiduSwitch: false,
            autoPush360Switch: false,
        })
    ]
}
