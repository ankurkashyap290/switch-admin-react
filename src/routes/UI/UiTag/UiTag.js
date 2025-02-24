import React from 'react';
import { Tabs, Tag } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/Misc/intlMessages';
import TagBasic from './TagBasic';
import TagCheckable from './TagCheckable';
import TagHot from './TagHot';
import TagAddAndRemove from './TagAddAndRemove';

const TabPane = Tabs.TabPane;

class UiTag extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Tags/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiTagBasic />
          </TabPane>
          <TabPane tab="Colorful Tag" key="2">
            <UiTagColorful />
          </TabPane>
          <TabPane tab="Checkable" key="3">
            <UiTagCheckable />
          </TabPane>
          <TabPane tab="Hot Tag" key="4">
            <UiTagHot />
          </TabPane>
          <TabPane tab="Add & Remove Dynamically" key="5">
            <UiTagAddAndRemove />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiTag;

const UiTagBasic = UiBoxC(
  'Basic',
  `Usage of basic Tag, and it could be closable by set closable property. Closable Tag supports onClose afterClose events.
                                  `,
  TagBasic
);

const TagColorful = () => {
  return (
    <div>
      <h4 style={{ marginBottom: 16 }}>
        <IntlMessages id="ui.uiTag.presets" />:
      </h4>
      <div>
        <Tag color="pink">
          <IntlMessages id="ui.uiTag.pink" />
        </Tag>
        <Tag color="red">
          <IntlMessages id="ui.uiTag.red" />
        </Tag>
        <Tag color="orange">
          <IntlMessages id="ui.uiTag.orange" />
        </Tag>
        <Tag color="green">
          <IntlMessages id="ui.uiTag.green" />
        </Tag>
        <Tag color="cyan">
          <IntlMessages id="ui.uiTag.cyan" />
        </Tag>
        <Tag color="blue">
          <IntlMessages id="ui.uiTag.blue" />
        </Tag>
        <Tag color="purple">
          <IntlMessages id="ui.uiTag.purple" />
        </Tag>
      </div>
      <h4 style={{ margin: '16px 0' }}>
        <IntlMessages id="ui.uiTag.custom" />:
      </h4>
      <div>
        <Tag color="#f50">
          <IntlMessages id="ui.uiTag.presets" />
          #f50
        </Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    </div>
  );
};

const UiTagColorful = UiBoxC(
  'Colorful tag',
  `We preset a series of colorful tag style for different situation usage. And you can always set it to a hex color string for custom color..
                                    `,
  TagColorful
);

const tagCheck = () => {
  return (
    <div>
      <TagCheckable>
        <IntlMessages id="ui.uiTag.tag" />1
      </TagCheckable>
      <TagCheckable>
        <IntlMessages id="ui.uiTag.tag" />2
      </TagCheckable>
      <TagCheckable>
        <IntlMessages id="ui.uiTag.tag" />3
      </TagCheckable>
    </div>
  );
};

const UiTagCheckable = UiBoxC(
  'Checkable',
  `CheckableTag works like Checkbox, click it to toggle checked state.
                                      `,
  tagCheck
);

const UiTagHot = UiBoxC(
  'Hot Tags',
  `Select your favorite topics.
                                        `,
  TagHot
);

const UiTagAddAndRemove = UiBoxC(
  'Add & Remove Dynamically',
  `Generating a set of Tags by array, you can add and remove dynamically. It's based on afterClose event, which will be triggered while the close animation end.
                                          `,
  TagAddAndRemove
);
