module.exports = {
    title: 'Git 练习', // 网站的标题
    description: '职场不小白', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    head: [
        ['link', { rel: 'icon', href: '/git.svg' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: {
        nav: [
          // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
          { text: '项目简介', link: '/intr' },
          { text: '入门教程', link: '/git' },
          { text: '亲自实践', link: '/features' },
          { text: '夹带私货', link: 'https://echocolate.xyz/', target: '_blank' },
        ],
        // 全局设置自动生成侧边栏
        sidebar: 'auto',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/Echlorine/git-runoob',

        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: false,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',
        // 最后更新时间
        lastUpdated: 'Last Updated'
      }
   }