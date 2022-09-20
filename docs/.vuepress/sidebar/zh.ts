import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "简介",
      icon: 'creative',
      link: '/zh-cn/abmcode'
    },
    {
      text: "Jmix",
      icon: "jmix",
      prefix: "/zh-cn/jmix/",
      children: [
        {
          text: "Jmix - 少代码企业级开发平台",
          icon: "article",
          link: "jmix-introduction"
        },
        {
          text: "FAQ",
          icon: "question",
          link: "jmix-qa"
        },
        {
          text: "技术文章",
          icon: "light",
          collapsable: true,
          children: [
            {
              text: "扩展组件开发新体验",
              icon: "article",
              link: "jmix-new-dev-way"
            },
            {
              text: "REST API 的两种实现",
              icon: "article",
              link: "jmix-rest-diff-ways"
            },
            {
              text: "服务端驱动 Web UI 开发",
              icon: "article",
              link: "server-side-ui"
            }
          ]
        },
        {
          text: "里程碑",
          collapsable: true,
          prefix: "/zh-cn/jmix/releases/",
          icon: "strong",
          children: [
            {
              text: "Jmix 1.3",
              icon: "article",
              link: "jmix-1.3"
            }
          ]
        }
      ]
    },
  ],
});
