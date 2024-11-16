import styles from './CommunitySlider.module.css';
import PropTypes from 'prop-types';
import quoteDark from '@assets/icons/quote_dark.png';
import { useEffect, useState, useRef } from 'react';

/**
 * Reusable carousel for the Our Community section.
 * @param {list}
 * @returns {JSX.Element}
 */
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

  // Mouse and touch event handlers
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    setIsDragging(true);
  };
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleMove = (clientX) => {
    const diffX = clientX - startX.current;
    if (diffX > 50) {
      goToPrevious();
      setIsDragging(false);
    } else if (diffX < -50) {
      goToNext();
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleChange((active + 1) % list.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [active, list.length]);

  return (
    <div
      className={styles.container}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      {/* Slider */}
      <div className={styles.slider}>
        {/* Cards */}
        {list.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.item} 
              ${active === index ? styles.active : ''} 
              ${previous === index ? styles.previous : ''}
              ${index === active + 1 || (active === list.length - 1 && index === 0) ? styles.next : ''}
              `}
          >
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
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      {/* Dots */}
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
