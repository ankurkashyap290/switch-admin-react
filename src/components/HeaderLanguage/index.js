/* eslint-disable no-shadow */
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;
class LanguageBar extends React.Component {
  handleLanguageChange = value => {
    const { switchLocale } = this.props;
    switchLocale(value);
  };

  render() {
    const { locale, direction } = this.props;
    return (
      <Select
        defaultValue={locale}
        onChange={this.handleLanguageChange}
        className={
          direction === 'rtl'
            ? 'headerLanguageDropdown rtlLanguage'
            : 'headerLanguageDropdown ltrLanguage'
        }
      >
        <Option value="en">
          <img src="/images/india-flag.svg" height="20px" width="20px" alt="India Flag" /> English
        </Option>
        <Option value="es">
          <img src="/images/spain-flag.svg" height="20px" width="20px" alt="Spain Flag" /> Spanish
        </Option>
        <Option value="ar">
          <img src="/images/uae-flag.svg" height="20px" width="20px" alt="UAE Flag" /> Arabic
        </Option>
        <Option value="fr">
          <img src="/images/france-flag.svg" height="20px" width="20px" alt="France Flag" /> French
        </Option>
        <Option value="de">
          <img src="/images/germany-flag.svg" height="20px" width="20px" alt="Germany Flag" />{' '}
          Germany
        </Option>
        <Option value="nl">
          <img src="/images/nl-flag.svg" height="20px" width="20px" alt="NL Flag" /> Dutch
        </Option>
      </Select>
    );
  }
}
export default LanguageBar;
