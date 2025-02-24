import React from 'react';
import classNames from 'classnames';
import { Icon } from 'antd';
import { siteConfig } from '../../configs/app.config';

class AppFooter extends React.Component {
  render() {
    const { className, links, copyright, defaultFooter } = this.props;
    let clsString = '';
    if (defaultFooter) {
      clsString = classNames('appFooterDefault', className);
    } else {
      clsString = classNames('appFooter', className);
    }

    return (
      <div
        className={clsString}
        style={{
          borderTop: '1px solid ',
          borderColor: '#f0f2f5',
        }}
      >
        {links && (
          <div className="links">
            {links.map(link => (
              <a key={link.key} target={link.blankTarget ? '_blank' : '_self'} href={link.href}>
                {link.title}{' '}
              </a>
            ))}
          </div>
        )}
        {copyright && (
          <div className="copyright">
            {siteConfig.siteName} <Icon type="copyright" />
            {siteConfig.copyrightYear} Created by{' '}
            <a href="https://mindzhub.com" target="_blank" rel="noopener noreferrer">
              MindzHub
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default AppFooter;
