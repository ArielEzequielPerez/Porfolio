import { createApp } from 'vue'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from "./router"
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import 'primeicons/primeicons.css'

createApp(App).use(PrimeVue, { unstyled: true }).use(router).mount('#app')
