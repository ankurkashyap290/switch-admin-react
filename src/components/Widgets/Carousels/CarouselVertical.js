import React from 'react';
import { Carousel } from 'antd';

class CarouselVertical extends React.Component {
  onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  getSlides = () => {
    const children = [];
    const { slides } = this.props;
    Object.values(slides).map(slide =>
      children.push(
        <div key={slide.legend} style={{ backgroundImage: `url(${slide.image})` }}>
          <h3>{slide.legend}</h3>
        </div>
      )
    );
    return children;
  };

  render() {
    const { effect, autoplay } = this.props;
    return (
      <div className="msaCarouselBasic">
        {autoplay ? (
          <Carousel afterChange={this.onChange} effect={effect} autoplay vertical>
            {this.getSlides()}
          </Carousel>
        ) : (
          <Carousel afterChange={this.onChange} effect={effect} vertical>
            {this.getSlides()}
          </Carousel>
        )}
      </div>
    );
  }
}
export default CarouselVertical;
