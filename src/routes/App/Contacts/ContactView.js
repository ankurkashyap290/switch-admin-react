/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { Card, Avatar, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import PageHeaderLayout from '../../../layouts/pageLayouts/PageHeaderLayout';
import IntlMessages from '../../../components/Misc/intlMessages';
import Result from '../../../components/Result';
import actions from '../../../redux/contacts/actions';

const { Meta } = Card;
const { contactFetch } = actions;
const ViewContact = props => {
  const { formData } = props;
  return (
    <Card
      cover={<img alt={formData.displayName} src={formData.avatar} />}
      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      style={{ width: 300 }}
    >
      <Meta
        avatar={<Avatar src={formData.avatar} />}
        title={formData.displayName}
        description={
          <span>
            {formData.position_title}
            <br />
            {formData.phone}
          </span>
        }
      />
    </Card>
  );
};

class ContactView extends PureComponent {
  componentDidMount() {
    const {
      contactFetch,
      contacts: { pagination },
    } = this.props;
    contactFetch({
      currentPage: pagination.currentPage,
      pageSize: pagination.pageSize,
    });
  }

  getContact = () => {
    const {
      contacts: { list },
      match,
    } = this.props;
    let contact = null;
    const contactId = match.params.id;
    if (list && list.length > 0) {
      contact = list.find(elem => {
        return `${elem.id}` === contactId;
      });
    }
    return contact;
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.push('/contacts');
  };

  render() {
    const { contacts } = this.props;
    const contact = this.getContact();
    return (
      <PageHeaderLayout title={<IntlMessages id="contact.contactDetails" />}>
        <Card bordered={false}>
          {contact ? (
            <ViewContact formData={contact} />
          ) : !contacts.loading ? (
            <Result
              type="error"
              title="Contact Not Found"
              description="Please check the contact id you provided"
              style={{ marginTop: 48, marginBottom: 16 }}
              actions={
                <Button type="primary" onClick={this.handleGoBack}>
                  <IntlMessages id="contact.goBack" />
                </Button>
              }
            />
          ) : (
            <div>
              {' '}
              <IntlMessages id="contact.loading" />
              ...
            </div>
          )}
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(
  state => ({
    contacts: state.contacts.toJS(),
  }),
  {
    contactFetch,
  }
)(ContactView);
