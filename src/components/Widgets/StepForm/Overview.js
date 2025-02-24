import React from 'react';
import { Row, Col } from 'antd';
import * as _ from 'lodash';

class Overview extends React.Component {
  getUserInfo = () => {
    const { userInfo } = this.props;
    return (
      <Row>
        <Col xl={12} sm={12} md={12} lg={12}>
          <div style={{ float: 'right', marginRight: '10px' }}>
            <p>Name :</p>
            <p>Email :</p>
            <p>Phone no :</p>
          </div>
        </Col>
        <Col xl={12} sm={12} md={12} lg={12}>
          <div>
            <p>{userInfo.name}</p>
            <p>{userInfo.email}</p>
            <p>{`${userInfo.prefix}-${userInfo.phone}`}</p>
          </div>
        </Col>
      </Row>
    );
  };

  getCardDetails = () => {
    const { cardDetails } = this.props;
    return (
      <Row>
        <Col xl={12} sm={12} md={12} lg={12}>
          <div style={{ float: 'right', marginRight: '10px' }}>
            <p>Card Name :</p>
            <p>Card No :</p>
            <p>Exp. Date :</p>
          </div>
        </Col>
        <Col xl={12} sm={12} md={12} lg={12}>
          <div>
            <p>{cardDetails.selectedCard}</p>
            <p>{cardDetails.cardNo}</p>
            <p>{`${cardDetails.cardExpMonth}/${cardDetails.cardExpYear}`}</p>
          </div>
        </Col>
      </Row>
    );
  };

  render() {
    const { userInfo, cardDetails } = this.props;

    return (
      <div className="msaOverview">
        <Row>
          <div className="userDetails">
            <div className="userDetailsTitle">
              <h2>User Details</h2>
            </div>
            <div className="userDetailsBody">
              {!_.isEmpty(userInfo) ? (
                this.getUserInfo()
              ) : (
                <h3>Please Fill User information form</h3>
              )}
            </div>
          </div>
          <div className="cardDetails">
            <div className="cardDetailsTitle">
              <h2>Card Details</h2>
            </div>
            <div className="cardDetailsBody">
              {!_.isEmpty(cardDetails) ? (
                this.getCardDetails()
              ) : (
                <h3>Please provide your payment details</h3>
              )}
            </div>
          </div>
        </Row>
      </div>
    );
  }
}
export default Overview;
