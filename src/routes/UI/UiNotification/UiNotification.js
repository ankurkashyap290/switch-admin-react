import React from 'react';
import { Tabs, notification, Select, Icon, Button } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import IntlMessages from '../../../components/Misc/intlMessages';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';

const TabPane = Tabs.TabPane;

class UiNotification extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Notification/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiNotificationBasic />
          </TabPane>
          <TabPane tab="Auto hide" key="2">
            <UiNotificationDuration />
          </TabPane>
          <TabPane tab="Customize close button" key="3">
            <UiNotificationCustomClose />
          </TabPane>
          <TabPane tab="Placement" key="4">
            <UiNotificationPlacement />
          </TabPane>
          <TabPane tab="Notification with Icon" key="5">
            <UiNotificationWithIcon />
          </TabPane>
          <TabPane tab="Customized Icon" key="6">
            <UiNotificationCustomizedIcon />
          </TabPane>
          <TabPane tab="Customized Style" key="7">
            <UiNotificationCustomizedStyle />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiNotification;

const NotificationBasic = () => {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <Button type="primary" onClick={openNotification}>
      <IntlMessages id="ui.uiNotification.openNotificationBox" />
    </Button>
  );
};

const UiNotificationBasic = UiBoxC(
  'Basic',
  `The simplest usage that close the notification box after 4.5s..
                                  `,
  NotificationBasic
);

const NotificationDuration = () => {
  const openNotification = () => {
    const args = {
      message: 'Notification Title',
      description:
        'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    };
    notification.open(args);
  };

  return (
    <Button type="primary" onClick={openNotification}>
      <IntlMessages id="ui.uiNotification.openNotificationBox" />
    </Button>
  );
};

const UiNotificationDuration = UiBoxC(
  'Duration after which the notification box is closed',
  `Duration can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.
    .
                                    `,
  NotificationDuration
);

const NotificationCustomClose = () => {
  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.'
    );
  };

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };

  return (
    <Button type="primary" onClick={openNotification}>
      <IntlMessages id="ui.uiNotification.openNotificationBox" />
    </Button>
  );
};

const UiNotificationCustomClose = UiBoxC(
  'Custom Close button',
  `To customize the style or font of the close button.
                                    `,
  NotificationCustomClose
);

const NotificationPlacement = () => {
  const { Option } = Select;
  const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <div>
      <Select
        defaultValue="topRight"
        style={{ width: 120, marginRight: 10 }}
        onChange={val => {
          notification.config({
            placement: val,
          });
        }}
      >
        {options.map(val => (
          <Option key={val} value={val}>
            {val}
          </Option>
        ))}
      </Select>
      <Button type="primary" onClick={openNotification}>
        <IntlMessages id="ui.uiNotification.openNotificationBox" />
      </Button>
    </div>
  );
};

const UiNotificationPlacement = UiBoxC(
  'Placement',
  `A notification box can pop up from topRight or bottomRight or bottomLeft or topLeft.
                                      `,
  NotificationPlacement
);

const NotificationWithIcon = () => {
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <div>
      <Button onClick={() => openNotificationWithIcon('success')}>
        <IntlMessages id="ui.success" />
      </Button>
      &nbsp;
      <Button onClick={() => openNotificationWithIcon('info')}>
        <IntlMessages id="ui.info" />
      </Button>
      &nbsp;
      <Button onClick={() => openNotificationWithIcon('warning')}>
        <IntlMessages id="ui.warning" />
      </Button>
      &nbsp;
      <Button onClick={() => openNotificationWithIcon('error')}>
        <IntlMessages id="ui.error" />
      </Button>
    </div>
  );
};

const UiNotificationWithIcon = UiBoxC(
  'Notification with icon',
  `A notification box with a icon at the left side.
                                        `,
  NotificationWithIcon
);

const NotificationCustomizedIcon = () => {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    });
  };
  return (
    <Button type="primary" onClick={openNotification}>
      <IntlMessages id="ui.uiNotification.openNotificationBox" />
    </Button>
  );
};

const UiNotificationCustomizedIcon = UiBoxC(
  'Customized Icon',
  `The icon can be customized to any react node.
                                          `,
  NotificationCustomizedIcon
);

const NotificationCustomizedStyle = () => {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };
  return (
    <Button type="primary" onClick={openNotification}>
      <IntlMessages id="ui.uiNotification.openNotificationBox" />
    </Button>
  );
};

const UiNotificationCustomizedStyle = UiBoxC(
  'Customized Style',
  `The style and className are available to customize Notification.
                                            `,
  NotificationCustomizedStyle
);
