import React, { createElement } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import { exceptions } from '../../configs/app.config';
import IntlMessages from '../Misc/intlMessages';

export default ({ className, linkElement = 'a', type, title, desc, img, actions, ...rest }) => {
  const pageType = type in exceptions ? type : '404';
  const clsString = classNames('exception', className);
  return (
    <div className={clsString} {...rest}>
      <div className="imgBlock">
        <div
          className="imgEle"
          style={{ backgroundImage: `url(${img || exceptions[pageType].img})` }}
        />
      </div>
      <div className="content">
        <h1>{title || exceptions[pageType].title}</h1>
        <div className="desc">{desc || exceptions[pageType].desc}</div>
        <div className="actions">
          {actions ||
            createElement(
              linkElement,
              {
                to: '/',
                href: '/',
              },
              <Button type="primary">
                <IntlMessages id="exception.goToHome" />
              </Button>
            )}
        </div>
      </div>
    </div>
  );
};
