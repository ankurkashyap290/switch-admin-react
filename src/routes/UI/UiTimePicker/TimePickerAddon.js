import React from 'react';
import { TimePicker, Button } from 'antd';

class TimePickerAddon extends React.Component {
  state = { open: false };

  handleOpenChange = open => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <TimePicker
        open={open}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}
export default TimePickerAddon;
