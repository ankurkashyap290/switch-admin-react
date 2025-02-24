import React, { Component } from 'react';
import { Card } from 'antd';
import IntlMessages from '../../Misc/intlMessages';

class FacebookPageStats extends Component {
  render() {
    const { peopleTaking, newLikes, totalLikes } = this.props;
    return (
      <div>
        <Card bordered={false} style={{ borderTop: '1px solid #e8e4e4' }}>
          <h3>{peopleTaking}</h3> <IntlMessages id="dashboard.social.peopleTalkingAboutYourPage" />
        </Card>
        <Card bordered={false} style={{ borderTop: '1px solid #e8e4e4' }}>
          <h3>{newLikes}</h3> <IntlMessages id="dashboard.social.newLikesOfYourPage" />
        </Card>
        <Card bordered={false} style={{ borderTop: '1px solid #e8e4e4' }}>
          <h3>{totalLikes}</h3>
          <IntlMessages id="dashboard.social.totalLikesOfYourPage" />
        </Card>
      </div>
    );
  }
}
export default FacebookPageStats;
