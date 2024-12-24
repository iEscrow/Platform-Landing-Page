import styles from './Roadmap.module.css';
import { useCountdown, CountdownTimer } from '@features';
import timeLine from '@assets/images/roadmap/line_desktop.png';
import { GradientTitle } from '@components';

export default function Roadmap() {
  const tokenPresaleDate = new Date('2025-01-05T00:00:00Z').getTime();
  const tokenPresaleCountdown = useCountdown(tokenPresaleDate);

  return (
    <section className={styles.roadmap}>
      <h2>
        <GradientTitle>Roadmap</GradientTitle>
      </h2>
      <div className={styles.timeLine}>
        <img src={timeLine} alt="roadmap time line" />
      </div>
      <ul className={styles.list}>
        <li className={styles.exchangeLaunch}>
          <div className={styles.container}>
            <h3>Exchange Launch</h3>
            <p>Cryptocurrency</p>
            <p>iESCROW exchange launch</p>
            <span className={styles.date}>1st September 2025</span>
          </div>
        </li>

        <li className={styles.tokenLaunch}>
          <div className={styles.container}>
            <h3>Token Launch</h3>
            <p>Cryptocurrency</p>
            <p>$ESCROW token launch</p>
            <span className={styles.date}>15th August 2025</span>
          </div>
        </li>

        <li className={styles.tokenPresale}>
          <div className={styles.container}>
            <h3>Token Presale</h3>
            <p>Cryptocurrency</p>
            <p>$ESCROW presale starts</p>
            <span className={styles.date}>1st July 2025</span>
            <CountdownTimer timeLeft={tokenPresaleCountdown} variant="sm" />
          </div>
        </li>
      </ul>
    </section>
  );
}
