import React, { PureComponent, createElement } from 'react';
import { Breadcrumb as BaseBreadcrumb, Icon } from 'antd';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IntlMessages from '../Misc/intlMessages';

function urlToList(url) {
  const urlList = url.split('/').filter(i => i);
  return urlList.map((urlItem, index) => {
    return `/${urlList.slice(0, index + 1).join('/')}`;
  });
}

class Breadcrumb extends PureComponent {
  static contextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };

  getBreadcrumbItem = (breadcrumbNameMap, url) => {
    let breadcrumb = breadcrumbNameMap[url];

    if (!breadcrumb) {
      Object.keys(breadcrumbNameMap).forEach(item => {
        if (pathToRegexp(item).test(url)) {
          breadcrumb = breadcrumbNameMap[item];
        }
      });
    }

    return breadcrumb || {};
  };

  getBreadcrumbProps = () => {
    const { location, breadcrumbNameMap } = this.props;

    const { location: contextLocation, breadcrumbNameMap: contextBreadcrumbNameMap } = this.context;
    return {
      routerLocation: location || contextLocation,
      breadcrumbNameMap: breadcrumbNameMap || contextBreadcrumbNameMap,
    };
  };

  genFromLocation = (routerLocation, breadcrumbNameMap) => {
    const {
      breadcrumbSeparator,
      linkElement = Link,
      extraList,
      theme: { breadcrumbType },
    } = this.props;
    let tempBreadcrumbSeparator = '/';
    if (breadcrumbType === 'with_configure_separator') {
      tempBreadcrumbSeparator = breadcrumbSeparator;
    }
    // Convert the url to an array
    const pathSnippets = urlToList(routerLocation.pathname);
    // Loop data mosaic routing
    const extraBreadcrumbItems = pathSnippets.map((url, index) => {
      const currentBreadcrumb = this.getBreadcrumbItem(breadcrumbNameMap, url);

      const isLinkable = index !== pathSnippets.length - 1 && currentBreadcrumb.component;
      return currentBreadcrumb.id && !currentBreadcrumb.hideInBreadcrumb ? (
        <BaseBreadcrumb.Item key={url}>
          {breadcrumbType === 'breadcrumb_with_icon' ? (
            <Icon type={currentBreadcrumb.icon ? currentBreadcrumb.icon : ''} />
          ) : (
            ''
          )}{' '}
          {createElement(
            isLinkable ? linkElement : 'span',
            { [linkElement === 'a' ? 'href' : 'to']: url },

            <IntlMessages id={`breadcrumb.${currentBreadcrumb.id}`} />
          )}
        </BaseBreadcrumb.Item>
      ) : null;
    });
    // Add home breadcrumbs to your head
    extraBreadcrumbItems.unshift(
      <BaseBreadcrumb.Item key="home">
        {breadcrumbType === 'breadcrumb_with_icon' ? <Icon type="home" /> : ''}{' '}
        {createElement(
          linkElement,
          {
            [linkElement === 'a' ? 'href' : 'to']: '/',
          },

          <IntlMessages id="breadcrumb.home" />
        )}
      </BaseBreadcrumb.Item>
    );

    if (extraList) {
      extraList.forEach(elem => {
        const intlName = elem.title.toLowerCase().replace(/ /gi, '_');
        console.log('elem', elem);
        extraBreadcrumbItems.push(
          <BaseBreadcrumb.Item key={elem.href}>
            {createElement(
              elem.isLinkable ? linkElement : 'span',
              { [linkElement === 'a' ? 'href' : 'to']: elem.href },

              <IntlMessages id={`breadcrumb.${intlName}`} />
            )}
          </BaseBreadcrumb.Item>
        );
      });
    }

    return (
      <BaseBreadcrumb className="breadcrumb" separator={tempBreadcrumbSeparator}>
        {extraBreadcrumbItems}
      </BaseBreadcrumb>
    );
  };

  genFromProps = (breadcrumbList, breadcrumbSeparator) => {
    const linkElement = Link;
    const {
      theme: { breadcrumbType },
    } = this.props;
    let tempBreadcrumbSeparator = '/';
    if (breadcrumbType === 'with_configure_separator') {
      tempBreadcrumbSeparator = breadcrumbSeparator;
    }
    return (
      <BaseBreadcrumb className="breadcrumb" separator={tempBreadcrumbSeparator}>
        {breadcrumbList.map(item => {
          console.log('item', item);
          return (
            <BaseBreadcrumb.Item key={item.title}>
              {breadcrumbType === 'breadcrumb_with_icon' ? (
                <Icon type={item.icon ? item.icon : ''} />
              ) : (
                ''
              )}
              {item.href ? (
                createElement(
                  linkElement,
                  {
                    [linkElement === 'a' ? 'href' : 'to']: item.href,
                  },
                  <IntlMessages id={`breadcrumb.${item.id}`} />
                )
              ) : (
                <IntlMessages id={`breadcrumb.${item.id}`} />
              )}
            </BaseBreadcrumb.Item>
          );
        })}
      </BaseBreadcrumb>
    );
  };

  genBreadcrumbWithList = () => {
    const {
      breadcrumbList,
      breadcrumbSeparator,
      theme: { breadcrumbVisible },
    } = this.props;

    if (breadcrumbVisible) {
      const { routerLocation, breadcrumbNameMap } = this.getBreadcrumbProps();

      if (breadcrumbList && breadcrumbList.length) {
        return this.genFromProps(breadcrumbList, breadcrumbSeparator || '>');
      }
      // Generate breadcrumbs based on location
      if (routerLocation && routerLocation.pathname) {
        return this.genFromLocation(routerLocation, breadcrumbNameMap);
      }
      return null;
    }
    return null;
  };

  render() {
    const breadcrumb = this.genBreadcrumbWithList();

    const {
      theme: { fixedHeader, breadcrumbType },
    } = this.props;

    return breadcrumb ? (
      fixedHeader ? (
        <div
          className={
            breadcrumbType === 'without_background'
              ? 'bcContainerwithoutBackground'
              : 'bcContainerwithHeader'
          }
        >
          {breadcrumb}
        </div>
      ) : (
        <div className="bcContainer">{breadcrumb}</div>
      )
    ) : fixedHeader ? (
      <div className="bcContainerwithoutBreadcrumb" />
    ) : (
      <div className="bcContainerwithBreadcrumb" />
    );
  }
}

export default connect(
  state => ({
    theme: state.theme.toJS(),
  }),
  {}
)(Breadcrumb);
