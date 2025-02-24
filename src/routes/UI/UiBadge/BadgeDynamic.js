import React from 'react';
import { Badge, Icon, Switch, Button } from 'antd';

const ButtonGroup = Button.Group;
class BadgeDynamic extends React.Component {
  state = {
    count: 5,
    show: true,
  };

  increase = () => {
    const { count } = this.state;
    const tempCount = count + 1;
    this.setState({ count: tempCount });
  };

  decline = () => {
    const { count } = this.state;
    let tempCount = count - 1;
    if (tempCount < 0) {
      tempCount = 0;
    }
    this.setState({ count: tempCount });
  };

  onChange = show => {
    this.setState({ show });
  };

  render() {
    const { count, show } = this.state;
    return (
      <div>
        <div>
          <Badge count={count}>
            <a href="#/" className="headExample">
              {' '}
              {''}
            </a>
          </Badge>
          <ButtonGroup>
            <Button onClick={this.decline}>
              <Icon type="minus" />
            </Button>
            <Button onClick={this.increase}>
              <Icon type="plus" />
            </Button>
          </ButtonGroup>
        </div>
        <div style={{ marginTop: 10 }}>
          <Badge dot={show}>
            <a href="#/" className="headExample">
              {' '}
              {''}
            </a>
          </Badge>
          <Switch onChange={this.onChange} checked={show} />
        </div>
      </div>
    );
  }
}
export default BadgeDynamic;
