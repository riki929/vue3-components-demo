import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { camelToKebab } from './utils'
// import UI from './components'
// import UI from '../lib/zl-element-components.es'
// import '../lib/style.css'
import calendar from '../lib/calendar/index.es'
import '../lib/chooseIcon/style.css'
import './mock'

const app = createApp(App)

// 全局注册图标 牺牲一点性能
// el-icon-xxx
for (let i in Icons) {
  // 注册全部组件
  app.component(`el-icon-${camelToKebab(i)}`, (Icons as any)[i])
}

app.use(router)
  .use(ElementPlus)
  .use(calendar)
  // .use(UI)
app.mount('#app')
