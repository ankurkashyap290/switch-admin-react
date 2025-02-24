import antd from 'antd/lib/locale-provider/de_DE';
import data from 'react-intl/locale-data/de';
import email from './email.json';
import global from './global.json';
import siderMenu from './siderMenu.json';
import contact from './contact.json';
import chat from './chat.json';
import analytic from './dashboard/analytic.json';
import ecommerce from './dashboard/ecommerce.json';
import monitor from './dashboard/monitor.json';
import list from './list.json';
import map from './map.json';
import product from './product.json';
import result from './result.json';
import richTextEditor from './richTextEditor.json';
import theme from './theme.json';
import todo from './todos.json';
import user from './user.json';
import ui from './ui.json';
import appHeader from './appHeader.json';
import saas from './dashboard/saas.json';
import social from './dashboard/socialMedia.json';

const DeLanguage = {
  messages: {
    ...email,
    ...global,
    ...siderMenu,
    ...contact,
    ...chat,
    ...analytic,
    ...ecommerce,
    ...monitor,
    ...list,
    ...map,
    ...product,
    ...result,
    ...richTextEditor,
    ...theme,
    ...todo,
    ...user,
    ...ui,
    ...appHeader,
    ...saas,
    ...social,
  },
  antd,
  locale: 'de-DE',
  data,
};
export default DeLanguage;
