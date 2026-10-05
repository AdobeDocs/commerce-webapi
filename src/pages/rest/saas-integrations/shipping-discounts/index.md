---
title: Custom Shipping Discounts
description: Learn how to apply, retrieve, and remove a custom shipping discount on a cart with the admin REST API in Adobe Commerce as a Cloud Service.
keywords:
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# Custom shipping discounts

The custom shipping discounts let an administrator or integration apply an arbitrary discount to the shipping amount of a specific cart. Use it for cases that do not fit a cart price rule, such as a goodwill credited to an individual shopper.

If a discount fits a rule-based pattern, use a [cart price rule](https://experienceleague.adobe.com/en/docs/commerce-admin/marketing/promotions/cart-rules/price-rules-cart) instead.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/V1/carts/:cartId/shipping-discount` | Retrieve the active custom shipping discount on the cart. |
| `POST` | `/V1/carts/:cartId/shipping-discount` | Apply a custom shipping discount to the cart, or replace the existing one. |
| `DELETE` | `/V1/carts/:cartId/shipping-discount` | Remove the custom shipping discount from the cart. |

All three endpoints require an admin or integration token with the `Magento_ShippingDiscountApi::manage` role.

The `:cartId` value must identify an active cart. If the cart does not exist or has already been converted to an order, the endpoints return HTTP status `404`.

## Apply a shipping discount

The `POST /V1/carts/:cartId/shipping-discount` endpoint applies a custom shipping discount to the cart and immediately recalculates the cart totals.

The request body contains the following fields:

| Field | Type | Description |
| --- | --- | --- |
| `amount` | Float | Required. The discount amount, in the cart's currency, not the store's base currency. The value must be greater than zero, both as submitted and after Commerce converts it to the base currency with the cart's exchange rate. |
| `reason` | String | Required. The reason for the discount, such as `goodwill credit`. Maximum 255 characters. The reason is stored for auditing and is not shown to the customer. |

A cart can have only one custom shipping discount. If the cart already has one, a new `POST` request replaces the existing amount and reason instead of adding a second discount.

### Example: apply a shipping discount

Request:

```bash
curl -X POST "https://<host>/rest/V1/carts/42/shipping-discount" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <admin-token>" \
     -d '{"amount": 2.00, "reason": "goodwill credit"}'
```

A successful request returns HTTP status `200`.

## Retrieve a shipping discount

The `GET /V1/carts/:cartId/shipping-discount` endpoint returns the active custom shipping discount on the cart.

### Example: retrieve a shipping discount

Request:

```bash
curl -X GET "https://<host>/rest/V1/carts/42/shipping-discount" \
     -H "Authorization: Bearer <admin-token>"
```

Response:

```json
{
  "cart_id": 42,
  "amount": 2.00,
  "base_amount": 2.00,
  "applied_amount": 2.00,
  "base_applied_amount": 2.00,
  "reason": "goodwill credit",
  "actor_user_id": 7,
  "actor_user_type": 2
}
```

The response contains the following fields:

| Field | Description |
| --- | --- |
| `cart_id` | The ID of the cart that the discount applies to. |
| `amount` | The requested discount amount, in the cart's currency. |
| `base_amount` | The requested discount amount, converted to the store's base currency. |
| `applied_amount` | The amount actually deducted from shipping during the last totals calculation, in the cart's currency. See [How Commerce applies the discount](#how-commerce-applies-the-discount). |
| `base_applied_amount` | The amount actually deducted from shipping during the last totals calculation, in the store's base currency. |
| `reason` | The reason supplied when the discount was applied. |
| `actor_user_id` | The ID of the admin user or integration that applied the discount. Interpret this value together with `actor_user_type`, because admin user IDs and integration IDs can overlap. |
| `actor_user_type` | The type of caller that applied the discount: `1` for an integration or `2` for an admin user. |

If the cart has no active custom shipping discount, the endpoint returns HTTP status `404`.

## Remove a shipping discount

The `DELETE /V1/carts/:cartId/shipping-discount` endpoint removes the custom shipping discount from the cart and recalculates the cart totals. If the cart has no discount, the request still succeeds.

### Example: remove a shipping discount

Request:

```bash
curl -X DELETE "https://<host>/rest/V1/carts/42/shipping-discount" \
     -H "Authorization: Bearer <admin-token>"
```

A successful request returns HTTP status `200`.

## How Commerce applies the discount

Commerce reapplies the custom shipping discount each time it recalculates the cart totals, so the discount persists when the cart changes. The following rules apply:

- The applied amount never exceeds the remaining shipping amount. If a cart price rule already discounts shipping, the custom discount applies only to the shipping amount that remains. In this case, `applied_amount` is less than `amount`.
- The cart totals (`GET /V1/carts/:cartId/totals`) include a separate **Shipping Discount** total segment with the `admin_shipping_discount` code.
- The discount is added to the cart and order discount amount, with the **Shipping Discount** label in the discount description. The **Shipping & Handling** amount continues to show the full shipping amount before the discount.

## Apply a shipping discount during an order edit

You can apply a custom shipping discount when you [edit an order](../order-management/index.md#edit-orders). Call `POST /V1/carts/:cartId/shipping-discount` with the cart ID that `POST /V1/orders/{orderId}/edit/start` returns, then submit the edit. If order edit history comments are enabled, Commerce adds a comment to the replacement order when the edit applies, changes, or removes a custom shipping discount. The comment shows the applied amount, which can be less than the requested amount.

When you edit an order that already has a custom shipping discount, Commerce carries the discount forward to the new edit cart. The discount remains on the order across subsequent edits until you remove it with `DELETE /V1/carts/:cartId/shipping-discount`.

## Errors

| HTTP status | Cause |
| --- | --- |
| `400` | The `amount` is zero, negative, too large, or too small to store, either as submitted or after conversion to the base currency, or the `reason` exceeds 255 characters. |
| `400` | The cart has more than one shipping address. |
| `400` | Another request is modifying the shipping discount on the cart, or the cart is being placed as an order. |
| `401` | The request does not include an admin or integration token, the token is a customer or guest token, or the token does not have the `Magento_ShippingDiscountApi::manage` role resource. |
| `404` | The cart does not exist or is no longer active, or (for `GET`) the cart has no active custom shipping discount. |
