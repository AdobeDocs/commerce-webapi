---
title: subscribeEmailToNewsletter mutation
description: The subscribeEmailToNewsletter mutation allows guests and registered customers to sign up to receive newsletters. It can return a value of NOTACTIVE or SUB...
---

# subscribeEmailToNewsletter mutation

The `subscribeEmailToNewsletter` mutation allows guests and registered customers to sign up to receive newsletters. It can return a value of `NOT_ACTIVE` or `SUBSCRIBED`.

## Syntax

`mutation: {subscribeEmailToNewsletter(email: String!): SubscribeEmailToNewsletterOutput}`

## Reference

The `subscribeEmailToNewsletter` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#subscribeemailtonewsletter)

* [On-Premises/Cloud](/reference/graphql/index.md#subscribeemailtonewsletter)

## Example usage

The following call subscribes an email to the store's newsletter.

**Request:**

```graphql
mutation {
  subscribeEmailToNewsletter(
    email: "email@example.com"
  ) {
    status
  }
}
```

**Response:**

```json
{
  "data": {
    "subscribeEmailToNewsletter": {
      "status": "SUBSCRIBED"
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `Cannot create a newsletter subscription.` | A general error message that appears on some internal system errors. The original error is logged and can be found in the application logs. |
| `Enter a valid email address.` | The value provided in the `email` argument has an invalid format. |
| `Guests can not subscribe to the newsletter. You must create an account to subscribe.` | Guest subscription is disabled. Go to **Stores** > **Configuration** > **Customers** > **Newsletter** > **Subscription Options** > **Allow Guest Subscription** in the Admin to adjust the setting. |
| `The account sign-in was incorrect or your account is disabled temporarily.` | The email address provided in the `email` argument is that of a customer account pending confirmation. |
| `This email address is already subscribed.` | The email address provided in the `email` argument is already subscribed. |
| `You must specify an email address to subscribe to a newsletter.`| The `email` argument is empty. |

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
