import styles from './StoreButton.module.css';
import PropTypes from 'prop-types';

export default function StoreButton({
  icon,
  platform,
  link,
  text,
  blank = true,
}) {
  return (
    <a
      href={link}
      target={blank ? '_blank' : '_self'}
      rel="noreferrer"
      className={styles.button}
    >
      <img src={icon} alt={platform} />
      <div>
        <p>{text}</p>
        <span>{platform}</span>
      </div>
    </a>
  );
}

StoreButton.propTypes = {
  icon: PropTypes.string,
  platform: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
  blank: PropTypes.bool,
};
