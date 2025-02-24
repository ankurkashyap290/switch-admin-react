import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import TransferBasic from './TransferBasic';
import TransferSearch from './TransferSearch';
import TransferAdvanced from './TransferAdvanced';
import TransferCustomDataSource from './TransferCustomDataSource';

const TabPane = Tabs.TabPane;

class UiTransfer extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Transfer/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiTransferBasic />
          </TabPane>
          <TabPane tab="Search" key="2">
            <UiTransferSearch />
          </TabPane>
          <TabPane tab="Advanced" key="3">
            <UiTransferAdvanced />
          </TabPane>
          <TabPane tab="Custom Data Source" key="4">
            <UiTransferCustomDataSource />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiTransfer;

const UiTransferBasic = UiBoxC(
  'Basic',
  `The most basic usage of Transfer involves providing the source data and target keys arrays, plus the rendering and some callback functions.
                                            `,
  TransferBasic
);

const UiTransferSearch = UiBoxC(
  'Search',
  `Transfer with Search Box.
                                            `,
  TransferSearch
);

const UiTransferAdvanced = UiBoxC(
  'Advanced',
  `Advanced Usage of Transfer.
  You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer.
                                            `,
  TransferAdvanced
);

const UiTransferCustomDataSource = UiBoxC(
  'Custom data source',
  `Custom each Transfer Item, and in this way you can render a complex datasource.
                                            `,
  TransferCustomDataSource
);
