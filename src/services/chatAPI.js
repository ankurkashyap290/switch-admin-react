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
    if (value.lastMessageTime) {
      value.lastMessageTime = momentRandom(endDate, startDate);
    } else if (value.messageTime) {
      value.messageTime = momentRandom(endDate, startDate);
    }
    if (data[0].lastMessageTime) {
      data.sort((a, b) => {
        return new Date(b.lastMessageTime) - new Date(a.lastMessageTime);
      });
    } else if (data[0].messageTime) {
      data.sort((a, b) => {
        return new Date(b.messageTime) - new Date(a.messageTime);
      });
    }
    return data;
  });

  return data;
}

export const chatAPI = {
  async getAllUser(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/chatUsers?${stringify(params)}`, {
      method: 'GET',
    });
    // read from header the total count for list
    const totalCount = response.headers.get('x-total-count')
      ? response.headers.get('x-total-count')
      : 0;
    const result = {
      list: response.data,
      total: totalCount,
      status: 'OK',
    };
    return result;
  },
  async getAllMessages(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/chatMessages?${stringify(params)}`, {
      method: 'GET',
    });
    // read from header the total count for list
    const totalCount = response.headers.get('x-total-count')
      ? response.headers.get('x-total-count')
      : 0;
    const result = {
      list: transformServerData(response.data),
      total: totalCount,
      status: 'OK',
    };
    return result;
  },
  async getChatRooms(payload) {
    const params = makePagingSortQueryString(payload);
    const response = await request(`${API_URL}/api/chatRooms?${stringify(params)}`, {
      method: 'GET',
    });
    // read from header the total count for list
    const totalCount = response.headers.get('x-total-count')
      ? response.headers.get('x-total-count')
      : 0;
    const result = {
      list: transformServerData(response.data),
      total: totalCount,
      status: 'OK',
    };
    return result;
  },

  async addMessage(params) {
    return request(`${API_URL}/api/chatMessages`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },

  async addUser(params) {
    return request(`${API_URL}/api/chatUsers`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },

  async addChatRoom(params) {
    return request(`${API_URL}/api/chatRooms`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },

  async chatSearch(params) {
    return request(`${API_URL}/api/chatUsers?name_like=${params}`, {
      method: 'GET',
      body: {
        ...params,
      },
    });
  },
};
