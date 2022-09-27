import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  title: "世开 Coding",

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  dest: "./dist",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "世开 Coding",
    },
  },

  theme,

  shouldPrefetch: false,
});
