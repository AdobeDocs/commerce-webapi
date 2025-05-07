---
title: updateCompanyUser mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

# updateCompanyUser mutation

Use the `updateCompanyUser` mutation to update an existing company user.

You can get the user ID and role ID with the [`company`](../queries/company.md) query.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    updateCompanyUser(
        input: CompanyUserUpdateInput!
    ) {
        UpdateCompanyUserOutput
    }
}
```

## Reference

The [`updateCompanyUser`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCompanyUser) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example changes the job title of the specified company user.

**Request:**

```graphql
mutation {
  updateCompanyUser(
    input: {
      id: "Mg=="
      job_title: "Company User"
    }
  ) {
    user {
      email
      firstname
      lastname
      job_title
      telephone
      status
      role {
        id
        name
        users_count
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyUser": {
      "user": {
        "email": "jane.doe@example.com",
        "firstname": "Jane",
        "lastname": "Doe",
        "job_title": "Company User",
        "telephone": "1234567890",
        "status": "ACTIVE",
        "role": {
          "id": "MQ==",
          "name": "Default User",
          "users_count": 1
        }
      }
    }
  }
}
```

This example deactivates the company user and assigns a different role.

**Request:**

```graphql
mutation {
  updateCompanyUser(
    input: {
      id: "Mg=="
      role_id: "MQ=="
      status: INACTIVE
    }
  ) {
    user {
      email
      firstname
      lastname
      job_title
      telephone
      status
      role {
        id
        name
        users_count
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyUser": {
      "user": {
        "email": "jane.doe@example.com",
        "firstname": "Jane",
        "lastname": "Doe",
        "job_title": "Company User",
        "telephone": "1234567890",
        "status": "INACTIVE",
        "role": {
          "id": "MQ==",
          "name": "Default User",
          "users_count": 1
        }
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`You do not have authorization to perform this action.` | The user with the ID provided in the `input`.`id` argument is not assigned to your company.
`No such entity with roleId = xxx` | The company role with ID `xxx` doesn't exist.
`A customer with the same email address already exists in an associated website` | The email provided in the `input`.`email` argument belongs to another user.
