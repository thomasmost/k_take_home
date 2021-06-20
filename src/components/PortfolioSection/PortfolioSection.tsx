import styled from '@emotion/styled';
import * as React from 'react';

interface IPortfolioSectionProps {
  // placeholder, remove or replace with real props
  denomData: DenomInfo[];
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
  margin-bottom: 10px;
`;


const HeaderLayout = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  display: flex;
  padding: 0 20px;
  display: flex;
  justify-content: start;
`;

const AssetCol = styled.div`
  width: 200px;
`;
const TotalCol = styled.div`
  width: 180px;
`;
const AvailableCol = styled.div`
  width: 80px;
`;
const LockedCol = styled.div`
  width: 80px;
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
const renderRows = (denomData: DenomInfo[], prices: Record<string, number>) => {
  return denomData.map((info, i) => {
    const {denom, displayPrice, totalTokens, totalDollars, lockedDollars, liquidDollars} = info
    return (
      <PillLayout key={i}>
          <AssetCol>
            <MainData>{denom.toUpperCase()}</MainData>
            <SecondaryData>${displayPrice}</SecondaryData>
          </AssetCol>
          <TotalCol>
            <MainData>
              {totalTokens} {denom.toUpperCase()}
            </MainData>
            <SecondaryData>${totalDollars.toFixed(2)}</SecondaryData>
          </TotalCol>
          <AvailableCol>
            <MainData>
              ${liquidDollars.toFixed(2)}
            </MainData>
          </AvailableCol>
          <LockedCol>
            <MainData>
              ${lockedDollars.toFixed(2)}
            </MainData>
          </LockedCol>
      </PillLayout>
    )
  })
};


const Container = styled.div`
  margin-top: 40px;
`;


export const PortfolioSection: React.FC<IPortfolioSectionProps> = ({denomData, prices}) => {
  if (!denomData || !prices) {
    return <Container>Loading...</Container>
  }
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
      {renderRows(denomData, prices)}
    </Container>
  );
};
