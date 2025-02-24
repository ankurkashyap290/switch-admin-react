import React from 'react';
import { Input, Icon, Row, Col } from 'antd';

class InputCustomized extends React.Component {
  state = {
    inputValue: 'First Example',
    inputVisible: false,
  };

  editInput = () => {
    this.setState({ inputVisible: true });
  };

  updateInput = () => {
    this.setState({ inputVisible: false });
  };

  onChangeInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue, inputVisible } = this.state;

    return (
      <div>
        <br />
        <Row>
          {inputVisible ? (
            <Input
              placeholder="First Example"
              suffix={<Icon type="check" onClick={this.updateInput} />}
              onChange={this.onChangeInput}
            />
          ) : (
            <Row>
              <Col span={20}>{inputValue}</Col>
              <Col span={4}>
                <Icon type="edit" value={inputValue} onClick={this.editInput} />
              </Col>
            </Row>
          )}
        </Row>
        <br />
        <Row>
          <Input placeholder="Second Example " disabled />
        </Row>
        <br />
        <Row className="exampleForth">
          <Input placeholder="Third Example " style={{ border: '0px' }} />
        </Row>
        <br />
        <Row className="exampleForth">
          <Input
            placeholder="Fourth Example "
            style={{
              borderTop: '0px',
              borderLeft: '0px',
              borderRight: '0px',
            }}
          />
        </Row>
      </div>
    );
  }
}
export default InputCustomized;
