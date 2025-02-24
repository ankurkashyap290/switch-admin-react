import React, { Component } from 'react';
import Card from '../../../UiElements/card';
import Button from '../../../UiElements/button';

class FullBackgroundCard extends Component {
  render() {
    const {
      label,
      desc,
      width,
      height,
      backgroundColor,
      textColor,
      buttonText,
      buttonColor,
      onClick,
      loading,
      backgroundImage,
    } = this.props;
    return (
      <div className="msaFullBackgroundCard">
        <Card
          bordered={false}
          style={{
            width,
            height,
            backgroundColor,
            color: textColor,
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'round',
          }}
          loading={loading}
        >
          <h4 style={{ color: textColor }}>{label}</h4>
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
export default FullBackgroundCard;
