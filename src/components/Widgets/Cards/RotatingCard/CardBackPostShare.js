import React, { Component } from 'react';
import Card from '../../../UiElements/card';
import Button from '../../../UiElements/button';
import Icon from '../../../UiElements/icon';
import List from '../../../UiElements/list';

class CardBackPostShare extends Component {
  getSocialMedia = () => {
    const { socialMedia } = this.props;
    return (
      <List
        grid={{ gutter: 12, column: 3 }}
        dataSource={socialMedia}
        style={{ textAlign: 'center' }}
        renderItem={item => (
          <List.Item>
            <Button type="primary" shape="circle">
              <Icon type={item} />
            </Button>
          </List.Item>
        )}
      />
    );
  };

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
      loading,
      twitterButtonClick,
      twitterButtonColor,
      facebookButtonClick,
      facebookButtonColor,
      instagramButtonClick,
      instagramButtonColor,
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
            {twitterButtonColor ? (
              <Button
                type="primary"
                shape="circle"
                style={{
                  backgroundColor: twitterButtonColor,
                  borderColor: twitterButtonColor,
                }}
                onClick={twitterButtonClick}
              >
                <Icon type="twitter" />
              </Button>
            ) : (
              ''
            )}{' '}
            {facebookButtonColor ? (
              <Button
                type="primary"
                shape="circle"
                style={{
                  backgroundColor: facebookButtonColor,
                  borderColor: facebookButtonColor,
                }}
                onClick={facebookButtonClick}
              >
                <Icon type="facebook" />
              </Button>
            ) : (
              ''
            )}{' '}
            {instagramButtonColor ? (
              <Button
                type="primary"
                shape="circle"
                style={{
                  backgroundColor: instagramButtonColor,
                  borderColor: instagramButtonColor,
                }}
                onClick={instagramButtonClick}
              >
                <Icon type="instagram" />
              </Button>
            ) : (
              ''
            )}
          </Card>
        </div>
      </div>
    );
  }
}
export default CardBackPostShare;
