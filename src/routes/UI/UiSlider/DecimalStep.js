import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider min={0} max={1} onChange={this.onChange} value={inputValue} step={0.01} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{ marginLeft: 16 }}
            step={0.01}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
export default DecimalStep;
