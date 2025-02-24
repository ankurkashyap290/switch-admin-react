/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import IntlMessages from '../../components/Misc/intlMessages';
import SingUpWithSocialMedia from './SignUpWithSocialMedia';
import actions from '../../redux/user/actions';

const { userLogin } = actions;
const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit = e => {
    const { userLogin } = this.props;
    const { form } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        userLogin(values);
      }
    });
  };

  render() {
    const { form, loading } = this.props;
    const { getFieldDecorator } = form;
    const info = (
      <div className="loginHelpText">
        <IntlMessages id="user.loginHelpText" /> (
        <span className="loginHighlight">
          <IntlMessages id="user.adminLogin" />
        </span>
        ) <IntlMessages id="user.or" /> (
        <span className="loginHighlight">
          <IntlMessages id="user.guestLogin" />
        </span>
        )
      </div>
    );

    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 24,
          offset: 0,
        },
      },
    };
    return (
      <div className="loginCover">
        <Form onSubmit={this.handleSubmit} className="loginForm">
          <FormItem {...formItemLayout}>{info}</FormItem>
          <FormItem {...formItemLayout}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Username"
                size="large"
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                type="password"
                placeholder="Password"
                size="large"
              />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Link className="loginForgot" to="/user/forgot">
              <IntlMessages id="user.forgotPassword" />
            </Link>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="loginSubmit"
              size="large"
            >
              <IntlMessages id="user.logIn" />
            </Button>
          </FormItem>
          <FormItem {...formItemLayout} className="loginActions">
            <SingUpWithSocialMedia />
            <Link to="/user/register">
              <IntlMessages id="user.registerNow" />
            </Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default connect(
  state => ({
    ...state.user.toJS(),
  }),
  { userLogin }
)(Form.create()(LoginForm));
