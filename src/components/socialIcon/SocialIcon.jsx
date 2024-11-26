import styles from './SocialIcon.module.css';
import PropTypes from 'prop-types';

export default function SocialIcon({ icon, alt, link, blank = true }) {
  return (
    <a
      className={styles.icon}
      href={link}
      target={blank ? '_blank' : '_self'}
      rel="noreferrer"
    >
      <img src={icon} alt={alt} />
    </a>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  blank: PropTypes.bool,
};
