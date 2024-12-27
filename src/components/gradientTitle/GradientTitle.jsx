import styles from './GradientTitle.module.css';
import PropsType from 'prop-types';

export default function GradientTitle({ children }) {
  return <span className={styles.gradientTitle}>{children}</span>;
}

GradientTitle.propTypes = {
  children: PropsType.node,
};
