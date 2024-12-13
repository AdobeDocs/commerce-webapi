---
title: createVaultCardSetupToken mutation
---

# createVaultCardSetupToken mutation

<InlineAlert variant="info" slots="text" />

This mutation is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher.

The `createVaultCardSetupToken` mutation creates a temporary `setup_token` associated to the given payment source.

Use this token to create a permanent token with the `createVaultCardPaymentToken` mutation. The permanent token represents a payment method that is saved to the customer's vault.

This setup token is generated with an empty card number in the `payment_source` object purposefully. In combination of PayPal SDK, hosted fields or credit cards fields components use this token to securely update the setup token with payment details.

See [Paypal SDK developer documentation](https://developer.paypal.com/docs/multiparty/checkout/save-payment-methods/purchase-later/js-sdk/cards/) for more information.

## Syntax

```graphql
mutation {
    createVaultCardSetupToken(
        input: CreateVaultCardSetupTokenInput!
    ) CreateVaultCardSetupTokenOutput
}
```

## Example usage

The following example runs the `createVaultCardSetupToken` mutation to create a setup token for the given payment details.

**Request:**

```graphql
mutation {
      createVaultCardSetupToken(
          input: {
              setup_token: {
                payment_source: {
                    card: {
                        name: "John Doe",
                          billing_address: {
                            address_line_1: "123 Main Street",
                            address_line_2: "Apt 4B",
                            region: "California",
                            city: "San Jose",
                            postal_code: "90001",
                            country_code: "US"
                          }
                       }
                   }
            },
            three_ds_mode: "SCA_ALWAYS"
        }
      ) {
          setup_token
      }
}
```

**Response:**

```json
{
    "data": {
        "createVaultCardSetupToken": {
            "setup_token": "11M29729J2618171X"
        }
    }
}
```

## Input attributes

The `createVaultCardSetupToken` object contains the following input attributes:

Attribute |  Data Type | Description
--- | --- | ---
`payment_source` | String | The identifiable payment source for the payment method.
`three_ds_mode` | Boolean | Indicates which 3D Secure authentication mode is in use.

## Output attributes

The `createVaultCardSetupToken` object contains the `setup_token` details needed to run the `createVaultCardPaymentToken` mutation.
