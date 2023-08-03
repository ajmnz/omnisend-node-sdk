import type { PagingLink } from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Batches<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description ## Examples ## **Batch post contacts** ```json { "method": "POST", "endpoint": "contacts", "items": [ { "identifiers": [ { "type":"email", "id": "vanessa.kensington@example.com", "channels": { "email": { "status": "subscribed", "statusDate": "2019-05-30T14:11:12Z" } } } ] }, { "identifiers": [ { "type":"email", "id": "vanessa@example.com", "channels": { "email": { "status": "subscribed", "statusDate": "2019-05-30T14:11:12Z" } } } ], "firstName":"Vanessa" } ] } ``` **Batch post events (trigger event)** ```json { "method": "POST", "endpoint": "events", "eventID":"5a3a57235ff78f4307346af5", "items": [ { "email": "test@example.com", "phone": "+12025550142", "fields": { "size": "M", "bust": 100, "waterproof": true, "packageWeight": 12.2, "manualUrl": "http://www.example.com/uploads/prodManual.pdf", "validUntil": "2017-05-30T14:11:12Z" } }, { "email": "test2@example.com", "fields": { "size": "M", "bust": 100, "waterproof": true, "packageWeight": 12.2, "manualUrl": "http://www.example.com/uploads/prodManual.pdf", "validUntil": "2017-05-30T14:11:12Z" } } ] } ``` **Batch put products** ```json { "endpoint": "products", "method": "PUT", "items": [ { "productID": "123", "currency": "EUR", "title": "Book1", "productUrl": "https://mystore.com/book1", "variants": [ { "variantID": "abc", "title": "Book1", "price": 5 } ], "imageUrl": "https://mystore.com/book1.jpg" }, { "productID": "456", "currency": "EUR", "title": "Book2", "productUrl": "https://mystore.com/book2", "variants": [ { "variantID": "cde", "title": "Book2", "price": 23 } ], "imageUrl": "https://mystore.com/book2.jpg" } ] } ```
   *
   * @tags Batches
   * @name PostBatches
   * @summary Create batch
   * @request POST:/batches
   * @secure
   */
  postBatches = (
    data: {
      method?: string;
      endpoint?: "contacts" | "orders" | "products" | "events" | "categories";
      eventID?: string;
      items?: {
        param?: string;
      }[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        batchID?: string;
        totalCount?: number;
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
      path: `/batches`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get list of `batches`. List of batches is available for `7 days`. Query parameter `endpoint` is required. You can list batches with endpoint for which API Key has permission.
   *
   * @tags Batches
   * @name GetBatches
   * @summary List batches
   * @request GET:/batches
   * @secure
   */
  getBatches = (
    query: {
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
      status?: "pending" | "inProgress" | "finished" | "stopped";
      /**
       * Batch creation date from. Format: YYYY-MM_DD
       * @format date
       */
      dateFrom?: string;
      /**
       * Batch creation date to. Format: YYYY-MM_DD
       * @format date
       */
      dateTo?: string;
      /** API key needs to have permission to read this endpoint */
      endpoint: "contacts" | "orders" | "products" | "events" | "categories";
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        batches?: {
          batchID: string;
          method?: string;
          endpoint?: string;
          eventID?: string;
          status: "pending" | "inProgress" | "finished";
          /**
           * Batch creation date
           * @format date-time
           */
          createdAt: string;
          /**
           * Batch start date
           * @format date-time
           */
          startedAt?: string;
          /**
           * Batch finish date.
           * @format date-time
           */
          endedAt?: string;
          /**
           * Count of operations.
           * @min 2
           */
          totalCount?: number;
          /** Finished operations count, including finished with errors. */
          finishedCount?: number;
          /** Finished with errors operations count. */
          errorsCount?: number;
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
      path: `/batches`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get `batch` info. Batch will be removed after `7 days`. You can get `batch` info, only if API Key has permission to view batch endpoint.
   *
   * @tags Batches
   * @name GetBatch
   * @summary Get batch
   * @request GET:/batches/{batchID}
   * @secure
   */
  getBatch = (batchId: string, params: RequestParams = {}) =>
    this.http.request<
      {
        batchID?: string;
        method?: string;
        endpoint?: string;
        eventID?: string;
        status?: "pending" | "inProgress" | "finished";
        /**
         * Batch creation date
         * @format date-time
         */
        createdAt?: string;
        /**
         * Batch start date
         * @format date-time
         */
        startedAt?: string;
        /**
         * Batch finish date.
         * @format date-time
         */
        endedAt?: string;
        /**
         * Count of operations.
         * @min 2
         */
        totalCount?: number;
        /** Finished operations count, including finished with errors. */
        finishedCount?: number;
        /** Finished with errors operations count. */
        errorsCount?: number;
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
      path: `/batches/${batchId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Batches
   * @name GetBatchBatchIdItems
   * @summary List batch items
   * @request GET:/batches/{batchID}/items
   * @secure
   */
  getBatchBatchIdItems = (batchId: string, params: RequestParams = {}) =>
    this.http.request<
      {
        batchID: string;
        method?: string;
        endpoint?: string;
        eventID?: string;
        status: "pending" | "inProgress" | "finished";
        /**
         * Batch creation date
         * @format date-time
         */
        createdAt: string;
        /**
         * Batch start date.
         * @format date-time
         */
        startedAt?: string;
        /**
         * Batch finish date.
         * @format date-time
         */
        endedAt?: string;
        /**
         * Total count of items.
         * @min 2
         */
        totalCount?: number;
        /** Finished items count, including finished with errors. */
        finishedCount?: number;
        /** Finished with errors items count. */
        errorsCount?: number;
        errors?: {
          itemID?: string;
          request?: object;
          responseCode?: number;
          /** JSON response. Same as one request result (see each endpoint method's response). */
          response?: object;
          status?: string;
        }[];
        responses?: {
          itemID?: string;
          request?: object;
          responseCode?: number;
          /** JSON response. Same as one request result (see each endpoint method's response). */
          response?: object;
          status?: string;
        }[];
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
      path: `/batches/${batchId}/items`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Batches
   * @name GetBatchBatchIdItemsItemId
   * @summary Get batch item
   * @request GET:/batches/{batchID}/items/{itemID}
   * @secure
   */
  getBatchBatchIdItemsItemId = (
    batchId: string,
    itemId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        batchID: string;
        method?: string;
        endpoint?: string;
        eventID?: string;
        itemID?: string;
        request?: object;
        responseCode?: number;
        /** JSON response. Same as one request result (see each endpoint method's response). */
        response?: object;
        status?: string;
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
      path: `/batches/${batchId}/items/${itemId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
