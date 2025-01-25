import styles from './InfoBlock.module.css';
import InfoCard from '@components/cards/infoCard/InfoCard';
import securityIcon from '@assets/icons/security_icon.png';
import missionIcon from '@assets/icons/mission_icon.png';
import reputationIcon from '@assets/icons/reputation_icon.png';
import adaptabilityIcon from '@assets/icons/adaptability_icon.png';
import privacyIcon from '@assets/icons/privacy_icon.png';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { motion } from 'framer-motion';
import { scaleVariant } from '@animations/scaleVariants';

/**
 * Home info section
 *
 * Renders a grid of info cards
 *
 * @returns {JSX.Element}
 */
export default function InfoBlock() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`${styles.infoBlock} ${styles[theme]}`}>
      <div className={styles.wrapper}>
        {/* Top block */}
        <div className={styles.topBlock}>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <InfoCard
              icon={securityIcon}
              title={t('Home.InfoBlock.Security.title')}
              text={t('Home.InfoBlock.Security.description')}
            />
          </motion.div>
          <div className={styles.divider}></div>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <InfoCard
              icon={missionIcon}
              title={t('Home.InfoBlock.Mission.title')}
              text={t('Home.InfoBlock.Mission.description')}
            />
          </motion.div>
          <div className={styles.divider}></div>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <InfoCard
              icon={reputationIcon}
              title={t('Home.InfoBlock.Reputation.title')}
              title2={t('Home.InfoBlock.Reputation.title2')}
              text={t('Home.InfoBlock.Reputation.description')}
            />
          </motion.div>
        </div>

        {/* Bottom block */}
        <div className={styles.bottomBlock}>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <InfoCard
              icon={adaptabilityIcon}
              title={t('Home.InfoBlock.Adaptability.title')}
              text={t('Home.InfoBlock.Adaptability.description')}
              lg
            />
          </motion.div>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <InfoCard
              icon={privacyIcon}
              title={t('Home.InfoBlock.Privacy.title')}
              text={t('Home.InfoBlock.Privacy.description')}
              lg
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
