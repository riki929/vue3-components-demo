import { App } from 'vue';
import AreaPicker from './areaPicker';
import IconPicker from './iconPicker';
import Trend from './trend';
import Notification from './notification';
import PopList from './popList';
import Menu from './menu';
import Progress from './progress';
import TimePicker from './timePicker';
import DatePicker from './datePicker';
import CityPicker from './cityPicker';
import Form from './form';
import ModalForm from './modalForm';
import Table from './table';
import Calendar from './calendar';

const components = [
  AreaPicker,
  IconPicker,
  Trend,
  Notification,
  PopList,
  Menu,
  Progress,
  TimePicker,
  DatePicker,
  CityPicker,
  Form,
  ModalForm,
  Table,
  Calendar
]

export default {
  install(app: App)  {
    components.map(item => {
      app.use(item);
    })
  }
}