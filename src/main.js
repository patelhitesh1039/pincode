import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from "./App.vue";
import router from "./router"; // Import the router instance
import './index.css'

createApp(App)
.use(createPinia())
.use(router)
.use(VueAxios, axios)
.mount("#app");
