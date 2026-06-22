## Types

### QuoteItemsSortInput

Specifies the field to use for sorting quote items

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `field` - [`SortQuoteItemsEnum!`](#sortquoteitemsenum) | Specifies the quote items field to sort by |
| `order` - [`SortEnum!`](#sortenum) | Specifies the order of quote items' sorting |

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
| `item_id` - [`ID!`](#id) | The unique ID of a `CartLineItem` object. |
| `note` - [`String`](#string) | The note text to be added. |
| `templateId` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{
  "item_id": 4,
  "note": "xyz789",
  "templateId": 4
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
  "badge_position": "abc123",
  "language_code": "xyz789",
  "minimum_score": 987.65,
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
  "badge_position": "abc123",
  "failure_message": "xyz789",
  "forms": ["PLACE_ORDER"],
  "is_enabled": false,
  "language_code": "abc123",
  "minimum_score": 987.65,
  "theme": "abc123",
  "website_key": "abc123"
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
| `id` - [`Int`](#int) | The unique ID for a `Region` object. |
| `name` - [`String`](#string) | The name of the region, such as Texas. |

#### Example

```json
{
  "code": "abc123",
  "id": 987,
  "name": "abc123"
}
```

<HorizontalLine />

### RemoveCouponFromCartInput

Specifies the cart from which to remove a coupon.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |

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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `coupon_codes` - [`[String]!`](#string) | An array of coupon codes to be removed from the quote. If coupon_codes is empty all coupons will be removed from the quote. |

#### Example

```json
{
  "cart_id": "xyz789",
  "coupon_codes": ["abc123"]
}
```

<HorizontalLine />

### RemoveGiftCardFromCartInput

Defines the input required to run the `removeGiftCardFromCart` mutation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer's cart. |
| `gift_card_code` - [`String!`](#string) | The gift card code to be removed to the cart. |

#### Example

```json
{
  "cart_id": "xyz789",
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `cart_item_id` - [`Int`](#int) | Deprecated. Use `cart_item_uid` instead. |
| `cart_item_uid` - [`ID`](#id) | Required field. The unique ID for a `CartItemInterface` object. |

#### Example

```json
{
  "cart_id": "abc123",
  "cart_item_id": 987,
  "cart_item_uid": "4"
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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

#### Example

```json
{
  "quote_item_uids": ["4"],
  "quote_uid": "4"
}
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
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

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
{"products": [4], "uid": 4}
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
| `return_shipping_tracking_uid` - [`ID!`](#id) | The unique ID for a `ReturnShippingTracking` object. |

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
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer's cart. |

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
  "quote_comment": "xyz789",
  "quote_name": "xyz789",
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
| `cart` - [`Cart!`](#cart) | Detailed information about the customer's cart. |
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
  "token": "xyz789"
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
  "quote_name": "abc123"
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
| `order_uid` - [`ID!`](#id) | The unique ID for a `Order` object. |

#### Example

```json
{
  "comment_text": "xyz789",
  "contact_email": "abc123",
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
| `order_item_uid` - [`ID!`](#id) | The unique ID for a `OrderItemInterface` object. |
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
  "items_count": 123,
  "name": "xyz789",
  "requisition_list_items": RequisitionListItems,
  "uid": "4",
  "updated_at": "abc123"
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
  "quantity": 987.65,
  "uid": "4"
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
  "quantity": 123.45,
  "selected_options": ["xyz789"],
  "sku": "abc123"
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
  "total_pages": 987
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
| `uid` - [`ID!`](#id) | The unique ID for a `Return` object. |

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
| `uid` - [`ID!`](#id) | The unique ID for a `ReturnComment` object. |

#### Example

```json
{
  "author_name": "xyz789",
  "created_at": "abc123",
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
| `uid` - [`ID!`](#id) | The unique ID for a `ReturnCustomAttribute` object. |
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
  "email": "xyz789",
  "firstname": "xyz789",
  "lastname": "abc123"
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
| `uid` - [`ID!`](#id) | The unique ID for a `ReturnItem` object. |

#### Example

```json
{
  "custom_attributes": [ReturnCustomAttribute],
  "custom_attributesV2": [AttributeValueInterface],
  "order_item": OrderItemInterface,
  "quantity": 123.45,
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
| `input_filter` - [`InputFilterEnum`](#inputfilterenum) | The template used for the input of the attribute (e.g., 'date'). |
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
| `tracking` - [`[ReturnShippingTracking]`](#returnshippingtracking) | The unique ID for a `ReturnShippingTracking` object. If a single UID is specified, the array contains a single tracking record. Otherwise, array contains all tracking information. |

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
| `contact_name` - [`String`](#string) | The merchant's contact person. |
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
  "street": ["abc123"],
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
| `uid` - [`ID!`](#id) | The unique ID for a `ReturnShippingCarrier` object assigned to the shipping carrier. |

#### Example

```json
{"label": "xyz789", "uid": 4}
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
| `uid` - [`ID!`](#id) | The unique ID for a `ReturnShippingTracking` object assigned to the tracking item. |

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
  "change_reason": "xyz789",
  "date": "abc123",
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
{"currency_amount": 987.65, "points": 987.65}
```

<HorizontalLine />

### RewardPointsSubscriptionStatus

Indicates whether the customer subscribes to reward points emails.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance_updates` - [`RewardPointsSubscriptionStatusesEnum!`](#rewardpointssubscriptionstatusesenum) | Indicates whether the customer subscribes to 'Reward points balance updates' emails. |
| `points_expiration_notifications` - [`RewardPointsSubscriptionStatusesEnum!`](#rewardpointssubscriptionstatusesenum) | Indicates whether the customer subscribes to 'Reward points expiration notifications' emails. |

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
  "redirect_code": 123,
  "relative_url": "xyz789",
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
  "relative_url": "abc123",
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
  "value": "xyz789"
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
{"current_page": 123, "page_size": 123, "total_pages": 987}
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
{"search": "xyz789"}
```

<HorizontalLine />

### SelectedBundleOption

Contains details about a selected bundle option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`Int!`](#int) |  *(Deprecated: Use `uid` instead)* |
| `label` - [`String!`](#string) | The display name of the selected bundle product option. |
| `type` - [`String!`](#string) | The type of selected bundle product option. |
| `uid` - [`ID!`](#id) | The unique ID for a `SelectedBundleOption` object |
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
| `id` - [`Int!`](#int) | Use `uid` instead |
| `label` - [`String!`](#string) | The display name of the value for the selected bundle product option. |
| `original_price` - [`Money!`](#money) | The original price of the value for the selected bundle product option. |
| `price` - [`Float!`](#float) | The price of the value for the selected bundle product option. *(Deprecated: Use priceV2 instead.)* |
| `priceV2` - [`Money!`](#money) | The price of the value for the selected bundle product option. |
| `quantity` - [`Float!`](#float) | The quantity of the value for the selected bundle product option. |
| `uid` - [`ID!`](#id) | The unique ID for a `SelectedBundleOptionValue` object |

#### Example

```json
{
  "id": 987,
  "label": "abc123",
  "original_price": Money,
  "price": 123.45,
  "priceV2": Money,
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### SelectedConfigurableOption

Contains details about a selected configurable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `configurable_product_option_uid` - [`ID!`](#id) | The unique ID for a `ConfigurableProductOptions` object. |
| `configurable_product_option_value_uid` - [`ID!`](#id) | The unique ID for a `ConfigurableProductOptionsValues` object. |
| `id` - [`Int!`](#int) |  *(Deprecated: Use `SelectedConfigurableOption.configurable_product_option_uid` instead.)* |
| `option_label` - [`String!`](#string) | The display text for the option. |
| `value_id` - [`Int!`](#int) |  *(Deprecated: Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead.)* |
| `value_label` - [`String!`](#string) | The display name of the selected configurable option. |

#### Example

```json
{
  "configurable_product_option_uid": "4",
  "configurable_product_option_value_uid": "4",
  "id": 987,
  "option_label": "xyz789",
  "value_id": 123,
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
  "value": "abc123"
}
```

<HorizontalLine />

### SelectedCustomizableOption

Identifies a customized product that has been placed in a cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_option_uid` - [`ID!`](#id) | The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. |
| `id` - [`Int!`](#int) |  *(Deprecated: Use `SelectedCustomizableOption.customizable_option_uid` instead.)* |
| `is_required` - [`Boolean!`](#boolean) | Indicates whether the customizable option is required. |
| `label` - [`String!`](#string) | The display name of the selected customizable option. |
| `sort_order` - [`Int!`](#int) | A value indicating the order to display this option. |
| `type` - [`String!`](#string) | The type of `CustomizableOptionInterface` object. |
| `values` - [`[SelectedCustomizableOptionValue]!`](#selectedcustomizableoptionvalue) | An array of selectable values. |

#### Example

```json
{
  "customizable_option_uid": 4,
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
| `customizable_option_value_uid` - [`ID!`](#id) | The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. |
| `id` - [`Int!`](#int) |  *(Deprecated: Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead.)* |
| `label` - [`String!`](#string) | The display name of the selected value. |
| `price` - [`CartItemSelectedOptionValuePrice!`](#cartitemselectedoptionvalueprice) | The price of the selected customizable value. |
| `value` - [`String!`](#string) | The text identifying the selected value. |

#### Example

```json
{
  "customizable_option_value_uid": "4",
  "id": 123,
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
  "code": "abc123",
  "purchase_order_number": "xyz789",
  "title": "xyz789"
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
  "carrier_code": "abc123",
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
  "email": "xyz789",
  "name": "abc123"
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
  "email": "xyz789",
  "name": "xyz789"
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
  "name": "xyz789"
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
  "email": "xyz789",
  "message": "abc123",
  "name": "xyz789"
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
{"enabled_for_customers": false, "enabled_for_guests": false}
```

<HorizontalLine />

### SendNegotiableQuoteForReviewInput

Specifies which negotiable quote to send for review.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment` - [`NegotiableQuoteCommentInput`](#negotiablequotecommentinput) | A comment for the seller to review. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |

#### Example

```json
{
  "billing_address": BillingAddressInput,
  "cart_id": "xyz789"
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
{"error": "xyz789", "success": true}
```

<HorizontalLine />

### SetGiftOptionsOnCartInput

Defines the gift options applied to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the shopper's cart. |
| `gift_message` - [`GiftMessageInput`](#giftmessageinput) | Gift message details for the cart. |
| `gift_receipt_included` - [`Boolean!`](#boolean) | Whether customer requested gift receipt for the cart. |
| `gift_wrapping_id` - [`ID`](#id) | The unique ID for a `GiftWrapping` object to be used for the cart. |
| `printed_card_included` - [`Boolean!`](#boolean) | Whether customer requested printed card for the cart. |

#### Example

```json
{
  "cart_id": "xyz789",
  "gift_message": GiftMessageInput,
  "gift_receipt_included": true,
  "gift_wrapping_id": 4,
  "printed_card_included": true
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `email` - [`String!`](#string) | The email address of the guest. |

#### Example

```json
{
  "cart_id": "xyz789",
  "email": "abc123"
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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

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
| `customer_address_id` - [`ID`](#id) | The unique ID of a `CustomerAddress` object. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |
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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |
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
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

#### Example

```json
{
  "shipping_address": NegotiableQuoteTemplateShippingAddressInput,
  "template_id": "4"
}
```

<HorizontalLine />

### SetPaymentMethodAndPlaceOrderInput

Applies a payment method to the quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `payment_method` - [`PaymentMethodInput!`](#paymentmethodinput) | The payment method data to apply to the cart. |

#### Example

```json
{
  "cart_id": "xyz789",
  "payment_method": PaymentMethodInput
}
```

<HorizontalLine />

### SetPaymentMethodOnCartInput

Applies a payment method to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `payment_method` - [`PaymentMethodInput!`](#paymentmethodinput) | The payment method data to apply to the cart. |

#### Example

```json
{
  "cart_id": "xyz789",
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `shipping_methods` - [`[ShippingMethodInput]!`](#shippingmethodinput) | An array of shipping methods. |

#### Example

```json
{
  "cart_id": "abc123",
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
  "email": "xyz789",
  "name": "abc123"
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
  "name": "abc123"
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
| `id` - [`ID!`](#id) | The unique ID for a `ShipmentItemInterface` object. |
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
| `id` - [`ID!`](#id) | The unique ID for a `ShipmentItemInterface` object. |
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
  "quantity_shipped": 123.45
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
  "number": "abc123",
  "title": "xyz789"
}
```

<HorizontalLine />

### ShippingAddressInput

Defines a single shipping address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`CartAddressInput`](#cartaddressinput) | Defines a shipping address. |
| `customer_address_id` - [`Int`](#int) | An ID from the customer's address book that uniquely identifies the address to be used for shipping. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer's address book that uniquely identifies the address to be used for shipping. |
| `customer_notes` - [`String`](#string) | Text provided by the shopper. |
| `pickup_location_code` - [`String`](#string) | The code of Pickup Location which will be used for In-Store Pickup. |

#### Example

```json
{
  "address": CartAddressInput,
  "customer_address_id": 987,
  "customer_address_uid": "4",
  "customer_notes": "xyz789",
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
| `cart_items` - [`[CartItemQuantity]`](#cartitemquantity) |  *(Deprecated: Use `cart_items_v2` instead.)* |
| `cart_items_v2` - [`[CartItemInterface]`](#cartiteminterface) | An array that lists the items in the cart. |
| `city` - [`String!`](#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](#string) | The company specified for the billing or shipping address. |
| `country` - [`CartAddressCountry!`](#cartaddresscountry) | An object containing the country label and code. |
| `custom_attributes` - [`[AttributeValueInterface]!`](#attributevalueinterface) | The custom attribute values of the billing or shipping address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer's address book that uniquely identifies the address. |
| `customer_notes` - [`String`](#string) | Text provided by the shopper. |
| `fax` - [`String`](#string) | The customer's fax number. |
| `firstname` - [`String!`](#string) | The first name of the customer or guest. |
| `id` - [`Int`](#int) | Id of the customer address. *(Deprecated: Use `customer_address_uid` instead.)* |
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
  "city": "abc123",
  "company": "xyz789",
  "country": CartAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": "4",
  "customer_notes": "xyz789",
  "fax": "abc123",
  "firstname": "abc123",
  "id": 123,
  "items_weight": 123.45,
  "lastname": "xyz789",
  "middlename": "abc123",
  "pickup_location_code": "abc123",
  "postcode": "xyz789",
  "prefix": "xyz789",
  "region": CartAddressRegion,
  "same_as_billing": false,
  "selected_shipping_method": SelectedShippingMethod,
  "street": ["abc123"],
  "suffix": "abc123",
  "telephone": "xyz789",
  "uid": "4",
  "vat_id": "xyz789"
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
| `id` - [`String!`](#string) |  *(Deprecated: Use `uid` instead.)* |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](#string) | Message to display when the product is not available with this selected option. |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer's quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller's quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a `CartItemInterface` object. |

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
  "max_qty": 123.45,
  "min_qty": 123.45,
  "not_available_message": "abc123",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": "4"
}
```

<HorizontalLine />

### SimpleProduct

Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product's country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the `uid` field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product's manufacturer. *(Deprecated: Use the `custom_attributes` field instead.)* |
| `max_sale_qty` - [`Float`](#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use `media_gallery` instead.)* |
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
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use `price_range` for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of `ProductLinks` objects. |
| `quantity` - [`Float`](#float) | Amount of available stock |
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
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product's thumbnail image. |
| `tier_price` - [`Float`](#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use `__typename` instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a `ProductInterface` object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](#string) |  *(Deprecated: Use product's `canonical_url` or url rewrites instead)* |
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
  "country_of_manufacture": "abc123",
  "created_at": "xyz789",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": true,
  "gift_wrapping_available": false,
  "gift_wrapping_price": Money,
  "id": 987,
  "image": ProductImage,
  "is_returnable": "abc123",
  "manufacturer": 987,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "xyz789",
  "meta_keyword": "abc123",
  "meta_title": "abc123",
  "min_sale_qty": 987.65,
  "name": "xyz789",
  "new_from_date": "abc123",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 123.45,
  "rating_summary": 987.65,
  "redirect_code": 123,
  "related_products": [ProductInterface],
  "relative_url": "xyz789",
  "review_count": 987,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_from_date": "abc123",
  "special_price": 987.65,
  "special_to_date": "abc123",
  "staged": true,
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "abc123",
  "uid": 4,
  "updated_at": "abc123",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "xyz789",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website],
  "weight": 987.65
}
```

<HorizontalLine />

### SimpleProductCartItemInput

Defines a single product to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | An array that defines customizable options for the product. |
| `data` - [`CartItemInput!`](#cartiteminput) | An object containing the `sku`, `quantity`, and other relevant information about the product. |

#### Example

```json
{
  "customizable_options": [CustomizableOptionInput],
  "data": CartItemInput
}
```

<HorizontalLine />

### SimpleRequisitionListItem

Contains details about simple products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The amount added. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

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

### SimpleWishlistItem

Contains a simple product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
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
  "payment_source": "xyz789",
  "payments_order_id": "xyz789",
  "paypal_order_id": "xyz789"
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
  "app_switch_when_available": false,
  "button_styles": ButtonStyles,
  "code": "xyz789",
  "display_message": false,
  "display_venmo": false,
  "is_visible": false,
  "message_styles": MessageStyles,
  "payment_intent": "xyz789",
  "sdk_params": [SDKParams],
  "sort_order": "xyz789",
  "title": "abc123"
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
  "label": "xyz789",
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

### StoreConfig

Contains information about a store's configuration.

#### Fields

| Field Name | Description |
|------------|-------------|
| `absolute_footer` - [`String`](#string) | Contains scripts that must be included in the HTML before the closing `<body>` tag. |
| `allow_gift_receipt` - [`String`](#string) | Indicates if the gift sender has the option to send a gift receipt. Possible values: 1 (Yes) and 0 (No). |
| `allow_gift_wrapping_on_order` - [`String`](#string) | Indicates whether gift wrapping can be added for the entire order. Possible values: 1 (Yes) and 0 (No). |
| `allow_gift_wrapping_on_order_items` - [`String`](#string) | Indicates whether gift wrapping can be added for individual order items. Possible values: 1 (Yes) and 0 (No). |
| `allow_guests_to_write_product_reviews` - [`String`](#string) | Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). |
| `allow_items` - [`String`](#string) | The value of the Allow Gift Messages for Order Items option |
| `allow_order` - [`String`](#string) | The value of the Allow Gift Messages on Order Level option |
| `allow_printed_card` - [`String`](#string) | Indicates if a printed card can accompany an order. Possible values: 1 (Yes) and 0 (No). |
| `autocomplete_on_storefront` - [`Boolean`](#boolean) | Indicates whether to enable autocomplete on login and forgot password forms. |
| `base_currency_code` - [`String`](#string) | The base currency code. |
| `base_link_url` - [`String`](#string) | A fully-qualified URL that is used to create relative links to the `base_url`. |
| `base_media_url` - [`String`](#string) | The fully-qualified URL that specifies the location of media files. |
| `base_static_url` - [`String`](#string) | The fully-qualified URL that specifies the location of static view files. |
| `base_url` - [`String`](#string) | The store’s fully-qualified base URL. |
| `braintree_3dsecure_allowspecific` - [`Boolean`](#boolean) | Braintree 3D Secure, should 3D Secure be used for specific countries. |
| `braintree_3dsecure_always_request_3ds` - [`Boolean`](#boolean) | Braintree 3D Secure, always request 3D Secure flag. |
| `braintree_3dsecure_specificcountry` - [`String`](#string) | Braintree 3D Secure, the specific countries to use 3D Secure in, to be used if allow specific is status is enabled. |
| `braintree_3dsecure_threshold_amount` - [`String`](#string) | Braintree 3D Secure, threshold above which 3D Secure should be requested. |
| `braintree_3dsecure_verify_3dsecure` - [`Boolean`](#boolean) | Braintree 3D Secure enabled/active status. |
| `braintree_ach_direct_debit_vault_active` - [`Boolean`](#boolean) | Braintree ACH vault status. |
| `braintree_applepay_merchant_name` - [`String`](#string) | Braintree Apple Pay merchant name. |
| `braintree_applepay_vault_active` - [`Boolean`](#boolean) | Braintree Apple Pay vault status. |
| `braintree_cc_vault_active` - [`String`](#string) | Braintree cc vault status. |
| `braintree_cc_vault_cvv` - [`Boolean`](#boolean) | Braintree cc vault CVV re-verification enabled status. |
| `braintree_environment` - [`String`](#string) | Braintree environment. |
| `braintree_googlepay_btn_color` - [`String`](#string) | Braintree Google Pay button color. |
| `braintree_googlepay_cctypes` - [`String`](#string) | Braintree Google Pay Card types supported. |
| `braintree_googlepay_merchant_id` - [`String`](#string) | Braintree Google Pay merchant ID. |
| `braintree_googlepay_vault_active` - [`Boolean`](#boolean) | Braintree Google Pay vault status. |
| `braintree_local_payment_allowed_methods` - [`String`](#string) | Braintree Local Payment Methods allowed payment methods. |
| `braintree_local_payment_fallback_button_text` - [`String`](#string) | Braintree Local Payment Methods fallback button text. |
| `braintree_local_payment_redirect_on_fail` - [`String`](#string) | Braintree Local Payment Methods redirect URL on failed payment. |
| `braintree_merchant_account_id` - [`String`](#string) | Braintree Merchant Account ID. |
| `braintree_paypal_button_location_cart_type_credit_color` - [`String`](#string) | Braintree PayPal Credit mini-cart & cart button style color. |
| `braintree_paypal_button_location_cart_type_credit_label` - [`String`](#string) | Braintree PayPal Credit mini-cart & cart button style label. |
| `braintree_paypal_button_location_cart_type_credit_shape` - [`String`](#string) | Braintree PayPal Credit mini-cart & cart button style shape. |
| `braintree_paypal_button_location_cart_type_credit_show` - [`Boolean`](#boolean) | Braintree PayPal Credit mini-cart & cart button show status. |
| `braintree_paypal_button_location_cart_type_messaging_layout` - [`String`](#string) | Braintree PayPal Pay Later messaging mini-cart & cart style layout. |
| `braintree_paypal_button_location_cart_type_messaging_logo` - [`String`](#string) | Braintree PayPal Pay Later messaging mini-cart & cart style logo. |
| `braintree_paypal_button_location_cart_type_messaging_logo_position` - [`String`](#string) | Braintree PayPal Pay Later messaging mini-cart & cart style logo position. |
| `braintree_paypal_button_location_cart_type_messaging_show` - [`Boolean`](#boolean) | Braintree PayPal Pay Later messaging mini-cart & cart show status. |
| `braintree_paypal_button_location_cart_type_messaging_text_color` - [`String`](#string) | Braintree PayPal Pay Later messaging checkout style text color. |
| `braintree_paypal_button_location_cart_type_paylater_color` - [`String`](#string) | Braintree PayPal Pay Later mini-cart & cart button style color. |
| `braintree_paypal_button_location_cart_type_paylater_label` - [`String`](#string) | Braintree PayPal Pay Later mini-cart & cart button style label. |
| `braintree_paypal_button_location_cart_type_paylater_shape` - [`String`](#string) | Braintree PayPal Pay Later mini-cart & cart button style shape. |
| `braintree_paypal_button_location_cart_type_paylater_show` - [`Boolean`](#boolean) | Braintree PayPal Pay Later mini-cart & cart button show status. |
| `braintree_paypal_button_location_cart_type_paypal_color` - [`String`](#string) | Braintree PayPal mini-cart & cart button style color. |
| `braintree_paypal_button_location_cart_type_paypal_label` - [`String`](#string) | Braintree PayPal mini-cart & cart button style label. |
| `braintree_paypal_button_location_cart_type_paypal_shape` - [`String`](#string) | Braintree PayPal mini-cart & cart button style shape. |
| `braintree_paypal_button_location_cart_type_paypal_show` - [`Boolean`](#boolean) | Braintree PayPal mini-cart & cart button show. |
| `braintree_paypal_button_location_checkout_type_credit_color` - [`String`](#string) | Braintree PayPal Credit checkout button style color. |
| `braintree_paypal_button_location_checkout_type_credit_label` - [`String`](#string) | Braintree PayPal Credit checkout button style label. |
| `braintree_paypal_button_location_checkout_type_credit_shape` - [`String`](#string) | Braintree PayPal Credit checkout button style shape. |
| `braintree_paypal_button_location_checkout_type_credit_show` - [`Boolean`](#boolean) | Braintree PayPal Credit checkout button show status. |
| `braintree_paypal_button_location_checkout_type_messaging_layout` - [`String`](#string) | Braintree PayPal Pay Later messaging checkout style layout. |
| `braintree_paypal_button_location_checkout_type_messaging_logo` - [`String`](#string) | Braintree PayPal Pay Later messaging checkout style logo. |
| `braintree_paypal_button_location_checkout_type_messaging_logo_position` - [`String`](#string) | Braintree PayPal Pay Later messaging checkout style logo position. |
| `braintree_paypal_button_location_checkout_type_messaging_show` - [`Boolean`](#boolean) | Braintree PayPal Pay Later messaging checkout show status. |
| `braintree_paypal_button_location_checkout_type_messaging_text_color` - [`String`](#string) | Braintree PayPal Pay Later messaging checkout style text color. |
| `braintree_paypal_button_location_checkout_type_paylater_color` - [`String`](#string) | Braintree PayPal Pay Later checkout button style color. |
| `braintree_paypal_button_location_checkout_type_paylater_label` - [`String`](#string) | Braintree PayPal Pay Later checkout button style label. |
| `braintree_paypal_button_location_checkout_type_paylater_shape` - [`String`](#string) | Braintree PayPal Pay Later checkout button style shape. |
| `braintree_paypal_button_location_checkout_type_paylater_show` - [`Boolean`](#boolean) | Braintree PayPal Pay Later checkout button show status. |
| `braintree_paypal_button_location_checkout_type_paypal_color` - [`String`](#string) | Braintree PayPal checkout button style color. |
| `braintree_paypal_button_location_checkout_type_paypal_label` - [`String`](#string) | Braintree PayPal checkout button style label. |
| `braintree_paypal_button_location_checkout_type_paypal_shape` - [`String`](#string) | Braintree PayPal checkout button style shape. |
| `braintree_paypal_button_location_checkout_type_paypal_show` - [`Boolean`](#boolean) | Braintree PayPal checkout button show. |
| `braintree_paypal_button_location_productpage_type_credit_color` - [`String`](#string) | Braintree PayPal Credit PDP button style color. |
| `braintree_paypal_button_location_productpage_type_credit_label` - [`String`](#string) | Braintree PayPal Credit PDP button style label. |
| `braintree_paypal_button_location_productpage_type_credit_shape` - [`String`](#string) | Braintree PayPal Credit PDP button style shape. |
| `braintree_paypal_button_location_productpage_type_credit_show` - [`Boolean`](#boolean) | Braintree PayPal Credit PDP button show status. |
| `braintree_paypal_button_location_productpage_type_messaging_layout` - [`String`](#string) | Braintree PayPal Pay Later messaging PDP style layout. |
| `braintree_paypal_button_location_productpage_type_messaging_logo` - [`String`](#string) | Braintree PayPal Pay Later messaging PDP style logo. |
| `braintree_paypal_button_location_productpage_type_messaging_logo_position` - [`String`](#string) | Braintree PayPal Pay Later messaging PDP style logo position. |
| `braintree_paypal_button_location_productpage_type_messaging_show` - [`Boolean`](#boolean) | Braintree PayPal Pay Later messaging PDP show status. |
| `braintree_paypal_button_location_productpage_type_messaging_text_color` - [`String`](#string) | Braintree PayPal Pay Later messaging PDP style text color. |
| `braintree_paypal_button_location_productpage_type_paylater_color` - [`String`](#string) | Braintree PayPal Pay Later PDP button style color. |
| `braintree_paypal_button_location_productpage_type_paylater_label` - [`String`](#string) | Braintree PayPal Pay Later PDP button style label. |
| `braintree_paypal_button_location_productpage_type_paylater_shape` - [`String`](#string) | Braintree PayPal Pay Later PDP button style shape. |
| `braintree_paypal_button_location_productpage_type_paylater_show` - [`Boolean`](#boolean) | Braintree PayPal Pay Later PDP button show status. |
| `braintree_paypal_button_location_productpage_type_paypal_color` - [`String`](#string) | Braintree PayPal PDP button style color. |
| `braintree_paypal_button_location_productpage_type_paypal_label` - [`String`](#string) | Braintree PayPal PDP button style label. |
| `braintree_paypal_button_location_productpage_type_paypal_shape` - [`String`](#string) | Braintree PayPal PDP button style shape. |
| `braintree_paypal_button_location_productpage_type_paypal_show` - [`Boolean`](#boolean) | Braintree PayPal PDP button show. |
| `braintree_paypal_credit_uk_merchant_name` - [`String`](#string) | Braintree PayPal Credit Merchant Name on the FCA Register. |
| `braintree_paypal_display_on_shopping_cart` - [`Boolean`](#boolean) | Should display Braintree PayPal in mini-cart & cart? |
| `braintree_paypal_merchant_country` - [`String`](#string) | Braintree PayPal merchant's country. |
| `braintree_paypal_merchant_name_override` - [`String`](#string) | Braintree PayPal override for Merchant Name. |
| `braintree_paypal_require_billing_address` - [`Boolean`](#boolean) | Does Braintree PayPal require the customer's billing address? |
| `braintree_paypal_send_cart_line_items` - [`Boolean`](#boolean) | Does Braintree PayPal require the order line items? |
| `braintree_paypal_vault_active` - [`Boolean`](#boolean) | Braintree PayPal vault status. |
| `cart_expires_in_days` - [`Int`](#int) | checkout/cart/delete_quote_after: quote lifetime in days. |
| `cart_gift_wrapping` - [`String`](#string) | Indicates if gift wrapping prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). |
| `cart_merge_preference` - [`String!`](#string) | Configuration data from checkout/cart/cart_merge_preference |
| `cart_printed_card` - [`String`](#string) | Indicates if printed card prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). |
| `cart_summary_display_quantity` - [`Int`](#int) | checkout/cart_link/use_qty: what to show in the display cart summary, number of items or item quantities. |
| `catalog_default_sort_by` - [`String`](#string) | The default sort order of the search results list. |
| `category_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages. |
| `category_url_suffix` - [`String`](#string) | The suffix applied to category pages, such as `.htm` or `.html`. |
| `check_money_order_enable_for_specific_countries` - [`Boolean`](#boolean) | Indicates whether only specific countries can use this payment method. |
| `check_money_order_enabled` - [`Boolean`](#boolean) | Indicates whether the Check/Money Order payment method is enabled. |
| `check_money_order_make_check_payable_to` - [`String`](#string) | The name of the party to whom the check must be payable. |
| `check_money_order_max_order_total` - [`String`](#string) | The maximum order amount required to qualify for the Check/Money Order payment method. |
| `check_money_order_min_order_total` - [`String`](#string) | The minimum order amount required to qualify for the Check/Money Order payment method. |
| `check_money_order_new_order_status` - [`String`](#string) | The status of new orders placed using the Check/Money Order payment method. |
| `check_money_order_payment_from_specific_countries` - [`String`](#string) | A comma-separated list of specific countries allowed to use the Check/Money Order payment method. |
| `check_money_order_send_check_to` - [`String`](#string) | The full street address or PO Box where the checks are mailed. |
| `check_money_order_sort_order` - [`Int`](#int) | A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout. |
| `check_money_order_title` - [`String`](#string) | The title of the Check/Money Order payment method displayed on the storefront. |
| `cms_home_page` - [`String`](#string) | The name of the CMS page that identifies the home page for the store. |
| `cms_no_cookies` - [`String`](#string) | A specific CMS page that displays when cookies are not enabled for the browser. |
| `cms_no_route` - [`String`](#string) | A specific CMS page that displays when a 404 'Page Not Found' error occurs. |
| `code` - [`String`](#string) | A code assigned to the store to identify it. *(Deprecated: Use `store_code` instead.)* |
| `configurable_product_image` - [`ProductImageThumbnail!`](#productimagethumbnail) | checkout/cart/configurable_product_image: which image to use for configurable products. |
| `configurable_thumbnail_source` - [`String`](#string) | Indicates whether the `parent` or child (`itself`) thumbnail should be used in the cart for configurable products. |
| `contact_enabled` - [`Boolean!`](#boolean) | Indicates whether the Contact Us form in enabled. |
| `copyright` - [`String`](#string) | The copyright statement that appears at the bottom of each page. |
| `countries_with_required_region` - [`String`](#string) | Extended Config Data - general/region/state_required |
| `create_account_confirmation` - [`Boolean`](#boolean) | Indicates if the new accounts need confirmation. |
| `customer_access_token_lifetime` - [`Float`](#float) | Customer access token lifetime. |
| `default_country` - [`String`](#string) | Extended Config Data - general/country/default |
| `default_description` - [`String`](#string) | The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length. |
| `default_display_currency_code` - [`String`](#string) | The default display currency code. |
| `default_keywords` - [`String`](#string) | A series of keywords that describe your store, each separated by a comma. |
| `default_title` - [`String`](#string) | The title that appears at the title bar of each page when viewed in a browser. |
| `demonotice` - [`Int`](#int) | Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes). |
| `display_product_prices_in_catalog` - [`Int!`](#int) | Configuration data from tax/display/type |
| `display_shipping_prices` - [`Int!`](#int) | Configuration data from tax/display/shipping |
| `display_state_if_optional` - [`Boolean`](#boolean) | Extended Config Data - general/region/display_all |
| `enable_multiple_wishlists` - [`String`](#string) | Indicates whether customers can have multiple wish lists. Possible values: 1 (Yes) and 0 (No). |
| `fixed_product_taxes_apply_tax_to_fpt` - [`Boolean!`](#boolean) | Configuration data from tax/weee/apply_vat |
| `fixed_product_taxes_display_prices_in_emails` - [`Int!`](#int) | Configuration data from tax/weee/display_email |
| `fixed_product_taxes_display_prices_in_product_lists` - [`Int!`](#int) | Configuration data from tax/weee/display_list |
| `fixed_product_taxes_display_prices_in_sales_modules` - [`Int!`](#int) | Configuration data from tax/weee/display_sales |
| `fixed_product_taxes_display_prices_on_product_view_page` - [`Int!`](#int) | Configuration data from tax/weee/display |
| `fixed_product_taxes_enable` - [`Boolean!`](#boolean) | Configuration data from tax/weee/enable |
| `fixed_product_taxes_include_fpt_in_subtotal` - [`Boolean!`](#boolean) | Configuration data from tax/weee/include_in_subtotal |
| `front` - [`String`](#string) | The landing page that is associated with the base URL. |
| `graphql_share_customer_group` - [`Boolean`](#boolean) | Configuration data from customer/account_information/graphql_share_customer_group |
| `grid_per_page` - [`Int`](#int) | The default number of products per page in Grid View. |
| `grid_per_page_values` - [`String`](#string) | A list of numbers that define how many products can be displayed in Grid View. |
| `grouped_product_image` - [`ProductImageThumbnail!`](#productimagethumbnail) | checkout/cart/grouped_product_image: which image to use for grouped products. |
| `head_includes` - [`String`](#string) | Scripts that must be included in the HTML before the closing `<head>` tag. |
| `head_shortcut_icon` - [`String`](#string) | The small graphic image (favicon) that appears in the address bar and tab of the browser. |
| `header_logo_src` - [`String`](#string) | The path to the logo that appears in the header. |
| `id` - [`Int`](#int) | The ID number assigned to the store. *(Deprecated: Use `store_code` instead.)* |
| `is_checkout_agreements_enabled` - [`Boolean!`](#boolean) | Configuration data from checkout/options/enable_agreements |
| `is_default_store` - [`Boolean`](#boolean) | Indicates whether the store view has been designated as the default within the store group. |
| `is_default_store_group` - [`Boolean`](#boolean) | Indicates whether the store group has been designated as the default within the website. |
| `is_guest_checkout_enabled` - [`Boolean`](#boolean) | checkout/options/guest_checkout: whether the guest checkout is enabled or not. |
| `is_negotiable_quote_active` - [`Boolean`](#boolean) | Indicates whether negotiable quote functionality is enabled. |
| `is_one_page_checkout_enabled` - [`Boolean`](#boolean) | checkout/options/onepage_checkout_enabled: whether the one page checkout is enabled or not |
| `is_requisition_list_active` - [`String`](#string) | Indicates whether requisition lists are enabled. Possible values: 1 (Yes) and 0 (No). |
| `list_mode` - [`String`](#string) | The format of the search results list. |
| `list_per_page` - [`Int`](#int) | The default number of products per page in List View. |
| `list_per_page_values` - [`String`](#string) | A list of numbers that define how many products can be displayed in List View. |
| `locale` - [`String`](#string) | The store locale. |
| `logo_alt` - [`String`](#string) | The Alt text that is associated with the logo. |
| `logo_height` - [`Int`](#int) | The height of the logo image, in pixels. |
| `logo_width` - [`Int`](#int) | The width of the logo image, in pixels. |
| `magento_reward_general_is_enabled` - [`String`](#string) | Indicates whether reward points functionality is enabled. Possible values: 1 (Enabled) and 0 (Disabled). |
| `magento_reward_general_is_enabled_on_front` - [`String`](#string) | Indicates whether reward points functionality is enabled on the storefront. Possible values: 1 (Enabled) and 0 (Disabled). |
| `magento_reward_general_min_points_balance` - [`String`](#string) | The minimum point balance customers must have before they can redeem them. A null value indicates no minimum. |
| `magento_reward_general_publish_history` - [`String`](#string) | When enabled, customers can see a detailed history of their reward points. Possible values: 1 (Enabled) and 0 (Disabled). |
| `magento_reward_points_invitation_customer` - [`String`](#string) | The number of points for a referral when an invitee registers on the site. |
| `magento_reward_points_invitation_customer_limit` - [`String`](#string) | The maximum number of registration referrals that will qualify for rewards. A null value indicates no limit. |
| `magento_reward_points_invitation_order` - [`String`](#string) | The number of points for a referral, when an invitee places their first order on the site. |
| `magento_reward_points_invitation_order_limit` - [`String`](#string) | The number of order conversions that can earn points for the customer who sends the invitation. A null value indicates no limit. |
| `magento_reward_points_newsletter` - [`String`](#string) | The number of points earned by registered customers who subscribe to a newsletter. |
| `magento_reward_points_order` - [`String`](#string) | Indicates customers earn points for shopping according to the reward point exchange rate. In Luma, this also controls whether to show a message in the shopping cart about the rewards points earned for the purchase, as well as the customer’s current reward point balance. |
| `magento_reward_points_register` - [`String`](#string) | The number of points customer gets for registering. |
| `magento_reward_points_review` - [`String`](#string) | The number of points for writing a review. |
| `magento_reward_points_review_limit` - [`String`](#string) | The maximum number of reviews that will qualify for the rewards. A null value indicates no limit. |
| `magento_wishlist_general_is_enabled` - [`String`](#string) | Indicates whether wishlists are enabled (1) or disabled (0). |
| `max_items_in_order_summary` - [`Int`](#int) | checkout/options/max_items_display_count: maximum number of items to display in order summary. |
| `maximum_number_of_wishlists` - [`String`](#string) | If multiple wish lists are enabled, the maximum number of wish lists the customer can have. |
| `minicart_display` - [`Boolean`](#boolean) | checkout/sidebar/display: whether to display the minicart or not. |
| `minicart_max_items` - [`Int`](#int) | checkout/sidebar/count: maximum number of items to show in minicart. |
| `minimum_password_length` - [`String`](#string) | The minimum number of characters required for a valid password. |
| `newsletter_enabled` - [`Boolean!`](#boolean) | Indicates whether newsletters are enabled. |
| `no_route` - [`String`](#string) | The default page that displays when a 404 'Page not Found' error occurs. |
| `optional_zip_countries` - [`String`](#string) | Extended Config Data - general/country/optional_zip_countries |
| `order_cancellation_enabled` - [`Boolean!`](#boolean) | Indicates whether orders can be cancelled by customers or not. |
| `order_cancellation_reasons` - [`[CancellationReason]!`](#cancellationreason) | An array containing available cancellation reasons. |
| `orders_invoices_credit_memos_display_full_summary` - [`Boolean!`](#boolean) | Configuration data from tax/sales_display/full_summary |
| `orders_invoices_credit_memos_display_grandtotal` - [`Boolean!`](#boolean) | Configuration data from tax/sales_display/grandtotal |
| `orders_invoices_credit_memos_display_price` - [`Int!`](#int) | Configuration data from tax/sales_display/price |
| `orders_invoices_credit_memos_display_shipping_amount` - [`Int!`](#int) | Configuration data from tax/sales_display/shipping |
| `orders_invoices_credit_memos_display_subtotal` - [`Int!`](#int) | Configuration data from tax/sales_display/subtotal |
| `orders_invoices_credit_memos_display_zero_tax` - [`Boolean!`](#boolean) | Configuration data from tax/sales_display/zero_tax |
| `payment_payflowpro_cc_vault_active` - [`String`](#string) | Payflow Pro vault status. |
| `printed_card_price` - [`String`](#string) | The default price of a printed card that accompanies an order. *(Deprecated: Use printed_card_priceV2 instead)* |
| `printed_card_priceV2` - [`Money`](#money) | The default price of a printed card that accompanies an order. |
| `product_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages. |
| `product_reviews_enabled` - [`String`](#string) | Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). |
| `product_url_suffix` - [`String`](#string) | The suffix applied to product pages, such as `.htm` or `.html`. |
| `quickorder_active` - [`Boolean!`](#boolean) | Indicates whether quick order functionality is enabled. |
| `required_character_classes_number` - [`String`](#string) | The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. |
| `returns_enabled` - [`String!`](#string) | Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled. |
| `root_category_id` - [`Int`](#int) | The ID of the root category. *(Deprecated: Use `root_category_uid` instead.)* |
| `root_category_uid` - [`ID`](#id) | The unique ID for a `CategoryInterface` object. |
| `sales_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. |
| `sales_gift_wrapping` - [`String`](#string) | Indicates if gift wrapping prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `sales_printed_card` - [`String`](#string) | Indicates if printed card prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `secure_base_link_url` - [`String`](#string) | A secure fully-qualified URL that is used to create relative links to the `base_url`. |
| `secure_base_media_url` - [`String`](#string) | The secure fully-qualified URL that specifies the location of media files. |
| `secure_base_static_url` - [`String`](#string) | The secure fully-qualified URL that specifies the location of static view files. |
| `secure_base_url` - [`String`](#string) | The store’s fully-qualified secure base URL. |
| `send_friend` - [`SendFriendConfiguration`](#sendfriendconfiguration) | Email to a Friend configuration. |
| `share_active_segments` - [`Boolean`](#boolean) | Configuration data from customer/magento_customersegment/share_active_segments |
| `share_applied_cart_rule` - [`Boolean`](#boolean) | Configuration data from promo/graphql/share_applied_cart_rule |
| `shopping_cart_display_full_summary` - [`Boolean`](#boolean) | Extended Config Data - tax/cart_display/full_summary |
| `shopping_cart_display_grand_total` - [`Boolean`](#boolean) | Extended Config Data - tax/cart_display/grandtotal |
| `shopping_cart_display_price` - [`Int`](#int) | Extended Config Data - tax/cart_display/price |
| `shopping_cart_display_shipping` - [`Int`](#int) | Extended Config Data - tax/cart_display/shipping |
| `shopping_cart_display_subtotal` - [`Int`](#int) | Extended Config Data - tax/cart_display/subtotal |
| `shopping_cart_display_tax_gift_wrapping` - [`TaxWrappingEnum`](#taxwrappingenum) | Extended Config Data - tax/cart_display/gift_wrapping |
| `shopping_cart_display_zero_tax` - [`Boolean`](#boolean) | Extended Config Data - tax/cart_display/zero_tax |
| `show_cms_breadcrumbs` - [`Int`](#int) | Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes). |
| `store_code` - [`ID`](#id) | The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope. |
| `store_group_code` - [`ID`](#id) | The unique ID assigned to the store group. In the Admin, this is called the Store Name. |
| `store_group_name` - [`String`](#string) | The label assigned to the store group. |
| `store_name` - [`String`](#string) | The label assigned to the store view. |
| `store_sort_order` - [`Int`](#int) | The store view sort order. |
| `timezone` - [`String`](#string) | The time zone of the store. |
| `title_prefix` - [`String`](#string) | A prefix that appears before the title to create a two- or three-part title. |
| `title_separator` - [`String`](#string) | The character that separates the category name and subcategory in the browser title bar. |
| `title_suffix` - [`String`](#string) | A suffix that appears after the title to create a two- or three-part title. |
| `use_store_in_url` - [`Boolean`](#boolean) | Indicates whether the store code should be used in the URL. |
| `website_code` - [`ID`](#id) | The unique ID for the website. |
| `website_id` - [`Int`](#int) | The ID number assigned to the website store. *(Deprecated: The field should not be used on the storefront.)* |
| `website_name` - [`String`](#string) | The label assigned to the website. |
| `weight_unit` - [`String`](#string) | The unit of weight. |
| `welcome` - [`String`](#string) | Text that appears in the header of the page and includes the name of the logged in customer. |
| `zero_subtotal_enable_for_specific_countries` - [`Boolean`](#boolean) | Indicates whether only specific countries can use this payment method. |
| `zero_subtotal_enabled` - [`Boolean`](#boolean) | Indicates whether the Zero Subtotal payment method is enabled. |
| `zero_subtotal_new_order_status` - [`String`](#string) | The status of new orders placed using the Zero Subtotal payment method. |
| `zero_subtotal_payment_action` - [`String`](#string) | When the new order status is 'Processing', this can be set to `authorize_capture` to automatically invoice all items that have a zero balance. |
| `zero_subtotal_payment_from_specific_countries` - [`String`](#string) | A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. |
| `zero_subtotal_sort_order` - [`Int`](#int) | A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. |
| `zero_subtotal_title` - [`String`](#string) | The title of the Zero Subtotal payment method displayed on the storefront. |

#### Example

```json
{
  "absolute_footer": "xyz789",
  "allow_gift_receipt": "abc123",
  "allow_gift_wrapping_on_order": "xyz789",
  "allow_gift_wrapping_on_order_items": "xyz789",
  "allow_guests_to_write_product_reviews": "xyz789",
  "allow_items": "xyz789",
  "allow_order": "abc123",
  "allow_printed_card": "abc123",
  "autocomplete_on_storefront": true,
  "base_currency_code": "abc123",
  "base_link_url": "xyz789",
  "base_media_url": "abc123",
  "base_static_url": "abc123",
  "base_url": "abc123",
  "braintree_3dsecure_allowspecific": false,
  "braintree_3dsecure_always_request_3ds": true,
  "braintree_3dsecure_specificcountry": "xyz789",
  "braintree_3dsecure_threshold_amount": "abc123",
  "braintree_3dsecure_verify_3dsecure": true,
  "braintree_ach_direct_debit_vault_active": true,
  "braintree_applepay_merchant_name": "abc123",
  "braintree_applepay_vault_active": true,
  "braintree_cc_vault_active": "xyz789",
  "braintree_cc_vault_cvv": false,
  "braintree_environment": "xyz789",
  "braintree_googlepay_btn_color": "xyz789",
  "braintree_googlepay_cctypes": "abc123",
  "braintree_googlepay_merchant_id": "abc123",
  "braintree_googlepay_vault_active": false,
  "braintree_local_payment_allowed_methods": "xyz789",
  "braintree_local_payment_fallback_button_text": "xyz789",
  "braintree_local_payment_redirect_on_fail": "xyz789",
  "braintree_merchant_account_id": "xyz789",
  "braintree_paypal_button_location_cart_type_credit_color": "abc123",
  "braintree_paypal_button_location_cart_type_credit_label": "abc123",
  "braintree_paypal_button_location_cart_type_credit_shape": "xyz789",
  "braintree_paypal_button_location_cart_type_credit_show": true,
  "braintree_paypal_button_location_cart_type_messaging_layout": "abc123",
  "braintree_paypal_button_location_cart_type_messaging_logo": "xyz789",
  "braintree_paypal_button_location_cart_type_messaging_logo_position": "xyz789",
  "braintree_paypal_button_location_cart_type_messaging_show": true,
  "braintree_paypal_button_location_cart_type_messaging_text_color": "abc123",
  "braintree_paypal_button_location_cart_type_paylater_color": "abc123",
  "braintree_paypal_button_location_cart_type_paylater_label": "xyz789",
  "braintree_paypal_button_location_cart_type_paylater_shape": "abc123",
  "braintree_paypal_button_location_cart_type_paylater_show": false,
  "braintree_paypal_button_location_cart_type_paypal_color": "xyz789",
  "braintree_paypal_button_location_cart_type_paypal_label": "xyz789",
  "braintree_paypal_button_location_cart_type_paypal_shape": "abc123",
  "braintree_paypal_button_location_cart_type_paypal_show": false,
  "braintree_paypal_button_location_checkout_type_credit_color": "xyz789",
  "braintree_paypal_button_location_checkout_type_credit_label": "abc123",
  "braintree_paypal_button_location_checkout_type_credit_shape": "xyz789",
  "braintree_paypal_button_location_checkout_type_credit_show": false,
  "braintree_paypal_button_location_checkout_type_messaging_layout": "xyz789",
  "braintree_paypal_button_location_checkout_type_messaging_logo": "xyz789",
  "braintree_paypal_button_location_checkout_type_messaging_logo_position": "xyz789",
  "braintree_paypal_button_location_checkout_type_messaging_show": false,
  "braintree_paypal_button_location_checkout_type_messaging_text_color": "abc123",
  "braintree_paypal_button_location_checkout_type_paylater_color": "xyz789",
  "braintree_paypal_button_location_checkout_type_paylater_label": "abc123",
  "braintree_paypal_button_location_checkout_type_paylater_shape": "xyz789",
  "braintree_paypal_button_location_checkout_type_paylater_show": false,
  "braintree_paypal_button_location_checkout_type_paypal_color": "abc123",
  "braintree_paypal_button_location_checkout_type_paypal_label": "abc123",
  "braintree_paypal_button_location_checkout_type_paypal_shape": "abc123",
  "braintree_paypal_button_location_checkout_type_paypal_show": false,
  "braintree_paypal_button_location_productpage_type_credit_color": "xyz789",
  "braintree_paypal_button_location_productpage_type_credit_label": "abc123",
  "braintree_paypal_button_location_productpage_type_credit_shape": "xyz789",
  "braintree_paypal_button_location_productpage_type_credit_show": true,
  "braintree_paypal_button_location_productpage_type_messaging_layout": "xyz789",
  "braintree_paypal_button_location_productpage_type_messaging_logo": "xyz789",
  "braintree_paypal_button_location_productpage_type_messaging_logo_position": "xyz789",
  "braintree_paypal_button_location_productpage_type_messaging_show": true,
  "braintree_paypal_button_location_productpage_type_messaging_text_color": "abc123",
  "braintree_paypal_button_location_productpage_type_paylater_color": "abc123",
  "braintree_paypal_button_location_productpage_type_paylater_label": "xyz789",
  "braintree_paypal_button_location_productpage_type_paylater_shape": "xyz789",
  "braintree_paypal_button_location_productpage_type_paylater_show": false,
  "braintree_paypal_button_location_productpage_type_paypal_color": "xyz789",
  "braintree_paypal_button_location_productpage_type_paypal_label": "abc123",
  "braintree_paypal_button_location_productpage_type_paypal_shape": "abc123",
  "braintree_paypal_button_location_productpage_type_paypal_show": true,
  "braintree_paypal_credit_uk_merchant_name": "abc123",
  "braintree_paypal_display_on_shopping_cart": true,
  "braintree_paypal_merchant_country": "abc123",
  "braintree_paypal_merchant_name_override": "abc123",
  "braintree_paypal_require_billing_address": true,
  "braintree_paypal_send_cart_line_items": true,
  "braintree_paypal_vault_active": true,
  "cart_expires_in_days": 987,
  "cart_gift_wrapping": "xyz789",
  "cart_merge_preference": "abc123",
  "cart_printed_card": "xyz789",
  "cart_summary_display_quantity": 123,
  "catalog_default_sort_by": "xyz789",
  "category_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "category_url_suffix": "xyz789",
  "check_money_order_enable_for_specific_countries": true,
  "check_money_order_enabled": false,
  "check_money_order_make_check_payable_to": "abc123",
  "check_money_order_max_order_total": "xyz789",
  "check_money_order_min_order_total": "abc123",
  "check_money_order_new_order_status": "abc123",
  "check_money_order_payment_from_specific_countries": "xyz789",
  "check_money_order_send_check_to": "abc123",
  "check_money_order_sort_order": 123,
  "check_money_order_title": "xyz789",
  "cms_home_page": "abc123",
  "cms_no_cookies": "abc123",
  "cms_no_route": "abc123",
  "code": "abc123",
  "configurable_product_image": "ITSELF",
  "configurable_thumbnail_source": "abc123",
  "contact_enabled": true,
  "copyright": "xyz789",
  "countries_with_required_region": "xyz789",
  "create_account_confirmation": true,
  "customer_access_token_lifetime": 123.45,
  "default_country": "abc123",
  "default_description": "abc123",
  "default_display_currency_code": "abc123",
  "default_keywords": "abc123",
  "default_title": "xyz789",
  "demonotice": 987,
  "display_product_prices_in_catalog": 123,
  "display_shipping_prices": 987,
  "display_state_if_optional": false,
  "enable_multiple_wishlists": "xyz789",
  "fixed_product_taxes_apply_tax_to_fpt": true,
  "fixed_product_taxes_display_prices_in_emails": 987,
  "fixed_product_taxes_display_prices_in_product_lists": 123,
  "fixed_product_taxes_display_prices_in_sales_modules": 987,
  "fixed_product_taxes_display_prices_on_product_view_page": 123,
  "fixed_product_taxes_enable": true,
  "fixed_product_taxes_include_fpt_in_subtotal": true,
  "front": "xyz789",
  "graphql_share_customer_group": true,
  "grid_per_page": 987,
  "grid_per_page_values": "abc123",
  "grouped_product_image": "ITSELF",
  "head_includes": "xyz789",
  "head_shortcut_icon": "abc123",
  "header_logo_src": "abc123",
  "id": 123,
  "is_checkout_agreements_enabled": false,
  "is_default_store": true,
  "is_default_store_group": true,
  "is_guest_checkout_enabled": true,
  "is_negotiable_quote_active": true,
  "is_one_page_checkout_enabled": true,
  "is_requisition_list_active": "abc123",
  "list_mode": "xyz789",
  "list_per_page": 987,
  "list_per_page_values": "xyz789",
  "locale": "xyz789",
  "logo_alt": "abc123",
  "logo_height": 123,
  "logo_width": 987,
  "magento_reward_general_is_enabled": "abc123",
  "magento_reward_general_is_enabled_on_front": "abc123",
  "magento_reward_general_min_points_balance": "abc123",
  "magento_reward_general_publish_history": "abc123",
  "magento_reward_points_invitation_customer": "abc123",
  "magento_reward_points_invitation_customer_limit": "abc123",
  "magento_reward_points_invitation_order": "abc123",
  "magento_reward_points_invitation_order_limit": "abc123",
  "magento_reward_points_newsletter": "abc123",
  "magento_reward_points_order": "abc123",
  "magento_reward_points_register": "xyz789",
  "magento_reward_points_review": "abc123",
  "magento_reward_points_review_limit": "abc123",
  "magento_wishlist_general_is_enabled": "xyz789",
  "max_items_in_order_summary": 987,
  "maximum_number_of_wishlists": "xyz789",
  "minicart_display": false,
  "minicart_max_items": 987,
  "minimum_password_length": "xyz789",
  "newsletter_enabled": false,
  "no_route": "abc123",
  "optional_zip_countries": "abc123",
  "order_cancellation_enabled": true,
  "order_cancellation_reasons": [CancellationReason],
  "orders_invoices_credit_memos_display_full_summary": true,
  "orders_invoices_credit_memos_display_grandtotal": true,
  "orders_invoices_credit_memos_display_price": 123,
  "orders_invoices_credit_memos_display_shipping_amount": 123,
  "orders_invoices_credit_memos_display_subtotal": 123,
  "orders_invoices_credit_memos_display_zero_tax": false,
  "payment_payflowpro_cc_vault_active": "abc123",
  "printed_card_price": "xyz789",
  "printed_card_priceV2": Money,
  "product_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "product_reviews_enabled": "abc123",
  "product_url_suffix": "abc123",
  "quickorder_active": true,
  "required_character_classes_number": "xyz789",
  "returns_enabled": "xyz789",
  "root_category_id": 123,
  "root_category_uid": "4",
  "sales_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "sales_gift_wrapping": "abc123",
  "sales_printed_card": "abc123",
  "secure_base_link_url": "xyz789",
  "secure_base_media_url": "abc123",
  "secure_base_static_url": "xyz789",
  "secure_base_url": "xyz789",
  "send_friend": SendFriendConfiguration,
  "share_active_segments": false,
  "share_applied_cart_rule": true,
  "shopping_cart_display_full_summary": true,
  "shopping_cart_display_grand_total": false,
  "shopping_cart_display_price": 123,
  "shopping_cart_display_shipping": 987,
  "shopping_cart_display_subtotal": 987,
  "shopping_cart_display_tax_gift_wrapping": "DISPLAY_EXCLUDING_TAX",
  "shopping_cart_display_zero_tax": true,
  "show_cms_breadcrumbs": 123,
  "store_code": "4",
  "store_group_code": 4,
  "store_group_name": "xyz789",
  "store_name": "xyz789",
  "store_sort_order": 123,
  "timezone": "xyz789",
  "title_prefix": "abc123",
  "title_separator": "abc123",
  "title_suffix": "xyz789",
  "use_store_in_url": true,
  "website_code": 4,
  "website_id": 987,
  "website_name": "xyz789",
  "weight_unit": "abc123",
  "welcome": "xyz789",
  "zero_subtotal_enable_for_specific_countries": true,
  "zero_subtotal_enabled": false,
  "zero_subtotal_new_order_status": "abc123",
  "zero_subtotal_payment_action": "abc123",
  "zero_subtotal_payment_from_specific_countries": "abc123",
  "zero_subtotal_sort_order": 123,
  "zero_subtotal_title": "xyz789"
}
```

<HorizontalLine />

### StorefrontProperties

Indicates where an attribute can be displayed.

#### Fields

| Field Name | Description |
|------------|-------------|
| `position` - [`Int`](#int) | The relative position of the attribute in the layered navigation block. |
| `use_in_layered_navigation` - [`UseInLayeredNavigationOptions`](#useinlayerednavigationoptions) | Indicates whether the attribute is filterable with results, without results, or not at all. |
| `use_in_product_listing` - [`Boolean`](#boolean) | Indicates whether the attribute is displayed in product listings. |
| `use_in_search_results_layered_navigation` - [`Boolean`](#boolean) | Indicates whether the attribute can be used in layered navigation on search results pages. |
| `visible_on_catalog_pages` - [`Boolean`](#boolean) | Indicates whether the attribute is displayed on product pages. |

#### Example

```json
{
  "position": 123,
  "use_in_layered_navigation": "NO",
  "use_in_product_listing": true,
  "use_in_search_results_layered_navigation": false,
  "visible_on_catalog_pages": true
}
```

<HorizontalLine />

### String

The `String` scalar type represents textual data, represented as UTF-8
character sequences. The String type is most often used by GraphQL to
represent free-form human-readable text.

#### Example

```json
"xyz789"
```

<HorizontalLine />

### SubmitNegotiableQuoteTemplateForReviewInput

Specifies the quote template properties to update.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment` - [`String`](#string) | A comment for the seller to review. |
| `max_order_commitment` - [`Int`](#int) | Commitment for maximum orders |
| `min_order_commitment` - [`Int`](#int) | Commitment for minimum orders |
| `name` - [`String`](#string) | The title assigned to the negotiable quote template. |
| `reference_document_links` - [`[NegotiableQuoteTemplateReferenceDocumentLinkInput]`](#negotiablequotetemplatereferencedocumentlinkinput) | An array of reference document links to add to the negotiable quote template. |
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{
  "comment": "abc123",
  "max_order_commitment": 987,
  "min_order_commitment": 987,
  "name": "abc123",
  "reference_document_links": [
    NegotiableQuoteTemplateReferenceDocumentLinkInput
  ],
  "template_id": "4"
}
```

<HorizontalLine />

### SubscribeEmailToNewsletterOutput

Contains the result of the `subscribeEmailToNewsletter` operation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `status` - [`SubscriptionStatusesEnum`](#subscriptionstatusesenum) | The status of the subscription request. |

#### Example

```json
{"status": "NOT_ACTIVE"}
```

<HorizontalLine />

### SubscriptionStatusesEnum

Indicates the status of the request.

#### Values

| Enum Value | Description |
|------------|-------------|
| `NOT_ACTIVE` |  |
| `SUBSCRIBED` |  |
| `UNSUBSCRIBED` |  |
| `UNCONFIRMED` |  |

#### Example

```json
""NOT_ACTIVE""
```

<HorizontalLine />

### SwatchData

Describes the swatch type and a value.

#### Fields

| Field Name | Description |
|------------|-------------|
| `type` - [`String`](#string) | The type of swatch filter item: 1 - text; 2 - image. |
| `value` - [`String`](#string) | The value for the swatch item. It could be text or an image link. |

#### Example

```json
{
  "type": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### SwatchDataInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `value` - [`String`](#string) | The value can be represented as color (HEX code), image link, or text. |

#### Possible Types

| SwatchDataInterface Types |
|----------------|
| [`ImageSwatchData`](#imageswatchdata) |
| [`TextSwatchData`](#textswatchdata) |
| [`ColorSwatchData`](#colorswatchdata) |

#### Example

```json
{"value": "xyz789"}
```

<HorizontalLine />

### SwatchInputTypeEnum

Swatch attribute metadata input types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `BOOLEAN` |  |
| `DATE` |  |
| `DATETIME` |  |
| `DROPDOWN` |  |
| `FILE` |  |
| `GALLERY` |  |
| `HIDDEN` |  |
| `IMAGE` |  |
| `MEDIA_IMAGE` |  |
| `MULTILINE` |  |
| `MULTISELECT` |  |
| `PRICE` |  |
| `SELECT` |  |
| `TEXT` |  |
| `TEXTAREA` |  |
| `UNDEFINED` |  |
| `VISUAL` |  |
| `WEIGHT` |  |

#### Example

```json
""BOOLEAN""
```

<HorizontalLine />

### SwatchLayerFilterItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `items_count` - [`Int`](#int) | The count of items per filter. *(Deprecated: Use `AggregationOption.count` instead.)* |
| `label` - [`String`](#string) | The label for a filter. *(Deprecated: Use `AggregationOption.label` instead.)* |
| `swatch_data` - [`SwatchData`](#swatchdata) | Data required to render a swatch filter item. |
| `value_string` - [`String`](#string) | The value of a filter request variable to be used in query. *(Deprecated: Use `AggregationOption.value` instead.)* |

#### Example

```json
{
  "items_count": 987,
  "label": "abc123",
  "swatch_data": SwatchData,
  "value_string": "xyz789"
}
```

<HorizontalLine />

### SwatchLayerFilterItemInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `swatch_data` - [`SwatchData`](#swatchdata) | Data required to render a swatch filter item. |

#### Possible Types

| SwatchLayerFilterItemInterface Types |
|----------------|
| [`SwatchLayerFilterItem`](#swatchlayerfilteritem) |

#### Example

```json
{"swatch_data": SwatchData}
```

<HorizontalLine />

### SyncPaymentOrderInput

Synchronizes the payment order details

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cartId` - [`String!`](#string) | The customer cart ID |
| `id` - [`String!`](#string) | PayPal order ID |

#### Example

```json
{
  "cartId": "abc123",
  "id": "xyz789"
}
```

<HorizontalLine />
