## Types

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
  "value": "abc123"
}
```

<HorizontalLine />

### LineItemNoteInput

Sets quote item note.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `note` - [`String`](#string) | The note text to be added. |
| `quote_item_uid` - [`ID!`](#id) | The unique ID of a `CartLineItem` object. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

#### Example

```json
{
  "note": "xyz789",
  "quote_item_uid": "4",
  "quote_uid": "4"
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
| `position` - [`Int`](#int) | The media item's position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |

#### Possible Types

| MediaGalleryInterface Types |
|----------------|
| [`AssetImage`](#assetimage) |
| [`AssetVideo`](#assetvideo) |
| [`ProductImage`](#productimage) |
| [`ProductVideo`](#productvideo) |

#### Example

```json
{
  "disabled": true,
  "label": "xyz789",
  "position": 123,
  "url": "xyz789"
}
```

<HorizontalLine />

### MediaResourceType

Enumeration of media resource types

#### Values

| Enum Value | Description |
|------------|-------------|
| `NEGOTIABLE_QUOTE_ATTACHMENT` | Negotiable quote comment file attachment |
| `CUSTOMER_ATTRIBUTE_FILE` | Customer file resource type |
| `CUSTOMER_ATTRIBUTE_IMAGE` | Customer image resource type |
| `CUSTOMER_ATTRIBUTE_ADDRESS_FILE` | Customer file resource type for customer address |
| `CUSTOMER_ATTRIBUTE_ADDRESS_IMAGE` | Customer image resource type for customer address |

#### Example

```json
""NEGOTIABLE_QUOTE_ATTACHMENT""
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
  "layout": "abc123",
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
{"currency": "AFN", "value": 987.65}
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
{"requisitionListItemUids": [4]}
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
| `quote_item_uid` - [`ID!`](#id) | The unique ID of a `CartLineItem` object. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |
| `requisition_list_uid` - [`ID!`](#id) | The unique ID of a requisition list. |

#### Example

```json
{
  "quote_item_uid": "4",
  "quote_uid": "4",
  "requisition_list_uid": "4"
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
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the negotiable quote |
| `email` - [`String`](#string) | The email address of the company user. |
| `expiration_date` - [`String!`](#string) | The expiration period of the negotiable quote. |
| `history` - [`[NegotiableQuoteHistoryEntry]`](#negotiablequotehistoryentry) | A list of status and price changes for the negotiable quote. |
| `is_virtual` - [`Boolean!`](#boolean) | Indicates whether the negotiable quote contains only virtual products. |
| `items` - [`[CartItemInterface]`](#cartiteminterface) | The list of items in the negotiable quote. |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote. |
| `order` - [`CustomerOrder`](#customerorder) | The order created from the negotiable quote. |
| `prices` - [`CartPrices`](#cartprices) | A set of subtotals and totals applied to the negotiable quote. |
| `sales_rep_name` - [`String!`](#string) | The first and last name of the sales representative. |
| `selected_payment_method` - [`SelectedPaymentMethod`](#selectedpaymentmethod) | The payment method that was applied to the negotiable quote. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote. |
| `status` - [`NegotiableQuoteStatus!`](#negotiablequotestatus) | The status of the negotiable quote. |
| `template_id` - [`ID`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |
| `template_name` - [`String`](#string) | The title assigned to the negotiable quote template. |
| `total_quantity` - [`Float!`](#float) | The total number of items in the negotiable quote. |
| `uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the negotiable quote was updated. |

#### Example

```json
{
  "available_payment_methods": [AvailablePaymentMethod],
  "billing_address": NegotiableQuoteBillingAddress,
  "buyer": NegotiableQuoteUser,
  "comments": [NegotiableQuoteComment],
  "created_at": "xyz789",
  "custom_attributes": [CustomAttribute],
  "email": "abc123",
  "expiration_date": "xyz789",
  "history": [NegotiableQuoteHistoryEntry],
  "is_virtual": true,
  "items": [CartItemInterface],
  "name": "xyz789",
  "order": CustomerOrder,
  "prices": CartPrices,
  "sales_rep_name": "abc123",
  "selected_payment_method": SelectedPaymentMethod,
  "shipping_addresses": [NegotiableQuoteShippingAddress],
  "status": "SUBMITTED",
  "template_id": 4,
  "template_name": "abc123",
  "total_quantity": 987.65,
  "uid": 4,
  "updated_at": "xyz789"
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
  "code": "xyz789",
  "label": "xyz789"
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
| `custom_attributes` - [`[AttributeValueInput]`](#attributevalueinput) | The custom attribute values of the billing or shipping negotiable quote address. |
| `fax` - [`String`](#string) | The fax number of the customer. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`String`](#string) | A string that defines the state or province of the billing or shipping address. |
| `region_id` - [`Int`](#int) | An integer that defines the state or province of the billing or shipping address. |
| `save_in_address_book` - [`Boolean`](#boolean) | Determines whether to save the address in the customer's address book. The default value is true. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |
| `vat_id` - [`String`](#string) | The customer's Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country_code": "xyz789",
  "custom_attributes": [AttributeValueInput],
  "fax": "abc123",
  "firstname": "xyz789",
  "lastname": "abc123",
  "middlename": "abc123",
  "postcode": "xyz789",
  "prefix": "xyz789",
  "region": "abc123",
  "region_id": 123,
  "save_in_address_book": false,
  "street": ["abc123"],
  "suffix": "xyz789",
  "telephone": "xyz789",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteAddressInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The company's city or town. |
| `company` - [`String`](#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company's country. |
| `custom_attributes` - [`[AttributeValueInterface]`](#attributevalueinterface) | The custom attribute values of the billing or shipping negotiable quote address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer's address book that uniquely identifies the address. |
| `fax` - [`String`](#string) | The fax number of the customer. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The company's ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer's telephone number. |
| `uid` - [`ID!`](#id) | The unique identifier of the negotiable quote address. |
| `vat_id` - [`String`](#string) | The customer's Tax/VAT number (for corporate customers). |

#### Possible Types

| NegotiableQuoteAddressInterface Types |
|----------------|
| [`NegotiableQuoteBillingAddress`](#negotiablequotebillingaddress) |
| [`NegotiableQuoteShippingAddress`](#negotiablequoteshippingaddress) |

#### Example

```json
{
  "city": "xyz789",
  "company": "abc123",
  "country": NegotiableQuoteAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": 4,
  "fax": "xyz789",
  "firstname": "xyz789",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": NegotiableQuoteAddressRegion,
  "street": ["abc123"],
  "suffix": "xyz789",
  "telephone": "abc123",
  "uid": "4",
  "vat_id": "abc123"
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
  "code": "xyz789",
  "label": "xyz789",
  "region_id": 987
}
```

<HorizontalLine />

### NegotiableQuoteBillingAddress

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The company's city or town. |
| `company` - [`String`](#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company's country. |
| `custom_attributes` - [`[AttributeValueInterface]`](#attributevalueinterface) | The custom attribute values of the billing or shipping negotiable quote address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer's address book that uniquely identifies the address. |
| `fax` - [`String`](#string) | The fax number of the customer. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The company's ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer's telephone number. |
| `uid` - [`ID!`](#id) | The unique identifier of the negotiable quote address. |
| `vat_id` - [`String`](#string) | The customer's Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country": NegotiableQuoteAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": 4,
  "fax": "xyz789",
  "firstname": "xyz789",
  "lastname": "xyz789",
  "middlename": "xyz789",
  "postcode": "abc123",
  "prefix": "xyz789",
  "region": NegotiableQuoteAddressRegion,
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "abc123",
  "uid": 4,
  "vat_id": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteBillingAddressInput

Defines the billing address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | Defines a billing address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID of a `CustomerAddress` object. |
| `same_as_shipping` - [`Boolean`](#boolean) | Indicates whether to set the billing address to be the same as the existing shipping address on the negotiable quote. |
| `use_for_shipping` - [`Boolean`](#boolean) | Indicates whether to set the shipping address to be the same as this billing address. |

#### Example

```json
{
  "address": NegotiableQuoteAddressInput,
  "customer_address_uid": 4,
  "same_as_shipping": true,
  "use_for_shipping": false
}
```

<HorizontalLine />

### NegotiableQuoteComment

Contains a single plain text comment from either the buyer or seller.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attachments` - [`[NegotiableQuoteCommentAttachment]!`](#negotiablequotecommentattachment) | Negotiable quote comment file attachments. |
| `author` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The first and last name of the commenter. |
| `created_at` - [`String!`](#string) | Timestamp indicating when the comment was created. |
| `creator_type` - [`NegotiableQuoteCommentCreatorType!`](#negotiablequotecommentcreatortype) | Indicates whether a buyer or seller commented. |
| `text` - [`String!`](#string) | The plain text comment. |
| `uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteComment` object. |

#### Example

```json
{
  "attachments": [NegotiableQuoteCommentAttachment],
  "author": NegotiableQuoteUser,
  "created_at": "abc123",
  "creator_type": "BUYER",
  "text": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### NegotiableQuoteCommentAttachment

Negotiable quote comment file attachment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String!`](#string) | Negotiable quote comment attachment file name. |
| `url` - [`String!`](#string) | Negotiable quote comment attachment file url. |

#### Example

```json
{
  "name": "xyz789",
  "url": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteCommentAttachmentInput

Negotiable quote comment file attachment.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `key` - [`String!`](#string) | Negotiable quote comment attachment file key. |

#### Example

```json
{"key": "abc123"}
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
| `attachments` - [`[NegotiableQuoteCommentAttachmentInput]`](#negotiablequotecommentattachmentinput) | Negotiable quote comment file attachments. |
| `comment` - [`String!`](#string) | The comment provided by the buyer. |

#### Example

```json
{
  "attachments": [NegotiableQuoteCommentAttachmentInput],
  "comment": "xyz789"
}
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
  "new_value": "abc123",
  "old_value": "abc123",
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
| `item_note` - [`HistoryItemNoteData`](#historyitemnotedata) | Item note data that is added to the negotiable quote history object. |
| `uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteHistoryEntry` object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "change_type": "CREATED",
  "changes": NegotiableQuoteHistoryChanges,
  "created_at": "xyz789",
  "item_note": HistoryItemNoteData,
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
| `new_expiration` - [`String`](#string) | The expiration date after the change. The value will be 'null' if not set. |
| `old_expiration` - [`String`](#string) | The previous expiration date. The value will be 'null' if not previously set. |

#### Example

```json
{
  "new_expiration": "abc123",
  "old_expiration": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteHistoryProductsRemovedChange

Contains lists of products that have been removed from the catalog and negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `products_removed_from_catalog` - [`[ID]`](#id) | A list of product IDs the seller removed from the catalog. |
| `products_removed_from_quote` - [`[ProductInterface]`](#productinterface) | A list of products removed from the negotiable quote by either the buyer or the seller. *(Deprecated: Product information is part of a composable Catalog Service.)* |

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
{"message": "abc123"}
```

<HorizontalLine />

### NegotiableQuoteItemQuantityInput

Specifies the updated quantity of an item.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quantity` - [`Float!`](#float) | The new quantity of the negotiable quote item. |
| `quote_item_uid` - [`ID!`](#id) | The unique ID of a `CartItemInterface` object. |

#### Example

```json
{"quantity": 123.45, "quote_item_uid": 4}
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
  "document_name": "xyz789",
  "link_id": 4,
  "reference_document_url": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteShippingAddress

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_shipping_methods` - [`[AvailableShippingMethod]`](#availableshippingmethod) | An array of shipping methods available to the buyer. |
| `city` - [`String!`](#string) | The company's city or town. |
| `company` - [`String`](#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company's country. |
| `custom_attributes` - [`[AttributeValueInterface]`](#attributevalueinterface) | The custom attribute values of the billing or shipping negotiable quote address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer's address book that uniquely identifies the address. |
| `fax` - [`String`](#string) | The fax number of the customer. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The company's ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `selected_shipping_method` - [`SelectedShippingMethod`](#selectedshippingmethod) | The selected shipping method. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer's telephone number. |
| `uid` - [`ID!`](#id) | The unique identifier of the negotiable quote address. |
| `vat_id` - [`String`](#string) | The customer's Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "available_shipping_methods": [AvailableShippingMethod],
  "city": "xyz789",
  "company": "abc123",
  "country": NegotiableQuoteAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": "4",
  "fax": "abc123",
  "firstname": "abc123",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "xyz789",
  "region": NegotiableQuoteAddressRegion,
  "selected_shipping_method": SelectedShippingMethod,
  "street": ["abc123"],
  "suffix": "xyz789",
  "telephone": "xyz789",
  "uid": 4,
  "vat_id": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteShippingAddressInput

Defines shipping addresses for the negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | A shipping address. |
| `customer_address_uid` - [`ID`](#id) | An ID from the company user's address book that uniquely identifies the address to be used for shipping. |
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
| `created_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote template was created. |
| `expiration_date` - [`String!`](#string) | The expiration period of the negotiable quote template. |
| `history` - [`[NegotiableQuoteHistoryEntry]`](#negotiablequotehistoryentry) | A list of status and price changes for the negotiable quote template. |
| `historyV2` - [`[NegotiableQuoteTemplateHistoryEntry]`](#negotiablequotetemplatehistoryentry) |  |
| `is_min_max_qty_used` - [`Boolean!`](#boolean) | Indicates whether the minimum and maximum quantity settings are used. |
| `is_virtual` - [`Boolean!`](#boolean) | Indicates whether the negotiable quote template contains only virtual products. |
| `items` - [`[CartItemInterface]`](#cartiteminterface) | The list of items in the negotiable quote template. |
| `max_order_commitment` - [`Int!`](#int) | Commitment for maximum orders |
| `min_order_commitment` - [`Int!`](#int) | Commitment for minimum orders |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote template. |
| `notifications` - [`[QuoteTemplateNotificationMessage]`](#quotetemplatenotificationmessage) | A list of notifications for the negotiable quote template. |
| `prices` - [`CartPrices`](#cartprices) | A set of subtotals and totals applied to the negotiable quote template. |
| `reference_document_links` - [`[NegotiableQuoteReferenceDocumentLink]`](#negotiablequotereferencedocumentlink) | A list of reference document links for the negotiable quote template. |
| `sales_rep_name` - [`String!`](#string) | The first and last name of the sales representative. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote template. |
| `status` - [`String!`](#string) | The status of the negotiable quote template. |
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |
| `total_quantity` - [`Float!`](#float) | The total number of items in the negotiable quote template. |
| `uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |
| `updated_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote template was updated. |

#### Example

```json
{
  "buyer": NegotiableQuoteUser,
  "comments": [NegotiableQuoteComment],
  "created_at": "abc123",
  "expiration_date": "abc123",
  "history": [NegotiableQuoteHistoryEntry],
  "historyV2": [NegotiableQuoteTemplateHistoryEntry],
  "is_min_max_qty_used": false,
  "is_virtual": false,
  "items": [CartItemInterface],
  "max_order_commitment": 987,
  "min_order_commitment": 987,
  "name": "xyz789",
  "notifications": [QuoteTemplateNotificationMessage],
  "prices": CartPrices,
  "reference_document_links": [
    NegotiableQuoteReferenceDocumentLink
  ],
  "sales_rep_name": "abc123",
  "shipping_addresses": [NegotiableQuoteShippingAddress],
  "status": "xyz789",
  "template_id": "4",
  "total_quantity": 123.45,
  "uid": 4,
  "updated_at": "abc123"
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
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |
| `uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |
| `updated_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote template was updated. |

#### Example

```json
{
  "activated_at": "xyz789",
  "company_name": "xyz789",
  "created_at": "abc123",
  "expiration_date": "abc123",
  "is_min_max_qty_used": false,
  "last_ordered_at": "abc123",
  "last_shared_at": "xyz789",
  "max_order_commitment": 123,
  "min_negotiated_grand_total": 123.45,
  "min_order_commitment": 987,
  "name": "xyz789",
  "orders_placed": 987,
  "prices": CartPrices,
  "sales_rep_name": "xyz789",
  "state": "abc123",
  "status": "xyz789",
  "submitted_by": "abc123",
  "template_id": 4,
  "uid": "4",
  "updated_at": "xyz789"
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
| `uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteHistoryEntry` object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "change_type": "CREATED",
  "changes": NegotiableQuoteTemplateHistoryChanges,
  "created_at": "abc123",
  "uid": 4
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
  "new_status": "xyz789",
  "old_status": "xyz789"
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
| `item_id` - [`ID!`](#id) | The unique ID of a `CartItemInterface` object. |
| `max_qty` - [`Float`](#float) | The new max quantity of the negotiable quote template item. Only used if is_min_max_qty_used is true on the template. |
| `min_qty` - [`Float`](#float) | The new min quantity of the negotiable quote template item. Only used if is_min_max_qty_used is true on the template. |
| `quantity` - [`Float!`](#float) | The new quantity of the negotiable quote item. |

#### Example

```json
{"item_id": 4, "max_qty": 987.65, "min_qty": 987.65, "quantity": 123.45}
```

<HorizontalLine />

### NegotiableQuoteTemplateReferenceDocumentLinkInput

Defines the reference document link to add to a negotiable quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `document_identifier` - [`String`](#string) | The identifier of the reference document. |
| `document_name` - [`String!`](#string) | The title of the reference document. |
| `link_id` - [`ID`](#id) | The unique ID of a `NegotiableQuoteReferenceDocumentLink` object. |
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

### NegotiableQuoteTemplateShippingAddressInput

Defines shipping addresses for the negotiable quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | A shipping address. |
| `customer_address_uid` - [`ID`](#id) | An ID from the company user's address book that uniquely identifies the address to be used for shipping. |
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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

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
| `lastname` - [`String!`](#string) | The buyer's or seller's last name. |

#### Example

```json
{
  "firstname": "xyz789",
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
  "total_count": 123
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
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{"template_id": "4"}
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
| `order_number` - [`String!`](#string) | The unique ID for an `Order` object. |

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
| `company` - [`String`](#string) | The customer's company. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The customer's country. |
| `custom_attributesV2` - [`[AttributeValueInterface]!`](#attributevalueinterface) | Custom attributes assigned to the customer address. |
| `fax` - [`String`](#string) | The fax number. |
| `firstname` - [`String!`](#string) | The first name of the person associated with the shipping/billing address. |
| `lastname` - [`String!`](#string) | The family name of the person associated with the shipping/billing address. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the shipping/billing address. |
| `postcode` - [`String`](#string) | The customer's ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`String`](#string) | The state or province name. |
| `region_id` - [`ID`](#id) | The unique ID for a `Region` object of a pre-defined region. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number. |
| `vat_id` - [`String`](#string) | The customer's Value-added tax (VAT) number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country_code": "AF",
  "custom_attributesV2": [AttributeValueInterface],
  "fax": "abc123",
  "firstname": "abc123",
  "lastname": "abc123",
  "middlename": "xyz789",
  "postcode": "abc123",
  "prefix": "xyz789",
  "region": "abc123",
  "region_id": 4,
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "abc123",
  "vat_id": "abc123"
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
  "middlename": "xyz789",
  "prefix": "abc123",
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
| `id` - [`ID!`](#id) | The unique ID for an `OrderItemInterface` object. |
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
  "product_type": "xyz789",
  "product_url_key": "xyz789",
  "quantity_canceled": 987.65,
  "quantity_invoiced": 123.45,
  "quantity_ordered": 123.45,
  "quantity_refunded": 987.65,
  "quantity_return_requested": 987.65,
  "quantity_returned": 123.45,
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
| `id` - [`ID!`](#id) | The unique ID for an `OrderItemInterface` object. |
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
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "abc123",
  "product_url_key": "abc123",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
  "quantity_return_requested": 123.45,
  "quantity_returned": 123.45,
  "quantity_shipped": 123.45,
  "selected_options": [OrderItemOption],
  "status": "xyz789"
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
  "label": "abc123",
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
| `row_total_including_tax` - [`Money!`](#money) | The value of `row_total` plus the tax applied to the item. |
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
  "type": "abc123"
}
```

<HorizontalLine />

### OrderShipment

Contains order shipment details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comments` - [`[SalesCommentItem]`](#salescommentitem) | Comments added to the shipment. |
| `id` - [`ID!`](#id) | The unique ID for a `OrderShipment` object. |
| `items` - [`[ShipmentItemInterface]`](#shipmentiteminterface) | An array of items included in the shipment. |
| `number` - [`String!`](#string) | The sequential credit shipment number. |
| `tracking` - [`[ShipmentTracking]`](#shipmenttracking) | An array of shipment tracking details. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "id": 4,
  "items": [ShipmentItemInterface],
  "number": "abc123",
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
{"token": "abc123"}
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
  "key": "xyz789",
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
  "is_visible": false,
  "payment_intent": "abc123",
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
  "code": "xyz789",
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
  "details": "abc123",
  "payment_method_code": "abc123",
  "public_hash": "xyz789",
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
  "country_id": "xyz789",
  "description": "xyz789",
  "email": "xyz789",
  "fax": "xyz789",
  "latitude": 123.45,
  "longitude": 123.45,
  "name": "abc123",
  "phone": "abc123",
  "pickup_location_code": "xyz789",
  "postcode": "abc123",
  "region": "xyz789",
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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

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
{"purchase_order_uid": "4"}
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |

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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |

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
{"amount": 123.45, "code": "abc123"}
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
  "main_final_price": 987.65,
  "main_price": 987.65
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
{"sku": "abc123"}
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
  "code": "abc123",
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
  "attribute_type": "xyz789",
  "code": 4,
  "url": "xyz789",
  "value": "abc123"
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
{"amount_off": 987.65, "percent_off": 987.65}
```

<HorizontalLine />

### ProductImage

Contains product image information, including the image URL and label.

#### Fields

| Field Name | Description |
|------------|-------------|
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](#string) | The label of the product image or video. |
| `position` - [`Int`](#int) | The media item's position after it has been sorted. |
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
| `PARENT` | Use thumbnail of product's parent as image. |

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
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](#string) | The product's country of origin. |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product's manufacturer. |
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
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of `ProductLinks` objects. |
| `quantity` - [`Float`](#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of products to be displayed in a Related Products block. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product's thumbnail image. |
| `uid` - [`ID!`](#id) | The unique ID for a `ProductInterface` object. |
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
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "country_of_manufacture": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": false,
  "gift_wrapping_available": true,
  "gift_wrapping_price": Money,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 987,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "abc123",
  "min_sale_qty": 123.45,
  "name": "xyz789",
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 987.65,
  "options_container": "abc123",
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 123.45,
  "related_products": [ProductInterface],
  "short_description": ComplexTextValue,
  "sku": "xyz789",
  "small_image": ProductImage,
  "special_price": 987.65,
  "special_to_date": "abc123",
  "stock_status": "IN_STOCK",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "uid": 4,
  "upsell_products": [ProductInterface],
  "url_key": "xyz789"
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
  "linked_product_type": "xyz789",
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
  "link_type": "abc123",
  "linked_product_sku": "xyz789",
  "linked_product_type": "xyz789",
  "position": 987,
  "sku": "abc123"
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
  "asset_id": "abc123",
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
  "video_media_url": "abc123"
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
  "media_type": "abc123",
  "video_description": "abc123",
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
  "related_terms": ["abc123"],
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
  "code": "xyz789",
  "message": "xyz789"
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
| `position` - [`Int`](#int) | The media item's position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |
| `video_content` - [`ProductMediaGalleryEntriesVideoContent`](#productmediagalleryentriesvideocontent) | Contains a `ProductMediaGalleryEntriesVideoContent` object. |

#### Example

```json
{
  "disabled": false,
  "label": "xyz789",
  "position": 987,
  "url": "xyz789",
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
| `urlKey` - [`String`](#string) | The URL key of the product. This is a unique identifier for the product that is used to create the product's URL. |
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
  "inStock": true,
  "lowStock": false,
  "attributes": [ProductViewAttribute],
  "description": "abc123",
  "id": "4",
  "images": [ProductViewImage],
  "videos": [ProductViewVideo],
  "lastModifiedAt": "2007-12-03T10:15:30Z",
  "metaDescription": "abc123",
  "metaKeyword": "xyz789",
  "metaTitle": "xyz789",
  "name": "xyz789",
  "shortDescription": "xyz789",
  "inputOptions": [ProductViewInputOption],
  "sku": "abc123",
  "externalId": "abc123",
  "url": "xyz789",
  "urlKey": "abc123",
  "links": [ProductViewLink],
  "queryType": "abc123",
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
| `name` - [`String!`](#string) | Name of an attribute code. For example, `color`, `size` or `material` |
| `roles` - [`[String]`](#string) | Roles designated for an attribute on the storefront. For example, `show_on_plp`, `show_in_pdp` or `show_in_search` |
| `value` - [`JSON`](#json) | Attribute value, arbitrary of type. For example, `red`, `blue` or `green` |

#### Example

```json
{
  "label": "xyz789",
  "name": "abc123",
  "roles": ["abc123"],
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
| `label` - [`String`](#string) | The display label of the product image. For example, `Main Image`, `Small Image` or `Thumbnail Image` |
| `roles` - [`[String]`](#string) | A list that describes how the image is used. Can be `image`, `small_image` or `thumbnail` |
| `url` - [`String!`](#string) | The URL to the product image. For example, `https://example.com/image.jpg`. |

#### Example

```json
{
  "label": "xyz789",
  "roles": ["xyz789"],
  "url": "abc123"
}
```

<HorizontalLine />

### ProductViewInputOption

Product options provide a way to configure products by making selections of particular option values. Selecting one or many options will point to a simple product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of an option value. For example, `123` for the first option value, `456` for the second option value. |
| `title` - [`String`](#string) | The display name of the option value. For example, `Red`, `Blue` or `Green` |
| `required` - [`Boolean`](#boolean) | Indicates whether this input option is required. |
| `type` - [`String`](#string) | The type of data entry. For example, `text`, `number` or `date` |
| `markupAmount` - [`Float`](#float) | The percentage the prices is marked up or down. A positive value, such as `10.00`, indicates the product is marked up 10%. A negative value, such as `-10.00`, indicates the price is marked down 10%. |
| `suffix` - [`String`](#string) | SKU suffix to add to the product. For example, `-red`, `-blue` or `-green` |
| `sortOrder` - [`Int`](#int) | Sort order for the input option. For example, `1` for the first input option, `2` for the second input option. |
| `range` - [`ProductViewInputOptionRange`](#productviewinputoptionrange) | The range of values for the input option. For example, if the input option is a text field, the range represents the number of characters. |
| `imageSize` - [`ProductViewInputOptionImageSize`](#productviewinputoptionimagesize) | The size of the image for the input option. |
| `fileExtensions` - [`String`](#string) | The file extensions allowed for the image. For example, `jpg`, `png`, `gif`, or `svg` |

#### Example

```json
{
  "id": "4",
  "title": "abc123",
  "required": false,
  "type": "xyz789",
  "markupAmount": 987.65,
  "suffix": "abc123",
  "sortOrder": 123,
  "range": ProductViewInputOptionRange,
  "imageSize": ProductViewInputOptionImageSize,
  "fileExtensions": "abc123"
}
```

<HorizontalLine />

### ProductViewInputOptionImageSize

Dimensions of the image associated with the input option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `width` - [`Int`](#int) | The width of the image in pixels. For example, `100` for a 100px width. |
| `height` - [`Int`](#int) | The height of the image, in pixels. For example, `100` for a 100px height. |

#### Example

```json
{"width": 123, "height": 987}
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
{"from": 987.65, "to": 123.45}
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
{"currency": "AED", "value": 987.65}
```

<HorizontalLine />

### ProductViewOption

Product options provide a way to configure products by making selections of particular option values. Selecting one or many options will point to a simple product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of the option. For example, `123` for the first option, `456` for the second option. |
| `multi` - [`Boolean`](#boolean) | Indicates whether the option allows multiple choices. The value is `true` for a multi-select option, `false` for a single-select option. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option must be selected. |
| `title` - [`String`](#string) | The display name of the option. For example, `Color`, `Size` or `Material` |
| `values` - [`[ProductViewOptionValue!]`](#productviewoptionvalue) | List of available option values. For example, `Red`, `Blue` or `Green` |

#### Example

```json
{
  "id": "4",
  "multi": true,
  "required": true,
  "title": "abc123",
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
  "title": "xyz789",
  "inStock": true
}
```

<HorizontalLine />

### ProductViewOptionValueConfiguration

An implementation of ProductViewOptionValue for configuration values.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of an option value. For example, `123` for the first option value, `456` for the second option value. |
| `title` - [`String`](#string) | The display name of the option value. For example, `Red`, `Blue` or `Green` |
| `inStock` - [`Boolean`](#boolean) | Indicates whether the remaining quantity of the product option value has reached the out-of-stock threshold. |

#### Example

```json
{
  "id": "4",
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
| `id` - [`ID`](#id) | The ID of an option value. For example, `123` for the first option value, `456` for the second option value. |
| `isDefault` - [`Boolean`](#boolean) | Indicates whether the option value is the default. |
| `product` - [`SimpleProductView`](#simpleproductview) | Details about a simple product. For example, a product with a SKU of `123`, a name of `Product 1`, a price of `100.00`. |
| `quantity` - [`Float`](#float) | Default quantity of an option value. |
| `title` - [`String`](#string) | The display name of the option value. For example, `Red`, `Blue` or `Green` |
| `inStock` - [`Boolean`](#boolean) | Indicates whether the remaining quantity of the product option value has reached the out-of-stock threshold. |

#### Example

```json
{
  "id": "4",
  "isDefault": true,
  "product": SimpleProductView,
  "quantity": 123.45,
  "title": "abc123",
  "inStock": true
}
```

<HorizontalLine />

### ProductViewOptionValueSwatch

An implementation of ProductViewOptionValueSwatch for swatches.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The ID of an option value. For example, `123` for the first option value, `456` for the second option value. |
| `title` - [`String`](#string) | The display name of the option value. For example, `Red`, `Blue` or `Green` |
| `type` - [`SwatchType`](#swatchtype) | Indicates the type of the swatch. |
| `value` - [`String`](#string) | The value of the swatch depending on the type of the swatch. |
| `inStock` - [`Boolean`](#boolean) | Indicates whether the remaining quantity of the product option value has reached the out-of-stock threshold. |

#### Example

```json
{
  "id": "4",
  "title": "abc123",
  "type": "TEXT",
  "value": "abc123",
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
| `roles` - [`[String]`](#string) | Price roles, stating if the price should be visible or hidden. For example, `show_on_plp`, `show_in_pdp` or `show_in_search` |

#### Example

```json
{
  "final": Price,
  "regular": Price,
  "tiers": [ProductViewTierPrice],
  "roles": ["xyz789"]
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
| `in` - [`[Float]`](#float) | Exact quantity values that activate this tier price. For example, `[5, 10]` means the tier applies only when the purchased quantity is exactly 5 or exactly 10. |

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
| `tier` - [`Price`](#price) | The discounted price that applies when the quantity conditions in `quantity` are satisfied. Contains the monetary amount and any price adjustments applied to this tier. |
| `quantity` - [`[ProductViewTierCondition!]!`](#productviewtiercondition) | The quantity conditions that must be met to activate the tier price. For example, `10` for a quantity of 10 or `20` for a quantity of 20. |

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
| `gte` - [`Float`](#float) | The minimum quantity that must be purchased to activate the tier price. Must be greater than or equal to the value in `gte`. |
| `lt` - [`Float`](#float) | Maximum quantity (exclusive) for this tier price. For example, a value of `20` means this tier applies only when fewer than 20 items are purchased. |

#### Example

```json
{"gte": 123.45, "lt": 987.65}
```

<HorizontalLine />

### ProductViewVariant

Represents a product variant.

#### Fields

| Field Name | Description |
|------------|-------------|
| `selections` - [`[String!]`](#string) | List of option values that make up the variant. For example, `red`, `blue` or `green` |
| `product` - [`ProductView`](#productview) | Product corresponding to the variant. For example, a product with a SKU of `123`, a name of `Product 1`, a price of `100.00`. |

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
| `variants` - [`[ProductViewVariant]!`](#productviewvariant) | List of product variants. For example, a variant with a selection of `red`, `blue` or `green` |
| `cursor` - [`String`](#string) | Pagination cursor. For example, `123` for the first variant, `456` for the second variant. |

#### Example

```json
{
  "variants": [ProductViewVariant],
  "cursor": "abc123"
}
```

<HorizontalLine />

### ProductViewVideo

Contains details about a product video. For example, a video of the product being used or a video of the product being assembled.

#### Fields

| Field Name | Description |
|------------|-------------|
| `preview` - [`ProductViewImage`](#productviewimage) | Preview image for the video. For example, a screenshot of the video. |
| `url` - [`String!`](#string) | The URL to the product video. For example, `https://example.com/video.mp4` or `https://example.com/video.webm` |
| `description` - [`String`](#string) | Description of the product video. For example, `A video of the product being used` or `A video of the product being assembled` |
| `title` - [`String`](#string) | The title of the product video. For example, `Product Video` or `Product Assembly Video` |

#### Example

```json
{
  "preview": ProductViewImage,
  "url": "xyz789",
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
  "items": ["abc123"]
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
  "created_at": "xyz789",
  "created_by": Customer,
  "history_log": [PurchaseOrderHistoryItem],
  "number": "abc123",
  "order": CustomerOrder,
  "quote": Cart,
  "status": "PENDING",
  "uid": "4",
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
  "message": "abc123",
  "name": "abc123",
  "role": "xyz789",
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
  "created_at": "abc123",
  "created_by": "abc123",
  "description": "abc123",
  "name": "abc123",
  "status": "ENABLED",
  "uid": 4,
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
{"attribute": "GRAND_TOTAL", "operator": "MORE_THAN", "quantity": 987}
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
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Page information of search result's current page. |
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
