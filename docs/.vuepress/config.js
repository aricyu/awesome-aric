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
            children: ['/javascript/js',],

        },
        {
            text: 'Linux',
            children: ['/linux/nginx',],

        },
        {
            text: 'Python',
            children: ['/python/python',],

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

    themeConfig: {
        logo: '/logo.png',

        navbar: [
            {
                text: '文档',
                link: '/guide/',
            },
        ],
        sidebarDepth: 2,
        sidebar: sidebar.docs
    },
}
