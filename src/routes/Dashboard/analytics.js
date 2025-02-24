import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';
import Charts from 'react-google-charts';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import IntlMessages from '../../components/Misc/intlMessages';
import graphData from './productsSale';
import AudienceMetricsTarget from './audienceMetricsTarget';
import DashboardTable from './dashboardTable';
import WebsitePerformance from './websitePerformance';
import GaugeChart from '../../components/Widgets/Charts/gaugeChart';
import FilterOptions from './filterOptions';
import GoogleChartResponsive from '../../components/Misc/GoogleChartResponsive';

const RADIAN = Math.PI / 180;

class Analytics extends PureComponent {
  getSalesByCityData = () => {
    const data = [];
    graphData.revenueCharts.forEach((sale, index) => {
      const saleData = {
        name: sale.name,
        sale: sale.sales,
        id: +new Date() * index,
      };
      data.push(saleData);
    });

    return data;
  };

  renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  render() {
    return (
      <PageHeaderLayout title={<IntlMessages id="dashboard.analytic.analyticsDashboard" />}>
        <div className="analytics">
          <Row>
            <Card
              bordered={false}
              className="analyticsCard"
              actions={[<FilterOptions defaultValue="last28Days" />]}
            >
              <h3>
                <IntlMessages id="dashboard.analytic.audienceMetrics" />
              </h3>

              <IntlMessages id="dashboard.analytic.audienceMetricsDesc" />

              <ResponsiveContainer height={400} width="100%">
                <ComposedChart
                  data={graphData.audienceMetrics}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="sessions" stroke="#ff7300" />
                  <Line type="monotone" dataKey="pageViews" stroke="#9dd49e63" />
                </ComposedChart>
              </ResponsiveContainer>
            </Card>
          </Row>
          <Row gutter={24} style={{ marginTop: '20px' }}>
            <Col span={8} className="mobileSession">
              <Card bordered={false} style={{ height: '500px' }}>
                <GaugeChart
                  data={graphData.mobileSessionData}
                  options={graphData.mobileSessionOptions}
                  label="dashboard.analytic.mobileSessions"
                  desc="dashboard.analytic.mobileSessionsDesc"
                  target="Mobile"
                  remaining="Desktop"
                  targetColor="#159618"
                  remainingColor="#e3725d"
                />
              </Card>
            </Col>
            <Col span={16}>
              <Card
                bordered={false}
                className="analyticsCard"
                style={{ height: '500px' }}
                actions={[<FilterOptions defaultValue="last28Days" />]}
              >
                <h3>
                  <IntlMessages id="dashboard.analytic.usersByRegions" />
                </h3>

                <IntlMessages id="dashboard.analytic.visitedUserRegions" />

                <GoogleChartResponsive style={{ width: '100%', height: '300px' }}>
                  <Charts
                    options={{}}
                    chartType="GeoChart"
                    data={graphData.usersVisitedByCountry}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    mapsApiKey="YOUR_KEY_HERE"
                    rootProps={{ 'data-testid': '1' }}
                  />
                </GoogleChartResponsive>
              </Card>
            </Col>
          </Row>
          <div style={{ marginTop: '20px' }}>
            <Card bordered={false}>
              <h3>
                <IntlMessages id="dashboard.analytic.audienceMetricsVsTarget" />
              </h3>

              <IntlMessages id="dashboard.analytic.audienceMetricsVsTargetDesc" />

              <AudienceMetricsTarget
                usersTargetMarks={graphData.usersTargetMarks}
                sessionsTargetMarks={graphData.sessionsTargetMarks}
                pageViewsTargetMarks={graphData.pageViewsTargetMarks}
              />
            </Card>
          </div>
          <Row gutter={24} style={{ marginTop: '20px' }} className="salesGraph">
            <Col span={16}>
              <Card
                bordered={false}
                className="analyticsCard"
                style={{ height: '640px' }}
                actions={[<FilterOptions defaultValue="last28Days" />]}
              >
                <DashboardTable
                  dataSource={graphData.goalsData.map((goal, index) => {
                    return { ...goal, key: +new Date() * index };
                  })}
                  type="analyticGoals"
                  label="dashboard.analytic.goals"
                  desc="dashboard.analytic.goalsDesc"
                />
              </Card>
            </Col>

            <Col span={8}>
              <Card
                bordered={false}
                className="analyticsCard"
                style={{ height: '640px' }}
                actions={[<FilterOptions defaultValue="last28Days" />]}
              >
                <WebsitePerformance websitePerformance={graphData.websitePerformance} />
              </Card>
            </Col>
          </Row>
        </div>
      </PageHeaderLayout>
    );
  }
}

export default Analytics;
