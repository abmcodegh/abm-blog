import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // { text: "演示", icon: "discover", link: "/zh/demo/" },
  {
    text: "分类",
    icon: "edit",
    prefix: "/zh-cn/",
    children: [
      {
        text: "Jmix",
        icon: "edit",
        // prefix: "jmix/",
        link: "jmix/jmix",
        // children: [
        //   { text: "苹果1", icon: "edit", link: "1" },
        //   { text: "苹果2", icon: "edit", link: "2" },
        //   "3",
        //   "4",
        // ],
      },
      // {
      //   text: "香蕉",
      //   icon: "edit",
      //   prefix: "posts/banana/",
      //   children: [
      //     {
      //       text: "香蕉 1",
      //       icon: "edit",
      //       link: "1",
      //     },
      //     {
      //       text: "香蕉 2",
      //       icon: "edit",
      //       link: "2",
      //     },
      //     "3",
      //     "4",
      //   ],
      // },
      // { text: "樱桃", icon: "edit", link: "cherry" },
      // { text: "火龙果", icon: "edit", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
    ],
  },
  {
    text: "Jmix FAQ",
    icon: "question",
    link: "/zh-cn/jmix/jmix-qa",
  },
]);
