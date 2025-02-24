import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../layouts/pageLayouts/ComponentDemoLayout';
import SimpleEditorToHtml from '../../components/RichTextEditor';
import UncontrolledMarkdown from '../../components/RichTextEditor/UncontrolledMarkdown';
import ToolbarOnFocus from '../../components/RichTextEditor/ToolbarOnFocus';
import ToolbarHidden from '../../components/RichTextEditor/ToolbarHidden';
import CustomizeToolbar from '../../components/RichTextEditor/CustomizeToolbar';

const { TabPane } = Tabs;

class RichTextEditor extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <ComponentDemoLayout title="<RichDraftWysiwyg/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Simple Editor To Html" key="1">
            <SimpleEditorToHtml />
          </TabPane>
          <TabPane tab="Uncontrolled To Markdown" key="2">
            <UncontrolledMarkdown />
          </TabPane>
          <TabPane tab="Toolbar On Focus" key="3">
            <ToolbarOnFocus />
          </TabPane>
          <TabPane tab="Toolbar Hidden" key="4">
            <ToolbarHidden />
          </TabPane>
          <TabPane tab="Customize Toolbar" key="5">
            <CustomizeToolbar />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default RichTextEditor;
