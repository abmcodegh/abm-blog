import {
  useMetaLocale
} from "./chunk-JZWF5WA7.js";
import {
  Ht
} from "./chunk-ZYA2Y74L.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  RouterLink,
  useRoute
} from "./chunk-SWJALXVA.js";
import {
  defineComponent,
  h,
  onMounted,
  ref,
  watch
} from "./chunk-3JL2R52N.js";

// node_modules/vuepress-theme-hope/lib/client/modules/info/components/TOC.js
import "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-theme-hope/lib/client/modules/info/styles/toc.scss";
var renderHeader = ({ title, level, slug }) => h(RouterLink, {
  to: `#${slug}`,
  class: ["toc-link", `level${level}`]
}, () => title);
var renderChildren = (headers, headerDepth) => {
  const route = useRoute();
  return headers.length && headerDepth > 0 ? h("ul", { class: "toc-list" }, headers.map((header) => [
    h("li", {
      class: [
        "toc-item",
        { active: Ht(route, `#${header.slug}`) }
      ]
    }, renderHeader(header)),
    renderChildren(header.children, headerDepth - 1)
  ])) : null;
};
var TOC_default = defineComponent({
  name: "TOC",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const route = useRoute();
    const page = (0, client_exports.usePageData)();
    const metaLocale = useMetaLocale();
    const toc = ref(null);
    const scrollTo = (top) => {
      var _a;
      (_a = toc.value) == null ? void 0 : _a.scrollTo({ top, behavior: "smooth" });
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
    });
    return () => {
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page.value.headers ? renderChildren(page.value.headers, props.headerDepth) : null;
      return tocHeaders ? h("div", { class: "toc-place-holder" }, [
        h("aside", { id: "toc" }, [
          h("div", { class: "toc-header" }, metaLocale.value.toc),
          h("div", { class: "toc-wrapper", ref: toc }, [tocHeaders])
        ])
      ]) : null;
    };
  }
});

export {
  TOC_default
};
//# sourceMappingURL=chunk-T7ATF5XB.js.map
