import React, { PureComponent } from 'react';
import { Popconfirm, Button } from 'antd';

class PromptAction extends PureComponent {
  render() {
    const { data, onAction, action, prompt, okText, text, isButton } = this.props;
    return (
      <Popconfirm
        title={prompt}
        okText={okText}
        cancelText="No"
        onConfirm={() => onAction(data, action)}
      >
        {isButton ? <Button>{text}</Button> : <a href="#a">{text}</a>}
      </Popconfirm>
    );
  }
}
export default PromptAction;
