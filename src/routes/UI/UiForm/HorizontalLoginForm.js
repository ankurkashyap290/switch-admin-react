import React from 'react';
import { Form, Icon, Input, Button, Modal } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const FormItem = Form.Item;

function showMessage(title, message) {
  Modal.success({
    title,
    content: <pre>{message}</pre>,
  });
}

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    const {
      form: { validateFields },
    } = this.props;
    // To disabled submit button at the beginning.
    validateFields();
  }

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
      form: { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched },
    } = this.props;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} className="ant-form ant-form-horizontal">
        <FormItem validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
          {getFieldDecorator('userName', {
            rules: [
              { required: true, message: <IntlMessages id="ui.uiForm.pleaseInputYourUserName" /> },
            ],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
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
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            <IntlMessages id="ui.uiForm.logIn" />
          </Button>
        </FormItem>
      </Form>
    );
  }
}
export default HorizontalLoginForm;
