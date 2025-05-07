import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# createGiftRegistry mutation

The `createGiftRegistry` mutation creates a gift registry for the logged in customer.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

The `id` input attribute is optional. If a value is not specified, the application creates one. If you specify a value, then you can create a gift registry and make multiple updates in a single call.

The `dynamic_attributes` input field contains an array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair.

When assigning a shipping address, you must specify only one of `address_data` or `address_id`.

Only the gift registry owner can view the following output attributes:

*  `created_at`
*  `privacy_settings`
*  `shipping_address`
*  `status`

## Syntax

```graphql
mutation {
  createGiftRegistry(
    giftRegistry: CreateGiftRegistryInput!
  ) {
    CreateGiftRegistryOutput
  }
}
```

## Reference

The [`createGiftRegistry`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createGiftRegistry) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example creates a gift registry.

**Request:**

```graphql
mutation {
  createGiftRegistry(
    giftRegistry: {
      gift_registry_type_uid: "Mw=="
      event_name: "Bill and Julie's wedding"
      message: "Help us celebrate Bill and Julie's wedding, which will be held on May 1, 2021"
      privacy_settings: PRIVATE
      status: ACTIVE
      shipping_address: {
        address_id: 1
      }
      registrants: [
        {
          firstname: "Julie"
          lastname: "Rao"
          email: "julierao@example.com"
          dynamic_attributes: [{
            code: "role"
            value: "Bride" }]
        }
        {
          firstname: "Bill"
          lastname: "Preston"
          email: "bpreston@example.com"
          dynamic_attributes: [{
            code: "role"
            value: "Groom" }]
        }
      ]
      dynamic_attributes: [
        {
          code: "number_of_guests"
          value: "101"
        }
        {
          code: "event_date"
          value: "2021-05-01"
        }
        {
          code: "event_country"
          value: "US"
        }
        {
          code: "event_location"
          value: "Ann Arbor, MI"
        }
      ]
    }
  ) {
    gift_registry {
      uid
      event_name
      message
      owner_name
      privacy_settings
      status
      registrants {
        uid
        firstname
        lastname
        email
        dynamic_attributes {
          code
          label
          value
        }
      }
      type {
        uid
        label
      }
      items {
        uid
        product {
          uid
          sku
          name
        }
        quantity
        quantity_fulfilled
      }
      shipping_address {
        firstname
        lastname
        street
        region {
          region
        }
        postcode
        country_code
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createGiftRegistry": {
      "gift_registry": {
        "uid": "iSJHFdAtF8YBM5ALgNyNIgQmnbOW9t69",
        "event_name": "Bill and Julie's wedding",
        "message": "Help us celebrate Bill and Julie's wedding, which will be held on May 1, 2021",
        "owner_name": "Veronica Costello",
        "privacy_settings": "PRIVATE",
        "status": "ACTIVE",
        "registrants": [
          {
            "uid": "OQ==",
            "firstname": "Julie",
            "lastname": "Rao",
            "email": "julierao@example.com",
            "dynamic_attributes": [
              {
                "code": "role",
                "label": "Role",
                "value": "Bride"
              }
            ]
          },
          {
            "uid": "MTA=",
            "firstname": "Bill",
            "lastname": "Preston",
            "email": "bpreston@example.com",
            "dynamic_attributes": [
              {
                "code": "role",
                "label": "Role",
                "value": "Groom"
              }
            ]
          }
        ],
        "type": {
          "uid": "Mw==",
          "label": "Wedding"
        },
        "items": [],
        "shipping_address": {
          "firstname": "Veronica",
          "lastname": "Costello",
          "street": [
            "6146 Honey Bluff Parkway"
          ],
          "region": {
            "region": "Michigan"
          },
          "postcode": "49628-7978",
          "country_code": "US"
        }
      }
    }
  }
}
```
