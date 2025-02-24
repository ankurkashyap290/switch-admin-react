import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Card from '../../../UiElements/card';
import Button from '../../../UiElements/button';

class ProfileCardWithAvatar extends Component {
  simpleClick = () => {
    console.log('Click Twitter Button');
  };

  render() {
    const {
      avatarImage,
      width,
      height,
      backgroundColor,
      textColor,
      designation,
      name,
      desc,
      loading,
      backgroundImage,
      twitterButtonColor,
      facebookButtonColor,
      instagramButtonColor,
      twitterButtonClick,
      facebookButtonClick,
      instagramButtonClick,
    } = this.props;
    return (
      <div className="msaProfileCardWithAvatar">
        <Card
          cover={
            <Row>
              <Col xl={4} sm={4} lg={4} md={4} />
              <Col xl={16} sm={16} lg={16} md={16}>
                <img alt="example" src={avatarImage} />
              </Col>
              <Col xl={4} sm={4} lg={4} md={4} />
            </Row>
          }
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
export default ProfileCardWithAvatar;
