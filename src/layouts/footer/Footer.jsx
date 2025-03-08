import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

// components
import FooterAccordion from '../../components/accordions/footerAccordion/FooterAccordion';
import SocialIcon from '../../components/socialIcon/SocialIcon';
import LanguageChange from '../../components/locale/languageChange/LanguageChange';
import CurrencyChange from '../../components/locale/currencyChange/CurrencyChange';
import FooterThemeSelector from '../../components/theme/footerThemeSelector/FooterThemeSelector';

import logoDark from '../../assets/images/logo_dark.png';
import logoLight from '../../assets/images/logo_light.png';
// icons
import FacebookIcon from '../../components/icons/socials/FacebookIcon';
import InstagramIcon from '../../components/icons/socials/InstagramIcon';
import TelegramIcon from '../../components/icons/socials/TelegramIcon';
import TikTokIcon from '../../components/icons/socials/TikTokIcon';
import TwitterIcon from '../../components/icons/socials/TwitterIcon';
import YoutubeIcon from '../../components/icons/socials/YoutubeIcon';

/**
 * Footer component that contains the footer accordion and the community social links
 * @returns {JSX.Element}
 */
export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const socials = [
    {
      id: 1,
      icon: <FacebookIcon theme={theme} />,
      link: '#',
      ariaLabel: 'Facebook',
    },
    {
      id: 2,
      icon: <InstagramIcon theme={theme} />,
      link: '#',
      ariaLabel: 'Instagram',
    },
    {
      id: 3,
      icon: <TelegramIcon theme={theme} />,
      link: '#',
      ariaLabel: 'Telegram',
    },
    {
      id: 4,
      icon: <TikTokIcon theme={theme} />,
      link: '#',
      ariaLabel: 'Tiktok',
    },
    {
      id: 5,
      icon: <TwitterIcon theme={theme} />,
      link: '#',
      ariaLabel: 'Twitter',
    },
    {
      id: 6,
      icon: <YoutubeIcon theme={theme} />,
      link: '#',
      ariaLabel: 'Youtube',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <img
            className={styles.logo}
            src={theme === 'dark' ? logoDark : logoLight}
            alt="iescrow logo"
            draggable={false}
            loading="lazy"
          />
          {/* Acordion */}
          <FooterAccordion />
          {/* Community */}
          <div className={styles.community}>
            <span>{t('Footer.Comunity.title')}</span>
            <div className={styles.socials}>
              {socials.map((social) => (
                <SocialIcon
                  key={social.id}
                  link={social.link}
                  aria-label={social.ariaLabel}
                >
                  {social.icon}
                </SocialIcon>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.locale}>
          <FooterThemeSelector />
          <LanguageChange />
          <CurrencyChange />
        </div>

        <div className={styles.copyright}>
          <p>
            {t('Footer.Copyright.copyright', {
              year: new Date().getFullYear(),
            })}
          </p>
          <ul>
            <li>
              <a href="#" aria-label="go to terms">
                {t('Footer.Copyright.terms')}
              </a>
            </li>
            <li>
              <a href="#" aria-label="go to disclaimer">
                {t('Footer.Copyright.disclaimer')}
              </a>
            </li>
            <li>
              <a href="#" aria-label="go to privacy">
                {t('Footer.Copyright.privacy')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
