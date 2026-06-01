---
title: updateCompanyRole mutation
description: Use the updateCompanyRole mutation to update the company role and permissions.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# updateCompanyRole mutation

Use the `updateCompanyRole` mutation to update the company role and permissions.

You can get the role ID and the list of all resources defined within the company using the [`company`](../queries/company.md) query.

The following table lists all the resources that are available to the customers defined with a company. To visualize the resource hierarchy, log in to a store as the Company Admin and select **Roles and Permissions**, then click the **Edit** action next to the Default User role.

| Display name | Resource name |
| --- | --- |
| &emsp; All | Magento_Company::index |
| &emsp; &emsp; Sales | Magento_Sales::all |
| &emsp; &emsp; &emsp; Allow Checkout | Magento_Sales::place_order |
| &emsp; &emsp; &emsp; &emsp; Use Pay On Account method | Magento_Sales::payment_account |
| &emsp; &emsp; &emsp; View orders |  Magento_Sales::view_orders |
| &emsp; &emsp; &emsp; View orders of subordinate users |  Magento_Sales::view_orders_sub |
| &emsp; &emsp; Quotes | Magento_NegotiableQuote::all |
| &emsp; &emsp; &emsp; View | Magento_NegotiableQuote::view_quotes |
| &emsp; &emsp; &emsp; &emsp; Request, Edit, Delete | Magento_NegotiableQuote::manage |
| &emsp; &emsp; &emsp; &emsp; Checkout with Quote | Magento_NegotiableQuote::checkout |
| &emsp; &emsp; &emsp; View quotes of subordinate users | Magento_NegotiableQuote::view_quotes_sub |
| &emsp; Order Approvals | Magento_PurchaseOrder::all |
| &emsp; &emsp; View My Purchase Orders | Magento_PurchaseOrder::view_purchase_orders |
| &emsp; &emsp; &emsp; View for subordinates | Magento_PurchaseOrder::view_purchase_orders_for_subordinates |
| &emsp; &emsp; &emsp; View for all company | Magento_PurchaseOrder::view_purchase_orders_for_company |
| &emsp; &emsp; Auto-approve POs created within this role | Magento_PurchaseOrder::autoapprove_purchase_order |
| &emsp; &emsp; Approve Purchase Orders without other approvals | Magento_PurchaseOrderRule::super_approve_purchase_order |
| &emsp; &emsp; View Approval Rules | Magento_PurchaseOrderRule::view_approval_rules |
| &emsp; &emsp; &emsp; Create, Edit and Delete | Magento_PurchaseOrderRule::manage_approval_rules |
| &emsp; &emsp; Company Profile | Magento_Company::view |
| &emsp; &emsp; &emsp; Account Information (View) | Magento_Company::view_account |
| &emsp; &emsp; &emsp; &emsp; Edit | Magento_Company::edit_account |
| &emsp; &emsp; &emsp; Legal Address (View) | Magento_Company::view_address |
| &emsp; &emsp; &emsp; &emsp; Edit | Magento_Company::edit_address |
| &emsp; &emsp; &emsp; Contacts (View) | Magento_Company::contacts |
| &emsp; &emsp; &emsp; Payment Information (View) | Magento_Company::payment_information |
| &emsp; &emsp; &emsp; Shipping Information (View) | Magento_Company::shipping_information |
| &emsp; &emsp; Company User Management | Magento_Company::user_management |
| &emsp; &emsp; &emsp; View roles and permissions | Magento_Company::roles_view |
| &emsp; &emsp; &emsp; &emsp; Manage roles and permissions | Magento_Company::roles_edit |
| &emsp; &emsp; &emsp; View users and teams | Magento_Company::users_view |
| &emsp; &emsp; &emsp; &emsp; Manage users and teams | Magento_Company::users_edit |
| &emsp; &emsp; Company credit | Magento_Company::credit |
| &emsp; &emsp; &emsp; view | Magento_Company::credit_history |

You can change or add permissions to the company role using the `permissions` attribute.

<InlineAlert variant="warning" slots="text" />

Any time you use the `permissions` object to update role capabilities, you must include the entire hierarchy of permissions. The `updateCompanyRole` mutation rewrites all role permissions based on the specified payload.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    updateCompanyRole(
        input: CompanyRoleUpdateInput!
    ) {
        UpdateCompanyRoleOutput
    }
}
```

## Reference

The `updateCompanyRole` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updateCompanyRole)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCompanyRole)

## Example usage

The following example updates the name of a company role.

**Request:**

```graphql
mutation {
  updateCompanyRole(
    input: {
      id: "Mg=="
      name: "Company Admin (updated)"
    }
  ) {
    role {
      id
      name
      permissions {
        id
        text
        sort_order
        children {
          id
          text
          sort_order
          children {
            id
            text
            sort_order
          }
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
    "updateCompanyRole": {
      "role": {
        "id": "Mg==",
        "name": "Company Admin (updated)",
        "permissions": [
          {
            "id": "Magento_Company::index",
            "text": "All",
            "sort_order": 100,
            "children": [
              {
                "id": "Magento_Company::view",
                "text": "Company Profile",
                "sort_order": 100,
                "children": [
                  {
                    "id": "Magento_Company::view_account",
                    "text": "Account Information (View)",
                    "sort_order": 100
                  },
                  {
                    "id": "Magento_Company::view_address",
                    "text": "Legal Address (View)",
                    "sort_order": 200
                  },
                  {
                    "id": "Magento_Company::contacts",
                    "text": "Contacts (View)",
                    "sort_order": 300
                  },
                  {
                    "id": "Magento_Company::payment_information",
                    "text": "Payment Information (View)",
                    "sort_order": 400
                  },
                  {
                    "id": "Magento_Company::shipping_information",
                    "text": "Shipping Information (View)",
                    "sort_order": 450
                  }
                ]
              },
              {
                "id": "Magento_Company::user_management",
                "text": "Company User Management",
                "sort_order": 200,
                "children": [
                  {
                    "id": "Magento_Company::roles_view",
                    "text": "View roles and permissions",
                    "sort_order": 100
                  },
                  {
                    "id": "Magento_Company::users_view",
                    "text": "View users and teams",
                    "sort_order": 300
                  }
                ]
              },
              {
                "id": "Magento_Company::credit",
                "text": "Company Credit",
                "sort_order": 500,
                "children": [
                  {
                    "id": "Magento_Company::credit_history",
                    "text": "View",
                    "sort_order": 500
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `User role with this name already exists. Enter a different name to save this role.` | The company cannot have multiple company roles with the same name. |
| `Unable to set "allow" for the resource because its parent resource(s) is set to "deny".` | To allow permission for the company role, you must allow all the permissions of the parent tree. |
| `No such entity with roleId = xxx` | The company role with ID `xxx` doesn't exist. |

<Edition slots="text" backgroundcolor="blue"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
