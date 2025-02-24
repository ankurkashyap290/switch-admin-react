import React, { Component } from 'react';
import { Row, Col, Card, Progress } from 'antd';
import StickerWithCharts from '../../components/Widgets/Charts/stickerWithCharts';
import IntlMessages from '../../components/Misc/intlMessages';

class EcommerceStats extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="ecommerceStats">
        <Row gutter={24}>
          <Col span={6}>
            <Card loading={false} bordered={false} style={{ height: '145px' }}>
              <div>
                <Progress
                  type="line"
                  percent={30}
                  status="active"
                  strokeColor="#327ab7"
                  className="monthlyIncomeBar"
                />
                $ 20K
                <h3>
                  <IntlMessages id="dashboard.ecommerce.monthlyIncome" />
                </h3>
              </div>
            </Card>
          </Col>
          <Col span={6} className="monthlySales" style={{ height: '145px' }}>
            <StickerWithCharts
              value={200}
              label="dashboard.ecommerce.monthlySales"
              chartType="barChart"
              width={120}
              height={60}
              data={data}
              dataKey="uv"
              fillColor="#5bb75b"
            />
          </Col>
          <Col span={6} className="newCustomers" style={{ height: '145px' }}>
            <StickerWithCharts
              value={407}
              label="dashboard.ecommerce.newCustomers"
              desc="(Last 28 Days)"
              chartType="areaChart"
              width={120}
              height={60}
              data={data}
              dataKey="uv"
              fillColor="#f2ad4f"
              strokeColor="#f2ad4f"
            />
          </Col>
          <Col span={6} className="newCustomers" style={{ height: '145px' }}>
            <StickerWithCharts
              value={90}
              label="dashboard.ecommerce.activeCustomer"
              desc="(Last 28 Days)"
              chartType="lineChart"
              width={120}
              height={60}
              data={data}
              dataKey="pv"
              strokeWidth={2}
              strokeColor="#d9534d"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default EcommerceStats;
