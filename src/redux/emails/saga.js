/* eslint-disable func-names */
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { emailAPI } from '../../services/emailAPI';
import actions from './actions';

export function* fetchEmails() {
  yield takeEvery(actions.EMAIL_FETCH, function*({ payload }) {
    const { type: emailType, loadMore, labeled, starred } = payload;
    let response = null;
    if (emailType === 'starred') {
      response = yield call(emailAPI.getStarredEmail, payload);
    } else {
      response = yield call(emailAPI.getAll, payload);
    }
    if (response.status === 'OK') {
      yield put(actions.emailFetchSuccess({ response, emailType, loadMore, labeled, starred }));
    } else {
      yield put(actions.emailFetchError({ response }));
    }
  });
}

export function* updateRead() {
  yield takeEvery(actions.EMAIL_UPDATE_READ, function*({ payload }) {
    const {
      type: emailType,
      loadMore,
      record,
      labeled,
      starred,
      currentPage,
      pageSize,
      loading,
    } = payload;
    record.read = true;
    const response = yield call(emailAPI.updateRead, record);
    if (response.status === 'ok') {
      const tempPayload = {
        currentPage,
        pageSize,
        loading,
        emailType,
        starred,
        labeled,
        loadMore,
      };
      const typeResponse = yield call(emailAPI.getAll, tempPayload);
      yield put(actions.emailFetchSuccess({ typeResponse, emailType, loadMore, labeled, starred }));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(fetchEmails), fork(updateRead)]);
}
