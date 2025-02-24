import React, { PureComponent } from 'react';
import { Select } from 'antd';
import IntlMessages from '../../components/Misc/intlMessages';

const { Option } = Select;

class FilterOptions extends PureComponent {
  render() {
    const { defaultValue } = this.props;
    return (
      <Select style={{ width: 200 }} defaultValue={defaultValue}>
        <Option value="last7Days">
          {' '}
          <IntlMessages id="dashboard.analytic.last7days" />
        </Option>
        <Option value="last28Days">
          <IntlMessages id="dashboard.analytic.last28days" />
        </Option>
        <Option value="perviousMonth">
          <IntlMessages id="dashboard.analytic.previousMonth" />
        </Option>
        <Option value="lastSixMonths">
          <IntlMessages id="dashboard.analytic.last6months" />
        </Option>
        <Option value="lastYear">
          <IntlMessages id="dashboard.analytic.lastYear" />
        </Option>
      </Select>
    );
  }
}
export default FilterOptions;
