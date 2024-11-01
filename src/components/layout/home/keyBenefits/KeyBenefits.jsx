import styles from './KeyBenefits.module.css';
import phone from '@assets/images/keybenefits_desktop.png';

/**
 * Key benefits section that contains the title and the card}
 *
 * @returns {JSX.Element}
 */
export default function KeyBenefits() {
  return (
    <section className={styles.keyBenefits}>
      <h2>We have a hybrid CEX/DEX approach</h2>
      <div className={styles.benefitsCard}>
        <img src={phone} alt="phone" />
        <div>
          <div>
            <h3>The first hybrid CEX/DEX</h3>
            <ul>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
