import React, { Component } from 'react';
import { Spin } from 'antd';

class Loading extends Component {
  render() {
    const { fullWidth } = this.props;
    return (
      <React.Fragment>
        {fullWidth ? (
          <div style={{ textAlign: 'center', marginTop: '45vh' }}>
            <Spin />
          </div>
        ) : (
          <Spin />
        )}
      </React.Fragment>
    );
  }
}
export default Loading;
