---
title: getVaultConfig query
description: This query returns the vault configuration details for each payment method available.
---

# getVaultConfig query

<InlineAlert variant="info" slots="text" />

This query is available automatically on Adobe Commerce as a Cloud Service. On Adobe Commerce on Cloud and on-premises instances, you must install [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher to use this query.

The `getVaultConfig` query returns the vault configuration details for each payment method available. For now, only `credit_card` is supported.

See [PayPal JavaScript SDK](https://developer.paypal.com/sdk/js/reference/) for details about response values.

## Syntax

```graphql
{ 
    getVaultConfig() VaultConfigOutput    
}
```

## Reference

The [`getVaultConfig`](/reference/graphql/saas/index.md#getvaultconfig) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following example runs the `getVaultConfig` query to retrieve all the stored payment details.

**Request:**

```graphql
query {
  getVaultConfig() {
    credit_card {
      is_vault_enabled
      three_ds_mode
      sdk_params {
        name
        value
      }
    }
  }
}
```

**Response:**

```json
{
    "data": {
        "getVaultConfig": {
            "credit_card": {
                "is_vault_enabled": true,
                "three_ds_mode": "SCA_ALWAYS",
                "sdk_params": [
                    {
                        "name": "src",
                        "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=..."
                    },
                    {
                        "name": "data-partner-attribution-id",
                        "value": "MagentoPayments_SP_PCP_Int"
                    },
                    {
                        "name": "data-client-token",
                        "value": "..."
                    },
                    {
                        "name": "data-expires-in",
                        "value": "3600"
                    }
                ]
            }
        }
    }
}
```
