export interface OmnisendOptions {
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
}
