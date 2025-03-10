import React from 'react';
import { Mention } from 'antd';

const Nav = Mention.Nav;

class MentionCustomized extends React.Component {
  state = {
    suggestions: [],
  };

  webFrameworks = [
    { name: 'React', type: 'JavaScript' },
    { name: 'Angular', type: 'JavaScript' },
    { name: 'Laravel', type: 'PHP', disabled: true },
    { name: 'Flask', type: 'Python' },
    { name: 'Django', type: 'Python' },
  ];

  onSelect = (suggestion, data) => {
    console.log('onSelect', suggestion, data);
  };

  onSearchChange = value => {
    const searchValue = value.toLowerCase();
    const filtered = this.webFrameworks.filter(
      item => item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav value={suggestion.name} data={suggestion}>
        <span>
          {suggestion.name} - {suggestion.type}
        </span>
      </Nav>
    ));
    this.setState({ suggestions });
  };

  render() {
    const { suggestions } = this.state;
    return (
      <Mention
        placeholder="@someone"
        style={{ width: '100%' }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
        onSelect={this.onSelect}
      />
    );
  }
}
export default MentionCustomized;
