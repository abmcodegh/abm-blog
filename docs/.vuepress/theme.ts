import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

let year = new Date().getFullYear();

let footer = [
  '<span class="sk-blue">「所有文章均可转载，转载请注明出处」</span><br/>',
  '<span class="center"> ©Copyright 2018 - ' + year + ' All rights reversed </span>',
  'by <a href="https://www.abmcode.com" target="_blank">ABMcode（北京世开科技有限公司）</a>',
  '<img id="qrcode" src="https://cdn.abmcode.com/_media/abmcode_qrcode.jpg"/>',
].join('');

export default hopeTheme({
  themeColor: {
    blue: "#303a9a",
    orange: "#fe8a34",
    green: "#60AD80",
    red: "#fb0067",
  },

  fullscreen: true,

  hostname: "https://blog.abmcode.com",

  author: {
    name: "世开 Coding",
    url: "https://www.abmcode.com",
  },

  iconAssets: "iconfont",

  logo: "/brand_256x50.png",

  copyright: false,

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "docs",
  contributors: false,
  lastUpdated: false,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    avatar: "/abmcode_qrcode.jpg",
    medias: {
      // Email: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      Wechat: "https://blog.abmcode.com/_media/abmcode_qrcode.jpg",
      // Weibo: "https://example.com",
      CSDN: ["https://blog.csdn.net/cubacn", '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px" height="26px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABMlBMVEX8VTH8dFf9pZL9xLf+0cf+zsP9uar8knv8Xjz8g2n+29P////+9vX9rpz8Wzj8Wjf9vrD+/v7+4tz8ZUX8XTv+187+5+L9sJ/9wLL+7er9vK78VjP9zsT+6+f8iG/8VzT9mYT+9fP+z8X9pJD+4dv8ZEP8b1H+6+b8jnb8ZkX++Pf+9PH8aUr8Xz38cFL9sqL9nYj+8u/+7+z8WTb8f2T9taX8h239v7H8Z0f+zsT+/f3+0sn++/v9y7/9tqb8eVz9q5r8YUD++/r8Y0L8bE38iXH8VjL+1s78YT/8gGX+9PL8Zkb+8/D9m4b8YkD8WDX9w7b+9vT8hGr++vr+6OP+2dH+1Mv+4Nr++ff+7+v8fmP9sKD+8/H+7ur9qpn9qpj9wrb+zMH9u639oY38el78VzOb/PDuAAAAAWJLR0QLH9fEwAAAAAd0SU1FB+YJFAMaDRJ4yLkAAAEASURBVDjLY2AYdICRiZmFlY2dA4c0Jxc3BPDw8mGR5hcQ5IYDIWEMeRFRkISYgLiEJIghhS4vLQMUlZUDMeUVFLm5ldAVKAPlVVShHDV1QQ00eU0tbm5tHThXVw/dAH2gAQZ4/C9vyM1tZIxHgQnQAFN8IcgEVGCGT4E5UIEFPgWW3NxW0vgUWHNz2+CTZ7AFWiGCT4EdUIE9PgXsQAUO+BQ4OnFzGzojCbi4uqGqEAAa4e4B53p6cYujKvD2AcW2rx+I7W8SYMXNHYhmSVAwKJkIhoSGhUeA01QIujM8I7mRgVEUhkM9omPg0rFxutj8wh8Un6BknZiUnJLKMJgAAK9gG/sHs2daAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA5LTIwVDAzOjI2OjEzKzAwOjAwPUkdIwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOS0yMFQwMzoyNjoxMyswMDowMEwUpZ8AAAAASUVORK5CYII="/></svg>'],
      OSChina: ["https://my.oschina.net/abmcode", '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px" height="26px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAGq0lEQVRYw8WXS2xdVxWG//06r/u0Xd/ajpPazaPyoKRJ2kAqlAIqRSkMQEiICVBUCSpmQMVTIKRSJlU6g1CQgkoQUhXUAQNQaAeBgJsmDekjxIldHOr39fu+zmvvszeDazvX997YLgz6j86R9l7r2+uss9baxBiDD1J8/UE8dWxHG5TUBUj9IBIzBIJ+EJIDoKDNHAhGYLGL3KK3trMjf/naZoAtRQAV60EE6osQ9NN2Rhx208IVNgNjBMYASmoEVQm/FL+lyvHLxOOnmaBT2CbAWwIQQqBk0m989VMrZ3/l7n05dBQcpHI2bIeBMgJCCAwMjAZklKBWjg8uzvoHZ8bLP1El+RzL8O8SSnAnEL6Vc1mNnwSnLwwe7ma79mXhpQWU1JBxAhknaE4fSgnyBRfd/Sns3p8j4+8sf2dudPWzxOGf4TYba5dv/A7eIcvxc26n/fT9H+1FR7eDoCpRWY1ByJ0jprVB5CuENcB2GQ4e70W+2z1w4/XidWnMh4XD/9kMwds5V+X42UzBffrIo/1gnKC8HIIQsqXzJhOIgwQySjAwlAd3KL/219lLKk4GuEWnGhlo80ZVk487eesHhz7RB0oBvxyD7NTzJmOAMUB5JcKuwSwOHC0wE6i/6aTpszW+JMpYIDg7dLQA2+EIqhKEtndOGYFlM1hO/U/YStXVGANDedx9ID+YVOLnG0N5G4AAuia/37sv53X3p1Arxy3OjTHggsLLWoABSkshVooBksTAy1hgnKJdomltEIcJhh4qIN3jfVMFam9LDmhlKHH5t3bdm4WKdYsRow3ctICMNW5ensfijI/AVzegTWy57EM9ezIYvL8TjhAIa2uRM/VI2V7djYoTeFmB6mJ4BsDDmwEC9anOe9LZbKeNKFAtJ3fTAn5F4s3zMwgXw18gxU8yi44DFHGk+yeuLjyzPB88cehjvXBSAsYYCIsh9CXm3qtgYaqGxdlaaDT+wNP8bEsEYPBYvsuth1HXP8nGIsEgY403L8wiXIme5F3O6cYiwC06hS7nq9XZ2uTb/5j70ZGP70JlJUZxolKP1Ep0HgZniMdfZhZZbSxKtwEEPehlBJJEb3IOAI7LMfb2EsKF4CXeYZ9GuwZmAJ63f1xaih557c+Tx0NfjRhfvgSH/56nxVjjukZtAFCb7rUcBp1sXkEoQRwnWJkPAEFPblvbBf1CUJUPUE7OsZyFHfcCxmgX46Qe/gZRWk8eFScAp9PYXkVu0XPtTttOdLsFxgCUUVBOAW2yOwB4X9oASJReSJQBaULSiYHlMLhpAUh9dNuiaACtjf2+AXSkb0aBAuO0rdXuPg8g5HvNpbRZSulXdGLmVFWeUr76pNamJanbAkAlV6qlGLRN7w5rCj17Mujemx1KlsMXTbNRAujEcLUU/u6uPu/RYyf25PcfLTzV0ev9BdpMq1L8gvLVY1ob2gxD1ksn+fJDx7I93vDh471QUkPr2xTGAMKmoITgxhsLmBsr3YQxvwGn7wCgkPpBcPq1XfflevcfuguMU5A6FCorEZaLAZaLAVbm/SKAP3KbvyJPDZ/dBMC+/hHoSE888Ejf7q4+D35Fbmq/RhsIm0HYrF7VZmqIfAUQwE0JFHan0dnj1tuwTDY6qLDqDUvJBDLSePetJRTHy+/p314eABrrACXQUj8zNV7+VXe/B0qxqd4QSiBjDSU1uno9FHankKg1eE6gpIZfkYDBpvYt4wRxlMByGJwUR+ArGILPt+aAAVha/HrxVnl65j9VpHJWS2dbtxsFCn5FIgrUxnMcJhv50JJolMDxOP51aR6lyeqL3BNXWgFQLzpg9HOjb8yjVpLwMhaM/v/vDZkOC7eur2B2ZHWKZcQTjaHdBGAMwFP8sqypb189Pw0lNVJZC//L5cWsteJsp42J0RJGX5+PiMOO0abhpfWn1wY8Yz3vL0U/u3RuErWKRLbTAV2b/3cqN83hpgTGri7i+oXZVQh6iFtsqmWSvhM+z1o/DFbjb1z80wRuXVuGsCgyeQvCZm3HNEJQn5YyAqmshfJShCuvTuHflxcuUIfdJ2w6svOxfA1CZMQpGSbnRy8WT06Pl0/0DmSQ73bhZQS4cxvEaAOdGIS+wtJsDQvTPuYnqrNQ+lmes36+PqC205Y3I6MNuEVHYFuP11bjh9+9NP8l4vET6Zx1j+0JCFEPYKI0ojCBX4lLsiL/DuAs9fgZ6jINgy274s7uhgbgLhs2NhtOouRwpRgcqSC4F4R0ASAwpgSDSTByjbh8mDESrO/bTuSDvp7/F4+HOSpkO7mKAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA5LTIxVDAzOjM2OjQ3KzAwOjAw7gB5BQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOS0yMVQwMzozNjo0NyswMDowMJ9dwbkAAAAASUVORK5CYII=" /></svg>'],
      Zhihu: "https://www.zhihu.com/org/shi-kai-coding",
      cnBlogs: ["https://home.cnblogs.com/u/abmcode/", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><clipPath id="prefix__clip-path"><path class="prefix__cls-1" d="M29.48 25.24c-.16-1.89-.08-1.5-.24-3.16a72.24 72.24 0 00-2-10.37L26 6.25l-2.6 5.41-.44.89q-.24.48-.54 1a20.43 20.43 0 01-1.24 1.84 20.08 20.08 0 01-3.08 3.24 19.72 19.72 0 01-3.87 2.53c-.72.33-1.45.71-2.23 1-.34.14-1.19.44-1.93.66a2.55 2.55 0 01-1.07-.3c-.34-1-.83-2.24-1.2-3.19-.5-1.25-1-2.5-1.51-3.73a59.11 59.11 0 00-3.62-7.25 59.82 59.82 0 001.51 7.94c.3 1.3.7 2.58 1.05 3.87S6 22.71 6.44 24a1.4 1.4 0 001.29.93c1.28 0 2.57.06 3.86.05s2.59 0 3.88-.11a56 56 0 007.79-.87c-1.92-.49-7.5-.81-10.79-1.06a43 43 0 006.53-1.7 24.06 24.06 0 005.38-3.45c.71-.62 1.21 1.88 2.39 5.27.62 1.69.34 1 1 2.66s1.37 4.38 2.17 6c-.07-1.82-.31-4.67-.46-6.48z"/></clipPath><clipPath id="prefix__clip-path-2"><path class="prefix__cls-1" d="M20.92 3.46a4.25 4.25 0 01.31 5.86 3.91 3.91 0 01-5.66.24 4.25 4.25 0 01-.31-5.86 3.91 3.91 0 015.66-.24m1.35-1.54a5.89 5.89 0 00-8.53.36 6.41 6.41 0 00.48 8.83 5.91 5.91 0 008.53-.36 6.41 6.41 0 00-.48-8.83z"/></clipPath><style>.prefix__cls-1{fill:#3e3a39}@media (prefers-color-scheme:dark){.prefix__cls-1{fill:#efefef}}</style></defs><g style="isolation:isolate"><g id="prefix__layer_1" data-name="layer 1"><path class="prefix__cls-1" d="M29.48 25.24c-.16-1.89-.08-1.5-.24-3.16a72.24 72.24 0 00-2-10.37L26 6.25l-2.6 5.41-.44.89q-.24.48-.54 1a20.43 20.43 0 01-1.24 1.84 20.08 20.08 0 01-3.08 3.24 19.72 19.72 0 01-3.87 2.53c-.72.33-1.45.71-2.23 1-.34.14-1.19.44-1.93.66a2.55 2.55 0 01-1.07-.3c-.34-1-.83-2.24-1.2-3.19-.5-1.25-1-2.5-1.51-3.73a59.11 59.11 0 00-3.62-7.25 59.82 59.82 0 001.51 7.94c.3 1.3.7 2.58 1.05 3.87S6 22.71 6.44 24a1.4 1.4 0 001.29.93c1.28 0 2.57.06 3.86.05s2.59 0 3.88-.11a56 56 0 007.79-.87c-1.92-.49-7.5-.81-10.79-1.06a43 43 0 006.53-1.7 24.06 24.06 0 005.38-3.45c.71-.62 1.21 1.88 2.39 5.27.62 1.69.34 1 1 2.66s1.37 4.38 2.17 6c-.07-1.82-.31-4.67-.46-6.48z"/><g clip-path="url(#prefix__clip-path)"><path class="prefix__cls-1" d="M-.87-.78h34.42v33.07H-.87z"/></g><path class="prefix__cls-1" d="M20.92 3.46a4.25 4.25 0 01.31 5.86 3.91 3.91 0 01-5.66.24 4.25 4.25 0 01-.31-5.86 3.91 3.91 0 015.66-.24m1.35-1.54a5.89 5.89 0 00-8.53.36 6.41 6.41 0 00.48 8.83 5.91 5.91 0 008.53-.36 6.41 6.41 0 00-.48-8.83z"/><g clip-path="url(#prefix__clip-path-2)"><path class="prefix__cls-1" d="M-.87-.78h34.42v33.07H-.87z"/></g></g></g></svg>'],
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // navbarAutoHide: "always",

      // sidebar
      sidebar: zhSidebar,

      footer,

      displayFooter: true,

      blog: {
        description: "我们关注提升开发者效率的工具和产品",
        intro: "/zh-cn/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh-cn/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    // seo: {
    //   autoDescription: true
    // },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "abmcodegh/blog-comments",
      repoId: "R_kgDOIL8ygQ",
      category: "Announcements",
      categoryId: "DIC_kwDOIL8ygc4CR6ZI",
      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      imageLazyload: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //           {
    //             src: "/assets/icon/guide-monochrome.png",
    //             sizes: "192x192",
    //             purpose: "monochrome",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
