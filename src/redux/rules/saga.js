/* eslint-disable func-names */
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { rulesAPI } from '../../services/rulesAPI';
import actions from './actions';

export function* fetchRules() {
  yield takeEvery(actions.RULES_FETCH, function*({ payload }) {
    const response = yield call(rulesAPI.getAll, payload);
    yield put(actions.rulesSave(response));
  });
}
export function* addRule() {
  yield takeEvery(actions.RULES_ADD, function*({ payload }) {
    const response = yield call(rulesAPI.addRule, payload);
    yield put(actions.rulesSave(response));
  });
}
export function* removeRule() {
  yield takeEvery(actions.RULES_REMOVE, function*({ payload }) {
    const response = yield call(rulesAPI.removeRule, payload);
    yield put(actions.rulesSave(response));
  });
}

export default function* rootSaga() {
  yield all([fork(fetchRules), fork(addRule), fork(removeRule)]);
}
