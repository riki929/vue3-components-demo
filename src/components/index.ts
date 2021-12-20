import { App } from 'vue';
import ChooseArea from './chooseArea';
import ChooseIcon from './chooseIcon';
import Trend from './trend';
import Notification from './notification';
import PopList from './popList';
import Menu from './menu';
import Progress from './progress';

const components = [
  ChooseArea,
  ChooseIcon,
  Trend,
  Notification,
  PopList,
  Menu,
  Progress
]

export default {
  install(app: App)  {
    components.map(item => {
      app.use(item);
    })
  }
}