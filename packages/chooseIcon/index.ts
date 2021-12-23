import { App } from 'vue';
import ChooseIcon from './src/index.vue';

export default {
  install(app: App) {
    app.component('zl-choose-icon', ChooseIcon);
  }
}