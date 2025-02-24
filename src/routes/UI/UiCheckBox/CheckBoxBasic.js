import React from 'react';
import { Checkbox } from 'antd';

class CheckBoxBasic extends React.Component {
  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  render() {
    return <Checkbox onChange={this.onChange}>Checkbox</Checkbox>;
  }
}

export default CheckBoxBasic;
