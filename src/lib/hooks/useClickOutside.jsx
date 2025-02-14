import { useEffect, useRef } from 'react';

/**
 * Custom hook to detect clicks outside of a specified element and trigger a callback.
 * Also triggers the callback when the mouse leaves the element, with a small delay.
 *
 * @param {React.RefObject} ref - The ref of the element.
 * @param {Function} callback - The function to be called when an outside click or mouse leave is detected.
 * @param {Array<string>} [eventTypes=['mousedown', 'touchstart']] - Optional array of event types to listen for.
 * @param {number} [delay=200] - Delay in milliseconds before triggering the callback on mouse leave.
 */
export default function useClickOutside(
  ref,
  callback,
  eventTypes = ['mousedown', 'touchstart'],
  delay = 200
) {
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        callback();
      }, delay);
    };

    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    eventTypes.forEach((eventType) => {
      document.addEventListener(eventType, handleClickOutside);
    });

    if (ref.current) {
      ref.current.addEventListener('mouseleave', handleMouseLeave);
      ref.current.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      eventTypes.forEach((eventType) => {
        document.removeEventListener(eventType, handleClickOutside);
      });

      if (ref.current) {
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
        ref.current.removeEventListener('mouseenter', handleMouseEnter);
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [ref, callback, eventTypes, delay]);
}
