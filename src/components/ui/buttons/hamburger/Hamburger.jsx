import styles from './Hamburger.module.css';
import PropTypes from 'prop-types';

export default function Hamburger({ toggle, handleToggle }) {
  return (
    <button
      onClick={handleToggle}
      className={`${styles.hamburger} ${toggle ? styles.active : ''}`}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </button>
  );
}

Hamburger.propTypes = {
  toggle: PropTypes.bool,
  handleToggle: PropTypes.func,
};
