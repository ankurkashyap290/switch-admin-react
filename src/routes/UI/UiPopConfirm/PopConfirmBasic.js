import React from 'react';
import { Popconfirm, message } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class PopConfirmBasic extends React.Component {
  confirm = e => {
    console.log(e);
    message.success('Click on Yes');
  };

  cancel = e => {
    console.log(e);
    message.error('Click on No');
  };

  render() {
    return (
      <Popconfirm
        title="Are you sure delete this task?"
        onConfirm={this.confirm}
        onCancel={this.cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#/">
          <IntlMessages id="ui.delete" />
        </a>
      </Popconfirm>
    );
  }
}
export default PopConfirmBasic;
