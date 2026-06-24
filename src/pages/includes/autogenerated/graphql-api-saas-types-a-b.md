## Types

### AcceptNegotiableQuoteTemplateInput

Specifies the quote template id to accept quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{"template_id": 4}
```

<HorizontalLine />

### AddCustomAttributesToCartItemOutput

Contains details about the cart after adding custom attributes to it items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The custom attributes to cart item have been added. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### AddDownloadableProductsToCartInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The ID of the cart. |
| `cart_items` - [`[DownloadableProductCartItemInput]!`](#downloadableproductcartiteminput) | An array of downloadable products to add. |

#### Example

```json
{
  "cart_id": "abc123",
  "cart_items": [DownloadableProductCartItemInput]
}
```

<HorizontalLine />

### AddDownloadableProductsToCartOutput

Contains details about the cart after adding downloadable products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after adding products. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### AddGiftRegistryRegistrantInput

Defines a new registrant.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](#giftregistrydynamicattributeinput) | Additional attributes specified as a code-value pair. |
| `email` - [`String!`](#string) | The email address of the registrant. |
| `firstname` - [`String!`](#string) | The first name of the registrant. |
| `lastname` - [`String!`](#string) | The last name of the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryDynamicAttributeInput
  ],
  "email": "xyz789",
  "firstname": "xyz789",
  "lastname": "xyz789"
}
```

<HorizontalLine />

### AddGiftRegistryRegistrantsOutput

Contains the results of a request to add registrants.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry after adding registrants. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### AddProductsToCartOutput

Contains details about the cart after adding products to it.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after products have been added. |
| `user_errors` - [`[Error]!`](#error) | Contains errors encountered while adding an item to the cart. |

#### Example

```json
{
  "cart": Cart,
  "user_errors": [Error]
}
```

<HorizontalLine />

### AddProductsToCompareListInput

Contains products to add to an existing compare list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `products` - [`[ID]!`](#id) | An array of product IDs to add to the compare list. |
| `uid` - [`ID!`](#id) | The unique identifier of the compare list to modify. |

#### Example

```json
{
  "products": ["4"],
  "uid": "4"
}
```

<HorizontalLine />

### AddProductsToNewCartOutput

Contains details about the cart after adding products to it.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart`](#cart) | The cart after products have been added. |
| `user_errors` - [`[CartUserInputError]`](#cartuserinputerror) | Contains errors encountered while adding an item to the cart. |

#### Example

```json
{
  "cart": Cart,
  "user_errors": [CartUserInputError]
}
```

<HorizontalLine />

### AddProductsToRequisitionListOutput

Output of the request to add products to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](#requisitionlist) | The requisition list after adding products. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### AddProductsToWishlistOutput

Contains the customer's wish list and any errors encountered.

#### Fields

| Field Name | Description |
|------------|-------------|
| `user_errors` - [`[WishListUserInputError]!`](#wishlistuserinputerror) | An array of errors encountered while adding products to a wish list. |
| `wishlist` - [`Wishlist!`](#wishlist) | Contains the wish list with all items that were successfully added. |

#### Example

```json
{
  "user_errors": [WishListUserInputError],
  "wishlist": Wishlist
}
```

<HorizontalLine />

### AddPurchaseOrderCommentInput

Contains the comment to be added to a purchase order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment` - [`String!`](#string) | Comment text. |
| `purchase_order_uid` - [`ID!`](#id) | The unique ID of a purchase order. |

#### Example

```json
{
  "comment": "xyz789",
  "purchase_order_uid": "4"
}
```

<HorizontalLine />

### AddPurchaseOrderCommentOutput

Contains the successfully added comment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comment` - [`PurchaseOrderComment!`](#purchaseordercomment) | The purchase order comment. |

#### Example

```json
{"comment": PurchaseOrderComment}
```

<HorizontalLine />

### AddPurchaseOrderItemsToCartInput

Defines the purchase order and cart to act on.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The ID to assign to the cart. |
| `purchase_order_uid` - [`ID!`](#id) | Purchase order unique ID. |
| `replace_existing_cart_items` - [`Boolean!`](#boolean) | Replace existing cart or merge items. |

#### Example

```json
{
  "cart_id": "abc123",
  "purchase_order_uid": "4",
  "replace_existing_cart_items": false
}
```

<HorizontalLine />

### AddRequisitionListItemToCartUserError

Contains details about why an attempt to add items to the requistion list failed.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | A description of the error. |
| `type` - [`AddRequisitionListItemToCartUserErrorType!`](#addrequisitionlistitemtocartusererrortype) | The type of error that occurred. |

#### Example

```json
{
  "message": "abc123",
  "type": "OUT_OF_STOCK"
}
```

<HorizontalLine />

### AddRequisitionListItemToCartUserErrorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `OUT_OF_STOCK` |  |
| `UNAVAILABLE_SKU` |  |
| `OPTIONS_UPDATED` |  |
| `LOW_QUANTITY` |  |

#### Example

```json
""OUT_OF_STOCK""
```

<HorizontalLine />

### AddRequisitionListItemsToCartOutput

Output of the request to add items in a requisition list to the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `add_requisition_list_items_to_cart_user_errors` - [`[AddRequisitionListItemToCartUserError]!`](#addrequisitionlistitemtocartusererror) | Details about why the attempt to add items to the requistion list was not successful. |
| `cart` - [`Cart`](#cart) | The cart after adding requisition list items. |
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to add items to the requisition list was successful. |

#### Example

```json
{
  "add_requisition_list_items_to_cart_user_errors": [
    AddRequisitionListItemToCartUserError
  ],
  "cart": Cart,
  "status": false
}
```

<HorizontalLine />

### AddReturnCommentInput

Defines a return comment.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment_text` - [`String!`](#string) | The text added to the return request. |
| `return_uid` - [`ID!`](#id) | The unique ID for a `Return` object. |

#### Example

```json
{
  "comment_text": "abc123",
  "return_uid": "4"
}
```

<HorizontalLine />

### AddReturnCommentOutput

Contains details about the return request.

#### Fields

| Field Name | Description |
|------------|-------------|
| `return` - [`Return`](#return) | The modified return. |

#### Example

```json
{"return": Return}
```

<HorizontalLine />

### AddReturnTrackingInput

Defines tracking information to be added to the return.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `carrier_uid` - [`ID!`](#id) | The unique ID for a `ReturnShippingCarrier` object. |
| `return_uid` - [`ID!`](#id) | The unique ID for a `Returns` object. |
| `tracking_number` - [`String!`](#string) | The shipping tracking number for this return request. |

#### Example

```json
{
  "carrier_uid": "4",
  "return_uid": "4",
  "tracking_number": "abc123"
}
```

<HorizontalLine />

### AddReturnTrackingOutput

Contains the response after adding tracking information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `return` - [`Return`](#return) | Details about the modified return. |
| `return_shipping_tracking` - [`ReturnShippingTracking`](#returnshippingtracking) | Details about shipping for a return. |

#### Example

```json
{
  "return": Return,
  "return_shipping_tracking": ReturnShippingTracking
}
```

<HorizontalLine />

### AddWishlistItemsToCartOutput

Contains the resultant wish list and any error information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `add_wishlist_items_to_cart_user_errors` - [`[WishlistCartUserInputError]!`](#wishlistcartuserinputerror) | An array of errors encountered while adding products to the customer's cart. |
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to add items to the customer's cart was successful. |
| `wishlist` - [`Wishlist!`](#wishlist) | Contains the wish list with all items that were successfully added. |

#### Example

```json
{
  "add_wishlist_items_to_cart_user_errors": [
    WishlistCartUserInputError
  ],
  "status": false,
  "wishlist": Wishlist
}
```

<HorizontalLine />

### AdminAssistanceAction

A single admin assistance action performed on behalf of the customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `action` - [`String!`](#string) | Action identifier, e.g. add_to_cart, place_order. |
| `date` - [`String!`](#string) | When the action occurred. |
| `details` - [`String`](#string) | Action related details, e.g. product SKUs, order id. |

#### Example

```json
{
  "action": "abc123",
  "date": "abc123",
  "details": "xyz789"
}
```

<HorizontalLine />

### AdminAssistanceActions

Paginated admin assistance actions for the customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[AdminAssistanceAction]!`](#adminassistanceaction) | Admin assistance actions for the current page. |
| `page_info` - [`SearchResultPageInfo!`](#searchresultpageinfo) | Contains pagination metadata. |
| `total_count` - [`Int!`](#int) | The total count of admin assistance actions for the customer. |

#### Example

```json
{
  "items": [AdminAssistanceAction],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### Aggregation

A bucket that contains information for each filterable option

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute` - [`String!`](#string) | The attribute code of the filter item |
| `buckets` - [`[Bucket]!`](#bucket) | A container that divides the data into manageable groups. For example, attributes that can have numeric values might have buckets that define price ranges |
| `title` - [`String!`](#string) | The filter name displayed in layered navigation |
| `type` - [`AggregationType`](#aggregationtype) | Identifies the data type of the aggregation |

#### Example

```json
{
  "attribute": "abc123",
  "buckets": [Bucket],
  "title": "abc123",
  "type": "INTELLIGENT"
}
```

<HorizontalLine />

### AggregationType

Identifies the data type of the aggregation

#### Values

| Enum Value | Description |
|------------|-------------|
| `INTELLIGENT` |  |
| `PINNED` |  |
| `POPULAR` |  |

#### Example

```json
""INTELLIGENT""
```

<HorizontalLine />

### ApplePayConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `button_styles` - [`ButtonStyles`](#buttonstyles) | The styles for the ApplePay Smart Button configuration |
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
  "button_styles": ButtonStyles,
  "code": "abc123",
  "is_visible": true,
  "payment_intent": "xyz789",
  "payment_source": "xyz789",
  "sdk_params": [SDKParams],
  "sort_order": "xyz789",
  "title": "abc123"
}
```

<HorizontalLine />

### ApplePayMethodInput

Apple Pay inputs

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
  "paypal_order_id": "abc123"
}
```

<HorizontalLine />

### AppliedCoupon

Contains the applied coupon code.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The coupon code the shopper applied to the card. |

#### Example

```json
{"code": "xyz789"}
```

<HorizontalLine />

### AppliedGiftCard

Contains an applied gift card with applied and remaining balance.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_balance` - [`Money`](#money) | The amount applied to the current cart. |
| `code` - [`String`](#string) | The gift card account code. |
| `current_balance` - [`Money`](#money) | The remaining balance on the gift card. |
| `expiration_date` - [`String`](#string) | The expiration date of the gift card. |

#### Example

```json
{
  "applied_balance": Money,
  "code": "abc123",
  "current_balance": Money,
  "expiration_date": "xyz789"
}
```

<HorizontalLine />

### AppliedQueryRule

The rule that was applied to this product

#### Fields

| Field Name | Description |
|------------|-------------|
| `action_type` - [`AppliedQueryRuleActionType`](#appliedqueryruleactiontype) | An enum that defines the type of rule that was applied |
| `rule_id` - [`String`](#string) | The ID assigned to the rule |
| `rule_name` - [`String`](#string) | The name of the applied rule |

#### Example

```json
{
  "action_type": "BOOST",
  "rule_id": "xyz789",
  "rule_name": "xyz789"
}
```

<HorizontalLine />

### AppliedQueryRuleActionType

The type of rule that was applied to a product during search (optional)

#### Values

| Enum Value | Description |
|------------|-------------|
| `BOOST` |  |
| `BURY` |  |
| `PIN` |  |

#### Example

```json
""BOOST""
```

<HorizontalLine />

### AppliedStoreCredit

Contains the applied and current balances.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_balance` - [`Money`](#money) | The applied store credit balance to the current cart. |
| `current_balance` - [`Money`](#money) | The current balance remaining on store credit. |
| `enabled` - [`Boolean`](#boolean) | Indicates whether store credits are enabled. If the feature is disabled, then the current balance will not be returned. |

#### Example

```json
{
  "applied_balance": Money,
  "current_balance": Money,
  "enabled": false
}
```

<HorizontalLine />

### ApplyCouponToCartInput

Specifies the coupon code to apply to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `coupon_code` - [`String!`](#string) | A valid coupon code. |

#### Example

```json
{
  "cart_id": "xyz789",
  "coupon_code": "abc123"
}
```

<HorizontalLine />

### ApplyCouponToCartOutput

Contains details about the cart after applying a coupon.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after applying a coupon. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### ApplyCouponsStrategy

The strategy to apply coupons to the cart.

#### Values

| Enum Value | Description |
|------------|-------------|
| `APPEND` | Append new coupons keeping the coupons that have been applied before. |
| `REPLACE` | Remove all the coupons from the cart and apply only new provided coupons. |

#### Example

```json
""APPEND""
```

<HorizontalLine />

### ApplyCouponsToCartInput

Apply coupons to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `coupon_codes` - [`[String]!`](#string) | An array of valid coupon codes. |
| `type` - [`ApplyCouponsStrategy`](#applycouponsstrategy) | `replace` to replace the existing coupon(s) or `append` to add the coupon to the coupon(s) list. |

#### Example

```json
{
  "cart_id": "abc123",
  "coupon_codes": ["abc123"],
  "type": "APPEND"
}
```

<HorizontalLine />

### ApplyGiftCardToCartInput

Defines the input required to run the `applyGiftCardToCart` mutation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer's cart. |
| `gift_card_code` - [`String!`](#string) | The gift card code to be applied to the cart. |

#### Example

```json
{
  "cart_id": "abc123",
  "gift_card_code": "xyz789"
}
```

<HorizontalLine />

### ApplyGiftCardToCartOutput

Defines the possible output for the `applyGiftCardToCart` mutation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | Describes the contents of the specified shopping cart. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### ApplyGiftCardToOrder

Contains applied gift cards with gift card code and amount.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_balance` - [`Money!`](#money) | The gift card amount applied to the current order. |
| `code` - [`String!`](#string) | The gift card account code. |

#### Example

```json
{
  "applied_balance": Money,
  "code": "abc123"
}
```

<HorizontalLine />

### ApplyRewardPointsToCartOutput

Contains the customer cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The customer cart after reward points are applied. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### ApplyStoreCreditToCartInput

Defines the input required to run the `applyStoreCreditToCart` mutation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer's cart. |

#### Example

```json
{"cart_id": "xyz789"}
```

<HorizontalLine />

### ApplyStoreCreditToCartOutput

Defines the possible output for the `applyStoreCreditToCart` mutation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The contents of the specified shopping cart. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### AreaInput

AreaInput defines the parameters which will be used for filter by specified location.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `radius` - [`Int!`](#int) | The radius for the search in KM. |
| `search_term` - [`String!`](#string) | The country code where search must be performed. Required parameter together with region, city or postcode. |

#### Example

```json
{"radius": 123, "search_term": "xyz789"}
```

<HorizontalLine />

### AssetImage

Contains information about an asset image.

#### Fields

| Field Name | Description |
|------------|-------------|
| `asset_image` - [`ProductMediaGalleryEntriesAssetImage`](#productmediagalleryentriesassetimage) | Contains a `ProductMediaGalleryEntriesAssetImage` object. |
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](#string) | The label of the product image or video. |
| `position` - [`Int`](#int) | The media item's position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |

#### Example

```json
{
  "asset_image": ProductMediaGalleryEntriesAssetImage,
  "disabled": true,
  "label": "abc123",
  "position": 123,
  "url": "xyz789"
}
```

<HorizontalLine />

### AssetVideo

Contains information about an asset video.

#### Fields

| Field Name | Description |
|------------|-------------|
| `asset_video` - [`ProductMediaGalleryEntriesAssetVideo`](#productmediagalleryentriesassetvideo) | Contains a `ProductMediaGalleryEntriesAssetVideo` object. |
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](#string) | The label of the product image or video. |
| `position` - [`Int`](#int) | The media item's position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |

#### Example

```json
{
  "asset_video": ProductMediaGalleryEntriesAssetVideo,
  "disabled": false,
  "label": "abc123",
  "position": 987,
  "url": "abc123"
}
```

<HorizontalLine />

### AssignChildCompanyInput

Defines the input schema for assigning a child company to a parent company.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `child_company_id` - [`ID!`](#id) | The unique ID of the child company. |
| `parent_company_id` - [`ID!`](#id) | The unique ID of the parent company. |

#### Example

```json
{
  "child_company_id": 4,
  "parent_company_id": "4"
}
```

<HorizontalLine />

### AssignChildCompanyOutput

Contains the response to the request to assign a child company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `company_hierarchy` - [`CompanyHierarchy!`](#companyhierarchy) | The updated company hierarchy for the parent company. |

#### Example

```json
{"company_hierarchy": CompanyHierarchy}
```

<HorizontalLine />

### AssignCompareListToCustomerOutput

Contains the results of the request to assign a compare list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `compare_list` - [`CompareList`](#comparelist) | The contents of the customer's compare list. |
| `result` - [`Boolean!`](#boolean) | Indicates whether the compare list was successfully assigned to the customer. |

#### Example

```json
{"compare_list": CompareList, "result": false}
```

<HorizontalLine />

### AttributeEntityTypeEnum

List of all entity types. Populated by the modules introducing EAV entities.

#### Values

| Enum Value | Description |
|------------|-------------|
| `CATALOG_PRODUCT` |  |
| `CATALOG_CATEGORY` |  |
| `CUSTOMER` |  |
| `CUSTOMER_ADDRESS` |  |
| `RMA_ITEM` |  |

#### Example

```json
""CATALOG_PRODUCT""
```

<HorizontalLine />

### AttributeFile

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_type` - [`String`](#string) | Attribute type code. |
| `code` - [`ID!`](#id) | The attribute code. |
| `url` - [`String!`](#string) | File URL to download the file. |
| `value` - [`String!`](#string) | File code. For file download use `url` field. |

#### Example

```json
{
  "attribute_type": "abc123",
  "code": 4,
  "url": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### AttributeFilterInput

An input object that specifies the filters used for attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `is_comparable` - [`Boolean`](#boolean) | Whether a product or category attribute can be compared against another or not. |
| `is_filterable` - [`Boolean`](#boolean) | Whether a product or category attribute can be filtered or not. |
| `is_filterable_in_search` - [`Boolean`](#boolean) | Whether a product or category attribute can be filtered in search or not. |
| `is_html_allowed_on_front` - [`Boolean`](#boolean) | Whether a product or category attribute can use HTML on front or not. |
| `is_searchable` - [`Boolean`](#boolean) | Whether a product or category attribute can be searched or not. |
| `is_used_for_customer_segment` - [`Boolean`](#boolean) | Whether a customer or customer address attribute is used for customer segment or not. |
| `is_used_for_price_rules` - [`Boolean`](#boolean) | Whether a product or category attribute can be used for price rules or not. |
| `is_used_for_promo_rules` - [`Boolean`](#boolean) | Whether a product or category attribute is used for promo rules or not. |
| `is_visible_in_advanced_search` - [`Boolean`](#boolean) | Whether a product or category attribute is visible in advanced search or not. |
| `is_visible_on_front` - [`Boolean`](#boolean) | Whether a product or category attribute is visible on front or not. |
| `is_wysiwyg_enabled` - [`Boolean`](#boolean) | Whether a product or category attribute has WYSIWYG enabled or not. |
| `used_in_product_listing` - [`Boolean`](#boolean) | Whether a product or category attribute is used in product listing or not. |

#### Example

```json
{
  "is_comparable": false,
  "is_filterable": true,
  "is_filterable_in_search": false,
  "is_html_allowed_on_front": false,
  "is_searchable": false,
  "is_used_for_customer_segment": true,
  "is_used_for_price_rules": false,
  "is_used_for_promo_rules": false,
  "is_visible_in_advanced_search": true,
  "is_visible_on_front": false,
  "is_wysiwyg_enabled": false,
  "used_in_product_listing": true
}
```

<HorizontalLine />

### AttributeFrontendInputEnum

EAV attribute frontend input types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `BOOLEAN` |  |
| `DATE` |  |
| `DATETIME` |  |
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
| `WEIGHT` |  |
| `UNDEFINED` |  |

#### Example

```json
""BOOLEAN""
```

<HorizontalLine />

### AttributeImage

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_type` - [`String`](#string) | Attribute type code. |
| `code` - [`ID!`](#id) | The attribute code. |
| `url` - [`String!`](#string) | Image URL to download the image. |
| `value` - [`String!`](#string) | Image code. For image download use `url` field. |

#### Example

```json
{
  "attribute_type": "abc123",
  "code": 4,
  "url": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### AttributeInput

Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String`](#string) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `entity_type` - [`String`](#string) | The type of entity that defines the attribute. |

#### Example

```json
{
  "attribute_code": "xyz789",
  "entity_type": "xyz789"
}
```

<HorizontalLine />

### AttributeInputSelectedOption

Specifies selected option for a select or multiselect attribute value.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `value` - [`String!`](#string) | The attribute option value. |

#### Example

```json
{"value": "abc123"}
```

<HorizontalLine />

### AttributeMetadata

Base EAV implementation of CustomAttributeMetadataInterface.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `default_value` - [`String`](#string) | Default attribute value. |
| `entity_type` - [`AttributeEntityTypeEnum!`](#attributeentitytypeenum) | The type of entity that defines the attribute. |
| `frontend_class` - [`String`](#string) | The frontend class of the attribute. |
| `frontend_input` - [`AttributeFrontendInputEnum`](#attributefrontendinputenum) | The frontend input type of the attribute. |
| `is_required` - [`Boolean!`](#boolean) | Whether the attribute value is required. |
| `is_unique` - [`Boolean!`](#boolean) | Whether the attribute value must be unique. |
| `label` - [`String`](#string) | The label assigned to the attribute. |
| `options` - [`[CustomAttributeOptionInterface]!`](#customattributeoptioninterface) | Attribute options. |

#### Example

```json
{
  "code": "4",
  "default_value": "xyz789",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "xyz789",
  "frontend_input": "BOOLEAN",
  "is_required": false,
  "is_unique": false,
  "label": "abc123",
  "options": [CustomAttributeOptionInterface]
}
```

<HorizontalLine />

### AttributeMetadataError

Attribute metadata retrieval error.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | Attribute metadata retrieval error message. |
| `type` - [`AttributeMetadataErrorType!`](#attributemetadataerrortype) | Attribute metadata retrieval error type. |

#### Example

```json
{
  "message": "xyz789",
  "type": "ENTITY_NOT_FOUND"
}
```

<HorizontalLine />

### AttributeMetadataErrorType

Attribute metadata retrieval error types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `ENTITY_NOT_FOUND` | The requested entity was not found. |
| `ATTRIBUTE_NOT_FOUND` | The requested attribute was not found. |
| `FILTER_NOT_FOUND` | The filter cannot be applied as it does not belong to the entity |
| `UNDEFINED` | Not categorized error, see the error message. |

#### Example

```json
""ENTITY_NOT_FOUND""
```

<HorizontalLine />

### AttributeMetadataResponse

Contains the output of the `attributeMetadata` query

#### Fields

| Field Name | Description |
|------------|-------------|
| `filterableInSearch` - [`[FilterableInSearchAttribute!]`](#filterableinsearchattribute) | An array of product attributes that can be used for filtering in a `productSearch` query |
| `sortable` - [`[SortableAttribute!]`](#sortableattribute) | An array of product attributes that can be used for sorting in a `productSearch` query |

#### Example

```json
{
  "filterableInSearch": [FilterableInSearchAttribute],
  "sortable": [SortableAttribute]
}
```

<HorizontalLine />

### AttributeOptionMetadata

Base EAV implementation of CustomAttributeOptionInterface.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_default` - [`Boolean!`](#boolean) | Is the option value default. |
| `label` - [`String!`](#string) | The label assigned to the attribute option. |
| `value` - [`String!`](#string) | The attribute option value. |

#### Example

```json
{
  "is_default": false,
  "label": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### AttributeSelectedOption

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The attribute selected option label. |
| `value` - [`String!`](#string) | The attribute selected option value. |

#### Example

```json
{
  "label": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### AttributeSelectedOptionInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The attribute selected option label. |
| `value` - [`String!`](#string) | The attribute selected option value. |

#### Possible Types

| AttributeSelectedOptionInterface Types |
|----------------|
| [`AttributeSelectedOption`](#attributeselectedoption) |

#### Example

```json
{
  "label": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### AttributeSelectedOptions

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_type` - [`String`](#string) | Attribute type code. |
| `code` - [`ID!`](#id) | The attribute code. |
| `selected_options` - [`[AttributeSelectedOptionInterface]!`](#attributeselectedoptioninterface) |  |

#### Example

```json
{
  "attribute_type": "abc123",
  "code": "4",
  "selected_options": [AttributeSelectedOptionInterface]
}
```

<HorizontalLine />

### AttributeValue

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_type` - [`String`](#string) | Attribute type code. |
| `code` - [`ID!`](#id) | The attribute code. |
| `value` - [`String!`](#string) | The attribute value. |

#### Example

```json
{
  "attribute_type": "xyz789",
  "code": 4,
  "value": "abc123"
}
```

<HorizontalLine />

### AttributeValueInput

Specifies the value for attribute.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String!`](#string) | The code of the attribute. |
| `selected_options` - [`[AttributeInputSelectedOption]`](#attributeinputselectedoption) | An array containing selected options for a select or multiselect attribute. |
| `value` - [`String`](#string) | The value assigned to the attribute. |

#### Example

```json
{
  "attribute_code": "abc123",
  "selected_options": [AttributeInputSelectedOption],
  "value": "xyz789"
}
```

<HorizontalLine />

### AttributeValueInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_type` - [`String`](#string) | Attribute type code. |
| `code` - [`ID!`](#id) | The attribute code. |

#### Possible Types

| AttributeValueInterface Types |
|----------------|
| [`AttributeFile`](#attributefile) |
| [`AttributeImage`](#attributeimage) |
| [`AttributeSelectedOptions`](#attributeselectedoptions) |
| [`AttributeValue`](#attributevalue) |
| [`ProductAttributeFile`](#productattributefile) |

#### Example

```json
{"attribute_type": "xyz789", "code": 4}
```

<HorizontalLine />

### AttributesFormOutput

Metadata of EAV attributes associated to form

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[AttributeMetadataError]!`](#attributemetadataerror) | Errors of retrieving certain attributes metadata. |
| `items` - [`[CustomAttributeMetadataInterface]!`](#customattributemetadatainterface) | Requested attributes metadata. |

#### Example

```json
{
  "errors": [AttributeMetadataError],
  "items": [CustomAttributeMetadataInterface]
}
```

<HorizontalLine />

### AttributesMetadataOutput

Metadata of EAV attributes.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[AttributeMetadataError]!`](#attributemetadataerror) | Errors of retrieving certain attributes metadata. |
| `items` - [`[CustomAttributeMetadataInterface]!`](#customattributemetadatainterface) | Requested attributes metadata. |

#### Example

```json
{
  "errors": [AttributeMetadataError],
  "items": [CustomAttributeMetadataInterface]
}
```

<HorizontalLine />

### AvailableCurrency

Defines the code and symbol of a currency that can be used for purchase orders.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CurrencyEnum!`](#currencyenum) | 3-letter currency code, for example USD. |
| `symbol` - [`String!`](#string) | Currency symbol, for example $. |

#### Example

```json
{"code": "AFN", "symbol": "abc123"}
```

<HorizontalLine />

### AvailablePaymentMethod

Describes a payment method that the shopper can use to pay for the order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The payment method code. |
| `is_deferred` - [`Boolean!`](#boolean) | If the payment method is an online integration |
| `oope_payment_method_config` - [`OopePaymentMethodConfig`](#oopepaymentmethodconfig) | Configuration for out of process payment methods |
| `title` - [`String!`](#string) | The payment method title. |

#### Example

```json
{
  "code": "abc123",
  "is_deferred": false,
  "oope_payment_method_config": OopePaymentMethodConfig,
  "title": "abc123"
}
```

<HorizontalLine />

### AvailableShippingMethod

Contains details about the possible shipping methods and carriers.

#### Fields

| Field Name | Description |
|------------|-------------|
| `additional_data` - [`[ShippingAdditionalData]`](#shippingadditionaldata) | Additional data related to the shipping method. |
| `amount` - [`Money!`](#money) | The cost of shipping using this shipping method. |
| `available` - [`Boolean!`](#boolean) | Indicates whether this shipping method can be applied to the cart. |
| `carrier_code` - [`String!`](#string) | A string that identifies a commercial carrier or an offline shipping method. |
| `carrier_title` - [`String!`](#string) | The label for the carrier code. |
| `error_message` - [`String`](#string) | Describes an error condition. |
| `method_code` - [`String`](#string) | A shipping method code associated with a carrier. The value could be null if no method is available. |
| `method_title` - [`String`](#string) | The label for the shipping method code. The value could be null if no method is available. |
| `price_excl_tax` - [`Money!`](#money) | The cost of shipping using this shipping method, excluding tax. |
| `price_incl_tax` - [`Money!`](#money) | The cost of shipping using this shipping method, including tax. |

#### Example

```json
{
  "additional_data": [ShippingAdditionalData],
  "amount": Money,
  "available": true,
  "carrier_code": "abc123",
  "carrier_title": "xyz789",
  "error_message": "xyz789",
  "method_code": "xyz789",
  "method_title": "xyz789",
  "price_excl_tax": Money,
  "price_incl_tax": Money
}
```

<HorizontalLine />

### BatchMutationStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `SUCCESS` |  |
| `FAILURE` |  |
| `MIXED_RESULTS` |  |

#### Example

```json
""SUCCESS""
```

<HorizontalLine />

### BillingAddressInput

Defines the billing address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`CartAddressInput`](#cartaddressinput) | Defines a billing address. |
| `customer_address_id` - [`Int`](#int) | An ID from the customer's address book that uniquely identifies the address to be used for billing. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer's address book that uniquely identifies the address to be used for billing. |
| `same_as_shipping` - [`Boolean`](#boolean) | Indicates whether to set the billing address to be the same as the existing shipping address on the cart. |
| `use_for_shipping` - [`Boolean`](#boolean) | Indicates whether to set the shipping address to be the same as this billing address. |

#### Example

```json
{
  "address": CartAddressInput,
  "customer_address_id": 123,
  "customer_address_uid": "4",
  "same_as_shipping": true,
  "use_for_shipping": true
}
```

<HorizontalLine />

### BillingAddressPaymentSourceInput

The billing address information

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address_line_1` - [`String`](#string) | The first line of the address |
| `address_line_2` - [`String`](#string) | The second line of the address |
| `city` - [`String`](#string) | The city of the address |
| `country_code` - [`String!`](#string) | The country of the address |
| `postal_code` - [`String`](#string) | The postal code of the address |
| `region` - [`String`](#string) | The region of the address |

#### Example

```json
{
  "address_line_1": "xyz789",
  "address_line_2": "xyz789",
  "city": "abc123",
  "country_code": "xyz789",
  "postal_code": "xyz789",
  "region": "abc123"
}
```

<HorizontalLine />

### BillingCartAddress

Contains details about the billing address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](#string) | The company specified for the billing or shipping address. |
| `country` - [`CartAddressCountry!`](#cartaddresscountry) | An object containing the country label and code. |
| `custom_attributes` - [`[AttributeValueInterface]!`](#attributevalueinterface) | The custom attribute values of the billing or shipping address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer's address book that uniquely identifies the address. |
| `fax` - [`String`](#string) | The customer's fax number. |
| `firstname` - [`String!`](#string) | The first name of the customer or guest. |
| `id` - [`Int`](#int) | Id of the customer address. *(Deprecated: Use `customer_address_uid` instead.)* |
| `lastname` - [`String!`](#string) | The last name of the customer or guest. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CartAddressRegion`](#cartaddressregion) | An object containing the region label and code. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |
| `uid` - [`ID!`](#id) | The unique id of the customer cart address. |
| `vat_id` - [`String`](#string) | The VAT company number for billing or shipping address. |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country": CartAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": 4,
  "fax": "xyz789",
  "firstname": "abc123",
  "id": 123,
  "lastname": "abc123",
  "middlename": "xyz789",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": CartAddressRegion,
  "street": ["abc123"],
  "suffix": "abc123",
  "telephone": "abc123",
  "uid": "4",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### Boolean

The `Boolean` scalar type represents `true` or `false`.

#### Example

```json
true
```

<HorizontalLine />

### Breadcrumb

Contains details about an individual category that comprises a breadcrumb.

#### Fields

| Field Name | Description |
|------------|-------------|
| `category_level` - [`Int`](#int) | The category level. |
| `category_name` - [`String`](#string) | The display name of the category. |
| `category_uid` - [`ID!`](#id) | The unique ID for a `Breadcrumb` object. |
| `category_url_key` - [`String`](#string) | The URL key of the category. |
| `category_url_path` - [`String`](#string) | The URL path of the category. |

#### Example

```json
{
  "category_level": 123,
  "category_name": "xyz789",
  "category_uid": "4",
  "category_url_key": "abc123",
  "category_url_path": "abc123"
}
```

<HorizontalLine />

### Bucket

An interface for bucket contents

#### Fields

| Field Name | Description |
|------------|-------------|
| `title` - [`String!`](#string) | A human-readable name of a bucket |

#### Possible Types

| Bucket Types |
|----------------|
| [`CategoryBucket`](#categorybucket) |
| [`CategoryView`](#categoryview) |
| [`RangeBucket`](#rangebucket) |
| [`ScalarBucket`](#scalarbucket) |
| [`StatsBucket`](#statsbucket) |

#### Example

```json
{"title": "xyz789"}
```

<HorizontalLine />

### BundleCartItem

An implementation for bundle product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_gift_wrapping` - [`[GiftWrapping]!`](#giftwrapping) | The list of available gift wrapping options for the cart item. |
| `backorder_message` - [`String`](#string) | Customer-facing hint when the line is salable on notify backorders with insufficient physical quantity; null otherwise. |
| `bundle_options` - [`[SelectedBundleOption]!`](#selectedbundleoption) | An array containing the bundle options the shopper selected. |
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
  "backorder_message": "abc123",
  "bundle_options": [SelectedBundleOption],
  "custom_attributes": [CustomAttribute],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "is_available": false,
  "is_salable": true,
  "max_qty": 987.65,
  "min_qty": 987.65,
  "not_available_message": "abc123",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "uid": 4
}
```

<HorizontalLine />

### BundleCreditMemoItem

Defines bundle product options for `CreditMemoItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](#itemselectedbundleoption) | A list of bundle options that are assigned to a bundle product that is part of a credit memo. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the credit memo item |
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for a `CreditMemoItemInterface` object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |

#### Example

```json
{
  "bundle_options": [ItemSelectedBundleOption],
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_refunded": 987.65
}
```

<HorizontalLine />

### BundleInvoiceItem

Defines bundle product options for `InvoiceItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](#itemselectedbundleoption) | A list of bundle options that are assigned to an invoiced bundle product. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the invoice item |
| `discounts` - [`[Discount]`](#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for an `InvoiceItemInterface` object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
  "bundle_options": [ItemSelectedBundleOption],
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 987.65
}
```

<HorizontalLine />

### BundleItem

Defines an individual item within a bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `options` - [`[BundleItemOption]`](#bundleitemoption) | An array of additional options for this bundle item. |
| `position` - [`Int`](#int) | A number indicating the sequence order of this item compared to the other bundle items. |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `required` - [`Boolean`](#boolean) | Indicates whether the item must be included in the bundle. |
| `sku` - [`String`](#string) | The SKU of the bundle product. |
| `title` - [`String`](#string) | The display name of the item. |
| `type` - [`String`](#string) | The input type that the customer uses to select the item. Examples include radio button and checkbox. |
| `uid` - [`ID`](#id) | The unique ID for a `BundleItem` object. |

#### Example

```json
{
  "options": [BundleItemOption],
  "position": 123,
  "price_range": PriceRange,
  "required": false,
  "sku": "xyz789",
  "title": "abc123",
  "type": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### BundleItemOption

Defines the characteristics that comprise a specific bundle item and its options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `can_change_quantity` - [`Boolean`](#boolean) | Indicates whether the customer can change the number of items for this option. |
| `is_default` - [`Boolean`](#boolean) | Indicates whether this option is the default option. |
| `label` - [`String`](#string) | The text that identifies the bundled item option. |
| `position` - [`Int`](#int) | When a bundle item contains multiple options, the relative position of this option compared to the other options. |
| `price` - [`Float`](#float) | The price of the selected option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | One of FIXED, PERCENT, or DYNAMIC. |
| `product` - [`ProductInterface`](#productinterface) | Contains details about this product option. |
| `quantity` - [`Float`](#float) | The quantity of this specific bundle item. |
| `uid` - [`ID!`](#id) | The unique ID for a `BundleItemOption` object. |

#### Example

```json
{
  "can_change_quantity": false,
  "is_default": true,
  "label": "abc123",
  "position": 987,
  "price": 123.45,
  "price_type": "FIXED",
  "product": ProductInterface,
  "quantity": 987.65,
  "uid": 4
}
```

<HorizontalLine />

### BundleOrderItem

Defines bundle product options for `OrderItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](#itemselectedbundleoption) | A list of bundle options that are assigned to the bundle product. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the order item |
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an `OrderItemInterface` object. |
| `parent_sku` - [`String`](#string) | The SKU of parent product. |
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
  "bundle_options": [ItemSelectedBundleOption],
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "parent_sku": "abc123",
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "abc123",
  "product_url_key": "abc123",
  "quantity_canceled": 987.65,
  "quantity_invoiced": 123.45,
  "quantity_ordered": 123.45,
  "quantity_refunded": 987.65,
  "quantity_return_requested": 987.65,
  "quantity_returned": 123.45,
  "quantity_shipped": 123.45,
  "selected_options": [OrderItemOption],
  "status": "xyz789"
}
```

<HorizontalLine />

### BundleProduct

Defines basic features of a bundle product and contains multiple BundleItems.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](#string) | The product's country of origin. |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `dynamic_price` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamic price. |
| `dynamic_sku` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamic SKU. |
| `dynamic_weight` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamically calculated weight. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `items` - [`[BundleItem]`](#bundleitem) | An array containing information about individual bundle items. |
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
| `price_details` - [`PriceDetails`](#pricedetails) | The price details of the main product |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of `TierPrice` objects. |
| `price_view` - [`PriceViewEnum`](#priceviewenum) | One of PRICE_RANGE or AS_LOW_AS. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of `ProductLinks` objects. |
| `quantity` - [`Float`](#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of products to be displayed in a Related Products block. |
| `ship_bundle_items` - [`ShipBundleItemsEnum`](#shipbundleitemsenum) | Indicates whether to ship bundle items together or individually. |
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
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "country_of_manufacture": "xyz789",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "dynamic_price": false,
  "dynamic_sku": false,
  "dynamic_weight": false,
  "gift_message_available": false,
  "gift_wrapping_available": true,
  "gift_wrapping_price": Money,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "items": [BundleItem],
  "manufacturer": 987,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "abc123",
  "min_sale_qty": 123.45,
  "name": "xyz789",
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "options": [CustomizableOptionInterface],
  "options_container": "xyz789",
  "price_details": PriceDetails,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "price_view": "PRICE_RANGE",
  "product_links": [ProductLinksInterface],
  "quantity": 123.45,
  "related_products": [ProductInterface],
  "ship_bundle_items": "TOGETHER",
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
  "weight": 123.45
}
```

<HorizontalLine />

### BundleRequisitionListItem

Contains details about bundle products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[SelectedBundleOption]!`](#selectedbundleoption) | An array of selected options for a bundle product. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The quantity of the product added to the requisition list. |
| `sku` - [`String!`](#string) | The product SKU. |
| `uid` - [`ID!`](#id) | The unique ID of an item in a requisition list. |

#### Example

```json
{
  "bundle_options": [SelectedBundleOption],
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 123.45,
  "sku": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### BundleShipmentItem

Defines bundle product options for `ShipmentItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](#itemselectedbundleoption) | A list of bundle options that are assigned to a shipped product. |
| `id` - [`ID!`](#id) | The unique ID for a `ShipmentItemInterface` object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Example

```json
{
  "bundle_options": [ItemSelectedBundleOption],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_shipped": 987.65
}
```

<HorizontalLine />

### BundleWishlistItem

Defines bundle product options for `WishlistItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `bundle_options` - [`[SelectedBundleOption]`](#selectedbundleoption) | An array containing information about the selected bundle items. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface!`](#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "abc123",
  "bundle_options": [SelectedBundleOption],
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": 4,
  "product": ProductInterface,
  "quantity": 987.65
}
```

<HorizontalLine />

### ButtonStyles

#### Fields

| Field Name | Description |
|------------|-------------|
| `color` - [`String`](#string) | The button color |
| `height` - [`Int`](#int) | The button height in pixels |
| `label` - [`String`](#string) | The button label |
| `layout` - [`String`](#string) | The button layout |
| `shape` - [`String`](#string) | The button shape |
| `tagline` - [`Boolean`](#boolean) | Indicates whether the tagline is displayed |
| `use_default_height` - [`Boolean`](#boolean) | Defines if the button uses default height. If the value is false, the value of height is used |

#### Example

```json
{
  "color": "abc123",
  "height": 987,
  "label": "xyz789",
  "layout": "abc123",
  "shape": "abc123",
  "tagline": false,
  "use_default_height": false
}
```

<HorizontalLine />
