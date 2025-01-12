import styles from './TradeOnTheGo.module.css';
import phone from '@assets/images/tradeOnTheGo/trade_on_the_go_desktop.png';
import qr from '@assets/images/qr.png';
import { Trans, useTranslation } from 'react-i18next';
import { StoreButton } from '@components';
import GradientTitle from '@components/gradientTitle/GradientTitle';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import AppStoreIcon from '../../../components/icons/appStore/AppStoreIcon';
import GooglePlayIcon from '../../../components/icons/googlePlayIcon/googlePlayIcon';

/**
 * Home Trade on the go component, that contains the title, qr code and a phone image
 *
 * @returns {JSX.Element}
 */
export default function TradeOnTheGo() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <section className={styles.tradeOnTheGo}>
      <img className={styles.phone} src={phone} alt="phone" />

      <div className={styles.textContainer}>
        {/* Title */}
        <h2>
          <Trans i18nKey="Home.TradeOnTheGo.title">
            <GradientTitle></GradientTitle>
          </Trans>
        </h2>

        {/* QR Code */}
        <div className={styles.qrContainer}>
          <img src={qr} alt="qr code phone" />
          <p>
            <Trans i18nKey="Home.TradeOnTheGo.description">
              <span></span>
            </Trans>
          </p>
        </div>

        {/* Platform Buttons */}
        <div className={styles.platformButtons}>
          <StoreButton
            icon={<AppStoreIcon theme={theme} />}
            platform="App Store"
            link="#"
            text={t('Home.TradeOnTheGo.appStore')}
          />
          <StoreButton
            icon={<GooglePlayIcon />}
            platform="Google Play"
            link="#"
            text={t('Home.TradeOnTheGo.googlePlay')}
          />
        </div>
      </div>
    </section>
  );
}
