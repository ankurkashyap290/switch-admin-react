import React, { Component } from 'react';
import Card from '../../../UiElements/card';
import Avatar from '../../../UiElements/avatar';

class CardFront extends Component {
  render() {
    const {
      cardFrontTitle,
      cardFrontDesc,
      textColor,
      authorImage,
      authorName,
      backgroundImage,
      backgroundColor,
      width,
      height,
      loading,
    } = this.props;
    return (
      <div className="cardSide sideFront" style={{ borderRadius: '6px' }}>
        <div className="containerFluid">
          <Card
            bordered={false}
            loading={loading}
            style={{
              backgroundColor,
              backgroundImage: `url(${backgroundImage})`,
              color: textColor,
              width,
              height,
              backgroundRepeat: 'round',
            }}
          >
            <h3 style={{ color: textColor }}>{cardFrontTitle}</h3>
            <p>{cardFrontDesc}</p>
            <p>
              <Avatar src={authorImage} /> <span> {authorName}</span>
            </p>
          </Card>
        </div>
      </div>
    );
  }
}
export default CardFront;
