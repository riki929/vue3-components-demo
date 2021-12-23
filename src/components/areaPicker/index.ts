import { App } from 'vue';
import AreaPicker from './src/index.vue';

export default {
  install(app: App) {
    app.component('zl-area-picker', AreaPicker);
  }
}