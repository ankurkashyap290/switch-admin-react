import React from 'react';
import { Affix, Button } from 'antd';
import IntlMessages from '../../../components/utils/intlMessages';

class AffixContainerToScroll extends React.Component {
  render() {
    return (
      <div
        className="scrollable-container"
        ref={node => {
          this.container = node;
        }}
      >
        <div className="background">
          <Affix target={() => this.container}>
            <Button type="primary">
              <IntlMessages id="ui.uiAffix.affixFixed" />
            </Button>
          </Affix>
        </div>
      </div>
    );
  }
}
export default AffixContainerToScroll;
