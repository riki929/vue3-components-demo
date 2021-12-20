import { App } from 'vue';
import Menu from './src/index.vue';
import infiniteMenu from './src/menu'

export default {
  install(app: App) {
    app.component('zl-menu', Menu);
    app.component('zl-menu-infinite', infiniteMenu);
  }
}