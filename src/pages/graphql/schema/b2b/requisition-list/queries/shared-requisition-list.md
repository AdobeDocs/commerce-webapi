---
title: sharedRequisitionList query
edition: saas
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# sharedRequisitionList query

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `sharedRequisitionList` query allows B2B customers to retrieve a shared Requisition List using a token, including sender details and associated items in a read-only format. The mutation requires `token` as input parameter. This query returns a `sender_name` and `requisition_list` object.

## Syntax

```graphql
{
    sharedRequisitionList(
        token: String!
    ): SharedRequisitionListOutput
}
```

## Example usage

The following example opens a shared requisition list by specifying the shared token.

**Request:**

```graphql
query SharedRequisitionList {
    sharedRequisitionList(
        token: "qEJD2aUhmYnf1jNoaOtlo7XwBP8BRof5GhF0L5kbdJxYMZ13OlFvy2VFy33NnUCp"
    ) {
        sender_name
        requisition_list {
            description
            name
            uid
            items(currentPage: 1, pageSize: 20) {
                total_pages
                items {
                    quantity
                    sku
                    uid
                    product {
                        attribute_set_id
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
    }
}
```

**Response:**

```json
{
  "data": {
    "sharedRequisitionList": {
      "sender_name": "Jane",
      "requisition_list": {
        "description": "Test RL sharing",
        "name": "Shared RL",
        "uid": "OTc5",
        "items": {
          "total_pages": 1,
          "items": [
            {
              "quantity": 2,
              "sku": "Augusta",
              "uid": "NDEw",
              "product": {
                "attribute_set_id": 4,
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
      }
    }
  }
}
```
