import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { useTranslation } from 'react-i18next';
import logo from '@assets/images/logo_dark.svg';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="iEscrow logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeNav : '')}
              to="/"
            >
              {t('Navbar.roadmap')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/marketplace">{t('Navbar.marketplace')}</NavLink>
          </li>
          <li>
            <NavLink to="/signin">{t('Navbar.login')}</NavLink>
          </li>
          <li>
            <NavLink to="/signup">{t('Navbar.register')}</NavLink>
          </li>
          <li>
            <Link className={styles.button} to="#">
              Create Escrow
            </Link>
          </li>
          <li>
            <button onClick={toggleTheme}>
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </li>
          <li>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Spanish</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
