import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

class FacebookPageVisits extends Component {
  render() {
    const { totalVisits, averagePerDay, graphData } = this.props;
    return (
      <div className="facebookPageVisits">
        <Row>
          <Col xl={12} lg={12} sm={12} md={12}>
            <Card bordered={false} className="facebookPageTotalVisits">
              <p className="totalVisits"> {totalVisits}</p>
              <small>Total page visits</small>
            </Card>
          </Col>
          <Col xl={12} lg={12} sm={12} md={12}>
            <Card bordered={false} style={{ borderLeft: '1px solid #e8e4e4' }}>
              <p> {averagePerDay}</p>
              <small>Average visits per day</small>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card bordered={false} className="socialMediaCard">
            <ResponsiveContainer height={200} width="100%">
              <AreaChart data={graphData}>
                <XAxis dataKey="day" />
                <Tooltip />
                <Area type="monotone" dataKey="visits" stroke="#d9534d" fill="#d9534d8c" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Row>
      </div>
    );
  }
}
export default FacebookPageVisits;
