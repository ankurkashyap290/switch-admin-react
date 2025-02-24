/* eslint-disable func-names */
import React, { Fragment } from 'react';
import { notification } from 'antd';
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { userAPI } from '../../services/userAPI';
import { setToken } from '../../utils/tokenFunctions';
import actions from './actions';
import rulesActions from '../rules/actions';

export function* fetchUsers() {
  yield takeEvery(actions.USER_FETCH, function*({ payload }) {
    const response = yield call(userAPI.userList, payload);
    yield put(rulesActions.rulesSave(response));
  });
}
export function* login() {
  const wrongCredentialsMsg = response => {
    const hint = (
      <div>
        Admin Login use (admin/admin)
        <br />
        Guest Login use (guest/guest)
      </div>
    );
    return (
      <Fragment>
        {response.data && response.data.info ? (
          <div>
            {response.data.info} <br /> {hint}
          </div>
        ) : (
          <div>
            {response.info} <br /> {hint}
          </div>
        )}
      </Fragment>
    );
  };
  yield takeEvery(actions.USER_LOGIN, function*({ payload }) {
    const response = yield call(userAPI.login, payload);

    if (response.status && response.status === 'ok') {
      yield call(setToken, response.data.token);
      yield put(actions.userLoginSuccess(response));
      yield put(push('/'));
    } else {
      yield call(setToken, null);
      notification.error({
        message: 'Login Error',
        description: wrongCredentialsMsg(response),
      });
      yield put(actions.userLoginError(null));
    }
  });
}
export function* register() {
  yield takeEvery(actions.USER_REGISTER, function*({ payload }) {
    const response = yield call(userAPI.register, payload);
    if (response.status && response.status !== 'error') {
      yield call(setToken, response.data.token);
      // yield call(reloadAuthorized);
      yield put(actions.userRegisterSuccess(response));
      if (response.status === 'ok') {
        yield put(actions.userLogin(response));
      }
    }
  });
}

export function* logout() {
  yield takeEvery(actions.USER_LOGOUT, function*(payload) {
    yield put(actions.userLogoutSuccess(payload));
    yield call(setToken, null);
    yield put(push('/user/login'));
  });
}

export function* lock() {
  yield takeEvery(actions.USER_LOCK_SCREEN, function*(payload) {
    yield put(actions.userLockScreenSuccess(payload));
    yield put(push('/user/lock'));
  });
}
export function* unlock() {
  yield takeEvery(actions.USER_UNLOCK_SCREEN, function*(payload) {
    yield put(actions.userUnlockScreenSuccess(payload));
    yield put(push('/dashboard'));
  });
}

export default function* rootSaga() {
  yield all([
    fork(login),
    fork(register),
    fork(logout),
    fork(lock),
    fork(unlock),
    fork(fetchUsers),
  ]);
}
