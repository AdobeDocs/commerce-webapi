---
title: Cart queries
---

# Cart queries

The `cart` query returns the content of the shopper's cart. Adobe Commerce returns [`Cart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-Cart) object. This object is also returned by numerous mutations, including those that add products to the cart and prepare a cart for checkout.

When Inventory Management is installed and configured, you can use the `pickupLocations` query to help a shopper determine whether their order can be picked up at a physical location. This query is most useful when the shopper has selected one or more items for purchase.
