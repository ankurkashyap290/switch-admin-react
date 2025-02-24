import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  breadcrumbVisible: true,
  breadcrumbType: 'default',
  pageTitleClassName: 'pageTitleStyleSecond',
  fixedHeader: true,
  fixedFooter: false,
  themeColor: true,
  emailLayout: 'default',
  chatLayout: 'default',
  todoLayout: 'default',
});

export function themeReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_BREADCRUMB_TYPE: {
      return state.set('breadcrumbType', action.value);
    }
    case actions.CHANGE_THEME_MANAGER_FIELD: {
      const fieldName = action.payload.fieldName;
      return state.set(fieldName, action.payload.value);
    }
    default: {
      return state;
    }
  }
}
