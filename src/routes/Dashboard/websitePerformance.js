import React, { Component } from 'react';
import { Card } from 'antd';
import { ResponsiveContainer } from 'recharts';
import IntlMessages from '../../components/Misc/intlMessages';
import SimpleAreaChart from '../../components/Widgets/Charts/SimpleAreaChart';

const colors = {
  users: '#327ab7',
  profit: '#5bb75b',
  orders: '#f2ad4f',
  sales: '#d9534d',
};

class WebsitePerformance extends Component {
  render() {
    const { websitePerformance } = this.props;
    return (
      <div>
        <h3>
          <IntlMessages id="dashboard.analytic.websitePerformance" />
        </h3>
        <small>
          <IntlMessages id="dashboard.analytic.websitePerformanceDesc" />
        </small>
        <Card bordered={false} className="websitePerformance">
          <h3>
            <IntlMessages id="dashboard.analytic.bounceRate" />
          </h3>
          <ResponsiveContainer height={63} width="100%">
            <SimpleAreaChart
              data={websitePerformance}
              dataKey="bounceRate"
              strokeColor={colors.profit}
              fillColor="#9dd49e63"
            />
          </ResponsiveContainer>
        </Card>
        <Card bordered={false} className="websitePerformance">
          <h3>
            <IntlMessages id="dashboard.analytic.pageViews" />
          </h3>
          <ResponsiveContainer height={63} width="100%">
            <SimpleAreaChart
              data={websitePerformance}
              dataKey="pageViews"
              strokeColor={colors.users}
              fillColor="#87b0d46b"
            />
          </ResponsiveContainer>
        </Card>
        <Card bordered={false} className="websitePerformance">
          <h3>
            <IntlMessages id="dashboard.analytic.newSessions" />
          </h3>
          <ResponsiveContainer height={63} width="100%">
            <SimpleAreaChart
              data={websitePerformance}
              dataKey="newSessions"
              strokeColor={colors.sales}
              fillColor="#e8999759"
            />
          </ResponsiveContainer>
        </Card>
        <Card bordered={false} className="websitePerformance">
          <h3>
            <IntlMessages id="dashboard.analytic.timeOnSite" />
          </h3>
          <ResponsiveContainer height={40} width="100%">
            <SimpleAreaChart
              data={websitePerformance}
              dataKey="timeOnSite"
              strokeColor={colors.orders}
              fillColor="#f7ce997a"
            />
          </ResponsiveContainer>
        </Card>
      </div>
    );
  }
}
export default WebsitePerformance;
