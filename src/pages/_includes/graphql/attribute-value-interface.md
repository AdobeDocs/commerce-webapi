### AttributeValueInterface attributes

import BetaNote from '/src/pages/_includes/graphql/notes/beta.md'

<BetaNote />

The `AttributeValueInterface` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The attribute code
`uid` | ID! | The unique ID of an attribute value

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
