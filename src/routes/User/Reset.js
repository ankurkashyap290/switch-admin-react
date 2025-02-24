/* eslint-disable no-shadow */
import React from 'react';
import { Form, Input, Button } from 'antd';
import IntlMessages from '../../components/Misc/intlMessages';

const FormItem = Form.Item;

class ResetForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = e => {
    const {
      form: { validateFieldsAndScroll },
    } = this.props;
    e.preventDefault();
    validateFieldsAndScroll();
  };

  checkPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    const { confirmDirty } = this.state;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
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
      <div className="resetCover">
        <Form className="resetForm" onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.checkConfirm,
                },
              ],
            })(<Input type="password" placeholder="New Password" />)}
          </FormItem>
          <FormItem {...formItemLayout} hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.checkPassword,
                },
              ],
            })(
              <Input
                type="password"
                placeholder="Confirm Password"
                onBlur={this.handleConfirmBlur}
                size="large"
              />
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="resetSubmit" size="large">
              <IntlMessages id="user.userResetPassword" />
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(ResetForm);
