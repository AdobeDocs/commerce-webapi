---
title: deletePurchaseOrderApprovalRule mutation
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# deletePurchaseOrderApprovalRule mutation

The `deletePurchaseOrderApprovalRule` mutation deletes one or more purchase order approval rules.

You can use the [`customer` query](../../../customer/queries/customer.md) to retrieve the `uid` value of the approval rule.

If the mutation is successful, it returns null. Otherwise, the response contains details about any errors encountered.

## Syntax

```graphql
mutation {
    deletePurchaseOrderApprovalRule(
        input: DeletePurchaseOrderApprovalRuleInput!
    ) {
        DeletePurchaseOrderApprovalRuleOutput
    }
}
```

## Reference

The `deletePurchaseOrderApprovalRule` reference provides detailed information about the types and fields defined in this mutation.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-deletePurchaseOrderApprovalRule)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deletePurchaseOrderApprovalRule)

## Headers

A valid [customer authentication token](../../../customer/mutations/generate-token.md) is required.

## Example usage

The following example deletes the purchase order approval rule.

**Request:**

``` graphql
mutation {
  deletePurchaseOrderApprovalRule(
    input: {
        approval_rule_uids: ["Mg=="]
    }
  ) {
    errors {
        message
        type
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "deletePurchaseOrderApprovalRule": {
      "errors": []
    }
  }
}
```
