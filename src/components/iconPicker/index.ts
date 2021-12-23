import { App } from 'vue';
import IconPicker from './src/index.vue';

export default {
  install(app: App) {
    app.component('zl-icon-picker', IconPicker);
  }
}