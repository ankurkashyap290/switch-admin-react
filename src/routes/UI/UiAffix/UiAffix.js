import React from 'react';
import { Tabs, Affix, Button } from 'antd';
import ComponentDemoLayout from 'layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/utils/intlMessages';
import AffixContainerToScroll from './AffixContainerToScroll';

const TabPane = Tabs.TabPane;

class UiAffix extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Affix/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiAffixBasic />
          </TabPane>
          <TabPane tab="Container to scroll" key="2">
            <UiAffixContainerToScroll />
          </TabPane>
          <TabPane tab="Callback" key="3">
            <UiAffixCallback />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiAffix;

const AffixBasic = () => {
  return (
    <div>
      <Affix>
        <Button type="primary">
          {' '}
          <IntlMessages id="ui.uiAffix.affixTop" />
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={0}>
        <Button type="primary">
          <IntlMessages id="ui.uiAffix.affixBottom" />
        </Button>
      </Affix>
    </div>
  );
};

const UiAffixBasic = UiBoxC(
  'Basic',
  `The most basic usage.
                                  `,
  AffixBasic
);

const UiAffixContainerToScroll = UiBoxC(
  'Container to scroll',
  `Set a target for 'Affix', which is listen to scroll event of target element (default is window).
                                    `,
  AffixContainerToScroll
);

const AffixCallback = () => {
  return (
    <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
      <Button>
        <IntlMessages id="ui.uiAffix.affix120px" />
      </Button>
    </Affix>
  );
};

const UiAffixCallback = UiBoxC(
  'Callback',
  `Callback with affixed state.
                                      `,
  AffixCallback
);
