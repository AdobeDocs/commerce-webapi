---
title: Step 4. Create a quote
description: In this step of the tutorial you will create a quote
--- 
 
# Step 4. Create a quote

When a customer adds an item to their shopping cart for the first time, Adobe Commerce creates a quote. Commerce uses a quote to perform tasks such as

*  Track each item the customer wants to buy, including the quantity and base cost
*  Gather information about the customer, including billing and shipping addresses
*  Determine shipping costs
*  Calculate the subtotal, add costs (shipping fees, taxes, etc.) and apply coupons to determine the grand total
*  Determine the payment method
*  Place the order so that the merchant can fulfill it.

### Types of carts

Commerce identifies three types of users that can create a shopping cart:

*  An admin user can create a cart on behalf of a customer. For all admin requests, you must provide an admin authorization token in the call's authorization header.
*  A logged-in customer. Calls to create a cart and add items must contain the customer's authorization token in the authorization header.
*  A guest user. These users could be customers who haven't logged in yet, or they could be users who have no intention of creating an account. An anonymous user's cart is called a guest cart.

### Create a cart for a logged-in customer

All calls for a logged in customer must specify customer's token `q0u66k8h42yaevtchv09uyy3y9gaj2ap` in the header.

<InlineAlert variant="info" slots="text"/>

Use the `V1/guest-carts` endpoint to create a cart on behalf of a guest. Do not include an authorization token. The `quoteId` for the guest customer quote will be masked.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/carts/mine`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <customer token>`

**Payload:**

None

**Response:**

The response is the `quoteId: 4`

<InlineAlert variant="success" slots="text"/>

Some calls refer to this parameter as the `cartId`.

### Verify this step

There are no additional verification steps.`quoteId` values are not displayed on the website or in Admin.
