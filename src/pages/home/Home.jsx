import React, { useEffect, lazy } from 'react';
import HomeBanner from '@layouts/home/homeBanner/HomeBanner';
import Roadmap from '@layouts/home/roadmap/Roadmap';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const KeyBenefits = lazy(() => import('@layouts/home/keyBenefits/KeyBenefits'));
const LowerFees = lazy(() => import('@layouts/home/lowerFees/LowerFees'));
const Marketplace = lazy(() => import('@layouts/home/marketplace/Marketplace'));
const InfoBlock = lazy(() => import('@layouts/home/infoBlock/InfoBlock'));
const TradeOnTheGo = lazy(
  () => import('@layouts/home/tradeOnTheGo/TradeOnTheGo')
);
const Community = lazy(() => import('@layouts/home/community/Community'));

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>P2P Crypto Escrow Exchange</title>
        <meta
          name="description"
          content="P2P Crypto Escrow Exchange. Trade safely and securely on P2P Crypto Escrow Exchange."
        />
      </Helmet>
      <main>
        <HomeBanner t={t} />
        <Roadmap t={t} />
        <KeyBenefits t={t} />
        <LowerFees t={t} />
        <InfoBlock t={t} />
        <Marketplace t={t} />
        <TradeOnTheGo t={t} />
        <Community t={t} />
      </main>
    </>
  );
}
