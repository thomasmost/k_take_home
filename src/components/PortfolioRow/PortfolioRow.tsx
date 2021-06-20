import styled from '@emotion/styled';
import * as React from 'react';

interface IPortfolioRowProps {
  denomInfo: DenomInfo;
}

// Some of these styled components are duped;
// could be broken into a shared file

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

export const PortfolioRow: React.FC<IPortfolioRowProps> = ({denomInfo}) => {
  const {denom, displayPrice, totalTokens, totalDollars, lockedDollars, liquidDollars} = denomInfo;
  let displayDenom = denom;
  // Obviously hacky but until I understand it better will do for now
  if (denom === 'ukava') {
    displayDenom = 'kava';
  }
  return (
    <PillLayout>
        <AssetCol>
          <MainData>{displayDenom.toUpperCase()}</MainData>
          <SecondaryData>${displayPrice}</SecondaryData>
        </AssetCol>
        <TotalCol>
          <MainData>
            {totalTokens} {displayDenom.toUpperCase()}
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
};
