import React from 'react';
import { Tabs } from 'antd';
import './UiAutoComplete.less';

import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import AutoCompleteBasicUsage from './AutoCompleteBasicUsage';
import AutoCompleteCustomizedInput from './AutoCompleteCustomizedInput';
import AutoCompleteLookupPatternCertain from './AutoCompleteLookupPatternCertain';
import AutoCompleteLookupPatternUnCertain from './AutoCompleteLookupPatternUnCertain';
import AutoCompleteNonCaseSensitive from './AutoCompleteNonCaseSensitive';
import AutoCompleteCustomized from './AutoCompleteCustomized';

const TabPane = Tabs.TabPane;

class UiAutoComplete extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<AutoComplete/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic Usage" key="1">
            <UiAutoCompleteBasicUsage />
          </TabPane>
          <TabPane tab="Customize Input Component" key="2">
            <UiAutoCompleteCustomizedInput />
          </TabPane>
          <TabPane tab="Lookup Pattern Certain Category" key="3">
            <UiAutoCompleteLookupPatternCertain />
          </TabPane>
          <TabPane tab="Lookup Pattern Certain UnCategory" key="4">
            <UiAutoCompleteLookupPatternUnCertain />
          </TabPane>
          <TabPane tab="Non Case Sensitive AutoComplete" key="5">
            <UiAutoCompleteNonCaseSensitive />
          </TabPane>
          <TabPane tab="Customized" key="6">
            <UiAutoCompleteCustomized />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiAutoComplete;

const UiAutoCompleteBasicUsage = UiBoxC(
  'Basic Usage',
  `Basic Usage, set datasource of autocomplete with dataSource property..
                              `,
  AutoCompleteBasicUsage
);

const UiAutoCompleteCustomizedInput = UiBoxC(
  'Customize Input Component',
  `Customize Input Component
                                `,
  AutoCompleteCustomizedInput
);

const UiAutoCompleteLookupPatternCertain = UiBoxC(
  'Lookup-Patterns - Certain Category',
  `Demonstration of Lookup Patterns: Certain Category. Basic Usage, set datasource of autocomplete with dataSource property.
                                  `,
  AutoCompleteLookupPatternCertain
);

const UiAutoCompleteLookupPatternUnCertain = UiBoxC(
  'Lookup-Patterns - UnCertain Category',
  `Demonstration of Lookup Patterns: Uncertain Category. Basic Usage, set datasource of autocomplete with dataSource property.
                                    `,
  AutoCompleteLookupPatternUnCertain
);

const UiAutoCompleteNonCaseSensitive = UiBoxC(
  'Non-Case-sensitive AutoComplete',
  `A non-case-sensitive AutoComplete.
                                      `,
  AutoCompleteNonCaseSensitive
);

const UiAutoCompleteCustomized = UiBoxC(
  'Customized',
  `You could pass AutoComplete.Option as children of AutoComplete, instead of using dataSource.
                                        `,
  AutoCompleteCustomized
);
