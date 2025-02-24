import { stringify } from 'qs';
import request from '../utils/request';
import { apiUrl } from '../configs/app.config';
import { makePagingSortQueryString } from './apiUtils';

const API_URL = apiUrl(''); // ""

// any changes need in api data
function transformServerData(data) {
  return data;
}

export const rulesAPI = {
  async getAll(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/rules?${stringify(params)}`);
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

  async removeRule(params) {
    return request('/api/rule', {
      method: 'PUT',
      body: {
        ...params,
        method: 'delete',
      },
    });
  },

  async addRule(params) {
    return request(`${API_URL}/api/rules`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },

  async queryNotices() {
    return request('/api/notices');
  },
};
