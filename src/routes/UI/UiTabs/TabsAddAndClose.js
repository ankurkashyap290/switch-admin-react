import React from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class TabsAddAndClose extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      {
        title: 'Tab 1',
        content: 'Content of Tab 1',
        key: '1',
        closable: false,
      },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
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
      <Tabs
        onChange={this.onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}
export default TabsAddAndClose;
