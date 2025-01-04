import LanguageIcon from '../../icons/language/LanguageIcon';
import styles from './LanguageChange.module.css';
import { useTranslation } from 'react-i18next';
import { languageList } from '@data/languages';
import { useContext, useRef, useState } from 'react';
import useClickOutside from '@hooks/useClickOutside';
import { ThemeContext } from '@context/ThemeContext';
/**
 * Reusable button for language switching
 * @returns {JSX.Element}
 */
export default function LanguageChange() {
  const { i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const languageDropdownRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useClickOutside(languageDropdownRef, () => setShow(false));

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShow(false);
  };

  const findLanguage = () => {
    return languageList?.find((lang) => lang.value === i18n.language);
  };
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={styles.languageChange} ref={languageDropdownRef}>
      <button onClick={handleShow}>
        <LanguageIcon variant={theme === 'dark' ? 'cian' : 'blue'} />
        <span>{findLanguage()?.label}</span>
      </button>

      <ul className={`${show ? styles.show : ''} ${styles.dropdown}`}>
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
    </div>
  );
}
