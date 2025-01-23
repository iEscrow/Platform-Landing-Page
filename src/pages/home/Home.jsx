import HomeBanner from '@layouts/home/homeBanner/HomeBanner';
import Roadmap from '@layouts/home/roadmap/Roadmap';
import KeyBenefits from '@layouts/home/keyBenefits/KeyBenefits';
import InfoBlock from '@layouts/home/infoBlock/InfoBlock';
import Marketplace from '@layouts/home/marketplace/Marketplace';
import TradeOnTheGo from '@layouts/home/tradeOnTheGo/TradeOnTheGo';
import Community from '@layouts/home/community/Community';
import LowerFees from '@layouts/home/lowerFees/LowerFees';

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Roadmap />
      <KeyBenefits />
      <LowerFees />
      <InfoBlock />
      <Marketplace />
      <TradeOnTheGo />
      <Community />
    </main>
  );
}
