import React from 'react';
import { Mention } from 'antd';

const { toContentState } = Mention;

class MentionControlled extends React.Component {
  state = {
    value: toContentState('@afc163'),
  };

  componentDidMount() {
    this.mention.focus();
  }

  handleChange = editorState => {
    this.setState({
      value: editorState,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Mention
        ref={ele => (this.mention = ele)}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', 'Chinese', 'Japanese']}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
export default MentionControlled;
