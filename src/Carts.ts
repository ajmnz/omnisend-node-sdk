import type { CartModel, CartModelFull, PagingLink } from "./data-contracts";
import type { HttpClient, RequestParams } from "./http-client";
import { ContentType } from "./http-client";

export class Carts<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Carts
   * @name GetCartsCartId
   * @summary Get cart
   * @request GET:/carts/{cartID}
   * @secure
   */
  getCartsCartId = (cartId: string, params: RequestParams = {}) =>
    this.http.request<
      {
        contactID?: string;
      } & CartModelFull,
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
      path: `/carts/${cartId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Replace (update) existing cart. All stored cart data will be overwriten with request data. This method used to replace cart with all its products - use it if you are posting full cart data.
   *
   * @tags Carts
   * @name PutCartsCartId
   * @summary Replace existing cart
   * @request PUT:/carts/{cartID}
   * @secure
   */
  putCartsCartId = (cartId: string, data: CartModel, params: RequestParams = {}) =>
    this.http.request<
      {
        cartID: string;
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
      path: `/carts/${cartId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update cart. Use to update cart info - add products or update existing in cart products.
   *
   * @tags Carts
   * @name PatchCartsCartId
   * @summary Update cart
   * @request PATCH:/carts/{cartID}
   * @secure
   */
  patchCartsCartId = (
    cartId: string,
    data: {
      /**
       * ISO currency code
       * @minLength 3
       * @maxLength 3
       */
      currency: string;
      /** In cents, without commas, etc. For example for 1.25 USD - 125 */
      cartSum: number;
      /** @format uri */
      cartRecoveryUrl?: string;
      products?: {
        /** Product identificator in cart */
        cartProductID: string;
        productID?: string;
        /** Product modification identificator */
        variantID?: string;
        sku?: string;
        title?: string;
        description?: string;
        /**
         * Only whole number.
         * @min 1
         */
        quantity?: number;
        /**
         * Final price in cents (with discount, wit taxes, etc.), without commas, etc. For example for 1.25 USD - 125.
         * @min 0
         */
        price?: number;
        /**
         * In cents, without commas, etc. For example for 1.25 USD - 125
         * @min 0
         */
        oldPrice?: number;
        /** Discount sum in cents. */
        discount?: number;
        /**
         * Link to product image
         * @format uri
         */
        imageUrl?: string;
        /**
         * Link to product page
         * @format uri
         */
        productUrl?: string;
      }[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        cartID: string;
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
      path: `/carts/${cartId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete cart. **Curl example:** ```php curl -X DELETE "https://api.omnisend.com/v3/carts/47841398" ```
   *
   * @tags Carts
   * @name DeleteCartsCartId
   * @summary Delete cart
   * @request DELETE:/carts/{cartID}
   * @secure
   */
  deleteCartsCartId = (cartId: string, params: RequestParams = {}) =>
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
      path: `/carts/${cartId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description **Sorting:** | **Parameter** | **Sort order** | **Description** | | --- | ---| --- | | createdAt | DESC | sort by cart creation date - newest first | | updatedAt | DESC | sort by cart update date - newest first | | cartSum | DESC | sort by cart total sum - biggest on top |
   *
   * @tags Carts
   * @name GetCarts
   * @summary List carts
   * @request GET:/carts
   * @secure
   */
  getCarts = (
    query?: {
      sort?: string;
      /** @format email */
      email?: string;
      phone?: string;
      contactID?: string;
      segmentID?: string;
      /**
       * Cart creation date from. Format: YYYY-MM-DD
       * @format date
       */
      dateFrom?: string;
      /**
       * Cart creation date to. Format: YYYY-MM-DD
       * @format date
       */
      dateTo?: string;
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
      /**
       * Cart update date from. Format: YYYY-MM-DD
       * @format date
       */
      updatedFrom?: string;
      /**
       * Cart update date from. Format: YYYY-MM-DD
       * @format date
       */
      updatedTo?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        carts?: ({
          contactID?: string;
        } & CartModelFull)[];
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
      path: `/carts`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description While posting new cart `email` or/and `contactID` must be provided.
   *
   * @tags Carts
   * @name PostCarts
   * @summary Create new cart
   * @request POST:/carts
   * @secure
   */
  postCarts = (data: CartModelFull, params: RequestParams = {}) =>
    this.http.request<
      {
        cartID: string;
        /** @format email */
        email: string;
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
      path: `/carts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Add product to cart.
   *
   * @tags Carts
   * @name PostCartsCartIdProducts
   * @summary Add product to cart
   * @request POST:/carts/{cartID}/products
   * @secure
   */
  postCartsCartIdProducts = (
    cartId: string,
    data: {
      /**
       * ISO currency code
       * @minLength 3
       * @maxLength 3
       */
      currency: string;
      /** Product identificator in cart */
      cartProductID: string;
      productID: string;
      /** Product modification identificator */
      variantID: string;
      sku?: string;
      title: string;
      description?: string;
      /**
       * Only whole number.
       * @min 1
       */
      quantity: number;
      /**
       * In cents, without commas, etc. For example for 1.25 USD - 125
       * @min 0
       */
      price: number;
      /**
       * In cents, without commas, etc. For example for 1.25 USD - 125
       * @min 0
       */
      oldPrice?: number;
      /** Discount sum in cents. */
      discount?: number;
      /**
       * Link to product image
       * @format uri
       */
      imageUrl?: string;
      /**
       * Link to product page
       * @format uri
       */
      productUrl?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        cartID: string;
        cartProductID: string;
        productID: string;
        variantID: string;
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
      path: `/carts/${cartId}/products`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Replace existing product (change quantity, price or whole product)
   *
   * @tags Carts
   * @name PutCartsCartIdProductsCartProductId
   * @summary Replace product
   * @request PUT:/carts/{cartID}/products/{cartProductID}
   * @secure
   */
  putCartsCartIdProductsCartProductId = (
    cartId: string,
    cartProductId: string,
    data: {
      /**
       * ISO currency code
       * @minLength 3
       * @maxLength 3
       */
      currency: string;
      productID: string;
      /** Product modification identificator */
      variantID: string;
      sku?: string;
      title: string;
      description?: string;
      /**
       * Only whole number.
       * @min 1
       */
      quantity: number;
      /**
       * In cents, without commas, etc. For example for 1.25 USD - 125
       * @min 0
       */
      price: number;
      /**
       * In cents, without commas, etc. For example for 1.25 USD - 125
       * @min 0
       */
      oldPrice?: number;
      /** Discount sum in cents. */
      discount?: number;
      /**
       * Link to product image
       * @format uri
       */
      imageUrl?: string;
      /**
       * Link to product page
       * @format uri
       */
      productUrl?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        cartID: string;
        cartProductID: string;
        productID: string;
        variantID: string;
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
      path: `/carts/${cartId}/products/${cartProductId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update product in cart - change quantity, price, etc. Pass only fields, you want to update.
   *
   * @tags Carts
   * @name PatchCartsCartIdProductsCartProductId
   * @summary Update product
   * @request PATCH:/carts/{cartID}/products/{cartProductID}
   * @secure
   */
  patchCartsCartIdProductsCartProductId = (
    cartId: string,
    cartProductId: string,
    data: {
      /**
       * ISO currency code
       * @minLength 3
       * @maxLength 3
       */
      currency?: string;
      productID?: string;
      /** Product modification identificator */
      variantID?: string;
      sku?: string;
      title?: string;
      description?: string;
      /**
       * Only whole number.
       * @min 1
       */
      quantity?: number;
      /**
       * In cents, without commas, etc. For example for 1.25 USD - 125
       * @min 0
       */
      price?: number;
      /**
       * In cents, without commas, etc. For example for 1.25 USD - 125
       * @min 0
       */
      oldPrice?: number;
      /** Discount sum in cents. */
      discount?: number;
      /**
       * Link to product image
       * @format uri
       */
      imageUrl?: string;
      /**
       * Link to product page
       * @format uri
       */
      productUrl?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        cartID: string;
        cartProductID: string;
        productID: string;
        variantID: string;
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
      path: `/carts/${cartId}/products/${cartProductId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Remove product from cart. **Curl example:** ```php curl -X DELETE "https://api.omnisend.com/v3/carts/47841398/products/prod478541" ```
   *
   * @tags Carts
   * @name DeleteCartsCartIdProductsCartProductId
   * @summary Remove product from cart
   * @request DELETE:/carts/{cartID}/products/{cartProductID}
   * @secure
   */
  deleteCartsCartIdProductsCartProductId = (
    cartId: string,
    cartProductId: string,
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
      path: `/carts/${cartId}/products/${cartProductId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
