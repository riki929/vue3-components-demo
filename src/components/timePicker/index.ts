import { App } from 'vue';
import TimePicker from './src/index.vue';

export default {
  install(app: App) {
    app.component('zl-time-picker', TimePicker);
  }
}