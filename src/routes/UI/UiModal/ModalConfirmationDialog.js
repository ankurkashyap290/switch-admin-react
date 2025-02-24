import React from 'react';
import { Modal, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const confirm = Modal.confirm;

class ModalConfirmationDialog extends React.Component {
  showConfirm = () => {
    confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showConfirm}>
          <IntlMessages id="ui.uiModel.confirm" />
        </Button>
        <Button onClick={this.showDeleteConfirm} type="dashed">
          <IntlMessages id="ui.uiModel.delete" />
        </Button>
      </div>
    );
  }
}
export default ModalConfirmationDialog;
