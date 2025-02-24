import React from 'react';

class Quote extends React.Component {
  render() {
    const { text, authorName, profession } = this.props;
    return (
      <div className="msaTypographyQuote">
        <p className="quote">{text}</p>
        <p className="authorName">{`${authorName}, ${profession}`}</p>
      </div>
    );
  }
}
export default Quote;
