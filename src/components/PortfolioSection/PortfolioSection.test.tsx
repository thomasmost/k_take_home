import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { PortfolioSection } from './PortfolioSection';

test('PortfolioSection renders', () => {
  const component = renderer.create(
    <PortfolioSection assets={null} prices={null}/>
  );
  expect(component).toBeDefined();
});
