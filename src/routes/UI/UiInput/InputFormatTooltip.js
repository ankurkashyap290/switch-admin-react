import React from 'react';
import InputNumeric from './InputNumeric';

class InputFormatTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return <InputNumeric style={{ width: 120 }} value={value} onChange={this.onChange} />;
  }
}
export default InputFormatTooltip;
