---
title: isCompanyEmailAvailable query
description: The isCompanyEmailAvailable query checks whether the specified email is valid for company registration. The specified email can be the same as an existing...
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# isCompanyEmailAvailable query

The `isCompanyEmailAvailable` query checks whether the specified email is valid for company registration. The specified email can be the same as an existing customer or company administrator. If the email matches an existing company email, the query returns a `false` value.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

`isCompanyEmailAvailable ( email String! ) IsCompanyEmailAvailableOutput`

## Reference

The `isCompanyEmailAvailable` reference provides detailed information about the types and fields defined in this query.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-isCompanyEmailAvailable)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-isCompanyEmailAvailable)

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
