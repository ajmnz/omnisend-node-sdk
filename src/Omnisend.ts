/* eslint-disable import/order */
import { OmnisendCore } from "./OmnisendCore";
import type { OmnisendOptions } from "./types";

// Model imports
import { Batches } from "./spec/Batches";
import { Campaigns } from "./spec/Campaigns";
import { Carts } from "./spec/Carts";
import { Categories } from "./spec/Categories";
import { Contacts } from "./spec/Contacts";
import { Events } from "./spec/Events";
import { Orders } from "./spec/Orders";
import { Products } from "./spec/Products";
// End model imports

export class Omnisend<S extends true | false = false> extends OmnisendCore<S> {
  // Model declarations
  public batches: Batches<unknown, S>;
  public campaigns: Campaigns<unknown, S>;
  public carts: Carts<unknown, S>;
  public categories: Categories<unknown, S>;
  public contacts: Contacts<unknown, S>;
  public events: Events<unknown, S>;
  public orders: Orders<unknown, S>;
  public products: Products<unknown, S>;
  // End model declarations

  constructor(options: OmnisendOptions<S>) {
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
