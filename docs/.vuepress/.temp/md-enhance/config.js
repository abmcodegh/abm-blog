import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import ChartJS from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Mermaid from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    const VuePlayground = defineAsyncComponent(() => import("/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js"));
    app.component("VuePlayground", VuePlayground);
    
  }
});