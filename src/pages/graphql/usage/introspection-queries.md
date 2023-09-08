---
title: GraphQL introspection queries
description: Learn how to view details about specific data types.
keywords:
  - GraphQL
---

# Introspection queries

Introspection queries allow you to return information about the schema. For example, you might want a list of GraphQL queries or details about a specific data type. The GraphQL specification determines the structure of introspection queries. See [Introspection](https://graphql.org/learn/introspection/) for more information.

An introspection query returns the same result whether or not you assign it an operation name, such as `IntrospectionQuery`.

## Disable introspection querying

Introspection querying is enabled by default. To disable it in production mode to improve security, add the following to your `app/etc/env.php` file.

```php
'graphql' => [
    'disable_introspection' => true,
]
```

## Example introspection queries

### Return a list of queries

The following query returns a list of queries.

**Request:**

```graphql
query IntrospectionQuery {
  __schema {
    queryType {
      fields {
        name
        description
        type{
         name
         kind
        }
      }
    }
  }
}
```

### Return a list of mutations

The following query returns a list of mutations.

**Request:**

```graphql
query IntrospectionQuery {
  __schema {
    mutationType {
      fields {
        name
        description
        type{
         name
         kind
        }
      }
    }
  }
}
```

### Get details about a data type

The following introspection query returns details about the `ProductAttributeFilterInput` data type.

**Request:**

```graphql
query IntrospectionQuery {
  __type(name: "ProductAttributeFilterInput") {
    name
    kind
    description
    inputFields {
      name
      description
      defaultValue
    }
    fields {
      name
      args {
        name
        description
        type {
          kind
          name
        }
      }
      type {
        kind
        name
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "__type": {
      "name": "ProductAttributeFilterInput",
      "kind": "INPUT_OBJECT",
      "description": "ProductAttributeFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.",
      "inputFields": [
        {
          "name": "category_id",
          "description": "Filter product by category id",
          "defaultValue": null
        },
        {
          "name": "description",
          "description": "Attribute label: Description",
          "defaultValue": null
        },
        {
          "name": "name",
          "description": "Attribute label: Product Name",
          "defaultValue": null
        },
        {
          "name": "price",
          "description": "Attribute label: Price",
          "defaultValue": null
        },
        {
          "name": "short_description",
          "description": "Attribute label: Short Description",
          "defaultValue": null
        },
        {
          "name": "sku",
          "description": "Attribute label: SKU",
          "defaultValue": null
        },
        {
          "name": "url_key",
          "description": "The part of the URL that identifies the product",
          "defaultValue": null
        }
      ],
      "fields": null
    }
  }
}
```
