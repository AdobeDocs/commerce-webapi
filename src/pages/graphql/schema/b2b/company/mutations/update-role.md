---
title: updateCompanyRole mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

# updateCompanyRole mutation

Use the `updateCompanyRole` mutation to update the company role and permissions.

You can get the role ID and the list of all resources defined within the company using the [`company`](../queries/company.md) query.

import B2BRoles from '/src/_includes/graphql/b2b-roles.md'

<B2BRoles />

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

The [`updateCompanyRole`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCompanyRole) reference provides detailed information about the types and fields defined in this mutation.

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

Error | Description
--- | ---
`User role with this name already exists. Enter a different name to save this role.` | The company cannot have multiple company roles with the same name.
`Unable to set "allow" for the resource because its parent resource(s) is set to "deny".` | To allow permission for the company role, you must allow all the permissions of the parent tree.
`No such entity with roleId = xxx` | The company role with ID `xxx` doesn't exist.
