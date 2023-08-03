import type { CampaignFull, CampaignPartial, PagingLink } from "./data-contracts";
import type { HttpClient, RequestParams } from "./http-client";

export class Campaigns<
  SecurityDataType = unknown,
  SafeMode extends true | false = false,
> {
  http: HttpClient<SecurityDataType, SafeMode>;

  constructor(http: HttpClient<SecurityDataType, SafeMode>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Campaigns
   * @name GetCampaignsCampaignId
   * @summary Get campaign's info
   * @request GET:/campaigns/{campaignID}
   * @secure
   */
  getCampaignsCampaignId = (campaignId: string, params: RequestParams = {}) =>
    this.http.request<
      CampaignFull,
      | {
          /** @default "Bad Request - invalid parameters, fields or filters" */
          error?: string;
        }
      | {
          /** @default "Unauthorized - authorization error (invalid basic auth data or API key)" */
          error?: string;
        }
      | {
          /** @default "Forbidden – The server understood the request, but is refusing it (blocked due to many errors in particular time) or the access is not allowed." */
          error?: string;
        }
      | {
          /** @default " Not found – There is no resource behind the URI." */
          error?: string;
        }
      | {
          /** @default "Request timeout" */
          error?: string;
        }
      | {
          /** @default "Unprocessable Entity – used if the server cannot process the enitity, e.g. mandatory fields are missing in the payload." */
          error?: string;
        }
      | {
          /** @default " to many requests (rate limit) - current " */
          error?: string;
        }
    >({
      path: `/campaigns/${campaignId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Curl example:** ```php curl -X DELETE "https://api.omnisend.com/v3/campaigns/59099010597ed74f6635fb14" ``` **Note**: only `sent` and `draft` campaigns cant be deleted.
   *
   * @tags Campaigns
   * @name DeleteCampaignsCampaignId
   * @summary Delete campaign
   * @request DELETE:/campaigns/{campaignID}
   * @secure
   */
  deleteCampaignsCampaignId = (campaignId: string, params: RequestParams = {}) =>
    this.http.request<
      void,
      | {
          /** @default "Bad Request - invalid parameters, fields or filters" */
          error?: string;
        }
      | {
          /** @default "Unauthorized - authorization error (invalid basic auth data or API key)" */
          error?: string;
        }
      | {
          /** @default "Forbidden – The server understood the request, but is refusing it (blocked due to many errors in particular time) or the access is not allowed." */
          error?: string;
        }
      | {
          /** @default " Not found – There is no resource behind the URI." */
          error?: string;
        }
      | {
          /** @default "Request timeout" */
          error?: string;
        }
      | {
          /** @default "Unprocessable Entity – used if the server cannot process the enitity, e.g. mandatory fields are missing in the payload." */
          error?: string;
        }
      | {
          /** @default " to many requests (rate limit) - current " */
          error?: string;
        }
    >({
      path: `/campaigns/${campaignId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Campaigns
   * @name GetCampaigns
   * @summary List campaigns
   * @request GET:/campaigns
   * @secure
   */
  getCampaigns = (
    query?: {
      sort?: string;
      /** See method description for available statuses. */
      status?: "draft" | "paused" | "scheduled" | "inProgress" | "sent";
      /** See method description for available types. */
      type?: string;
      /**
       * Number of results to skip. Default is 0.
       * @min 0
       * @default 0
       */
      offset?: number;
      /**
       * Number of results to fetch. Default is 100, max 250.
       * @min 1
       * @max 250
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        campaigns?: CampaignPartial[];
        paging?: PagingLink;
      },
      | {
          /** @default "Bad Request - invalid parameters, fields or filters" */
          error?: string;
        }
      | {
          /** @default "Unauthorized - authorization error (invalid basic auth data or API key)" */
          error?: string;
        }
      | {
          /** @default "Forbidden – The server understood the request, but is refusing it (blocked due to many errors in particular time) or the access is not allowed." */
          error?: string;
        }
      | {
          /** @default " Not found – There is no resource behind the URI." */
          error?: string;
        }
      | {
          /** @default "Request timeout" */
          error?: string;
        }
      | {
          /** @default "Unprocessable Entity – used if the server cannot process the enitity, e.g. mandatory fields are missing in the payload." */
          error?: string;
        }
      | {
          /** @default " to many requests (rate limit) - current " */
          error?: string;
        }
    >({
      path: `/campaigns`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Campaigns
   * @name GetCampaignsCampaignIdContactsContactId
   * @summary Get campaign's contact
   * @request GET:/campaigns/{campaignID}/contacts/{contactID}
   * @secure
   */
  getCampaignsCampaignIdContactsContactId = (
    campaignId: string,
    contactId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        /** @format email */
        email?: string;
        contactID?: string;
        sent?: boolean;
        opened?: boolean;
        clicked?: boolean;
        bounced?: boolean;
        complained?: boolean;
        unsubscribed?: boolean;
      },
      | {
          /** @default "Bad Request - invalid parameters, fields or filters" */
          error?: string;
        }
      | {
          /** @default "Unauthorized - authorization error (invalid basic auth data or API key)" */
          error?: string;
        }
      | {
          /** @default "Forbidden – The server understood the request, but is refusing it (blocked due to many errors in particular time) or the access is not allowed." */
          error?: string;
        }
      | {
          /** @default " Not found – There is no resource behind the URI." */
          error?: string;
        }
      | {
          /** @default "Request timeout" */
          error?: string;
        }
      | {
          /** @default "Unprocessable Entity – used if the server cannot process the enitity, e.g. mandatory fields are missing in the payload." */
          error?: string;
        }
      | {
          /** @default " to many requests (rate limit) - current " */
          error?: string;
        }
    >({
      path: `/campaigns/${campaignId}/contacts/${contactId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description There is ability to get campaign contacts which `opened` email, `clicked` on links in email, `unsubsribed`, `complained` or `bounced`. Just pass query parameter with value **true**. **Example**: https://api.omnisend.com/v3/campaigns/59099010597ed74f6635fb14/contacts?**clicked=true**
   *
   * @tags Campaigns
   * @name GetCampaignsCampaignIdContacts
   * @summary List campaign contacts
   * @request GET:/campaigns/{campaignID}/contacts
   * @secure
   */
  getCampaignsCampaignIdContacts = (
    campaignId: string,
    query?: {
      clicked?: true | false;
      opened?: true | false;
      unsubscribed?: true | false;
      bounced?: true | false;
      complained?: true | false;
      /**
       * Number of results to skip. Default is 0.
       * @min 0
       * @default 0
       */
      offset?: number;
      /**
       * Number of results to fetch. Default is 100, max 250.
       * @min 1
       * @max 250
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        contacts?: {
          /** @format email */
          email?: string;
          contactID?: string;
          sent?: boolean;
          opened?: boolean;
          clicked?: boolean;
          bounced?: boolean;
          complained?: boolean;
          unsubscribed?: boolean;
        }[];
        paging?: PagingLink;
      },
      | {
          /** @default "Bad Request - invalid parameters, fields or filters" */
          error?: string;
        }
      | {
          /** @default "Unauthorized - authorization error (invalid basic auth data or API key)" */
          error?: string;
        }
      | {
          /** @default "Forbidden – The server understood the request, but is refusing it (blocked due to many errors in particular time) or the access is not allowed." */
          error?: string;
        }
      | {
          /** @default " Not found – There is no resource behind the URI." */
          error?: string;
        }
      | {
          /** @default "Request timeout" */
          error?: string;
        }
      | {
          /** @default "Unprocessable Entity – used if the server cannot process the enitity, e.g. mandatory fields are missing in the payload." */
          error?: string;
        }
      | {
          /** @default " to many requests (rate limit) - current " */
          error?: string;
        }
    >({
      path: `/campaigns/${campaignId}/contacts`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Start sending campaign emails - if campaign is in draft or scheduled mode.
   *
   * @tags Campaigns
   * @name PostCampaignsCampaignIdActionsStart
   * @summary Start sending campaign emails
   * @request POST:/campaigns/{campaignID}/actions/start
   * @secure
   */
  postCampaignsCampaignIdActionsStart = (
    campaignId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        campaignID: string;
      },
      | {
          /** @default "Bad Request - invalid parameters, fields or filters" */
          error?: string;
        }
      | {
          /** @default "Unauthorized - authorization error (invalid basic auth data or API key)" */
          error?: string;
        }
      | {
          /** @default "Forbidden – The server understood the request, but is refusing it (blocked due to many errors in particular time) or the access is not allowed." */
          error?: string;
        }
      | {
          /** @default " Not found – There is no resource behind the URI." */
          error?: string;
        }
      | {
          /** @default "Request timeout" */
          error?: string;
        }
      | {
          /** @default "Unprocessable Entity – used if the server cannot process the enitity, e.g. mandatory fields are missing in the payload." */
          error?: string;
        }
      | {
          /** @default " to many requests (rate limit) - current " */
          error?: string;
        }
    >({
      path: `/campaigns/${campaignId}/actions/start`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
