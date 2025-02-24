import React from 'react';
import { Form, Input, AutoComplete } from 'antd';
import IntlMessages from '../Misc/intlMessages';

const FormItem = Form.Item;
const { TextArea } = Input;
class Compose extends React.Component {
  state = {
    selectedUser: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFieldsAndScroll },
    } = this.props;

    validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { selectedUser } = this.state;
        const { newMessage } = this.props;
        const tempData = {
          message: values.message,
          user: this.getSelectedUser(selectedUser),
        };

        newMessage(tempData);
      }
    });
  };

  getSelectedUser = userName => {
    const {
      chatUser: { list },
    } = this.props;
    const found = list.find(element => {
      return element.name === userName;
    });
    return found;
  };

  onSelect = selectedUser => {
    this.setState({ selectedUser });
  };

  render() {
    const {
      chatUser: { list },
    } = this.props;
    const {
      form: { getFieldDecorator },
    } = this.props;
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 18,
        },
        sm: {
          span: 24,
          offset: 0,
        },
      },
    };
    return (
      <div className="chatCover">
        <Form className="chatForm" onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} hasFeedback>
            {getFieldDecorator('selectedUser', {
              rules: [
                {
                  required: true,
                  message: <IntlMessages id="chat.pleaseFindTheContact" />,
                },
              ],
            })(
              <AutoComplete
                dataSource={list.map(el => {
                  return el.name;
                })}
                onSelect={this.onSelect}
                placeholder="find user"
                filterOption={(inputValue, option) =>
                  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} hasFeedback>
            {getFieldDecorator('message', {
              rules: [
                {
                  required: true,
                  message: <IntlMessages id="chat.pleaseEnterSomeText" />,
                },
              ],
            })(<TextArea placeholder="Enter your text here" />)}
          </FormItem>
          <FormItem {...tailFormItemLayout} />
        </Form>
      </div>
    );
  }
}

export default Form.create()(Compose);
