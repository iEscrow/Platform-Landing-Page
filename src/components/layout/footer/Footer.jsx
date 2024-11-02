import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';
import { FooterAccordion } from '@ui';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <FooterAccordion />
      <p>{t('Footer.copyright', { year: new Date().getFullYear() })}</p>
    </footer>
  );
}
