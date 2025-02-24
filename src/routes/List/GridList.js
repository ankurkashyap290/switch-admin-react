/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { List, Icon, Avatar, Card } from 'antd';
import { connect } from 'react-redux';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import actions from '../../redux/global/actions';

const { contactsFetchStarred } = actions;
const { Meta } = Card;

class GridList extends Component {
  componentDidMount() {
    const { contactsFetchStarred } = this.props;
    contactsFetchStarred({
      payload: { currentPage: 1, pageSize: 12 },
    });
  }

  render() {
    const {
      global: { starredContacts, loading },
    } = this.props;
    return (
      <PageHeaderLayout title="Grid List">
        <Card bordered={false}>
          <List
            loading={loading}
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 3 }}
            dataSource={starredContacts}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ height: '410px' }}
                  cover={<img alt={item.displayName} src={item.avatar} />}
                  actions={[
                    <Icon type="setting" />,
                    <Icon type="edit" />,
                    <Icon type="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.displayName}
                    description={
                      <span>
                        {item.position_title}
                        <br />
                        {item.phone}
                      </span>
                    }
                  />
                </Card>
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
)(GridList);
