import React from 'react';
import { Tabs, Collapse } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import CollapseBasic from './CollapseBasic';
import CollapseNestedPanel from './CollapseNestedPanel';

const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

class UiCollapse extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <ComponentDemoLayout title="<Collapse/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiCollapseBasic />
          </TabPane>
          <TabPane tab="Accordian" key="2">
            <UiCollapseAccordian />
          </TabPane>
          <TabPane tab="Nested Panel" key="3">
            <UiCollapseNestedPanel />
          </TabPane>
          <TabPane tab="Borderless" key="4">
            <UiCollapseBorderless />
          </TabPane>
          <TabPane tab="Custom Panel" key="5">
            <UiCollapseCustomPanel />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiCollapse;

const UiCollapseBasic = UiBoxC(
  'Collapse',
  `More than one panel can be expanded at a time, the first panel is initialized to be active in this case.
                                  `,
  CollapseBasic
);

const CollapseAccordian = () => {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  return (
    <Collapse accordion>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

const UiCollapseAccordian = UiBoxC(
  'Accordian',
  `Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default.
                                    `,
  CollapseAccordian
);

const UiCollapseNestedPanel = UiBoxC(
  'Nested Panel',
  `Collapse is nested inside the Collapse.
                                      `,
  CollapseNestedPanel
);

const CollapseBorderless = () => {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  return (
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

const UiCollapseBorderless = UiBoxC(
  'Borderless',
  `A borderless style of Collapse.
                                        `,
  CollapseBorderless
);

const CollapseCustomPanel = () => {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };
  return (
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

const UiCollapseCustomPanel = UiBoxC(
  'Custom Panel',
  `Customize the background, border and margin styles for each panel.
                                          `,
  CollapseCustomPanel
);
