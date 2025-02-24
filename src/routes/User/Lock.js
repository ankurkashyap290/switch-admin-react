/* eslint-disable no-shadow */
import React from 'react';
import { Form, Avatar, Icon, Button, Input } from 'antd';
import { connect } from 'react-redux';
import actions from '../../redux/user/actions';
import { decodeToken } from '../../utils/tokenFunctions';

const { userLogin, userUnlockScreen } = actions;
const FormItem = Form.Item;
class LockScreen extends React.Component {
  handleSubmit = e => {
    const { form, userUnlockScreen } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        userUnlockScreen({ payload: values });
      }
    });
  };

  render() {
    const { form, token } = this.props;
    const userDetail = decodeToken(token);
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
    const { getFieldDecorator } = form;

    return (
      <div className="lockScreenCover">
        <div className="lockScreen">
          <Avatar
            className="userProfile"
            src="https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          />

          <Form onSubmit={this.handleSubmit} className="lockScreenForm">
            <FormItem {...formItemLayout}>
              <div>{userDetail.name}</div>
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
              <Button type="circle" htmlType="submit" className="unlockButton" size="large">
                <Icon type="unlock" />
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.user.toJS(),
  }),
  { userLogin, userUnlockScreen }
)(Form.create()(LockScreen));
