import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, HeartIcon, PandaIcon } from './socialIcons';

class SocialButtons extends React.Component {
  render() {
    return (
      <div className="msaSocialButtons">
        <h1>Social Media Buttons</h1>
        <FacebookIcon style={{ fontSize: '32px' }} />
        <TwitterIcon style={{ fontSize: '32px' }} />
        <InstagramIcon style={{ fontSize: '32px' }} />
        <HeartIcon style={{ color: 'hotpink' }} />
        <PandaIcon style={{ fontSize: '32px' }} />
      </div>
    );
  }
}
export default SocialButtons;
