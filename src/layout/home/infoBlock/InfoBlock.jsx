import styles from './InfoBlock.module.css';
import { InfoCard } from '@components';
import securityIcon from '@assets/icons/security_icon.png';
import missionIcon from '@assets/icons/mission_icon.png';
import reputationIcon from '@assets/icons/reputation_icon.png';
import adaptabilityIcon from '@assets/icons/adaptability_icon.png';
import privacyIcon from '@assets/icons/privacy_icon.png';
import { useTranslation } from 'react-i18next';

/**
 * Home info section
 *
 * Renders a grid of info cards
 *
 * @returns {JSX.Element}
 */
export default function InfoBlock() {
  const { t } = useTranslation();

  return (
    <div className={styles.infoBlock}>
      <div className={styles.wrapper}>
        {/* Top block */}
        <div className={styles.topBlock}>
          <InfoCard
            icon={securityIcon}
            title={t('Home.InfoBlock.securityTitle')}
            text={t('Home.InfoBlock.securityDescription')}
          />
          <div className={styles.divider}></div>
          <InfoCard
            icon={missionIcon}
            title={t('Home.InfoBlock.missionTitle')}
            text={t('Home.InfoBlock.missionDescription')}
          />
          <div className={styles.divider}></div>
          <InfoCard
            icon={reputationIcon}
            title={t('Home.InfoBlock.reputationTitle')}
            text={t('Home.InfoBlock.reputationDescription')}
          />
        </div>

        {/* Bottom block */}
        <div className={styles.bottomBlock}>
          <InfoCard
            icon={adaptabilityIcon}
            title={t('Home.InfoBlock.adaptabilityTitle')}
            text={t('Home.InfoBlock.adaptabilityDescription')}
            lg
          />
          <InfoCard
            icon={privacyIcon}
            title={t('Home.InfoBlock.privacyTitle')}
            text={t('Home.InfoBlock.privacyDescription')}
            lg
          />
        </div>
      </div>
    </div>
  );
}
