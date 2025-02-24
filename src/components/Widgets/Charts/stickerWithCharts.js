import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { ResponsiveContainer } from 'recharts';
import SimpleAreaCharts from './SimpleAreaChart';
import SimpleBarCharts from './SimpleBarChart';
import SimpleLineCharts from './SimpleLineChart';
import IntlMessages from '../../Misc/intlMessages';

class StickerWithCharts extends Component {
  getChart = () => {
    const {
      chartType,
      data,
      strokeColor,
      fillColor,
      dataKey,
      width,
      height,
      strokeWidth,
    } = this.props;
    if (chartType === 'areaChart') {
      return (
        <ResponsiveContainer height={height} width="100%">
          <SimpleAreaCharts
            data={data}
            dataKey={dataKey}
            strokeColor={strokeColor}
            fillColor={fillColor}
          />
        </ResponsiveContainer>
      );
    } else if (chartType === 'barChart') {
      return (
        <ResponsiveContainer height={height} width="100%">
          <SimpleBarCharts
            width={width}
            height={height}
            data={data}
            dataKey={dataKey}
            fillColor={fillColor}
          />
        </ResponsiveContainer>
      );
    } else if (chartType === 'lineChart') {
      return (
        <ResponsiveContainer height={height} width="100%">
          <SimpleLineCharts
            width={width}
            height={height}
            data={data}
            dataKey={dataKey}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
          />
        </ResponsiveContainer>
      );
    } else {
      return null;
    }
  };

  render() {
    const { value, label, desc, color, bgColor } = this.props;
    return (
      <div className="stickerWithCharts">
        <Card bordered={false} style={{ color, backgroundColor: bgColor }}>
          <Row>
            <Col xl={16} lg={16} md={24} sm={24}>
              {value}
              <h3 style={{ color }}>
                <IntlMessages id={label} />
              </h3>
              {desc ? <small style={{ color }}>{desc}</small> : ''}
            </Col>
            <Col xl={8} lg={8} md={24} sm={24}>
              {this.getChart()}
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default StickerWithCharts;
