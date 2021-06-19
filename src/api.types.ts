type CoinHolding = {
  denom: string;
  amount: string;
}

type PublicKeyDef = {
  type: string;
  value: string;
}

type VestingPeriod = {
  length: string;
  amount: CoinHolding[];
}

type AccountValue = {
    "address": string,
    "coins": CoinHolding[],
    "public_key": PublicKeyDef,
    "account_number": string,
    "sequence": string,
    "original_vesting": CoinHolding[],
    "delegated_free": CoinHolding[],
    "delegated_vesting": CoinHolding[],
    "end_time": string,
    "start_time": string,
    "vesting_periods": VestingPeriod[]
}

type AccountResult = {
    "type": string,
    "value": AccountValue
  }

type ApiResponse<T> = {
    "height": string,
    "result": T
  }

type Price = {
  market_id: string;
  price: string;
}
