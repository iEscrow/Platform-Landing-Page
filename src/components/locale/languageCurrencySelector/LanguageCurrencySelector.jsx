import styles from './LanguageCurrencySelector.module.css';
import worldIcon from '../../../assets/icons/world_dark.svg';
import { useRef, useState } from 'react';
import { currencyList } from '@data/currency';
import { languageList } from '@data/languages';
import { useTranslation } from 'react-i18next';
import useClickOutside from '@hooks/useClickOutside';

export default function LanguageCurrencySelector() {
  const [show, setShow] = useState(false);
  const languageDropdownRef = useRef(null);
  const { i18n } = useTranslation();

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
        <img src={worldIcon} alt="world icon" />
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
