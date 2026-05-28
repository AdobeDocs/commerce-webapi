---
title: isCompanyUserEmailAvailable query
description: The isCompanyUserEmailAvailable query checks whether an email is valid for registering a company user. The query returns a false value if the specified ema...
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# isCompanyUserEmailAvailable query

The `isCompanyUserEmailAvailable` query checks whether an email is valid for registering a company user. The query returns a `false` value if the specified email matches the email of an existing customer or a company administrator.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

`isCompanyUserEmailAvailable ( email String! ) IsCompanyUserEmailAvailableOutput`

## Reference

The `isCompanyUserEmailAvailable` reference provides detailed information about the types and fields defined in this query.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-isCompanyUserEmailAvailable)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-isCompanyUserEmailAvailable)

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
