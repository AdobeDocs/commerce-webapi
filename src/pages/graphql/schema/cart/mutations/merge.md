---
title: mergeCarts mutation
---

# mergeCarts mutation

The `mergeCarts` mutation transfers the contents of a guest cart into the cart of a logged-in customer. This mutation must be run on behalf of a logged-in customer.

If you do not specify a value for the `destination_cart_id` input argument, the mutation determines the customer's cart ID and uses that value.

The mutation retains any items that were already in the logged-in customer's cart. If both the guest and customer carts contain the same item, `mergeCarts` adds the quantities. Upon success, the mutation deletes the original guest cart.

<InlineAlert variant="info" slots="text" />

Use the [assignCustomerToGuestCart](assign-customer-to-guest-cart.md) mutation to assign the contents of a logged-in customer's cart to a guest cart.
Customer cart becomes inactive and the guest cart remains active.

## Syntax

```graphql
mutation {
    mergeCarts(
        source_cart_id: String!
        destination_cart_id: String
    ) {
        Cart!
    }
}
```

## Reference

The [`mergeCarts`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-mergeCarts) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

In the following example, the customer had one Overnight Duffle in the cart (`CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43`) before a guest cart (`mPKE05OOtcxErbk1Toej6gw6tcuxvT9O`) containing a Radiant Tee and another Overnight Duffle was merged. The cart now includes three items, including two Overnight Duffles.

**Request:**

```graphql
mutation {
  mergeCarts(
    source_cart_id: "mPKE05OOtcxErbk1Toej6gw6tcuxvT9O",
    destination_cart_id: "CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43"
  ) {
    items {
      id
      product {
        name
        sku
      }
      quantity
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "mergeCarts": {
      "items": [
        {
          "id": "14",
          "product": {
            "name": "Overnight Duffle",
            "sku": "24-WB07"
          },
          "quantity": 2
        },
        {
          "id": "17",
          "product": {
            "name": "Radiant Tee",
            "sku": "WS12"
          },
          "quantity": 1
        }
      ]
    }
  }
}
```

The following example executes the previous request without specifying `destination_cart_id`.

**Request:**

```graphql
mutation {
  mergeCarts(
    source_cart_id: "mPKE05OOtcxErbk1Toej6gw6tcuxvT9O"
  ) {
    items {
      id
      product {
        name
        sku
      }
      quantity
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "mergeCarts": {
      "items": [
        {
          "id": "14",
          "product": {
            "name": "Overnight Duffle",
            "sku": "24-WB07"
          },
          "quantity": 2
        },
        {
          "id": "17",
          "product": {
            "name": "Radiant Tee",
            "sku": "WS12"
          },
          "quantity": 1
        }
      ]
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Current user does not have an active cart.` | The `mergeCarts` mutation deactivates the guest cart specified in the `source_cart_id` after merging. The guest cannot make any further operations with it.
`Required parameter "source_cart_id" is missing` | The `source_cart_id` attribute contains an empty value.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table, or you tried to merge two guest carts.
`The current user cannot perform operations on cart` | The authorized customer tried to merge a guest cart into the cart of another customer.
`Could not create empty cart for customer` | The system could not create an empty cart for the logged-in customer
