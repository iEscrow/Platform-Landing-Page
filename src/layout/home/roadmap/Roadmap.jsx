import styles from './Roadmap.module.css';
import { useCountdown, CountdownTimer } from '@features';

export default function Roadmap() {
  const tokenPresaleDate = new Date('2024-12-05T00:00:00Z').getTime();
  const tokenPresaleCountdown = useCountdown(tokenPresaleDate);

  return (
    <div className={styles.roadmap}>
      <h2>Roadmap</h2>
      <CountdownTimer timeLeft={tokenPresaleCountdown} variant="lg" />
    </div>
  );
}
