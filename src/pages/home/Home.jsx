import { HomeBanner, InfoBlock, KeyBenefits, TradeOnTheGo } from '@layout';

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <div className="wrapper">
        {/* <KeyBenefits /> */}
        <InfoBlock />
        <TradeOnTheGo />
      </div>
    </main>
  );
}
