import React from 'react';
import { Avatar, Button } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

class AvatarAutosetSize extends React.Component {
  UserList = ['U', 'Lucy', 'Tom', 'Edward'];

  colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

  constructor(props) {
    super(props);
    this.state = {
      user: this.UserList[0],
      color: this.colorList[0],
    };
  }

  changeUser = () => {
    const { user } = this.state;
    const index = this.UserList.indexOf(user);
    this.setState({
      user: index < this.UserList.length - 1 ? this.UserList[index + 1] : this.UserList[0],
      color: index < this.colorList.length - 1 ? this.colorList[index + 1] : this.colorList[0],
    });
  };

  render() {
    const { user, color } = this.state;
    return (
      <div>
        <Avatar style={{ backgroundColor: color }} size="large">
          {user}
        </Avatar>
        <Button size="small" style={{ marginLeft: 16 }} onClick={this.changeUser}>
          <IntlMessages id="ui.uiAvatar.change" />
        </Button>
      </div>
    );
  }
}

export default AvatarAutosetSize;
