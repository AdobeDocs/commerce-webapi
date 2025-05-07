---
title: isCompanyUserEmailAvailable query
---

# isCompanyUserEmailAvailable query

The `isCompanyUserEmailAvailable` query checks whether an email is valid for registering a company user. The query returns a `false` value if the specified email matches the email of an existing customer or a company administrator.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

`isCompanyUserEmailAvailable ( email String! ) IsCompanyUserEmailAvailableOutput`

## Reference

The [`isCompanyUserEmailAvailable`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-isCompanyUserEmailAvailable) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following example checks whether the email address `roni_cost@example.com` can be used to create a company user.

**Request:**

```graphql
query{
  isCompanyUserEmailAvailable(email: "roni_cost@example.com"){
    is_email_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isCompanyUserEmailAvailable": {
      "is_email_available": false
    }
  }
}
```

## Related topics

*  [isCompanyEmailAvailable query](is-company-email-available.md)
*  [isCompanyAdminEmailAvailable query](is-company-admin-email-available.md)
