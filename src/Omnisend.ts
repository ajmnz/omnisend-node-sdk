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
