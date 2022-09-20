import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "/Users/bryan/developer/abmcode/abm-blog/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});