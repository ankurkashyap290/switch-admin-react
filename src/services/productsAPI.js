import { stringify } from 'qs';
import request from '../utils/request';
import { apiUrl } from '../configs/app.config';
import { makePagingSortQueryString } from './apiUtils';

const API_URL = apiUrl(''); // ""

// any changes need in api data
function transformServerData(data) {
  return data;
}

export const productsAPI = {
  async getAll(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/products?${stringify(params)}`, {
      method: 'GET',
    });

    // read from header the total count for list
    const totalCount = response.headers.get('x-total-count')
      ? response.headers.get('x-total-count')
      : 0;
    const pagination = {
      currentPage: payload.currentPage,
      pageSize: payload.pageSize,
      total: parseInt(totalCount, 10),
    };
    const result = {
      list: transformServerData(response.data),
      pagination,
      status: 'OK',
    };
    return result;
  },

  async removeProduct(params) {
    const { id } = params;
    return request(`${API_URL}/api/products/${id}`, {
      method: 'DELETE',
      body: {
        ...params,
      },
    });
  },

  async addProduct(params) {
    return request(`${API_URL}/api/products`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },
  async updateProduct(params) {
    const { id } = params;
    return request(`${API_URL}/api/products/${id}`, {
      method: 'PUT',
      body: {
        ...params,
      },
    });
  },
  async removeAll(params) {
    return request(`${API_URL}/api/products/removeAll`, {
      method: 'DELETE',
      body: {
        ...params,
      },
    });
  },
  async getProduct(params) {
    return request(`${API_URL}/api/products/${params.id}`, {
      method: 'GET',
    });
  },
};
