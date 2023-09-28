---
title: isEmailAvailable query
---

# isEmailAvailable query

The `isEmailAvailable` query checks whether the specified email has already been used to create a customer account. As of Commerce 2.4.7, by default the query always returns a value of `true` for all email addresses. You can change this behavior by setting the **Stores > Configuration > **Sales** > **Checkout** > **Enable Guest Checkout Login** field in the Admin to **Yes**. However, doing this can expose customer information to unauthenticated users.

When guest checkout logins are enabled, or in versions prior to 2.4.7, a value of `true` indicates the email address is available, and the customer can use the email address to create an account. The value of `false` indicates the email address is not available, and the customer cannot use the email address to create an account.


## Syntax

`{isEmailAvailable (email): {IsEmailAvailableOutput}}`

## Example usage

The following example checks whether the email address `customer@example.com` is available to create a customer account.

**Request:**

```graphql
{
  isEmailAvailable(email: "customer@example.com") {
    is_email_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isEmailAvailable": {
      "is_email_available": true
    }
  }
}
```

## Input attribute

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address to check

## Output attribute

Attribute |  Data Type | Description
--- | --- | ---
`is_email_available` | Boolean | A value of `true` indicates the email address is available, and the customer can use the email address to create an account

## Related topics

[Customer Query](../../customer/queries/customer.md)
[Backward incompatible change of isEmailAvailable query](https://developer.adobe.com/commerce/php/development/backward-incompatible-changes/highlights/#isemailavailable-api)

## Errors

Error | Description
--- | ---
`Email is invalid` | The given email-id is not in a proper format.
`Field isEmailAvailable.email of required type String! was not provided` | The value specified in the `isEmailAvailable.email` argument is empty.
