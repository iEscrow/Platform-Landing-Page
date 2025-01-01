import styles from './CommunitySlider.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { splitArray } from '../../../utils/splitArray';

/**
 * Reusable carousel for the Our Community section.
 * @param {list}
 * @returns {JSX.Element}
 */
export default function CommunitySlider({ list = [] }) {
  const groupedList = splitArray(list, 2);
  const slideRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX || e.touches[0].pageX;
    const translate = currentX - startX;
    if (translate > 100) {
      setIsDragging(false);
      handlePrevious();
    } else if (translate < -100) {
      setIsDragging(false);
      handleNext();
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handlePrevious = () => {
    if (slideRef.current.children.length > 0) {
      const lastElement =
        slideRef.current.children[slideRef.current.children.length - 1];

      slideRef.current.insertBefore(lastElement, slideRef.current.firstChild);

      slideRef.current.style.transition = 'none';
      slideRef.current.style.transform = `translateX(-${lastElement.offsetWidth}px)`;

      requestAnimationFrame(() => {
        slideRef.current.style.transition = `0.5s ease-out all`;
        slideRef.current.style.transform = `translateX(0)`;
      });
    }
  };

  const handleNext = () => {
    if (slideRef.current.children.length > 0) {
      const firstElement = slideRef.current.children[0];
      const slideWidth = firstElement.offsetWidth;

      slideRef.current.style.transition = `0.45s ease-out all`;
      slideRef.current.style.transform = `translateX(-${slideWidth}px)`;

      const transition = () => {
        slideRef.current.style.transition = `none`;
        slideRef.current.style.transform = `translateX(0)`;

        slideRef.current.appendChild(firstElement);

        slideRef.current.removeEventListener('transitionend', transition);
      };

      slideRef.current.addEventListener('transitionend', transition);
    }
  };

  return (
    <div
      className={styles.container}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* slider */}
      <ul className={styles.slider} ref={slideRef}>
        {groupedList?.map((item, index) => (
          <li key={`slider-item-${index}`} className={styles.slide}>
            <ul>
              {item?.map((item, index) => (
                <li key={`slider-comment-${index}`}>
                  <p>“{item.description}”</p>
                  <span>-{item.name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* dots */}
      <div className={styles.dots}>
        {groupedList?.map((item, index) => (
          <span key={`slider-dot-${index}`} className={styles.dot}></span>
        ))}
      </div>
    </div>
  );
}

CommunitySlider.propTypes = {
  list: PropTypes.array,
};
