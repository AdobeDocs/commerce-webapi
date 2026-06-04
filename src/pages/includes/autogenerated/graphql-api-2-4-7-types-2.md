### CustomerAddress

Contains detailed information about a customer's billing or shipping address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String`](#string) | The customer&#x27;s city or town. |
| `company` - [`String`](#string) | The customer&#x27;s company. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The customer&#x27;s country. |
| `country_id` - [`String`](#string) | The customer&#x27;s country. *(Deprecated: Use &#x60;country_code&#x60; instead.)* |
| `custom_attributes` - [`[CustomerAddressAttribute]`](#customeraddressattribute) |  *(Deprecated: Use custom_attributesV2 instead.)* |
| `custom_attributesV2` - [`[AttributeValueInterface]!`](#attributevalueinterface) | Custom attributes assigned to the customer address. |
| `customer_id` - [`Int`](#int) | The customer ID *(Deprecated: &#x60;customer_id&#x60; is not needed as part of &#x60;CustomerAddress&#x60;. The &#x60;id&#x60; is a unique identifier for the addresses.)* |
| `default_billing` - [`Boolean`](#boolean) | Indicates whether the address is the customer&#x27;s default billing address. |
| `default_shipping` - [`Boolean`](#boolean) | Indicates whether the address is the customer&#x27;s default shipping address. |
| `extension_attributes` - [`[CustomerAddressAttribute]`](#customeraddressattribute) | Contains any extension attributes for the address. |
| `fax` - [`String`](#string) | The customer&#x27;s fax number. |
| `firstname` - [`String`](#string) | The first name of the person associated with the shipping/billing address. |
| `id` - [`Int`](#int) | The ID of a &#x60;CustomerAddress&#x60; object. |
| `lastname` - [`String`](#string) | The family name of the person associated with the shipping/billing address. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the shipping/billing address. |
| `postcode` - [`String`](#string) | The customer&#x27;s ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CustomerAddressRegion`](#customeraddressregion) | An object containing the region name, region code, and region ID. |
| `region_id` - [`Int`](#int) | The unique ID for a pre-defined region. |
| `street` - [`[String]`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Value-added tax (VAT) number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country_code": "AF",
  "country_id": "xyz789",
  "custom_attributes": [CustomerAddressAttribute],
  "custom_attributesV2": [AttributeValueInterface],
  "customer_id": 123,
  "default_billing": true,
  "default_shipping": true,
  "extension_attributes": [CustomerAddressAttribute],
  "fax": "xyz789",
  "firstname": "abc123",
  "id": 987,
  "lastname": "abc123",
  "middlename": "xyz789",
  "postcode": "xyz789",
  "prefix": "xyz789",
  "region": CustomerAddressRegion,
  "region_id": 987,
  "street": ["xyz789"],
  "suffix": "abc123",
  "telephone": "abc123",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### CustomerAddressAttribute

Specifies the attribute code and value of a customer address attribute.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String`](#string) | The name assigned to the customer address attribute. |
| `value` - [`String`](#string) | The value assigned to the customer address attribute. |

#### Example

```json
{
  "attribute_code": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### CustomerAddressAttributeInput

Specifies the attribute code and value of a customer attribute.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String!`](#string) | The name assigned to the attribute. |
| `value` - [`String!`](#string) | The value assigned to the attribute. |

#### Example

```json
{
  "attribute_code": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### CustomerAddressInput

Contains details about a billing or shipping address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String`](#string) | The customer&#x27;s city or town. |
| `company` - [`String`](#string) | The customer&#x27;s company. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The two-letter code representing the customer&#x27;s country. |
| `country_id` - [`CountryCodeEnum`](#countrycodeenum) | Deprecated: use &#x60;country_code&#x60; instead. |
| `custom_attributes` - [`[CustomerAddressAttributeInput]`](#customeraddressattributeinput) | Deprecated. Use custom_attributesV2 instead. |
| `custom_attributesV2` - [`[AttributeValueInput]`](#attributevalueinput) | Custom attributes assigned to the customer address. |
| `default_billing` - [`Boolean`](#boolean) | Indicates whether the address is the default billing address. |
| `default_shipping` - [`Boolean`](#boolean) | Indicates whether the address is the default shipping address. |
| `fax` - [`String`](#string) | The customer&#x27;s fax number. |
| `firstname` - [`String`](#string) | The first name of the person associated with the billing/shipping address. |
| `lastname` - [`String`](#string) | The family name of the person associated with the billing/shipping address. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The customer&#x27;s ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CustomerAddressRegionInput`](#customeraddressregioninput) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country_code": "AF",
  "country_id": "AF",
  "custom_attributes": [CustomerAddressAttributeInput],
  "custom_attributesV2": [AttributeValueInput],
  "default_billing": true,
  "default_shipping": true,
  "fax": "abc123",
  "firstname": "abc123",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "xyz789",
  "region": CustomerAddressRegionInput,
  "street": ["abc123"],
  "suffix": "abc123",
  "telephone": "xyz789",
  "vat_id": "xyz789"
}
```

<HorizontalLine />

### CustomerAddressRegion

Defines the customer's state or province.

#### Fields

| Field Name | Description |
|------------|-------------|
| `region` - [`String`](#string) | The state or province name. |
| `region_code` - [`String`](#string) | The address region code. |
| `region_id` - [`Int`](#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "region": "xyz789",
  "region_code": "xyz789",
  "region_id": 987
}
```

<HorizontalLine />

### CustomerAddressRegionInput

Defines the customer's state or province.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `region` - [`String`](#string) | The state or province name. |
| `region_code` - [`String`](#string) | The address region code. |
| `region_id` - [`Int`](#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "region": "xyz789",
  "region_code": "abc123",
  "region_id": 123
}
```

<HorizontalLine />

### CustomerAttributeMetadata

Customer attribute metadata.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `default_value` - [`String`](#string) | Default attribute value. |
| `entity_type` - [`AttributeEntityTypeEnum!`](#attributeentitytypeenum) | The type of entity that defines the attribute. |
| `frontend_class` - [`String`](#string) | The frontend class of the attribute. |
| `frontend_input` - [`AttributeFrontendInputEnum`](#attributefrontendinputenum) | The frontend input type of the attribute. |
| `input_filter` - [`InputFilterEnum`](#inputfilterenum) | The template used for the input of the attribute (e.g., &#x27;date&#x27;). |
| `is_required` - [`Boolean!`](#boolean) | Whether the attribute value is required. |
| `is_unique` - [`Boolean!`](#boolean) | Whether the attribute value must be unique. |
| `label` - [`String`](#string) | The label assigned to the attribute. |
| `multiline_count` - [`Int`](#int) | The number of lines of the attribute value. |
| `options` - [`[CustomAttributeOptionInterface]!`](#customattributeoptioninterface) | Attribute options. |
| `sort_order` - [`Int`](#int) | The position of the attribute in the form. |
| `validate_rules` - [`[ValidationRule]`](#validationrule) | The validation rules of the attribute value. |

#### Example

```json
{
  "code": 4,
  "default_value": "xyz789",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "xyz789",
  "frontend_input": "BOOLEAN",
  "input_filter": "NONE",
  "is_required": true,
  "is_unique": true,
  "label": "abc123",
  "multiline_count": 987,
  "options": [CustomAttributeOptionInterface],
  "sort_order": 987,
  "validate_rules": [ValidationRule]
}
```

<HorizontalLine />

### CustomerCreateInput

An input object for creating a customer.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `allow_remote_shopping_assistance` - [`Boolean`](#boolean) | Indicates whether the customer has enabled remote shopping assistance. |
| `custom_attributes` - [`[AttributeValueInput]`](#attributevalueinput) | The customer&#x27;s custom attributes. |
| `date_of_birth` - [`String`](#string) | The customer&#x27;s date of birth. |
| `dob` - [`String`](#string) | Deprecated: Use &#x60;date_of_birth&#x60; instead. |
| `email` - [`String!`](#string) | The customer&#x27;s email address. |
| `firstname` - [`String!`](#string) | The customer&#x27;s first name. |
| `gender` - [`Int`](#int) | The customer&#x27;s gender (Male - 1, Female - 2). |
| `is_subscribed` - [`Boolean`](#boolean) | Indicates whether the customer is subscribed to the company&#x27;s newsletter. |
| `lastname` - [`String!`](#string) | The customer&#x27;s family name. |
| `middlename` - [`String`](#string) | The customer&#x27;s middle name. |
| `password` - [`String`](#string) | The customer&#x27;s password. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "allow_remote_shopping_assistance": false,
  "custom_attributes": [AttributeValueInput],
  "date_of_birth": "xyz789",
  "dob": "xyz789",
  "email": "xyz789",
  "firstname": "abc123",
  "gender": 987,
  "is_subscribed": true,
  "lastname": "abc123",
  "middlename": "abc123",
  "password": "xyz789",
  "prefix": "xyz789",
  "suffix": "xyz789",
  "taxvat": "xyz789"
}
```

<HorizontalLine />

### CustomerDownloadableProduct

Contains details about a single downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `date` - [`String`](#string) | The date and time the purchase was made. |
| `download_url` - [`String`](#string) | The fully qualified URL to the download file. |
| `order_increment_id` - [`String`](#string) | The unique ID assigned to the item. |
| `remaining_downloads` - [`String`](#string) | The remaining number of times the customer can download the product. |
| `status` - [`String`](#string) | Indicates when the product becomes available for download. Options are &#x60;Pending&#x60; and &#x60;Invoiced&#x60;. |

#### Example

```json
{
  "date": "abc123",
  "download_url": "abc123",
  "order_increment_id": "abc123",
  "remaining_downloads": "xyz789",
  "status": "abc123"
}
```

<HorizontalLine />

### CustomerDownloadableProducts

Contains a list of downloadable products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CustomerDownloadableProduct]`](#customerdownloadableproduct) | An array of purchased downloadable items. |

#### Example

```json
{"items": [CustomerDownloadableProduct]}
```

<HorizontalLine />

### CustomerInput

An input object that assigns or updates customer attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `date_of_birth` - [`String`](#string) | The customer&#x27;s date of birth. |
| `dob` - [`String`](#string) | Deprecated: Use &#x60;date_of_birth&#x60; instead. |
| `email` - [`String`](#string) | The customer&#x27;s email address. Required when creating a customer. |
| `firstname` - [`String`](#string) | The customer&#x27;s first name. |
| `gender` - [`Int`](#int) | The customer&#x27;s gender (Male - 1, Female - 2). |
| `is_subscribed` - [`Boolean`](#boolean) | Indicates whether the customer is subscribed to the company&#x27;s newsletter. |
| `lastname` - [`String`](#string) | The customer&#x27;s family name. |
| `middlename` - [`String`](#string) | The customer&#x27;s middle name. |
| `password` - [`String`](#string) | The customer&#x27;s password. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "date_of_birth": "xyz789",
  "dob": "abc123",
  "email": "xyz789",
  "firstname": "xyz789",
  "gender": 123,
  "is_subscribed": true,
  "lastname": "abc123",
  "middlename": "xyz789",
  "password": "abc123",
  "prefix": "abc123",
  "suffix": "xyz789",
  "taxvat": "abc123"
}
```

<HorizontalLine />

### CustomerOrder

Contains details about each of the customer's orders.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_coupons` - [`[AppliedCoupon]!`](#appliedcoupon) | Coupons applied to the order. |
| `billing_address` - [`OrderAddress`](#orderaddress) | The billing address for the order. |
| `carrier` - [`String`](#string) | The shipping carrier for the order delivery. |
| `comments` - [`[SalesCommentItem]`](#salescommentitem) | Comments about the order. |
| `created_at` - [`String`](#string) |  *(Deprecated: Use the &#x60;order_date&#x60; field instead.)* |
| `credit_memos` - [`[CreditMemo]`](#creditmemo) | A list of credit memos. |
| `email` - [`String`](#string) | Order customer email. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message for the order |
| `gift_receipt_included` - [`Boolean!`](#boolean) | Indicates whether the customer requested a gift receipt for the order. |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order. |
| `grand_total` - [`Float`](#float) |  *(Deprecated: Use the &#x60;totals.grand_total&#x60; field instead.)* |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CustomerOrder&#x60; object. |
| `increment_id` - [`String`](#string) |  *(Deprecated: Use the &#x60;id&#x60; field instead.)* |
| `invoices` - [`[Invoice]!`](#invoice) | A list of invoices for the order. |
| `items` - [`[OrderItemInterface]`](#orderiteminterface) | An array containing the items purchased in this order. |
| `items_eligible_for_return` - [`[OrderItemInterface]`](#orderiteminterface) | A list of order items eligible to be in a return request. |
| `number` - [`String!`](#string) | The order number. |
| `order_date` - [`String!`](#string) | The date the order was placed. |
| `order_number` - [`String!`](#string) |  *(Deprecated: Use the &#x60;number&#x60; field instead.)* |
| `payment_methods` - [`[OrderPaymentMethod]`](#orderpaymentmethod) | Payment details for the order. |
| `printed_card_included` - [`Boolean!`](#boolean) | Indicates whether the customer requested a printed card for the order. |
| `returns` - [`Returns`](#returns) | Return requests associated with this order. |
| `shipments` - [`[OrderShipment]`](#ordershipment) | A list of shipments for the order. |
| `shipping_address` - [`OrderAddress`](#orderaddress) | The shipping address for the order. |
| `shipping_method` - [`String`](#string) | The delivery method for the order. |
| `status` - [`String!`](#string) | The current status of the order. |
| `token` - [`String!`](#string) | The token that can be used to retrieve the order using order query. |
| `total` - [`OrderTotal`](#ordertotal) | Details about the calculated totals for this order. |

#### Example

```json
{
  "applied_coupons": [AppliedCoupon],
  "billing_address": OrderAddress,
  "carrier": "xyz789",
  "comments": [SalesCommentItem],
  "created_at": "abc123",
  "credit_memos": [CreditMemo],
  "email": "xyz789",
  "gift_message": GiftMessage,
  "gift_receipt_included": false,
  "gift_wrapping": GiftWrapping,
  "grand_total": 987.65,
  "id": "4",
  "increment_id": "abc123",
  "invoices": [Invoice],
  "items": [OrderItemInterface],
  "items_eligible_for_return": [OrderItemInterface],
  "number": "xyz789",
  "order_date": "abc123",
  "order_number": "xyz789",
  "payment_methods": [OrderPaymentMethod],
  "printed_card_included": false,
  "returns": Returns,
  "shipments": [OrderShipment],
  "shipping_address": OrderAddress,
  "shipping_method": "xyz789",
  "status": "abc123",
  "token": "xyz789",
  "total": OrderTotal
}
```

<HorizontalLine />

### CustomerOrderSortInput

CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sort_direction` - [`SortEnum!`](#sortenum) | This enumeration indicates whether to return results in ascending or descending order |
| `sort_field` - [`CustomerOrderSortableField!`](#customerordersortablefield) | Specifies the field to use for sorting |

#### Example

```json
{"sort_direction": "ASC", "sort_field": "NUMBER"}
```

<HorizontalLine />

### CustomerOrderSortableField

Specifies the field to use for sorting

#### Values

| Enum Value | Description |
|------------|-------------|
| `NUMBER` | Sorts customer orders by number |
| `CREATED_AT` | Sorts customer orders by created_at field |

#### Example

```json
""NUMBER""
```

<HorizontalLine />

### CustomerOrders

The collection of orders that match the conditions defined in the filter.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CustomerOrder]!`](#customerorder) | An array of customer orders. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Contains pagination metadata. |
| `total_count` - [`Int`](#int) | The total count of customer orders. |

#### Example

```json
{
  "items": [CustomerOrder],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### CustomerOrdersFilterInput

Identifies the filter to use for filtering orders.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `number` - [`FilterStringTypeInput`](#filterstringtypeinput) | Filters by order number. |

#### Example

```json
{"number": FilterStringTypeInput}
```

<HorizontalLine />

### CustomerOutput

Contains details about a newly-created or updated customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customer` - [`Customer!`](#customer) | Customer details after creating or updating a customer. |

#### Example

```json
{"customer": Customer}
```

<HorizontalLine />

### CustomerPaymentTokens

Contains payment tokens stored in the customer's vault.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[PaymentToken]!`](#paymenttoken) | An array of payment tokens. |

#### Example

```json
{"items": [PaymentToken]}
```

<HorizontalLine />

### CustomerStoreCredit

Contains store credit information with balance and history.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance_history` - [`CustomerStoreCreditHistory`](#customerstorecredithistory) | Contains the customer&#x27;s store credit balance history. If the history or store credit feature is disabled, then a null value will be returned. |
| `current_balance` - [`Money`](#money) | The current balance of store credit. |
| `enabled` - [`Boolean`](#boolean) | Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned. |

#### Example

```json
{
  "balance_history": CustomerStoreCreditHistory,
  "current_balance": Money,
  "enabled": true
}
```

<HorizontalLine />

### CustomerStoreCreditHistory

Lists changes to the amount of store credit available to the customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CustomerStoreCreditHistoryItem]`](#customerstorecredithistoryitem) | An array containing information about changes to the store credit available to the customer. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Metadata for pagination rendering. |
| `total_count` - [`Int`](#int) | The number of items returned. |

#### Example

```json
{
  "items": [CustomerStoreCreditHistoryItem],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### CustomerStoreCreditHistoryItem

Contains store credit history information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `action` - [`String`](#string) | The action that was made on the store credit. |
| `actual_balance` - [`Money`](#money) | The store credit available to the customer as a result of this action. |
| `balance_change` - [`Money`](#money) | The amount added to or subtracted from the store credit as a result of this action. |
| `date_time_changed` - [`String`](#string) | The date and time when the store credit change was made. |

#### Example

```json
{
  "action": "abc123",
  "actual_balance": Money,
  "balance_change": Money,
  "date_time_changed": "abc123"
}
```

<HorizontalLine />

### CustomerToken

Contains a customer authorization token.

#### Fields

| Field Name | Description |
|------------|-------------|
| `token` - [`String`](#string) | The customer authorization token. |

#### Example

```json
{"token": "abc123"}
```

<HorizontalLine />

### CustomerUpdateInput

An input object for updating a customer.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `allow_remote_shopping_assistance` - [`Boolean`](#boolean) | Indicates whether the customer has enabled remote shopping assistance. |
| `custom_attributes` - [`[AttributeValueInput]`](#attributevalueinput) | The customer&#x27;s custom attributes. |
| `date_of_birth` - [`String`](#string) | The customer&#x27;s date of birth. |
| `dob` - [`String`](#string) | Deprecated: Use &#x60;date_of_birth&#x60; instead. |
| `firstname` - [`String`](#string) | The customer&#x27;s first name. |
| `gender` - [`Int`](#int) | The customer&#x27;s gender (Male - 1, Female - 2). |
| `is_subscribed` - [`Boolean`](#boolean) | Indicates whether the customer is subscribed to the company&#x27;s newsletter. |
| `lastname` - [`String`](#string) | The customer&#x27;s family name. |
| `middlename` - [`String`](#string) | The customer&#x27;s middle name. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "allow_remote_shopping_assistance": false,
  "custom_attributes": [AttributeValueInput],
  "date_of_birth": "xyz789",
  "dob": "xyz789",
  "firstname": "abc123",
  "gender": 123,
  "is_subscribed": false,
  "lastname": "xyz789",
  "middlename": "abc123",
  "prefix": "abc123",
  "suffix": "abc123",
  "taxvat": "xyz789"
}
```

<HorizontalLine />

### CustomizableAreaOption

Contains information about a text area that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `product_sku` - [`String`](#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`CustomizableAreaValue`](#customizableareavalue) | An object that defines a text area. |

#### Example

```json
{
  "option_id": 123,
  "product_sku": "xyz789",
  "required": false,
  "sort_order": 123,
  "title": "abc123",
  "uid": 4,
  "value": CustomizableAreaValue
}
```

<HorizontalLine />

### CustomizableAreaValue

Defines the price and sku of a product whose page contains a customized text area.

#### Fields

| Field Name | Description |
|------------|-------------|
| `max_characters` - [`Int`](#int) | The maximum number of characters that can be entered for this customizable option. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableAreaValue&#x60; object. |

#### Example

```json
{
  "max_characters": 987,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### CustomizableCheckboxOption

Contains information about a set of checkbox values that are defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableCheckboxValue]`](#customizablecheckboxvalue) | An array that defines a set of checkbox values. |

#### Example

```json
{
  "option_id": 123,
  "required": false,
  "sort_order": 123,
  "title": "abc123",
  "uid": 4,
  "value": [CustomizableCheckboxValue]
}
```

<HorizontalLine />

### CustomizableCheckboxValue

Defines the price and sku of a product whose page contains a customized set of checkbox values.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](#int) | The ID assigned to the value. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](#int) | The order in which the checkbox value is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableCheckboxValue&#x60; object. |

#### Example

```json
{
  "option_type_id": 123,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "abc123",
  "sort_order": 123,
  "title": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableDateOption

Contains information about a date picker that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `product_sku` - [`String`](#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`CustomizableDateValue`](#customizabledatevalue) | An object that defines a date field in a customizable option. |

#### Example

```json
{
  "option_id": 987,
  "product_sku": "abc123",
  "required": false,
  "sort_order": 987,
  "title": "abc123",
  "uid": "4",
  "value": CustomizableDateValue
}
```

<HorizontalLine />

### CustomizableDateTypeEnum

Defines the customizable date type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `DATE` |  |
| `DATE_TIME` |  |
| `TIME` |  |

#### Example

```json
""DATE""
```

<HorizontalLine />

### CustomizableDateValue

Defines the price and sku of a product whose page contains a customized date picker.

#### Fields

| Field Name | Description |
|------------|-------------|
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `type` - [`CustomizableDateTypeEnum`](#customizabledatetypeenum) | DATE, DATE_TIME or TIME |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableDateValue&#x60; object. |

#### Example

```json
{
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "abc123",
  "type": "DATE",
  "uid": "4"
}
```

<HorizontalLine />

### CustomizableDropDownOption

Contains information about a drop down menu that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableDropDownValue]`](#customizabledropdownvalue) | An array that defines the set of options for a drop down menu. |

#### Example

```json
{
  "option_id": 987,
  "required": true,
  "sort_order": 123,
  "title": "abc123",
  "uid": "4",
  "value": [CustomizableDropDownValue]
}
```

<HorizontalLine />

### CustomizableDropDownValue

Defines the price and sku of a product whose page contains a customized drop down menu.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](#int) | The ID assigned to the value. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableDropDownValue&#x60; object. |

#### Example

```json
{
  "option_type_id": 123,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "xyz789",
  "sort_order": 123,
  "title": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableFieldOption

Contains information about a text field that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `product_sku` - [`String`](#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`CustomizableFieldValue`](#customizablefieldvalue) | An object that defines a text field. |

#### Example

```json
{
  "option_id": 123,
  "product_sku": "xyz789",
  "required": false,
  "sort_order": 987,
  "title": "abc123",
  "uid": "4",
  "value": CustomizableFieldValue
}
```

<HorizontalLine />

### CustomizableFieldValue

Defines the price and sku of a product whose page contains a customized text field.

#### Fields

| Field Name | Description |
|------------|-------------|
| `max_characters` - [`Int`](#int) | The maximum number of characters that can be entered for this customizable option. |
| `price` - [`Float`](#float) | The price of the custom value. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableFieldValue&#x60; object. |

#### Example

```json
{
  "max_characters": 987,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableFileOption

Contains information about a file picker that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `product_sku` - [`String`](#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`CustomizableFileValue`](#customizablefilevalue) | An object that defines a file value. |

#### Example

```json
{
  "option_id": 987,
  "product_sku": "abc123",
  "required": false,
  "sort_order": 123,
  "title": "xyz789",
  "uid": "4",
  "value": CustomizableFileValue
}
```

<HorizontalLine />

### CustomizableFileValue

Defines the price and sku of a product whose page contains a customized file picker.

#### Fields

| Field Name | Description |
|------------|-------------|
| `file_extension` - [`String`](#string) | The file extension to accept. |
| `image_size_x` - [`Int`](#int) | The maximum width of an image. |
| `image_size_y` - [`Int`](#int) | The maximum height of an image. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableFileValue&#x60; object. |

#### Example

```json
{
  "file_extension": "abc123",
  "image_size_x": 987,
  "image_size_y": 123,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableMultipleOption

Contains information about a multiselect that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableMultipleValue]`](#customizablemultiplevalue) | An array that defines the set of options for a multiselect. |

#### Example

```json
{
  "option_id": 123,
  "required": false,
  "sort_order": 987,
  "title": "xyz789",
  "uid": 4,
  "value": [CustomizableMultipleValue]
}
```

<HorizontalLine />

### CustomizableMultipleValue

Defines the price and sku of a product whose page contains a customized multiselect.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](#int) | The ID assigned to the value. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableMultipleValue&#x60; object. |

#### Example

```json
{
  "option_type_id": 987,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "xyz789",
  "sort_order": 987,
  "title": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableOptionInput

Defines a customizable option.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `id` - [`Int`](#int) | The customizable option ID of the product. |
| `uid` - [`ID`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |
| `value_string` - [`String!`](#string) | The string value of the option. |

#### Example

```json
{
  "id": 987,
  "uid": 4,
  "value_string": "abc123"
}
```

<HorizontalLine />

### CustomizableOptionInterface

Contains basic information about a customizable option. It can be implemented by several types of configurable options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |

#### Possible Types

| CustomizableOptionInterface Types |
|----------------|
| [`CustomizableAreaOption`](#customizableareaoption) |
| [`CustomizableDateOption`](#customizabledateoption) |
| [`CustomizableDropDownOption`](#customizabledropdownoption) |
| [`CustomizableMultipleOption`](#customizablemultipleoption) |
| [`CustomizableFieldOption`](#customizablefieldoption) |
| [`CustomizableFileOption`](#customizablefileoption) |
| [`CustomizableRadioOption`](#customizableradiooption) |
| [`CustomizableCheckboxOption`](#customizablecheckboxoption) |

#### Example

```json
{
  "option_id": 123,
  "required": false,
  "sort_order": 123,
  "title": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableProductInterface

Contains information about customizable product options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |

#### Possible Types

| CustomizableProductInterface Types |
|----------------|
| [`VirtualProduct`](#virtualproduct) |
| [`SimpleProduct`](#simpleproduct) |
| [`ConfigurableProduct`](#configurableproduct) |
| [`DownloadableProduct`](#downloadableproduct) |
| [`BundleProduct`](#bundleproduct) |
| [`GiftCardProduct`](#giftcardproduct) |

#### Example

```json
{"options": [CustomizableOptionInterface]}
```

<HorizontalLine />

### CustomizableRadioOption

Contains information about a set of radio buttons that are defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableRadioValue]`](#customizableradiovalue) | An array that defines a set of radio buttons. |

#### Example

```json
{
  "option_id": 123,
  "required": true,
  "sort_order": 987,
  "title": "abc123",
  "uid": 4,
  "value": [CustomizableRadioValue]
}
```

<HorizontalLine />

### CustomizableRadioValue

Defines the price and sku of a product whose page contains a customized set of radio buttons.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](#int) | The ID assigned to the value. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](#int) | The order in which the radio button is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableRadioValue&#x60; object. |

#### Example

```json
{
  "option_type_id": 987,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "abc123",
  "sort_order": 987,
  "title": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### DeleteCompanyRoleOutput

Contains the response to the request to delete the company role.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](#boolean) | SIndicates whether the company role has been deleted successfully. |

#### Example

```json
{"success": false}
```

<HorizontalLine />

### DeleteCompanyTeamOutput

Contains the status of the request to delete a company team.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](#boolean) | Indicates whether the delete operation succeeded. |

#### Example

```json
{"success": true}
```

<HorizontalLine />

### DeleteCompanyUserOutput

Contains the response to the request to delete the company user.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](#boolean) | Indicates whether the company user has been deactivated successfully. |

#### Example

```json
{"success": false}
```

<HorizontalLine />

### DeleteCompareListOutput

Contains the results of the request to delete a compare list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `result` - [`Boolean!`](#boolean) | Indicates whether the compare list was successfully deleted. |

#### Example

```json
{"result": true}
```

<HorizontalLine />

### DeleteNegotiableQuoteError

#### Types

| Union Types |
|-------------|
| [`NegotiableQuoteInvalidStateError`](#negotiablequoteinvalidstateerror) |
| [`NoSuchEntityUidError`](#nosuchentityuiderror) |
| [`InternalError`](#internalerror) |

#### Example

```json
NegotiableQuoteInvalidStateError
```

<HorizontalLine />

### DeleteNegotiableQuoteOperationFailure

Contains details about a failed delete operation on a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[DeleteNegotiableQuoteError]!`](#deletenegotiablequoteerror) |  |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "errors": [NegotiableQuoteInvalidStateError],
  "quote_uid": 4
}
```

<HorizontalLine />

### DeleteNegotiableQuoteOperationResult

#### Types

| Union Types |
|-------------|
| [`NegotiableQuoteUidOperationSuccess`](#negotiablequoteuidoperationsuccess) |
| [`DeleteNegotiableQuoteOperationFailure`](#deletenegotiablequoteoperationfailure) |

#### Example

```json
NegotiableQuoteUidOperationSuccess
```

<HorizontalLine />

### DeleteNegotiableQuoteTemplateInput

Specifies the quote template id of the quote template to delete

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{"template_id": 4}
```

<HorizontalLine />

### DeleteNegotiableQuotesInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_uids` - [`[ID]!`](#id) | A list of unique IDs for &#x60;NegotiableQuote&#x60; objects to delete. |

#### Example

```json
{"quote_uids": [4]}
```

<HorizontalLine />

### DeleteNegotiableQuotesOutput

Contains a list of undeleted negotiable quotes the company user can view.

#### Fields

| Field Name | Description |
|------------|-------------|
| `negotiable_quotes` - [`NegotiableQuotesOutput`](#negotiablequotesoutput) | A list of negotiable quotes that the customer can view |
| `operation_results` - [`[DeleteNegotiableQuoteOperationResult]!`](#deletenegotiablequoteoperationresult) | An array of deleted negotiable quote UIDs and details about any errors. |
| `result_status` - [`BatchMutationStatus!`](#batchmutationstatus) | The status of the request to delete one or more negotiable quotes. |

#### Example

```json
{
  "negotiable_quotes": NegotiableQuotesOutput,
  "operation_results": [
    NegotiableQuoteUidOperationSuccess
  ],
  "result_status": "SUCCESS"
}
```

<HorizontalLine />

### DeletePaymentTokenOutput

Indicates whether the request succeeded and returns the remaining customer payment tokens.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customerPaymentTokens` - [`CustomerPaymentTokens`](#customerpaymenttokens) | A container for the customer&#x27;s remaining payment tokens. |
| `result` - [`Boolean!`](#boolean) | Indicates whether the request succeeded. |

#### Example

```json
{
  "customerPaymentTokens": CustomerPaymentTokens,
  "result": false
}
```

<HorizontalLine />

### DeletePurchaseOrderApprovalRuleError

Contains details about an error that occurred when deleting an approval rule .

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String`](#string) | The text of the error message. |
| `type` - [`DeletePurchaseOrderApprovalRuleErrorType`](#deletepurchaseorderapprovalruleerrortype) | The error type. |

#### Example

```json
{"message": "abc123", "type": "UNDEFINED"}
```

<HorizontalLine />

### DeletePurchaseOrderApprovalRuleErrorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNDEFINED` |  |
| `NOT_FOUND` |  |

#### Example

```json
""UNDEFINED""
```

<HorizontalLine />

### DeletePurchaseOrderApprovalRuleInput

Specifies the IDs of the approval rules to delete.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `approval_rule_uids` - [`[ID]!`](#id) | An array of purchase order approval rule IDs. |

#### Example

```json
{"approval_rule_uids": ["4"]}
```

<HorizontalLine />

### DeletePurchaseOrderApprovalRuleOutput

Contains any errors encountered while attempting to delete approval rules.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[DeletePurchaseOrderApprovalRuleError]!`](#deletepurchaseorderapprovalruleerror) | An array of error messages encountered while performing the operation. |

#### Example

```json
{"errors": [DeletePurchaseOrderApprovalRuleError]}
```

<HorizontalLine />

### DeleteRequisitionListItemsOutput

Output of the request to remove items from the requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](#requisitionlist) | The requisition list after removing items. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### DeleteRequisitionListOutput

Indicates whether the request to delete the requisition list was successful.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_lists` - [`RequisitionLists`](#requisitionlists) | The customer&#x27;s requisition lists after deleting a requisition list. |
| `status` - [`Boolean!`](#boolean) | Indicates whether the request to delete the requisition list was successful. |

#### Example

```json
{"requisition_lists": RequisitionLists, "status": false}
```

<HorizontalLine />

### DeleteWishlistOutput

Contains the status of the request to delete a wish list and an array of the customer's remaining wish lists.

#### Fields

| Field Name | Description |
|------------|-------------|
| `status` - [`Boolean!`](#boolean) | Indicates whether the wish list was deleted. |
| `wishlists` - [`[Wishlist]!`](#wishlist) | A list of undeleted wish lists. |

#### Example

```json
{"status": false, "wishlists": [Wishlist]}
```

<HorizontalLine />

### Discount

Specifies the discount type and value for quote line item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount of the discount. |
| `applied_to` - [`CartDiscountType!`](#cartdiscounttype) | The type of the entity the discount is applied to. |
| `coupon` - [`AppliedCoupon`](#appliedcoupon) | The coupon related to the discount. |
| `is_discounting_locked` - [`Boolean`](#boolean) | Is quote discounting locked for line item. |
| `label` - [`String!`](#string) | A description of the discount. |
| `type` - [`String`](#string) | Quote line item discount type. Values: 1 &#x3D; PERCENTAGE_DISCOUNT; 2 &#x3D; AMOUNT_DISCOUNT; 3 &#x3D; PROPOSED_TOTAL. |
| `value` - [`Float`](#float) | Quote line item discount value. |

#### Example

```json
{
  "amount": Money,
  "applied_to": "ITEM",
  "coupon": AppliedCoupon,
  "is_discounting_locked": true,
  "label": "abc123",
  "type": "abc123",
  "value": 987.65
}
```

<HorizontalLine />

### DownloadableCartItem

An implementation for downloadable product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the links for the downloadable product added to the cart. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer&#x27;s quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller&#x27;s quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about samples of the selected downloadable product. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "id": "abc123",
  "is_available": false,
  "links": [DownloadableProductLinks],
  "max_qty": 123.45,
  "min_qty": 123.45,
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 123.45,
  "samples": [DownloadableProductSamples],
  "uid": "4"
}
```

<HorizontalLine />

### DownloadableCreditMemoItem

Defines downloadable product options for `CreditMemoItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are refunded from the downloadable product. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CreditMemoItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |

#### Example

```json
{
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_refunded": 123.45
}
```

<HorizontalLine />

### DownloadableFileTypeEnum

#### Values

| Enum Value | Description |
|------------|-------------|
| `FILE` |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `URL` |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |

#### Example

```json
""FILE""
```

<HorizontalLine />

### DownloadableInvoiceItem

Defines downloadable product options for `InvoiceItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are invoiced from the downloadable product. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;InvoiceItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 987.65
}
```

<HorizontalLine />

### DownloadableItemsLinks

Defines characteristics of the links for downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `sort_order` - [`Int`](#int) | A number indicating the sort order. |
| `title` - [`String`](#string) | The display name of the link. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;DownloadableItemsLinks&#x60; object. |

#### Example

```json
{
  "sort_order": 123,
  "title": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### DownloadableOrderItem

Defines downloadable product options for `OrderItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are ordered from the downloadable product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | The ProductInterface object, which contains details about the base product |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `product_type` - [`String`](#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |
| `quantity_returned` - [`Float`](#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](#string) | The status of the order item. |

#### Example

```json
{
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "xyz789",
  "quantity_canceled": 987.65,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 123.45,
  "quantity_refunded": 987.65,
  "quantity_returned": 123.45,
  "quantity_shipped": 987.65,
  "selected_options": [OrderItemOption],
  "status": "xyz789"
}
```

<HorizontalLine />

### DownloadableProduct

Defines a product that the shopper downloads.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `downloadable_product_links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the links for this downloadable product. |
| `downloadable_product_samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about samples of this downloadable product. |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `links_purchased_separately` - [`Int`](#int) | A value of 1 indicates that each link in the array must be purchased separately. |
| `links_title` - [`String`](#string) | The heading above the list of downloadable products. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product&#x27;s thumbnail image. |
| `tier_price` - [`Float`](#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use &#x60;__typename&#x60; instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](#string) |  *(Deprecated: Use product&#x27;s &#x60;canonical_url&#x60; or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |

#### Example

```json
{
  "attribute_set_id": 987,
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "color": 123,
  "country_of_manufacture": "abc123",
  "created_at": "xyz789",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "downloadable_product_links": [
    DownloadableProductLinks
  ],
  "downloadable_product_samples": [
    DownloadableProductSamples
  ],
  "gift_message_available": "xyz789",
  "id": 987,
  "image": ProductImage,
  "is_returnable": "abc123",
  "links_purchased_separately": 987,
  "links_title": "xyz789",
  "manufacturer": 987,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "abc123",
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "rating_summary": 123.45,
  "redirect_code": 123,
  "related_products": [ProductInterface],
  "relative_url": "abc123",
  "review_count": 987,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_from_date": "abc123",
  "special_price": 123.45,
  "special_to_date": "abc123",
  "staged": false,
  "stock_status": "IN_STOCK",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "tier_price": 987.65,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "xyz789",
  "uid": 4,
  "updated_at": "xyz789",
  "upsell_products": [ProductInterface],
  "url_key": "xyz789",
  "url_path": "abc123",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "abc123",
  "websites": [Website]
}
```

<HorizontalLine />

### DownloadableProductCartItemInput

Defines a single downloadable product.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | The ID and value of the option. |
| `data` - [`CartItemInput!`](#cartiteminput) | The quantity and SKU of the downloadable product. |
| `downloadable_product_links` - [`[DownloadableProductLinksInput]`](#downloadableproductlinksinput) | An array of objects containing the link_id of the downloadable product link. |

#### Example

```json
{
  "customizable_options": [CustomizableOptionInput],
  "data": CartItemInput,
  "downloadable_product_links": [
    DownloadableProductLinksInput
  ]
}
```

<HorizontalLine />

### DownloadableProductLinks

Defines characteristics of a downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`Int`](#int) |  *(Deprecated: This information should not be exposed on frontend.)* |
| `is_shareable` - [`Boolean`](#boolean) |  *(Deprecated: This information should not be exposed on frontend.)* |
| `link_type` - [`DownloadableFileTypeEnum`](#downloadablefiletypeenum) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `number_of_downloads` - [`Int`](#int) |  *(Deprecated: This information should not be exposed on frontend.)* |
| `price` - [`Float`](#float) | The price of the downloadable product. |
| `sample_file` - [`String`](#string) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `sample_type` - [`DownloadableFileTypeEnum`](#downloadablefiletypeenum) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `sample_url` - [`String`](#string) | The full URL to the downloadable sample. |
| `sort_order` - [`Int`](#int) | A number indicating the sort order. |
| `title` - [`String`](#string) | The display name of the link. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;DownloadableProductLinks&#x60; object. |

#### Example

```json
{
  "id": 987,
  "is_shareable": true,
  "link_type": "FILE",
  "number_of_downloads": 123,
  "price": 987.65,
  "sample_file": "xyz789",
  "sample_type": "FILE",
  "sample_url": "abc123",
  "sort_order": 123,
  "title": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### DownloadableProductLinksInput

Contains the link ID for the downloadable product.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `link_id` - [`Int!`](#int) | The unique ID of the downloadable product link. |

#### Example

```json
{"link_id": 123}
```

<HorizontalLine />

### DownloadableProductSamples

Defines characteristics of a downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`Int`](#int) |  *(Deprecated: This information should not be exposed on frontend.)* |
| `sample_file` - [`String`](#string) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `sample_type` - [`DownloadableFileTypeEnum`](#downloadablefiletypeenum) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `sample_url` - [`String`](#string) | The full URL to the downloadable sample. |
| `sort_order` - [`Int`](#int) | A number indicating the sort order. |
| `title` - [`String`](#string) | The display name of the sample. |

#### Example

```json
{
  "id": 987,
  "sample_file": "xyz789",
  "sample_type": "FILE",
  "sample_url": "abc123",
  "sort_order": 987,
  "title": "abc123"
}
```

<HorizontalLine />

### DownloadableRequisitionListItem

Contains details about downloadable products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array of links for downloadable products in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The quantity of the product added to the requisition list. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array of links to downloadable product samples. |
| `uid` - [`ID!`](#id) | The unique ID of an item in a requisition list. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "links": [DownloadableProductLinks],
  "product": ProductInterface,
  "quantity": 123.45,
  "samples": [DownloadableProductSamples],
  "uid": 4
}
```

<HorizontalLine />

### DownloadableWishlistItem

A downloadable product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `links_v2` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the selected links. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about the selected samples. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": "4",
  "links_v2": [DownloadableProductLinks],
  "product": ProductInterface,
  "quantity": 123.45,
  "samples": [DownloadableProductSamples]
}
```

<HorizontalLine />

### DuplicateNegotiableQuoteInput

Identifies a quote to be duplicated

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `duplicated_quote_uid` - [`ID!`](#id) | ID for the newly duplicated quote. |
| `quote_uid` - [`ID!`](#id) | ID of the quote to be duplicated. |

#### Example

```json
{
  "duplicated_quote_uid": "4",
  "quote_uid": "4"
}
```

<HorizontalLine />

### DuplicateNegotiableQuoteOutput

Contains the newly created negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | Negotiable Quote resulting from duplication operation. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### DynamicBlock

Contains a single dynamic block.

#### Fields

| Field Name | Description |
|------------|-------------|
| `content` - [`ComplexTextValue!`](#complextextvalue) | The renderable HTML code of the dynamic block. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;DynamicBlock&#x60; object. |

#### Example

```json
{
  "content": ComplexTextValue,
  "uid": "4"
}
```

<HorizontalLine />

### DynamicBlockLocationEnum

Indicates the locations the dynamic block can be placed. If this field is not specified, the query returns all locations.

#### Values

| Enum Value | Description |
|------------|-------------|
| `CONTENT` |  |
| `HEADER` |  |
| `FOOTER` |  |
| `LEFT` |  |
| `RIGHT` |  |

#### Example

```json
""CONTENT""
```

<HorizontalLine />

### DynamicBlockTypeEnum

Indicates the selected Dynamic Blocks Rotator inline widget.

#### Values

| Enum Value | Description |
|------------|-------------|
| `SPECIFIED` |  |
| `CART_PRICE_RULE_RELATED` |  |
| `CATALOG_PRICE_RULE_RELATED` |  |

#### Example

```json
""SPECIFIED""
```

<HorizontalLine />

### DynamicBlocks

Contains an array of dynamic blocks.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[DynamicBlock]!`](#dynamicblock) | An array containing individual dynamic blocks. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Metadata for pagination rendering. |
| `total_count` - [`Int!`](#int) | The number of returned dynamic blocks. |

#### Example

```json
{
  "items": [DynamicBlock],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### DynamicBlocksFilterInput

Defines the dynamic block filter. The filter can identify the block type, location and IDs to return.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `dynamic_block_uids` - [`[ID]`](#id) | An array of dynamic block UIDs to filter on. |
| `locations` - [`[DynamicBlockLocationEnum]`](#dynamicblocklocationenum) | An array indicating the locations the dynamic block can be placed. |
| `type` - [`DynamicBlockTypeEnum!`](#dynamicblocktypeenum) | A value indicating the type of dynamic block to filter on. |

#### Example

```json
{
  "dynamic_block_uids": ["4"],
  "locations": ["CONTENT"],
  "type": "SPECIFIED"
}
```

<HorizontalLine />

### EnteredCustomAttributeInput

Contains details about a custom text attribute that the buyer entered.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String!`](#string) | A string that identifies the entered custom attribute. |
| `value` - [`String!`](#string) | The text or other entered value. |

#### Example

```json
{
  "attribute_code": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### EnteredOptionInput

Defines a customer-entered option.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object, such as a &#x60;CustomizableFieldOption&#x60;, &#x60;CustomizableFileOption&#x60;, or &#x60;CustomizableAreaOption&#x60; object. |
| `value` - [`String!`](#string) | Text the customer entered. |

#### Example

```json
{
  "uid": "4",
  "value": "xyz789"
}
```

<HorizontalLine />

### EntityUrl

Contains the `uid`, `relative_url`, and `type` attributes.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](#string) |  *(Deprecated: Use &#x60;relative_url&#x60; instead.)* |
| `entity_uid` - [`ID`](#id) | The unique ID for a &#x60;ProductInterface&#x60;, &#x60;CategoryInterface&#x60;, &#x60;CmsPage&#x60;, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. |
| `id` - [`Int`](#int) | The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID. *(Deprecated: Use &#x60;entity_uid&#x60; instead.)* |
| `redirectCode` - [`Int`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |

#### Example

```json
{
  "canonical_url": "abc123",
  "entity_uid": "4",
  "id": 123,
  "redirectCode": 987,
  "relative_url": "abc123",
  "type": "CMS_PAGE"
}
```

<HorizontalLine />

### ErrorInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |

#### Possible Types

| ErrorInterface Types |
|----------------|
| [`NoSuchEntityUidError`](#nosuchentityuiderror) |
| [`InternalError`](#internalerror) |
| [`NegotiableQuoteInvalidStateError`](#negotiablequoteinvalidstateerror) |

#### Example

```json
{"message": "abc123"}
```

<HorizontalLine />

### EstimateAddressInput

Contains details about an address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `country_code` - [`CountryCodeEnum!`](#countrycodeenum) | The two-letter code representing the customer&#x27;s country. |
| `postcode` - [`String`](#string) | The customer&#x27;s ZIP or postal code. |
| `region` - [`CustomerAddressRegionInput`](#customeraddressregioninput) | An object containing the region name, region code, and region ID. |

#### Example

```json
{
  "country_code": "AF",
  "postcode": "xyz789",
  "region": CustomerAddressRegionInput
}
```

<HorizontalLine />

### EstimateTotalsInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`EstimateAddressInput!`](#estimateaddressinput) | Customer&#x27;s address to estimate totals. |
| `cart_id` - [`String!`](#string) | The unique ID of the cart to query. |
| `shipping_method` - [`ShippingMethodInput`](#shippingmethodinput) | Selected shipping method to estimate totals. |

#### Example

```json
{
  "address": EstimateAddressInput,
  "cart_id": "xyz789",
  "shipping_method": ShippingMethodInput
}
```

<HorizontalLine />

### EstimateTotalsOutput

Estimate totals output.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart`](#cart) | Cart after totals estimation |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### ExchangeRate

Lists the exchange rate.

#### Fields

| Field Name | Description |
|------------|-------------|
| `currency_to` - [`String`](#string) | Specifies the store’s default currency to exchange to. |
| `rate` - [`Float`](#float) | The exchange rate for the store’s default currency. |

#### Example

```json
{"currency_to": "xyz789", "rate": 987.65}
```

<HorizontalLine />

### FilterEqualTypeInput

Defines a filter that matches the input exactly.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](#string) | Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as &#x60;5&#x60;. |
| `in` - [`[String]`](#string) | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of &#x60;[&quot;4&quot;, &quot;5&quot;, &quot;6&quot;]&#x60;. |

#### Example

```json
{
  "eq": "abc123",
  "in": ["xyz789"]
}
```

<HorizontalLine />

### FilterMatchTypeEnum

#### Values

| Enum Value | Description |
|------------|-------------|
| `FULL` |  |
| `PARTIAL` |  |

#### Example

```json
""FULL""
```

<HorizontalLine />

### FilterMatchTypeInput

Defines a filter that performs a fuzzy search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `match` - [`String`](#string) | Use this attribute to fuzzy match the specified string. For example, to filter on a specific SKU, specify a value such as &#x60;24-MB01&#x60;. |
| `match_type` - [`FilterMatchTypeEnum`](#filtermatchtypeenum) | Filter match type for fine-tuned results. Possible values FULL or PARTIAL. If match_type is not provided, returned results will default to FULL match. |

#### Example

```json
{"match": "xyz789", "match_type": "FULL"}
```

<HorizontalLine />

### FilterRangeTypeInput

Defines a filter that matches a range of values, such as prices or dates.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `from` - [`String`](#string) | Use this attribute to specify the lowest possible value in the range. |
| `to` - [`String`](#string) | Use this attribute to specify the highest possible value in the range. |

#### Example

```json
{
  "from": "abc123",
  "to": "xyz789"
}
```

<HorizontalLine />

### FilterStringTypeInput

Defines a filter for an input string.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](#string) | Filters items that are exactly the same as the specified string. |
| `in` - [`[String]`](#string) | Filters items that are exactly the same as entries specified in an array of strings. |
| `match` - [`String`](#string) | Defines a filter that performs a fuzzy search using the specified string. |

#### Example

```json
{
  "eq": "abc123",
  "in": ["xyz789"],
  "match": "abc123"
}
```

<HorizontalLine />

### FilterTypeInput

Defines the comparison operators that can be used in a filter.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](#string) | Equals. |
| `finset` - [`[String]`](#string) |  |
| `from` - [`String`](#string) | From. Must be used with the &#x60;to&#x60; field. |
| `gt` - [`String`](#string) | Greater than. |
| `gteq` - [`String`](#string) | Greater than or equal to. |
| `in` - [`[String]`](#string) | In. The value can contain a set of comma-separated values. |
| `like` - [`String`](#string) | Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. |
| `lt` - [`String`](#string) | Less than. |
| `lteq` - [`String`](#string) | Less than or equal to. |
| `moreq` - [`String`](#string) | More than or equal to. |
| `neq` - [`String`](#string) | Not equal to. |
| `nin` - [`[String]`](#string) | Not in. The value can contain a set of comma-separated values. |
| `notnull` - [`String`](#string) | Not null. |
| `null` - [`String`](#string) | Is null. |
| `to` - [`String`](#string) | To. Must be used with the &#x60;from&#x60; field. |

#### Example

```json
{
  "eq": "xyz789",
  "finset": ["abc123"],
  "from": "abc123",
  "gt": "abc123",
  "gteq": "abc123",
  "in": ["xyz789"],
  "like": "abc123",
  "lt": "abc123",
  "lteq": "xyz789",
  "moreq": "abc123",
  "neq": "abc123",
  "nin": ["abc123"],
  "notnull": "abc123",
  "null": "abc123",
  "to": "xyz789"
}
```

<HorizontalLine />

### FixedProductTax

A single FPT that can be applied to a product price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](#money) | The amount of the Fixed Product Tax. |
| `label` - [`String`](#string) | The display label assigned to the Fixed Product Tax. |

#### Example

```json
{
  "amount": Money,
  "label": "abc123"
}
```

<HorizontalLine />

### FixedProductTaxDisplaySettings

Lists display settings for the Fixed Product Tax.

#### Values

| Enum Value | Description |
|------------|-------------|
| `INCLUDE_FPT_WITHOUT_DETAILS` | The displayed price includes the FPT amount without displaying the &#x60;ProductPrice.fixed_product_taxes&#x60; values. This value corresponds to &#x27;Including FPT only&#x27;. |
| `INCLUDE_FPT_WITH_DETAILS` | The displayed price includes the FPT amount while displaying the values of &#x60;ProductPrice.fixed_product_taxes&#x60; separately. This value corresponds to &#x27;Including FPT and FPT description&#x27;. |
| `EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS` | The displayed price does not include the FPT amount. The values of &#x60;ProductPrice.fixed_product_taxes&#x60; and the price including the FPT are displayed separately. This value corresponds to &#x27;Excluding FPT, Including FPT description and final price.&#x27; |
| `EXCLUDE_FPT_WITHOUT_DETAILS` | The displayed price does not include the FPT amount. The values from &#x60;ProductPrice.fixed_product_taxes&#x60; are not displayed. This value corresponds to &#x27;Excluding FPT&#x27;. |
| `FPT_DISABLED` | The FPT feature is not enabled. You can omit &#x60;ProductPrice.fixed_product_taxes&#x60; from your query. |

#### Example

```json
""INCLUDE_FPT_WITHOUT_DETAILS""
```

<HorizontalLine />

### Float

The `Float` scalar type represents signed double-precision fractional
values as specified by
[IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

#### Example

```json
123.45
```

<HorizontalLine />

### GenerateCustomerTokenAsAdminInput

Identifies which customer requires remote shopping assistance.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customer_email` - [`String!`](#string) | The email address of the customer requesting remote shopping assistance. |

#### Example

```json
{"customer_email": "xyz789"}
```

<HorizontalLine />

### GenerateCustomerTokenAsAdminOutput

Contains the generated customer token.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customer_token` - [`String!`](#string) | The generated customer token. |

#### Example

```json
{"customer_token": "xyz789"}
```

<HorizontalLine />

### GenerateNegotiableQuoteFromTemplateInput

Specifies the template id, from which to generate quote from.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{"template_id": 4}
```

<HorizontalLine />

### GenerateNegotiableQuoteFromTemplateOutput

Contains the generated negotiable quote id.

#### Fields

| Field Name | Description |
|------------|-------------|
| `negotiable_quote_uid` - [`ID!`](#id) | The unique ID of a generated &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{"negotiable_quote_uid": 4}
```

<HorizontalLine />

### GetPaymentSDKOutput

Gets the payment SDK URLs and values

#### Fields

| Field Name | Description |
|------------|-------------|
| `sdkParams` - [`[PaymentSDKParamsItem]`](#paymentsdkparamsitem) | The payment SDK parameters |

#### Example

```json
{"sdkParams": [PaymentSDKParamsItem]}
```

<HorizontalLine />

### GiftCardAccount

Contains details about the gift card account.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance` - [`Money`](#money) | The balance remaining on the gift card. |
| `code` - [`String`](#string) | The gift card account code. |
| `expiration_date` - [`String`](#string) | The expiration date of the gift card. |

#### Example

```json
{
  "balance": Money,
  "code": "abc123",
  "expiration_date": "xyz789"
}
```

<HorizontalLine />

### GiftCardAccountInput

Contains the gift card code.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `gift_card_code` - [`String!`](#string) | The applied gift card code. |

#### Example

```json
{"gift_card_code": "abc123"}
```

<HorizontalLine />

### GiftCardAmounts

Contains the value of a gift card, the website that generated the card, and related information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_id` - [`Int`](#int) | An internal attribute ID. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;GiftCardAmounts&#x60; object. |
| `value` - [`Float`](#float) | The value of the gift card. |
| `value_id` - [`Int`](#int) | An ID that is assigned to each unique gift card amount. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `website_id` - [`Int`](#int) | The ID of the website that generated the gift card. |
| `website_value` - [`Float`](#float) | The value of the gift card. |

#### Example

```json
{
  "attribute_id": 987,
  "uid": 4,
  "value": 987.65,
  "value_id": 987,
  "website_id": 123,
  "website_value": 987.65
}
```

<HorizontalLine />

### GiftCardCartItem

Contains details about a gift card that has been added to a cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount and currency of the gift card. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array of customizations applied to the gift card. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `message` - [`String`](#string) | The message from the sender to the recipient. |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer&#x27;s quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller&#x27;s quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `recipient_email` - [`String`](#string) | The email address of the person receiving the gift card. |
| `recipient_name` - [`String!`](#string) | The name of the person receiving the gift card. |
| `sender_email` - [`String`](#string) | The email address of the sender. |
| `sender_name` - [`String!`](#string) | The name of the sender. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "amount": Money,
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "id": "abc123",
  "is_available": false,
  "max_qty": 123.45,
  "message": "abc123",
  "min_qty": 987.65,
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "recipient_email": "xyz789",
  "recipient_name": "xyz789",
  "sender_email": "abc123",
  "sender_name": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### GiftCardCreditMemoItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for a credit memo item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CreditMemoItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |

#### Example

```json
{
  "discounts": [Discount],
  "gift_card": GiftCardItem,
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_refunded": 987.65
}
```

<HorizontalLine />

### GiftCardInvoiceItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for an invoice item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;InvoiceItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
  "discounts": [Discount],
  "gift_card": GiftCardItem,
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 987.65
}
```

<HorizontalLine />

### GiftCardItem

Contains details about a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String`](#string) | The message from the sender to the recipient. |
| `recipient_email` - [`String`](#string) | The email address of the receiver of a virtual gift card. |
| `recipient_name` - [`String`](#string) | The name of the receiver of a physical or virtual gift card. |
| `sender_email` - [`String`](#string) | The email address of the sender of a virtual gift card. |
| `sender_name` - [`String`](#string) | The name of the sender of a physical or virtual gift card. |

#### Example

```json
{
  "message": "xyz789",
  "recipient_email": "xyz789",
  "recipient_name": "xyz789",
  "sender_email": "abc123",
  "sender_name": "abc123"
}
```

<HorizontalLine />

### GiftCardOptions

Contains details about the sender, recipient, and amount of a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](#money) | The amount and currency of the gift card. |
| `custom_giftcard_amount` - [`Money`](#money) | The custom amount and currency of the gift card. |
| `message` - [`String`](#string) | A message to the recipient. |
| `recipient_email` - [`String`](#string) | The email address of the person receiving the gift card. |
| `recipient_name` - [`String`](#string) | The name of the person receiving the gift card. |
| `sender_email` - [`String`](#string) | The email address of the person sending the gift card. |
| `sender_name` - [`String`](#string) | The name of the person sending the gift card. |

#### Example

```json
{
  "amount": Money,
  "custom_giftcard_amount": Money,
  "message": "abc123",
  "recipient_email": "abc123",
  "recipient_name": "xyz789",
  "sender_email": "xyz789",
  "sender_name": "abc123"
}
```

<HorizontalLine />

### GiftCardOrderItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for an order item. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | The ProductInterface object, which contains details about the base product |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `product_type` - [`String`](#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |
| `quantity_returned` - [`Float`](#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](#string) | The status of the order item. |

#### Example

```json
{
  "discounts": [Discount],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_card": GiftCardItem,
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "abc123",
  "product_url_key": "xyz789",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 123.45,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
  "quantity_returned": 987.65,
  "quantity_shipped": 987.65,
  "selected_options": [OrderItemOption],
  "status": "xyz789"
}
```

<HorizontalLine />

### GiftCardProduct

Defines properties of a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `allow_message` - [`Boolean`](#boolean) | Indicates whether the customer can provide a message to accompany the gift card. |
| `allow_open_amount` - [`Boolean`](#boolean) | Indicates whether shoppers have the ability to set the value of the gift card. |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_card_options` - [`[CustomizableOptionInterface]!`](#customizableoptioninterface) | An array of customizable gift card options. |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `giftcard_amounts` - [`[GiftCardAmounts]`](#giftcardamounts) | An array that contains information about the values and ID of a gift card. |
| `giftcard_type` - [`GiftCardTypeEnum`](#giftcardtypeenum) | An enumeration that specifies the type of gift card. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_redeemable` - [`Boolean`](#boolean) | Indicates whether the customer can redeem the value on the card for cash. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `lifetime` - [`Int`](#int) | The number of days after purchase until the gift card expires. A null value means there is no limit. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `message_max_length` - [`Int`](#int) | The maximum number of characters the gift message can contain. |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `open_amount_max` - [`Float`](#float) | The maximum acceptable value of an open amount gift card. |
| `open_amount_min` - [`Float`](#float) | The minimum acceptable value of an open amount gift card. |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product&#x27;s thumbnail image. |
| `tier_price` - [`Float`](#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use &#x60;__typename&#x60; instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](#string) |  *(Deprecated: Use product&#x27;s &#x60;canonical_url&#x60; or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "allow_message": false,
  "allow_open_amount": false,
  "attribute_set_id": 123,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "color": 123,
  "country_of_manufacture": "abc123",
  "created_at": "xyz789",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_card_options": [CustomizableOptionInterface],
  "gift_message_available": "abc123",
  "giftcard_amounts": [GiftCardAmounts],
  "giftcard_type": "VIRTUAL",
  "id": 987,
  "image": ProductImage,
  "is_redeemable": true,
  "is_returnable": "abc123",
  "lifetime": 987,
  "manufacturer": 987,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "message_max_length": 123,
  "meta_description": "xyz789",
  "meta_keyword": "xyz789",
  "meta_title": "abc123",
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "open_amount_max": 123.45,
  "open_amount_min": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "rating_summary": 123.45,
  "redirect_code": 123,
  "related_products": [ProductInterface],
  "relative_url": "xyz789",
  "review_count": 123,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "xyz789",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 123.45,
  "special_to_date": "xyz789",
  "staged": true,
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "tier_price": 987.65,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "xyz789",
  "uid": 4,
  "updated_at": "abc123",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "abc123",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website],
  "weight": 123.45
}
```

<HorizontalLine />

### GiftCardRequisitionListItem

Contains details about gift cards added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `gift_card_options` - [`GiftCardOptions!`](#giftcardoptions) | An array that defines gift card properties. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The amount added. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "gift_card_options": GiftCardOptions,
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": "4"
}
```

<HorizontalLine />

### GiftCardShipmentItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for a shipment item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ShipmentItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Example

```json
{
  "gift_card": GiftCardItem,
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_shipped": 123.45
}
```

<HorizontalLine />

### GiftCardTypeEnum

Specifies the gift card type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `VIRTUAL` |  |
| `PHYSICAL` |  |
| `COMBINED` |  |

#### Example

```json
""VIRTUAL""
```

<HorizontalLine />

### GiftCardWishlistItem

A single gift card added to a wish list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `gift_card_options` - [`GiftCardOptions!`](#giftcardoptions) | Details about a gift card. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "gift_card_options": GiftCardOptions,
  "id": "4",
  "product": ProductInterface,
  "quantity": 987.65
}
```

<HorizontalLine />

### GiftMessage

Contains the text of a gift message, its sender, and recipient

#### Fields

| Field Name | Description |
|------------|-------------|
| `from` - [`String!`](#string) | Sender name |
| `message` - [`String!`](#string) | Gift message text |
| `to` - [`String!`](#string) | Recipient name |

#### Example

```json
{
  "from": "xyz789",
  "message": "xyz789",
  "to": "xyz789"
}
```

<HorizontalLine />

### GiftMessageInput

Defines a gift message.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `from` - [`String!`](#string) | The name of the sender. |
| `message` - [`String!`](#string) | The text of the gift message. |
| `to` - [`String!`](#string) | The name of the recepient. |

#### Example

```json
{
  "from": "xyz789",
  "message": "abc123",
  "to": "xyz789"
}
```

<HorizontalLine />

### GiftOptionsPrices

Contains prices for gift wrapping options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_wrapping_for_items` - [`Money`](#money) | Price of the gift wrapping for all individual order items. |
| `gift_wrapping_for_order` - [`Money`](#money) | Price of the gift wrapping for the whole order. |
| `printed_card` - [`Money`](#money) | Price for the printed card. |

#### Example

```json
{
  "gift_wrapping_for_items": Money,
  "gift_wrapping_for_order": Money,
  "printed_card": Money
}
```

<HorizontalLine />

### GiftRegistry

Contains details about a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](#string) | The date on which the gift registry was created. Only the registry owner can access this attribute. |
| `dynamic_attributes` - [`[GiftRegistryDynamicAttribute]`](#giftregistrydynamicattribute) | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. |
| `event_name` - [`String!`](#string) | The name of the event. |
| `items` - [`[GiftRegistryItemInterface]`](#giftregistryiteminterface) | An array of products added to the gift registry. |
| `message` - [`String!`](#string) | The message text the customer entered to describe the event. |
| `owner_name` - [`String!`](#string) | The customer who created the gift registry. |
| `privacy_settings` - [`GiftRegistryPrivacySettings!`](#giftregistryprivacysettings) | An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute. |
| `registrants` - [`[GiftRegistryRegistrant]`](#giftregistryregistrant) | Contains details about each registrant for the event. |
| `shipping_address` - [`CustomerAddress`](#customeraddress) | Contains the customer&#x27;s shipping address. Only the registry owner can access this attribute. |
| `status` - [`GiftRegistryStatus!`](#giftregistrystatus) | An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute. |
| `type` - [`GiftRegistryType`](#giftregistrytype) | The type of gift registry. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the gift registry. |

#### Example

```json
{
  "created_at": "xyz789",
  "dynamic_attributes": [GiftRegistryDynamicAttribute],
  "event_name": "xyz789",
  "items": [GiftRegistryItemInterface],
  "message": "xyz789",
  "owner_name": "xyz789",
  "privacy_settings": "PRIVATE",
  "registrants": [GiftRegistryRegistrant],
  "shipping_address": CustomerAddress,
  "status": "ACTIVE",
  "type": GiftRegistryType,
  "uid": "4"
}
```

<HorizontalLine />

### GiftRegistryDynamicAttribute

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `group` - [`GiftRegistryDynamicAttributeGroup!`](#giftregistrydynamicattributegroup) | Indicates which group the dynamic attribute is a member of. |
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](#string) | A corresponding value for the code. |

#### Example

```json
{
  "code": 4,
  "group": "EVENT_INFORMATION",
  "label": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeGroup

Defines the group type of a gift registry dynamic attribute.

#### Values

| Enum Value | Description |
|------------|-------------|
| `EVENT_INFORMATION` |  |
| `PRIVACY_SETTINGS` |  |
| `REGISTRANT` |  |
| `GENERAL_INFORMATION` |  |
| `DETAILED_INFORMATION` |  |
| `SHIPPING_ADDRESS` |  |

#### Example

```json
""EVENT_INFORMATION""
```

<HorizontalLine />

### GiftRegistryDynamicAttributeInput

Defines a dynamic attribute.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `code` - [`ID!`](#id) | A unique key for an additional attribute of the event. |
| `value` - [`String!`](#string) | A string that describes a dynamic attribute. |

#### Example

```json
{
  "code": "4",
  "value": "abc123"
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](#string) | A corresponding value for the code. |

#### Possible Types

| GiftRegistryDynamicAttributeInterface Types |
|----------------|
| [`GiftRegistryRegistrantDynamicAttribute`](#giftregistryregistrantdynamicattribute) |
| [`GiftRegistryDynamicAttribute`](#giftregistrydynamicattribute) |

#### Example

```json
{
  "code": 4,
  "label": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeMetadata

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_group` - [`String!`](#string) | Indicates which group the dynamic attribute a member of. |
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `input_type` - [`String!`](#string) | The selected input type for this dynamic attribute. The value can be one of several static or custom types. |
| `is_required` - [`Boolean!`](#boolean) | Indicates whether the dynamic attribute is required. |
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `sort_order` - [`Int`](#int) | The order in which to display the dynamic attribute. |

#### Example

```json
{
  "attribute_group": "abc123",
  "code": "4",
  "input_type": "abc123",
  "is_required": false,
  "label": "xyz789",
  "sort_order": 987
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeMetadataInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_group` - [`String!`](#string) | Indicates which group the dynamic attribute a member of. |
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `input_type` - [`String!`](#string) | The selected input type for this dynamic attribute. The value can be one of several static or custom types. |
| `is_required` - [`Boolean!`](#boolean) | Indicates whether the dynamic attribute is required. |
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `sort_order` - [`Int`](#int) | The order in which to display the dynamic attribute. |

#### Possible Types

| GiftRegistryDynamicAttributeMetadataInterface Types |
|----------------|
| [`GiftRegistryDynamicAttributeMetadata`](#giftregistrydynamicattributemetadata) |

#### Example

```json
{
  "attribute_group": "xyz789",
  "code": "4",
  "input_type": "abc123",
  "is_required": true,
  "label": "abc123",
  "sort_order": 987
}
```

<HorizontalLine />

### GiftRegistryItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](#string) | The date the product was added to the gift registry. |
| `note` - [`String`](#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface`](#productinterface) | Details about the gift registry item. |
| `quantity` - [`Float!`](#float) | The requested quantity of the product. |
| `quantity_fulfilled` - [`Float!`](#float) | The fulfilled quantity of the product. |
| `uid` - [`ID!`](#id) | The unique ID of a gift registry item. |

#### Example

```json
{
  "created_at": "xyz789",
  "note": "abc123",
  "product": ProductInterface,
  "quantity": 987.65,
  "quantity_fulfilled": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### GiftRegistryItemInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](#string) | The date the product was added to the gift registry. |
| `note` - [`String`](#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface`](#productinterface) | Details about the gift registry item. |
| `quantity` - [`Float!`](#float) | The requested quantity of the product. |
| `quantity_fulfilled` - [`Float!`](#float) | The fulfilled quantity of the product. |
| `uid` - [`ID!`](#id) | The unique ID of a gift registry item. |

#### Possible Types

| GiftRegistryItemInterface Types |
|----------------|
| [`GiftRegistryItem`](#giftregistryitem) |

#### Example

```json
{
  "created_at": "abc123",
  "note": "xyz789",
  "product": ProductInterface,
  "quantity": 123.45,
  "quantity_fulfilled": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### GiftRegistryItemUserErrorInterface

Contains the status and any errors that encountered with the customer's gift register item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to move the cart items to the gift registry was successful. |
| `user_errors` - [`[GiftRegistryItemsUserError]!`](#giftregistryitemsusererror) | An array of errors encountered while moving items from the cart to the gift registry. |

#### Possible Types

| GiftRegistryItemUserErrorInterface Types |
|----------------|
| [`MoveCartItemsToGiftRegistryOutput`](#movecartitemstogiftregistryoutput) |

#### Example

```json
{
  "status": true,
  "user_errors": [GiftRegistryItemsUserError]
}
```

<HorizontalLine />

### GiftRegistryItemsUserError

Contains details about an error that occurred when processing a gift registry item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`GiftRegistryItemsUserErrorType!`](#giftregistryitemsusererrortype) | An error code that describes the error encountered. |
| `gift_registry_item_uid` - [`ID`](#id) | The unique ID of the gift registry item containing an error. |
| `gift_registry_uid` - [`ID`](#id) | The unique ID of the &#x60;GiftRegistry&#x60; object containing an error. |
| `message` - [`String!`](#string) | A localized error message. |
| `product_uid` - [`ID`](#id) | The unique ID of the product containing an error. |

#### Example

```json
{
  "code": "OUT_OF_STOCK",
  "gift_registry_item_uid": 4,
  "gift_registry_uid": 4,
  "message": "abc123",
  "product_uid": 4
}
```

<HorizontalLine />

### GiftRegistryItemsUserErrorType

Defines the error type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `OUT_OF_STOCK` | Used for handling out of stock products. |
| `NOT_FOUND` | Used for exceptions like EntityNotFound. |
| `UNDEFINED` | Used for other exceptions, such as database connection failures. |

#### Example

```json
""OUT_OF_STOCK""
```

<HorizontalLine />

### GiftRegistryOutputInterface

Contains the customer's gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry. |

#### Possible Types

| GiftRegistryOutputInterface Types |
|----------------|
| [`MoveCartItemsToGiftRegistryOutput`](#movecartitemstogiftregistryoutput) |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### GiftRegistryPrivacySettings

Defines the privacy setting of the gift registry.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRIVATE` |  |
| `PUBLIC` |  |

#### Example

```json
""PRIVATE""
```

<HorizontalLine />

### GiftRegistryRegistrant

Contains details about a registrant.

#### Fields

| Field Name | Description |
|------------|-------------|
| `dynamic_attributes` - [`[GiftRegistryRegistrantDynamicAttribute]`](#giftregistryregistrantdynamicattribute) | An array of dynamic attributes assigned to the registrant. |
| `email` - [`String!`](#string) | The email address of the registrant. Only the registry owner can access this attribute. |
| `firstname` - [`String!`](#string) | The first name of the registrant. |
| `lastname` - [`String!`](#string) | The last name of the registrant. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryRegistrantDynamicAttribute
  ],
  "email": "abc123",
  "firstname": "xyz789",
  "lastname": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### GiftRegistryRegistrantDynamicAttribute

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](#string) | A corresponding value for the code. |

#### Example

```json
{
  "code": "4",
  "label": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### GiftRegistrySearchResult

Contains the results of a gift registry search.

#### Fields

| Field Name | Description |
|------------|-------------|
| `event_date` - [`String`](#string) | The date of the event. |
| `event_title` - [`String!`](#string) | The title given to the event. |
| `gift_registry_uid` - [`ID!`](#id) | The URL key of the gift registry. |
| `location` - [`String`](#string) | The location of the event. |
| `name` - [`String!`](#string) | The name of the gift registry owner. |
| `type` - [`String`](#string) | The type of event being held. |

#### Example

```json
{
  "event_date": "xyz789",
  "event_title": "xyz789",
  "gift_registry_uid": 4,
  "location": "abc123",
  "name": "xyz789",
  "type": "xyz789"
}
```

<HorizontalLine />

### GiftRegistryShippingAddressInput

Defines a shipping address for a gift registry. Specify either `address_data` or the `address_id`. If both are provided, validation will fail.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address_data` - [`CustomerAddressInput`](#customeraddressinput) | Defines the shipping address for this gift registry. |
| `address_id` - [`ID`](#id) | The ID assigned to this customer address. |

#### Example

```json
{"address_data": CustomerAddressInput, "address_id": 4}
```

<HorizontalLine />

### GiftRegistryStatus

Defines the status of the gift registry.

#### Values

| Enum Value | Description |
|------------|-------------|
| `ACTIVE` |  |
| `INACTIVE` |  |

#### Example

```json
""ACTIVE""
```

<HorizontalLine />

### GiftRegistryType

Contains details about a gift registry type.

#### Fields

| Field Name | Description |
|------------|-------------|
| `dynamic_attributes_metadata` - [`[GiftRegistryDynamicAttributeMetadataInterface]`](#giftregistrydynamicattributemetadatainterface) | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. |
| `label` - [`String!`](#string) | The label assigned to the gift registry type on the Admin. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the gift registry type. |

#### Example

```json
{
  "dynamic_attributes_metadata": [
    GiftRegistryDynamicAttributeMetadataInterface
  ],
  "label": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### GiftWrapping

Contains details about the selected or available gift wrapping options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `design` - [`String!`](#string) | The name of the gift wrapping design. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;GiftWrapping&#x60; object. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `image` - [`GiftWrappingImage`](#giftwrappingimage) | The preview image for a gift wrapping option. |
| `price` - [`Money!`](#money) | The gift wrapping price. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;GiftWrapping&#x60; object. |

#### Example

```json
{
  "design": "abc123",
  "id": 4,
  "image": GiftWrappingImage,
  "price": Money,
  "uid": "4"
}
```

<HorizontalLine />

### GiftWrappingImage

Points to an image associated with a gift wrapping option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The gift wrapping preview image label. |
| `url` - [`String!`](#string) | The gift wrapping preview image URL. |

#### Example

```json
{
  "label": "abc123",
  "url": "abc123"
}
```

<HorizontalLine />

### GooglePayButtonStyles

#### Fields

| Field Name | Description |
|------------|-------------|
| `color` - [`String`](#string) | The button color |
| `height` - [`Int`](#int) | The button height in pixels |
| `type` - [`String`](#string) | The button type |

#### Example

```json
{
  "color": "abc123",
  "height": 987,
  "type": "xyz789"
}
```

<HorizontalLine />

### GooglePayConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `button_styles` - [`GooglePayButtonStyles`](#googlepaybuttonstyles) | The styles for the GooglePay Button configuration |
| `code` - [`String`](#string) | The payment method code as defined in the payment gateway |
| `is_visible` - [`Boolean`](#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](#string) | Defines the payment intent (Authorize or Capture |
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `sdk_params` - [`[SDKParams]`](#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](#string) | The relative order the payment method is displayed on the checkout page |
| `title` - [`String`](#string) | The name displayed for the payment method |

#### Example

```json
{
  "button_styles": GooglePayButtonStyles,
  "code": "abc123",
  "is_visible": true,
  "payment_intent": "abc123",
  "payment_source": "xyz789",
  "sdk_params": [SDKParams],
  "sort_order": "abc123",
  "title": "abc123"
}
```

<HorizontalLine />

### GooglePayMethodInput

Google Pay inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](#string) | The payment services order ID |
| `paypal_order_id` - [`String`](#string) | PayPal order ID |

#### Example

```json
{
  "payment_source": "xyz789",
  "payments_order_id": "xyz789",
  "paypal_order_id": "xyz789"
}
```

<HorizontalLine />

### GroupedProduct

Defines a grouped product, which consists of simple standalone products that are presented as a group.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `items` - [`[GroupedProductItem]`](#groupedproductitem) | An array containing grouped product items. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product&#x27;s thumbnail image. |
| `tier_price` - [`Float`](#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use &#x60;__typename&#x60; instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](#string) |  *(Deprecated: Use product&#x27;s &#x60;canonical_url&#x60; or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "attribute_set_id": 123,
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "color": 123,
  "country_of_manufacture": "xyz789",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": "abc123",
  "id": 987,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "items": [GroupedProductItem],
  "manufacturer": 123,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "xyz789",
  "meta_keyword": "xyz789",
  "meta_title": "abc123",
  "name": "xyz789",
  "new_from_date": "abc123",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "options_container": "xyz789",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "rating_summary": 123.45,
  "redirect_code": 123,
  "related_products": [ProductInterface],
  "relative_url": "xyz789",
  "review_count": 987,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 987.65,
  "special_to_date": "abc123",
  "staged": true,
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "xyz789",
  "uid": 4,
  "updated_at": "xyz789",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "xyz789",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website],
  "weight": 123.45
}
```

<HorizontalLine />

### GroupedProductItem

Contains information about an individual grouped product item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `position` - [`Int`](#int) | The relative position of this item compared to the other group items. |
| `product` - [`ProductInterface`](#productinterface) | Details about this product option. |
| `qty` - [`Float`](#float) | The quantity of this grouped product item. |

#### Example

```json
{
  "position": 123,
  "product": ProductInterface,
  "qty": 123.45
}
```

<HorizontalLine />

### GroupedProductWishlistItem

A grouped product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": "4",
  "product": ProductInterface,
  "quantity": 987.65
}
```

<HorizontalLine />

### HostedFieldsConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `cc_vault_code` - [`String`](#string) | Vault payment method code |
| `code` - [`String`](#string) | The payment method code as defined in the payment gateway |
| `is_vault_enabled` - [`Boolean`](#boolean) | Card vault enabled |
| `is_visible` - [`Boolean`](#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](#string) | Defines the payment intent (Authorize or Capture |
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `requires_card_details` - [`Boolean`](#boolean) | Card and bin details required |
| `sdk_params` - [`[SDKParams]`](#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](#string) | The relative order the payment method is displayed on the checkout page |
| `three_ds` - [`Boolean`](#boolean) | 3DS mode |
| `title` - [`String`](#string) | The name displayed for the payment method |

#### Example

```json
{
  "cc_vault_code": "xyz789",
  "code": "abc123",
  "is_vault_enabled": false,
  "is_visible": false,
  "payment_intent": "xyz789",
  "payment_source": "abc123",
  "requires_card_details": true,
  "sdk_params": [SDKParams],
  "sort_order": "xyz789",
  "three_ds": false,
  "title": "xyz789"
}
```

<HorizontalLine />

### HostedFieldsInput

Hosted Fields payment inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cardBin` - [`String`](#string) | Card bin number |
| `cardExpiryMonth` - [`String`](#string) | Expiration month of the card |
| `cardExpiryYear` - [`String`](#string) | Expiration year of the card |
| `cardLast4` - [`String`](#string) | Last four digits of the card |
| `holderName` - [`String`](#string) | Name on the card |
| `is_active_payment_token_enabler` - [`Boolean`](#boolean) | Indicates whether details about the shopper&#x27;s credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the Payment Services payment integration. |
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](#string) | The payment services order ID |
| `paypal_order_id` - [`String`](#string) | PayPal order ID |

#### Example

```json
{
  "cardBin": "xyz789",
  "cardExpiryMonth": "abc123",
  "cardExpiryYear": "abc123",
  "cardLast4": "abc123",
  "holderName": "abc123",
  "is_active_payment_token_enabler": true,
  "payment_source": "abc123",
  "payments_order_id": "xyz789",
  "paypal_order_id": "abc123"
}
```

<HorizontalLine />

### HostedProInput

Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `return_url` - [`String!`](#string) | The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |

#### Example

```json
{
  "cancel_url": "xyz789",
  "return_url": "abc123"
}
```

<HorizontalLine />

### HostedProUrl

Contains the secure URL used for the Payments Pro Hosted Solution payment method.

#### Fields

| Field Name | Description |
|------------|-------------|
| `secure_form_url` - [`String`](#string) | The secure URL generated by PayPal. |

#### Example

```json
{"secure_form_url": "xyz789"}
```

<HorizontalLine />

### HostedProUrlInput

Contains the required input to request the secure URL for Payments Pro Hosted Solution payment.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the shopper&#x27;s cart. |

#### Example

```json
{"cart_id": "abc123"}
```

<HorizontalLine />

### HttpQueryParameter

Contains target path parameters.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String`](#string) | A parameter name. |
| `value` - [`String`](#string) | A parameter value. |

#### Example

```json
{
  "name": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### ID

The `ID` scalar type represents a unique identifier, often used to
refetch an object or as key for a cache. The ID type appears in a JSON
response as a String; however, it is not intended to be human-readable.
When expected as an input type, any string (such as `"4"`) or integer
(such as `4`) input value will be accepted as an ID.

#### Example

```json
4
```

<HorizontalLine />

### ImageSwatchData

#### Fields

| Field Name | Description |
|------------|-------------|
| `thumbnail` - [`String`](#string) | The URL assigned to the thumbnail of the swatch image. |
| `value` - [`String`](#string) | The value can be represented as color (HEX code), image link, or text. |

#### Example

```json
{
  "thumbnail": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### InputFilterEnum

List of templates/filters applied to customer attribute input.

#### Values

| Enum Value | Description |
|------------|-------------|
| `NONE` | There are no templates or filters to be applied. |
| `DATE` | Forces attribute input to follow the date format. |
| `TRIM` | Strip whitespace (or other characters) from the beginning and end of the input. |
| `STRIPTAGS` | Strip HTML Tags. |
| `ESCAPEHTML` | Escape HTML Entities. |

#### Example

```json
""NONE""
```

<HorizontalLine />

### Int

The `Int` scalar type represents non-fractional signed whole numeric
values. Int can represent values between -(2^31) and 2^31 - 1.

#### Example

```json
123
```

<HorizontalLine />

### InternalError

Contains an error message when an internal error occurred.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |

#### Example

```json
{"message": "xyz789"}
```

<HorizontalLine />

### Invoice

Contains invoice details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comments` - [`[SalesCommentItem]`](#salescommentitem) | Comments on the invoice. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;Invoice&#x60; object. |
| `items` - [`[InvoiceItemInterface]`](#invoiceiteminterface) | Invoiced product details. |
| `number` - [`String!`](#string) | Sequential invoice number. |
| `total` - [`InvoiceTotal`](#invoicetotal) | Invoice total amount details. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "id": "4",
  "items": [InvoiceItemInterface],
  "number": "abc123",
  "total": InvoiceTotal
}
```

<HorizontalLine />

### InvoiceItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;InvoiceItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
  "discounts": [Discount],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 123.45
}
```

<HorizontalLine />

### InvoiceItemInterface

Contains detailes about invoiced items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;InvoiceItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Possible Types

| InvoiceItemInterface Types |
|----------------|
| [`DownloadableInvoiceItem`](#downloadableinvoiceitem) |
| [`BundleInvoiceItem`](#bundleinvoiceitem) |
| [`GiftCardInvoiceItem`](#giftcardinvoiceitem) |
| [`InvoiceItem`](#invoiceitem) |

#### Example

```json
{
  "discounts": [Discount],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 987.65
}
```

<HorizontalLine />

### InvoiceTotal

Contains price details from an invoice.

#### Fields

| Field Name | Description |
|------------|-------------|
| `base_grand_total` - [`Money!`](#money) | The final base grand total amount in the base currency. |
| `discounts` - [`[Discount]`](#discount) | The applied discounts to the invoice. |
| `grand_total` - [`Money!`](#money) | The final total amount, including shipping, discounts, and taxes. |
| `shipping_handling` - [`ShippingHandling`](#shippinghandling) | Details about the shipping and handling costs for the invoice. |
| `subtotal` - [`Money!`](#money) | The subtotal of the invoice, excluding shipping, discounts, and taxes. |
| `taxes` - [`[TaxItem]`](#taxitem) | The invoice tax details. |
| `total_shipping` - [`Money!`](#money) | The shipping amount for the invoice. |
| `total_tax` - [`Money!`](#money) | The amount of tax applied to the invoice. |

#### Example

```json
{
  "base_grand_total": Money,
  "discounts": [Discount],
  "grand_total": Money,
  "shipping_handling": ShippingHandling,
  "subtotal": Money,
  "taxes": [TaxItem],
  "total_shipping": Money,
  "total_tax": Money
}
```

<HorizontalLine />

### IsCompanyAdminEmailAvailableOutput

Contains the response of a company admin email validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_email_available` - [`Boolean!`](#boolean) | Indicates whether the specified email address can be used to create a company administrator. |

#### Example

```json
{"is_email_available": true}
```

<HorizontalLine />

### IsCompanyEmailAvailableOutput

Contains the response of a company email validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_email_available` - [`Boolean!`](#boolean) | Indicates whether the specified email address can be used to create a company. |

#### Example

```json
{"is_email_available": false}
```

<HorizontalLine />

### IsCompanyRoleNameAvailableOutput

Contains the response of a role name validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_role_name_available` - [`Boolean!`](#boolean) | Indicates whether the specified company role name is available. |

#### Example

```json
{"is_role_name_available": true}
```

<HorizontalLine />

### IsCompanyUserEmailAvailableOutput

Contains the response of a company user email validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_email_available` - [`Boolean!`](#boolean) | Indicates whether the specified email address can be used to create a company user. |

#### Example

```json
{"is_email_available": true}
```

<HorizontalLine />

### IsEmailAvailableOutput

Contains the result of the `isEmailAvailable` query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_email_available` - [`Boolean`](#boolean) | Indicates whether the specified email address can be used to create a customer. |

#### Example

```json
{"is_email_available": true}
```

<HorizontalLine />

### ItemNote

The note object for quote line item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String`](#string) | Timestamp that reflects note creation date. |
| `creator_id` - [`Int`](#int) | ID of the user who submitted a note. |
| `creator_type` - [`Int`](#int) | Type of teh user who submitted a note. |
| `negotiable_quote_item_uid` - [`ID`](#id) | The unique ID of a &#x60;CartItemInterface&#x60; object. |
| `note` - [`String`](#string) | Note text. |
| `note_uid` - [`ID`](#id) | The unique ID of a &#x60;ItemNote&#x60; object. |

#### Example

```json
{
  "created_at": "xyz789",
  "creator_id": 123,
  "creator_type": 123,
  "negotiable_quote_item_uid": 4,
  "note": "xyz789",
  "note_uid": 4
}
```

<HorizontalLine />

### ItemSelectedBundleOption

A list of options of the selected bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOption&#x60; object. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `label` - [`String!`](#string) | The label of the option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOption&#x60; object. |
| `values` - [`[ItemSelectedBundleOptionValue]`](#itemselectedbundleoptionvalue) | A list of products that represent the values of the parent option. |

#### Example

```json
{
  "id": 4,
  "label": "abc123",
  "uid": 4,
  "values": [ItemSelectedBundleOptionValue]
}
```

<HorizontalLine />

### ItemSelectedBundleOptionValue

A list of values for the selected bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOptionValue&#x60; object. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `price` - [`Money!`](#money) | The price of the child bundle product. |
| `product_name` - [`String!`](#string) | The name of the child bundle product. |
| `product_sku` - [`String!`](#string) | The SKU of the child bundle product. |
| `quantity` - [`Float!`](#float) | The number of this bundle product that were ordered. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOptionValue&#x60; object. |

#### Example

```json
{
  "id": "4",
  "price": Money,
  "product_name": "abc123",
  "product_sku": "xyz789",
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### KeyValue

Contains a key-value pair.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String`](#string) | The name part of the key/value pair. |
| `value` - [`String`](#string) | The value part of the key/value pair. |

#### Example

```json
{
  "name": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### LayerFilter

Contains information for rendering layered navigation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `filter_items` - [`[LayerFilterItemInterface]`](#layerfilteriteminterface) | An array of filter items. *(Deprecated: Use &#x60;Aggregation.options&#x60; instead.)* |
| `filter_items_count` - [`Int`](#int) | The count of filter items in filter group. *(Deprecated: Use &#x60;Aggregation.count&#x60; instead.)* |
| `name` - [`String`](#string) | The name of a layered navigation filter. *(Deprecated: Use &#x60;Aggregation.label&#x60; instead.)* |
| `request_var` - [`String`](#string) | The request variable name for a filter query. *(Deprecated: Use &#x60;Aggregation.attribute_code&#x60; instead.)* |

#### Example

```json
{
  "filter_items": [LayerFilterItemInterface],
  "filter_items_count": 123,
  "name": "xyz789",
  "request_var": "xyz789"
}
```

<HorizontalLine />

### LayerFilterItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `items_count` - [`Int`](#int) | The count of items per filter. *(Deprecated: Use &#x60;AggregationOption.count&#x60; instead.)* |
| `label` - [`String`](#string) | The label for a filter. *(Deprecated: Use &#x60;AggregationOption.label&#x60; instead.)* |
| `value_string` - [`String`](#string) | The value of a filter request variable to be used in query. *(Deprecated: Use &#x60;AggregationOption.value&#x60; instead.)* |

#### Example

```json
{
  "items_count": 123,
  "label": "abc123",
  "value_string": "abc123"
}
```

<HorizontalLine />

### LayerFilterItemInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `items_count` - [`Int`](#int) | The count of items per filter. *(Deprecated: Use &#x60;AggregationOption.count&#x60; instead.)* |
| `label` - [`String`](#string) | The label for a filter. *(Deprecated: Use &#x60;AggregationOption.label&#x60; instead.)* |
| `value_string` - [`String`](#string) | The value of a filter request variable to be used in query. *(Deprecated: Use &#x60;AggregationOption.value&#x60; instead.)* |

#### Possible Types

| LayerFilterItemInterface Types |
|----------------|
| [`LayerFilterItem`](#layerfilteritem) |
| [`SwatchLayerFilterItem`](#swatchlayerfilteritem) |

#### Example

```json
{
  "items_count": 987,
  "label": "xyz789",
  "value_string": "abc123"
}
```

<HorizontalLine />

### LineItemNoteInput

Sets quote item note.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `note` - [`String`](#string) | The note text to be added. |
| `quote_item_uid` - [`ID!`](#id) | The unique ID of a &#x60;CartLineItem&#x60; object. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "note": "abc123",
  "quote_item_uid": "4",
  "quote_uid": "4"
}
```

<HorizontalLine />

### MediaGalleryEntry

Defines characteristics about images and videos associated with a specific product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `content` - [`ProductMediaGalleryEntriesContent`](#productmediagalleryentriescontent) | Details about the content of the media gallery item. |
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `file` - [`String`](#string) | The path of the image on the server. |
| `id` - [`Int`](#int) | The identifier assigned to the object. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `label` - [`String`](#string) | The alt text displayed on the storefront when the user points to the image. |
| `media_type` - [`String`](#string) | Either &#x60;image&#x60; or &#x60;video&#x60;. |
| `position` - [`Int`](#int) | The media item&#x27;s position after it has been sorted. |
| `types` - [`[String]`](#string) | Array of image types. It can have the following values: image, small_image, thumbnail. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;MediaGalleryEntry&#x60; object. |
| `video_content` - [`ProductMediaGalleryEntriesVideoContent`](#productmediagalleryentriesvideocontent) | Details about the content of a video item. |

#### Example

```json
{
  "content": ProductMediaGalleryEntriesContent,
  "disabled": false,
  "file": "xyz789",
  "id": 987,
  "label": "abc123",
  "media_type": "xyz789",
  "position": 123,
  "types": ["abc123"],
  "uid": "4",
  "video_content": ProductMediaGalleryEntriesVideoContent
}
```

<HorizontalLine />

### MediaGalleryInterface

Contains basic information about a product image or video.

#### Fields

| Field Name | Description |
|------------|-------------|
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](#string) | The label of the product image or video. |
| `position` - [`Int`](#int) | The media item&#x27;s position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |

#### Possible Types

| MediaGalleryInterface Types |
|----------------|
| [`ProductImage`](#productimage) |
| [`ProductVideo`](#productvideo) |

#### Example

```json
{
  "disabled": false,
  "label": "abc123",
  "position": 987,
  "url": "abc123"
}
```

<HorizontalLine />

### MessageStyleLogo

#### Fields

| Field Name | Description |
|------------|-------------|
| `type` - [`String`](#string) | The type of logo for the PayPal Pay Later messaging |

#### Example

```json
{"type": "xyz789"}
```

<HorizontalLine />

### MessageStyles

#### Fields

| Field Name | Description |
|------------|-------------|
| `layout` - [`String`](#string) | The message layout |
| `logo` - [`MessageStyleLogo`](#messagestylelogo) | The message logo |

#### Example

```json
{
  "layout": "xyz789",
  "logo": MessageStyleLogo
}
```

<HorizontalLine />

### Money

Defines a monetary value, including a numeric value and a currency code.

#### Fields

| Field Name | Description |
|------------|-------------|
| `currency` - [`CurrencyEnum`](#currencyenum) | A three-letter currency code, such as USD or EUR. |
| `value` - [`Float`](#float) | A number expressing a monetary value. |

#### Example

```json
{"currency": "AFN", "value": 123.45}
```

<HorizontalLine />

### MoveCartItemsToGiftRegistryOutput

Contains the customer's gift registry and any errors encountered.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry. |
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to move the cart items to the gift registry was successful. |
| `user_errors` - [`[GiftRegistryItemsUserError]!`](#giftregistryitemsusererror) | An array of errors encountered while moving items from the cart to the gift registry. |

#### Example

```json
{
  "gift_registry": GiftRegistry,
  "status": false,
  "user_errors": [GiftRegistryItemsUserError]
}
```

<HorizontalLine />

### MoveItemsBetweenRequisitionListsInput

An input object that defines the items in a requisition list to be moved.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `requisitionListItemUids` - [`[ID]!`](#id) | An array of IDs representing products moved from one requisition list to another. |

#### Example

```json
{"requisitionListItemUids": ["4"]}
```

<HorizontalLine />

### MoveItemsBetweenRequisitionListsOutput

Output of the request to move items to another requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `destination_requisition_list` - [`RequisitionList`](#requisitionlist) | The destination requisition list after moving items. |
| `source_requisition_list` - [`RequisitionList`](#requisitionlist) | The source requisition list after moving items. |

#### Example

```json
{
  "destination_requisition_list": RequisitionList,
  "source_requisition_list": RequisitionList
}
```

<HorizontalLine />

### MoveLineItemToRequisitionListInput

Move Line Item to Requisition List.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_item_uid` - [`ID!`](#id) | The unique ID of a &#x60;CartLineItem&#x60; object. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |
| `requisition_list_uid` - [`ID!`](#id) | The unique ID of a requisition list. |

#### Example

```json
{
  "quote_item_uid": "4",
  "quote_uid": 4,
  "requisition_list_uid": 4
}
```

<HorizontalLine />

### MoveLineItemToRequisitionListOutput

Contains the updated negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after moving item to requisition list. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### MoveProductsBetweenWishlistsOutput

Contains the source and target wish lists after moving products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `destination_wishlist` - [`Wishlist!`](#wishlist) | The destination wish list after receiving products moved from the source wish list. |
| `source_wishlist` - [`Wishlist!`](#wishlist) | The source wish list after moving products from it. |
| `user_errors` - [`[WishListUserInputError]!`](#wishlistuserinputerror) | An array of errors encountered while moving products to a wish list. |

#### Example

```json
{
  "destination_wishlist": Wishlist,
  "source_wishlist": Wishlist,
  "user_errors": [WishListUserInputError]
}
```

<HorizontalLine />

### NegotiableQuote

Contains details about a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_payment_methods` - [`[AvailablePaymentMethod]`](#availablepaymentmethod) | An array of payment methods that can be applied to the negotiable quote. |
| `billing_address` - [`NegotiableQuoteBillingAddress`](#negotiablequotebillingaddress) | The billing address applied to the negotiable quote. |
| `buyer` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The first and last name of the buyer. |
| `comments` - [`[NegotiableQuoteComment]`](#negotiablequotecomment) | A list of comments made by the buyer and seller. |
| `created_at` - [`String`](#string) | Timestamp indicating when the negotiable quote was created. |
| `email` - [`String`](#string) | The email address of the company user. |
| `history` - [`[NegotiableQuoteHistoryEntry]`](#negotiablequotehistoryentry) | A list of status and price changes for the negotiable quote. |
| `is_virtual` - [`Boolean!`](#boolean) | Indicates whether the negotiable quote contains only virtual products. |
| `items` - [`[CartItemInterface]`](#cartiteminterface) | The list of items in the negotiable quote. |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote. |
| `prices` - [`CartPrices`](#cartprices) | A set of subtotals and totals applied to the negotiable quote. |
| `selected_payment_method` - [`SelectedPaymentMethod`](#selectedpaymentmethod) | The payment method that was applied to the negotiable quote. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote. |
| `status` - [`NegotiableQuoteStatus!`](#negotiablequotestatus) | The status of the negotiable quote. |
| `total_quantity` - [`Float!`](#float) | The total number of items in the negotiable quote. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the negotiable quote was updated. |

#### Example

```json
{
  "available_payment_methods": [AvailablePaymentMethod],
  "billing_address": NegotiableQuoteBillingAddress,
  "buyer": NegotiableQuoteUser,
  "comments": [NegotiableQuoteComment],
  "created_at": "xyz789",
  "email": "abc123",
  "history": [NegotiableQuoteHistoryEntry],
  "is_virtual": false,
  "items": [CartItemInterface],
  "name": "abc123",
  "prices": CartPrices,
  "selected_payment_method": SelectedPaymentMethod,
  "shipping_addresses": [NegotiableQuoteShippingAddress],
  "status": "SUBMITTED",
  "total_quantity": 987.65,
  "uid": "4",
  "updated_at": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteAddressCountry

Defines the company's country.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The address country code. |
| `label` - [`String!`](#string) | The display name of the region. |

#### Example

```json
{
  "code": "abc123",
  "label": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteAddressInput

Defines the billing or shipping address to be applied to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String!`](#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](#string) | The company name. |
| `country_code` - [`String!`](#string) | The country code and label for the billing or shipping address. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `region` - [`String`](#string) | A string that defines the state or province of the billing or shipping address. |
| `region_id` - [`Int`](#int) | An integer that defines the state or province of the billing or shipping address. |
| `save_in_address_book` - [`Boolean`](#boolean) | Determines whether to save the address in the customer&#x27;s address book. The default value is true. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country_code": "xyz789",
  "firstname": "xyz789",
  "lastname": "abc123",
  "postcode": "abc123",
  "region": "xyz789",
  "region_id": 987,
  "save_in_address_book": false,
  "street": ["abc123"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteAddressInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The company&#x27;s city or town. |
| `company` - [`String`](#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company&#x27;s country. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `postcode` - [`String`](#string) | The company&#x27;s ZIP or postal code. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |

#### Possible Types

| NegotiableQuoteAddressInterface Types |
|----------------|
| [`NegotiableQuoteShippingAddress`](#negotiablequoteshippingaddress) |
| [`NegotiableQuoteBillingAddress`](#negotiablequotebillingaddress) |

#### Example

```json
{
  "city": "abc123",
  "company": "abc123",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "xyz789",
  "lastname": "abc123",
  "postcode": "xyz789",
  "region": NegotiableQuoteAddressRegion,
  "street": ["abc123"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteAddressRegion

Defines the company's state or province.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | The address region code. |
| `label` - [`String`](#string) | The display name of the region. |
| `region_id` - [`Int`](#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "code": "abc123",
  "label": "abc123",
  "region_id": 987
}
```

<HorizontalLine />

### NegotiableQuoteBillingAddress

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The company&#x27;s city or town. |
| `company` - [`String`](#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company&#x27;s country. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `postcode` - [`String`](#string) | The company&#x27;s ZIP or postal code. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "xyz789",
  "lastname": "xyz789",
  "postcode": "xyz789",
  "region": NegotiableQuoteAddressRegion,
  "street": ["abc123"],
  "telephone": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteBillingAddressInput

Defines the billing address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | Defines a billing address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID of a &#x60;CustomerAddress&#x60; object. |
| `same_as_shipping` - [`Boolean`](#boolean) | Indicates whether to set the billing address to be the same as the existing shipping address on the negotiable quote. |
| `use_for_shipping` - [`Boolean`](#boolean) | Indicates whether to set the shipping address to be the same as this billing address. |

#### Example

```json
{
  "address": NegotiableQuoteAddressInput,
  "customer_address_uid": 4,
  "same_as_shipping": false,
  "use_for_shipping": true
}
```

<HorizontalLine />

### NegotiableQuoteComment

Contains a single plain text comment from either the buyer or seller.

#### Fields

| Field Name | Description |
|------------|-------------|
| `author` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The first and last name of the commenter. |
| `created_at` - [`String!`](#string) | Timestamp indicating when the comment was created. |
| `creator_type` - [`NegotiableQuoteCommentCreatorType!`](#negotiablequotecommentcreatortype) | Indicates whether a buyer or seller commented. |
| `text` - [`String!`](#string) | The plain text comment. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteComment&#x60; object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "created_at": "xyz789",
  "creator_type": "BUYER",
  "text": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### NegotiableQuoteCommentCreatorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `BUYER` |  |
| `SELLER` |  |

#### Example

```json
""BUYER""
```

<HorizontalLine />

### NegotiableQuoteCommentInput

Contains the commend provided by the buyer.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment` - [`String!`](#string) | The comment provided by the buyer. |

#### Example

```json
{"comment": "xyz789"}
```

<HorizontalLine />

### NegotiableQuoteCustomLogChange

Contains custom log entries added by third-party extensions.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_value` - [`String!`](#string) | The new entry content. |
| `old_value` - [`String`](#string) | The previous entry in the custom log. |
| `title` - [`String!`](#string) | The title of the custom log entry. |

#### Example

```json
{
  "new_value": "xyz789",
  "old_value": "xyz789",
  "title": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteFilterInput

Defines a filter to limit the negotiable quotes to return.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `ids` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by the ID of one or more negotiable quotes. |
| `name` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Filter by the negotiable quote name. |

#### Example

```json
{
  "ids": FilterEqualTypeInput,
  "name": FilterMatchTypeInput
}
```

<HorizontalLine />

### NegotiableQuoteHistoryChanges

Contains a list of changes to a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comment_added` - [`NegotiableQuoteHistoryCommentChange`](#negotiablequotehistorycommentchange) | The comment provided with a change in the negotiable quote history. |
| `custom_changes` - [`NegotiableQuoteCustomLogChange`](#negotiablequotecustomlogchange) | Lists log entries added by third-party extensions. |
| `expiration` - [`NegotiableQuoteHistoryExpirationChange`](#negotiablequotehistoryexpirationchange) | The expiration date of the negotiable quote before and after a change in the quote history. |
| `products_removed` - [`NegotiableQuoteHistoryProductsRemovedChange`](#negotiablequotehistoryproductsremovedchange) | Lists products that were removed as a result of a change in the quote history. |
| `statuses` - [`NegotiableQuoteHistoryStatusesChange`](#negotiablequotehistorystatuseschange) | The status before and after a change in the negotiable quote history. |
| `total` - [`NegotiableQuoteHistoryTotalChange`](#negotiablequotehistorytotalchange) | The total amount of the negotiable quote before and after a change in the quote history. |

#### Example

```json
{
  "comment_added": NegotiableQuoteHistoryCommentChange,
  "custom_changes": NegotiableQuoteCustomLogChange,
  "expiration": NegotiableQuoteHistoryExpirationChange,
  "products_removed": NegotiableQuoteHistoryProductsRemovedChange,
  "statuses": NegotiableQuoteHistoryStatusesChange,
  "total": NegotiableQuoteHistoryTotalChange
}
```

<HorizontalLine />

### NegotiableQuoteHistoryCommentChange

Contains a comment submitted by a seller or buyer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comment` - [`String!`](#string) | A plain text comment submitted by a seller or buyer. |

#### Example

```json
{"comment": "xyz789"}
```

<HorizontalLine />

### NegotiableQuoteHistoryEntry

Contains details about a change for a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `author` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The person who made a change in the status of the negotiable quote. |
| `change_type` - [`NegotiableQuoteHistoryEntryChangeType!`](#negotiablequotehistoryentrychangetype) | An enum that describes the why the entry in the negotiable quote history changed status. |
| `changes` - [`NegotiableQuoteHistoryChanges`](#negotiablequotehistorychanges) | The set of changes in the negotiable quote. |
| `created_at` - [`String`](#string) | Timestamp indicating when the negotiable quote entry was created. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteHistoryEntry&#x60; object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "change_type": "CREATED",
  "changes": NegotiableQuoteHistoryChanges,
  "created_at": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### NegotiableQuoteHistoryEntryChangeType

#### Values

| Enum Value | Description |
|------------|-------------|
| `CREATED` |  |
| `UPDATED` |  |
| `CLOSED` |  |
| `UPDATED_BY_SYSTEM` |  |

#### Example

```json
""CREATED""
```

<HorizontalLine />

### NegotiableQuoteHistoryExpirationChange

Contains a new expiration date and the previous date.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_expiration` - [`String`](#string) | The expiration date after the change. The value will be &#x27;null&#x27; if not set. |
| `old_expiration` - [`String`](#string) | The previous expiration date. The value will be &#x27;null&#x27; if not previously set. |

#### Example

```json
{
  "new_expiration": "abc123",
  "old_expiration": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteHistoryProductsRemovedChange

Contains lists of products that have been removed from the catalog and negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `products_removed_from_catalog` - [`[ID]`](#id) | A list of product IDs the seller removed from the catalog. |
| `products_removed_from_quote` - [`[ProductInterface]`](#productinterface) | A list of products removed from the negotiable quote by either the buyer or the seller. |

#### Example

```json
{
  "products_removed_from_catalog": [4],
  "products_removed_from_quote": [ProductInterface]
}
```

<HorizontalLine />

### NegotiableQuoteHistoryStatusChange

Lists a new status change applied to a negotiable quote and the previous status.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_status` - [`NegotiableQuoteStatus!`](#negotiablequotestatus) | The updated status. |
| `old_status` - [`NegotiableQuoteStatus`](#negotiablequotestatus) | The previous status. The value will be null for the first history entry in a negotiable quote. |

#### Example

```json
{"new_status": "SUBMITTED", "old_status": "SUBMITTED"}
```

<HorizontalLine />

### NegotiableQuoteHistoryStatusesChange

Contains a list of status changes that occurred for the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `changes` - [`[NegotiableQuoteHistoryStatusChange]!`](#negotiablequotehistorystatuschange) | A list of status changes. |

#### Example

```json
{"changes": [NegotiableQuoteHistoryStatusChange]}
```

<HorizontalLine />

### NegotiableQuoteHistoryTotalChange

Contains a new price and the previous price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_price` - [`Money`](#money) | The total price as a result of the change. |
| `old_price` - [`Money`](#money) | The previous total price on the negotiable quote. |

#### Example

```json
{
  "new_price": Money,
  "old_price": Money
}
```

<HorizontalLine />

### NegotiableQuoteInvalidStateError

An error indicating that an operation was attempted on a negotiable quote in an invalid state.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |

#### Example

```json
{"message": "abc123"}
```

<HorizontalLine />

### NegotiableQuoteItemQuantityInput

Specifies the updated quantity of an item.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quantity` - [`Float!`](#float) | The new quantity of the negotiable quote item. |
| `quote_item_uid` - [`ID!`](#id) | The unique ID of a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{"quantity": 987.65, "quote_item_uid": "4"}
```

<HorizontalLine />

### NegotiableQuotePaymentMethodInput

Defines the payment method to be applied to the negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `code` - [`String!`](#string) | Payment method code |
| `purchase_order_number` - [`String`](#string) | The purchase order number. Optional for most payment methods. |

#### Example

```json
{
  "code": "abc123",
  "purchase_order_number": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteShippingAddress

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_shipping_methods` - [`[AvailableShippingMethod]`](#availableshippingmethod) | An array of shipping methods available to the buyer. |
| `city` - [`String!`](#string) | The company&#x27;s city or town. |
| `company` - [`String`](#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company&#x27;s country. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `postcode` - [`String`](#string) | The company&#x27;s ZIP or postal code. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `selected_shipping_method` - [`SelectedShippingMethod`](#selectedshippingmethod) | The selected shipping method. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |

#### Example

```json
{
  "available_shipping_methods": [AvailableShippingMethod],
  "city": "xyz789",
  "company": "abc123",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "xyz789",
  "lastname": "xyz789",
  "postcode": "abc123",
  "region": NegotiableQuoteAddressRegion,
  "selected_shipping_method": SelectedShippingMethod,
  "street": ["abc123"],
  "telephone": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteShippingAddressInput

Defines shipping addresses for the negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | A shipping address. |
| `customer_address_uid` - [`ID`](#id) | An ID from the company user&#x27;s address book that uniquely identifies the address to be used for shipping. |
| `customer_notes` - [`String`](#string) | Text provided by the company user. |

#### Example

```json
{
  "address": NegotiableQuoteAddressInput,
  "customer_address_uid": "4",
  "customer_notes": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteSortInput

Defines the field to use to sort a list of negotiable quotes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sort_direction` - [`SortEnum!`](#sortenum) | Whether to return results in ascending or descending order. |
| `sort_field` - [`NegotiableQuoteSortableField!`](#negotiablequotesortablefield) | The specified sort field. |

#### Example

```json
{"sort_direction": "ASC", "sort_field": "QUOTE_NAME"}
```

<HorizontalLine />

### NegotiableQuoteSortableField

#### Values

| Enum Value | Description |
|------------|-------------|
| `QUOTE_NAME` | Sorts negotiable quotes by name. |
| `CREATED_AT` | Sorts negotiable quotes by the dates they were created. |
| `UPDATED_AT` | Sorts negotiable quotes by the dates they were last modified. |

#### Example

```json
""QUOTE_NAME""
```

<HorizontalLine />

### NegotiableQuoteStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `SUBMITTED` |  |
| `PENDING` |  |
| `UPDATED` |  |
| `OPEN` |  |
| `ORDERED` |  |
| `CLOSED` |  |
| `DECLINED` |  |
| `EXPIRED` |  |
| `DRAFT` |  |

#### Example

```json
""SUBMITTED""
```

<HorizontalLine />

### NegotiableQuoteTemplate

Contains details about a negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `buyer` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The first and last name of the buyer. |
| `comments` - [`[NegotiableQuoteComment]`](#negotiablequotecomment) | A list of comments made by the buyer and seller. |
| `expiration_date` - [`String!`](#string) | The expiration period of the negotiable quote template. |
| `history` - [`[NegotiableQuoteHistoryEntry]`](#negotiablequotehistoryentry) | A list of status and price changes for the negotiable quote template. |
| `is_min_max_qty_used` - [`Boolean!`](#boolean) | Indicates whether the minimum and maximum quantity settings are used. |
| `is_virtual` - [`Boolean!`](#boolean) | Indicates whether the negotiable quote template contains only virtual products. |
| `items` - [`[CartItemInterface]`](#cartiteminterface) | The list of items in the negotiable quote template. |
| `max_order_commitment` - [`Int!`](#int) | Commitment for maximum orders |
| `min_order_commitment` - [`Int!`](#int) | Commitment for minimum orders |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote template. |
| `notifications` - [`[QuoteTemplateNotificationMessage]`](#quotetemplatenotificationmessage) | A list of notifications for the negotiable quote template. |
| `prices` - [`CartPrices`](#cartprices) | A set of subtotals and totals applied to the negotiable quote template. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote template. |
| `status` - [`String!`](#string) | The status of the negotiable quote template. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |
| `total_quantity` - [`Float!`](#float) | The total number of items in the negotiable quote template. |

#### Example

```json
{
  "buyer": NegotiableQuoteUser,
  "comments": [NegotiableQuoteComment],
  "expiration_date": "abc123",
  "history": [NegotiableQuoteHistoryEntry],
  "is_min_max_qty_used": false,
  "is_virtual": true,
  "items": [CartItemInterface],
  "max_order_commitment": 123,
  "min_order_commitment": 987,
  "name": "abc123",
  "notifications": [QuoteTemplateNotificationMessage],
  "prices": CartPrices,
  "shipping_addresses": [NegotiableQuoteShippingAddress],
  "status": "xyz789",
  "template_id": 4,
  "total_quantity": 987.65
}
```

<HorizontalLine />

### NegotiableQuoteTemplateFilterInput

Defines a filter to limit the negotiable quotes to return.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `state` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by state of one or more negotiable quote templates. |
| `status` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by status of one or more negotiable quote templates. |

#### Example

```json
{
  "state": FilterEqualTypeInput,
  "status": FilterEqualTypeInput
}
```

<HorizontalLine />

### NegotiableQuoteTemplateGridItem

Contains data for a negotiable quote template in a grid.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activated_at` - [`String!`](#string) | The date and time the negotiable quote template was activated. |
| `company_name` - [`String!`](#string) | Company name the quote template is assigned to |
| `expiration_date` - [`String!`](#string) | The expiration period of the negotiable quote template. |
| `is_min_max_qty_used` - [`Boolean!`](#boolean) | Indicates whether the minimum and maximum quantity settings are used. |
| `last_shared_at` - [`String!`](#string) | The date and time the negotiable quote template was last shared. |
| `max_order_commitment` - [`Int!`](#int) | Commitment for maximum orders |
| `min_negotiated_grand_total` - [`Float!`](#float) | The minimum negotiated grand total of the negotiable quote template. |
| `min_order_commitment` - [`Int!`](#int) | Commitment for minimum orders |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote template. |
| `orders_placed` - [`Int!`](#int) | The number of orders placed for the negotiable quote template. |
| `sales_rep_name` - [`String!`](#string) | The first and last name of the sales representative. |
| `state` - [`String!`](#string) | State of the negotiable quote template. |
| `status` - [`String!`](#string) | The status of the negotiable quote template. |
| `submitted_by` - [`String!`](#string) | The first and last name of the buyer. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{
  "activated_at": "abc123",
  "company_name": "xyz789",
  "expiration_date": "abc123",
  "is_min_max_qty_used": false,
  "last_shared_at": "xyz789",
  "max_order_commitment": 987,
  "min_negotiated_grand_total": 123.45,
  "min_order_commitment": 987,
  "name": "xyz789",
  "orders_placed": 987,
  "sales_rep_name": "xyz789",
  "state": "xyz789",
  "status": "xyz789",
  "submitted_by": "abc123",
  "template_id": "4"
}
```

<HorizontalLine />

### NegotiableQuoteTemplateItemQuantityInput

Specifies the updated quantity of an item.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `item_id` - [`ID!`](#id) | The unique ID of a &#x60;CartItemInterface&#x60; object. |
| `max_qty` - [`Float`](#float) | The new max quantity of the negotiable quote template item. Only used if is_min_max_qty_used is true on the template. |
| `min_qty` - [`Float`](#float) | The new min quantity of the negotiable quote template item. Only used if is_min_max_qty_used is true on the template. |
| `quantity` - [`Float!`](#float) | The new quantity of the negotiable quote item. |

#### Example

```json
{
  "item_id": "4",
  "max_qty": 987.65,
  "min_qty": 123.45,
  "quantity": 987.65
}
```

<HorizontalLine />

### NegotiableQuoteTemplateShippingAddressInput

Defines shipping addresses for the negotiable quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | A shipping address. |
| `customer_address_uid` - [`ID`](#id) | An ID from the company user&#x27;s address book that uniquely identifies the address to be used for shipping. |
| `customer_notes` - [`String`](#string) | Text provided by the company user. |

#### Example

```json
{
  "address": NegotiableQuoteAddressInput,
  "customer_address_uid": 4,
  "customer_notes": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteTemplateSortInput

Defines the field to use to sort a list of negotiable quotes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sort_direction` - [`SortEnum!`](#sortenum) | Whether to return results in ascending or descending order. |
| `sort_field` - [`NegotiableQuoteTemplateSortableField!`](#negotiablequotetemplatesortablefield) | The specified sort field. |

#### Example

```json
{"sort_direction": "ASC", "sort_field": "TEMPLATE_ID"}
```

<HorizontalLine />

### NegotiableQuoteTemplateSortableField

#### Values

| Enum Value | Description |
|------------|-------------|
| `TEMPLATE_ID` | Sorts negotiable quote templates by template id. |
| `LAST_SHARED_AT` | Sorts negotiable quote templates by the date they were last shared. |

#### Example

```json
""TEMPLATE_ID""
```

<HorizontalLine />

### NegotiableQuoteTemplatesOutput

Contains a list of negotiable templates that match the specified filter.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[NegotiableQuoteTemplateGridItem]!`](#negotiablequotetemplategriditem) | A list of negotiable quote templates |
| `page_info` - [`SearchResultPageInfo!`](#searchresultpageinfo) | Contains pagination metadata |
| `sort_fields` - [`SortFields`](#sortfields) | Contains the default sort field and all available sort fields. |
| `total_count` - [`Int!`](#int) | The number of negotiable quote templates returned |

#### Example

```json
{
  "items": [NegotiableQuoteTemplateGridItem],
  "page_info": SearchResultPageInfo,
  "sort_fields": SortFields,
  "total_count": 123
}
```

<HorizontalLine />

### NegotiableQuoteUidNonFatalResultInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Possible Types

| NegotiableQuoteUidNonFatalResultInterface Types |
|----------------|
| [`NegotiableQuoteUidOperationSuccess`](#negotiablequoteuidoperationsuccess) |

#### Example

```json
{"quote_uid": 4}
```

<HorizontalLine />

### NegotiableQuoteUidOperationSuccess

Contains details about a successful operation on a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{"quote_uid": 4}
```

<HorizontalLine />

### NegotiableQuoteUser

A limited view of a Buyer or Seller in the negotiable quote process.

#### Fields

| Field Name | Description |
|------------|-------------|
| `firstname` - [`String!`](#string) | The first name of the buyer or seller making a change. |
| `lastname` - [`String!`](#string) | The buyer&#x27;s or seller&#x27;s last name. |

#### Example

```json
{
  "firstname": "abc123",
  "lastname": "abc123"
}
```

<HorizontalLine />

### NegotiableQuotesOutput

Contains a list of negotiable that match the specified filter.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[NegotiableQuote]!`](#negotiablequote) | A list of negotiable quotes |
| `page_info` - [`SearchResultPageInfo!`](#searchresultpageinfo) | Contains pagination metadata |
| `sort_fields` - [`SortFields`](#sortfields) | Contains the default sort field and all available sort fields. |
| `total_count` - [`Int!`](#int) | The number of negotiable quotes returned |

#### Example

```json
{
  "items": [NegotiableQuote],
  "page_info": SearchResultPageInfo,
  "sort_fields": SortFields,
  "total_count": 987
}
```

<HorizontalLine />

### NoSuchEntityUidError

Contains an error message when an invalid UID was specified.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |
| `uid` - [`ID!`](#id) | The specified invalid unique ID of an object. |

#### Example

```json
{
  "message": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### OpenNegotiableQuoteTemplateInput

Specifies the quote template id to open quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{"template_id": 4}
```

<HorizontalLine />

### Order

Contains the order ID.

#### Fields

| Field Name | Description |
|------------|-------------|
| `order_id` - [`String`](#string) |  *(Deprecated: Use &#x60;order_number&#x60; instead.)* |
| `order_number` - [`String!`](#string) | The unique ID for an &#x60;Order&#x60; object. |

#### Example

```json
{
  "order_id": "xyz789",
  "order_number": "abc123"
}
```

<HorizontalLine />

### OrderAddress

Contains detailed information about an order's billing and shipping addresses.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The city or town. |
| `company` - [`String`](#string) | The customer&#x27;s company. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The customer&#x27;s country. |
| `fax` - [`String`](#string) | The fax number. |
| `firstname` - [`String!`](#string) | The first name of the person associated with the shipping/billing address. |
| `lastname` - [`String!`](#string) | The family name of the person associated with the shipping/billing address. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the shipping/billing address. |
| `postcode` - [`String`](#string) | The customer&#x27;s ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`String`](#string) | The state or province name. |
| `region_id` - [`ID`](#id) | The unique ID for a &#x60;Region&#x60; object of a pre-defined region. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Value-added tax (VAT) number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country_code": "AF",
  "fax": "abc123",
  "firstname": "abc123",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": "xyz789",
  "region_id": "4",
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "xyz789",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### OrderInformationInput

Input to retrieve an order based on details.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](#string) | Order billing address email. |
| `number` - [`String!`](#string) | Order number. |
| `postcode` - [`String!`](#string) | Order billing address postcode. |

#### Example

```json
{
  "email": "abc123",
  "number": "xyz789",
  "postcode": "xyz789"
}
```

<HorizontalLine />
