import React, { Component } from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import SimpleLineCharts from './SimpleLineCharts';
import CustomizedDotLineChart from './CustomizedDotLineChart';
import SimpleBarChart from './SimpleBarChart';
import MixBarChart from './MixBarChart';
import CustomShapeBarChart from './CustomShapeBarChart';
import BiaxialBarChart from './BiaxialBarChart';
import SimpleAreaChart from './SimpleAreaChart';
import StackedAreaChart from './StackedAreaChart';
import LineBarAreaComposedChart from './LineBarAreaComposedChart';
import CustomActiveShapePieChart from './CustomActiveShapePieChart';
import SpecifiedDomainRadarChart from './SpecifiedDomainRadarChart';
import SimpleRadialBarChart from './SimpleRadialBarChart';
import LegendEffectOpacity from './LegendEffectOpacity';
import * as chartsDb from './data.js';

const { TabPane } = Tabs;

class Recharts extends Component {
  render() {
    const { isMobile } = this.props;
    console.log('xxx', this.props, isMobile);
    const mode = 'left';
    return (
      <ComponentDemoLayout title="<Recharts/>">
        <Tabs defaultActiveKey="1" tabPosition={mode}>
          <TabPane tab="Simple Line Chart" key="1">
            <SimpleLineCharts {...chartsDb.SimpleLineCharts} />
          </TabPane>
          <TabPane tab="Customized Dot Line Chart" key="2">
            <CustomizedDotLineChart {...chartsDb.CustomizedDotLineChart} />
          </TabPane>
          <TabPane tab="Simple Bar Chart" key="3">
            <SimpleBarChart {...chartsDb.SimpleBarChart} />
          </TabPane>
          <TabPane tab="Mix Bar Chart" key="4">
            <MixBarChart {...chartsDb.MixBarChart} />
          </TabPane>
          <TabPane tab="Custom Shape Bar Chart" key="5">
            <CustomShapeBarChart {...chartsDb.CustomShapeBarChart} />
          </TabPane>
          <TabPane tab="Biaxial Bar Chart" key="6">
            <BiaxialBarChart {...chartsDb.BiaxialBarChart} />
          </TabPane>
          <TabPane tab="Simple Area Chart" key="7">
            <SimpleAreaChart {...chartsDb.SimpleAreaChart} />
          </TabPane>
          <TabPane tab="Stacked Area Chart" key="8">
            <StackedAreaChart {...chartsDb.StackedAreaChart} />
          </TabPane>
          <TabPane tab="Line Bar Area Composed Chart" key="9">
            <LineBarAreaComposedChart {...chartsDb.LineBarAreaComposedChart} />
          </TabPane>
          <TabPane tab="Custom Active Shape Pie Chart" key="10">
            <CustomActiveShapePieChart {...chartsDb.CustomActiveShapePieChart} />
          </TabPane>
          <TabPane tab="Specified Domain Radar Chart" key="11">
            <SpecifiedDomainRadarChart {...chartsDb.SpecifiedDomainRadarChart} />
          </TabPane>
          <TabPane tab="Simple Radial Bar Chart" key="12">
            <SimpleRadialBarChart {...chartsDb.SimpleRadialBarChart} />
          </TabPane>
          <TabPane tab="Legend Effect Opacity Chart" key="13">
            <LegendEffectOpacity {...chartsDb.LegendEffectOpacity} />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default Recharts;
