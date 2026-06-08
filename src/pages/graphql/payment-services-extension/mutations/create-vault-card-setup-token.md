---
title: createVaultCardSetupToken mutation
description: This mutation creates a temporary token associated to the given payment source.
---

# createVaultCardSetupToken mutation

<InlineAlert variant="info" slots="text" />

This mutation is available automatically on Adobe Commerce as a Cloud Service. On Adobe Commerce on Cloud and on-premises instances, you must install [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher to use this query.

The `createVaultCardSetupToken` mutation creates a temporary `setup_token` associated to the given payment source.

Use this token to create a permanent token with the [`createVaultCardPaymentToken`](create-vault-card-payment-token.md) mutation. The permanent token represents a payment method that is saved to the customer's vault.

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

## Reference

The [`createVaultCardSetupToken`](/reference/graphql/saas/index.md#createvaultcardsetuptoken) reference provides detailed information about the types and fields defined in this mutation.

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
            three_ds_mode: SCA_ALWAYS
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
