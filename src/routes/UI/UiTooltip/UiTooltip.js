import React from 'react';
import { Tabs, Tooltip, Button } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/Misc/intlMessages';

const TabPane = Tabs.TabPane;

class UiTooltip extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<ToolTip/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiTooltipBasic />
          </TabPane>
          <TabPane tab="Placement" key="2">
            <UiTooltipPlacement />
          </TabPane>
          <TabPane tab="Arrow Pointing" key="3">
            <UiTooltipArrowPointing />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiTooltip;

const TooltipBasic = () => {
  return (
    <Tooltip title="prompt text">
      <span>
        <IntlMessages id="ui.uiTooltip.onMouseEnter" />
      </span>
    </Tooltip>
  );
};

const UiTooltipBasic = UiBoxC(
  'Basic',
  `The simplest usage
                                  `,
  TooltipBasic
);

const TooltipPlacement = () => {
  const text = (
    <span>
      <IntlMessages id="ui.uiToolTip.promptText" />
    </span>
  );
  return (
    <div>
      <div style={{ marginLeft: 60 }}>
        <Tooltip placement="topLeft" title={text}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text}>
          <Button>
            <IntlMessages id="ui.top" />
          </Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text}>
          <Button>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: 60, float: 'left' }}>
        <Tooltip placement="leftTop" title={text}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text}>
          <Button>
            <IntlMessages id="ui.left" />
          </Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div style={{ width: 60, marginLeft: 270 }}>
        <Tooltip placement="rightTop" title={text}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Button>
            <IntlMessages id="ui.right" />
          </Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div style={{ marginLeft: 60, clear: 'both' }}>
        <Tooltip placement="bottomLeft" title={text}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text}>
          <Button>
            <IntlMessages id="ui.bottom" />
          </Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text}>
          <Button>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};

const UiTooltipPlacement = UiBoxC(
  'Placement',
  `The ToolTip has 12 placements choice.
                                    `,
  TooltipPlacement
);

const TooltipArrowPointing = () => {
  return (
    <div>
      <Tooltip placement="topLeft" title="Prompt Text">
        <Button>
          <IntlMessages id="ui.alignEdge" />
        </Button>
      </Tooltip>
      <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
        <Button>
          <IntlMessages id="ui.arrowPoints" />
        </Button>
      </Tooltip>
    </div>
  );
};

const UiTooltipArrowPointing = UiBoxC(
  'Arrow Pointing at center',
  `The ToolTip has 12 placements choice.
                                      `,
  TooltipArrowPointing
);
