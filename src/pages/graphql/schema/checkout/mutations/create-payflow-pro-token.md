---
title: createPayflowProToken mutation
---

# createPayflowProToken mutation

The `createPayflowProToken` mutation initiates a Payflow Pro transaction and receives a token. The payload must contain the redirect URLs to use when the transaction is successful, when the customer cancels the transaction, or when an error occurs.

The `PayflowProUrlInput` object contains a set of relative URLs that PayPal will use in response to various actions during the authorization process. The application prepends the base URL to this value to create a full URL. For example, if the full URL is `https://www.example.com/path/to/page.html`, the relative URL is `path/to/page.html`.

Use this input for Payflow Pro and Payment Pro payment methods.

See [PayPal Payflow Pro payment method](../../../payment-methods/payflow-pro.md) for detailed information about the workflow of PayPal Payflow Pro transactions.

## Syntax

```graphql
mutation {
  createPayflowProToken(
    input: PayflowProTokenInput
  ) {
    CreatePayflowProTokenOutput
  }
}
```

## Reference

The [`createPayflowProToken`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createPayflowProToken) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example requests a token in a Payflow Pro transaction.

**Request:**

```graphql
mutation {
  createPayflowProToken(
    input: {
      cart_id: "Po1WkfK7d3vZE0qga610NwJIbxgqllpt"
      urls: {
        return_url: "paypal/action/return.html"
        cancel_url: "paypal/action/cancel.html"
        error_url: "paypal/action/error.html"
      }
    }
  ) {
    response_message
    result
    result_code
    secure_token
    secure_token_id
  }
}
```

**Response:**

```json
{
  "data": {
    "createPayflowProToken": {
      "response_message": "Approved",
      "result": 0,
      "result_code": 0,
      "secure_token": "5JRGtIDsaJUuEPq0lR5m9ugqG",
      "secure_token_id": "H3roFRhGjKzxCKr5TlA8mooClBpQxgBY"
    }
  }
}
```

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Field PayflowProTokenInput.cart_id of required type String! was not provided.` | You must specify the `cart_id` attribute.
`Field PayflowProTokenInput.urls of required type PayflowProUrlInput! was not provided.` | You must specify the `urls` attribute.
`Field PayflowProUrlInput.return_url of required type String! was not provided.` | You must specify the `return_url` attribute.
`Field PayflowProUrlInput.error_url of required type String! was not provided.` | You must specify the `error_url` attribute.
`Field PayflowProUrlInput.cancel_url of required type String! was not provided.` | You must specify the `cancel_url` attribute.
