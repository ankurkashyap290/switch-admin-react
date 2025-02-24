import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import './UiAutoComplete.less';
import IntlMessages from '../../../components/Misc/intlMessages';

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

class AutoCompleteLookupPatternCertain extends React.Component {
  renderTitle = title => {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<IntlMessages id="ui.uiAutoComplete.more" />}
        </a>
      </span>
    );
  };

  render() {
    const dataSource = [
      {
        title: 'topic',
        children: [
          {
            title: 'AntDesign',
            count: 10000,
          },
          {
            title: 'AntDesign UI',
            count: 10600,
          },
        ],
      },
      {
        title: 'problem',
        children: [
          {
            title: 'How nice is the AntDesign UI',
            count: 60100,
          },
          {
            title: 'What is AntDesign?',
            count: 30010,
          },
        ],
      },
      {
        title: 'article',
        children: [
          {
            title: 'AntDesign is a design language',
            count: 100000,
          },
        ],
      },
    ];
    const options = dataSource
      .map(group => (
        <OptGroup key={group.title} label={this.renderTitle(group.title)}>
          {group.children.map(opt => (
            <Option key={opt.title} value={opt.title}>
              {opt.title}
              <span className="certain-search-item-count">
                {opt.count} {<IntlMessages id="ui.uiAutoComplete.concerns" />}
              </span>
            </Option>
          ))}
        </OptGroup>
      ))
      .concat([
        <Option disabled key="all" className="show-all">
          <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
            {<IntlMessages id="ui.uiAutoComplete.seeAll" />}
          </a>
        </Option>,
      ]);
    return (
      <div className="certain-category-search-wrapper" style={{ width: 250 }}>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          size="large"
          style={{ width: '100%' }}
          dataSource={options}
          placeholder="input here"
          optionLabelProp="value"
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
      </div>
    );
  }
}

export default AutoCompleteLookupPatternCertain;
