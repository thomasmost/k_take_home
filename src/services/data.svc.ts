// For processing the API data

import { getPriceUSD, toMajorUnitsFromDenom } from "./currency.svc";


export function getDenomBreakdown(denom: string, account: AccountValue) {
  const now = Date.now();
  const { original_vesting, vesting_periods, coins, delegated_vesting } = account;
  const start_time = parseInt(account.start_time, 10);
  const denom_holding = coins.find((val) => val.denom === denom);
  let total_coins = 0;
  if (denom_holding) {
    total_coins = parseInt(denom_holding.amount, 10);
  }
  const original_vesting_for_denom = original_vesting.find((val) => val.denom === denom);
  const delegated_vesting_for_denom = delegated_vesting.find((val) => val.denom === denom);
  let vesting_periods_for_denom: {length: number, amount: number}[] = [];
  for (const vesting_period of vesting_periods) {
    const vested_holding = vesting_period.amount.find((coin) => coin.denom === denom)
    if (vested_holding) {
      vesting_periods_for_denom.push({
        length: parseInt(vesting_period.length, 10),
        amount: parseInt(vested_holding.amount, 10)
      })
    }
  }
  let locked = 0;
  if (original_vesting_for_denom?.amount) {
    const original_vested_amount = parseInt(original_vesting_for_denom.amount, 10);
    locked = getLockedForDenom(start_time, original_vested_amount, vesting_periods_for_denom);
  }
  const liquid = getLiquidForDenom(total_coins, locked, delegated_vesting_for_denom)
  
  // This is an assumption; since I'm not sure how delegated vesting might play into this
  const total = total_coins;
  return { total, locked, liquid }

}


function getLockedForDenom(start_time: number, original_vested_amount: number, vesting_periods_for_denom: {length: number, amount: number}[]) {
  const now = Date.now() / 1000;
  let elapsed = start_time;
  let i = 0;
  let vested = 0;
  while (elapsed <= now) {
    elapsed += vesting_periods_for_denom[i].length;
    vested += vesting_periods_for_denom[i].amount;
  }
  return original_vested_amount - vested;
}

// Assumes only one delegated vesting per coin
function getLiquidForDenom(coins_held: number, locked_amount: number, delegated_vesting?: DenomAmount) {
  let delegated_amount = 0;
  if (delegated_vesting) {
    delegated_amount = parseInt(delegated_vesting.amount, 10);
  }

  return Math.min(coins_held, coins_held + delegated_amount - locked_amount);
}


export function processAccount(account: AccountValue, prices: Record<string, number>) {
  const coins = account.coins;
  let totalBalance = 0;
  let totalLocked = 0;
  let totalLiquid = 0;
  const denomData: DenomInfo[] = [];
  coins.map((coin, i) => {
    const {denom} = coin
    const price = getPriceUSD(denom, prices);
    // Not sure why there's no price for BTCB but we'll assume it's 0 for calculations
    const displayPrice = price ? price.toFixed(2) : '--' 
    const {total, locked, liquid} = getDenomBreakdown(denom, account);
    const totalTokens = toMajorUnitsFromDenom(total, denom);
    const totalDollars = (totalTokens * price);
    const lockedDollars = (toMajorUnitsFromDenom(locked, denom) * price);
    const liquidDollars = (toMajorUnitsFromDenom(liquid, denom) * price);
    totalBalance += totalDollars;
    totalLocked += lockedDollars;
    totalLiquid += liquidDollars;
    denomData.push({
      denom,
      displayPrice,
      totalDollars,
      totalTokens,
      liquidDollars,
      lockedDollars
    })
  });

  return { totalBalance, totalLiquid, totalLocked, denomData}
}
