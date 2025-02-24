import { isUrl } from '../utils';
import { validateRoles } from '../utils/tokenFunctions';

const AppMenu = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    authority: ['admin', 'guest', 'moderator'],
    children: [
      {
        id: 'analytics',
        name: 'Analytics',
        icon: 'bar-chart',
        path: 'analytics',
      },
      {
        id: 'ecommerce',
        name: 'Ecommerce',
        icon: 'shopping-cart',
        path: 'ecommerce',
      },
      {
        id: 'saas',
        name: 'Saas',
        icon: 'cloud-server',
        path: 'saas',
      },
      {
        id: 'monitor',
        name: 'Monitor',
        icon: 'monitor',
        path: 'monitor',
      },
      {
        id: 'social',
        name: 'Social Media',
        icon: 'facebook',
        path: 'social',
      },
    ],
  },
  {
    id: 'app',
    name: 'App',
    icon: 'appstore',
    path: 'app',
    children: [
      {
        id: 'contacts',
        name: 'Contacts CRUD App',
        icon: 'contacts',
        path: 'contacts',
        authority: ['guest', 'admin'],
      },
      {
        id: 'products',
        name: 'Products CRUD App',
        icon: 'gift',
        path: 'products',
        authority: 'admin',
      },
      {
        id: 'email',
        name: 'Email',
        icon: 'mail',
        path: 'email',
        authority: 'admin',
      },
      {
        id: 'chat',
        name: 'Chat',
        icon: 'message',
        path: 'chats',
        authority: 'admin',
      },
      {
        id: 'todo',
        name: 'ToDo',
        icon: 'database',
        path: 'todos',
        authority: 'admin',
      },
    ],
  },
  {
    id: 'typography',
    name: 'Typography',
    icon: 'form',
    path: 'typography',
    authority: 'admin',
  },
  {
    id: 'maps',
    name: 'Maps',
    icon: 'environment-o',
    path: 'maps',
    authority: 'admin',
    children: [
      {
        id: 'styledInfobox',
        name: 'Styled Infobox',
        icon: 'info-circle',
        path: 'styled-infobox',
      },
      {
        id: 'markerClusterer',
        name: 'Marker Clusterer',
        icon: 'cluster',
        path: 'marker-clusterer',
      },
      {
        id: 'directionsRenderer',
        name: 'Directions Renderer',
        icon: 'forward',
        path: 'directions-renderer',
      },
      {
        id: 'searchBox',
        name: 'SearchBox',
        icon: 'search',
        path: 'searchbox',
      },
      {
        id: 'streetViewPanorama',
        name: 'Street View Panorama',
        icon: 'environment',
        path: 'street-view-panorama',
      },
    ],
  },
  {
    id: 'charts',
    name: 'Charts',
    icon: 'area-chart',
    path: 'charts',
    authority: 'admin',
    children: [
      {
        id: 'recharts',
        name: 'Recharts',
        icon: 'pie-chart',
        path: 'recharts',
      },
      {
        id: 'googleCharts',
        name: 'Google Charts',
        icon: 'line-chart',
        path: 'google-charts',
      },
    ],
  },
  {
    id: 'appStore',
    name: 'Icons',
    icon: 'appstore-o',
    path: 'icons',
    authority: 'admin',
  },
  {
    id: 'calendar',
    name: 'Calendar',
    icon: 'calendar',
    path: 'calendar',
    authority: 'admin',
  },

  {
    id: 'lists',
    name: 'Lists',
    icon: 'bars',
    path: 'list',
    authority: 'admin',
    children: [
      {
        id: 'basicList',
        name: 'Basic List',
        icon: 'hdd',
        path: 'basic-list',
      },
      {
        id: 'gridListResponsive',
        name: 'Grid List Responsive',
        icon: 'project',
        path: 'grid-list',
      },
      {
        id: 'draggableList',
        name: 'Draggable List',
        icon: 'project',
        path: 'draggable-list',
      },
    ],
  },
  {
    id: 'tables',
    name: 'Tables',
    icon: 'table',
    path: 'table',
    authority: 'admin',
    children: [
      // {
      //   name: "Basic table with actions",
      //   path: "basic-table"
      // },
      // {
      //   id: 'tableUsedApp',
      //   name: 'Table used in app',
      //   icon: 'container',
      //   path: 'table-list',
      // },
      {
        id: 'antTables',
        name: 'Ant Tables',
        icon: 'database',
        path: 'ant-tables',
      },
    ],
  },
  {
    id: 'form',
    name: 'Forms',
    icon: 'form',
    path: 'components-forms',
    authority: 'admin',
    children: [
      {
        id: 'formLoginVertical',
        name: 'Login Vertical',
        icon: 'align-center',
        path: 'form/login',
      },
      {
        id: 'formLoginHorizontal',
        name: 'Login Horizontal',
        icon: 'lock',
        path: 'form/login-horizontal',
      },

      {
        id: 'formRegistrationValidations',
        name: 'Registration Validations',
        icon: 'user',
        path: 'form/registration',
      },
      {
        id: 'formAdvancedSearchForm',
        name: 'Advanced Search Form',
        icon: 'file-search',
        path: 'form/advanced-search-form',
      },

      // {
      //   name: "Form Validations",
      //   icon: "",
      //   path: "form-validation",
      //   children: [
      //     { name: "Validate On Typing", path: "valid-on-type" },
      //     { name: "Validate On Submit", path: "valid-on-submit" },
      //     { name: "Validate On Others", path: "valid-on-other" },
      //     { name: "Validate Status", path: "valid-status" },
      //     { name: "Validate On Server / Ajax", path: "valid-on-server" }
      //   ]
      // },
      // { name: "Form Options", path: "form" }
    ],
  },
  {
    id: 'pages',
    name: 'P A G E S',
    icon: '',
    path: 'pages',
    disabled: true,
    authority: 'admin',
  },
  {
    id: 'userFlowPages',
    name: 'User Flow Pages',
    icon: 'user',
    path: 'user',
    authority: 'admin',
    children: [
      {
        id: 'userLogin',
        name: 'Login',
        icon: 'login',
        path: 'login',
      },
      {
        id: 'userRegister',
        name: 'Register',
        icon: 'user-add',
        path: 'register',
      },
      {
        id: 'userForgotPassword',
        name: 'Forgot',
        icon: 'reload',
        path: 'forgot',
      },
      {
        id: 'userResetPassword',
        name: 'Reset',
        icon: 'file-done',
        path: 'reset',
      },
      {
        id: 'userLockScreen',
        name: 'Lock',
        icon: 'lock',
        path: 'lock',
      },
    ],
  },
  {
    id: 'outcomePages',
    name: 'Outcome Pages',
    icon: 'question-circle',
    path: 'result',
    authority: 'admin',
    children: [
      {
        id: 'outcomePagesSuccess',
        name: 'Success',
        icon: 'check-circle',
        path: 'success',
      },
      {
        id: 'outcomePagesFail',
        name: 'Fail',
        icon: 'exclamation-circle',
        path: 'fail',
      },
    ],
  },
  {
    id: 'warningPages',
    name: 'Warning Pages',
    icon: 'warning',
    path: 'exception',
    authority: 'admin',
    children: [
      {
        id: 'warningPages403',
        name: '403',
        icon: 'stop',
        path: '403',
      },
      {
        id: 'warningPages404',
        name: '404',
        icon: 'file-exclamation',
        path: '404',
      },
      {
        id: 'warningPages500',
        name: '500',
        icon: 'api',
        path: '500',
      },
    ],
  },
  {
    id: 'emptyPage',
    name: 'Empty Page',
    icon: 'exclamation',
    path: 'empty',
    authority: 'admin',
  },

  {
    id: 'components',
    name: 'C O M P O N E N T S',
    icon: '',
    path: 'components',
    disabled: true,
    authority: 'admin',
  },

  {
    id: 'formUiBasic',
    name: 'Form UI Basic',
    path: 'components-form-ui',
    icon: 'form',
    authority: 'admin',
    children: [
      {
        id: 'formUiBasicButtons',
        name: 'Buttons',
        path: 'buttons',
        icon: 'poweroff',
        children: [
          {
            id: 'buttonsBasic',
            name: 'Basic',
            path: 'basic',
          },
          {
            id: 'buttonLoadingIndicator',
            name: 'Loading Indicator',
            path: 'loading-indication',
          },
          {
            id: 'buttonsIcon',
            name: 'Icons',
            path: 'icon',
          },
          {
            id: 'buttonsGroups',
            name: 'Buttons Groups',
            path: 'groups',
          },
        ],
      },
      {
        id: 'formUiBasicInput',
        name: 'Input',
        path: 'input',
        icon: 'edit',

        children: [
          {
            id: 'inputBasic',
            name: 'Basic',
            path: 'basic',
          },
          {
            id: 'inputTextArea',
            name: 'Text Area',
            path: 'textarea',
          }, // rich editor
        ],
      }, // numaric

      {
        id: 'formUiBasicCheckBox',
        name: 'CheckBox',
        icon: 'check-square',
        path: 'checkbox',
      },
      {
        id: 'formUiBasicRadio',
        name: 'Radio',
        icon: 'ant-design',
        path: 'radio',
      },
      {
        id: 'formUiBasicSelect',
        name: 'Select',
        path: 'select',
        icon: 'down-square',
        children: [
          {
            id: 'selectBasic',
            name: 'Basic',
            path: 'basic-usage',
          },
          {
            id: 'selectSearch',
            name: 'Search',
            path: 'select-with-search-field',
          },
          {
            id: 'selectTag',
            name: 'Tags',
            path: 'tags',
          },
          {
            id: 'multiSelect',
            name: 'Multi Select',
            path: 'multiple-selection',
          },
          // { name: "Ajax Select", path: "ajax-select" }
        ],
      },
      // { name: "Sizes", path: "sizes" },
      // { name: "All togather", path: "all-togather" }
    ],
  },
  {
    id: 'formUiAdvanced',
    name: 'Form UI Advanced',
    path: 'components-form-ui-advanced',
    icon: 'form',
    authority: 'admin',
    children: [
      {
        id: 'formUiAdvancedDatePicker',
        name: 'Date & Time',
        path: 'datepicker',
        icon: 'calendar',
        children: [
          {
            id: 'datePickerBasic',
            name: 'Basic',
            path: 'basic',
          },
          {
            id: 'datePickerRangePicker',
            name: 'Range Picker Custom',
            path: 'customized-rangepicker',
          },
          {
            id: 'datePickerBasicTime',
            name: 'Choose Time',
            path: 'choose-time',
          },
          {
            id: 'datePickerBasicRanges',
            name: 'Presetted Ranges',
            path: 'presetted-ranges',
          },
        ],
      },
      {
        id: 'formUiAdvancedTime',
        name: 'Time',
        icon: 'calendar',
        path: 'timepicker',

        children: [
          {
            id: 'timePickerBasic',
            name: 'Basic',
            path: 'basic',
          },
        ],
      },

      {
        id: 'formUiAdvancedSlider',
        name: 'Slider',
        path: 'slider',
        icon: 'line',
        children: [
          {
            id: 'sliderBasic',
            name: 'Basic',
            path: 'basic',
          },
        ],
      },
      {
        id: 'formUiAdvancedSwitch',
        name: 'Switch',
        path: 'switch',
        icon: 'switcher',
        children: [
          {
            id: 'switchBasic',
            name: 'Basic',
            path: 'basic',
          },
          {
            id: 'switchWithText',
            name: 'With Text & Icon',
            path: 'text-&-icon',
          },
        ],
      },

      {
        id: 'formUiAdvancedAutoComplete',
        name: 'Auto Complete',
        icon: 'sort-descending',
        path: 'autocomplete/basic-usage',
      },
      // { name: "Ajax Select", path: "ajaxselect" },
      // { name: "Sizes", path: "sizes" },
      // { name: "All togather", path: "all-togather" },
      {
        id: 'formUiAdvancedRichTextEditor',
        name: 'Richtext Editor',
        icon: 'form',
        path: 'richtext/simple-editor-to-html',
      },
      {
        id: 'formUiAdvancedUpload',
        name: 'Upload',
        path: 'upload',
        icon: 'upload',
        children: [
          {
            id: 'upload',
            name: 'Upload',
            path: 'upload-by-clicking',
          },
          {
            id: 'uploadListStyle',
            name: 'Pictures with list styles',
            path: 'pictures-with-list-styles',
          },
          {
            id: 'uploadDrag&Drop',
            name: 'Drag & Drop',
            path: 'drag-&-drop',
          },
        ],
      },
      {
        id: 'formUiAdvancedTransfer',
        name: 'Transfer',
        icon: 'swap',
        path: 'transfer/basic',
      },
      {
        id: 'formUiAdvancedRating',
        name: 'Rating',
        icon: 'edit',
        path: 'rate/basic',
      },
      {
        id: 'formUiAdvancedSelectTree',
        name: 'Select Tree',
        icon: 'colum-height',
        path: 'treeselect/basic',
      },
      {
        id: 'formUiAdvancedTree',
        name: 'Tree',
        icon: 'upload',
        path: 'tree/basic',
      },
      // { name: "Text Counter", path: "text-count" }

      // { name: "Basic", path: "basic" },
    ],
  },
  {
    id: 'Menu&navigation',
    name: 'Menus & Navigation',
    icon: 'menu-unfold',
    path: 'components-menu',
    authority: 'admin',
    children: [
      {
        id: 'menus',
        name: 'Menus',
        icon: 'menu-unfold',
        path: 'menu',
        children: [
          {
            id: 'menuTop&SubMenu',
            name: 'Top Menu with SubMenu',
            path: 'top-navigation',
          },
          {
            id: 'sideMenu',
            name: 'Side Menu ',
            path: 'collapsed-inline-menu',
          },
          {
            id: 'menuType',
            name: 'Menu Type & Theme',
            path: 'switch-the-menu-type',
          },
        ],
      },
      {
        id: 'menuDropDown',
        name: 'DropDown',
        icon: 'down-square',
        path: 'dropDown/basic',
      },
      {
        id: 'menuPagination',
        name: 'Pagination',
        icon: 'play-square',
        path: 'pagination/basic',
      },
      {
        id: 'menuAnchor',
        name: 'Anchor',
        icon: 'pushpin',
        path: 'anchor/basic',
      },
      {
        id: 'menuBreadcrumb',
        name: 'Breadcrumb',
        icon: 'shrink',
        path: 'breadcrumb/basic',
      },
    ],
  },
  {
    id: 'displayComponents',
    name: 'Display Components',
    icon: 'layout',
    path: 'components-display',
    authority: 'admin',
    children: [
      {
        id: 'displayComponentsAvatar',
        name: 'Avatar',
        icon: 'user',
        path: 'avatar/basic',
      },
      {
        id: 'displayComponentsCard',
        name: 'Card',
        icon: 'snippets',
        path: 'card/basic',
      },
      {
        id: 'displayComponentsCarousel',
        name: 'Carousel',
        icon: 'border-inner',
        path: 'carousel/basic',
      },
      {
        id: 'displayComponentsCascader',
        name: 'Cascader',
        icon: 'fullscreen',
        path: 'cascader/basic',
      },
      {
        id: 'displayComponentsCollapse',
        name: 'Collapse',
        icon: 'fullscreen-exit',
        path: 'collapse/basic',
      },
      {
        id: 'displayComponentsCalendar',
        name: 'Calendar',
        icon: 'calendar',
        path: 'calendar',
        children: [
          {
            id: 'calendarBasic',
            name: 'Basic',
            icon: 'edit',
            path: 'basic',
          },
          {
            id: 'calendarNotices',
            name: 'Notices on Days',
            icon: 'edit',
            path: 'notice-calendar',
          },
        ],
      },
      {
        id: 'displayComponentsModel',
        name: 'Modal',
        icon: 'file-word',
        path: 'modal/basic',
      },
      {
        id: 'displayComponentsStep',
        name: 'Steps',
        icon: 'ellipsis',
        path: 'steps/basic',
      },
      {
        id: 'displayComponentsTabs',
        name: 'Tabs',
        icon: 'schedule',
        path: 'tabs/basic',
      },
      {
        id: 'displayComponentsTimeline',
        name: 'Timeline',
        icon: 'dash',
        path: 'timeline/basic',
      },
    ],
  },

  {
    id: 'feedbackComponents',
    name: 'Feedback Components',
    icon: 'notification',
    path: 'components-feedback',
    authority: 'admin',
    children: [
      {
        id: 'feedbackComponentsAlert',
        name: 'Alert',
        icon: 'warning',
        path: 'alert/basic',
      },
      {
        id: 'feedbackComponentsNotification',
        name: 'Notification',
        icon: 'info',
        path: 'notification/basic',
      },
      {
        id: 'feedbackComponentsMessage',
        name: 'Message',
        icon: 'message',
        path: 'message/normal-prompt',
      },
      {
        id: 'feedbackComponentsName',
        name: 'Tag',
        icon: 'tag',
        path: 'tag/basic',
      },
      {
        id: 'feedbackComponentsBadge',
        name: 'Badge',
        icon: 'man',
        path: 'badge/basic',
      },
      {
        id: 'feedbackComponentsSpin',
        name: 'Spin',
        icon: 'loading',
        path: 'spin/basic',
      },
      {
        id: 'feedbackComponentsPopConfirm',
        name: 'PopConfirm',
        icon: 'exclamation-circle',
        path: 'popconfirm/basic',
      },
      {
        id: 'feedbackComponentsTooltip',
        name: 'Tooltip',
        icon: 'wechat',
        path: 'tooltip/basic',
      },
      {
        id: 'feedbackComponentsProgress',
        name: 'Progress',
        path: 'progress',
        icon: 'stock',
        children: [
          {
            id: 'feedbackComponentsProgressBar',
            name: 'Progress bar',
            icon: 'rise',
            path: 'progress-bar',
          },
          {
            id: 'feedbackComponentsCircular',
            name: 'Circular progress bar',
            icon: 'loading-3-quarters',
            path: 'circular-progress-bar',
          },
          {
            id: 'feedbackComponentsDynamic',
            name: 'Dynamic',
            icon: 'reload',
            path: 'dynamic-circular',
          },
        ],
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data
    .map(item => {
      let { path } = item;
      const authority = item.authority || parentAuthority;
      if (authority && authority.length && !validateRoles(authority)) {
        return null; // not authorized
      }
      if (!isUrl(path)) {
        path = parentPath + item.path;
      }
      const result = {
        ...item,
        path,
        authority,
      };
      if (item.children) {
        result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
      }
      return result;
    })
    .filter(item => item != null);
}

export const getAppMenu = () => formatter(AppMenu);

export default AppMenu;
