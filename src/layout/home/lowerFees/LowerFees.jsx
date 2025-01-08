import styles from './LowerFees.module.css';
import CountdownTimer from '@features/countdown/components/CountdownTimer';
import { useCountdown } from '@features/countdown/hooks/useCountdown';
import CustomButton from '@components/buttons/customButton/CustomButton';

// assets
import halfArrow from '@assets/icons/halfArrowIcon.png';
import lowerFeesVideo from '@assets/videos/lowerfees.mp4';
import escrowCoin from '@assets/images/lowerfees/escrow_coin.png';

export default function LowerFees() {
  const tokenPresaleDate = new Date('2025-01-10T00:00:00Z').getTime();
  const tokenPresaleCountdown = useCountdown(tokenPresaleDate);

  return (
    <section className={styles.lowerFees}>
      <span className={styles.comingSoon}>Coming soon!</span>
      <video autoPlay loop muted className={styles.video}>
        <source src={lowerFeesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>
            <span>25% Lower Fees</span>
            with our cryptocurrency
          </h2>
          <div className={styles.coin}>
            <img src={escrowCoin} alt="escrow coin" />
            <span>Escrow</span>
          </div>
        </div>

        <div className={styles.counterdown}>
          <p>presale starts in:</p>
          {tokenPresaleCountdown !== null ? (
            <CountdownTimer timeLeft={tokenPresaleCountdown} variant="lg" />
          ) : (
            <p>Lanzado</p>
          )}
          <div className={styles.buttons}>
            <a href="" target="blank">
              <img src={halfArrow} alt="half arrow icon" />
              website
            </a>
            <a href="" target="blank">
              <img src={halfArrow} alt="half arrow icon" />
              whitepaper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
