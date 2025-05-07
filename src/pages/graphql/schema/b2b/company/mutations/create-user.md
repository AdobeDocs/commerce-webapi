---
title: createCompanyUser mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# createCompanyUser mutation

The `createCompanyUser` mutation allows an existing company user who is assigned a role that contains the `Magento_Company::users_edit` permission to create a new company user. The specified email address determines how the application processes the request.

-  If the email address is unique for the website, the application immediately creates the company user.

-  If the email address belongs to a customer who is not a company user, the application sends an invitation to join the company organization to the customer. When the customer accepts the invitation, the application adds the customer to the company organization.

-  If the email address belongs to a customer who is part of any company organization, the application returns the error "A customer with the same email already assigned to company".

The `target_id` input attribute allows you to specify which node in the company structure will be the parent node of the company user. If you do not specify a value, the user will be assigned to the top-level (root) node of the company structure.

You can get the `target_id` and the `role_id` with the [`company`](../queries/company.md) query.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    createCompanyUser(
        input: CompanyUserCreateInput!
    ) {
        CreateCompanyUserOutput
    }
}
```

## Reference

The [`createCompanyUser`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createCompanyUser) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

### Create a company user (minimal payload)

The following example shows the minimal payload to add a company user. Because a `target_id` is not specified, the application places the new company user at the top node of the company structure.

**Request:**

```graphql
mutation {
  createCompanyUser(
    input: {
      email: "john.doe@example.com"
      firstname: "John"
      lastname: "Doe"
      job_title: "User"
      role_id: "MQ=="
      status: ACTIVE
      telephone: "1234567890"
    }
  ) {
    user {
      created_at
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCompanyUser": {
      "user": {
        "created_at": "2020-10-15 23:33:49",
        "email": "john.doe@example.com"
      }
    }
  }
}
```

### Create a company user in a specific location in the company structure

This example creates a new company user of the parent company team specified in the `target_id` field.

**Request:**

```graphql
mutation {
  createCompanyUser(
    input: {
      email: "jane.doe3@example.com"
      firstname: "Jane"
      lastname: "Doe3"
      job_title: "User"
      role_id: "NTc="
      status: ACTIVE
      telephone: "1234567890"
      target_id: "OA=="
    }
  ) {
    user {
      created_at
      email
      firstname
      lastname
      job_title
      role {
        id
        name
      }
      team {
        id
        name
        structure_id
      }
      status
      telephone
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCompanyUser": {
      "user": {
        "created_at": "2020-10-15 23:39:11",
        "email": "jane.doe@example.com",
        "firstname": "Jane",
        "lastname": "Doe",
        "job_title": "User",
        "role": {
          "id": "NTc=",
          "name": "Default User"
        },
        "team": {
          "id": "MQ==",
          "name": "Test Team",
          "structure_id": "Mg=="
        },
        "status": "ACTIVE",
        "telephone": "1234567890"
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Invitation was sent to an existing customer, they will be added to your organization once they accept the invitation.` | The email provided in the `input`.`email` argument belongs to an existing customer. The application sends an invitation to this customer. When the customer accepts the invitation, the customer will be assigned to the company.
`A customer with the same email already assigned to company.` | The email provided in the `input`.`email` argument belongs to an existing customer, and the customer has already been assigned to the company.
`"Email" is not a valid email address.` | The value provided in the `input`.`email` argument has an invalid format.
`Field "createCompanyUser" argument "input" requires type String!, found xxx.` | The value specified in the one of the `input` arguments has an invalid type.
`Field "xxx" is not defined by type CompanyUserCreateInput.` | The `input`.`xxx` argument is undefined.
`Required parameters are missing: xxx` | The `input`.`xxx` argument was omitted or contains an empty value.
`No such entity with roleId = xxx` | The company role with ID `xxx` doesn't exist.
