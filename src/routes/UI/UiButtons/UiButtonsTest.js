import React from 'react';
import { Tabs, Button } from 'antd';
import { ButtonCssObj, ButtonStyled } from 'secureComponents/antd';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/utils/intlMessages';

const TabPane = Tabs.TabPane;

class UiButton extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Type" key="1">
            <UiButtonType />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default UiButton;

const ButtonType = () => (
  <div>
    <div>
      <h1>
        <IntlMessages id="ui.uiButtonTest.antd" />
      </h1>
      <Button type="primary">
        <IntlMessages id="ui.uiButtonTest.primary" />
      </Button>
    </div>

    {
      <div>
        <h1>Styled</h1>
        <ButtonStyled type="primary">
          <IntlMessages id="ui.uiButtonTest.primary" />
        </ButtonStyled>
        <ButtonStyled>
          <IntlMessages id="ui.uiButtonTest.default" />
        </ButtonStyled>
        <ButtonStyled type="dashed">
          <IntlMessages id="ui.uiButtonTest.dashed" />
        </ButtonStyled>
        <ButtonStyled type="danger">
          <IntlMessages id="ui.uiButtonTest.danger" />
        </ButtonStyled>
      </div>
    }

    {/* <div>
      <h1>Less</h1>

      <ButtonLess type="primary">Primary</ButtonLess>
      <ButtonLess>Default</ButtonLess>
      <ButtonLess type="dashed">Dashed</ButtonLess>
      <ButtonLess type="danger">Danger</ButtonLess>
    </div> */}
    <h1>
      <IntlMessages id="ui.uiButtonTest.cssObj" />
    </h1>
    <ButtonCssObj type="primary">
      <IntlMessages id="ui.uiButtonTest.primary" />
    </ButtonCssObj>
  </div>
);

const UiButtonType = UiBoxC(
  'Basic Buttons',
  `There are primary button, default button, dashed button and danger button.
`,
  ButtonType
);
