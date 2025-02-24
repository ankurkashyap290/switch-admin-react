import React from 'react';
import { Slider, Icon, Row, Col } from 'antd';

class SliderWithIcon extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : '#173f5f';
    const nextColor = value >= mid ? '#173f5f' : '';
    return (
      <div className="icon-wrapper">
        <Row>
          <Col span={2}>
            <Icon style={{ color: preColor }} type="frown-o" />
          </Col>
          <Col span={20}>
            {' '}
            <Slider {...this.props} onChange={this.handleChange} value={value} />
          </Col>
          <Col span={2}>
            <Icon style={{ color: nextColor }} type="smile-o" />
          </Col>
        </Row>
      </div>
    );
  }
}
export default SliderWithIcon;
