import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// import ElementPlus from 'element-plus'
// import '@/assets/css/element-variable.scss'

// console.log(11111111111)
// 创建节点
const app = createApp(App)
// app.use(ElementPlus)
app.use(router).use(store).mount('#app')
