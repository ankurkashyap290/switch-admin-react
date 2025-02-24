import React from 'react';
import { Transfer } from 'antd';

class TransferBasic extends React.Component {
  state = {
    targetKeys: [],
    selectedKeys: [],
  };

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys],
    });
  };

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  render() {
    const mockData = [];
    for (let i = 0; i < 20; i += 1) {
      mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
      });
    }

    const state = this.state;
    return (
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={state.targetKeys}
        selectedKeys={state.selectedKeys}
        onChange={this.handleChange}
        onSelectChange={this.handleSelectChange}
        onScroll={this.handleScroll}
        render={item => item.title}
      />
    );
  }
}
export default TransferBasic;
