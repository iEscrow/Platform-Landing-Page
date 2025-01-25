import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useScrolled from '@hooks/useScrolled';
import logoDark from '@assets/images/logo_dark.svg';
import logoLight from '@assets/images/logo_light.svg';
import AuthLinks from '@components/authLinks/AuthLinks';
import Hamburger from '@components/buttons/hamburger/Hamburger';
import LanguageCurrencySelector from '@components/locale/languageCurrencySelector/LanguageCurrencySelector';
import NavbarThemeToggle from '@components/theme/navbarThemeToggle/NavbarThemeToggle';
import { ThemeContext } from '@context/ThemeContext';

/**
 * Main navbar responsive component
 * @returns {JSX.Element}
 */
export default function Navbar() {
  const { t } = useTranslation();
  const scrolled = useScrolled();
  const { theme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  // TODO => Add authentication and remove the isAuthenticated variable
  const isAuthenticated = true;

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const handleClose = () => {
    setToggle(false);
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
        toggle ? styles.activeNav : ''
      }`}
    >
      <nav>
        <Link to="/" aria-label="go to roadmap">
          <img
            className={styles.logo}
            src={theme === 'dark' ? logoDark : logoLight}
            alt="iEscrow logo"
          />
        </Link>
        {/* Hamburger menu */}
        <Hamburger handleToggle={handleToggle} toggle={toggle} />
        {/* Menu */}
        <ul className={styles.menu}>
          <li className={styles.navLink}>
            <NavLink
              onClick={handleClose}
              className={({ isActive }) => (isActive ? styles.activeNav : '')}
              to="/"
              aria-label="go to roadmap"
            >
              {t('Navbar.roadmap')}
            </NavLink>
          </li>
          <li className={styles.navLink}>
            <NavLink
              onClick={handleClose}
              to="/marketplace"
              aria-label="go to marketplace"
            >
              {t('Navbar.marketplace')}
            </NavLink>
          </li>

          {/* Authentication Links */}
          <AuthLinks isAuthenticated={isAuthenticated} onClose={handleClose} />

          <li>
            <LanguageCurrencySelector closeNavbar={handleClose} />
          </li>
          <li>
            <Link
              onClick={handleClose}
              className={styles.button}
              to="#"
              aria-label="go to create escrow"
            >
              {t('Navbar.createEscrow')}
            </Link>
          </li>
          <li className={styles.settings}>
            <NavbarThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
