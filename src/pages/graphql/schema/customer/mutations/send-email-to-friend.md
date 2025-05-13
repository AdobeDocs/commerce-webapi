---
title: sendEmailToFriend mutation
edition: paas
---

# sendEmailToFriend mutation

Use the `sendEmailToFriend` mutation to allow the application send a message on behalf of a customer to the specified email addresses.

<InlineAlert variant="info" slots="text" />

The **Stores** > **Configuration** > **Catalog** > **Email to a friend** > **Enabled** field must be set to **Yes** to implement this mutation.

## Syntax

```graphql
mutation {
  sendEmailToFriend(
    input: SendEmailToFriendInput
  ) {
    SendEmailToFriendOutput
  }
}
```

## Reference

The [`sendEmailToFriend`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-sendEmailToFriend) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sends a message to two friends.

**Request:**

```graphql
mutation {
  sendEmailToFriend(
    input: {
      product_id: 10
      sender: {
        name: "Veronica Cost"
        email: "roni_cost@example.com"
        message: "Sarah needs this! http://luma.example.com/savvy-shoulder-tote.html"
      }
      recipients: [
        { name: "Amie Franklin", email: "afranklin@example.com" }
        { name: "Tomoko", email: "tomoko@example.com" }
      ]
    }
  ) {
    sender {
      name
      email
    }
    recipients {
      name
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "sendEmailToFriend": {
      "sender": {
        "name": "Veronica Cost",
        "email": "roni_cost@example.com",
      },
      "recipients": [
        {
          "name": "Amie Franklin",
          "email": "afranklin@example.com"
        },
        {
          "name": "Tomoko",
          "email": "tomoko@example.com"
        }
      ]
    }
  }
}
```

## Errors

Some errors occur because the **Email a friend** feature is not properly configured. Go to **Stores** > **Configuration** > **Catalog** > **Email to a friend** in the Admin to adjust the settings.

Error | Description
--- | ---
`"Email to a Friend" is not enabled.` | "Email to a Friend" is disabled.  To activate it, use the Admin to set the **Enabled** field to **Yes**.
`Please provide Name of sender.` | The value specified in the `input`.`sender`.`name` argument is empty.
`Please provide Email of sender.` | The value specified in the `input`.`sender`.`email` argument is empty.
`Please provide Message.` | The value specified in the `input`.`sender`.`message` argument is empty.
`Please provide Name for all of recipients.` | The value specified in the `input`.`recipients`[].`name` argument is empty.
`Please provide Email for all of recipients.` | The value specified in the `input`.`recipients`[].`email` argument is empty.
`The current customer isn't authorized.` | "Email to a Friend" is available for registered users only. To make it available for guests, use the Admin to set the  **Allow for Guests** option to **Yes**.
`The product that was requested doesn't exist. Verify the product and try again.` | The product specified in the `product_id` argument is not visible in the current website.
`You can't send messages more than XXX times an hour.` | The user cannot send more messages in an hour than specified in the  **Max Products Sent in 1 Hour** option in the Admin.
