import { stringify } from 'qs';
import moment from 'moment';
import request from '../utils/request';
import { apiUrl } from '../configs/app.config';
import { makePagingSortQueryString } from './apiUtils';
import { momentRandom } from '../utils';

const API_URL = apiUrl(''); // ""
// any changes need in api data
function transformServerData(data) {
  const endDate = moment().format();
  const startDate = moment()
    .subtract(3, 'months')
    .format();
  data.map(value => {
    return (value.dateTime = momentRandom(endDate, startDate));
  });
  data.sort((a, b) => {
    return new Date(b.dateTime) - new Date(a.dateTime);
  });
  return data;
}

export const emailAPI = {
  async getAll(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/emails?${stringify(params)}`, { method: 'GET' });
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
  async getStarredEmail(payload) {
    const { type, ...tempPayload } = payload;
    const params = makePagingSortQueryString(tempPayload);
    const response = await request(`${API_URL}/api/emails?${stringify(params)}`, { method: 'GET' });
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

  async updateRead(params) {
    const { id } = params;
    return request(`${API_URL}/api/emails/${id}`, {
      method: 'PUT',
      body: {
        ...params,
      },
    });
  },
};
