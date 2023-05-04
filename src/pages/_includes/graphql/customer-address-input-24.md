### CustomerAddressInput attributes

The `CustomerAddressInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city or town
`company` | String | The customer's company
`country_code` | String | The customer's country
`country_id` | String | Deprecated. Use `country_code` instead. The customer's country
`custom_attributes` | [CustomerAddressAttributeInput](#customeraddressattributeinput-attributes) | Deprecated. Not applicable for GraphQL
`custom_attributesV2` | [AttributeValueInterface](#attributevalueinterface-attributes)| Customer address' custom attributes
`default_billing` | Boolean | Indicates whether the address is the default billing address
`default_shipping` | Boolean | Indicates whether the address is the default shipping address
`fax` | String | The fax number
`firstname` | String | The first name of the person associated with the shipping/billing address
`lastname` | String | The family name of the person associated with the shipping/billing address
`middlename` | String | The middle name of the person associated with the shipping/billing address
`postcode` | String | The customer's ZIP or postal code
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`region` | [CustomerAddressRegionInput](#customeraddressregioninput-attributes) | An object that defines the customer's state or province
`street` | [String] | An array of strings that define the street number and name
`suffix` | String | A value such as Sr., Jr., or III
`telephone` | String | The telephone number
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)

### AttributeValueInterface attributes

The `AttributeValueInterface` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The unique ID of an attribute value
`code` | String! | The attribute code

Currently, `AttributeValueInterface` has 2 different implementations: `AttributeValue` and `AttributeSelectedOptions`.

Apart from the attributes described for `AttributeValueInterface`, the `AttributeValue` contains the following:

Attribute |  Data Type | Description
--- | --- | ---
`value` | String! | The attribute value

On the other hand, the `AttributeSelectedOptions` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`selected_options` | [AttributeSelectedOptionInterface!]! | An array with selected option(s) for select or multiselect attribute

The `AttributeSelectedOptionInterface` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The unique ID of an attribute selected option
`label` | String! | The attribute selected option label
`value` | String! | The attribute selected option value

### CustomerAddressAttributeInput attributes

The `CustomerAddressAttributeInput` data type has been deprecated because the contents are not applicable for GraphQL. It can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | Attribute code
`value` | String | Attribute value

### CustomerAddressRegionInput attributes

The `customerAddressRegionInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`region` | String | The state or province name
`region_code` | String | The address region code
`region_id` | Int | The unique ID for a pre-defined region
