import React from 'react';
import { Mention } from 'antd';

class MentionMutliLine extends React.Component {
  onChange = editorState => {
    console.log(toString(editorState));
  };

  render() {
    return (
      <Mention
        style={{ width: '100%', height: 100 }}
        onChange={this.onChange}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
        multiLines
      />
    );
  }
}
export default MentionMutliLine;
