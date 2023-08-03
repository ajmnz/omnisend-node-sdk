/* eslint-disable import/order */
import { OmnisendCore } from "./OmnisendCore";
import type { OmnisendOptions } from "./types";

// Model imports
import { Batches as batchesBatches } from "./batches/Batches";
import { Campaigns as campaignsCampaigns } from "./campaigns/Campaigns";
import { Carts as cartsCarts } from "./carts/Carts";
import { Categories as categoriesCategories } from "./categories/Categories";
import { Contacts as contactsContacts } from "./contacts/Contacts";
import { Events as eventsEvents } from "./events/Events";
import { Orders as ordersOrders } from "./orders/Orders";
import { Products as productsProducts } from "./products/Products";
// End model imports

export class Omnisend extends OmnisendCore {
  // Model declarations
  public batches: batchesBatches;
  public campaigns: campaignsCampaigns;
  public carts: cartsCarts;
  public categories: categoriesCategories;
  public contacts: contactsContacts;
  public events: eventsEvents;
  public orders: ordersOrders;
  public products: productsProducts;
  // End model declarations

  constructor(options: OmnisendOptions) {
    super(options);

    // Model instances
    this.batches = new batchesBatches(this.httpClient);
    this.campaigns = new campaignsCampaigns(this.httpClient);
    this.carts = new cartsCarts(this.httpClient);
    this.categories = new categoriesCategories(this.httpClient);
    this.contacts = new contactsContacts(this.httpClient);
    this.events = new eventsEvents(this.httpClient);
    this.orders = new ordersOrders(this.httpClient);
    this.products = new productsProducts(this.httpClient);
    // End model instances
  }
}
