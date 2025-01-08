import styles from './Marketplace.module.css';
import marketplaceMobileDark from '@assets/images/marketplace/dark/marketplace_mobile.png';
import marketplaceDesktopDark from '@assets/images/marketplace/dark/marketplace_desktop.png';
import { CustomButton, GradientTitle } from '@components';
import halfArrow from '@assets/icons/halfArrowIcon.png';
import { Trans, useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';

export default function Marketplace() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.marketplace} ${styles[theme]}`}>
      <div className={styles.wrapper}>
        <h2>
          <Trans i18nKey="Home.Marketplace.title">
            <GradientTitle></GradientTitle>
          </Trans>
        </h2>
        <div className={styles.content}>
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={marketplaceDesktopDark}
            />
            <img
              className={styles.marketplaceImage}
              src={marketplaceMobileDark}
              alt="marketplace"
            />
          </picture>

          <div className={styles.textContainer}>
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
            <CustomButton to="#" variant="primary">
              <img src={halfArrow} alt="half arrow icon" />
              <Trans i18nKey="Home.Marketplace.visit"></Trans>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
