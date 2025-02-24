const emailActions = {
  EMAIL_FETCH: 'EMAIL_FETCH',
  EMAIL_FETCH_SUCCESS: 'EMAIL_FETCH_SUCCESS',
  EMAIL_FETCH_ERROR: 'EMAIL_FETCH_ERROR',

  EMAIL_UPDATE_READ: 'EMAIL_UPDATE_READ',

  emailFetch: payload => ({
    type: emailActions.EMAIL_FETCH,
    payload,
  }),
  emailFetchSuccess: payload => ({
    type: emailActions.EMAIL_FETCH_SUCCESS,
    ...payload,
  }),
  emailFetchError: error => ({
    type: emailActions.EMAIL_FETCH_ERROR,
    error,
  }),
  emailUpdateRead: payload => ({
    type: emailActions.EMAIL_UPDATE_READ,
    ...payload,
  }),
};

export default emailActions;
