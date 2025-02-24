import React from 'react';
import { Tabs, Anchor } from 'antd';

import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';

const TabPane = Tabs.TabPane;
const { Link } = Anchor;

class UiAnchor extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <ComponentDemoLayout title="<Anchor/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiAnchorBasic />
          </TabPane>
          <TabPane tab="Anchor Fixed" key="2">
            <UiAnchorFixed />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiAnchor;

const AnchorBasic = () => {
  return (
    <Anchor affix={false}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
      <Link href="#API" title="API">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  );
};

const UiAnchorBasic = UiBoxC(
  'Basic',
  `The Simplest.
                                  `,
  AnchorBasic
);

const AnchorFixed = () => {
  return (
    <Anchor affix showInkInFixed>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
      <Link href="#API" title="API">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  );
};

const UiAnchorFixed = UiBoxC(
  'Anchor Fixed',
  `Do not change state when page is scrolling.
                                    `,
  AnchorFixed
);
