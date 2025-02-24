import React from 'react';
import { Tabs, Timeline, Icon } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/Misc/intlMessages';

const TabPane = Tabs.TabPane;

class UiTimeline extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Timeline/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiTimelineBasic />
          </TabPane>
          <TabPane tab="Color" key="2">
            <UiTimelineColor />
          </TabPane>
          <TabPane tab="Custom" key="3">
            <UiTimelineCustom />
          </TabPane>
          <TabPane tab="Last Node" key="4">
            <UiTimelineLastNode />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiTimeline;

const TimelineBasic = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.createService" /> 2015-09-01
      </Timeline.Item>
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.solveProblems" /> 2015-09-01
      </Timeline.Item>
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.technicalTesting" /> 2015-09-01
      </Timeline.Item>
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.networkProblem" /> 2015-09-01
      </Timeline.Item>
    </Timeline>
  );
};

const UiTimelineBasic = UiBoxC(
  'Basic',
  `Basic timeline.
                                  `,
  TimelineBasic
);

const TimelineColor = () => {
  return (
    <Timeline>
      <Timeline.Item color="green">
        <IntlMessages id="ui.uiTimeline.createService" />
      </Timeline.Item>
      <Timeline.Item color="green">
        <IntlMessages id="ui.uiTimeline.createService" />
      </Timeline.Item>
      <Timeline.Item color="red">
        <p>
          <IntlMessages id="ui.uiTimeline.solveProblems" /> 1
        </p>
        <p>
          <IntlMessages id="ui.uiTimeline.solveProblems" /> 2
        </p>
        <p>
          <IntlMessages id="ui.uiTimeline.solveProblems" /> 3 2015-09-01
        </p>
      </Timeline.Item>
      <Timeline.Item>
        <p>
          <IntlMessages id="ui.uiTimeline.technicalTesting" /> 1
        </p>
        <p>
          <IntlMessages id="ui.uiTimeline.technicalTesting" /> 2
        </p>
        <p>
          <IntlMessages id="ui.uiTimeline.technicalTesting" /> 3 2015-09-01
        </p>
      </Timeline.Item>
    </Timeline>
  );
};

const UiTimelineColor = UiBoxC(
  'Color',
  `Set the color of circles. green means completed or success status, red means warning or error, and blue means ongoing or other default status.
                                    `,
  TimelineColor
);

const TimelineCustom = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.createService" /> 2015-09-01
      </Timeline.Item>
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.solveProblems" /> 2015-09-01
      </Timeline.Item>
      <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
        <IntlMessages id="ui.uiTimeline.technicalTesting" /> 2015-09-01
      </Timeline.Item>
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.networkProblem" /> 2015-09-01
      </Timeline.Item>
    </Timeline>
  );
};

const UiTimelineCustom = UiBoxC(
  'Custom',
  `Set a node as an icon or other custom element.
                                      `,
  TimelineCustom
);

const TimelineLastNode = () => {
  return (
    <Timeline
      pending={
        <a href="#stay">
          <IntlMessages id="ui.uiTimeline.seeMore" />
        </a>
      }
    >
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.createService" /> 2015-09-01
      </Timeline.Item>
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.solveProblems" /> 2015-09-01
      </Timeline.Item>
      <Timeline.Item>
        <IntlMessages id="ui.uiTimeline.technicalTesting" /> 2015-09-01
      </Timeline.Item>
    </Timeline>
  );
};

const UiTimelineLastNode = UiBoxC(
  'Last Node',
  `When the timeline is incomplete and ongoing, put a ghost node at last. set pending={true} or pending={a React Element}.
                                        `,
  TimelineLastNode
);
