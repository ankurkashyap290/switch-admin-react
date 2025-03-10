import React from 'react';
import { Slider } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class SliderGraduated extends React.Component {
  render() {
    const marks = {
      0: '0°C',
      26: '26°C',
      37: '37°C',
      100: {
        style: {
          color: '#f50',
        },
        label: <strong>100°C</strong>,
      },
    };
    return (
      <div>
        <h4>
          <IntlMessages id="ui.included" />=<IntlMessages id="ui.true" />
        </h4>
        <Slider marks={marks} defaultValue={37} />
        <Slider range marks={marks} defaultValue={[26, 37]} />

        <h4>
          <IntlMessages id="ui.included" />=<IntlMessages id="ui.false" />
        </h4>
        <Slider marks={marks} included={false} defaultValue={37} />

        <h4>
          <IntlMessages id="ui.uiSlider.marksStep" />
        </h4>
        <Slider marks={marks} step={10} defaultValue={37} />

        <h4>
          <IntlMessages id="ui.uiSlider.step" />
        </h4>
        <Slider marks={marks} step={null} defaultValue={37} />
      </div>
    );
  }
}
export default SliderGraduated;
