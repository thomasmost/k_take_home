import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { PortfolioSection } from './PortfolioSection';

const testPrices = {
  "kava:usd": 3.805700000000000083
}

const denomData= [{
  denom: 'kava',
  displayPrice: '4.06',
  totalDollars: 145.49,
  totalTokens: 35.862256,
  liquidDollars: 99.05,
  lockedDollars: 46.44
}]

test('PortfolioSection renders', () => {
  const component = renderer.create(
    <PortfolioSection denomData={denomData} prices={testPrices}/>
  );
  expect(component).toMatchSnapshot();
});
