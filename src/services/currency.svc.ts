export function toMajorUnits(amount_in_minor_units: number): string {
  return (amount_in_minor_units / 100).toFixed(2);
}
