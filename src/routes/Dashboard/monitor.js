import React, { PureComponent } from 'react';
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
  ResponsiveContainer,
} from 'recharts';
import { Row, Col, Card, Tag, Progress } from 'antd';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import todaySalesData from './productsSale';
import IntlMessages from '../../components/Misc/intlMessages';

const productColor = {
  furniture: '#2777b6',
  cloths: '#a7b4b9',
  jewelry: '#78b47c',
  shoes: '#f2ad4f',
};

const cityColor = {
  mountainView: '#2777b6',
  sanFrancisco: '#a7b4b9',
  newYork: '#78b47c',
  sunnyvale: '#f2ad4f',
  paloAlto: '#d9534d',
  others: '#1f90cf',
};
class Monitor extends PureComponent {
  render() {
    return (
      <PageHeaderLayout title={<IntlMessages id="dashboard.monitor.monitorDashboard" />}>
        <Row gutter={24}>
          <Col span={18}>
            <Row>
              <Card bordered={false} style={{ height: '511px' }}>
                <h3>
                  <IntlMessages id="dashboard.monitor.todayProductSale" />
                </h3>
                <ResponsiveContainer height={400} width="100%">
                  <BarChart
                    data={todaySalesData.saleToday}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="0 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#b8b6e8" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      barSize={30}
                      dataKey="furniture"
                      fill={productColor.furniture}
                    />
                    <Bar yAxisId="left" barSize={30} dataKey="cloths" fill={productColor.cloths} />
                    <Bar
                      yAxisId="left"
                      barSize={30}
                      dataKey="jewelry"
                      fill={productColor.jewelry}
                    />
                    <Bar yAxisId="left" barSize={30} dataKey="shoes" fill={productColor.shoes} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </Row>
            <Row style={{ paddingTop: '20px' }}>
              <Card bordered={false} style={{ height: '700px' }}>
                <h3>
                  <IntlMessages id="dashboard.monitor.todayRevenueByCity" />
                </h3>
                <ResponsiveContainer height={600} width="100%">
                  <LineChart
                    data={todaySalesData.todayRevenueCharts}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="mountainView"
                      stroke={cityColor.mountainView}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="sanFrancisco"
                      stroke={cityColor.sanFrancisco}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="newYork"
                      stroke={cityColor.newYork}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="sunnyvale"
                      stroke={cityColor.sunnyvale}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="paloAlto"
                      stroke={cityColor.paloAlto}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="others"
                      stroke={cityColor.others}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </Row>
            <Row style={{ paddingTop: '20px' }}>
              <Card
                bordered={false}
                title={
                  <h3>
                    <IntlMessages id="dashboard.monitor.proportionPerCat" />
                  </h3>
                }
                style={{ height: '330px' }}
              >
                <Col span={6}>
                  <Card bordered={false}>
                    <h3>
                      <IntlMessages id="dashboard.monitor.furniture" />
                    </h3>
                    <Progress type="dashboard" percent={75} strokeColor={productColor.furniture} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false}>
                    <h3>
                      <IntlMessages id="dashboard.monitor.cloths" />
                    </h3>
                    <Progress type="dashboard" percent={67} strokeColor={productColor.cloths} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false}>
                    <h3>
                      <IntlMessages id="dashboard.monitor.jewelry" />
                    </h3>
                    <Progress type="dashboard" percent={84} strokeColor={productColor.jewelry} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false}>
                    <h3>
                      <IntlMessages id="dashboard.monitor.shoes" />
                    </h3>
                    <Progress type="dashboard" percent={59} strokeColor={productColor.shoes} />
                  </Card>
                </Col>
              </Card>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Card bordered={false}>
                <h3>
                  <IntlMessages id="dashboard.monitor.totalTransactionsToday" />
                </h3>
                <Tag color="#2777b6">12,454,323</Tag>
                <Progress percent={73} className="todayTransaction" />
              </Card>
              <Card bordered={false} className="monitorSaleBar">
                <h3>
                  <IntlMessages id="dashboard.monitor.salesTarget" />
                </h3>
                <Progress percent={88} className="salesTarget" />
              </Card>
              <Card bordered={false} className="monitorSaleBar">
                <h3>
                  <IntlMessages id="dashboard.monitor.transPerSec" />
                </h3>
                <Tag color="#a7b4b9">167</Tag>
                <Progress percent={82} className="TransactionPerSec" />
              </Card>
            </Row>
            <Row style={{ paddingTop: '20px' }}>
              <Card bordered={false} className="popularSearches">
                <h3>
                  <IntlMessages id="dashboard.monitor.popularSearches" />
                </h3>
                <Tag color={cityColor.mountainView}>Unbranded Concrete Hat</Tag>
                <Tag color={cityColor.sanFrancisco}>Ergonomic Fresh Cheese</Tag>
                <Tag color={cityColor.newYork}>Small Soft Pizza</Tag>
                <Tag color={cityColor.others}>Fantastic Granite Salad</Tag>
                <Tag color={cityColor.mountainView}>Sibyl Ortiz</Tag>
                <Tag color={cityColor.newYork}>Glen Gleichner</Tag>
                <Tag color={cityColor.others}>Sleek Concrete Bike</Tag>
                <Tag color={cityColor.mountainView}>Bracelet</Tag>
                <Tag color={cityColor.sanFrancisco}>Ergonomic Fresh Cheese</Tag>
                <Tag color={cityColor.newYork}>Small Soft Pizza</Tag>
                <Tag color={cityColor.others}>Fantastic Granite Salad</Tag>
                <Tag color={cityColor.mountainView}>Sibyl Ortiz</Tag>
                <Tag color={cityColor.newYork}>Glen Gleichner</Tag>
                <Tag color={cityColor.others}>Sleek Concrete Bike</Tag>
                <Tag color={cityColor.mountainView}>Bangle</Tag>
                <Tag color={cityColor.sanFrancisco}>Ergonomic Fresh Cheese</Tag>
                <Tag color={cityColor.newYork}>Small Soft Pizza</Tag>
                <Tag color={cityColor.others}>Fantastic Granite Salad</Tag>
                <Tag color={cityColor.mountainView}>Sibyl Ortiz</Tag>
                <Tag color={cityColor.newYork}>Glen Gleichner</Tag>
                <Tag color={cityColor.others}>Sleek Concrete Bike</Tag>
                <Tag color={cityColor.mountainView}>Ear-Ring</Tag>
                <Tag color={cityColor.sanFrancisco}>Ergonomic Fresh Cheese</Tag>
                <Tag color={cityColor.newYork}>Small Soft Pizza</Tag>
                <Tag color={cityColor.others}>Fantastic Granite Salad</Tag>
                <Tag color={cityColor.mountainView}>Sibyl Ortiz</Tag>
                <Tag color={cityColor.newYork}>Glen Gleichner</Tag>
                <Tag color={cityColor.others}>Sleek Concrete Bike</Tag>
                <Tag color={cityColor.mountainView}>Zircon</Tag>
                <Tag color={cityColor.sanFrancisco}>Ergonomic Fresh Cheese</Tag>
                <Tag color={cityColor.newYork}>Small Soft Pizza</Tag>
                <Tag color={cityColor.others}>Fantastic Granite Salad</Tag>
                <Tag color={cityColor.mountainView}>Sibyl Ortiz</Tag>
                <Tag color={cityColor.newYork}>Glen Gleichner</Tag>
                <Tag color={cityColor.others}>Sleek Concrete Bike</Tag>
                <Tag color={cityColor.mountainView}>Armlet</Tag>
                <Tag color={cityColor.sanFrancisco}>Ergonomic Fresh Cheese</Tag>
                <Tag color={cityColor.newYork}>Small Soft Pizza</Tag>
                <Tag color={cityColor.others}>Fantastic Granite Salad</Tag>
                <Tag color={cityColor.mountainView}>Sibyl Ortiz</Tag>
                <Tag color={cityColor.newYork}>Glen Gleichner</Tag>
                <Tag color={cityColor.others}>Sleek Concrete Bike</Tag>
              </Card>
            </Row>
          </Col>
        </Row>
      </PageHeaderLayout>
    );
  }
}
export default Monitor;
