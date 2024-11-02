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
      <div className="wrapper">
        <KeyBenefits />
        <InfoBlock />
        <Marketplace />
        <TradeOnTheGo />
      </div>
      <Community />
    </main>
  );
}
