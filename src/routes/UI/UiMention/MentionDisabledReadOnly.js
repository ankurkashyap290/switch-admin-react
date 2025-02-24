import React from 'react';
import { Mention } from 'antd';

class MentionDisabledReadOnly extends React.Component {
  users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

  onChange = editorState => {
    console.log(toString(editorState));
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <Mention
            style={{ width: '100%' }}
            onChange={this.onChange}
            placeholder="this is disabled Mention"
            suggestions={this.users}
            disabled
          />
        </div>
        <Mention
          style={{ width: '100%' }}
          onChange={this.onChange}
          placeholder="this is readOnly Mention"
          suggestions={this.users}
          readOnly
        />
      </div>
    );
  }
}
export default MentionDisabledReadOnly;
