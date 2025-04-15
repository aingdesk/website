import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "AingDesk",
  description: "拥有超强知识库能力的开源免费AI助手",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            }
          }
        }
      }
    },

    logo: {
      light: '/img/logo.png',
      dark: '/img/logo-dark.png',
      alt: 'AingDesk Logo'
    },

    sidebar: [
      {
        text: '安装',
        collapsed: false,
        items: [
          { text: 'Windows', link: '/docs/Installation/windows' },
          { text: 'macOS', link: '/docs/Installation/macos' },
          { text: 'Docker', link: '/docs/Installation/docker' },
          { text: '宝塔面板', link: '/docs/Installation/btpanel' },
          { text: '下载地址', link: '/download' }
        ]
      },

      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '介绍', link: '/docs/index' },
          { text: '聊天', link: '/docs/guide/chat' },
          { text: '安装模型', link: '/docs/guide/installing-models' },
          { text: '智能体', link: '/docs/guide/intelligent-agent' },
          { text: '知识库', link: '/docs/guide/knowledgebase' },
          { text: '第三方API', link: '/docs/guide/thirdapi' },
          { text: '分享', link: '/docs/guide/share' }
        ]
      },
      {
        text: '实用教程',
        collapsed: false,
        items: [
          { text: '知识库进阶', link: '/docs/Practical-tutorials/knowledgebase' }
        ]
      },
      {
        text: 'FAQ',
        collapsed: false,
        items: [
          { text: '常见问题', link: '/docs/faq/faq' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/aingdesk/website:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      copyright: `© ${new Date().getFullYear()} AingDesk`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN', 
      title: 'AingDesk',
      description: '拥有超强知识库能力的开源免费AI助手',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'AingDesk',
      description: 'An open-source free AI assistant with super knowledge base capabilities',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/en/docs/' }
        ],
        sidebar: [
          {
            text: 'Installation',
            collapsed: false,
            items: [
              { text: 'Windows', link: '/en/docs/Installation/windows' },
              { text: 'macOS', link: '/en/docs/Installation/macos' },
              { text: 'Docker', link: '/en/docs/Installation/docker' },
              { text: 'BT Panel', link: '/en/docs/Installation/btpanel' },
              { text: 'Download', link: '/en/download' }
            ]
          },
          {
            text: 'Guide',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/en/docs/index' },
              { text: 'Chat', link: '/en/docs/guide/chat' },
              { text: 'Installing Models', link: '/en/docs/guide/installing-models' },
              { text: 'Intelligent Agent', link: '/en/docs/guide/intelligent-agent' },
              { text: 'Knowledge Base', link: '/en/docs/guide/knowledgebase' },
              { text: 'Third-Party API', link: '/en/docs/guide/thirdapi' },
              { text: 'Share', link: '/en/docs/guide/share' }
            ]
          },
          {
            text: 'Practical Tutorials',
            collapsed: false,
            items: [
              { text: 'Knowledge Base Advanced', link: '/en/docs/Practical-tutorials/knowledgebase' }
            ]
          },
          {
            text: 'FAQ',
            collapsed: false,
            items: [
              { text: 'FAQ', link: '/en/docs/faq/faq' }
            ]
          }
        ]
      }
    }
  }
})
