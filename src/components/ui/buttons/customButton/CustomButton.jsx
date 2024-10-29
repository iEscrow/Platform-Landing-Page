import styles from './CustomButton.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  to: PropTypes.string,
};

export default function CustomButton({ children, variant = 'primary', to }) {
  return (
    <Link className={`${styles.button} ${styles[variant]}`} to={to}>
      {children}
    </Link>
  );
}
