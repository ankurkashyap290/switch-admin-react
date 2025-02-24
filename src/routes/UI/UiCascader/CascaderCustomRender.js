import React from 'react';
import { Cascader } from 'antd';

class CascaderCustomRender extends React.Component {
  handleAreaClick = (e, label, option) => {
    e.stopPropagation();
    console.log('clicked', label, option);
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
                code: 752100,
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
                code: 453400,
              },
            ],
          },
        ],
      },
    ];

    const displayRender = (labels, selectedOptions) =>
      labels.map((label, i) => {
        const option = selectedOptions[i];
        if (i === labels.length - 1) {
          return (
            <span key={option.value}>
              {label} (
              <a href="#a" onClick={e => this.handleAreaClick(e, label, option)}>
                {option.code}
              </a>
              )
            </span>
          );
        }
        return <span key={option.value}>{label} / </span>;
      });
    return (
      <Cascader
        options={options}
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        displayRender={displayRender}
        style={{ width: 270 }}
      />
    );
  }
}

export default CascaderCustomRender;
