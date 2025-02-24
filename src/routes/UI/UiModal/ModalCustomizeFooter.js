import React from 'react';
import { Modal, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class ModalCustomizeFooter extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <IntlMessages id="ui.uiModel.open" />
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>
              <IntlMessages id="ui.uiModel.return" />
            </Button>,
            <Button
              key="submit"
              type="primary"
              size="large"
              loading={loading}
              onClick={this.handleOk}
            >
              <IntlMessages id="ui.uiFormBack.submit" />
            </Button>,
          ]}
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
export default ModalCustomizeFooter;
