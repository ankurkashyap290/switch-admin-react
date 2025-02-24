import React, { Component } from 'react';
import Card from '../../../UiElements/card';
import Button from '../../../UiElements/button';
import Icon from '../../../UiElements/icon';

class CardBackPostRead extends Component {
  render() {
    const {
      cardBackTitle,
      cardBackDesc,
      textColor,
      backgroundImage,
      backgroundColor,
      width,
      height,
      readButtonClick,
      readButtonColor,
      bookmarkButtonClick,
      bookmarkButtonColor,
      loading,
    } = this.props;
    return (
      <div className="cardSide sideBack" style={{ borderRadius: '6px' }}>
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
              padding: '40px',
              backgroundRepeat: 'round',
            }}
          >
            <h3 style={{ color: textColor }}>{cardBackTitle}</h3>
            <p>{cardBackDesc}</p>
            <Button
              type="primary"
              style={{
                backgroundColor: readButtonColor,
                borderColor: readButtonColor,
              }}
              onClick={readButtonClick}
            >
              <Icon type="file" />
              Read
            </Button>{' '}
            <Button
              type="primary"
              style={{
                backgroundColor: bookmarkButtonColor,
                borderColor: bookmarkButtonColor,
              }}
              onClick={bookmarkButtonClick}
            >
              <Icon type="star" />
              Bookmark
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}
export default CardBackPostRead;
