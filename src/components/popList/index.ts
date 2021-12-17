import { App } from 'vue';
import PopList from './src/index.vue';

export default {
  install(app: App) {
    app.component('pop-list', PopList);
  }
}