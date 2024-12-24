import { useCurrency } from '../../../context/CurrencyContext';
import styles from './CurrencySelector.module.css';

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className={styles.currencySelector}>
      <label htmlFor="currency">Selecciona tu divisa: </label>
      <select id="currency" value={currency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="ARS">ARS</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  );
}
