import styles from './KeyBenefits.module.css';
import phoneMobile from '@assets/images/keyBenefits/keybenefits_mobile.png';
import phoneDesktop from '@assets/images/keyBenefits/keybenefits_desktop.png';
import IconText from '@components/iconText/IconText';
import GradientTitle from '@components/gradientTitle/GradientTitle';
import { Trans, useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';

/**
 * Key benefits section that contains the title and the card}
 *
 * @returns {JSX.Element}
 */
export default function KeyBenefits() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.keyBenefits} ${styles[theme]}`}>
      <h2>
        <Trans i18nKey="Home.KeyBenefits.title">
          <GradientTitle></GradientTitle>
        </Trans>
      </h2>
      <div className={styles.card}>
        <div className={styles.falseBg}></div>
        {/* Content card */}
        <div className={styles.content}>
          <picture>
            <source
              className={styles.phone}
              media="(max-width: 1024px)"
              srcSet={phoneMobile}
            />
            <img
              className={styles.phone}
              src={phoneDesktop}
              alt="key benefits phone image"
            />
          </picture>
          {/* Text container */}
          <div className={styles.textContainer}>
            {/* Text Articles */}
            <div className={styles.articles}>
              <article>
                <h3>{t('Home.KeyBenefits.Defi.title')}</h3>
                <ul>
                  <li>
                    <IconText>{t('Home.KeyBenefits.Defi.list.0')}</IconText>
                  </li>
                  <li>
                    <IconText>{t('Home.KeyBenefits.Defi.list.1')}</IconText>
                  </li>
                  <li>
                    <IconText>{t('Home.KeyBenefits.Defi.list.2')}</IconText>
                  </li>
                  <li>
                    <IconText>{t('Home.KeyBenefits.Defi.list.3')}</IconText>
                  </li>
                  <li>
                    <IconText>{t('Home.KeyBenefits.Defi.list.4')}</IconText>
                  </li>
                </ul>
              </article>
              <article>
                <h3>{t('Home.KeyBenefits.Gefi.title')}</h3>
                <ul>
                  <li>
                    <IconText>{t('Home.KeyBenefits.Gefi.list.0')}</IconText>
                  </li>
                  <li>
                    <IconText>{t('Home.KeyBenefits.Gefi.list.1')}</IconText>
                  </li>
                </ul>
              </article>
            </div>

            {/* Text */}
            <div className={styles.text}>
              <p>{t('Home.KeyBenefits.cta1')}</p>
              <p>{t('Home.KeyBenefits.cta2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
