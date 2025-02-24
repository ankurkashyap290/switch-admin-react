/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import IntlMessages from '../../components/Misc/intlMessages';
import SingUpWithSocialMedia from './SignUpWithSocialMedia';
import actions from '../../redux/user/actions';

const { userRegister } = actions;
const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = e => {
    const {
      form: { validateFieldsAndScroll },
      userRegister,
    } = this.props;
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        userRegister(values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    const { confirmDirty } = this.props;
    this.setState({ confirmDirty: confirmDirty || !!value });
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
      <div className="registerCover">
        <Form className="registerForm" onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} hasFeedback>
            {getFieldDecorator('fullName', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Full Name!',
                  whitespace: true,
                },
              ],
            })(<Input placeholder="Full Name" size="large" />)}
          </FormItem>
          <FormItem {...formItemLayout} hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your User Name!',
                  whitespace: true,
                },
              ],
            })(<Input placeholder="User Name" size="large" />)}
          </FormItem>

          <FormItem {...formItemLayout} hasFeedback>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input placeholder="E-mail" size="large" />)}
          </FormItem>
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
            })(<Input type="password" placeholder="Password" />)}
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

          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox size="large">
                <IntlMessages id="user.readAgreement" />{' '}
                <a href="#/">
                  <IntlMessages id="user.agreement" />
                </a>
              </Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="registerSubmit" size="large">
              <IntlMessages id="user.userRegister" />
            </Button>
          </FormItem>
        </Form>
        <FormItem {...formItemLayout} className="registerActions">
          <SingUpWithSocialMedia />
          <Link to="/user/login">
            <IntlMessages id="user.alreadyUser" />
          </Link>
        </FormItem>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.user.toJS(),
  }),
  { userRegister }
)(Form.create()(RegistrationForm));
