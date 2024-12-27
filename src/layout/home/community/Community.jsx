import { useTranslation } from 'react-i18next';
import styles from './Community.module.css';
import { CommunitySlider, GradientTitle } from '@components';

/**
 * Our Community layout section that contains the title and slider
 * @returns {JSX.Element}
 */
export default function Community() {
  const { t } = useTranslation();
  const list = [
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
  ];

  return (
    <section className={styles.community}>
      <h2>
        <GradientTitle>{t('Home.Community.title')}</GradientTitle>
      </h2>
      <CommunitySlider list={list} />
    </section>
  );
}
