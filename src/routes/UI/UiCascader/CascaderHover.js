import React from 'react';
import { Cascader } from 'antd';

class CascaderHover extends React.Component {
  onChange = value => {
    console.log(value);
  };

  // Just show the latest item.
  displayRender = label => {
    return label[label.length - 1];
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
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ];
    return (
      <Cascader
        options={options}
        expandTrigger="hover"
        displayRender={this.displayRender}
        onChange={this.onChange}
      />
    );
  }
}
export default CascaderHover;
