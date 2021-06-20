import styled from '@emotion/styled';
import * as React from 'react';
import { PortfolioRow } from '../PortfolioRow/PortfolioRow';

interface IPortfolioSectionProps {
  denomData: DenomInfo[];
  prices: Record<string, number>
}

// Some of these styled components are duped;
// could be broken into a shared file

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
  return denomData.map((info, i) => (
    <PortfolioRow denomInfo={info} key={i} />
  ))
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
