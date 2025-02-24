/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { List, Icon, Avatar, Card } from 'antd';
import { connect } from 'react-redux';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import actions from '../../redux/global/actions';

const { contactsFetchStarred } = actions;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class BasicList extends Component {
  componentDidMount() {
    const { contactsFetchStarred } = this.props;
    contactsFetchStarred({
      currentPage: 1,
      pageSize: 5,
    });
  }

  render() {
    const {
      global: { starredContacts, pagination, loading },
    } = this.props;

    const paginations = {
      pageSize: pagination ? pagination.pageSize : 5,
      current: pagination ? pagination.currentPage : 1,
      total: pagination ? pagination.total : 10,
      onChange: (page, pageSize) => {
        const { contactsFetchStarred } = this.props;
        contactsFetchStarred({
          currentPage: page,
          pageSize,
        });
      },
      // position: 'top',
    };

    return (
      <PageHeaderLayout title="Basic List">
        <Card bordered={false}>
          <List
            loading={loading}
            itemLayout="vertical"
            size="large"
            pagination={paginations}
            onChange
            dataSource={starredContacts}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText type="star-o" text="156" />,
                  <IconText type="like-o" text="156" />,
                  <IconText type="message" text="2" />,
                ]}
                extra={<img width={150} alt={item.displayName} src={item.avatar} />}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.displayName}
                  description={
                    <span>
                      {item.email}, {item.position_title}, {item.phone}
                    </span>
                  }
                />
                {item.description}
              </List.Item>
            )}
          />
        </Card>
      </PageHeaderLayout>
    );
  }
}
export default connect(
  state => ({
    global: state.global.toJS(),
  }),
  {
    contactsFetchStarred,
  }
)(BasicList);
