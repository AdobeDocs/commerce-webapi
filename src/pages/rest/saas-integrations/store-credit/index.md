---
title: Store Credit
description: Learn how to retrieve customer store credit balances and which role resources the store credit REST endpoints require in Adobe Commerce as a Cloud Service.
keywords:
  - REST
  - Integration
---

<Fragment src="/_includes/saas-only.md"/>

# Store credit

Adobe Commerce as a Cloud Service has a separate role resource for using a customer's store credit. Admin users and integrations need the **Can Spend Store Credit** (`Magento_CustomerBalance::spend_balance`) resource to apply store credit to a cart and to place an order for a cart that already has store credit applied.

This resource is available in the [user role](https://experienceleague.adobe.com/en/docs/commerce-admin/systems/user-accounts/permissions-user-roles) and [integration resources](https://experienceleague.adobe.com/en/docs/commerce-admin/systems/integrations) under **Sales** > **Operations** > **Orders** > **Actions** > **Create** > **Can Spend Store Credit**.

The [**Manage Store Credit Balances** (`Magento_CustomerBalance::manage_balance`)](https://experienceleague.adobe.com/en/docs/commerce-admin/customers/customer-accounts/store-credit/store-credit-using) resource allows users to view and update the store credit balances in the Admin. Admin users and integrations also need this resource to [retrieve a customer's store credit balance](#retrieve-a-customers-store-credit-balance) through REST.

## Authentication

The following endpoints require an admin or integration [bearer token](../../authentication/index.md).

Customers apply their own store credit with the `applyStoreCreditToCart` GraphQL mutation and place the order with the `placeOrder` mutation, which do not require access to these resources.

## REST API reference

| Method | URL | Description | Role resources |
|--------|-----|-------------|----------------|
| GET | `/V1/customers/:customerId/balance` | Retrieve the customer's store credit balance | `Magento_CustomerBalance::manage_balance` |
| POST | `/V1/carts/:cartId/balance/apply` | Apply the customer's store credit to the cart | `Magento_Cart::manage` and `Magento_CustomerBalance::spend_balance` |
| PUT | `/V1/carts/:cartId/order` | Place an order for the cart | `Magento_Cart::manage`. If store credit is applied to the cart, also `Magento_CustomerBalance::spend_balance`. |

### Retrieve a customer's store credit balance

`GET /V1/customers/:customerId/balance` returns the store credit balance of the specified customer.

You do not specify a website in the request. Commerce uses the website of the store in the request context.

The response contains the following fields:

| Field | Type | Description |
|---|---|---|
| `amount` | Number | The balance amount |
| `balance_id` | Integer | The balance ID |
| `base_currency_code` | String | The base currency code |
| `customer_id` | Integer | The customer ID |
| `website_id` | Integer | The ID of the website that the balance belongs to |

### Apply store credit to a cart

`POST /V1/carts/:cartId/balance/apply` applies the customer cart's store credit balance, up to the cart total. The request has no body.

**Response (200):**

```json
true
```

### Place an order for a cart with store credit

Store credit can be applied to a cart by the customer on the storefront or by another admin user or integration. Commerce deducts it from the customer's balance when the order is placed, so `PUT /V1/carts/:cartId/order` requires `Magento_CustomerBalance::spend_balance` whenever the cart has store credit applied. Without the resource, the request returns `401`.

## Error handling

When the token's role does not include every required resource, the endpoints return `401`. A rejected apply request does not apply store credit, and a rejected order request does not create an order or change the customer's balance.

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

The `GET /V1/customers/:customerId/balance` endpoint returns the following errors:

| Status | Cause | Message |
|---|---|---|
| `400` | The customer does not exist. | `Please specify a valid customer.` |
| `401` | The request has no token or uses a customer token, or the token's role does not include `Magento_CustomerBalance::manage_balance`. | `The consumer isn't authorized to access %resources.` |
| `404` | The customer has no store credit balance on the website. | `No store credit balance found for customer %1 on website %2.` |
