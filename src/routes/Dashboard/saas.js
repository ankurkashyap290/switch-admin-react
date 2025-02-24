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
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import IntlMessages from '../../components/Misc/intlMessages';
import demoData from './productsSale';
import GaugeChart from '../../components/Widgets/Charts/gaugeChart';
import DashboardTable from './dashboardTable';
import FilterOptions from './filterOptions';

class Saas extends PureComponent {
  render() {
    return (
      <PageHeaderLayout title={<IntlMessages id="dashboard.saas.saasDashboard" />}>
        <div className="saas">
          <Row gutter={24}>
            <Col span={12}>
              <Card
                style={{ height: '586px' }}
                bordered={false}
                className="saasCard"
                actions={[<FilterOptions defaultValue="last28Days" />]}
              >
                <DashboardTable
                  dataSource={demoData.product}
                  type="product"
                  label="dashboard.saas.product"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                style={{ height: '586px' }}
                bordered={false}
                className="saasCard"
                actions={[<FilterOptions defaultValue="last28Days" />]}
              >
                <DashboardTable
                  dataSource={demoData.sales}
                  type="sales"
                  label="dashboard.saas.sales"
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={24} style={{ marginTop: '20px' }}>
            <Col span={18}>
              <Row>
                <Card
                  style={{ height: '537px' }}
                  bordered={false}
                  className="saasCard"
                  actions={[<FilterOptions defaultValue="lastYear" />]}
                >
                  <h3>
                    <IntlMessages id="dashboard.saas.accountAndMrr" />
                  </h3>
                  <ResponsiveContainer height={400} width="100%">
                    <ComposedChart
                      data={demoData.accountsAndMrrGrowth}
                      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="actual" barSize={20} fill="#413ea0" />
                      <Line type="monotone" dataKey="plan" stroke="#ff7300" />
                      <Line type="monotone" dataKey="MoM" stroke="#d9534d" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </Card>
              </Row>
              <Row>
                <Card
                  bordered={false}
                  className="saasCard"
                  actions={[<FilterOptions defaultValue="last28Days" />]}
                  style={{ marginTop: '20px', height: '557px' }}
                >
                  <DashboardTable
                    dataSource={demoData.marketing}
                    type="marketing"
                    label="dashboard.saas.marketing"
                  />
                </Card>

                <Card
                  bordered={false}
                  className="saasCard"
                  actions={[<FilterOptions defaultValue="last28Days" />]}
                  style={{ marginTop: '20px', height: '557px' }}
                >
                  <DashboardTable
                    dataSource={demoData.marketing}
                    type="finance"
                    label="dashboard.saas.finance"
                  />
                </Card>
              </Row>
            </Col>
            <Col span={6}>
              <Card bordered={false} style={{ height: '410px' }}>
                <GaugeChart
                  data={demoData.totalAccountData}
                  options={demoData.totalAccountOptions}
                  label="dashboard.saas.totalAccount"
                  desc=""
                  target="Target(6,674)"
                  remaining="6,417 Accounts"
                  targetColor="#159618"
                  remainingColor="#e3725d"
                />
              </Card>
              <Card bordered={false} className="saasGauge" style={{ height: '410px' }}>
                <GaugeChart
                  label="dashboard.saas.mrr"
                  desc=""
                  data={demoData.mrrData}
                  options={demoData.mrrOptions}
                  target="Target($520k)"
                  remaining="$694.030 MRR"
                  targetColor="#159618"
                  remainingColor="#e3725d"
                />
              </Card>
              <Card bordered={false} className="saasGauge" style={{ height: '410px' }}>
                <GaugeChart
                  label="dashboard.saas.avgMrr"
                  desc=""
                  data={demoData.avgMrrData}
                  options={demoData.avgMrrOptions}
                  target="Target($87)"
                  remaining="$108 Avg.Mrr"
                  targetColor="#159618"
                  remainingColor="#e3725d"
                />
              </Card>
              <Card bordered={false} className="saasGauge" style={{ height: '400px' }}>
                <GaugeChart
                  label="dashboard.saas.trailToWin"
                  desc=""
                  data={demoData.trialToWinData}
                  options={demoData.trialToWinOptions}
                  target="Target(40%)"
                  remaining="62% CR"
                  targetColor="#159618"
                  remainingColor="#e3725d"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </PageHeaderLayout>
    );
  }
}
export default Saas;
