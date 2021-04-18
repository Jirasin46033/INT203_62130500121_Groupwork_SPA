import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Navigate from './components/Navigate.vue'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.component('Navigate',Navigate)
app.use(router).mount('#app')