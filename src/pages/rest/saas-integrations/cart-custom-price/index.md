---
title: Cart Item Custom Price
description: Learn how to set a custom price on a cart item with the custom_price extension attribute on the add and update cart item REST endpoints.
keywords:
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# Cart item custom price

The cart item custom price capability lets admins and integrations override the catalog price of an item in Adobe Commerce as a Cloud Service by using the `custom_price` extension attribute with the add and update cart item REST endpoints.

These endpoints are designed for:

*  Integrations that set prices calculated outside of Commerce
*  Admin workflows, such as editing an order, that change the price of a cart line

## Authentication

All requests that include `custom_price` require an admin or integration [bearer token](../../authentication/index.md). Requests that include `custom_price` with a customer token are rejected. Guest cart endpoints are not available in Adobe Commerce as a Cloud Service.

## Limitations

*  **Bundle products with dynamic pricing** — Not supported, because the price is calculated from the prices of their child products. Bundle products with fixed pricing are supported.
*  **B2B negotiable quotes** — Not supported. Use [`PUT /V1/negotiableQuote/:quoteId`](../../b2b/negotiable-update.md) to set negotiated prices.

## REST API reference

| Method | URL | Description |
|--------|-----|-------------|
| POST | `/V1/carts/:cartId/items` | Add an item to the cart at a custom price |
| PUT | `/V1/carts/:cartId/items/:itemId` | Change the price of an item that is already in the cart |
| GET | `/V1/carts/:cartId/items` | Retrieve cart items, including `custom_price` |
| GET | `/V1/carts/:cartId` | Retrieve the cart, including `custom_price` on each item |

### Field reference

The `custom_price` attribute is part of the `extension_attributes` object of the `cartItem` payload.

| Field | Type | Valid values | Required |
|---|---|---|---|
| `extension_attributes.custom_price` | float | >= 0. A value of `0` adds the item for free. | Optional. When omitted, the item uses the catalog price. |
| `item_id` | int | ID of an existing cart line | Required to change the price of an item that is already in the cart |

### Add an item at a custom price

`POST /V1/carts/:cartId/items` adds a new item to the cart and applies the custom price to each unit.

**Request body:**

```json
{
  "cartItem": {
    "sku": "t-shirt",
    "qty": 1,
    "quote_id": 17,
    "extension_attributes": {
      "custom_price": 15.00
    }
  }
}
```

**Response (200):**

Returns the cart item with the applied price in `extension_attributes.custom_price`.

### Change the price of an existing cart item

`PUT /V1/carts/:cartId/items/:itemId` changes the price of a cart line. Use `GET /V1/carts/:cartId/items` to find the `item_id` of the line.

<InlineAlert variant="info" slots="text" />

If you add a product that is already in the cart with a `custom_price` but without an `item_id`, the request is rejected and the existing cart line is left unchanged. To add units to an existing line at a new price, send its `item_id` with the new total quantity.

**Request body:**

```json
{
  "cartItem": {
    "item_id": 8,
    "sku": "hat",
    "qty": 1,
    "quote_id": 17,
    "extension_attributes": {
      "custom_price": 5.00
    }
  }
}
```

**Response (200):**

Returns the cart item with the applied price in `extension_attributes.custom_price`.

### Retrieve custom prices

`GET /V1/carts/:cartId/items` and `GET /V1/carts/:cartId` return the `custom_price` for each cart item.

**Response (200):**

Each cart item that has a custom price includes it in the `extension_attributes` object.

```json
{
  "item_id": 8,
  "sku": "hat",
  "qty": 1,
  "extension_attributes": {
    "custom_price": 5
  }
}
```

## Error handling

If a request fails for any reason, the cart is left exactly as it was before the request. A successful response always means that the custom price was applied.

| Condition | Error message |
|---|---|
| The token is not an admin or integration token | `Setting a custom price is not permitted for this account.` |
| The price is negative or not a finite number | `custom_price must be a finite, non-negative number.` |
| The product is a bundle with dynamic pricing | `custom_price is not supported for this product type.` |
| The cart is a B2B negotiable quote | `custom_price is not supported on a negotiable quote. Use the negotiable quote API to set negotiated prices.` |
| The product is already in the cart and no `item_id` is supplied | `This product is already on the cart. To change the price of that line, supply its item_id; ...` |
| The price could not be applied after the item was saved, for example because the product was deleted or disabled during the request | `The item could not be added with the requested custom price.` |

Non-numeric `custom_price` values, such as `"not-a-price"`, are rejected by REST type validation with a `400` response before the price check runs.
