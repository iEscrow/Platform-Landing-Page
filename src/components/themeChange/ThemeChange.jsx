import styles from './ThemeChange.module.css';
import { ThemeContext } from '@context/ThemeContext';
import { useContext } from 'react';
import darkModeIcon from '@assets/icons/dark_mode.png';
import lightModeIcon from '@assets/icons/light_mode.png';

/**
 * Reusable button for theme switching
 * @returns {JSX.Element}
 */
export default function ThemeChange() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.themeChange} onClick={toggleTheme}>
      <img
        src={theme === 'light' ? darkModeIcon : lightModeIcon}
        alt={`${theme} mode icon`}
      />
    </button>
  );
}
