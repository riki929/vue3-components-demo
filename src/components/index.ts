import { App } from 'vue';
import ChooseArea from './chooseArea';
import ChooseIcon from './chooseIcon';
import Trend from './trend';
import Notification from './notification';
import PopList from './popList';

const components = [
  ChooseArea,
  ChooseIcon,
  Trend,
  Notification,
  PopList
]

export default {
  install(app: App)  {
    components.map(item => {
      app.use(item);
    })
  }
}