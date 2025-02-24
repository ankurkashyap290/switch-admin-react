/* eslint-disable no-shadow */
import React from 'react';
import { Form, Input, Select } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

class AddTask extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log('hello');
    const {
      form: { validateFieldsAndScroll, resetFields },
      addTask,
    } = this.props;
    console.log('props', this.props);
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        addTask(values);
        this.setState(() => resetFields());
      }
    });
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

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label={<span>Title</span>} hasFeedback>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Please enter the title',
                },
              ],
            })(<Input placeholder="Enter your title here" />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Description</span>} hasFeedback>
            {getFieldDecorator('description', {
              rules: [
                {
                  required: true,
                  message: 'Please describe the task',
                },
              ],
            })(<TextArea placeholder="Enter your text here" />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Status</span>} hasFeedback>
            {getFieldDecorator('status', {
              initialValue: undefined,
              rules: [
                {
                  required: true,
                  message: 'Choose one option from list',
                },
              ],
            })(
              <Select placeholder="Choose Status" style={{ width: '100%' }}>
                <Option value="inprocess" key="inprocess">
                  In process
                </Option>
                <Option value="pending" key="pending">
                  Pending
                </Option>
              </Select>
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(AddTask);
