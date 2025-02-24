import React, { PureComponent } from 'react';
import { Form, Input, Select, AutoComplete } from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class UserInfoForm extends PureComponent {
  state = {
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e && e.preventDefault();
    const { form } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  testRef = () => {
    console.log('test ref');
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const {
      form: { getFieldDecorator },
      userInfo,
    } = this.props;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: userInfo.prefix,
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <div className="msaUserInfoForm">
        <Form onSubmit={this.handleSubmit} style={{ maxWidth: '600px' }}>
          <Form.Item {...formItemLayout} label="E-mail">
            {getFieldDecorator('email', {
              initialValue: userInfo.email,
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
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Name">
            {getFieldDecorator('name', {
              initialValue: userInfo.name,
              rules: [
                {
                  required: true,
                  message: 'Please input your name!',
                  whitespace: true,
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Phone Number">
            {getFieldDecorator('phone', {
              initialValue: userInfo.phone,
              rules: [
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Website">
            {getFieldDecorator('website', {
              initialValue: userInfo.website,
              rules: [{ required: true, message: 'Please input website!' }],
            })(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            )}
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create()(UserInfoForm);
