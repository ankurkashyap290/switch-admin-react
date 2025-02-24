import React from 'react';
import { connect } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';

class PageHeaderLayout extends React.Component {
  getPageTitleClass = () => {
    const {
      theme: { pageTitleClassName },
    } = this.props;
    let foundedStyle = null;
    if (pageTitleClassName === 'pageTitleStyleOne') {
      foundedStyle = 'pageTitleStyleOne';
    } else if (pageTitleClassName === 'pageTitleStyleSecond') {
      foundedStyle = 'pageTitleStyleSecond';
    } else if (pageTitleClassName === 'pageTitleStyleThree') {
      foundedStyle = 'pageTitleStyleThree';
    } else {
      foundedStyle = 'title';
    }
    return foundedStyle;
  };

  render() {
    const {
      theme: { pageTitleClassName },
      children,
      wrapperClassName,
      top,
      ...restProps
    } = this.props;
    return (
      <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
        {top}
        <div>
          <Breadcrumb breadcrumbSeparator=">" />
          {restProps.title ? (
            <div className={pageTitleClassName === 'pageTitleStyleSecond' ? 'pageHeader' : ''}>
              <div className={this.getPageTitleClass()}>{restProps.title}</div>
            </div>
          ) : null}
        </div>
        {children ? <div className="content">{children}</div> : null}
      </div>
    );
  }
}

export default connect(
  state => ({
    theme: state.theme.toJS(),
  }),
  {}
)(PageHeaderLayout);
