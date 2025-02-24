import React from 'react';
import { Pagination } from 'antd';

class PaginationChanger extends React.Component {
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  render() {
    return (
      <Pagination
        showSizeChanger
        onShowSizeChange={this.onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    );
  }
}
export default PaginationChanger;
