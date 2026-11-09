---
title: Source-Level Inventory Reservations
description: Nominate an inventory source on cart items, read per-source availability, and track reservations.
keywords:
  - GraphQL
  - Integration
  - Inventory
---

# Source-level inventory reservations

Source-level inventory reservations allow shoppers and backends to commit a cart line to inventory sources before checkout, such as a store for pickup, a preferred warehouse, or a ship-from-store location. Use this feature to build buy online, pick up in store (BOPIS) and other nominated-source experiences.

A nomination is the designation of which inventory source, such as a specific store or warehouse, that should fulfill a specific cart or order item.

Inventory Management holds stock at the stock level and selects a source only at shipment. Source-level reservations keep the inventory hold, the order placement guard, and the physical deduction aligned to the nominated source. Cart items without a nomination are unaffected. They continue to use native Inventory Management, which creates a stock-level reservation and selects a source at shipment through the source selection algorithm.

Storefront interaction uses the following:

- [`setNominatedSourceOnCartItems` mutation](mutations/set-nominated-source-on-cart-items.md) sets or clears the nominated source on cart items.
- [`sourceAvailability` query](mutations/set-nominated-source-on-cart-items.md#read-availability-and-saleability) reports availability per source.
- [`stockAvailability` query](queries/stock-availability.md) reports the stock-level salable quantity and Add to Cart eligibility per SKU.
- [`nominated_source` and `nominated_source_errors` cart item fields](mutations/set-nominated-source-on-cart-items.md#read-nomination-fields-on-cart-items) report the live state of a nomination on any cart item.
