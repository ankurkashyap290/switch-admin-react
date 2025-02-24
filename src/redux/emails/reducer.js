import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  inboxData: {
    list: [],
    loaded: false,
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  draftData: {
    list: [],
    loaded: false,
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  importantData: {
    list: [],
    loaded: false,
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  sentData: {
    list: [],
    loaded: false,
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  spamData: {
    list: [],
    loaded: false,
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  starredData: {
    list: [],
    loaded: false,
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  trashedData: {
    list: [],
    loaded: false,
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  refreshMode: null,
  loading: true,
});

export function emailsReducer(state = initState, action) {
  switch (action.type) {
    case actions.EMAIL_FETCH: {
      return state.set('loading', true);
    }
    case actions.EMAIL_FETCH_SUCCESS: {
      return state
        .set(`${action.emailType}Data`, action.response)
        .set('loading', false)
        .set('refreshMode', null);
    }
    case actions.EMAIL_FETCH_ERROR: {
      return state.set('loading', false).set('refreshMode', action.error);
    }
    case actions.EMAIL_UPDATE_READ: {
      return state
        .set(`${action.emailType}Data`, action.response)
        .set('loading', false)
        .set('refreshMode', null);
    }
    default:
      return state;
  }
}
