### NegotiableQuoteTemplateGridItem

Contains data for a negotiable quote template in a grid.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activated_at` - [`String!`](#string) | The date and time the negotiable quote template was activated. |
| `company_name` - [`String!`](#string) | Company name the quote template is assigned to |
| `created_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote template was created. |
| `expiration_date` - [`String!`](#string) | The expiration period of the negotiable quote template. |
| `is_min_max_qty_used` - [`Boolean!`](#boolean) | Indicates whether the minimum and maximum quantity settings are used. |
| `last_ordered_at` - [`String!`](#string) | Timestamp indicating when the last negotiable quote template order was placed. |
| `last_shared_at` - [`String!`](#string) | The date and time the negotiable quote template was last shared. |
| `max_order_commitment` - [`Int!`](#int) | Commitment for maximum orders |
| `min_negotiated_grand_total` - [`Float!`](#float) | The minimum negotiated grand total of the negotiable quote template. |
| `min_order_commitment` - [`Int!`](#int) | Commitment for minimum orders |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote template. |
| `orders_placed` - [`Int!`](#int) | The number of orders placed for the negotiable quote template. |
| `prices` - [`CartPrices`](#cartprices) | A set of subtotals and totals applied to the negotiable quote template. |
| `sales_rep_name` - [`String!`](#string) | The first and last name of the sales representative. |
| `state` - [`String!`](#string) | State of the negotiable quote template. |
| `status` - [`String!`](#string) | The status of the negotiable quote template. |
| `submitted_by` - [`String!`](#string) | The first and last name of the buyer. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |
| `updated_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote template was updated. |

#### Example

```json
{
  "activated_at": "abc123",
  "company_name": "xyz789",
  "created_at": "xyz789",
  "expiration_date": "xyz789",
  "is_min_max_qty_used": false,
  "last_ordered_at": "xyz789",
  "last_shared_at": "abc123",
  "max_order_commitment": 123,
  "min_negotiated_grand_total": 987.65,
  "min_order_commitment": 987,
  "name": "abc123",
  "orders_placed": 987,
  "prices": CartPrices,
  "sales_rep_name": "abc123",
  "state": "abc123",
  "status": "xyz789",
  "submitted_by": "xyz789",
  "template_id": "4",
  "uid": "4",
  "updated_at": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteTemplateHistoryChanges

Contains a list of changes to a negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comment_added` - [`NegotiableQuoteHistoryCommentChange`](#negotiablequotehistorycommentchange) | The comment provided with a change in the negotiable quote history. |
| `custom_changes` - [`NegotiableQuoteCustomLogChange`](#negotiablequotecustomlogchange) | Lists log entries added by third-party extensions. |
| `expiration` - [`NegotiableQuoteHistoryExpirationChange`](#negotiablequotehistoryexpirationchange) | The expiration date of the negotiable quote before and after a change in the quote history. |
| `products_removed` - [`NegotiableQuoteHistoryProductsRemovedChange`](#negotiablequotehistoryproductsremovedchange) | Lists products that were removed as a result of a change in the quote history. |
| `statuses` - [`NegotiableQuoteTemplateHistoryStatusesChange`](#negotiablequotetemplatehistorystatuseschange) | The status before and after a change in the negotiable quote template history. |
| `total` - [`NegotiableQuoteHistoryTotalChange`](#negotiablequotehistorytotalchange) | The total amount of the negotiable quote before and after a change in the quote history. |

#### Example

```json
{
  "comment_added": NegotiableQuoteHistoryCommentChange,
  "custom_changes": NegotiableQuoteCustomLogChange,
  "expiration": NegotiableQuoteHistoryExpirationChange,
  "products_removed": NegotiableQuoteHistoryProductsRemovedChange,
  "statuses": NegotiableQuoteTemplateHistoryStatusesChange,
  "total": NegotiableQuoteHistoryTotalChange
}
```

<HorizontalLine />

### NegotiableQuoteTemplateHistoryEntry

Contains details about a change for a negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `author` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The person who made a change in the status of the negotiable quote. |
| `change_type` - [`NegotiableQuoteHistoryEntryChangeType!`](#negotiablequotehistoryentrychangetype) | An enum that specifies the reason for a status change in the negotiable quote history entry. |
| `changes` - [`NegotiableQuoteTemplateHistoryChanges`](#negotiablequotetemplatehistorychanges) | The set of changes in the negotiable quote template. |
| `created_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote entry was created. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteHistoryEntry&#x60; object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "change_type": "CREATED",
  "changes": NegotiableQuoteTemplateHistoryChanges,
  "created_at": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### NegotiableQuoteTemplateHistoryStatusChange

Lists a new status change applied to a negotiable quote template and the previous status.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_status` - [`String!`](#string) | The updated status. |
| `old_status` - [`String`](#string) | The previous status. The value will be null for the first history entry in a negotiable quote. |

#### Example

```json
{
  "new_status": "abc123",
  "old_status": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteTemplateHistoryStatusesChange

Contains a list of status changes that occurred for the negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `changes` - [`[NegotiableQuoteTemplateHistoryStatusChange]!`](#negotiablequotetemplatehistorystatuschange) | A list of status changes. |

#### Example

```json
{"changes": [NegotiableQuoteTemplateHistoryStatusChange]}
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
{"item_id": 4, "max_qty": 987.65, "min_qty": 123.45, "quantity": 123.45}
```

<HorizontalLine />

### NegotiableQuoteTemplateReferenceDocumentLinkInput

Defines the reference document link to add to a negotiable quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `document_identifier` - [`String`](#string) | The identifier of the reference document. |
| `document_name` - [`String!`](#string) | The title of the reference document. |
| `link_id` - [`ID`](#id) | The unique ID of a &#x60;NegotiableQuoteReferenceDocumentLink&#x60; object. |
| `reference_document_url` - [`String!`](#string) | The URL of the reference document. |

#### Example

```json
{
  "document_identifier": "abc123",
  "document_name": "abc123",
  "link_id": 4,
  "reference_document_url": "abc123"
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
  "customer_notes": "xyz789"
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
  "total_count": 987
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
{"quote_uid": "4"}
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
{"message": "abc123", "uid": 4}
```

<HorizontalLine />

### NumericOperatorInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `type` - [`NumericOperatorType`](#numericoperatortype) |  |

#### Example

```json
{"type": "UNKNOWN_NUMERIC_OPERATOR"}
```

<HorizontalLine />

### NumericOperatorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNKNOWN_NUMERIC_OPERATOR` |  |
| `GREATER_THAN_CURRENT` |  |
| `LESS_THAN_CURRENT` |  |

#### Example

```json
""UNKNOWN_NUMERIC_OPERATOR""
```

<HorizontalLine />

### OopePaymentMethodConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `backend_integration_url` - [`String!`](#string) | The backend URL to dispatch requests related to the payment method. |
| `custom_config` - [`[CustomConfigKeyValue]!`](#customconfigkeyvalue) | Custom config key values. |

#### Example

```json
{
  "backend_integration_url": "xyz789",
  "custom_config": [CustomConfigKeyValue]
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

### OperatorInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `rangeOperator` - [`RangeOperatorInput`](#rangeoperatorinput) |  |
| `customOperator` - [`CustomOperatorInput`](#customoperatorinput) |  |
| `isOperator` - [`IsOperatorInput`](#isoperatorinput) |  |
| `numericOperator` - [`NumericOperatorInput`](#numericoperatorinput) |  |
| `stringOperator` - [`StringOperatorInput`](#stringoperatorinput) |  |

#### Example

```json
{
  "rangeOperator": RangeOperatorInput,
  "customOperator": CustomOperatorInput,
  "isOperator": IsOperatorInput,
  "numericOperator": NumericOperatorInput,
  "stringOperator": StringOperatorInput
}
```

<HorizontalLine />

### Order

Contains the order ID.

#### Fields

| Field Name | Description |
|------------|-------------|
| `order_number` - [`String!`](#string) | The unique ID for an &#x60;Order&#x60; object. |

#### Example

```json
{"order_number": "abc123"}
```

<HorizontalLine />

### OrderActionType

The list of available order actions.

#### Values

| Enum Value | Description |
|------------|-------------|
| `REORDER` |  |
| `CANCEL` |  |
| `RETURN` |  |

#### Example

```json
""REORDER""
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
| `custom_attributesV2` - [`[AttributeValueInterface]!`](#attributevalueinterface) | Custom attributes assigned to the customer address. |
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
  "custom_attributesV2": [AttributeValueInterface],
  "fax": "xyz789",
  "firstname": "abc123",
  "lastname": "abc123",
  "middlename": "abc123",
  "postcode": "xyz789",
  "prefix": "xyz789",
  "region": "abc123",
  "region_id": 4,
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "xyz789",
  "vat_id": "xyz789"
}
```

<HorizontalLine />

### OrderCustomerInfo

#### Fields

| Field Name | Description |
|------------|-------------|
| `firstname` - [`String!`](#string) | First name of the customer |
| `lastname` - [`String`](#string) | Last name of the customer |
| `middlename` - [`String`](#string) | Middle name of the customer |
| `prefix` - [`String`](#string) | Prefix of the customer |
| `suffix` - [`String`](#string) | Suffix of the customer |

#### Example

```json
{
  "firstname": "xyz789",
  "lastname": "xyz789",
  "middlename": "abc123",
  "prefix": "xyz789",
  "suffix": "abc123"
}
```

<HorizontalLine />

### OrderItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the order item |
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
| `prices` - [`OrderItemPrices`](#orderitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface`](#productinterface) | The ProductInterface object, which contains details about the base product *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `product_type` - [`String`](#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |
| `quantity_return_requested` - [`Float`](#float) | The requested return quantity of the item. |
| `quantity_returned` - [`Float`](#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](#string) | The status of the order item. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "abc123",
  "product_url_key": "xyz789",
  "quantity_canceled": 987.65,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
  "quantity_return_requested": 123.45,
  "quantity_returned": 987.65,
  "quantity_shipped": 987.65,
  "selected_options": [OrderItemOption],
  "status": "xyz789"
}
```

<HorizontalLine />

### OrderItemInterface

Order item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the order item |
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
| `prices` - [`OrderItemPrices`](#orderitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface`](#productinterface) | The ProductInterface object, which contains details about the base product *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `product_type` - [`String`](#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |
| `quantity_return_requested` - [`Float`](#float) | The requested return quantity of the item. |
| `quantity_returned` - [`Float`](#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](#string) | The status of the order item. |

#### Possible Types

| OrderItemInterface Types |
|----------------|
| [`BundleOrderItem`](#bundleorderitem) |
| [`ConfigurableOrderItem`](#configurableorderitem) |
| [`DownloadableOrderItem`](#downloadableorderitem) |
| [`GiftCardOrderItem`](#giftcardorderitem) |
| [`OrderItem`](#orderitem) |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "eligible_for_return": false,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "xyz789",
  "product_url_key": "abc123",
  "quantity_canceled": 987.65,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 123.45,
  "quantity_refunded": 123.45,
  "quantity_return_requested": 123.45,
  "quantity_returned": 123.45,
  "quantity_shipped": 987.65,
  "selected_options": [OrderItemOption],
  "status": "abc123"
}
```

<HorizontalLine />

### OrderItemOption

Represents order item options like selected or entered.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The name of the option. |
| `value` - [`String!`](#string) | The value of the option. |

#### Example

```json
{
  "label": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### OrderItemPrices

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | An array of discounts to be applied to the cart item. |
| `fixed_product_taxes` - [`[FixedProductTax]!`](#fixedproducttax) |  |
| `original_price` - [`Money`](#money) | The original price of the item. |
| `original_price_including_tax` - [`Money`](#money) | The original price of the item including tax. |
| `original_row_total` - [`Money!`](#money) | The value of the original price multiplied by the quantity of the item. |
| `original_row_total_including_tax` - [`Money!`](#money) | The value of the original price multiplied by the quantity of the item including tax. |
| `price` - [`Money!`](#money) | The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. |
| `price_including_tax` - [`Money!`](#money) | The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. |
| `row_total` - [`Money!`](#money) | The value of the price multiplied by the quantity of the item. |
| `row_total_including_tax` - [`Money!`](#money) | The value of &#x60;row_total&#x60; plus the tax applied to the item. |
| `total_item_discount` - [`Money!`](#money) | The total of all discounts applied to the item. |

#### Example

```json
{
  "discounts": [Discount],
  "fixed_product_taxes": [FixedProductTax],
  "original_price": Money,
  "original_price_including_tax": Money,
  "original_row_total": Money,
  "original_row_total_including_tax": Money,
  "price": Money,
  "price_including_tax": Money,
  "row_total": Money,
  "row_total_including_tax": Money,
  "total_item_discount": Money
}
```

<HorizontalLine />

### OrderPaymentMethod

Contains details about the payment method used to pay for the order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `additional_data` - [`[KeyValue]`](#keyvalue) | Additional data per payment method type. |
| `name` - [`String!`](#string) | The label that describes the payment method. |
| `type` - [`String!`](#string) | The payment method code that indicates how the order was paid for. |

#### Example

```json
{
  "additional_data": [KeyValue],
  "name": "abc123",
  "type": "xyz789"
}
```

<HorizontalLine />

### OrderShipment

Contains order shipment details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comments` - [`[SalesCommentItem]`](#salescommentitem) | Comments added to the shipment. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;OrderShipment&#x60; object. |
| `items` - [`[ShipmentItemInterface]`](#shipmentiteminterface) | An array of items included in the shipment. |
| `number` - [`String!`](#string) | The sequential credit shipment number. |
| `tracking` - [`[ShipmentTracking]`](#shipmenttracking) | An array of shipment tracking details. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "id": 4,
  "items": [ShipmentItemInterface],
  "number": "xyz789",
  "tracking": [ShipmentTracking]
}
```

<HorizontalLine />

### OrderTokenInput

Input to retrieve an order based on token.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `token` - [`String!`](#string) | Order token. |

#### Example

```json
{"token": "xyz789"}
```

<HorizontalLine />

### OrderTotal

Contains details about the sales total amounts used to calculate the final price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `base_grand_total` - [`Money!`](#money) | The final base grand total amount in the base currency. |
| `discounts` - [`[Discount]`](#discount) | The applied discounts to the order. |
| `gift_options` - [`GiftOptionsPrices`](#giftoptionsprices) |  |
| `grand_total` - [`Money!`](#money) | The final total amount, including shipping, discounts, and taxes. |
| `grand_total_excl_tax` - [`Money!`](#money) | The grand total of the order, excluding taxes. |
| `shipping_handling` - [`ShippingHandling`](#shippinghandling) | Details about the shipping and handling costs for the order. |
| `subtotal_excl_tax` - [`Money!`](#money) | The subtotal of the order, excluding taxes. |
| `subtotal_incl_tax` - [`Money!`](#money) | The subtotal of the order, including taxes. |
| `taxes` - [`[TaxItem]`](#taxitem) | The order tax details. |
| `total_giftcard` - [`Money`](#money) | The gift card balance applied to the order. |
| `total_reward_points` - [`Money`](#money) | The total reward points applied to the order. |
| `total_shipping` - [`Money!`](#money) | The shipping amount for the order. |
| `total_store_credit` - [`Money`](#money) | The total store credit applied to the order. |
| `total_tax` - [`Money!`](#money) | The amount of tax applied to the order. |

#### Example

```json
{
  "base_grand_total": Money,
  "discounts": [Discount],
  "gift_options": GiftOptionsPrices,
  "grand_total": Money,
  "grand_total_excl_tax": Money,
  "shipping_handling": ShippingHandling,
  "subtotal_excl_tax": Money,
  "subtotal_incl_tax": Money,
  "taxes": [TaxItem],
  "total_giftcard": Money,
  "total_reward_points": Money,
  "total_shipping": Money,
  "total_store_credit": Money,
  "total_tax": Money
}
```

<HorizontalLine />

### PageType

Type of page on which recommendations are requested

#### Values

| Enum Value | Description |
|------------|-------------|
| `CMS` |  |
| `Cart` |  |
| `Category` |  *(Deprecated: This field is deprecated and will be removed.)* |
| `Checkout` |  |
| `PageBuilder` |  |
| `Product` |  |

#### Example

```json
""CMS""
```

<HorizontalLine />

### PaymentAttributeInput

Defines the payment attribute.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `key` - [`String!`](#string) | The code of the attribute. |
| `value` - [`String!`](#string) | The value of the attribute. |

#### Example

```json
{
  "key": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### PaymentConfigItem

Contains payment fields that are common to all types of payment methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | The payment method code as defined in the payment gateway |
| `is_visible` - [`Boolean`](#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](#string) | Defines the payment intent (Authorize or Capture |
| `sdk_params` - [`[SDKParams]`](#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](#string) | The relative order the payment method is displayed on the checkout page |
| `title` - [`String`](#string) | The name displayed for the payment method |

#### Possible Types

| PaymentConfigItem Types |
|----------------|
| [`ApplePayConfig`](#applepayconfig) |
| [`FastlaneConfig`](#fastlaneconfig) |
| [`GooglePayConfig`](#googlepayconfig) |
| [`HostedFieldsConfig`](#hostedfieldsconfig) |
| [`SmartButtonsConfig`](#smartbuttonsconfig) |

#### Example

```json
{
  "code": "abc123",
  "is_visible": true,
  "payment_intent": "abc123",
  "sdk_params": [SDKParams],
  "sort_order": "abc123",
  "title": "abc123"
}
```

<HorizontalLine />

### PaymentConfigOutput

Retrieves the payment configuration for a given location

#### Fields

| Field Name | Description |
|------------|-------------|
| `apple_pay` - [`ApplePayConfig`](#applepayconfig) | ApplePay payment method configuration |
| `fastlane` - [`FastlaneConfig`](#fastlaneconfig) | Fastlane payment method configuration |
| `google_pay` - [`GooglePayConfig`](#googlepayconfig) | GooglePay payment method configuration |
| `hosted_fields` - [`HostedFieldsConfig`](#hostedfieldsconfig) | Hosted fields payment method configuration |
| `smart_buttons` - [`SmartButtonsConfig`](#smartbuttonsconfig) | Smart Buttons payment method configuration |

#### Example

```json
{
  "apple_pay": ApplePayConfig,
  "fastlane": FastlaneConfig,
  "google_pay": GooglePayConfig,
  "hosted_fields": HostedFieldsConfig,
  "smart_buttons": SmartButtonsConfig
}
```

<HorizontalLine />

### PaymentLocation

Defines the origin location for that payment request

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRODUCT_DETAIL` |  |
| `MINICART` |  |
| `CART` |  |
| `CHECKOUT` |  |
| `ADMIN` |  |

#### Example

```json
""PRODUCT_DETAIL""
```

<HorizontalLine />

### PaymentMethodInput

Defines the payment method.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `additional_data` - [`[PaymentAttributeInput]`](#paymentattributeinput) | Additional data related to the payment method. |
| `code` - [`String!`](#string) | The internal name for the payment method. |
| `payment_services_paypal_apple_pay` - [`ApplePayMethodInput`](#applepaymethodinput) | Required input for Apple Pay button |
| `payment_services_paypal_fastlane` - [`FastlaneMethodInput`](#fastlanemethodinput) | Required input for fastlane |
| `payment_services_paypal_google_pay` - [`GooglePayMethodInput`](#googlepaymethodinput) | Required input for Google Pay button |
| `payment_services_paypal_hosted_fields` - [`HostedFieldsInput`](#hostedfieldsinput) | Required input for Hosted Fields |
| `payment_services_paypal_smart_buttons` - [`SmartButtonMethodInput`](#smartbuttonmethodinput) | Required input for Smart buttons |
| `payment_services_paypal_vault` - [`VaultMethodInput`](#vaultmethodinput) | Required input for vault |
| `purchase_order_number` - [`String`](#string) | The purchase order number. Optional for most payment methods. |

#### Example

```json
{
  "additional_data": [PaymentAttributeInput],
  "code": "abc123",
  "payment_services_paypal_apple_pay": ApplePayMethodInput,
  "payment_services_paypal_fastlane": FastlaneMethodInput,
  "payment_services_paypal_google_pay": GooglePayMethodInput,
  "payment_services_paypal_hosted_fields": HostedFieldsInput,
  "payment_services_paypal_smart_buttons": SmartButtonMethodInput,
  "payment_services_paypal_vault": VaultMethodInput,
  "purchase_order_number": "abc123"
}
```

<HorizontalLine />

### PaymentOrderOutput

Contains the payment order details

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`String`](#string) | PayPal order ID |
| `mp_order_id` - [`String`](#string) | The order ID generated by Payment Services |
| `payment_source_details` - [`PaymentSourceDetails`](#paymentsourcedetails) | Details about the card used on the order |
| `status` - [`String`](#string) | The status of the payment order |

#### Example

```json
{
  "id": "xyz789",
  "mp_order_id": "abc123",
  "payment_source_details": PaymentSourceDetails,
  "status": "xyz789"
}
```

<HorizontalLine />

### PaymentSDKParamsItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | The payment method code used in the order |
| `params` - [`[SDKParams]`](#sdkparams) | The payment SDK parameters |

#### Example

```json
{
  "code": "abc123",
  "params": [SDKParams]
}
```

<HorizontalLine />

### PaymentSourceDetails

#### Fields

| Field Name | Description |
|------------|-------------|
| `card` - [`Card`](#card) | Details about the card used on the order |

#### Example

```json
{"card": Card}
```

<HorizontalLine />

### PaymentSourceInput

The payment source information

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `card` - [`CardPaymentSourceInput!`](#cardpaymentsourceinput) | The card payment source information |

#### Example

```json
{"card": CardPaymentSourceInput}
```

<HorizontalLine />

### PaymentSourceOutput

The payment source information

#### Fields

| Field Name | Description |
|------------|-------------|
| `card` - [`CardPaymentSourceOutput!`](#cardpaymentsourceoutput) | The card payment source information |

#### Example

```json
{"card": CardPaymentSourceOutput}
```

<HorizontalLine />

### PaymentToken

The stored payment method available to the customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `details` - [`String`](#string) | A description of the stored account details. |
| `payment_method_code` - [`String!`](#string) | The payment method code associated with the token. |
| `public_hash` - [`String!`](#string) | The public hash of the token. |
| `type` - [`PaymentTokenTypeEnum!`](#paymenttokentypeenum) | Specifies the payment token type. |

#### Example

```json
{
  "details": "xyz789",
  "payment_method_code": "xyz789",
  "public_hash": "abc123",
  "type": "card"
}
```

<HorizontalLine />

### PaymentTokenTypeEnum

The list of available payment token types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `card` | phpcs:ignore Magento2.GraphQL.ValidArgumentName |
| `account` | phpcs:ignore Magento2.GraphQL.ValidArgumentName |

#### Example

```json
""card""
```

<HorizontalLine />

### PhysicalProductInterface

Contains attributes specific to tangible products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Possible Types

| PhysicalProductInterface Types |
|----------------|
| [`BundleProduct`](#bundleproduct) |
| [`ConfigurableProduct`](#configurableproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`GroupedProduct`](#groupedproduct) |
| [`SimpleProduct`](#simpleproduct) |

#### Example

```json
{"weight": 123.45}
```

<HorizontalLine />

### PickupLocation

Defines Pickup Location information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String`](#string) |  |
| `contact_name` - [`String`](#string) |  |
| `country_id` - [`String`](#string) |  |
| `description` - [`String`](#string) |  |
| `email` - [`String`](#string) |  |
| `fax` - [`String`](#string) |  |
| `latitude` - [`Float`](#float) |  |
| `longitude` - [`Float`](#float) |  |
| `name` - [`String`](#string) |  |
| `phone` - [`String`](#string) |  |
| `pickup_location_code` - [`String`](#string) |  |
| `postcode` - [`String`](#string) |  |
| `region` - [`String`](#string) |  |
| `region_id` - [`Int`](#int) |  |
| `street` - [`String`](#string) |  |

#### Example

```json
{
  "city": "abc123",
  "contact_name": "abc123",
  "country_id": "abc123",
  "description": "xyz789",
  "email": "xyz789",
  "fax": "xyz789",
  "latitude": 123.45,
  "longitude": 123.45,
  "name": "xyz789",
  "phone": "abc123",
  "pickup_location_code": "xyz789",
  "postcode": "abc123",
  "region": "abc123",
  "region_id": 123,
  "street": "xyz789"
}
```

<HorizontalLine />

### PickupLocationFilterInput

PickupLocationFilterInput defines the list of attributes and filters for the search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`FilterTypeInput`](#filtertypeinput) | Filter by city. |
| `country_id` - [`FilterTypeInput`](#filtertypeinput) | Filter by country. |
| `name` - [`FilterTypeInput`](#filtertypeinput) | Filter by pickup location name. |
| `pickup_location_code` - [`FilterTypeInput`](#filtertypeinput) | Filter by pickup location code. |
| `postcode` - [`FilterTypeInput`](#filtertypeinput) | Filter by postcode. |
| `region` - [`FilterTypeInput`](#filtertypeinput) | Filter by region. |
| `region_id` - [`FilterTypeInput`](#filtertypeinput) | Filter by region id. |
| `street` - [`FilterTypeInput`](#filtertypeinput) | Filter by street. |

#### Example

```json
{
  "city": FilterTypeInput,
  "country_id": FilterTypeInput,
  "name": FilterTypeInput,
  "pickup_location_code": FilterTypeInput,
  "postcode": FilterTypeInput,
  "region": FilterTypeInput,
  "region_id": FilterTypeInput,
  "street": FilterTypeInput
}
```

<HorizontalLine />

### PickupLocationSortInput

PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`SortEnum`](#sortenum) | City where pickup location is placed. |
| `contact_name` - [`SortEnum`](#sortenum) | Name of the contact person. |
| `country_id` - [`SortEnum`](#sortenum) | Id of the country in two letters. |
| `description` - [`SortEnum`](#sortenum) | Description of the pickup location. |
| `distance` - [`SortEnum`](#sortenum) | Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. |
| `email` - [`SortEnum`](#sortenum) | Contact email of the pickup location. |
| `fax` - [`SortEnum`](#sortenum) | Contact fax of the pickup location. |
| `latitude` - [`SortEnum`](#sortenum) | Geographic latitude where pickup location is placed. |
| `longitude` - [`SortEnum`](#sortenum) | Geographic longitude where pickup location is placed. |
| `name` - [`SortEnum`](#sortenum) | The pickup location name. Customer use this to identify the pickup location. |
| `phone` - [`SortEnum`](#sortenum) | Contact phone number of the pickup location. |
| `pickup_location_code` - [`SortEnum`](#sortenum) | A code assigned to pickup location to identify the source. |
| `postcode` - [`SortEnum`](#sortenum) | Postcode where pickup location is placed. |
| `region` - [`SortEnum`](#sortenum) | Name of the region. |
| `region_id` - [`SortEnum`](#sortenum) | Id of the region. |
| `street` - [`SortEnum`](#sortenum) | Street where pickup location is placed. |

#### Example

```json
{
  "city": "ASC",
  "contact_name": "ASC",
  "country_id": "ASC",
  "description": "ASC",
  "distance": "ASC",
  "email": "ASC",
  "fax": "ASC",
  "latitude": "ASC",
  "longitude": "ASC",
  "name": "ASC",
  "phone": "ASC",
  "pickup_location_code": "ASC",
  "postcode": "ASC",
  "region": "ASC",
  "region_id": "ASC",
  "street": "ASC"
}
```

<HorizontalLine />

### PickupLocations

Top level object returned in a pickup locations search.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[PickupLocation]`](#pickuplocation) | An array of pickup locations that match the specific search request. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | An object that includes the page_info and currentPage values specified in the query. |
| `total_count` - [`Int`](#int) | The number of products returned. |

#### Example

```json
{
  "items": [PickupLocation],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### PlaceNegotiableQuoteOrderInput

Specifies the negotiable quote to convert to an order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{"quote_uid": 4}
```

<HorizontalLine />

### PlaceNegotiableQuoteOrderOutput

An output object that returns the generated order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `order` - [`Order!`](#order) | Contains the generated order number. |

#### Example

```json
{"order": Order}
```

<HorizontalLine />

### PlaceNegotiableQuoteOrderOutputV2

An output object that returns the generated order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[PlaceOrderError]`](#placeordererror) | An array of place negotiable quote order errors. |
| `order` - [`CustomerOrder`](#customerorder) | Full order information. |

#### Example

```json
{
  "errors": [PlaceOrderError],
  "order": CustomerOrder
}
```

<HorizontalLine />

### PlaceOrderError

An error encountered while placing an order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`PlaceOrderErrorCodes!`](#placeordererrorcodes) | An error code that is specific to place order. |
| `message` - [`String!`](#string) | A localized error message. |

#### Example

```json
{
  "code": "CART_NOT_FOUND",
  "message": "abc123"
}
```

<HorizontalLine />

### PlaceOrderErrorCodes

#### Values

| Enum Value | Description |
|------------|-------------|
| `CART_NOT_FOUND` |  |
| `CART_NOT_ACTIVE` |  |
| `GUEST_EMAIL_MISSING` |  |
| `UNABLE_TO_PLACE_ORDER` |  |
| `UNDEFINED` |  |

#### Example

```json
""CART_NOT_FOUND""
```

<HorizontalLine />

### PlaceOrderForPurchaseOrderInput

Specifies the purchase order to convert to an order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `purchase_order_uid` - [`ID!`](#id) | The unique ID of a purchase order. |

#### Example

```json
{"purchase_order_uid": 4}
```

<HorizontalLine />

### PlaceOrderForPurchaseOrderOutput

Contains the results of the request to place an order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `order` - [`CustomerOrder!`](#customerorder) | Placed order. |

#### Example

```json
{"order": CustomerOrder}
```

<HorizontalLine />

### PlaceOrderInput

Specifies the quote to be converted to an order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |

#### Example

```json
{"cart_id": "xyz789"}
```

<HorizontalLine />

### PlaceOrderOutput

Contains the results of the request to place an order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[PlaceOrderError]!`](#placeordererror) | An array of place order errors. |
| `orderV2` - [`CustomerOrder`](#customerorder) | Full order information. |

#### Example

```json
{
  "errors": [PlaceOrderError],
  "orderV2": CustomerOrder
}
```

<HorizontalLine />

### PlacePurchaseOrderInput

Specifies the quote to be converted to a purchase order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |

#### Example

```json
{"cart_id": "xyz789"}
```

<HorizontalLine />

### PlacePurchaseOrderOutput

Contains the results of the request to place a purchase order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `purchase_order` - [`PurchaseOrder!`](#purchaseorder) | Placed purchase order. |

#### Example

```json
{"purchase_order": PurchaseOrder}
```

<HorizontalLine />

### Price

Defines the price of a simple product or a part of a price range for a complex product. It can include a list of price adjustments.

#### Fields

| Field Name | Description |
|------------|-------------|
| `adjustments` - [`[PriceAdjustment]`](#priceadjustment) | The signed value of the price adjustment (positive for markup, negative for markdown). |
| `amount` - [`ProductViewMoney`](#productviewmoney) | Contains the monetary value and currency code of a product. |

#### Example

```json
{
  "adjustments": [PriceAdjustment],
  "amount": ProductViewMoney
}
```

<HorizontalLine />

### PriceAdjustment

Specifies the amount and type of price adjustment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Float`](#float) | The amount of the price adjustment. |
| `code` - [`String`](#string) | Identifies the type of price adjustment. |

#### Example

```json
{"amount": 123.45, "code": "xyz789"}
```

<HorizontalLine />

### PriceDetails

Can be used to retrieve the main price details in case of bundle product

#### Fields

| Field Name | Description |
|------------|-------------|
| `discount_percentage` - [`Float`](#float) | The percentage of discount applied to the main product price |
| `main_final_price` - [`Float`](#float) | The final price after applying the discount to the main product |
| `main_price` - [`Float`](#float) | The regular price of the main product |

#### Example

```json
{
  "discount_percentage": 123.45,
  "main_final_price": 987.65,
  "main_price": 123.45
}
```

<HorizontalLine />

### PriceRange

Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same.

#### Fields

| Field Name | Description |
|------------|-------------|
| `maximum_price` - [`ProductPrice`](#productprice) | The highest possible price for the product. |
| `minimum_price` - [`ProductPrice!`](#productprice) | The lowest possible price for the product. |

#### Example

```json
{
  "maximum_price": ProductPrice,
  "minimum_price": ProductPrice
}
```

<HorizontalLine />

### PriceTypeEnum

Defines the price type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `FIXED` |  |
| `PERCENT` |  |
| `DYNAMIC` |  |

#### Example

```json
""FIXED""
```

<HorizontalLine />

### PriceViewEnum

Defines whether a bundle product's price is displayed as the lowest possible value or as a range.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRICE_RANGE` |  |
| `AS_LOW_AS` |  |

#### Example

```json
""PRICE_RANGE""
```

<HorizontalLine />

### ProductAlertPriceInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sku` - [`String!`](#string) |  |

#### Example

```json
{"sku": "xyz789"}
```

<HorizontalLine />

### ProductAlertStockInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sku` - [`String!`](#string) |  |

#### Example

```json
{"sku": "xyz789"}
```

<HorizontalLine />

### ProductAlertSubscriptionResult

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String`](#string) |  |
| `success` - [`Boolean!`](#boolean) |  |

#### Example

```json
{"message": "abc123", "success": false}
```

<HorizontalLine />

### ProductAttribute

Contains a product attribute code and value.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The unique identifier for a product attribute code. |
| `value` - [`String!`](#string) | The display value of the attribute. |

#### Example

```json
{
  "code": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### ProductAttributeFile

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_type` - [`String`](#string) | Attribute type code. |
| `code` - [`ID!`](#id) | The attribute code. |
| `url` - [`String!`](#string) | Public URL to download the file. |
| `value` - [`String!`](#string) | Stored filename only (e.g. file_xyz.pdf). Use url for download. |

#### Example

```json
{
  "attribute_type": "abc123",
  "code": "4",
  "url": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### ProductCustomAttributes

Product custom attributes

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[AttributeMetadataError]!`](#attributemetadataerror) | Errors when retrieving custom attributes metadata. |
| `items` - [`[AttributeValueInterface]!`](#attributevalueinterface) | Requested custom attributes |

#### Example

```json
{
  "errors": [AttributeMetadataError],
  "items": [AttributeValueInterface]
}
```

<HorizontalLine />

### ProductDiscount

Contains the discount applied to a product price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount_off` - [`Float`](#float) | The actual value of the discount. |
| `percent_off` - [`Float`](#float) | The discount expressed a percentage. |

#### Example

```json
{"amount_off": 987.65, "percent_off": 123.45}
```

<HorizontalLine />

### ProductImage

Contains product image information, including the image URL and label.

#### Fields

| Field Name | Description |
|------------|-------------|
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](#string) | The label of the product image or video. |
| `position` - [`Int`](#int) | The media item&#x27;s position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |

#### Example

```json
{
  "disabled": false,
  "label": "xyz789",
  "position": 123,
  "url": "abc123"
}
```

<HorizontalLine />

### ProductImageThumbnail

#### Values

| Enum Value | Description |
|------------|-------------|
| `ITSELF` | Use thumbnail of product as image. |
| `PARENT` | Use thumbnail of product&#x27;s parent as image. |

#### Example

```json
""ITSELF""
```

<HorizontalLine />

### ProductInfoInput

Product Information used for Pickup Locations search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sku` - [`String!`](#string) | Product SKU. |

#### Example

```json
{"sku": "abc123"}
```

<HorizontalLine />

### ProductInterface

Contains fields that are common to all types of products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. |
| `max_sale_qty` - [`Float`](#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_sale_qty` - [`Float`](#float) | Minimum Qty Allowed in Shopping Cart |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `quantity` - [`Float`](#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of products to be displayed in a Related Products block. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product&#x27;s thumbnail image. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | Upsell Products |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |

#### Possible Types

| ProductInterface Types |
|----------------|
| [`BundleProduct`](#bundleproduct) |
| [`ConfigurableProduct`](#configurableproduct) |
| [`DownloadableProduct`](#downloadableproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`GroupedProduct`](#groupedproduct) |
| [`SimpleProduct`](#simpleproduct) |
| [`VirtualProduct`](#virtualproduct) |

#### Example

```json
{
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "country_of_manufacture": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": true,
  "gift_wrapping_available": false,
  "gift_wrapping_price": Money,
  "image": ProductImage,
  "is_returnable": "abc123",
  "manufacturer": 987,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "min_sale_qty": 987.65,
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "options_container": "abc123",
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 987.65,
  "related_products": [ProductInterface],
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_price": 123.45,
  "special_to_date": "abc123",
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "uid": "4",
  "upsell_products": [ProductInterface],
  "url_key": "abc123"
}
```

<HorizontalLine />

### ProductLinks

An implementation of `ProductLinksInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `link_type` - [`String`](#string) | One of related, associated, upsell, or crosssell. |
| `linked_product_sku` - [`String`](#string) | The SKU of the linked product. |
| `linked_product_type` - [`String`](#string) | The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). |
| `position` - [`Int`](#int) | The position within the list of product links. |
| `sku` - [`String`](#string) | The identifier of the linked product. |

#### Example

```json
{
  "link_type": "xyz789",
  "linked_product_sku": "abc123",
  "linked_product_type": "abc123",
  "position": 987,
  "sku": "xyz789"
}
```

<HorizontalLine />

### ProductLinksInterface

Contains information about linked products, including the link type and product type of each item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `link_type` - [`String`](#string) | One of related, associated, upsell, or crosssell. |
| `linked_product_sku` - [`String`](#string) | The SKU of the linked product. |
| `linked_product_type` - [`String`](#string) | The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). |
| `position` - [`Int`](#int) | The position within the list of product links. |
| `sku` - [`String`](#string) | The identifier of the linked product. |

#### Possible Types

| ProductLinksInterface Types |
|----------------|
| [`ProductLinks`](#productlinks) |

#### Example

```json
{
  "link_type": "xyz789",
  "linked_product_sku": "abc123",
  "linked_product_type": "abc123",
  "position": 123,
  "sku": "xyz789"
}
```

<HorizontalLine />

### ProductMediaGalleryEntriesAssetImage

Contains basic information about the image asset.

#### Fields

| Field Name | Description |
|------------|-------------|
| `asset_id` - [`String`](#string) | Asset Id. |
| `media_type` - [`String`](#string) | Must be asset-image. |
| `media_url` - [`String`](#string) | Asset Image Url. |

#### Example

```json
{
  "asset_id": "xyz789",
  "media_type": "xyz789",
  "media_url": "xyz789"
}
```

<HorizontalLine />

### ProductMediaGalleryEntriesAssetVideo

Contains basic information about the video asset.

#### Fields

| Field Name | Description |
|------------|-------------|
| `media_type` - [`String`](#string) | Must be asset-video. |
| `video_asset_id` - [`String`](#string) | Asset Id. |
| `video_media_url` - [`String`](#string) | Asset Video Url. |

#### Example

```json
{
  "media_type": "xyz789",
  "video_asset_id": "abc123",
  "video_media_url": "xyz789"
}
```

<HorizontalLine />

### ProductMediaGalleryEntriesVideoContent

Contains a link to a video file and basic information about the video.

#### Fields

| Field Name | Description |
|------------|-------------|
| `media_type` - [`String`](#string) | Must be external-video. |
| `video_description` - [`String`](#string) | A description of the video. |
| `video_metadata` - [`String`](#string) | Optional data about the video. |
| `video_provider` - [`String`](#string) | Describes the video source. |
| `video_title` - [`String`](#string) | The title of the video. |
| `video_url` - [`String`](#string) | The URL to the video. |

#### Example

```json
{
  "media_type": "xyz789",
  "video_description": "abc123",
  "video_metadata": "xyz789",
  "video_provider": "abc123",
  "video_title": "xyz789",
  "video_url": "abc123"
}
```

<HorizontalLine />

### ProductPrice

Represents a product price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discount` - [`ProductDiscount`](#productdiscount) | The price discount. Represents the difference between the regular and final price. |
| `final_price` - [`Money!`](#money) | The final price of the product after applying discounts. |
| `fixed_product_taxes` - [`[FixedProductTax]`](#fixedproducttax) | An array of the multiple Fixed Product Taxes that can be applied to a product price. |
| `regular_price` - [`Money!`](#money) | The regular price of the product. |

#### Example

```json
{
  "discount": ProductDiscount,
  "final_price": Money,
  "fixed_product_taxes": [FixedProductTax],
  "regular_price": Money
}
```

<HorizontalLine />

### ProductSearchItem

A single product returned by the query

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_query_rule` - [`AppliedQueryRule`](#appliedqueryrule) | The query rule type that was applied to this product, if any (in preview mode only, returns null otherwise) |
| `highlights` - [`[Highlight]`](#highlight) | An object that provides highlighted text for matched words |
| `productView` - [`ProductView`](#productview) | Contains a product view |

#### Example

```json
{
  "applied_query_rule": AppliedQueryRule,
  "highlights": [Highlight],
  "productView": ProductView
}
```

<HorizontalLine />

### ProductSearchResponse

Contains the output of a `productSearch` query

#### Fields

| Field Name | Description |
|------------|-------------|
| `facets` - [`[Aggregation]`](#aggregation) | Details about the static and dynamic facets relevant to the search |
| `items` - [`[ProductSearchItem]`](#productsearchitem) | An array of products returned by the query |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Information for rendering pages of search results |
| `related_terms` - [`[String]`](#string) | An array of strings that might include merchant-defined synonyms |
| `suggestions` - [`[String]`](#string) | An array of strings that include the names of products and categories that exist in the catalog that are similar to the search query |
| `total_count` - [`Int`](#int) | The total number of products returned that matched the query |
| `warnings` - [`[ProductSearchWarning]`](#productsearchwarning) | An array of warning messages for validation issues (e.g., sort parameter ignored due to missing categoryPath) |

#### Example

```json
{
  "facets": [Aggregation],
  "items": [ProductSearchItem],
  "page_info": SearchResultPageInfo,
  "related_terms": ["xyz789"],
  "suggestions": ["abc123"],
  "total_count": 987,
  "warnings": [ProductSearchWarning]
}
```

<HorizontalLine />

### ProductSearchSortInput

The product attribute to sort on

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute` - [`String!`](#string) | The attribute code of a product attribute |
| `direction` - [`SortEnum!`](#sortenum) | ASC (ascending) or DESC (descending) |

#### Example

```json
{"attribute": "abc123", "direction": "ASC"}
```

<HorizontalLine />

### ProductSearchWarning

Structured warning with code and message for easier client handling

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | Error code for programmatic handling (e.g., EMPTY_CATEGORY_PATH) |
| `message` - [`String!`](#string) | Human-readable message describing the warning |

#### Example

```json
{
  "code": "abc123",
  "message": "abc123"
}
```

<HorizontalLine />

### ProductStockStatus

This enumeration states whether a product stock status is in stock or out of stock

#### Values

| Enum Value | Description |
|------------|-------------|
| `IN_STOCK` |  |
| `OUT_OF_STOCK` |  |

#### Example

```json
""IN_STOCK""
```

<HorizontalLine />

### ProductVideo

Contains information about a product video.

#### Fields

| Field Name | Description |
|------------|-------------|
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](#string) | The label of the product image or video. |
| `position` - [`Int`](#int) | The media item&#x27;s position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |
| `video_content` - [`ProductMediaGalleryEntriesVideoContent`](#productmediagalleryentriesvideocontent) | Contains a &#x60;ProductMediaGalleryEntriesVideoContent&#x60; object. |

#### Example

```json
{
  "disabled": true,
  "label": "abc123",
  "position": 123,
  "url": "abc123",
  "video_content": ProductMediaGalleryEntriesVideoContent
}
```

<HorizontalLine />

### ProductView

Defines the product fields available to the SimpleProductView and ComplexProductView types.

#### Fields

| Field Name | Description |
|------------|-------------|
| `addToCartAllowed` - [`Boolean`](#boolean) | A flag stating if the product can be added to cart *(Deprecated: This field is deprecated and will be removed.)* |
| `inStock` - [`Boolean`](#boolean) | A flag stating if the product is in stock *(Deprecated: This field is deprecated and will be removed.)* |
| `lowStock` - [`Boolean`](#boolean) | Indicates whether the remaining quantity of the product has reached the Only X Left threshold. *(Deprecated: This field is deprecated and will be removed.)* |
| `attributes` - [`[ProductViewAttribute]`](#productviewattribute) | A list of merchant-defined attributes designated for the storefront. They can be filtered by roles and names. |
| `description` - [`String`](#string) | The detailed description of the product. |
| `id` - [`ID!`](#id) | The product ID, generated as a composite key, unique per locale. |
| `images` - [`[ProductViewImage]`](#productviewimage) | A list of images defined for the product. |
| `videos` - [`[ProductViewVideo]`](#productviewvideo) | A list of videos defined for the product. |
| `lastModifiedAt` - [`DateTime`](#datetime) | Date and time when the product was last updated. |
| `metaDescription` - [`String`](#string) | A brief overview of the product for search results listings. |
| `metaKeyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `metaTitle` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | Product title for search results listings. |
| `shortDescription` - [`String`](#string) | A summary of the product for search results listings. |
| `inputOptions` - [`[ProductViewInputOption]`](#productviewinputoption) | A list of input options. For example, a text field, a number field or a date field. *(Deprecated: This field is deprecated and will be removed.)* |
| `sku` - [`String`](#string) | A unique code used for identification of a product. |
| `externalId` - [`String`](#string) | External Id *(Deprecated: This field is deprecated and will be removed.)* |
| `url` - [`String`](#string) | Canonical URL of the product. *(Deprecated: This field is deprecated and will be removed.)* |
| `urlKey` - [`String`](#string) | The URL key of the product. This is a unique identifier for the product that is used to create the product&#x27;s URL. |
| `links` - [`[ProductViewLink]`](#productviewlink) | A list of product links. For example, related, up-sell, and cross-sell links. |
| `queryType` - [`String`](#string) | Indicates if the product was retrieved from the primary or the backup query |
| `visibility` - [`String`](#string) | Visibility setting of the product |

#### Possible Types

| ProductView Types |
|----------------|
| [`ComplexProductView`](#complexproductview) |
| [`SimpleProductView`](#simpleproductview) |

#### Example

```json
{
  "addToCartAllowed": false,
  "inStock": false,
  "lowStock": true,
  "attributes": [ProductViewAttribute],
  "description": "xyz789",
  "id": "4",
  "images": [ProductViewImage],
  "videos": [ProductViewVideo],
  "lastModifiedAt": "2007-12-03T10:15:30Z",
  "metaDescription": "abc123",
  "metaKeyword": "xyz789",
  "metaTitle": "abc123",
  "name": "xyz789",
  "shortDescription": "abc123",
  "inputOptions": [ProductViewInputOption],
  "sku": "abc123",
  "externalId": "xyz789",
  "url": "abc123",
  "urlKey": "xyz789",
  "links": [ProductViewLink],
  "queryType": "xyz789",
  "visibility": "abc123"
}
```

<HorizontalLine />

### ProductViewAttribute

A container for customer-defined attributes that are displayed the storefront.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String`](#string) | Label of the attribute. |
| `name` - [`String!`](#string) | Name of an attribute code. For example, &#x60;color&#x60;, &#x60;size&#x60; or &#x60;material&#x60; |
| `roles` - [`[String]`](#string) | Roles designated for an attribute on the storefront. For example, &#x60;show_on_plp&#x60;, &#x60;show_in_pdp&#x60; or &#x60;show_in_search&#x60; |
| `value` - [`JSON`](#json) | Attribute value, arbitrary of type. For example, &#x60;red&#x60;, &#x60;blue&#x60; or &#x60;green&#x60; |

#### Example

```json
{
  "label": "xyz789",
  "name": "abc123",
  "roles": ["xyz789"],
  "value": {}
}
```

<HorizontalLine />

### ProductViewCurrency

The list of supported currency codes.

#### Values

| Enum Value | Description |
|------------|-------------|
| `AED` |  |
| `AFN` |  |
| `ALL` |  |
| `AMD` |  |
| `ANG` |  |
| `AOA` |  |
| `ARS` |  |
| `AUD` |  |
| `AWG` |  |
| `AZM` |  |
| `AZN` |  |
| `BAM` |  |
| `BBD` |  |
| `BDT` |  |
| `BGN` |  |
| `BHD` |  |
| `BIF` |  |
| `BMD` |  |
| `BND` |  |
| `BOB` |  |
| `BRL` |  |
| `BSD` |  |
| `BTN` |  |
| `BUK` |  |
| `BWP` |  |
| `BYN` |  |
| `BZD` |  |
| `CAD` |  |
| `CDF` |  |
| `CHE` |  |
| `CHF` |  |
| `CHW` |  |
| `CLP` |  |
| `CNY` |  |
| `COP` |  |
| `CRC` |  |
| `CUP` |  |
| `CVE` |  |
| `CZK` |  |
| `DJF` |  |
| `DKK` |  |
| `DOP` |  |
| `DZD` |  |
| `EEK` |  |
| `EGP` |  |
| `ERN` |  |
| `ETB` |  |
| `EUR` |  |
| `FJD` |  |
| `FKP` |  |
| `GBP` |  |
| `GEK` |  |
| `GEL` |  |
| `GHS` |  |
| `GIP` |  |
| `GMD` |  |
| `GNF` |  |
| `GQE` |  |
| `GTQ` |  |
| `GYD` |  |
| `HKD` |  |
| `HNL` |  |
| `HRK` |  |
| `HTG` |  |
| `HUF` |  |
| `IDR` |  |
| `ILS` |  |
| `INR` |  |
| `IQD` |  |
| `IRR` |  |
| `ISK` |  |
| `JMD` |  |
| `JOD` |  |
| `JPY` |  |
| `KES` |  |
| `KGS` |  |
| `KHR` |  |
| `KMF` |  |
| `KPW` |  |
| `KRW` |  |
| `KWD` |  |
| `KYD` |  |
| `KZT` |  |
| `LAK` |  |
| `LBP` |  |
| `LKR` |  |
| `LRD` |  |
| `LSL` |  |
| `LSM` |  |
| `LTL` |  |
| `LVL` |  |
| `LYD` |  |
| `MAD` |  |
| `MDL` |  |
| `MGA` |  |
| `MKD` |  |
| `MMK` |  |
| `MNT` |  |
| `MOP` |  |
| `MRO` |  |
| `MUR` |  |
| `MVR` |  |
| `MWK` |  |
| `MXN` |  |
| `MYR` |  |
| `MZN` |  |
| `NAD` |  |
| `NGN` |  |
| `NIC` |  |
| `NOK` |  |
| `NPR` |  |
| `NZD` |  |
| `OMR` |  |
| `PAB` |  |
| `PEN` |  |
| `PGK` |  |
| `PHP` |  |
| `PKR` |  |
| `PLN` |  |
| `PYG` |  |
| `QAR` |  |
| `RHD` |  |
| `ROL` |  |
| `RON` |  |
| `RSD` |  |
| `RUB` |  |
| `RWF` |  |
| `SAR` |  |
| `SBD` |  |
| `SCR` |  |
| `SDG` |  |
| `SEK` |  |
| `SGD` |  |
| `SHP` |  |
| `SKK` |  |
| `SLL` |  |
| `SOS` |  |
| `SRD` |  |
| `STD` |  |
| `SVC` |  |
| `SYP` |  |
| `SZL` |  |
| `THB` |  |
| `TJS` |  |
| `TMM` |  |
| `TND` |  |
| `TOP` |  |
| `TRL` |  |
| `TRY` |  |
| `TTD` |  |
| `TWD` |  |
| `TZS` |  |
| `UAH` |  |
| `UGX` |  |
| `USD` |  |
| `UYU` |  |
| `UZS` |  |
| `VEB` |  |
| `VEF` |  |
| `VND` |  |
| `VUV` |  |
| `WST` |  |
| `XCD` |  |
| `XOF` |  |
| `XPF` |  |
| `YER` |  |
| `ZAR` |  |
| `ZMK` |  |
| `ZWD` |  |
| `NONE` |  |

#### Example

```json
""AED""
```

<HorizontalLine />

### ProductViewImage

Contains details about a product image.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String`](#string) | The display label of the product image. For example, &#x60;Main Image&#x60;, &#x60;Small Image&#x60; or &#x60;Thumbnail Image&#x60; |
| `roles` - [`[String]`](#string) | A list that describes how the image is used. Can be &#x60;image&#x60;, &#x60;small_image&#x60; or &#x60;thumbnail&#x60; |
| `url` - [`String!`](#string) | The URL to the product image. For example, &#x60;https://example.com/image.jpg&#x60;. |

#### Example

```json
{
  "label": "abc123",
  "roles": ["abc123"],
  "url": "abc123"
}
```

<HorizontalLine />

### ProductViewInputOption

Product options provide a way to configure products by making selections of particular option values. Selecting one or many options will point to a simple product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of an option value. For example, &#x60;123&#x60; for the first option value, &#x60;456&#x60; for the second option value. |
| `title` - [`String`](#string) | The display name of the option value. For example, &#x60;Red&#x60;, &#x60;Blue&#x60; or &#x60;Green&#x60; |
| `required` - [`Boolean`](#boolean) | Indicates whether this input option is required. |
| `type` - [`String`](#string) | The type of data entry. For example, &#x60;text&#x60;, &#x60;number&#x60; or &#x60;date&#x60; |
| `markupAmount` - [`Float`](#float) | The percentage the prices is marked up or down. A positive value, such as &#x60;10.00&#x60;, indicates the product is marked up 10%. A negative value, such as &#x60;-10.00&#x60;, indicates the price is marked down 10%. |
| `suffix` - [`String`](#string) | SKU suffix to add to the product. For example, &#x60;-red&#x60;, &#x60;-blue&#x60; or &#x60;-green&#x60; |
| `sortOrder` - [`Int`](#int) | Sort order for the input option. For example, &#x60;1&#x60; for the first input option, &#x60;2&#x60; for the second input option. |
| `range` - [`ProductViewInputOptionRange`](#productviewinputoptionrange) | The range of values for the input option. For example, if the input option is a text field, the range represents the number of characters. |
| `imageSize` - [`ProductViewInputOptionImageSize`](#productviewinputoptionimagesize) | The size of the image for the input option. |
| `fileExtensions` - [`String`](#string) | The file extensions allowed for the image. For example, &#x60;jpg&#x60;, &#x60;png&#x60;, &#x60;gif&#x60;, or &#x60;svg&#x60; |

#### Example

```json
{
  "id": 4,
  "title": "xyz789",
  "required": true,
  "type": "xyz789",
  "markupAmount": 987.65,
  "suffix": "xyz789",
  "sortOrder": 987,
  "range": ProductViewInputOptionRange,
  "imageSize": ProductViewInputOptionImageSize,
  "fileExtensions": "xyz789"
}
```

<HorizontalLine />

### ProductViewInputOptionImageSize

Dimensions of the image associated with the input option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `width` - [`Int`](#int) | The width of the image in pixels. For example, &#x60;100&#x60; for a 100px width. |
| `height` - [`Int`](#int) | The height of the image, in pixels. For example, &#x60;100&#x60; for a 100px height. |

#### Example

```json
{"width": 987, "height": 123}
```

<HorizontalLine />

### ProductViewInputOptionRange

Lists the value range associated with a `ProductViewInputOption`. For example, if the input option is a text field, the range represents the number of characters.

#### Fields

| Field Name | Description |
|------------|-------------|
| `from` - [`Float`](#float) | The starting value of the range. For example, if the input option is a text field, the starting value represents the minimum number of characters. |
| `to` - [`Float`](#float) | The ending value of the range. For example, if the input option is a text field, the ending value represents the maximum number of characters. |

#### Example

```json
{"from": 987.65, "to": 987.65}
```

<HorizontalLine />

### ProductViewLink

The product link type. Contains details about product links for related products and cross selling. For example, `related`, `up_sell` or `cross_sell`

#### Fields

| Field Name | Description |
|------------|-------------|
| `product` - [`ProductView!`](#productview) | Contains the details of the product found in the link. |
| `linkTypes` - [`[String!]!`](#string) | Stores the types of the links with this product. |

#### Example

```json
{
  "product": ProductView,
  "linkTypes": ["abc123"]
}
```

<HorizontalLine />

### ProductViewMoney

Defines a monetary value, including a numeric value and a currency code.

#### Fields

| Field Name | Description |
|------------|-------------|
| `currency` - [`ProductViewCurrency`](#productviewcurrency) | A three-letter currency code, such as USD or EUR. |
| `value` - [`Float`](#float) | A number expressing a monetary value. |

#### Example

```json
{"currency": "AED", "value": 123.45}
```

<HorizontalLine />

### ProductViewOption

Product options provide a way to configure products by making selections of particular option values. Selecting one or many options will point to a simple product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of the option. For example, &#x60;123&#x60; for the first option, &#x60;456&#x60; for the second option. |
| `multi` - [`Boolean`](#boolean) | Indicates whether the option allows multiple choices. The value is &#x60;true&#x60; for a multi-select option, &#x60;false&#x60; for a single-select option. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option must be selected. |
| `title` - [`String`](#string) | The display name of the option. For example, &#x60;Color&#x60;, &#x60;Size&#x60; or &#x60;Material&#x60; |
| `values` - [`[ProductViewOptionValue!]`](#productviewoptionvalue) | List of available option values. For example, &#x60;Red&#x60;, &#x60;Blue&#x60; or &#x60;Green&#x60; |

#### Example

```json
{
  "id": 4,
  "multi": true,
  "required": true,
  "title": "xyz789",
  "values": [ProductViewOptionValue]
}
```

<HorizontalLine />

### ProductViewOptionValue

Defines the product fields available to the ProductViewOptionValueProduct and ProductViewOptionValueConfiguration types.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of an option value. |
| `title` - [`String`](#string) | The display name of the option value. |
| `inStock` - [`Boolean`](#boolean) | Indicates whether the remaining quantity of the product has reached the out-of-stock threshold. |

#### Possible Types

| ProductViewOptionValue Types |
|----------------|
| [`ProductViewOptionValueConfiguration`](#productviewoptionvalueconfiguration) |
| [`ProductViewOptionValueProduct`](#productviewoptionvalueproduct) |
| [`ProductViewOptionValueSwatch`](#productviewoptionvalueswatch) |

#### Example

```json
{
  "id": "4",
  "title": "abc123",
  "inStock": true
}
```

<HorizontalLine />

### ProductViewOptionValueConfiguration

An implementation of ProductViewOptionValue for configuration values.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of an option value. For example, &#x60;123&#x60; for the first option value, &#x60;456&#x60; for the second option value. |
| `title` - [`String`](#string) | The display name of the option value. For example, &#x60;Red&#x60;, &#x60;Blue&#x60; or &#x60;Green&#x60; |
| `inStock` - [`Boolean`](#boolean) | Indicates whether the remaining quantity of the product option value has reached the out-of-stock threshold. |

#### Example

```json
{
  "id": 4,
  "title": "abc123",
  "inStock": true
}
```

<HorizontalLine />

### ProductViewOptionValueProduct

An implementation of ProductViewOptionValue that adds details about a simple product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of an option value. For example, &#x60;123&#x60; for the first option value, &#x60;456&#x60; for the second option value. |
| `isDefault` - [`Boolean`](#boolean) | Indicates whether the option value is the default. |
| `product` - [`SimpleProductView`](#simpleproductview) | Details about a simple product. For example, a product with a SKU of &#x60;123&#x60;, a name of &#x60;Product 1&#x60;, a price of &#x60;100.00&#x60;. |
| `quantity` - [`Float`](#float) | Default quantity of an option value. |
| `title` - [`String`](#string) | The display name of the option value. For example, &#x60;Red&#x60;, &#x60;Blue&#x60; or &#x60;Green&#x60; |
| `inStock` - [`Boolean`](#boolean) | Indicates whether the remaining quantity of the product option value has reached the out-of-stock threshold. |

#### Example

```json
{
  "id": 4,
  "isDefault": true,
  "product": SimpleProductView,
  "quantity": 123.45,
  "title": "xyz789",
  "inStock": false
}
```

<HorizontalLine />

### ProductViewOptionValueSwatch

An implementation of ProductViewOptionValueSwatch for swatches.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of an option value. For example, &#x60;123&#x60; for the first option value, &#x60;456&#x60; for the second option value. |
| `title` - [`String`](#string) | The display name of the option value. For example, &#x60;Red&#x60;, &#x60;Blue&#x60; or &#x60;Green&#x60; |
| `type` - [`SwatchType`](#swatchtype) | Indicates the type of the swatch. |
| `value` - [`String`](#string) | The value of the swatch depending on the type of the swatch. |
| `inStock` - [`Boolean`](#boolean) | Indicates whether the remaining quantity of the product option value has reached the out-of-stock threshold. |

#### Example

```json
{
  "id": "4",
  "title": "xyz789",
  "type": "TEXT",
  "value": "xyz789",
  "inStock": true
}
```

<HorizontalLine />

### ProductViewPrice

Base product price view. Contains the final price after discounts, the regular price, and the list of tier prices.

#### Fields

| Field Name | Description |
|------------|-------------|
| `final` - [`Price`](#price) | Price value after discounts, excluding personalized promotions. |
| `regular` - [`Price`](#price) | Base product price specified by the merchant. |
| `tiers` - [`[ProductViewTierPrice]`](#productviewtierprice) | Volume based pricing. |
| `roles` - [`[String]`](#string) | Price roles, stating if the price should be visible or hidden. For example, &#x60;show_on_plp&#x60;, &#x60;show_in_pdp&#x60; or &#x60;show_in_search&#x60; |

#### Example

```json
{
  "final": Price,
  "regular": Price,
  "tiers": [ProductViewTierPrice],
  "roles": ["abc123"]
}
```

<HorizontalLine />

### ProductViewPriceRange

The minimum and maximum price of a complex product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `maximum` - [`ProductViewPrice`](#productviewprice) | Maximum price. |
| `minimum` - [`ProductViewPrice`](#productviewprice) | Minimum price. |

#### Example

```json
{
  "maximum": ProductViewPrice,
  "minimum": ProductViewPrice
}
```

<HorizontalLine />

### ProductViewTierCondition

#### Types

| Union Types |
|-------------|
| [`ProductViewTierRangeCondition`](#productviewtierrangecondition) |
| [`ProductViewTierExactMatchCondition`](#productviewtierexactmatchcondition) |

#### Example

```json
ProductViewTierRangeCondition
```

<HorizontalLine />

### ProductViewTierExactMatchCondition

Minimum quantity (inclusive) required to activate this tier price. For example, a value of `10` means this tier applies when 10 or more items are purchased.

#### Fields

| Field Name | Description |
|------------|-------------|
| `in` - [`[Float]`](#float) | Exact quantity values that activate this tier price. For example, &#x60;[5, 10]&#x60; means the tier applies only when the purchased quantity is exactly 5 or exactly 10. |

#### Example

```json
{"in": [987.65]}
```

<HorizontalLine />

### ProductViewTierPrice

The discounted price that applies when the quantity conditions in `quantity` are satisfied. Contains the monetary amount and any price adjustments applied to this tier.

#### Fields

| Field Name | Description |
|------------|-------------|
| `tier` - [`Price`](#price) | The discounted price that applies when the quantity conditions in &#x60;quantity&#x60; are satisfied. Contains the monetary amount and any price adjustments applied to this tier. |
| `quantity` - [`[ProductViewTierCondition!]!`](#productviewtiercondition) | The quantity conditions that must be met to activate the tier price. For example, &#x60;10&#x60; for a quantity of 10 or &#x60;20&#x60; for a quantity of 20. |

#### Example

```json
{
  "tier": Price,
  "quantity": [ProductViewTierRangeCondition]
}
```

<HorizontalLine />

### ProductViewTierRangeCondition

Minimum quantity (inclusive) required to activate this tier price. For example, a value of `10` means this tier applies when 10 or more items are purchased. Maximum quantity (exclusive) required to activate this tier price. For example, a value of `20` means this tier applies when less than 20 items are purchased.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gte` - [`Float`](#float) | The minimum quantity that must be purchased to activate the tier price. Must be greater than or equal to the value in &#x60;gte&#x60;. |
| `lt` - [`Float`](#float) | Maximum quantity (exclusive) for this tier price. For example, a value of &#x60;20&#x60; means this tier applies only when fewer than 20 items are purchased. |

#### Example

```json
{"gte": 987.65, "lt": 987.65}
```

<HorizontalLine />

### ProductViewVariant

Represents a product variant.

#### Fields

| Field Name | Description |
|------------|-------------|
| `selections` - [`[String!]`](#string) | List of option values that make up the variant. For example, &#x60;red&#x60;, &#x60;blue&#x60; or &#x60;green&#x60; |
| `product` - [`ProductView`](#productview) | Product corresponding to the variant. For example, a product with a SKU of &#x60;123&#x60;, a name of &#x60;Product 1&#x60;, a price of &#x60;100.00&#x60;. |

#### Example

```json
{
  "selections": ["xyz789"],
  "product": ProductView
}
```

<HorizontalLine />

### ProductViewVariantResults

Represents the results of a product variant search.

#### Fields

| Field Name | Description |
|------------|-------------|
| `variants` - [`[ProductViewVariant]!`](#productviewvariant) | List of product variants. For example, a variant with a selection of &#x60;red&#x60;, &#x60;blue&#x60; or &#x60;green&#x60; |
| `cursor` - [`String`](#string) | Pagination cursor. For example, &#x60;123&#x60; for the first variant, &#x60;456&#x60; for the second variant. |

#### Example

```json
{
  "variants": [ProductViewVariant],
  "cursor": "xyz789"
}
```

<HorizontalLine />

### ProductViewVideo

Contains details about a product video. For example, a video of the product being used or a video of the product being assembled.

#### Fields

| Field Name | Description |
|------------|-------------|
| `preview` - [`ProductViewImage`](#productviewimage) | Preview image for the video. For example, a screenshot of the video. |
| `url` - [`String!`](#string) | The URL to the product video. For example, &#x60;https://example.com/video.mp4&#x60; or &#x60;https://example.com/video.webm&#x60; |
| `description` - [`String`](#string) | Description of the product video. For example, &#x60;A video of the product being used&#x60; or &#x60;A video of the product being assembled&#x60; |
| `title` - [`String`](#string) | The title of the product video. For example, &#x60;Product Video&#x60; or &#x60;Product Assembly Video&#x60; |

#### Example

```json
{
  "preview": ProductViewImage,
  "url": "abc123",
  "description": "xyz789",
  "title": "abc123"
}
```

<HorizontalLine />

### PurchaseHistory

User purchase history

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `date` - [`DateTime`](#datetime) |  |
| `items` - [`[String]!`](#string) |  |

#### Example

```json
{
  "date": "2007-12-03T10:15:30Z",
  "items": ["xyz789"]
}
```

<HorizontalLine />

### PurchaseOrder

Contains details about a purchase order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `approval_flow` - [`[PurchaseOrderRuleApprovalFlow]`](#purchaseorderruleapprovalflow) | The approval flows for each applied rules. |
| `available_actions` - [`[PurchaseOrderAction]!`](#purchaseorderaction) | Purchase order actions available to the customer. Can be used to display action buttons on the client. |
| `comments` - [`[PurchaseOrderComment]!`](#purchaseordercomment) | The set of comments applied to the purchase order. |
| `created_at` - [`String!`](#string) | The date the purchase order was created. |
| `created_by` - [`Customer`](#customer) | The company user who created the purchase order. |
| `history_log` - [`[PurchaseOrderHistoryItem]!`](#purchaseorderhistoryitem) | The log of the events related to the purchase order. |
| `number` - [`String!`](#string) | The purchase order number. |
| `order` - [`CustomerOrder`](#customerorder) | The reference to the order placed based on the purchase order. |
| `quote` - [`Cart`](#cart) | The quote related to the purchase order. |
| `status` - [`PurchaseOrderStatus!`](#purchaseorderstatus) | The current status of the purchase order. |
| `uid` - [`ID!`](#id) | A unique identifier for the purchase order. |
| `updated_at` - [`String!`](#string) | The date the purchase order was last updated. |

#### Example

```json
{
  "approval_flow": [PurchaseOrderRuleApprovalFlow],
  "available_actions": ["REJECT"],
  "comments": [PurchaseOrderComment],
  "created_at": "abc123",
  "created_by": Customer,
  "history_log": [PurchaseOrderHistoryItem],
  "number": "xyz789",
  "order": CustomerOrder,
  "quote": Cart,
  "status": "PENDING",
  "uid": 4,
  "updated_at": "abc123"
}
```

<HorizontalLine />

### PurchaseOrderAction

#### Values

| Enum Value | Description |
|------------|-------------|
| `REJECT` |  |
| `CANCEL` |  |
| `VALIDATE` |  |
| `APPROVE` |  |
| `PLACE_ORDER` |  |

#### Example

```json
""REJECT""
```

<HorizontalLine />

### PurchaseOrderActionError

Contains details about a failed action.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |
| `type` - [`PurchaseOrderErrorType!`](#purchaseordererrortype) | The error type. |

#### Example

```json
{"message": "abc123", "type": "NOT_FOUND"}
```

<HorizontalLine />

### PurchaseOrderApprovalFlowEvent

Contains details about a single event in the approval flow of the purchase order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String`](#string) | A formatted message. |
| `name` - [`String`](#string) | The approver name. |
| `role` - [`String`](#string) | The approver role. |
| `status` - [`PurchaseOrderApprovalFlowItemStatus`](#purchaseorderapprovalflowitemstatus) | The status related to the event. |
| `updated_at` - [`String`](#string) | The date and time the event was updated. |

#### Example

```json
{
  "message": "xyz789",
  "name": "xyz789",
  "role": "abc123",
  "status": "PENDING",
  "updated_at": "abc123"
}
```

<HorizontalLine />

### PurchaseOrderApprovalFlowItemStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `PENDING` |  |
| `APPROVED` |  |
| `REJECTED` |  |

#### Example

```json
""PENDING""
```

<HorizontalLine />

### PurchaseOrderApprovalRule

Contains details about a purchase order approval rule.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applies_to_roles` - [`[CompanyRole]!`](#companyrole) | The name of the user(s) affected by the the purchase order approval rule. |
| `approver_roles` - [`[CompanyRole]!`](#companyrole) | The name of the user who needs to approve purchase orders that trigger the approval rule. |
| `condition` - [`PurchaseOrderApprovalRuleConditionInterface`](#purchaseorderapprovalruleconditioninterface) | Condition which triggers the approval rule. |
| `created_at` - [`String!`](#string) | The date the purchase order rule was created. |
| `created_by` - [`String!`](#string) | The name of the user who created the purchase order approval rule. |
| `description` - [`String`](#string) | Description of the purchase order approval rule. |
| `name` - [`String!`](#string) | The name of the purchase order approval rule. |
| `status` - [`PurchaseOrderApprovalRuleStatus!`](#purchaseorderapprovalrulestatus) | The status of the purchase order approval rule. |
| `uid` - [`ID!`](#id) | The unique identifier for the purchase order approval rule. |
| `updated_at` - [`String!`](#string) | The date the purchase order rule was last updated. |

#### Example

```json
{
  "applies_to_roles": [CompanyRole],
  "approver_roles": [CompanyRole],
  "condition": PurchaseOrderApprovalRuleConditionInterface,
  "created_at": "xyz789",
  "created_by": "abc123",
  "description": "abc123",
  "name": "abc123",
  "status": "ENABLED",
  "uid": "4",
  "updated_at": "xyz789"
}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleConditionAmount

Contains approval rule condition details, including the amount to be evaluated.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount to be be used for evaluation of the approval rule condition. |
| `attribute` - [`PurchaseOrderApprovalRuleType`](#purchaseorderapprovalruletype) | The type of purchase order approval rule. |
| `operator` - [`PurchaseOrderApprovalRuleConditionOperator`](#purchaseorderapprovalruleconditionoperator) | The operator to be used for evaluating the approval rule condition. |

#### Example

```json
{
  "amount": Money,
  "attribute": "GRAND_TOTAL",
  "operator": "MORE_THAN"
}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleConditionInterface

Purchase order rule condition details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute` - [`PurchaseOrderApprovalRuleType`](#purchaseorderapprovalruletype) | The type of purchase order approval rule. |
| `operator` - [`PurchaseOrderApprovalRuleConditionOperator`](#purchaseorderapprovalruleconditionoperator) | The operator to be used for evaluating the approval rule condition. |

#### Possible Types

| PurchaseOrderApprovalRuleConditionInterface Types |
|----------------|
| [`PurchaseOrderApprovalRuleConditionAmount`](#purchaseorderapprovalruleconditionamount) |
| [`PurchaseOrderApprovalRuleConditionQuantity`](#purchaseorderapprovalruleconditionquantity) |

#### Example

```json
{"attribute": "GRAND_TOTAL", "operator": "MORE_THAN"}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleConditionOperator

#### Values

| Enum Value | Description |
|------------|-------------|
| `MORE_THAN` |  |
| `LESS_THAN` |  |
| `MORE_THAN_OR_EQUAL_TO` |  |
| `LESS_THAN_OR_EQUAL_TO` |  |

#### Example

```json
""MORE_THAN""
```

<HorizontalLine />

### PurchaseOrderApprovalRuleConditionQuantity

Contains approval rule condition details, including the quantity to be evaluated.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute` - [`PurchaseOrderApprovalRuleType`](#purchaseorderapprovalruletype) | The type of purchase order approval rule. |
| `operator` - [`PurchaseOrderApprovalRuleConditionOperator`](#purchaseorderapprovalruleconditionoperator) | The operator to be used for evaluating the approval rule condition. |
| `quantity` - [`Int`](#int) | The quantity to be used for evaluation of the approval rule condition. |

#### Example

```json
{"attribute": "GRAND_TOTAL", "operator": "MORE_THAN", "quantity": 123}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleInput

Defines a new purchase order approval rule.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `applies_to` - [`[ID]!`](#id) | A list of company user role IDs to which this purchase order approval rule should be applied. When an empty array is provided, the rule is applied to all user roles in the system, including those created in the future. |
| `approvers` - [`[ID]!`](#id) | A list of B2B user roles that can approve this purchase order approval rule. |
| `condition` - [`CreatePurchaseOrderApprovalRuleConditionInput!`](#createpurchaseorderapprovalruleconditioninput) | The condition of the purchase order approval rule. |
| `description` - [`String`](#string) | A summary of the purpose of the purchase order approval rule. |
| `name` - [`String!`](#string) | The purchase order approval rule name. |
| `status` - [`PurchaseOrderApprovalRuleStatus!`](#purchaseorderapprovalrulestatus) | The status of the purchase order approval rule. |

#### Example

```json
{
  "applies_to": ["4"],
  "approvers": [4],
  "condition": CreatePurchaseOrderApprovalRuleConditionInput,
  "description": "xyz789",
  "name": "abc123",
  "status": "ENABLED"
}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleMetadata

Contains metadata that can be used to render rule edit forms.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_applies_to` - [`[CompanyRole]!`](#companyrole) | A list of B2B user roles that the rule can be applied to. |
| `available_condition_currencies` - [`[AvailableCurrency]!`](#availablecurrency) | A list of currencies that can be used to create approval rules based on amounts, for example shipping cost rules. |
| `available_requires_approval_from` - [`[CompanyRole]!`](#companyrole) | A list of B2B user roles that can be specified as approvers for the approval rules. |

#### Example

```json
{
  "available_applies_to": [CompanyRole],
  "available_condition_currencies": [AvailableCurrency],
  "available_requires_approval_from": [CompanyRole]
}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `ENABLED` |  |
| `DISABLED` |  |

#### Example

```json
""ENABLED""
```

<HorizontalLine />

### PurchaseOrderApprovalRuleType

#### Values

| Enum Value | Description |
|------------|-------------|
| `GRAND_TOTAL` |  |
| `SHIPPING_INCL_TAX` |  |
| `NUMBER_OF_SKUS` |  |

#### Example

```json
""GRAND_TOTAL""
```

<HorizontalLine />

### PurchaseOrderApprovalRules

Contains the approval rules that the customer can see.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[PurchaseOrderApprovalRule]!`](#purchaseorderapprovalrule) | A list of purchase order approval rules visible to the customer. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Result pagination details. |
| `total_count` - [`Int`](#int) | The total number of purchase order approval rules visible to the customer. |

#### Example

```json
{
  "items": [PurchaseOrderApprovalRule],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### PurchaseOrderComment

Contains details about a comment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `author` - [`Customer`](#customer) | The user who left the comment. |
| `created_at` - [`String!`](#string) | The date and time when the comment was created. |
| `text` - [`String!`](#string) | The text of the comment. |
| `uid` - [`ID!`](#id) | A unique identifier of the comment. |

#### Example

```json
{
  "author": Customer,
  "created_at": "xyz789",
  "text": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### PurchaseOrderErrorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `NOT_FOUND` |  |
| `OPERATION_NOT_APPLICABLE` |  |
| `COULD_NOT_SAVE` |  |
| `NOT_VALID_DATA` |  |
| `UNDEFINED` |  |

#### Example

```json
""NOT_FOUND""
```

<HorizontalLine />

### PurchaseOrderHistoryItem

Contains details about a status change.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activity` - [`String!`](#string) | The activity type of the event. |
| `created_at` - [`String!`](#string) | The date and time when the event happened. |
| `message` - [`String!`](#string) | The message representation of the event. |
| `uid` - [`ID!`](#id) | A unique identifier of the purchase order history item. |

#### Example

```json
{
  "activity": "xyz789",
  "created_at": "xyz789",
  "message": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### PurchaseOrderRuleApprovalFlow

Contains details about approval roles applied to the purchase order and status changes.

#### Fields

| Field Name | Description |
|------------|-------------|
| `events` - [`[PurchaseOrderApprovalFlowEvent]!`](#purchaseorderapprovalflowevent) | The approval flow event related to the rule. |
| `rule_name` - [`String!`](#string) | The name of the applied rule. |

#### Example

```json
{
  "events": [PurchaseOrderApprovalFlowEvent],
  "rule_name": "abc123"
}
```

<HorizontalLine />

### PurchaseOrderStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `PENDING` |  |
| `APPROVAL_REQUIRED` |  |
| `APPROVED` |  |
| `ORDER_IN_PROGRESS` |  |
| `ORDER_PLACED` |  |
| `ORDER_FAILED` |  |
| `REJECTED` |  |
| `CANCELED` |  |
| `APPROVED_PENDING_PAYMENT` |  |

#### Example

```json
""PENDING""
```

<HorizontalLine />

### PurchaseOrders

Contains a list of purchase orders.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[PurchaseOrder]!`](#purchaseorder) | Purchase orders matching the search criteria. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Page information of search result&#x27;s current page. |
| `total_count` - [`Int`](#int) | Total number of purchase orders found matching the search criteria. |

#### Example

```json
{
  "items": [PurchaseOrder],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### PurchaseOrdersActionInput

Defines which purchase orders to act on.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `purchase_order_uids` - [`[ID]!`](#id) | An array of purchase order UIDs. |

#### Example

```json
{"purchase_order_uids": ["4"]}
```

<HorizontalLine />

### PurchaseOrdersActionOutput

Returns a list of updated purchase orders and any error messages.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[PurchaseOrderActionError]!`](#purchaseorderactionerror) | An array of error messages encountered while performing the operation. |
| `purchase_orders` - [`[PurchaseOrder]!`](#purchaseorder) | A list of purchase orders. |

#### Example

```json
{
  "errors": [PurchaseOrderActionError],
  "purchase_orders": [PurchaseOrder]
}
```

<HorizontalLine />

### PurchaseOrdersFilterInput

Defines the criteria to use to filter the list of purchase orders.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `company_purchase_orders` - [`Boolean`](#boolean) | Include only purchase orders made by subordinate company users. |
| `created_date` - [`FilterRangeTypeInput`](#filterrangetypeinput) | Filter by the creation date of the purchase order. |
| `my_approvals` - [`Boolean`](#boolean) | Include purchase orders that are pending approval by the customer or eligible for their approval but have already been dealt with. |
| `require_my_approval` - [`Boolean`](#boolean) | Include only purchase orders that are waiting for the customer’s approval. |
| `status` - [`PurchaseOrderStatus`](#purchaseorderstatus) | Filter by the status of the purchase order. |

#### Example

```json
{
  "company_purchase_orders": false,
  "created_date": FilterRangeTypeInput,
  "my_approvals": true,
  "require_my_approval": true,
  "status": "PENDING"
}
```

<HorizontalLine />

### QueryContextInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customerGroup` - [`String!`](#string) | The customer group code. Field reserved for future use. Currently, passing this field will have no impact on search results, that is, the search results will be for &quot;Not logged in&quot; customer |
| `userViewHistory` - [`[ViewHistoryInput!]`](#viewhistoryinput) | User view history with timestamp |

#### Example

```json
{
  "customerGroup": "abc123",
  "userViewHistory": [ViewHistoryInput]
}
```

<HorizontalLine />

### QuoteItemsSortInput

Specifies the field to use for sorting quote items

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `field` - [`SortQuoteItemsEnum!`](#sortquoteitemsenum) | Specifies the quote items field to sort by |
| `order` - [`SortEnum!`](#sortenum) | Specifies the order of quote items&#x27; sorting |

#### Example

```json
{"field": "ITEM_ID", "order": "ASC"}
```

<HorizontalLine />

### QuoteTemplateExpirationDateInput

Sets quote template expiration date.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `expiration_date` - [`String!`](#string) | The expiration period of the negotiable quote template. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{
  "expiration_date": "xyz789",
  "template_id": "4"
}
```

<HorizontalLine />

### QuoteTemplateLineItemNoteInput

Sets quote item note.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `item_id` - [`ID`](#id) | The unique ID of a &#x60;CartLineItem&#x60; object. |
| `item_uid` - [`ID`](#id) | The unique ID of a &#x60;CartLineItem&#x60; object. |
| `note` - [`String`](#string) | The note text to be added. |
| `templateId` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{
  "item_id": "4",
  "item_uid": "4",
  "note": "abc123",
  "templateId": "4"
}
```

<HorizontalLine />

### QuoteTemplateNotificationMessage

Contains a notification message for a negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The notification message. |
| `type` - [`String!`](#string) | The type of notification message. |

#### Example

```json
{
  "message": "xyz789",
  "type": "abc123"
}
```

<HorizontalLine />

### RangeBucket

For use on numeric product fields

#### Fields

| Field Name | Description |
|------------|-------------|
| `count` - [`Int!`](#int) | The number of items in the bucket |
| `from` - [`Float!`](#float) | The minimum amount in a price range |
| `title` - [`String!`](#string) | The display text defining the price range |
| `to` - [`Float`](#float) | The maximum amount in a price range |

#### Example

```json
{
  "count": 987,
  "from": 987.65,
  "title": "abc123",
  "to": 123.45
}
```

<HorizontalLine />

### RangeOperatorInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `type` - [`RangeType`](#rangetype) |  |
| `value` - [`RangeValueInput`](#rangevalueinput) |  |

#### Example

```json
{"type": "UNKNOWN_RANGE_TYPE", "value": RangeValueInput}
```

<HorizontalLine />

### RangeType

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNKNOWN_RANGE_TYPE` |  |
| `STATIC` |  |
| `PERCENTAGE` |  |
| `DYNAMIC` |  |

#### Example

```json
""UNKNOWN_RANGE_TYPE""
```

<HorizontalLine />

### RangeValueInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `from` - [`Float`](#float) |  |
| `to` - [`Float`](#float) |  |

#### Example

```json
{"from": 987.65, "to": 123.45}
```

<HorizontalLine />

### ReCaptchaConfigOutput

#### Fields

| Field Name | Description |
|------------|-------------|
| `configurations` - [`ReCaptchaConfiguration`](#recaptchaconfiguration) | Configuration details for reCaptcha type |
| `is_enabled` - [`Boolean!`](#boolean) | Indicates whether reCaptcha type is enabled |

#### Example

```json
{
  "configurations": ReCaptchaConfiguration,
  "is_enabled": true
}
```

<HorizontalLine />

### ReCaptchaConfiguration

Contains reCAPTCHA form configuration details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `badge_position` - [`String`](#string) | The position of the invisible reCAPTCHA badge on each page. |
| `language_code` - [`String`](#string) | A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging. |
| `minimum_score` - [`Float`](#float) | The minimum score that identifies a user interaction as a potential risk. |
| `re_captcha_type` - [`ReCaptchaTypeEmum!`](#recaptchatypeemum) |  |
| `technical_failure_message` - [`String!`](#string) | The message that appears when reCaptcha fails. |
| `theme` - [`String!`](#string) | Theme to be used to render reCaptcha. |
| `validation_failure_message` - [`String!`](#string) | The message that appears to the user if validation fails. |
| `website_key` - [`String!`](#string) | The website key generated when the Google reCAPTCHA account was registered. |

#### Example

```json
{
  "badge_position": "xyz789",
  "language_code": "xyz789",
  "minimum_score": 123.45,
  "re_captcha_type": "INVISIBLE",
  "technical_failure_message": "xyz789",
  "theme": "abc123",
  "validation_failure_message": "abc123",
  "website_key": "abc123"
}
```

<HorizontalLine />

### ReCaptchaConfigurationV3

Contains reCAPTCHA V3-Invisible configuration details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `badge_position` - [`String!`](#string) | The position of the invisible reCAPTCHA badge on each page. |
| `failure_message` - [`String!`](#string) | The message that appears to the user if validation fails. |
| `forms` - [`[ReCaptchaFormEnum]!`](#recaptchaformenum) | A list of forms on the storefront that have been configured to use reCAPTCHA V3. |
| `is_enabled` - [`Boolean!`](#boolean) | Return whether recaptcha is enabled or not |
| `language_code` - [`String`](#string) | A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging. |
| `minimum_score` - [`Float!`](#float) | The minimum score that identifies a user interaction as a potential risk. |
| `theme` - [`String!`](#string) | Theme to be used to render reCaptcha. |
| `website_key` - [`String!`](#string) | The website key generated when the Google reCAPTCHA account was registered. |

#### Example

```json
{
  "badge_position": "xyz789",
  "failure_message": "abc123",
  "forms": ["PLACE_ORDER"],
  "is_enabled": true,
  "language_code": "abc123",
  "minimum_score": 123.45,
  "theme": "xyz789",
  "website_key": "abc123"
}
```

<HorizontalLine />

### ReCaptchaFormConfigItem

Contains reCAPTCHA configuration for a specific form type.

#### Fields

| Field Name | Description |
|------------|-------------|
| `configurations` - [`ReCaptchaConfiguration`](#recaptchaconfiguration) | Configuration details for reCaptcha type. |
| `form_type` - [`ReCaptchaFormEnum!`](#recaptchaformenum) | The form type identifier. |
| `is_enabled` - [`Boolean!`](#boolean) | Indicates whether reCaptcha is enabled for this form type. |

#### Example

```json
{
  "configurations": ReCaptchaConfiguration,
  "form_type": "PLACE_ORDER",
  "is_enabled": false
}
```

<HorizontalLine />

### ReCaptchaFormEnum

#### Values

| Enum Value | Description |
|------------|-------------|
| `PLACE_ORDER` |  |
| `CONTACT` |  |
| `CUSTOMER_LOGIN` |  |
| `CUSTOMER_FORGOT_PASSWORD` |  |
| `CUSTOMER_CREATE` |  |
| `CUSTOMER_EDIT` |  |
| `NEWSLETTER` |  |
| `PRODUCT_REVIEW` |  |
| `SENDFRIEND` |  |
| `BRAINTREE` |  |
| `RESEND_CONFIRMATION_EMAIL` |  |

#### Example

```json
""PLACE_ORDER""
```

<HorizontalLine />

### ReCaptchaTypeEmum

#### Values

| Enum Value | Description |
|------------|-------------|
| `INVISIBLE` |  |
| `RECAPTCHA` |  |
| `RECAPTCHA_V3` |  |
| `RECAPTCHA_ENTERPRISE` |  |

#### Example

```json
""INVISIBLE""
```

<HorizontalLine />

### RecommendationUnit

Recommendation Unit containing product and other details

#### Fields

| Field Name | Description |
|------------|-------------|
| `displayOrder` - [`Int`](#int) | Order in which recommendation units are displayed |
| `pageType` - [`String`](#string) | Page type |
| `productsView` - [`[ProductView]`](#productview) | List of product view |
| `storefrontLabel` - [`String`](#string) | Storefront label to be displayed on the storefront |
| `totalProducts` - [`Int`](#int) | Total products returned in recommedations |
| `typeId` - [`String`](#string) | Type of recommendation |
| `unitId` - [`String`](#string) | Id of the preconfigured unit |
| `unitName` - [`String`](#string) | Name of the preconfigured unit |
| `userError` - [`String`](#string) | User error message if the unit could not be fully resolved (e.g. required currentSku was not provided) |

#### Example

```json
{
  "displayOrder": 123,
  "pageType": "abc123",
  "productsView": [ProductView],
  "storefrontLabel": "xyz789",
  "totalProducts": 987,
  "typeId": "abc123",
  "unitId": "xyz789",
  "unitName": "abc123",
  "userError": "xyz789"
}
```

<HorizontalLine />

### Recommendations

Recommendations response

#### Fields

| Field Name | Description |
|------------|-------------|
| `results` - [`[RecommendationUnit]`](#recommendationunit) | List of rec units with products recommended |
| `totalResults` - [`Int`](#int) | total number of rec units for which recommendations are returned |

#### Example

```json
{"results": [RecommendationUnit], "totalResults": 987}
```

<HorizontalLine />

### Region

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | The two-letter code for the region, such as TX for Texas. |
| `id` - [`Int`](#int) | The unique ID for a &#x60;Region&#x60; object. |
| `name` - [`String`](#string) | The name of the region, such as Texas. |

#### Example

```json
{
  "code": "xyz789",
  "id": 987,
  "name": "xyz789"
}
```

<HorizontalLine />

### RemoveCouponFromCartInput

Specifies the cart from which to remove a coupon.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |

#### Example

```json
{"cart_id": "abc123"}
```

<HorizontalLine />

### RemoveCouponFromCartOutput

Contains details about the cart after removing a coupon.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart`](#cart) | The cart after removing a coupon. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### RemoveCouponsFromCartInput

Remove coupons from the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `coupon_codes` - [`[String]!`](#string) | An array of coupon codes to be removed from the quote. If coupon_codes is empty all coupons will be removed from the quote. |

#### Example

```json
{
  "cart_id": "abc123",
  "coupon_codes": ["xyz789"]
}
```

<HorizontalLine />

### RemoveGiftCardFromCartInput

Defines the input required to run the `removeGiftCardFromCart` mutation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |
| `gift_card_code` - [`String!`](#string) | The gift card code to be removed to the cart. |

#### Example

```json
{
  "cart_id": "abc123",
  "gift_card_code": "xyz789"
}
```

<HorizontalLine />

### RemoveGiftCardFromCartOutput

Defines the possible output for the `removeGiftCardFromCart` mutation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The contents of the specified shopping cart. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### RemoveGiftRegistryItemsOutput

Contains the results of a request to remove an item from a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry after removing items. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### RemoveGiftRegistryOutput

Contains the results of a request to delete a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](#boolean) | Indicates whether the gift registry was successfully deleted. |

#### Example

```json
{"success": false}
```

<HorizontalLine />

### RemoveGiftRegistryRegistrantsOutput

Contains the results of a request to delete a registrant.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry after deleting registrants. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### RemoveItemFromCartInput

Specifies which items to remove from the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `cart_item_uid` - [`ID`](#id) | Required field. The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{"cart_id": "xyz789", "cart_item_uid": 4}
```

<HorizontalLine />

### RemoveItemFromCartOutput

Contains details about the cart after removing an item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after removing an item. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### RemoveNegotiableQuoteItemsInput

Defines the items to remove from the specified negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_item_uids` - [`[ID]!`](#id) | An array of IDs indicating which items to remove from the negotiable quote. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{"quote_item_uids": [4], "quote_uid": "4"}
```

<HorizontalLine />

### RemoveNegotiableQuoteItemsOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after removing items. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### RemoveNegotiableQuoteTemplateItemsInput

Defines the items to remove from the specified negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `item_uids` - [`[ID]!`](#id) | An array of IDs indicating which items to remove from the negotiable quote. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{"item_uids": ["4"], "template_id": 4}
```

<HorizontalLine />

### RemoveProductsFromCompareListInput

Defines which products to remove from a compare list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `products` - [`[ID]!`](#id) | An array of product IDs to remove from the compare list. |
| `uid` - [`ID!`](#id) | The unique identifier of the compare list to modify. |

#### Example

```json
{
  "products": ["4"],
  "uid": "4"
}
```

<HorizontalLine />

### RemoveProductsFromWishlistOutput

Contains the customer's wish list and any errors encountered.

#### Fields

| Field Name | Description |
|------------|-------------|
| `user_errors` - [`[WishListUserInputError]!`](#wishlistuserinputerror) | An array of errors encountered while deleting products from a wish list. |
| `wishlist` - [`Wishlist!`](#wishlist) | Contains the wish list with after items were successfully deleted. |

#### Example

```json
{
  "user_errors": [WishListUserInputError],
  "wishlist": Wishlist
}
```

<HorizontalLine />

### RemoveReturnTrackingInput

Defines the tracking information to delete.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `return_shipping_tracking_uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnShippingTracking&#x60; object. |

#### Example

```json
{"return_shipping_tracking_uid": 4}
```

<HorizontalLine />

### RemoveReturnTrackingOutput

Contains the response after deleting tracking information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `return` - [`Return`](#return) | Contains details about the modified return. |

#### Example

```json
{"return": Return}
```

<HorizontalLine />

### RemoveRewardPointsFromCartOutput

Contains the customer cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The customer cart after reward points are removed. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### RemoveStoreCreditFromCartInput

Defines the input required to run the `removeStoreCreditFromCart` mutation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |

#### Example

```json
{"cart_id": "abc123"}
```

<HorizontalLine />

### RemoveStoreCreditFromCartOutput

Defines the possible output for the `removeStoreCreditFromCart` mutation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The contents of the specified shopping cart. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### RenameNegotiableQuoteInput

Sets new name for a negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_comment` - [`String`](#string) | The reason for the quote name change specified by the buyer. |
| `quote_name` - [`String!`](#string) | The new quote name the buyer specified to the negotiable quote request. |
| `quote_uid` - [`ID!`](#id) | The cart ID of the buyer requesting a new negotiable quote. |

#### Example

```json
{
  "quote_comment": "abc123",
  "quote_name": "abc123",
  "quote_uid": "4"
}
```

<HorizontalLine />

### RenameNegotiableQuoteOutput

Contains the updated negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after updating the name. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### ReorderItemsOutput

Contains the cart and any errors after adding products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | Detailed information about the customer&#x27;s cart. |
| `userInputErrors` - [`[CheckoutUserInputError]!`](#checkoutuserinputerror) | An array of reordering errors. |

#### Example

```json
{
  "cart": Cart,
  "userInputErrors": [CheckoutUserInputError]
}
```

<HorizontalLine />

### RequestGuestReturnInput

Contains information needed to start a return request.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment_text` - [`String`](#string) | Text the buyer entered that describes the reason for the refund request. |
| `contact_email` - [`String`](#string) | The email address the buyer enters to receive notifications about the status of the return. |
| `items` - [`[RequestReturnItemInput]!`](#requestreturniteminput) | An array of items to be returned. |
| `token` - [`String!`](#string) | Order token. |

#### Example

```json
{
  "comment_text": "abc123",
  "contact_email": "abc123",
  "items": [RequestReturnItemInput],
  "token": "abc123"
}
```

<HorizontalLine />

### RequestNegotiableQuoteInput

Defines properties of a negotiable quote request.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`ID!`](#id) | The cart ID of the buyer requesting a new negotiable quote. |
| `comment` - [`NegotiableQuoteCommentInput!`](#negotiablequotecommentinput) | Comments the buyer entered to describe the request. |
| `is_draft` - [`Boolean`](#boolean) | Flag indicating if quote is draft or not. |
| `quote_name` - [`String!`](#string) | The name the buyer assigned to the negotiable quote request. |

#### Example

```json
{
  "cart_id": "4",
  "comment": NegotiableQuoteCommentInput,
  "is_draft": true,
  "quote_name": "xyz789"
}
```

<HorizontalLine />

### RequestNegotiableQuoteOutput

Contains the `NegotiableQuote` object generated when a buyer requests a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | Details about the negotiable quote. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### RequestNegotiableQuoteTemplateInput

Defines properties of a negotiable quote template request.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`ID!`](#id) | The cart ID of the quote to create the new negotiable quote template from. |

#### Example

```json
{"cart_id": "4"}
```

<HorizontalLine />

### RequestReturnInput

Contains information needed to start a return request.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment_text` - [`String`](#string) | Text the buyer entered that describes the reason for the refund request. |
| `contact_email` - [`String`](#string) | The email address the buyer enters to receive notifications about the status of the return. |
| `items` - [`[RequestReturnItemInput]!`](#requestreturniteminput) | An array of items to be returned. |
| `order_uid` - [`ID!`](#id) | The unique ID for a &#x60;Order&#x60; object. |

#### Example

```json
{
  "comment_text": "xyz789",
  "contact_email": "xyz789",
  "items": [RequestReturnItemInput],
  "order_uid": "4"
}
```

<HorizontalLine />

### RequestReturnItemInput

Contains details about an item to be returned.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_custom_attributes` - [`[EnteredCustomAttributeInput]`](#enteredcustomattributeinput) | Details about a custom attribute that was entered. |
| `order_item_uid` - [`ID!`](#id) | The unique ID for a &#x60;OrderItemInterface&#x60; object. |
| `quantity_to_return` - [`Float!`](#float) | The quantity of the item to be returned. |
| `selected_custom_attributes` - [`[SelectedCustomAttributeInput]`](#selectedcustomattributeinput) | An array of selected custom option IDs associated with the item to be returned. For example, the IDs for the selected color and size of a configurable product. |

#### Example

```json
{
  "entered_custom_attributes": [
    EnteredCustomAttributeInput
  ],
  "order_item_uid": "4",
  "quantity_to_return": 123.45,
  "selected_custom_attributes": [
    SelectedCustomAttributeInput
  ]
}
```

<HorizontalLine />

### RequestReturnOutput

Contains the response to a return request.

#### Fields

| Field Name | Description |
|------------|-------------|
| `return` - [`Return`](#return) | Details about a single return request. |
| `returns` - [`Returns`](#returns) | An array of return requests. |

#### Example

```json
{
  "return": Return,
  "returns": Returns
}
```

<HorizontalLine />

### RequisitionList

Defines the contents of a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `description` - [`String`](#string) | Optional text that describes the requisition list. |
| `items` - [`RequistionListItems`](#requistionlistitems) | An array of products added to the requisition list. |
| `items_count` - [`Int!`](#int) | The number of items in the list. |
| `name` - [`String!`](#string) | The requisition list name. |
| `uid` - [`ID!`](#id) | The unique requisition list ID. |
| `updated_at` - [`String`](#string) | The time of the last modification of the requisition list. |

#### Example

```json
{
  "description": "xyz789",
  "items": RequistionListItems,
  "items_count": 987,
  "name": "xyz789",
  "uid": "4",
  "updated_at": "xyz789"
}
```

<HorizontalLine />

### RequisitionListFilterInput

Defines requisition list filters.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `name` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Filter by the display name of the requisition list. |
| `uids` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter requisition lists by one or more requisition list IDs. |

#### Example

```json
{
  "name": FilterMatchTypeInput,
  "uids": FilterEqualTypeInput
}
```

<HorizontalLine />

### RequisitionListItemInterface

The interface for requisition list items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The amount added. |
| `sku` - [`String!`](#string) | The product SKU. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Possible Types

| RequisitionListItemInterface Types |
|----------------|
| [`BundleRequisitionListItem`](#bundlerequisitionlistitem) |
| [`ConfigurableRequisitionListItem`](#configurablerequisitionlistitem) |
| [`DownloadableRequisitionListItem`](#downloadablerequisitionlistitem) |
| [`GiftCardRequisitionListItem`](#giftcardrequisitionlistitem) |
| [`SimpleRequisitionListItem`](#simplerequisitionlistitem) |
| [`VirtualRequisitionListItem`](#virtualrequisitionlistitem) |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 123.45,
  "sku": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### RequisitionListItemsInput

Defines the items to add.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_options` - [`[EnteredOptionInput]`](#enteredoptioninput) | Entered option IDs. |
| `parent_sku` - [`String`](#string) | For configurable products, the SKU of the parent product. |
| `quantity` - [`Float`](#float) | The quantity of the product to add. |
| `selected_options` - [`[String]`](#string) | Selected option IDs. |
| `sku` - [`String!`](#string) | The product SKU. |

#### Example

```json
{
  "entered_options": [EnteredOptionInput],
  "parent_sku": "xyz789",
  "quantity": 987.65,
  "selected_options": ["xyz789"],
  "sku": "xyz789"
}
```

<HorizontalLine />

### RequisitionListSortInput

Defines the field to use to sort a list of requisition lists.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sort_direction` - [`SortEnum`](#sortenum) | Whether to return results in ascending or descending order. |
| `sort_field` - [`RequisitionListSortableField!`](#requisitionlistsortablefield) | The specified sort field. |

#### Example

```json
{"sort_direction": "ASC", "sort_field": "NAME"}
```

<HorizontalLine />

### RequisitionListSortableField

#### Values

| Enum Value | Description |
|------------|-------------|
| `NAME` | Sorts requisition lists by requisition list name. |
| `UPDATED_AT` | Sorts requisition lists by the date they were last updated. |

#### Example

```json
""NAME""
```

<HorizontalLine />

### RequisitionLists

Defines customer requisition lists.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[RequisitionList]`](#requisitionlist) | An array of requisition lists. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `sort_fields` - [`SortFields`](#sortfields) | Contains the default sort field and all available sort fields. |
| `total_count` - [`Int`](#int) | The number of returned requisition lists. |

#### Example

```json
{
  "items": [RequisitionList],
  "page_info": SearchResultPageInfo,
  "sort_fields": SortFields,
  "total_count": 123
}
```

<HorizontalLine />

### RequistionListItems

Contains an array of items added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[RequisitionListItemInterface]!`](#requisitionlistiteminterface) | An array of items in the requisition list. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `total_pages` - [`Int!`](#int) | The number of pages returned. |

#### Example

```json
{
  "items": [RequisitionListItemInterface],
  "page_info": SearchResultPageInfo,
  "total_pages": 123
}
```

<HorizontalLine />

### Return

Contains details about a return.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_shipping_carriers` - [`[ReturnShippingCarrier]`](#returnshippingcarrier) | A list of shipping carriers available for returns. |
| `comments` - [`[ReturnComment]`](#returncomment) | A list of comments posted for the return request. |
| `created_at` - [`String!`](#string) | The date the return was requested. |
| `customer` - [`ReturnCustomer!`](#returncustomer) | Data from the customer who created the return request. |
| `items` - [`[ReturnItem]`](#returnitem) | A list of items being returned. |
| `number` - [`String!`](#string) | A human-readable return number. |
| `order` - [`CustomerOrder`](#customerorder) | The order associated with the return. |
| `shipping` - [`ReturnShipping`](#returnshipping) | Shipping information for the return. |
| `status` - [`ReturnStatus`](#returnstatus) | The status of the return request. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;Return&#x60; object. |

#### Example

```json
{
  "available_shipping_carriers": [ReturnShippingCarrier],
  "comments": [ReturnComment],
  "created_at": "abc123",
  "customer": ReturnCustomer,
  "items": [ReturnItem],
  "number": "abc123",
  "order": CustomerOrder,
  "shipping": ReturnShipping,
  "status": "PENDING",
  "uid": 4
}
```

<HorizontalLine />

### ReturnComment

Contains details about a return comment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `author_name` - [`String!`](#string) | The name or author who posted the comment. |
| `created_at` - [`String!`](#string) | The date and time the comment was posted. |
| `text` - [`String!`](#string) | The contents of the comment. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnComment&#x60; object. |

#### Example

```json
{
  "author_name": "xyz789",
  "created_at": "abc123",
  "text": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### ReturnCustomer

The customer information for the return.

#### Fields

| Field Name | Description |
|------------|-------------|
| `email` - [`String!`](#string) | The email address of the customer. |
| `firstname` - [`String`](#string) | The first name of the customer. |
| `lastname` - [`String`](#string) | The last name of the customer. |

#### Example

```json
{
  "email": "abc123",
  "firstname": "xyz789",
  "lastname": "xyz789"
}
```

<HorizontalLine />

### ReturnItem

Contains details about a product being returned.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributesV2` - [`[AttributeValueInterface]`](#attributevalueinterface) | Custom attributes that are visible on the storefront. |
| `order_item` - [`OrderItemInterface!`](#orderiteminterface) | Provides access to the product being returned, including information about selected and entered options. |
| `quantity` - [`Float!`](#float) | The quantity of the item the merchant authorized to be returned. |
| `request_quantity` - [`Float!`](#float) | The quantity of the item requested to be returned. |
| `status` - [`ReturnItemStatus!`](#returnitemstatus) | The return status of the item. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnItem&#x60; object. |

#### Example

```json
{
  "custom_attributesV2": [AttributeValueInterface],
  "order_item": OrderItemInterface,
  "quantity": 987.65,
  "request_quantity": 987.65,
  "status": "PENDING",
  "uid": 4
}
```

<HorizontalLine />

### ReturnItemAttributeMetadata

Return Item attribute metadata.

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
  "default_value": "abc123",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "abc123",
  "frontend_input": "BOOLEAN",
  "input_filter": "NONE",
  "is_required": false,
  "is_unique": true,
  "label": "xyz789",
  "multiline_count": 123,
  "options": [CustomAttributeOptionInterface],
  "sort_order": 987,
  "validate_rules": [ValidationRule]
}
```

<HorizontalLine />

### ReturnItemStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `PENDING` |  |
| `AUTHORIZED` |  |
| `RECEIVED` |  |
| `APPROVED` |  |
| `REJECTED` |  |
| `DENIED` |  |

#### Example

```json
""PENDING""
```

<HorizontalLine />

### ReturnShipping

Contains details about the return shipping address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `address` - [`ReturnShippingAddress`](#returnshippingaddress) | The merchant-defined return shipping address. |
| `tracking` - [`[ReturnShippingTracking]`](#returnshippingtracking) | The unique ID for a &#x60;ReturnShippingTracking&#x60; object. If a single UID is specified, the array contains a single tracking record. Otherwise, array contains all tracking information. |

#### Example

```json
{
  "address": ReturnShippingAddress,
  "tracking": [ReturnShippingTracking]
}
```

<HorizontalLine />

### ReturnShippingAddress

Contains details about the shipping address used for receiving returned items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The city for product returns. |
| `contact_name` - [`String`](#string) | The merchant&#x27;s contact person. |
| `country` - [`Country!`](#country) | An object that defines the country for product returns. |
| `postcode` - [`String!`](#string) | The postal code for product returns. |
| `region` - [`Region!`](#region) | An object that defines the state or province for product returns. |
| `street` - [`[String]!`](#string) | The street address for product returns. |
| `telephone` - [`String`](#string) | The telephone number for product returns. |

#### Example

```json
{
  "city": "xyz789",
  "contact_name": "xyz789",
  "country": Country,
  "postcode": "abc123",
  "region": Region,
  "street": ["xyz789"],
  "telephone": "abc123"
}
```

<HorizontalLine />

### ReturnShippingCarrier

Contains details about the carrier on a return.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | A description of the shipping carrier. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnShippingCarrier&#x60; object assigned to the shipping carrier. |

#### Example

```json
{
  "label": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### ReturnShippingTracking

Contains shipping and tracking details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `carrier` - [`ReturnShippingCarrier!`](#returnshippingcarrier) | Contains details of a shipping carrier. |
| `status` - [`ReturnShippingTrackingStatus`](#returnshippingtrackingstatus) | Details about the status of a shipment. |
| `tracking_number` - [`String!`](#string) | A tracking number assigned by the carrier. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnShippingTracking&#x60; object assigned to the tracking item. |

#### Example

```json
{
  "carrier": ReturnShippingCarrier,
  "status": ReturnShippingTrackingStatus,
  "tracking_number": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### ReturnShippingTrackingStatus

Contains the status of a shipment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `text` - [`String!`](#string) | Text that describes the status. |
| `type` - [`ReturnShippingTrackingStatusType!`](#returnshippingtrackingstatustype) | Indicates whether the status type is informational or an error. |

#### Example

```json
{"text": "xyz789", "type": "INFORMATION"}
```

<HorizontalLine />

### ReturnShippingTrackingStatusType

#### Values

| Enum Value | Description |
|------------|-------------|
| `INFORMATION` |  |
| `ERROR` |  |

#### Example

```json
""INFORMATION""
```

<HorizontalLine />

### ReturnStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `PENDING` |  |
| `UNCONFIRMED` |  |
| `AUTHORIZED` |  |
| `PARTIALLY_AUTHORIZED` |  |
| `RECEIVED` |  |
| `PARTIALLY_RECEIVED` |  |
| `APPROVED` |  |
| `PARTIALLY_APPROVED` |  |
| `REJECTED` |  |
| `PARTIALLY_REJECTED` |  |
| `DENIED` |  |
| `PROCESSED_AND_CLOSED` |  |
| `CLOSED` |  |

#### Example

```json
""PENDING""
```

<HorizontalLine />

### Returns

Contains a list of customer return requests.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[Return]`](#return) | A list of return requests. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `total_count` - [`Int`](#int) | The total number of return requests. |

#### Example

```json
{
  "items": [Return],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### RevokeCustomerTokenOutput

Contains the result of a request to revoke a customer token.

#### Fields

| Field Name | Description |
|------------|-------------|
| `result` - [`Boolean!`](#boolean) | The result of a request to revoke a customer token. |

#### Example

```json
{"result": false}
```

<HorizontalLine />

### RewardPoints

Contains details about a customer's reward points.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance` - [`RewardPointsAmount`](#rewardpointsamount) | The current balance of reward points. |
| `balance_history` - [`[RewardPointsBalanceHistoryItem]`](#rewardpointsbalancehistoryitem) | The balance history of reward points. If the ability for customers to view the balance history has been disabled in the Admin, this field will be set to null. |
| `exchange_rates` - [`RewardPointsExchangeRates`](#rewardpointsexchangerates) | The current exchange rates for reward points. |
| `subscription_status` - [`RewardPointsSubscriptionStatus`](#rewardpointssubscriptionstatus) | The subscription status of emails related to reward points. |

#### Example

```json
{
  "balance": RewardPointsAmount,
  "balance_history": [RewardPointsBalanceHistoryItem],
  "exchange_rates": RewardPointsExchangeRates,
  "subscription_status": RewardPointsSubscriptionStatus
}
```

<HorizontalLine />

### RewardPointsAmount

#### Fields

| Field Name | Description |
|------------|-------------|
| `money` - [`Money!`](#money) | The reward points amount in store currency. |
| `points` - [`Float!`](#float) | The reward points amount in points. |

#### Example

```json
{"money": Money, "points": 987.65}
```

<HorizontalLine />

### RewardPointsBalanceHistoryItem

Contain details about the reward points transaction.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance` - [`RewardPointsAmount`](#rewardpointsamount) | The award points balance after the completion of the transaction. |
| `change_reason` - [`String!`](#string) | The reason the balance changed. |
| `date` - [`String!`](#string) | The date of the transaction. |
| `points_change` - [`Float!`](#float) | The number of points added or deducted in the transaction. |

#### Example

```json
{
  "balance": RewardPointsAmount,
  "change_reason": "abc123",
  "date": "abc123",
  "points_change": 987.65
}
```

<HorizontalLine />

### RewardPointsExchangeRates

Lists the reward points exchange rates. The values depend on the customer group.

#### Fields

| Field Name | Description |
|------------|-------------|
| `earning` - [`RewardPointsRate`](#rewardpointsrate) | How many points are earned for a given amount spent. |
| `redemption` - [`RewardPointsRate`](#rewardpointsrate) | How many points must be redeemed to get a given amount of currency discount at the checkout. |

#### Example

```json
{
  "earning": RewardPointsRate,
  "redemption": RewardPointsRate
}
```

<HorizontalLine />

### RewardPointsRate

Contains details about customer's reward points rate.

#### Fields

| Field Name | Description |
|------------|-------------|
| `currency_amount` - [`Float!`](#float) | The money value for the exchange rate. For earnings, this is the amount spent to earn the specified points. For redemption, this is the amount of money the number of points represents. |
| `points` - [`Float!`](#float) | The number of points for an exchange rate. For earnings, this is the number of points earned. For redemption, this is the number of points needed for redemption. |

#### Example

```json
{"currency_amount": 123.45, "points": 987.65}
```

<HorizontalLine />

### RewardPointsSubscriptionStatus

Indicates whether the customer subscribes to reward points emails.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance_updates` - [`RewardPointsSubscriptionStatusesEnum!`](#rewardpointssubscriptionstatusesenum) | Indicates whether the customer subscribes to &#x27;Reward points balance updates&#x27; emails. |
| `points_expiration_notifications` - [`RewardPointsSubscriptionStatusesEnum!`](#rewardpointssubscriptionstatusesenum) | Indicates whether the customer subscribes to &#x27;Reward points expiration notifications&#x27; emails. |

#### Example

```json
{
  "balance_updates": "SUBSCRIBED",
  "points_expiration_notifications": "SUBSCRIBED"
}
```

<HorizontalLine />

### RewardPointsSubscriptionStatusesEnum

#### Values

| Enum Value | Description |
|------------|-------------|
| `SUBSCRIBED` |  |
| `NOT_SUBSCRIBED` |  |

#### Example

```json
""SUBSCRIBED""
```

<HorizontalLine />

### SDKParams

Defines the name and value of a SDK parameter

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String`](#string) | The name of the SDK parameter |
| `value` - [`String`](#string) | The value of the SDK parameter |

#### Example

```json
{
  "name": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### SalesCommentItem

Contains details about a comment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The text of the message. |
| `timestamp` - [`String!`](#string) | The timestamp of the comment. |

#### Example

```json
{
  "message": "xyz789",
  "timestamp": "abc123"
}
```

<HorizontalLine />

### ScalarBucket

For use on string and other scalar product fields

#### Fields

| Field Name | Description |
|------------|-------------|
| `count` - [`Int!`](#int) | The number of items in the bucket |
| `id` - [`ID!`](#id) | An identifier that can be used for filtering. It may contain non-human readable data |
| `title` - [`String!`](#string) | The display text for the scalar value |

#### Example

```json
{
  "count": 987,
  "id": "4",
  "title": "xyz789"
}
```

<HorizontalLine />

### ScopeTypeEnum

This enumeration defines the scope type for customer orders.

#### Values

| Enum Value | Description |
|------------|-------------|
| `GLOBAL` |  |
| `WEBSITE` |  |
| `STORE` |  |

#### Example

```json
""GLOBAL""
```

<HorizontalLine />

### SearchClauseInput

A product attribute to filter on

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute` - [`String!`](#string) | The attribute code of a product attribute |
| `contains` - [`String`](#string) | attribute value should contain the specified string |
| `eq` - [`String`](#string) | A string value to filter on |
| `in` - [`[String]`](#string) | An array of string values to filter on |
| `range` - [`SearchRangeInput`](#searchrangeinput) | A range of numeric values to filter on |
| `startsWith` - [`String`](#string) | attribute value should start with the specified string |

#### Example

```json
{
  "attribute": "abc123",
  "contains": "abc123",
  "eq": "abc123",
  "in": ["abc123"],
  "range": SearchRangeInput,
  "startsWith": "abc123"
}
```

<HorizontalLine />

### SearchRangeInput

A range of numeric values for use in a search

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `from` - [`Float`](#float) | The minimum value to filter on. If not specified, the value of &#x60;0&#x60; is applied |
| `to` - [`Float`](#float) | The maximum value to filter on |

#### Example

```json
{"from": 987.65, "to": 123.45}
```

<HorizontalLine />

### SearchResultPageInfo

Provides navigation for the query response.

#### Fields

| Field Name | Description |
|------------|-------------|
| `current_page` - [`Int`](#int) | The specific page to return. |
| `page_size` - [`Int`](#int) | The maximum number of items to return per page of results. |
| `total_pages` - [`Int`](#int) | The total number of pages in the response. |

#### Example

```json
{"current_page": 987, "page_size": 123, "total_pages": 123}
```

<HorizontalLine />

### SelectedBundleOption

Contains details about a selected bundle option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The display name of the selected bundle product option. |
| `type` - [`String!`](#string) | The type of selected bundle product option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;SelectedBundleOption&#x60; object |
| `values` - [`[SelectedBundleOptionValue]!`](#selectedbundleoptionvalue) | An array of selected bundle option values. |

#### Example

```json
{
  "label": "xyz789",
  "type": "abc123",
  "uid": 4,
  "values": [SelectedBundleOptionValue]
}
```

<HorizontalLine />

### SelectedBundleOptionValue

Contains details about a value for a selected bundle option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The display name of the value for the selected bundle product option. |
| `original_price` - [`Money!`](#money) | The original price of the value for the selected bundle product option. |
| `priceV2` - [`Money!`](#money) | The price of the value for the selected bundle product option. |
| `quantity` - [`Float!`](#float) | The quantity of the value for the selected bundle product option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;SelectedBundleOptionValue&#x60; object |

#### Example

```json
{
  "label": "xyz789",
  "original_price": Money,
  "priceV2": Money,
  "quantity": 987.65,
  "uid": 4
}
```

<HorizontalLine />

### SelectedConfigurableOption

Contains details about a selected configurable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `configurable_product_option_uid` - [`ID!`](#id) | The unique ID for a &#x60;ConfigurableProductOptions&#x60; object. |
| `configurable_product_option_value_uid` - [`ID!`](#id) | The unique ID for a &#x60;ConfigurableProductOptionsValues&#x60; object. |
| `option_label` - [`String!`](#string) | The display text for the option. |
| `value_label` - [`String!`](#string) | The display name of the selected configurable option. |

#### Example

```json
{
  "configurable_product_option_uid": "4",
  "configurable_product_option_value_uid": 4,
  "option_label": "abc123",
  "value_label": "xyz789"
}
```

<HorizontalLine />

### SelectedCustomAttributeInput

Contains details about an attribute the buyer selected.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String!`](#string) | A string that identifies the selected attribute. |
| `value` - [`String!`](#string) | The unique ID for a selected custom attribute value. |

#### Example

```json
{
  "attribute_code": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### SelectedCustomizableOption

Identifies a customized product that has been placed in a cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_option_uid` - [`ID!`](#id) | The unique ID for a specific &#x60;CustomizableOptionInterface&#x60; object, such as a &#x60;CustomizableFieldOption&#x60;, &#x60;CustomizableFileOption&#x60;, or &#x60;CustomizableAreaOption&#x60; object. |
| `is_required` - [`Boolean!`](#boolean) | Indicates whether the customizable option is required. |
| `label` - [`String!`](#string) | The display name of the selected customizable option. |
| `sort_order` - [`Int!`](#int) | A value indicating the order to display this option. |
| `type` - [`String!`](#string) | The type of &#x60;CustomizableOptionInterface&#x60; object. |
| `values` - [`[SelectedCustomizableOptionValue]!`](#selectedcustomizableoptionvalue) | An array of selectable values. |

#### Example

```json
{
  "customizable_option_uid": "4",
  "is_required": true,
  "label": "xyz789",
  "sort_order": 987,
  "type": "abc123",
  "values": [SelectedCustomizableOptionValue]
}
```

<HorizontalLine />

### SelectedCustomizableOptionValue

Identifies the value of the selected customized option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_option_value_uid` - [`ID!`](#id) | The unique ID for a value object that corresponds to the object represented by the &#x60;customizable_option_uid&#x60; attribute. |
| `label` - [`String!`](#string) | The display name of the selected value. |
| `price` - [`CartItemSelectedOptionValuePrice!`](#cartitemselectedoptionvalueprice) | The price of the selected customizable value. |
| `value` - [`String!`](#string) | The text identifying the selected value. |

#### Example

```json
{
  "customizable_option_value_uid": "4",
  "label": "xyz789",
  "price": CartItemSelectedOptionValuePrice,
  "value": "xyz789"
}
```

<HorizontalLine />

### SelectedPaymentMethod

Describes the payment method selected by the shopper.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The payment method code. |
| `oope_payment_method_config` - [`OopePaymentMethodConfig`](#oopepaymentmethodconfig) | Configuration for out of process payment methods |
| `purchase_order_number` - [`String`](#string) | The purchase order number. |
| `title` - [`String!`](#string) | The payment method title. |

#### Example

```json
{
  "code": "xyz789",
  "oope_payment_method_config": OopePaymentMethodConfig,
  "purchase_order_number": "xyz789",
  "title": "abc123"
}
```

<HorizontalLine />

### SelectedShippingMethod

Contains details about the selected shipping method and carrier.

#### Fields

| Field Name | Description |
|------------|-------------|
| `additional_data` - [`[ShippingAdditionalData]`](#shippingadditionaldata) | Additional data related to the shipping method. |
| `amount` - [`Money!`](#money) | The cost of shipping using this shipping method. |
| `carrier_code` - [`String!`](#string) | A string that identifies a commercial carrier or an offline shipping method. |
| `carrier_title` - [`String!`](#string) | The label for the carrier code. |
| `method_code` - [`String!`](#string) | A shipping method code associated with a carrier. |
| `method_title` - [`String!`](#string) | The label for the method code. |
| `price_excl_tax` - [`Money!`](#money) | The cost of shipping using this shipping method, excluding tax. |
| `price_incl_tax` - [`Money!`](#money) | The cost of shipping using this shipping method, including tax. |

#### Example

```json
{
  "additional_data": [ShippingAdditionalData],
  "amount": Money,
  "carrier_code": "xyz789",
  "carrier_title": "xyz789",
  "method_code": "xyz789",
  "method_title": "xyz789",
  "price_excl_tax": Money,
  "price_incl_tax": Money
}
```

<HorizontalLine />

### SendNegotiableQuoteForReviewInput

Specifies which negotiable quote to send for review.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment` - [`NegotiableQuoteCommentInput`](#negotiablequotecommentinput) | A comment for the seller to review. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "comment": NegotiableQuoteCommentInput,
  "quote_uid": "4"
}
```

<HorizontalLine />

### SendNegotiableQuoteForReviewOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after sending for seller review. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetBillingAddressOnCartInput

Sets the billing address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `billing_address` - [`BillingAddressInput!`](#billingaddressinput) | The billing address. |
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |

#### Example

```json
{
  "billing_address": BillingAddressInput,
  "cart_id": "abc123"
}
```

<HorizontalLine />

### SetBillingAddressOnCartOutput

Contains details about the cart after setting the billing address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the billing address. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetCartAsInactiveOutput

Sets the cart as inactive

#### Fields

| Field Name | Description |
|------------|-------------|
| `error` - [`String`](#string) | The error message returned after failing to set the cart as inactive |
| `success` - [`Boolean!`](#boolean) | Indicates whether the cart was set as inactive |

#### Example

```json
{"error": "xyz789", "success": false}
```

<HorizontalLine />

### SetCustomAttributesOnCompanyInput

Defines the company custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `custom_attributes` - [`[CustomAttributeInput]`](#customattributeinput) | An array of custom attributes for company. |
| `id` - [`ID!`](#id) | The unique ID of a &#x60;company&#x60; object. |

#### Example

```json
{
  "custom_attributes": [CustomAttributeInput],
  "id": "4"
}
```

<HorizontalLine />

### SetCustomAttributesOnCompanyOutput

Contains the company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `company` - [`Company`](#company) | The company after assigning custom attributes. |

#### Example

```json
{"company": Company}
```

<HorizontalLine />

### SetCustomAttributesOnNegotiableQuoteInput

Defines the negotiable quote custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `custom_attributes` - [`[CustomAttributeInput]`](#customattributeinput) | An array of custom attributes for NegotiableQuote. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "custom_attributes": [CustomAttributeInput],
  "quote_uid": 4
}
```

<HorizontalLine />

### SetCustomAttributesOnNegotiableQuoteOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after assigning custom attributes. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetGiftOptionsOnCartInput

Defines the gift options applied to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the shopper&#x27;s cart. |
| `gift_message` - [`GiftMessageInput`](#giftmessageinput) | Gift message details for the cart. |
| `gift_receipt_included` - [`Boolean!`](#boolean) | Whether customer requested gift receipt for the cart. |
| `gift_wrapping_id` - [`ID`](#id) | The unique ID for a &#x60;GiftWrapping&#x60; object to be used for the cart. |
| `printed_card_included` - [`Boolean!`](#boolean) | Whether customer requested printed card for the cart. |

#### Example

```json
{
  "cart_id": "xyz789",
  "gift_message": GiftMessageInput,
  "gift_receipt_included": false,
  "gift_wrapping_id": 4,
  "printed_card_included": false
}
```

<HorizontalLine />

### SetGiftOptionsOnCartOutput

Contains the cart after gift options have been applied.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The modified cart object. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetGuestEmailOnCartInput

Defines the guest email and cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `email` - [`String!`](#string) | The email address of the guest. |

#### Example

```json
{
  "cart_id": "xyz789",
  "email": "xyz789"
}
```

<HorizontalLine />

### SetGuestEmailOnCartOutput

Contains details about the cart after setting the email of a guest.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the guest email. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetLineItemNoteOutput

Contains the updated negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after sending for seller review. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetNegotiableQuoteBillingAddressInput

Sets the billing address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `billing_address` - [`NegotiableQuoteBillingAddressInput!`](#negotiablequotebillingaddressinput) | The billing address to be added. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "billing_address": NegotiableQuoteBillingAddressInput,
  "quote_uid": "4"
}
```

<HorizontalLine />

### SetNegotiableQuoteBillingAddressOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after assigning a billing address. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetNegotiableQuotePaymentMethodInput

Defines the payment method of the specified negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_method` - [`NegotiableQuotePaymentMethodInput!`](#negotiablequotepaymentmethodinput) | The payment method to be assigned to the negotiable quote. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "payment_method": NegotiableQuotePaymentMethodInput,
  "quote_uid": 4
}
```

<HorizontalLine />

### SetNegotiableQuotePaymentMethodOutput

Contains details about the negotiable quote after setting the payment method.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The updated negotiable quote. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetNegotiableQuoteShippingAddressInput

Defines the shipping address to assign to the negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddressInput]`](#negotiablequoteshippingaddressinput) | An array of shipping addresses to apply to the negotiable quote. |

#### Example

```json
{
  "quote_uid": "4",
  "shipping_addresses": [
    NegotiableQuoteShippingAddressInput
  ]
}
```

<HorizontalLine />

### SetNegotiableQuoteShippingAddressOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after assigning a shipping address. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetNegotiableQuoteShippingMethodsInput

Defines the shipping method to apply to the negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |
| `shipping_methods` - [`[ShippingMethodInput]!`](#shippingmethodinput) | An array of shipping methods to apply to the negotiable quote. |

#### Example

```json
{
  "quote_uid": "4",
  "shipping_methods": [ShippingMethodInput]
}
```

<HorizontalLine />

### SetNegotiableQuoteShippingMethodsOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after applying shipping methods. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetNegotiableQuoteTemplateShippingAddressInput

Defines the shipping address to assign to the negotiable quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `shipping_address` - [`NegotiableQuoteTemplateShippingAddressInput!`](#negotiablequotetemplateshippingaddressinput) | A shipping adadress to apply to the negotiable quote template. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "shipping_address": NegotiableQuoteTemplateShippingAddressInput,
  "template_id": "4"
}
```

<HorizontalLine />

### SetPaymentMethodOnCartInput

Applies a payment method to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `payment_method` - [`PaymentMethodInput!`](#paymentmethodinput) | The payment method data to apply to the cart. |

#### Example

```json
{
  "cart_id": "abc123",
  "payment_method": PaymentMethodInput
}
```

<HorizontalLine />

### SetPaymentMethodOnCartOutput

Contains details about the cart after setting the payment method.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the payment method. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetShippingAddressesOnCartInput

Specifies an array of addresses to use for shipping.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `shipping_addresses` - [`[ShippingAddressInput]!`](#shippingaddressinput) | An array of shipping addresses. |

#### Example

```json
{
  "cart_id": "xyz789",
  "shipping_addresses": [ShippingAddressInput]
}
```

<HorizontalLine />

### SetShippingAddressesOnCartOutput

Contains details about the cart after setting the shipping addresses.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the shipping addresses. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetShippingMethodsOnCartInput

Applies one or shipping methods to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `shipping_methods` - [`[ShippingMethodInput]!`](#shippingmethodinput) | An array of shipping methods. |

#### Example

```json
{
  "cart_id": "xyz789",
  "shipping_methods": [ShippingMethodInput]
}
```

<HorizontalLine />

### SetShippingMethodsOnCartOutput

Contains details about the cart after setting the shipping methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the shipping methods. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### ShareGiftRegistryInviteeInput

Defines a gift registry invitee.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](#string) | The email address of the gift registry invitee. |
| `name` - [`String!`](#string) | The name of the gift registry invitee. |

#### Example

```json
{
  "email": "abc123",
  "name": "xyz789"
}
```

<HorizontalLine />

### ShareGiftRegistryOutput

Contains the results of a request to share a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_shared` - [`Boolean!`](#boolean) | Indicates whether the gift registry was successfully shared. |

#### Example

```json
{"is_shared": false}
```

<HorizontalLine />

### ShareGiftRegistrySenderInput

Defines the sender of an invitation to view a gift registry.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `message` - [`String!`](#string) | A brief message from the sender. |
| `name` - [`String!`](#string) | The sender of the gift registry invitation. |

#### Example

```json
{
  "message": "abc123",
  "name": "abc123"
}
```

<HorizontalLine />

### ShareRequisitionListByEmailInput

An input object that defines which requisition list shared with company users through email.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customerUids` - [`[ID]!`](#id) | An array of IDs representing company users with whom the sender wants to share the requisition list. |
| `requisitionListUid` - [`ID!`](#id) | The unique ID of the requisition list. |

#### Example

```json
{
  "customerUids": ["4"],
  "requisitionListUid": "4"
}
```

<HorizontalLine />

### ShareRequisitionListByEmailOutput

Result of sharing a requisition list by email.

#### Fields

| Field Name | Description |
|------------|-------------|
| `sent_count` - [`Int!`](#int) | Number of notification emails successfully sent. |
| `user_errors` - [`[ShareRequisitionListUserError]!`](#sharerequisitionlistusererror) | Per-email validation or delivery issues. |

#### Example

```json
{
  "sent_count": 987,
  "user_errors": [ShareRequisitionListUserError]
}
```

<HorizontalLine />

### ShareRequisitionListByTokenOutput

The result of sharing a requisition list by token.

#### Fields

| Field Name | Description |
|------------|-------------|
| `token` - [`String!`](#string) | Token used to generate a shareable link for the requisition list. |

#### Example

```json
{"token": "xyz789"}
```

<HorizontalLine />

### ShareRequisitionListUserError

An error related to a specific recipient or constraint.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ShareRequisitionListUserErrorCode!`](#sharerequisitionlistusererrorcode) | Machine-readable error code. |
| `message` - [`String!`](#string) | Human-readable error message. |

#### Example

```json
{
  "code": "MAX_RECIPIENTS_EXCEEDED",
  "message": "abc123"
}
```

<HorizontalLine />

### ShareRequisitionListUserErrorCode

Machine-readable error codes for requisition list share-by-email and import operations.

#### Values

| Enum Value | Description |
|------------|-------------|
| `MAX_RECIPIENTS_EXCEEDED` |  |
| `INVALID_EMAIL` |  |
| `NOT_COMPANY_USER` |  |
| `IMPORT_FAILED` |  |

#### Example

```json
""MAX_RECIPIENTS_EXCEEDED""
```

<HorizontalLine />

### SharedRequisitionListOutput

Shared requisition list view for a recipient.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList!`](#requisitionlist) | The sender&#x27;s requisition list (read-only for the recipient). |
| `sender_name` - [`String!`](#string) | Display name of the requisition list sender. |

#### Example

```json
{
  "requisition_list": RequisitionList,
  "sender_name": "xyz789"
}
```

<HorizontalLine />

### ShipBundleItemsEnum

Defines whether bundle items must be shipped together.

#### Values

| Enum Value | Description |
|------------|-------------|
| `TOGETHER` |  |
| `SEPARATELY` |  |

#### Example

```json
""TOGETHER""
```

<HorizontalLine />

### ShipmentItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ShipmentItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Example

```json
{
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_shipped": 123.45
}
```

<HorizontalLine />

### ShipmentItemInterface

Order shipment item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ShipmentItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Possible Types

| ShipmentItemInterface Types |
|----------------|
| [`BundleShipmentItem`](#bundleshipmentitem) |
| [`GiftCardShipmentItem`](#giftcardshipmentitem) |
| [`ShipmentItem`](#shipmentitem) |

#### Example

```json
{
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_shipped": 987.65
}
```

<HorizontalLine />

### ShipmentTracking

Contains order shipment tracking details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `carrier` - [`String!`](#string) | The shipping carrier for the order delivery. |
| `number` - [`String`](#string) | The tracking number of the order shipment. |
| `title` - [`String!`](#string) | The shipment tracking title. |
| `tracking_url` - [`String`](#string) | The tracking URL for the shipment. Available for both built-in and custom shipping carriers when a URL template is configured. |

#### Example

```json
{
  "carrier": "abc123",
  "number": "xyz789",
  "title": "abc123",
  "tracking_url": "abc123"
}
```

<HorizontalLine />

### ShippingAdditionalData

A simple key value object.

#### Fields

| Field Name | Description |
|------------|-------------|
| `key` - [`String`](#string) |  |
| `value` - [`String`](#string) |  |

#### Example

```json
{
  "key": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### ShippingAddressInput

Defines a single shipping address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`CartAddressInput`](#cartaddressinput) | Defines a shipping address. |
| `customer_address_id` - [`Int`](#int) | An ID from the customer&#x27;s address book that uniquely identifies the address to be used for shipping. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer&#x27;s address book that uniquely identifies the address to be used for shipping. |
| `customer_notes` - [`String`](#string) | Text provided by the shopper. |
| `pickup_location_code` - [`String`](#string) | The code of Pickup Location which will be used for In-Store Pickup. |

#### Example

```json
{
  "address": CartAddressInput,
  "customer_address_id": 123,
  "customer_address_uid": "4",
  "customer_notes": "abc123",
  "pickup_location_code": "abc123"
}
```

<HorizontalLine />

### ShippingCartAddress

Contains shipping addresses and methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_shipping_methods` - [`[AvailableShippingMethod]`](#availableshippingmethod) | An array that lists the shipping methods that can be applied to the cart. |
| `cart_items_v2` - [`[CartItemInterface]`](#cartiteminterface) | An array that lists the items in the cart. |
| `city` - [`String!`](#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](#string) | The company specified for the billing or shipping address. |
| `country` - [`CartAddressCountry!`](#cartaddresscountry) | An object containing the country label and code. |
| `custom_attributes` - [`[AttributeValueInterface]!`](#attributevalueinterface) | The custom attribute values of the billing or shipping address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer&#x27;s address book that uniquely identifies the address. |
| `customer_notes` - [`String`](#string) | Text provided by the shopper. |
| `fax` - [`String`](#string) | The customer&#x27;s fax number. |
| `firstname` - [`String!`](#string) | The first name of the customer or guest. |
| `id` - [`Int`](#int) | Id of the customer address. *(Deprecated: Use &#x60;customer_address_uid&#x60; instead.)* |
| `lastname` - [`String!`](#string) | The last name of the customer or guest. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `pickup_location_code` - [`String`](#string) |  |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CartAddressRegion`](#cartaddressregion) | An object containing the region label and code. |
| `same_as_billing` - [`Boolean!`](#boolean) | Indicates whether the shipping address is same as billing address. |
| `selected_shipping_method` - [`SelectedShippingMethod`](#selectedshippingmethod) | An object that describes the selected shipping method. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |
| `uid` - [`ID!`](#id) | The unique id of the customer cart address. |
| `vat_id` - [`String`](#string) | The VAT company number for billing or shipping address. |

#### Example

```json
{
  "available_shipping_methods": [AvailableShippingMethod],
  "cart_items_v2": [CartItemInterface],
  "city": "abc123",
  "company": "xyz789",
  "country": CartAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": "4",
  "customer_notes": "abc123",
  "fax": "abc123",
  "firstname": "abc123",
  "id": 987,
  "lastname": "xyz789",
  "middlename": "xyz789",
  "pickup_location_code": "abc123",
  "postcode": "xyz789",
  "prefix": "xyz789",
  "region": CartAddressRegion,
  "same_as_billing": false,
  "selected_shipping_method": SelectedShippingMethod,
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "xyz789",
  "uid": "4",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### ShippingDiscount

Defines an individual shipping discount. This discount can be applied to shipping.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount of the discount. |

#### Example

```json
{"amount": Money}
```

<HorizontalLine />

### ShippingHandling

Contains details about shipping and handling costs.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount_excluding_tax` - [`Money`](#money) | The shipping amount, excluding tax. |
| `amount_including_tax` - [`Money`](#money) | The shipping amount, including tax. |
| `discounts` - [`[ShippingDiscount]`](#shippingdiscount) | The applied discounts to the shipping. |
| `taxes` - [`[TaxItem]`](#taxitem) | Details about taxes applied for shipping. |
| `total_amount` - [`Money!`](#money) | The total amount for shipping. |

#### Example

```json
{
  "amount_excluding_tax": Money,
  "amount_including_tax": Money,
  "discounts": [ShippingDiscount],
  "taxes": [TaxItem],
  "total_amount": Money
}
```

<HorizontalLine />

### ShippingMethodInput

Defines the shipping carrier and method.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `carrier_code` - [`String!`](#string) | A string that identifies a commercial carrier or an offline delivery method. |
| `method_code` - [`String!`](#string) | A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. |

#### Example

```json
{
  "carrier_code": "abc123",
  "method_code": "abc123"
}
```

<HorizontalLine />

### SimpleCartItem

An implementation for simple product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_gift_wrapping` - [`[GiftWrapping]!`](#giftwrapping) | The list of available gift wrapping options for the cart item. |
| `backorder_message` - [`String`](#string) | Customer-facing hint when the line is salable on notify backorders with insufficient physical quantity; null otherwise. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the cart item |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message for the cart item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the cart item. |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. *(Deprecated: Use &#x60;is_salable&#x60; instead. It indicates whether the line can be purchased, including backorder configuration.)* |
| `is_salable` - [`Boolean!`](#boolean) | True when the item can be purchased and should not block checkout: stock status is in stock and either physical quantity covers the requested quantity or backorders are allowed. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](#string) | Shortage or unavailability message for the line; null when the item is salable. |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer&#x27;s quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller&#x27;s quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "available_gift_wrapping": [GiftWrapping],
  "backorder_message": "xyz789",
  "custom_attributes": [CustomAttribute],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "is_available": false,
  "is_salable": false,
  "max_qty": 123.45,
  "min_qty": 987.65,
  "not_available_message": "abc123",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "uid": "4"
}
```

<HorizontalLine />

### SimpleProduct

Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. |
| `max_sale_qty` - [`Float`](#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_sale_qty` - [`Float`](#float) | Minimum Qty Allowed in Shopping Cart |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `quantity` - [`Float`](#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of products to be displayed in a Related Products block. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product&#x27;s thumbnail image. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | Upsell Products |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "country_of_manufacture": "xyz789",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": true,
  "gift_wrapping_available": false,
  "gift_wrapping_price": Money,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 987,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "xyz789",
  "meta_keyword": "abc123",
  "meta_title": "abc123",
  "min_sale_qty": 123.45,
  "name": "xyz789",
  "new_from_date": "abc123",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 987.65,
  "related_products": [ProductInterface],
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_price": 987.65,
  "special_to_date": "xyz789",
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "uid": "4",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "weight": 123.45
}
```

<HorizontalLine />

### SimpleProductView

Represents a single-SKU product without selectable variants. Because there are no variant combinations, pricing is returned as a single price (not a price range).

#### Fields

| Field Name | Description |
|------------|-------------|
| `addToCartAllowed` - [`Boolean`](#boolean) | A flag stating if the product can be added to cart *(Deprecated: This field is deprecated and will be removed.)* |
| `inStock` - [`Boolean`](#boolean) | A flag stating if the product is in stock *(Deprecated: This field is deprecated and will be removed.)* |
| `lowStock` - [`Boolean`](#boolean) | Indicates whether the remaining quantity of the product has reached the Only X Left threshold. *(Deprecated: This field is deprecated and will be removed.)* |
| `attributes` - [`[ProductViewAttribute]`](#productviewattribute) | A list of merchant-defined attributes designated for the storefront. They can be filtered by names and roles. |
| `description` - [`String`](#string) | The detailed description of the product. |
| `id` - [`ID!`](#id) | The product ID, generated as a composite key, unique per locale. |
| `images` - [`[ProductViewImage]`](#productviewimage) | A list of images defined for the product. Possible values include &#x60;image&#x60;, &#x60;small_image&#x60;, and &#x60;swatch&#x60;. |
| `videos` - [`[ProductViewVideo]`](#productviewvideo) | A list of videos defined for the product. |
| `inputOptions` - [`[ProductViewInputOption]`](#productviewinputoption) | A list of input options. For example, a text field, a number field or a date field. *(Deprecated: This field is deprecated and will be removed.)* |
| `lastModifiedAt` - [`DateTime`](#datetime) | Date and time when the product was last updated. |
| `metaDescription` - [`String`](#string) | A brief overview of the product for search results listings. |
| `metaKeyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `metaTitle` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | Product name. |
| `price` - [`ProductViewPrice`](#productviewprice) | Base product price view. |
| `shortDescription` - [`String`](#string) | A summary of the product. |
| `sku` - [`String`](#string) | A unique code used for identification of a product. |
| `externalId` - [`String`](#string) | External Id. For example, &#x60;123&#x60;, &#x60;456&#x60; or &#x60;789&#x60;. *(Deprecated: This field is deprecated and will be removed.)* |
| `url` - [`String`](#string) | Canonical URL of the product. For example, &#x60;https://example.com/product-1&#x60; or &#x60;https://example.com/product-2&#x60;. *(Deprecated: This field is deprecated and will be removed.)* |
| `urlKey` - [`String`](#string) | The URL key of the product. For example, &#x60;product-1&#x60;, &#x60;product-2&#x60; or &#x60;product-3&#x60;. |
| `links` - [`[ProductViewLink]`](#productviewlink) | A list of product links. For example, a related product, an up-sell product or a cross-sell product. |
| `queryType` - [`String`](#string) | Indicates if the product was retrieved from the primary or the backup query |
| `visibility` - [`String`](#string) | Visibility setting of the product |

#### Example

```json
{
  "addToCartAllowed": false,
  "inStock": true,
  "lowStock": false,
  "attributes": [ProductViewAttribute],
  "description": "abc123",
  "id": 4,
  "images": [ProductViewImage],
  "videos": [ProductViewVideo],
  "inputOptions": [ProductViewInputOption],
  "lastModifiedAt": "2007-12-03T10:15:30Z",
  "metaDescription": "xyz789",
  "metaKeyword": "abc123",
  "metaTitle": "abc123",
  "name": "abc123",
  "price": ProductViewPrice,
  "shortDescription": "abc123",
  "sku": "abc123",
  "externalId": "xyz789",
  "url": "xyz789",
  "urlKey": "xyz789",
  "links": [ProductViewLink],
  "queryType": "abc123",
  "visibility": "xyz789"
}
```

<HorizontalLine />

### SimpleRequisitionListItem

Contains details about simple products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The amount added. |
| `sku` - [`String!`](#string) | The product SKU. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 987.65,
  "sku": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### SimpleWishlistItem

Contains a simple product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface!`](#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": "4",
  "product": ProductInterface,
  "quantity": 123.45
}
```

<HorizontalLine />

### SmartButtonMethodInput

Smart button payment inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](#string) | The payment services order ID |
| `paypal_order_id` - [`String`](#string) | PayPal order ID |

#### Example

```json
{
  "payment_source": "abc123",
  "payments_order_id": "abc123",
  "paypal_order_id": "abc123"
}
```

<HorizontalLine />

### SmartButtonsConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `app_switch_when_available` - [`Boolean`](#boolean) | Indicated whether to use App Switch on enabled mobile devices |
| `button_styles` - [`ButtonStyles`](#buttonstyles) | The styles for the PayPal Smart Button configuration |
| `code` - [`String`](#string) | The payment method code as defined in the payment gateway |
| `display_message` - [`Boolean`](#boolean) | Indicates whether to display the PayPal Pay Later message |
| `display_venmo` - [`Boolean`](#boolean) | Indicates whether to display Venmo |
| `is_visible` - [`Boolean`](#boolean) | Indicates whether the payment method is displayed |
| `message_styles` - [`MessageStyles`](#messagestyles) | Contains details about the styles for the PayPal Pay Later message |
| `payment_intent` - [`String`](#string) | Defines the payment intent (Authorize or Capture |
| `sdk_params` - [`[SDKParams]`](#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](#string) | The relative order the payment method is displayed on the checkout page |
| `title` - [`String`](#string) | The name displayed for the payment method |

#### Example

```json
{
  "app_switch_when_available": true,
  "button_styles": ButtonStyles,
  "code": "abc123",
  "display_message": false,
  "display_venmo": false,
  "is_visible": false,
  "message_styles": MessageStyles,
  "payment_intent": "xyz789",
  "sdk_params": [SDKParams],
  "sort_order": "xyz789",
  "title": "xyz789"
}
```

<HorizontalLine />

### SortEnum

Indicates whether to return results in ascending or descending order.

#### Values

| Enum Value | Description |
|------------|-------------|
| `ASC` |  |
| `DESC` |  |

#### Example

```json
""ASC""
```

<HorizontalLine />

### SortField

Defines a possible sort field.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String`](#string) | The label of the sort field. |
| `value` - [`String`](#string) | The attribute code of the sort field. |

#### Example

```json
{
  "label": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### SortFields

Contains a default value for sort fields and all available sort fields.

#### Fields

| Field Name | Description |
|------------|-------------|
| `default` - [`String`](#string) | The default sort field value. |
| `options` - [`[SortField]`](#sortfield) | An array of possible sort fields. |

#### Example

```json
{
  "default": "abc123",
  "options": [SortField]
}
```

<HorizontalLine />

### SortQuoteItemsEnum

Specifies the field to use for sorting quote items

#### Values

| Enum Value | Description |
|------------|-------------|
| `ITEM_ID` |  |
| `CREATED_AT` |  |
| `UPDATED_AT` |  |
| `PRODUCT_ID` |  |
| `SKU` |  |
| `NAME` |  |
| `DESCRIPTION` |  |
| `WEIGHT` |  |
| `QTY` |  |
| `PRICE` |  |
| `BASE_PRICE` |  |
| `CUSTOM_PRICE` |  |
| `DISCOUNT_PERCENT` |  |
| `DISCOUNT_AMOUNT` |  |
| `BASE_DISCOUNT_AMOUNT` |  |
| `TAX_PERCENT` |  |
| `TAX_AMOUNT` |  |
| `BASE_TAX_AMOUNT` |  |
| `ROW_TOTAL` |  |
| `BASE_ROW_TOTAL` |  |
| `ROW_TOTAL_WITH_DISCOUNT` |  |
| `ROW_WEIGHT` |  |
| `PRODUCT_TYPE` |  |
| `BASE_TAX_BEFORE_DISCOUNT` |  |
| `TAX_BEFORE_DISCOUNT` |  |
| `ORIGINAL_CUSTOM_PRICE` |  |
| `PRICE_INC_TAX` |  |
| `BASE_PRICE_INC_TAX` |  |
| `ROW_TOTAL_INC_TAX` |  |
| `BASE_ROW_TOTAL_INC_TAX` |  |
| `DISCOUNT_TAX_COMPENSATION_AMOUNT` |  |
| `BASE_DISCOUNT_TAX_COMPENSATION_AMOUNT` |  |
| `FREE_SHIPPING` |  |

#### Example

```json
""ITEM_ID""
```

<HorizontalLine />

### SortableAttribute

Contains product attributes that be used for sorting in a `productSearch` query

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute` - [`String!`](#string) | The unique identifier for an attribute code. This value should be in lowercase letters and without space |
| `frontendInput` - [`String`](#string) | Indicates how field rendered on storefront |
| `label` - [`String`](#string) | The display name assigned to the attribute |
| `numeric` - [`Boolean`](#boolean) | Indicates whether this attribute has a numeric value, such as a price or integer |

#### Example

```json
{
  "attribute": "xyz789",
  "frontendInput": "xyz789",
  "label": "abc123",
  "numeric": true
}
```

<HorizontalLine />

### StatsBucket

For retrieving statistics across multiple buckets

#### Fields

| Field Name | Description |
|------------|-------------|
| `max` - [`Float!`](#float) | The maximum value |
| `min` - [`Float!`](#float) | The minimum value |
| `title` - [`String!`](#string) | The display text for the bucket |

#### Example

```json
{
  "max": 123.45,
  "min": 123.45,
  "title": "abc123"
}
```

<HorizontalLine />
