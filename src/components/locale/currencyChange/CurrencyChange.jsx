import { useRef, useState } from 'react';
import { useCurrency } from '../../../context/CurrencyContext';
import styles from './CurrencyChange.module.css';
import CurrencyIcon from '@components/icons/currency/CurrencyIcon';
import { currencyList } from '@data/currency';
import useClickOutside from '@hooks/useClickOutside';

export default function CurrencyChange() {
  const { currency, setCurrency } = useCurrency();
  const [show, setShow] = useState(false);
  const currencyDropdownRef = useRef(null);

  useClickOutside(currencyDropdownRef, () => setShow(false));

  const handleChange = (value) => {
    setCurrency(value);
    setShow(false);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={styles.currencyChange} ref={currencyDropdownRef}>
      <button onClick={handleShow}>
        <CurrencyIcon />
        <span>{currency}</span>
      </button>
      <ul className={`${show ? styles.show : ''} ${styles.dropdown}`}>
        {currencyList?.map(({ value, id, label }) => (
          <li
            onClick={() => handleChange(value)}
            key={id}
            className={currency === value ? styles.active : ''}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
