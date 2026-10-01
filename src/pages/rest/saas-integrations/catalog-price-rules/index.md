---
title: Catalog Price Rule REST Endpoints
description: Learn how to create, retrieve, update, delete, and search catalog price rules with REST APIs in Adobe Commerce as a Cloud Service.
keywords:
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# Catalog price rule API

The catalog price rule REST API lets integrations manage product discounts without creating or editing each rule in the Admin. Use the API to discover supported conditions, create rules, and manage existing rules with the same nested condition logic available in the Admin.

Catalog price rules apply to products for the specified websites and customer groups. For cart price rules, which apply discounts during checkout, use the [salesRules API](https://adobe-commerce-saas.redoc.ly/tag/salesRules/). The two APIs use different condition payloads.

## Authentication and scope

Authenticate each request with an Adobe Identity Management Service (IMS) access token. The associated Admin role must include the `Magento_CatalogRule::promo_catalog` Access Control List (ACL) resource. Customer and guest access is not supported.

See [REST authentication](../../authentication/index.md) for user and server-to-server authentication.

Use the Adobe Commerce as a Cloud Service URL structure:

```http
GET https://<server>.api.commerce.adobe.com/<tenant-id>/V1/catalogPriceRules/metadata
Authorization: Bearer <IMS_ACCESS_TOKEN>
Content-Type: application/json
Store: all
```

Do not include `/rest` or a store view code in the URL. The `Store` header specifies the request scope, while the rule's `website_ids` specifies the websites where the discount applies. Include `website_ids` when creating a rule. On update, omit it or send `null` to preserve the existing websites.

## REST API reference

All six endpoints require the `Magento_CatalogRule::promo_catalog` ACL resource.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/V1/catalogPriceRules/metadata` | Discover discount actions and attributes available for conditions. |
| `GET` | `/V1/catalogPriceRules/search` | Search rules with filters, sorting, and pagination. |
| `GET` | `/V1/catalogPriceRules/{ruleId}` | Retrieve a rule by ID. |
| `POST` | `/V1/catalogPriceRules` | Create a rule. |
| `PUT` | `/V1/catalogPriceRules/{ruleId}` | Update a rule. |
| `DELETE` | `/V1/catalogPriceRules/{ruleId}` | Delete a rule. |

## Discover available conditions

Before creating a rule, retrieve the metadata:

```http
GET /V1/catalogPriceRules/metadata
```

The response contains `simple_actions`, the supported discount actions, and `condition_attributes`, the attributes that can be used in rule conditions. Each attribute includes its `attribute_code`, `label`, `input_type`, supported `operators`, and a `value_source` endpoint when values must be retrieved separately.

The following response excerpt shows the category condition:

```json
{
  "simple_actions": [
    "by_percent",
    "by_fixed",
    "to_percent",
    "to_fixed"
  ],
  "condition_attributes": [
    {
      "attribute_code": "category_ids",
      "label": "Category",
      "input_type": "select",
      "operators": ["==", "!=", "{}", "!{}", "()", "!()"],
      "value_source": "/V1/categories"
    }
  ]
}
```

The available product attributes depend on the instance's attribute configuration. Use the returned metadata instead of assuming that an attribute or operator is supported.

Retrieve the IDs needed for rule scope and condition values using the following endpoints. These endpoints have their own permission requirements.

| Values | Endpoint |
| --- | --- |
| Website IDs | `GET /V1/store/websites` |
| Customer group IDs | `GET /V1/customerGroups/search` |
| Category IDs | `GET /V1/categories` |
| Product attribute set IDs | `GET /V1/products/attribute-sets/sets/list` |
| Attribute option values | `GET /V1/products/attributes/{attributeCode}/options` |

Use option values, not option labels, in conditions for select and multiselect attributes.

## Rule fields

Create and update requests wrap the rule fields in a `rule` object. Defaults apply when creating a rule. On update, omitted or null fields preserve their existing values.

| Field | Type | Description |
| --- | --- | --- |
| `rule_id` | Integer | The generated rule ID returned by the API. For updates, use the ID in the URL. |
| `name` | String | Required on create; optional on update. Must not be blank. |
| `description` | String | Optional rule description. |
| `website_ids` | Integer array | Required on create; optional on update. A nonempty list of existing storefront website IDs. Website ID `0` is not supported. |
| `customer_group_ids` | Integer array | Required on create; optional on update. A nonempty list of existing customer group IDs. |
| `simple_action` | String | Required on create; optional on update. One of the four supported discount actions. |
| `discount_amount` | Number | Required on create; optional on update. Must be nonnegative. Percentage actions accept values from 0 to 100. |
| `is_active` | Integer | `0` for inactive or `1` for active. Defaults to `0`. |
| `stop_rules_processing` | Integer | `1` prevents subsequent rules from applying to matching products. `0` allows further rule processing. Defaults to `1`. |
| `sort_order` | Integer | Nonnegative rule priority. Lower values have higher priority. Defaults to `0`. |
| `from_date` | String | Optional start date or UTC datetime. |
| `to_date` | String | Optional end date or UTC datetime. Must not precede `from_date`. |
| `condition` | Object | Optional root condition group containing leaf conditions or nested groups. Omitting it on create targets all products within the rule's website and customer group scope. |

### Discount actions

The `simple_action` determines how `discount_amount` changes the price:

| Action | Behavior | Example for a price of 100 |
| --- | --- | --- |
| `by_percent` | Reduce the price by the specified percentage. | An amount of `20` produces a price of 80. |
| `by_fixed` | Reduce the price by the specified fixed amount. | An amount of `20` produces a price of 80. |
| `to_percent` | Set the price to the specified percentage. | An amount of `20` produces a price of 20. |
| `to_fixed` | Set the price to the specified fixed amount. | An amount of `20` produces a price of 20. |

### Schedule dates

Both `from_date` and `to_date` accept:

- `YYYY-MM-DD`. The start date uses the beginning of the day and the end date uses the end of the day in the configured Admin timezone.
- `YYYY-MM-DD HH:MM:SS`. The datetime is interpreted as UTC.

Schedule values are stored and returned as UTC datetimes. To clear an existing schedule boundary in an update, send an empty string for that field. Omitting the field or sending `null` preserves its current value.

## Create a rule

The following request creates an inactive rule that reduces prices by 10 percent for products in category `12`, on website `1`, for customer group `1`. Replace these IDs with existing values from your instance.

```http
POST /V1/catalogPriceRules
```

Request body:

```json
{
  "rule": {
    "name": "Category discount",
    "description": "Ten percent off products in the selected category.",
    "website_ids": [1],
    "customer_group_ids": [1],
    "simple_action": "by_percent",
    "discount_amount": 10,
    "condition": {
      "aggregator": "all",
      "match": true,
      "conditions": [
        {
          "attribute_code": "category_ids",
          "operator": "==",
          "value": "12"
        }
      ]
    }
  }
}
```

The response returns the saved rule object, including its generated `rule_id` and default values:

```json
{
  "rule_id": 42,
  "name": "Category discount",
  "description": "Ten percent off products in the selected category.",
  "is_active": 0,
  "website_ids": [1],
  "customer_group_ids": [1],
  "simple_action": "by_percent",
  "discount_amount": 10,
  "stop_rules_processing": 1,
  "sort_order": 0,
  "condition": {
    "aggregator": "all",
    "match": true,
    "conditions": [
      {
        "attribute_code": "category_ids",
        "operator": "==",
        "value": "12"
      }
    ]
  }
}
```

Review the saved rule before activating it with `is_active: 1`. You can also set `is_active` explicitly when creating a rule.

## Build nested conditions

The `condition` object is a root group. Each group has a `conditions` array containing leaf conditions, nested groups, or both.

- `aggregator: "all"` combines children with AND. `"any"` combines them with OR. The default is `"all"`.
- `match` specifies the required result for each child: `true` or `false`. The default is `true`. The `aggregator` determines whether all or any children must have that result. For example, `"all"` with `match: false` requires every child condition to be false.
- A leaf uses `attribute_code`, `operator`, and a string `value`. Do not include `aggregator`, `match`, or child `conditions` on a leaf.
- A nested group uses `aggregator`, `match`, and child `conditions`. Do not include leaf fields on a group.

The following update targets products in attribute set `4` that belong to either category `12` or category `13`. Replace these IDs with valid values from your instance.

```http
PUT /V1/catalogPriceRules/42
```

Request body:

```json
{
  "rule": {
    "condition": {
      "aggregator": "all",
      "match": true,
      "conditions": [
        {
          "attribute_code": "attribute_set_id",
          "operator": "==",
          "value": "4"
        },
        {
          "aggregator": "any",
          "match": true,
          "conditions": [
            {
              "attribute_code": "category_ids",
              "operator": "==",
              "value": "12"
            },
            {
              "attribute_code": "category_ids",
              "operator": "==",
              "value": "13"
            }
          ]
        }
      ]
    }
  }
}
```

Condition trees support up to 10 levels and 100 total nodes, including the root group. Nested groups must contain at least one child.

Use only operators returned for the attribute by the metadata endpoint. Where an operator supports multiple values, supply a comma-separated string, such as `"12,13"`, rather than a JSON array. Scalar operators for structured values require a single value. The `<=>` operator means "is undefined" and does not require a value.

## Retrieve and update a rule

Retrieve a rule by its ID:

```http
GET /V1/catalogPriceRules/42
```

The response returns the rule object, including its full condition tree.

Updates preserve existing values for fields you omit or set to `null`. For example, the following request activates the rule and changes the discount to 15 percent without changing its name, scope, schedule, or conditions:

```http
PUT /V1/catalogPriceRules/42
```

Request body:

```json
{
  "rule": {
    "is_active": 1,
    "discount_amount": 15
  }
}
```

The response returns the updated rule object. The API validates the combined existing and requested values. For example, updating `discount_amount` to `150` on a `by_percent` rule fails even when `simple_action` is omitted.

If you provide `condition`, it replaces the entire condition tree. Omitting `condition` or sending `null` preserves the existing tree. To remove all product conditions, send an empty root group:

```json
{
  "rule": {
    "condition": {
      "aggregator": "all",
      "match": true,
      "conditions": []
    }
  }
}
```

An empty root group makes the rule apply to all products within its website and customer group scope. It is not a way to disable the rule. To disable it, set `is_active` to `0`.

## Search rules

Use `/V1/catalogPriceRules/search`, not the collection URL, to list and filter rules. The following request finds active rules, sorts them by ID, and returns the first page of 20 results:

```text
GET /V1/catalogPriceRules/search
    ?searchCriteria[filterGroups][0][filters][0][field]=is_active
    &searchCriteria[filterGroups][0][filters][0][value]=1
    &searchCriteria[filterGroups][0][filters][0][conditionType]=eq
    &searchCriteria[sortOrders][0][field]=rule_id
    &searchCriteria[sortOrders][0][direction]=ASC
    &searchCriteria[pageSize]=20
    &searchCriteria[currentPage]=1
```

The query parameters are shown on separate lines for readability. Send them as one URL.

The response contains:

- `items`, an array of rule objects, including their condition trees.
- `search_criteria`, the criteria used for the request.
- `total_count`, the total number of matching rules across all pages.

Increase `searchCriteria[currentPage]` to retrieve subsequent pages. An omitted or zero page size defaults to 200. Values above 500 are capped at 500. Negative page sizes and current pages below 1 are rejected.

See [Search using REST endpoints](../../use-rest/performing-searches.md) for filter groups, comparison operators, sorting, and pagination.

## Delete a rule

```http
DELETE /V1/catalogPriceRules/42
```

The response confirms deletion:

```json
true
```

## Validation

Invalid rule input returns HTTP `400`. Validation checks required fields, discount actions and amounts, flags, schedule dates, and the existence of referenced websites and customer groups.

Conditions are checked against the metadata's allowed attributes and operators. Referenced categories, product attribute sets, and option values must be valid. Boolean condition values use `"0"` or `"1"`, and date condition values accept `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS`.

A supplied root `condition` must be an object with a `conditions` array. Malformed nodes, empty nested groups, and condition trees that exceed the depth or node limits are rejected.

Updates that activate a rule or keep it active also validate its existing conditions. If a referenced category, attribute set, or option has been removed, correct the condition before activating or updating the rule.

Retrieving, updating, or deleting a nonexistent rule returns HTTP `404`.

## Storefront price updates

Only active rules within their schedule affect storefront prices for the specified websites and customer groups.

Price updates are asynchronous. A successful create, update, or delete response confirms the rule operation, not that storefront prices have already changed. Allow time for the price update to complete before checking prices through Catalog Service GraphQL, using the applicable customer group context.
