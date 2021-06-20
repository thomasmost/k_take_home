
export interface ApiResultSuccess<TData> {
  data: TData;
  error?: null;
}
export interface ApiResultFailure {
  data?: null;
  error: Error;
}

export abstract class ApiSvc {
  private static async get<TData = unknown>(
    path: string,
  ): Promise<ApiResultSuccess<TData> | ApiResultFailure> {
    const apiEndpoint = `https://api.kava.io/${path}`;
    const response = await fetch(apiEndpoint);
    if (response.status === 401) {
      console.log('Auth error');
      return {error: new Error('Auth error')};
    }
    if (response.status === 500) {
      // Normally we would do some kind of UI error handling here
      console.log('Unexpected error')
      return {error: new Error('Unexpected error')};
    }
    const data = await response.json();
    return {
      data,
    };
  }

  public static async getAccount() {
    return this.get<ApiResponse<AccountResult>>('auth/accounts/kava1vlpsrmdyuywvaqrv7rx6xga224sqfwz3fyfhwq');
  }

  public static async getPrices() {
    return this.get<ApiResponse<Price[]>>('pricefeed/prices');
  }
}
