import React from 'react';
import { Form, Input, Row, Col, Select } from 'antd';

const { Option } = Select;

const CardsName = ['VISA', 'MASTERCARD', 'AMEX', 'DINERS'];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const cardYears = [25, 26, 27, 28, 29, 30, 31, 32];
class CardDetails extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        return values;
      }
    });
  };

  getOptions = options => {
    const children = [];
    options.map(name =>
      children.push(
        <Option key={Date.now()} value={name}>
          {name}
        </Option>
      )
    );
    return children;
  };

  render() {
    const {
      form: { getFieldDecorator },
      cardDetails,
    } = this.props;

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

    return (
      <div className="msaCardDetailsForm">
        <Form onSubmit={this.handleSubmit} style={{ maxWidth: '600px' }}>
          <Form.Item {...formItemLayout} label="Select a Card">
            {getFieldDecorator('selectedCard', {
              initialValue: cardDetails.selectedCard,
              rules: [
                {
                  required: true,
                  message: 'Please Select a card first!',
                },
              ],
            })(<Select>{this.getOptions(CardsName)}</Select>)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="Enter your Card no">
            {getFieldDecorator('cardNo', {
              initialValue: cardDetails.cardNo,
              rules: [
                {
                  required: true,
                  message: 'Please Enter your Card no!',
                },
              ],
            })(<Input placeholder="Enter your Card no" />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="Select Card EXP. date">
            <Row>
              <Col xl={6} lg={6} md={6} sm={6}>
                {getFieldDecorator('cardExpMonth', {
                  initialValue: cardDetails.cardExpMonth,
                  rules: [
                    {
                      required: true,
                      message: 'Please card EXP. date',
                    },
                  ],
                })(<Select>{this.getOptions(months)}</Select>)}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6}>
                {getFieldDecorator('cardExpYear', {
                  initialValue: cardDetails.cardExpYear,
                  rules: [
                    {
                      required: true,
                      message: 'Please card EXP. date',
                    },
                  ],
                })(<Select>{this.getOptions(cardYears)}</Select>)}
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} />
            </Row>
          </Form.Item>
          <Form.Item {...formItemLayout} label="Enter your Card CVC">
            <Row>
              <Col xl={8} lg={8} md={8} sm={8}>
                {getFieldDecorator(
                  'cardCVC',

                  {
                    initialValue: cardDetails.cardCVC,
                    rules: [
                      {
                        required: true,
                        message: 'Please Enter your Card CVC!',
                      },
                    ],
                  }
                )(<Input placeholder="Enter your Card CVC" />)}
              </Col>
              <Col xl={16} lg={16} md={16} sm={16} />
            </Row>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create()(CardDetails);
