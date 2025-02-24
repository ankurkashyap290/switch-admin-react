import pathToRegexp from 'path-to-regexp';
import AsyncComponent from '../utils/AsyncComponent';
import { getAppMenu } from './app.menu.config';

function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach(item => {
    if (item.children) {
      keys[item.path] = {
        name: item.name,
        authority: item.authority || null,
        icon: item.icon || null,
      };
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = {
        name: item.name,
        authority: item.authority || null,
        icon: item.icon || null,
      };
    }
  });
  return keys;
}

const genRouterConfig = () => {
  // --routerConfig
  const routerConfig = {
    '/': {
      component: AsyncComponent({
        name: 'AppLayout',
        resolve: () => import('../layouts/AppLayout'),
      }),
    },
    '/dashboard': {
      component: AsyncComponent({
        name: 'Dashboard',
        resolve: () => import('../routes/Dashboard'),
      }),
    },
    '/dashboard/analytics': {
      component: AsyncComponent({
        name: 'Dashboard',
        resolve: () => import('../routes/Dashboard/analytics'),
      }),
    },
    '/dashboard/ecommerce': {
      component: AsyncComponent({
        name: 'Dashboard',
        resolve: () => import('../routes/Dashboard/ecommerce'),
      }),
    },
    '/dashboard/saas': {
      component: AsyncComponent({
        name: 'Dashboard',
        resolve: () => import('../routes/Dashboard/saas'),
      }),
    },
    '/dashboard/monitor': {
      component: AsyncComponent({
        name: 'Dashboard',
        resolve: () => import('../routes/Dashboard/monitor'),
      }),
    },
    '/dashboard/social': {
      component: AsyncComponent({
        name: 'Dashboard',
        resolve: () => import('../routes/Dashboard/socialMedia'),
      }),
    },
    '/app/contacts': {
      component: AsyncComponent({
        name: 'Contacts',
        resolve: () => import('../routes/App/Contacts'),
      }),
    },

    '/app/contacts/list': {
      component: AsyncComponent({
        name: 'Contacts',
        resolve: () => import('../routes/App/Contacts/ContactList'),
      }),
    },

    '/app/contacts/view/:id': {
      component: AsyncComponent({
        name: 'Contacts',
        resolve: () => import('../routes/App/Contacts/ContactView'),
      }),
    },
    '/app/products': {
      component: AsyncComponent({
        name: 'Products',
        resolve: () => import('../routes/App/Products'),
      }),
    },
    '/app/products/list': {
      component: AsyncComponent({
        name: 'Products',
        resolve: () => import('../routes/App/Products/ProductList'),
      }),
    },
    '/app/products/add': {
      component: AsyncComponent({
        name: 'Products',
        resolve: () => import('../routes/App/Products/Add'),
      }),
    },
    '/app/products/edit/:id': {
      component: AsyncComponent({
        name: 'Products',
        resolve: () => import('../routes/App/Products/Edit'),
      }),
    },
    '/app/products/view/:id': {
      component: AsyncComponent({
        name: 'Products',
        resolve: () => import('../routes/App/Products/View'),
      }),
    },
    '/typography': {
      component: AsyncComponent({
        name: 'Typography',
        resolve: () => import('../routes/Typography'),
      }),
    },
    '/app/email': {
      component: AsyncComponent({
        name: 'Email',
        resolve: () => import('../routes/App/Email'),
      }),
    },
    '/app/chats': {
      component: AsyncComponent({
        name: 'Chats',
        resolve: () => import('../routes/App/Chats'),
      }),
    },
    '/app/todos': {
      component: AsyncComponent({
        name: 'ToDo',
        resolve: () => import('../routes/App/Todos'),
      }),
    },
    '/maps': {
      component: AsyncComponent({
        name: 'Maps',
        resolve: () => import('../routes/Maps'),
      }),
    },
    '/maps/': {
      component: AsyncComponent({
        name: 'Maps',
        resolve: () => import('../routes/Maps'),
      }),
    },
    '/charts/recharts': {
      component: AsyncComponent({
        name: 'Recharts',
        resolve: () => import('../routes/Charts/Recharts'),
      }),
    },
    '/charts/recharts/': {
      component: AsyncComponent({
        name: 'Recharts',
        resolve: () => import('../routes/Charts/Recharts'),
      }),
    },
    '/charts/google-charts': {
      component: AsyncComponent({
        name: 'Recharts',
        resolve: () => import('../routes/Charts/GoogleCharts'),
      }),
    },
    '/charts/google-charts/': {
      component: AsyncComponent({
        name: 'Recharts',
        resolve: () => import('../routes/Charts/GoogleCharts'),
      }),
    },
    '/icons': {
      component: AsyncComponent({
        name: 'Recharts',
        resolve: () => import('../routes/Icons'),
      }),
    },
    '/icons/': {
      component: AsyncComponent({
        name: 'Icons',
        resolve: () => import('../routes/Icons'),
      }),
    },
    '/calendar': {
      component: AsyncComponent({
        name: 'Calendar',
        resolve: () => import('../routes/Calendar'),
      }),
    },
    '/calendar/': {
      component: AsyncComponent({
        name: 'Calendar',
        resolve: () => import('../routes/Calendar'),
      }),
    },
    '/list/basic-list': {
      component: AsyncComponent({
        name: 'List',
        resolve: () => import('../routes/List/BasicList'),
      }),
    },
    '/list/grid-list': {
      component: AsyncComponent({
        name: 'List',
        resolve: () => import('../routes/List/GridList'),
      }),
    },
    '/list/draggable-list': {
      component: AsyncComponent({
        name: 'List',
        resolve: () => import('../routes/List/DraggableList'),
      }),
    },
    // '/table/table-list': {
    //   component: AsyncComponent({
    //     name: 'Contacts',
    //     resolve: () => import('../routes/App/Contacts/ContactList'),
    //   }),
    // },
    '/table/ant-tables': {
      component: AsyncComponent({
        name: 'List',
        resolve: () => import('../routes/List/TableListAllOptions'),
      }),
    },
    '/components-forms/form': {
      component: AsyncComponent({
        name: 'UiForm',
        resolve: () => import('../routes/UI/UiForm/UiForm'),
      }),
    },
    '/components-forms/form/': {
      component: AsyncComponent({
        name: 'UiForm',
        resolve: () => import('../routes/UI/UiForm/UiForm'),
      }),
    },
    '/result/success': {
      component: AsyncComponent({
        name: 'Result',
        resolve: () => import('../routes/Result/Success'),
      }),
    },
    '/result/fail': {
      component: AsyncComponent({
        name: 'Result',
        resolve: () => import('../routes/Result/Error'),
      }),
    },
    '/exception/403': {
      component: AsyncComponent({
        name: 'Exception',
        resolve: () => import('../routes/Exception/403'),
      }),
    },
    '/exception/404': {
      component: AsyncComponent({
        name: 'Exception',
        resolve: () => import('../routes/Exception/404'),
      }),
    },
    '/exception/500': {
      component: AsyncComponent({
        name: 'Exception',
        resolve: () => import('../routes/Exception/500'),
      }),
    },
    '/empty': {
      component: AsyncComponent({
        name: 'Empty',
        resolve: () => import('../routes/Empty'),
      }),
    },
    '/user': {
      component: AsyncComponent({
        name: 'UserLayout',
        resolve: () => import('../layouts/UserLayout'),
      }),
    },
    '/user/login': {
      component: AsyncComponent({
        name: 'Login',
        resolve: () => import('../routes/User/Login'),
      }),
    },
    '/user/register': {
      component: AsyncComponent({
        name: 'Register',
        resolve: () => import('../routes/User/Register'),
      }),
    },
    '/user/forgot': {
      component: AsyncComponent({
        name: 'Forgot',
        resolve: () => import('../routes/User/Forgot'),
      }),
    },
    '/user/reset': {
      component: AsyncComponent({
        name: 'Reset',
        resolve: () => import('../routes/User/Reset'),
      }),
    },
    '/user/lock': {
      component: AsyncComponent({
        name: 'Lock',
        resolve: () => import('../routes/User/Lock'),
      }),
    },
    '/user1': {
      component: AsyncComponent({
        name: 'UserLayout1',
        resolve: () => import('../layouts/UserLayout1'),
      }),
    },
    '/user1/login1': {
      component: AsyncComponent({
        name: 'Login1',
        resolve: () => import('../routes/User/Login'),
      }),
    },
    '/user1/register1': {
      component: AsyncComponent({
        name: 'Register1',
        resolve: () => import('../routes/User/Register'),
      }),
    },
    '/user1/forgot1': {
      component: AsyncComponent({
        name: 'Forgot1',
        resolve: () => import('../routes/User/Forgot'),
      }),
    },
    '/user2': {
      component: AsyncComponent({
        name: 'UserLayout2',
        resolve: () => import('../layouts/UserLayout2'),
      }),
    },
    '/user2/login2': {
      component: AsyncComponent({
        name: 'Login2',
        resolve: () => import('../routes/User/Login'),
      }),
    },
    '/user2/register2': {
      component: AsyncComponent({
        name: 'Register2',
        resolve: () => import('../routes/User/Register'),
      }),
    },
    '/user2/forgot2': {
      component: AsyncComponent({
        name: 'Forgot2',
        resolve: () => import('../routes/User/Forgot'),
      }),
    },
    '/components-form-ui/buttons': {
      component: AsyncComponent({
        name: 'UiButtons',
        resolve: () => import('../routes/UI/UiButtons/UiButtons'),
      }),
    },
    // extra routes to match all buttons/* routes
    '/components-form-ui/buttons/': {
      component: AsyncComponent({
        name: 'UiButtons',
        resolve: () => import('../routes/UI/UiButtons/UiButtons'),
      }),
    },
    '/components-form-ui/input': {
      component: AsyncComponent({
        name: 'UiInput',
        resolve: () => import('../routes/UI/UiInput/UiInput'),
      }),
    }, // UiInput

    '/components-form-ui/input/': {
      component: AsyncComponent({
        name: 'UiInput',
        resolve: () => import('../routes/UI/UiInput/UiInput'),
      }),
    }, // UiInput

    '/components-form-ui/checkbox': {
      component: AsyncComponent({
        name: 'UiCheckBox',
        resolve: () => import('../routes/UI/UiCheckBox/UiCheckBox'),
      }),
    }, // UiCheckBox
    '/components-form-ui/checkbox/': {
      component: AsyncComponent({
        name: 'UiCheckBox',
        resolve: () => import('../routes/UI/UiCheckBox/UiCheckBox'),
      }),
    }, // UiCheckBox

    '/components-form-ui/radio': {
      component: AsyncComponent({
        name: 'UiRadio',
        resolve: () => import('../routes/UI/UiRadio/UiRadio'),
      }),
    }, // UiRadio
    '/components-form-ui/radio/': {
      component: AsyncComponent({
        name: 'UiRadio',
        resolve: () => import('../routes/UI/UiRadio/UiRadio'),
      }),
    }, // UiRadio

    '/components-form-ui/select': {
      component: AsyncComponent({
        name: 'UiSelect',
        resolve: () => import('../routes/UI/UiSelect/UiSelect'),
      }),
    }, // UiSelect
    '/components-form-ui/select/': {
      component: AsyncComponent({
        name: 'UiSelect',
        resolve: () => import('../routes/UI/UiSelect/UiSelect'),
      }),
    }, // UiSelect

    '/components-form-ui-advanced/datepicker': {
      component: AsyncComponent({
        name: 'UiDatePicker',
        resolve: () => import('../routes/UI/UiDatePicker/UiDatePicker'),
      }),
    }, // UiDatePicker

    '/components-form-ui-advanced/datepicker/': {
      component: AsyncComponent({
        name: 'UiDatePicker',
        resolve: () => import('../routes/UI/UiDatePicker/UiDatePicker'),
      }),
    }, // UiDatePicker

    '/components-form-ui-advanced/timepicker': {
      component: AsyncComponent({
        name: 'UiTimePicker',
        resolve: () => import('../routes/UI/UiTimePicker/UiTimePicker'),
      }),
    }, // UiTimePicker
    '/components-form-ui-advanced/timepicker/': {
      component: AsyncComponent({
        name: 'UiTimePicker',
        resolve: () => import('../routes/UI/UiTimePicker/UiTimePicker'),
      }),
    }, // UiTimePicker

    '/components-form-ui-advanced/slider': {
      component: AsyncComponent({
        name: 'UiSlider',
        resolve: () => import('../routes/UI/UiSlider/UiSlider'),
      }),
    }, // UiSlider
    '/components-form-ui-advanced/slider/': {
      component: AsyncComponent({
        name: 'UiSlider',
        resolve: () => import('../routes/UI/UiSlider/UiSlider'),
      }),
    }, // UiSlider

    '/components-form-ui-advanced/switch': {
      component: AsyncComponent({
        name: 'UiSwitch',
        resolve: () => import('../routes/UI/UiSwitch/UiSwitch'),
      }),
    }, // UiSwitch
    '/components-form-ui-advanced/switch/': {
      component: AsyncComponent({
        name: 'UiSwitch',
        resolve: () => import('../routes/UI/UiSwitch/UiSwitch'),
      }),
    }, // UiSwitch

    '/components-form-ui-advanced/autocomplete': {
      component: AsyncComponent({
        name: 'UiAutoComplete',
        resolve: () => import('../routes/UI/UiAutoComplete/UiAutoComplete'),
      }),
    },
    '/components-form-ui-advanced/autocomplete/': {
      component: AsyncComponent({
        name: 'UiAutoComplete',
        resolve: () => import('../routes/UI/UiAutoComplete/UiAutoComplete'),
      }),
    },

    '/components-form-ui-advanced/richtext': {
      component: AsyncComponent({
        name: 'RichTextEditor',
        resolve: () => import('../routes/RichTextEditor'),
      }),
    },
    '/components-form-ui-advanced/richtext/': {
      component: AsyncComponent({
        name: 'RichTextEditor',
        resolve: () => import('../routes/RichTextEditor'),
      }),
    },

    '/components-form-ui-advanced/upload': {
      component: AsyncComponent({
        name: 'UiUpload',
        resolve: () => import('../routes/UI/UiUpload/UiUpload'),
      }),
    }, // UiUpload '
    '/components-form-ui-advanced/upload/': {
      component: AsyncComponent({
        name: 'UiUpload',
        resolve: () => import('../routes/UI/UiUpload/UiUpload'),
      }),
    }, // UiUpload '

    '/components-form-ui-advanced/transfer': {
      component: AsyncComponent({
        name: 'UiTransfer',
        resolve: () => import('../routes/UI/UiTransfer/UiTransfer'),
      }),
    }, // UiTransfer
    '/components-form-ui-advanced/transfer/': {
      component: AsyncComponent({
        name: 'UiTransfer',
        resolve: () => import('../routes/UI/UiTransfer/UiTransfer'),
      }),
    }, // UiTransfer

    '/components-form-ui-advanced/rate': {
      component: AsyncComponent({
        name: 'UiRate',
        resolve: () => import('../routes/UI/UiRate/UiRate'),
      }),
    }, // UiRate
    '/components-form-ui-advanced/rate/': {
      component: AsyncComponent({
        name: 'UiRate',
        resolve: () => import('../routes/UI/UiRate/UiRate'),
      }),
    }, // UiRate

    '/components-form-ui-advanced/treeselect': {
      component: AsyncComponent({
        name: 'UiTreeSelect',
        resolve: () => import('../routes/UI/UiTreeSelect/UiTreeSelect'),
      }),
    }, // UiTreeSelect
    '/components-form-ui-advanced/treeselect/': {
      component: AsyncComponent({
        name: 'UiTreeSelect',
        resolve: () => import('../routes/UI/UiTreeSelect/UiTreeSelect'),
      }),
    }, // UiTreeSelect

    '/components-form-ui-advanced/tree': {
      component: AsyncComponent({
        name: 'UiTree',
        resolve: () => import('../routes/UI/UiTree/UiTree'),
      }),
    }, // UiTree
    '/components-form-ui-advanced/tree/': {
      component: AsyncComponent({
        name: 'UiTree',
        resolve: () => import('../routes/UI/UiTree/UiTree'),
      }),
    }, // UiTree

    '/components-menu/menu': {
      component: AsyncComponent({
        name: 'UiMenu',
        resolve: () => import('../routes/UI/UiMenu/UiMenu'),
      }),
    }, // UiMenu
    '/components-menu/menu/': {
      component: AsyncComponent({
        name: 'UiMenu',
        resolve: () => import('../routes/UI/UiMenu/UiMenu'),
      }),
    }, // UiMenu

    '/components-menu/dropdown': {
      component: AsyncComponent({
        name: 'UiDropDown',
        resolve: () => import('../routes/UI/UiDropDown/UiDropDown'),
      }),
    }, // UiDropDown

    '/components-menu/dropdown/': {
      component: AsyncComponent({
        name: 'UiDropDown',
        resolve: () => import('../routes/UI/UiDropDown/UiDropDown'),
      }),
    }, // UiDropDown

    '/components-menu/pagination': {
      component: AsyncComponent({
        name: 'UiPagination',
        resolve: () => import('../routes/UI/UiPagination/UiPagination'),
      }),
    }, // UiPagination
    '/components-menu/pagination/': {
      component: AsyncComponent({
        name: 'UiPagination',
        resolve: () => import('../routes/UI/UiPagination/UiPagination'),
      }),
    }, // UiPagination

    '/components-menu/anchor': {
      component: AsyncComponent({
        name: 'UiAnchor',
        resolve: () => import('../routes/UI/UiAnchor/UiAnchor'),
      }),
    },
    '/components-menu/anchor/': {
      component: AsyncComponent({
        name: 'UiAnchor',
        resolve: () => import('../routes/UI/UiAnchor/UiAnchor'),
      }),
    },

    '/components-menu/breadcrumb': {
      component: AsyncComponent({
        name: 'UiBreadcrumb',
        resolve: () => import('../routes/UI/UiBreadcrumb/UiBreadcrumb'),
      }),
    },
    '/components-menu/breadcrumb/': {
      component: AsyncComponent({
        name: 'UiBreadcrumb',
        resolve: () => import('../routes/UI/UiBreadcrumb/UiBreadcrumb'),
      }),
    },

    '/components-display/avatar': {
      component: AsyncComponent({
        name: 'UiAvatar',
        resolve: () => import('../routes/UI/UiAvatar/UiAvatar'),
      }),
    },

    '/components-display/avatar/': {
      component: AsyncComponent({
        name: 'UiAvatar',
        resolve: () => import('../routes/UI/UiAvatar/UiAvatar'),
      }),
    },

    '/components-display/card': {
      component: AsyncComponent({
        name: 'UiCard',
        resolve: () => import('../routes/UI/UiCard/UiCard'),
      }),
    },
    '/components-display/card/': {
      component: AsyncComponent({
        name: 'UiCard',
        resolve: () => import('../routes/UI/UiCard/UiCard'),
      }),
    },

    '/components-display/carousel': {
      component: AsyncComponent({
        name: 'UiCarousel',
        resolve: () => import('../routes/UI/UiCarousel/UiCarousel'),
      }),
    }, // UiCarousel
    '/components-display/carousel/': {
      component: AsyncComponent({
        name: 'UiCarousel',
        resolve: () => import('../routes/UI/UiCarousel/UiCarousel'),
      }),
    }, // UiCarousel

    '/components-display/cascader': {
      component: AsyncComponent({
        name: 'UiCascader',
        resolve: () => import('../routes/UI/UiCascader/UiCascader'),
      }),
    }, // UiCascader
    '/components-display/cascader/': {
      component: AsyncComponent({
        name: 'UiCascader',
        resolve: () => import('../routes/UI/UiCascader/UiCascader'),
      }),
    }, // UiCascader
    '/components-display/modal': {
      component: AsyncComponent({
        name: 'UiModal',
        resolve: () => import('../routes/UI/UiModal/UiModal'),
      }),
    }, // UiModal
    '/components-display/modal/': {
      component: AsyncComponent({
        name: 'UiModal',
        resolve: () => import('../routes/UI/UiModal/UiModal'),
      }),
    }, // UiModal

    '/components-display/collapse': {
      component: AsyncComponent({
        name: 'UiCollapse',
        resolve: () => import('../routes/UI/UiCollapse/UiCollapse'),
      }),
    }, // UiCollapse
    '/components-display/collapse/': {
      component: AsyncComponent({
        name: 'UiCollapse',
        resolve: () => import('../routes/UI/UiCollapse/UiCollapse'),
      }),
    }, // UiCollapse

    '/components-display/calendar': {
      component: AsyncComponent({
        name: 'UiCalendar',
        resolve: () => import('../routes/UI/UiCalendar/UiCalendar'),
      }), // UiCalendar
    },
    '/components-display/calendar/': {
      component: AsyncComponent({
        name: 'UiCalendar',
        resolve: () => import('../routes/UI/UiCalendar/UiCalendar'),
      }), // UiCalendar
    },

    '/components-display/steps': {
      component: AsyncComponent({
        name: 'UiSteps',
        resolve: () => import('../routes/UI/UiSteps/UiSteps'),
      }),
    }, // UiSteps
    '/components-display/steps/': {
      component: AsyncComponent({
        name: 'UiSteps',
        resolve: () => import('../routes/UI/UiSteps/UiSteps'),
      }),
    }, // UiSteps

    '/components-display/tabs': {
      component: AsyncComponent({
        name: 'UiTabs',
        resolve: () => import('../routes/UI/UiTabs/UiTabs'),
      }),
    },
    '/components-display/tabs/': {
      component: AsyncComponent({
        name: 'UiTabs',
        resolve: () => import('../routes/UI/UiTabs/UiTabs'),
      }),
    },

    '/components-display/timeline': {
      component: AsyncComponent({
        name: 'UiTimeline',
        resolve: () => import('../routes/UI/UiTimeline/UiTimeline'),
      }),
    }, // UiTimeline
    '/components-display/timeline/': {
      component: AsyncComponent({
        name: 'UiTimeline',
        resolve: () => import('../routes/UI/UiTimeline/UiTimeline'),
      }),
    }, // UiTimeline

    '/components-feedback/alert': {
      component: AsyncComponent({
        name: 'UiAlert',
        resolve: () => import('../routes/UI/UiAlert/UiAlert'),
      }),
    },
    '/components-feedback/alert/': {
      component: AsyncComponent({
        name: 'UiAlert',
        resolve: () => import('../routes/UI/UiAlert/UiAlert'),
      }),
    },

    '/components-feedback/notification': {
      component: AsyncComponent({
        name: 'UiNotification',
        resolve: () => import('../routes/UI/UiNotification/UiNotification'),
      }),
    }, // UiNotification
    '/components-feedback/notification/': {
      component: AsyncComponent({
        name: 'UiNotification',
        resolve: () => import('../routes/UI/UiNotification/UiNotification'),
      }),
    }, // UiNotification

    '/components-feedback/message': {
      component: AsyncComponent({
        name: 'UiMessage',
        resolve: () => import('../routes/UI/UiMessage/UiMessage'),
      }),
    }, // UiMessage
    '/components-feedback/message/': {
      component: AsyncComponent({
        name: 'UiMessage',
        resolve: () => import('../routes/UI/UiMessage/UiMessage'),
      }),
    }, // UiMessage

    '/components-feedback/tag': {
      component: AsyncComponent({
        name: 'UiTag',
        resolve: () => import('../routes/UI/UiTag/UiTag'),
      }),
    }, // UiTag
    '/components-feedback/tag/': {
      component: AsyncComponent({
        name: 'UiTag',
        resolve: () => import('../routes/UI/UiTag/UiTag'),
      }),
    }, // UiTag

    '/components-feedback/badge': {
      component: AsyncComponent({
        name: 'UiBadge',
        resolve: () => import('../routes/UI/UiBadge/UiBadge'),
      }),
    },
    '/components-feedback/badge/': {
      component: AsyncComponent({
        name: 'UiBadge',
        resolve: () => import('../routes/UI/UiBadge/UiBadge'),
      }),
    },

    '/components-feedback/spin': {
      component: AsyncComponent({
        name: 'UiSpin',
        resolve: () => import('../routes/UI/UiSpin/UiSpin'),
      }),
    }, // UiSpin
    '/components-feedback/spin/': {
      component: AsyncComponent({
        name: 'UiSpin',
        resolve: () => import('../routes/UI/UiSpin/UiSpin'),
      }),
    }, // UiSpin

    '/components-feedback/popconfirm': {
      component: AsyncComponent({
        name: 'UiPopConfirm',
        resolve: () => import('../routes/UI/UiPopConfirm/UiPopConfirm'),
      }),
    }, // UiPopConfirm
    '/components-feedback/popconfirm/': {
      component: AsyncComponent({
        name: 'UiPopConfirm',
        resolve: () => import('../routes/UI/UiPopConfirm/UiPopConfirm'),
      }),
    }, // UiPopConfirm

    '/components-feedback/tooltip': {
      component: AsyncComponent({
        name: 'UiTooltip',
        resolve: () => import('../routes/UI/UiTooltip/UiTooltip'),
      }),
    }, // UiTooltip
    '/components-feedback/tooltip/': {
      component: AsyncComponent({
        name: 'UiTooltip',
        resolve: () => import('../routes/UI/UiTooltip/UiTooltip'),
      }),
    }, // UiTooltip

    '/components-feedback/progress': {
      component: AsyncComponent({
        name: 'UiProgress',
        resolve: () => import('../routes/UI/UiProgress/UiProgress'),
      }),
    }, // UiProgress
    '/components-feedback/progress/': {
      component: AsyncComponent({
        name: 'UiProgress',
        resolve: () => import('../routes/UI/UiProgress/UiProgress'),
      }),
    }, // UiProgress

    '/theme': {
      component: AsyncComponent({
        name: 'UiProgress',
        resolve: () => import('../components/ThemeManager'),
      }),
    },
  };
  // --routerConfig-->
  return routerConfig;
};

export const getRouterData = () => {
  const routerConfig = genRouterConfig();

  // Get name from ./menu.js or just set it in the router data.
  const menuData = getFlatMenuData(getAppMenu());
  // Route configuration data
  // eg. {name,authority ...routerConfig }
  const routerData = {};
  // The route matches the menu
  Object.keys(routerConfig).forEach(path => {
    // Regular match item name
    // eg.  router /user/:id === /user/chen
    const pathRegexp = pathToRegexp(path);
    const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
    let menuItem = {};
    // If menuKey is not empty
    if (menuKey) {
      menuItem = menuData[menuKey];
    }
    let router = routerConfig[path];
    let name = '';
    let id = '';
    if (router.name) {
      name = router.name;
      id = router.name.toLowerCase().replace(/ /gi, '_');
    }
    if (menuItem.name) {
      name = menuItem.name;
      id = menuItem.name.toLowerCase().replace(/ /gi, '_');
    }
    router = {
      ...router,
      name,
      authority: router.authority || menuItem.authority,
      icon: menuItem.icon || null,
      id,
    };

    routerData[path] = router;
  });
  return routerData;
};
