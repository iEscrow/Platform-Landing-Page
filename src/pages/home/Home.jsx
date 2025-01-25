import React from 'react';

import HomeBanner from '@layouts/home/homeBanner/HomeBanner';
import Roadmap from '@layouts/home/roadmap/Roadmap';
import { useTranslation } from 'react-i18next';

const KeyBenefits = React.lazy(
  () => import('@layouts/home/keyBenefits/KeyBenefits')
);
const LowerFees = React.lazy(() => import('@layouts/home/lowerFees/LowerFees'));
const Marketplace = React.lazy(
  () => import('@layouts/home/marketplace/Marketplace')
);
const InfoBlock = React.lazy(() => import('@layouts/home/infoBlock/InfoBlock'));
const TradeOnTheGo = React.lazy(
  () => import('@layouts/home/tradeOnTheGo/TradeOnTheGo')
);

const Community = React.lazy(() => import('@layouts/home/community/Community'));

export default function Home() {
  const { t } = useTranslation();

  return (
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
  );
}
