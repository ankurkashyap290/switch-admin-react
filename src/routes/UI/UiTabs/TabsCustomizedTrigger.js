import React from 'react';
import { Tabs, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const TabPane = Tabs.TabPane;

class TabsCustomizedTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${(this.newTabIndex += 1)}`;
    panes.push({
      title: 'New Tab',
      content: 'Content of new Tab',
      key: activeKey,
    });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    const { activeKey, panes } = this.state;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const tempPanes = panes.filter(pane => pane.key !== targetKey);
    let tempActiveKey = '';
    if (lastIndex >= 0 && activeKey === targetKey) {
      tempActiveKey = tempPanes[lastIndex].key;
    }
    this.setState({ panes: tempPanes, activeKey: tempActiveKey });
  };

  render() {
    const { activeKey, panes } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>
            <IntlMessages id="add" />
          </Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
export default TabsCustomizedTrigger;
