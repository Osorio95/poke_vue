import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from 'axios'

const app = createApp(App)

app.use(router, axios)

app.mount('#app')
