import React from 'react';
import { Tabs, Radio } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const TabPane = Tabs.TabPane;

class TabsSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">
            <IntlMessages id="ui.uiTab.horizontal" />
          </Radio.Button>
          <Radio.Button value="left">
            <IntlMessages id="ui.uiTab.vertical" />
          </Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          <TabPane tab="Tab 1" key="1">
            <IntlMessages id="ui.uiTab.contentTab" /> 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <IntlMessages id="ui.uiTab.contentTab" /> 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <IntlMessages id="ui.uiTab.contentTab" /> 3
          </TabPane>
          <TabPane tab="Tab 4" key="4">
            <IntlMessages id="ui.uiTab.contentTab" /> 4
          </TabPane>
          <TabPane tab="Tab 5" key="5">
            <IntlMessages id="ui.uiTab.contentTab" /> 5
          </TabPane>
          <TabPane tab="Tab 6" key="6">
            <IntlMessages id="ui.uiTab.contentTab" /> 6
          </TabPane>
          <TabPane tab="Tab 7" key="7">
            <IntlMessages id="ui.uiTab.contentTab" /> 7
          </TabPane>
          <TabPane tab="Tab 8" key="8">
            <IntlMessages id="ui.uiTab.contentTab" /> 8
          </TabPane>
          <TabPane tab="Tab 9" key="9">
            <IntlMessages id="ui.uiTab.contentTab" /> 9
          </TabPane>
          <TabPane tab="Tab 10" key="10">
            <IntlMessages id="ui.uiTab.contentTab" /> 10
          </TabPane>
          <TabPane tab="Tab 11" key="11">
            <IntlMessages id="ui.uiTab.contentTab" /> 11
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default TabsSlide;
