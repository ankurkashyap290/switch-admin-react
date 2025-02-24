import React from 'react';
import { TreeSelect } from 'antd';

class TreeSelectGenerateFormTree extends React.Component {
  state = {
    value: undefined,
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const treeData = [
      {
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [
          {
            title: 'Child Node1',
            value: '0-0-1',
            key: '0-0-1',
          },
          {
            title: 'Child Node2',
            value: '0-0-2',
            key: '0-0-2',
          },
        ],
      },
      {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
      },
    ];
    const { value } = this.state;
    return (
      <TreeSelect
        style={{ width: 300 }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={this.onChange}
      />
    );
  }
}
export default TreeSelectGenerateFormTree;
