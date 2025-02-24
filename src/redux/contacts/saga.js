/* eslint-disable func-names */
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';
import { contactsAPI } from '../../services/contactsAPI';
import actions from './actions';

export function* fetchContacts() {
  yield takeEvery(actions.CONTACT_FETCH, function*({ payload }) {
    const response = yield call(contactsAPI.getAll, payload);
    if (response.status === 'OK') {
      yield put(actions.contactSave(response));
    } else {
      yield put(actions.errorContactSave(response));
      yield call(message.error, 'Error while fetching contacts', 2);
    }
  });
}
export function* addContact() {
  yield takeEvery(actions.CONTACT_ADD, function*({ payload }) {
    const response = yield call(contactsAPI.addContact, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveContactAdd(response));
      yield call(message.success, 'Contact added successfully', 2);
    } else {
      yield put(actions.errorContactAdd(response));
      yield call(message.error, 'Error while creating new contact', 2);
    }
  });
}
export function* updateContact() {
  yield takeEvery(actions.CONTACT_UPDATE, function*({ payload }) {
    const response = yield call(contactsAPI.updateContact, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveContactUpdate({ ...response, mode: 'update' }));
      yield call(message.success, 'Contact updated successfully', 2);
    } else {
      yield put(actions.errorContactUpdate(response));
      yield call(message.error, 'Error while updating contact', 2);
    }
  });
}

export function* removeContact() {
  yield takeEvery(actions.CONTACT_DELETE, function*({ payload }) {
    const response = yield call(contactsAPI.removeContact, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveContactDelete(response));
      yield call(message.success, 'Contact removed successfully', 2);
    } else {
      yield put(actions.errorContactDelete(response));
      yield call(message.error, 'Error while removing contact', 2);
    }
  });
}

export function* removeAll() {
  yield takeEvery(actions.CONTACT_REMOVE_ALL, function*({ payload }) {
    const response = yield call(contactsAPI.removeAll, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveContactRemoveAll(response));
      yield call(message.success, 'All selected Contacts removed successfully', 2);
    } else {
      yield put(actions.errorContactRemoveAll(response));
      yield call(message.error, 'Error while removing selected contacts', 2);
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchContacts),
    fork(addContact),
    fork(updateContact),
    fork(removeContact),
    fork(removeAll),
  ]);
}
