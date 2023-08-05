import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Events<SecurityDataType = unknown, SafeMode extends true | false = false> {
  http: HttpClient<SecurityDataType, SafeMode>;

  constructor(http: HttpClient<SecurityDataType, SafeMode>) {
    this.http = http;
  }

  /**
   * @description Get custom event, created in Omnisend app.
   *
   * @tags Events
   * @name GetEventsEventId
   * @summary Get custom event
   * @request GET:/events/{eventID}
   * @secure
   */
  getEventsEventId = (eventId: string, params: RequestParams = {}) =>
    this.http.request<
      {
        eventID?: string;
        name?: string;
        systemName?: string;
        enabled?: boolean;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        launchedAt?: string;
        fields?: {
          name?: string;
          systemName?: string;
          type?: string;
          required?: boolean;
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
      path: `/events/${eventId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Trigger custom event to Omnisend. To make your custom automation flow to work you need: 1. Create a custom event in the [Omnisend application](https://app.omnisend.com) while adding custom `fields`. 2. Create flow(s) with that custom event. 3. Pass all required fields (`eventID`, `email`, `phone`), including the required custom `fields`, that you created in Step 2.
   *
   * @tags Events
   * @name PostEventsEventId
   * @summary Trigger custom event
   * @request POST:/events/{eventID}
   * @secure
   */
  postEventsEventId = (
    eventId: string,
    data: {
      /**
       * Email or phone number is required
       * @format email
       */
      email?: string;
      /** Email or phone number is required */
      phone?: string;
      /** customFields - pass only fields defined in Omnisend app. You can check defined fields, their types and requisiteness by using GET /events endpoint. */
      fields?: {
        key?: string;
      };
    },
    params: RequestParams = {}
  ) =>
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
      path: `/events/${eventId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Get custom events, created in Omnisend app.
   *
   * @tags Events
   * @name GetEvents
   * @summary List custom events
   * @request GET:/events
   * @secure
   */
  getEvents = (params: RequestParams = {}) =>
    this.http.request<
      {
        eventID?: string;
        name?: string;
        systemName?: string;
        enabled?: boolean;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        launchedAt?: string;
        fields?: {
          name?: string;
          systemName?: string;
          type?: string;
          required?: boolean;
        }[];
      }[],
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
      path: `/events`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Trigger (by event’s system name) or create event. If custom event doesn’t exist - it will be created with passed event’s fields. Custom event field types will be determined automatically*. If existing custom event will be triggered with additional fields - they will be added to custom event fields. If triggered existing custom event's field types will differ from existing ones, you’ll get an error. **Note:** numbers like 10, 10.00, 10.0 will be interpreted as **integers**. If you want custom event field to be interpreted as **float**, pass **10.01** or etc (number not with leading zeros).
   *
   * @tags Events
   * @name PostEvents
   * @summary Trigger or create custom event
   * @request POST:/events
   * @secure
   */
  postEvents = (
    data: {
      /** Event name */
      name?: string;
      /** Event system name */
      systemName: string;
      /**
       * Email or phone number is required
       * @format email
       */
      email?: string;
      /** Email or phone number is required */
      phone?: string;
      /** Event custom fields */
      fields?: {
        fieldSystemName?: string;
      };
    },
    params: RequestParams = {}
  ) =>
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
      path: `/events`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
