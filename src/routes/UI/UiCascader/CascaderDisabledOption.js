import React from 'react';
import { Cascader } from 'antd';

class CascaderDisabledOption extends React.Component {
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
        disabled: true,
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

    return <Cascader options={options} onChange={this.onChange} />;
  }
}

export default CascaderDisabledOption;
