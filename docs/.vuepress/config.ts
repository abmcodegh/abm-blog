import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { getDirname, path } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

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
  plugins: [
    registerComponentsPlugin({
      components: {
        AbmCardList: path.resolve(__dirname, './components/AbmCardList.vue'),
      }
    }) as any,
  ],

  shouldPrefetch: false,
});
