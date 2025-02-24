import React from 'react';
import { Pagination } from 'antd';

class PaginationControlled extends React.Component {
  state = {
    current: 3,
  };

  onChange = page => {
    this.setState({
      current: page,
    });
  };

  render() {
    const { current } = this.state;
    return <Pagination current={current} onChange={this.onChange} total={50} />;
  }
}
export default PaginationControlled;
