import React from 'react';
import { Form, Icon, Input, Button, Modal, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import IntlMessages from '../../../components/Misc/intlMessages';

const FormItem = Form.Item;

function showMessage(title, message) {
  Modal.success({
    title,
    content: <pre>{message}</pre>,
  });
}

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    const {
      form: { validateFields },
    } = this.props;
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        showMessage('Received values of form: ', JSON.stringify(values, null, 2));
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="ant-form  login-form" style={{ maxWidth: 300 }}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [
              { required: true, message: <IntlMessages id="ui.uiForm.pleaseInputYourUserName" /> },
            ],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: <IntlMessages id="ui.uiForm.pleaseInputYourPassword" /> },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>
              <IntlMessages id="ui.uiForm.rememberMe" />
            </Checkbox>
          )}
          <a className="login-form-forgot" href="#a">
            <IntlMessages id="ui.uiForm.forgotPassword" />
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            <IntlMessages id="ui.uiForm.logIn" />
          </Button>
          <IntlMessages id="ui.uiForm.or" />{' '}
          <Link to="components-forms/form/registration">
            <IntlMessages id="ui.uiForm.registerNow" />
          </Link>
        </FormItem>
      </Form>
    );
  }
}
export default NormalLoginForm;
