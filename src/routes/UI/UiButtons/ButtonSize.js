import React from 'react';
import { Radio, Icon, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">
            <IntlMessages id="ui.uiButton.large" />
          </Radio.Button>
          &nbsp;
          <Radio.Button value="default">
            <IntlMessages id="ui.uiButton.default" />
          </Radio.Button>
          &nbsp;
          <Radio.Button value="small">
            <IntlMessages id="ui.uiButton.small" />
          </Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          <IntlMessages id="ui.uiButton.primary" />
        </Button>
        &nbsp;
        <Button size={size}>
          <IntlMessages id="ui.uiButton.normal" />
        </Button>
        &nbsp;
        <Button type="dashed" size={size}>
          <IntlMessages id="ui.uiButton.dashed" />
        </Button>
        &nbsp;
        <Button type="danger" size={size}>
          <IntlMessages id="ui.uiButton.danger" />
        </Button>
        <br />
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        &nbsp;
        <Button type="primary" icon="download" size={size}>
          <IntlMessages id="ui.uiButton.download" />
        </Button>
        <br />
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            <IntlMessages id="ui.uiButton.backward" />
          </Button>

          <Button type="primary">
            <IntlMessages id="ui.uiButton.forward" />
            <Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default ButtonSize;
