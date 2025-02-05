import { useEffect } from 'react';

/**
 * Custom hook to detect clicks outside of a specified element and trigger a callback.
 *
 * @param {React.RefObject} ref - A React ref pointing to the element you want to detect outside clicks for.
 * @param {Function} callback - The function to be called when an outside click is detected.
 * @param {Array<string>} [eventTypes=['mousedown', 'touchstart']] - Optional array of event types to listen for.
 *
 * @example
 * const ref = useRef(null);
 * useClickOutside(ref, () => setIsOpen(false));
 *
 * return (
 *   <div ref={ref}>
 *     Dropdown Content
 *   </div>
 * );
 */
export default function useClickOutside(
  ref,
  callback,
  eventTypes = ['mousedown', 'touchstart']
) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    eventTypes.forEach((eventType) => {
      document.addEventListener(eventType, handleClickOutside);
    });

    return () => {
      eventTypes.forEach((eventType) => {
        document.removeEventListener(eventType, handleClickOutside);
      });
    };
  }, [ref, callback, eventTypes]);
}
