import {
  useArticles,
  useBlogOptions,
  useCategoryMap,
  useTagMap,
  useTimelines
} from "./chunk-UFHS4JDY.js";
import {
  useNavigate,
  usePure,
  useThemeLocaleData
} from "./chunk-XXXNF5G6.js";
import {
  Zt
} from "./chunk-ZYA2Y74L.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  computed,
  defineComponent,
  h
} from "./chunk-3JL2R52N.js";

// docs/.vuepress/.temp/theme-hope/socialMedia.js
var icons = { "CSDN": '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px" height="26px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABMlBMVEX8VTH8dFf9pZL9xLf+0cf+zsP9uar8knv8Xjz8g2n+29P////+9vX9rpz8Wzj8Wjf9vrD+/v7+4tz8ZUX8XTv+187+5+L9sJ/9wLL+7er9vK78VjP9zsT+6+f8iG/8VzT9mYT+9fP+z8X9pJD+4dv8ZEP8b1H+6+b8jnb8ZkX++Pf+9PH8aUr8Xz38cFL9sqL9nYj+8u/+7+z8WTb8f2T9taX8h239v7H8Z0f+zsT+/f3+0sn++/v9y7/9tqb8eVz9q5r8YUD++/r8Y0L8bE38iXH8VjL+1s78YT/8gGX+9PL8Zkb+8/D9m4b8YkD8WDX9w7b+9vT8hGr++vr+6OP+2dH+1Mv+4Nr++ff+7+v8fmP9sKD+8/H+7ur9qpn9qpj9wrb+zMH9u639oY38el78VzOb/PDuAAAAAWJLR0QLH9fEwAAAAAd0SU1FB+YJFAMaDRJ4yLkAAAEASURBVDjLY2AYdICRiZmFlY2dA4c0Jxc3BPDw8mGR5hcQ5IYDIWEMeRFRkISYgLiEJIghhS4vLQMUlZUDMeUVFLm5ldAVKAPlVVShHDV1QQ00eU0tbm5tHThXVw/dAH2gAQZ4/C9vyM1tZIxHgQnQAFN8IcgEVGCGT4E5UIEFPgWW3NxW0vgUWHNz2+CTZ7AFWiGCT4EdUIE9PgXsQAUO+BQ4OnFzGzojCbi4uqGqEAAa4e4B53p6cYujKvD2AcW2rx+I7W8SYMXNHYhmSVAwKJkIhoSGhUeA01QIujM8I7mRgVEUhkM9omPg0rFxutj8wh8Un6BknZiUnJLKMJgAAK9gG/sHs2daAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA5LTIwVDAzOjI2OjEzKzAwOjAwPUkdIwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOS0yMFQwMzoyNjoxMyswMDowMEwUpZ8AAAAASUVORK5CYII="/></svg>', "Zhihu": '<svg xmlns="http://www.w3.org/2000/svg" ariaLabelledby="zhihu" class="icon zhihu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#006CE2"/>,<path fill="#fff" d="M513.65 491.261H411.551c1.615-16.154 5.815-60.095 5.815-84.973 0-24.88-.323-60.742-.323-60.742h102.744V329.39c0-21.647-9.37-31.34-17.124-31.34h-178.67s5.169-17.77 10.015-36.186c4.846-18.417 15.832-44.264 15.832-44.264-63.003 4.2-67.958 50.941-81.743 92.729-13.787 41.785-24.556 62.356-44.586 107.912 27.786 0 55.249-13.57 66.879-32.309 11.631-18.74 16.908-40.71 16.908-40.71h62.035v59.019c0 21.107-3.878 87.45-3.878 87.45H254.742c-19.386 0-29.724 48.894-29.724 48.894h133.76c-8.4 75.82-26.493 106.191-51.91 152.716-25.418 46.525-92.728 99.406-92.728 99.406 41.033 11.63 86.589-3.555 105.974-21.972 19.386-18.417 35.863-49.756 47.817-72.838 11.954-23.081 21.972-65.124 21.972-65.124L498.462 766.86s4.846-24.233 6.461-39.418c1.616-15.186-.755-26.385-4.63-35.433-3.878-9.046-15.509-21.54-31.018-39.634-15.507-18.094-48.034-52.879-48.034-52.879s-15.832 11.63-28.108 21.001c9.046-21.97 16.262-79.695 16.262-79.695h122.343v-20.249c.003-17.66-7.319-29.29-18.089-29.29zm287.337-200.747h-234.35a4.308 4.308 0 0 0-4.309 4.308v435.099a4.308 4.308 0 0 0 4.308 4.308h40.226l14.7 50.402 81.096-50.402h98.328a4.308 4.308 0 0 0 4.308-4.308v-435.1a4.308 4.308 0 0 0-4.308-4.308zM755.97 684.47h-52.343l-61.548 39.095-10.823-39.095h-18.738V338.116H755.97v346.355z"/></svg>' };

// node_modules/vuepress-theme-hope/lib/client/modules/blog/components/SocialMedia.js
import "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/social-media.scss";
var SocialMedia_default = defineComponent({
  name: "SocialMedia",
  setup() {
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = computed(() => {
      const config = blogOptions.value.medias;
      if (config)
        return Object.entries(config).map(([media, url]) => ({
          name: media,
          icon: icons[media],
          url
        }));
      return [];
    });
    return () => mediaLinks.value.length ? h("div", { class: "social-media-wrapper" }, mediaLinks.value.map(({ name, icon, url }) => h("a", {
      class: "social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      "aria-label": name,
      ...isPure.value ? {} : { "data-balloon-pos": "up" },
      innerHTML: icon
    }))) : null;
  }
});

// node_modules/vuepress-theme-hope/lib/client/modules/blog/components/BloggerInfo.js
import "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/blogger-info.scss";
var BloggerInfo_default = defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = (0, client_exports.useSiteLocaleData)();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const bloggerName = computed(() => {
      var _a;
      return blogOptions.value.name || ((_a = Zt(themeLocale.value.author)[0]) == null ? void 0 : _a.name) || siteLocale.value.title;
    });
    const bloggerAvatar = computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = computed(() => themeLocale.value.blogLocales);
    const intro = computed(() => blogOptions.value.intro);
    return () => h("div", {
      class: "blogger-info",
      vocab: "https://schema.org/",
      typeof: "Person"
    }, [
      h("div", {
        class: "blogger",
        ...intro.value ? {
          style: { cursor: "pointer" },
          "aria-label": locale.value.intro,
          "data-balloon-pos": "down",
          role: "navigation",
          onClick: () => navigate(intro.value)
        } : {}
      }, [
        bloggerAvatar.value ? h("img", {
          class: [
            "blogger-avatar",
            {
              round: blogOptions.value.roundAvatar
            }
          ],
          src: (0, client_exports.withBase)(bloggerAvatar.value),
          property: "image",
          alt: "Blogger Avatar"
        }) : null,
        bloggerName.value ? h("div", { class: "blogger-name", property: "name" }, bloggerName.value) : null,
        blogOptions.value.description ? h("div", {
          class: "blogger-description",
          innerHTML: blogOptions.value.description
        }) : null,
        intro.value ? h("meta", { property: "url", content: (0, client_exports.withBase)(intro.value) }) : null
      ]),
      h("div", { class: "num-wrapper" }, [
        h("div", { onClick: () => navigate(articles.value.path) }, [
          h("div", { class: "num" }, articles.value.items.length),
          h("div", locale.value.article)
        ]),
        h("div", { onClick: () => navigate(categoryMap.value.path) }, [
          h("div", { class: "num" }, Object.keys(categoryMap.value.map).length),
          h("div", locale.value.category)
        ]),
        h("div", { onClick: () => navigate(tagMap.value.path) }, [
          h("div", { class: "num" }, Object.keys(tagMap.value.map).length),
          h("div", locale.value.tag)
        ]),
        h("div", { onClick: () => navigate(timelines.value.path) }, [
          h("div", { class: "num" }, timelines.value.items.length),
          h("div", locale.value.timeline)
        ])
      ]),
      h(SocialMedia_default)
    ]);
  }
});

export {
  BloggerInfo_default
};
//# sourceMappingURL=chunk-6AOE2JN6.js.map
