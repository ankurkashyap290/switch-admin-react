import React from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class RadioStyle extends React.Component {
  onChange = e => {
    console.log(`radio checked:${e.target.value}`);
  };

  render() {
    return (
      <div>
        <div>
          <RadioGroup onChange={this.onChange} defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup onChange={this.onChange} defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b" disabled>
              Shanghai
            </RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup disabled onChange={this.onChange} defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </div>
      </div>
    );
  }
}
export default RadioStyle;
