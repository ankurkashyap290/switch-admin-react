import React from 'react';
import { Form, Input, Button } from 'antd';
import IntlMessages from '../../components/Misc/intlMessages';

const FormItem = Form.Item;
class ForgotForm extends React.Component {
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
    const info = (
      <div className="recoverHelpText">
        <IntlMessages id="user.recoverPasswordHelp" /> (
        <span className="forgotHighlight">
          <IntlMessages id="user.enterYourEmail" />
        </span>
        )
      </div>
    );

    return (
      <div className="forgotCover">
        <Form className="forgotForm" onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout}>{info}</FormItem>
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
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="forgotSubmit" size="large">
              <IntlMessages id="user.recoverPassword" />
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(ForgotForm);
