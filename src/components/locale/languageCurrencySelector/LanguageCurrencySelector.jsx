import styles from './LanguageCurrencySelector.module.css';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { currencyList } from '@data/currency';
import { languageList } from '@data/languages';
import { useTranslation } from 'react-i18next';
import useClickOutside from '@hooks/useClickOutside';
import LanguageIcon from '../../icons/language/LanguageIcon';
import { useCurrency } from '@context/CurrencyContext';

export default function LanguageCurrencySelector() {
  const [show, setShow] = useState(false);
  const languageDropdownRef = useRef(null);
  const { i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const { currency, setCurrency } = useCurrency();

  useClickOutside(languageDropdownRef, () => setShow(false));

  const handleShow = () => {
    setShow(!show);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShow(false);
  };
  const changeCurrency = (currency) => {
    setCurrency(currency);
    setShow(false);
  };

  return (
    <div ref={languageDropdownRef} className={styles.languageCurrencySelector}>
      <button onClick={handleShow}>
        <LanguageIcon size="32" variant={theme === 'dark' ? 'gray' : 'black'} />
      </button>
      <div className={`${show ? styles.show : ''} ${styles.dropdown}`}>
        <ul>
          {languageList?.map(({ value, id, label }) => (
            <li
              onClick={() => changeLanguage(value)}
              key={id}
              className={i18n.language === value ? styles.activeLanguage : ''}
            >
              {label}
            </li>
          ))}
        </ul>

        <ul>
          {currencyList?.map(({ id, value, label }) => (
            <li
              key={id}
              onClick={() => changeCurrency(value)}
              className={currency === value ? styles.activeCurrency : ''}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
