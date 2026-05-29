---
title: sharedRequisitionList query
description: This query is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Edition slots="text" backgroundcolor="green"/>

[SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# sharedRequisitionList query

<InlineAlert variant="info" slots="text1" />

This query is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `sharedRequisitionList` query uses a token to retrieve a shared requisition list. The response can contain the `sender_name` and `requisition_list` object.

## Syntax

```graphql
{
    sharedRequisitionList(
        token: String!
    ): SharedRequisitionListOutput
}
```

[//]: # (## Reference)
[//]: # ()
[//]: # (The [`sharedRequisitionList`]&#40;https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-sharedRequisitionList&#41; reference provides detailed information about the types and fields defined in this query.)

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

