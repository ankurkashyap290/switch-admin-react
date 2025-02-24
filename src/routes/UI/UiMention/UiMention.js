import React from 'react';
import { Tabs, Form } from 'antd';
import ComponentDemoLayout from 'layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import MentionBasic from './MentionBasic';
import MentionCustomized from './MentionCustomized';
import MentionControlled from './MentionControlled';
import MentionMutliLine from './MentionMutliLine';
import MentionDisabledReadOnly from './MentionDisabledReadOnly';
import MentionAsync from './MentionAsync';
import MentionIconImage from './MentionIconImage';
import MentionWithForm from './MentionWithForm';
import MentionSuggestionContainer from './MentionSuggestionContainer';
import MentionCustomizedTrigger from './MentionCustomizedTrigger';

const TabPane = Tabs.TabPane;

class UiMention extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<@Mention/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiMentionBasic />
          </TabPane>
          <TabPane tab="Customized Suggestion" key="2">
            <UiMentionCustomized />
          </TabPane>
          <TabPane tab="Controlled" key="3">
            <UiMentionControlled />
          </TabPane>
          <TabPane tab="Mutli Line" key="4">
            <UiMentionMutliLine />
          </TabPane>
          <TabPane tab="Disabled Or Read Only" key="5">
            <UiMentionDisabledReadOnly />
          </TabPane>
          <TabPane tab="Asynchronous loading" key="6">
            <UiMentionAsync />
          </TabPane>
          <TabPane tab="Icon Image" key="7">
            <UiMentionIconImage />
          </TabPane>
          <TabPane tab="With Form" key="8">
            <UiMentionWithForm />
          </TabPane>
          <TabPane tab="Suggestion Container" key="9">
            <UiMentionSuggestionContainer />
          </TabPane>
          <TabPane tab="Customized Trigger Token" key="10">
            <UiMentionCustomizedTrigger />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiMention;

const UiMentionBasic = UiBoxC(
  'Basic',
  `Basic usage.
                                        `,
  MentionBasic
);

const UiMentionCustomized = UiBoxC(
  'Customize Suggestion',
  `Customize suggestions.
                                          `,
  MentionCustomized
);

const UiMentionControlled = UiBoxC(
  'Controlled',
  `Controlled Mode.
                                            `,
  MentionControlled
);

const UiMentionMutliLine = UiBoxC(
  'Multi-Line',
  `Multi-Line Mode.
                                              `,
  MentionMutliLine
);

const UiMentionDisabledReadOnly = UiBoxC(
  'disabled or read-only',
  `Configure disable or read only.
                                                `,
  MentionDisabledReadOnly
);

const UiMentionAsync = UiBoxC(
  'Asynchronous loading',
  `Async.
                                                  `,
  MentionAsync
);

const UiMentionIconImage = UiBoxC(
  'Icon Image',
  `Customize suggestion.
                                                    `,
  MentionIconImage
);

const FormDemo = Form.create()(MentionWithForm);

const UiMentionWithForm = UiBoxC(
  'With Form',
  `Controlled mode, for example, to work with Form.
                                                      `,
  FormDemo
);

const UiMentionSuggestionContainer = UiBoxC(
  'With Form',
  `Controlled mode, for example, to work with Form.
                                                        `,
  MentionSuggestionContainer
);

const UiMentionCustomizedTrigger = UiBoxC(
  'Customized Trigger Token',
  `Customize Trigger Token by prefix props. Default to @, Array<string> also supported.
                                                          `,
  MentionCustomizedTrigger
);
