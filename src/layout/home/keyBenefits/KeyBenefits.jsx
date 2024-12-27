import styles from './KeyBenefits.module.css';
import phoneMobile from '@assets/images/keybenefits_mobile.png';
import phoneDesktop from '@assets/images/keybenefits_desktop.png';
import { IconText, GradientTitle } from '@components';
import { Trans, useTranslation } from 'react-i18next';

/**
 * Key benefits section that contains the title and the card}
 *
 * @returns {JSX.Element}
 */
export default function KeyBenefits() {
  const { t } = useTranslation();

  return (
    <section className={styles.keyBenefits}>
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
                <h3>
                  Key Benefits <span>of a DEX (DeFi)</span>
                </h3>
                <ul>
                  <li>
                    <IconText>No Intermediaries</IconText>
                  </li>
                  <li>
                    <IconText>Trustless</IconText>
                  </li>
                  <li>
                    <IconText>Accesibility</IconText>
                  </li>
                  <li>
                    <IconText>Permissionless</IconText>
                  </li>
                  <li>
                    <IconText>Immutable</IconText>
                  </li>
                </ul>
              </article>
              <article>
                <h3>
                  Key Benefits <span>of a CEX (GeFi)</span>
                </h3>
                <ul>
                  <li>
                    <IconText>Customer support</IconText>
                  </li>
                  <li>
                    <IconText>Lower fees</IconText>
                  </li>
                </ul>
              </article>
            </div>

            {/* Text */}
            <div className={styles.text}>
              <p>iEscrow combines all of these features in one platform.</p>
              <p>
                You can use iEscrow as a complete DEX, or you can use it as a
                CEX, it´s your choice!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
