import { HttpClient } from "./http-client";
import type { OmnisendOptions } from "./types";

export class OmnisendCore<S extends true | false> {
  /**
   * The http client instance
   */
  protected httpClient: HttpClient<unknown, S>;

  /**
   * The Omnisend API Key
   */
  private apiKey: string;

  /**
   * Debug flag
   */
  private debug: boolean;

  constructor(options: OmnisendOptions<S>) {
    this.apiKey = options.apiKey;
    this.debug = options.debug === true;

    this.log("Debugging is enabled");

    // Set up httpclient

    this.httpClient = new HttpClient<unknown, S>({
      safeMode: options.safeMode,
      headers: {
        "X-API-KEY": this.apiKey,
        "User-Agent": "ajmnz/omnisend-node-sdk",
      },
    });

    if (this.debug) {
      this.httpClient.instance.interceptors.request.use((c) => {
        this.log(`${c.method} ${c.url}`);
        return c;
      });
    }
  }

  /**
   * Logger for debug mode
   */
  private log(message: string) {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.log(`[Omnisend] ${message}`);
    }
  }
}
