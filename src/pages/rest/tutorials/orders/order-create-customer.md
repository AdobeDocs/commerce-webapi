---
title: Step 3. Create a customer
description: In this step of the tutorial you will create a customer
edition: paas
keywords:
  - REST
--- 
 
# Step 3. Create a customer

Customers can make purchases in three ways:

*  As a logged-in user
*  As a guest user who logs in or creates an account when the order is placed
*  As a guest user who does not create an account

This tutorial creates an order by a logged-in user. Adobe Commerce provides additional REST endpoints for handling guest users.

### Create a customer account

<InlineAlert variant="info" slots="text"/>

This example shows a simplified way of creating a customer account. Typically, you would not define a customer password using plain text. Instead, you would specify the payload without the `password` parameter. By default if the call is successful, Commerce sends a "Welcome" email to the customer that includes a request to set the password. You could also initiate a password reset email by calling `PUT /V1/customers/password`.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/customers`

**Headers:**

`Content-Type: application/json`

**Payload:**

It is recommended that you substitute the value of the `email` parameter with a real email address so that you receive all notifications.

<details>
      <summary><b>Show code sample</b></summary>

```json
{
  "customer": {
    "email": "jdoe@example.com",
    "firstname": "Jane",
    "lastname": "Doe",
    "addresses": [
      {
        "defaultShipping": true,
        "defaultBilling": true,
        "firstname": "Jane",
        "lastname": "Doe",
        "region": {
          "regionCode": "NY",
          "region": "New York",
          "regionId": 43
        },
        "postcode": "10755",
        "street": [
          "123 Oak Ave"
        ],
        "city": "Purchase",
        "telephone": "512-555-1111",
        "countryId": "US"
      }
    ]
  },
  "password": "Password1"
}
```

</details>

**Response:**

Commerce assigned this user `id` value of `2`.

<details>
      <summary><b>Show code sample</b></summary>

```json
{
  "id": 2,
  "group_id": 1,
  "default_billing": "2",
  "default_shipping": "2",
  "created_at": "2017-01-31 01:18:13",
  "updated_at": "2017-01-31 01:18:13",
  "created_in": "Default Store View",
  "email": "jdoe@example.com",
  "firstname": "Jane",
  "lastname": "Doe",
  "store_id": 1,
  "website_id": 1,
  "addresses": [
    {
      "id": 2,
      "customer_id": 2,
      "region": {
        "region_code": "NY",
        "region": "New York",
        "region_id": 43
      },
      "region_id": 43,
      "country_id": "US",
      "street": [
        "123 Oak Ave"
      ],
      "telephone": "512-555-1111",
      "postcode": "10755",
      "city": "Purchase",
      "firstname": "Jane",
      "lastname": "Doe",
      "default_shipping": true,
      "default_billing": true
    }
  ],
  "disable_auto_group_change": 0
}
```

</details>

You can log in to the Luma store using the username `jdoe@example.com` and password `Password1`.

### Get the customer's access token

To get a customer's access token, you must specify the customer's username and password in the payload. You do not need to specify an admin authorization token.

By default, a customer token is valid for 1 hour. To change this value, log in to Admin and go to **Stores** > Settings > **Configuration** > **Services** > **OAuth** > **Access Token Expiration**.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/integration/customer/token`

**Headers:**

`Content-Type: application/json`

**Payload:**

```json
{
  "username": "jdoe@example.com",
  "password": "Password1"
}
```

**Response:**

Commerce returns the customer's access token. This token must be specified in the authorization header of every call the customer makes on his or her own behalf.

`q0u66k8h42yaevtchv09uyy3y9gaj2ap`

### Verify this step

1. Log in to the Luma website using the email `jdoe@example.com` and password `Password1`.
1. Click the account name (Jane) in the upper right corner and select **My Account**.
1. Click **Address Book** to view the default billing and shipping addresses.
