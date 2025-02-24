import React from 'react';
import { List, Icon } from 'antd';

const Slides = [
  {
    image: 'https://source.unsplash.com/350x240/?cloths',
  },
  {
    image: 'https://source.unsplash.com/350x240/?cloths',
  },
  {
    image: 'https://source.unsplash.com/350x240/?cloths',
  },
  {
    image: 'https://source.unsplash.com/350x240/?cloths',
  },
  {
    image: 'https://source.unsplash.com/350x240/?cloths/',
  },
  {
    image: 'https://source.unsplash.com/350x240/?cloths/',
  },
  {
    image: 'https://source.unsplash.com/350x240/?cloths/',
  },
  {
    image: 'https://source.unsplash.com/350x240/?cloths/',
  },
  {
    image: 'https://source.unsplash.com/350x240/?cloths/',
  },
  {
    image: 'https://source.unsplash.com/350x240/?cloths/',
  },
];

class CarouselCustomized extends React.Component {
  state = {
    translate: 0,
  };

  handleMoveSliderRight = () => {
    const { translate } = this.state;
    const valueToTranslate = 310;
    const totalListItem = Slides.length;
    const totalListWidth = valueToTranslate * totalListItem;
    if (translate <= totalListWidth) {
      this.setState({ translate: translate + 305 });
    }
  };

  handleMoveSliderLeft = () => {
    const { translate } = this.state;
    const valueToTranslate = 305;
    if (translate !== 0) {
      this.setState({ translate: translate - valueToTranslate });
    }
  };

  render() {
    const { translate } = this.state;
    return (
      <React.Fragment>
        <div className="CarouselWrapper">
          <div className="CarouselSlider" style={{ height: '277px' }}>
            <div className="shift" style={{ right: '0px', paddingLeft: '20px' }}>
              <div style={{ top: '50%', position: 'absolute' }}>
                <Icon type="right" onClick={this.handleMoveSliderRight} className="CarouselArrow" />
              </div>
            </div>
            <div className="shift" style={{ left: '0px', paddingLeft: '20px' }}>
              <div style={{ top: '50%', position: 'absolute' }}>
                <Icon type="left" onClick={this.handleMoveSliderLeft} className="CarouselArrow" />
              </div>
            </div>
            <div
              style={{
                transform: `translateX(-${translate}px)`,
              }}
              className="CarouselSliderList"
            >
              <List
                itemLayout="horizontal"
                dataSource={Slides}
                style={{ width: '100%', height: '200px' }}
                renderItem={item => (
                  <List.Item className="CarouselSliderListLi" style={{ backgroundColor: '#fff' }}>
                    <img src={item.image} alt="Slide" />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CarouselCustomized;
