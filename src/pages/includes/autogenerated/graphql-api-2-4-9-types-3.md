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
  "created_at": "xyz789",
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
  "products_removed_from_catalog": ["4"],
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
{"message": "xyz789"}
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
  "code": "xyz789",
  "purchase_order_number": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteReferenceDocumentLink

Contains a reference document link for a negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `document_identifier` - [`String`](#string) | The identifier of the reference document. |
| `document_name` - [`String!`](#string) | The title of the reference document. |
| `link_id` - [`ID!`](#id) | The unique ID of a reference document link. |
| `reference_document_url` - [`String!`](#string) | The URL of the reference document. |

#### Example

```json
{
  "document_identifier": "xyz789",
  "document_name": "abc123",
  "link_id": "4",
  "reference_document_url": "abc123"
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
  "city": "abc123",
  "company": "xyz789",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "xyz789",
  "lastname": "abc123",
  "postcode": "xyz789",
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
  "customer_notes": "abc123"
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
| `reference_document_links` - [`[NegotiableQuoteReferenceDocumentLink]`](#negotiablequotereferencedocumentlink) | A list of reference document links for the negotiable quote template. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote template. |
| `status` - [`String!`](#string) | The status of the negotiable quote template. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |
| `total_quantity` - [`Float!`](#float) | The total number of items in the negotiable quote template. |

#### Example

```json
{
  "buyer": NegotiableQuoteUser,
  "comments": [NegotiableQuoteComment],
  "expiration_date": "xyz789",
  "history": [NegotiableQuoteHistoryEntry],
  "is_min_max_qty_used": true,
  "is_virtual": true,
  "items": [CartItemInterface],
  "max_order_commitment": 987,
  "min_order_commitment": 123,
  "name": "xyz789",
  "notifications": [QuoteTemplateNotificationMessage],
  "prices": CartPrices,
  "reference_document_links": [
    NegotiableQuoteReferenceDocumentLink
  ],
  "shipping_addresses": [NegotiableQuoteShippingAddress],
  "status": "xyz789",
  "template_id": "4",
  "total_quantity": 123.45
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
  "activated_at": "xyz789",
  "company_name": "abc123",
  "expiration_date": "abc123",
  "is_min_max_qty_used": true,
  "last_shared_at": "xyz789",
  "max_order_commitment": 123,
  "min_negotiated_grand_total": 123.45,
  "min_order_commitment": 987,
  "name": "xyz789",
  "orders_placed": 987,
  "sales_rep_name": "abc123",
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
{"item_id": 4, "max_qty": 123.45, "min_qty": 123.45, "quantity": 987.65}
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
  "link_id": "4",
  "reference_document_url": "xyz789"
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
{"quote_uid": "4"}
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
  "message": "xyz789",
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
{"template_id": "4"}
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
  "company": "abc123",
  "country_code": "AF",
  "custom_attributesV2": [AttributeValueInterface],
  "fax": "abc123",
  "firstname": "xyz789",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": "abc123",
  "region_id": 4,
  "street": ["abc123"],
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
  "firstname": "abc123",
  "lastname": "abc123",
  "middlename": "abc123",
  "prefix": "abc123",
  "suffix": "xyz789"
}
```

<HorizontalLine />

### OrderItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
| `prices` - [`OrderItemPrices`](#orderitemprices) | Contains details about the price of the item, including taxes and discounts. |
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
| `quantity_return_requested` - [`Float`](#float) | The requested return quantity of the item. |
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
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "xyz789",
  "quantity_canceled": 987.65,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
  "quantity_return_requested": 123.45,
  "quantity_returned": 987.65,
  "quantity_shipped": 123.45,
  "selected_options": [OrderItemOption],
  "status": "abc123"
}
```

<HorizontalLine />

### OrderItemInterface

Order item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
| `prices` - [`OrderItemPrices`](#orderitemprices) | Contains details about the price of the item, including taxes and discounts. |
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
| `quantity_return_requested` - [`Float`](#float) | The requested return quantity of the item. |
| `quantity_returned` - [`Float`](#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](#string) | The status of the order item. |

#### Possible Types

| OrderItemInterface Types |
|----------------|
| [`ConfigurableOrderItem`](#configurableorderitem) |
| [`DownloadableOrderItem`](#downloadableorderitem) |
| [`BundleOrderItem`](#bundleorderitem) |
| [`GiftCardOrderItem`](#giftcardorderitem) |
| [`OrderItem`](#orderitem) |

#### Example

```json
{
  "discounts": [Discount],
  "eligible_for_return": false,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "abc123",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 123.45,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
  "quantity_return_requested": 123.45,
  "quantity_returned": 987.65,
  "quantity_shipped": 123.45,
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
  "name": "xyz789",
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
  "id": "4",
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
| `subtotal` - [`Money!`](#money) | The subtotal of the order, excluding shipping, discounts, and taxes. *(Deprecated: Use subtotal_excl_tax field instead)* |
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
  "subtotal": Money,
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

### PayflowExpressInput

Contains required input for Payflow Express Checkout payments.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payer_id` - [`String!`](#string) | The unique ID of the PayPal user. |
| `token` - [`String!`](#string) | The token returned by the createPaypalExpressToken mutation. |

#### Example

```json
{
  "payer_id": "abc123",
  "token": "xyz789"
}
```

<HorizontalLine />

### PayflowLinkInput

A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `error_url` - [`String!`](#string) | The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. |
| `return_url` - [`String!`](#string) | The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |

#### Example

```json
{
  "cancel_url": "xyz789",
  "error_url": "abc123",
  "return_url": "xyz789"
}
```

<HorizontalLine />

### PayflowLinkMode

Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods.

#### Values

| Enum Value | Description |
|------------|-------------|
| `TEST` |  |
| `LIVE` |  |

#### Example

```json
""TEST""
```

<HorizontalLine />

### PayflowLinkToken

Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `mode` - [`PayflowLinkMode`](#payflowlinkmode) | The mode for the Payflow transaction. |
| `paypal_url` - [`String`](#string) | The PayPal URL used for requesting a Payflow form. |
| `secure_token` - [`String`](#string) | The secure token generated by PayPal. |
| `secure_token_id` - [`String`](#string) | The secure token ID generated by PayPal. |

#### Example

```json
{
  "mode": "TEST",
  "paypal_url": "xyz789",
  "secure_token": "abc123",
  "secure_token_id": "abc123"
}
```

<HorizontalLine />

### PayflowLinkTokenInput

Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |

#### Example

```json
{"cart_id": "abc123"}
```

<HorizontalLine />

### PayflowProInput

Contains input for the Payflow Pro and Payments Pro payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cc_details` - [`CreditCardDetailsInput!`](#creditcarddetailsinput) | Required input for credit card related information. |
| `is_active_payment_token_enabler` - [`Boolean`](#boolean) | Indicates whether details about the shopper&#x27;s credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. |

#### Example

```json
{
  "cc_details": CreditCardDetailsInput,
  "is_active_payment_token_enabler": true
}
```

<HorizontalLine />

### PayflowProResponseInput

Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the shopper&#x27;s cart. |
| `paypal_payload` - [`String!`](#string) | The payload returned from PayPal. |

#### Example

```json
{
  "cart_id": "abc123",
  "paypal_payload": "abc123"
}
```

<HorizontalLine />

### PayflowProResponseOutput

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart with the updated selected payment method. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### PayflowProTokenInput

Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the shopper&#x27;s cart. |
| `urls` - [`PayflowProUrlInput!`](#payflowprourlinput) | A set of relative URLs that PayPal uses for callback. |

#### Example

```json
{
  "cart_id": "abc123",
  "urls": PayflowProUrlInput
}
```

<HorizontalLine />

### PayflowProUrlInput

Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `error_url` - [`String!`](#string) | The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. |
| `return_url` - [`String!`](#string) | The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |

#### Example

```json
{
  "cancel_url": "xyz789",
  "error_url": "xyz789",
  "return_url": "xyz789"
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
| [`HostedFieldsConfig`](#hostedfieldsconfig) |
| [`SmartButtonsConfig`](#smartbuttonsconfig) |
| [`ApplePayConfig`](#applepayconfig) |
| [`GooglePayConfig`](#googlepayconfig) |
| [`FastlaneConfig`](#fastlaneconfig) |

#### Example

```json
{
  "code": "xyz789",
  "is_visible": true,
  "payment_intent": "xyz789",
  "sdk_params": [SDKParams],
  "sort_order": "xyz789",
  "title": "xyz789"
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
| `START_OF_CHECKOUT` |  |
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
| `braintree` - [`BraintreeInput`](#braintreeinput) |  |
| `braintree_ach_direct_debit` - [`BraintreeInput`](#braintreeinput) |  |
| `braintree_ach_direct_debit_vault` - [`BraintreeVaultInput`](#braintreevaultinput) |  |
| `braintree_applepay_vault` - [`BraintreeVaultInput`](#braintreevaultinput) |  |
| `braintree_cc_vault` - [`BraintreeCcVaultInput`](#braintreeccvaultinput) |  |
| `braintree_googlepay_vault` - [`BraintreeVaultInput`](#braintreevaultinput) |  |
| `braintree_paypal` - [`BraintreeInput`](#braintreeinput) |  |
| `braintree_paypal_vault` - [`BraintreeVaultInput`](#braintreevaultinput) |  |
| `code` - [`String!`](#string) | The internal name for the payment method. |
| `hosted_pro` - [`HostedProInput`](#hostedproinput) | Required input for PayPal Hosted pro payments. |
| `payflow_express` - [`PayflowExpressInput`](#payflowexpressinput) | Required input for Payflow Express Checkout payments. |
| `payflow_link` - [`PayflowLinkInput`](#payflowlinkinput) | Required input for PayPal Payflow Link and Payments Advanced payments. |
| `payflowpro` - [`PayflowProInput`](#payflowproinput) | Required input for PayPal Payflow Pro and Payment Pro payments. |
| `payflowpro_cc_vault` - [`VaultTokenInput`](#vaulttokeninput) | Required input for PayPal Payflow Pro vault payments. |
| `payment_services_paypal_apple_pay` - [`ApplePayMethodInput`](#applepaymethodinput) | Required input for Apple Pay button |
| `payment_services_paypal_fastlane` - [`FastlaneMethodInput`](#fastlanemethodinput) | Required input for fastlane |
| `payment_services_paypal_google_pay` - [`GooglePayMethodInput`](#googlepaymethodinput) | Required input for Google Pay button |
| `payment_services_paypal_hosted_fields` - [`HostedFieldsInput`](#hostedfieldsinput) | Required input for Hosted Fields |
| `payment_services_paypal_smart_buttons` - [`SmartButtonMethodInput`](#smartbuttonmethodinput) | Required input for Smart buttons |
| `payment_services_paypal_vault` - [`VaultMethodInput`](#vaultmethodinput) | Required input for vault |
| `paypal_express` - [`PaypalExpressInput`](#paypalexpressinput) | Required input for Express Checkout and Payments Standard payments. |
| `purchase_order_number` - [`String`](#string) | The purchase order number. Optional for most payment methods. |

#### Example

```json
{
  "braintree": BraintreeInput,
  "braintree_ach_direct_debit": BraintreeInput,
  "braintree_ach_direct_debit_vault": BraintreeVaultInput,
  "braintree_applepay_vault": BraintreeVaultInput,
  "braintree_cc_vault": BraintreeCcVaultInput,
  "braintree_googlepay_vault": BraintreeVaultInput,
  "braintree_paypal": BraintreeInput,
  "braintree_paypal_vault": BraintreeVaultInput,
  "code": "abc123",
  "hosted_pro": HostedProInput,
  "payflow_express": PayflowExpressInput,
  "payflow_link": PayflowLinkInput,
  "payflowpro": PayflowProInput,
  "payflowpro_cc_vault": VaultTokenInput,
  "payment_services_paypal_apple_pay": ApplePayMethodInput,
  "payment_services_paypal_fastlane": FastlaneMethodInput,
  "payment_services_paypal_google_pay": GooglePayMethodInput,
  "payment_services_paypal_hosted_fields": HostedFieldsInput,
  "payment_services_paypal_smart_buttons": SmartButtonMethodInput,
  "payment_services_paypal_vault": VaultMethodInput,
  "paypal_express": PaypalExpressInput,
  "purchase_order_number": "xyz789"
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
  "mp_order_id": "xyz789",
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
  "code": "xyz789",
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

### PaypalExpressInput

Contains required input for Express Checkout and Payments Standard payments.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payer_id` - [`String!`](#string) | The unique ID of the PayPal user. |
| `token` - [`String!`](#string) | The token returned by the &#x60;createPaypalExpressToken&#x60; mutation. |

#### Example

```json
{
  "payer_id": "xyz789",
  "token": "xyz789"
}
```

<HorizontalLine />

### PaypalExpressTokenInput

Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |
| `code` - [`String!`](#string) | The payment method code. |
| `express_button` - [`Boolean`](#boolean) | Indicates whether the buyer selected the quick checkout button. The default value is false. |
| `urls` - [`PaypalExpressUrlsInput!`](#paypalexpressurlsinput) | A set of relative URLs that PayPal uses in response to various actions during the authorization process. |
| `use_paypal_credit` - [`Boolean`](#boolean) | Indicates whether the buyer clicked the PayPal credit button. The default value is false. |

#### Example

```json
{
  "cart_id": "xyz789",
  "code": "xyz789",
  "express_button": true,
  "urls": PaypalExpressUrlsInput,
  "use_paypal_credit": false
}
```

<HorizontalLine />

### PaypalExpressTokenOutput

Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `paypal_urls` - [`PaypalExpressUrlList`](#paypalexpressurllist) | A set of URLs that allow the buyer to authorize payment and adjust checkout details. |
| `token` - [`String`](#string) | The token returned by PayPal. |

#### Example

```json
{
  "paypal_urls": PaypalExpressUrlList,
  "token": "abc123"
}
```

<HorizontalLine />

### PaypalExpressUrlList

Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions.

#### Fields

| Field Name | Description |
|------------|-------------|
| `edit` - [`String`](#string) | The PayPal URL that allows the buyer to edit their checkout details. |
| `start` - [`String`](#string) | The URL to the PayPal login page. |

#### Example

```json
{
  "edit": "xyz789",
  "start": "xyz789"
}
```

<HorizontalLine />

### PaypalExpressUrlsInput

Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `pending_url` - [`String`](#string) | The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. |
| `return_url` - [`String!`](#string) | The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |
| `success_url` - [`String`](#string) | The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. |

#### Example

```json
{
  "cancel_url": "abc123",
  "pending_url": "xyz789",
  "return_url": "abc123",
  "success_url": "xyz789"
}
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
| [`SimpleProduct`](#simpleproduct) |
| [`ConfigurableProduct`](#configurableproduct) |
| [`BundleProduct`](#bundleproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`GroupedProduct`](#groupedproduct) |

#### Example

```json
{"weight": 987.65}
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
  "email": "abc123",
  "fax": "xyz789",
  "latitude": 987.65,
  "longitude": 987.65,
  "name": "abc123",
  "phone": "abc123",
  "pickup_location_code": "xyz789",
  "postcode": "xyz789",
  "region": "xyz789",
  "region_id": 123,
  "street": "abc123"
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
  "message": "xyz789"
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
{"cart_id": "abc123"}
```

<HorizontalLine />

### PlaceOrderOutput

Contains the results of the request to place an order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[PlaceOrderError]`](#placeordererror) | An array of place order errors. |
| `order` - [`Order`](#order) | The ID of the order. *(Deprecated: Use &#x60;orderV2&#x60; instead.)* |
| `orderV2` - [`CustomerOrder`](#customerorder) | Full order information. |

#### Example

```json
{
  "errors": [PlaceOrderError],
  "order": Order,
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

Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments.

#### Fields

| Field Name | Description |
|------------|-------------|
| `adjustments` - [`[PriceAdjustment]`](#priceadjustment) | An array that provides information about tax, weee, or weee_tax adjustments. *(Deprecated: Use &#x60;ProductPrice&#x60; instead.)* |
| `amount` - [`Money`](#money) | The price of a product plus a three-letter currency code. *(Deprecated: Use &#x60;ProductPrice&#x60; instead.)* |

#### Example

```json
{
  "adjustments": [PriceAdjustment],
  "amount": Money
}
```

<HorizontalLine />

### PriceAdjustment

Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](#money) | The amount of the price adjustment and its currency code. |
| `code` - [`PriceAdjustmentCodesEnum`](#priceadjustmentcodesenum) | Indicates whether the adjustment involves tax, weee, or weee_tax. *(Deprecated: &#x60;PriceAdjustment&#x60; is deprecated.)* |
| `description` - [`PriceAdjustmentDescriptionEnum`](#priceadjustmentdescriptionenum) | Indicates whether the entity described by the code attribute is included or excluded from the adjustment. *(Deprecated: &#x60;PriceAdjustment&#x60; is deprecated.)* |

#### Example

```json
{
  "amount": Money,
  "code": "TAX",
  "description": "INCLUDED"
}
```

<HorizontalLine />

### PriceAdjustmentCodesEnum

`PriceAdjustment.code` is deprecated.

#### Values

| Enum Value | Description |
|------------|-------------|
| `TAX` |  *(Deprecated: &#x60;PriceAdjustmentCodesEnum&#x60; is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog.)* |
| `WEEE` |  *(Deprecated: WEEE code is deprecated. Use &#x60;fixed_product_taxes.label&#x60; instead.)* |
| `WEEE_TAX` |  *(Deprecated: Use &#x60;fixed_product_taxes&#x60; instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog.)* |

#### Example

```json
""TAX""
```

<HorizontalLine />

### PriceAdjustmentDescriptionEnum

`PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded.

#### Values

| Enum Value | Description |
|------------|-------------|
| `INCLUDED` |  |
| `EXCLUDED` |  |

#### Example

```json
""INCLUDED""
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
  "discount_percentage": 987.65,
  "main_final_price": 123.45,
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
  "value": "abc123"
}
```

<HorizontalLine />

### ProductAttributeFilterInput

Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `category_id` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Deprecated: use &#x60;category_uid&#x60; to filter product by category ID. |
| `category_uid` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter product by the unique ID for a &#x60;CategoryInterface&#x60; object. |
| `category_url_path` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter product by category URL path. |
| `description` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Attribute label: Description |
| `name` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Attribute label: Product Name |
| `price` - [`FilterRangeTypeInput`](#filterrangetypeinput) | Attribute label: Price |
| `short_description` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Attribute label: Short Description |
| `sku` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: SKU |
| `url_key` - [`FilterEqualTypeInput`](#filterequaltypeinput) | The part of the URL that identifies the product |

#### Example

```json
{
  "category_id": FilterEqualTypeInput,
  "category_uid": FilterEqualTypeInput,
  "category_url_path": FilterEqualTypeInput,
  "description": FilterMatchTypeInput,
  "name": FilterMatchTypeInput,
  "price": FilterRangeTypeInput,
  "short_description": FilterMatchTypeInput,
  "sku": FilterEqualTypeInput,
  "url_key": FilterEqualTypeInput
}
```

<HorizontalLine />

### ProductAttributeSortInput

Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `name` - [`SortEnum`](#sortenum) | Attribute label: Product Name |
| `position` - [`SortEnum`](#sortenum) | Sort by the position assigned to each product. |
| `price` - [`SortEnum`](#sortenum) | Attribute label: Price |
| `relevance` - [`SortEnum`](#sortenum) | Sort by the search relevance score (default). |

#### Example

```json
{"name": "ASC", "position": "ASC", "price": "ASC", "relevance": "ASC"}
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
{"amount_off": 123.45, "percent_off": 987.65}
```

<HorizontalLine />

### ProductFilterInput

ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `category_id` - [`FilterTypeInput`](#filtertypeinput) | The category ID the product belongs to. |
| `country_of_manufacture` - [`FilterTypeInput`](#filtertypeinput) | The product&#x27;s country of origin. |
| `created_at` - [`FilterTypeInput`](#filtertypeinput) | The timestamp indicating when the product was created. |
| `custom_layout` - [`FilterTypeInput`](#filtertypeinput) | The name of a custom layout. |
| `custom_layout_update` - [`FilterTypeInput`](#filtertypeinput) | XML code that is applied as a layout update to the product page. |
| `description` - [`FilterTypeInput`](#filtertypeinput) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`FilterTypeInput`](#filtertypeinput) | Indicates whether a gift message is available. |
| `has_options` - [`FilterTypeInput`](#filtertypeinput) | Indicates whether additional attributes have been created for the product. |
| `image` - [`FilterTypeInput`](#filtertypeinput) | The relative path to the main image on the product page. |
| `image_label` - [`FilterTypeInput`](#filtertypeinput) | The label assigned to a product image. |
| `is_returnable` - [`FilterTypeInput`](#filtertypeinput) | Indicates whether the product can be returned. |
| `manufacturer` - [`FilterTypeInput`](#filtertypeinput) | A number representing the product&#x27;s manufacturer. |
| `max_price` - [`FilterTypeInput`](#filtertypeinput) | The numeric maximal price of the product. Do not include the currency code. |
| `meta_description` - [`FilterTypeInput`](#filtertypeinput) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`FilterTypeInput`](#filtertypeinput) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`FilterTypeInput`](#filtertypeinput) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_price` - [`FilterTypeInput`](#filtertypeinput) | The numeric minimal price of the product. Do not include the currency code. |
| `name` - [`FilterTypeInput`](#filtertypeinput) | The product name. Customers use this name to identify the product. |
| `news_from_date` - [`FilterTypeInput`](#filtertypeinput) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `news_to_date` - [`FilterTypeInput`](#filtertypeinput) | The end date for new product listings. |
| `options_container` - [`FilterTypeInput`](#filtertypeinput) | If the product has multiple options, determines where they appear on the product page. |
| `or` - [`ProductFilterInput`](#productfilterinput) | The keyword required to perform a logical OR comparison. |
| `price` - [`FilterTypeInput`](#filtertypeinput) | The price of an item. |
| `required_options` - [`FilterTypeInput`](#filtertypeinput) | Indicates whether the product has required options. |
| `short_description` - [`FilterTypeInput`](#filtertypeinput) | A short description of the product. Its use depends on the theme. |
| `sku` - [`FilterTypeInput`](#filtertypeinput) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`FilterTypeInput`](#filtertypeinput) | The relative path to the small image, which is used on catalog pages. |
| `small_image_label` - [`FilterTypeInput`](#filtertypeinput) | The label assigned to a product&#x27;s small image. |
| `special_from_date` - [`FilterTypeInput`](#filtertypeinput) | The beginning date that a product has a special price. |
| `special_price` - [`FilterTypeInput`](#filtertypeinput) | The discounted price of the product. Do not include the currency code. |
| `special_to_date` - [`FilterTypeInput`](#filtertypeinput) | The end date that a product has a special price. |
| `swatch_image` - [`FilterTypeInput`](#filtertypeinput) | The file name of a swatch image. |
| `thumbnail` - [`FilterTypeInput`](#filtertypeinput) | The relative path to the product&#x27;s thumbnail image. |
| `thumbnail_label` - [`FilterTypeInput`](#filtertypeinput) | The label assigned to a product&#x27;s thumbnail image. |
| `tier_price` - [`FilterTypeInput`](#filtertypeinput) | The price when tier pricing is in effect and the items purchased threshold has been reached. |
| `updated_at` - [`FilterTypeInput`](#filtertypeinput) | The timestamp indicating when the product was updated. |
| `url_key` - [`FilterTypeInput`](#filtertypeinput) | The part of the URL that identifies the product |
| `url_path` - [`FilterTypeInput`](#filtertypeinput) |  |
| `weight` - [`FilterTypeInput`](#filtertypeinput) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "category_id": FilterTypeInput,
  "country_of_manufacture": FilterTypeInput,
  "created_at": FilterTypeInput,
  "custom_layout": FilterTypeInput,
  "custom_layout_update": FilterTypeInput,
  "description": FilterTypeInput,
  "gift_message_available": FilterTypeInput,
  "has_options": FilterTypeInput,
  "image": FilterTypeInput,
  "image_label": FilterTypeInput,
  "is_returnable": FilterTypeInput,
  "manufacturer": FilterTypeInput,
  "max_price": FilterTypeInput,
  "meta_description": FilterTypeInput,
  "meta_keyword": FilterTypeInput,
  "meta_title": FilterTypeInput,
  "min_price": FilterTypeInput,
  "name": FilterTypeInput,
  "news_from_date": FilterTypeInput,
  "news_to_date": FilterTypeInput,
  "options_container": FilterTypeInput,
  "or": ProductFilterInput,
  "price": FilterTypeInput,
  "required_options": FilterTypeInput,
  "short_description": FilterTypeInput,
  "sku": FilterTypeInput,
  "small_image": FilterTypeInput,
  "small_image_label": FilterTypeInput,
  "special_from_date": FilterTypeInput,
  "special_price": FilterTypeInput,
  "special_to_date": FilterTypeInput,
  "swatch_image": FilterTypeInput,
  "thumbnail": FilterTypeInput,
  "thumbnail_label": FilterTypeInput,
  "tier_price": FilterTypeInput,
  "updated_at": FilterTypeInput,
  "url_key": FilterTypeInput,
  "url_path": FilterTypeInput,
  "weight": FilterTypeInput
}
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
| `types` - [`[String]`](#string) | Array of image types. It can have the following values: image, small_image, thumbnail. |
| `url` - [`String`](#string) | The URL of the product image or video. |

#### Example

```json
{
  "disabled": false,
  "label": "xyz789",
  "position": 123,
  "types": ["xyz789"],
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
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `max_sale_qty` - [`Float`](#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_sale_qty` - [`Float`](#float) | Minimum Qty Allowed in Shopping Cart |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `quantity` - [`Float`](#float) | Amount of available stock |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
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
| `type_id` - [`String`](#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use &#x60;__typename&#x60; instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](#string) |  *(Deprecated: Use product&#x27;s &#x60;canonical_url&#x60; or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |

#### Possible Types

| ProductInterface Types |
|----------------|
| [`VirtualProduct`](#virtualproduct) |
| [`SimpleProduct`](#simpleproduct) |
| [`ConfigurableProduct`](#configurableproduct) |
| [`DownloadableProduct`](#downloadableproduct) |
| [`BundleProduct`](#bundleproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`GroupedProduct`](#groupedproduct) |

#### Example

```json
{
  "attribute_set_id": 123,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "color": 987,
  "country_of_manufacture": "abc123",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": true,
  "gift_wrapping_available": true,
  "gift_wrapping_price": Money,
  "id": 987,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 987,
  "max_sale_qty": 987.65,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "xyz789",
  "meta_keyword": "abc123",
  "meta_title": "xyz789",
  "min_sale_qty": 987.65,
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 987.65,
  "options_container": "xyz789",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 123.45,
  "rating_summary": 123.45,
  "related_products": [ProductInterface],
  "review_count": 123,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "xyz789",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 123.45,
  "special_to_date": "abc123",
  "staged": false,
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "tier_price": 987.65,
  "tier_prices": [ProductTierPrices],
  "type_id": "xyz789",
  "uid": "4",
  "updated_at": "xyz789",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "xyz789",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website]
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
  "link_type": "abc123",
  "linked_product_sku": "xyz789",
  "linked_product_type": "xyz789",
  "position": 123,
  "sku": "abc123"
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
  "linked_product_sku": "xyz789",
  "linked_product_type": "abc123",
  "position": 123,
  "sku": "abc123"
}
```

<HorizontalLine />

### ProductMediaGalleryEntriesContent

Contains an image in base64 format and basic information about the image.

#### Fields

| Field Name | Description |
|------------|-------------|
| `base64_encoded_data` - [`String`](#string) | The image in base64 format. |
| `name` - [`String`](#string) | The file name of the image. |
| `type` - [`String`](#string) | The MIME type of the file, such as image/png. |

#### Example

```json
{
  "base64_encoded_data": "abc123",
  "name": "xyz789",
  "type": "abc123"
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
  "video_description": "xyz789",
  "video_metadata": "xyz789",
  "video_provider": "abc123",
  "video_title": "abc123",
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

### ProductPrices

Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `maximalPrice` - [`Price`](#price) | The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the &#x60;to&#x60; value. *(Deprecated: Use &#x60;PriceRange.maximum_price&#x60; instead.)* |
| `minimalPrice` - [`Price`](#price) | The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the &#x60;from&#x60; value. *(Deprecated: Use &#x60;PriceRange.minimum_price&#x60; instead.)* |
| `regularPrice` - [`Price`](#price) | The base price of a product. *(Deprecated: Use &#x60;regular_price&#x60; from &#x60;PriceRange.minimum_price&#x60; or &#x60;PriceRange.maximum_price&#x60; instead.)* |

#### Example

```json
{
  "maximalPrice": Price,
  "minimalPrice": Price,
  "regularPrice": Price
}
```

<HorizontalLine />

### ProductReview

Contains details of a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `average_rating` - [`Float!`](#float) | The average of all ratings for this product. |
| `created_at` - [`String!`](#string) | The date the review was created. |
| `nickname` - [`String!`](#string) | The customer&#x27;s nickname. Defaults to the customer name, if logged in. |
| `product` - [`ProductInterface!`](#productinterface) | The reviewed product. |
| `ratings_breakdown` - [`[ProductReviewRating]!`](#productreviewrating) | An array of ratings by rating category, such as quality, price, and value. |
| `summary` - [`String!`](#string) | The summary (title) of the review. |
| `text` - [`String!`](#string) | The review text. |

#### Example

```json
{
  "average_rating": 987.65,
  "created_at": "abc123",
  "nickname": "abc123",
  "product": ProductInterface,
  "ratings_breakdown": [ProductReviewRating],
  "summary": "xyz789",
  "text": "xyz789"
}
```

<HorizontalLine />

### ProductReviewRating

Contains data about a single aspect of a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String!`](#string) | The label assigned to an aspect of a product that is being rated, such as quality or price. |
| `value` - [`String!`](#string) | The rating value given by customer. By default, possible values range from 1 to 5. |

#### Example

```json
{
  "name": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### ProductReviewRatingInput

Contains the reviewer's rating for a single aspect of a review.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `id` - [`String!`](#string) | An encoded rating ID. |
| `value_id` - [`String!`](#string) | An encoded rating value ID. |

#### Example

```json
{
  "id": "abc123",
  "value_id": "xyz789"
}
```

<HorizontalLine />

### ProductReviewRatingMetadata

Contains details about a single aspect of a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`String!`](#string) | An encoded rating ID. |
| `name` - [`String!`](#string) | The label assigned to an aspect of a product that is being rated, such as quality or price. |
| `values` - [`[ProductReviewRatingValueMetadata]!`](#productreviewratingvaluemetadata) | List of product review ratings sorted by position. |

#### Example

```json
{
  "id": "xyz789",
  "name": "abc123",
  "values": [ProductReviewRatingValueMetadata]
}
```

<HorizontalLine />

### ProductReviewRatingValueMetadata

Contains details about a single value in a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `value` - [`String!`](#string) | A ratings scale, such as the number of stars awarded. |
| `value_id` - [`String!`](#string) | An encoded rating value ID. |

#### Example

```json
{
  "value": "abc123",
  "value_id": "xyz789"
}
```

<HorizontalLine />

### ProductReviewRatingsMetadata

Contains an array of metadata about each aspect of a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[ProductReviewRatingMetadata]!`](#productreviewratingmetadata) | An array of product reviews sorted by position. |

#### Example

```json
{"items": [ProductReviewRatingMetadata]}
```

<HorizontalLine />

### ProductReviews

Contains an array of product reviews.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[ProductReview]!`](#productreview) | An array of product reviews. |
| `page_info` - [`SearchResultPageInfo!`](#searchresultpageinfo) | Metadata for pagination rendering. |

#### Example

```json
{
  "items": [ProductReview],
  "page_info": SearchResultPageInfo
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

### ProductTierPrices

Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customer_group_id` - [`String`](#string) | The ID of the customer group. *(Deprecated: Not relevant for the storefront.)* |
| `percentage_value` - [`Float`](#float) | The percentage discount of the item. *(Deprecated: Use &#x60;TierPrice.discount&#x60; instead.)* |
| `qty` - [`Float`](#float) | The number of items that must be purchased to qualify for tier pricing. *(Deprecated: Use &#x60;TierPrice.quantity&#x60; instead.)* |
| `value` - [`Float`](#float) | The price of the fixed price item. *(Deprecated: Use &#x60;TierPrice.final_price&#x60; instead.)* |
| `website_id` - [`Float`](#float) | The ID assigned to the website. *(Deprecated: Not relevant for the storefront.)* |

#### Example

```json
{
  "customer_group_id": "abc123",
  "percentage_value": 123.45,
  "qty": 123.45,
  "value": 123.45,
  "website_id": 123.45
}
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
| `types` - [`[String]`](#string) | Array of image types. It can have the following values: image, small_image, thumbnail. |
| `url` - [`String`](#string) | The URL of the product image or video. |
| `video_content` - [`ProductMediaGalleryEntriesVideoContent`](#productmediagalleryentriesvideocontent) | Contains a &#x60;ProductMediaGalleryEntriesVideoContent&#x60; object. |

#### Example

```json
{
  "disabled": true,
  "label": "abc123",
  "position": 123,
  "types": ["abc123"],
  "url": "xyz789",
  "video_content": ProductMediaGalleryEntriesVideoContent
}
```

<HorizontalLine />

### Products

Contains the results of a `products` query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `aggregations` - [`[Aggregation]`](#aggregation) | A bucket that contains the attribute code and label for each filterable option. |
| `filters` - [`[LayerFilter]`](#layerfilter) | Layered navigation filters array. *(Deprecated: Use &#x60;aggregations&#x60; instead.)* |
| `items` - [`[ProductInterface]`](#productinterface) | An array of products that match the specified search criteria. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | An object that includes the page_info and currentPage values specified in the query. |
| `sort_fields` - [`SortFields`](#sortfields) | An object that includes the default sort field and all available sort fields. |
| `suggestions` - [`[SearchSuggestion]`](#searchsuggestion) | An array of search suggestions for case when search query have no results. |
| `total_count` - [`Int`](#int) | The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. |

#### Example

```json
{
  "aggregations": [Aggregation],
  "filters": [LayerFilter],
  "items": [ProductInterface],
  "page_info": SearchResultPageInfo,
  "sort_fields": SortFields,
  "suggestions": [SearchSuggestion],
  "total_count": 987
}
```

<HorizontalLine />

### PurchaseOrder

Contains details about a purchase order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `approval_flow` - [`[PurchaseOrderRuleApprovalFlow]!`](#purchaseorderruleapprovalflow) | The approval flows for each applied rules. |
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
  "created_at": "xyz789",
  "created_by": Customer,
  "history_log": [PurchaseOrderHistoryItem],
  "number": "abc123",
  "order": CustomerOrder,
  "quote": Cart,
  "status": "PENDING",
  "uid": 4,
  "updated_at": "xyz789"
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
{"message": "xyz789", "type": "NOT_FOUND"}
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
  "message": "abc123",
  "name": "xyz789",
  "role": "xyz789",
  "status": "PENDING",
  "updated_at": "xyz789"
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
  "created_at": "abc123",
  "created_by": "abc123",
  "description": "xyz789",
  "name": "xyz789",
  "status": "ENABLED",
  "uid": 4,
  "updated_at": "abc123"
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
  "description": "abc123",
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
  "total_count": 987
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
  "created_at": "abc123",
  "text": "xyz789",
  "uid": "4"
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
  "created_at": "abc123",
  "message": "xyz789",
  "uid": "4"
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
  "rule_name": "xyz789"
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
{"purchase_order_uids": [4]}
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
| `require_my_approval` - [`Boolean`](#boolean) | Include only purchase orders that are waiting for the customer’s approval. |
| `status` - [`PurchaseOrderStatus`](#purchaseorderstatus) | Filter by the status of the purchase order. |

#### Example

```json
{
  "company_purchase_orders": true,
  "created_date": FilterRangeTypeInput,
  "require_my_approval": true,
  "status": "PENDING"
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

### QuoteTemplateLineItemNoteInput

Sets quote item note.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `item_id` - [`ID!`](#id) | The unique ID of a &#x60;CartLineItem&#x60; object. |
| `note` - [`String`](#string) | The note text to be added. |
| `templateId` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{
  "item_id": 4,
  "note": "xyz789",
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
  "is_enabled": false
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
  "badge_position": "abc123",
  "language_code": "abc123",
  "minimum_score": 123.45,
  "re_captcha_type": "INVISIBLE",
  "technical_failure_message": "xyz789",
  "theme": "xyz789",
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
  "failure_message": "xyz789",
  "forms": ["PLACE_ORDER"],
  "is_enabled": false,
  "language_code": "abc123",
  "minimum_score": 123.45,
  "theme": "abc123",
  "website_key": "xyz789"
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

#### Example

```json
""INVISIBLE""
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
  "id": 123,
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
{"cart_id": "xyz789"}
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
  "gift_card_code": "abc123"
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
{"success": true}
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
| `cart_item_id` - [`Int`](#int) | Deprecated. Use &#x60;cart_item_uid&#x60; instead. |
| `cart_item_uid` - [`ID`](#id) | Required field. The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "cart_id": "abc123",
  "cart_item_id": 123,
  "cart_item_uid": 4
}
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
{"quote_item_uids": [4], "quote_uid": 4}
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
{
  "item_uids": ["4"],
  "template_id": "4"
}
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
{"products": ["4"], "uid": 4}
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
{"return_shipping_tracking_uid": "4"}
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
{"cart_id": "xyz789"}
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
  "quote_name": "xyz789",
  "quote_uid": 4
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
  "contact_email": "xyz789",
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
  "cart_id": 4,
  "comment": NegotiableQuoteCommentInput,
  "is_draft": false,
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
  "order_uid": 4
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
  "order_item_uid": 4,
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
| `items` - [`RequistionListItems`](#requistionlistitems) | An array of products added to the requisition list. *(Deprecated: Deprecated. Use requisition_list_items instead. Will be removed in a future release.)* |
| `items_count` - [`Int!`](#int) | The number of items in the list. |
| `name` - [`String!`](#string) | The requisition list name. |
| `requisition_list_items` - [`RequisitionListItems`](#requisitionlistitems) | An array of products added to the requisition list. |
| `uid` - [`ID!`](#id) | The unique requisition list ID. |
| `updated_at` - [`String`](#string) | The time of the last modification of the requisition list. |

#### Example

```json
{
  "description": "xyz789",
  "items": RequistionListItems,
  "items_count": 987,
  "name": "abc123",
  "requisition_list_items": RequisitionListItems,
  "uid": 4,
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
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The amount added. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Possible Types

| RequisitionListItemInterface Types |
|----------------|
| [`SimpleRequisitionListItem`](#simplerequisitionlistitem) |
| [`VirtualRequisitionListItem`](#virtualrequisitionlistitem) |
| [`DownloadableRequisitionListItem`](#downloadablerequisitionlistitem) |
| [`BundleRequisitionListItem`](#bundlerequisitionlistitem) |
| [`ConfigurableRequisitionListItem`](#configurablerequisitionlistitem) |
| [`GiftCardRequisitionListItem`](#giftcardrequisitionlistitem) |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### RequisitionListItems

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

### RequisitionLists

Defines customer requisition lists.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[RequisitionList]`](#requisitionlist) | An array of requisition lists. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `total_count` - [`Int`](#int) | The number of returned requisition lists. |

#### Example

```json
{
  "items": [RequisitionList],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### RequistionListItems

Deprecated. Use RequisitionListItems via requisition_list_items. Will be removed in a future release.

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
  "number": "xyz789",
  "order": CustomerOrder,
  "shipping": ReturnShipping,
  "status": "PENDING",
  "uid": "4"
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
  "created_at": "xyz789",
  "text": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### ReturnCustomAttribute

Contains details about a `ReturnCustomerAttribute` object.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | A description of the attribute. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnCustomAttribute&#x60; object. |
| `value` - [`String!`](#string) | A JSON-encoded value of the attribute. |

#### Example

```json
{
  "label": "xyz789",
  "uid": 4,
  "value": "xyz789"
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
  "firstname": "abc123",
  "lastname": "xyz789"
}
```

<HorizontalLine />

### ReturnItem

Contains details about a product being returned.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[ReturnCustomAttribute]`](#returncustomattribute) | Return item custom attributes that are visible on the storefront. *(Deprecated: Use custom_attributesV2 instead.)* |
| `custom_attributesV2` - [`[AttributeValueInterface]`](#attributevalueinterface) | Custom attributes that are visible on the storefront. |
| `order_item` - [`OrderItemInterface!`](#orderiteminterface) | Provides access to the product being returned, including information about selected and entered options. |
| `quantity` - [`Float!`](#float) | The quantity of the item the merchant authorized to be returned. |
| `request_quantity` - [`Float!`](#float) | The quantity of the item requested to be returned. |
| `status` - [`ReturnItemStatus!`](#returnitemstatus) | The return status of the item. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnItem&#x60; object. |

#### Example

```json
{
  "custom_attributes": [ReturnCustomAttribute],
  "custom_attributesV2": [AttributeValueInterface],
  "order_item": OrderItemInterface,
  "quantity": 987.65,
  "request_quantity": 123.45,
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
  "is_required": true,
  "is_unique": false,
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
  "city": "abc123",
  "contact_name": "xyz789",
  "country": Country,
  "postcode": "xyz789",
  "region": Region,
  "street": ["xyz789"],
  "telephone": "xyz789"
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
{"text": "abc123", "type": "INFORMATION"}
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
{"result": true}
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
{"money": Money, "points": 123.45}
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
  "date": "xyz789",
  "points_change": 123.45
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

### RoutableInterface

Routable entities serve as the model for a rendered page.

#### Fields

| Field Name | Description |
|------------|-------------|
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |

#### Possible Types

| RoutableInterface Types |
|----------------|
| [`CmsPage`](#cmspage) |
| [`CategoryTree`](#categorytree) |
| [`VirtualProduct`](#virtualproduct) |
| [`SimpleProduct`](#simpleproduct) |
| [`RoutableUrl`](#routableurl) |
| [`ConfigurableProduct`](#configurableproduct) |
| [`DownloadableProduct`](#downloadableproduct) |
| [`BundleProduct`](#bundleproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`GroupedProduct`](#groupedproduct) |

#### Example

```json
{
  "redirect_code": 987,
  "relative_url": "abc123",
  "type": "CMS_PAGE"
}
```

<HorizontalLine />

### RoutableUrl

Default implementation of RoutableInterface. This type is returned when the URL is not linked to an entity.

#### Fields

| Field Name | Description |
|------------|-------------|
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |

#### Example

```json
{
  "redirect_code": 987,
  "relative_url": "xyz789",
  "type": "CMS_PAGE"
}
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
  "message": "abc123",
  "timestamp": "abc123"
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
{"current_page": 123, "page_size": 987, "total_pages": 987}
```

<HorizontalLine />

### SearchSuggestion

A string that contains search suggestion

#### Fields

| Field Name | Description |
|------------|-------------|
| `search` - [`String!`](#string) | The search suggestion of existing product. |

#### Example

```json
{"search": "abc123"}
```

<HorizontalLine />

### SelectedBundleOption

Contains details about a selected bundle option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `label` - [`String!`](#string) | The display name of the selected bundle product option. |
| `type` - [`String!`](#string) | The type of selected bundle product option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;SelectedBundleOption&#x60; object |
| `values` - [`[SelectedBundleOptionValue]!`](#selectedbundleoptionvalue) | An array of selected bundle option values. |

#### Example

```json
{
  "id": 987,
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
| `id` - [`Int!`](#int) | Use &#x60;uid&#x60; instead |
| `label` - [`String!`](#string) | The display name of the value for the selected bundle product option. |
| `original_price` - [`Money!`](#money) | The original price of the value for the selected bundle product option. |
| `price` - [`Float!`](#float) | The price of the value for the selected bundle product option. *(Deprecated: Use priceV2 instead.)* |
| `priceV2` - [`Money!`](#money) | The price of the value for the selected bundle product option. |
| `quantity` - [`Float!`](#float) | The quantity of the value for the selected bundle product option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;SelectedBundleOptionValue&#x60; object |

#### Example

```json
{
  "id": 123,
  "label": "xyz789",
  "original_price": Money,
  "price": 123.45,
  "priceV2": Money,
  "quantity": 987.65,
  "uid": "4"
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
| `id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;SelectedConfigurableOption.configurable_product_option_uid&#x60; instead.)* |
| `option_label` - [`String!`](#string) | The display text for the option. |
| `value_id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;SelectedConfigurableOption.configurable_product_option_value_uid&#x60; instead.)* |
| `value_label` - [`String!`](#string) | The display name of the selected configurable option. |

#### Example

```json
{
  "configurable_product_option_uid": 4,
  "configurable_product_option_value_uid": "4",
  "id": 123,
  "option_label": "abc123",
  "value_id": 987,
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
  "attribute_code": "xyz789",
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
| `id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;SelectedCustomizableOption.customizable_option_uid&#x60; instead.)* |
| `is_required` - [`Boolean!`](#boolean) | Indicates whether the customizable option is required. |
| `label` - [`String!`](#string) | The display name of the selected customizable option. |
| `sort_order` - [`Int!`](#int) | A value indicating the order to display this option. |
| `type` - [`String!`](#string) | The type of &#x60;CustomizableOptionInterface&#x60; object. |
| `values` - [`[SelectedCustomizableOptionValue]!`](#selectedcustomizableoptionvalue) | An array of selectable values. |

#### Example

```json
{
  "customizable_option_uid": "4",
  "id": 123,
  "is_required": true,
  "label": "abc123",
  "sort_order": 123,
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
| `id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;SelectedCustomizableOptionValue.customizable_option_value_uid&#x60; instead.)* |
| `label` - [`String!`](#string) | The display name of the selected value. |
| `price` - [`CartItemSelectedOptionValuePrice!`](#cartitemselectedoptionvalueprice) | The price of the selected customizable value. |
| `value` - [`String!`](#string) | The text identifying the selected value. |

#### Example

```json
{
  "customizable_option_value_uid": "4",
  "id": 987,
  "label": "xyz789",
  "price": CartItemSelectedOptionValuePrice,
  "value": "xyz789"
}
```

<HorizontalLine />

### SelectedPaymentMethod

Describes the payment method the shopper selected.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The payment method code. |
| `purchase_order_number` - [`String`](#string) | The purchase order number. |
| `title` - [`String!`](#string) | The payment method title. |

#### Example

```json
{
  "code": "xyz789",
  "purchase_order_number": "abc123",
  "title": "abc123"
}
```

<HorizontalLine />

### SelectedShippingMethod

Contains details about the selected shipping method and carrier.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The cost of shipping using this shipping method. |
| `base_amount` - [`Money`](#money) |  *(Deprecated: The field should not be used on the storefront.)* |
| `carrier_code` - [`String!`](#string) | A string that identifies a commercial carrier or an offline shipping method. |
| `carrier_title` - [`String!`](#string) | The label for the carrier code. |
| `method_code` - [`String!`](#string) | A shipping method code associated with a carrier. |
| `method_title` - [`String!`](#string) | The label for the method code. |
| `price_excl_tax` - [`Money!`](#money) | The cost of shipping using this shipping method, excluding tax. |
| `price_incl_tax` - [`Money!`](#money) | The cost of shipping using this shipping method, including tax. |

#### Example

```json
{
  "amount": Money,
  "base_amount": Money,
  "carrier_code": "xyz789",
  "carrier_title": "abc123",
  "method_code": "abc123",
  "method_title": "xyz789",
  "price_excl_tax": Money,
  "price_incl_tax": Money
}
```

<HorizontalLine />

### SendEmailToFriendInput

Defines the referenced product and the email sender and recipients.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `product_id` - [`Int!`](#int) | The ID of the product that the sender is referencing. |
| `recipients` - [`[SendEmailToFriendRecipientInput]!`](#sendemailtofriendrecipientinput) | An array containing information about each recipient. |
| `sender` - [`SendEmailToFriendSenderInput!`](#sendemailtofriendsenderinput) | Information about the customer and the content of the message. |

#### Example

```json
{
  "product_id": 123,
  "recipients": [SendEmailToFriendRecipientInput],
  "sender": SendEmailToFriendSenderInput
}
```

<HorizontalLine />

### SendEmailToFriendOutput

Contains information about the sender and recipients.

#### Fields

| Field Name | Description |
|------------|-------------|
| `recipients` - [`[SendEmailToFriendRecipient]`](#sendemailtofriendrecipient) | An array containing information about each recipient. |
| `sender` - [`SendEmailToFriendSender`](#sendemailtofriendsender) | Information about the customer and the content of the message. |

#### Example

```json
{
  "recipients": [SendEmailToFriendRecipient],
  "sender": SendEmailToFriendSender
}
```

<HorizontalLine />

### SendEmailToFriendRecipient

An output object that contains information about the recipient.

#### Fields

| Field Name | Description |
|------------|-------------|
| `email` - [`String!`](#string) | The email address of the recipient. |
| `name` - [`String!`](#string) | The name of the recipient. |

#### Example

```json
{
  "email": "abc123",
  "name": "xyz789"
}
```

<HorizontalLine />

### SendEmailToFriendRecipientInput

Contains details about a recipient.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](#string) | The email address of the recipient. |
| `name` - [`String!`](#string) | The name of the recipient. |

#### Example

```json
{
  "email": "abc123",
  "name": "abc123"
}
```

<HorizontalLine />

### SendEmailToFriendSender

An output object that contains information about the sender.

#### Fields

| Field Name | Description |
|------------|-------------|
| `email` - [`String!`](#string) | The email address of the sender. |
| `message` - [`String!`](#string) | The text of the message to be sent. |
| `name` - [`String!`](#string) | The name of the sender. |

#### Example

```json
{
  "email": "abc123",
  "message": "xyz789",
  "name": "abc123"
}
```

<HorizontalLine />

### SendEmailToFriendSenderInput

Contains details about the sender.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](#string) | The email address of the sender. |
| `message` - [`String!`](#string) | The text of the message to be sent. |
| `name` - [`String!`](#string) | The name of the sender. |

#### Example

```json
{
  "email": "abc123",
  "message": "xyz789",
  "name": "abc123"
}
```

<HorizontalLine />

### SendFriendConfiguration

Contains details about the configuration of the Email to a Friend feature.

#### Fields

| Field Name | Description |
|------------|-------------|
| `enabled_for_customers` - [`Boolean!`](#boolean) | Indicates whether the Email to a Friend feature is enabled. |
| `enabled_for_guests` - [`Boolean!`](#boolean) | Indicates whether the Email to a Friend feature is enabled for guests. |

#### Example

```json
{"enabled_for_customers": true, "enabled_for_guests": true}
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
{"comment": NegotiableQuoteCommentInput, "quote_uid": 4}
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
{"error": "abc123", "success": false}
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
  "cart_id": "abc123",
  "gift_message": GiftMessageInput,
  "gift_receipt_included": false,
  "gift_wrapping_id": "4",
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
  "cart_id": "abc123",
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
  "quote_uid": 4
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
| `customer_address_id` - [`ID`](#id) | The unique ID of a &#x60;CustomerAddress&#x60; object. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddressInput]`](#negotiablequoteshippingaddressinput) | An array of shipping addresses to apply to the negotiable quote. |

#### Example

```json
{
  "customer_address_id": "4",
  "quote_uid": 4,
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
  "quote_uid": 4,
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
  "template_id": 4
}
```

<HorizontalLine />

### SetPaymentMethodAndPlaceOrderInput

Applies a payment method to the quote.

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
  "message": "xyz789",
  "name": "xyz789"
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
  "product_sku": "xyz789",
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
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
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

#### Example

```json
{
  "carrier": "abc123",
  "number": "xyz789",
  "title": "abc123"
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
  "pickup_location_code": "xyz789"
}
```

<HorizontalLine />

### ShippingCartAddress

Contains shipping addresses and methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_shipping_methods` - [`[AvailableShippingMethod]`](#availableshippingmethod) | An array that lists the shipping methods that can be applied to the cart. |
| `cart_items` - [`[CartItemQuantity]`](#cartitemquantity) |  *(Deprecated: Use &#x60;cart_items_v2&#x60; instead.)* |
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
| `items_weight` - [`Float`](#float) |  *(Deprecated: This information should not be exposed on the frontend.)* |
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
  "cart_items": [CartItemQuantity],
  "cart_items_v2": [CartItemInterface],
  "city": "xyz789",
  "company": "xyz789",
  "country": CartAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": "4",
  "customer_notes": "abc123",
  "fax": "abc123",
  "firstname": "xyz789",
  "id": 987,
  "items_weight": 123.45,
  "lastname": "xyz789",
  "middlename": "xyz789",
  "pickup_location_code": "abc123",
  "postcode": "xyz789",
  "prefix": "xyz789",
  "region": CartAddressRegion,
  "same_as_billing": false,
  "selected_shipping_method": SelectedShippingMethod,
  "street": ["abc123"],
  "suffix": "xyz789",
  "telephone": "abc123",
  "uid": 4,
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
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message for the cart item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the cart item. |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](#string) | Message to display when the product is not available with this selected option. |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer&#x27;s quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller&#x27;s quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "available_gift_wrapping": [GiftWrapping],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "abc123",
  "is_available": true,
  "max_qty": 987.65,
  "min_qty": 987.65,
  "not_available_message": "xyz789",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": "4"
}
```

<HorizontalLine />
