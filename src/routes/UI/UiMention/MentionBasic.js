import React from 'react';
import { Mention } from 'antd';

const { toString, toContentState } = Mention;

class MentionBasic extends React.Component {
  onChange = contentState => {
    console.log(toString(contentState));
  };

  onSelect = suggestion => {
    console.log('onSelect', suggestion);
  };

  render() {
    return (
      <Mention
        style={{ width: '100%' }}
        onChange={this.onChange}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', 'Chinese', 'Japanese']}
        onSelect={this.onSelect}
      />
    );
  }
}
export default MentionBasic;
