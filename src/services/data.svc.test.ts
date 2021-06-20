import MockDate from 'mockdate'
import { getLiquidForDenom, getLockedForDenom } from './data.svc';

MockDate.set(12000)

test('getLockedForDenom', () => {
  const vesting_periods:  {length: number, amount: number}[] = [
    {
      length: 3,
      amount: 20
    },
    {
      length: 2,
      amount: 30
    },
    {
      length: 8,
      amount: 10
    }
  ]
  const amount = getLockedForDenom(6, 100, vesting_periods);
  expect(amount).toBe(50);
})

test('getLiquidForDenom', () => {
  const amount = getLiquidForDenom(6, 3, { denom: 'kava', amount: '2'});
  expect(amount).toBe(5);
})
