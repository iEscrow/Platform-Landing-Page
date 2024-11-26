import styles from './LanguageChange.module.css';
import { useTranslation } from 'react-i18next';

/**
 * Reusable button for language switching
 * @returns {JSX.Element}
 */
export default function LanguageChange() {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className={styles.languageChange}>
      <button
        className={i18n.language === 'en' ? styles.active : ''}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <span>-</span>
      <button
        className={i18n.language === 'es' ? styles.active : ''}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
    </div>
  );
}
