export function toMajorUnits(amount_in_minor_units: number, exponent: number): string {
  return (amount_in_minor_units / Math.pow(10, exponent)).toFixed(exponent);
}

export function toDollarsFromCents(amount_in_minor_units: number): string {
  return toMajorUnits(amount_in_minor_units, 2)
}

export function getPriceUSD(denom: string, prices: Record<string,number>) {
  let market_id = `${denom}:usd`;
  return prices[market_id] ? prices[market_id].toFixed(2) : '--';
}
