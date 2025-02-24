import React from 'react';
import { Tabs, Alert } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/Misc/intlMessages';

const TabPane = Tabs.TabPane;

class UiAlert extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Alert/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiAlertBasic />
          </TabPane>
          <TabPane tab="More Types" key="2">
            <UiAlertMoreTypes />
          </TabPane>
          <TabPane tab="Description" key="3">
            <UiAlertDescription />
          </TabPane>
          <TabPane tab="Customized Close text" key="4">
            <UiAlertCustomizedClose />
          </TabPane>
          <TabPane tab="Banner" key="5">
            <UiAlertBanner />
          </TabPane>
          <TabPane tab="Icon" key="6">
            <UiAlertIcon />
          </TabPane>
          <TabPane tab="Closable" key="7">
            <UiAlertClosable />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiAlert;

const AlertBasic = () => {
  return <Alert message={<IntlMessages id="ui.uiAlert.successText" />} type="success" />;
};

const UiAlertBasic = UiBoxC(
  'Basic',
  `The simplest usage for short messages.
                                  `,
  AlertBasic
);

const AlertMoreTypes = () => {
  return (
    <div>
      <Alert message={<IntlMessages id="ui.uiAlert.successText" />} type="success" />
      <br />
      <Alert message={<IntlMessages id="ui.uiAlert.infoText" />} type="info" />
      <br />
      <Alert message={<IntlMessages id="ui.uiAlert.warningText" />} type="warning" />
      <br />
      <Alert message={<IntlMessages id="ui.uiAlert.errorText" />} type="error" />
    </div>
  );
};

const UiAlertMoreTypes = UiBoxC(
  'More Types',
  `There are 4 types of Alert: success, info, warning, error.
                                    `,
  AlertMoreTypes
);

const AlertDescription = () => {
  return (
    <div>
      <Alert
        message={<IntlMessages id="ui.uiAlert.successText" />}
        description={<IntlMessages id="ui.uiAlert.successTextDesc" />}
        type="success"
      />
      <br />
      <Alert
        message={<IntlMessages id="ui.uiAlert.infoText" />}
        description={<IntlMessages id="ui.uiAlert.infoTextDesc" />}
        type="info"
      />
      <br />
      <Alert
        message={<IntlMessages id="ui.uiAlert.warningText" />}
        description={<IntlMessages id="ui.uiAlert.warningTextDesc" />}
        type="warning"
      />
      <br />
      <Alert
        message={<IntlMessages id="ui.uiAlert.errorText" />}
        description={<IntlMessages id="ui.uiAlert.errorTextDesc" />}
        type="error"
      />
    </div>
  );
};

const UiAlertDescription = UiBoxC(
  'Description',
  `Additional description for alert message.
                                      `,
  AlertDescription
);

const AlertCustomizedClose = () => {
  return (
    <Alert message={<IntlMessages id="ui.uiAlert.infoText" />} type="info" closeText="Close Now" />
  );
};

const UiAlertCustomizedClose = UiBoxC(
  'Customized Close text',
  `Replace the default icon with customized text.
                                        `,
  AlertCustomizedClose
);

const AlertBanner = () => {
  return (
    <div>
      <Alert message={<IntlMessages id="ui.uiAlert.warningText" />} banner />
      <br />
      <Alert message={<IntlMessages id="ui.uiAlert.longWarningText" />} banner closable />
      <br />
      <Alert showIcon={false} message={<IntlMessages id="ui.uiAlert.withoutIcon" />} banner />
      <br />
      <Alert type="error" message={<IntlMessages id="ui.uiAlert.errorText" />} banner />
    </div>
  );
};

const UiAlertBanner = UiBoxC(
  'Banner',
  `Display Alert as a banner at top of page.
                                          `,
  AlertBanner
);

const AlertIcon = () => {
  return (
    <div>
      <Alert message={<IntlMessages id="ui.uiAlert.successTips" />} type="success" showIcon />
      <br />
      <Alert message={<IntlMessages id="ui.uiAlert.informationalNotes" />} type="info" showIcon />
      <br />
      <Alert message={<IntlMessages id="ui.uiAlert.warning" />} type="warning" showIcon />
      <br />
      <Alert message={<IntlMessages id="ui.uiAlert.error" />} type="error" showIcon />
      <br />
      <Alert
        message={<IntlMessages id="ui.uiAlert.successTips" />}
        description={<IntlMessages id="ui.uiAlert.successTipsDesc" />}
        type="success"
        showIcon
      />
      <br />
      <Alert
        message={<IntlMessages id="ui.uiAlert.informationalNotes" />}
        description={<IntlMessages id="ui.uiAlert.informationalNotesDesc" />}
        type="info"
        showIcon
      />
      <br />
      <Alert
        message={<IntlMessages id="ui.uiAlert.warning" />}
        description={<IntlMessages id="ui.uiAlert.warningDesc" />}
        type="warning"
        showIcon
      />
      <br />
      <Alert
        message={<IntlMessages id="ui.uiAlert.error" />}
        description={<IntlMessages id="ui.uiAlert.errorDesc" />}
        type="error"
        showIcon
      />
    </div>
  );
};

const UiAlertIcon = UiBoxC(
  'Icon',
  `Decent icon make information more clear and more friendly.
                                            `,
  AlertIcon
);

const AlertClosable = () => {
  return (
    <div>
      <Alert message={<IntlMessages id="ui.uiAlert.warningTextDesc" />} type="warning" closable />
      <br />
      <Alert
        message={<IntlMessages id="ui.uiAlert.errorText" />}
        description={<IntlMessages id="ui.uiAlert.errorTextDesc" />}
        type="error"
        closable
      />
    </div>
  );
};

const UiAlertClosable = UiBoxC(
  'Closable',
  `To Show close button.
                                              `,
  AlertClosable
);
