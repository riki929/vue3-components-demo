import { App } from 'vue';
import CityPicker from './src/index.vue';

export default {
  install(app: App) {
    app.component('zl-city-picker', CityPicker);
  }
}