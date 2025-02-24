import React from 'react';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import PropTypes from 'prop-types';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';
import { IntlProvider } from 'react-intl';
import AppRoutes from './routes';
import AppLocaleProvider from './locales/AppLocaleProvider';
import AppLocale from './locales';
import { defaultLocale } from './configs/app.config';
import { store, history } from './redux';

class App extends React.Component {
  static contextTypes = {
    direction: PropTypes.string,
  };

  state = {
    locale: defaultLocale,

    /* eslint react/no-unused-state:0 */
    switchLocale: locale => {
      if (locale === 'ar') {
        this.setState({ locale });
      } else {
        this.setState({ locale });
      }
    },
  };

  getCurrentLanguage = () => {
    const { locale } = this.state;

    return AppLocale[locale];
  };

  render() {
    const { switchLocale, locale } = this.state;

    return (
      <DirectionProvider direction={locale === 'ar' ? DIRECTIONS.RTL : DIRECTIONS.LTR}>
        <AppLocaleProvider.Provider value={this.state}>
          <LocaleProvider locale={this.getCurrentLanguage().antd}>
            <IntlProvider
              locale={this.getCurrentLanguage().locale}
              messages={this.getCurrentLanguage().messages}
            >
              <Provider store={store}>
                <AppRoutes
                  history={history}
                  switchLocale={switchLocale}
                  locale={locale}
                  direction={locale === 'ar' ? DIRECTIONS.RTL : DIRECTIONS.LTR}
                />
              </Provider>
            </IntlProvider>
          </LocaleProvider>
        </AppLocaleProvider.Provider>
      </DirectionProvider>
    );
  }
}

export default App;
