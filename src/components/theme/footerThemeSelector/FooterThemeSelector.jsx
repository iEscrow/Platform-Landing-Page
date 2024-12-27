import styles from './FooterThemeSelector.module.css';
import { useContext } from 'react';
import ThemeIcon from '../icon/ThemeIcon';
import { ThemeContext } from '@context/ThemeContext';

export default function FooterThemeSelector() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.footerThemeSelector} ${styles[theme]}`}
      onClick={toggleTheme}
    >
      <div className={styles.themeIcon}>
        <ThemeIcon theme={theme} />
      </div>
    </div>
  );
}
