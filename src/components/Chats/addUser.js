import React from 'react';
import { Form, Input, DatePicker } from 'antd';
import IntlMessages from '../Misc/intlMessages';

const FormItem = Form.Item;

class AddUser extends React.Component {
  state = {
    dob: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields, resetFields },
    } = this.props;
    validateFields((err, values) => {
      if (err) {
        return;
      }

      const { dob } = this.state;
      const { getUser } = this.props;
      getUser(values, dob);
      this.setState(() => resetFields());
    });
  };

  onChange = (date, dateString) => {
    this.setState({ dob: dateString });
  };

  render() {
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
          <FormItem {...formItemLayout} hasFeedback label={<IntlMessages id="chat.fullName" />}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: <IntlMessages id="chat.pleaseInputYourFullName" />,
                  whitespace: true,
                },
              ],
            })(<Input placeholder="Full Name" size="large" />)}
          </FormItem>

          <FormItem {...formItemLayout} hasFeedback label={<IntlMessages id="chat.mobileNo" />}>
            {getFieldDecorator('mobileNo', {
              rules: [
                {
                  required: true,
                  message: <IntlMessages id="chat.pleaseInputYourMobileNumber" />,
                },
              ],
            })(<Input placeholder="mobile no" size="large" />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<IntlMessages id="chat.dob" />}>
            {getFieldDecorator('dob', {
              rules: [
                {
                  required: false,
                  message: <IntlMessages id="chat.pleasePickYourDob" />,
                },
              ],
            })(<DatePicker onChange={this.onChange} />)}
          </FormItem>
          <FormItem {...tailFormItemLayout} />
        </Form>
      </div>
    );
  }
}

export default Form.create()(AddUser);
