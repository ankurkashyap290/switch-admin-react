import React from 'react';
import { Tag } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class TagBasic extends React.Component {
  log = e => {
    console.log(e);
  };

  preventDefault = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Tag>
          <IntlMessages id="ui.uiTag.tag" /> 1
        </Tag>
        <Tag>
          <a href="#/">Link</a>
        </Tag>
        <Tag closable onClose={this.log}>
          <IntlMessages id="ui.uiTag.tag" /> 2
        </Tag>
        <Tag closable onClose={this.preventDefault}>
          <IntlMessages id="ui.uiTag.preventDefault" />
        </Tag>
      </div>
    );
  }
}
export default TagBasic;
