---
title: Step 6. Update store-specific bundle product option links
description: In this step of the tutorial you will update store specific(or all store optional)
bundle product option links using `selection_id` from `product_links` from the step 4.
keywords:
  - REST
--- 
 
# Step 6. Update store-specific bundle product option links

The following example uses the `PUT /V1/bundle-products/{sku}/links/{optionId}` call to update the bundle product option link. For a store-specific call, add `store_code` to the API request.
For example, `PUT {store_code}/V1/bundle-products/{sku}/links/{optionId}`


**Endpoint:**

```html
PUT http://domain.com/rest/default/V1/bundle-products/Desktop-Computer/links/14
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "linkedProduct":
  {
    "id": "19",
    "option_id": 14,
    "sku": "RAM-12GB",
    "qty": 2,
    "is_default": false,
    "can_change_quantity": 0,
    "price": 35,
    "price_type": 0,
    "extension_attributes": { }
  }
}
```

#### Response

```json
true
```