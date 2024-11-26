import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';
import { FooterAccordion, SocialIcon } from '@components';
import facebookIconDark from '@assets/icons/socials/facebook_dark.png';
import instagramIconDark from '@assets/icons/socials/instagram_dark.png';
import telegramIconDark from '@assets/icons/socials/telegram_dark.png';
import tiktokIconDark from '@assets/icons/socials/tiktok_dark.png';
import twitterIconDark from '@assets/icons/socials/twitter_dark.png';
import youtubeIconDark from '@assets/icons/socials/youtube_dark.png';

/**
 * Footer component that contains the footer accordion and the community social links
 * @returns {JSX.Element}
 */
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      {/* Acordion */}
      <FooterAccordion />
      {/* Community */}
      <div className={styles.community}>
        <span>{t('Footer.Comunity.title')}</span>
        <div className={styles.socials}>
          <SocialIcon
            icon={facebookIconDark}
            alt="facebook icon"
            link="#"
            aria-label="Facebook"
          />
          <SocialIcon
            icon={instagramIconDark}
            alt="instagram icon"
            link="#"
            aria-label="Instagram"
          />
          <SocialIcon
            icon={telegramIconDark}
            alt="telegram icon"
            link="#"
            aria-label="Telegram"
          />
          <SocialIcon
            icon={tiktokIconDark}
            alt="tiktok icon"
            link="#"
            aria-label="Tiktok"
          />
          <SocialIcon
            icon={twitterIconDark}
            alt="twitter icon"
            link="#"
            aria-label="Twitter"
          />
          <SocialIcon
            icon={youtubeIconDark}
            alt="youtube icon"
            link="#"
            aria-label="Youtube"
          />
        </div>
      </div>
      <p>{t('Footer.copyright', { year: new Date().getFullYear() })}</p>
    </footer>
  );
}
