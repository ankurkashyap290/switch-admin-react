import React from 'react';
import { Tabs, Modal, Button } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/Misc/intlMessages';
import ModalBasic from './ModalBasic';
import ModalAsyncClose from './ModalAsyncClose';
import ModalConfirmationDialog from './ModalConfirmationDialog';
import ModalInformationDialog from './ModalInformationDialog';
import ModalManualDestroy from './ModalManualDestroy';
import ModalCustomizePosition from './ModalCustomizePosition';
import LocalizedModal from './LocalizedModal';
import ModalCustomizeFooter from './ModalCustomizeFooter';

const TabPane = Tabs.TabPane;
const confirm = () => {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
};

class UiModal extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Modal/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiModalBasic />
          </TabPane>
          <TabPane tab="Async Close" key="2">
            <UiModalAsyncClose />
          </TabPane>
          <TabPane tab="Confirmation modal dialog" key="3">
            <UiModalConfirmationDialog />
          </TabPane>
          <TabPane tab="Information Modal Dialog" key="4">
            <UiModalInformationDialog />
          </TabPane>
          <TabPane tab="Manual to destroy" key="5">
            <UiModalManualDestroy />
          </TabPane>
          <TabPane tab="Customize Position of Modal" key="6">
            <UiModalCustomizePosition />
          </TabPane>
          <TabPane tab="Internationalization" key="7">
            <UiModalInternationalization />
          </TabPane>
          <TabPane tab="Customized Footer" key="8">
            <UiModalCustomizeFooter />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiModal;

const UiModalBasic = UiBoxC(
  'Basic',
  `Basic Modal.
                                  `,
  ModalBasic
);

const UiModalAsyncClose = UiBoxC(
  'Async Close ',
  `Asynchronously close a modal dialog when a user clicked OK button, for example, you can use this pattern when you submit a form..
                                    `,
  ModalAsyncClose
);

const UiModalConfirmationDialog = UiBoxC(
  'Confirmation Modal dialog ',
  `To use confirm() to popup a confirmation modal dialog.
                                      `,
  ModalConfirmationDialog
);

const UiModalInformationDialog = UiBoxC(
  ' Information Modal Dialog ',
  `In the various types of information modal dialog, only one button to close dialog is provided.
                                        `,
  ModalInformationDialog
);

const UiModalManualDestroy = UiBoxC(
  ' Manual to destroy ',
  `Manually destroying a model.
                                          `,
  ModalManualDestroy
);

const UiModalCustomizePosition = UiBoxC(
  ' To customize the position of modal ',
  `After release 1.0, Modal's align prop was removed. You can use style.top or other styles to set position of modal dialog.
                                            `,
  ModalCustomizePosition
);

const ModalInternationalization = () => {
  return (
    <div>
      <LocalizedModal />
      <br />
      <Button onClick={confirm}>
        <IntlMessages id="ui.uiModel.confirm" />
      </Button>
    </div>
  );
};

const UiModalInternationalization = UiBoxC(
  ' Internationalization ',
  `To customize the text of the buttons, you need to set okText and cancelText props.
                                              `,
  ModalInternationalization
);

const UiModalCustomizeFooter = UiBoxC(
  ' Customize Footer ',
  `To customize the text of the buttons, you need to set okText and cancelText props.
                                                `,
  ModalCustomizeFooter
);
