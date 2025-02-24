import React from 'react';
import { Tabs, message, Button } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/Misc/intlMessages';
import MessageNormalPrompt from './MessageNormalPrompt';

const TabPane = Tabs.TabPane;

class UiMessage extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Message/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Normal Prompt" key="1">
            <UiMessageNormalPrompt />
          </TabPane>
          <TabPane tab="Other Types of message" key="2">
            <UiMessageOther />
          </TabPane>
          <TabPane tab="Message Loading" key="3">
            <UiMessageLoading />
          </TabPane>
          <TabPane tab="Customize Duration" key="4">
            <UiMessageCustomizeDuration />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiMessage;

const UiMessageNormalPrompt = UiBoxC(
  'Normal Prompt',
  `Normal Message as Feedback.
                                  `,
  MessageNormalPrompt
);

const MessageOther = () => {
  const success = () => {
    message.success('This is a message of success');
  };

  const error = () => {
    message.error('This is a message of error');
  };

  const warning = () => {
    message.warning('This is message of warning');
  };
  return (
    <div>
      <Button onClick={success}>
        <IntlMessages id="ui.uiMessage.success" />
      </Button>
      &nbsp;
      <Button onClick={error}>
        <IntlMessages id="ui.uiMessage.error" />
      </Button>
      &nbsp;
      <Button onClick={warning}>
        <IntlMessages id="ui.uiMessage.warning" />
      </Button>
    </div>
  );
};

const UiMessageOther = UiBoxC(
  'Other type of message',
  `Messages of success, error and warning types.
                                    `,
  MessageOther
);

const MessageLoading = () => {
  const success = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };
  return (
    <Button onClick={success}>
      <IntlMessages id="ui.uiMessage.displayLoading" />
    </Button>
  );
};

const UiMessageLoading = UiBoxC(
  'Message Loading',
  `Display a global loading indicator, which is dismissed by itself asynchronously.
                                      `,
  MessageLoading
);

const MessageCustomizeDuration = () => {
  const success = () => {
    message.success(
      'This is a prompt message for success, and it will disappear in 10 seconds',
      10
    );
  };
  return (
    <Button onClick={success}>
      <IntlMessages id="ui.uiMessage.customizedDisplay" />
    </Button>
  );
};

const UiMessageCustomizeDuration = UiBoxC(
  'Customize Duration',
  `Customize message display duration from default 3s to 10s.
                                        `,
  MessageCustomizeDuration
);
