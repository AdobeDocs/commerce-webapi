---
title: createVaultCardPaymentToken mutation
---

# createVaultCardPaymentToken mutation

<InlineAlert variant="info" slots="text" />

This mutation is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher.

The `createVaultCardPaymentToken` mutation creates a permanent `vault_token_id` and associates an optional card description, visible in the storefront.

To run the `createVaultCardPaymentToken` mutation, you need the `setup_token` generated with the `createVaultCardSetupToken` mutation.

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

The `createVaultCardPaymentToken` object contains the following input attributes:

Attribute |  Data Type | Description
--- | --- | ---
`setup_token_id` | String | The identifiable payment source for the payment method.
`card_description` | Boolean | Indicates which 3D Secure authentication mode is in use.

## Output attributes

The `createVaultCardSetupToken` object contains the `setup_token` details needed to run the `createVaultCardPaymentToken` mutation.
