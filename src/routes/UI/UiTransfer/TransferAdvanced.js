import React from 'react';
import { Transfer, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class TransferAdvanced extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount = () => {
    this.getMock();
  };

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i += 1) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };

  renderFooter = () => {
    return (
      <Button size="small" style={{ float: 'right', margin: 5 }} onClick={this.getMock}>
        <IntlMessages id="ui.reload" />
      </Button>
    );
  };

  render() {
    const { mockData, targetKeys } = this.state;
    return (
      <Transfer
        dataSource={mockData}
        showSearch
        listStyle={{
          width: 250,
          height: 300,
        }}
        operations={['to right', 'to left']}
        targetKeys={targetKeys}
        onChange={this.handleChange}
        render={item => `${item.title}-${item.description}`}
        footer={this.renderFooter}
      />
    );
  }
}
export default TransferAdvanced;
