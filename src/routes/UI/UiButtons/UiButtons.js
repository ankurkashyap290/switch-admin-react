import React from 'react';
import { Icon, Tabs, Button } from 'antd';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import IntlMessages from '../../../components/Misc/intlMessages';
import ButtonSize from './ButtonSize';
import ButtonLoadingIndicator from './ButtonLoading';
import MultipleButton from './MultipleButton';

const TabPane = Tabs.TabPane;

class UiButton extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Button/>" wrapperClassName="componentsButtonDemo">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiButtonType />
          </TabPane>
          <TabPane tab="Size" key="2">
            <UiButtonSize />
          </TabPane>
          <TabPane tab="Loading Indication" key="3">
            <UiButtonLoading />
          </TabPane>
          <TabPane tab="Groups" key="4">
            <UiButtonGroup />
          </TabPane>
          <TabPane tab="Icon" key="5">
            <UiButtonIcon />
          </TabPane>
          <TabPane tab="Disabled" key="6">
            <UiButtonDisabled />
          </TabPane>
          <TabPane tab="Multiple Button Grid" key="7">
            <UiMultipleButton />
          </TabPane>
          <TabPane tab="Ghost" key="8">
            <UiButtonGhost />
          </TabPane>
          <TabPane tab="Customized" key="9">
            <UiButtonCustomized />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiButton;

const ButtonBasic = () => (
  <div>
    <Button type="primary">
      <IntlMessages id="ui.uiButton.primary" />
    </Button>
    &nbsp;
    <Button>
      <IntlMessages id="ui.uiButton.default" />
    </Button>
    &nbsp;
    <Button type="dashed">
      <IntlMessages id="ui.uiButton.dashed" />
    </Button>
    &nbsp;
    <Button type="danger">
      <IntlMessages id="ui.uiButton.danger" />
    </Button>
  </div>
);

const UiButtonType = UiBoxC(
  'Basic Buttons',
  `There are primary button, default button, dashed button and danger button.
                                                    `,
  ButtonBasic
);

const UiButtonSize = UiBoxC(
  'Button Size',
  `Default button size as well as a large and small size.
  If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size.
                                                    `,
  ButtonSize
);

const UiButtonLoading = UiBoxC(
  'Button Loaders',
  `A loading indicator can be added to a button by setting the <b>loading</b> property on the Button
                                                    `,
  ButtonLoadingIndicator
);

const ButtonGroup = () => {
  return (
    <div>
      <h4>Basic</h4>
      <Button.Group>
        <Button>
          <IntlMessages id="ui.uiButton.cancel" />
        </Button>
        <Button type="primary">
          <IntlMessages id="ui.uiButton.ok" />
        </Button>
      </Button.Group>
      &nbsp;
      <Button.Group>
        <Button disabled>L</Button>
        <Button disabled>M</Button>
        <Button disabled>R</Button>
      </Button.Group>
      &nbsp;
      <Button.Group>
        <Button type="ui.uiButton.primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
      </Button.Group>
      <h4>
        <IntlMessages id="ui.uiButton.withIcon" />
      </h4>
      <Button.Group>
        <Button type="primary">
          <Icon type="left" />
          <IntlMessages id="ui.uiButton.goBack" />
        </Button>
        <Button type="primary">
          <IntlMessages id="ui.uiButton.goForward" />
          <Icon type="right" />
        </Button>
      </Button.Group>
      &nbsp;
      <Button.Group>
        <Button type="primary" icon="cloud" />
        <Button type="primary" icon="cloud-download" />
      </Button.Group>
    </div>
  );
};

const UiButtonGroup = UiBoxC(
  'Button Group',
  `Buttons can be grouped by placing multiple Button components into a Button.Group.
  The size can be set to large, small or left unset resulting in a default size.
                                                    `,
  ButtonGroup
);

const ButtonsIcon = () => (
  <div>
    <Button type="primary" shape="circle" icon="search" />
    &nbsp;
    <Button type="primary" icon="search">
      <IntlMessages id="ui.uiButton.search" />
    </Button>
    &nbsp;
    <Button shape="circle" icon="search" />
    &nbsp;
    <Button icon="search">
      <IntlMessages id="ui.uiButton.search" />
    </Button>
    <br />
    <Button shape="circle" icon="search" />
    &nbsp;
    <Button icon="search">
      <IntlMessages id="ui.uiButton.search" />
    </Button>
    &nbsp;
    <Button type="dashed" shape="circle" icon="search" />
    &nbsp;
    <Button type="dashed" icon="search">
      <IntlMessages id="ui.uiButton.search" />
    </Button>
  </div>
);

const UiButtonIcon = UiBoxC(
  'Button Icon',
  `Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button
  If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.
                                                    `,
  ButtonsIcon
);

const ButtonDisabled = () => (
  <div>
    <Button type="primary">
      <IntlMessages id="ui.uiButton.primary" />
    </Button>
    &nbsp;
    <Button type="primary" disabled>
      <IntlMessages id="ui.uiButton.primary(disabled)" />
    </Button>
    <br />
    <Button>
      <IntlMessages id="ui.uiButton.default" />
    </Button>
    &nbsp;
    <Button disabled>
      <IntlMessages id="ui.uiButton.default(disabled)" />
    </Button>
    <br />
    <Button>
      <IntlMessages id="ui.uiButton.ghost" />
    </Button>
    &nbsp;
    <Button disabled>
      <IntlMessages id="ui.uiButton.ghost(disabled)" />
    </Button>
    <br />
    <Button type="dashed">
      <IntlMessages id="ui.uiButton.dashed" />
    </Button>
    &nbsp;
    <Button type="dashed" disabled>
      <IntlMessages id="ui.uiButton.Dashed(disabled)" />
    </Button>
  </div>
);

const UiButtonDisabled = UiBoxC(
  'Button Disabled',
  `To mark a button as disabled, add the disabled property to the Button.
                                                    `,
  ButtonDisabled
);

const UiMultipleButton = UiBoxC(
  'Multiple Buttons',
  `If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into Dropdown.Button.
                                                    `,
  MultipleButton
);

const ButtonGhost = () => (
  <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
    <Button type="primary" ghost>
      <IntlMessages id="ui.uiButton.primary" />
    </Button>
    &nbsp;
    <Button ghost>
      <IntlMessages id="ui.uiButton.default" />
    </Button>
    &nbsp;
    <Button type="dashed" ghost>
      <IntlMessages id="ui.uiButton.dashed" />
    </Button>
    &nbsp;
    <Button type="danger" ghost>
      <IntlMessages id="ui.uiButton.danger" />
    </Button>
  </div>
);
const ButtonCustomized = () => (
  <div>
    <Button className="btnColor">
      <IntlMessages id="ui.uiButton.primary" />
    </Button>
    &nbsp;
    <Button className="btnRadius">
      <IntlMessages id="ui.uiButton.success" />
    </Button>
    &nbsp;
    <Button className="btnStyle">
      <IntlMessages id="ui.uiButton.warning" />
    </Button>
  </div>
);
const UiButtonGhost = UiBoxC(
  'Ghost Button',
  `Ghost property will make button's background transparent, it is common used in colored background
                                                    `,
  ButtonGhost
);

const UiButtonCustomized = UiBoxC(
  'Customized Button',
  `Some examples of customized buttons are
                                                    `,
  ButtonCustomized
);
