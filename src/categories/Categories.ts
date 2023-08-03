import type { CategoryOutput, CategoryPartial, PagingLink } from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Categories<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Products
   * @name GetCategoriesCategoryId
   * @summary Get category
   * @request GET:/categories/{categoryID}
   * @secure
   */
  getCategoriesCategoryId = (categoryId: string, params: RequestParams = {}) =>
    this.http.request<
      CategoryOutput,
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
      path: `/categories/${categoryId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Replace category. Pass all category info. Not passed fields will be deleted. For example if `createdAt` won't be passed, it will be overwritten with current date.
   *
   * @tags Products
   * @name PutCategories
   * @summary Replace category
   * @request PUT:/categories/{categoryID}
   * @secure
   */
  putCategories = (
    categoryId: string,
    data: CategoryPartial,
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        categoryID?: string;
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
      path: `/categories/${categoryId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete category
   *
   * @tags Products
   * @name DeleteCategory
   * @summary Delete category
   * @request DELETE:/categories/{categoryID}
   * @secure
   */
  deleteCategory = (categoryId: string, params: RequestParams = {}) =>
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
      path: `/categories/${categoryId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description **Sorting:** | **Parameter** | **Sort order** | **Description** | | --- | ---| --- | |title|ASC|Category title| | createdAt | DESC | Category creation date - recent first | | updatedAt | DESC | Category update date - recent first |
   *
   * @tags Products
   * @name GetCategories
   * @summary List categories
   * @request GET:/categories
   * @secure
   */
  getCategories = (
    query?: {
      sort?: string;
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
        categories?: CategoryOutput[];
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
      path: `/categories`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create new category.
   *
   * @tags Products
   * @name PostCategories
   * @summary Create category
   * @request POST:/categories
   * @secure
   */
  postCategories = (
    data: {
      categoryID: string;
    } & CategoryPartial,
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        categoryID?: string;
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
      path: `/categories`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
