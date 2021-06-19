import styled from "@emotion/styled";
import * as React from "react";
import { useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import { ApiSvc } from "../services/api.svc";
import { PortfolioSection } from "./PortfolioSection/PortfolioSection";
import { TotalSection } from "./TotalSection/TotalSection";

// const reactLogo = require("./../assets/img/react_logo.svg");

const Main = styled.main`
  background-color: #faf9f8;
  font-family: Inter, sans-serif;
`;

const ContentContainer = styled.div`
  padding: 50px;
`;
const App: React.FC = () => {

  const [assets, setAssets] = useState<AccountValue>(null);
  const [prices, setPrices] = useState<Record<string, number>>(null);

  async function loadData() {

    const accountResponse = await ApiSvc.getAccount();
    if (accountResponse.error) {
      // handle
      return;
    }
    setAssets(accountResponse.data.result.value);
    const priceResponse = await ApiSvc.getPrices();
    if (priceResponse.error) {
      // handle
      return;
    }
    const pricesByMarketId: Record<string, number> = {};
    for (const marketPrice of priceResponse.data.result) {
      pricesByMarketId[marketPrice.market_id] = parseFloat(marketPrice.price);
    }
    setPrices(pricesByMarketId);
  }

  useEffect(() => {
    loadData();
  }, []);
    return (
      <Main className="app">
        <ContentContainer>
          <TotalSection availableCents={11000} lockedCents={9000} balanceCents={20000} />
          <PortfolioSection prices={prices} assets={assets} />
        </ContentContainer>
      </Main>
    );
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
