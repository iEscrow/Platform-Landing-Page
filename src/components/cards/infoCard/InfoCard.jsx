import React from 'react';
import styles from './InfoCard.module.css';
import PropTypes from 'prop-types';
import { GradientTitle } from '@components';

/**
 * Reusable card for displaying info icon, title and text
 * @param {{icon: string, title: string, text: string, lg: boolean}}
 * @returns {JSX.Element}
 */
export default function InfoCard({ icon, title, text, lg = false }) {
  return (
    <div className={`${styles.infoCard} ${styles[lg ? 'lg' : 'sm']}`}>
      <img src={icon} alt={`${title} icon`} />
      <GradientTitle>{title}</GradientTitle>
      <p>{text}</p>
    </div>
  );
}

InfoCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  lg: PropTypes.bool,
};
