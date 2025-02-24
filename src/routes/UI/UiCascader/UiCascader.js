import React from 'react';
import { Tabs } from 'antd';

import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import CascaderBasic from './CascaderBasic';
import CascaderCustomTrigger from './CascaderCustomTrigger';
import CascaderDisabledOption from './CascaderDisabledOption';
import CascaderSize from './CascaderSize';
import CascaderSearch from './CascaderSearch';
import CascaderLazyOptions from './CascaderLazyOptions';
import CascaderCustomRender from './CascaderCustomRender';
import CascaderChangeOnSelect from './CascaderChangeOnSelect';
import CascaderHover from './CascaderHover';
import CascaderDefaultValue from './CascaderDefaultValue';

const TabPane = Tabs.TabPane;

class UiCascader extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Cascader/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiCascaderBasic />
          </TabPane>
          <TabPane tab="Custom Trigger" key="2">
            <UiCascaderCustomTrigger />
          </TabPane>
          <TabPane tab="Disabled Option" key="3">
            <UiCascaderDisabledOption />
          </TabPane>
          <TabPane tab="Size" key="4">
            <UiCascaderSize />
          </TabPane>
          <TabPane tab="Search" key="5">
            <UiCascaderSearch />
          </TabPane>
          <TabPane tab="Load Lazy Options" key="6">
            <UiCascaderLazyOptions />
          </TabPane>
          <TabPane tab="Custom Render" key="7">
            <UiCascaderCustomRender />
          </TabPane>
          <TabPane tab="Change on Select" key="8">
            <UiCascaderChangeOnSelect />
          </TabPane>
          <TabPane tab="Hover" key="9">
            <UiCascaderHover />
          </TabPane>
          <TabPane tab="Default Value" key="10">
            <UiCascaderDefaultValue />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiCascader;

const UiCascaderBasic = UiBoxC(
  'Basic',
  `Cascade selection box for selecting province/city/district.
                              `,
  CascaderBasic
);

const UiCascaderCustomTrigger = UiBoxC(
  'Custom Trigger',
  `Separate trigger button and result.
                                `,
  CascaderCustomTrigger
);

const UiCascaderDisabledOption = UiBoxC(
  'Disabled Option',
  `Disable option by specifying the disabled property in options.
                                  `,
  CascaderDisabledOption
);

const UiCascaderSize = UiBoxC(
  'Size',
  `Cascade selection box of different sizes.
                                    `,
  CascaderSize
);

const UiCascaderSearch = UiBoxC(
  'Search',
  `Search and select options directly.
                                      `,
  CascaderSearch
);

const UiCascaderLazyOptions = UiBoxC(
  'Load Options Lazily',
  `Load options lazily with loadData.
                                        `,
  CascaderLazyOptions
);

const UiCascaderCustomRender = UiBoxC(
  'Custom render',
  `For instance, add an external link after the selected value..
                                          `,
  CascaderCustomRender
);

const UiCascaderChangeOnSelect = UiBoxC(
  'Change on Select',
  `Allow only select parent options.
                                            `,
  CascaderChangeOnSelect
);

const UiCascaderHover = UiBoxC(
  'Hover',
  `Hover to expand sub menu, click to select option.
                                              `,
  CascaderHover
);

const UiCascaderDefaultValue = UiBoxC(
  'Default Value',
  `Specify default value by an Array.
                                                `,
  CascaderDefaultValue
);
