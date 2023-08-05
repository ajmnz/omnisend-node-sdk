import type { ContactsInput, ContactsOutput, PagingCursor } from "../data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Contacts<SecurityDataType = unknown, SafeMode extends true | false = false> {
  http: HttpClient<SecurityDataType, SafeMode>;

  constructor(http: HttpClient<SecurityDataType, SafeMode>) {
    this.http = http;
  }

  /**
   * @description `contactID` - contact's ID in our system
   *
   * @tags Contacts
   * @name GetContacts
   * @summary Get contact's info
   * @request GET:/contacts/{contactID}
   * @secure
   */
  getContacts = (contactId: string, params: RequestParams = {}) =>
    this.http.request<
      ContactsOutput,
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
      path: `/contacts/${contactId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update existing contact. Pass only fields you want to update. `contactID` - contact's ID in our system You can update contact: * by `contactID` in endpoint path. Example: `PATCH` [https://api.omnisend.com/v3/contacts/696969](https://api.omnisend.com/v3/contacts/696969) **Note:** - You can update any field, except `email` (`identifiers.id` value for type `email`). - `Phone` (`identifiers.id` value for type `phone`) will be added/updated **only** if it isn't assigned to another contact.
   *
   * @tags Contacts
   * @name PatchContactsContactId
   * @summary Update contact
   * @request PATCH:/contacts/{contactID}
   * @secure
   */
  patchContactsContactId = (
    contactId: string,
    data: object & ContactsInput,
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        /** @format email */
        email?: string;
        contactID: string;
        phone?: string;
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
      path: `/contacts/${contactId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Contacts
   * @name ListContacts
   * @summary List contacts
   * @request GET:/contacts
   * @secure
   */
  listContacts = (
    query?: {
      /**
       * Full email address.
       * @format email
       */
      email?: string;
      /** Email channel status. See endpoint description for available statuses. */
      status?: "subscribed" | "unsubscribed" | "nonSubscribed";
      /** Segment ID. */
      segmentID?: string;
      tag?: string;
      /**
       * Number of results to fetch. Default is 100, max 250.
       * @min 1
       * @max 250
       * @default 100
       */
      limit?: number;
      phone?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        contacts?: ContactsOutput[];
        paging?: PagingCursor;
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
      path: `/contacts`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create new contact.
   *
   * @tags Contacts
   * @name PostContacts
   * @summary Create contact
   * @request POST:/contacts
   * @secure
   */
  postContacts = (
    data: {
      /** Send welcome email (will be sent only if welcome workflow is turned on) or not. */
      sendWelcomeEmail?: boolean;
    } & ContactsInput,
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        /** @format email */
        email?: string;
        contactID: string;
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
      path: `/contacts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
