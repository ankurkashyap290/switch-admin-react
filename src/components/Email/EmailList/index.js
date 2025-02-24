import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List, Tag, Icon, Row, Col } from 'antd';
import moment from 'moment';

class BaseList extends PureComponent {
  static contextTypes = {
    direction: PropTypes.string,
  };

  listItemClick = item => {
    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(item, '9'); // mainView function need Two parameters, selectedRecord, activeKey of tab
    } else {
      console.log('selected record', item);
    }
  };

  getMailLabeledClass = label => {
    let labelClass = null;
    if (label === 'work') {
      labelClass = 'labelWork';
    } else if (label === 'business') {
      labelClass = 'labelBusiness';
    } else if (label === 'family') {
      labelClass = 'labelFamily';
    } else if (label === 'friend') {
      labelClass = 'labelFriend';
    } else {
      labelClass = 'default';
    }
    return labelClass;
  };

  getReadMail = read => {
    let readClass = null;
    if (read) {
      readClass = 'readMail';
    } else {
      readClass = 'unreadMail';
    }

    return readClass;
  };

  render() {
    const {
      loading,
      data: { list, pagination },
      baseListPagination,
    } = this.props;
    const { direction } = this.context;
    const listPagination = {
      pageSize: pagination.pageSize,
      current: pagination.currentPage,
      total: pagination.total,
      onChange: (page, pageSize) => {
        baseListPagination(page, pageSize);
      },
      position: 'top',
    };

    return (
      <List
        className={direction === 'rtl' ? 'demo-loadmore-list listPagination' : 'demo-loadmore-list'}
        loading={loading}
        itemLayout="horizontal"
        pagination={listPagination}
        dataSource={list}
        dir={direction}
        renderItem={item => (
          <List.Item
            className={this.getReadMail(item.read)}
            key={item.id}
            onClick={this.listItemClick.bind(this, item)}
          >
            <List.Item.Meta
              title={
                <div>
                  <Row>
                    <Col xl={12} sm={12} md={12} lg={12}>
                      {item.starred ? <Icon type="star" theme="filled" /> : <Icon type="star" />}
                      {`${item.firstName} ${item.lastName} `}
                      <Tag className={this.getMailLabeledClass(item.labeled)}>{item.labeled}</Tag>
                    </Col>
                    <Col xl={12} sm={12} md={12} lg={12}>
                      <div style={{ float: 'right' }}>{`${moment(
                        item.dateTime,
                        'YYYYMMDD'
                      ).fromNow()}`}</div>
                    </Col>
                  </Row>
                </div>
              }
              description={item.subject}
            />
          </List.Item>
        )}
      />
    );
  }
}
export default BaseList;
