## Types

### QueryContextInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customerGroup` - [`String!`](#string) | The customer group code. Field reserved for future use. Currently, passing this field will have no impact on search results, that is, the search results will be for "Not logged in" customer |
| `userViewHistory` - [`[ViewHistoryInput!]`](#viewhistoryinput) | User view history with timestamp |

#### Example

```json
{
  "customerGroup": "xyz789",
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
| `order` - [`SortEnum!`](#sortenum) | Specifies the order of quote items' sorting |

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
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{
  "expiration_date": "xyz789",
  "template_id": 4
}
```

<HorizontalLine />

### QuoteTemplateLineItemNoteInput

Sets quote item note.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `item_id` - [`ID`](#id) | The unique ID of a `CartLineItem` object. |
| `item_uid` - [`ID`](#id) | The unique ID of a `CartLineItem` object. |
| `note` - [`String`](#string) | The note text to be added. |
| `templateId` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{
  "item_id": 4,
  "item_uid": 4,
  "note": "abc123",
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
  "message": "abc123",
  "type": "xyz789"
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
  "count": 123,
  "from": 987.65,
  "title": "xyz789",
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
{"from": 123.45, "to": 987.65}
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
  "badge_position": "xyz789",
  "language_code": "abc123",
  "minimum_score": 987.65,
  "re_captcha_type": "INVISIBLE",
  "technical_failure_message": "xyz789",
  "theme": "xyz789",
  "validation_failure_message": "xyz789",
  "website_key": "xyz789"
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
  "language_code": "xyz789",
  "minimum_score": 987.65,
  "theme": "abc123",
  "website_key": "xyz789"
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
  "is_enabled": true
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
  "storefrontLabel": "abc123",
  "totalProducts": 123,
  "typeId": "xyz789",
  "unitId": "xyz789",
  "unitName": "abc123",
  "userError": "abc123"
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
{"results": [RecommendationUnit], "totalResults": 123}
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
  "name": "xyz789"
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
  "cart_id": "abc123",
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `cart_item_uid` - [`ID`](#id) | Required field. The unique ID for a `CartItemInterface` object. |

#### Example

```json
{"cart_id": "abc123", "cart_item_uid": 4}
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
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{"item_uids": [4], "template_id": 4}
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
  "comment_text": "xyz789",
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
{"cart_id": 4}
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
  "comment_text": "abc123",
  "contact_email": "abc123",
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
| `order_item_uid` - [`ID!`](#id) | The unique ID for a `OrderItemInterface` object. |
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
  "name": "abc123",
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
  "quantity": 987.65,
  "sku": "abc123",
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
  "parent_sku": "abc123",
  "quantity": 123.45,
  "selected_options": ["xyz789"],
  "sku": "abc123"
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
| `uid` - [`ID!`](#id) | The unique ID for a `Return` object. |

#### Example

```json
{
  "available_shipping_carriers": [ReturnShippingCarrier],
  "comments": [ReturnComment],
  "created_at": "xyz789",
  "customer": ReturnCustomer,
  "items": [ReturnItem],
  "number": "abc123",
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
  "created_at": "xyz789",
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
  "email": "xyz789",
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
| `uid` - [`ID!`](#id) | The unique ID for a `ReturnItem` object. |

#### Example

```json
{
  "custom_attributesV2": [AttributeValueInterface],
  "order_item": OrderItemInterface,
  "quantity": 123.45,
  "request_quantity": 123.45,
  "status": "PENDING",
  "uid": "4"
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
  "default_value": "xyz789",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "xyz789",
  "frontend_input": "BOOLEAN",
  "input_filter": "NONE",
  "is_required": false,
  "is_unique": false,
  "label": "abc123",
  "multiline_count": 123,
  "options": [CustomAttributeOptionInterface],
  "sort_order": 123,
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
  "city": "abc123",
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
| `uid` - [`ID!`](#id) | The unique ID for a `ReturnShippingCarrier` object assigned to the shipping carrier. |

#### Example

```json
{
  "label": "xyz789",
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
  "total_count": 123
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
  "change_reason": "xyz789",
  "date": "xyz789",
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
{"currency_amount": 987.65, "points": 123.45}
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
  "name": "xyz789",
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
{"count": 987, "id": 4, "title": "xyz789"}
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
  "attribute": "xyz789",
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
| `from` - [`Float`](#float) | The minimum value to filter on. If not specified, the value of `0` is applied |
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
{"current_page": 123, "page_size": 123, "total_pages": 123}
```

<HorizontalLine />

### SelectedBundleOption

Contains details about a selected bundle option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The display name of the selected bundle product option. |
| `type` - [`String!`](#string) | The type of selected bundle product option. |
| `uid` - [`ID!`](#id) | The unique ID for a `SelectedBundleOption` object |
| `values` - [`[SelectedBundleOptionValue]!`](#selectedbundleoptionvalue) | An array of selected bundle option values. |

#### Example

```json
{
  "label": "xyz789",
  "type": "abc123",
  "uid": "4",
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
| `uid` - [`ID!`](#id) | The unique ID for a `SelectedBundleOptionValue` object |

#### Example

```json
{
  "label": "abc123",
  "original_price": Money,
  "priceV2": Money,
  "quantity": 123.45,
  "uid": "4"
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
| `option_label` - [`String!`](#string) | The display text for the option. |
| `value_label` - [`String!`](#string) | The display name of the selected configurable option. |

#### Example

```json
{
  "configurable_product_option_uid": "4",
  "configurable_product_option_value_uid": "4",
  "option_label": "xyz789",
  "value_label": "abc123"
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
| `customizable_option_uid` - [`ID!`](#id) | The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. |
| `is_required` - [`Boolean!`](#boolean) | Indicates whether the customizable option is required. |
| `label` - [`String!`](#string) | The display name of the selected customizable option. |
| `sort_order` - [`Int!`](#int) | A value indicating the order to display this option. |
| `type` - [`String!`](#string) | The type of `CustomizableOptionInterface` object. |
| `values` - [`[SelectedCustomizableOptionValue]!`](#selectedcustomizableoptionvalue) | An array of selectable values. |

#### Example

```json
{
  "customizable_option_uid": 4,
  "is_required": false,
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
| `customizable_option_value_uid` - [`ID!`](#id) | The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. |
| `label` - [`String!`](#string) | The display name of the selected value. |
| `price` - [`CartItemSelectedOptionValuePrice!`](#cartitemselectedoptionvalueprice) | The price of the selected customizable value. |
| `value` - [`String!`](#string) | The text identifying the selected value. |

#### Example

```json
{
  "customizable_option_value_uid": 4,
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
  "carrier_code": "abc123",
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
{"error": "abc123", "success": false}
```

<HorizontalLine />

### SetCustomAttributesOnCompanyInput

Defines the company custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `custom_attributes` - [`[CustomAttributeInput]`](#customattributeinput) | An array of custom attributes for company. |
| `id` - [`ID!`](#id) | The unique ID of a `company` object. |

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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

#### Example

```json
{
  "custom_attributes": [CustomAttributeInput],
  "quote_uid": "4"
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
  "gift_receipt_included": false,
  "gift_wrapping_id": "4",
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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddressInput]`](#negotiablequoteshippingaddressinput) | An array of shipping addresses to apply to the negotiable quote. |

#### Example

```json
{
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
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

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
  "cart_id": "abc123",
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
  "email": "abc123",
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
{"is_shared": true}
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
  "message": "xyz789"
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
| `requisition_list` - [`RequisitionList!`](#requisitionlist) | The sender's requisition list (read-only for the recipient). |
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
| `id` - [`ID!`](#id) | The unique ID for a `ShipmentItemInterface` object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Example

```json
{
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "abc123",
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
  "product_name": "abc123",
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
| `tracking_url` - [`String`](#string) | The tracking URL for the shipment. Available for both built-in and custom shipping carriers when a URL template is configured. |

#### Example

```json
{
  "carrier": "xyz789",
  "number": "abc123",
  "title": "xyz789",
  "tracking_url": "xyz789"
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
  "key": "abc123",
  "value": "abc123"
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
  "customer_address_id": 123,
  "customer_address_uid": 4,
  "customer_notes": "xyz789",
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
  "city": "xyz789",
  "company": "xyz789",
  "country": CartAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": 4,
  "customer_notes": "xyz789",
  "fax": "abc123",
  "firstname": "abc123",
  "id": 987,
  "lastname": "xyz789",
  "middlename": "xyz789",
  "pickup_location_code": "xyz789",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": CartAddressRegion,
  "same_as_billing": true,
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
  "method_code": "xyz789"
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
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. *(Deprecated: Use `is_salable` instead. It indicates whether the line can be purchased, including backorder configuration.)* |
| `is_salable` - [`Boolean!`](#boolean) | True when the item can be purchased and should not block checkout: stock status is in stock and either physical quantity covers the requested quantity or backorders are allowed. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](#string) | Shortage or unavailability message for the line; null when the item is salable. |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer's quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller's quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a `CartItemInterface` object. |

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
  "max_qty": 987.65,
  "min_qty": 123.45,
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

### SimpleProduct

Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities.

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
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
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
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "country_of_manufacture": "xyz789",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": true,
  "gift_wrapping_available": false,
  "gift_wrapping_price": Money,
  "image": ProductImage,
  "is_returnable": "abc123",
  "manufacturer": 123,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "min_sale_qty": 123.45,
  "name": "abc123",
  "new_from_date": "abc123",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 987.65,
  "related_products": [ProductInterface],
  "short_description": ComplexTextValue,
  "sku": "xyz789",
  "small_image": ProductImage,
  "special_price": 123.45,
  "special_to_date": "abc123",
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "uid": "4",
  "upsell_products": [ProductInterface],
  "url_key": "xyz789",
  "weight": 987.65
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
| `images` - [`[ProductViewImage]`](#productviewimage) | A list of images defined for the product. Possible values include `image`, `small_image`, and `swatch`. |
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
| `externalId` - [`String`](#string) | External Id. For example, `123`, `456` or `789`. *(Deprecated: This field is deprecated and will be removed.)* |
| `url` - [`String`](#string) | Canonical URL of the product. For example, `https://example.com/product-1` or `https://example.com/product-2`. *(Deprecated: This field is deprecated and will be removed.)* |
| `urlKey` - [`String`](#string) | The URL key of the product. For example, `product-1`, `product-2` or `product-3`. |
| `links` - [`[ProductViewLink]`](#productviewlink) | A list of product links. For example, a related product, an up-sell product or a cross-sell product. |
| `queryType` - [`String`](#string) | Indicates if the product was retrieved from the primary or the backup query |
| `visibility` - [`String`](#string) | Visibility setting of the product |

#### Example

```json
{
  "addToCartAllowed": false,
  "inStock": true,
  "lowStock": true,
  "attributes": [ProductViewAttribute],
  "description": "abc123",
  "id": "4",
  "images": [ProductViewImage],
  "videos": [ProductViewVideo],
  "inputOptions": [ProductViewInputOption],
  "lastModifiedAt": "2007-12-03T10:15:30Z",
  "metaDescription": "xyz789",
  "metaKeyword": "abc123",
  "metaTitle": "xyz789",
  "name": "xyz789",
  "price": ProductViewPrice,
  "shortDescription": "xyz789",
  "sku": "abc123",
  "externalId": "abc123",
  "url": "xyz789",
  "urlKey": "xyz789",
  "links": [ProductViewLink],
  "queryType": "xyz789",
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
  "sku": "xyz789",
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
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface!`](#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
  "id": "4",
  "product": ProductInterface,
  "quantity": 987.65
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
  "payments_order_id": "abc123",
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
  "app_switch_when_available": true,
  "button_styles": ButtonStyles,
  "code": "abc123",
  "display_message": false,
  "display_venmo": false,
  "is_visible": false,
  "message_styles": MessageStyles,
  "payment_intent": "abc123",
  "sdk_params": [SDKParams],
  "sort_order": "abc123",
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
  "default": "xyz789",
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
  "attribute": "abc123",
  "frontendInput": "xyz789",
  "label": "abc123",
  "numeric": false
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
  "max": 987.65,
  "min": 123.45,
  "title": "abc123"
}
```

<HorizontalLine />

### StoreConfig

Contains information about a store's configuration.

#### Fields

| Field Name | Description |
|------------|-------------|
| `allow_company_registration` - [`Boolean!`](#boolean) | Indicates if company registration is allowed |
| `allow_gift_receipt` - [`String`](#string) | Indicates if the gift sender has the option to send a gift receipt. Possible values: 1 (Yes) and 0 (No). |
| `allow_gift_wrapping_on_order` - [`String`](#string) | Indicates whether gift wrapping can be added for the entire order. Possible values: 1 (Yes) and 0 (No). |
| `allow_gift_wrapping_on_order_items` - [`String`](#string) | Indicates whether gift wrapping can be added for individual order items. Possible values: 1 (Yes) and 0 (No). |
| `allow_items` - [`String`](#string) | The value of the Allow Gift Messages for Order Items option |
| `allow_order` - [`String`](#string) | The value of the Allow Gift Messages on Order Level option |
| `allow_printed_card` - [`String`](#string) | Indicates if a printed card can accompany an order. Possible values: 1 (Yes) and 0 (No). |
| `autocomplete_on_storefront` - [`Boolean`](#boolean) | Indicates whether to enable autocomplete on login and forgot password forms. |
| `base_currency_code` - [`String`](#string) | The base currency code. |
| `base_link_url` - [`String`](#string) | A fully-qualified URL that is used to create relative links to the `base_url`. |
| `base_media_url` - [`String`](#string) | The fully-qualified URL that specifies the location of media files. |
| `base_static_url` - [`String`](#string) | The fully-qualified URL that specifies the location of static view files. |
| `base_url` - [`String`](#string) | The store’s fully-qualified base URL. |
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
| `company_credit_enabled` - [`Boolean!`](#boolean) | Indicates if company credit is enabled. |
| `company_enabled` - [`Boolean!`](#boolean) | Indicates if B2B company functionality is enabled |
| `configurable_product_image` - [`ProductImageThumbnail!`](#productimagethumbnail) | checkout/cart/configurable_product_image: which image to use for configurable products. |
| `configurable_thumbnail_source` - [`String`](#string) | Indicates whether the `parent` or child (`itself`) thumbnail should be used in the cart for configurable products. |
| `contact_enabled` - [`Boolean!`](#boolean) | Indicates whether the Contact Us form in enabled. |
| `countries_with_required_region` - [`String`](#string) | Extended Config Data - general/region/state_required |
| `create_account_confirmation` - [`Boolean`](#boolean) | Indicates if the new accounts need confirmation. |
| `customer_access_token_lifetime` - [`Float`](#float) | Customer access token lifetime. |
| `default_country` - [`String`](#string) | Extended Config Data - general/country/default |
| `default_display_currency_code` - [`String`](#string) | The default display currency code. |
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
| `graphql_share_customer_group` - [`Boolean!`](#boolean) | Configuration data from customer/account_information/graphql_share_customer_group |
| `grid_per_page` - [`Int`](#int) | The default number of products per page in Grid View. |
| `grid_per_page_values` - [`String`](#string) | A list of numbers that define how many products can be displayed in Grid View. |
| `grouped_product_image` - [`ProductImageThumbnail!`](#productimagethumbnail) | checkout/cart/grouped_product_image: which image to use for grouped products. |
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
| `optional_zip_countries` - [`String`](#string) | Extended Config Data - general/country/optional_zip_countries |
| `order_cancellation_enabled` - [`Boolean!`](#boolean) | Indicates whether orders can be cancelled by customers or not. |
| `order_cancellation_reasons` - [`[CancellationReason]!`](#cancellationreason) | An array containing available cancellation reasons. |
| `orders_invoices_credit_memos_display_full_summary` - [`Boolean!`](#boolean) | Configuration data from tax/sales_display/full_summary |
| `orders_invoices_credit_memos_display_grandtotal` - [`Boolean!`](#boolean) | Configuration data from tax/sales_display/grandtotal |
| `orders_invoices_credit_memos_display_price` - [`Int!`](#int) | Configuration data from tax/sales_display/price |
| `orders_invoices_credit_memos_display_shipping_amount` - [`Int!`](#int) | Configuration data from tax/sales_display/shipping |
| `orders_invoices_credit_memos_display_subtotal` - [`Int!`](#int) | Configuration data from tax/sales_display/subtotal |
| `orders_invoices_credit_memos_display_zero_tax` - [`Boolean!`](#boolean) | Configuration data from tax/sales_display/zero_tax |
| `printed_card_priceV2` - [`Money`](#money) | The default price of a printed card that accompanies an order. |
| `product_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages. |
| `product_url_suffix` - [`String`](#string) | The suffix applied to product pages, such as `.htm` or `.html`. |
| `quickorder_active` - [`Boolean!`](#boolean) | Indicates whether quick order functionality is enabled. |
| `quote_minimum_amount` - [`Float`](#float) | Minimum order total for quote request. |
| `quote_minimum_amount_message` - [`String`](#string) | A message that will be shown in the cart when the subtotal (after discount) is lower than the minimum allowed amount. |
| `required_character_classes_number` - [`String`](#string) | The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. |
| `requisition_list_share_link_validity_days` - [`Int!`](#int) | Configuration data from btob/requisition_list_sharing/link_validity_days |
| `requisition_list_share_max_recipients` - [`Int!`](#int) | Configuration data from btob/requisition_list_sharing/max_recipients |
| `requisition_list_share_storefront_path` - [`String!`](#string) | Configuration data from btob/requisition_list_sharing/storefront_share_path (route path for share links, no leading or trailing slashes) |
| `requisition_list_sharing_enabled` - [`Boolean!`](#boolean) | Configuration data from btob/requisition_list_sharing/enabled |
| `returns_enabled` - [`String!`](#string) | Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled. |
| `root_category_uid` - [`ID`](#id) | The unique ID for a `CategoryInterface` object. |
| `sales_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. |
| `sales_gift_wrapping` - [`String`](#string) | Indicates if gift wrapping prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `sales_printed_card` - [`String`](#string) | Indicates if printed card prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `secure_base_link_url` - [`String`](#string) | A secure fully-qualified URL that is used to create relative links to the `base_url`. |
| `secure_base_media_url` - [`String`](#string) | The secure fully-qualified URL that specifies the location of media files. |
| `secure_base_static_url` - [`String`](#string) | The secure fully-qualified URL that specifies the location of static view files. |
| `secure_base_url` - [`String`](#string) | The store’s fully-qualified secure base URL. |
| `share_active_segments` - [`Boolean!`](#boolean) | Configuration data from customer/magento_customersegment/share_active_segments |
| `share_applied_cart_rule` - [`Boolean!`](#boolean) | Configuration data from promo/graphql/share_applied_cart_rule |
| `shopping_assistance_checkbox_title` - [`String`](#string) | Configuration data from login_as_customer/general/shopping_assistance_checkbox_title |
| `shopping_assistance_checkbox_tooltip` - [`String`](#string) | Configuration data from login_as_customer/general/shopping_assistance_checkbox_tooltip |
| `shopping_assistance_enabled` - [`Boolean!`](#boolean) | Configuration data from login_as_customer/general/enabled |
| `shopping_cart_display_full_summary` - [`Boolean`](#boolean) | Extended Config Data - tax/cart_display/full_summary |
| `shopping_cart_display_grand_total` - [`Boolean`](#boolean) | Extended Config Data - tax/cart_display/grandtotal |
| `shopping_cart_display_price` - [`Int`](#int) | Extended Config Data - tax/cart_display/price |
| `shopping_cart_display_shipping` - [`Int`](#int) | Extended Config Data - tax/cart_display/shipping |
| `shopping_cart_display_subtotal` - [`Int`](#int) | Extended Config Data - tax/cart_display/subtotal |
| `shopping_cart_display_tax_gift_wrapping` - [`TaxWrappingEnum`](#taxwrappingenum) | Extended Config Data - tax/cart_display/gift_wrapping |
| `shopping_cart_display_zero_tax` - [`Boolean`](#boolean) | Extended Config Data - tax/cart_display/zero_tax |
| `store_code` - [`ID`](#id) | The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope. |
| `store_group_code` - [`ID`](#id) | The unique ID assigned to the store group. In the Admin, this is called the Store Name. |
| `store_group_name` - [`String`](#string) | The label assigned to the store group. |
| `store_name` - [`String`](#string) | The label assigned to the store view. |
| `store_sort_order` - [`Int`](#int) | The store view sort order. |
| `timezone` - [`String`](#string) | The time zone of the store. |
| `title_separator` - [`String`](#string) | The character that separates the category name and subcategory in the browser title bar. |
| `use_store_in_url` - [`Boolean`](#boolean) | Indicates whether the store code should be used in the URL. |
| `website_code` - [`ID`](#id) | The unique ID for the website. |
| `website_name` - [`String`](#string) | The label assigned to the website. |
| `weight_unit` - [`String`](#string) | The unit of weight. |
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
  "allow_company_registration": true,
  "allow_gift_receipt": "abc123",
  "allow_gift_wrapping_on_order": "abc123",
  "allow_gift_wrapping_on_order_items": "abc123",
  "allow_items": "abc123",
  "allow_order": "abc123",
  "allow_printed_card": "abc123",
  "autocomplete_on_storefront": true,
  "base_currency_code": "abc123",
  "base_link_url": "xyz789",
  "base_media_url": "abc123",
  "base_static_url": "xyz789",
  "base_url": "abc123",
  "cart_expires_in_days": 123,
  "cart_gift_wrapping": "abc123",
  "cart_merge_preference": "xyz789",
  "cart_printed_card": "abc123",
  "cart_summary_display_quantity": 123,
  "catalog_default_sort_by": "xyz789",
  "category_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "category_url_suffix": "xyz789",
  "check_money_order_enable_for_specific_countries": false,
  "check_money_order_enabled": false,
  "check_money_order_make_check_payable_to": "abc123",
  "check_money_order_max_order_total": "abc123",
  "check_money_order_min_order_total": "xyz789",
  "check_money_order_new_order_status": "xyz789",
  "check_money_order_payment_from_specific_countries": "xyz789",
  "check_money_order_send_check_to": "xyz789",
  "check_money_order_sort_order": 987,
  "check_money_order_title": "abc123",
  "company_credit_enabled": true,
  "company_enabled": true,
  "configurable_product_image": "ITSELF",
  "configurable_thumbnail_source": "abc123",
  "contact_enabled": true,
  "countries_with_required_region": "xyz789",
  "create_account_confirmation": true,
  "customer_access_token_lifetime": 123.45,
  "default_country": "abc123",
  "default_display_currency_code": "abc123",
  "display_product_prices_in_catalog": 123,
  "display_shipping_prices": 987,
  "display_state_if_optional": false,
  "enable_multiple_wishlists": "xyz789",
  "fixed_product_taxes_apply_tax_to_fpt": false,
  "fixed_product_taxes_display_prices_in_emails": 987,
  "fixed_product_taxes_display_prices_in_product_lists": 987,
  "fixed_product_taxes_display_prices_in_sales_modules": 987,
  "fixed_product_taxes_display_prices_on_product_view_page": 123,
  "fixed_product_taxes_enable": false,
  "fixed_product_taxes_include_fpt_in_subtotal": true,
  "graphql_share_customer_group": true,
  "grid_per_page": 987,
  "grid_per_page_values": "abc123",
  "grouped_product_image": "ITSELF",
  "is_checkout_agreements_enabled": false,
  "is_default_store": true,
  "is_default_store_group": true,
  "is_guest_checkout_enabled": true,
  "is_negotiable_quote_active": false,
  "is_one_page_checkout_enabled": false,
  "is_requisition_list_active": "xyz789",
  "list_mode": "xyz789",
  "list_per_page": 987,
  "list_per_page_values": "xyz789",
  "locale": "abc123",
  "magento_reward_general_is_enabled": "abc123",
  "magento_reward_general_is_enabled_on_front": "abc123",
  "magento_reward_general_min_points_balance": "abc123",
  "magento_reward_general_publish_history": "abc123",
  "magento_reward_points_invitation_customer": "xyz789",
  "magento_reward_points_invitation_customer_limit": "xyz789",
  "magento_reward_points_invitation_order": "xyz789",
  "magento_reward_points_invitation_order_limit": "abc123",
  "magento_reward_points_newsletter": "abc123",
  "magento_reward_points_order": "abc123",
  "magento_reward_points_register": "abc123",
  "magento_reward_points_review": "abc123",
  "magento_reward_points_review_limit": "abc123",
  "magento_wishlist_general_is_enabled": "xyz789",
  "max_items_in_order_summary": 987,
  "maximum_number_of_wishlists": "abc123",
  "minicart_display": false,
  "minicart_max_items": 123,
  "minimum_password_length": "xyz789",
  "newsletter_enabled": true,
  "optional_zip_countries": "xyz789",
  "order_cancellation_enabled": true,
  "order_cancellation_reasons": [CancellationReason],
  "orders_invoices_credit_memos_display_full_summary": true,
  "orders_invoices_credit_memos_display_grandtotal": true,
  "orders_invoices_credit_memos_display_price": 123,
  "orders_invoices_credit_memos_display_shipping_amount": 987,
  "orders_invoices_credit_memos_display_subtotal": 123,
  "orders_invoices_credit_memos_display_zero_tax": false,
  "printed_card_priceV2": Money,
  "product_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "product_url_suffix": "abc123",
  "quickorder_active": false,
  "quote_minimum_amount": 987.65,
  "quote_minimum_amount_message": "abc123",
  "required_character_classes_number": "abc123",
  "requisition_list_share_link_validity_days": 123,
  "requisition_list_share_max_recipients": 987,
  "requisition_list_share_storefront_path": "xyz789",
  "requisition_list_sharing_enabled": false,
  "returns_enabled": "xyz789",
  "root_category_uid": "4",
  "sales_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "sales_gift_wrapping": "abc123",
  "sales_printed_card": "abc123",
  "secure_base_link_url": "abc123",
  "secure_base_media_url": "xyz789",
  "secure_base_static_url": "xyz789",
  "secure_base_url": "xyz789",
  "share_active_segments": false,
  "share_applied_cart_rule": true,
  "shopping_assistance_checkbox_title": "abc123",
  "shopping_assistance_checkbox_tooltip": "abc123",
  "shopping_assistance_enabled": false,
  "shopping_cart_display_full_summary": false,
  "shopping_cart_display_grand_total": false,
  "shopping_cart_display_price": 987,
  "shopping_cart_display_shipping": 987,
  "shopping_cart_display_subtotal": 987,
  "shopping_cart_display_tax_gift_wrapping": "DISPLAY_EXCLUDING_TAX",
  "shopping_cart_display_zero_tax": false,
  "store_code": 4,
  "store_group_code": 4,
  "store_group_name": "abc123",
  "store_name": "xyz789",
  "store_sort_order": 123,
  "timezone": "abc123",
  "title_separator": "abc123",
  "use_store_in_url": false,
  "website_code": 4,
  "website_name": "abc123",
  "weight_unit": "xyz789",
  "zero_subtotal_enable_for_specific_countries": false,
  "zero_subtotal_enabled": false,
  "zero_subtotal_new_order_status": "xyz789",
  "zero_subtotal_payment_action": "xyz789",
  "zero_subtotal_payment_from_specific_countries": "abc123",
  "zero_subtotal_sort_order": 123,
  "zero_subtotal_title": "xyz789"
}
```

<HorizontalLine />

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

#### Example

```json
"abc123"
```

<HorizontalLine />

### StringOperatorInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `type` - [`StringOperatorType`](#stringoperatortype) |  |

#### Example

```json
{"type": "UNKNOWN_STRING_OPERATOR"}
```

<HorizontalLine />

### StringOperatorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNKNOWN_STRING_OPERATOR` |  |
| `SAME_AS_CURRENT` |  |
| `ALL_EXCEPT_CURRENT` |  |

#### Example

```json
""UNKNOWN_STRING_OPERATOR""
```

<HorizontalLine />

### SubmitNegotiableQuoteTemplateForReviewInput

Specifies the quote template properties to update.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attachments` - [`[NegotiableQuoteCommentAttachmentInput]`](#negotiablequotecommentattachmentinput) | Negotiable quote template comment file attachments. |
| `comment` - [`String`](#string) | A comment for the seller to review. |
| `max_order_commitment` - [`Int`](#int) | Commitment for maximum orders |
| `min_order_commitment` - [`Int`](#int) | Commitment for minimum orders |
| `name` - [`String`](#string) | The title assigned to the negotiable quote template. |
| `reference_document_links` - [`[NegotiableQuoteTemplateReferenceDocumentLinkInput]`](#negotiablequotetemplatereferencedocumentlinkinput) | An array of reference document links to add to the negotiable quote template. |
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{
  "attachments": [NegotiableQuoteCommentAttachmentInput],
  "comment": "xyz789",
  "max_order_commitment": 123,
  "min_order_commitment": 987,
  "name": "xyz789",
  "reference_document_links": [
    NegotiableQuoteTemplateReferenceDocumentLinkInput
  ],
  "template_id": 4
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

### Subtree

Represents the subtree of the categories to retrieve.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `depth` - [`Int!`](#int) | The depth of the subcategories to retrieve. For example, a value of `2` returns two levels of subcategories beneath the value specified in `startLevel`. |
| `startLevel` - [`Int!`](#int) | The level of the category tree to use as the starting point of the query. For example, `1` indicates the topmost category is the starting point. |

#### Example

```json
{"depth": 123, "startLevel": 123}
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
| [`ColorSwatchData`](#colorswatchdata) |
| [`ImageSwatchData`](#imageswatchdata) |
| [`TextSwatchData`](#textswatchdata) |

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

### SwatchType

The type of the swatch.

#### Values

| Enum Value | Description |
|------------|-------------|
| `TEXT` |  |
| `IMAGE` |  |
| `COLOR_HEX` |  |
| `CUSTOM` |  |

#### Example

```json
""TEXT""
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
  "cartId": "xyz789",
  "id": "abc123"
}
```

<HorizontalLine />
