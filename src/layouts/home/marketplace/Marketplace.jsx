import PropTypes from 'prop-types';
import styles from './Marketplace.module.css';
import marketplaceMobileDark from '@assets/images/marketplace/dark/marketplace_mobile.png';
import marketplaceDesktopDark from '@assets/images/marketplace/dark/marketplace_desktop.png';
import CustomButton from '@components/buttons/customButton/CustomButton';
import GradientTitle from '@components/gradientTitle/GradientTitle';
import halfArrow from '@assets/icons/halfArrowIcon.png';
import { Trans } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { motion } from 'framer-motion';
import { scaleVariant } from '@animations/scaleVariants';
import { fadeInLeftToRight } from '@animations/fadeInVariants';

Marketplace.propTypes = {
  t: PropTypes.func.isRequired,
};

export default function Marketplace({ t }) {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.marketplace} ${styles[theme]}`}>
      <div className={styles.wrapper}>
        <motion.h2
          variants={scaleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Trans i18nKey="Home.Marketplace.title">
            <GradientTitle></GradientTitle>
          </Trans>
        </motion.h2>
        <div className={styles.content}>
          <motion.picture
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <source
              media="(min-width: 1200px)"
              srcSet={marketplaceDesktopDark}
            />
            <img
              className={styles.marketplaceImage}
              src={marketplaceMobileDark}
              alt="marketplace"
              loading="lazy"
            />
          </motion.picture>

          <motion.div
            variants={fadeInLeftToRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={styles.textContainer}
          >
            <p>
              <Trans i18nKey="Home.Marketplace.description1">
                <span></span>
              </Trans>
            </p>
            <p>
              <Trans i18nKey="Home.Marketplace.description2">
                <span></span>
              </Trans>
            </p>
            <p>{t('Home.Marketplace.description3')}</p>
            <p>{t('Home.Marketplace.description4')}</p>
            <CustomButton
              to="#"
              variant="primary"
              aria-label="visit marketplace"
            >
              <img src={halfArrow} alt="half arrow icon" />
              <Trans i18nKey="Home.Marketplace.visit"></Trans>
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
