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

A customer authentication token is optional. Guests must supply the `cart_id` of a guest cart obtained from the [`createGuestCart`](../../../cart/mutations/create-guest-cart.md) mutation. When a valid customer authentication token is provided, the mutation operates on that customer's own cart instead, and catalog-permission checks (including shared catalog grants) are evaluated against the authenticated customer's own customer group rather than the guest group.

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

### Add items to a guest cart

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

### Add items to a logged-in customer's cart

The following example adds two items from a public requisition list to the cart of an authenticated customer. Send the customer's [authentication token](../../../customer/mutations/generate-token.md) in the `Authorization` header, and specify the `cart_id` of that customer's own cart. Because the caller is authenticated, catalog-permission checks (including shared catalog grants) are evaluated against this customer's own customer group instead of the guest group.

**Request:**

```graphql
mutation AddPublicRequisitionListItemsToCart {
    addPublicRequisitionListItemsToCart(
        input: {
            token: "qEJD2aUhmYnf1jNoaOtlo7XwBP8BRof5GhF0L5kbdJxYMZ13OlFvy2VFy33NnUCp"
            cart_id: "8Zn6VYaFAyO7WYlj9NLPTolKk3G4dh1o"
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
          },
          {
            "uid": "OQ==",
            "product": {
              "sku": "24-WB03",
              "name": "Driven Backpack"
            }
          }
        ]
      },
      "user_errors": []
    }
  }
}
```
