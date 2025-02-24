import React from 'react';
import { Tabs, Select } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

class TabsPosition extends React.Component {
  state = {
    tabPosition: 'top',
  };

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          Tab position：
          <Select
            value={tabPosition}
            onChange={this.changeTabPosition}
            dropdownMatchSelectWidth={false}
          >
            <Option value="top">
              <IntlMessages id="ui.top" />
            </Option>
            <Option value="bottom">
              <IntlMessages id="ui.bottom" />
            </Option>
            <Option value="left">
              <IntlMessages id="ui.left" />
            </Option>
            <Option value="right">
              <IntlMessages id="ui.right" />
            </Option>
          </Select>
        </div>
        <Tabs tabPosition={tabPosition}>
          <TabPane tab="Tab 1" key="1">
            <IntlMessages id="ui.uiTab.contentTab" /> 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <IntlMessages id="ui.uiTab.contentTab" /> 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <IntlMessages id="ui.uiTab.contentTab" /> 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default TabsPosition;
