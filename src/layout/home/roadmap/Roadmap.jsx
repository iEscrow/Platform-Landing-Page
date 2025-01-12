import styles from './Roadmap.module.css';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import GradientTitle from '@components/gradientTitle/GradientTitle';
import CountdownTimer from '@features/countdown/components/CountdownTimer';
import { ThemeContext } from '@context/ThemeContext';
import { useCountdown } from '@features/countdown/hooks/useCountdown';

//assets
import timeLine from '@assets/images/roadmap/line_desktop.svg';
import mobileLine1 from '@assets/images/roadmap/line_1_mobile.svg';
import mobileLine2 from '@assets/images/roadmap/line_2_mobile.svg';

export default function Roadmap() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const tokenPresaleDate = new Date('2025-07-01T00:00:00Z').getTime();
  const tokenPresaleCountdown = useCountdown(tokenPresaleDate);
  const tokenLaunchDate = new Date('2025-08-15T00:00:00Z').getTime();
  const tokenLaunchCountdown = useCountdown(tokenLaunchDate);
  const exchangeLaunchDate = new Date('2025-09-01T00:00:00Z').getTime();
  const exchangeLaunchCountdown = useCountdown(exchangeLaunchDate);

  const roadmapEvents = [
    {
      id: 'exchangeLaunch',
      title: t('Home.Roadmap.exchangeLaunch.title'),
      currency: t('Home.Roadmap.exchangeLaunch.currency'),
      description: t('Home.Roadmap.exchangeLaunch.description'),
      date: t('Home.Roadmap.exchangeLaunch.date'),
      countdown: exchangeLaunchCountdown,
      isCountdownVisible:
        tokenLaunchCountdown === null && tokenPresaleCountdown === null,
    },
    {
      id: 'tokenLaunch',
      title: t('Home.Roadmap.tokenLaunch.title'),
      currency: t('Home.Roadmap.tokenLaunch.currency'),
      description: t('Home.Roadmap.tokenLaunch.description'),
      date: t('Home.Roadmap.tokenLaunch.date'),
      countdown: tokenLaunchCountdown,
      isCountdownVisible: tokenPresaleCountdown === null,
    },
    {
      id: 'tokenPresale',
      title: t('Home.Roadmap.tokenPresale.title'),
      currency: t('Home.Roadmap.tokenPresale.currency'),
      description: t('Home.Roadmap.tokenPresale.description'),
      date: t('Home.Roadmap.tokenPresale.date'),
      countdown: tokenPresaleCountdown,
      isCountdownVisible: tokenPresaleCountdown !== null,
    },
  ];

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
        {roadmapEvents.map(
          ({
            id,
            title,
            currency,
            description,
            date,
            countdown,
            isCountdownVisible,
          }) => (
            <li key={id} className={styles[id]}>
              <div className={styles.container}>
                <h3>{title}</h3>
                <p>{currency}</p>
                <p>{description}</p>
                <span className={styles.date}>{date}</span>
                {isCountdownVisible && (
                  <CountdownTimer timeLeft={countdown} variant="sm" />
                )}
              </div>
              {id !== 'tokenPresale' && (
                <img
                  src={id === 'exchangeLaunch' ? mobileLine1 : mobileLine2}
                  alt="decoration line"
                />
              )}
            </li>
          )
        )}
      </ul>
    </section>
  );
}
