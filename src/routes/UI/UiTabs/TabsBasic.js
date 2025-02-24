import React from 'react';
import { Tabs } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

const TabPane = Tabs.TabPane;

class TabsBasic extends React.Component {
  callback = key => {
    console.log(key);
  };

  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
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
    );
  }
}
export default TabsBasic;
