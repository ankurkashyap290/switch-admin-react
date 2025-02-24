import React from 'react';
import { Mention } from 'antd';

const Nav = Mention.Nav;

class MentionIconImage extends React.Component {
  state = {
    suggestions: [],
  };

  webFrameworks = [
    {
      name: 'React',
      type: 'JavaScript',
      icon: '/images/LFIeMPzdLcLnEUe.svg',
    },
    {
      name: 'Angular',
      type: 'JavaScript',
      icon: '/images/PJTbxSvzYWjDZnJ.png',
    },
    {
      name: 'Dva',
      type: 'Javascript',
      icon: '/images/EYPwSeEJKxDtVxI.png',
    },
    {
      name: 'Flask',
      type: 'Python',
      icon: '/images/xaypBUijfnpAlXE.png',
    },
  ];

  onSearchChange = value => {
    const searchValue = value.toLowerCase();
    const filtered = this.webFrameworks.filter(
      item => item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav value={suggestion.name} data={suggestion} disabled={suggestion.disabled}>
        <span>
          <img
            alt={suggestion.name}
            style={{ height: 16, width: 16, marginRight: 5, float: 'left' }}
            src={suggestion.icon}
          />
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
        style={{ width: '100%' }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    );
  }
}
export default MentionIconImage;
