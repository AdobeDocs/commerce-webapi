---
title: publicRequisitionList query
description: This query is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Fragment src="/includes/commerce-only.md"/>

# publicRequisitionList query

<Fragment src="/includes/scp-b2b-query.md" />

The `publicRequisitionList` query uses a share token to retrieve a requisition list that its owner has marked public. Unlike [`sharedRequisitionList`](shared-requisition-list.md), this query does not require the requester to be a customer authenticated in the same company as the list owner. The response can contain the `sender_name` and `requisition_list` object.

<InlineAlert variant="info" slots="text" />

This query does not require a customer authentication token. If the token is invalid or the list is no longer public, this query returns a GraphQL error.

## Syntax

```graphql
{
    publicRequisitionList(
        token: ID!
    ): PublicRequisitionListOutput
}
```

## Reference

The [`publicRequisitionList`](/reference/graphql/saas/index.md#publicrequisitionlist) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following example opens a public requisition list by specifying the share token.

**Request:**

```graphql
query PublicRequisitionList {
    publicRequisitionList(
        token: "qEJD2aUhmYnf1jNoaOtlo7XwBP8BRof5GhF0L5kbdJxYMZ13OlFvy2VFy33NnUCp"
    ) {
        sender_name
        requisition_list {
            description
            name
            uid
            is_public
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
    "publicRequisitionList": {
      "sender_name": "Jane",
      "requisition_list": {
        "description": "Test RL sharing",
        "name": "Shared RL",
        "uid": "OTc5",
        "is_public": true,
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
