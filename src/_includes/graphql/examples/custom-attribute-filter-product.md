The following query returns `custom_attributes` of a product that have `is_comparable` enabled.

**Request:**

```graphql
{
    products(filter: {sku: {eq: "24-MB02"}})
    {
        items
        {
            sku
            name
            custom_attributesV2(filters: {is_comparable: true})
            {
                items
                {
                    code
                    ... on AttributeValue {
                        value
                    }
                    ... on AttributeSelectedOptions {
                        selected_options {
                            label
                            value
                        }
                    }
                },
                errors {
                    type
                    message
                }
            }
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "sku": "24-MB02",
          "name": "Fusion Backpack",
          "custom_attributesV2": {
            "items": [
              {
                "code": "description",
                "value": "<p>With the Fusion Backpack strapped on, every trek is an adventure - even a bus ride to work. That's partly because two large zippered compartments store everything you need, while a front zippered pocket and side mesh pouches are perfect for stashing those little extras, in case you change your mind and take the day off.</p>\n<ul>\n<li>Durable nylon construction.</li>\n<li>2 main zippered compartments.</li>\n<li>1 exterior zippered pocket.</li>\n<li>Mesh side pouches.</li>\n<li>Padded, adjustable straps.</li>\n<li>Top carry handle.</li>\n<li>Dimensions: 18\" x 10\" x 6\".</li>\n</ul>"
              },
              {
                "code": "activity",
                "selected_options": [
                  {
                    "label": "Yoga",
                    "value": "17"
                  },
                  {
                    "label": "Hiking",
                    "value": "27"
                  },
                  {
                    "label": "School",
                    "value": "29"
                  }
                ]
              }
            ],
            "errors": []
          }
        }
      ]
    }
  }
}
```
