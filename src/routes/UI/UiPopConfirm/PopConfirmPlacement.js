import React from 'react';
import { Popconfirm, message, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class PopConfirmPlacement extends React.Component {
  confirm = () => {
    message.info('Click on Yes.');
  };

  render() {
    const text = 'Are you sure delete this task?';
    return (
      <div className="demo">
        <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
          <Popconfirm
            placement="topLeft"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>TL</Button>
          </Popconfirm>
          <Popconfirm
            placement="top"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <IntlMessages id="ui.top" />
            </Button>
          </Popconfirm>
          <Popconfirm
            placement="topRight"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>TR</Button>
          </Popconfirm>
        </div>
        <div style={{ width: 70, float: 'left' }}>
          <Popconfirm
            placement="leftTop"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>LT</Button>
          </Popconfirm>
          <Popconfirm
            placement="left"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <IntlMessages id="ui.left" />
            </Button>
          </Popconfirm>
          <Popconfirm
            placement="leftBottom"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>LB</Button>
          </Popconfirm>
        </div>
        <div style={{ width: 70, marginLeft: 304 }}>
          <Popconfirm
            placement="rightTop"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>RT</Button>
          </Popconfirm>
          <Popconfirm
            placement="right"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <IntlMessages id="ui.right" />
            </Button>
          </Popconfirm>
          <Popconfirm
            placement="rightBottom"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>RB</Button>
          </Popconfirm>
        </div>
        <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
          <Popconfirm
            placement="bottomLeft"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>BL</Button>
          </Popconfirm>
          <Popconfirm
            placement="bottom"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <IntlMessages id="ui.bottom" />
            </Button>
          </Popconfirm>
          <Popconfirm
            placement="bottomRight"
            title={text}
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>BR</Button>
          </Popconfirm>
        </div>
      </div>
    );
  }
}
export default PopConfirmPlacement;
