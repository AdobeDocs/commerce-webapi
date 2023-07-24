### AttributeValueInterface attributes

import BetaNote from '/src/pages/_includes/graphql/notes/beta.md'

<BetaNote />

The `AttributeValueInterface` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | ID! | The attribute code
`is_comparable` | Boolean | Whether a product or category attribute can be compared against another or not
`is_filterable` | Boolean | Whether a product or category attribute can be filtered or not
`is_filterable_in_search` | Boolean | Whether a product or category attribute can be filtered in search or not
`is_html_allowed_on_front` | Boolean | Whether a product or category attribute can use HTML on front or not
`is_searchable` | Boolean | Whether a product or category attribute can be searched or not
`is_used_for_price_rules` | Boolean | Whether a product or category attribute can be used for price rules or not
`is_used_for_promo_rules` | Boolean | Whether a product or category attribute is used for promo rules or not
`is_visible_in_advanced_search` | Boolean | Whether a product or category attribute is visible in advanced search or not
`is_visible_on_front` | Boolean | Whether a product or category attribute is visible on front or not
`is_wysiwyg_enabled` | Boolean | Whether a product or category attribute has WYSIWYG enabled or not
`used_in_product_listing` | Boolean | Whether a product or category attribute is used in product listing or not

Currently, `AttributeValueInterface` has two different implementations: `AttributeValue` and `AttributeSelectedOptions`.

In addition to the attributes described for `AttributeValueInterface`, the `AttributeValue` contains the following:

Attribute |  Data Type | Description
--- | --- | ---
`value` | String! | The attribute value

The `AttributeSelectedOptions` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`selected_options` | [AttributeSelectedOptionInterface!]! | An array containing selected options for a select or multiselect attribute

The `AttributeSelectedOptionInterface` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`label` | String! | The attribute selected option label
`uid` | ID! | The unique ID of an attribute selected option
`value` | String! | The attribute selected option value
