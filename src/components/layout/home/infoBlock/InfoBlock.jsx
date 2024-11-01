import styles from './InfoBlock.module.css';
import { InfoCard } from '@ui';
import testIcon from '@assets/icons/testIcon.png';

/**
 * Home info section
 *
 * Renders a grid of info cards
 *
 * @returns {JSX.Element}
 */
export default function InfoBlock() {
  return (
    <section className={styles.infoBlock}>
      <div className={styles.topBlock}>
        <InfoCard
          icon={testIcon}
          title="Lorem impsum"
          text="Lorem ipsum dolor amet"
        />
        <div className={styles.divider}></div>
        <InfoCard
          icon={testIcon}
          title="Lorem impsum"
          text="Lorem ipsum dolor amet"
        />
        <div className={styles.divider}></div>
        <InfoCard
          icon={testIcon}
          title="Lorem impsum"
          text="Lorem ipsum dolor amet"
        />
      </div>
      <div className={styles.bottomBlock}>
        <InfoCard
          icon={testIcon}
          title="Your security, our priority"
          text="That´s iEscrows slogan. All the development of our platform, had security as it´s main premise, which is the reason we executed two security audits."
          lg
        />
        <InfoCard
          icon={testIcon}
          title="We care about privacy"
          text="At iEscrow, we care about the privacy of our users. We not only understand it´s important, but we also believe it´s your right. That´s why we don´t implement KYC where it´s not mandatory."
          lg
        />
      </div>
    </section>
  );
}
