import React from 'react';
import classNames from 'classnames';

class DefaultFooter extends React.Component {
  render() {
    const { links, copyright } = this.props;
    const clsString = classNames('appFooter');

    return (
      <div className={clsString}>
        {links && (
          <div className="links">
            {links.map(link => (
              <a key={link.key} target={link.blankTarget ? '_blank' : '_self'} href={link.href}>
                {link.title}
              </a>
            ))}
          </div>
        )}
        {copyright && <div className="copyright">{copyright}</div>}
      </div>
    );
  }
}
export default DefaultFooter;
