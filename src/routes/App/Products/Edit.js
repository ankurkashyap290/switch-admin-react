/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { Card, Form, Button } from 'antd';
import { connect } from 'react-redux';
import PageHeaderLayout from '../../../layouts/pageLayouts/PageHeaderLayout';
import ProductForm from './ProductForm';
import IntlMessages from '../../../components/Misc/intlMessages';
import Result from '../../../components/Result';
import actions from '../../../redux/products/actions';

const { productGet } = actions;

class EditForm extends PureComponent {
  componentDidMount() {
    const { match, productGet } = this.props;
    const formDataId = match.params.id ? parseInt(match.params.id, 10) : null;
    productGet({
      id: formDataId,
    });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push('/app/products');
  };

  render() {
    const {
      products: { product, error, loading },
      match,
    } = this.props;
    const productId = match.params.id ? parseInt(match.params.id, 10) : null;
    return (
      <PageHeaderLayout title={<IntlMessages id="product.editProduct" />}>
        <Card bordered={false}>
          {product && product.id === productId ? (
            <ProductForm {...this.props} mode="edit" formData={product} isLoading={loading} />
          ) : error && error.mode === 'get' ? (
            <Result
              type="error"
              title="Product Not Found"
              description="Please check the product id you provided"
              style={{ marginTop: 48, marginBottom: 16 }}
              actions={
                <Button type="primary" onClick={this.handleGoBack}>
                  <IntlMessages id="product.goBack" />
                </Button>
              }
            />
          ) : (
            <div>
              <IntlMessages id="product.loading" />
              ...
            </div>
          )}
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(
  state => ({
    products: state.products.toJS(),
  }),
  {
    productGet,
  }
)(Form.create()(EditForm));
