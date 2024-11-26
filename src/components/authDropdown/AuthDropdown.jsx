import styles from './AuthDropdown.module.css';
import authIconDark from '../../assets/icons/auth_icon_dark.png';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import useClickOutside from '@hooks/useClickOutside';

export default function AuthDropdown() {
  const [active, setActive] = useState(false);
  const authDropdownRef = useRef(null);
  useClickOutside(authDropdownRef, () => setActive(false));

  return (
    <div
      ref={authDropdownRef}
      onClick={() => setActive(!active)}
      className={`${styles.authButton} ${active ? styles.show : ''}`}
    >
      <img src={authIconDark} alt="auth icon" />
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>Logout</li>
      </ul>
    </div>
  );
}
