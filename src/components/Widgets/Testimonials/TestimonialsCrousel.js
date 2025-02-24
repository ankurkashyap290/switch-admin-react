import React from 'react';
import { Row, Col } from 'antd';
import Carousel from '../../UiElements/carousel';
import Rate from '../../UiElements/rate';

class TestimonialCarousel extends React.Component {
  onChange = (a, b, c) => {
    console.log('a', a, b, c);
  };

  getSlides = () => {
    const children = [];
    const { testimonialSlide } = this.props;

    Object.values(testimonialSlide).map(slide =>
      children.push(
        <div
          key={slide.clientName}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundColor: slide.slideColor,
            color: slide.textColor,
          }}
          className="testimonialBody"
        >
          <Row>
            <Col xl={10} lg={10} sm={10} md={10} />
            <Col xl={4} lg={4} sm={4} md={4}>
              <img
                alt="example"
                src={slide.clientImage}
                style={{
                  width: slide.clientImageWidth,
                  height: slide.clientImageHeight,
                }}
              />
            </Col>
            <Col xl={10} lg={10} sm={10} md={10} />
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <h3 style={{ color: slide.textColor }}>{slide.review}</h3>
            <h2 style={{ color: slide.textColor }}>{slide.clientName}</h2>
            <p>{slide.clientDesignation}</p>
            <Rate value={slide.rate} />
          </Row>
        </div>
      )
    );
    return children;
  };

  render() {
    return (
      <div className="msaTestimonialCarousel">
        <Carousel afterChange={this.onChange} autoplay>
          {this.getSlides()}
        </Carousel>
      </div>
    );
  }
}
export default TestimonialCarousel;
