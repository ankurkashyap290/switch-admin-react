import React from 'react';
import { Modal, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class ModalManualDestroy extends React.Component {
  success = () => {
    const modal = Modal.success({
      title: 'This is a notification message',
      content: 'This modal will be destroyed after 1 second',
    });
    setTimeout(() => modal.destroy(), 1000);
  };

  render() {
    return (
      <Button onClick={this.success}>
        {' '}
        <IntlMessages id="ui.success" />
      </Button>
    );
  }
}
export default ModalManualDestroy;
