## Types

### KeyValue

Contains a key-value pair.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String`](types-q-s.md#string) | The name part of the key/value pair. |
| `value` - [`String`](types-q-s.md#string) | The value part of the key/value pair. |

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
| `filter_items` - [`[LayerFilterItemInterface]`](#layerfilteriteminterface) | An array of filter items. *(Deprecated: Use `Aggregation.options` instead.)* |
| `filter_items_count` - [`Int`](types-f-i.md#int) | The count of filter items in filter group. *(Deprecated: Use `Aggregation.count` instead.)* |
| `name` - [`String`](types-q-s.md#string) | The name of a layered navigation filter. *(Deprecated: Use `Aggregation.label` instead.)* |
| `request_var` - [`String`](types-q-s.md#string) | The request variable name for a filter query. *(Deprecated: Use `Aggregation.attribute_code` instead.)* |

#### Example

```json
{
  "filter_items": [LayerFilterItemInterface],
  "filter_items_count": 987,
  "name": "xyz789",
  "request_var": "xyz789"
}
```

<HorizontalLine />

### LayerFilterItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `items_count` - [`Int`](types-f-i.md#int) | The count of items per filter. *(Deprecated: Use `AggregationOption.count` instead.)* |
| `label` - [`String`](types-q-s.md#string) | The label for a filter. *(Deprecated: Use `AggregationOption.label` instead.)* |
| `value_string` - [`String`](types-q-s.md#string) | The value of a filter request variable to be used in query. *(Deprecated: Use `AggregationOption.value` instead.)* |

#### Example

```json
{
  "items_count": 987,
  "label": "xyz789",
  "value_string": "abc123"
}
```

<HorizontalLine />

### LayerFilterItemInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `items_count` - [`Int`](types-f-i.md#int) | The count of items per filter. *(Deprecated: Use `AggregationOption.count` instead.)* |
| `label` - [`String`](types-q-s.md#string) | The label for a filter. *(Deprecated: Use `AggregationOption.label` instead.)* |
| `value_string` - [`String`](types-q-s.md#string) | The value of a filter request variable to be used in query. *(Deprecated: Use `AggregationOption.value` instead.)* |

#### Possible Types

| LayerFilterItemInterface Types |
|----------------|
| [`LayerFilterItem`](#layerfilteritem) |
| [`SwatchLayerFilterItem`](types-q-s.md#swatchlayerfilteritem) |

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
| `note` - [`String`](types-q-s.md#string) | The note text to be added. |
| `quote_item_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `CartLineItem` object. |
| `quote_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuote` object. |

#### Example

```json
{
  "note": "xyz789",
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
| `disabled` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the image is hidden from view. |
| `file` - [`String`](types-q-s.md#string) | The path of the image on the server. |
| `id` - [`Int`](types-f-i.md#int) | The identifier assigned to the object. *(Deprecated: Use `uid` instead.)* |
| `label` - [`String`](types-q-s.md#string) | The alt text displayed on the storefront when the user points to the image. |
| `media_type` - [`String`](types-q-s.md#string) | Either `image` or `video`. |
| `position` - [`Int`](types-f-i.md#int) | The media item's position after it has been sorted. |
| `types` - [`[String]`](types-q-s.md#string) | Array of image types. It can have the following values: image, small_image, thumbnail. |
| `uid` - [`ID!`](types-f-i.md#id) | The unique ID for a `MediaGalleryEntry` object. |
| `video_content` - [`ProductMediaGalleryEntriesVideoContent`](#productmediagalleryentriesvideocontent) | Details about the content of a video item. |

#### Example

```json
{
  "content": ProductMediaGalleryEntriesContent,
  "disabled": true,
  "file": "xyz789",
  "id": 123,
  "label": "xyz789",
  "media_type": "abc123",
  "position": 987,
  "types": ["abc123"],
  "uid": 4,
  "video_content": ProductMediaGalleryEntriesVideoContent
}
```

<HorizontalLine />

### MediaGalleryInterface

Contains basic information about a product image or video.

#### Fields

| Field Name | Description |
|------------|-------------|
| `disabled` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](types-q-s.md#string) | The label of the product image or video. |
| `position` - [`Int`](types-f-i.md#int) | The media item's position after it has been sorted. |
| `url` - [`String`](types-q-s.md#string) | The URL of the product image or video. |

#### Possible Types

| MediaGalleryInterface Types |
|----------------|
| [`ProductImage`](#productimage) |
| [`ProductVideo`](#productvideo) |

#### Example

```json
{
  "disabled": true,
  "label": "abc123",
  "position": 123,
  "url": "abc123"
}
```

<HorizontalLine />

### MessageStyleLogo

#### Fields

| Field Name | Description |
|------------|-------------|
| `type` - [`String`](types-q-s.md#string) | The type of logo for the PayPal Pay Later messaging |

#### Example

```json
{"type": "abc123"}
```

<HorizontalLine />

### MessageStyles

#### Fields

| Field Name | Description |
|------------|-------------|
| `layout` - [`String`](types-q-s.md#string) | The message layout |
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
| `currency` - [`CurrencyEnum`](types-c-e.md#currencyenum) | A three-letter currency code, such as USD or EUR. |
| `value` - [`Float`](types-f-i.md#float) | A number expressing a monetary value. |

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
| `gift_registry` - [`GiftRegistry`](types-f-i.md#giftregistry) | The gift registry. |
| `status` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the attempt to move the cart items to the gift registry was successful. |
| `user_errors` - [`[GiftRegistryItemsUserError]!`](types-f-i.md#giftregistryitemsusererror) | An array of errors encountered while moving items from the cart to the gift registry. |

#### Example

```json
{
  "gift_registry": GiftRegistry,
  "status": true,
  "user_errors": [GiftRegistryItemsUserError]
}
```

<HorizontalLine />

### MoveItemsBetweenRequisitionListsInput

An input object that defines the items in a requisition list to be moved.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `requisitionListItemUids` - [`[ID]!`](types-f-i.md#id) | An array of IDs representing products moved from one requisition list to another. |

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
| `destination_requisition_list` - [`RequisitionList`](types-q-s.md#requisitionlist) | The destination requisition list after moving items. |
| `source_requisition_list` - [`RequisitionList`](types-q-s.md#requisitionlist) | The source requisition list after moving items. |

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
| `quote_item_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `CartLineItem` object. |
| `quote_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuote` object. |
| `requisition_list_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a requisition list. |

#### Example

```json
{"quote_item_uid": 4, "quote_uid": 4, "requisition_list_uid": 4}
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
| `destination_wishlist` - [`Wishlist!`](types-t-z.md#wishlist) | The destination wish list after receiving products moved from the source wish list. |
| `source_wishlist` - [`Wishlist!`](types-t-z.md#wishlist) | The source wish list after moving products from it. |
| `user_errors` - [`[WishListUserInputError]!`](types-t-z.md#wishlistuserinputerror) | An array of errors encountered while moving products to a wish list. |

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
| `available_payment_methods` - [`[AvailablePaymentMethod]`](types-a-b.md#availablepaymentmethod) | An array of payment methods that can be applied to the negotiable quote. |
| `billing_address` - [`NegotiableQuoteBillingAddress`](#negotiablequotebillingaddress) | The billing address applied to the negotiable quote. |
| `buyer` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The first and last name of the buyer. |
| `comments` - [`[NegotiableQuoteComment]`](#negotiablequotecomment) | A list of comments made by the buyer and seller. |
| `created_at` - [`String`](types-q-s.md#string) | Timestamp indicating when the negotiable quote was created. |
| `email` - [`String`](types-q-s.md#string) | The email address of the company user. |
| `history` - [`[NegotiableQuoteHistoryEntry]`](#negotiablequotehistoryentry) | A list of status and price changes for the negotiable quote. |
| `is_virtual` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the negotiable quote contains only virtual products. |
| `items` - [`[CartItemInterface]`](types-c-e.md#cartiteminterface) | The list of items in the negotiable quote. |
| `name` - [`String!`](types-q-s.md#string) | The title assigned to the negotiable quote. |
| `prices` - [`CartPrices`](types-c-e.md#cartprices) | A set of subtotals and totals applied to the negotiable quote. |
| `selected_payment_method` - [`SelectedPaymentMethod`](types-q-s.md#selectedpaymentmethod) | The payment method that was applied to the negotiable quote. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote. |
| `status` - [`NegotiableQuoteStatus!`](#negotiablequotestatus) | The status of the negotiable quote. |
| `total_quantity` - [`Float!`](types-f-i.md#float) | The total number of items in the negotiable quote. |
| `uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuote` object. |
| `updated_at` - [`String`](types-q-s.md#string) | Timestamp indicating when the negotiable quote was updated. |

#### Example

```json
{
  "available_payment_methods": [AvailablePaymentMethod],
  "billing_address": NegotiableQuoteBillingAddress,
  "buyer": NegotiableQuoteUser,
  "comments": [NegotiableQuoteComment],
  "created_at": "xyz789",
  "email": "xyz789",
  "history": [NegotiableQuoteHistoryEntry],
  "is_virtual": false,
  "items": [CartItemInterface],
  "name": "xyz789",
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
| `code` - [`String!`](types-q-s.md#string) | The address country code. |
| `label` - [`String!`](types-q-s.md#string) | The display name of the region. |

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
| `city` - [`String!`](types-q-s.md#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](types-q-s.md#string) | The company name. |
| `country_code` - [`String!`](types-q-s.md#string) | The country code and label for the billing or shipping address. |
| `firstname` - [`String!`](types-q-s.md#string) | The first name of the company user. |
| `lastname` - [`String!`](types-q-s.md#string) | The last name of the company user. |
| `postcode` - [`String`](types-q-s.md#string) | The ZIP or postal code of the billing or shipping address. |
| `region` - [`String`](types-q-s.md#string) | A string that defines the state or province of the billing or shipping address. |
| `region_id` - [`Int`](types-f-i.md#int) | An integer that defines the state or province of the billing or shipping address. |
| `save_in_address_book` - [`Boolean`](types-a-b.md#boolean) | Determines whether to save the address in the customer's address book. The default value is true. |
| `street` - [`[String]!`](types-q-s.md#string) | An array containing the street for the billing or shipping address. |
| `telephone` - [`String`](types-q-s.md#string) | The telephone number for the billing or shipping address. |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country_code": "abc123",
  "firstname": "xyz789",
  "lastname": "abc123",
  "postcode": "xyz789",
  "region": "abc123",
  "region_id": 987,
  "save_in_address_book": false,
  "street": ["abc123"],
  "telephone": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteAddressInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](types-q-s.md#string) | The company's city or town. |
| `company` - [`String`](types-q-s.md#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company's country. |
| `firstname` - [`String!`](types-q-s.md#string) | The first name of the company user. |
| `lastname` - [`String!`](types-q-s.md#string) | The last name of the company user. |
| `postcode` - [`String`](types-q-s.md#string) | The company's ZIP or postal code. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](types-q-s.md#string) | An array of strings that define the street number and name. |
| `telephone` - [`String`](types-q-s.md#string) | The customer's telephone number. |

#### Possible Types

| NegotiableQuoteAddressInterface Types |
|----------------|
| [`NegotiableQuoteShippingAddress`](#negotiablequoteshippingaddress) |
| [`NegotiableQuoteBillingAddress`](#negotiablequotebillingaddress) |

#### Example

```json
{
  "city": "xyz789",
  "company": "abc123",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "abc123",
  "lastname": "abc123",
  "postcode": "xyz789",
  "region": NegotiableQuoteAddressRegion,
  "street": ["abc123"],
  "telephone": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteAddressRegion

Defines the company's state or province.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](types-q-s.md#string) | The address region code. |
| `label` - [`String`](types-q-s.md#string) | The display name of the region. |
| `region_id` - [`Int`](types-f-i.md#int) | The unique ID for a pre-defined region. |

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
| `city` - [`String!`](types-q-s.md#string) | The company's city or town. |
| `company` - [`String`](types-q-s.md#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company's country. |
| `firstname` - [`String!`](types-q-s.md#string) | The first name of the company user. |
| `lastname` - [`String!`](types-q-s.md#string) | The last name of the company user. |
| `postcode` - [`String`](types-q-s.md#string) | The company's ZIP or postal code. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](types-q-s.md#string) | An array of strings that define the street number and name. |
| `telephone` - [`String`](types-q-s.md#string) | The customer's telephone number. |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "xyz789",
  "lastname": "xyz789",
  "postcode": "xyz789",
  "region": NegotiableQuoteAddressRegion,
  "street": ["abc123"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteBillingAddressInput

Defines the billing address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | Defines a billing address. |
| `customer_address_uid` - [`ID`](types-f-i.md#id) | The unique ID of a `CustomerAddress` object. |
| `same_as_shipping` - [`Boolean`](types-a-b.md#boolean) | Indicates whether to set the billing address to be the same as the existing shipping address on the negotiable quote. |
| `use_for_shipping` - [`Boolean`](types-a-b.md#boolean) | Indicates whether to set the shipping address to be the same as this billing address. |

#### Example

```json
{
  "address": NegotiableQuoteAddressInput,
  "customer_address_uid": 4,
  "same_as_shipping": true,
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
| `created_at` - [`String!`](types-q-s.md#string) | Timestamp indicating when the comment was created. |
| `creator_type` - [`NegotiableQuoteCommentCreatorType!`](#negotiablequotecommentcreatortype) | Indicates whether a buyer or seller commented. |
| `text` - [`String!`](types-q-s.md#string) | The plain text comment. |
| `uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuoteComment` object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "created_at": "abc123",
  "creator_type": "BUYER",
  "text": "xyz789",
  "uid": 4
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
| `comment` - [`String!`](types-q-s.md#string) | The comment provided by the buyer. |

#### Example

```json
{"comment": "abc123"}
```

<HorizontalLine />

### NegotiableQuoteCustomLogChange

Contains custom log entries added by third-party extensions.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_value` - [`String!`](types-q-s.md#string) | The new entry content. |
| `old_value` - [`String`](types-q-s.md#string) | The previous entry in the custom log. |
| `title` - [`String!`](types-q-s.md#string) | The title of the custom log entry. |

#### Example

```json
{
  "new_value": "abc123",
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
| `ids` - [`FilterEqualTypeInput`](types-f-i.md#filterequaltypeinput) | Filter by the ID of one or more negotiable quotes. |
| `name` - [`FilterMatchTypeInput`](types-f-i.md#filtermatchtypeinput) | Filter by the negotiable quote name. |

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
| `comment` - [`String!`](types-q-s.md#string) | A plain text comment submitted by a seller or buyer. |

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
| `created_at` - [`String`](types-q-s.md#string) | Timestamp indicating when the negotiable quote entry was created. |
| `uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuoteHistoryEntry` object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "change_type": "CREATED",
  "changes": NegotiableQuoteHistoryChanges,
  "created_at": "xyz789",
  "uid": 4
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
| `new_expiration` - [`String`](types-q-s.md#string) | The expiration date after the change. The value will be 'null' if not set. |
| `old_expiration` - [`String`](types-q-s.md#string) | The previous expiration date. The value will be 'null' if not previously set. |

#### Example

```json
{
  "new_expiration": "xyz789",
  "old_expiration": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteHistoryProductsRemovedChange

Contains lists of products that have been removed from the catalog and negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `products_removed_from_catalog` - [`[ID]`](types-f-i.md#id) | A list of product IDs the seller removed from the catalog. |
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
| `message` - [`String!`](types-q-s.md#string) | The returned error message. |

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
| `quantity` - [`Float!`](types-f-i.md#float) | The new quantity of the negotiable quote item. |
| `quote_item_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `CartItemInterface` object. |

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
| `code` - [`String!`](types-q-s.md#string) | Payment method code |
| `purchase_order_number` - [`String`](types-q-s.md#string) | The purchase order number. Optional for most payment methods. |

#### Example

```json
{
  "code": "xyz789",
  "purchase_order_number": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteShippingAddress

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_shipping_methods` - [`[AvailableShippingMethod]`](types-a-b.md#availableshippingmethod) | An array of shipping methods available to the buyer. |
| `city` - [`String!`](types-q-s.md#string) | The company's city or town. |
| `company` - [`String`](types-q-s.md#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company's country. |
| `firstname` - [`String!`](types-q-s.md#string) | The first name of the company user. |
| `lastname` - [`String!`](types-q-s.md#string) | The last name of the company user. |
| `postcode` - [`String`](types-q-s.md#string) | The company's ZIP or postal code. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `selected_shipping_method` - [`SelectedShippingMethod`](types-q-s.md#selectedshippingmethod) | The selected shipping method. |
| `street` - [`[String]!`](types-q-s.md#string) | An array of strings that define the street number and name. |
| `telephone` - [`String`](types-q-s.md#string) | The customer's telephone number. |

#### Example

```json
{
  "available_shipping_methods": [AvailableShippingMethod],
  "city": "abc123",
  "company": "abc123",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "abc123",
  "lastname": "xyz789",
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
| `customer_address_uid` - [`ID`](types-f-i.md#id) | An ID from the company user's address book that uniquely identifies the address to be used for shipping. |
| `customer_notes` - [`String`](types-q-s.md#string) | Text provided by the company user. |

#### Example

```json
{
  "address": NegotiableQuoteAddressInput,
  "customer_address_uid": 4,
  "customer_notes": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteSortInput

Defines the field to use to sort a list of negotiable quotes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sort_direction` - [`SortEnum!`](types-q-s.md#sortenum) | Whether to return results in ascending or descending order. |
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
| `expiration_date` - [`String!`](types-q-s.md#string) | The expiration period of the negotiable quote template. |
| `history` - [`[NegotiableQuoteHistoryEntry]`](#negotiablequotehistoryentry) | A list of status and price changes for the negotiable quote template. |
| `is_min_max_qty_used` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the minimum and maximum quantity settings are used. |
| `is_virtual` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the negotiable quote template contains only virtual products. |
| `items` - [`[CartItemInterface]`](types-c-e.md#cartiteminterface) | The list of items in the negotiable quote template. |
| `max_order_commitment` - [`Int!`](types-f-i.md#int) | Commitment for maximum orders |
| `min_order_commitment` - [`Int!`](types-f-i.md#int) | Commitment for minimum orders |
| `name` - [`String!`](types-q-s.md#string) | The title assigned to the negotiable quote template. |
| `notifications` - [`[QuoteTemplateNotificationMessage]`](types-q-s.md#quotetemplatenotificationmessage) | A list of notifications for the negotiable quote template. |
| `prices` - [`CartPrices`](types-c-e.md#cartprices) | A set of subtotals and totals applied to the negotiable quote template. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote template. |
| `status` - [`String!`](types-q-s.md#string) | The status of the negotiable quote template. |
| `template_id` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuoteTemplate` object. |
| `total_quantity` - [`Float!`](types-f-i.md#float) | The total number of items in the negotiable quote template. |

#### Example

```json
{
  "buyer": NegotiableQuoteUser,
  "comments": [NegotiableQuoteComment],
  "expiration_date": "abc123",
  "history": [NegotiableQuoteHistoryEntry],
  "is_min_max_qty_used": false,
  "is_virtual": false,
  "items": [CartItemInterface],
  "max_order_commitment": 123,
  "min_order_commitment": 123,
  "name": "abc123",
  "notifications": [QuoteTemplateNotificationMessage],
  "prices": CartPrices,
  "shipping_addresses": [NegotiableQuoteShippingAddress],
  "status": "xyz789",
  "template_id": "4",
  "total_quantity": 987.65
}
```

<HorizontalLine />

### NegotiableQuoteTemplateFilterInput

Defines a filter to limit the negotiable quotes to return.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `state` - [`FilterEqualTypeInput`](types-f-i.md#filterequaltypeinput) | Filter by state of one or more negotiable quote templates. |
| `status` - [`FilterEqualTypeInput`](types-f-i.md#filterequaltypeinput) | Filter by status of one or more negotiable quote templates. |

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
| `activated_at` - [`String!`](types-q-s.md#string) | The date and time the negotiable quote template was activated. |
| `company_name` - [`String!`](types-q-s.md#string) | Company name the quote template is assigned to |
| `expiration_date` - [`String!`](types-q-s.md#string) | The expiration period of the negotiable quote template. |
| `is_min_max_qty_used` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the minimum and maximum quantity settings are used. |
| `last_shared_at` - [`String!`](types-q-s.md#string) | The date and time the negotiable quote template was last shared. |
| `max_order_commitment` - [`Int!`](types-f-i.md#int) | Commitment for maximum orders |
| `min_negotiated_grand_total` - [`Float!`](types-f-i.md#float) | The minimum negotiated grand total of the negotiable quote template. |
| `min_order_commitment` - [`Int!`](types-f-i.md#int) | Commitment for minimum orders |
| `name` - [`String!`](types-q-s.md#string) | The title assigned to the negotiable quote template. |
| `orders_placed` - [`Int!`](types-f-i.md#int) | The number of orders placed for the negotiable quote template. |
| `sales_rep_name` - [`String!`](types-q-s.md#string) | The first and last name of the sales representative. |
| `state` - [`String!`](types-q-s.md#string) | State of the negotiable quote template. |
| `status` - [`String!`](types-q-s.md#string) | The status of the negotiable quote template. |
| `submitted_by` - [`String!`](types-q-s.md#string) | The first and last name of the buyer. |
| `template_id` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{
  "activated_at": "xyz789",
  "company_name": "xyz789",
  "expiration_date": "abc123",
  "is_min_max_qty_used": true,
  "last_shared_at": "xyz789",
  "max_order_commitment": 123,
  "min_negotiated_grand_total": 987.65,
  "min_order_commitment": 123,
  "name": "xyz789",
  "orders_placed": 123,
  "sales_rep_name": "xyz789",
  "state": "abc123",
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
| `item_id` - [`ID!`](types-f-i.md#id) | The unique ID of a `CartItemInterface` object. |
| `max_qty` - [`Float`](types-f-i.md#float) | The new max quantity of the negotiable quote template item. Only used if is_min_max_qty_used is true on the template. |
| `min_qty` - [`Float`](types-f-i.md#float) | The new min quantity of the negotiable quote template item. Only used if is_min_max_qty_used is true on the template. |
| `quantity` - [`Float!`](types-f-i.md#float) | The new quantity of the negotiable quote item. |

#### Example

```json
{"item_id": 4, "max_qty": 123.45, "min_qty": 987.65, "quantity": 123.45}
```

<HorizontalLine />

### NegotiableQuoteTemplateShippingAddressInput

Defines shipping addresses for the negotiable quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | A shipping address. |
| `customer_address_uid` - [`ID`](types-f-i.md#id) | An ID from the company user's address book that uniquely identifies the address to be used for shipping. |
| `customer_notes` - [`String`](types-q-s.md#string) | Text provided by the company user. |

#### Example

```json
{
  "address": NegotiableQuoteAddressInput,
  "customer_address_uid": "4",
  "customer_notes": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteTemplateSortInput

Defines the field to use to sort a list of negotiable quotes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sort_direction` - [`SortEnum!`](types-q-s.md#sortenum) | Whether to return results in ascending or descending order. |
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
| `page_info` - [`SearchResultPageInfo!`](types-q-s.md#searchresultpageinfo) | Contains pagination metadata |
| `sort_fields` - [`SortFields`](types-q-s.md#sortfields) | Contains the default sort field and all available sort fields. |
| `total_count` - [`Int!`](types-f-i.md#int) | The number of negotiable quote templates returned |

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
| `quote_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuote` object. |

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
| `quote_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuote` object. |

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
| `firstname` - [`String!`](types-q-s.md#string) | The first name of the buyer or seller making a change. |
| `lastname` - [`String!`](types-q-s.md#string) | The buyer's or seller's last name. |

#### Example

```json
{
  "firstname": "xyz789",
  "lastname": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuotesOutput

Contains a list of negotiable that match the specified filter.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[NegotiableQuote]!`](#negotiablequote) | A list of negotiable quotes |
| `page_info` - [`SearchResultPageInfo!`](types-q-s.md#searchresultpageinfo) | Contains pagination metadata |
| `sort_fields` - [`SortFields`](types-q-s.md#sortfields) | Contains the default sort field and all available sort fields. |
| `total_count` - [`Int!`](types-f-i.md#int) | The number of negotiable quotes returned |

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
| `message` - [`String!`](types-q-s.md#string) | The returned error message. |
| `uid` - [`ID!`](types-f-i.md#id) | The specified invalid unique ID of an object. |

#### Example

```json
{"message": "xyz789", "uid": 4}
```

<HorizontalLine />

### OpenNegotiableQuoteTemplateInput

Specifies the quote template id to open quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

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
| `order_id` - [`String`](types-q-s.md#string) |  *(Deprecated: Use `order_number` instead.)* |
| `order_number` - [`String!`](types-q-s.md#string) | The unique ID for an `Order` object. |

#### Example

```json
{
  "order_id": "abc123",
  "order_number": "xyz789"
}
```

<HorizontalLine />

### OrderAddress

Contains detailed information about an order's billing and shipping addresses.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](types-q-s.md#string) | The city or town. |
| `company` - [`String`](types-q-s.md#string) | The customer's company. |
| `country_code` - [`CountryCodeEnum`](types-c-e.md#countrycodeenum) | The customer's country. |
| `fax` - [`String`](types-q-s.md#string) | The fax number. |
| `firstname` - [`String!`](types-q-s.md#string) | The first name of the person associated with the shipping/billing address. |
| `lastname` - [`String!`](types-q-s.md#string) | The family name of the person associated with the shipping/billing address. |
| `middlename` - [`String`](types-q-s.md#string) | The middle name of the person associated with the shipping/billing address. |
| `postcode` - [`String`](types-q-s.md#string) | The customer's ZIP or postal code. |
| `prefix` - [`String`](types-q-s.md#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`String`](types-q-s.md#string) | The state or province name. |
| `region_id` - [`ID`](types-f-i.md#id) | The unique ID for a `Region` object of a pre-defined region. |
| `street` - [`[String]!`](types-q-s.md#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](types-q-s.md#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](types-q-s.md#string) | The telephone number. |
| `vat_id` - [`String`](types-q-s.md#string) | The customer's Value-added tax (VAT) number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country_code": "AF",
  "fax": "xyz789",
  "firstname": "abc123",
  "lastname": "xyz789",
  "middlename": "xyz789",
  "postcode": "xyz789",
  "prefix": "xyz789",
  "region": "xyz789",
  "region_id": 4,
  "street": ["xyz789"],
  "suffix": "abc123",
  "telephone": "xyz789",
  "vat_id": "xyz789"
}
```

<HorizontalLine />

### OrderInformationInput

Input to retrieve an order based on details.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](types-q-s.md#string) | Order billing address email. |
| `number` - [`String!`](types-q-s.md#string) | Order number. |
| `postcode` - [`String!`](types-q-s.md#string) | Order billing address postcode. |

#### Example

```json
{
  "email": "abc123",
  "number": "abc123",
  "postcode": "abc123"
}
```

<HorizontalLine />

### OrderItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](types-c-e.md#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](types-f-i.md#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](types-f-i.md#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](types-f-i.md#id) | The unique ID for an `OrderItemInterface` object. |
| `product` - [`ProductInterface`](#productinterface) | The ProductInterface object, which contains details about the base product |
| `product_name` - [`String`](types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](types-q-s.md#string) | The SKU of the base product. |
| `product_type` - [`String`](types-q-s.md#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](types-q-s.md#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](types-f-i.md#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](types-f-i.md#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](types-f-i.md#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](types-f-i.md#float) | The number of refunded items. |
| `quantity_returned` - [`Float`](types-f-i.md#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](types-f-i.md#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](types-q-s.md#string) | The status of the order item. |

#### Example

```json
{
  "discounts": [Discount],
  "eligible_for_return": false,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "product": ProductInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "xyz789",
  "quantity_canceled": 987.65,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
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
| `discounts` - [`[Discount]`](types-c-e.md#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](types-f-i.md#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](types-f-i.md#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](types-f-i.md#id) | The unique ID for an `OrderItemInterface` object. |
| `product` - [`ProductInterface`](#productinterface) | The ProductInterface object, which contains details about the base product |
| `product_name` - [`String`](types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](types-q-s.md#string) | The SKU of the base product. |
| `product_type` - [`String`](types-q-s.md#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](types-q-s.md#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](types-f-i.md#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](types-f-i.md#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](types-f-i.md#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](types-f-i.md#float) | The number of refunded items. |
| `quantity_returned` - [`Float`](types-f-i.md#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](types-f-i.md#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](types-q-s.md#string) | The status of the order item. |

#### Possible Types

| OrderItemInterface Types |
|----------------|
| [`DownloadableOrderItem`](types-c-e.md#downloadableorderitem) |
| [`BundleOrderItem`](types-a-b.md#bundleorderitem) |
| [`GiftCardOrderItem`](types-f-i.md#giftcardorderitem) |
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
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "xyz789",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
  "quantity_returned": 123.45,
  "quantity_shipped": 987.65,
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
| `label` - [`String!`](types-q-s.md#string) | The name of the option. |
| `value` - [`String!`](types-q-s.md#string) | The value of the option. |

#### Example

```json
{
  "label": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### OrderPaymentMethod

Contains details about the payment method used to pay for the order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `additional_data` - [`[KeyValue]`](#keyvalue) | Additional data per payment method type. |
| `name` - [`String!`](types-q-s.md#string) | The label that describes the payment method. |
| `type` - [`String!`](types-q-s.md#string) | The payment method code that indicates how the order was paid for. |

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
| `comments` - [`[SalesCommentItem]`](types-q-s.md#salescommentitem) | Comments added to the shipment. |
| `id` - [`ID!`](types-f-i.md#id) | The unique ID for a `OrderShipment` object. |
| `items` - [`[ShipmentItemInterface]`](types-q-s.md#shipmentiteminterface) | An array of items included in the shipment. |
| `number` - [`String!`](types-q-s.md#string) | The sequential credit shipment number. |
| `tracking` - [`[ShipmentTracking]`](types-q-s.md#shipmenttracking) | An array of shipment tracking details. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "id": "4",
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
| `token` - [`String!`](types-q-s.md#string) | Order token. |

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
| `discounts` - [`[Discount]`](types-c-e.md#discount) | The applied discounts to the order. |
| `grand_total` - [`Money!`](#money) | The final total amount, including shipping, discounts, and taxes. |
| `shipping_handling` - [`ShippingHandling`](types-q-s.md#shippinghandling) | Details about the shipping and handling costs for the order. |
| `subtotal` - [`Money!`](#money) | The subtotal of the order, excluding shipping, discounts, and taxes. |
| `taxes` - [`[TaxItem]`](types-t-z.md#taxitem) | The order tax details. |
| `total_giftcard` - [`Money`](#money) | The gift card balance applied to the order. |
| `total_shipping` - [`Money!`](#money) | The shipping amount for the order. |
| `total_tax` - [`Money!`](#money) | The amount of tax applied to the order. |

#### Example

```json
{
  "base_grand_total": Money,
  "discounts": [Discount],
  "grand_total": Money,
  "shipping_handling": ShippingHandling,
  "subtotal": Money,
  "taxes": [TaxItem],
  "total_giftcard": Money,
  "total_shipping": Money,
  "total_tax": Money
}
```

<HorizontalLine />

### PayflowExpressInput

Contains required input for Payflow Express Checkout payments.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payer_id` - [`String!`](types-q-s.md#string) | The unique ID of the PayPal user. |
| `token` - [`String!`](types-q-s.md#string) | The token returned by the createPaypalExpressToken mutation. |

#### Example

```json
{
  "payer_id": "xyz789",
  "token": "abc123"
}
```

<HorizontalLine />

### PayflowLinkInput

A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](types-q-s.md#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `error_url` - [`String!`](types-q-s.md#string) | The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. |
| `return_url` - [`String!`](types-q-s.md#string) | The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |

#### Example

```json
{
  "cancel_url": "abc123",
  "error_url": "xyz789",
  "return_url": "abc123"
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
| `paypal_url` - [`String`](types-q-s.md#string) | The PayPal URL used for requesting a Payflow form. |
| `secure_token` - [`String`](types-q-s.md#string) | The secure token generated by PayPal. |
| `secure_token_id` - [`String`](types-q-s.md#string) | The secure token ID generated by PayPal. |

#### Example

```json
{
  "mode": "TEST",
  "paypal_url": "abc123",
  "secure_token": "xyz789",
  "secure_token_id": "abc123"
}
```

<HorizontalLine />

### PayflowLinkTokenInput

Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](types-q-s.md#string) | The unique ID that identifies the customer's cart. |

#### Example

```json
{"cart_id": "xyz789"}
```

<HorizontalLine />

### PayflowProInput

Contains input for the Payflow Pro and Payments Pro payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cc_details` - [`CreditCardDetailsInput!`](types-c-e.md#creditcarddetailsinput) | Required input for credit card related information. |
| `is_active_payment_token_enabler` - [`Boolean`](types-a-b.md#boolean) | Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. |

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
| `cart_id` - [`String!`](types-q-s.md#string) | The unique ID that identifies the shopper's cart. |
| `paypal_payload` - [`String!`](types-q-s.md#string) | The payload returned from PayPal. |

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
| `cart` - [`Cart!`](types-c-e.md#cart) | The cart with the updated selected payment method. |

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
| `cart_id` - [`String!`](types-q-s.md#string) | The unique ID that identifies the shopper's cart. |
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
| `cancel_url` - [`String!`](types-q-s.md#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `error_url` - [`String!`](types-q-s.md#string) | The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. |
| `return_url` - [`String!`](types-q-s.md#string) | The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |

#### Example

```json
{
  "cancel_url": "xyz789",
  "error_url": "abc123",
  "return_url": "abc123"
}
```

<HorizontalLine />

### PaymentConfigItem

Contains payment fields that are common to all types of payment methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](types-q-s.md#string) | The payment method code as defined in the payment gateway |
| `is_visible` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](types-q-s.md#string) | Defines the payment intent (Authorize or Capture |
| `sdk_params` - [`[SDKParams]`](types-q-s.md#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](types-q-s.md#string) | The relative order the payment method is displayed on the checkout page |
| `title` - [`String`](types-q-s.md#string) | The name displayed for the payment method |

#### Possible Types

| PaymentConfigItem Types |
|----------------|
| [`HostedFieldsConfig`](types-f-i.md#hostedfieldsconfig) |
| [`SmartButtonsConfig`](types-q-s.md#smartbuttonsconfig) |
| [`ApplePayConfig`](types-a-b.md#applepayconfig) |
| [`GooglePayConfig`](types-f-i.md#googlepayconfig) |

#### Example

```json
{
  "code": "xyz789",
  "is_visible": true,
  "payment_intent": "abc123",
  "sdk_params": [SDKParams],
  "sort_order": "abc123",
  "title": "xyz789"
}
```

<HorizontalLine />

### PaymentConfigOutput

Retrieves the payment configuration for a given location

#### Fields

| Field Name | Description |
|------------|-------------|
| `apple_pay` - [`ApplePayConfig`](types-a-b.md#applepayconfig) | ApplePay payment method configuration |
| `google_pay` - [`GooglePayConfig`](types-f-i.md#googlepayconfig) | GooglePay payment method configuration |
| `hosted_fields` - [`HostedFieldsConfig`](types-f-i.md#hostedfieldsconfig) | Hosted fields payment method configuration |
| `smart_buttons` - [`SmartButtonsConfig`](types-q-s.md#smartbuttonsconfig) | Smart Buttons payment method configuration |

#### Example

```json
{
  "apple_pay": ApplePayConfig,
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
| `braintree` - [`BraintreeInput`](types-a-b.md#braintreeinput) |  |
| `braintree_ach_direct_debit` - [`BraintreeInput`](types-a-b.md#braintreeinput) |  |
| `braintree_ach_direct_debit_vault` - [`BraintreeVaultInput`](types-a-b.md#braintreevaultinput) |  |
| `braintree_applepay_vault` - [`BraintreeVaultInput`](types-a-b.md#braintreevaultinput) |  |
| `braintree_cc_vault` - [`BraintreeCcVaultInput`](types-a-b.md#braintreeccvaultinput) |  |
| `braintree_googlepay_vault` - [`BraintreeVaultInput`](types-a-b.md#braintreevaultinput) |  |
| `braintree_paypal` - [`BraintreeInput`](types-a-b.md#braintreeinput) |  |
| `braintree_paypal_vault` - [`BraintreeVaultInput`](types-a-b.md#braintreevaultinput) |  |
| `code` - [`String!`](types-q-s.md#string) | The internal name for the payment method. |
| `hosted_pro` - [`HostedProInput`](types-f-i.md#hostedproinput) | Required input for PayPal Hosted pro payments. |
| `payflow_express` - [`PayflowExpressInput`](#payflowexpressinput) | Required input for Payflow Express Checkout payments. |
| `payflow_link` - [`PayflowLinkInput`](#payflowlinkinput) | Required input for PayPal Payflow Link and Payments Advanced payments. |
| `payflowpro` - [`PayflowProInput`](#payflowproinput) | Required input for PayPal Payflow Pro and Payment Pro payments. |
| `payflowpro_cc_vault` - [`VaultTokenInput`](types-t-z.md#vaulttokeninput) | Required input for PayPal Payflow Pro vault payments. |
| `payment_services_paypal_apple_pay` - [`ApplePayMethodInput`](types-a-b.md#applepaymethodinput) | Required input for Apple Pay button |
| `payment_services_paypal_google_pay` - [`GooglePayMethodInput`](types-f-i.md#googlepaymethodinput) | Required input for Google Pay button |
| `payment_services_paypal_hosted_fields` - [`HostedFieldsInput`](types-f-i.md#hostedfieldsinput) | Required input for Hosted Fields |
| `payment_services_paypal_smart_buttons` - [`SmartButtonMethodInput`](types-q-s.md#smartbuttonmethodinput) | Required input for Smart buttons |
| `payment_services_paypal_vault` - [`VaultMethodInput`](types-t-z.md#vaultmethodinput) | Required input for vault |
| `paypal_express` - [`PaypalExpressInput`](#paypalexpressinput) | Required input for Express Checkout and Payments Standard payments. |
| `purchase_order_number` - [`String`](types-q-s.md#string) | The purchase order number. Optional for most payment methods. |

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
  "code": "xyz789",
  "hosted_pro": HostedProInput,
  "payflow_express": PayflowExpressInput,
  "payflow_link": PayflowLinkInput,
  "payflowpro": PayflowProInput,
  "payflowpro_cc_vault": VaultTokenInput,
  "payment_services_paypal_apple_pay": ApplePayMethodInput,
  "payment_services_paypal_google_pay": GooglePayMethodInput,
  "payment_services_paypal_hosted_fields": HostedFieldsInput,
  "payment_services_paypal_smart_buttons": SmartButtonMethodInput,
  "payment_services_paypal_vault": VaultMethodInput,
  "paypal_express": PaypalExpressInput,
  "purchase_order_number": "abc123"
}
```

<HorizontalLine />

### PaymentOrderOutput

Contains the payment order details

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`String`](types-q-s.md#string) | PayPal order ID |
| `mp_order_id` - [`String`](types-q-s.md#string) | The order ID generated by Payment Services |
| `payment_source_details` - [`PaymentSourceDetails`](#paymentsourcedetails) | Details about the card used on the order |
| `status` - [`String`](types-q-s.md#string) | The status of the payment order |

#### Example

```json
{
  "id": "abc123",
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
| `code` - [`String`](types-q-s.md#string) | The payment method code used in the order |
| `params` - [`[SDKParams]`](types-q-s.md#sdkparams) | The payment SDK parameters |

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
| `card` - [`Card`](types-c-e.md#card) | Details about the card used on the order |

#### Example

```json
{"card": Card}
```

<HorizontalLine />

### PaymentToken

The stored payment method available to the customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `details` - [`String`](types-q-s.md#string) | A description of the stored account details. |
| `payment_method_code` - [`String!`](types-q-s.md#string) | The payment method code associated with the token. |
| `public_hash` - [`String!`](types-q-s.md#string) | The public hash of the token. |
| `type` - [`PaymentTokenTypeEnum!`](#paymenttokentypeenum) | Specifies the payment token type. |

#### Example

```json
{
  "details": "xyz789",
  "payment_method_code": "xyz789",
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

### PaypalExpressInput

Contains required input for Express Checkout and Payments Standard payments.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payer_id` - [`String!`](types-q-s.md#string) | The unique ID of the PayPal user. |
| `token` - [`String!`](types-q-s.md#string) | The token returned by the `createPaypalExpressToken` mutation. |

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
| `cart_id` - [`String!`](types-q-s.md#string) | The unique ID that identifies the customer's cart. |
| `code` - [`String!`](types-q-s.md#string) | The payment method code. |
| `express_button` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the buyer selected the quick checkout button. The default value is false. |
| `urls` - [`PaypalExpressUrlsInput!`](#paypalexpressurlsinput) | A set of relative URLs that PayPal uses in response to various actions during the authorization process. |
| `use_paypal_credit` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the buyer clicked the PayPal credit button. The default value is false. |

#### Example

```json
{
  "cart_id": "abc123",
  "code": "abc123",
  "express_button": true,
  "urls": PaypalExpressUrlsInput,
  "use_paypal_credit": true
}
```

<HorizontalLine />

### PaypalExpressTokenOutput

Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `paypal_urls` - [`PaypalExpressUrlList`](#paypalexpressurllist) | A set of URLs that allow the buyer to authorize payment and adjust checkout details. |
| `token` - [`String`](types-q-s.md#string) | The token returned by PayPal. |

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
| `edit` - [`String`](types-q-s.md#string) | The PayPal URL that allows the buyer to edit their checkout details. |
| `start` - [`String`](types-q-s.md#string) | The URL to the PayPal login page. |

#### Example

```json
{
  "edit": "abc123",
  "start": "xyz789"
}
```

<HorizontalLine />

### PaypalExpressUrlsInput

Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](types-q-s.md#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `pending_url` - [`String`](types-q-s.md#string) | The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. |
| `return_url` - [`String!`](types-q-s.md#string) | The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |
| `success_url` - [`String`](types-q-s.md#string) | The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. |

#### Example

```json
{
  "cancel_url": "xyz789",
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
| `weight` - [`Float`](types-f-i.md#float) | The weight of the item, in units defined by the store. |

#### Possible Types

| PhysicalProductInterface Types |
|----------------|
| [`SimpleProduct`](types-q-s.md#simpleproduct) |
| [`ConfigurableProduct`](types-c-e.md#configurableproduct) |
| [`BundleProduct`](types-a-b.md#bundleproduct) |
| [`GiftCardProduct`](types-f-i.md#giftcardproduct) |
| [`GroupedProduct`](types-f-i.md#groupedproduct) |

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
| `city` - [`String`](types-q-s.md#string) |  |
| `contact_name` - [`String`](types-q-s.md#string) |  |
| `country_id` - [`String`](types-q-s.md#string) |  |
| `description` - [`String`](types-q-s.md#string) |  |
| `email` - [`String`](types-q-s.md#string) |  |
| `fax` - [`String`](types-q-s.md#string) |  |
| `latitude` - [`Float`](types-f-i.md#float) |  |
| `longitude` - [`Float`](types-f-i.md#float) |  |
| `name` - [`String`](types-q-s.md#string) |  |
| `phone` - [`String`](types-q-s.md#string) |  |
| `pickup_location_code` - [`String`](types-q-s.md#string) |  |
| `postcode` - [`String`](types-q-s.md#string) |  |
| `region` - [`String`](types-q-s.md#string) |  |
| `region_id` - [`Int`](types-f-i.md#int) |  |
| `street` - [`String`](types-q-s.md#string) |  |

#### Example

```json
{
  "city": "xyz789",
  "contact_name": "abc123",
  "country_id": "abc123",
  "description": "abc123",
  "email": "abc123",
  "fax": "abc123",
  "latitude": 987.65,
  "longitude": 987.65,
  "name": "xyz789",
  "phone": "abc123",
  "pickup_location_code": "xyz789",
  "postcode": "xyz789",
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
| `city` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Filter by city. |
| `country_id` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Filter by country. |
| `name` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Filter by pickup location name. |
| `pickup_location_code` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Filter by pickup location code. |
| `postcode` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Filter by postcode. |
| `region` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Filter by region. |
| `region_id` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Filter by region id. |
| `street` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Filter by street. |

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
| `city` - [`SortEnum`](types-q-s.md#sortenum) | City where pickup location is placed. |
| `contact_name` - [`SortEnum`](types-q-s.md#sortenum) | Name of the contact person. |
| `country_id` - [`SortEnum`](types-q-s.md#sortenum) | Id of the country in two letters. |
| `description` - [`SortEnum`](types-q-s.md#sortenum) | Description of the pickup location. |
| `distance` - [`SortEnum`](types-q-s.md#sortenum) | Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. |
| `email` - [`SortEnum`](types-q-s.md#sortenum) | Contact email of the pickup location. |
| `fax` - [`SortEnum`](types-q-s.md#sortenum) | Contact fax of the pickup location. |
| `latitude` - [`SortEnum`](types-q-s.md#sortenum) | Geographic latitude where pickup location is placed. |
| `longitude` - [`SortEnum`](types-q-s.md#sortenum) | Geographic longitude where pickup location is placed. |
| `name` - [`SortEnum`](types-q-s.md#sortenum) | The pickup location name. Customer use this to identify the pickup location. |
| `phone` - [`SortEnum`](types-q-s.md#sortenum) | Contact phone number of the pickup location. |
| `pickup_location_code` - [`SortEnum`](types-q-s.md#sortenum) | A code assigned to pickup location to identify the source. |
| `postcode` - [`SortEnum`](types-q-s.md#sortenum) | Postcode where pickup location is placed. |
| `region` - [`SortEnum`](types-q-s.md#sortenum) | Name of the region. |
| `region_id` - [`SortEnum`](types-q-s.md#sortenum) | Id of the region. |
| `street` - [`SortEnum`](types-q-s.md#sortenum) | Street where pickup location is placed. |

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
| `page_info` - [`SearchResultPageInfo`](types-q-s.md#searchresultpageinfo) | An object that includes the page_info and currentPage values specified in the query. |
| `total_count` - [`Int`](types-f-i.md#int) | The number of products returned. |

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
| `quote_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a `NegotiableQuote` object. |

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
| `message` - [`String!`](types-q-s.md#string) | A localized error message. |

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
| `purchase_order_uid` - [`ID!`](types-f-i.md#id) | The unique ID of a purchase order. |

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
| `order` - [`CustomerOrder!`](types-c-e.md#customerorder) | Placed order. |

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
| `cart_id` - [`String!`](types-q-s.md#string) | The unique ID of a `Cart` object. |

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
| `order` - [`Order`](#order) | The ID of the order. *(Deprecated: Use `orderV2` instead.)* |
| `orderV2` - [`CustomerOrder`](types-c-e.md#customerorder) | Full order information. |

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
| `cart_id` - [`String!`](types-q-s.md#string) | The unique ID of a `Cart` object. |

#### Example

```json
{"cart_id": "abc123"}
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
| `adjustments` - [`[PriceAdjustment]`](#priceadjustment) | An array that provides information about tax, weee, or weee_tax adjustments. *(Deprecated: Use `ProductPrice` instead.)* |
| `amount` - [`Money`](#money) | The price of a product plus a three-letter currency code. *(Deprecated: Use `ProductPrice` instead.)* |

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
| `code` - [`PriceAdjustmentCodesEnum`](#priceadjustmentcodesenum) | Indicates whether the adjustment involves tax, weee, or weee_tax. *(Deprecated: `PriceAdjustment` is deprecated.)* |
| `description` - [`PriceAdjustmentDescriptionEnum`](#priceadjustmentdescriptionenum) | Indicates whether the entity described by the code attribute is included or excluded from the adjustment. *(Deprecated: `PriceAdjustment` is deprecated.)* |

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
| `TAX` |  *(Deprecated: `PriceAdjustmentCodesEnum` is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog.)* |
| `WEEE` |  *(Deprecated: WEEE code is deprecated. Use `fixed_product_taxes.label` instead.)* |
| `WEEE_TAX` |  *(Deprecated: Use `fixed_product_taxes` instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog.)* |

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
| `discount_percentage` - [`Float`](types-f-i.md#float) | The percentage of discount applied to the main product price |
| `main_final_price` - [`Float`](types-f-i.md#float) | The final price after applying the discount to the main product |
| `main_price` - [`Float`](types-f-i.md#float) | The regular price of the main product |

#### Example

```json
{
  "discount_percentage": 123.45,
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

### ProductAttribute

Contains a product attribute code and value.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](types-q-s.md#string) | The unique identifier for a product attribute code. |
| `value` - [`String!`](types-q-s.md#string) | The display value of the attribute. |

#### Example

```json
{
  "code": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### ProductAttributeFilterInput

Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `category_id` - [`FilterEqualTypeInput`](types-f-i.md#filterequaltypeinput) | Deprecated: use `category_uid` to filter product by category ID. |
| `category_uid` - [`FilterEqualTypeInput`](types-f-i.md#filterequaltypeinput) | Filter product by the unique ID for a `CategoryInterface` object. |
| `category_url_path` - [`FilterEqualTypeInput`](types-f-i.md#filterequaltypeinput) | Filter product by category URL path. |
| `description` - [`FilterMatchTypeInput`](types-f-i.md#filtermatchtypeinput) | Attribute label: Description |
| `name` - [`FilterMatchTypeInput`](types-f-i.md#filtermatchtypeinput) | Attribute label: Product Name |
| `price` - [`FilterRangeTypeInput`](types-f-i.md#filterrangetypeinput) | Attribute label: Price |
| `short_description` - [`FilterMatchTypeInput`](types-f-i.md#filtermatchtypeinput) | Attribute label: Short Description |
| `sku` - [`FilterEqualTypeInput`](types-f-i.md#filterequaltypeinput) | Attribute label: SKU |
| `url_key` - [`FilterEqualTypeInput`](types-f-i.md#filterequaltypeinput) | The part of the URL that identifies the product |

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
| `name` - [`SortEnum`](types-q-s.md#sortenum) | Attribute label: Product Name |
| `position` - [`SortEnum`](types-q-s.md#sortenum) | Sort by the position assigned to each product. |
| `price` - [`SortEnum`](types-q-s.md#sortenum) | Attribute label: Price |
| `relevance` - [`SortEnum`](types-q-s.md#sortenum) | Sort by the search relevance score (default). |

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
| `errors` - [`[AttributeMetadataError]!`](types-a-b.md#attributemetadataerror) | Errors when retrieving custom attributes metadata. |
| `items` - [`[AttributeValueInterface]!`](types-a-b.md#attributevalueinterface) | Requested custom attributes |

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
| `amount_off` - [`Float`](types-f-i.md#float) | The actual value of the discount. |
| `percent_off` - [`Float`](types-f-i.md#float) | The discount expressed a percentage. |

#### Example

```json
{"amount_off": 123.45, "percent_off": 123.45}
```

<HorizontalLine />

### ProductFilterInput

ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `category_id` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The category ID the product belongs to. |
| `country_of_manufacture` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The product's country of origin. |
| `created_at` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The timestamp indicating when the product was created. |
| `custom_layout` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The name of a custom layout. |
| `custom_layout_update` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | XML code that is applied as a layout update to the product page. |
| `description` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Indicates whether a gift message is available. |
| `has_options` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Indicates whether additional attributes have been created for the product. |
| `image` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The relative path to the main image on the product page. |
| `image_label` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The label assigned to a product image. |
| `is_returnable` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Indicates whether the product can be returned. |
| `manufacturer` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | A number representing the product's manufacturer. |
| `max_price` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The numeric maximal price of the product. Do not include the currency code. |
| `meta_description` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_price` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The numeric minimal price of the product. Do not include the currency code. |
| `name` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The product name. Customers use this name to identify the product. |
| `news_from_date` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `news_to_date` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The end date for new product listings. |
| `options_container` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | If the product has multiple options, determines where they appear on the product page. |
| `or` - [`ProductFilterInput`](#productfilterinput) | The keyword required to perform a logical OR comparison. |
| `price` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The price of an item. |
| `required_options` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | Indicates whether the product has required options. |
| `short_description` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | A short description of the product. Its use depends on the theme. |
| `sku` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The relative path to the small image, which is used on catalog pages. |
| `small_image_label` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The label assigned to a product's small image. |
| `special_from_date` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The beginning date that a product has a special price. |
| `special_price` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The discounted price of the product. Do not include the currency code. |
| `special_to_date` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The end date that a product has a special price. |
| `swatch_image` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The file name of a swatch image. |
| `thumbnail` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The relative path to the product's thumbnail image. |
| `thumbnail_label` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The label assigned to a product's thumbnail image. |
| `tier_price` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The price when tier pricing is in effect and the items purchased threshold has been reached. |
| `updated_at` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The timestamp indicating when the product was updated. |
| `url_key` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The part of the URL that identifies the product |
| `url_path` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) |  |
| `weight` - [`FilterTypeInput`](types-f-i.md#filtertypeinput) | The weight of the item, in units defined by the store. |

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
| `disabled` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](types-q-s.md#string) | The label of the product image or video. |
| `position` - [`Int`](types-f-i.md#int) | The media item's position after it has been sorted. |
| `url` - [`String`](types-q-s.md#string) | The URL of the product image or video. |

#### Example

```json
{
  "disabled": true,
  "label": "abc123",
  "position": 987,
  "url": "abc123"
}
```

<HorizontalLine />

### ProductInfoInput

Product Information used for Pickup Locations search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sku` - [`String!`](types-q-s.md#string) | Product SKU. |

#### Example

```json
{"sku": "xyz789"}
```

<HorizontalLine />

### ProductInterface

Contains fields that are common to all types of products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_set_id` - [`Int`](types-f-i.md#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](types-c-e.md#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](types-f-i.md#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `country_of_manufacture` - [`String`](types-q-s.md#string) | The product's country of origin. |
| `created_at` - [`String`](types-q-s.md#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](types-c-e.md#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`String`](types-q-s.md#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](types-f-i.md#int) | The ID number assigned to the product. *(Deprecated: Use the `uid` field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](types-q-s.md#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](types-f-i.md#int) | A number representing the product's manufacturer. *(Deprecated: Use the `custom_attributes` field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use `media_gallery` instead.)* |
| `meta_description` - [`String`](types-q-s.md#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](types-q-s.md#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](types-q-s.md#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](types-q-s.md#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](types-f-i.md#float) | Product stock only x left count |
| `options_container` - [`String`](types-q-s.md#string) | If the product has multiple options, determines where they appear on the product page. |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use `price_range` for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](types-t-z.md#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of `ProductLinks` objects. |
| `rating_summary` - [`Float!`](types-f-i.md#float) | The average of all the ratings given to the product. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `review_count` - [`Int!`](types-f-i.md#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `short_description` - [`ComplexTextValue`](types-c-e.md#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](types-q-s.md#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](types-q-s.md#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](types-f-i.md#float) | The discounted price of the product. |
| `special_to_date` - [`String`](types-q-s.md#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](types-q-s.md#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product's thumbnail image. |
| `tier_price` - [`Float`](types-f-i.md#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `type_id` - [`String`](types-q-s.md#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use `__typename` instead.)* |
| `uid` - [`ID!`](types-f-i.md#id) | The unique ID for a `ProductInterface` object. |
| `updated_at` - [`String`](types-q-s.md#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](types-q-s.md#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](types-q-s.md#string) |  *(Deprecated: Use product's `canonical_url` or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](types-t-z.md#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](types-q-s.md#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](types-t-z.md#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |

#### Possible Types

| ProductInterface Types |
|----------------|
| [`VirtualProduct`](types-t-z.md#virtualproduct) |
| [`SimpleProduct`](types-q-s.md#simpleproduct) |
| [`ConfigurableProduct`](types-c-e.md#configurableproduct) |
| [`DownloadableProduct`](types-c-e.md#downloadableproduct) |
| [`BundleProduct`](types-a-b.md#bundleproduct) |
| [`GiftCardProduct`](types-f-i.md#giftcardproduct) |
| [`GroupedProduct`](types-f-i.md#groupedproduct) |

#### Example

```json
{
  "attribute_set_id": 123,
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "color": 123,
  "country_of_manufacture": "abc123",
  "created_at": "xyz789",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": "abc123",
  "id": 123,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 123,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "xyz789",
  "meta_keyword": "abc123",
  "meta_title": "xyz789",
  "name": "xyz789",
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 123.45,
  "options_container": "abc123",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "rating_summary": 123.45,
  "related_products": [ProductInterface],
  "review_count": 987,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "abc123",
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
  "uid": 4,
  "updated_at": "xyz789",
  "upsell_products": [ProductInterface],
  "url_key": "xyz789",
  "url_path": "xyz789",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "abc123",
  "websites": [Website]
}
```

<HorizontalLine />

### ProductLinks

An implementation of `ProductLinksInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `link_type` - [`String`](types-q-s.md#string) | One of related, associated, upsell, or crosssell. |
| `linked_product_sku` - [`String`](types-q-s.md#string) | The SKU of the linked product. |
| `linked_product_type` - [`String`](types-q-s.md#string) | The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). |
| `position` - [`Int`](types-f-i.md#int) | The position within the list of product links. |
| `sku` - [`String`](types-q-s.md#string) | The identifier of the linked product. |

#### Example

```json
{
  "link_type": "xyz789",
  "linked_product_sku": "xyz789",
  "linked_product_type": "abc123",
  "position": 123,
  "sku": "xyz789"
}
```

<HorizontalLine />

### ProductLinksInterface

Contains information about linked products, including the link type and product type of each item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `link_type` - [`String`](types-q-s.md#string) | One of related, associated, upsell, or crosssell. |
| `linked_product_sku` - [`String`](types-q-s.md#string) | The SKU of the linked product. |
| `linked_product_type` - [`String`](types-q-s.md#string) | The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). |
| `position` - [`Int`](types-f-i.md#int) | The position within the list of product links. |
| `sku` - [`String`](types-q-s.md#string) | The identifier of the linked product. |

#### Possible Types

| ProductLinksInterface Types |
|----------------|
| [`ProductLinks`](#productlinks) |

#### Example

```json
{
  "link_type": "abc123",
  "linked_product_sku": "abc123",
  "linked_product_type": "abc123",
  "position": 123,
  "sku": "xyz789"
}
```

<HorizontalLine />

### ProductMediaGalleryEntriesContent

Contains an image in base64 format and basic information about the image.

#### Fields

| Field Name | Description |
|------------|-------------|
| `base64_encoded_data` - [`String`](types-q-s.md#string) | The image in base64 format. |
| `name` - [`String`](types-q-s.md#string) | The file name of the image. |
| `type` - [`String`](types-q-s.md#string) | The MIME type of the file, such as image/png. |

#### Example

```json
{
  "base64_encoded_data": "xyz789",
  "name": "abc123",
  "type": "abc123"
}
```

<HorizontalLine />

### ProductMediaGalleryEntriesVideoContent

Contains a link to a video file and basic information about the video.

#### Fields

| Field Name | Description |
|------------|-------------|
| `media_type` - [`String`](types-q-s.md#string) | Must be external-video. |
| `video_description` - [`String`](types-q-s.md#string) | A description of the video. |
| `video_metadata` - [`String`](types-q-s.md#string) | Optional data about the video. |
| `video_provider` - [`String`](types-q-s.md#string) | Describes the video source. |
| `video_title` - [`String`](types-q-s.md#string) | The title of the video. |
| `video_url` - [`String`](types-q-s.md#string) | The URL to the video. |

#### Example

```json
{
  "media_type": "xyz789",
  "video_description": "abc123",
  "video_metadata": "xyz789",
  "video_provider": "abc123",
  "video_title": "xyz789",
  "video_url": "xyz789"
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
| `fixed_product_taxes` - [`[FixedProductTax]`](types-f-i.md#fixedproducttax) | An array of the multiple Fixed Product Taxes that can be applied to a product price. |
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
| `maximalPrice` - [`Price`](#price) | The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `to` value. *(Deprecated: Use `PriceRange.maximum_price` instead.)* |
| `minimalPrice` - [`Price`](#price) | The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `from` value. *(Deprecated: Use `PriceRange.minimum_price` instead.)* |
| `regularPrice` - [`Price`](#price) | The base price of a product. *(Deprecated: Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead.)* |

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
| `average_rating` - [`Float!`](types-f-i.md#float) | The average of all ratings for this product. |
| `created_at` - [`String!`](types-q-s.md#string) | The date the review was created. |
| `nickname` - [`String!`](types-q-s.md#string) | The customer's nickname. Defaults to the customer name, if logged in. |
| `product` - [`ProductInterface!`](#productinterface) | The reviewed product. |
| `ratings_breakdown` - [`[ProductReviewRating]!`](#productreviewrating) | An array of ratings by rating category, such as quality, price, and value. |
| `summary` - [`String!`](types-q-s.md#string) | The summary (title) of the review. |
| `text` - [`String!`](types-q-s.md#string) | The review text. |

#### Example

```json
{
  "average_rating": 123.45,
  "created_at": "xyz789",
  "nickname": "xyz789",
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
| `name` - [`String!`](types-q-s.md#string) | The label assigned to an aspect of a product that is being rated, such as quality or price. |
| `value` - [`String!`](types-q-s.md#string) | The rating value given by customer. By default, possible values range from 1 to 5. |

#### Example

```json
{
  "name": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### ProductReviewRatingInput

Contains the reviewer's rating for a single aspect of a review.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `id` - [`String!`](types-q-s.md#string) | An encoded rating ID. |
| `value_id` - [`String!`](types-q-s.md#string) | An encoded rating value ID. |

#### Example

```json
{
  "id": "abc123",
  "value_id": "abc123"
}
```

<HorizontalLine />

### ProductReviewRatingMetadata

Contains details about a single aspect of a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`String!`](types-q-s.md#string) | An encoded rating ID. |
| `name` - [`String!`](types-q-s.md#string) | The label assigned to an aspect of a product that is being rated, such as quality or price. |
| `values` - [`[ProductReviewRatingValueMetadata]!`](#productreviewratingvaluemetadata) | List of product review ratings sorted by position. |

#### Example

```json
{
  "id": "xyz789",
  "name": "xyz789",
  "values": [ProductReviewRatingValueMetadata]
}
```

<HorizontalLine />

### ProductReviewRatingValueMetadata

Contains details about a single value in a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `value` - [`String!`](types-q-s.md#string) | A ratings scale, such as the number of stars awarded. |
| `value_id` - [`String!`](types-q-s.md#string) | An encoded rating value ID. |

#### Example

```json
{
  "value": "xyz789",
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
| `page_info` - [`SearchResultPageInfo!`](types-q-s.md#searchresultpageinfo) | Metadata for pagination rendering. |

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
| `customer_group_id` - [`String`](types-q-s.md#string) | The ID of the customer group. *(Deprecated: Not relevant for the storefront.)* |
| `percentage_value` - [`Float`](types-f-i.md#float) | The percentage discount of the item. *(Deprecated: Use `TierPrice.discount` instead.)* |
| `qty` - [`Float`](types-f-i.md#float) | The number of items that must be purchased to qualify for tier pricing. *(Deprecated: Use `TierPrice.quantity` instead.)* |
| `value` - [`Float`](types-f-i.md#float) | The price of the fixed price item. *(Deprecated: Use `TierPrice.final_price` instead.)* |
| `website_id` - [`Float`](types-f-i.md#float) | The ID assigned to the website. *(Deprecated: Not relevant for the storefront.)* |

#### Example

```json
{
  "customer_group_id": "xyz789",
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
| `disabled` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](types-q-s.md#string) | The label of the product image or video. |
| `position` - [`Int`](types-f-i.md#int) | The media item's position after it has been sorted. |
| `url` - [`String`](types-q-s.md#string) | The URL of the product image or video. |
| `video_content` - [`ProductMediaGalleryEntriesVideoContent`](#productmediagalleryentriesvideocontent) | Contains a `ProductMediaGalleryEntriesVideoContent` object. |

#### Example

```json
{
  "disabled": false,
  "label": "xyz789",
  "position": 123,
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
| `aggregations` - [`[Aggregation]`](types-a-b.md#aggregation) | A bucket that contains the attribute code and label for each filterable option. |
| `filters` - [`[LayerFilter]`](#layerfilter) | Layered navigation filters array. *(Deprecated: Use `aggregations` instead.)* |
| `items` - [`[ProductInterface]`](#productinterface) | An array of products that match the specified search criteria. |
| `page_info` - [`SearchResultPageInfo`](types-q-s.md#searchresultpageinfo) | An object that includes the page_info and currentPage values specified in the query. |
| `sort_fields` - [`SortFields`](types-q-s.md#sortfields) | An object that includes the default sort field and all available sort fields. |
| `suggestions` - [`[SearchSuggestion]`](types-q-s.md#searchsuggestion) | An array of search suggestions for case when search query have no results. |
| `total_count` - [`Int`](types-f-i.md#int) | The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. |

#### Example

```json
{
  "aggregations": [Aggregation],
  "filters": [LayerFilter],
  "items": [ProductInterface],
  "page_info": SearchResultPageInfo,
  "sort_fields": SortFields,
  "suggestions": [SearchSuggestion],
  "total_count": 123
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
| `created_at` - [`String!`](types-q-s.md#string) | The date the purchase order was created. |
| `created_by` - [`Customer`](types-c-e.md#customer) | The company user who created the purchase order. |
| `history_log` - [`[PurchaseOrderHistoryItem]!`](#purchaseorderhistoryitem) | The log of the events related to the purchase order. |
| `number` - [`String!`](types-q-s.md#string) | The purchase order number. |
| `order` - [`CustomerOrder`](types-c-e.md#customerorder) | The reference to the order placed based on the purchase order. |
| `quote` - [`Cart`](types-c-e.md#cart) | The quote related to the purchase order. |
| `status` - [`PurchaseOrderStatus!`](#purchaseorderstatus) | The current status of the purchase order. |
| `uid` - [`ID!`](types-f-i.md#id) | A unique identifier for the purchase order. |
| `updated_at` - [`String!`](types-q-s.md#string) | The date the purchase order was last updated. |

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
| `message` - [`String!`](types-q-s.md#string) | The returned error message. |
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
| `message` - [`String`](types-q-s.md#string) | A formatted message. |
| `name` - [`String`](types-q-s.md#string) | The approver name. |
| `role` - [`String`](types-q-s.md#string) | The approver role. |
| `status` - [`PurchaseOrderApprovalFlowItemStatus`](#purchaseorderapprovalflowitemstatus) | The status related to the event. |
| `updated_at` - [`String`](types-q-s.md#string) | The date and time the event was updated. |

#### Example

```json
{
  "message": "xyz789",
  "name": "abc123",
  "role": "abc123",
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
| `applies_to_roles` - [`[CompanyRole]!`](types-c-e.md#companyrole) | The name of the user(s) affected by the the purchase order approval rule. |
| `approver_roles` - [`[CompanyRole]!`](types-c-e.md#companyrole) | The name of the user who needs to approve purchase orders that trigger the approval rule. |
| `condition` - [`PurchaseOrderApprovalRuleConditionInterface`](#purchaseorderapprovalruleconditioninterface) | Condition which triggers the approval rule. |
| `created_at` - [`String!`](types-q-s.md#string) | The date the purchase order rule was created. |
| `created_by` - [`String!`](types-q-s.md#string) | The name of the user who created the purchase order approval rule. |
| `description` - [`String`](types-q-s.md#string) | Description of the purchase order approval rule. |
| `name` - [`String!`](types-q-s.md#string) | The name of the purchase order approval rule. |
| `status` - [`PurchaseOrderApprovalRuleStatus!`](#purchaseorderapprovalrulestatus) | The status of the purchase order approval rule. |
| `uid` - [`ID!`](types-f-i.md#id) | The unique identifier for the purchase order approval rule. |
| `updated_at` - [`String!`](types-q-s.md#string) | The date the purchase order rule was last updated. |

#### Example

```json
{
  "applies_to_roles": [CompanyRole],
  "approver_roles": [CompanyRole],
  "condition": PurchaseOrderApprovalRuleConditionInterface,
  "created_at": "xyz789",
  "created_by": "xyz789",
  "description": "xyz789",
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
| `quantity` - [`Int`](types-f-i.md#int) | The quantity to be used for evaluation of the approval rule condition. |

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
| `applies_to` - [`[ID]!`](types-f-i.md#id) | A list of company user role IDs to which this purchase order approval rule should be applied. When an empty array is provided, the rule is applied to all user roles in the system, including those created in the future. |
| `approvers` - [`[ID]!`](types-f-i.md#id) | A list of B2B user roles that can approve this purchase order approval rule. |
| `condition` - [`CreatePurchaseOrderApprovalRuleConditionInput!`](types-c-e.md#createpurchaseorderapprovalruleconditioninput) | The condition of the purchase order approval rule. |
| `description` - [`String`](types-q-s.md#string) | A summary of the purpose of the purchase order approval rule. |
| `name` - [`String!`](types-q-s.md#string) | The purchase order approval rule name. |
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
| `available_applies_to` - [`[CompanyRole]!`](types-c-e.md#companyrole) | A list of B2B user roles that the rule can be applied to. |
| `available_condition_currencies` - [`[AvailableCurrency]!`](types-a-b.md#availablecurrency) | A list of currencies that can be used to create approval rules based on amounts, for example shipping cost rules. |
| `available_requires_approval_from` - [`[CompanyRole]!`](types-c-e.md#companyrole) | A list of B2B user roles that can be specified as approvers for the approval rules. |

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
| `page_info` - [`SearchResultPageInfo`](types-q-s.md#searchresultpageinfo) | Result pagination details. |
| `total_count` - [`Int`](types-f-i.md#int) | The total number of purchase order approval rules visible to the customer. |

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
| `author` - [`Customer`](types-c-e.md#customer) | The user who left the comment. |
| `created_at` - [`String!`](types-q-s.md#string) | The date and time when the comment was created. |
| `text` - [`String!`](types-q-s.md#string) | The text of the comment. |
| `uid` - [`ID!`](types-f-i.md#id) | A unique identifier of the comment. |

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
| `activity` - [`String!`](types-q-s.md#string) | The activity type of the event. |
| `created_at` - [`String!`](types-q-s.md#string) | The date and time when the event happened. |
| `message` - [`String!`](types-q-s.md#string) | The message representation of the event. |
| `uid` - [`ID!`](types-f-i.md#id) | A unique identifier of the purchase order history item. |

#### Example

```json
{
  "activity": "xyz789",
  "created_at": "abc123",
  "message": "xyz789",
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
| `rule_name` - [`String!`](types-q-s.md#string) | The name of the applied rule. |

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
| `page_info` - [`SearchResultPageInfo`](types-q-s.md#searchresultpageinfo) | Page information of search result's current page. |
| `total_count` - [`Int`](types-f-i.md#int) | Total number of purchase orders found matching the search criteria. |

#### Example

```json
{
  "items": [PurchaseOrder],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### PurchaseOrdersActionInput

Defines which purchase orders to act on.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `purchase_order_uids` - [`[ID]!`](types-f-i.md#id) | An array of purchase order UIDs. |

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
| `company_purchase_orders` - [`Boolean`](types-a-b.md#boolean) | Include only purchase orders made by subordinate company users. |
| `created_date` - [`FilterRangeTypeInput`](types-f-i.md#filterrangetypeinput) | Filter by the creation date of the purchase order. |
| `require_my_approval` - [`Boolean`](types-a-b.md#boolean) | Include only purchase orders that are waiting for the customer’s approval. |
| `status` - [`PurchaseOrderStatus`](#purchaseorderstatus) | Filter by the status of the purchase order. |

#### Example

```json
{
  "company_purchase_orders": true,
  "created_date": FilterRangeTypeInput,
  "require_my_approval": false,
  "status": "PENDING"
}
```

<HorizontalLine />
