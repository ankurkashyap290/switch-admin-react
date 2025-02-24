import React, { Component } from 'react';
import Card from '../../../UiElements/card';
import Button from '../../../UiElements/button';
import Icon from '../../../UiElements/icon';

class CardBackPostControl extends Component {
  render() {
    const {
      cardBackTitle,
      cardBackDesc,
      textColor,
      backgroundImage,
      backgroundColor,
      width,
      height,
      viewButtonColor,
      viewButtonClick,
      editButtonColor,
      editButtonClick,
      deleteButtonColor,
      deleteButtonClick,
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
              shape="circle"
              style={{
                backgroundColor: viewButtonColor,
                borderColor: viewButtonColor,
              }}
              onClick={viewButtonClick}
            >
              <Icon type="file" />
            </Button>{' '}
            <Button
              type="primary"
              shape="circle"
              style={{
                backgroundColor: editButtonColor,
                borderColor: editButtonColor,
              }}
              onClick={editButtonClick}
            >
              <Icon type="edit" />
            </Button>{' '}
            <Button
              type="primary"
              shape="circle"
              style={{
                backgroundColor: deleteButtonColor,
                borderColor: deleteButtonColor,
              }}
              onClick={deleteButtonClick}
            >
              <Icon type="delete" />
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}
export default CardBackPostControl;
