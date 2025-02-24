import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import TreeSelectBasic from './TreeSelectBasic';
import TreeSelectMultiple from './TreeSelectMultiple';
import TreeSelectCheckable from './TreeSelectCheckable';
import TreeSelectGenerateFormTree from './TreeSelectGenerateFormTree';

const TabPane = Tabs.TabPane;

class UiTreeSelect extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Select Tree/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiTreeSelectBasic />
          </TabPane>
          <TabPane tab="Multiple Selection" key="2">
            <UiTreeSelectMultiple />
          </TabPane>
          <TabPane tab="Checkable" key="3">
            <UiTreeSelectCheckable />
          </TabPane>
          <TabPane tab="Generate form tree data" key="4">
            <UiTreeSelectGenerateFormTree />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiTreeSelect;

const UiTreeSelectBasic = UiBoxC(
  'Basic',
  `The most basic usage.
                                              `,
  TreeSelectBasic
);

const UiTreeSelectMultiple = UiBoxC(
  'Multiple Selection',
  `Multiple Selection usage.
                                                `,
  TreeSelectMultiple
);

const UiTreeSelectCheckable = UiBoxC(
  'Checkable',
  `Multiple and Checkable.
                                                  `,
  TreeSelectCheckable
);

const UiTreeSelectGenerateFormTree = UiBoxC(
  'Generate form tree data',
  `The tree structure can be populated using treeData property. This is a quick and easy way to provide the tree content.
                                                    `,
  TreeSelectGenerateFormTree
);
