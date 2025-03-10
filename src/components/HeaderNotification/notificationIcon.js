import React, { PureComponent } from 'react';
import { Popover, Icon, Tabs, Badge, Spin } from 'antd';
import classNames from 'classnames';
import List from './notificationList';

const { TabPane } = Tabs;

export default class NotificationIcon extends PureComponent {
  static defaultProps = {
    onItemClick: () => {},
    onPopupVisibleChange: () => {},
    onTabChange: () => {},
    onClear: () => {},
    loading: false,
    locale: {
      emptyText: 'Blank',
      clear: 'Clear',
    },
    emptyImage: '/images/wAhyIChODzsoKIOBHcBk.svg',
  };

  static Tab = TabPane;

  constructor(props) {
    super(props);
    this.state = {};
    if (props.children && props.children[0]) {
      this.state.tabType = props.children[0].props.title;
    }
  }

  onItemClick = (item, tabProps) => {
    const { onItemClick } = this.props;
    onItemClick(item, tabProps);
  };

  onTabChange = tabType => {
    const { onTabChange } = this.props;
    this.setState({ tabType });
    onTabChange(tabType);
  };

  getNotificationBox() {
    const { children, loading, locale, onClear } = this.props;

    if (!children) {
      return null;
    }
    const panes = React.Children.map(children, child => {
      const title =
        child.props.list && child.props.list.length > 0
          ? `${child.props.title} (${child.props.list.length})`
          : child.props.title;
      return (
        <TabPane tab={title} key={child.props.title}>
          <List
            {...child.props}
            data={child.props.list}
            onClick={item => this.onItemClick(item, child.props)}
            onClear={() => onClear(child.props.title)}
            title={child.props.title}
            locale={locale}
          />
        </TabPane>
      );
    });
    return (
      <Spin spinning={loading} delay={0}>
        <Tabs
          className="tabs"
          styles={{ height: '400px', width: '400px' }}
          onChange={this.onTabChange}
        >
          {panes}
        </Tabs>
      </Spin>
    );
  }

  render() {
    const { className, count, popupAlign, onPopupVisibleChange } = this.props;
    const noticeButtonClass = classNames(className, 'noticeButton');
    const notificationBox = this.getNotificationBox();
    const trigger = (
      <span className={noticeButtonClass}>
        <Badge count={count} className="badge">
          <Icon type="bell" className="bellIcon" />
        </Badge>
      </span>
    );
    if (!notificationBox) {
      return trigger;
    }
    const popoverProps = {};
    const { popupVisible } = this.props;
    if ('popupVisible' in this.props) {
      popoverProps.visible = popupVisible;
    }
    return (
      <Popover
        placement="bottomRight"
        content={notificationBox}
        popupClassName="popover"
        trigger="click"
        arrowPointAtCenter
        popupAlign={popupAlign}
        onVisibleChange={onPopupVisibleChange}
        {...popoverProps}
      >
        {trigger}
      </Popover>
    );
  }
}
