---
title: getVaultConfig query
---

# getVaultConfig query

<InlineAlert variant="info" slots="text" />

This query is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher.

The `getVaultConfig` query returns the vault configuration details for each payment method available. For now, only `credit_card` is supported.

## Syntax

```graphql
{ 
    getVaultConfig() VaultConfigOutput    
}
```

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

For now, only `credit_card` is supported with the `getVaultConfig` query.

## Output attributes

The `VaultConfigOutput` object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`credit_card` | VaultCreditCardConfig | Credit card vault method configuration.

### `VaultCreditCardConfig` attributes

The `VaultCreditCardConfig` object provides details about the credit card vault method configuration

Attribute |  Data Type | Description
--- | --- | ---
`is_vault_enabled` | Boolean | Indicates whether card vaulting is enabled.
`three_ds_mode` | ThreeDSMode | Indicates which 3D Secure authentication mode is in use. The possible values are `OFF`, `SCA_WHEN_REQUIRED`, `SCA_ALWAYS`
`sdk_params` | [SDKParams] | PayPal parameters required to load the PayPal JavaScript SDK

#### `SDKParams` attributes

The `SDKParams` object provides details about the SDK parameters:

Attribute |  Data Type | Description
--- | --- | ---
`name` | String | The name of the SDK parameter
`value` | String | The value of the SDK parameter

These values come from [PayPal JavaScript SDK](https://developer.paypal.com/sdk/js/reference/).
