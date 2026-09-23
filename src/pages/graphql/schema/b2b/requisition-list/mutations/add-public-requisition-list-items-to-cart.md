---
title: addPublicRequisitionListItemsToCart mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Fragment src="/includes/commerce-only.md"/>

# addPublicRequisitionListItemsToCart mutation

<Fragment src="/includes/scp-b2b-mutation.md" />

The `addPublicRequisitionListItemsToCart` mutation adds items from a public requisition list, identified by its share token, to a cart. Omit `item_uids` to add every item in the list to the cart. Items that the caller is not permitted to view or purchase are skipped and reported as `RESTRICTED_PRODUCT` errors rather than failing the entire request.

<InlineAlert variant="info" slots="text" />

This mutation does not require a customer authentication token. Guests must supply a `cart_id` obtained from the [`createGuestCart`](../../../cart/mutations/create-guest-cart.md) mutation.

## Syntax

```graphql
{
    addPublicRequisitionListItemsToCart(
        input: AddPublicRequisitionListItemsToCartInput!
    ): AddPublicRequisitionListItemsToCartOutput
}
```

## Reference

The [`addPublicRequisitionListItemsToCart`](/reference/graphql/saas/mutations.md#addpublicrequisitionlistitemstocart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds two items from a public requisition list to a guest cart.

**Request:**

```graphql
mutation AddPublicRequisitionListItemsToCart {
    addPublicRequisitionListItemsToCart(
        input: {
            token: "qEJD2aUhmYnf1jNoaOtlo7XwBP8BRof5GhF0L5kbdJxYMZ13OlFvy2VFy33NnUCp"
            cart_id: "Rz3OrE0R8fajxHK5simIkwm4uvWDXlYt"
            item_uids: ["NDEw", "NDEx"]
        }
    ) {
        cart {
            items {
                uid
                product {
                    sku
                    name
                }
            }
        }
        user_errors {
            code
            message
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "addPublicRequisitionListItemsToCart": {
      "cart": {
        "items": [
          {
            "uid": "OA==",
            "product": {
              "sku": "Augusta",
              "name": "Augusta"
            }
          }
        ]
      },
      "user_errors": []
    }
  }
}
```
