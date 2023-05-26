import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css";


createApp(App).mount('#app')
App.use(PrimeVue);
