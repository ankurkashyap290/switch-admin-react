import React from 'react';
import { Modal, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class ModalInformationDialog extends React.Component {
  info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: 'some messages...some messages...',
    });
  };

  success = () => {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  };

  error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  };

  warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.info}>
          <IntlMessages id="ui.info" />
        </Button>
        <Button onClick={this.success}>
          <IntlMessages id="ui.success" />
        </Button>
        <Button onClick={this.error}>
          <IntlMessages id="ui.error" />
        </Button>
        <Button onClick={this.warning}>
          <IntlMessages id="ui.warning" />
        </Button>
      </div>
    );
  }
}
export default ModalInformationDialog;
