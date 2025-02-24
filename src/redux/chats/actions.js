const chatActions = {
  CHAT_FETCH_DATA: 'CHAT_FETCH_DATA',
  RECEIVE_CHAT_FETCH_DATA: 'RECEIVE_CHAT_FETCH_DATA',
  ERROR_CHAT_FETCH_DATA: 'ERROR_CHAT_FETCH_DATA',

  CHAT_FETCH_USER: 'CHAT_FETCH_USER',
  RECEIVE_CHAT_FETCH_USER: 'RECEIVE_CHAT_FETCH_USER',
  ERROR_CHAT_FETCH_USER: 'ERROR_CHAT_FETCH_USER',

  CHAT_ADD_USER: 'CHAT_ADD_USER',
  RECEIVE_CHAT_ADD_USER: 'RECEIVE_CHAT_ADD_USER',
  ERROR_CHAT_ADD_USER: 'ERROR_CHAT_ADD_USER',

  CHAT_ADD_CHATROOM: 'CHAT_ADD_CHATROOM',
  RECEIVE_CHAT_ADD_CHATROOM: 'RECEIVE_CHAT_ADD_CHATROOM',
  ERROR_CHAT_ADD_CHATROOM: 'ERROR_CHAT_ADD_CHATROOM',

  CHAT_SELECT_CHATROOM: 'CHAT_SELECT_CHATROOM',

  CHAT_SEARCH: 'CHAT_SEARCH',
  RECEIVE_CHAT_SEARCH: 'RECEIVE_CHAT_SEARCH',
  ERROR_CHAT_SEARCH: 'ERROR_CHAT_SEARCH',

  CHAT_ADD_MESSAGE: 'CHAT_ADD_MESSAGE',
  RECEIVE_CHAT_ADD_MESSAGE: 'RECEIVE_CHAT_ADD_MESSAGE',
  ERROR_CHAT_ADD_MESSAGE: 'ERROR_CHAT_ADD_MESSAGE',
  chatFetchData: payload => ({
    type: chatActions.CHAT_FETCH_DATA,
    payload,
  }),
  receiveChatFetchData: payload => ({
    type: chatActions.RECEIVE_CHAT_FETCH_DATA,
    chatRooms: payload.chatRooms,
    chatUsers: payload.chatUsers,
    chatMessages: payload.chatMessages,
  }),
  errorChatFetchData: error => ({
    type: chatActions.ERROR_CHAT_FETCH_DATA,
    error,
  }),

  chatFetchUser: payload => ({
    type: chatActions.CHAT_FETCH_USER,
    payload,
  }),
  receiveChatFetchUser: payload => ({
    type: chatActions.RECEIVE_CHAT_FETCH_USER,
    chatRooms: payload.chatRooms,
  }),
  errorChatFetchUser: error => ({
    type: chatActions.ERROR_CHAT_FETCH_USER,
    error,
  }),
  chatAddUser: payload => ({
    type: chatActions.CHAT_ADD_USER,
    payload,
  }),
  receiveChatAddUser: payload => ({
    type: chatActions.RECEIVE_CHAT_ADD_USER,
    data: payload.data,
  }),
  errorChatAddUser: error => ({
    type: chatActions.ERROR_CHAT_ADD_USER,
    error,
  }),
  chatAddChatroom: payload => ({
    type: chatActions.CHAT_ADD_CHATROOM,
    payload,
  }),
  receiveChatAddChatroom: payload => ({
    type: chatActions.RECEIVE_CHAT_ADD_CHATROOM,
    payload,
  }),
  errorChatAddChatroom: error => ({
    type: chatActions.ERROR_CHAT_ADD_CHATROOM,
    error,
  }),

  chatSearch: payload => ({
    type: chatActions.CHAT_SEARCH,
    payload,
  }),
  receiveChatSearch: payload => ({
    type: chatActions.RECEIVE_CHAT_SEARCH,
    payload,
  }),
  errorChatSearch: error => ({
    type: chatActions.ERROR_RECEIVE_CHAT_SEARCH,
    error,
  }),

  chatAddMessage: payload => ({
    type: chatActions.CHAT_ADD_MESSAGE,
    payload,
  }),
  receiveChatAddMessage: payload => ({
    type: chatActions.RECEIVE_CHAT_ADD_MESSAGE,
    payload,
  }),
  errorChatAddMessage: error => ({
    type: chatActions.ERROR_CHAT_ADD_MESSAGE,
    error,
  }),
  chatSelectChatroom: payload => ({
    type: chatActions.CHAT_SELECT_CHATROOM,
    payload,
  }),
};

export default chatActions;
