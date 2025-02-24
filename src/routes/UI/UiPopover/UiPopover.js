import React from 'react';
import { Tabs, Popover, Button } from 'antd';
import ComponentDemoLayout from 'layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/utils/intlMessages';
import PopoverControllingClose from './PopoverControllingClose';

const TabPane = Tabs.TabPane;

class UiPopover extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Pop Overs/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiPopoverBasic />
          </TabPane>
          <TabPane tab="Three way to trigger" key="2">
            <UiPopoverThreeWay />
          </TabPane>
          <TabPane tab="Controlling the close of the dialog" key="3">
            <UiPopoverControllingClose />
          </TabPane>
          <TabPane tab="Placement" key="4">
            <UiPopoverPlacement />
          </TabPane>
          <TabPane tab="Arrow Pointing" key="5">
            <UiPopoverArrowPointing />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiPopover;

const PopoverBasic = () => {
  const content = (
    <div>
      <p>
        <IntlMessages id="ui.someContents" />
      </p>
      <p>
        <IntlMessages id="ui.someContents" />
      </p>
    </div>
  );
  return (
    <Popover content={content} title="Title">
      <Button type="primary">
        <IntlMessages id="ui.hoverMe" />
      </Button>
    </Popover>
  );
};

const UiPopoverBasic = UiBoxC(
  'Basic',
  `The most basic example. The size of the floating layer depends on the contents region.
                                  `,
  PopoverBasic
);

const PopoverThreeWay = () => {
  const content = (
    <div>
      <p>
        <IntlMessages id="ui.someContents" />
      </p>
      <p>
        <IntlMessages id="ui.someContents" />
      </p>
    </div>
  );
  return (
    <div>
      <Popover content={content} title="Title" trigger="hover">
        <Button>
          <IntlMessages id="ui.hoverMe" />
        </Button>
      </Popover>
      <Popover content={content} title="Title" trigger="focus">
        <Button>
          <IntlMessages id="ui.focusMe" />
        </Button>
      </Popover>
      <Popover content={content} title="Title" trigger="click">
        <Button>
          <IntlMessages id="ui.clickMe" />
        </Button>
      </Popover>
    </div>
  );
};

const UiPopoverThreeWay = UiBoxC(
  'Three way to trigger',
  `Mouse to click, focus and move in.
                                    `,
  PopoverThreeWay
);

const UiPopoverControllingClose = UiBoxC(
  'Controlling the close of the dialog',
  `Use visible prop to control the display of the card.
                                      `,
  PopoverControllingClose
);

const PopoverPlacement = () => {
  const text = <span>Title</span>;
  const content = (
    <div>
      <p>
        <IntlMessages id="ui.someContents" />
      </p>
      <p>
        <IntlMessages id="ui.someContents" />
      </p>
    </div>
  );

  const buttonWidth = 70;
  return (
    <div className="demo">
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Popover placement="topLeft" title={text} content={content} trigger="click">
          <Button>TL</Button>
        </Popover>
        <Popover placement="top" title={text} content={content} trigger="click">
          <Button>
            <IntlMessages id="ui.top" />
          </Button>
        </Popover>
        <Popover placement="topRight" title={text} content={content} trigger="click">
          <Button>TR</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Popover placement="leftTop" title={text} content={content} trigger="click">
          <Button>LT</Button>
        </Popover>
        <Popover placement="left" title={text} content={content} trigger="click">
          <Button>
            <IntlMessages id="ui.left" />
          </Button>
        </Popover>
        <Popover placement="leftBottom" title={text} content={content} trigger="click">
          <Button>LB</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <Popover placement="rightTop" title={text} content={content} trigger="click">
          <Button>RT</Button>
        </Popover>
        <Popover placement="right" title={text} content={content} trigger="click">
          <Button>
            <IntlMessages id="ui.right" />
          </Button>
        </Popover>
        <Popover placement="rightBottom" title={text} content={content} trigger="click">
          <Button>RB</Button>
        </Popover>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popover placement="bottomLeft" title={text} content={content} trigger="click">
          <Button>BL</Button>
        </Popover>
        <Popover placement="bottom" title={text} content={content} trigger="click">
          <Button>
            <IntlMessages id="ui.bottom" />
          </Button>
        </Popover>
        <Popover placement="bottomRight" title={text} content={content} trigger="click">
          <Button>BR</Button>
        </Popover>
      </div>
    </div>
  );
};

const UiPopoverPlacement = UiBoxC(
  'Placement',
  `There are 12 placement option available.
                                        `,
  PopoverPlacement
);

const PopoverArrowPointing = () => {
  const text = <span>Title</span>;
  const content = (
    <div>
      <p>
        <IntlMessages id="ui.someContents" />
      </p>
      <p>
        <IntlMessages id="ui.someContents" />
      </p>
    </div>
  );
  return (
    <div>
      <Popover placement="topLeft" title={text} content={content}>
        <Button>
          <IntlMessages id="ui.alignEdge" />
        </Button>
      </Popover>
      <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
        <Button>
          <IntlMessages id="ui.arrowPoints" />
        </Button>
      </Popover>
    </div>
  );
};

const UiPopoverArrowPointing = UiBoxC(
  'Arrow Pointing',
  `The arrow points to the center of the target element, which set arrowPointAtCenter.
                                          `,
  PopoverArrowPointing
);
