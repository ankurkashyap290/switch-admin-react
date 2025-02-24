import React from 'react';
import { Modal, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class ModalBasic extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <IntlMessages id="ui.uiModel.open" />
        </Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            <IntlMessages id="ui.someContents" />
            ...
          </p>
          <p>
            <IntlMessages id="ui.someContents" />
            ...
          </p>
          <p>
            <IntlMessages id="ui.someContents" />
            ...
          </p>
        </Modal>
      </div>
    );
  }
}
export default ModalBasic;
