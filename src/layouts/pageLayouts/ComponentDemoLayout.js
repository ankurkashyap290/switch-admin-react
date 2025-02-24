import React from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTabMode } from '../../utils/uiHelper';
import Breadcrumb from '../../components/Breadcrumb';
import IntlMessages from '../../components/Misc/intlMessages';

class ComponentDemoLayout extends React.Component {
  static contextTypes = {
    isMobile: PropTypes.bool,
  };

  getActiveTab = () => {
    const { location } = this.props;
    const urlArr = location.pathname.split('/');
    const tabName = urlArr[urlArr.length - 1];
    return tabName.toLowerCase().replace(/-/g, ' ');
  };

  getLastActiveTabInfo = children => {
    const tabPanes = children.props.children;
    const activeTab = this.getActiveTab();
    const found = tabPanes.find(elem => {
      return elem.props.tab.toLowerCase() === activeTab;
    });
    if (found) {
      return { index: found.key, title: found.props.tab };
    } else {
      const { history } = this.props;
      const defaultTabName = tabPanes[0].props.tab.toLowerCase().replace(/\s/g, '-');
      history.push(`${history.location.pathname}/${defaultTabName}`);
      return { index: '1', title: tabPanes[0].props.tab };
    }
  };

  getActiveTabUrl = activeTabKey => {
    const { children } = this.props;
    const tabPanes = children.props.children;
    const found = tabPanes.find(elem => {
      return elem.key === activeTabKey;
    });
    return found ? found.props.tab.toLowerCase().replace(/\s/g, '-') : '';
  };

  onTabChange = activeTab => {
    const { history } = this.props;
    const activeTabUrl = this.getActiveTabUrl(activeTab);
    if (activeTabUrl) {
      history.push(activeTabUrl);
    }
  };

  render() {
    const { children, title } = this.props;
    const lastActiveTab = children ? this.getLastActiveTabInfo(children) : null;
    const activeTabKey = lastActiveTab ? lastActiveTab.index : '';
    const { isMobile } = this.context;
    return (
      <div style={{ margin: '-24px -24px 0' }} className="wrapperClassName">
        <Breadcrumb
          extraList={[
            {
              title: lastActiveTab.title,
              href: this.getActiveTabUrl(activeTabKey),
            },
          ]}
        />
        <div className="pageHeader">
          <div className="title">
            {' '}
            <IntlMessages id="componentDemo.demoOf" /> {title}{' '}
            <IntlMessages id="componentDemo.component" />{' '}
          </div>
        </div>

        {children ? (
          <div className="content">
            <Card bordered={false}>
              {React.cloneElement(children, {
                activeKey: activeTabKey,
                style: { height: 'auto' },
                className: 'activeTab',
                onChange: this.onTabChange,
                tabPosition:
                  children.props.tabPosition === 'left'
                    ? getTabMode(isMobile)
                    : children.props.tabPosition,
              })}
            </Card>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(ComponentDemoLayout);
