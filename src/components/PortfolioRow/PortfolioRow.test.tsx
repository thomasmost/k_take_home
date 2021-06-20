import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { PortfolioRow } from './PortfolioRow';

const denomInfo= {
  denom: 'kava',
  displayPrice: '4.06',
  totalDollars: 145.49,
  totalTokens: 35.862256,
  liquidDollars: 99.05,
  lockedDollars: 46.44
}

test('PortfolioRow renders', () => {
  const component = renderer.create(
    <PortfolioRow denomInfo={denomInfo} />
  );
  expect(component).toMatchSnapshot();
});
