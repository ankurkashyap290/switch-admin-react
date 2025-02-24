import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  activities: {
    loading: true,
    list: [],
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  starredContacts: {
    loading: true,
    list: [],
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  salesChart: {
    loading: true,
    data: [],
  },
  revenueChart: {
    loading: true,
    data: [],
  },
  notices: {
    data: [],
    loading: true,
  },
});

export function globalReducer(state = initState, action) {
  switch (action.type) {
    case actions.ACTIVITIES_FETCH_LIST:
      return state.set('activities', action.response).set('loading', true);

    case actions.ACTIVITIES_FETCH_LIST_SUCCESS:
      return state.set('activities', action.response).set('loading', true);

    case actions.ACTIVITIES_FETCH_LIST_ERROR:
      return state.set('activities', action.response).set('loading', true);

    case actions.CONTACTS_FETCH_STARRED:
      return state.set('starredContacts', action.response).set('loading', true);

    case actions.CONTACTS_FETCH_STARRED_SUCCESS:
      return state
        .set('starredContacts', action.payload.list)
        .set('pagination', action.payload.pagination)
        .set('loading', false);

    case actions.CONTACTS_FETCH_STARRED_ERROR:
      return state.set('starredContacts', action.response).set('loading', false);

    case actions.CHARTS_FETCH_SALES:
      return {
        ...state,
        salesChart: { ...state.salesChart, loading: false },
      };
    case actions.CHARTS_FETCH_SALES_SUCCESS:
      return {
        ...state,
        salesChart: { ...action.payload, loading: false },
      };
    case actions.CHARTS_FETCH_SALES_ERROR:
      return {
        ...state,
        salesChart: { ...action.payload, loading: false },
      };
    case actions.CHARTS_FETCH_REVENUE:
      return {
        ...state,
        revenueChart: { ...state.revenueChart, loading: false },
      };
    case actions.CHARTS_FETCH_REVENUE_SUCCESS:
      return {
        ...state,
        revenueChart: { ...action.payload, loading: false },
      };
    case actions.CHARTS_FETCH_REVENUE_ERROR:
      return {
        ...state,
        revenueChart: { ...action.payload, loading: false },
      };
    case actions.GLOBAL_FETCH_NOTICES:
      return state.set('notices', action.payload).set('loading', true);

    case actions.GLOBAL_FETCH_NOTICES_SUCCESS:
      return state
        .set('notices', action.payload)
        .set('loading', false)
        .set('notifyCount', action.payload.data.length);

    case actions.GLOBAL_FETCH_NOTICES_ERROR:
      return state
        .set('notices', action.payload)
        .set('loading', true)
        .set('notifyCount', action.payload.data.length);

    case actions.GLOBAL_CLEAR_NOTICES:
      /* eslint-disable no-case-declarations */
      const tempNotices = { ...state.get('notices') };
      const data = tempNotices.data.filter(item => item.type !== action.payload.payload);
      const tempData = {
        data,
        loading: false,
      };
      return state
        .set('notices', { ...tempData })
        .set('loading', false)
        .set('notifyCount', data.length);

    default:
      return state;
  }
}
