/* eslint-disable func-names */
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { globalAPI } from '../../services/globalAPI';
import actions from './actions';

export function* fetchActivities() {
  yield takeEvery(actions.ACTIVITIES_FETCH_LIST, function*({ payload }) {
    const response = yield call(globalAPI.fetchActivities, payload);
    if (response.status === 'ok') {
      yield put(actions.activitiesFetchListSuccess(response));
    } else {
      yield put(actions.activitiesFetchListError(response));
    }
  });
}

export function* fetchStarredContacts() {
  yield takeEvery(actions.CONTACTS_FETCH_STARRED, function*({ payload }) {
    const response = yield call(globalAPI.fetchStarredContacts, payload);
    if (response.status === 'OK') {
      console.log('response', response);
      yield put(actions.contactsFetchStarredSuccess(response));
    } else {
      yield put(actions.contactsFetchStarredError(response));
    }
  });
}

export function* fetchSalesChart() {
  yield takeEvery(actions.CHARTS_FETCH_SALES, function*({ payload }) {
    const response = yield call(globalAPI.fetchSalesChart, payload);
    if (response.status === 'ok') {
      yield put(actions.chartsFetchSalesSuccess(response));
    } else {
      yield put(actions.chartsFetchSalesError(response));
    }
  });
}

export function* fetchRevenueChart() {
  yield takeEvery(actions.CHARTS_FETCH_REVENUE, function*({ payload }) {
    const response = yield call(globalAPI.fetchRevenueChart, payload);
    if (response.status === 'ok') {
      yield put(actions.chartsFetchRevenueSuccess(response));
    } else {
      yield put(actions.chartsFetchRevenueError(response));
    }
  });
}

export function* fetchNotices() {
  yield takeEvery(actions.GLOBAL_FETCH_NOTICES, function*({ payload }) {
    const response = yield call(globalAPI.fetchNotices, payload);

    if (response.status === 'OK') {
      yield put(actions.globalFetchNoticesSuccess(response));
    } else {
      yield put(actions.globalFetchNoticesError(response));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchActivities),
    fork(fetchStarredContacts),
    fork(fetchSalesChart),
    fork(fetchRevenueChart),
    fork(fetchNotices),
  ]);
}
