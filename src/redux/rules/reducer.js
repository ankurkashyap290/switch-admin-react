import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  data: {
    list: [],
    pagination: { currentPage: 1, pageSize: 10, total: 0 },
  },
  loading: true,
});

export function rulesReducer(state = initState, action) {
  switch (action.type) {
    case actions.RULES_FETCH:
      return state.set('data', action.payload);

    case actions.RULES_ADD:
      return state.set('data', action.payload);

    case actions.RULES_REMOVE:
      return state.set('data', action.payload);

    case actions.RULES_SAVE:
      return state.set('data', action.payload);

    case actions.RULES_CHANGELOADING:
      return state.set('data', action.payload);

    default:
      return state;
  }
}
