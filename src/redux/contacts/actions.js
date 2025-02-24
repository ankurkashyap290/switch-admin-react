const contactsActions = {
  CONTACT_FETCH: 'CONTACT_FETCH',
  CONTACT_SAVE: 'CONTACT_SAVE',
  ERROR_CONTACT_SAVE: 'ERROR_CONTACT_SAVE',
  CONTACT_ADD: 'CONTACT_ADD',
  RECEIVE_CONTACT_ADD: 'RECEIVE_CONTACT_ADD',
  ERROR_CONTACT_ADD: 'ERROR_CONTACT_ADD',
  CONTACT_UPDATE: 'CONTACT_UPDATE',
  RECEIVE_CONTACT_UPDATE: 'RECEIVE_CONTACT_UPDATE',
  ERROR_CONTACT_UPDATE: 'ERROR_CONTACT_UPDATE',
  CONTACT_DELETE: 'CONTACT_DELETE',
  RECEIVE_CONTACT_DELETE: 'RECEIVE_CONTACT_DELETE',
  ERROR_CONTACT_DELETE: 'ERROR_CONTACT_DELETE',
  CONTACT_REMOVE_ALL: 'CONTACT_REMOVE_ALL',
  RECEIVE_CONTACT_REMOVE_ALL: 'RECEIVE_CONTACT_REMOVE_ALL',
  ERROR_CONTACT_REMOVE_ALL: 'ERROR_CONTACT_REMOVE_ALL',
  SET_MODEL_VISIBLE: 'SET_MODEL_VISIBLE',
  contactSave: payload => ({
    type: contactsActions.CONTACT_SAVE,
    list: payload.list,
    pagination: payload.pagination,
  }),
  errorContactSave: error => ({
    type: contactsActions.CONTACT_SAVE,
    error,
  }),
  contactAdd: payload => ({
    type: contactsActions.CONTACT_ADD,
    payload,
  }),

  receiveContactAdd: payload => ({
    type: contactsActions.RECEIVE_CONTACT_ADD,
    payload,
  }),
  errorContactAdd: error => ({
    type: contactsActions.ERROR_CONTACT_ADD,
    error,
  }),
  contactUpdate: payload => ({
    type: contactsActions.CONTACT_UPDATE,
    payload,
  }),
  receiveContactUpdate: payload => ({
    type: contactsActions.RECEIVE_CONTACT_UPDATE,
    payload,
  }),
  errorContactUpdate: error => ({
    type: contactsActions.ERROR_CONTACT_UPDATE,
    error,
  }),
  contactDelete: payload => ({
    type: contactsActions.CONTACT_DELETE,
    payload,
  }),
  receiveContactDelete: payload => ({
    type: contactsActions.RECEIVE_CONTACT_DELETE,
    payload,
  }),
  errorContactDelete: error => ({
    type: contactsActions.ERROR_CONTACT_DELETE,
    error,
  }),

  contactRemoveAll: payload => ({
    type: contactsActions.CONTACT_REMOVE_ALL,
    payload,
  }),
  receiveContactRemoveAll: response => ({
    type: contactsActions.RECEIVE_CONTACT_REMOVE_ALL,
    response,
  }),
  errorContactRemoveAll: error => ({
    type: contactsActions.ERROR_CONTACT_REMOVE_ALL,
    error,
  }),
  contactFetch: payload => ({
    type: contactsActions.CONTACT_FETCH,
    payload,
  }),
  changeModelVisible: value => ({
    type: contactsActions.SET_MODEL_VISIBLE,
    value,
  }),
};

export default contactsActions;
