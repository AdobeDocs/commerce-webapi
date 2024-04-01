---
title: Step 5. Update store specific bundle product options
description: In this step of the tutorial you will update store specific(or all store optional)
bundle product options using `option_id` from the previous step.
keywords:
  - REST
--- 
 
# Step 5. Update store specific bundle product options

The following example uses the `PUT /V1/bundle-products/options/{optionId}` call 
to update the bundle product option. For a store-specific request, add the `store_code`. 
For example, `PUT {store_code}/V1/bundle-products/options/{optionId}`

**Endpoint:**

```html
PUT http://domain.com/rest/default/V1/bundle-products/options/14
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "option_id": 14,
  "title": "RAM-Version-2",
  "required": true,
  "type": "select",
  "position": 1,
  "sku": "Desktop-Computer",
  "product_links": [
    {
      "id": "19",
      "sku": "RAM-12GB",
      "option_id": 14,
      "qty": 10,
      "position": 1,
      "is_default": false,
      "price": 25,
      "price_type": null,
      "can_change_quantity": 0,
      "extension_attributes": {}
    },
    {
      "id": "20",
      "sku": "RAM-24GB",
      "option_id": 14,
      "qty": 12,
      "position": 2,
      "is_default": false,
      "price": 50,
      "price_type": null,
      "can_change_quantity": 0,
      "extension_attributes": {}
    }
  ],
  "extension_attributes": {}
}
```

#### Response

```json
14
```