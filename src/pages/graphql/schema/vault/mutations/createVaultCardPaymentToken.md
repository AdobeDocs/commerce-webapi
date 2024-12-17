---
title: createVaultCardPaymentToken mutation
---

# createVaultCardPaymentToken mutation

<InlineAlert variant="info" slots="text" />

This mutation is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher.

The `createVaultCardPaymentToken` mutation creates a permanent `vault_token_id` and associates an optional card description, visible in the storefront.

To run the `createVaultCardPaymentToken` mutation, you need the `setup_token` generated with the [`createVaultCardSetupToken`](create-vault-card-setup-token/) mutation.

## Syntax

```graphql
mutation { 
    createVaultCardPaymentToken(
        input: CreateVaultCardPaymentTokenInput! 
    ) CreateVaultCardPaymentTokenOutput    
}
```

## Example usage

The following example runs the `createVaultCardPaymentToken` mutation to create a permanent `vault_token_id` for the given payment method.

## Request

```graphql
mutation {
  createVaultCardPaymentToken(
      input: {
        setup_token_id: "23N11484TX9371211"
        card_description: "My New Card"
      } 
  ) {
      vault_token_id 
      payment_source { 
          card {
              brand 
              last_digits 
              expiry
          } 
      }
  }
}
```

## Response

```json
{
    "data": {
        "createVaultCardPaymentToken": {
            "vault_token_id": "745bf41a-4196-41a6-a17a-0234f89118fc",
            "payment_source": {
                "card": {
                    "brand": "VISA",
                    "last_digits": "0004",
                    "expiry": "2027-02"
                }
            }
        }
    }
} 
```

## Input attributes

The `CreateVaultCardPaymentTokenInput` object contains the following input attributes:

Attribute |  Data Type | Description
--- | --- | ---
`setup_token_id` | String! | The `setup_token` obtained with the `createVaultCardSetupToken` mutation
`card_description` | String | The description of the vaulted card

## Output attributes

The `CreateVaultCardPaymentTokenOutput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`vault_token_id` | String! | The vault payment token information.
`payment_source` | [PaymentSourceOutput]! | The payment source information.

### `PaymentSourceOutput` attributes

The `PaymentSourceOutput` object describes the payment source information. It contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`card` | [CardPaymentSourceOutput]! | The card payment source information.

### `CardPaymentSourceOutput` object

The `CardPaymentSourceOutput` object describes the card payment source information. Requires the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`brand` | String | The brand of the card.
`last_digits` | String | Last digits of the card.
`expiry` | String | The expiry date of the card.
