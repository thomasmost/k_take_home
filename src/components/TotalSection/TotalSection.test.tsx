import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { TotalSection } from './TotalSection';

test('TotalSection renders', () => {
  const component = renderer.create(<TotalSection availableCents={11000} lockedCents={9000} balanceCents={20000} />);
  expect(component).toMatchSnapshot();
});
