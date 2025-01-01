import styles from './LanguageCurrencySelector.module.css';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { currencyList } from '@data/currency';
import { languageList } from '@data/languages';
import { useTranslation } from 'react-i18next';
import useClickOutside from '@hooks/useClickOutside';
import LanguageIcon from '../../icons/language/LanguageIcon';

export default function LanguageCurrencySelector() {
  const [show, setShow] = useState(false);
  const languageDropdownRef = useRef(null);
  const { i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);

  useClickOutside(languageDropdownRef, () => setShow(false));

  const handleShow = () => {
    setShow(!show);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
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
              className={i18n.language === value ? styles.active : ''}
            >
              {label}
            </li>
          ))}
        </ul>

        <ul>
          {currencyList?.map((currency) => (
            <li key={currency.id}>{currency.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
