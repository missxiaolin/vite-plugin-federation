import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from 'pinia'
import Layout from "./Layout.vue";
const CssModuleButton = defineAsyncComponent(() => import("css-modules/Button"));


const app = createApp(Layout);

app.component("css-modules-button", CssModuleButton);

app.use(createPinia());
app.mount("#root");
