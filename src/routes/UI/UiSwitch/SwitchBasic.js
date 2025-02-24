import React from 'react';
import { Switch } from 'antd';

class SwitchBasic extends React.Component {
  onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  render() {
    return <Switch defaultChecked={false} onChange={this.onChange} />;
  }
}
export default SwitchBasic;
