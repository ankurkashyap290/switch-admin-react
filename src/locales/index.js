import { addLocaleData } from 'react-intl';
import EnLanguage from './en-US';
import EsLanguage from './es-ES';
import ArLanguage from './ar-EG';
import DeLanguage from './de-DE';
import FrLanguage from './fr-FR';
import NlLanguage from './nl-NL';

const AppLocale = {
  en: EnLanguage,
  es: EsLanguage,
  ar: ArLanguage,
  de: DeLanguage,
  fr: FrLanguage,
  nl: NlLanguage,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.ar.data);
addLocaleData(AppLocale.de.data);
addLocaleData(AppLocale.fr.data);
addLocaleData(AppLocale.nl.data);

export default AppLocale;
