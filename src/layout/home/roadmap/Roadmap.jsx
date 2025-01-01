import styles from './Roadmap.module.css';
import { useContext } from 'react';

import GradientTitle from '@components/gradientTitle/GradientTitle';
import CountdownTimer from '@features/countdown/components/CountdownTimer';
import { ThemeContext } from '@context/ThemeContext';
import { useCountdown } from '@features/countdown/hooks/useCountdown';

//assets
import timeLine from '@assets/images/roadmap/line_desktop.svg';
import mobileLine1 from '@assets/images/roadmap/line_1_mobile.svg';
import mobileLine2 from '@assets/images/roadmap/line_2_mobile.svg';

export default function Roadmap() {
  const { theme } = useContext(ThemeContext);
  const tokenPresaleDate = new Date('2025-01-05T00:00:00Z').getTime();
  const tokenPresaleCountdown = useCountdown(tokenPresaleDate);

  return (
    <section className={`${styles.roadmap} ${styles[theme]}`}>
      <div className={styles.titleCont}>
        <h2>
          <GradientTitle>Roadmap</GradientTitle>
        </h2>
      </div>
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
          <img src={mobileLine1} alt="decoration line" />
        </li>

        <li className={styles.tokenLaunch}>
          <div className={styles.container}>
            <h3>Token Launch</h3>
            <p>Cryptocurrency</p>
            <p>$ESCROW token launch</p>
            <span className={styles.date}>15th August 2025</span>
          </div>
          <img src={mobileLine2} alt="decoration line" />
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
