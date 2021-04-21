import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './style/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './permission'

const app = createApp(App)

app.use(router).use(store).use(ElementPlus)
app.mount('#app')
