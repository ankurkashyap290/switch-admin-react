import React, { Component } from 'react';
import Card from '../../../UiElements/card';

class QuotesCard extends Component {
  render() {
    const {
      quotes,
      authorName,
      textColor,
      backgroundColor,
      backgroundImage,
      width,
      height,
      loading,
    } = this.props;
    return (
      <div className="msaQuotesCard">
        <Card
          bordered={false}
          style={{
            color: textColor,
            backgroundColor,
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'round',
            width,
            height,
          }}
          loading={loading}
        >
          <h1 style={{ color: textColor }}>{`"${quotes}"`}</h1>
          <p>{authorName}</p>
        </Card>
      </div>
    );
  }
}
export default QuotesCard;
