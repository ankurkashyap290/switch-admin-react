import { notification } from 'antd';
import { siteConfig } from '../configs/app.config';
import mockDataReader from './mockDataReader';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  notification.error({
    message: `Request error${response.status}: ${response.url}`,
    description: response.statusText,
  });
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function readHeaders(response) {
  const headers = {
    _list: {},
    get(key) {
      return this._list[key] || null;
    },
    set(key, value) {
      this._list[key] = value;
    },
  };
  for (const pair of response.headers.entries()) {
    headers.set(pair[0], pair[1]);
  }
  return headers;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };

  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  if (!siteConfig.runWithMockServer) {
    return mockDataReader
      .process(url, newOptions)
      .then(async response => {
        const responseJson = await response;
        const headers = readHeaders(response);

        return {
          status: responseJson.status,
          data: responseJson.data,
          headers,
        };
      })
      .catch(error => {
        return error;
      });
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(async response => {
      const responseJson = await response.json();
      const headers = readHeaders(response);
      return {
        data: responseJson || null,
        headers,
        status: responseJson.status ? responseJson.status : 'ok',
      };
    })
    .catch(error => {
      if (error.response) {
        return error;
      }
      if (error.code) {
        notification.error({
          message: error.name,
          description: error.message,
        });
      }
      if ('stack' in error && 'message' in error) {
        notification.error({
          message: `Request error:${url}`,
          description: error.message,
        });
      }
      return error;
    });
}
