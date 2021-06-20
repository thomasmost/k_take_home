import { toMajorUnits, toMajorUnitsFromDenom } from "./currency.svc";

test('toMajorUnits', () => {
  const majorUnits = toMajorUnits(14532, 3);

  expect(majorUnits).toBe('14.532');
});

describe('toMajorUnitsFromDenom', () => {
  it('should convert for 6 decimals with KAVA', () => {
    const majorUnits = toMajorUnitsFromDenom(12345678, 'ukava')
    expect(majorUnits).toBe(12.345678);
  })
  it('should convert for 8 decimals with BNB', () => {
    const majorUnits = toMajorUnitsFromDenom(1234567890, 'bnb')
    expect(majorUnits).toBe(12.34567890);
  })
})

