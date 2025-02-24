import React from 'react';
import { Mention } from 'antd';

const { toString } = Mention;

class MentionCustomizedTrigger extends React.Component {
  users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

  tags = ['1.0', '2.0', '3.0'];

  constructor() {
    super();
    this.state = {
      suggestions: [],
    };
  }

  onChange = editorState => {
    console.log(toString(editorState));
  };

  onSelect = suggestion => {
    console.log('onSelect', suggestion);
  };

  onSearchChange = (value, trigger) => {
    const dataSource = trigger === '@' ? this.users : this.tags;
    this.setState({
      suggestions: dataSource.filter(item => item.indexOf(value) !== -1),
    });
  };

  render() {
    const { suggestions } = this.state;
    return (
      <Mention
        style={{ width: '100%' }}
        onChange={this.onChange}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearchChange={this.onSearchChange}
        suggestions={suggestions}
        onSelect={this.onSelect}
      />
    );
  }
}
export default MentionCustomizedTrigger;
