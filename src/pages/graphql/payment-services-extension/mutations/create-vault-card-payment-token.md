---
title: createVaultCardPaymentToken mutation
description: This mutation stores a permanent payment token for later purchases.
---

# createVaultCardPaymentToken mutation

<InlineAlert variant="info" slots="text" />

This mutation is available automatically on Adobe Commerce as a Cloud Service. On Adobe Commerce on Cloud and on-premises instances, you must install [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher to use this mutation.

The `createVaultCardPaymentToken` mutation creates a permanent `vault_token_id` and associates an optional card description, visible in the storefront.

To run the `createVaultCardPaymentToken` mutation, you need the `setup_token` generated with the [`createVaultCardSetupToken`](create-vault-card-setup-token.md) mutation.

## Syntax

```graphql
mutation { 
    createVaultCardPaymentToken(
        input: CreateVaultCardPaymentTokenInput! 
    ) CreateVaultCardPaymentTokenOutput    
}
```

## Reference

The [`createVaultCardPaymentToken`](/reference/graphql/saas/index.md#createvaultcardpaymenttoken) reference provides detailed information about the types and fields defined in this mutation.

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
