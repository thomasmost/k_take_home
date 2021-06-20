// I don't love that these inconsistently return strings vs. numbers,
// but luckily TypeScript and tests can help with that kind of thing

export function toMajorUnits(amount_in_minor_units: number, exponent: number): string {
  return (amount_in_minor_units / Math.pow(10, exponent)).toFixed(exponent);
}

export function toDollarsFromCents(amount_in_minor_units: number): string {
  return toMajorUnits(amount_in_minor_units, 2)
}

const exponent6Denoms = [
  'hard',
  'ukava',
  'usdx'
]

export function toMajorUnitsFromDenom(amount_in_minor_units: number, denom: string) {
  // obviously not optimal
  let exponent = 8;
  if (exponent6Denoms.includes(denom)) {
    exponent = 6;
  }
  return (amount_in_minor_units / Math.pow(10, exponent))
}

export function getPriceUSD(denom: string, prices: Record<string,number>) {
  let standardDenom = denom;
  // This seems right, but I'm not sure why it's like this
  if (denom === 'ukava') {
    standardDenom = 'kava'
  }
  let market_id = `${standardDenom}:usd`;
  return prices[market_id] ? prices[market_id] : 0;
}
