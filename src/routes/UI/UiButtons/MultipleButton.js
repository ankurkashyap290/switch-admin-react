import React from 'react';
import { Icon, Menu, Dropdown, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class MultipleButton extends React.Component {
  menu = (
    <Menu onClick={this.handleMenuClick}>
      <Menu.Item key="1">1st Item</Menu.Item>
      <Menu.Item key="2">2nd Item</Menu.Item>
      <Menu.Item key="3">3rd Item</Menu.Item>
    </Menu>
  );

  handleMenuClick = e => {
    console.log('click', e);
  };

  render() {
    return (
      <div>
        <Button type="primary">
          {' '}
          <IntlMessages id="ui.uiButton.primary" />
        </Button>
        &nbsp;
        <Button>
          <IntlMessages id="ui.uiButton.secondary" />
        </Button>
        &nbsp;
        <Dropdown overlay={this.menu}>
          <Button>
            <IntlMessages id="ui.uiButton.more" /> <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    );
  }
}
export default MultipleButton;
