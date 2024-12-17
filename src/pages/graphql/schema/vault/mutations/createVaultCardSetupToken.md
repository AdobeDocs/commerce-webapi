---
title: createVaultCardSetupToken mutation
---

# createVaultCardSetupToken mutation

<InlineAlert variant="info" slots="text" />

This mutation is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher.

The `createVaultCardSetupToken` mutation creates a temporary `setup_token` associated to the given payment source.

Use this token to create a permanent token with the `createVaultCardPaymentToken` mutation. The permanent token represents a payment method that is saved to the customer's vault.

The setup token is generated with an empty card number in the `payment_source` object purposefully. The PayPal SDK, in conjunction with hosted fields or credit cards field components, securely update the setup token with payment details.

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

The `CreateVaultCardSetupTokenInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`setup_token` | [VaultSetupTokenInput]! | The setup token information.
`three_ds_mode` | ThreeDSMode | Indicates which 3D Secure authentication mode is in use. The possible values are `OFF`, `SCA_WHEN_REQUIRED`, `SCA_ALWAYS`.

### `VaultSetupTokenInput` attribute

The `VaultSetupTokenInput` object describes the variables needed to create a vault card setup token. Requires the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`payment_source` | [PaymentSourceInput]! | The payment source of the payment method.

### `PaymentSourceInput` attribute

The `PaymentSourceInput` object describes the payment source information of the payment method.

Attribute |  Data Type | Description
--- | --- | ---
`card` | [CardPaymentSourceInput]! | The card payment source information.

### `CardPaymentSourceInput` object

The `CardPaymentSourceInput` object describes the card payment source information.

Attribute |  Data Type | Description
--- | --- | ---
`billing_address` | [BillingAddressPaymentSourceInput]! | The billing address of the card.
`name` | String! | The cardholder's name.

### `BillingAddressPaymentSourceInput` object

The `BillingAddressPaymentSourceInput` object includes the billing address information

Attribute |  Data Type | Description
--- | --- | ---
`address_line_1` | String | The first line of the address.
`address_line_2` | String | The second line of the address.
`region` | String | The region of the address.
`city` | String | The city of the address.
`postal_code` | String | The postal code of the address.
`country_code` | String! | The country code of the address.

## Output attributes

The `createVaultCardSetupTokenOutput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`setup_token` | String! | The setup token ID
