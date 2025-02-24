import React from 'react';
import { Cascader } from 'antd';

class CascaderLazyOptions extends React.Component {
  state = {
    options: [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        isLeaf: false,
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        isLeaf: false,
      },
    ],
  };

  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    const { options } = this.state;
    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      this.setState({
        options: [...options],
      });
    }, 1000);
  };

  render() {
    const { options } = this.state;
    return (
      <Cascader
        options={options}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    );
  }
}
export default CascaderLazyOptions;
