import { useState } from 'react';
import styles from './FooterAccordion.module.css';
import { useTranslation } from 'react-i18next';
import chevronDark from '@assets/icons/chevron_dark.png';
import { Link } from 'react-router-dom';

export default function FooterAccordion() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const accordionData = [
    {
      title: t('Footer.About.title'),
      content: [
        {
          text: t('Footer.About.about'),
          link: '/',
        },
        {
          text: t('Footer.About.terms'),
          link: '/',
        },
        {
          text: t('Footer.About.privacy'),
          link: '/',
        },
      ],
      link: '/',
    },
    {
      title: t('Footer.Services.title'),
      content: [
        {
          text: t('Footer.Services.download'),
          link: '/',
        },
        {
          text: t('Footer.Services.terms'),
          link: '/',
        },
        {
          text: t('Footer.Services.escrow'),
          link: '/',
        },
        {
          text: t('Footer.Services.refer'),
          link: '/',
        },
        {
          text: t('Footer.Services.list'),
          link: '/',
        },
      ],
      link: '/',
    },
    {
      title: t('Footer.Support.title'),
      content: [
        {
          text: t('Footer.Support.help'),
          link: '/',
        },
        {
          text: t('Footer.Support.security'),
          link: '/',
        },
      ],
    },
  ];

  const handleToggle = (index) => {
    if (active === index) {
      return;
    }
    setActive(index);
  };

  return (
    <div className={styles.accordion}>
      {accordionData.map((item, index) => (
        <div
          className={`${styles.accordion_item} ${active === index ? styles.active : ''}`}
          key={index}
        >
          {/* Accordion Button */}
          <button
            onClick={() => handleToggle(index)}
            className={styles.accordion_item_btn}
          >
            <span>{item.title}</span>
            <img
              className={styles.chevron}
              src={chevronDark}
              alt="chevron icon"
            />
          </button>
          {/* Accordion Menu */}
          <div className={styles.accordion_menu}>
            {item.content.map(({ text, link }, index) => (
              <Link href={link} key={index}>
                {text}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
