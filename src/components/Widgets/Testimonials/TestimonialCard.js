import React from 'react';
import { Row, Col } from 'antd';
import Card from '../../UiElements/card';

class TestimonialCard extends React.Component {
  render() {
    const {
      review,
      clientName,
      clientContact,
      clientImage,
      width,
      height,
      textColor,
      backgroundColor,
      backgroundImage,
      loading,
      clientImageHeight,
      clientImageWidth,
    } = this.props;
    return (
      <div className="msaTestimonialCard">
        <Card
          style={{
            width,
            minHeight: height,
            backgroundColor,
            color: textColor,
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'round',
          }}
          loading={loading}
        >
          <Row className="review">
            <h3 style={{ color: textColor }}>{review}</h3>
            <div className="clientInfo">
              <h2 style={{ color: textColor }}>{clientName}</h2>
              <p>{clientContact}</p>
            </div>
          </Row>
          <Row>
            <Col xl={2} sm={2} lg={2} md={2} />
            <Col xl={20} sm={20} lg={20} md={20}>
              <img
                alt={clientImage}
                src={clientImage}
                style={{ width: clientImageWidth, height: clientImageHeight }}
              />
            </Col>
            <Col xl={2} sm={2} lg={2} md={2} />
          </Row>
        </Card>
      </div>
    );
  }
}
export default TestimonialCard;
