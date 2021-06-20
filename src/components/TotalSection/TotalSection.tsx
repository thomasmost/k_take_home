import styled from '@emotion/styled';
import * as React from 'react';
import { toDollarsFromCents } from '../../services/currency.svc';

interface ITotalSectionProps {
  // placeholder, remove or replace with real props
  balanceDollars: number;
  availableDollars: number;
  lockedDollars: number;
}

const PillLayout = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const SubTotals = styled.div`
  display: flex;
  > div:first-of-type {
    padding-right: 30px;
    border-right: 1px solid lightgray;
  }
  > div:last-of-type {
    padding-left: 30px;
  }
`;

const Label = styled.label`
  font-size: 11px;
  margin-bottom: 6px;
  display: block;
  font-weight: 500;
`;

const SubTotal = styled.div`
  font-size: 14px;
`;

const Total = styled.div`
  font-size: 20px;
`;

export const TotalSection: React.FC<ITotalSectionProps> = ({
  balanceDollars,
  availableDollars,
  lockedDollars,
}) => {
  return (
    <PillLayout>
      <div>
        <Label>Total Balance</Label>
        <Total>${(balanceDollars).toFixed(2)}</Total>
      </div>
        <SubTotals>
        <div>
          <Label>Total Available</Label>
          <SubTotal>${(availableDollars).toFixed(2)}</SubTotal>
        </div>
        <div>
          <Label>Total Locked</Label>
          <SubTotal>${(lockedDollars).toFixed(2)}</SubTotal>
        </div>
      </SubTotals>
    </PillLayout>
  );
};
