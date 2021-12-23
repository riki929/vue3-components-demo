import { App } from 'vue';
import Notification from './src/index.vue';

export default {
  install(app: App) {
    app.component('zl-notification', Notification);
  }
}