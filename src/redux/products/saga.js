/* eslint-disable func-names */
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';
import { push } from 'react-router-redux';
import { productsAPI } from '../../services/productsAPI';
import actions from './actions';

export function* fetchProducts() {
  yield takeEvery(actions.PRODUCT_FETCH, function*({ payload }) {
    const response = yield call(productsAPI.getAll, payload);
    if (response.status === 'OK') {
      yield put(actions.productSave(response));
    } else {
      yield put(actions.errorProductSave(response));
      yield call(message.error, 'Error while fetching products', 2);
    }
  });
}

export function* addProduct() {
  yield takeEvery(actions.PRODUCT_ADD, function*({ payload }) {
    const response = yield call(productsAPI.addProduct, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveProductAdd(response));
      yield call(message.success, 'Product added successfully', 2);
      yield put(push('/app/products'));
    } else {
      yield put(actions.errorProductAdd(response));
      yield call(message.error, 'Error while creating new product', 2);
    }
  });
}

export function* updateProduct() {
  yield takeEvery(actions.PRODUCT_UPDATE, function*({ payload }) {
    const response = yield call(productsAPI.updateProduct, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveProductUpdate(response));
      yield put(push('/app/products'));
      yield call(message.success, 'Product updated successfully', 2);
    } else {
      yield put(actions.errorProductUpdate(response));
      yield call(message.error, 'Error while updating product', 2);
    }
  });
}

export function* getProduct() {
  yield takeEvery(actions.PRODUCT_GET, function*({ payload }) {
    const response = yield call(productsAPI.getProduct, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveProductGet(response));
    } else {
      yield put(actions.errorProductGet(response));
    }
  });
}

export function* removeProduct() {
  yield takeEvery(actions.PRODUCT_DELETE, function*({ payload }) {
    const response = yield call(productsAPI.removeProduct, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveProductDelete(response));
      yield call(message.success, 'Product removed successfully', 2);
    } else {
      yield put(actions.errorProductDelete(response));
      yield call(message.error, 'Error while removing product', 2);
    }
  });
}

export function* removeAll() {
  yield takeEvery(actions.PRODUCT_REMOVE_ALL, function*({ payload }) {
    const response = yield call(productsAPI.removeAll, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveProductRemoveAll(response));
      yield call(message.success, 'All selected products removed successfully', 2);
    } else {
      yield put(actions.errorProductRemoveAll(response));
      yield call(message.error, 'Error while removing selected products', 2);
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchProducts),
    fork(addProduct),
    fork(updateProduct),
    fork(removeProduct),
    fork(removeAll),
    fork(getProduct),
  ]);
}
