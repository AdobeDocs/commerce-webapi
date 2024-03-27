---
title: storeConfig query
---

# storeConfig query

The `storeConfig` query defines information about a store's configuration. You can query a non-default store by [changing the header](../../../usage/headers.md) in your GraphQL request.

## Syntax

`storeConfig: StoreConfig`

## Reference

The [`storeConfig`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-storeConfig) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Query a store's configuration

The `storeConfig` query can return `base` and `extended` store configuration setting. The following call returns all `base` details of a store's configuration.

**Request:**

```graphql
{
  storeConfig {
    store_code
    store_name
    is_default_store
    store_group_code
    is_default_store_group
    locale
    base_currency_code
    default_display_currency_code
    timezone
    weight_unit
    base_url
    base_link_url
    base_static_url
    base_media_url
    secure_base_url
    secure_base_link_url
    secure_base_static_url
    secure_base_media_url
  }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "store_code": "default",
      "store_name": "Default Store View",
      "is_default_store": true,
      "store_group_code": "main_website_store",
      "is_default_store_group": true,
      "locale": "en_US",
      "base_currency_code": "USD",
      "default_display_currency_code": "USD",
      "timezone": "America/Chicago",
      "weight_unit": "lbs",
      "base_url": "http://example.com/",
      "base_link_url": "http://example.com/",
      "base_static_url": "http://example.com/pub/static/version1606976517/",
      "base_media_url": "http://example.com/pub/media/",
      "secure_base_url": "http://example.com/",
      "secure_base_link_url": "http://example.com/",
      "secure_base_static_url": "http://example.com/pub/static/version1606976517/",
      "secure_base_media_url": "http://example.com/pub/media/"
    }
  }
}
```

### Query a store's theme

The following query returns information about the store's default title, keywords, and welcome text.

**Request:**

```graphql
{
  storeConfig {
    default_title
    default_keywords
    welcome
  }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "default_title": "Adobe Commerce",
      "default_keywords": "Varien, E-commerce",
      "welcome": "Default welcome msg!"
    }
  }
}
```

### Query a store's CMS configuration

The following query returns information about the store's content pages.

**Request:**

```graphql
{
  storeConfig {
    front
    cms_home_page
    no_route
    cms_no_route
    cms_no_cookies
    show_cms_breadcrumbs
  }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "front": "cms",
      "cms_home_page": "home",
      "no_route": "cms/noroute/index",
      "cms_no_route": "no-route",
      "cms_no_cookies": "enable-cookies",
      "show_cms_breadcrumbs": 1
    }
  }
}
```

### Query a store's Catalog configuration

The following query returns information about the store's catalog configuration.

**Request:**

```graphql
{
  storeConfig {
    product_url_suffix
    category_url_suffix
    title_separator
    list_mode
    grid_per_page_values
    list_per_page_values
    grid_per_page
    list_per_page
    catalog_default_sort_by
  }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "product_url_suffix": ".html",
      "category_url_suffix": ".html",
      "title_separator": "-",
      "list_mode": "grid-list",
      "grid_per_page_values": "9,15,30",
      "list_per_page_values": "5,10,15,20,25",
      "grid_per_page": 9,
      "list_per_page": 10,
      "catalog_default_sort_by": "position"
    }
  }
}
```

### Query a store's customer configuration

The following query returns information about the store's customer configuration.

**Request:**

```graphql
{
    storeConfig {
        autocomplete_on_storefront
        minimum_password_length
        required_character_classes_number
        create_account_confirmation
    }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "autocomplete_on_storefront": true,
      "minimum_password_length": "6",
      "required_character_classes_number": "2",
      "create_account_confirmation": false
    }
  }
}
```

### Query a store's access token expiration configuration

The following query returns the value of the **Stores** > Settings > **Configuration** > **Services** > **OAuth** > **Access Token Expiration** > **Customer Token Lifetime (hours)** field.

**Request:**

```graphql
{
    storeConfig {
        customer_access_token_lifetime
    }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "customer_access_token_lifetime": 1
    }
  }
}
```

### Query a store's fixed product tax configuration

The following query returns enumeration values that indicate the store's fixed product tax configuration.

**Request:**

```graphql
{
  storeConfig {
    category_fixed_product_tax_display_setting
    product_fixed_product_tax_display_setting
    sales_fixed_product_tax_display_setting
  }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "category_fixed_product_tax_display_setting": "EXCLUDE_FPT_WITHOUT_DETAILS",
      "product_fixed_product_tax_display_setting": "EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS",
      "sales_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS"
    }
  }
}
```

### Query a store's order cancellation configuration

The following query returns the store's order cancellation settings, indicating if it is enabled and the available cancellation reasons.

**Request:**

```graphql
 {
    storeConfig {
        order_cancellation_enabled
        order_cancellation_reasons {
            description
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "order_cancellation_enabled": true,
      "order_cancellation_reasons": [
        {
          "description": "The item(s) are no longer needed"
        },
        {
          "description": "The order was placed by mistake"
        },
        {
          "description": "Item(s) not arriving within the expected timeframe"
        },
        {
          "description": "Found a better price elsewhere"
        },
        {
          "description": "Other"
        }
      ]
    }
  }
}
```
