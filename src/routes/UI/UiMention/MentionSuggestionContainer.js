import React from 'react';
import { Mention, Button, Popover } from 'antd';
import IntlMessages from '../../../components/utils/intlMessages';

const { toContentState } = Mention;

class MentionSuggestionContainer extends React.Component {
  onChange = editorState => {
    console.log(toString(editorState));
  };

  onSelect = suggestion => {
    console.log('onSelect', suggestion);
  };

  getSuggestionContainer = () => {
    return this.popover.getPopupDomNode();
  };

  render() {
    const mention = (
      <Mention
        style={{ width: '100%' }}
        onChange={this.onChange}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', 'Chinese', 'Japanese']}
        onSelect={this.onSelect}
        getSuggestionContainer={this.getSuggestionContainer}
      />
    );
    return (
      <Popover
        trigger="click"
        content={mention}
        title="Title"
        ref={popover => (this.popover = popover)}
      >
        <Button type="primary">
          <IntlMessages id="ui.uiMention.clickMe" />
        </Button>
      </Popover>
    );
  }
}
export default MentionSuggestionContainer;
