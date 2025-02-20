import PropTypes from 'prop-types';
import styles from './HomeBanner.module.css';
import { motion } from 'framer-motion';
import { Trans } from 'react-i18next';
import logoDark from '@assets/images/logo_dark.png';
import logoLight from '@assets/images/logo_light.png';
import halfArrowIcon from '@assets/icons/halfArrowIcon.png';
import CustomButton from '@components/buttons/customButton/CustomButton';
import GradientTitle from '@components/gradientTitle/GradientTitle';
import VideoIcon from '@components/icons/videoIcon/VideoIcon';
import { fadeInBottomToTop } from '@animations/fadeInVariants';
import { slideVariants } from '@animations/slideVariants';

HomeBanner.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

/**
 * Home main banner component
 *
 * @returns {JSX.Element}
 */
export default function HomeBanner({ t, theme }) {
  return (
    <section className={`${styles.homeBanner} ${styles[theme]}`}>
      <motion.div
        className={styles.content}
        variants={slideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.img
          variants={fadeInBottomToTop}
          className={styles.logo}
          src={theme === 'dark' ? logoDark : logoLight}
          alt="iEscrow logo"
          draggable={false}
          loading="lazy"
        />
        <motion.span variants={fadeInBottomToTop} className={styles.motto}>
          {t('Home.Banner.motto')}
        </motion.span>
        <motion.h1 variants={fadeInBottomToTop}>
          <Trans i18nKey="Home.Banner.title">
            <GradientTitle></GradientTitle>
          </Trans>
        </motion.h1>
        <motion.p variants={fadeInBottomToTop}>
          {t('Home.Banner.description')}
        </motion.p>
        <motion.div variants={fadeInBottomToTop} className={styles.buttonsCont}>
          <CustomButton to="#" variant="secondary" aria-label="Watch video">
            <VideoIcon theme={theme} />
            {t('Home.Banner.watchVideo')}
          </CustomButton>
          <CustomButton to="#" variant="primary" aria-label="Create escrow">
            <img src={halfArrowIcon} alt="half arrow icon" />
            {t('Home.Banner.createEscrow')}
          </CustomButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
