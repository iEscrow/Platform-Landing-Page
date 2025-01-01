import HomeBanner from '@layout/home/homeBanner/HomeBanner';
import Roadmap from '@layout/home/roadmap/Roadmap';
import KeyBenefits from '@layout/home/keyBenefits/KeyBenefits';
import InfoBlock from '@layout/home/infoBlock/InfoBlock';
import Marketplace from '@layout/home/marketplace/Marketplace';
import TradeOnTheGo from '@layout/home/tradeOnTheGo/TradeOnTheGo';
import Community from '@layout/home/community/Community';
import LowerFees from '@layout/home/lowerFees/LowerFees';

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
