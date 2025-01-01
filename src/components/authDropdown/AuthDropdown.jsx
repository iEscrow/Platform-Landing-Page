import styles from './AuthDropdown.module.css';
import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import useClickOutside from '@hooks/useClickOutside';
import AuthIcon from '@components/icons/authIcon/AuthIcon';

export default function AuthDropdown() {
  const [active, setActive] = useState(false);
  const authDropdownRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useClickOutside(authDropdownRef, () => setActive(false));

  return (
    <div
      ref={authDropdownRef}
      onClick={() => setActive(!active)}
      className={`${styles.authButton} ${active ? styles.show : ''}`}
    >
      <AuthIcon size="32" variant={theme === 'dark' ? 'gray' : 'black'} />
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>Logout</li>
      </ul>
    </div>
  );
}
