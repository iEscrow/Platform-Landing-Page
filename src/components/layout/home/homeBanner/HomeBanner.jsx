import styles from './HomeBanner.module.css';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import logoDark from '@assets/images/logo_dark.svg';
import videoIcon from '@assets/icons/videoIcon.png';
import halfArrowIcon from '@assets/icons/halfArrowIcon.png';
import { CustomButton } from '@ui';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';

export default function HomeBanner() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.homeBanner} ${styles[theme]}`}>
      <img className={styles.logo} src={logoDark} alt="iEscrow logo" />
      <span className={styles.motto}>{t('Home.Banner.motto')}</span>
      <h1>
        <Trans i18nKey="Home.Banner.title">
          <span></span>
        </Trans>
      </h1>
      <p>{t('Home.Banner.description')}</p>
      <div className={styles.buttonsCont}>
        <CustomButton to="#" variant="secondary">
          <img src={videoIcon} alt="video icon" />
          {t('Home.Banner.watchVideo')}
        </CustomButton>
        <CustomButton to="#" variant="primary">
          <img src={halfArrowIcon} alt="half arrow icon" />
          {t('Home.Banner.createEscrow')}
        </CustomButton>
      </div>
    </section>
  );
}
