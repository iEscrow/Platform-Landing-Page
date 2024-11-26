import {
  HomeBanner,
  InfoBlock,
  KeyBenefits,
  Marketplace,
  TradeOnTheGo,
  Community,
} from '@layout';

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <KeyBenefits />
      <InfoBlock />
      <Marketplace />
      <TradeOnTheGo />
      <Community />
    </main>
  );
}
