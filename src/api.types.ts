type DenomAmount = {
  denom: string;
  amount: string;
}

type PublicKeyDef = {
  type: string;
  value: string;
}

type VestingPeriod = {
  length: string;
  amount: DenomAmount[];
}

type AccountValue = {
    "address": string,
    "coins": DenomAmount[],
    "public_key": PublicKeyDef,
    "account_number": string,
    "sequence": string,
    "original_vesting": DenomAmount[],
    "delegated_free": DenomAmount[],
    "delegated_vesting": DenomAmount[],
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

type DenomInfo = {
  denom: string;
  displayPrice: string;
  totalDollars: number;
  totalTokens: number;
  liquidDollars: number;
  lockedDollars: number;
}
