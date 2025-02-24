import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import SliderBasic from './SliderBasic';
import SliderWithIcon from './SliderWithIcon';
import SliderEvent from './SliderEvent';
import SliderVertical from './SliderVertical';
import SliderGraduated from './SliderGraduated';
import SliderCustomizeTooltip from './SliderCustomizeTooltip';
import IntegerStep from './IntegerStep';
import DecimalStep from './DecimalStep';

const TabPane = Tabs.TabPane;

class UiSlider extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Slider/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiSliderBasic />
          </TabPane>
          <TabPane tab="Slider with Icon" key="2">
            <UiSliderWithIcon />
          </TabPane>
          <TabPane tab="Event" key="3">
            <UiSliderEvent />
          </TabPane>
          <TabPane tab="Vertical" key="4">
            <UiSliderVertical />
          </TabPane>
          <TabPane tab="Graduated Slider" key="5">
            <UiSliderGraduated />
          </TabPane>
          <TabPane tab="Customize Tooltip" key="6">
            <UiSliderCustomizeTooltip />
          </TabPane>
          <TabPane tab="Slider With Input Number" key="7">
            <UiSliderWithInputNumber />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiSlider;

const UiSliderBasic = UiBoxC(
  'Basic',
  `Basic slider. When range is true, display as dual thumb mode. When disable is true, the slider will not be interactable.
                                              `,
  SliderBasic
);

const IconSlider = () => {
  return <SliderWithIcon min={0} max={20} value={0} icon={['frown-o', 'smile-o']} />;
};

const UiSliderWithIcon = UiBoxC(
  'Slider with icon',
  `You can add an icon beside the slider to make it meaningful.
                                                `,
  IconSlider
);

const UiSliderEvent = UiBoxC(
  'Event',
  `Slider Event.
                                                  `,
  SliderEvent
);

const UiSliderVertical = UiBoxC(
  'Vertical',
  `The vertical Slider.
                                                    `,
  SliderVertical
);

const UiSliderGraduated = UiBoxC(
  'Graduated Slider',
  `Using marks property to mark a graduated slider, use value or defaultValue to specify the position of thumb. When included is false, means that different thumbs are coordinative. when step is null, users can only slide the thumbs onto marks..
                                                    `,
  SliderGraduated
);

const UiSliderCustomizeTooltip = UiBoxC(
  'Customize Tooltip',
  `Use tipFormatter to format content of Tooltip. If tipFormatter is null, hide it.
                                                    `,
  SliderCustomizeTooltip
);

const SliderWithInputNumber = () => {
  return (
    <div>
      <IntegerStep />
      <DecimalStep />
    </div>
  );
};

const UiSliderWithInputNumber = UiBoxC(
  'Slider with Input Number',
  `Synchronize with InputNumber component.
                                                    `,
  SliderWithInputNumber
);
