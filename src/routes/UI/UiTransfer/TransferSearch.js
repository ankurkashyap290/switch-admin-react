import React from 'react';
import { Transfer } from 'antd';

class TransferSearch extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i += 1) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  };

  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };

  render() {
    const { mockData, targetKeys } = this.state;
    return (
      <Transfer
        dataSource={mockData}
        showSearch
        filterOption={this.filterOption}
        targetKeys={targetKeys}
        onChange={this.handleChange}
        render={item => item.title}
      />
    );
  }
}
export default TransferSearch;
