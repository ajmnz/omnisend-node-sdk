import type { PagingLink } from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Products<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Products
   * @name GetProductsProductId
   * @summary Get product's info
   * @request GET:/products/{productID}
   * @secure
   */
  getProductsProductId = (productId: string, params: RequestParams = {}) =>
    this.http.request<
      {
        productID: string;
        title: string;
        status?: "inStock" | "outOfStock" | "notAvailable";
        description?: string;
        /**
         * ISO currency code.
         * @minLength 3
         * @maxLength 3
         */
        currency: string;
        /**
         * Link to product page
         * @format uri
         */
        productUrl?: string;
        /** Product's vendor */
        vendor?: string;
        /** A categorization that a product can be tagged with, commonly used for filtering and searching. For example: book, virtualGood, music. It's not product category. */
        type?: string;
        /**
         * Product creation date-time.
         * @format date-time
         */
        createdAt?: string;
        /**
         * Product update date-time.
         * @format date-time
         */
        updatedAt?: string;
        tags?: string[];
        categoryIDs?: string[];
        images?: {
          imageID?: string;
          /** @format uri */
          url?: string;
          isDefault?: boolean;
          variantIDs?: string[];
        }[];
        variants?: {
          variantID: string;
          title: string;
          sku?: string;
          status?: "inStock" | "outOfStock" | "notAvailable";
          /**
           * In cents
           * @min 0
           */
          price?: number;
          /** In cents */
          oldPrice?: number;
          /**
           * Link to product page
           * @format uri
           */
          productUrl?: string;
          imageID?: string;
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
      path: `/products/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Replace product. Pass all product info. Not passed fields will be deleted. **Variants** At least one variant is required for each product. A variant can use the same **ID** (`productID`) and **title** (`title`) as the parent product.
   *
   * @tags Products
   * @name PutProductsProductId
   * @summary Replace product
   * @request PUT:/products/{productID}
   * @secure
   */
  putProductsProductId = (
    productId: string,
    data: {
      title: string;
      status: "inStock" | "outOfStock" | "notAvailable";
      description?: string;
      /**
       * ISO currency code.
       * @minLength 3
       * @maxLength 3
       */
      currency: string;
      /**
       * Link to product page
       * @format uri
       */
      productUrl?: string;
      /** Product's vendor */
      vendor?: string;
      /** A categorization that a product can be tagged with, commonly used for filtering and searching. For example: book, virtualGood, music. It's not product category. */
      type?: string;
      /**
       * Product creation date-time.
       * @format date-time
       */
      createdAt?: string;
      /**
       * Product update date-time.
       * @format date-time
       */
      updatedAt: string;
      tags?: string[];
      categoryIDs?: string[];
      /** @maxItems 10 */
      images?: {
        imageID: string;
        /** @format uri */
        url: string;
        isDefault?: boolean;
        variantIDs?: string[];
      }[];
      variants?: {
        variantID: string;
        title: string;
        status: "inStock" | "outOfStock" | "notAvailable";
        /**
         * In cents
         * @min 0
         */
        price: number;
        /** In cents */
        oldPrice?: number;
        /**
         * Link to product page
         * @format uri
         */
        productUrl?: string;
        /** @maxItems 10 */
        imageID?: string;
      }[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        productID?: string;
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
      path: `/products/${productId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description **Curl example:** ```php curl -X DELETE "https://api.omnisend.com/v3/products/prod478541" ```
   *
   * @tags Products
   * @name DeleteProductsProductId
   * @summary Delete product
   * @request DELETE:/products/{productID}
   * @secure
   */
  deleteProductsProductId = (productId: string, params: RequestParams = {}) =>
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
      path: `/products/${productId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description **Sorting:** | **Parameter** | **Sort order** | **Description** | | --- | ---| --- | | createdAt | DESC | Product creation date - recent first | | updatedAt | DESC | Product update date - recent first |
   *
   * @tags Products
   * @name GetProducts
   * @summary List products
   * @request GET:/products
   * @secure
   */
  getProducts = (
    query?: {
      sort?: string;
      vendor?: string;
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
        products?: {
          productID: string;
          title: string;
          status?: "inStock" | "outOfStock" | "notAvailable";
          description?: string;
          /**
           * ISO currency code.
           * @minLength 3
           * @maxLength 3
           */
          currency: string;
          /**
           * Link to product page
           * @format uri
           */
          productUrl?: string;
          /** Product's vendor */
          vendor?: string;
          /** A categorization that a product can be tagged with, commonly used for filtering and searching. For example: book, virtualGood, music. It's not product category. */
          type?: string;
          /**
           * Product creation date-time.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Product update date-time.
           * @format date-time
           */
          updatedAt?: string;
          tags?: string[];
          categoryIDs?: string[];
          images?: {
            imageID?: string;
            /** @format uri */
            url?: string;
            isDefault?: boolean;
            variantIDs?: string[];
          }[];
          variants?: {
            variantID: string;
            title: string;
            sku?: string;
            status?: "inStock" | "outOfStock" | "notAvailable";
            /**
             * In cents
             * @min 0
             */
            price?: number;
            /** In cents */
            oldPrice?: number;
            /**
             * Link to product page
             * @format uri
             */
            productUrl?: string;
            imageID?: string;
          }[];
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
      path: `/products`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create new product. **Variants** At least one variant is required for each product. A variant can use the same **ID** (`productID`) and **title** (`title`) as the parent product.
   *
   * @tags Products
   * @name PostProducts
   * @summary Create product
   * @request POST:/products
   * @secure
   */
  postProducts = (
    data: {
      /** Unique product identificator. */
      productID: string;
      title: string;
      status: "inStock" | "outOfStock" | "notAvailable";
      description?: string;
      /**
       * ISO currency code.
       * @minLength 3
       * @maxLength 3
       */
      currency: string;
      /**
       * Link to product page
       * @format uri
       */
      productUrl: string;
      /** Product's vendor */
      vendor?: string;
      /** A categorization that a product can be tagged with, commonly used for filtering and searching. For example: book, virtualGood, music. It's not product category. */
      type?: string;
      /**
       * Product creation date-time.
       * @format date-time
       */
      createdAt?: string;
      /**
       * Product update date-time.
       * @format date-time
       */
      updatedAt?: string;
      tags?: string[];
      categoryIDs?: string[];
      /** @maxItems 10 */
      images?: {
        imageID: string;
        /** @format uri */
        url: string;
        isDefault?: boolean;
        variantIDs?: string[];
      }[];
      variants: {
        variantID: string;
        title: string;
        sku?: string;
        status: "inStock" | "outOfStock" | "notAvailable";
        /**
         * In cents
         * @min 0
         */
        price: number;
        /** In cents */
        oldPrice?: number;
        /**
         * Link to product page
         * @format uri
         */
        productUrl?: string;
        /** @maxItems 10 */
        imageID?: string;
      }[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        productID?: string;
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
      path: `/products`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
