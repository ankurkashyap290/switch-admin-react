import { stringify } from 'qs';
import request from '../utils/request';
import { apiUrl } from '../configs/app.config';
import { makePagingSortQueryString } from './apiUtils';

const API_URL = apiUrl(''); // ""
// any changes need in api data
function transformServerData(data) {
  return data;
}

export const contactsAPI = {
  async getAll(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/contacts?${stringify(params)}`, {
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

  async removeContact(params) {
    const { id } = params;
    return request(`${API_URL}/api/contacts/${id}`, {
      method: 'DELETE',
      body: {
        ...params,
      },
    });
  },

  async addContact(params) {
    return request(`${API_URL}/api/contacts`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },
  async updateContact(params) {
    const { id } = params;

    return request(`${API_URL}/api/contacts/${id}`, {
      method: 'PUT',
      body: {
        ...params,
      },
    });
  },
  async removeAll(params) {
    return request(`${API_URL}/api/contacts/removeAll`, {
      method: 'DELETE',
      body: {
        ...params,
      },
    });
  },
};
