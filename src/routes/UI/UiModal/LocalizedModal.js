import React from 'react';
import { Modal, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class LocalizedModal extends React.Component {
  state = { visible: false };

  confirm = () => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <IntlMessages id="ui.uiModel.modal" />
        </Button>
        <Modal
          title="Modal"
          visible={visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="حسنا"
          cancelText="إلغاء"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    );
  }
}
export default LocalizedModal;
