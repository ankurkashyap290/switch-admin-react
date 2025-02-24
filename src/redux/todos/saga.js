/* eslint-disable func-names */
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';
import { push } from 'react-router-redux';
import { todoAPI } from '../../services/todoAPI';
import actions from './actions';

export function* fetchTodoList() {
  yield takeEvery(actions.TODO_FETCH_LIST, function*({ payload }) {
    const response = yield call(todoAPI.getAllTodoList, payload);
    if (response.status === 'OK') {
      yield put(actions.receiveTodoFetchList(response));
    } else {
      yield put(actions.errorTodoFetchList(response));
    }
  });
}

export function* addTodo() {
  yield takeEvery(actions.ADD_TODO, function*({ payload }) {
    const response = yield call(todoAPI.addTodo, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveAddTodo(response));
      yield call(message.success, 'Task added successfully', 2);
      yield put(push('/app/todos'));
    } else {
      yield put(actions.ErrorAddTodo(response));
      yield call(message.error, 'Error while adding new task', 2);
    }
  });
}

export function* updateTodo() {
  yield takeEvery(actions.UPDATE_TODO, function*({ payload }) {
    const response = yield call(todoAPI.updateTodo, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveUpdateTodo({ ...response }));
      yield call(message.success, 'task updated successfully', 2);
    } else {
      yield put(actions.errorUpdateTodo(response));
      yield call(message.error, 'Error while updating task', 2);
    }
  });
}

export function* removeTodo() {
  yield takeEvery(actions.REMOVE_TODO, function*({ payload }) {
    const response = yield call(todoAPI.removeTodo, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveRemoveTodo(response));
      yield call(message.success, 'Task removed successfully', 2);
    } else {
      yield put(actions.errorRemoveTodo(response));
      yield call(message.error, 'Error while removing task', 2);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(fetchTodoList), fork(addTodo), fork(updateTodo), fork(removeTodo)]);
}
