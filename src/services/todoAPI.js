import { stringify } from 'qs';
import request from '../utils/request';
import { apiUrl } from '../configs/app.config';
import { makePagingSortQueryString } from './apiUtils';

const API_URL = apiUrl(''); // ""

export const todoAPI = {
  async getAllTodoList(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/todos?${stringify(params)}`, {
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
      list: response.data,
      pagination,
      status: 'OK',
    };
    return result;
  },

  async addTodo(params) {
    return request(`${API_URL}/api/todos`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },

  async updateTodo(params) {
    const { id } = params;
    return request(`${API_URL}/api/todos/${id}`, {
      method: 'PUT',
      body: {
        ...params,
      },
    });
  },

  async removeTodo(params) {
    const { id } = params;
    return request(`${API_URL}/api/todos/${id}`, {
      method: 'DELETE',
      body: {
        ...params,
      },
    });
  },
};
