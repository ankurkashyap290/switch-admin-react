import React from 'react';
import { Cascader } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class CascaderCustomTrigger extends React.Component {
  state = {
    text: 'Unselect',
  };

  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
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
          },
        ],
      },
    ];

    const { text } = this.state;

    return (
      <span>
        {text}
        &nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <a href="#/">
            <IntlMessages id="ui.uiCascader.changeCity" />
          </a>
        </Cascader>
      </span>
    );
  }
}
export default CascaderCustomTrigger;
