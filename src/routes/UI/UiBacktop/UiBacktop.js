import React from 'react';
import { Tabs, BackTop } from 'antd';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/utils/intlMessages';

const TabPane = Tabs.TabPane;

class UiBacktop extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiBacktopBasic />
          </TabPane>
          <TabPane tab="Custom Style" key="2">
            <UiBacktopCustomStyle />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default UiBacktop;

const BacktopBasic = () => {
  return (
    <div>
      <BackTop />
      <IntlMessages id="ui.uiBackTop.scrollDown" />
      <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>
        {' '}
        <IntlMessages id="ui.uiBackTop.gray" />{' '}
      </strong>
      <IntlMessages id="ui.uiBackTop.button" />
    </div>
  );
};

const UiBacktopBasic = UiBoxC('Basic', `The most basic usage.`, BacktopBasic);

const BacktopCustomStyle = () => {
  return (
    <div className="componentsBackTopDemo">
      <BackTop>
        <div className="ant-back-top-inner">
          <IntlMessages id="ui.uiBackTop.up" />
        </div>
      </BackTop>
      <IntlMessages id="ui.uiBackTop.scrollDown" />
      <strong style={{ color: '#1088e9' }}>
        <IntlMessages id="ui.uiBackTop.blue" />{' '}
      </strong>
      <IntlMessages id="ui.uiBackTop.button" />
    </div>
  );
};

const UiBacktopCustomStyle = UiBoxC(
  'Custom Style',
  `You can customize the style of the button, just note the size limit: no more than 40px * 40px.
                                    `,
  BacktopCustomStyle
);
