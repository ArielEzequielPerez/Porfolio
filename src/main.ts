import { createApp } from 'vue'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from "./router"
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import 'primeicons/primeicons.css'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'    
import config from "../src/config/formkit.config"
import '@formkit/themes/genesis'

createApp(App).use(PrimeVue, { unstyled: true }).use(plugin, defaultConfig(config)).use(router).mount('#app')
