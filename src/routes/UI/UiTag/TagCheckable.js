import React from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;
class TagCheckable extends React.Component {
  state = { checked: true };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    const { checked } = this.state;
    return <CheckableTag {...this.props} checked={checked} onChange={this.handleChange} />;
  }
}
export default TagCheckable;
