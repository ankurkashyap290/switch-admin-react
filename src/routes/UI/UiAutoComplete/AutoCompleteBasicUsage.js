import React from 'react';
import { AutoComplete } from 'antd';
import './UiAutoComplete.less';

class AutoCompleteBasicUsage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  onSelect = value => {
    console.log('onSelect', value);
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      />
    );
  }
}
export default AutoCompleteBasicUsage;
