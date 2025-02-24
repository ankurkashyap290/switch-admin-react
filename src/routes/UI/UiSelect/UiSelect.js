import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import SelectBasic from './SelectBasic';
import SelectWithSearch from './SelectWithSearch';
import SelectTags from './SelectTags';
import SelectOptionGroup from './SelectOptionGroup';
import SelectAutomaticTokenization from './SelectAutomaticTokenization';
import SelectAndSearch from './SelectAndSearch';
import SelectValueOfItem from './SelectValueOfItem';
import SelectCoordinate from './SelectCoordinate';
import SelectMultipleSelection from './SelectMultipleSelection';
import SelectSizes from './SelectSizes';

const TabPane = Tabs.TabPane;

class UiSelect extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Select/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic Usage" key="1">
            <UiSelectBasic />
          </TabPane>
          <TabPane tab="Select with search field" key="2">
            <UiSelectWithSearch />
          </TabPane>
          <TabPane tab="Tags" key="3">
            <UiSelectTags />
          </TabPane>
          <TabPane tab="Option Group" key="4">
            <UiSelectOptionGroup />
          </TabPane>
          <TabPane tab="Automatic Tokenization" key="5">
            <UiSelectAutomaticTokenization />
          </TabPane>
          <TabPane tab="Search and Select User" key="6">
            <UiSelectAndSearch />
          </TabPane>
          <TabPane tab="Get Value of selected item" key="7">
            <UiSelectValueOfItem />
          </TabPane>
          <TabPane tab="Coordinate" key="8">
            <UiSelectCoordinate />
          </TabPane>
          <TabPane tab="Multiple Selection" key="10">
            <UiSelectMultipleSelection />
          </TabPane>
          <TabPane tab="Sizes" key="11">
            <UiSelectSizes />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiSelect;

const UiSelectBasic = UiBoxC(
  'Basic Usage',
  `Basic usage.
                                            `,
  SelectBasic
);

const UiSelectWithSearch = UiBoxC(
  'Select with search filed',
  `Search the option while expanded.
                                              `,
  SelectWithSearch
);

const UiSelectTags = UiBoxC(
  'Tags',
  `Select with tags, transform input to tag (scroll the menu).
                                                `,
  SelectTags
);

const UiSelectOptionGroup = UiBoxC(
  'Option Group',
  `Using OptGroup to group the options.
                                                  `,
  SelectOptionGroup
);

const UiSelectAutomaticTokenization = UiBoxC(
  'Automatic Tokenization ',
  `Try to copy Lucy,Jack to the input. Only available in tags and multiple mode.
                                                    `,
  SelectAutomaticTokenization
);

const UiSelectAndSearch = UiBoxC(
  'Search and Select User ',
  `A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.
                                                      `,
  SelectAndSearch
);

const UiSelectValueOfItem = UiBoxC(
  'Get value of selected item',
  `As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item.
    The label of the selected item will be packed as an object for passing to the onChange callback.
                                                        `,
  SelectValueOfItem
);

const UiSelectCoordinate = UiBoxC(
  'Coordinate',
  `Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.
    Using the Cascader component is strongly recommended instead as it is more flexible and capable.
                                                          `,
  SelectCoordinate
);

const UiSelectMultipleSelection = UiBoxC(
  'multiple selection',
  `Automatic completion of select input.
      Using the AutoComplete component is strongly recommended instead as it is more flexible and capable.
                                                              `,
  SelectMultipleSelection
);

const UiSelectSizes = UiBoxC(
  'Sizes',
  `The height of the input field for the select defaults to 28px. If size is set to large, the height will be 32px, and if set to small, 22px.
                                                                `,
  SelectSizes
);
