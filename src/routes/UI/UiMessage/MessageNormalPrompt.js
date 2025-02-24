import React from 'react';
import { message, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class MessageNormalPrompt extends React.Component {
  render() {
    const info = () => {
      message.info('This is a normal message');
    };
    return (
      <Button type="primary" onClick={info}>
        <IntlMessages id="ui.uiMessage.displayNormalMsg" />
      </Button>
    );
  }
}
export default MessageNormalPrompt;
