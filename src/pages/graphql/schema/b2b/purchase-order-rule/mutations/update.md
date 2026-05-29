---
title: updatePurchaseOrderApprovalRule mutation
description: The updatePurchaseOrderApprovalRule mutation updates the specified purchase order approval rule.
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# updatePurchaseOrderApprovalRule mutation

The `updatePurchaseOrderApprovalRule` mutation updates the specified purchase order approval rule.

You can use the [`customer` query](../../../customer/queries/customer.md) to retrieve the `uid` value of the approval rule.

The [`createPurchaseOrderApprovalRule` mutation](create.md) describes the requirements of the `condition` and `approvers` fields.

## Syntax

```graphql
mutation {
    updatePurchaseOrderApprovalRule(
        input: UpdatePurchaseOrderApprovalRuleInput!
    ) {
        PurchaseOrderApprovalRule
    }
}
```

## Reference

The `updatePurchaseOrderApprovalRule` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updatePurchaseOrderApprovalRule)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updatePurchaseOrderApprovalRule)

## Headers

A valid [customer authentication token](../../../customer/mutations/generate-token.md) is required.

## Example usage

The following example updates the purchase order approval rule.

**Request:**

``` graphql
mutation {
  updatePurchaseOrderApprovalRule(
    input: {
        uid: "Mg==",
        name: "Rule name updated",
        description: "Rule description",
        applies_to: [],
        status: ENABLED,
        condition: {
            attribute: GRAND_TOTAL,
            operator: MORE_THAN,
            amount: {
                value: 100.00,
                currency: EUR
            }
        }
    }
  ) {
    uid
    name
  }
}
```

**Response:**

``` json
{
  "data": {
    "updatePurchaseOrderApprovalRule": {
      "uid": "Mg==",
      "name": "Rule name updated"
    }
  }
}
```

