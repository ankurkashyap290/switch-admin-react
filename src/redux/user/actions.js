const userActions = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
  USER_LOGOUT: 'USER_LOGOUT',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_REGISTER: 'USER_REGISTER',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_FETCH: 'USER_FETCH',
  USER_LOCK_SCREEN: 'USER_LOCK_SCREEN',
  USER_LOCK_SCREEN_SUCCESS: 'USER_LOCK_SCREEN_SUCCESS',
  USER_UNLOCK_SCREEN: 'USER_UNLOCK_SCREEN',
  USER_UNLOCK_SCREEN_SUCCESS: 'USER_UNLOCK_SCREEN_SUCCESS',
  userLogin: payload => ({
    type: userActions.USER_LOGIN,
    payload,
  }),
  userLoginSuccess: payload => ({
    type: userActions.USER_LOGIN_SUCCESS,
    payload,
  }),
  userLoginError: payload => ({
    type: userActions.USER_LOGIN_ERROR,
    payload,
  }),
  userLogout: payload => ({
    type: userActions.USER_LOGOUT,
    payload,
  }),
  userLogoutSuccess: payload => ({
    type: userActions.USER_LOGOUT_SUCCESS,
    payload,
  }),
  userRegister: payload => ({
    type: userActions.USER_REGISTER,
    payload,
  }),
  userRegisterSuccess: payload => ({
    type: userActions.USER_REGISTER_SUCCESS,
    payload,
  }),
  userFetch: payload => ({
    type: userActions.USER_FETCH,
    payload,
  }),
  userLockScreen: payload => ({
    type: userActions.USER_LOCK_SCREEN,
    payload,
  }),
  userLockScreenSuccess: payload => ({
    type: userActions.USER_LOCK_SCREEN_SUCCESS,
    payload,
  }),
  userUnlockScreen: payload => ({
    type: userActions.USER_UNLOCK_SCREEN,
    payload,
  }),
  userUnlockScreenSuccess: payload => ({
    type: userActions.USER_UNLOCK_SCREEN_SUCCESS,
    payload,
  }),
};

export default userActions;
