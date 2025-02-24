/* eslint-disable func-names */
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';
import { push } from 'react-router-redux';
import { chatAPI } from '../../services/chatAPI';
import actions from './actions';

export function* fetchChatUsers() {
  yield takeEvery(actions.CHAT_FETCH_USER, function*({ payload }) {
    const response = yield call(chatAPI.getAllUser, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveChatFetchUser(response));
    } else {
      yield put(actions.errorChatFetchUser(response));
    }
  });
}

export function* fetchChatData() {
  yield takeEvery(actions.CHAT_FETCH_DATA, function*({ payload }) {
    const chatUsers = yield call(chatAPI.getAllUser, payload);
    const chatRooms = yield call(chatAPI.getChatRooms, payload);
    const chatMessages = yield call(chatAPI.getAllMessages, payload);

    yield put(
      actions.receiveChatFetchData({
        chatUsers: { ...chatUsers },
        chatRooms: { ...chatRooms },
        chatMessages: { ...chatMessages },
      })
    );
  });
}

export function* addChatData() {
  yield takeEvery(actions.CHAT_ADD_MESSAGE, function*({ payload }) {
    const response = yield call(chatAPI.addMessage, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveChatAddMessage(response));
    } else {
      yield put(actions.errorChatAddMessage(response));
    }
  });
}

export function* addChatUser() {
  yield takeEvery(actions.CHAT_ADD_USER, function*({ payload }) {
    const response = yield call(chatAPI.addUser, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveChatAddUser(response));
      yield put(push('/app/chats'));
      yield call(message.success, 'User added successfully', 2);
    } else {
      yield put(actions.errorChatAddUser(response));
      yield call(message.error, 'Error while creating new user', 2);
    }
  });
}

export function* addChatRoom() {
  yield takeEvery(actions.CHAT_ADD_CHATROOM, function*({ payload }) {
    const { lastMessage, lastMessageTime } = payload;
    const response = yield call(chatAPI.addChatRoom, payload);

    if (response.status === 'ok') {
      yield put(actions.receiveChatAddChatroom(response));

      const { id, userId } = response.data;
      const messagePayload = {
        chatRoomId: id,
        messageTime: lastMessageTime,
        senderId: userId,
        text: lastMessage,
      };
      const messageResponse = yield call(chatAPI.addMessage, messagePayload);
      if (messageResponse.status === 'ok') {
        yield put(actions.receiveChatAddMessage(messageResponse));
      }
      yield put(push('/app/chats'));
      yield call(message.success, 'message sent successfully', 2);
    } else {
      yield put(actions.errorChatAddMessage(response));
      yield call(message.error, 'Error while sending message', 2);
    }
  });
}

export function* chatSearch() {
  yield takeEvery(actions.CHAT_SEARCH, function*({ payload }) {
    const response = yield call(chatAPI.chatSearch, payload);
    if (response.status === 'ok') {
      yield put(actions.receiveChatSearch(response));
    } else {
      yield put(actions.errorChatSearch(response));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchChatUsers),
    fork(fetchChatData),
    fork(addChatData),
    fork(addChatUser),
    fork(addChatRoom),
    fork(chatSearch),
  ]);
}
