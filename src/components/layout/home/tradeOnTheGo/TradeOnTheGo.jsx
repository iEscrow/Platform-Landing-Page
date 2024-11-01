import styles from './TradeOnTheGo.module.css';
import phone from '@assets/images/trade_on_the_go_desktop_dark.png';
import qr from '@assets/images/qr.png';
import { Trans } from 'react-i18next';

/**
 * Home Trade on the go component, that contains the title, qr code and a phone image
 *
 * @returns {JSX.Element}
 */
export default function TradeOnTheGo() {
  return (
    <section className={styles.tradeOnTheGo}>
      <img src={phone} alt="phone" />
      <div className={styles.textContainer}>
        <h2>
          <Trans i18nKey="Home.TradeOnTheGo.title">
            <span></span>
          </Trans>
        </h2>
        <div className={styles.qrContainer}>
          <img src={qr} alt="qr code phone" />
          <p>
            <Trans i18nKey="Home.TradeOnTheGo.description">
              <span></span>
            </Trans>
          </p>
        </div>
      </div>
    </section>
  );
}
