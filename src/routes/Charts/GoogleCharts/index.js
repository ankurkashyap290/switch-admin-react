import React, { Component } from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import GaugeChart from '../../../components/Widgets/Charts/gaugeChart';
import GeoCharts from '../../../components/GoogleCharts/GeoCharts';
import AreaCharts from '../../../components/GoogleCharts/AreaCharts';
import BarCharts from '../../../components/GoogleCharts/BarCharts';
import CalendarCharts from '../../../components/GoogleCharts/CalendarCharts';
import LineBarCharts from '../../../components/GoogleCharts/LineBarCharts';
import DiffColumnCharts from '../../../components/GoogleCharts/DiffColumnCharts';
import data from './data';

const { TabPane } = Tabs;

class GoogleCharts extends Component {
  render() {
    const mode = 'left';
    return (
      <ComponentDemoLayout title="<Google Charts/>">
        <Tabs defaultActiveKey="1" tabPosition={mode}>
          <TabPane tab="Gauge Charts" key="1">
            <GaugeChart
              data={data.mobileSessionData}
              options={data.mobileSessionOptions}
              label="dashboard.analytic.mobileSessions"
              desc="dashboard.analytic.mobileSessionsDesc"
              target="Mobile"
              remaining="Desktop"
              targetColor="#159618"
              remainingColor="#e3725d"
            />
          </TabPane>
          <TabPane tab="Geo Chart" key="2">
            <GeoCharts
              options={{}}
              data={data.usersVisitedByCountry}
              mapsApiKey="YOUR_KEY_HERE"
              rootProps={{ 'data-testid': '1' }}
            />
          </TabPane>
          <TabPane tab="Area Chart" key="3">
            <AreaCharts
              options={{
                title: 'Company Performance',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                chartArea: { width: '50%', height: '70%' },
              }}
              data={data.areaChartData}
            />
          </TabPane>
          <TabPane tab="Bar Charts" key="4">
            <BarCharts
              options={{
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '50%' },
                hAxis: {
                  title: 'Total Population',
                  minValue: 0,
                },
                vAxis: {
                  title: 'City',
                },
              }}
              data={data.barChartsData}
            />
          </TabPane>
          <TabPane tab="Calender Chart" key="5">
            <CalendarCharts
              options={{
                title: 'Switch Admin Attendance',
              }}
              data={data.calenderData}
            />
          </TabPane>
          <TabPane tab="Line Bar Chart" key="6">
            <LineBarCharts
              options={{
                title: 'Monthly Coffee Production by Country',
                vAxis: { title: 'Cups' },
                hAxis: { title: 'Month' },
                seriesType: 'bars',
                series: { 5: { type: 'line' } },
              }}
              data={data.LineBarChartsData}
            />
          </TabPane>
          <TabPane tab="Diff Column Charts" key="8">
            <DiffColumnCharts
              options={{
                legend: { position: 'top' },
              }}
              data={data.DiffColumnChartsData}
            />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default GoogleCharts;
