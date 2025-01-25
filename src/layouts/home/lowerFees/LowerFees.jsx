import PropTypes from 'prop-types';
import styles from './LowerFees.module.css';
import CountdownTimer from '@features/countdown/components/CountdownTimer';
import { useCountdown } from '@features/countdown/hooks/useCountdown';

// assets
import halfArrow from '@assets/icons/halfArrowIcon.png';
import lowerFeesVideo from '@assets/videos/lower_fees_bg.mp4';
import escrowCoin from '@assets/images/lowerfees/escrow_coin.png';

LowerFees.propTypes = {
  t: PropTypes.func.isRequired,
};

export default function LowerFees({ t }) {
  const tokenPresaleDate = new Date('2025-07-01T00:00:00Z').getTime();
  const tokenPresaleCountdown = useCountdown(tokenPresaleDate);

  return (
    <section className={styles.lowerFees}>
      <span className={styles.comingSoon}>
        {t('Home.LowerFees.comingSoon')}
      </span>
      <video autoPlay loop muted className={styles.video}>
        <source src={lowerFeesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>
            <span>{t('Home.LowerFees.titleSpan')}</span>
            {t('Home.LowerFees.title')}
          </h2>
          <div className={styles.coin}>
            <img src={escrowCoin} alt="escrow coin" />
            <span>{t('Home.LowerFees.coin')}</span>
          </div>
        </div>

        <div className={styles.counterdown}>
          <p>{t('Home.LowerFees.presale')}</p>
          {tokenPresaleCountdown !== null ? (
            <CountdownTimer
              timeLeft={tokenPresaleCountdown}
              variant="lg"
              color="white"
            />
          ) : (
            <p>Lounched</p>
          )}
          <div className={styles.buttons}>
            <a href="" target="blank">
              <img src={halfArrow} alt="half arrow icon" />
              {t('Home.LowerFees.website')}
            </a>
            <a href="" target="blank">
              <img src={halfArrow} alt="half arrow icon" />
              {t('Home.LowerFees.whitepaper')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
