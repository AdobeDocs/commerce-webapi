### CustomerAddressInput attributes

The `CustomerAddressInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city or town
`company` | String | The customer's company
`country_code` | String | The customer's country
`country_id` | String | Deprecated. Use `country_code` instead. The customer's country
`custom_attributes` | [CustomerAddressAttributeInput](#customeraddressattributeinput-attributes) | Deprecated. Use `custom_attributesV2` instead
`custom_attributesV2` | [AttributeValueInput](#attributevalueinput-attributes)| Custom attributes assigned to the customer address
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

### AttributeValueInput attributes

The `AttributeValueInput` data type contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code`| String! | The code of the attribute
`selected_options` | [AttributeInputSelectedOption!] | An array containing selected options for a select or multiselect attribute
`value` | String | The value assigned to the attribute

The `AttributeInputSelectedOption` data type contains the value of the selected option for a dropdown or multiselect attribute.
This object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`value` | String! | The attribute option value

### CustomerAddressAttributeInput attributes

The `CustomerAddressAttributeInput` data type has been deprecated. Use `custom_attributesV2` instead. It can contain the following attributes:

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
