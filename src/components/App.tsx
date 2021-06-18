import styled from "@emotion/styled";
import * as React from "react";
import { hot } from "react-hot-loader";
import { TotalSection } from "./TotalSection/TotalSection";

// const reactLogo = require("./../assets/img/react_logo.svg");

const Main = styled.main`
  background-color: #faf9f8;
  font-family: Inter, sans-serif;
`;

const ContentContainer = styled.div`
  padding: 50px;
`;
class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <Main className="app">
        <ContentContainer>
          <TotalSection availableCents={11000} lockedCents={9000} balanceCents={20000} />
        </ContentContainer>
      </Main>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
