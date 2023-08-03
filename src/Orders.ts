import type { OrdersFull, OrdersOutput, PagingLink } from "./data-contracts";
import type { HttpClient, RequestParams } from "./http-client";
import { ContentType } from "./http-client";

export class Orders<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Orders
   * @name GetOrdersOrderId
   * @summary Get order's info
   * @request GET:/orders/{orderID}
   * @secure
   */
  getOrdersOrderId = (orderId: string, params: RequestParams = {}) =>
    this.http.request<
      OrdersOutput & OrdersFull,
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
      path: `/orders/${orderId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Replace (update) existing order. All stored order data will be overwriten with request data. This method used to replace order with all its data.
   *
   * @tags Orders
   * @name PutOrdersOrderId
   * @summary Replace order
   * @request PUT:/orders/{orderID}
   * @secure
   */
  putOrdersOrderId = (orderId: string, data: OrdersFull, params: RequestParams = {}) =>
    this.http.request<
      {
        orderID: string;
        /**
         * email or/and phone are required
         * @format email
         */
        email?: string;
        /** email or/and phone are required */
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
      path: `/orders/${orderId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update order status.
   *
   * @tags Orders
   * @name PatchOrdersOrderId
   * @summary Update order status
   * @request PATCH:/orders/{orderID}
   * @secure
   */
  patchOrdersOrderId = (
    orderId: string,
    data: {
      trackingCode?: string;
      courierTitle?: string;
      /** @format uri */
      courierUrl?: string;
      /** Please view description for available statuses. You need to map your status with our statuses. */
      paymentStatus?: string;
      /**
       * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
       * @format date-time
       */
      canceledDate?: string;
      cancelReason?: string;
      /** Please view description for available statuses. You need to map your status with our statuses. */
      fulfillmentStatus?: string;
      cartID?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        orderID: string;
        /**
         * email or/and phone are required
         * @format email
         */
        email?: string;
        /** email or/and phone are required */
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
      path: `/orders/${orderId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description **Curl example:** ```php curl -X DELETE "https://api.omnisend.com/v3/orders/4686288" ```
   *
   * @tags Orders
   * @name DeleteOrdersOrderId
   * @summary Delete order
   * @request DELETE:/orders/{orderID}
   * @secure
   */
  deleteOrdersOrderId = (orderId: string, params: RequestParams = {}) =>
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
      path: `/orders/${orderId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description **Sorting:** | **Parameter** | **Sort order** | **Description** | | --- | ---| --- | | createdAt | DESC | sort by order creation date - newest first | | updatedAt | DESC | sort by order update date - newest first | | orderSum | DESC | sort by order total sum - biggest on top |
   *
   * @tags Orders
   * @name GetOrders
   * @summary List orders
   * @request GET:/orders
   * @secure
   */
  getOrders = (
    query?: {
      sort?: string;
      /**
       * Email address.
       * @format email
       */
      email?: string;
      /** Phone number. */
      phone?: string;
      contactID?: string;
      cartID?: string;
      /**
       * Update date from. Format: YYYY-MM_DD
       * @format date-time
       */
      dateFrom?: string;
      /**
       * Update date to. Format: YYYY-MM-DD
       * @format date-time
       */
      dateTo?: string;
      paymentStatus?: string;
      fulfillmentStatus?: string;
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
        orders?: (OrdersOutput & OrdersFull)[];
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
      path: `/orders`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description While posting new order `email` or/and `phone` or/and `contactID` must be provided.
   *
   * @tags Orders
   * @name PostOrders
   * @summary Create new order
   * @request POST:/orders
   * @secure
   */
  postOrders = (
    data: {
      orderID: string;
      /**
       * email or/and phone or contactID are required
       * @format email
       */
      email?: string;
      /** email or/and phone or contactID are required */
      phone?: string;
      /** email or/and phone or contactID are required */
      contactID?: string;
    } & OrdersFull,
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        orderID: string;
        /**
         * email or/and phone are required
         * @format email
         */
        email?: string;
        /** email or/and phone are required */
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
      path: `/orders`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
