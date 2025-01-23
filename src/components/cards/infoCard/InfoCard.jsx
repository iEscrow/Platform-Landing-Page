import React from 'react';
import styles from './InfoCard.module.css';
import PropTypes from 'prop-types';
import GradientTitle from '@components/gradientTitle/GradientTitle';

/**
 * Reusable card for displaying info icon, title and text
 * @param {{icon: string, title: string, text: string, lg: boolean}}
 * @returns {JSX.Element}
 */
export default function InfoCard({ icon, title, title2, text, lg = false }) {
  return (
    <div className={`${styles.infoCard} ${styles[lg ? 'lg' : 'sm']}`}>
      <img src={icon} alt={`${title} icon`} />
      <div className={styles.titleCont}>
        <GradientTitle>{title}</GradientTitle>
        {title2 && <GradientTitle>{title2}</GradientTitle>}
      </div>
      <p>{text}</p>
    </div>
  );
}

InfoCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  title2: PropTypes.string || undefined,
  text: PropTypes.string,
  lg: PropTypes.bool,
};
