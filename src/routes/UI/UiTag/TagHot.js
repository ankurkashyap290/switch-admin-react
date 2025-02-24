import React from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;

class TagHot extends React.Component {
  state = {
    selectedTags: ['Books'],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);

    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];
    const { selectedTags } = this.state;
    return (
      <div>
        <strong style={{ marginRight: 8 }}>Categories:</strong>
        {tagsFromServer.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
  }
}
export default TagHot;
