import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AingDesk",
  description: "拥有超强知识库能力的开源免费AI助手",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/' }
    ],
    search: {
      provider: 'local'
    },
    logo: '/logo.png',
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
