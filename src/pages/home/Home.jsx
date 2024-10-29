import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <h1>{t('Home.title')}</h1>
      <p>{t('Home.hello')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
    </>
  );
}
