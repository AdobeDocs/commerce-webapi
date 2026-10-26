---
title: Store Credit
description: Learn which role resources the store credit cart REST endpoints require in Adobe Commerce as a Cloud Service.
keywords:
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# Store credit

Adobe Commerce as a Cloud Service has a separate role resource for spending a customer's store credit. Admin users and integrations need the **Can Spend Store Credit** (`Magento_CustomerBalance::spend_balance`) resource to apply store credit to a cart and to place an order for a cart that already has store credit applied.

In the role and integration editors, the resource is under **Sales** > **Operations** > **Orders** > **Actions** > **Create** > **Can Spend Store Credit**.

The **Manage Store Credit Balances** (`Magento_CustomerBalance::manage_balance`) resource controls viewing and updating store credit balances in the Admin. The endpoints on this page do not use it. For the Admin behavior of both resources, see [Apply store credit](https://experienceleague.adobe.com/en/docs/commerce-admin/customers/customer-accounts/store-credit/store-credit-using) in the _Admin Guide_.

## Authentication

The endpoints on this page require an admin or integration [bearer token](../../authentication/index.md).

Customers apply their own store credit with the `applyStoreCreditToCart` GraphQL mutation and place the order with the `placeOrder` mutation. These requests do not check the role resources on this page.

## REST API reference

| Method | URL | Description | Role resources |
|--------|-----|-------------|----------------|
| POST | `/V1/carts/:cartId/balance/apply` | Apply the customer's store credit to the cart | `Magento_Cart::manage` and `Magento_CustomerBalance::spend_balance` |
| PUT | `/V1/carts/:cartId/order` | Place an order for the cart | `Magento_Cart::manage`. If store credit is applied to the cart, also `Magento_CustomerBalance::spend_balance`. |

### Apply store credit to a cart

`POST /V1/carts/:cartId/balance/apply` applies the store credit balance of the cart's customer, up to the cart total. The request has no body.

**Response (200):**

```json
true
```

### Place an order for a cart that has store credit applied

Store credit can be applied to a cart by the customer on the storefront or by another admin user or integration. Commerce deducts it from the customer's balance when the order is placed, so `PUT /V1/carts/:cartId/order` requires `Magento_CustomerBalance::spend_balance` whenever the cart has store credit applied. Without the resource, the request returns `401`.

## Error handling

When the token's role does not include every required resource, the endpoint returns `401`. A rejected apply request does not apply store credit, and a rejected order request does not create an order or change the customer's balance.

```json
{
  "message": "The consumer isn't authorized to access %resources.",
  "parameters": {
    "resources": "Magento_CustomerBalance::spend_balance"
  }
}
```

When the role includes `Magento_Cart::manage` but not `Magento_CustomerBalance::spend_balance`, the `resources` parameter depends on the request:

| Request | `resources` value |
|---|---|
| `POST /V1/carts/:cartId/balance/apply` | `Magento_Cart::manage, Magento_CustomerBalance::spend_balance` |
| `PUT /V1/carts/:cartId/order` for a cart that has store credit applied | `Magento_CustomerBalance::spend_balance` |

If the role does not include `Magento_Cart::manage`, the request is rejected before store credit is checked. The `resources` value is then `Magento_Cart::manage` for the order request, and the same as in the table for the apply request.
