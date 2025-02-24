import React from 'react';
import { Pagination } from 'antd';

class PaginationJumper extends React.Component {
  onChange = pageNumber => {
    console.log('Page: ', pageNumber);
  };

  render() {
    return <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />;
  }
}
export default PaginationJumper;
