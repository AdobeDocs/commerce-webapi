---
title: importSharedRequisitionList mutation
edition: saas
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# importSharedRequisitionList mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `importSharedRequisitionList` mutation Allows recipients within the same company to import or clone a shared Requisition List using a token. The mutation requires `token` as input parameter. This mutation returns a `requisition_list` object and `user_errors` if any.

## Syntax

```graphql
{
    importSharedRequisitionList(
        token: String!
    ): ImportSharedRequisitionListOutput
}
```

## Example usage

The following example shares a requisition list to the specified customer UIDs.

**Request:**

```graphql
mutation ImportSharedRequisitionList {
    importSharedRequisitionList(
        token: "Ra4yCcOAesVKIHNKuqUy6G3PMbcWt6HMohgcwDMXmnwrbB2SCeMMDPGlmDukDXGc"
    ) {
        requisition_list {
            description
            name
            uid
            items(currentPage: 1, pageSize: 20) {
                items {
                    quantity
                    sku
                    uid
                    product {
                        attribute_set_id
                        uid
                        name
                    }
                }
                page_info {
                    current_page
                    page_size
                    total_pages
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
    "importSharedRequisitionList": {
      "requisition_list": {
        "description": null,
        "name": "John's Favorites",
        "uid": "MTA5Nw==",
        "items": {
          "items": [
            {
              "quantity": 2,
              "sku": "Augusta",
              "uid": "NDgx",
              "product": {
                "attribute_set_id": 4,
                "uid": "MzQ3",
                "name": "Augusta"
              }
            }
          ],
          "page_info": {
            "current_page": 1,
            "page_size": 20,
            "total_pages": 1
          }
        }
      },
      "user_errors": []
    }
  }
}
```
