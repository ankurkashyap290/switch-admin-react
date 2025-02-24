import React from 'react';
import { Button, Popconfirm } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class PromtAction extends React.Component {
  render() {
    const { list, onAction, action, prompt, okText, text, isButton } = this.props;
    return (
      <Popconfirm
        title={prompt}
        okText={okText}
        cancelText={<IntlMessages id="theme.no" />}
        onConfirm={() => onAction(list, action)}
      >
        {isButton ? <Button>{text}</Button> : <a href="#a">{text}</a>}
      </Popconfirm>
    );
  }
}
export default PromtAction;
