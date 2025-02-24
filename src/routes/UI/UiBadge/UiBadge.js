import React from 'react';
import { Tabs, Badge, Icon } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/Misc/intlMessages';
import BadgeDynamic from './BadgeDynamic';

const TabPane = Tabs.TabPane;

class UiBadge extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Badge>" wrapperClassName="componentsBadgeDemo">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiBadgeBasic />
          </TabPane>
          <TabPane tab="StandAlone" key="2">
            <UiBadgeStandalone />
          </TabPane>
          <TabPane tab="Red Badge" key="3">
            <UiBadgeRed />
          </TabPane>
          <TabPane tab="Dynamic" key="4">
            <UiBadgeDynamic />
          </TabPane>
          <TabPane tab="Status" key="5">
            <UiBadgeStatus />
          </TabPane>
          <TabPane tab="Clickable" key="6">
            <UiBadgeClickable />
          </TabPane>
          <TabPane tab="Overflow Count" key="7">
            <UiBadgeOverflowCount />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiBadge;

const BadgeBasic = () => {
  return (
    <div style={{ height: '100px', marginLeft: '4px' }}>
      <Badge count={5}>
        <a href="#/" className="headExample" s>
          {''}
        </a>
      </Badge>
      <Badge count={0} showZero>
        <a href="#/" className="headExample">
          {''}
        </a>
      </Badge>
    </div>
  );
};

const UiBadgeBasic = UiBoxC(
  'Basic',
  `Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it.
                                              `,
  BadgeBasic
);

const BadgeStandalone = () => {
  return (
    <div>
      <Badge count={25} />
      &nbsp;
      <Badge
        count={4}
        style={{
          backgroundColor: '#fff',
          color: '#999',
          boxShadow: '0 0 0 1px #d9d9d9 inset',
        }}
      />
      &nbsp;
      <Badge count={109} style={{ backgroundColor: '#87d068' }} />
    </div>
  );
};

const UiBadgeStandalone = UiBoxC(
  'Standalone',
  `Used in standalone when children is empty.
                                                `,
  BadgeStandalone
);

const BadgeRed = () => {
  return (
    <div>
      <Badge dot>
        <Icon type="notification" />
      </Badge>
      &nbsp;
      <Badge dot>
        <a href="#/">
          <IntlMessages id="ui.uiBadge.linkSomething" />
        </a>
      </Badge>
    </div>
  );
};

const UiBadgeRed = UiBoxC(
  'Red Badge',
  ` This will simply display a red badge, without a specific count.
                                                  `,
  BadgeRed
);

const UiBadgeDynamic = UiBoxC(
  'Dynamic',
  ` The count will be animated as it changes.
                                                    `,
  BadgeDynamic
);

const BadgeStatus = () => {
  return (
    <div>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="default" />
      <Badge status="processing" />
      <Badge status="warning" />
      <br />
      <Badge status="success" text="Success" />
      <br />
      <Badge status="error" text="Error" />
      <br />
      <Badge status="default" text="Default" />
      <br />
      <Badge status="processing" text="Processing" />
      <br />
      <Badge status="warning" text="Warning" />
    </div>
  );
};

const UiBadgeStatus = UiBoxC(
  'Status',
  ` Standalone badge with status.
                                                      `,
  BadgeStatus
);

const BadgeClickable = () => {
  return (
    <div style={{ height: '100px', marginLeft: '4px' }}>
      <a href="#/">
        <Badge count={5}>
          <span className="headExample" />
        </Badge>
      </a>
    </div>
  );
};

const UiBadgeClickable = UiBoxC(
  'Clickable',
  `The badge can be wrapped with a tag to make it linkable.
                                                        `,
  BadgeClickable
);

const BadgeOverflowCount = () => {
  return (
    <div style={{ height: '100px', marginLeft: '4px' }}>
      <Badge count={99}>
        <a href="#/" className="headExample">
          {' '}
          {''}
        </a>
      </Badge>
      <Badge count={100}>
        <a href="#/" className="headExample">
          {' '}
          {''}
        </a>
      </Badge>
      <Badge count={99} overflowCount={10}>
        <a href="#/" className="headExample">
          {' '}
          {''}
        </a>
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <a href="#/" className="headExample">
          {' '}
          {''}
        </a>
      </Badge>
    </div>
  );
};

const UiBadgeOverflowCount = UiBoxC(
  'Overflow Count',
  `overflowCount+ is displayed when count is larger than overflowCount. The default value of overflowCount is 99.
                                                          `,
  BadgeOverflowCount
);
