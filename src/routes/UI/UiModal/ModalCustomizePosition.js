import React from 'react';
import { Modal, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class ModalCustomizePosition extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  setModal1Visible = modal1Visible => {
    this.setState({ modal1Visible });
  };

  setModal2Visible = modal2Visible => {
    this.setState({ modal2Visible });
  };

  render() {
    const { modal1Visible, modal2Visible } = this.state;
    return (
      <div>
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>
          <IntlMessages id="ui.uiModel.displayModel" />
        </Button>
        <Modal
          title="20px to Top"
          style={{ top: 20 }}
          visible={modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
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
        <br />
        <br />
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>
          <IntlMessages id="ui.uiModel.verticallyCenteredModel" />
        </Button>
        <Modal
          title="Vertically centered modal dialog"
          wrapClassName="vertical-center-modal"
          visible={modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
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
export default ModalCustomizePosition;
