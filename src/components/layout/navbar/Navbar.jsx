import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useScrolled from '@hooks/useScrolled';
import logo from '@assets/images/logo_dark.svg';
import { Hamburger, LanguageChange, ThemeChange } from '@ui';

export default function Navbar() {
  const { t } = useTranslation();
  const scrolled = useScrolled();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const handleClose = () => {
    setToggle(false);
  };
  console.log(toggle);

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
          <li>
            <NavLink
              onClick={handleClose}
              className={({ isActive }) => (isActive ? styles.activeNav : '')}
              to="/"
            >
              {t('Navbar.roadmap')}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClose} to="/marketplace">
              {t('Navbar.marketplace')}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClose} to="/signup">
              {t('Navbar.register')}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClose} to="/signin">
              {t('Navbar.login')}
            </NavLink>
          </li>
          <li>
            <Link onClick={handleClose} className={styles.button} to="#">
              Create Escrow
            </Link>
          </li>
          <li className={styles.settings}>
            <ThemeChange />
            <LanguageChange />
          </li>
        </ul>
      </nav>
    </header>
  );
}
