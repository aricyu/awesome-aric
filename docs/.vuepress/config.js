const sidebar = {
    docs: [
        '/guide',
        {
            text: 'Docker',
            children: ['/docker/docker', '/docker/deploy'],

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
            text: 'Python',
            children: ['/python/python','/python/python-pip','/python/python-venv'],

        },
        {
            text: 'Visual Studio Code',
            children: ['/vscode/javasrcipt.json',],

        },
    ]
}

module.exports = {
    lang: 'zh-CN',
    title: 'awesome-aric',
    description: 'awesome-aric',


    head: [['link', { rel: 'icon', href: '/images/logo_16_16.png' }]],
    themeConfig: {
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
    },

    plugins: [
        [
            '@vuepress/plugin-search',
            {
                maxSuggestions: 10,
            }
        ]
    ]
}
