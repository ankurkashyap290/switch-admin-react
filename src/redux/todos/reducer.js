import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  list: [],
  pagination: { currentPage: 1, pageSize: 10, total: 0 },
  loading: true,
});

export function todosReducer(state = initState, action) {
  switch (action.type) {
    case actions.TODO_FETCH_LIST:
    case actions.ADD_TODO:
    case actions.UPDATE_TODO:
    case actions.REMOVE_TODO:
      return state.set('loading', true);

    case actions.RECEIVE_TODO_FETCH_LIST:
      return state
        .set('list', action.payload.list)
        .set('loading', false)
        .set('pagination', action.payload.pagination);

    case actions.RECEIVE_ADD_TODO: {
      const list = state.get('list');
      list.push(action.data);
      return state.set('list', list).set('loading', false);
    }
    case actions.RECEIVE_UPDATE_TODO: {
      const list = state.get('list');
      list.map((elem, index) => {
        if (elem.id === action.payload.data.id) {
          list[index] = action.payload.data;
        }
        return list;
      });
      return state.set('list', list).set('loading', false);
    }
    case actions.RECEIVE_REMOVE_TODO: {
      const List = state.get('list');
      List.filter((elem, index) => {
        if (elem.id === action.payload.data.id) {
          List.splice(index, 1);
        }
        return List;
      });
      return state.set('list', List).set('loading', false);
    }
    case actions.ERROR_TODO_FETCH_LIST:
    case actions.ERROR_ADD_TODO:
    case actions.ERROR_UPDATE_TODO:
    case actions.ERROR_REMOVE_TODO:
      return state.set('loading', false);

    default:
      return state;
  }
}
