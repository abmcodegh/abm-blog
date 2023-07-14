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
          text: "Jmix 适合我吗？",
          icon: "article",
          link: "evaluate-jmix"
        },
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
          text: "案例",
          icon: "geometry",
          collapsible: true,
          children: [
            {
              text: "快速构建CMS后端服务",
              icon: "article",
              link: "case/jmix-as-be.md"
            }
          ]
        },
        {
          text: "技术文章",
          icon: "creative",
          collapsible: true,
          children: [
            {
              text: "Jmix实现多租户应用",
              icon: "article",
              link: "tech/multitenancy.md"
            },
            {
              text: "使用 Spring Data 查询接口",
              icon: "article",
              link: "tech/jmix-data-repository.md"
            },
            {
              text: "如何方便地处理外部数据？",
              icon: "article",
              link: "tech/external-data.md"
            },
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
              text:"延长经典UI免费支持期限",
              icon:"activity",
              link:"classic-ui-ext-support"
            },
            {
              text: "Jmix 2.0",
              icon: "activity",
              link: "jmix-2.0"
            },
            {
              text: "Jmix 1.5",
              icon: "activity",
              link: "jmix-1.5"
            },
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
      text: "技术边界",
      icon: "update",
      prefix: "/zh-cn/tech/",
      collapsible: true,
      children: [
        {
          text: "JDK 17 or not",
          icon: "article",
          link: "jdk17.md"
        },
        {
          text: "Postman 进阶",
          icon: "article",
          link: "postman.md"
        },
        {
          text: "设计模式小抄",
          icon: "article",
          link: "design-pattern.md"
        },
        {
          text: "Java 企业市场报告（2023）",
          icon: "article",
          link: "vaadin-java-report-2023.md"
        },
      ]
    }
  ],
});
