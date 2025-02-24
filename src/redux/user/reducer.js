import { Map } from 'immutable';
import { getToken } from '../../utils/tokenFunctions';
import actions from './actions';

const initState = new Map({
  token: null,
  loading: false,
  error: null,
});

const hydrateUser = function() {
  return initState.set('token', getToken());
};

export function userReducer(state = hydrateUser(), action) {
  switch (action.type) {
    case actions.USER_LOGIN:
      return state.set('loading', true);
    case actions.USER_LOGIN_SUCCESS:
      console.log(action.payload);
      return state.set('loading', false).set('token', action.payload.data.token);
    case actions.USER_LOGIN_ERROR:
      return state
        .set('loading', false)
        .set('token', null)
        .set('error', 'Invalid Login');
    case actions.USER_FETCH:
      return state.set('loading', false).set('token', action.payload.data);
    case actions.USER_REGISTER:
      return state.set('loading', true);
    case actions.USER_REGISTER_SUCCESS:
      return state.set('loading', false).set('token', action.payload.data);
    case actions.USER_LOGOUT:
      return state.set('loading', true);
    case actions.USER_LOGOUT_SUCCESS:
      return state
        .set('loading', false)
        .set('token', null)
        .set('error', null);
    case actions.USER_LOCK_SCREEN:
      return state.set('loading', true);
    case actions.USER_LOCK_SCREEN_SUCCESS:
      return state.set('loading', false);
    case actions.USER_UNLOCK_SCREEN:
      return state.set('loading', true);
    case actions.USER_UNLOCK_SCREEN_SUCCESS:
      return state.set('loading', false);
    default:
      return state;
  }
}
