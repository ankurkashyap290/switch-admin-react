import React from 'react';
import { Cascader } from 'antd';

class CascaderSize extends React.Component {
  onChange = value => {
    console.log(value);
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
      <div>
        <Cascader size="large" options={options} onChange={this.onChange} />
        <br />
        <br />
        <Cascader options={options} onChange={this.onChange} />
        <br />
        <br />
        <Cascader size="small" options={options} onChange={this.onChange} />
        <br />
        <br />
      </div>
    );
  }
}
export default CascaderSize;
