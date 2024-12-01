import {
  HomeBanner,
  Roadmap,
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
      <Roadmap />
      <KeyBenefits />
      <InfoBlock />
      <Marketplace />
      <TradeOnTheGo />
      <Community />
    </main>
  );
}
