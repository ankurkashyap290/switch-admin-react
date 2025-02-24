/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';
import actions from '../../../redux/products/actions';

const FormItem = Form.Item;
const { productAdd, productUpdate } = actions;

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

class ProductForm extends PureComponent {
  getRandomImages = () => {
    return {
      image: 'https://source.unsplash.com/480x480/?cloths',
      thumbnail_001: 'https://source.unsplash.com/1000x1500/?cloths',
      thumbnail_002: 'https://source.unsplash.com/1000x1500/?cloths',
    };
  };

  cancelForm = () => {
    const { history } = this.props;
    history.push('/app/products');
  };

  handleSubmit = e => {
    e.preventDefault();
    const { productAdd, productUpdate, form, formData, mode } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;

      let payload = null;
      if (mode === 'add') {
        payload = {
          ...fieldsValue,
          ...this.getRandomImages(),
        };
        productAdd(payload);
      } else if (mode === 'edit') {
        payload = {
          ...formData,
          ...fieldsValue,
        };

        productUpdate(payload);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      formData,
      isLoading,
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
        <FormItem {...formItemLayout} label={<IntlMessages id="product.productName" />} hasFeedback>
          {getFieldDecorator('name', {
            initialValue: formData.name || undefined,
            rules: [
              {
                required: true,
                message: <IntlMessages id="product.productNameRequired" />,
              },
            ],
          })(<Input placeholder="product name" />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="product.description" />} hasFeedback>
          {getFieldDecorator('description', {
            initialValue: formData.description || undefined,
            rules: [
              {
                required: true,
                message: <IntlMessages id="product.descriptionRequired" />,
              },
            ],
          })(<Input.TextArea placeholder="description" />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="product.price" />} hasFeedback>
          {getFieldDecorator('price', {
            initialValue: formData.price || undefined,
            rules: [
              {
                required: true,
                message: <IntlMessages id="product.productPriceRequired" />,
              },
            ],
          })(<Input placeholder="price" />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            <IntlMessages id="product.submit" />
          </Button>
          <span className="button_spacer" />
          <Button type="default" onClick={this.cancelForm}>
            <IntlMessages id="product.cancel" />
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default connect(
  state => ({
    products: state.products,
  }),
  {
    productAdd,
    productUpdate,
  }
)(ProductForm);
