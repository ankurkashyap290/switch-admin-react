import { stringify } from 'qs';
import request from '../utils/request';
import { apiUrl } from '../configs/app.config';
import { makePagingSortQueryString } from './apiUtils';

const API_URL = apiUrl(''); // ""

// any changes need in api data
function transformServerData(data) {
  return data;
}

export const globalAPI = {
  async fetchActivities(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/contacts?${stringify(params)}`);
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
  async fetchStarredContacts(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/contacts?${stringify(params)}`);
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
  async fetchSalesChart() {
    const params = {};
    const response = await request(`${API_URL}/api/salescharts?${stringify(params)}`);
    const result = {
      data: response.data,
      status: 'OK',
    };
    return result;
  },
  async fetchRevenueChart() {
    const params = {};
    const response = await request(`${API_URL}/api/revenuecharts?${stringify(params)}`);
    const result = {
      data: response.data,
      status: 'OK',
    };
    return result;
  },
  async fetchNotices() {
    const params = {};
    const response = await request(`${API_URL}/api/notices?${stringify(params)}`);
    const result = {
      data: response.data,
      status: 'OK',
    };
    return result;
  },
};
