import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import TreeBasic from './TreeBasic';
import TreeBasicControlled from './TreeBasicControlled';
import TreeBasicLoadDataAsync from './TreeBasicLoadDataAsync';
import TreeWithLine from './TreeWithLine';

const TabPane = Tabs.TabPane;

class UiTree extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Tree/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiTreeBasic />
          </TabPane>
          <TabPane tab="Basic Controlled" key="2">
            <UiTreeBasicControlled />
          </TabPane>
          <TabPane tab="Load Data Async" key="3">
            <UiTreeBasicLoadDataAsync />
          </TabPane>
          <TabPane tab="Tree with Line" key="4">
            <UiTreeWithLine />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiTree;

const UiTreeBasic = UiBoxC(
  'Basic',
  `The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.
                                  `,
  TreeBasic
);

const UiTreeBasicControlled = UiBoxC(
  'Basic Controlled',
  `basic controlled example.
                                    `,
  TreeBasicControlled
);

const UiTreeBasicLoadDataAsync = UiBoxC(
  'load data asynchronously',
  `To load data asynchronously when click to expand a treeNode.
                                      `,
  TreeBasicLoadDataAsync
);

const UiTreeWithLine = UiBoxC(
  'Tree with Line ',
  `Tree with line.
                                        `,
  TreeWithLine
);
