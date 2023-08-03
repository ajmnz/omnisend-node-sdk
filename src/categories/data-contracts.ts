/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Contacts Input
 * @example {"status":"ut sed consequat in","statusDate":"3179-01-31T22:48:45.912Z","sendWelcomeEmail":false,"customFields":{"key1":"laboris eiusmod","key2":"elit velit irure aute"},"country":"amet dolor dolore magna","lastName":"eu proident est elit","postCode":"voluptate sed consectetur laborum anim","gender":"m","address":"adipisicing irure","countryCode":"lab"}
 */
export interface ContactsInput {
  identifiers: IdentifierInput;
  firstName?: string;
  lastName?: string;
  /** Tags are labels you create to organize and manage your audience. When creating a new contact we strongly advice to add source tag, i.e. "source: shopify" */
  tags?: string[];
  country?: string;
  /**
   * ISO Country code. You can find all country codes in Guides part.
   * @minLength 2
   * @maxLength 2
   */
  countryCode?: string;
  state?: string;
  city?: string;
  /** Street, house number, apartment */
  address?: string;
  /** Contact's postal or zip code. */
  postalCode?: string;
  /**
   * m - male, f- female
   * @minLength 1
   * @maxLength 1
   */
  gender?: "m" | "f";
  /**
   * Format: YYYY-MM-DD. Example: 1981-11-05
   * @format date
   */
  birthdate?: string;
  /** You can add your own custom properties. Read more in https://api-docs.omnisend.com/reference/contacts#custom-properties */
  customProperties?: {
    name1?: string;
    name2?: number;
    name3?: number;
    name4?: boolean;
    name5?: string[];
  };
}

/**
 * Contacts Output
 * @example {"status":"id sunt minim dolore","statusDate":"3687-04-30T09:13:41.570Z","sendWelcomeEmail":true,"customFields":{"key1":"nulla","key2":"Lorem reprehenderit"},"sent":-27965585,"opened":89056999,"clicked":-19897697,"optInDate":"3847-12-04T12:54:35.117Z","doubleOptInDate":"3116-04-01T22:36:35.361Z","phone":"id","address":"nostrud off","email":"x55ZgsTtOIhk@ASGEoqSRF.jq","state":"aliqua sint veniam ipsum occaecat","lastName":"occaecat non commodo in","country":"dolore nisi amet","contactID":"Hiy6oqPq@aBebUorUQXRAQgbMLO.agqf"}
 */
export interface ContactsOutput {
  contactID?: string;
  identifiers?: IdentifierOutput;
  /**
   * Contacts creation date (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  createdAt?: string;
  firstName?: string;
  lastName?: string;
  /** Legal contact consents information */
  consents?: ConsentModel[];
  tags?: string[];
  country?: string;
  /**
   * ISO Country code (2 characters). You can find all country codes in Guides part.
   * @minLength 2
   * @maxLength 2
   */
  countryCode?: string;
  state?: string;
  city?: string;
  /** Street, house number,  apartment */
  address?: string;
  /** Contact's postal or zip code. */
  postalCode?: string;
  /**
   * m - male, f- female
   * @minLength 1
   * @maxLength 1
   */
  gender?: "m" | "f";
  /**
   * Example: 1981-11-05
   * @format date
   */
  birthdate?: string;
  customProperties?: {
    name1?: string;
    name2?: number;
    name3?: number;
    name4?: boolean;
    name5?: string[];
  };
}

/** Identifier Input */
export type IdentifierInput = {
  /** Email or phone value */
  id: string;
  /** Possible values: email, phone */
  type: "email" | "phone";
  /** Legal contact consent information */
  consent?: ConsentModel;
  channels: {
    /** Required, for type 'phone' */
    sms?: {
      /**
       * Channel status
       * @default "subscribed"
       */
      status?: "subscribed" | "unsubscribed" | "nonSubscribed";
      /** If not provided current time will be used as default */
      statusDate?: string;
    };
    /** Required, for type 'email' */
    email?: {
      /** @default "subscribed" */
      status?: "subscribed" | "unsubscribed" | "nonSubscribed";
      /** If not provided current time will be used as default */
      statusDate?: string;
    };
  };
}[];

/** Identifier Output */
export type IdentifierOutput = {
  id: string;
  type: string;
  channels: {
    email: {
      /** Email channel status */
      status: string;
      statusDate: string;
    };
    sms?: {
      /** SMS channel status */
      status: string;
      statusDate: string;
    };
  };
}[];

/** Paging Link */
export interface PagingLink {
  /**
   * Link to previous page results
   * @format uri
   */
  previous?: string;
  /**
   * Link to next page results
   * @format uri
   */
  next?: string;
  /** @default 0 */
  offset?: number;
  /**
   * Default - 100. Max - 250.
   * @min 1
   * @max 250
   * @default 100
   */
  limit?: number;
}

/** Orders Full */
export type OrdersFull = Orders & {
  billingAddress?: {
    firstName?: string;
    lastName?: string;
    company?: string;
    phone?: string;
    country?: string;
    /**
     * ISO country code
     * @minLength 2
     * @maxLength 2
     */
    countryCode?: string;
    state?: string;
    stateCode?: string;
    city?: string;
    address?: string;
    address2?: string;
    /** Contact's postal or zip code. */
    postalCode?: string;
  };
  shippingAddress?: {
    firstName?: string;
    lastName?: string;
    company?: string;
    phone?: string;
    country?: string;
    /**
     * ISO country code
     * @minLength 2
     * @maxLength 2
     */
    countryCode?: string;
    state?: string;
    stateCode?: string;
    city?: string;
    address?: string;
    address2?: string;
    /** Contact's postal or zip code. */
    postalCode?: string;
  };
  products?: {
    productID: string;
    sku?: string;
    /** Product variant identificator */
    variantID: string;
    variantTitle?: string;
    title: string;
    vendor?: string;
    /**
     * Only whole number.
     * @min 1
     */
    quantity: number;
    /**
     * Final price in cents (with discount, wit taxes, etc.), without commas, etc. For example for 1.25 USD - 125.
     * @min 0
     */
    price: number;
    /** Discount sum in cents. */
    discount?: number;
    weight?: number;
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
    categoryIDs?: string[];
    tags?: string[];
  }[];
};

/** Orders Output */
export type OrdersOutput = {
  orderID: string;
  /** @format email */
  email?: string;
  phone?: string;
  contactID?: string;
};

/** Orders partial */
export interface Orders {
  orderNumber?: number;
  cartID?: string;
  shippingMethod?: string;
  trackingCode?: string;
  courierTitle?: string;
  /** @format uri */
  courierUrl?: string;
  /** @format uri */
  orderUrl?: string;
  source?: string;
  tags?: string[];
  discountCode?: string;
  discountValue?: number;
  /** Can be `percentage`, `fixedAmount` or `freeShippping` */
  discountType?: string;
  /**
   * Currency ISO code
   * @minLength 3
   * @maxLength 3
   */
  currency: string;
  /** In cents */
  orderSum: number;
  /** In cents */
  subTotalSum?: number;
  /** Whether subTotalSum includes taxes */
  subTotalTaxIncluded?: boolean;
  /** In cents */
  discountSum?: number;
  /** In cents */
  taxSum?: number;
  /** In cents */
  shippingSum?: number;
  /**
   * Order creation date. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  createdAt: string;
  /**
   * Order update date. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  updatedAt?: string;
  /**
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  canceledDate?: string;
  cancelReason?: string;
  paymentMethod?: string;
  /** Please view description for available statuses. You need to map your status with our statuses. */
  paymentStatus?: string;
  /** Please view description for available statuses. You need to map your status with our statuses. */
  fulfillmentStatus?: string;
  contactNote?: string;
}

/** Campaign full */
export type CampaignFull = CampaignPartial & {
  /** Available for `abtest` type campaigns. 'Winner' information */
  abTestWinner?: {
    fromName?: string;
    subject?: string;
    /** @format date-time */
    startDate?: string;
    /** @format date-time */
    endDate?: string;
    /** Sent emails count */
    sent?: number;
    /** Clicked links in emails count */
    clicked?: number;
    /** Bounced emails count */
    bounced?: number;
    /** Complaints count */
    complained?: number;
    /** Opened emails count */
    opened?: number;
    /** Unsubscribed contacts count */
    unsubscribed?: number;
  };
  /** Available for `abtest` type campaigns */
  abTest?: {
    winner?: boolean;
    fromName?: string;
    subject?: string;
    /** @format date-time */
    startDate?: string;
    /** @format date-time */
    endDate?: string;
    /** Sent emails count */
    sent?: number;
    /** Clicked links in emails count */
    clicked?: number;
    /** Bounced emails count */
    bounced?: number;
    /** Complaints count */
    complained?: number;
    /** Opened emails count */
    opened?: number;
    /** Unsubscribed contacts count */
    unsubscribed?: number;
  }[];
  byDevices?: {
    opened?: {
      mobile?: number;
      desktop?: number;
      tablet?: number;
    };
    clicked?: {
      mobile?: number;
      desktop?: number;
      tablet?: number;
    };
  };
};

/**
 * Campaign partial
 * @example {"campaignID":"proident qui irure","status":"et Excepteur adipisicing esse","type":"ad tempor dolore","fromName":"aute reprehenderit eiusmod magna consequat","subject":"sed nostrud","creationDate":"3743-04-26T13:48:47.020Z","startDate":"4907-07-17T09:51:26.093Z","endDate":"3524-01-05T23:55:19.474Z","sent":-13858398,"clicked":-44343952,"bounced":-69456907,"comlained":-23298758,"opened":40832034,"unsubscribed":-22007960,"segments":[{},{"segmentID":"sunt ut labore"},{"segmentID":"sunt ad dolor"},{}]}
 */
export interface CampaignPartial {
  campaignID: string;
  name?: string;
  /** See `campaigns` method description for available statuses. */
  status: string;
  /** See `campaigns` method description for available types. */
  type: string;
  fromName?: string;
  subject?: string;
  url?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  /** Sent emails count */
  sent?: number;
  /** Opened emails count */
  opened?: number;
  /** Clicked links in emails count */
  clicked?: number;
  /** Bounced emails count */
  bounced?: number;
  /** Complaints count */
  complained?: number;
  /** Unsubscribed contacts count */
  unsubscribed?: number;
  /** If true - lists and segments will be empty - campaign sent to all subscribers */
  allSubscribers?: boolean;
  segments?: {
    segmentID?: string;
  }[];
}

/** Cart model */
export interface CartModel {
  /**
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  createdAt?: string;
  /**
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  updatedAt?: string;
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
     * Final price in cents (with discount, with taxes, etc.), without commas, etc. For example for 1.25 USD - 125.
     * @min 0
     */
    price: number;
    /**
     * old product price in cents (with discount, with taxes, etc.), without commas, etc. For example for 1.50 USD - 150.
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
}

/** Legal contact consent information */
export interface ConsentModel {
  /** Value of source where user provided consent */
  source?: string;
  /**
   * Date of when consent was provided
   * @format date-time
   */
  createdAt?: any;
  /** IP address of user */
  ip?: string;
  /** User agent of user */
  userAgent?: string;
}

/** Cart model - full */
export type CartModelFull = {
  cartID: string;
  /** @format email */
  email?: string;
  phone?: string;
  contactID?: string;
  /**
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  createdAt?: string;
  /**
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  updatedAt?: string;
} & CartModel;

/** Return ID - input */
export interface ReturnId {
  /**
   * Make operation synchronous and get back contactID
   * @default false
   */
  returnID?: boolean;
}

/** Category partial */
export interface CategoryPartial {
  title: string;
  /**
   * Creation date. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  createdAt?: string;
  /**
   * Update date. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  updatedAt?: string;
}

/** Category output */
export interface CategoryOutput {
  categoryID?: string;
  title?: string;
  /**
   * Creation date. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  createdAt?: string;
  /**
   * Update date. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. (example: 2017-05-30T14:11:12Z)
   * @format date-time
   */
  updatedAt?: string;
}

/** Paging cursor */
export interface PagingCursor {
  /**
   * Link to previous page results
   * @format uri
   */
  previous?: string;
  /**
   * Link to next page results
   * @format uri
   */
  next?: string;
  /**
   * Default - 100. Max - 250.
   * @min 1
   * @max 250
   * @default 100
   */
  limit?: number;
}

/**
 * Segments output
 * @example {"segmentID":"pariatur cupi","name":"Duis","description":"cillum pariatur voluptate sit","memberCount":88846055,"creationDate":"2008-02-19"}
 */
export interface SegmentsOutput {
  segmentID: string;
  name: string;
  description?: string;
  /** @min 0 */
  memberCount: number;
  /** @format date */
  creationDate: string;
}
