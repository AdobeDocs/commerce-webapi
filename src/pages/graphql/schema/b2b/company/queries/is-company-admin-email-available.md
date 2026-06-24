---
title: isCompanyAdminEmailAvailable query
description: The isCompanyAdminEmailAvailable query checks whether the specified email can be used to create a company administrator account. If the email matches an ex...
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# isCompanyAdminEmailAvailable query

The `isCompanyAdminEmailAvailable` query checks whether the specified email can be used to create a company administrator account. If the email matches an existing customer or another company administrator account, the query returns a `false` value. A value of `true` indicates the email address can be used to create a company administrator account.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

`isCompanyAdminEmailAvailable ( email String! ) IsCompanyAdminEmailAvailableOutput`

## Reference

The `isCompanyAdminEmailAvailable` reference provides detailed information about the types and fields defined in this query.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#iscompanyadminemailavailable)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#iscompanyadminemailavailable)

## Example usage

The following example checks whether the email address `roni_cost@example.com` can be used to create a company administrator account.

**Request:**

```graphql
query{
  isCompanyAdminEmailAvailable(email: "roni_cost@example.com"){
    is_email_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isCompanyAdminEmailAvailable": {
      "is_email_available": false
    }
  }
}
```

## Related topics

*  [isCompanyEmailAvailable query](is-company-email-available.md)
*  [isCompanyUserEmailAvailable query](is-company-user-email-available.md)
