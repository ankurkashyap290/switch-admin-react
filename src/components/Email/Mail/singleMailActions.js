import React, { Component } from 'react';
import { Button, Icon, message, Menu, Dropdown } from 'antd';
import IntlMessages from '../../Misc/intlMessages';

const ButtonGroup = Button.Group;
const menuItem = {
  '1': 'Inbox',
  '2': 'Sent',
  '3': 'Draft',
  '4': 'Starred',
  '5': 'Spam',
  '6': 'Trash',
};

export default class MailAction extends Component {
  mailDelete = () => {
    message.info(`message deleted`);
  };

  handleMenuClick = e => {
    message.info(`message move to ${menuItem[e.key]} folder`);
    console.log('value of e', e);
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <IntlMessages id="email.inbox" />
        </Menu.Item>
        <Menu.Item key="2">
          <IntlMessages id="email.sent" />
        </Menu.Item>
        <Menu.Item key="3">
          <IntlMessages id="email.draft" />
        </Menu.Item>
        <Menu.Item key="4">
          <IntlMessages id="email.starred" />
        </Menu.Item>
        <Menu.Item key="5">
          <IntlMessages id="email.spam" />
        </Menu.Item>
        <Menu.Item key="6">
          <IntlMessages id="email.trash" />
        </Menu.Item>
      </Menu>
    );
    return (
      <ButtonGroup>
        <Dropdown overlay={menu}>
          <Button type="primary">
            <Icon type="folder" />
          </Button>
        </Dropdown>
        <Button type="primary" onClick={this.mailDelete}>
          <Icon type="delete" />
        </Button>
      </ButtonGroup>
    );
  }
}
