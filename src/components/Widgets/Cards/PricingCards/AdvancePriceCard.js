import React, { Component } from 'react';
import Card from '../../../UiElements/card';
import Avatar from '../../../UiElements/avatar';
import Button from '../../../UiElements/button';
import List from '../../../UiElements/list';
import Icon from '../../../UiElements/icon';

class AdvancePriceCard extends Component {
  getDescription = () => {
    const { type, desc, fontColor, included, excluded } = this.props;
    if (type === 'info') {
      return (
        <List
          bordered={false}
          dataSource={desc}
          renderItem={item => <List.Item>{item}</List.Item>}
          style={{ color: fontColor, textAlign: 'center' }}
        />
      );
    } else if (type === 'product') {
      return (
        <div>
          <List
            bordered={false}
            dataSource={included}
            renderItem={item => (
              <List.Item>
                <Icon type="check" style={{ color: '#4caf50' }} />
                {item}
              </List.Item>
            )}
            style={{ color: fontColor, textAlign: 'center' }}
          />
          <List
            bordered={false}
            dataSource={excluded}
            renderItem={item => (
              <List.Item>
                {' '}
                <Icon type="close" style={{ color: '#f55c53' }} />
                {item}
              </List.Item>
            )}
            style={{ color: fontColor, textAlign: 'center' }}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    const {
      image,
      label,
      price,
      buttonText,
      fontColor,
      backgroundColor,
      buttonColor,
      onClick,
      backgroundImage,
      width,
      height,
      loading,
    } = this.props;
    return (
      <div className="msaAdvancePriceCard">
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
          {this.getDescription()}
          <br />
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
export default AdvancePriceCard;
