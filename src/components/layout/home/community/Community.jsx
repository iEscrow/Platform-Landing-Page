import { useTranslation } from 'react-i18next';
import styles from './Community.module.css';
import { CommunitySlider } from '@ui';

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
  ];

  return (
    <section className={styles.community}>
      <h2>{t('Home.Community.title')}</h2>
      <CommunitySlider list={list} />
    </section>
  );
}
