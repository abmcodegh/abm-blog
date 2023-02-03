import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "简介",
      icon: '/logo32.png',
      link: '/zh-cn/abmcode'
    },
    {
      text: "Jmix",
      icon: "/jmix-sign.png",
      collapsible: true,
      prefix: "/zh-cn/jmix/",
      children: [
        {
          text: "Jmix - 少代码企业级开发平台",
          icon: "article",
          link: "jmix-introduction"
        },
        {
          text: "Jmix 是低代码平台吗？",
          icon: "article",
          link: "jmix-less-code"
        },
        {
          text: "FAQ",
          icon: "question",
          link: "jmix-qa"
        },
        {
          text: "技术文章",
          icon: "creative",
          collapsible: true,
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
          collapsible: true,
          prefix: "/zh-cn/jmix/releases/",
          icon: "ability",
          children: [
            {
              text: "Jmix 1.4",
              icon: "activity",
              link: "jmix-1.4"
            },
            {
              text: "Jmix 1.3",
              icon: "activity",
              link: "jmix-1.3"
            },
          ]
        }
      ]
    },
    {
      text: "Angular",
      icon: "/angular.svg",
      prefix: "/zh-cn/ng/",
      collapsible: true,
      children: [
        {
          text: "Universal & SEO",
          icon: "/angular_universal.png",
          link: "universal"
        }
      ]
    },
    {
      text: "行业视角",
      icon: "mount",
      prefix: "/zh-cn/industry/",
      collapsible: true,
      children: [
        {
          text: "企业级开发平台的演进",
          icon: "article",
          link: "rad-twenty-years"
        },
        {
          text: "低代码平台 - 危险的赌注",
          icon: "article",
          link: "lcap-dangerous-bet"
        },
        {
          text: "快速应用程序开发",
          icon: "article",
          link: "what-is-rad"
        },
        {
          text: "应用系统现代化权威指南",
          icon: "article",
          link: "mdn"
        },
        {
          text: "保险业自动化",
          icon: "article",
          link: "insurance"
        },
        {
          text: "物流自动化",
          icon: "article",
          link: "logistics"
        },
      ]
    },
    {
      text: "信息前沿",
      icon: "update",
      prefix: "/zh-cn/tech/",
      collapsible: true,
      children: [
        {
          text: "JDK 17",
          icon: "article",
          link: "jdk17"
        },
        {
          text: "Postman 进阶技巧",
          icon: "article",
          link: "postman"
        }
      ]
    }
  ],
});
