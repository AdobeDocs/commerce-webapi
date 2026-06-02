## Types

### AcceptNegotiableQuoteTemplateInput

Specifies the quote template id to accept quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{"template_id": "4"}
```

<HorizontalLine />

### AddBundleProductsToCartInput

Defines the bundle products to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The ID of the cart. |
| `cart_items` - [`[BundleProductCartItemInput]!`](#bundleproductcartiteminput) | An array of bundle products to add. |

#### Example

```json
{
  "cart_id": "xyz789",
  "cart_items": [BundleProductCartItemInput]
}
```

<HorizontalLine />

### AddBundleProductsToCartOutput

Contains details about the cart after adding bundle products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after adding products. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### AddConfigurableProductsToCartInput

Defines the configurable products to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The ID of the cart. |
| `cart_items` - [`[ConfigurableProductCartItemInput]!`](#configurableproductcartiteminput) | An array of configurable products to add. |

#### Example

```json
{
  "cart_id": "abc123",
  "cart_items": [ConfigurableProductCartItemInput]
}
```

<HorizontalLine />

### AddConfigurableProductsToCartOutput

Contains details about the cart after adding configurable products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after adding products. |

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
  "cart_id": "xyz789",
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
  "firstname": "abc123",
  "lastname": "abc123"
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
| `user_errors` - [`[CartUserInputError]!`](#cartuserinputerror) | Contains errors encountered while adding an item to the cart. |

#### Example

```json
{
  "cart": Cart,
  "user_errors": [CartUserInputError]
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
{"products": ["4"], "uid": 4}
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
  "comment": "abc123",
  "purchase_order_uid": 4
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
  "cart_id": "xyz789",
  "purchase_order_uid": 4,
  "replace_existing_cart_items": true
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
  "status": true
}
```

<HorizontalLine />

### AddReturnCommentInput

Defines a return comment.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment_text` - [`String!`](#string) | The text added to the return request. |
| `return_uid` - [`ID!`](#id) | The unique ID for a &#x60;Return&#x60; object. |

#### Example

```json
{
  "comment_text": "xyz789",
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
| `carrier_uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnShippingCarrier&#x60; object. |
| `return_uid` - [`ID!`](#id) | The unique ID for a &#x60;Returns&#x60; object. |
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

### AddSimpleProductsToCartInput

Defines the simple and group products to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `cart_items` - [`[SimpleProductCartItemInput]!`](#simpleproductcartiteminput) | An array of simple and group items to add. |

#### Example

```json
{
  "cart_id": "xyz789",
  "cart_items": [SimpleProductCartItemInput]
}
```

<HorizontalLine />

### AddSimpleProductsToCartOutput

Contains details about the cart after adding simple or group products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after adding products. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### AddVirtualProductsToCartInput

Defines the virtual products to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `cart_items` - [`[VirtualProductCartItemInput]!`](#virtualproductcartiteminput) | An array of virtual products to add. |

#### Example

```json
{
  "cart_id": "abc123",
  "cart_items": [VirtualProductCartItemInput]
}
```

<HorizontalLine />

### AddVirtualProductsToCartOutput

Contains details about the cart after adding virtual products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after adding products. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### AddWishlistItemsToCartOutput

Contains the resultant wish list and any error information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `add_wishlist_items_to_cart_user_errors` - [`[WishlistCartUserInputError]!`](#wishlistcartuserinputerror) | An array of errors encountered while adding products to the customer&#x27;s cart. |
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to add items to the customer&#x27;s cart was successful. |
| `wishlist` - [`Wishlist!`](#wishlist) | Contains the wish list with all items that were successfully added. |

#### Example

```json
{
  "add_wishlist_items_to_cart_user_errors": [
    WishlistCartUserInputError
  ],
  "status": true,
  "wishlist": Wishlist
}
```

<HorizontalLine />

### Aggregation

Contains information for each filterable option (such as price, category `UID`, and custom attributes).

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String!`](#string) | Attribute code of the aggregation group. |
| `count` - [`Int`](#int) | The number of options in the aggregation group. |
| `label` - [`String`](#string) | The aggregation display name. |
| `options` - [`[AggregationOption]`](#aggregationoption) | Array of options for the aggregation. |
| `position` - [`Int`](#int) | The relative position of the attribute in a layered navigation block. |

#### Example

```json
{
  "attribute_code": "abc123",
  "count": 123,
  "label": "abc123",
  "options": [AggregationOption],
  "position": 987
}
```

<HorizontalLine />

### AggregationOption

An implementation of `AggregationOptionInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `count` - [`Int`](#int) | The number of items that match the aggregation option. |
| `label` - [`String`](#string) | The display label for an aggregation option. |
| `value` - [`String!`](#string) | The internal ID that represents the value of the option. |

#### Example

```json
{
  "count": 987,
  "label": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### AggregationOptionInterface

Defines aggregation option fields.

#### Fields

| Field Name | Description |
|------------|-------------|
| `count` - [`Int`](#int) | The number of items that match the aggregation option. |
| `label` - [`String`](#string) | The display label for an aggregation option. |
| `value` - [`String!`](#string) | The internal ID that represents the value of the option. |

#### Possible Types

| AggregationOptionInterface Types |
|----------------|
| [`AggregationOption`](#aggregationoption) |

#### Example

```json
{
  "count": 123,
  "label": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### AggregationsCategoryFilterInput

Filter category aggregations in layered navigation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `includeDirectChildrenOnly` - [`Boolean`](#boolean) | Indicates whether to include only direct subcategories or all children categories at all levels. |

#### Example

```json
{"includeDirectChildrenOnly": false}
```

<HorizontalLine />

### AggregationsFilterInput

An input object that specifies the filters used in product aggregations.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `category` - [`AggregationsCategoryFilterInput`](#aggregationscategoryfilterinput) | Filter category aggregations in layered navigation. |

#### Example

```json
{"category": AggregationsCategoryFilterInput}
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
  "code": "xyz789",
  "is_visible": true,
  "payment_intent": "abc123",
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
  "payments_order_id": "xyz789",
  "paypal_order_id": "xyz789"
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
  "code": "xyz789",
  "current_balance": Money,
  "expiration_date": "abc123"
}
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
  "enabled": true
}
```

<HorizontalLine />

### ApplyCouponToCartInput

Specifies the coupon code to apply to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `coupon_code` - [`String!`](#string) | A valid coupon code. |

#### Example

```json
{
  "cart_id": "xyz789",
  "coupon_code": "xyz789"
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
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `coupon_codes` - [`[String]!`](#string) | An array of valid coupon codes. |
| `type` - [`ApplyCouponsStrategy`](#applycouponsstrategy) | &#x60;replace&#x60; to replace the existing coupon(s) or &#x60;append&#x60; to add the coupon to the coupon(s) list. |

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
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |
| `gift_card_code` - [`String!`](#string) | The gift card code to be applied to the cart. |

#### Example

```json
{
  "cart_id": "xyz789",
  "gift_card_code": "abc123"
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
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |

#### Example

```json
{"cart_id": "abc123"}
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
{"radius": 987, "search_term": "xyz789"}
```

<HorizontalLine />

### AssignCompareListToCustomerOutput

Contains the results of the request to assign a compare list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `compare_list` - [`CompareList`](#comparelist) | The contents of the customer&#x27;s compare list. |
| `result` - [`Boolean!`](#boolean) | Indicates whether the compare list was successfully assigned to the customer. |

#### Example

```json
{"compare_list": CompareList, "result": true}
```

<HorizontalLine />

### Attribute

Contains details about the attribute, including the code and type.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String`](#string) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `attribute_options` - [`[AttributeOption]`](#attributeoption) | Attribute options list. |
| `attribute_type` - [`String`](#string) | The data type of the attribute. |
| `entity_type` - [`String`](#string) | The type of entity that defines the attribute. |
| `input_type` - [`String`](#string) | The frontend input type of the attribute. |
| `storefront_properties` - [`StorefrontProperties`](#storefrontproperties) | Details about the storefront properties configured for the attribute. |

#### Example

```json
{
  "attribute_code": "xyz789",
  "attribute_options": [AttributeOption],
  "attribute_type": "xyz789",
  "entity_type": "abc123",
  "input_type": "xyz789",
  "storefront_properties": StorefrontProperties
}
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
  "is_comparable": true,
  "is_filterable": true,
  "is_filterable_in_search": true,
  "is_html_allowed_on_front": false,
  "is_searchable": true,
  "is_used_for_customer_segment": false,
  "is_used_for_price_rules": false,
  "is_used_for_promo_rules": false,
  "is_visible_in_advanced_search": false,
  "is_visible_on_front": false,
  "is_wysiwyg_enabled": true,
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
  "entity_type": "abc123"
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
{"value": "xyz789"}
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
  "code": 4,
  "default_value": "xyz789",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "xyz789",
  "frontend_input": "BOOLEAN",
  "is_required": true,
  "is_unique": true,
  "label": "xyz789",
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

### AttributeOption

Defines an attribute option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String`](#string) | The label assigned to the attribute option. |
| `value` - [`String`](#string) | The attribute option value. |

#### Example

```json
{
  "label": "xyz789",
  "value": "abc123"
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
  "is_default": true,
  "label": "xyz789",
  "value": "abc123"
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
  "value": "xyz789"
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
  "label": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### AttributeSelectedOptions

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The attribute code. |
| `selected_options` - [`[AttributeSelectedOptionInterface]!`](#attributeselectedoptioninterface) |  |

#### Example

```json
{
  "code": 4,
  "selected_options": [AttributeSelectedOptionInterface]
}
```

<HorizontalLine />

### AttributeValue

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The attribute code. |
| `value` - [`String!`](#string) | The attribute value. |

#### Example

```json
{"code": 4, "value": "xyz789"}
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
  "value": "abc123"
}
```

<HorizontalLine />

### AttributeValueInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The attribute code. |

#### Possible Types

| AttributeValueInterface Types |
|----------------|
| [`AttributeValue`](#attributevalue) |
| [`AttributeSelectedOptions`](#attributeselectedoptions) |

#### Example

```json
{"code": 4}
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
{"code": "AFN", "symbol": "xyz789"}
```

<HorizontalLine />

### AvailablePaymentMethod

Describes a payment method that the shopper can use to pay for the order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The payment method code. |
| `is_deferred` - [`Boolean!`](#boolean) | If the payment method is an online integration |
| `title` - [`String!`](#string) | The payment method title. |

#### Example

```json
{
  "code": "xyz789",
  "is_deferred": true,
  "title": "xyz789"
}
```

<HorizontalLine />

### AvailableShippingMethod

Contains details about the possible shipping methods and carriers.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The cost of shipping using this shipping method. |
| `available` - [`Boolean!`](#boolean) | Indicates whether this shipping method can be applied to the cart. |
| `base_amount` - [`Money`](#money) |  *(Deprecated: The field should not be used on the storefront.)* |
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
  "amount": Money,
  "available": true,
  "base_amount": Money,
  "carrier_code": "xyz789",
  "carrier_title": "abc123",
  "error_message": "xyz789",
  "method_code": "abc123",
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
| `customer_address_id` - [`Int`](#int) | An ID from the customer&#x27;s address book that uniquely identifies the address to be used for billing. |
| `same_as_shipping` - [`Boolean`](#boolean) | Indicates whether to set the billing address to be the same as the existing shipping address on the cart. |
| `use_for_shipping` - [`Boolean`](#boolean) | Indicates whether to set the shipping address to be the same as this billing address. |

#### Example

```json
{
  "address": CartAddressInput,
  "customer_address_id": 987,
  "same_as_shipping": true,
  "use_for_shipping": true
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
| `customer_notes` - [`String`](#string) |  *(Deprecated: The field is used only in shipping address.)* |
| `fax` - [`String`](#string) | The customer&#x27;s fax number. |
| `firstname` - [`String!`](#string) | The first name of the customer or guest. |
| `lastname` - [`String!`](#string) | The last name of the customer or guest. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CartAddressRegion`](#cartaddressregion) | An object containing the region label and code. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |
| `uid` - [`String!`](#string) | The unique id of the customer address. |
| `vat_id` - [`String`](#string) | The VAT company number for billing or shipping address. |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country": CartAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_notes": "abc123",
  "fax": "abc123",
  "firstname": "xyz789",
  "lastname": "xyz789",
  "middlename": "xyz789",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": CartAddressRegion,
  "street": ["abc123"],
  "suffix": "xyz789",
  "telephone": "abc123",
  "uid": "abc123",
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

### BraintreeCcVaultInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `device_data` - [`String`](#string) |  |
| `public_hash` - [`String!`](#string) |  |

#### Example

```json
{
  "device_data": "abc123",
  "public_hash": "xyz789"
}
```

<HorizontalLine />

### BraintreeInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `device_data` - [`String`](#string) | Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. |
| `is_active_payment_token_enabler` - [`Boolean!`](#boolean) | States whether the payment details (Credit/Debit Card, PayPal Account) entered by a customer should be tokenized for later usage. Required only if Vault is enabled for the relevant Braintree payment integration. |
| `payment_method_nonce` - [`String!`](#string) | The one-time payment token generated by Braintree payment gateway based on payment details (Card, PayPal). Required field to make sale transaction. |

#### Example

```json
{
  "device_data": "xyz789",
  "is_active_payment_token_enabler": false,
  "payment_method_nonce": "abc123"
}
```

<HorizontalLine />

### BraintreeVaultInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `device_data` - [`String`](#string) |  |
| `public_hash` - [`String!`](#string) |  |

#### Example

```json
{
  "device_data": "abc123",
  "public_hash": "xyz789"
}
```

<HorizontalLine />

### Breadcrumb

Contains details about an individual category that comprises a breadcrumb.

#### Fields

| Field Name | Description |
|------------|-------------|
| `category_id` - [`Int`](#int) | The ID of the category. *(Deprecated: Use &#x60;category_uid&#x60; instead.)* |
| `category_level` - [`Int`](#int) | The category level. |
| `category_name` - [`String`](#string) | The display name of the category. |
| `category_uid` - [`ID!`](#id) | The unique ID for a &#x60;Breadcrumb&#x60; object. |
| `category_url_key` - [`String`](#string) | The URL key of the category. |
| `category_url_path` - [`String`](#string) | The URL path of the category. |

#### Example

```json
{
  "category_id": 123,
  "category_level": 123,
  "category_name": "abc123",
  "category_uid": "4",
  "category_url_key": "xyz789",
  "category_url_path": "abc123"
}
```

<HorizontalLine />

### BundleCartItem

An implementation for bundle product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_gift_wrapping` - [`[GiftWrapping]!`](#giftwrapping) | The list of available gift wrapping options for the cart item. |
| `bundle_options` - [`[SelectedBundleOption]!`](#selectedbundleoption) | An array containing the bundle options the shopper selected. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message for the cart item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the cart item. |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
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
  "bundle_options": [SelectedBundleOption],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "abc123",
  "is_available": false,
  "max_qty": 987.65,
  "min_qty": 123.45,
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": "4"
}
```

<HorizontalLine />

### BundleCreditMemoItem

Defines bundle product options for `CreditMemoItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](#itemselectedbundleoption) | A list of bundle options that are assigned to a bundle product that is part of a credit memo. |
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CreditMemoItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |

#### Example

```json
{
  "bundle_options": [ItemSelectedBundleOption],
  "discounts": [Discount],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
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
  "bundle_options": [ItemSelectedBundleOption],
  "discounts": [Discount],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_invoiced": 123.45
}
```

<HorizontalLine />

### BundleItem

Defines an individual item within a bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | An ID assigned to each type of item in a bundle product. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `options` - [`[BundleItemOption]`](#bundleitemoption) | An array of additional options for this bundle item. |
| `position` - [`Int`](#int) | A number indicating the sequence order of this item compared to the other bundle items. |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `required` - [`Boolean`](#boolean) | Indicates whether the item must be included in the bundle. |
| `sku` - [`String`](#string) | The SKU of the bundle product. |
| `title` - [`String`](#string) | The display name of the item. |
| `type` - [`String`](#string) | The input type that the customer uses to select the item. Examples include radio button and checkbox. |
| `uid` - [`ID`](#id) | The unique ID for a &#x60;BundleItem&#x60; object. |

#### Example

```json
{
  "option_id": 123,
  "options": [BundleItemOption],
  "position": 987,
  "price_range": PriceRange,
  "required": false,
  "sku": "abc123",
  "title": "xyz789",
  "type": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### BundleItemOption

Defines the characteristics that comprise a specific bundle item and its options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `can_change_quantity` - [`Boolean`](#boolean) | Indicates whether the customer can change the number of items for this option. |
| `id` - [`Int`](#int) | The ID assigned to the bundled item option. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `is_default` - [`Boolean`](#boolean) | Indicates whether this option is the default option. |
| `label` - [`String`](#string) | The text that identifies the bundled item option. |
| `position` - [`Int`](#int) | When a bundle item contains multiple options, the relative position of this option compared to the other options. |
| `price` - [`Float`](#float) | The price of the selected option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | One of FIXED, PERCENT, or DYNAMIC. |
| `product` - [`ProductInterface`](#productinterface) | Contains details about this product option. |
| `qty` - [`Float`](#float) | Indicates the quantity of this specific bundle item. *(Deprecated: Use &#x60;quantity&#x60; instead.)* |
| `quantity` - [`Float`](#float) | The quantity of this specific bundle item. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;BundleItemOption&#x60; object. |

#### Example

```json
{
  "can_change_quantity": false,
  "id": 123,
  "is_default": false,
  "label": "xyz789",
  "position": 123,
  "price": 987.65,
  "price_type": "FIXED",
  "product": ProductInterface,
  "qty": 987.65,
  "quantity": 987.65,
  "uid": 4
}
```

<HorizontalLine />

### BundleOptionInput

Defines the input for a bundle option.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `id` - [`Int!`](#int) | The ID of the option. |
| `quantity` - [`Float!`](#float) | The number of the selected item to add to the cart. |
| `value` - [`[String]!`](#string) | An array with the chosen value of the option. |

#### Example

```json
{
  "id": 987,
  "quantity": 123.45,
  "value": ["abc123"]
}
```

<HorizontalLine />

### BundleOrderItem

Defines bundle product options for `OrderItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](#itemselectedbundleoption) | A list of bundle options that are assigned to the bundle product. |
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
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
  "bundle_options": [ItemSelectedBundleOption],
  "discounts": [Discount],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "abc123",
  "product_url_key": "xyz789",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 123.45,
  "quantity_ordered": 987.65,
  "quantity_refunded": 123.45,
  "quantity_returned": 123.45,
  "quantity_shipped": 987.65,
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
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `dynamic_price` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamic price. |
| `dynamic_sku` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamic SKU. |
| `dynamic_weight` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamically calculated weight. |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `items` - [`[BundleItem]`](#bundleitem) | An array containing information about individual bundle items. |
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
| `price_details` - [`PriceDetails`](#pricedetails) | The price details of the main product |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `price_view` - [`PriceViewEnum`](#priceviewenum) | One of PRICE_RANGE or AS_LOW_AS. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `ship_bundle_items` - [`ShipBundleItemsEnum`](#shipbundleitemsenum) | Indicates whether to ship bundle items together or individually. |
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
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "color": 987,
  "country_of_manufacture": "abc123",
  "created_at": "xyz789",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "dynamic_price": true,
  "dynamic_sku": true,
  "dynamic_weight": false,
  "gift_message_available": "abc123",
  "id": 987,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "items": [BundleItem],
  "manufacturer": 123,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "abc123",
  "name": "xyz789",
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "options": [CustomizableOptionInterface],
  "options_container": "xyz789",
  "price": ProductPrices,
  "price_details": PriceDetails,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "price_view": "PRICE_RANGE",
  "product_links": [ProductLinksInterface],
  "rating_summary": 123.45,
  "redirect_code": 987,
  "related_products": [ProductInterface],
  "relative_url": "xyz789",
  "review_count": 123,
  "reviews": ProductReviews,
  "ship_bundle_items": "TOGETHER",
  "short_description": ComplexTextValue,
  "sku": "xyz789",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 123.45,
  "special_to_date": "abc123",
  "staged": false,
  "stock_status": "IN_STOCK",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "xyz789",
  "uid": "4",
  "updated_at": "xyz789",
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

### BundleProductCartItemInput

Defines a single bundle product.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `bundle_options` - [`[BundleOptionInput]!`](#bundleoptioninput) | A mandatory array of options for the bundle product, including each chosen option and specified quantity. |
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | The ID and value of the option. |
| `data` - [`CartItemInput!`](#cartiteminput) | The quantity and SKU of the bundle product. |

#### Example

```json
{
  "bundle_options": [BundleOptionInput],
  "customizable_options": [CustomizableOptionInput],
  "data": CartItemInput
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
| `uid` - [`ID!`](#id) | The unique ID of an item in a requisition list. |

#### Example

```json
{
  "bundle_options": [SelectedBundleOption],
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 987.65,
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
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ShipmentItemInterface&#x60; object. |
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
  "quantity_shipped": 123.45
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
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
  "bundle_options": [SelectedBundleOption],
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
  "id": 4,
  "product": ProductInterface,
  "quantity": 123.45
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
  "height": 123,
  "label": "abc123",
  "layout": "abc123",
  "shape": "abc123",
  "tagline": false,
  "use_default_height": false
}
```

<HorizontalLine />

### CancelNegotiableQuoteTemplateInput

Specifies the quote template id of the quote template to cancel

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancellation_comment` - [`String`](#string) | A comment to provide reason of cancellation. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{
  "cancellation_comment": "xyz789",
  "template_id": "4"
}
```

<HorizontalLine />

### CancelOrderInput

Defines the order to cancel.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `order_id` - [`ID!`](#id) | Order ID. |
| `reason` - [`String!`](#string) | Cancellation reason. |

#### Example

```json
{"order_id": 4, "reason": "abc123"}
```

<HorizontalLine />

### CancelOrderOutput

Contains the updated customer order and error message if any.

#### Fields

| Field Name | Description |
|------------|-------------|
| `error` - [`String`](#string) | Error encountered while cancelling the order. |
| `order` - [`CustomerOrder`](#customerorder) | Updated customer order. |

#### Example

```json
{
  "error": "abc123",
  "order": CustomerOrder
}
```

<HorizontalLine />

### CancellationReason

#### Fields

| Field Name | Description |
|------------|-------------|
| `description` - [`String!`](#string) |  |

#### Example

```json
{"description": "abc123"}
```

<HorizontalLine />

### Card

#### Fields

| Field Name | Description |
|------------|-------------|
| `bin_details` - [`CardBin`](#cardbin) | Card bin details |
| `card_expiry_month` - [`String`](#string) | Expiration month of the card |
| `card_expiry_year` - [`String`](#string) | Expiration year of the card |
| `last_digits` - [`String`](#string) | Last four digits of the card |
| `name` - [`String`](#string) | Name on the card |

#### Example

```json
{
  "bin_details": CardBin,
  "card_expiry_month": "xyz789",
  "card_expiry_year": "xyz789",
  "last_digits": "abc123",
  "name": "abc123"
}
```

<HorizontalLine />

### CardBin

#### Fields

| Field Name | Description |
|------------|-------------|
| `bin` - [`String`](#string) | Card bin number |

#### Example

```json
{"bin": "abc123"}
```

<HorizontalLine />

### Cart

Contains the contents and other details about a guest or customer cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_coupon` - [`AppliedCoupon`](#appliedcoupon) |  *(Deprecated: Use &#x60;applied_coupons&#x60; instead.)* |
| `applied_coupons` - [`[AppliedCoupon]`](#appliedcoupon) | An array of &#x60;AppliedCoupon&#x60; objects. Each object contains the &#x60;code&#x60; text attribute, which specifies the coupon code. |
| `applied_gift_cards` - [`[AppliedGiftCard]`](#appliedgiftcard) | An array of gift card items applied to the cart. |
| `applied_reward_points` - [`RewardPointsAmount`](#rewardpointsamount) | The amount of reward points applied to the cart. |
| `applied_store_credit` - [`AppliedStoreCredit`](#appliedstorecredit) | Store credit information applied to the cart. |
| `available_gift_wrappings` - [`[GiftWrapping]!`](#giftwrapping) | The list of available gift wrapping options for the cart. |
| `available_payment_methods` - [`[AvailablePaymentMethod]`](#availablepaymentmethod) | An array of available payment methods. |
| `billing_address` - [`BillingCartAddress`](#billingcartaddress) | The billing address assigned to the cart. |
| `email` - [`String`](#string) | The email address of the guest or customer. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message for the cart |
| `gift_receipt_included` - [`Boolean!`](#boolean) | Indicates whether the shopper requested gift receipt for the cart. |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the cart. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;Cart&#x60; object. |
| `is_virtual` - [`Boolean!`](#boolean) | Indicates whether the cart contains only virtual products. |
| `items` - [`[CartItemInterface]`](#cartiteminterface) | An array of products that have been added to the cart. *(Deprecated: Use &#x60;itemsV2&#x60; instead.)* |
| `itemsV2` - [`CartItems`](#cartitems) |  |
| `prices` - [`CartPrices`](#cartprices) | Pricing details for the quote. |
| `printed_card_included` - [`Boolean!`](#boolean) | Indicates whether the shopper requested a printed card for the cart. |
| `selected_payment_method` - [`SelectedPaymentMethod`](#selectedpaymentmethod) | Indicates which payment method was applied to the cart. |
| `shipping_addresses` - [`[ShippingCartAddress]!`](#shippingcartaddress) | An array of shipping addresses assigned to the cart. |
| `total_quantity` - [`Float!`](#float) | The total number of items in the cart. |

#### Example

```json
{
  "applied_coupon": AppliedCoupon,
  "applied_coupons": [AppliedCoupon],
  "applied_gift_cards": [AppliedGiftCard],
  "applied_reward_points": RewardPointsAmount,
  "applied_store_credit": AppliedStoreCredit,
  "available_gift_wrappings": [GiftWrapping],
  "available_payment_methods": [AvailablePaymentMethod],
  "billing_address": BillingCartAddress,
  "email": "abc123",
  "gift_message": GiftMessage,
  "gift_receipt_included": false,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "is_virtual": false,
  "items": [CartItemInterface],
  "itemsV2": CartItems,
  "prices": CartPrices,
  "printed_card_included": false,
  "selected_payment_method": SelectedPaymentMethod,
  "shipping_addresses": [ShippingCartAddress],
  "total_quantity": 987.65
}
```

<HorizontalLine />

### CartAddressCountry

Contains details the country in a billing or shipping address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The country code. |
| `label` - [`String!`](#string) | The display label for the country. |

#### Example

```json
{
  "code": "xyz789",
  "label": "abc123"
}
```

<HorizontalLine />

### CartAddressInput

Defines the billing or shipping address to be applied to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String!`](#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](#string) | The company specified for the billing or shipping address. |
| `country_code` - [`String!`](#string) | The country code and label for the billing or shipping address. |
| `custom_attributes` - [`[AttributeValueInput]`](#attributevalueinput) | The custom attribute values of the billing or shipping address. |
| `fax` - [`String`](#string) | The customer&#x27;s fax number. |
| `firstname` - [`String!`](#string) | The first name of the customer or guest. |
| `lastname` - [`String!`](#string) | The last name of the customer or guest. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`String`](#string) | A string that defines the state or province of the billing or shipping address. |
| `region_id` - [`Int`](#int) | An integer that defines the state or province of the billing or shipping address. |
| `save_in_address_book` - [`Boolean`](#boolean) | Determines whether to save the address in the customer&#x27;s address book. The default value is true. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |
| `vat_id` - [`String`](#string) | The VAT company number for billing or shipping address. |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country_code": "xyz789",
  "custom_attributes": [AttributeValueInput],
  "fax": "abc123",
  "firstname": "abc123",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "abc123",
  "region": "abc123",
  "region_id": 123,
  "save_in_address_book": false,
  "street": ["abc123"],
  "suffix": "abc123",
  "telephone": "xyz789",
  "vat_id": "xyz789"
}
```

<HorizontalLine />

### CartAddressInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](#string) | The company specified for the billing or shipping address. |
| `country` - [`CartAddressCountry!`](#cartaddresscountry) | An object containing the country label and code. |
| `custom_attributes` - [`[AttributeValueInterface]!`](#attributevalueinterface) | The custom attribute values of the billing or shipping address. |
| `fax` - [`String`](#string) | The customer&#x27;s fax number. |
| `firstname` - [`String!`](#string) | The first name of the customer or guest. |
| `lastname` - [`String!`](#string) | The last name of the customer or guest. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CartAddressRegion`](#cartaddressregion) | An object containing the region label and code. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |
| `uid` - [`String!`](#string) | The unique id of the customer address. |
| `vat_id` - [`String`](#string) | The VAT company number for billing or shipping address. |

#### Possible Types

| CartAddressInterface Types |
|----------------|
| [`ShippingCartAddress`](#shippingcartaddress) |
| [`BillingCartAddress`](#billingcartaddress) |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country": CartAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "fax": "xyz789",
  "firstname": "xyz789",
  "lastname": "abc123",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "abc123",
  "region": CartAddressRegion,
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "abc123",
  "uid": "xyz789",
  "vat_id": "xyz789"
}
```

<HorizontalLine />

### CartAddressRegion

Contains details about the region in a billing or shipping address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | The state or province code. |
| `label` - [`String`](#string) | The display label for the region. |
| `region_id` - [`Int`](#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "code": "xyz789",
  "label": "abc123",
  "region_id": 987
}
```

<HorizontalLine />

### CartDiscount

Contains information about discounts applied to the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount of the discount applied to the item. |
| `label` - [`[String]!`](#string) | The description of the discount. |

#### Example

```json
{
  "amount": Money,
  "label": ["abc123"]
}
```

<HorizontalLine />

### CartDiscountType

#### Values

| Enum Value | Description |
|------------|-------------|
| `ITEM` |  |
| `SHIPPING` |  |

#### Example

```json
""ITEM""
```

<HorizontalLine />

### CartItemError

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CartItemErrorType!`](#cartitemerrortype) | An error code that describes the error encountered |
| `message` - [`String!`](#string) | A localized error message |

#### Example

```json
{"code": "UNDEFINED", "message": "xyz789"}
```

<HorizontalLine />

### CartItemErrorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNDEFINED` |  |
| `ITEM_QTY` |  |
| `ITEM_INCREMENTS` |  |

#### Example

```json
""UNDEFINED""
```

<HorizontalLine />

### CartItemInput

Defines an item to be added to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_options` - [`[EnteredOptionInput]`](#enteredoptioninput) | An array of entered options for the base product, such as personalization text. |
| `parent_sku` - [`String`](#string) | For a child product, the SKU of its parent product. |
| `quantity` - [`Float!`](#float) | The amount or number of an item to add. |
| `selected_options` - [`[ID]`](#id) | The selected options for the base product, such as color or size, using the unique ID for an object such as &#x60;CustomizableRadioOption&#x60;, &#x60;CustomizableDropDownOption&#x60;, or &#x60;ConfigurableProductOptionsValues&#x60;. |
| `sku` - [`String!`](#string) | The SKU of the product. |

#### Example

```json
{
  "entered_options": [EnteredOptionInput],
  "parent_sku": "abc123",
  "quantity": 987.65,
  "selected_options": ["4"],
  "sku": "xyz789"
}
```

<HorizontalLine />

### CartItemInterface

An interface for products in a cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer&#x27;s quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller&#x27;s quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Possible Types

| CartItemInterface Types |
|----------------|
| [`SimpleCartItem`](#simplecartitem) |
| [`VirtualCartItem`](#virtualcartitem) |
| [`ConfigurableCartItem`](#configurablecartitem) |
| [`DownloadableCartItem`](#downloadablecartitem) |
| [`BundleCartItem`](#bundlecartitem) |
| [`GiftCardCartItem`](#giftcardcartitem) |

#### Example

```json
{
  "discount": [Discount],
  "errors": [CartItemError],
  "id": "abc123",
  "is_available": true,
  "max_qty": 987.65,
  "min_qty": 123.45,
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### CartItemPrices

Contains details about the price of the item, including taxes and discounts.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | An array of discounts to be applied to the cart item. |
| `fixed_product_taxes` - [`[FixedProductTax]`](#fixedproducttax) | An array of FPTs applied to the cart item. |
| `price` - [`Money!`](#money) | The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. |
| `price_including_tax` - [`Money!`](#money) | The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. |
| `row_total` - [`Money!`](#money) | The value of the price multiplied by the quantity of the item. |
| `row_total_including_tax` - [`Money!`](#money) | The value of &#x60;row_total&#x60; plus the tax applied to the item. |
| `total_item_discount` - [`Money`](#money) | The total of all discounts applied to the item. |

#### Example

```json
{
  "discounts": [Discount],
  "fixed_product_taxes": [FixedProductTax],
  "price": Money,
  "price_including_tax": Money,
  "row_total": Money,
  "row_total_including_tax": Money,
  "total_item_discount": Money
}
```

<HorizontalLine />

### CartItemQuantity

Deprecated: The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart_item_id` - [`Int!`](#int) |  *(Deprecated: The &#x60;ShippingCartAddress.cart_items&#x60; field now returns &#x60;CartItemInterface&#x60;.)* |
| `quantity` - [`Float!`](#float) |  *(Deprecated: The &#x60;ShippingCartAddress.cart_items&#x60; field now returns &#x60;CartItemInterface&#x60;.)* |

#### Example

```json
{"cart_item_id": 123, "quantity": 123.45}
```

<HorizontalLine />

### CartItemSelectedOptionValuePrice

Contains details about the price of a selected customizable value.

#### Fields

| Field Name | Description |
|------------|-------------|
| `type` - [`PriceTypeEnum!`](#pricetypeenum) | Indicates whether the price type is fixed, percent, or dynamic. |
| `units` - [`String!`](#string) | A string that describes the unit of the value. |
| `value` - [`Float!`](#float) | A price value. |

#### Example

```json
{
  "type": "FIXED",
  "units": "abc123",
  "value": 123.45
}
```

<HorizontalLine />

### CartItemUpdateInput

A single item to be updated.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_item_id` - [`Int`](#int) | Deprecated. Use &#x60;cart_item_uid&#x60; instead. |
| `cart_item_uid` - [`ID`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | An array that defines customizable options for the product. |
| `gift_message` - [`GiftMessageInput`](#giftmessageinput) | Gift message details for the cart item |
| `gift_wrapping_id` - [`ID`](#id) | The unique ID for a &#x60;GiftWrapping&#x60; object to be used for the cart item. |
| `quantity` - [`Float`](#float) | The new quantity of the item. |

#### Example

```json
{
  "cart_item_id": 987,
  "cart_item_uid": "4",
  "customizable_options": [CustomizableOptionInput],
  "gift_message": GiftMessageInput,
  "gift_wrapping_id": "4",
  "quantity": 987.65
}
```

<HorizontalLine />

### CartItems

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CartItemInterface]!`](#cartiteminterface) | An array of products that have been added to the cart. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Metadata for pagination rendering. |
| `total_count` - [`Int!`](#int) | The number of returned cart items. |

#### Example

```json
{
  "items": [CartItemInterface],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### CartPrices

Contains details about the final price of items in the cart, including discount and tax information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_taxes` - [`[CartTaxItem]`](#carttaxitem) | An array containing the names and amounts of taxes applied to each item in the cart. |
| `discount` - [`CartDiscount`](#cartdiscount) |  *(Deprecated: Use discounts instead.)* |
| `discounts` - [`[Discount]`](#discount) | An array containing cart rule discounts, store credit and gift cards applied to the cart. |
| `gift_options` - [`GiftOptionsPrices`](#giftoptionsprices) | The list of prices for the selected gift options. |
| `grand_total` - [`Money`](#money) | The total, including discounts, taxes, shipping, and other fees. |
| `subtotal_excluding_tax` - [`Money`](#money) | The subtotal without any applied taxes. |
| `subtotal_including_tax` - [`Money`](#money) | The subtotal including any applied taxes. |
| `subtotal_with_discount_excluding_tax` - [`Money`](#money) | The subtotal with any discounts applied, but not taxes. |

#### Example

```json
{
  "applied_taxes": [CartTaxItem],
  "discount": CartDiscount,
  "discounts": [Discount],
  "gift_options": GiftOptionsPrices,
  "grand_total": Money,
  "subtotal_excluding_tax": Money,
  "subtotal_including_tax": Money,
  "subtotal_with_discount_excluding_tax": Money
}
```

<HorizontalLine />

### CartTaxItem

Contains tax information about an item in the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount of tax applied to the item. |
| `label` - [`String!`](#string) | The description of the tax. |

#### Example

```json
{
  "amount": Money,
  "label": "xyz789"
}
```

<HorizontalLine />

### CartUserInputError

An error encountered while adding an item to the the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CartUserInputErrorType!`](#cartuserinputerrortype) | A cart-specific error code. |
| `message` - [`String!`](#string) | A localized error message. |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "xyz789"
}
```

<HorizontalLine />

### CartUserInputErrorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRODUCT_NOT_FOUND` |  |
| `NOT_SALABLE` |  |
| `INSUFFICIENT_STOCK` |  |
| `UNDEFINED` |  |
| `PERMISSION_DENIED` |  |

#### Example

```json
""PRODUCT_NOT_FOUND""
```

<HorizontalLine />

### CatalogAttributeApplyToEnum

#### Values

| Enum Value | Description |
|------------|-------------|
| `SIMPLE` |  |
| `VIRTUAL` |  |
| `BUNDLE` |  |
| `DOWNLOADABLE` |  |
| `CONFIGURABLE` |  |
| `GROUPED` |  |
| `CATEGORY` |  |

#### Example

```json
""SIMPLE""
```

<HorizontalLine />

### CatalogAttributeMetadata

Swatch attribute metadata.

#### Fields

| Field Name | Description |
|------------|-------------|
| `apply_to` - [`[CatalogAttributeApplyToEnum]`](#catalogattributeapplytoenum) | To which catalog types an attribute can be applied. |
| `code` - [`ID!`](#id) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `default_value` - [`String`](#string) | Default attribute value. |
| `entity_type` - [`AttributeEntityTypeEnum!`](#attributeentitytypeenum) | The type of entity that defines the attribute. |
| `frontend_class` - [`String`](#string) | The frontend class of the attribute. |
| `frontend_input` - [`AttributeFrontendInputEnum`](#attributefrontendinputenum) | The frontend input type of the attribute. |
| `is_comparable` - [`Boolean`](#boolean) | Whether a product or category attribute can be compared against another or not. |
| `is_filterable` - [`Boolean`](#boolean) | Whether a product or category attribute can be filtered or not. |
| `is_filterable_in_search` - [`Boolean`](#boolean) | Whether a product or category attribute can be filtered in search or not. |
| `is_html_allowed_on_front` - [`Boolean`](#boolean) | Whether a product or category attribute can use HTML on front or not. |
| `is_required` - [`Boolean!`](#boolean) | Whether the attribute value is required. |
| `is_searchable` - [`Boolean`](#boolean) | Whether a product or category attribute can be searched or not. |
| `is_unique` - [`Boolean!`](#boolean) | Whether the attribute value must be unique. |
| `is_used_for_price_rules` - [`Boolean`](#boolean) | Whether a product or category attribute can be used for price rules or not. |
| `is_used_for_promo_rules` - [`Boolean`](#boolean) | Whether a product or category attribute is used for promo rules or not. |
| `is_visible_in_advanced_search` - [`Boolean`](#boolean) | Whether a product or category attribute is visible in advanced search or not. |
| `is_visible_on_front` - [`Boolean`](#boolean) | Whether a product or category attribute is visible on front or not. |
| `is_wysiwyg_enabled` - [`Boolean`](#boolean) | Whether a product or category attribute has WYSIWYG enabled or not. |
| `label` - [`String`](#string) | The label assigned to the attribute. |
| `options` - [`[CustomAttributeOptionInterface]!`](#customattributeoptioninterface) | Attribute options. |
| `swatch_input_type` - [`SwatchInputTypeEnum`](#swatchinputtypeenum) | Input type of the swatch attribute option. |
| `update_product_preview_image` - [`Boolean`](#boolean) | Whether update product preview image or not. |
| `use_product_image_for_swatch` - [`Boolean`](#boolean) | Whether use product image for swatch or not. |
| `used_in_product_listing` - [`Boolean`](#boolean) | Whether a product or category attribute is used in product listing or not. |

#### Example

```json
{
  "apply_to": ["SIMPLE"],
  "code": 4,
  "default_value": "abc123",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "abc123",
  "frontend_input": "BOOLEAN",
  "is_comparable": true,
  "is_filterable": true,
  "is_filterable_in_search": true,
  "is_html_allowed_on_front": true,
  "is_required": false,
  "is_searchable": true,
  "is_unique": true,
  "is_used_for_price_rules": false,
  "is_used_for_promo_rules": true,
  "is_visible_in_advanced_search": true,
  "is_visible_on_front": true,
  "is_wysiwyg_enabled": true,
  "label": "abc123",
  "options": [CustomAttributeOptionInterface],
  "swatch_input_type": "BOOLEAN",
  "update_product_preview_image": true,
  "use_product_image_for_swatch": false,
  "used_in_product_listing": false
}
```

<HorizontalLine />

### CategoryFilterInput

Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `category_uid` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by the unique category ID for a &#x60;CategoryInterface&#x60; object. |
| `ids` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Deprecated: use &#x27;category_uid&#x27; to filter uniquely identifiers of categories. |
| `name` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Filter by the display name of the category. |
| `parent_category_uid` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by the unique parent category ID for a &#x60;CategoryInterface&#x60; object. |
| `parent_id` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by the unique parent category ID for a &#x60;CategoryInterface&#x60; object. |
| `url_key` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by the part of the URL that identifies the category. |
| `url_path` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by the URL path for the category. |

#### Example

```json
{
  "category_uid": FilterEqualTypeInput,
  "ids": FilterEqualTypeInput,
  "name": FilterMatchTypeInput,
  "parent_category_uid": FilterEqualTypeInput,
  "parent_id": FilterEqualTypeInput,
  "url_key": FilterEqualTypeInput,
  "url_path": FilterEqualTypeInput
}
```

<HorizontalLine />

### CategoryInterface

Contains the full set of attributes that can be returned in a category search.

#### Fields

| Field Name | Description |
|------------|-------------|
| `automatic_sorting` - [`String`](#string) |  |
| `available_sort_by` - [`[String]`](#string) |  |
| `breadcrumbs` - [`[Breadcrumb]`](#breadcrumb) | An array of breadcrumb items. |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Categories&#x27; is enabled. |
| `children_count` - [`String`](#string) |  |
| `cms_block` - [`CmsBlock`](#cmsblock) | Contains a category CMS block. |
| `created_at` - [`String`](#string) | The timestamp indicating when the category was created. *(Deprecated: The field should not be used on the storefront.)* |
| `custom_layout_update_file` - [`String`](#string) |  |
| `default_sort_by` - [`String`](#string) | The attribute to use for sorting. |
| `description` - [`String`](#string) | An optional description of the category. |
| `display_mode` - [`String`](#string) |  |
| `filter_price_range` - [`Float`](#float) |  |
| `id` - [`Int`](#int) | An ID that uniquely identifies the category. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `image` - [`String`](#string) |  |
| `include_in_menu` - [`Int`](#int) |  |
| `is_anchor` - [`Int`](#int) |  |
| `landing_page` - [`Int`](#int) |  |
| `level` - [`Int`](#int) | The depth of the category within the tree. |
| `meta_description` - [`String`](#string) |  |
| `meta_keywords` - [`String`](#string) |  |
| `meta_title` - [`String`](#string) |  |
| `name` - [`String`](#string) | The display name of the category. |
| `path` - [`String`](#string) | The full category path. |
| `path_in_store` - [`String`](#string) | The category path within the store. |
| `position` - [`Int`](#int) | The position of the category relative to other categories at the same level in tree. |
| `product_count` - [`Int`](#int) | The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. |
| `products` - [`CategoryProducts`](#categoryproducts) | The list of products assigned to the category. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the category is staged for a future campaign. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CategoryInterface&#x60; object. |
| `updated_at` - [`String`](#string) | The timestamp indicating when the category was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `url_key` - [`String`](#string) | The URL key assigned to the category. |
| `url_path` - [`String`](#string) | The URL path assigned to the category. |
| `url_suffix` - [`String`](#string) | The part of the category URL that is appended after the url key |

#### Possible Types

| CategoryInterface Types |
|----------------|
| [`CategoryTree`](#categorytree) |

#### Example

```json
{
  "automatic_sorting": "abc123",
  "available_sort_by": ["abc123"],
  "breadcrumbs": [Breadcrumb],
  "canonical_url": "abc123",
  "children_count": "xyz789",
  "cms_block": CmsBlock,
  "created_at": "abc123",
  "custom_layout_update_file": "abc123",
  "default_sort_by": "xyz789",
  "description": "xyz789",
  "display_mode": "xyz789",
  "filter_price_range": 123.45,
  "id": 123,
  "image": "abc123",
  "include_in_menu": 987,
  "is_anchor": 123,
  "landing_page": 123,
  "level": 123,
  "meta_description": "abc123",
  "meta_keywords": "abc123",
  "meta_title": "abc123",
  "name": "abc123",
  "path": "xyz789",
  "path_in_store": "abc123",
  "position": 987,
  "product_count": 123,
  "products": CategoryProducts,
  "staged": true,
  "uid": 4,
  "updated_at": "abc123",
  "url_key": "xyz789",
  "url_path": "abc123",
  "url_suffix": "abc123"
}
```

<HorizontalLine />

### CategoryProducts

Contains details about the products assigned to a category.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[ProductInterface]`](#productinterface) | An array of products that are assigned to the category. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `total_count` - [`Int`](#int) | The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. |

#### Example

```json
{
  "items": [ProductInterface],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### CategoryResult

Contains a collection of `CategoryTree` objects and pagination information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CategoryTree]`](#categorytree) | A list of categories that match the filter criteria. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | An object that includes the &#x60;page_info&#x60; and &#x60;currentPage&#x60; values specified in the query. |
| `total_count` - [`Int`](#int) | The total number of categories that match the criteria. |

#### Example

```json
{
  "items": [CategoryTree],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### CategoryTree

Contains the hierarchy of categories.

#### Fields

| Field Name | Description |
|------------|-------------|
| `automatic_sorting` - [`String`](#string) |  |
| `available_sort_by` - [`[String]`](#string) |  |
| `breadcrumbs` - [`[Breadcrumb]`](#breadcrumb) | An array of breadcrumb items. |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Categories&#x27; is enabled. |
| `children` - [`[CategoryTree]`](#categorytree) | A tree of child categories. |
| `children_count` - [`String`](#string) |  |
| `cms_block` - [`CmsBlock`](#cmsblock) | Contains a category CMS block. |
| `created_at` - [`String`](#string) | The timestamp indicating when the category was created. *(Deprecated: The field should not be used on the storefront.)* |
| `custom_layout_update_file` - [`String`](#string) |  |
| `default_sort_by` - [`String`](#string) | The attribute to use for sorting. |
| `description` - [`String`](#string) | An optional description of the category. |
| `display_mode` - [`String`](#string) |  |
| `filter_price_range` - [`Float`](#float) |  |
| `id` - [`Int`](#int) | An ID that uniquely identifies the category. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `image` - [`String`](#string) |  |
| `include_in_menu` - [`Int`](#int) |  |
| `is_anchor` - [`Int`](#int) |  |
| `landing_page` - [`Int`](#int) |  |
| `level` - [`Int`](#int) | The depth of the category within the tree. |
| `meta_description` - [`String`](#string) |  |
| `meta_keywords` - [`String`](#string) |  |
| `meta_title` - [`String`](#string) |  |
| `name` - [`String`](#string) | The display name of the category. |
| `path` - [`String`](#string) | The full category path. |
| `path_in_store` - [`String`](#string) | The category path within the store. |
| `position` - [`Int`](#int) | The position of the category relative to other categories at the same level in tree. |
| `product_count` - [`Int`](#int) | The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. |
| `products` - [`CategoryProducts`](#categoryproducts) | The list of products assigned to the category. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the category is staged for a future campaign. |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CategoryInterface&#x60; object. |
| `updated_at` - [`String`](#string) | The timestamp indicating when the category was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `url_key` - [`String`](#string) | The URL key assigned to the category. |
| `url_path` - [`String`](#string) | The URL path assigned to the category. |
| `url_suffix` - [`String`](#string) | The part of the category URL that is appended after the url key |

#### Example

```json
{
  "automatic_sorting": "xyz789",
  "available_sort_by": ["abc123"],
  "breadcrumbs": [Breadcrumb],
  "canonical_url": "xyz789",
  "children": [CategoryTree],
  "children_count": "abc123",
  "cms_block": CmsBlock,
  "created_at": "abc123",
  "custom_layout_update_file": "abc123",
  "default_sort_by": "xyz789",
  "description": "abc123",
  "display_mode": "xyz789",
  "filter_price_range": 987.65,
  "id": 123,
  "image": "abc123",
  "include_in_menu": 987,
  "is_anchor": 987,
  "landing_page": 987,
  "level": 123,
  "meta_description": "xyz789",
  "meta_keywords": "abc123",
  "meta_title": "abc123",
  "name": "xyz789",
  "path": "xyz789",
  "path_in_store": "xyz789",
  "position": 987,
  "product_count": 123,
  "products": CategoryProducts,
  "redirect_code": 987,
  "relative_url": "abc123",
  "staged": false,
  "type": "CMS_PAGE",
  "uid": "4",
  "updated_at": "abc123",
  "url_key": "abc123",
  "url_path": "abc123",
  "url_suffix": "xyz789"
}
```

<HorizontalLine />

### CheckoutAgreement

Defines details about an individual checkout agreement.

#### Fields

| Field Name | Description |
|------------|-------------|
| `agreement_id` - [`Int!`](#int) | The ID for a checkout agreement. |
| `checkbox_text` - [`String!`](#string) | The checkbox text for the checkout agreement. |
| `content` - [`String!`](#string) | Required. The text of the agreement. |
| `content_height` - [`String`](#string) | The height of the text box where the Terms and Conditions statement appears during checkout. |
| `is_html` - [`Boolean!`](#boolean) | Indicates whether the &#x60;content&#x60; text is in HTML format. |
| `mode` - [`CheckoutAgreementMode!`](#checkoutagreementmode) | Indicates whether agreements are accepted automatically or manually. |
| `name` - [`String!`](#string) | The name given to the condition. |

#### Example

```json
{
  "agreement_id": 987,
  "checkbox_text": "abc123",
  "content": "xyz789",
  "content_height": "xyz789",
  "is_html": false,
  "mode": "AUTO",
  "name": "abc123"
}
```

<HorizontalLine />

### CheckoutAgreementMode

Indicates how agreements are accepted.

#### Values

| Enum Value | Description |
|------------|-------------|
| `AUTO` | Conditions are automatically accepted upon checkout. |
| `MANUAL` | Shoppers must manually accept the conditions to place an order. |

#### Example

```json
""AUTO""
```

<HorizontalLine />

### CheckoutUserInputError

An error encountered while adding an item to the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CheckoutUserInputErrorCodes!`](#checkoutuserinputerrorcodes) | An error code that is specific to Checkout. |
| `message` - [`String!`](#string) | A localized error message. |
| `path` - [`[String]!`](#string) | The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors |

#### Example

```json
{
  "code": "REORDER_NOT_AVAILABLE",
  "message": "xyz789",
  "path": ["abc123"]
}
```

<HorizontalLine />

### CheckoutUserInputErrorCodes

#### Values

| Enum Value | Description |
|------------|-------------|
| `REORDER_NOT_AVAILABLE` |  |
| `PRODUCT_NOT_FOUND` |  |
| `NOT_SALABLE` |  |
| `INSUFFICIENT_STOCK` |  |
| `UNDEFINED` |  |

#### Example

```json
""REORDER_NOT_AVAILABLE""
```

<HorizontalLine />

### ClearCartError

Contains details about errors encountered when a customer clear cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | A localized error message |
| `type` - [`ClearCartErrorType!`](#clearcarterrortype) | A cart-specific error type. |

#### Example

```json
{"message": "abc123", "type": "NOT_FOUND"}
```

<HorizontalLine />

### ClearCartErrorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `NOT_FOUND` |  |
| `UNAUTHORISED` |  |
| `INACTIVE` |  |
| `UNDEFINED` |  |

#### Example

```json
""NOT_FOUND""
```

<HorizontalLine />

### ClearCartInput

Assigns a specific `cart_id` to the empty cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;Cart&#x60; object. |

#### Example

```json
{"uid": 4}
```

<HorizontalLine />

### ClearCartOutput

Output of the request to clear the customer cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart`](#cart) | The cart after clear cart items. |
| `errors` - [`[ClearCartError]`](#clearcarterror) | An array of errors encountered while clearing the cart item |

#### Example

```json
{
  "cart": Cart,
  "errors": [ClearCartError]
}
```

<HorizontalLine />

### ClearCustomerCartOutput

Output of the request to clear the customer cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart`](#cart) | The cart after clearing items. |
| `status` - [`Boolean!`](#boolean) | Indicates whether cart was cleared. |

#### Example

```json
{"cart": Cart, "status": true}
```

<HorizontalLine />

### CloseNegotiableQuoteError

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

### CloseNegotiableQuoteOperationFailure

Contains details about a failed close operation on a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[CloseNegotiableQuoteError]!`](#closenegotiablequoteerror) | An array of errors encountered while attempting close the negotiable quote. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "errors": [NegotiableQuoteInvalidStateError],
  "quote_uid": 4
}
```

<HorizontalLine />

### CloseNegotiableQuoteOperationResult

#### Types

| Union Types |
|-------------|
| [`NegotiableQuoteUidOperationSuccess`](#negotiablequoteuidoperationsuccess) |
| [`CloseNegotiableQuoteOperationFailure`](#closenegotiablequoteoperationfailure) |

#### Example

```json
NegotiableQuoteUidOperationSuccess
```

<HorizontalLine />

### CloseNegotiableQuotesInput

Defines the negotiable quotes to mark as closed.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_uids` - [`[ID]!`](#id) | A list of unique IDs from &#x60;NegotiableQuote&#x60; objects. |

#### Example

```json
{"quote_uids": ["4"]}
```

<HorizontalLine />

### CloseNegotiableQuotesOutput

Contains the closed negotiable quotes and other negotiable quotes the company user can view.

#### Fields

| Field Name | Description |
|------------|-------------|
| `closed_quotes` - [`[NegotiableQuote]`](#negotiablequote) | An array containing the negotiable quotes that were just closed. *(Deprecated: Use &#x60;operation_results&#x60; instead.)* |
| `negotiable_quotes` - [`NegotiableQuotesOutput`](#negotiablequotesoutput) | A list of negotiable quotes that can be viewed by the logged-in customer |
| `operation_results` - [`[CloseNegotiableQuoteOperationResult]!`](#closenegotiablequoteoperationresult) | An array of closed negotiable quote UIDs and details about any errors. |
| `result_status` - [`BatchMutationStatus!`](#batchmutationstatus) | The status of the request to close one or more negotiable quotes. |

#### Example

```json
{
  "closed_quotes": [NegotiableQuote],
  "negotiable_quotes": NegotiableQuotesOutput,
  "operation_results": [
    NegotiableQuoteUidOperationSuccess
  ],
  "result_status": "SUCCESS"
}
```

<HorizontalLine />

### CmsBlock

Contains details about a specific CMS block.

#### Fields

| Field Name | Description |
|------------|-------------|
| `content` - [`String`](#string) | The content of the CMS block in raw HTML. |
| `identifier` - [`String`](#string) | The CMS block identifier. |
| `title` - [`String`](#string) | The title assigned to the CMS block. |

#### Example

```json
{
  "content": "abc123",
  "identifier": "xyz789",
  "title": "abc123"
}
```

<HorizontalLine />

### CmsBlocks

Contains an array CMS block items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CmsBlock]`](#cmsblock) | An array of CMS blocks. |

#### Example

```json
{"items": [CmsBlock]}
```

<HorizontalLine />

### CmsPage

Contains details about a CMS page.

#### Fields

| Field Name | Description |
|------------|-------------|
| `content` - [`String`](#string) | The content of the CMS page in raw HTML. |
| `content_heading` - [`String`](#string) | The heading that displays at the top of the CMS page. |
| `identifier` - [`String`](#string) | The ID of a CMS page. |
| `meta_description` - [`String`](#string) | A brief description of the page for search results listings. |
| `meta_keywords` - [`String`](#string) | A brief description of the page for search results listings. |
| `meta_title` - [`String`](#string) | A page title that is indexed by search engines and appears in search results listings. |
| `page_layout` - [`String`](#string) | The design layout of the page, indicating the number of columns and navigation features used on the page. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `title` - [`String`](#string) | The name that appears in the breadcrumb trail navigation and in the browser title bar and tab. |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `url_key` - [`String`](#string) | The URL key of the CMS page, which is often based on the &#x60;content_heading&#x60;. |

#### Example

```json
{
  "content": "abc123",
  "content_heading": "xyz789",
  "identifier": "abc123",
  "meta_description": "abc123",
  "meta_keywords": "abc123",
  "meta_title": "xyz789",
  "page_layout": "xyz789",
  "redirect_code": 123,
  "relative_url": "xyz789",
  "title": "abc123",
  "type": "CMS_PAGE",
  "url_key": "xyz789"
}
```

<HorizontalLine />

### ColorSwatchData

#### Fields

| Field Name | Description |
|------------|-------------|
| `value` - [`String`](#string) | The value can be represented as color (HEX code), image link, or text. |

#### Example

```json
{"value": "abc123"}
```

<HorizontalLine />

### CompaniesSortFieldEnum

The fields available for sorting the customer companies.

#### Values

| Enum Value | Description |
|------------|-------------|
| `NAME` | The name of the company. |

#### Example

```json
""NAME""
```

<HorizontalLine />

### CompaniesSortInput

Specifies which field to sort on, and whether to return the results in ascending or descending order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `field` - [`CompaniesSortFieldEnum!`](#companiessortfieldenum) | The field for sorting the results. |
| `order` - [`SortEnum!`](#sortenum) | Indicates whether to return results in ascending or descending order. |

#### Example

```json
{"field": "NAME", "order": "ASC"}
```

<HorizontalLine />

### Company

Contains the output schema for a company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `acl_resources` - [`[CompanyAclResource]`](#companyaclresource) | The list of all resources defined within the company. |
| `company_admin` - [`Customer`](#customer) | An object containing information about the company administrator. |
| `credit` - [`CompanyCredit!`](#companycredit) | Company credit balances and limits. |
| `credit_history` - [`CompanyCreditHistory!`](#companycredithistory) | Details about the history of company credit operations. |
| `email` - [`String`](#string) | The email address of the company contact. |
| `id` - [`ID!`](#id) | The unique ID of a &#x60;Company&#x60; object. |
| `legal_address` - [`CompanyLegalAddress`](#companylegaladdress) | The address where the company is registered to conduct business. |
| `legal_name` - [`String`](#string) | The full legal name of the company. |
| `name` - [`String`](#string) | The name of the company. |
| `payment_methods` - [`[String]`](#string) | The list of payment methods available to a company. |
| `reseller_id` - [`String`](#string) | The resale number that is assigned to the company for tax reporting purposes. |
| `role` - [`CompanyRole`](#companyrole) | A company role filtered by the unique ID of a &#x60;CompanyRole&#x60; object. |
| `roles` - [`CompanyRoles!`](#companyroles) | An object that contains a list of company roles. |
| `sales_representative` - [`CompanySalesRepresentative`](#companysalesrepresentative) | An object containing information about the company sales representative. |
| `structure` - [`CompanyStructure`](#companystructure) | The company structure of teams and customers in depth-first order. |
| `team` - [`CompanyTeam`](#companyteam) | The company team data filtered by the unique ID for a &#x60;CompanyTeam&#x60; object. |
| `user` - [`Customer`](#customer) | A company user filtered by the unique ID of a &#x60;Customer&#x60; object. |
| `users` - [`CompanyUsers`](#companyusers) | An object that contains a list of company users based on activity status. |
| `vat_tax_id` - [`String`](#string) | The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes. |

#### Example

```json
{
  "acl_resources": [CompanyAclResource],
  "company_admin": Customer,
  "credit": CompanyCredit,
  "credit_history": CompanyCreditHistory,
  "email": "xyz789",
  "id": "4",
  "legal_address": CompanyLegalAddress,
  "legal_name": "xyz789",
  "name": "xyz789",
  "payment_methods": ["xyz789"],
  "reseller_id": "abc123",
  "role": CompanyRole,
  "roles": CompanyRoles,
  "sales_representative": CompanySalesRepresentative,
  "structure": CompanyStructure,
  "team": CompanyTeam,
  "user": Customer,
  "users": CompanyUsers,
  "vat_tax_id": "xyz789"
}
```

<HorizontalLine />

### CompanyAclResource

Contains details about the access control list settings of a resource.

#### Fields

| Field Name | Description |
|------------|-------------|
| `children` - [`[CompanyAclResource]`](#companyaclresource) | An array of sub-resources. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CompanyAclResource&#x60; object. |
| `sort_order` - [`Int`](#int) | The sort order of an ACL resource. |
| `text` - [`String`](#string) | The label assigned to the ACL resource. |

#### Example

```json
{
  "children": [CompanyAclResource],
  "id": "4",
  "sort_order": 987,
  "text": "xyz789"
}
```

<HorizontalLine />

### CompanyAdminInput

Defines the input schema for creating a company administrator.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](#string) | The email address of the company administrator. |
| `firstname` - [`String!`](#string) | The company administrator&#x27;s first name. |
| `gender` - [`Int`](#int) | The company administrator&#x27;s gender (Male - 1, Female - 2, Not Specified - 3). |
| `job_title` - [`String`](#string) | The job title of the company administrator. |
| `lastname` - [`String!`](#string) | The company administrator&#x27;s last name. |

#### Example

```json
{
  "email": "abc123",
  "firstname": "abc123",
  "gender": 123,
  "job_title": "abc123",
  "lastname": "xyz789"
}
```

<HorizontalLine />

### CompanyBasicInfo

The minimal required information to identify and display the company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID of a &#x60;Company&#x60; object. |
| `legal_name` - [`String`](#string) | The full legal name of the company. |
| `name` - [`String`](#string) | The name of the company. |

#### Example

```json
{
  "id": "4",
  "legal_name": "xyz789",
  "name": "abc123"
}
```

<HorizontalLine />

### CompanyCreateInput

Defines the input schema for creating a new company.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `company_admin` - [`CompanyAdminInput!`](#companyadmininput) | Defines the company administrator. |
| `company_email` - [`String!`](#string) | The email address of the company contact. |
| `company_name` - [`String!`](#string) | The name of the company to create. |
| `legal_address` - [`CompanyLegalAddressCreateInput!`](#companylegaladdresscreateinput) | Defines legal address data of the company. |
| `legal_name` - [`String`](#string) | The full legal name of the company. |
| `reseller_id` - [`String`](#string) | The resale number that is assigned to the company for tax reporting purposes. |
| `vat_tax_id` - [`String`](#string) | The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes. |

#### Example

```json
{
  "company_admin": CompanyAdminInput,
  "company_email": "xyz789",
  "company_name": "abc123",
  "legal_address": CompanyLegalAddressCreateInput,
  "legal_name": "xyz789",
  "reseller_id": "abc123",
  "vat_tax_id": "abc123"
}
```

<HorizontalLine />

### CompanyCredit

Contains company credit balances and limits.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_credit` - [`Money!`](#money) | The sum of the credit limit and the outstanding balance. If the company has exceeded the credit limit, the amount is as a negative value. |
| `credit_limit` - [`Money!`](#money) | The amount of credit extended to the company. |
| `outstanding_balance` - [`Money!`](#money) | The amount reimbursed, less the total due from all orders placed using the Payment on Account payment method. The amount can be a positive or negative value. |

#### Example

```json
{
  "available_credit": Money,
  "credit_limit": Money,
  "outstanding_balance": Money
}
```

<HorizontalLine />

### CompanyCreditHistory

Contains details about prior company credit operations.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CompanyCreditOperation]!`](#companycreditoperation) | An array of company credit operations. |
| `page_info` - [`SearchResultPageInfo!`](#searchresultpageinfo) | Metadata for pagination rendering. |
| `total_count` - [`Int`](#int) | The number of the company credit operations matching the specified filter. |

#### Example

```json
{
  "items": [CompanyCreditOperation],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### CompanyCreditHistoryFilterInput

Defines a filter for narrowing the results of a credit history search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `custom_reference_number` - [`String`](#string) | The purchase order number associated with the company credit operation. |
| `operation_type` - [`CompanyCreditOperationType`](#companycreditoperationtype) | The type of the company credit operation. |
| `updated_by` - [`String`](#string) | The name of the person submitting the company credit operation. |

#### Example

```json
{
  "custom_reference_number": "xyz789",
  "operation_type": "ALLOCATION",
  "updated_by": "xyz789"
}
```

<HorizontalLine />

### CompanyCreditOperation

Contains details about a single company credit operation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](#money) | The amount of the company credit operation. |
| `balance` - [`CompanyCredit!`](#companycredit) | The credit balance as a result of the operation. |
| `custom_reference_number` - [`String`](#string) | The purchase order number associated with the company credit operation. |
| `date` - [`String!`](#string) | The date the operation occurred. |
| `type` - [`CompanyCreditOperationType!`](#companycreditoperationtype) | The type of the company credit operation. |
| `updated_by` - [`CompanyCreditOperationUser!`](#companycreditoperationuser) | The company user that submitted the company credit operation. |

#### Example

```json
{
  "amount": Money,
  "balance": CompanyCredit,
  "custom_reference_number": "xyz789",
  "date": "xyz789",
  "type": "ALLOCATION",
  "updated_by": CompanyCreditOperationUser
}
```

<HorizontalLine />

### CompanyCreditOperationType

#### Values

| Enum Value | Description |
|------------|-------------|
| `ALLOCATION` |  |
| `UPDATE` |  |
| `PURCHASE` |  |
| `REIMBURSEMENT` |  |
| `REFUND` |  |
| `REVERT` |  |

#### Example

```json
""ALLOCATION""
```

<HorizontalLine />

### CompanyCreditOperationUser

Defines the administrator or company user that submitted a company credit operation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String!`](#string) | The name of the company user submitting the company credit operation. |
| `type` - [`CompanyCreditOperationUserType!`](#companycreditoperationusertype) | The type of the company user submitting the company credit operation. |

#### Example

```json
{"name": "abc123", "type": "CUSTOMER"}
```

<HorizontalLine />

### CompanyCreditOperationUserType

#### Values

| Enum Value | Description |
|------------|-------------|
| `CUSTOMER` |  |
| `ADMIN` |  |

#### Example

```json
""CUSTOMER""
```

<HorizontalLine />

### CompanyInvitationInput

Defines the input schema for accepting the company invitation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `code` - [`String!`](#string) | The invitation code. |
| `role_id` - [`ID`](#id) | The company role id. |
| `user` - [`CompanyInvitationUserInput!`](#companyinvitationuserinput) | Company user attributes in the invitation. |

#### Example

```json
{
  "code": "xyz789",
  "role_id": "4",
  "user": CompanyInvitationUserInput
}
```

<HorizontalLine />

### CompanyInvitationOutput

The result of accepting the company invitation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean`](#boolean) | Indicates whether the customer was added to the company successfully. |

#### Example

```json
{"success": false}
```

<HorizontalLine />

### CompanyInvitationUserInput

Company user attributes in the invitation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `company_id` - [`ID!`](#id) | The company unique identifier. |
| `customer_id` - [`ID!`](#id) | The customer unique identifier. |
| `job_title` - [`String`](#string) | The job title of a company user. |
| `status` - [`CompanyUserStatusEnum`](#companyuserstatusenum) | Indicates whether the company user is ACTIVE or INACTIVE. |
| `telephone` - [`String`](#string) | The phone number of the company user. |

#### Example

```json
{
  "company_id": 4,
  "customer_id": 4,
  "job_title": "xyz789",
  "status": "ACTIVE",
  "telephone": "abc123"
}
```

<HorizontalLine />

### CompanyLegalAddress

Contains details about the address where the company is registered to conduct business.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String`](#string) | The city where the company is registered to conduct business. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The country code of the company&#x27;s legal address. |
| `postcode` - [`String`](#string) | The company&#x27;s postal code. |
| `region` - [`CustomerAddressRegion`](#customeraddressregion) | An object containing region data for the company. |
| `street` - [`[String]`](#string) | An array of strings that define the company&#x27;s street address. |
| `telephone` - [`String`](#string) | The company&#x27;s phone number. |

#### Example

```json
{
  "city": "xyz789",
  "country_code": "AF",
  "postcode": "xyz789",
  "region": CustomerAddressRegion,
  "street": ["xyz789"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### CompanyLegalAddressCreateInput

Defines the input schema for defining a company's legal address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String!`](#string) | The city where the company is registered to conduct business. |
| `country_id` - [`CountryCodeEnum!`](#countrycodeenum) | The company&#x27;s country ID. Use the &#x60;countries&#x60; query to get this value. |
| `postcode` - [`String!`](#string) | The postal code of the company. |
| `region` - [`CustomerAddressRegionInput!`](#customeraddressregioninput) | An object containing the region name and/or region ID where the company is registered to conduct business. |
| `street` - [`[String]!`](#string) | An array of strings that define the street address where the company is registered to conduct business. |
| `telephone` - [`String!`](#string) | The primary phone number of the company. |

#### Example

```json
{
  "city": "xyz789",
  "country_id": "AF",
  "postcode": "abc123",
  "region": CustomerAddressRegionInput,
  "street": ["xyz789"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### CompanyLegalAddressUpdateInput

Defines the input schema for updating a company's legal address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String`](#string) | The city where the company is registered to conduct business. |
| `country_id` - [`CountryCodeEnum`](#countrycodeenum) | The unique ID for a &#x60;Country&#x60; object. |
| `postcode` - [`String`](#string) | The postal code of the company. |
| `region` - [`CustomerAddressRegionInput`](#customeraddressregioninput) | An object containing the region name and/or region ID where the company is registered to conduct business. |
| `street` - [`[String]`](#string) | An array of strings that define the street address where the company is registered to conduct business. |
| `telephone` - [`String`](#string) | The primary phone number of the company. |

#### Example

```json
{
  "city": "xyz789",
  "country_id": "AF",
  "postcode": "abc123",
  "region": CustomerAddressRegionInput,
  "street": ["abc123"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### CompanyRole

Contails details about a single role.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CompanyRole&#x60; object. |
| `name` - [`String`](#string) | The name assigned to the role. |
| `permissions` - [`[CompanyAclResource]`](#companyaclresource) | A list of permission resources defined for a role. |
| `users_count` - [`Int`](#int) | The total number of users assigned the specified role. |

#### Example

```json
{
  "id": 4,
  "name": "xyz789",
  "permissions": [CompanyAclResource],
  "users_count": 123
}
```

<HorizontalLine />

### CompanyRoleCreateInput

Defines the input schema for creating a company role.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `name` - [`String!`](#string) | The name of the role to create. |
| `permissions` - [`[String]!`](#string) | A list of resources the role can access. |

#### Example

```json
{
  "name": "abc123",
  "permissions": ["xyz789"]
}
```

<HorizontalLine />

### CompanyRoleUpdateInput

Defines the input schema for updating a company role.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CompanyRole&#x60; object. |
| `name` - [`String`](#string) | The name of the role to update. |
| `permissions` - [`[String]`](#string) | A list of resources the role can access. |

#### Example

```json
{
  "id": 4,
  "name": "abc123",
  "permissions": ["xyz789"]
}
```

<HorizontalLine />

### CompanyRoles

Contains an array of roles.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CompanyRole]!`](#companyrole) | A list of company roles that match the specified filter criteria. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `total_count` - [`Int!`](#int) | The total number of objects matching the specified filter. |

#### Example

```json
{
  "items": [CompanyRole],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### CompanySalesRepresentative

Contains details about a company sales representative.

#### Fields

| Field Name | Description |
|------------|-------------|
| `email` - [`String`](#string) | The email address of the company sales representative. |
| `firstname` - [`String`](#string) | The company sales representative&#x27;s first name. |
| `lastname` - [`String`](#string) | The company sales representative&#x27;s last name. |

#### Example

```json
{
  "email": "abc123",
  "firstname": "xyz789",
  "lastname": "xyz789"
}
```

<HorizontalLine />

### CompanyStructure

Contains an array of the individual nodes that comprise the company structure.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CompanyStructureItem]`](#companystructureitem) | An array of elements in a company structure. |

#### Example

```json
{"items": [CompanyStructureItem]}
```

<HorizontalLine />

### CompanyStructureEntity

#### Types

| Union Types |
|-------------|
| [`CompanyTeam`](#companyteam) |
| [`Customer`](#customer) |

#### Example

```json
CompanyTeam
```

<HorizontalLine />

### CompanyStructureItem

Defines an individual node in the company structure.

#### Fields

| Field Name | Description |
|------------|-------------|
| `entity` - [`CompanyStructureEntity`](#companystructureentity) | A union of &#x60;CompanyTeam&#x60; and &#x60;Customer&#x60; objects. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CompanyStructureItem&#x60; object. |
| `parent_id` - [`ID`](#id) | The ID of the parent item in the company hierarchy. |

#### Example

```json
{
  "entity": CompanyTeam,
  "id": 4,
  "parent_id": "4"
}
```

<HorizontalLine />

### CompanyStructureUpdateInput

Defines the input schema for updating the company structure.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `parent_tree_id` - [`ID!`](#id) | The ID of a company that will be the new parent. |
| `tree_id` - [`ID!`](#id) | The ID of the company team that is being moved to another parent. |

#### Example

```json
{
  "parent_tree_id": "4",
  "tree_id": "4"
}
```

<HorizontalLine />

### CompanyTeam

Describes a company team.

#### Fields

| Field Name | Description |
|------------|-------------|
| `description` - [`String`](#string) | An optional description of the team. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CompanyTeam&#x60; object. |
| `name` - [`String`](#string) | The display name of the team. |
| `structure_id` - [`ID!`](#id) | ID of the company structure |

#### Example

```json
{
  "description": "abc123",
  "id": "4",
  "name": "abc123",
  "structure_id": "4"
}
```

<HorizontalLine />

### CompanyTeamCreateInput

Defines the input schema for creating a company team.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `description` - [`String`](#string) | An optional description of the team. |
| `name` - [`String!`](#string) | The display name of the team. |
| `target_id` - [`ID`](#id) | The ID of a node within a company&#x27;s structure. This ID will be the parent of the created team. |

#### Example

```json
{
  "description": "xyz789",
  "name": "abc123",
  "target_id": 4
}
```

<HorizontalLine />

### CompanyTeamUpdateInput

Defines the input schema for updating a company team.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `description` - [`String`](#string) | An optional description of the team. |
| `id` - [`ID!`](#id) | The unique ID of the &#x60;CompanyTeam&#x60; object to update. |
| `name` - [`String`](#string) | The display name of the team. |

#### Example

```json
{
  "description": "xyz789",
  "id": "4",
  "name": "xyz789"
}
```

<HorizontalLine />

### CompanyUpdateInput

Defines the input schema for updating a company.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `company_email` - [`String`](#string) | The email address of the company contact. |
| `company_name` - [`String`](#string) | The name of the company to update. |
| `legal_address` - [`CompanyLegalAddressUpdateInput`](#companylegaladdressupdateinput) | The legal address data of the company. |
| `legal_name` - [`String`](#string) | The full legal name of the company. |
| `reseller_id` - [`String`](#string) | The resale number that is assigned to the company for tax reporting purposes. |
| `vat_tax_id` - [`String`](#string) | The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes. |

#### Example

```json
{
  "company_email": "xyz789",
  "company_name": "xyz789",
  "legal_address": CompanyLegalAddressUpdateInput,
  "legal_name": "xyz789",
  "reseller_id": "abc123",
  "vat_tax_id": "abc123"
}
```

<HorizontalLine />

### CompanyUserCreateInput

Defines the input schema for creating a company user.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](#string) | The company user&#x27;s email address |
| `firstname` - [`String!`](#string) | The company user&#x27;s first name. |
| `job_title` - [`String!`](#string) | The company user&#x27;s job title or function. |
| `lastname` - [`String!`](#string) | The company user&#x27;s last name. |
| `role_id` - [`ID!`](#id) | The unique ID for a &#x60;CompanyRole&#x60; object. |
| `status` - [`CompanyUserStatusEnum!`](#companyuserstatusenum) | Indicates whether the company user is ACTIVE or INACTIVE. |
| `target_id` - [`ID`](#id) | The ID of a node within a company&#x27;s structure. This ID will be the parent of the created company user. |
| `telephone` - [`String!`](#string) | The company user&#x27;s phone number. |

#### Example

```json
{
  "email": "abc123",
  "firstname": "xyz789",
  "job_title": "xyz789",
  "lastname": "abc123",
  "role_id": "4",
  "status": "ACTIVE",
  "target_id": 4,
  "telephone": "xyz789"
}
```

<HorizontalLine />

### CompanyUserStatusEnum

Defines the list of company user status values.

#### Values

| Enum Value | Description |
|------------|-------------|
| `ACTIVE` | Only active users. |
| `INACTIVE` | Only inactive users. |

#### Example

```json
""ACTIVE""
```

<HorizontalLine />

### CompanyUserUpdateInput

Defines the input schema for updating a company user.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String`](#string) | The company user&#x27;s email address. |
| `firstname` - [`String`](#string) | The company user&#x27;s first name. |
| `id` - [`ID!`](#id) | The unique ID of a &#x60;Customer&#x60; object. |
| `job_title` - [`String`](#string) | The company user&#x27;s job title or function. |
| `lastname` - [`String`](#string) | The company user&#x27;s last name. |
| `role_id` - [`ID`](#id) | The unique ID for a &#x60;CompanyRole&#x60; object. |
| `status` - [`CompanyUserStatusEnum`](#companyuserstatusenum) | Indicates whether the company user is ACTIVE or INACTIVE. |
| `telephone` - [`String`](#string) | The company user&#x27;s phone number. |

#### Example

```json
{
  "email": "xyz789",
  "firstname": "xyz789",
  "id": "4",
  "job_title": "abc123",
  "lastname": "abc123",
  "role_id": "4",
  "status": "ACTIVE",
  "telephone": "xyz789"
}
```

<HorizontalLine />

### CompanyUsers

Contains details about company users.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[Customer]!`](#customer) | An array of &#x60;CompanyUser&#x60; objects that match the specified filter criteria. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `total_count` - [`Int!`](#int) | The number of objects returned. |

#### Example

```json
{
  "items": [Customer],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### CompanyUsersFilterInput

Defines the filter for returning a list of company users.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `status` - [`CompanyUserStatusEnum`](#companyuserstatusenum) | The activity status to filter on. |

#### Example

```json
{"status": "ACTIVE"}
```

<HorizontalLine />

### ComparableAttribute

Contains an attribute code that is used for product comparisons.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | An attribute code that is enabled for product comparisons. |
| `label` - [`String!`](#string) | The label of the attribute code. |

#### Example

```json
{
  "code": "abc123",
  "label": "abc123"
}
```

<HorizontalLine />

### ComparableItem

Defines an object used to iterate through items for product comparisons.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attributes` - [`[ProductAttribute]!`](#productattribute) | An array of product attributes that can be used to compare products. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a product in a compare list. |
| `uid` - [`ID!`](#id) | The unique ID of an item in a compare list. |

#### Example

```json
{
  "attributes": [ProductAttribute],
  "product": ProductInterface,
  "uid": 4
}
```

<HorizontalLine />

### CompareList

Contains iterable information such as the array of items, the count, and attributes that represent the compare list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attributes` - [`[ComparableAttribute]`](#comparableattribute) | An array of attributes that can be used for comparing products. |
| `item_count` - [`Int!`](#int) | The number of items in the compare list. |
| `items` - [`[ComparableItem]`](#comparableitem) | An array of products to compare. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the compare list. |

#### Example

```json
{
  "attributes": [ComparableAttribute],
  "item_count": 123,
  "items": [ComparableItem],
  "uid": 4
}
```

<HorizontalLine />

### ComplexTextValue

#### Fields

| Field Name | Description |
|------------|-------------|
| `html` - [`String!`](#string) | Text that can contain HTML tags. |

#### Example

```json
{"html": "abc123"}
```

<HorizontalLine />

### ConfigurableAttributeOption

Contains details about a configurable product attribute option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | The ID assigned to the attribute. |
| `label` - [`String`](#string) | A string that describes the configurable attribute option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ConfigurableAttributeOption&#x60; object. |
| `value_index` - [`Int`](#int) | A unique index number assigned to the configurable product option. |

#### Example

```json
{
  "code": "abc123",
  "label": "xyz789",
  "uid": 4,
  "value_index": 987
}
```

<HorizontalLine />

### ConfigurableCartItem

An implementation for configurable product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_gift_wrapping` - [`[GiftWrapping]!`](#giftwrapping) | The list of available gift wrapping options for the cart item. |
| `configurable_options` - [`[SelectedConfigurableOption]!`](#selectedconfigurableoption) | An array containing the configuranle options the shopper selected. |
| `configured_variant` - [`ProductInterface!`](#productinterface) | Product details of the cart item. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message for the cart item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the cart item. |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
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
  "configurable_options": [SelectedConfigurableOption],
  "configured_variant": ProductInterface,
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "xyz789",
  "is_available": true,
  "max_qty": 123.45,
  "min_qty": 123.45,
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": "4"
}
```

<HorizontalLine />

### ConfigurableOptionAvailableForSelection

Describes configurable options that have been selected and can be selected as a result of the previous selections.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String!`](#string) | An attribute code that uniquely identifies a configurable option. |
| `option_value_uids` - [`[ID]!`](#id) | An array of selectable option value IDs. |

#### Example

```json
{
  "attribute_code": "abc123",
  "option_value_uids": ["4"]
}
```

<HorizontalLine />

### ConfigurableProduct

Defines basic features of a configurable product and its simple product variants.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `configurable_options` - [`[ConfigurableProductOptions]`](#configurableproductoptions) | An array of options for the configurable product. |
| `configurable_product_options_selection` - [`ConfigurableProductOptionsSelection`](#configurableproductoptionsselection) | An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
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
| `variants` - [`[ConfigurableVariant]`](#configurablevariant) | An array of simple product variants. |
| `websites` - [`[Website]`](#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "attribute_set_id": 123,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "color": 123,
  "configurable_options": [ConfigurableProductOptions],
  "configurable_product_options_selection": ConfigurableProductOptionsSelection,
  "country_of_manufacture": "abc123",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": "abc123",
  "id": 987,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 987,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "name": "xyz789",
  "new_from_date": "abc123",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "rating_summary": 987.65,
  "redirect_code": 987,
  "related_products": [ProductInterface],
  "relative_url": "abc123",
  "review_count": 987,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_from_date": "abc123",
  "special_price": 987.65,
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
  "url_suffix": "xyz789",
  "variants": [ConfigurableVariant],
  "websites": [Website],
  "weight": 987.65
}
```

<HorizontalLine />

### ConfigurableProductCartItemInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | The ID and value of the option. |
| `data` - [`CartItemInput!`](#cartiteminput) | The quantity and SKU of the configurable product. |
| `parent_sku` - [`String`](#string) | The SKU of the parent configurable product. |
| `variant_sku` - [`String`](#string) | Deprecated. Use &#x60;CartItemInput.sku&#x60; instead. |

#### Example

```json
{
  "customizable_options": [CustomizableOptionInput],
  "data": CartItemInput,
  "parent_sku": "xyz789",
  "variant_sku": "xyz789"
}
```

<HorizontalLine />

### ConfigurableProductOption

Contains details about configurable product options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String!`](#string) | An attribute code that uniquely identifies a configurable option. |
| `label` - [`String!`](#string) | The display name of the option. |
| `uid` - [`ID!`](#id) | The unique ID of the configurable option. |
| `values` - [`[ConfigurableProductOptionValue]`](#configurableproductoptionvalue) | An array of values that are applicable for this option. |

#### Example

```json
{
  "attribute_code": "abc123",
  "label": "xyz789",
  "uid": "4",
  "values": [ConfigurableProductOptionValue]
}
```

<HorizontalLine />

### ConfigurableProductOptionValue

Defines a value for a configurable product option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_available` - [`Boolean!`](#boolean) | Indicates whether the product is available with this selected option. |
| `is_use_default` - [`Boolean!`](#boolean) | Indicates whether the value is the default. |
| `label` - [`String!`](#string) | The display name of the value. |
| `swatch` - [`SwatchDataInterface`](#swatchdatainterface) | The URL assigned to the thumbnail of the swatch image. |
| `uid` - [`ID!`](#id) | The unique ID of the value. |

#### Example

```json
{
  "is_available": true,
  "is_use_default": false,
  "label": "xyz789",
  "swatch": SwatchDataInterface,
  "uid": 4
}
```

<HorizontalLine />

### ConfigurableProductOptions

Defines configurable attributes for the specified product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String`](#string) | A string that identifies the attribute. |
| `attribute_id` - [`String`](#string) | The ID assigned to the attribute. *(Deprecated: Use &#x60;attribute_uid&#x60; instead.)* |
| `attribute_id_v2` - [`Int`](#int) | The ID assigned to the attribute. *(Deprecated: Use &#x60;attribute_uid&#x60; instead.)* |
| `attribute_uid` - [`ID!`](#id) | The unique ID for an &#x60;Attribute&#x60; object. |
| `id` - [`Int`](#int) | The configurable option ID number assigned by the system. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `label` - [`String`](#string) | A displayed string that describes the configurable product option. |
| `position` - [`Int`](#int) | A number that indicates the order in which the attribute is displayed. |
| `product_id` - [`Int`](#int) | This is the same as a product&#x27;s &#x60;id&#x60; field. *(Deprecated: &#x60;product_id&#x60; is not needed and can be obtained from its parent.)* |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ConfigurableProductOptions&#x60; object. |
| `use_default` - [`Boolean`](#boolean) | Indicates whether the option is the default. |
| `values` - [`[ConfigurableProductOptionsValues]`](#configurableproductoptionsvalues) | An array that defines the &#x60;value_index&#x60; codes assigned to the configurable product. |

#### Example

```json
{
  "attribute_code": "abc123",
  "attribute_id": "abc123",
  "attribute_id_v2": 987,
  "attribute_uid": "4",
  "id": 987,
  "label": "xyz789",
  "position": 123,
  "product_id": 987,
  "uid": "4",
  "use_default": false,
  "values": [ConfigurableProductOptionsValues]
}
```

<HorizontalLine />

### ConfigurableProductOptionsSelection

Contains metadata corresponding to the selected configurable options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `configurable_options` - [`[ConfigurableProductOption]`](#configurableproductoption) | An array of all possible configurable options. |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | Product images and videos corresponding to the specified configurable options selection. |
| `options_available_for_selection` - [`[ConfigurableOptionAvailableForSelection]`](#configurableoptionavailableforselection) | The configurable options available for further selection based on the current selection. |
| `variant` - [`SimpleProduct`](#simpleproduct) | A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. |

#### Example

```json
{
  "configurable_options": [ConfigurableProductOption],
  "media_gallery": [MediaGalleryInterface],
  "options_available_for_selection": [
    ConfigurableOptionAvailableForSelection
  ],
  "variant": SimpleProduct
}
```

<HorizontalLine />

### ConfigurableProductOptionsValues

Contains the index number assigned to a configurable product option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `default_label` - [`String`](#string) | The label of the product on the default store. |
| `label` - [`String`](#string) | The label of the product. |
| `store_label` - [`String`](#string) | The label of the product on the current store. |
| `swatch_data` - [`SwatchDataInterface`](#swatchdatainterface) | Swatch data for a configurable product option. |
| `uid` - [`ID`](#id) | The unique ID for a &#x60;ConfigurableProductOptionsValues&#x60; object. |
| `use_default_value` - [`Boolean`](#boolean) | Indicates whether to use the default_label. |
| `value_index` - [`Int`](#int) | A unique index number assigned to the configurable product option. *(Deprecated: Use &#x60;uid&#x60; instead.)* |

#### Example

```json
{
  "default_label": "xyz789",
  "label": "xyz789",
  "store_label": "abc123",
  "swatch_data": SwatchDataInterface,
  "uid": "4",
  "use_default_value": true,
  "value_index": 987
}
```

<HorizontalLine />

### ConfigurableRequisitionListItem

Contains details about configurable products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `configurable_options` - [`[SelectedConfigurableOption]`](#selectedconfigurableoption) | Selected configurable options for an item in the requisition list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The quantity of the product added to the requisition list. |
| `uid` - [`ID!`](#id) | The unique ID of an item in a requisition list. |

#### Example

```json
{
  "configurable_options": [SelectedConfigurableOption],
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### ConfigurableVariant

Contains all the simple product variants of a configurable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attributes` - [`[ConfigurableAttributeOption]`](#configurableattributeoption) | An array of configurable attribute options. |
| `product` - [`SimpleProduct`](#simpleproduct) | An array of linked simple products. |

#### Example

```json
{
  "attributes": [ConfigurableAttributeOption],
  "product": SimpleProduct
}
```

<HorizontalLine />

### ConfigurableWishlistItem

A configurable product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `child_sku` - [`String!`](#string) | The SKU of the simple product corresponding to a set of selected configurable options. *(Deprecated: Use &#x60;ConfigurableWishlistItem.configured_variant.sku&#x60; instead.)* |
| `configurable_options` - [`[SelectedConfigurableOption]`](#selectedconfigurableoption) | An array of selected configurable options. |
| `configured_variant` - [`ProductInterface`](#productinterface) | Product details of the selected variant. The value is null if some options are not configured. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
  "child_sku": "abc123",
  "configurable_options": [SelectedConfigurableOption],
  "configured_variant": ProductInterface,
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": "4",
  "product": ProductInterface,
  "quantity": 987.65
}
```

<HorizontalLine />

### ConfirmEmailInput

Contains details about a customer email address to confirm.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `confirmation_key` - [`String!`](#string) | The key to confirm the email address. |
| `email` - [`String!`](#string) | The email address to be confirmed. |

#### Example

```json
{
  "confirmation_key": "xyz789",
  "email": "xyz789"
}
```

<HorizontalLine />

### ConfirmationStatusEnum

List of account confirmation statuses.

#### Values

| Enum Value | Description |
|------------|-------------|
| `ACCOUNT_CONFIRMED` | Account confirmed |
| `ACCOUNT_CONFIRMATION_NOT_REQUIRED` | Account confirmation not required |

#### Example

```json
""ACCOUNT_CONFIRMED""
```

<HorizontalLine />

### ContactUsInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment` - [`String!`](#string) | The shopper&#x27;s comment to the merchant. |
| `email` - [`String!`](#string) | The email address of the shopper. |
| `name` - [`String!`](#string) | The full name of the shopper. |
| `telephone` - [`String`](#string) | The shopper&#x27;s telephone number. |

#### Example

```json
{
  "comment": "xyz789",
  "email": "abc123",
  "name": "xyz789",
  "telephone": "xyz789"
}
```

<HorizontalLine />

### ContactUsOutput

Contains the status of the request.

#### Fields

| Field Name | Description |
|------------|-------------|
| `status` - [`Boolean!`](#boolean) | Indicates whether the request was successful. |

#### Example

```json
{"status": false}
```

<HorizontalLine />

### CopyItemsBetweenRequisitionListsInput

An input object that defines the items in a requisition list to be copied.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `requisitionListItemUids` - [`[ID]!`](#id) | An array of IDs representing products copied from one requisition list to another. |

#### Example

```json
{"requisitionListItemUids": [4]}
```

<HorizontalLine />

### CopyItemsFromRequisitionListsOutput

Output of the request to copy items to the destination requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](#requisitionlist) | The destination requisition list after the items were copied. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### CopyProductsBetweenWishlistsOutput

Contains the source and target wish lists after copying products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `destination_wishlist` - [`Wishlist!`](#wishlist) | The destination wish list containing the copied products. |
| `source_wishlist` - [`Wishlist!`](#wishlist) | The wish list that the products were copied from. |
| `user_errors` - [`[WishListUserInputError]!`](#wishlistuserinputerror) | An array of errors encountered while copying products in a wish list. |

#### Example

```json
{
  "destination_wishlist": Wishlist,
  "source_wishlist": Wishlist,
  "user_errors": [WishListUserInputError]
}
```

<HorizontalLine />

### Country

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_regions` - [`[Region]`](#region) | An array of regions within a particular country. |
| `full_name_english` - [`String`](#string) | The name of the country in English. |
| `full_name_locale` - [`String`](#string) | The name of the country in the current locale. |
| `id` - [`String`](#string) | The unique ID for a &#x60;Country&#x60; object. |
| `three_letter_abbreviation` - [`String`](#string) | The three-letter abbreviation of the country, such as USA. |
| `two_letter_abbreviation` - [`String`](#string) | The two-letter abbreviation of the country, such as US. |

#### Example

```json
{
  "available_regions": [Region],
  "full_name_english": "xyz789",
  "full_name_locale": "abc123",
  "id": "xyz789",
  "three_letter_abbreviation": "xyz789",
  "two_letter_abbreviation": "abc123"
}
```

<HorizontalLine />

### CountryCodeEnum

The list of country codes.

#### Values

| Enum Value | Description |
|------------|-------------|
| `AF` | Afghanistan |
| `AX` | Åland Islands |
| `AL` | Albania |
| `DZ` | Algeria |
| `AS` | American Samoa |
| `AD` | Andorra |
| `AO` | Angola |
| `AI` | Anguilla |
| `AQ` | Antarctica |
| `AG` | Antigua &amp; Barbuda |
| `AR` | Argentina |
| `AM` | Armenia |
| `AW` | Aruba |
| `AU` | Australia |
| `AT` | Austria |
| `AZ` | Azerbaijan |
| `BS` | Bahamas |
| `BH` | Bahrain |
| `BD` | Bangladesh |
| `BB` | Barbados |
| `BY` | Belarus |
| `BE` | Belgium |
| `BZ` | Belize |
| `BJ` | Benin |
| `BM` | Bermuda |
| `BT` | Bhutan |
| `BO` | Bolivia |
| `BA` | Bosnia &amp; Herzegovina |
| `BW` | Botswana |
| `BV` | Bouvet Island |
| `BR` | Brazil |
| `IO` | British Indian Ocean Territory |
| `VG` | British Virgin Islands |
| `BN` | Brunei |
| `BG` | Bulgaria |
| `BF` | Burkina Faso |
| `BI` | Burundi |
| `KH` | Cambodia |
| `CM` | Cameroon |
| `CA` | Canada |
| `CV` | Cape Verde |
| `KY` | Cayman Islands |
| `CF` | Central African Republic |
| `TD` | Chad |
| `CL` | Chile |
| `CN` | China |
| `CX` | Christmas Island |
| `CC` | Cocos (Keeling) Islands |
| `CO` | Colombia |
| `KM` | Comoros |
| `CG` | Congo-Brazzaville |
| `CD` | Congo-Kinshasa |
| `CK` | Cook Islands |
| `CR` | Costa Rica |
| `CI` | Côte d’Ivoire |
| `HR` | Croatia |
| `CU` | Cuba |
| `CY` | Cyprus |
| `CZ` | Czech Republic |
| `DK` | Denmark |
| `DJ` | Djibouti |
| `DM` | Dominica |
| `DO` | Dominican Republic |
| `EC` | Ecuador |
| `EG` | Egypt |
| `SV` | El Salvador |
| `GQ` | Equatorial Guinea |
| `ER` | Eritrea |
| `EE` | Estonia |
| `SZ` | Eswatini |
| `ET` | Ethiopia |
| `FK` | Falkland Islands |
| `FO` | Faroe Islands |
| `FJ` | Fiji |
| `FI` | Finland |
| `FR` | France |
| `GF` | French Guiana |
| `PF` | French Polynesia |
| `TF` | French Southern Territories |
| `GA` | Gabon |
| `GM` | Gambia |
| `GE` | Georgia |
| `DE` | Germany |
| `GH` | Ghana |
| `GI` | Gibraltar |
| `GR` | Greece |
| `GL` | Greenland |
| `GD` | Grenada |
| `GP` | Guadeloupe |
| `GU` | Guam |
| `GT` | Guatemala |
| `GG` | Guernsey |
| `GN` | Guinea |
| `GW` | Guinea-Bissau |
| `GY` | Guyana |
| `HT` | Haiti |
| `HM` | Heard &amp;amp; McDonald Islands |
| `HN` | Honduras |
| `HK` | Hong Kong SAR China |
| `HU` | Hungary |
| `IS` | Iceland |
| `IN` | India |
| `ID` | Indonesia |
| `IR` | Iran |
| `IQ` | Iraq |
| `IE` | Ireland |
| `IM` | Isle of Man |
| `IL` | Israel |
| `IT` | Italy |
| `JM` | Jamaica |
| `JP` | Japan |
| `JE` | Jersey |
| `JO` | Jordan |
| `KZ` | Kazakhstan |
| `KE` | Kenya |
| `KI` | Kiribati |
| `KW` | Kuwait |
| `KG` | Kyrgyzstan |
| `LA` | Laos |
| `LV` | Latvia |
| `LB` | Lebanon |
| `LS` | Lesotho |
| `LR` | Liberia |
| `LY` | Libya |
| `LI` | Liechtenstein |
| `LT` | Lithuania |
| `LU` | Luxembourg |
| `MO` | Macau SAR China |
| `MK` | Macedonia |
| `MG` | Madagascar |
| `MW` | Malawi |
| `MY` | Malaysia |
| `MV` | Maldives |
| `ML` | Mali |
| `MT` | Malta |
| `MH` | Marshall Islands |
| `MQ` | Martinique |
| `MR` | Mauritania |
| `MU` | Mauritius |
| `YT` | Mayotte |
| `MX` | Mexico |
| `FM` | Micronesia |
| `MD` | Moldova |
| `MC` | Monaco |
| `MN` | Mongolia |
| `ME` | Montenegro |
| `MS` | Montserrat |
| `MA` | Morocco |
| `MZ` | Mozambique |
| `MM` | Myanmar (Burma) |
| `NA` | Namibia |
| `NR` | Nauru |
| `NP` | Nepal |
| `NL` | Netherlands |
| `AN` | Netherlands Antilles |
| `NC` | New Caledonia |
| `NZ` | New Zealand |
| `NI` | Nicaragua |
| `NE` | Niger |
| `NG` | Nigeria |
| `NU` | Niue |
| `NF` | Norfolk Island |
| `MP` | Northern Mariana Islands |
| `KP` | North Korea |
| `NO` | Norway |
| `OM` | Oman |
| `PK` | Pakistan |
| `PW` | Palau |
| `PS` | Palestinian Territories |
| `PA` | Panama |
| `PG` | Papua New Guinea |
| `PY` | Paraguay |
| `PE` | Peru |
| `PH` | Philippines |
| `PN` | Pitcairn Islands |
| `PL` | Poland |
| `PT` | Portugal |
| `QA` | Qatar |
| `RE` | Réunion |
| `RO` | Romania |
| `RU` | Russia |
| `RW` | Rwanda |
| `WS` | Samoa |
| `SM` | San Marino |
| `ST` | São Tomé &amp; Príncipe |
| `SA` | Saudi Arabia |
| `SN` | Senegal |
| `RS` | Serbia |
| `SC` | Seychelles |
| `SL` | Sierra Leone |
| `SG` | Singapore |
| `SK` | Slovakia |
| `SI` | Slovenia |
| `SB` | Solomon Islands |
| `SO` | Somalia |
| `ZA` | South Africa |
| `GS` | South Georgia &amp; South Sandwich Islands |
| `KR` | South Korea |
| `ES` | Spain |
| `LK` | Sri Lanka |
| `BL` | St. Barthélemy |
| `SH` | St. Helena |
| `KN` | St. Kitts &amp; Nevis |
| `LC` | St. Lucia |
| `MF` | St. Martin |
| `PM` | St. Pierre &amp; Miquelon |
| `VC` | St. Vincent &amp; Grenadines |
| `SD` | Sudan |
| `SR` | Suriname |
| `SJ` | Svalbard &amp; Jan Mayen |
| `SE` | Sweden |
| `CH` | Switzerland |
| `SY` | Syria |
| `TW` | Taiwan |
| `TJ` | Tajikistan |
| `TZ` | Tanzania |
| `TH` | Thailand |
| `TL` | Timor-Leste |
| `TG` | Togo |
| `TK` | Tokelau |
| `TO` | Tonga |
| `TT` | Trinidad &amp; Tobago |
| `TN` | Tunisia |
| `TR` | Turkey |
| `TM` | Turkmenistan |
| `TC` | Turks &amp; Caicos Islands |
| `TV` | Tuvalu |
| `UG` | Uganda |
| `UA` | Ukraine |
| `AE` | United Arab Emirates |
| `GB` | United Kingdom |
| `US` | United States |
| `UY` | Uruguay |
| `UM` | U.S. Outlying Islands |
| `VI` | U.S. Virgin Islands |
| `UZ` | Uzbekistan |
| `VU` | Vanuatu |
| `VA` | Vatican City |
| `VE` | Venezuela |
| `VN` | Vietnam |
| `WF` | Wallis &amp; Futuna |
| `EH` | Western Sahara |
| `YE` | Yemen |
| `ZM` | Zambia |
| `ZW` | Zimbabwe |

#### Example

```json
""AF""
```

<HorizontalLine />

### CreateCompanyOutput

Contains the response to the request to create a company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `company` - [`Company!`](#company) | The new company instance. |

#### Example

```json
{"company": Company}
```

<HorizontalLine />

### CreateCompanyRoleOutput

Contains the response to the request to create a company role.

#### Fields

| Field Name | Description |
|------------|-------------|
| `role` - [`CompanyRole!`](#companyrole) | The new company role instance. |

#### Example

```json
{"role": CompanyRole}
```

<HorizontalLine />

### CreateCompanyTeamOutput

Contains the response to the request to create a company team.

#### Fields

| Field Name | Description |
|------------|-------------|
| `team` - [`CompanyTeam!`](#companyteam) | The new company team instance. |

#### Example

```json
{"team": CompanyTeam}
```

<HorizontalLine />

### CreateCompanyUserOutput

Contains the response to the request to create a company user.

#### Fields

| Field Name | Description |
|------------|-------------|
| `user` - [`Customer!`](#customer) | The new company user instance. |

#### Example

```json
{"user": Customer}
```

<HorizontalLine />

### CreateCompareListInput

Contains an array of product IDs to use for creating a compare list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `products` - [`[ID]`](#id) | An array of product IDs to add to the compare list. |

#### Example

```json
{"products": ["4"]}
```

<HorizontalLine />

### CreateGiftRegistryInput

Defines a new gift registry.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](#giftregistrydynamicattributeinput) | Additional attributes specified as a code-value pair. |
| `event_name` - [`String!`](#string) | The name of the event. |
| `gift_registry_type_uid` - [`ID!`](#id) | The ID of the selected event type. |
| `message` - [`String!`](#string) | A message describing the event. |
| `privacy_settings` - [`GiftRegistryPrivacySettings!`](#giftregistryprivacysettings) | Indicates whether the registry is PRIVATE or PUBLIC. |
| `registrants` - [`[AddGiftRegistryRegistrantInput]!`](#addgiftregistryregistrantinput) | The list of people who receive notifications about the registry. |
| `shipping_address` - [`GiftRegistryShippingAddressInput`](#giftregistryshippingaddressinput) | The shipping address for all gift registry items. |
| `status` - [`GiftRegistryStatus!`](#giftregistrystatus) | Indicates whether the registry is ACTIVE or INACTIVE. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryDynamicAttributeInput
  ],
  "event_name": "xyz789",
  "gift_registry_type_uid": "4",
  "message": "abc123",
  "privacy_settings": "PRIVATE",
  "registrants": [AddGiftRegistryRegistrantInput],
  "shipping_address": GiftRegistryShippingAddressInput,
  "status": "ACTIVE"
}
```

<HorizontalLine />

### CreateGiftRegistryOutput

Contains the results of a request to create a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The newly-created gift registry. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### CreateGuestCartInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_uid` - [`ID`](#id) | Optional client-generated ID |

#### Example

```json
{"cart_uid": "4"}
```

<HorizontalLine />

### CreateGuestCartOutput

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart`](#cart) | The newly created cart. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### CreatePayflowProTokenOutput

Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `response_message` - [`String!`](#string) | The RESPMSG returned by PayPal. If the &#x60;result&#x60; is &#x60;0&#x60;, then &#x60;response_message&#x60; is &#x60;Approved&#x60;. |
| `result` - [`Int!`](#int) | A non-zero value if any errors occurred. |
| `result_code` - [`Int!`](#int) | The RESULT returned by PayPal. A value of &#x60;0&#x60; indicates the transaction was approved. |
| `secure_token` - [`String!`](#string) | A secure token generated by PayPal. |
| `secure_token_id` - [`String!`](#string) | A secure token ID generated by PayPal. |

#### Example

```json
{
  "response_message": "abc123",
  "result": 123,
  "result_code": 987,
  "secure_token": "xyz789",
  "secure_token_id": "xyz789"
}
```

<HorizontalLine />

### CreatePaymentOrderInput

Contains payment order details that are used while processing the payment order

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cartId` - [`String!`](#string) | The customer cart ID |
| `location` - [`PaymentLocation!`](#paymentlocation) | Defines the origin location for that payment request |
| `methodCode` - [`String!`](#string) | The code for the payment method used in the order |
| `paymentSource` - [`String!`](#string) | The identifiable payment source for the payment method |
| `vaultIntent` - [`Boolean`](#boolean) | Indicates whether the payment information should be vaulted |

#### Example

```json
{
  "cartId": "xyz789",
  "location": "PRODUCT_DETAIL",
  "methodCode": "xyz789",
  "paymentSource": "abc123",
  "vaultIntent": false
}
```

<HorizontalLine />

### CreatePaymentOrderOutput

Contains payment order details that are used while processing the payment order

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Float`](#float) | The amount of the payment order |
| `currency_code` - [`String`](#string) | The currency of the payment order |
| `id` - [`String`](#string) | PayPal order ID |
| `mp_order_id` - [`String`](#string) | The order ID generated by Payment Services |
| `status` - [`String`](#string) | The status of the payment order |

#### Example

```json
{
  "amount": 987.65,
  "currency_code": "xyz789",
  "id": "xyz789",
  "mp_order_id": "xyz789",
  "status": "abc123"
}
```

<HorizontalLine />

### CreateProductReviewInput

Defines a new product review.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `nickname` - [`String!`](#string) | The customer&#x27;s nickname. Defaults to the customer name, if logged in. |
| `ratings` - [`[ProductReviewRatingInput]!`](#productreviewratinginput) | The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. |
| `sku` - [`String!`](#string) | The SKU of the reviewed product. |
| `summary` - [`String!`](#string) | The summary (title) of the review. |
| `text` - [`String!`](#string) | The review text. |

#### Example

```json
{
  "nickname": "abc123",
  "ratings": [ProductReviewRatingInput],
  "sku": "abc123",
  "summary": "abc123",
  "text": "abc123"
}
```

<HorizontalLine />

### CreateProductReviewOutput

Contains the completed product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `review` - [`ProductReview!`](#productreview) | Product review details. |

#### Example

```json
{"review": ProductReview}
```

<HorizontalLine />

### CreatePurchaseOrderApprovalRuleConditionAmountInput

Specifies the amount and currency to evaluate.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `currency` - [`CurrencyEnum!`](#currencyenum) | Purchase order approval rule condition amount currency. |
| `value` - [`Float!`](#float) | Purchase order approval rule condition amount value. |

#### Example

```json
{"currency": "AFN", "value": 123.45}
```

<HorizontalLine />

### CreatePurchaseOrderApprovalRuleConditionInput

Defines a set of conditions that apply to a rule.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `amount` - [`CreatePurchaseOrderApprovalRuleConditionAmountInput`](#createpurchaseorderapprovalruleconditionamountinput) | The amount to be compared in a purchase order approval rule. This field is mutually exclusive with condition quantity. |
| `attribute` - [`PurchaseOrderApprovalRuleType!`](#purchaseorderapprovalruletype) | The type of approval rule. |
| `operator` - [`PurchaseOrderApprovalRuleConditionOperator!`](#purchaseorderapprovalruleconditionoperator) | Defines how to evaluate an amount or quantity in a purchase order. |
| `quantity` - [`Int`](#int) | The quantity to be compared in a purchase order approval rule. This field is mutually exclusive with condition amount. |

#### Example

```json
{
  "amount": CreatePurchaseOrderApprovalRuleConditionAmountInput,
  "attribute": "GRAND_TOTAL",
  "operator": "MORE_THAN",
  "quantity": 123
}
```

<HorizontalLine />

### CreateRequisitionListInput

An input object that identifies and describes a new requisition list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `description` - [`String`](#string) | An optional description of the requisition list. |
| `name` - [`String!`](#string) | The name assigned to the requisition list. |

#### Example

```json
{
  "description": "abc123",
  "name": "abc123"
}
```

<HorizontalLine />

### CreateRequisitionListOutput

Output of the request to create a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](#requisitionlist) | The created requisition list. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### CreateWishlistInput

Defines the name and visibility of a new wish list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `name` - [`String!`](#string) | The name of the new wish list. |
| `visibility` - [`WishlistVisibilityEnum!`](#wishlistvisibilityenum) | Indicates whether the wish list is public or private. |

#### Example

```json
{"name": "xyz789", "visibility": "PUBLIC"}
```

<HorizontalLine />

### CreateWishlistOutput

Contains the wish list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `wishlist` - [`Wishlist!`](#wishlist) | The newly-created wish list |

#### Example

```json
{"wishlist": Wishlist}
```

<HorizontalLine />

### CreditCardDetailsInput

Required fields for Payflow Pro and Payments Pro credit card payments.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cc_exp_month` - [`Int!`](#int) | The credit card expiration month. |
| `cc_exp_year` - [`Int!`](#int) | The credit card expiration year. |
| `cc_last_4` - [`Int!`](#int) | The last 4 digits of the credit card. |
| `cc_type` - [`String!`](#string) | The credit card type. |

#### Example

```json
{
  "cc_exp_month": 123,
  "cc_exp_year": 987,
  "cc_last_4": 987,
  "cc_type": "abc123"
}
```

<HorizontalLine />

### CreditMemo

Contains credit memo details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comments` - [`[SalesCommentItem]`](#salescommentitem) | Comments on the credit memo. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CreditMemo&#x60; object. |
| `items` - [`[CreditMemoItemInterface]`](#creditmemoiteminterface) | An array containing details about refunded items. |
| `number` - [`String!`](#string) | The sequential credit memo number. |
| `total` - [`CreditMemoTotal`](#creditmemototal) | Details about the total refunded amount. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "id": "4",
  "items": [CreditMemoItemInterface],
  "number": "xyz789",
  "total": CreditMemoTotal
}
```

<HorizontalLine />

### CreditMemoItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
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
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_refunded": 123.45
}
```

<HorizontalLine />

### CreditMemoItemInterface

Credit memo item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CreditMemoItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |

#### Possible Types

| CreditMemoItemInterface Types |
|----------------|
| [`DownloadableCreditMemoItem`](#downloadablecreditmemoitem) |
| [`BundleCreditMemoItem`](#bundlecreditmemoitem) |
| [`GiftCardCreditMemoItem`](#giftcardcreditmemoitem) |
| [`CreditMemoItem`](#creditmemoitem) |

#### Example

```json
{
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

### CreditMemoTotal

Contains credit memo price details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `adjustment` - [`Money!`](#money) | An adjustment manually applied to the order. |
| `base_grand_total` - [`Money!`](#money) | The final base grand total amount in the base currency. |
| `discounts` - [`[Discount]`](#discount) | The applied discounts to the credit memo. |
| `grand_total` - [`Money!`](#money) | The final total amount, including shipping, discounts, and taxes. |
| `shipping_handling` - [`ShippingHandling`](#shippinghandling) | Details about the shipping and handling costs for the credit memo. |
| `subtotal` - [`Money!`](#money) | The subtotal of the invoice, excluding shipping, discounts, and taxes. |
| `taxes` - [`[TaxItem]`](#taxitem) | The credit memo tax details. |
| `total_shipping` - [`Money!`](#money) | The shipping amount for the credit memo. |
| `total_tax` - [`Money!`](#money) | The amount of tax applied to the credit memo. |

#### Example

```json
{
  "adjustment": Money,
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

### Currency

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_currency_codes` - [`[String]`](#string) | An array of three-letter currency codes accepted by the store, such as USD and EUR. |
| `base_currency_code` - [`String`](#string) | The base currency set for the store, such as USD. |
| `base_currency_symbol` - [`String`](#string) | The symbol for the specified base currency, such as $. |
| `default_display_currecy_code` - [`String`](#string) |  *(Deprecated: Symbol was missed. Use &#x60;default_display_currency_code&#x60;.)* |
| `default_display_currecy_symbol` - [`String`](#string) |  *(Deprecated: Symbol was missed. Use &#x60;default_display_currency_code&#x60;.)* |
| `default_display_currency_code` - [`String`](#string) | The currency that is displayed by default, such as USD. |
| `default_display_currency_symbol` - [`String`](#string) | The currency symbol that is displayed by default, such as $. |
| `exchange_rates` - [`[ExchangeRate]`](#exchangerate) | An array of exchange rates for currencies defined in the store. |

#### Example

```json
{
  "available_currency_codes": ["abc123"],
  "base_currency_code": "xyz789",
  "base_currency_symbol": "xyz789",
  "default_display_currecy_code": "abc123",
  "default_display_currecy_symbol": "abc123",
  "default_display_currency_code": "xyz789",
  "default_display_currency_symbol": "abc123",
  "exchange_rates": [ExchangeRate]
}
```

<HorizontalLine />

### CurrencyEnum

The list of available currency codes.

#### Values

| Enum Value | Description |
|------------|-------------|
| `AFN` |  |
| `ALL` |  |
| `AZN` |  |
| `DZD` |  |
| `AOA` |  |
| `ARS` |  |
| `AMD` |  |
| `AWG` |  |
| `AUD` |  |
| `BSD` |  |
| `BHD` |  |
| `BDT` |  |
| `BBD` |  |
| `BYN` |  |
| `BZD` |  |
| `BMD` |  |
| `BTN` |  |
| `BOB` |  |
| `BAM` |  |
| `BWP` |  |
| `BRL` |  |
| `GBP` |  |
| `BND` |  |
| `BGN` |  |
| `BUK` |  |
| `BIF` |  |
| `KHR` |  |
| `CAD` |  |
| `CVE` |  |
| `CZK` |  |
| `KYD` |  |
| `GQE` |  |
| `CLP` |  |
| `CNY` |  |
| `COP` |  |
| `KMF` |  |
| `CDF` |  |
| `CRC` |  |
| `HRK` |  |
| `CUP` |  |
| `DKK` |  |
| `DJF` |  |
| `DOP` |  |
| `XCD` |  |
| `EGP` |  |
| `SVC` |  |
| `ERN` |  |
| `EEK` |  |
| `ETB` |  |
| `EUR` |  |
| `FKP` |  |
| `FJD` |  |
| `GMD` |  |
| `GEK` |  |
| `GEL` |  |
| `GHS` |  |
| `GIP` |  |
| `GTQ` |  |
| `GNF` |  |
| `GYD` |  |
| `HTG` |  |
| `HNL` |  |
| `HKD` |  |
| `HUF` |  |
| `ISK` |  |
| `INR` |  |
| `IDR` |  |
| `IRR` |  |
| `IQD` |  |
| `ILS` |  |
| `JMD` |  |
| `JPY` |  |
| `JOD` |  |
| `KZT` |  |
| `KES` |  |
| `KWD` |  |
| `KGS` |  |
| `LAK` |  |
| `LVL` |  |
| `LBP` |  |
| `LSL` |  |
| `LRD` |  |
| `LYD` |  |
| `LTL` |  |
| `MOP` |  |
| `MKD` |  |
| `MGA` |  |
| `MWK` |  |
| `MYR` |  |
| `MVR` |  |
| `LSM` |  |
| `MRO` |  |
| `MUR` |  |
| `MXN` |  |
| `MDL` |  |
| `MNT` |  |
| `MAD` |  |
| `MZN` |  |
| `MMK` |  |
| `NAD` |  |
| `NPR` |  |
| `ANG` |  |
| `YTL` |  |
| `NZD` |  |
| `NIC` |  |
| `NGN` |  |
| `KPW` |  |
| `NOK` |  |
| `OMR` |  |
| `PKR` |  |
| `PAB` |  |
| `PGK` |  |
| `PYG` |  |
| `PEN` |  |
| `PHP` |  |
| `PLN` |  |
| `QAR` |  |
| `RHD` |  |
| `RON` |  |
| `RUB` |  |
| `RWF` |  |
| `SHP` |  |
| `STD` |  |
| `SAR` |  |
| `RSD` |  |
| `SCR` |  |
| `SLL` |  |
| `SGD` |  |
| `SKK` |  |
| `SBD` |  |
| `SOS` |  |
| `ZAR` |  |
| `KRW` |  |
| `LKR` |  |
| `SDG` |  |
| `SRD` |  |
| `SZL` |  |
| `SEK` |  |
| `CHF` |  |
| `SYP` |  |
| `TWD` |  |
| `TJS` |  |
| `TZS` |  |
| `THB` |  |
| `TOP` |  |
| `TTD` |  |
| `TND` |  |
| `TMM` |  |
| `USD` |  |
| `UGX` |  |
| `UAH` |  |
| `AED` |  |
| `UYU` |  |
| `UZS` |  |
| `VUV` |  |
| `VEB` |  |
| `VEF` |  |
| `VND` |  |
| `CHE` |  |
| `CHW` |  |
| `XOF` |  |
| `WST` |  |
| `YER` |  |
| `ZMK` |  |
| `ZWD` |  |
| `TRY` |  |
| `AZM` |  |
| `ROL` |  |
| `TRL` |  |
| `XPF` |  |

#### Example

```json
""AFN""
```

<HorizontalLine />

### CustomAttributeMetadata

Defines an array of custom attributes.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[Attribute]`](#attribute) | An array of attributes. |

#### Example

```json
{"items": [Attribute]}
```

<HorizontalLine />

### CustomAttributeMetadataInterface

An interface containing fields that define the EAV attribute.

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

#### Possible Types

| CustomAttributeMetadataInterface Types |
|----------------|
| [`AttributeMetadata`](#attributemetadata) |
| [`CatalogAttributeMetadata`](#catalogattributemetadata) |
| [`CustomerAttributeMetadata`](#customerattributemetadata) |
| [`ReturnItemAttributeMetadata`](#returnitemattributemetadata) |

#### Example

```json
{
  "code": "4",
  "default_value": "xyz789",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "abc123",
  "frontend_input": "BOOLEAN",
  "is_required": true,
  "is_unique": true,
  "label": "abc123",
  "options": [CustomAttributeOptionInterface]
}
```

<HorizontalLine />

### CustomAttributeOptionInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_default` - [`Boolean!`](#boolean) | Is the option value default. |
| `label` - [`String!`](#string) | The label assigned to the attribute option. |
| `value` - [`String!`](#string) | The attribute option value. |

#### Possible Types

| CustomAttributeOptionInterface Types |
|----------------|
| [`AttributeOptionMetadata`](#attributeoptionmetadata) |

#### Example

```json
{
  "is_default": false,
  "label": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### Customer

Defines the customer name, addresses, and other details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `addresses` - [`[CustomerAddress]`](#customeraddress) | An array containing the customer&#x27;s shipping and billing addresses. |
| `allow_remote_shopping_assistance` - [`Boolean!`](#boolean) | Indicates whether the customer has enabled remote shopping assistance. |
| `companies` - [`UserCompaniesOutput!`](#usercompaniesoutput) | An object that contains a list of companies user is assigned to. |
| `compare_list` - [`CompareList`](#comparelist) | The contents of the customer&#x27;s compare list. |
| `confirmation_status` - [`ConfirmationStatusEnum!`](#confirmationstatusenum) | The customer&#x27;s confirmation status. |
| `created_at` - [`String`](#string) | Timestamp indicating when the account was created. |
| `custom_attributes` - [`[AttributeValueInterface]`](#attributevalueinterface) | Customer&#x27;s custom attributes. |
| `date_of_birth` - [`String`](#string) | The customer&#x27;s date of birth. |
| `default_billing` - [`String`](#string) | The ID assigned to the billing address. |
| `default_shipping` - [`String`](#string) | The ID assigned to the shipping address. |
| `dob` - [`String`](#string) | The customer&#x27;s date of birth. *(Deprecated: Use &#x60;date_of_birth&#x60; instead.)* |
| `email` - [`String`](#string) | The customer&#x27;s email address. Required. |
| `firstname` - [`String`](#string) | The customer&#x27;s first name. |
| `gender` - [`Int`](#int) | The customer&#x27;s gender (Male - 1, Female - 2). |
| `gift_registries` - [`[GiftRegistry]`](#giftregistry) | Details about all of the customer&#x27;s gift registries. |
| `gift_registry` - [`GiftRegistry`](#giftregistry) | Details about a specific gift registry. |
| `group_id` - [`Int`](#int) |  *(Deprecated: Customer group should not be exposed in the storefront scenarios.)* |
| `id` - [`Int`](#int) | The ID assigned to the customer. *(Deprecated: &#x60;id&#x60; is not needed as part of &#x60;Customer&#x60;, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.)* |
| `is_subscribed` - [`Boolean`](#boolean) | Indicates whether the customer is subscribed to the company&#x27;s newsletter. |
| `job_title` - [`String`](#string) | The job title of a company user. |
| `lastname` - [`String`](#string) | The customer&#x27;s family name. |
| `middlename` - [`String`](#string) | The customer&#x27;s middle name. |
| `orders` - [`CustomerOrders`](#customerorders) |  |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `purchase_order` - [`PurchaseOrder`](#purchaseorder) | Purchase order details. |
| `purchase_order_approval_rule` - [`PurchaseOrderApprovalRule`](#purchaseorderapprovalrule) | Details about a single purchase order approval rule. |
| `purchase_order_approval_rule_metadata` - [`PurchaseOrderApprovalRuleMetadata`](#purchaseorderapprovalrulemetadata) | Purchase order approval rule metadata that can be used for rule edit form rendering. |
| `purchase_order_approval_rules` - [`PurchaseOrderApprovalRules`](#purchaseorderapprovalrules) | A list of purchase order approval rules visible to the customer. |
| `purchase_orders` - [`PurchaseOrders`](#purchaseorders) | A list of purchase orders visible to the customer. |
| `purchase_orders_enabled` - [`Boolean!`](#boolean) | Indicates whether purchase order functionality is enabled for the current customer. Global and company-level settings are factored into the result. |
| `requisition_lists` - [`RequisitionLists`](#requisitionlists) | An object that contains the customer&#x27;s requisition lists. |
| `return` - [`Return`](#return) | Details about the specified return request from the unique ID for a &#x60;Return&#x60; object. |
| `returns` - [`Returns`](#returns) | Information about the customer&#x27;s return requests. |
| `reviews` - [`ProductReviews!`](#productreviews) | Contains the customer&#x27;s product reviews. |
| `reward_points` - [`RewardPoints`](#rewardpoints) | Customer reward points details. |
| `role` - [`CompanyRole`](#companyrole) | The role name and permissions assigned to the company user. |
| `status` - [`CompanyUserStatusEnum`](#companyuserstatusenum) | Indicates whether the company user is ACTIVE or INACTIVE. |
| `store_credit` - [`CustomerStoreCredit`](#customerstorecredit) | Store credit information applied for the logged in customer. |
| `structure_id` - [`ID!`](#id) | ID of the company structure |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](#string) | The customer&#x27;s Value-added tax (VAT) number (for corporate customers). |
| `team` - [`CompanyTeam`](#companyteam) | The team the company user is assigned to. |
| `telephone` - [`String`](#string) | The phone number of the company user. |
| `wishlist` - [`Wishlist!`](#wishlist) | Return a customer&#x27;s wish lists. *(Deprecated: Use &#x60;Customer.wishlists&#x60; or &#x60;Customer.wishlist_v2&#x60; instead.)* |
| `wishlist_v2` - [`Wishlist`](#wishlist) | Retrieve the wish list identified by the unique ID for a &#x60;Wishlist&#x60; object. |
| `wishlists` - [`[Wishlist]!`](#wishlist) | An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. |

#### Example

```json
{
  "addresses": [CustomerAddress],
  "allow_remote_shopping_assistance": true,
  "companies": UserCompaniesOutput,
  "compare_list": CompareList,
  "confirmation_status": "ACCOUNT_CONFIRMED",
  "created_at": "xyz789",
  "custom_attributes": [AttributeValueInterface],
  "date_of_birth": "xyz789",
  "default_billing": "abc123",
  "default_shipping": "abc123",
  "dob": "abc123",
  "email": "abc123",
  "firstname": "abc123",
  "gender": 987,
  "gift_registries": [GiftRegistry],
  "gift_registry": GiftRegistry,
  "group_id": 123,
  "id": 987,
  "is_subscribed": true,
  "job_title": "xyz789",
  "lastname": "abc123",
  "middlename": "abc123",
  "orders": CustomerOrders,
  "prefix": "xyz789",
  "purchase_order": PurchaseOrder,
  "purchase_order_approval_rule": PurchaseOrderApprovalRule,
  "purchase_order_approval_rule_metadata": PurchaseOrderApprovalRuleMetadata,
  "purchase_order_approval_rules": PurchaseOrderApprovalRules,
  "purchase_orders": PurchaseOrders,
  "purchase_orders_enabled": true,
  "requisition_lists": RequisitionLists,
  "return": Return,
  "returns": Returns,
  "reviews": ProductReviews,
  "reward_points": RewardPoints,
  "role": CompanyRole,
  "status": "ACTIVE",
  "store_credit": CustomerStoreCredit,
  "structure_id": 4,
  "suffix": "abc123",
  "taxvat": "xyz789",
  "team": CompanyTeam,
  "telephone": "xyz789",
  "wishlist": Wishlist,
  "wishlist_v2": Wishlist,
  "wishlists": [Wishlist]
}
```

<HorizontalLine />
