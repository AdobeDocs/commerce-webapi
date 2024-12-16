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

The `createVaultCardSetupToken` mutation must contain the following input attributes:

Attribute |  Data Type | Description
--- | --- | ---
`setup_token` | [VaultSetupTokenInput]! | The setup token information.
`three_ds_mode` | Boolean | Indicates which 3D Secure authentication mode is in use. The possible values are `OFF`, `SCA_WHEN_REQUIRED`, `SCA_ALWAYS`.

### `VaultSetupTokenInput` attributes

The VaultSetupTokenInput object describes the variables needed to create a vault card setup token

Attribute                Data Type                        Description
payment_source            [PaymentSourceInput]!            The payment source information
    
PaymentSourceInput object
The PaymentSourceInput object describes the payment source information

Attribute                Data Type                        Description
card                    [CardPaymentSourceInput]!        The card payment source information

CardPaymentSourceInput object
The CardPaymentSourceInput object describes the card payment source information

Attribute                Data Type                                Description
name                    String                                    The name on the cardholder
billing_address            [BillingAddressPaymentSourceInput]!        The billing address of the card

BillingAddressPaymentSourceInput object
The BillingAddressPaymentSourceInput object describes the billing address information

Attribute                Data Type                                Description
address_line_1            String                                    The first line of the address
address_line_2            String                                    The second line of the address
region                    String                                    The region of the address
city                    String                                    The city of the address
postal_code                String                                    The postal code of the address
country_code            String!                                    The country code of the address

ThreeDSMode object
The ThreeDSMode enum provides description of all possible 3D Secure mode:

OFF
SCA_WHEN_REQUIRED
SCA_ALWAYS 

## Output attributes

The `createVaultCardSetupTokenOutput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`setup_token` | String! | The setup token id.
