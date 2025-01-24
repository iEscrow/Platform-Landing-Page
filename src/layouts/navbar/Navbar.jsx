import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useScrolled from '@hooks/useScrolled';
import logo from '@assets/images/logo_dark.svg';
import AuthLinks from '@components/authLinks/AuthLinks';
import Hamburger from '@components/buttons/hamburger/Hamburger';
import LanguageCurrencySelector from '@components/locale/languageCurrencySelector/LanguageCurrencySelector';
import NavbarThemeToggle from '@components/theme/navbarThemeToggle/NavbarThemeToggle';

/**
 * Main navbar responsive component
 * @returns {JSX.Element}
 */
export default function Navbar() {
  const { t } = useTranslation();
  const scrolled = useScrolled();
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
        <Link to="/">
          <img className={styles.logo} src={logo} alt="iEscrow logo" />
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
            >
              {t('Navbar.roadmap')}
            </NavLink>
          </li>
          <li className={styles.navLink}>
            <NavLink onClick={handleClose} to="/marketplace">
              {t('Navbar.marketplace')}
            </NavLink>
          </li>

          {/* Authentication Links */}
          <AuthLinks isAuthenticated={isAuthenticated} onClose={handleClose} />

          <li>
            <LanguageCurrencySelector closeNavbar={handleClose} />
          </li>
          <li>
            <Link onClick={handleClose} className={styles.button} to="#">
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
