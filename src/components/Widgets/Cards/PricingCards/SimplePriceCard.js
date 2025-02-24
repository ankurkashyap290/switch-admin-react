import React, { Component } from 'react';
import Card from '../../../UiElements/card';
import Avatar from '../../../UiElements/avatar';
import Button from '../../../UiElements/button';

class SimplePriceCard extends Component {
  render() {
    const {
      label,
      image,
      price,
      desc,
      buttonText,
      fontColor,
      backgroundColor,
      buttonColor,
      backgroundImage,
      onClick,
      width,
      height,
      loading,
    } = this.props;
    return (
      <div className="msaSimplePricingCard">
        <Card
          bordered={false}
          style={{
            color: fontColor,
            backgroundColor,
            backgroundImage: `url(${backgroundImage})`,
            width,
            height,
            backgroundRepeat: 'round',
          }}
          loading={loading}
        >
          <p>{label}</p>
          {image ? <Avatar src={image} size="large" /> : ''}
          <p>{`$${price}`}</p>
          <p>{desc}</p>
          <Button
            type="primary"
            style={{ backgroundColor: buttonColor, borderColor: buttonColor }}
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </Card>
      </div>
    );
  }
}
export default SimplePriceCard;
