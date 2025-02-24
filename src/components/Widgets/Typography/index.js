import React from 'react';
import Quote from './Quote';

class Typography extends React.Component {
  getTypoClass = () => {
    let className = null;
    const { type } = this.props;
    if (type === 'primary') {
      className = 'typographyPrimary';
    } else if (type === 'info') {
      className = 'typographyInfo';
    } else if (type === 'success') {
      className = 'typographySuccess';
    } else if (type === 'warning') {
      className = 'typographyWarning';
    } else if (type === 'danger') {
      className = 'typographyDanger';
    } else if (type === 'muted') {
      className = 'typographyMuted';
    } else {
      className = 'typographyDefault';
    }

    return className;
  };

  render() {
    const { text, type, authorName, profession } = this.props;
    return (
      <div className="msaTypographyWidget">
        {type === 'quote' ? (
          <Quote text={text} authorName={authorName} profession={profession} />
        ) : (
          <div className={this.getTypoClass()}>{text}</div>
        )}
      </div>
    );
  }
}
export default Typography;
