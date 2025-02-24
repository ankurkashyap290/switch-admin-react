import React from 'react';
import { Popconfirm, message, Switch } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class PopConfirmConditionalTrigger extends React.Component {
  state = {
    visible: false,
    condition: true, // Whether meet the condition, if not show popconfirm.
  };

  changeCondition = value => {
    this.setState({ condition: value });
  };

  confirm = () => {
    this.setState({ visible: false });
    message.success('Next step.');
  };

  cancel = () => {
    this.setState({ visible: false });
    message.error('Click on cancel.');
  };

  handleVisibleChange = visible => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    // Determining condition before show the popconfirm.
    const { condition } = this.state;
    if (condition) {
      this.confirm(); // next step
    } else {
      this.setState({ visible }); // show the popconfirm
    }
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Popconfirm
          title="Are you sure delete this task?"
          visible={visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#/">
            <IntlMessages id="ui.deleteTask" />
          </a>
        </Popconfirm>
        <br />
        <br />
        <IntlMessages id="ui.uiPopConfirm.directlyExecute" />
        <Switch defaultChecked onChange={this.changeCondition} />
      </div>
    );
  }
}
export default PopConfirmConditionalTrigger;
