import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const FormItem = Form.Item;

class AdvancedSearchForm extends React.Component {
  state = {
    expand: false,
  };

  // To generate mock Form.Item
  getFields() {
    const { expand } = this.state;
    const count = expand ? 10 : 6;
    const {
      form: { getFieldDecorator },
    } = this.props;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };
    const children = [];
    for (let i = 0; i < 10; i += 1) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <FormItem {...formItemLayout} label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`)(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
      );
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    const {
      form: { resetFields },
    } = this.props;
    resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    const { expand } = this.state;
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={40}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              <IntlMessages id="ui.uiForm.search" />
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              <IntlMessages id="ui.uiForm.clear" />
            </Button>
            <a href="#a" style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              <IntlMessages id="ui.uiForm.collapse" /> <Icon type={expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default AdvancedSearchForm;
