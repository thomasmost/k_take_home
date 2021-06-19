
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
      return;
    }
    if (response.status === 500) {
      // Normally we would do some kind of UI error handling here
      console.log('Unexpected error')
      return;
    }
    const data = await response.json();
    alert(JSON.stringify(data));
    return {
      data,
    };
  }

  public static async getAccount() {
    return this.get('auth/accounts/kava1vlpsrmdyuywvaqrv7rx6xga224sqfwz3fyfhwq');
  }

  public static async getPrices() {
    return this.get('pricefeed/prices');
  }
}
