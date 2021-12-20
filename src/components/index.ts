import { App } from 'vue';
import ChooseArea from './chooseArea';
import ChooseIcon from './chooseIcon';
import Trend from './trend';
import Notification from './notification';
import PopList from './popList';
import Menu from './menu';
import Progress from './progress';
import ChooseTime from './chooseTime';
import ChooseDate from './chooseDate';
import ChooseCity from './chooseCity';

const components = [
  ChooseArea,
  ChooseIcon,
  Trend,
  Notification,
  PopList,
  Menu,
  Progress,
  ChooseTime,
  ChooseDate,
  ChooseCity
]

export default {
  install(app: App)  {
    components.map(item => {
      app.use(item);
    })
  }
}