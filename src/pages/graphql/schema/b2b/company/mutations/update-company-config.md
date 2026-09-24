---
title: updateCompanyConfig mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Fragment src="/includes/commerce-only.md"/>

# updateCompanyConfig mutation

<Fragment src="/includes/scp-b2b-mutation.md" />

The `updateCompanyConfig` mutation updates configuration settings for the current company context. Currently, this mutation supports the company address book settings: whether the company address book is enabled, and whether custom shipping addresses can be entered at checkout when the address book is enabled. Disabling the address book also disables custom shipping address entry, even if `custom_shipping_address_enabled` is set to `true` in the same request.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md) for a company admin or a company user assigned a role with the `Magento_CompanyStorefrontCompatibility::manage_config` (**Manage Company Configuration**) permission.

## Syntax

```graphql
mutation {
    updateCompanyConfig(
        input: UpdateCompanyConfigInput!
    ) {
        UpdateCompanyConfigOutput
    }
}
```

## Reference

The [`updateCompanyConfig`](/reference/graphql/saas/mutations.md#updatecompanyconfig) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

### Enable the company address book and custom shipping addresses

The following example enables the company address book and allows custom shipping addresses to be entered at checkout.

**Request:**

```graphql
mutation UpdateCompanyConfig {
    updateCompanyConfig(
        input: {
            address_book_enabled: true
            custom_shipping_address_enabled: true
        }
    ) {
        company {
            config {
                address_book_enabled
                address_book_custom_shipping_address_enabled
            }
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyConfig": {
      "company": {
        "config": {
          "address_book_enabled": true,
          "address_book_custom_shipping_address_enabled": true
        }
      }
    }
  }
}
```

### Disable the company address book

The following example disables the company address book. Custom shipping address entry is disabled as well, even though `custom_shipping_address_enabled` is not specified in the request.

**Request:**

```graphql
mutation UpdateCompanyConfig {
    updateCompanyConfig(
        input: {
            address_book_enabled: false
        }
    ) {
        company {
            config {
                address_book_enabled
                address_book_custom_shipping_address_enabled
            }
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyConfig": {
      "company": {
        "config": {
          "address_book_enabled": false,
          "address_book_custom_shipping_address_enabled": false
        }
      }
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `"input" value should be specified` | The `input` argument was not provided. |
| `At least one supported configuration value must be specified.` | Neither `address_book_enabled` nor `custom_shipping_address_enabled` was specified in `input`. |
| `Company context is required.` | Missing `X-Adobe-Company` header, or the customer is not a company user. |
| `You do not have authorization to perform this action.` | The company user is not assigned the `Manage Company Configuration` permission. |
