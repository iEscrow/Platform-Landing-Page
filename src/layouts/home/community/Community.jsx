import styles from './Community.module.css';
import { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '@context/ThemeContext';
import GradientTitle from '@components/gradientTitle/GradientTitle';
import CommunitySlider from '@components/sliders/communitySlider/CommunitySlider';
import { motion } from 'framer-motion';
import { scaleVariant } from '@animations/scaleVariants';

/**
 * Our Community layout section that contains the title and slider
 * @returns {JSX.Element}
 */
export default function Community() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const list = useMemo(
    () => [
      {
        id: 1,
        name: t('Home.Community.person1.name'),
        description: t('Home.Community.person1.description'),
      },
      {
        id: 2,
        name: t('Home.Community.person2.name'),
        description: t('Home.Community.person2.description'),
      },
      {
        id: 3,
        name: t('Home.Community.person3.name'),
        description: t('Home.Community.person3.description'),
      },
      {
        id: 4,
        name: t('Home.Community.person3.name'),
        description: t('Home.Community.person3.description'),
      },
    ],
    [t]
  );

  return (
    <section className={`${styles.community} ${styles[theme]}`}>
      <motion.h2
        variants={scaleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <GradientTitle>{t('Home.Community.title')}</GradientTitle>
      </motion.h2>
      <CommunitySlider list={list} />
    </section>
  );
}
