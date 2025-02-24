import React, { PureComponent } from 'react';
import { Card, Form } from 'antd';
import { connect } from 'react-redux';
import PageHeaderLayout from '../../../layouts/pageLayouts/PageHeaderLayout';
import { newEntities } from '../../../configs/app.config';
import ProductForm from './ProductForm';
import IntlMessages from '../../../components/Misc/intlMessages';

class AddForm extends PureComponent {
  render() {
    return (
      <PageHeaderLayout title={<IntlMessages id="product.addNew" />}>
        <Card bordered={false}>
          <ProductForm {...this.props} mode="add" formData={newEntities.products} />
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  products: state.products,
}))(Form.create()(AddForm));
