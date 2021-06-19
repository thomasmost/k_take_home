import styled from '@emotion/styled';
import * as React from 'react';
import { getPriceUSD } from '../../services/currency.svc';

interface IPortfolioSectionProps {
  // placeholder, remove or replace with real props
  assets: AccountValue;
  prices: Record<string, number>
}


const Label = styled.label`
  font-size: 11px;
  margin-bottom: 6px;
  display: block;
  font-weight: 500;
`;


const PillLayout = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  padding: 20px;
  justify-content: start;
`;


const HeaderLayout = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  display: flex;
  padding: 20px;
  display: flex;
  justify-content: start;
`;

const AssetCol = styled.div`
  width: 200px;
`;
const TotalCol = styled.div`
  width: 130px;
`;
const AvailableCol = styled.div`
  width: 64px;
`;
const LockedCol = styled.div`
  width: 64px;
`;

const MainData = styled.div`
  font-size: 14px;
`;
const SecondaryData = styled.div`
  margin-top: 4px;
  font-size: 10px;
  color: gray;
`;

// This could be a separate component, but for convenience I'll load it here
const renderRows = (assets: CoinHolding[], prices: Record<string, number>) => assets.map((asset, i) => {
  return (
    <PillLayout key={i}>
        <AssetCol>
          <Label>
            <MainData>{asset.denom.toUpperCase()}</MainData>
            <SecondaryData>${getPriceUSD(asset.denom, prices)}</SecondaryData>
          </Label>
        </AssetCol>
        <TotalCol>
          <Label>
            $120.00
          </Label>
        </TotalCol>
        <AvailableCol>
          <Label>
            $49.20
          </Label>
        </AvailableCol>
        <LockedCol>
          <Label>
            $68.60
          </Label>
        </LockedCol>
    </PillLayout>
  )
})


const Container = styled.div`
  margin-top: 40px;
`;


export const PortfolioSection: React.FC<IPortfolioSectionProps> = ({assets, prices}) => {
  if (!assets || !prices) {
    return <Container>Loading...</Container>
  }
  const coins = assets.coins;
  return (
    <Container>
      
      <HeaderLayout>
        <AssetCol>
          <Label>
            Asset
          </Label>
        </AssetCol>
        <TotalCol>
          <Label>
            Total
          </Label>
        </TotalCol>
        <AvailableCol>
          <Label>
            Available
          </Label>
        </AvailableCol>
        <LockedCol>
          <Label>
            Locked
          </Label>
        </LockedCol>
      </HeaderLayout>
      {renderRows(coins, prices)}
    </Container>
  );
};
