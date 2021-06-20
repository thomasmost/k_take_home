import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { TotalSection } from './TotalSection';

test('TotalSection renders', () => {
  const component = renderer.create(<TotalSection availableDollars={110.00} lockedDollars={90.00} balanceDollars={200.00} />);
  expect(component).toMatchSnapshot();
});
