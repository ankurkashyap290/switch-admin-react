import React from 'react';
import { AutoComplete } from 'antd';
import './UiAutoComplete.less';

class AutoCompleteNonCaseSensitive extends React.Component {
  render() {
    const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

    return (
      <AutoComplete
        style={{ width: 200 }}
        dataSource={dataSource}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    );
  }
}
export default AutoCompleteNonCaseSensitive;
