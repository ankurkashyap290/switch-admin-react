import React from 'react';
import { Cascader } from 'antd';

class CascaderSearch extends React.Component {
  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  render() {
    const options = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
              {
                value: 'xiasha',
                label: 'Xia Sha',
                disabled: true,
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua men',
              },
            ],
          },
        ],
      },
    ];
    return (
      <Cascader options={options} onChange={this.onChange} placeholder="Please select" showSearch />
    );
  }
}

export default CascaderSearch;
