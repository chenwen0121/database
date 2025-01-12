import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'   //  ./ 同級  ..上一級  @/ 根目錄
import '@/assets/font/iconfont.css'
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import '@/assets/css/banner.css'
import '@/assets/css/main.css'
import '@/assets/css/footer.css'
import '@/assets/css/about.css'
import '@/assets/css/house.css'
import '@/assets/css/case.css'
import '@/assets/css/collocation.css'
import '@/assets/css/kitchen.css'
createApp(App).use(router).mount('#app')
