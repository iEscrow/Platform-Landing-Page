import styles from './Marketplace.module.css';
import marketplaceDesktopDark from '@assets/images/marketplace_desktop_dark.png';
import { CustomButton } from '@components';
import halfArrow from '@assets/icons/halfArrowIcon.png';
import { Trans, useTranslation } from 'react-i18next';

export default function Marketplace() {
  const { t } = useTranslation();

  return (
    <section className={styles.marketplace}>
      <div className={styles.wrapper}>
        <h2>
          <Trans i18nKey="Home.Marketplace.title">
            <span></span>
          </Trans>
        </h2>
        <div className={styles.content}>
          <img
            className={styles.marketplaceImage}
            src={marketplaceDesktopDark}
            alt="marketplace"
          />
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
            <p>
              <Trans i18nKey="Home.Marketplace.description3"></Trans>
            </p>
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
