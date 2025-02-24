import React, { Component } from 'react';
import CardFront from './CardFront';
import CardBackPostControl from './CardBackPostControl';
import CardBackPostRead from './CardBackPostRead';
import CardBackPostShare from './CardBackPostShare';
// React component for the card (main component)
class RotatingCard extends Component {
  getCardBack = () => {
    let cardBack = null;
    const {
      cardBackType,
      cardBackTitle,
      cardBackDesc,
      textColor,
      backgroundImage,
      backgroundColor,
      width,
      height,
      viewButtonColor,
      viewButtonClick,
      editButtonColor,
      editButtonClick,
      deleteButtonColor,
      deleteButtonClick,
      readButtonClick,
      readButtonColor,
      bookmarkButtonClick,
      bookmarkButtonColor,
      socialMedia,
      twitterButtonClick,
      twitterButtonColor,
      facebookButtonClick,
      facebookButtonColor,
      instagramButtonClick,
      instagramButtonColor,
      loading,
    } = this.props;

    if (cardBackType === 'postControls') {
      cardBack = (
        <CardBackPostControl
          cardBackTitle={cardBackTitle}
          cardBackDesc={cardBackDesc}
          textColor={textColor}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          width={width}
          height={height}
          viewButtonClick={viewButtonClick}
          viewButtonColor={viewButtonColor}
          editButtonClick={editButtonClick}
          editButtonColor={editButtonColor}
          deleteButtonClick={deleteButtonClick}
          deleteButtonColor={deleteButtonColor}
          loading={loading}
        />
      );
    } else if (cardBackType === 'postRead') {
      cardBack = (
        <CardBackPostRead
          cardBackTitle={cardBackTitle}
          cardBackDesc={cardBackDesc}
          textColor={textColor}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          width={width}
          height={height}
          readButtonClick={readButtonClick}
          readButtonColor={readButtonColor}
          bookmarkButtonClick={bookmarkButtonClick}
          bookmarkButtonColor={bookmarkButtonColor}
          loading={loading}
        />
      );
    } else if (cardBackType === 'postShare') {
      cardBack = (
        <CardBackPostShare
          cardBackTitle={cardBackTitle}
          cardBackDesc={cardBackDesc}
          textColor={textColor}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          width={width}
          height={height}
          socialMedia={socialMedia}
          readButtonClick={readButtonClick}
          readButtonColor={readButtonColor}
          instagramButtonClick={instagramButtonClick}
          instagramButtonColor={instagramButtonColor}
          twitterButtonClick={twitterButtonClick}
          twitterButtonColor={twitterButtonColor}
          facebookButtonClick={facebookButtonClick}
          facebookButtonColor={facebookButtonColor}
          loading={loading}
        />
      );
    } else {
      cardBack = (
        <CardBackPostRead
          cardBackTitle={cardBackTitle}
          cardBackDesc={cardBackDesc}
          textColor={textColor}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          width={width}
          height={height}
          readButtonClick={readButtonClick}
          readButtonColor={readButtonColor}
          bookmarkButtonClick={bookmarkButtonClick}
          bookmarkButtonColor={bookmarkButtonColor}
          loading={loading}
        />
      );
    }

    return cardBack;
  };

  render() {
    const {
      cardFrontTitle,
      cardFrontDesc,
      textColor,
      backgroundImage,
      authorImage,
      authorName,
      width,
      height,
      backgroundColor,
      loading,
    } = this.props;
    return (
      <div className="msaRotatingCard">
        <div className="cardContainer" style={{ maxWidth: width, height }}>
          <div
            className="cardBody"
            style={{
              maxWidth: width,
              maxHeight: height,
              borderRadius: '6px',
            }}
          >
            {this.getCardBack()}

            <CardFront
              cardFrontTitle={cardFrontTitle}
              cardFrontDesc={cardFrontDesc}
              textColor={textColor}
              authorImage={authorImage}
              authorName={authorName}
              backgroundImage={backgroundImage}
              backgroundColor={backgroundColor}
              width={width}
              height={height}
              loading={loading}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RotatingCard;
