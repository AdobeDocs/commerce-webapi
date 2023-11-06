---
title: isCompanyEmailAvailable query
edition: b2b
---

# isCompanyEmailAvailable query

The `isCompanyEmailAvailable` query checks whether the specified email is valid for company registration. The specified email can be the same as an existing customer or company administrator. If the email matches an existing company email, the query returns a `false` value.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

`isCompanyEmailAvailable ( email String! ) IsCompanyEmailAvailableOutput`

## Reference

The [`isCompanyEmailAvailable`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-isCompanyEmailAvailable) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following example checks whether the email address `roni_cost@example.com` can be used to register a company.

**Request:**

```graphql
query{
  isCompanyEmailAvailable(email: "roni_cost@example.com"){
    is_email_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isCompanyEmailAvailable": {
      "is_email_available": true
    }
  }
}
```

## Related topics

*  [isCompanyAdminEmailAvailable query](is-company-admin-email-available.md)
*  [isCompanyUserEmailAvailable query](is-company-user-email-available.md)
