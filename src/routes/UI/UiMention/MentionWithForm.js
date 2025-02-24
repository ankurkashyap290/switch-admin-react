import React from 'react';
import { Mention, Button, Form } from 'antd';
import IntlMessages from '../../../components/utils/intlMessages';

const FormItem = Form.Item;
const { toContentState, getMentions } = Mention;

class MentionWithForm extends React.Component {
  state = {
    initValue: toContentState('@afc163'),
  };

  handleReset = e => {
    e.preventDefault();
    const {
      form: { resetFields },
    } = this.props;
    resetFields();
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!', values);
        return;
      }
      console.log('Submit!!!');
    });
  };

  checkMention = (rule, value, callback) => {
    const {
      form: { getFieldValue },
    } = this.props;
    const mentions = getMentions(getFieldValue('mention'));
    if (mentions.length < 2) {
      callback(new Error('More than one must be selected!'));
    } else {
      callback();
    }
  };

  render() {
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;
    const { initValue } = this.state;
    console.log('>> render', getFieldValue('mention') === initValue);
    return (
      <Form layout="horizontal">
        <FormItem
          id="control-mention"
          label="Top coders"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('mention', {
            rules: [{ validator: this.checkMention }],
            initialValue: initValue,
          })(
            <Mention
              suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', 'Chinese', 'Japanese']}
            />
          )}
        </FormItem>
        <FormItem wrapperCol={{ span: 14, offset: 6 }}>
          <Button type="primary" onClick={this.handleSubmit}>
            <IntlMessages id="ui.uiFormBack.submit" />
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={this.handleReset}>
            <IntlMessages id="ui.uiMention.reset" />
          </Button>
        </FormItem>
      </Form>
    );
  }
}
export default MentionWithForm;
