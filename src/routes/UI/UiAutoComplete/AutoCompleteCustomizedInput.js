import React from 'react';
import { AutoComplete, Input } from 'antd';
import './UiAutoComplete.less';

const { TextArea } = Input;
class AutoCompleteCustomizedInput extends React.Component {
  state = {
    dataSource: [],
  };

  onSelect = value => {
    console.log('onSelect', value);
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  handleKeyPress = ev => {
    console.log('handleKeyPress', ev);
  };

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
      >
        <TextArea
          placeholder="input here"
          className="custom"
          style={{ height: 50 }}
          onKeyPress={this.handleKeyPress}
        />
      </AutoComplete>
    );
  }
}
export default AutoCompleteCustomizedInput;
