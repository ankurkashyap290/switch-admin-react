import React, { Component } from 'react';
import { Popover } from 'antd';
import notification from '../notification';
import { tags } from './mailTags';

class SelectTagButton extends Component {
  render() {
    const tagOptions = tags.map(tag => (
      <li
        onClick={() => {
          notification('success', `Label Added`, '');
        }}
        key={tag}
      >
        {tag}
      </li>
    ));
    const content = <ul>{tagOptions}</ul>;
    return (
      <Popover title="Select tag" content={content} overlayClassName="mailMoveDropdown">
        <button type="button" className="mailReport">
          <i className="ion-pricetags" />
        </button>
      </Popover>
    );
  }
}

export default SelectTagButton;
