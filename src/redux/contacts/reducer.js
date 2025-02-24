import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  list: [],
  pagination: { currentPage: 1, total: 0 },
  refreshMode: null,
  loading: true,
  modalVisible: false,
});

export function contactsReducer(state = initState, action) {
  switch (action.type) {
    case actions.CONTACT_FETCH: {
      return state
        .set('loading', true)
        .set('refreshMode', null)
        .set('pagination', action.payload.pagination)
        .set('list', action.payload.list);
    }
    case actions.CONTACT_SAVE: {
      return state
        .set('list', action.list)
        .set('pagination', action.pagination)
        .set('refreshMode', null)
        .set('loading', false);
    }
    case actions.ERROR_CONTACT_SAVE: {
      return state.set('refreshMode', action.error).set('loading', false);
    }
    case actions.CONTACT_ADD: {
      return state.set('refreshMode', action.payload).set('loading', true);
    }

    case actions.RECEIVE_CONTACT_ADD: {
      return state
        .set('refreshMode', action.payload)
        .set('modalVisible', false)
        .set('loading', false);
    }

    case actions.ERROR_CONTACT_ADD: {
      return state.set('refreshMode', action.error).set('loading', false);
    }
    case actions.CONTACT_UPDATE: {
      return state.set('refreshMode', action.payload).set('loading', true);
    }

    case actions.RECEIVE_CONTACT_UPDATE: {
      const list = state.get('list');

      list.map((elem, index) => {
        if (elem.id === action.payload.data.id) {
          list[index] = action.payload.data;
        }
        return list;
      });

      return state
        .set('list', list)
        .set('loading', false)
        .set('refreshMode', action.payload.mode)
        .set('modalVisible', false);
    }
    case actions.ERROR_CONTACT_UPDATE: {
      return state.set('refreshMode', action.error).set('loading', false);
    }
    case actions.CONTACT_DELETE: {
      return state.set('refreshMode', action.payload).set('loading', true);
    }

    case actions.RECEIVE_CONTACT_DELETE: {
      const contactList = state.get('list');

      contactList.filter((elem, index) => {
        if (elem.id === action.payload.data.id) {
          contactList.splice(index, 1);
        }
        return contactList;
      });
      return state
        .set('list', contactList)
        .set('loading', false)
        .set('refreshMode', action.payload.mode);
    }
    case actions.ERROR_CONTACT_DELETE: {
      return state.set('refreshMode', action.error).set('loading', false);
    }
    case actions.CONTACT_REMOVE_ALL:
      return state.set('refreshMode', action.payload).set('loading', true);

    case actions.RECEIVE_CONTACT_REMOVE_ALL: {
      const newContactList = state.get('list');
      let foundedContacts = [];
      foundedContacts = newContactList.filter(elem => {
        return !action.response.data.includes(elem.id);
      });

      return state
        .set('list', foundedContacts)
        .set('loading', false)
        .set('refreshMode', action.payload);
    }
    case actions.ERROR_CONTACT_REMOVE_ALL: {
      return state.set('refreshMode', action.error).set('loading', false);
    }
    case actions.SET_MODEL_VISIBLE: {
      return state.set('modalVisible', action.value);
    }

    default: {
      return state;
    }
  }
}
