import React from 'react';
import { Popover, Button } from 'antd';
import IntlMessages from '../../../components/utils/intlMessages';

class PopoverControllingClose extends React.Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const { visible } = this.state;
    return (
      <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">
          <IntlMessages id="ui.clickMe" />
        </Button>
      </Popover>
    );
  }
}

export default PopoverControllingClose;
