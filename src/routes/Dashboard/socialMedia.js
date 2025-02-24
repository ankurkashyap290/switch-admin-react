import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ComposedChart,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import IntlMessages from '../../components/Misc/intlMessages';
import demoData from './productsSale';
import SocialMediaGrowth from '../../components/Widgets/SocialMedia/socialMediaGrowth';
import FacebookPageVisits from '../../components/Widgets/SocialMedia/FacebookPageVisits';
import TwitterStats from '../../components/Widgets/SocialMedia/TwitterStats';
import FacebookPageStats from '../../components/Widgets/SocialMedia/FacebookPageStats';
import SocialMediaFollowers from '../../components/Widgets/SocialMedia/SocialMediaFollowers';
import FilterOptions from './filterOptions';

class SocialMedia extends PureComponent {
  render() {
    return (
      <PageHeaderLayout title={<IntlMessages id="dashboard.social.socialMediaDashboard" />}>
        <div className="socialMedia">
          <Row gutter={24}>
            <Col xl={8} lg={8} sm={8} md={8}>
              <Card bordered={false} style={{ height: '150px' }}>
                <h3>
                  <IntlMessages id="dashboard.social.socialMediaFollowers" />
                </h3>
                <SocialMediaFollowers
                  facebookPageLikes="26,472"
                  twitterFollowers="45,322"
                  instagramFollowers="6,524"
                />
              </Card>
              <Card
                bordered={false}
                style={{ marginTop: '20px', height: '380px' }}
                className="socialMediaCard"
                actions={[<FilterOptions defaultValue="last28Days" />]}
              >
                <h3>
                  <IntlMessages id="dashboard.social.youTubeSub" />
                </h3>
                <ResponsiveContainer height={220} width="100%">
                  <BarChart
                    data={demoData.youTubeSubscribers}
                    stackOffset="sign"
                    margin={{ top: 5, bottom: 5 }}
                  >
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="gained" fill="#82ca9d" stackId="stack" />
                    <Bar dataKey="lost" fill="#d9534d" stackId="stack" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <Card
                bordered={false}
                style={{ marginTop: '20px', height: '620px' }}
                className="socialMediaCard"
                actions={[<FilterOptions defaultValue="last28Days" />]}
              >
                <h3>
                  <IntlMessages id="dashboard.social.youTubeViews" />
                </h3>
                <ResponsiveContainer height={460} width="100%">
                  <BarChart data={demoData.youTubeSubscribers} margin={{ top: 5, bottom: 5 }}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="views" fill="#413ea0" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </Col>
            <Col xl={4} lg={4} sm={4} md={4}>
              <Card bordered={false} className="twitterStats" style={{ height: '550px' }}>
                <p>
                  <IntlMessages id="dashboard.social.twitterStats" />
                </p>

                <TwitterStats
                  followers="5,942"
                  friends="4,709"
                  statuses="9,633"
                  favorites="5,218"
                />
              </Card>

              <Card bordered={false} className="facebookPageStats" style={{ height: '620px' }}>
                <p>
                  <IntlMessages id="dashboard.social.facebookPageStats" />
                </p>
                <FacebookPageStats peopleTaking="872" newLikes="3,076" totalLikes="8,721" />
              </Card>
            </Col>
            <Col xl={12} lg={12} sm={12} md={12}>
              <Card
                bordered={false}
                className="socialMediaCard"
                style={{ height: '550px' }}
                actions={[<FilterOptions defaultValue="lastYear" />]}
              >
                <h3>
                  <IntlMessages id="dashboard.social.linkedinEngagement" />
                </h3>
                <ResponsiveContainer height={390} width="100%">
                  <LineChart data={demoData.linkedinEngagements}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="engagement"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
              <Card
                bordered={false}
                style={{ marginTop: '20px', height: '620px' }}
                className="socialMediaCard"
                actions={[<FilterOptions defaultValue="last28Days" />]}
              >
                <h3>
                  <IntlMessages id="dashboard.social.linkedinFollowers" />
                </h3>
                <ResponsiveContainer height={460} width="100%">
                  <ComposedChart
                    layout="vertical"
                    data={demoData.linkedinFollowers}
                    margin={{ top: 20, right: 0, bottom: 20, left: 90 }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="followers" barSize={20} fill="#413ea0" />
                  </ComposedChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={6}>
              <Card bordered={false} style={{ marginTop: '20px', height: '250px' }}>
                <h3>
                  <IntlMessages id="dashboard.social.twitterRetweetsOfLast10Tweets" />
                </h3>
                <SocialMediaGrowth value={400} label="Retweets" growth={141} prevMonth={277} />
              </Card>
              <Card bordered={false} style={{ marginTop: '20px', height: '250px' }}>
                <h3>
                  <IntlMessages id="dashboard.social.linkedinEngagement" />
                </h3>
                <SocialMediaGrowth value="1.97%" label="Engagements" growth={5} prevMonth={1.87} />
              </Card>
            </Col>
            <Col span={18}>
              <Card
                bordered={false}
                style={{ marginTop: '20px', height: '520px' }}
                actions={[<FilterOptions defaultValue="last28Days" />]}
              >
                <h3>
                  <IntlMessages id="dashboard.social.facebookPageVisits" />
                </h3>
                <FacebookPageVisits
                  totalVisits={10558}
                  averagePerDay="117.3"
                  graphData={demoData.facebookPageVisits}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </PageHeaderLayout>
    );
  }
}
export default SocialMedia;
