import React from 'react';
import { List, Card, Avatar, Modal, Button } from 'antd';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars';
import IntlMessages from '../Misc/intlMessages';
import Compose from './compose';

const { Meta } = Card;

class ChatRooms extends React.Component {
  state = { composeVisible: false, selectedChat: null };

  listItemClick = item => {
    const { onSelectRoom } = this.props;
    onSelectRoom && onSelectRoom(item);
    this.setState({ selectedChat: item.id });
  };

  calculateHeight = () => {
    const { rootHeight, layout } = this.props;
    const adjustHeight = layout === 'default' ? rootHeight - 117 : rootHeight - 34;
    return adjustHeight;
  };

  showComposeModal = () => {
    this.setState({
      composeVisible: true,
    });
  };

  handleComposeOk = e => {
    console.log(e);
    const { validateFieldsAndScroll } = this.composeRef;
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { newMessage } = this.composeRef.props;

        const tempData = {
          message: values.message,
          user: this.getSelectedUser(values.selectedUser),
        };
        newMessage(tempData);
      }
    });
    this.setState({
      composeVisible: false,
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

  handleComposeCancel = e => {
    console.log(e);

    this.setState({
      composeVisible: false,
    });
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  renderListItem = item => {
    const { selectedChat } = this.state;

    return (
      <List.Item key={item.id} onClick={this.listItemClick.bind(this, item)}>
        <List.Item.Meta
          title={
            <div>
              {selectedChat === item.id ? (
                <Card
                  style={{
                    border: '#fff',
                    backgroundColor: '#959b9e',
                  }}
                >
                  <Meta
                    avatar={<Avatar src={item.chatUser.profileImage} />}
                    title={`${item.chatUser.name}`}
                    description={
                      <div>
                        <div style={{ float: 'left', width: '70%' }}>{item.lastMessage}</div>
                        <div style={{ float: 'right' }}>
                          <small>{moment(item.lastMessageTime, 'YYYYMMDD').fromNow()}</small>
                        </div>
                      </div>
                    }
                  />
                </Card>
              ) : (
                <Card
                  style={{
                    border: '#fff',
                  }}
                >
                  <Meta
                    avatar={<Avatar src={item.chatUser.profileImage} />}
                    title={`${item.chatUser.name}`}
                    description={
                      <div>
                        <div style={{ float: 'left', width: '70%' }}>{item.lastMessage}</div>
                        <div style={{ float: 'right' }}>
                          <small>{moment(item.lastMessageTime, 'YYYYMMDD').fromNow()}</small>
                        </div>
                      </div>
                    }
                  />
                </Card>
              )}
            </div>
          }
        />
      </List.Item>
    );
  };

  render() {
    const { chatRooms, loading, chatUsers, newMessage, layout } = this.props;
    const { composeVisible } = this.state;

    return (
      <div
        style={{
          backgroundColor: '#fff',
        }}
        className="chatRoomList"
      >
        <Scrollbars
          style={{ height: this.calculateHeight() }}
          renderThumbVertical={this.renderThumb}
        >
          <List
            className="chatList"
            loading={loading}
            itemLayout="horizontal"
            dataSource={chatRooms.sort((a, b) => {
              return new Date(b.lastMessageTime) - new Date(a.lastMessageTime);
            })}
            renderItem={this.renderListItem}
          />
        </Scrollbars>

        {layout === 'default' ? (
          <div className="composeMsg">
            <Button type="primary" onClick={this.showComposeModal} style={{ width: '100%' }}>
              <IntlMessages id="chat.compose" />
            </Button>
          </div>
        ) : null}

        <Modal
          title="Compose message"
          visible={composeVisible}
          onOk={this.handleComposeOk.bind(this)}
          onCancel={this.handleComposeCancel}
        >
          <Compose
            chatUser={chatUsers}
            newMessage={newMessage}
            ref={ref => {
              this.composeRef = ref;
            }}
          />
        </Modal>
      </div>
    );
  }
}

export default ChatRooms;
