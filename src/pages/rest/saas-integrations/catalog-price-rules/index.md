---
title: Catalog Price Rules
description: Learn how to create, retrieve, update, delete, and search catalog price rules with REST APIs in Adobe Commerce as a Cloud Service.
keywords:
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# Catalog price rules

Use these REST endpoints to manage catalog price rules in Adobe Commerce as a Cloud Service. Rules apply product discounts to the specified websites and customer groups.

## Authentication

These endpoints require an [IMS access token](../../authentication/index.md). To access them, you must have the `Magento_CatalogRule::promo_catalog` permission.

## Website scope

Set the rule's target websites with `website_ids`. The `Store` header controls the REST request scope. See the [REST API overview](../../index.md) for URL and header details.

## REST API reference

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/V1/catalogPriceRules/metadata` | Discover discount actions and attributes available for conditions. |
| `GET` | `/V1/catalogPriceRules/search` | Search rules with filters, sorting, and pagination. |
| `GET` | `/V1/catalogPriceRules/{ruleId}` | Retrieve a rule by ID. |
| `POST` | `/V1/catalogPriceRules` | Create a rule. |
| `PUT` | `/V1/catalogPriceRules/{ruleId}` | Update a rule. |
| `DELETE` | `/V1/catalogPriceRules/{ruleId}` | Delete a rule. |

## Rule fields

Create and update requests wrap the rule fields in a `rule` object. Defaults only apply when creating a rule. On update, omitted or null fields preserve their existing values.

| Field | Type | Description |
| --- | --- | --- |
| `rule_id` | Integer | The generated rule ID returned by the API. For updates, use the ID in the URL. |
| `name` | String | Required on create; optional on update. Must not be blank. |
| `description` | String | Optional rule description. |
| `website_ids` | Integer array | Required on create; optional on update. A nonempty list of existing storefront website IDs. Website ID `0` is not supported. |
| `customer_group_ids` | Integer array | Required on create; optional on update. A nonempty list of existing customer group IDs. |
| `simple_action` | String | Required on create; optional on update. One of the four supported [discount actions](#discount-actions). |
| `discount_amount` | Number | Required on create; optional on update. Percentage actions accept values from 0 to 100. Fixed-amount actions accept values of 0 or greater. |
| `is_active` | Integer | `0` for inactive or `1` for active. Defaults to `0`. |
| `stop_rules_processing` | Integer | `1` prevents subsequent rules from applying to matching products. `0` allows further rule processing. Defaults to `1`. |
| `sort_order` | Integer | Nonnegative rule priority. Lower values have higher priority. Defaults to `0`. |
| `from_date` | String | Optional start date or UTC datetime. See [Schedule dates](#schedule-dates). |
| `to_date` | String | Optional end date or UTC datetime. Must not precede `from_date`. See [Schedule dates](#schedule-dates). |
| `condition` | Object | Optional root condition group containing leaf conditions or nested groups. Omitting it on create targets all products within the rule's website and customer group scope. See [Conditions](#conditions). |

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

### Conditions

The `condition` object is a root group. Each group has a `conditions` array containing leaf conditions, nested groups, or both.

- `aggregator: "all"` combines children with AND. `"any"` combines them with OR. The default is `"all"`.
- `match` specifies the required result for each child: `true` or `false`. The default is `true`. The `aggregator` determines whether any or all children must have that result. For example, `"all"` with `match: false` requires every child condition to be false.
- A leaf uses `attribute_code`, `operator`, and a string `value`. Do not include `aggregator`, `match`, or child `conditions` on a leaf.
- A nested group uses `aggregator`, `match`, and child `conditions`. Do not include leaf fields on a group.

The following `condition` value targets products in attribute set `4` that belong to either category `12` or category `13`. You can send it in a create or update request.

```json
{
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
```

Condition trees support up to 10 levels and 100 total nodes, including the root group. Nested groups must contain at least one child.

Use only operators returned for the attribute by the [metadata endpoint](#condition-attributes). Where an operator supports multiple values, supply a comma-separated string, such as `"12,13"`, rather than a JSON array. Scalar operators for structured values require a single value. The `<=>` operator means "is undefined" and does not require a value.

Boolean condition values use `"0"` or `"1"`. Date condition values accept `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS`.

### Condition attributes

The metadata endpoint returns the discount actions and condition attributes available on your instance. Each attribute includes its supported operators and, for attributes with predefined values, the endpoint that returns those values.

```http
GET /V1/catalogPriceRules/metadata
```

The following response is shortened to show only the category condition:

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

Available attributes depend on your instance's configuration. Use the attributes and operators returned by the metadata endpoint.

### Lookup values

Retrieve the IDs needed for rule scope and condition values using the following endpoints. Each endpoint requires the permission shown next to it.

- Website IDs: `GET /V1/store/websites`, which requires `Magento_Backend::store`.
- Customer group IDs: `GET /V1/customerGroups/search`, which requires `Magento_Customer::group`.
- Category IDs: `GET /V1/categories`, which requires `Magento_Catalog::categories`.
- Product attribute set IDs: `GET /V1/products/attribute-sets/sets/list`, which requires `Magento_Catalog::sets`.
- Attribute option values: `GET /V1/products/attributes/{attributeCode}/options`, which requires `Magento_Catalog::attributes_attributes`.

Use option values, not option labels, in conditions for select and multiselect attributes.

## Manage rules

### Create a rule

The following request creates an inactive rule that reduces prices by 10 percent for products in category `12`, on website `1`, for customer group `1`.

```http
POST /V1/catalogPriceRules
```

Request body:

```json
{
  "rule": {
    "name": "Category discount",
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

The response returns the saved rule object. The following response is shortened to show the generated ID and default values:

```json
{
  "rule_id": 42,
  "name": "Category discount",
  "is_active": 0,
  "discount_amount": 10,
  "stop_rules_processing": 1,
  "sort_order": 0
}
```

Review the saved rule before activating it with `is_active: 1`.

<InlineAlert variant="info" slots="text" />

Rule changes may take time to affect storefront prices.

### Retrieve a rule

```http
GET /V1/catalogPriceRules/42
```

The response returns the rule object, including its full condition tree.

### Update a rule

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

Updates that activate a rule or leave it active also validate its existing conditions. If a referenced category, attribute set, or option has been removed, correct the condition before saving.

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

### Search rules

Use `/V1/catalogPriceRules/search` to list and filter rules. The following request returns the first page of 20 active rules:

```text
GET /V1/catalogPriceRules/search
    ?searchCriteria[filterGroups][0][filters][0][field]=is_active
    &searchCriteria[filterGroups][0][filters][0][value]=1
    &searchCriteria[filterGroups][0][filters][0][conditionType]=eq
    &searchCriteria[pageSize]=20
    &searchCriteria[currentPage]=1
```

The query parameters are shown on separate lines for readability. Send them as one URL.

The response contains:

- `items` - an array of rule objects, including their condition trees.
- `search_criteria` - the criteria used for the request.
- `total_count` - the total number of matching rules across all pages.

See [Search using REST endpoints](../../use-rest/performing-searches.md) for filter groups, comparison operators, sorting, and pagination. This endpoint returns 200 rules per page by default and at most 500.

### Delete a rule

```http
DELETE /V1/catalogPriceRules/42
```

The response confirms deletion:

```json
true
```

## Error handling

| Status code | Condition |
| --- | --- |
| `400` | Invalid rule input, including malformed conditions or invalid references. |
| `404` | The requested rule does not exist. |
