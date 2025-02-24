import React from 'react';
import { Row, Col, Divider, Avatar, Icon, Button } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import moment from 'moment';
import MailActions from './Mail/singleMailActions';
import IntlMessages from '../Misc/intlMessages';

const activeKeys = {
  inbox: 'inbox',
  sent: 'sent',
  draft: 'draft',
  trashed: 'trashed',
  important: 'important',
  spam: 'spam',
  starred: 'starred',
};
class SingleMail extends React.Component {
  goBack = () => {
    const { currentActiveTab, emailData } = this.props;

    currentActiveTab(activeKeys[emailData.type], emailData);
  };

  mailReply = () => {
    const { mailReply, emailData } = this.props;
    mailReply(emailData);
  };

  calculateHeight = () => {
    const { rootHeight } = this.props;
    const adjustHeight = rootHeight - 75;
    return adjustHeight;
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  render() {
    const { emailData } = this.props;
    return (
      <div className="mailList">
        <Scrollbars
          style={{ height: this.calculateHeight() }}
          renderThumbVertical={this.renderThumb}
        >
          <Row>
            <Col xl={12} sm={12} md={12} lg={12}>
              <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />
              </Button>
            </Col>
            <Col xl={12} sm={12} md={12} lg={12}>
              <div style={{ float: 'right' }}>{`${moment(
                emailData.dateTime,
                'YYYYMMDD'
              ).fromNow()}`}</div>
            </Col>
          </Row>

          <Row>
            <Divider />
            <Col>
              <Row>
                <Col xl={18} sm={18} md={18} lg={18}>
                  <h2>{emailData.subject}</h2>
                </Col>
                <Col xl={2} sm={2} md={2} lg={2}>
                  <Button type="primary" onClick={this.mailReply}>
                    <IntlMessages id="email.reply" />
                  </Button>{' '}
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                  <MailActions />
                </Col>
              </Row>
            </Col>
            <Divider />
            <Col>
              <div className="senderImage">
                <Avatar size={64} icon="user" />
              </div>
              <div className="senderName">
                <h3>
                  {emailData.firstName} {emailData.lastName} <small> ({emailData.from})</small>
                </h3>
                to {emailData.to}
              </div>
            </Col>
            <Divider />
            <Col>
              <p>{emailData.message}</p>
            </Col>
            <Col>
              <p>
                <IntlMessages id="email.attachments" />
              </p>
              <img src={emailData.attachment} alt={emailData.attachment} />
              <p>
                <a href="#a">
                  <IntlMessages id="email.download" />
                </a>
              </p>
            </Col>
          </Row>
        </Scrollbars>
      </div>
    );
  }
}
export default SingleMail;
