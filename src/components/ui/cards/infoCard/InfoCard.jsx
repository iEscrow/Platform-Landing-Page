import React from 'react';
import styles from './InfoCard.module.css';
import PropTypes from 'prop-types';

export default function InfoCard({
  icon,
  title,
  text,
  heading = 3,
  lg = false,
}) {
  const Heading = `h${heading}`;

  return (
    <article className={`${styles.infoCard} ${styles[lg ? 'lg' : 'sm']}`}>
      <img src={icon} alt={`${title} icon`} />
      {React.createElement(Heading, null, title)}
      <p>{text}</p>
    </article>
  );
}

InfoCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.number,
  lg: PropTypes.bool,
};
