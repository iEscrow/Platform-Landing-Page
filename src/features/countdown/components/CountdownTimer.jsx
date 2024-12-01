import styles from './CountdownTimer.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function CountdownTimer({
  timeLeft,
  variant = 'sm',
  color = 'white',
}) {
  if (!timeLeft) {
    return <span>ha comenzado 🚀</span>;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className={`${styles.countdown} ${styles[variant]} ${styles[color]}`}>
      <div className={styles.timerContainer}>
        <span>{days}</span>
        <p>days</p>
      </div>
      <div className={styles.timerContainer}>
        <span>{hours}</span>
        <p>hours</p>
      </div>
      <div className={styles.timerContainer}>
        <span>{minutes}</span>
        <p>min</p>
      </div>
      <div className={styles.timerContainer}>
        <span>{seconds}</span>
        <p>sec</p>
      </div>
    </div>
  );
}

CountdownTimer.propTypes = {
  timeLeft: PropTypes.shape({
    days: PropTypes.string,
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
  }).isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
};
