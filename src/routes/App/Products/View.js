/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { Card, Form, Button, Avatar } from 'antd';
import { connect } from 'react-redux';
import PageHeaderLayout from '../../../layouts/pageLayouts/PageHeaderLayout';
import Result from '../../../components/Result';
import IntlMessages from '../../../components/Misc/intlMessages';
import actions from '../../../redux/products/actions';

const { productGet } = actions;

const ViewProduct = props => {
  const { formData } = props;
  return (
    <Card cover={<img alt={formData.name} src={formData.image} />} style={{ width: 500 }}>
      <Card.Meta
        avatar={<Avatar src={formData.image} />}
        title={formData.name}
        description={
          <span>
            {formData.description}
            <br />
            {formData.price}
          </span>
        }
      />
    </Card>
  );
};

class ViewForm extends PureComponent {
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
      products: { product, error },
      match,
    } = this.props;

    const productId = match.params.id ? parseInt(match.params.id, 10) : null;
    return (
      <PageHeaderLayout title={<IntlMessages id="product.detail" />}>
        <Card bordered={false}>
          {product && product.id === productId ? (
            <ViewProduct formData={product} />
          ) : error && error.mode === 'get' ? (
            <Result
              type="error"
              title="Product Not Found"
              description="Please check the product id you provided"
              style={{ marginTop: 48, marginBottom: 16 }}
              actions={
                <Button type="primary" onClick={this.handleGoBack}>
                  Go back
                </Button>
              }
            />
          ) : (
            <div>Loading...</div>
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
)(Form.create()(ViewForm));
