import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  list: [],
  pagination: { currentPage: 1, pageSize: 10, total: 0 },
  product: null,
  refreshMode: null,
  loading: true,
});

export function productsReducer(state = initState, action) {
  switch (action.type) {
    case actions.PRODUCT_FETCH: {
      return state
        .set('loading', true)
        .set('refreshMode', null)
        .set('pagination', action.payload.pagination)
        .set('list', action.payload.list);
    }

    case actions.PRODUCT_SAVE: {
      return state
        .set('list', action.list)
        .set('pagination', action.pagination)
        .set('refreshMode', null)
        .set('loading', false);
    }
    case actions.ERROR_PRODUCT_SAVE: {
      return state.set('refreshMode', action.error).set('loading', false);
    }

    case actions.PRODUCT_ADD: {
      return state.set('refreshMode', action.payload).set('loading', true);
    }
    case actions.RECEIVE_PRODUCT_ADD: {
      return state.set('refreshMode', action.payload).set('loading', false);
    }
    case actions.ERROR_PRODUCT_ADD: {
      return state.set('refreshMode', action.error).set('loading', false);
    }
    case actions.PRODUCT_UPDATE: {
      return state.set('refreshMode', action.payload).set('loading', true);
    }

    case actions.RECEIVE_PRODUCT_UPDATE: {
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
    case actions.ERROR_PRODUCT_UPDATE: {
      return state.set('refreshMode', action.error).set('loading', false);
    }
    case actions.PRODUCT_DELETE: {
      return state.set('refreshMode', action.payload).set('loading', true);
    }
    case actions.RECEIVE_PRODUCT_DELETE: {
      const productList = state.get('list');
      productList.filter((elem, index) => {
        if (elem.id === action.payload.data.id) {
          productList.splice(index, 1);
        }
        return productList;
      });
      return state
        .set('list', productList)
        .set('loading', false)
        .set('refreshMode', action.payload.mode);
    }
    case actions.ERROR_PRODUCT_DELETE: {
      return state.set('refreshMode', action.error).set('loading', false);
    }

    case actions.PRODUCT_REMOVE_ALL: {
      return state.set('refreshMode', action.payload).set('loading', true);
    }

    case actions.RECEIVE_PRODUCT_REMOVE_ALL: {
      const newProductList = state.get('list');
      let foundedProducts = [];
      foundedProducts = newProductList.filter(elem => {
        return !action.response.data.includes(elem.id);
      });

      return state
        .set('list', foundedProducts)
        .set('loading', false)
        .set('refreshMode', action.payload);
    }
    case actions.ERROR_PRODUCT_REMOVE_ALL: {
      return state.set('refreshMode', action.payload).set('loading', true);
    }
    case actions.PRODUCT_GET: {
      return state.set('refreshMode', action.payload).set('loading', true);
    }

    case actions.RECEIVE_PRODUCT_GET: {
      return state.set('product', action.payload.data).set('loading', false);
    }

    case actions.ERROR_PRODUCT_GET: {
      return state.set('refreshMode', action.error).set('loading', false);
    }

    default: {
      return state;
    }
  }
}
