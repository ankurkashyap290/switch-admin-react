import React, { PureComponent } from 'react';
import { Row, Col, Card, Progress } from 'antd';
import Charts from 'react-google-charts';
import { XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import IntlMessages from '../../components/Misc/intlMessages';
import productsSaleData from './productsSale';
import EcommerceStats from './ecommerceStats';
import DashboardTable from './dashboardTable';
import InventoryStock from '../../components/Widgets/SocialMedia/inventoryStock';
import FilterOptions from './filterOptions';
import GoogleChartResponsive from '../../components/Misc/GoogleChartResponsive';

class Ecommerce extends PureComponent {
  render() {
    return (
      <PageHeaderLayout title={<IntlMessages id="dashboard.ecommerce.ecommerceDashboard" />}>
        <div className="ecommerce">
          <Row gutter={24} className="salesGraph">
            <Col span={16} className="selectFilter">
              <Card
                bordered={false}
                style={{ height: '465px' }}
                actions={[<FilterOptions defaultValue="lastYear" />]}
              >
                <h3>
                  <IntlMessages id="dashboard.ecommerce.advertisingPromotions" />
                </h3>
                <ResponsiveContainer height={150} width="100%">
                  <AreaChart
                    data={productsSaleData.advertisingAndSalesData}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Area type="monotone" dataKey="advertising" stroke="#78b47c" fill="#78b47c75" />
                  </AreaChart>
                </ResponsiveContainer>
                <h3>
                  <IntlMessages id="dashboard.ecommerce.sales" />
                </h3>
                <ResponsiveContainer height={150} width="100%">
                  <AreaChart
                    data={productsSaleData.advertisingAndSalesData}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sale" stroke="#2777b6" fill="#a9cde8a1" />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </Col>
            <Col span={8} style={{ height: '465px' }} className="selectFilter">
              <Card bordered={false} actions={[<FilterOptions defaultValue="last28Days" />]}>
                <InventoryStock data={productsSaleData.stock} type="inventoryStock" />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <EcommerceStats data={productsSaleData.ecommerceStatsData} />
          </Row>
          <Row gutter={24} style={{ marginTop: '20px' }} className="salesGraph">
            <Card bordered={false} actions={[<FilterOptions defaultValue="last28Days" />]}>
              <Col span={16}>
                <h3>
                  <IntlMessages id="dashboard.ecommerce.salesByCountries" />
                </h3>
                <GoogleChartResponsive style={{ width: '100%', height: '300px' }}>
                  <Charts
                    chartType="GeoChart"
                    data={productsSaleData.salesByCountries}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    mapsApiKey="YOUR_KEY_HERE"
                    rootProps={{ 'data-testid': '1' }}
                  />
                </GoogleChartResponsive>
              </Col>
              <Col span={8}>
                <DashboardTable
                  dataSource={productsSaleData.stock}
                  type="saleByProduct"
                  label="dashboard.ecommerce.saleByProduct"
                />
              </Col>
            </Card>
          </Row>

          <Row gutter={24} style={{ marginTop: '20px' }} className="salesGraph">
            <Card bordered={false}>
              <Col span={6} className="averageOrder">
                <p>
                  <IntlMessages id="dashboard.ecommerce.AverageOrder" />
                </p>
                <h1>3.30</h1>
              </Col>
              <Col span={18}>
                <p>
                  <IntlMessages id="dashboard.ecommerce.positiveReviews" />
                </p>
                <Progress percent={50} className="positiveReviews" />
                <p>
                  <IntlMessages id="dashboard.ecommerce.negativeReviews" />
                </p>
                <Progress percent={15} className="negativeReviews" />
                <p>
                  <IntlMessages id="dashboard.ecommerce.neutralReviews" />
                </p>
                <Progress percent={35} className="neutralReviews" />
              </Col>
            </Card>
          </Row>
        </div>
      </PageHeaderLayout>
    );
  }
}
export default Ecommerce;
