const productsActions = {
  PRODUCT_FETCH: 'PRODUCT_FETCH',
  PRODUCT_SAVE: 'PRODUCT_SAVE',
  ERROR_PRODUCT_SAVE: 'ERROR_PRODUCT_SAVE',
  PRODUCT_GET: 'PRODUCT_GET',
  RECEIVE_PRODUCT_GET: 'RECEIVE_PRODUCT_GET',
  ERROR_PRODUCT_GET: 'ERROR_PRODUCT_GET',
  PRODUCT_ADD: 'PRODUCT_ADD',
  RECEIVE_PRODUCT_ADD: 'RECEIVE_PRODUCT_ADD',
  ERROR_PRODUCT_ADD: 'ERROR_PRODUCT_ADD',
  PRODUCT_UPDATE: 'PRODUCT_UPDATE',
  RECEIVE_PRODUCT_UPDATE: 'RECEIVE_PRODUCT_UPDATE',
  ERROR_PRODUCT_UPDATE: 'ERROR_PRODUCT_UPDATE',
  PRODUCT_DELETE: 'PRODUCT_DELETE',
  RECEIVE_PRODUCT_DELETE: 'RECEIVE_PRODUCT_DELETE',
  ERROR_PRODUCT_DELETE: 'ERROR_PRODUCT_DELETE',
  PRODUCT_REMOVE_ALL: 'PRODUCT_REMOVE_ALL',
  RECEIVE_PRODUCT_REMOVE_ALL: 'RECEIVE_PRODUCT_REMOVE_ALL',
  ERROR_PRODUCT_REMOVE_ALL: 'ERROR_PRODUCT_REMOVE_ALL',

  productFetch: payload => ({
    type: productsActions.PRODUCT_FETCH,
    payload,
  }),
  productSave: payload => ({
    type: productsActions.PRODUCT_SAVE,
    list: payload.list,
    pagination: payload.pagination,
  }),
  errorProductSave: error => ({
    type: productsActions.PRODUCT_SAVE,
    error,
  }),

  productGet: payload => ({
    type: productsActions.PRODUCT_GET,
    payload,
  }),
  receiveProductGet: payload => ({
    type: productsActions.RECEIVE_PRODUCT_GET,
    payload,
  }),
  errorProductGet: error => ({
    type: productsActions.ERROR_PRODUCT_GET,
    error,
  }),
  productAdd: payload => ({
    type: productsActions.PRODUCT_ADD,
    payload,
  }),
  receiveProductAdd: payload => ({
    type: productsActions.RECEIVE_PRODUCT_ADD,
    payload,
  }),
  errorProductAdd: error => ({
    type: productsActions.ERROR_PRODUCT_ADD,
    error,
  }),
  productUpdate: payload => ({
    type: productsActions.PRODUCT_UPDATE,
    payload,
  }),
  receiveProductUpdate: payload => ({
    type: productsActions.RECEIVE_PRODUCT_UPDATE,
    payload,
  }),
  errorProductUpdate: error => ({
    type: productsActions.ERROR_PRODUCT_UPDATE,
    error,
  }),
  productDelete: payload => ({
    type: productsActions.PRODUCT_DELETE,
    payload,
  }),
  receiveProductDelete: payload => ({
    type: productsActions.RECEIVE_PRODUCT_DELETE,
    payload,
  }),
  errorProductDelete: error => ({
    type: productsActions.ERROR_PRODUCT_DELETE,
    error,
  }),
  productRemoveAll: payload => ({
    type: productsActions.PRODUCT_REMOVE_ALL,
    payload,
  }),
  receiveProductRemoveAll: response => ({
    type: productsActions.RECEIVE_PRODUCT_REMOVE_ALL,
    response,
  }),
  errorProductRemoveAll: error => ({
    type: productsActions.ERROR_PRODUCT_REMOVE_ALL,
    error,
  }),
};

export default productsActions;
