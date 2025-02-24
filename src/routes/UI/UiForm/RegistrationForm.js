import React from 'react';
import {
  Form,
  Icon,
  Input,
  Select,
  Checkbox,
  Button,
  Modal,
  Tooltip,
  Cascader,
  Row,
  Col,
  AutoComplete,
} from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

function showMessage(title, message) {
  Modal.success({
    title,
    content: <pre>{message}</pre>,
  });
}

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    const {
      form: { validateFieldsAndScroll },
    } = this.props;
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        showMessage('Received values of form: ', JSON.stringify(values, null, 2));
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    const { confirmDirty } = this.state;
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
    } = this.props;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label={<IntlMessages id="ui.uiForm.email" />} hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: <IntlMessages id="ui.uiForm.theInputIsNotValidEmail" />,
              },
              {
                required: true,
                message: <IntlMessages id="ui.uiForm.pleaseInputYourEmail" />,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="ui.uiForm.password" />} hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: <IntlMessages id="ui.uiForm.pleaseInputYourPassword" />,
              },
              {
                validator: this.checkConfirm,
              },
            ],
          })(<Input type="password" />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={<IntlMessages id="ui.uiForm.confirmPassword" />}
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: <IntlMessages id="ui.uiForm.pleaseConfirmYourPassword" />,
              },
              {
                validator: this.checkPassword,
              },
            ],
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title={<IntlMessages id="ui.uiForm.whatDoYouWantOtherToCallYou?" />}>
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
          hasFeedback
        >
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: <IntlMessages id="ui.uiForm.pleaseInputYourNickName" />,
                whitespace: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="ui.uiForm.habitualResidence" />}>
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              {
                type: 'array',
                required: true,
                message: <IntlMessages id="ui.uiForm.pleaseSelectYourHabitualResidence" />,
              },
            ],
          })(<Cascader options={residences} />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="ui.uiForm.PhoneNumber" />}>
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: <IntlMessages id="ui.uiForm.pleaseInputYourPhoneNumber" />,
              },
            ],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label=<IntlMessages id="ui.uiForm.website" />>
          {getFieldDecorator('website', {
            rules: [
              { required: true, message: <IntlMessages id="ui.uiForm.pleaseInputYourWebsite" /> },
            ],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={<IntlMessages id="ui.uiForm.captcha" />}
          extra={<IntlMessages id="ui.uiForm.weMustMakeSureThatYouAreAHuman" />}
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [
                  {
                    required: true,
                    message: <IntlMessages id="ui.uiForm.pleaseInputTheCaptchaYouGot" />,
                  },
                ],
              })(<Input size="large" />)}
            </Col>
            <Col span={12}>
              <Button size="large">
                <IntlMessages id="ui.uiForm.getCaptcha" />
              </Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              <IntlMessages id="ui.uiForm.readAgreement" />{' '}
              <a href="#a">
                <IntlMessages id="ui.uiForm.agreement" />
              </a>
            </Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            <IntlMessages id="ui.uiForm.register" />
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default RegistrationForm;
