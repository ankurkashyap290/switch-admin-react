/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button, Input } from 'antd';
import WindowResizeListener from 'react-window-size-listener';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import Mails from './mails';
import Composed from './composed';
import SingleMail from './singleMail';
import Reply from './reply';
import MailNav from './mailsNav';
import IntlMessages from '../Misc/intlMessages';
import actions from '../../redux/emails/actions';
import { containerHeight } from '../../utils/index';

let mailLayout = null;
const { emailFetchSuccess, emailFetch, emailUpdateRead } = actions;
const labels = {
  work: 'work',
  business: 'business',
  family: 'family',
  friend: 'friend',
};

const { Search } = Input;
class EmailApp extends React.Component {
  state = {
    activatedKey: 'inbox',
    type: 'inbox',
    filterType: '',
    searchValue: '',
    winHeight: '100vH',
  };

  componentDidMount() {
    this.fetchEmailData(true);
  }

  singleMailView = record => {
    const { winHeight } = this.state;
    const { breadcrumbVisible } = this.props;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);
    console.log('record', record);
    mailLayout = (
      <SingleMail
        emailData={record}
        mailReply={this.mailReply}
        currentActiveTab={this.currentActiveTab}
        rootHeight={rootHeight}
      />
    );
    this.setState({ type: '' });
  };

  mailReply = record => {
    const { winHeight } = this.state;
    const { breadcrumbVisible } = this.props;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);
    mailLayout = <Reply emailData={record} rootHeight={rootHeight} />;
    this.setState({ type: '' });
  };

  currentActiveTab = (activeKey, record) => {
    this.setState({ activatedKey: activeKey, type: activeKey });
    const { filterType } = this.state;
    const { emailUpdateRead } = this.props;
    const data = this.getSourceData(activeKey);
    let currentPage = 1;
    if (data.pagination.currentPage > 1) {
      currentPage = 1;
    }
    emailUpdateRead({
      currentPage,
      pageSize: data.pagination.pageSize,
      loading: true,
      record,
      loadMore: true,
      type: activeKey,
      labeled: filterType,
    });
  };

  handleMenuSelect = type => {
    if (labels[type]) {
      this.fetchFilterData(type);
    } else if (type === 'star') {
      this.setState({ type: 'starred' }, () => {
        this.fetchStarredEmail();
      });
    } else {
      this.setState({ type }, () => {
        this.fetchEmailData(false);
      });
    }
  };

  fetchEmailData = force => {
    const { emailFetch } = this.props;
    const { type, searchValue } = this.state;
    const data = this.getSourceData(type);
    let currentPage = 1;
    if (data.pagination.currentPage > 1) {
      currentPage = 1;
    }
    if (force || (data && (!force && !data.loaded))) {
      emailFetch({
        currentPage,
        pageSize: data.pagination.pageSize,
        loading: true,
        type,
        q: searchValue,
      });
    }
  };

  getSourceData = type => {
    const { emails } = this.props;
    return emails[`${type}Data`];
  };

  handleLoadMore = () => {
    const { emailFetch } = this.props;
    const { type, filterType, searchValue } = this.state;
    const data = this.getSourceData(type);
    const params = {
      currentPage: data.pagination.currentPage + 1,
      pageSize: data.pagination.pageSize,
      type,
      loadMore: true,
      labeled: filterType,
      q: searchValue,
    };
    emailFetch(params);
  };

  getMailLayout = (type, loading, data) => {
    let tempMailLayout = null;
    const { winHeight } = this.state;
    const { breadcrumbVisible } = this.props;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);
    const { emailLayout } = this.props;
    if (type) {
      if (type === 'compose') {
        tempMailLayout = <Composed rootHeight={rootHeight} />;
      } else {
        tempMailLayout = (
          <Mails
            loading={loading}
            type={type}
            data={!data ? { list: [] } : data}
            onLoadMore={this.handleLoadMore}
            onSelectRow={this.singleMailView}
            onSearch={this.handelOnSearch}
            rootHeight={rootHeight}
            pagination={this.handlePagination}
            emailLayout={emailLayout}
          />
        );
      }
    } else {
      tempMailLayout = mailLayout;
    }
    return tempMailLayout;
  };

  handlePagination = (currentPage, pageSize) => {
    const { type, filterType, searchValue } = this.state;
    const { emailFetch } = this.props;
    let payload = {};

    if (type === 'starred') {
      payload = {
        currentPage,
        pageSize,
        loading: true,
        type,
        starred: true,
        labeled: filterType,
      };
    } else {
      payload = {
        currentPage,
        pageSize,
        loading: true,
        type,
        labeled: filterType,
        q: searchValue,
      };
    }

    emailFetch(payload);
  };

  handelOnSearch = value => {
    const { emailFetch } = this.props;
    const { type, filterType } = this.state;
    this.setState({ searchValue: value });
    const data = this.getSourceData(type);
    if (data) {
      emailFetch({
        currentPage: data.pagination.currentPage || 1,
        pageSize: data.pagination.pageSize,
        loading: true,
        type,
        labeled: filterType,
        q: value,
      });
    } else {
      emailFetch({
        loading: true,
        type,
        labeled: filterType,
        q: value,
      });
    }
  };

  fetchFilterData = filterType => {
    const { emailFetch } = this.props;
    const { type } = this.state;
    console.log('props', this.state, this.props);
    const data = this.getSourceData(type);
    this.setState({ filterType });
    let currentPage = 1;
    if (data.pagination.currentPage > 1) {
      currentPage = 1;
    }
    let payload = {};
    if (type === 'starred') {
      payload = {
        currentPage,
        pageSize: data.pagination.pageSize,
        loading: true,
        type,
        starred: true,
        labeled: filterType,
      };
    } else {
      payload = {
        currentPage,
        pageSize: data.pagination.pageSize,
        loading: true,
        type,
        labeled: filterType,
      };
    }

    emailFetch(payload);
  };

  fetchStarredEmail = () => {
    const { emailFetch } = this.props;
    const { type, filterType } = this.state;
    const data = this.getSourceData(type);
    this.setState({ filterType });
    let currentPage = 1;
    if (data.pagination.currentPage > 1) {
      currentPage = 1;
    }
    emailFetch({
      currentPage,
      pageSize: data.pagination.pageSize,
      loading: true,
      type,
      starred: true,
      labeled: filterType,
    });
  };

  handleCompose = () => {
    this.setState({ type: 'compose' });
  };

  firstLatterUpperCase = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  renderMailLayoutTitle = () => {
    const { type } = this.state;
    const { emailLayout } = this.props;
    return (
      <Row>
        <Col xl={9} sm={9} md={9} lg={9}>
          <h3 style={emailLayout !== 'default' ? { color: '#fff' } : {}}>
            {this.firstLatterUpperCase(type)}
          </h3>{' '}
        </Col>
        <Col xl={9} sm={9} md={9} lg={9}>
          <Search
            placeholder={`Search in: ${this.firstLatterUpperCase(type)}`}
            onSearch={value => this.handelOnSearch(value)}
          />
        </Col>
      </Row>
    );
  };

  render() {
    const { type, activatedKey, winHeight } = this.state;
    const {
      emails: { loading },
      emailLayout,
      breadcrumbVisible,
    } = this.props;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);
    const data = this.getSourceData(type);
    mailLayout = this.getMailLayout(type, loading, data);

    return (
      <PageHeaderLayout title={<IntlMessages id="email.emailApp" />}>
        <WindowResizeListener
          onResize={windowSize => {
            this.setState({
              winHeight: windowSize.windowHeight,
            });
          }}
        />
        <div
          className={emailLayout === 'default' ? 'mainContainer' : ''}
          style={{ height: `${rootHeight}px` }}
        >
          <Row gutter={1}>
            <Col
              xl={4}
              sm={24}
              md={4}
              lg={4}
              xs={24}
              className={emailLayout === 'default' ? 'mainMailNav' : 'layoutOneMainMailNav'}
            >
              <Card
                title={
                  <Button type="primary" onClick={this.handleCompose} style={{ width: '100%' }}>
                    <IntlMessages id="email.compose" />
                  </Button>
                }
              >
                <MailNav
                  onMenuSelect={this.handleMenuSelect}
                  activeKey={activatedKey}
                  rootHeight={rootHeight}
                  emailLayout={emailLayout}
                />
              </Card>
            </Col>
            <Col
              xl={20}
              sm={24}
              md={20}
              lg={20}
              xs={24}
              className={emailLayout === 'default' ? 'mainMailLayout' : 'layoutMainMail'}
            >
              <Card title={this.renderMailLayoutTitle()}>{mailLayout}</Card>
            </Col>
          </Row>
        </div>
      </PageHeaderLayout>
    );
  }
}

export default connect(
  state => ({
    emails: state.emails.toJS(),
  }),
  {
    emailFetch,
    emailFetchSuccess,
    emailUpdateRead,
  }
)(EmailApp);
