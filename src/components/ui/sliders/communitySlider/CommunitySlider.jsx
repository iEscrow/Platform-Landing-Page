import styles from './CommunitySlider.module.css';
import PropTypes from 'prop-types';
import quoteDark from '@assets/icons/quote_dark.png';
import { useEffect, useState, useRef } from 'react';

export default function CommunitySlider({ list = [] }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState(list.length - 1);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  // Slider movement
  const handleChange = (id) => {
    setPrevious(active);
    setActive(id);
  };
  const goToNext = () => {
    handleChange((active + 1) % list.length);
  };
  const goToPrevious = () => {
    handleChange((active - 1 + list.length) % list.length);
  };
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    setIsDragging(true);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - startX.current;

    if (diffX > 50) {
      goToPrevious();
      setIsDragging(false);
    } else if (diffX < -50) {
      goToNext();
      setIsDragging(false);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleChange((active + 1) % list.length); // Cambia a la siguiente imagen
    }, 8000);
    return () => clearInterval(interval);
  }, [active, list.length]);

  return (
    <div
      className={styles.container}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.slider}>
        {list.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.item} 
              ${active === index ? styles.active : ''} 
              ${previous === index ? styles.previous : ''}
              ${index === active + 1 || (active === list.length - 1 && index === 0) ? styles.next : ''}
              `}
          >
            <span>{item.name}</span>
            <p className={styles.description}>
              <img
                className={styles.quoteLeft}
                src={quoteDark}
                alt="quote icon"
              />
              {item.description}
              <img
                className={styles.quoteRight}
                src={quoteDark}
                alt="quote icon"
              />
            </p>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {list.map((item, index) => (
          <button
            onClick={() => handleChange(index)}
            key={item.id}
            className={`${styles.dot} ${active === index ? styles.active : ''}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

CommunitySlider.propTypes = {
  list: PropTypes.array,
};
