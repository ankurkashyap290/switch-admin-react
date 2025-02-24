import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  data: {
    list: [],
  },
  chatMessages: {
    list: [],
  },
  chatRooms: {
    list: [],
  },
  chatUsers: {
    list: [],
  },
  selectedChatRoom: {},
  loading: true,
  chatRoomChange: false,
});

export function chatReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHAT_FETCH_DATA:
      return state.set('loading', true);

    case actions.RECEIVE_CHAT_FETCH_DATA:
      return state
        .set('chatRooms', action.chatRooms)
        .set('chatUsers', action.chatUsers)
        .set('chatMessages', action.chatMessages)
        .set('selectedChatRoom', action.chatRooms.list[0])
        .set('loading', false);

    case actions.ERROR_CHAT_FETCH_DATA:
      return state.set('loading', false);
    case actions.CHAT_FETCH_USER: {
      return state.set('loading', true);
    }
    case actions.RECEIVE_CHAT_FETCH_USER: {
      return state.set('chatRooms', action.chatRooms).set('loading', false);
    }
    case actions.ERROR_CHAT_FETCH_USER: {
      return state.set('loading', false);
    }

    case actions.CHAT_ADD_MESSAGE: {
      return state.set('chatRoomChange', false);
    }
    case actions.RECEIVE_CHAT_ADD_MESSAGE: {
      const chatRooms = state.get('chatRooms');
      const chatMessages = state.get('chatMessages');

      const newMessage = action.payload.data;
      chatMessages.list.push(newMessage);
      const chatRoomIndex = chatRooms.list.findIndex(elem => {
        return elem.id === newMessage.chatRoomId;
      });
      chatRooms.list[chatRoomIndex].lastMessage = newMessage.text;
      chatRooms.list[chatRoomIndex].lastMessageTime = newMessage.messageTime;
      const selectChatRoom = chatRooms.list.find(elem => {
        return elem.id === newMessage.chatRoomId;
      });
      return state
        .set('chatRooms', chatRooms)
        .set('chatMessages', chatMessages)
        .set('selectedChatRoom', selectChatRoom)
        .set('chatRoomChange', true);
    }
    case actions.ERROR_CHAT_ADD_MESSAGE: {
      return state.set('loading', false);
    }

    case actions.CHAT_ADD_USER: {
      return state.set('loading', true);
    }
    case actions.RECEIVE_CHAT_ADD_USER: {
      const chatUsers = state.get('chatUsers');

      chatUsers.list.push(action.data);

      return state.set('chatUsers', chatUsers).set('loading', false);
    }

    case actions.ERROR_CHAT_ADD_USER: {
      return state.set('loading', false);
    }
    case actions.CHAT_ADD_CHATROOM: {
      return state.set('loading', true);
    }
    case actions.RECEIVE_CHAT_ADD_CHATROOM: {
      const chatRooms = state.get('chatRooms');

      chatRooms.list.push(action.payload.data);
      return state
        .set('chatRooms', chatRooms)

        .set('selectedChatRoom', action.payload.data)
        .set('loading', false);
    }
    case actions.ERROR_CHAT_ADD_CHATROOM: {
      return state.set('loading', false);
    }
    case actions.CHAT_SELECT_CHATROOM: {
      return state.set('selectedChatRoom', action.payload);
    }
    case actions.CHAT_SEARCH: {
      const chatRooms = state.get('chatRooms');
      const chatUsers = state.get('chatUsers');
      const selectedChatRoom = state.get('selectedChatRoom');

      chatUsers.list = { ...action.payload.data[0] };
      const tempChatRoom = Object.values(chatRooms.list).filter(
        chatRoom => chatRoom.otherUserId === action.payload.data[0].id
      );

      selectedChatRoom.list = { ...tempChatRoom[0] };
      return state.set('selectedChatRoom', tempChatRoom[0]).set('chatUsers', chatUsers);
    }

    default:
      return state;
  }
}
