/* eslint-disable no-shadow */
import React from 'react';
import { Tag } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import NotificationIcon from './notificationIcon';

class NotificationBar extends React.Component {
  getNoticeData = () => {
    const {
      notices: { data },
    } = this.props;

    if (data && data.length > 0) {
      const newNotices = data.map(notice => {
        const newNotice = { ...notice };
        if (newNotice.datetime) {
          newNotice.datetime = moment(notice.datetime).fromNow();
        }
        // transform id to item key
        if (newNotice.id) {
          newNotice.key = newNotice.id;
        }
        if (newNotice.extra && newNotice.status) {
          const color = {
            todo: '',
            processing: 'blue',
            urgent: 'red',
            doing: 'gold',
          }[newNotice.status];
          newNotice.extra = (
            <Tag color={color} style={{ marginRight: 0 }}>
              {newNotice.extra}
            </Tag>
          );
        }
        return newNotice;
      });
      return groupBy(newNotices, 'type');
    }
  };

  render() {
    const { count, onClear } = this.props;
    const noticeData = this.getNoticeData() || [];

    return (
      <NotificationIcon
        count={count}
        onItemClick={(item, tabProps) => {
          console.log(item, tabProps); // eslint-disable-line
        }}
        onClear={onClear}
        popupAlign={{ offset: [20, -16] }}
      >
        <NotificationIcon.Tab
          list={noticeData.Notice}
          title="Notice"
          emptyText="You have reviewed all the notifications"
          emptyImage="/images/wAhyIChODzsoKIOBHcBk.svg"
        />
        <NotificationIcon.Tab
          list={noticeData.News}
          title="News"
          emptyText="You have read all the news"
          emptyImage="/images/sAuJeJzSKbUmHfBQRzmZ.svg"
        />
        <NotificationIcon.Tab
          list={noticeData.Upcoming}
          title="Upcoming"
          emptyText="You have done all the rest"
          emptyImage="/images/HsIsxMZiWKrNUavQUXqx.svg"
        />
      </NotificationIcon>
    );
  }
}

export default NotificationBar;
