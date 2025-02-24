import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';

class SocialMediaGrowth extends Component {
  render() {
    const { label, value, growth, prevMonth } = this.props;
    return (
      <div className="socialMediaGrowth">
        <Row>
          <Col xl={12} lg={12} sm={12} md={12}>
            <Card bordered={false} className="socialMediaGrowthRight">
              <p className="socialMediaGrowthValue">{value}</p>
              <small>{label}</small>
            </Card>
          </Col>
          <Col xl={12} lg={12} sm={12} md={12}>
            <Card bordered={false} className="socialMediaGrowthLeft">
              <p>
                {growth > 0 ? (
                  <Icon type="caret-up" style={{ color: '#5bb65b' }} />
                ) : (
                  <Icon type="caret-down" style={{ color: '#d9534d' }} />
                )}{' '}
                {growth}
              </p>
              <small>{`vs ${prevMonth} (prev. month)`}</small>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SocialMediaGrowth;
