---
title: removeProductsFromCompareList mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# removeProductsFromCompareList mutation

The `removeProductsFromCompareList` mutation removes products from a comparison list.

You must specify the unique ID of a comparison list along with the list of product IDs to be removed.

## Syntax

```graphql
mutation {
    removeProductsFromCompareList(
        input: RemoveProductsFromCompareListInput
    ) {
        CompareList
    }
}
```

## Reference

The [`removeProductsFromCompareList`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeProductsFromCompareList) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example removes two products from the comparison list with the unique ID "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD".

**Request:**

```graphql
mutation {
  removeProductsFromCompareList(
    input: {
      uid: "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD",
      products: ["1", "2"]
    }
  ) {
    uid
    item_count
    attributes {
      code
      label
    }
    items {
      uid
      product {
        sku
        name
        description {
          html
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
    "removeProductsFromCompareList": {
      "uid": "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD",
      "item_count": 2,
      "attributes": [
        {
          "code": "sku",
          "label": "SKU"
        },
        {
          "code": "description",
          "label": "Description"
        },
        {
          "code": "short_description",
          "label": "Short Description"
        },
        {
          "code": "activity",
          "label": "Activity"
        }
      ],
      "items": [
        {
          "uid": "3",
          "product": {
            "sku": "24-MB03",
            "name": "Crown Summit Backpack",
            "description": {
              "html": "<p>The Crown Summit Backpack is equally at home in a gym locker, study cube or a pup tent, so be sure yours is packed with books, a bag lunch, water bottles, yoga block, laptop, or whatever else you want in hand. Rugged enough for day hikes and camping trips, it has two large zippered compartments and padded, adjustable shoulder straps.</p>\n<ul>\n<li>Top handle.</li>\n<li>Grommet holes.</li>\n<li>Two-way zippers.</li>\n<li>H 20\" x W 14\" x D 12\".</li>\n<li>Weight: 2 lbs, 8 oz. Volume: 29 L.</li>\n<ul>"
            }
          }
        },
        {
          "uid": "4",
          "product": {
            "sku": "24-MB05",
            "name": "Wayfarer Messenger Bag",
            "description": {
              "html": "<p>Perfect for class, work or the gym, the Wayfarer Messenger Bag is packed with pockets. The dual-buckle flap closure reveals an organizational panel, and the roomy main compartment has spaces for your laptop and a change of clothes. An adjustable shoulder strap and easy-grip handle promise easy carrying.</p>\n<ul>\n<li>Multiple internal zip pockets.</li>\n<li>Made of durable nylon.</li>\n</ul>"
            }
          }
        }
      ]
    }
  }
}
```

## Related topics

*  [compareList query](../queries/compare-list.md)
*  [addProductsToCompareList mutation](add-products-to-compare-list.md)
*  [assignCompareListToCustomer mutation](assign-compare-list.md)
*  [createCompareList mutation](create-compare-list.md)
*  [deleteCompareList mutation](delete-compare-list.md)
