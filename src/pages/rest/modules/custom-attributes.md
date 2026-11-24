---
title: Custom attributes
description: Overview of available REST Modules
keywords:
  - REST
---

# Custom attributes

<InlineAlert variant="warning" slots="text" />

This functionality is automatically available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) (SaaS) projects. Adobe Commerce on-premises and Cloud infrastructure (PaaS) projects can [install separate modules](#install-custom-attribute-support) to provide this functionality.

Custom attributes can extend the core data model in Adobe Commerce, allowing you to add additional attributes to entities without requiring code or database schema changes. Consider a situation where you want to specify a `duns_number` or `industry_type` information for a company. Custom attributes make this possible.

These custom attributes operate independently of the EAV (Entity-Attribute-Value) attributes, which are defined in the Admin. They do not apply to products, categories, or customers.

Use standard POST and PUT requests to set custom attributes. All values are strings.

## Supported modules

The following sections describe the REST endpoints that support custom attributes. The endpoints are grouped by feature.

### Cart

<InlineAlert variant="warning" slots="text" />

Adobe Commerce as a Cloud Service does not support REST endpoints that modify the cart on behalf of a customer or guest user. Use the GraphQL [`setCustomAttributesOnCart` mutation](../../graphql/schema/attributes/mutations/set-custom-cart.md) and the [`setCustomAttributesOnCartItem` mutation](../../graphql/schema/attributes/mutations/set-custom-cart-item.md) instead for these types of users. Admin users can use the REST endpoints to set custom attributes on the cart and cart items.

When the quote is converted to an order, the custom attributes are copied to the order.

The following example shows how to set custom attributes on a cart when assigning a customer to a cart. The `quote` object contains the `custom_attributes` array, which includes the custom attributes to set.

```curl
curl -i -X PUT \
   -H "Content-Type:application/json" \
   -H "Authorization:Bearer <TOKEN>" \
   -d \
'{
  "quote": {
    "customer": {
        "id":2
    },
    "store_id":1,
    "custom_attributes":[       
        {
            "attribute_code": "attr_one",
            "value": "value_one"
        },
        {
            "attribute_code": "attr_two",
            "value": "value_two"
        }
    ]
  }
}' \
 'https://<COMMERCE_URL>/rest/all/V1/carts/{cartId}'
```

The `POST /V1/carts/{cartId}/customAttributes` endpoint allows you to set or update custom attributes on already existing carts. The request body must include the `cart_id` and an array of `custom_attributes`.

```curl
curl -i -X POST \
   -H "Content-Type:application/json" \
   -H "Authorization:Bearer <TOKEN>" \
   -d \
'{
  "cart_id": "20",
  "custom_attributes":[       
    {
       "attribute_code": "attr_one",
       "value": "value_one"
    },
    {
       "attribute_code": "attr_two",
       "value": "value_two"
    }
  ]
}' \
 'https://<COMMERCE_URL>/rest/all/V1/carts/{cartId}/customAttributes'
```

A quote item with custom attributes can be added/updated using `PUT /V1/carts/{cartId}/items/{itemId}`.

```curl
curl -i -X PUT \
   -H "Content-Type:application/json" \
   -H "Authorization:Bearer <TOKEN>" \
   -d \
'{
  "cart_item": {
    "quote_id": "<QUOTE_ID>",
    "qty": 1,
    "sku": "<PRODUCT_SKU>",
    "custom_attributes":[
        {
            "attribute_code": "attr_one",
            "value": "value_one"
        },
        {
            "attribute_code": "attr_two",
            "value": "value_two"
        }
    ]
  }
}' \
 'https://<COMMERCE_URL>/rest/all/V1/carts/1/items/0'
```

### Company

The `POST V1/company/setCustomAttributes` endpoint allows you to set custom attributes on a company. The request body must include the `company_id` and an array of `custom_attributes`.

```curl
curl -i -X POST \
   -H "Authorization:Bearer <TOKEN>" \
   -H "Content-Type:application/json" \
   -d \
'{
  "company_id": "68",
  "custom_attributes":[
    {
      "attribute_code": "attr one",
      "value": "value one"
    },
    {
      "attribute_code": "attr two",
      "value": "valuetwo"
    }
  ]
}' \
 'http://<COMMERCE_URL>/rest/all/V1/company/setCustomAttributes'
```

### Creditmemo

You can use the `POST V1/creditmemo` and `PUT V1/creditmemo/{id}` endpoints to set custom attributes on a credit memo and its items.

```curl
curl -i -X POST \
   -H "Content-Type:application/json" \
   -H "Authorization:Bearer <TOKEN>" \
   -d \
'{
  "entity": {
    "order_id": 1,
    "items": [
      {
        "order_item_id": 1,
        "qty": 2,
        "base_cost": 10,
        "base_price": 12,
        "custom_attributes": [
          {
            "attribute_code": "attr_one",
            "value": "value_one"
          },
          {
            "attribute_code": "attr_two",
            "value": "value_two"
          }
        ]
      }
    ],
    "custom_attributes": [
      {
        "attribute_code": "attr_one",
        "value": "value_one"
      },
      {
        "attribute_code": "attr_two",
        "value": "value_two"
      }
    ]
  }
}' \
 'http://<COMMERCE_URL>/rest/all/V1/creditmemo'
```

### Invoice

The `POST V1/invoices` endpoint sets custom attributes on an invoice and its items, as shown in the following example.

```curl
curl -i -X POST \
   -H "Content-Type:application/json" \
   -H "Authorization:Bearer <TOKEN>" \
   -d \
'{
  "entity": {
    "order_id": 46,
    "custom_attributes":[
      {
          "attribute_code": "attr one",
          "value": "value one"
      },
      {
          "attribute_code": "attr two",
          "value": "value two"
      }
    ],
    "items": [
      {
        "orderItemId": 46,
        "qty": 2,
        "sku": "sku12343",
        "custom_attributes":[
          {
              "attribute_code": "attr one",
              "value": "value one"
          },
          {
              "attribute_code": "attr two",
              "value": "value two"
          }
        ]
      }
    ]
  }
}' \
 'http://<COMMERCE_URL>/rest/all/V1/invoices'
```

### Order

The following example uses the `POST V1/orders` endpoint to set custom attributes on an order.

```curl
curl -i -X POST \
   -H "Content-Type:application/json" \
   -H "Authorization:Bearer <token>" \
   -d \
'{
  "entity": {
    "entity_id": 14,
    "custom_attributes":[
      {
          "attribute_code": "attr_one",
          "value": "value_one"
      },
      {
          "attribute_code": "attr_two",
          "value": "value_two"
      }
    ]
  }
}' \
 'https://<COMMERCE_URL>/rest/all/V1/orders'
```

If an order item has custom attributes, they will be returned as part of the order item object in responses to requests like `GET /V1/orders/items/{id}`.

The `POST /V1/orders/{orderId}/customAttributes` endpoint allows you to add or update custom attributes on already existing orders. The request body must include an array of `customAttributes`.

```curl
curl -i -X POST \
   -H "Content-Type:application/json" \
   -H "Authorization:Bearer <TOKEN>" \
   -d \
'{
  "customAttributes":[
    {
       "attribute_code": "attr_one",
       "value": "value_one"
    },
    {
       "attribute_code": "attr_two",
       "value": "value_two"
    }
  ]
}' \
 'https://<COMMERCE_URL>/rest/all/V1/orders/{orderId}/customAttributes'
```

### Negotiable Quote

The `POST /V1/negotiableQuote/setCustomAttributes` endpoint allows you to set custom attributes on a negotiable quote. The request body must include the `quote_id` and an array of `custom_attributes`.

```curl
curl -i -X POST \
   -H "Authorization:Bearer <TOKEN>" \
   -H "Content-Type:application/json" \
   -d \
'{
  "quote_id": "68",
  "custom_attributes":[
    {
      "attribute_code": "attr one",
      "value": "value one"
    },
    {
      "attribute_code": "attr two",
      "value": "valuetwo"
    }
  ]
}' \
 'http://<COMMERCE_URL>/rest/all/V1/negotiableQuote/setCustomAttributes'
```

### Returns

Use return custom attributes to store integration details, such as a warehouse reference, on a return merchandise authorization (RMA). Return custom attributes are available by default in Adobe Commerce as a Cloud Service (SaaS). On Adobe Commerce on cloud infrastructure (PaaS) and on-premises, [install](#install-custom-attribute-support) version `0.8.0` or later of `magento/out-of-process-custom-attributes` to use them.

To set or update attributes on a return, use `POST /V1/returns` or `PUT /V1/returns/{id}`. Add the `custom_attributes` array to `rmaDataObject`, not to an item in the return. The following example shows only the fields for setting custom attributes. Include the other fields required by the endpoint in your request.

```json
{
  "rmaDataObject": {
    "custom_attributes": [
      {
        "attribute_code": "warehouse_reference",
        "value": "WH-01"
      }
    ]
  }
}
```

Use `GET /V1/returns/{id}` to read the attributes of a single return or `GET /V1/returns` to read them in a list of returns. Both return the values in `custom_attributes`.

#### Override the return address (SaaS only)

In Adobe Commerce as a Cloud Service, `return_address` is a reserved attribute that overrides the store's configured return address for one return. The PaaS and on-premises metapackage adds support for storing custom attributes but does not enable this override.

To set the override, include the following entry in `rmaDataObject.custom_attributes` when you create or update a return. Encode the address object as a JSON string in `value`.

```json
{
  "attribute_code": "return_address",
  "value": "{\"contact_name\":\"Returns Department\",\"street\":[\"100 Example Avenue\",\"Dock 2\"],\"city\":\"Austin\",\"region_code\":\"TX\",\"postcode\":\"78701\",\"country_id\":\"US\",\"telephone\":\"512-555-0142\"}"
}
```

| Field | Required | Description |
|---|---|---|
| `street` | Yes | Street address as a string or an array of address lines. |
| `city` | Yes | City or locality. |
| `postcode` | Yes | Postal code as a string. |
| `country_id` | Yes | Country code recognized by Adobe Commerce, such as `US`. |
| `region_id`, `region_code`, or `region` | No | State or province as an Adobe Commerce region ID, a code such as `TX`, or a name such as `Texas`. |
| `contact_name` | No | Name of the return recipient. |
| `telephone` | No | Phone number of the return recipient. |

Adobe Commerce uses the override in the following places:

* The **Return Address** section of the existing return in the Admin.
* New and authorized return emails and the printed return.
* The GraphQL `Return.shipping.address` field.
* Shipping rate requests and the recipient address on return shipping labels created in the Admin.

If `return_address` is missing, cannot be parsed, or does not contain a complete address with a recognized country code, Adobe Commerce uses the store's configured return address. The **New Return** page in the Admin still shows the configured address. You cannot edit the override directly in the Admin.

## Install custom attribute support

<Fragment src="/_includes/custom-attribute-installation.md"/>
