import React, { Component } from 'react';
import { Tag } from 'antd';
import Charts from 'react-google-charts';
import IntlMessages from '../../Misc/intlMessages';
import GoogleChartResponsive from '../../Misc/GoogleChartResponsive';

class GaugeChart extends Component {
  render() {
    const {
      data,
      options,
      label,
      desc,
      target,
      targetColor,
      remaining,
      remainingColor,
    } = this.props;
    return (
      <div className="gaugeChart">
        {label ? (
          <h3>
            <IntlMessages id={label} />
          </h3>
        ) : (
          ''
        )}
        {desc ? (
          <small>
            <IntlMessages id={desc} />
          </small>
        ) : (
          ''
        )}
        <GoogleChartResponsive style={{ width: '100%', height: '272px' }}>
          <Charts chartType="Gauge" width="100%" data={data} options={options} />
        </GoogleChartResponsive>
        <Tag color={targetColor}>{target}</Tag>
        <Tag color={remainingColor}>{remaining}</Tag>
      </div>
    );
  }
}
export default GaugeChart;
