import React, { Component } from 'react';
import { Card } from 'antd';
import IntlMessages from '../../Misc/intlMessages';

class TwitterStats extends Component {
  render() {
    const { followers, friends, statuses, favorites } = this.props;
    return (
      <div>
        <Card bordered={false} style={{ borderTop: '1px solid #e8e4e4' }}>
          <h3>{followers}</h3> <IntlMessages id="dashboard.social.followers" />
        </Card>
        <Card bordered={false} style={{ borderTop: '1px solid #e8e4e4' }}>
          <h3>{friends}</h3> <IntlMessages id="dashboard.social.friends" />
        </Card>
        <Card bordered={false} style={{ borderTop: '1px solid #e8e4e4' }}>
          <h3>{statuses}</h3> <IntlMessages id="dashboard.social.statuses" />
        </Card>
        <Card bordered={false} style={{ borderTop: '1px solid #e8e4e4' }}>
          <h3>{favorites}</h3>
          <IntlMessages id="dashboard.social.favorites" />
        </Card>
      </div>
    );
  }
}
export default TwitterStats;
