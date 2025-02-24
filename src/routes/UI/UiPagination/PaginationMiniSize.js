import React from 'react';
import { Pagination } from 'antd';

class PaginationMiniSize extends React.Component {
  showTotal = total => {
    return `Total ${total} items`;
  };

  render() {
    return (
      <div>
        <Pagination size="small" total={50} />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        <Pagination size="small" total={50} showTotal={this.showTotal} />
      </div>
    );
  }
}
export default PaginationMiniSize;
