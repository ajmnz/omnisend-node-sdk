export interface OmnisendOptions<S extends true | false = false> {
  /**
   * Your Omnisend API Key
   *
   * To get your API key go to {@link https://app.omnisend.com/#/my-account/integrations/api-keys}
   */
  apiKey: string;

  /**
   * Enable debug logging. Useful to troubleshoot errors.
   * @default false
   */
  debug?: boolean;

  /**
   * Enable safe mode.
   *
   * In safe mode, requests will never throw an error and instead the result will
   * be a discriminated union consisting of an object containing either the successfully
   * received data or the error response.
   *
   * @default false
   */
  safeMode?: S;
}
