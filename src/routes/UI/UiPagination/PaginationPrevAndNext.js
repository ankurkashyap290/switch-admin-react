import React from 'react';
import { Pagination } from 'antd';

class PaginationPrevAndNext extends React.Component {
  itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a href="#a">Previous</a>;
    } else if (type === 'next') {
      return <a href="#a">Next</a>;
    }
    return originalElement;
  };

  render() {
    return <Pagination total={500} itemRender={this.itemRender} />;
  }
}
export default PaginationPrevAndNext;
