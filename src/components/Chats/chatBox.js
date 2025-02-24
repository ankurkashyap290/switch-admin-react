import React from 'react';
import { Card, Avatar, Form, Input, Button, Icon, Row, Col } from 'antd';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars';

const sendSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path
      d="M85.333333 896 981.333333 512 85.333333 128 85.333333 426.666667 725.333333 512 85.333333 597.333333 85.333333 896Z"
      p-id="1153"
    />
  </svg>
);
const SendIcon = props => <Icon component={sendSvg} {...props} />;
const { Meta } = Card;
const FormItem = Form.Item;
const { TextArea } = Input;
class ChatBox extends React.Component {
  componentDidUpdate(prevProps) {
    const { chatRoomChange } = this.props;
    if (prevProps.chatRoomChange !== chatRoomChange && chatRoomChange) {
      this.scrollBar.scrollToBottom();
    }
  }

  getUser = senderId => {
    const { chatUsers } = this.props;
    const foundedUser = Object.values(chatUsers.list).find(chatUser => {
      return senderId === chatUser.id;
    });
    return foundedUser;
  };

  calculateHeight = () => {
    const { rootHeight } = this.props;
    const adjustHeight = rootHeight - (71 + 74);
    return adjustHeight;
  };

  getChatBoxData = message => {
    const { selectedChatRoom, loading } = this.props;
    if (selectedChatRoom.userId !== message.senderId) {
      return (
        <Card
          loading={loading}
          style={{
            width: '100%',
            marginBottom: '10px',
            float: 'left',
            border: '#fff',
            padding: '10px',
          }}
          key={`chatBoxMessage_${message.id}`}
        >
          <Meta
            className="messageDetail"
            style={{ float: 'left' }}
            avatar={<Avatar src={this.getUser(message.senderId).profileImage} />}
            title={
              <small>
                {this.getUser(message.senderId).name}{' '}
                {moment(message.messageTime, 'YYYYMMDD').fromNow()}
              </small>
            }
            description={message.text}
          />
        </Card>
      );
    } else {
      return (
        <Card
          style={{
            width: '100%',
            marginBottom: '10px',
            float: 'right',
            border: '#fff',
            padding: '10px',
          }}
        >
          <Meta
            className="messageDetail"
            style={{ float: 'right' }}
            title={
              <small>
                {this.getUser(message.senderId).name}{' '}
                {moment(message.messageTime, 'YYYYMMDD').fromNow()}
              </small>
            }
            description={message.text}
          />
          <span />
        </Card>
      );
    }
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      sendMessage,

      selectedChatRoom,
      form: { validateFields, setFieldsValue },
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        const tempMessage = {
          chatRoomId: selectedChatRoom.id,
          messageTime: moment().format(),
          senderId: selectedChatRoom.userId,
          text: values.message,
        };
        sendMessage(tempMessage);
        setFieldsValue({ message: '' });
      }
    });
  };

  render() {
    const {
      chatBoxData,
      form: { getFieldDecorator },
      layout,
    } = this.props;
    return (
      <div>
        <Scrollbars
          style={{ height: this.calculateHeight() }}
          renderThumbVertical={this.renderThumb}
          ref={ref => (this.scrollBar = ref)}
        >
          {chatBoxData.map(message => (
            <div key={`message_${message.id}`}>{this.getChatBoxData(message)}</div>
          ))}
        </Scrollbars>

        {layout === 'default' ? (
          <div className="enterText">
            <Form
              layout="inline"
              onSubmit={this.handleSubmit}
              ref={ref => (this.chatBoxForm = ref)}
            >
              <Row>
                <Col span={22}>
                  <FormItem className="msgBox">
                    {getFieldDecorator('message', {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter some text!',
                        },
                      ],
                    })(
                      <TextArea
                        placeholder="Type your message"
                        rows={3}
                        onPressEnter={this.handleSubmit}
                      />
                    )}
                  </FormItem>
                </Col>
                <Col span={2}>
                  <FormItem>
                    <Button
                      type="primary"
                      shape="circle"
                      icon="check"
                      size="large"
                      htmlType="submit"
                      className="SendMessageButton"
                    />
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </div>
        ) : (
          <div className="enterTextLayoutSecond">
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem className="msgBoxLayoutSecond">
                {getFieldDecorator('message', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter some text!',
                    },
                  ],
                })(
                  <Input
                    placeholder="Type your message"
                    suffix={
                      <Button
                        htmlType="submit"
                        style={{ borderColor: '#fff', height: '30px', paddingRight: '0px' }}
                      >
                        <SendIcon style={{ fontSize: 25, color: '#173f5f' }} />
                      </Button>
                    }
                  />
                )}
              </FormItem>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default Form.create()(ChatBox);
