---
title: shareRequisitionListByToken mutation
edition: saas
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# shareRequisitionListByToken mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `shareRequisitionListByToken` mutation enables B2B customers to share a Requisition List with colleagues within the same company via a shareable link generated on the storefront. The mutation requires `requisitionListUid` as input parameter. This mutation returns a token associated with the Requisition list which is being shared.

## Syntax

```graphql
{
    shareRequisitionListByToken(
        requisitionListUid: ID!
    ): ShareRequisitionListByTokenOutput
}
```

## Example usage

The following example provides a token for a requisition list which is being shared.

**Request:**

```graphql
mutation ShareRequisitionListByToken {
    shareRequisitionListByToken(requisitionListUid: "OTc5") {
        token
    }
}
```

**Response:**

```json
{
  "data": {
    "shareRequisitionListByToken": {
      "token": "qEJD2aUhmYnf1jNoaOtlo7XwBP8BRof5GhF0L5kbdJxYMZ13OlFvy2VFy33NnUCp"
    }
  }
}
```
