import React from 'react';
import { Tabs, Avatar, Badge } from 'antd';

import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';

import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import IntlMessages from '../../../components/Misc/intlMessages';
import AvatarAutosetSize from './AvatarAutosetSize';

const TabPane = Tabs.TabPane;

class UiAvatar extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <ComponentDemoLayout title="<Avatar/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiAvatarBasic />
          </TabPane>
          <TabPane tab="Type" key="2">
            <UiAvatarType />
          </TabPane>
          <TabPane tab="Autoset Font Size" key="3">
            <UiAvatarAutosetSize />
          </TabPane>
          <TabPane tab="With Badge" key="4">
            <UiAvatarWithBadge />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiAvatar;

const AvatarBasic = () => {
  return (
    <div className="componentsAvatarDemo">
      <div>
        <Avatar size="large" icon="user" />
        <Avatar icon="user" />
        <Avatar size="small" icon="user" />
      </div>
      <div>
        <Avatar shape="square" size="large" icon="user" />
        <Avatar shape="square" icon="user" />
        <Avatar shape="square" size="small" icon="user" />
      </div>
    </div>
  );
};

const UiAvatarBasic = UiBoxC(
  'Basic',
  `Three sizes and two shapes are available.
                                            `,
  AvatarBasic
);

const AvatarType = () => {
  return (
    <div className="componentsAvatarDemo">
      <Avatar icon="user" />
      <Avatar>U</Avatar>
      <Avatar>{<IntlMessages id="ui.uiAvatar.user" />}</Avatar>
      <Avatar src="/images/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
    </div>
  );
};

const UiAvatarType = UiBoxC(
  'Type',
  `Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
                                            `,
  AvatarType
);

const UiAvatarAutosetSize = UiBoxC(
  'Autoset Font Size',
  `For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.
                                            `,
  AvatarAutosetSize
);

const AvatarWithBadge = () => {
  return (
    <div>
      <span style={{ marginRight: 24 }}>
        <Badge count={1}>
          <Avatar shape="square" icon="user" />
        </Badge>
      </span>
      <span>
        <Badge dot>
          <Avatar shape="square" icon="user" />
        </Badge>
      </span>
    </div>
  );
};

const UiAvatarWithBadge = UiBoxC(
  'With Badge',
  `Usually used for messages remind.
                                            `,
  AvatarWithBadge
);
