/* eslint-disable import/order */
import { OmnisendCore } from "./OmnisendCore";
import type { OmnisendOptions } from "./types";

// Model imports
import { Batches } from "./Batches";
import { Campaigns } from "./Campaigns";
import { Carts } from "./Carts";
import { Categories } from "./Categories";
import { Contacts } from "./Contacts";
import { Events } from "./Events";
import { Orders } from "./Orders";
import { Products } from "./Products";
// End model imports

export class Omnisend extends OmnisendCore {
  // Model declarations
  public batches: Batches;
  public campaigns: Campaigns;
  public carts: Carts;
  public categories: Categories;
  public contacts: Contacts;
  public events: Events;
  public orders: Orders;
  public products: Products;
  // End model declarations

  constructor(options: OmnisendOptions) {
    super(options);

    // Model instances
    this.batches = new Batches(this.httpClient);
    this.campaigns = new Campaigns(this.httpClient);
    this.carts = new Carts(this.httpClient);
    this.categories = new Categories(this.httpClient);
    this.contacts = new Contacts(this.httpClient);
    this.events = new Events(this.httpClient);
    this.orders = new Orders(this.httpClient);
    this.products = new Products(this.httpClient);
    // End model instances
  }
}
