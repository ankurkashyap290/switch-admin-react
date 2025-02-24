import React from 'react';
import { Checkbox, Row, Col } from 'antd';

class CheckBoxWithGrid extends React.Component {
  onChange = checkedValues => {
    console.log('checked = ', checkedValues);
  };

  render() {
    return (
      <Checkbox.Group onChange={this.onChange}>
        <Row>
          <Col span={8}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    );
  }
}

export default CheckBoxWithGrid;
