import React, { Component } from 'react';
import Card from '../../../UiElements/card';
import Button from '../../../UiElements/button';
import Icon from '../../../UiElements/icon';

class ProfileCardWithCover extends Component {
  render() {
    const {
      coverImage,
      width,
      height,
      backgroundColor,
      textColor,
      designation,
      name,
      desc,
      loading,
      backgroundImage,
      twitterButtonClick,
      twitterButtonColor,
      facebookButtonClick,
      facebookButtonColor,
      instagramButtonClick,
      instagramButtonColor,
    } = this.props;
    return (
      <div className="msaProfileCardWithCover">
        <Card
          cover={<img alt="example" src={coverImage} />}
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
          <h3 style={{ color: textColor }}>{name}</h3>
          <p>{designation}</p>
          <p>{desc}</p>
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
    );
  }
}
export default ProfileCardWithCover;
