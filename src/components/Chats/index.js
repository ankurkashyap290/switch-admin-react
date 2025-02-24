/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button, Tooltip, Modal, Input, Icon } from 'antd';
import moment from 'moment';
import WindowResizeListener from 'react-window-size-listener';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import ChatRoomsList from './chatRoomsList';
import ChatBox from './chatBox';
import AddUser from './addUser';
import actions from '../../redux/chats/actions';
import Compose from './compose';
import { containerHeight } from '../../utils/index';
import IntlMessages from '../Misc/intlMessages';

const { chatFetchData, chatSelectChatroom, chatAddUser, chatAddChatroom, chatAddMessage } = actions;
const { Search } = Input;

class Chat extends React.Component {
  state = {
    searchKeyWord: null,
    winHeight: '100vH',
    visible: false,
    composeVisible: false,
  };

  componentDidMount() {
    this.fetchChatData();
  }

  fetchChatData = () => {
    const { chatFetchData } = this.props;
    chatFetchData({
      payload: {},
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  getChatRoomsData = (chatRooms, chatUsers) => {
    const chatRoomsLists = [];
    const { searchKeyWord } = this.state;
    if (searchKeyWord) {
      const tempList = chatUsers.list.filter(chatUser => {
        return chatUser.name.toLowerCase().indexOf(searchKeyWord.toLowerCase()) > -1;
      });
      chatUsers = {
        list: tempList,
      };
    }

    chatRooms.list.map(value => {
      const foundedChatUser = chatUsers.list.find(chatUser => {
        return value.otherUserId === chatUser.id;
      });
      if (foundedChatUser) {
        value.chatUser = foundedChatUser;
        chatRoomsLists.push(value);
      }
      return chatRooms;
    });
    return chatRoomsLists;
  };

  handleSelectRoom = payload => {
    const { chatSelectChatroom } = this.props;
    this.setState({ searchKeyWord: null });
    chatSelectChatroom(payload);
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  sendMessage = payload => {
    const { chatAddMessage } = this.props;
    chatAddMessage(payload);
  };

  handleAddUser = (userData, dob) => {
    const user = {
      name: userData.name,
      dob,
      mobileNo: userData.mobileNo,
      language: 'en',
      modelActive: true,
      profileImage: 'https://source.unsplash.com/100x100/?people',
    };
    const { chatAddUser } = this.props;
    chatAddUser(user);
  };

  handleNewMessage = messageData => {
    const {
      chats: { chatRooms },
    } = this.props;
    const chatRoomAvailable = chatRooms.list.find(value => {
      return value.otherUserId === messageData.user.id;
    });
    if (chatRoomAvailable) {
      const payload = {
        chatRoomId: chatRoomAvailable.id,
        messageTime: moment().format(),
        senderId: chatRoomAvailable.userId,
        text: messageData.message,
      };
      this.sendMessage(payload);
    } else {
      const payload = {
        lastMessage: messageData.message,
        lastMessageTime: moment().format(),
        otherUserId: messageData.user.id,
        reverse: false,
        userId: chatRooms.list[0].otherUserId,
      };
      const { chatAddChatroom } = this.props;
      chatAddChatroom(payload);
    }
  };

  handleSearch = searchKeyWord => {
    this.setState({ searchKeyWord });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    const { validateFieldsAndScroll, resetFields } = this.addUserRef;
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { getUser } = this.addUserRef.props;
        getUser(values);
        this.setState(() => resetFields());
      }
    });

    this.setState({
      visible: false,
    });
  };

  renderSearchBar = () => {
    const { visible } = this.state;
    return (
      <h3>
        <Col span={20}>
          <Search
            className="chatSearch"
            placeholder="input search text"
            onSearch={value => this.handleSearch(value)}
          />
        </Col>
        <Tooltip placement="top" title={<IntlMessages id="chat.addUser" />}>
          <Col span={4}>
            <Button type="primary" onClick={this.showModal}>
              <Icon type="plus" />
            </Button>
          </Col>
        </Tooltip>
        <Modal
          title="Add User"
          visible={visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel}
        >
          <AddUser
            getUser={this.handleAddUser}
            ref={ref => {
              this.addUserRef = ref;
            }}
          />
        </Modal>
      </h3>
    );
  };

  getUser = senderId => {
    const {
      chats: { chatUsers },
    } = this.props;
    const foundedUser = chatUsers.list.find(chatUser => {
      return senderId === chatUser.id;
    });
    return foundedUser;
  };

  showComposeModal = () => {
    this.setState({
      composeVisible: true,
    });
  };

  getSelectedUser = userName => {
    const {
      chatUser: { list },
    } = this.composeRef.props;

    const found = list.find(element => {
      return element.name === userName;
    });
    return found;
  };

  handleComposeOk = e => {
    console.log(e);
    const { validateFieldsAndScroll } = this.composeRef;
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        const tempData = {
          message: values.message,
          user: this.getSelectedUser(values.selectedUser),
        };
        this.handleNewMessage(tempData);
      }
    });
    this.setState({
      composeVisible: false,
    });
  };

  handleComposeCancel = e => {
    console.log(e);
    this.setState({
      composeVisible: false,
    });
  };

  render() {
    const {
      chats: { chatRooms, loading, chatUsers, chatMessages, selectedChatRoom, chatRoomChange },
      currentUser,
      layout,
      breadcrumbVisible,
    } = this.props;
    const chatUser = this.getUser(selectedChatRoom.otherUserId);
    const { winHeight, visible, composeVisible } = this.state;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);
    const chatRoomsData = this.getChatRoomsData(chatRooms, chatUsers);

    return (
      <PageHeaderLayout title={<IntlMessages id="chat.chatApp" />}>
        <WindowResizeListener
          onResize={windowSize => {
            this.setState({
              winHeight: windowSize.windowHeight,
            });
          }}
        />
        <Row
          gutter={1}
          style={{
            backgroundColor: '#fff',
            border: '1px solid #e8e8e8',
            borderRadius: '2px',
            height: `${rootHeight}px`,
          }}
        >
          <Col xl={6} sm={6} md={6} lg={6}>
            {layout === 'default' ? (
              <Card
                loading={loading}
                title={this.renderSearchBar()}
                bordered={false}
                className="mainChatList"
              >
                <ChatRoomsList
                  layout={layout}
                  chatRooms={chatRoomsData}
                  loading={loading}
                  chatUsers={chatUsers}
                  rootHeight={rootHeight}
                  onSelectRoom={this.handleSelectRoom}
                  newMessage={this.handleNewMessage}
                />
              </Card>
            ) : (
              <div>
                <div>
                  <Search
                    className="chatSearchLayoutSecond"
                    placeholder="input search text"
                    onSearch={value => this.handleSearch(value)}
                  />
                </div>
                <div>
                  <ChatRoomsList
                    layout={layout}
                    chatRooms={chatRoomsData}
                    loading={loading}
                    chatUsers={chatUsers}
                    rootHeight={rootHeight}
                    onSelectRoom={this.handleSelectRoom}
                    newMessage={this.handleNewMessage}
                  />
                </div>
              </div>
            )}
          </Col>
          <Col xl={18} sm={18} md={18} lg={18}>
            {layout === 'default' ? (
              <Card
                className="mainChatBox"
                loading={loading}
                title={
                  <h3 style={{ height: '32px' }}>
                    {chatUser && chatUser.name ? chatUser.name : ''}
                  </h3>
                }
              >
                <ChatBox
                  layout={layout}
                  rootHeight={rootHeight}
                  chatBoxData={chatMessages.list.filter(chatMessage => {
                    return selectedChatRoom.id === chatMessage.chatRoomId;
                  })}
                  chatUsers={chatUsers}
                  currentUser={currentUser}
                  sendMessage={this.sendMessage}
                  selectedChatRoom={selectedChatRoom}
                  chatRoomChange={chatRoomChange}
                />
              </Card>
            ) : (
              <Card
                className="mainChatBoxLayoutSecond"
                loading={loading}
                title={
                  <div>
                    <Row>
                      <Col span={20}>
                        <h3 style={{ height: '32px', color: '#fff' }}>
                          {chatUser && chatUser.name ? chatUser.name : ''}
                        </h3>
                      </Col>
                      <Col span={2}>
                        <Tooltip placement="top" title={<IntlMessages id="chat.addUser" />}>
                          <Button
                            style={{ marginLeft: '2px', marginRight: '2px' }}
                            type="primary"
                            onClick={this.showModal}
                          >
                            <Icon type="plus" />
                          </Button>
                        </Tooltip>
                      </Col>

                      <Modal
                        title="Add User"
                        visible={visible}
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel}
                      >
                        <AddUser
                          getUser={this.handleAddUser}
                          ref={ref => {
                            this.addUserRef = ref;
                          }}
                        />
                      </Modal>
                      <Col span={2}>
                        <Tooltip placement="top" title={<IntlMessages id="chat.composeMessage" />}>
                          <Button
                            type="primary"
                            onClick={this.showComposeModal}
                            style={{ marginLeft: '2px', marginRight: '2px' }}
                          >
                            <Icon type="mail" />
                          </Button>
                        </Tooltip>
                      </Col>
                    </Row>
                    <Modal
                      title={<IntlMessages id="chat.composeMessage" />}
                      visible={composeVisible}
                      onOk={this.handleComposeOk.bind(this)}
                      onCancel={this.handleComposeCancel}
                    >
                      <Compose
                        chatUser={chatUsers}
                        ref={ref => {
                          this.composeRef = ref;
                        }}
                      />
                    </Modal>
                  </div>
                }
              >
                <ChatBox
                  layout={layout}
                  rootHeight={rootHeight}
                  chatBoxData={chatMessages.list.filter(chatMessage => {
                    return selectedChatRoom.id === chatMessage.chatRoomId;
                  })}
                  chatUsers={chatUsers}
                  currentUser={currentUser}
                  sendMessage={this.sendMessage}
                  selectedChatRoom={selectedChatRoom}
                  chatRoomChange={chatRoomChange}
                />
              </Card>
            )}
          </Col>
        </Row>
      </PageHeaderLayout>
    );
  }
}

export default connect(
  state => ({
    chats: state.chats.toJS(),
  }),
  {
    chatFetchData,
    chatSelectChatroom,
    chatAddUser,
    chatAddChatroom,
    chatAddMessage,
  }
)(Chat);
