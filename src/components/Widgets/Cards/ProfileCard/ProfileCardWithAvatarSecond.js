import React, { Component } from 'react';
import { Row, Col, Avatar, Divider } from 'antd';
import Card from '../../../UiElements/card';
import Button from '../../../UiElements/button';

class ProfileCardWithAvatar extends Component {
  render() {
    const {
      avatarImage,
      height,
      designation,
      name,
      desc,
      buttonText,
      buttonColor,
      onClick,
    } = this.props;
    return (
      <div className="msaProfileCardWithAvatarSecond">
        <Card>
          <Row>
            <Col xl={8} sm={8} lg={8} md={8}>
              <Avatar src={avatarImage} />
              <h3>{name}</h3>
              <p>{designation}</p>
              <Button
                type="primary"
                style={{ backgroundColor: buttonColor, borderColor: buttonColor }}
                onClick={onClick}
              >
                {buttonText}
              </Button>
            </Col>

            <Divider type="vertical" style={{ minHeight: height }} />

            <Col xl={14} sm={14} lg={14} md={14}>
              <p>{desc}</p>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default ProfileCardWithAvatar;
