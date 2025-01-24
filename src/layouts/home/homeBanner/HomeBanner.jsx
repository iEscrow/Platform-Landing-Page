import styles from './HomeBanner.module.css';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import logoDark from '@assets/images/logo_dark.svg';
import logoLight from '@assets/images/logo_light.svg';
import halfArrowIcon from '@assets/icons/halfArrowIcon.png';
import CustomButton from '@components/buttons/customButton/CustomButton';
import GradientTitle from '@components/gradientTitle/GradientTitle';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import VideoIcon from '@components/icons/videoIcon/VideoIcon';

/**
 * Home main banner component
 *
 * @returns {JSX.Element}
 */
export default function HomeBanner() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.homeBanner} ${styles[theme]}`}>
      <img
        className={styles.logo}
        src={theme === 'dark' ? logoDark : logoLight}
        alt="iEscrow logo"
        draggable={false}
      />
      <span className={styles.motto}>{t('Home.Banner.motto')}</span>
      <h1>
        <Trans i18nKey="Home.Banner.title">
          <GradientTitle></GradientTitle>
        </Trans>
      </h1>
      <p>{t('Home.Banner.description')}</p>
      <div className={styles.buttonsCont}>
        <CustomButton to="#" variant="secondary">
          <VideoIcon theme={theme} />
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
