import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <header>
      <nav>
        <Link to="/">Logo</Link>
        <ul>
          <li>
            <NavLink to="/">{t('Navbar.roadmap')}</NavLink>
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
            <button onClick={toggleTheme}>
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
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
