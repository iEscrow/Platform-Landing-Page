import styles from './CommunitySlider.module.css';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { splitArray } from '../../../lib/utils/splitArray';

export default function CommunitySlider({ list = [] }) {
  const groupedList = splitArray(list, 2);
  const slideRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const autoPlayRef = useRef(null);

  const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!isDragging && !isHovering) {
          handleNext();
        }
      }, AUTO_PLAY_INTERVAL);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isDragging, isHovering]);

  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    if (slideRef.current) {
      slideRef.current.style.transition = 'none';
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging || !slideRef.current) return;

    const currentX = e.pageX || (e.touches && e.touches[0].pageX) || 0;
    const diff = currentX - startX;
    setTranslateX(diff);

    slideRef.current.style.transform = `translateX(${diff}px)`;
  };

  const handleDragEnd = (e) => {
    if (!isDragging || !slideRef.current) return;

    setIsDragging(false);
    const currentX =
      e.pageX || (e.changedTouches && e.changedTouches[0].pageX) || 0;
    const diff = currentX - startX;
    const threshold = slideRef.current.children[0]?.offsetWidth * 0.15 || 50;

    slideRef.current.style.transition = 'transform 0.5s ease-out';

    if (diff > threshold) {
      handlePrevious();
    } else if (diff < -threshold) {
      handleNext();
    } else {
      slideRef.current.style.transform = 'translateX(0)';
    }

    setTranslateX(0);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (isDragging) {
      handleDragEnd();
    }
  };

  const handlePrevious = () => {
    if (!slideRef.current || slideRef.current.children.length === 0) return;

    const lastElement =
      slideRef.current.children[slideRef.current.children.length - 1];
    slideRef.current.insertBefore(lastElement, slideRef.current.firstChild);

    const slideWidth = lastElement.offsetWidth;
    slideRef.current.style.transition = 'none';
    slideRef.current.style.transform = `translateX(-${slideWidth}px)`;

    requestAnimationFrame(() => {
      slideRef.current.style.transition = 'transform 0.5s ease-out';
      slideRef.current.style.transform = 'translateX(0)';
    });

    setActiveSlide((prev) => (prev > 0 ? prev - 1 : groupedList.length - 1));
  };

  const handleNext = () => {
    if (!slideRef.current || slideRef.current.children.length === 0) return;

    const firstElement = slideRef.current.children[0];
    const slideWidth = firstElement.offsetWidth;

    slideRef.current.style.transition = 'transform 0.5s ease-out';
    slideRef.current.style.transform = `translateX(-${slideWidth}px)`;

    const transitionEnd = () => {
      slideRef.current.style.transition = 'none';
      slideRef.current.style.transform = 'translateX(0)';
      slideRef.current.appendChild(firstElement);
      slideRef.current.removeEventListener('transitionend', transitionEnd);
    };

    slideRef.current.addEventListener('transitionend', transitionEnd);

    setActiveSlide((prev) => (prev < groupedList.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className={styles.container}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <ul className={styles.slider} ref={slideRef}>
        {groupedList.map((item, index) => (
          <li
            key={`slider-item-${index}`}
            className={styles.slide}
            style={{ minWidth: '100%' }}
          >
            <ul>
              {item.map((comment, idx) => (
                <li key={`slider-comment-${idx}`}>
                  <p>“{comment.description}”</p>
                  <span>-{comment.name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className={styles.dots}>
        {groupedList.map((_, index) => (
          <span
            key={`slider-dot-${index}`}
            className={`${styles.dot} ${activeSlide === index ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

CommunitySlider.propTypes = {
  list: PropTypes.array,
};
