import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from 'pinia'
import Layout from "./Layout.vue";



const app = createApp(Layout);



app.use(createPinia());
app.mount("#root");
