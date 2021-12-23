import { App } from 'vue';
import ModalForm from './src/index.vue';

export default {
  install(app: App) {
    app.component('zl-modal-form', ModalForm);
  }
}