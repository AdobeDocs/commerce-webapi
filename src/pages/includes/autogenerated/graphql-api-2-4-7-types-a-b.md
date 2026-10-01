## Types

### AcceptNegotiableQuoteTemplateInput

Specifies the quote template id to accept quote template.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{"template_id": 4}
```

<HorizontalLine />

### AddBundleProductsToCartInput

Defines the bundle products to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The ID of the cart. |
| `cart_items` - [`[BundleProductCartItemInput]!`](#bundleproductcartiteminput) | An array of bundle products to add. |

#### Example

```json
{
  "cart_id": "abc123",
  "cart_items": [BundleProductCartItemInput]
}
```

<HorizontalLine />

### AddBundleProductsToCartOutput

Contains details about the cart after adding bundle products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | The cart after adding products. |

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
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The ID of the cart. |
| `cart_items` - [`[ConfigurableProductCartItemInput]!`](/reference/graphql/2-4-7/types-c-e.md#configurableproductcartiteminput) | An array of configurable products to add. |

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
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | The cart after adding products. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### AddDownloadableProductsToCartInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The ID of the cart. |
| `cart_items` - [`[DownloadableProductCartItemInput]!`](/reference/graphql/2-4-7/types-c-e.md#downloadableproductcartiteminput) | An array of downloadable products to add. |

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
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | The cart after adding products. |

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
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](/reference/graphql/2-4-7/types-f-i.md#giftregistrydynamicattributeinput) | Additional attributes specified as a code-value pair. |
| `email` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The email address of the registrant. |
| `firstname` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The first name of the registrant. |
| `lastname` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The last name of the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryDynamicAttributeInput
  ],
  "email": "xyz789",
  "firstname": "abc123",
  "lastname": "xyz789"
}
```

<HorizontalLine />

### AddGiftRegistryRegistrantsOutput

Contains the results of a request to add registrants.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](/reference/graphql/2-4-7/types-f-i.md#giftregistry) | The gift registry after adding registrants. |

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
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | The cart after products have been added. |
| `user_errors` - [`[CartUserInputError]!`](/reference/graphql/2-4-7/types-c-e.md#cartuserinputerror) | Contains errors encountered while adding an item to the cart. |

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
| `products` - [`[ID]!`](/reference/graphql/2-4-7/types-f-i.md#id) | An array of product IDs to add to the compare list. |
| `uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique identifier of the compare list to modify. |

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
| `requisition_list` - [`RequisitionList`](/reference/graphql/2-4-7/types-q-s.md#requisitionlist) | The requisition list after adding products. |

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
| `user_errors` - [`[WishListUserInputError]!`](/reference/graphql/2-4-7/types-t-z.md#wishlistuserinputerror) | An array of errors encountered while adding products to a wish list. |
| `wishlist` - [`Wishlist!`](/reference/graphql/2-4-7/types-t-z.md#wishlist) | Contains the wish list with all items that were successfully added. |

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
| `comment` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | Comment text. |
| `purchase_order_uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID of a purchase order. |

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
| `comment` - [`PurchaseOrderComment!`](/reference/graphql/2-4-7/types-k-p.md#purchaseordercomment) | The purchase order comment. |

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
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The ID to assign to the cart. |
| `purchase_order_uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | Purchase order unique ID. |
| `replace_existing_cart_items` - [`Boolean!`](#boolean) | Replace existing cart or merge items. |

#### Example

```json
{
  "cart_id": "abc123",
  "purchase_order_uid": "4",
  "replace_existing_cart_items": true
}
```

<HorizontalLine />

### AddRequisitionListItemToCartUserError

Contains details about why an attempt to add items to the requistion list failed.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | A description of the error. |
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
| `cart` - [`Cart`](/reference/graphql/2-4-7/types-c-e.md#cart) | The cart after adding requisition list items. |
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
| `comment_text` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The text added to the return request. |
| `return_uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `Return` object. |

#### Example

```json
{"comment_text": "xyz789", "return_uid": 4}
```

<HorizontalLine />

### AddReturnCommentOutput

Contains details about the return request.

#### Fields

| Field Name | Description |
|------------|-------------|
| `return` - [`Return`](/reference/graphql/2-4-7/types-q-s.md#return) | The modified return. |

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
| `carrier_uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `ReturnShippingCarrier` object. |
| `return_uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `Returns` object. |
| `tracking_number` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The shipping tracking number for this return request. |

#### Example

```json
{
  "carrier_uid": 4,
  "return_uid": 4,
  "tracking_number": "abc123"
}
```

<HorizontalLine />

### AddReturnTrackingOutput

Contains the response after adding tracking information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `return` - [`Return`](/reference/graphql/2-4-7/types-q-s.md#return) | Details about the modified return. |
| `return_shipping_tracking` - [`ReturnShippingTracking`](/reference/graphql/2-4-7/types-q-s.md#returnshippingtracking) | Details about shipping for a return. |

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
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The unique ID of a `Cart` object. |
| `cart_items` - [`[SimpleProductCartItemInput]!`](/reference/graphql/2-4-7/types-q-s.md#simpleproductcartiteminput) | An array of simple and group items to add. |

#### Example

```json
{
  "cart_id": "abc123",
  "cart_items": [SimpleProductCartItemInput]
}
```

<HorizontalLine />

### AddSimpleProductsToCartOutput

Contains details about the cart after adding simple or group products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | The cart after adding products. |

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
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The unique ID of a `Cart` object. |
| `cart_items` - [`[VirtualProductCartItemInput]!`](/reference/graphql/2-4-7/types-t-z.md#virtualproductcartiteminput) | An array of virtual products to add. |

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
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | The cart after adding products. |

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
| `add_wishlist_items_to_cart_user_errors` - [`[WishlistCartUserInputError]!`](/reference/graphql/2-4-7/types-t-z.md#wishlistcartuserinputerror) | An array of errors encountered while adding products to the customer's cart. |
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to add items to the customer's cart was successful. |
| `wishlist` - [`Wishlist!`](/reference/graphql/2-4-7/types-t-z.md#wishlist) | Contains the wish list with all items that were successfully added. |

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

### Aggregation

Contains information for each filterable option (such as price, category `UID`, and custom attributes).

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | Attribute code of the aggregation group. |
| `count` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The number of options in the aggregation group. |
| `label` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The aggregation display name. |
| `options` - [`[AggregationOption]`](#aggregationoption) | Array of options for the aggregation. |
| `position` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The relative position of the attribute in a layered navigation block. |

#### Example

```json
{
  "attribute_code": "abc123",
  "count": 123,
  "label": "abc123",
  "options": [AggregationOption],
  "position": 123
}
```

<HorizontalLine />

### AggregationOption

An implementation of `AggregationOptionInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `count` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The number of items that match the aggregation option. |
| `label` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The display label for an aggregation option. |
| `value` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The internal ID that represents the value of the option. |

#### Example

```json
{
  "count": 987,
  "label": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### AggregationOptionInterface

Defines aggregation option fields.

#### Fields

| Field Name | Description |
|------------|-------------|
| `count` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The number of items that match the aggregation option. |
| `label` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The display label for an aggregation option. |
| `value` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The internal ID that represents the value of the option. |

#### Possible Types

| AggregationOptionInterface Types |
|----------------|
| [`AggregationOption`](#aggregationoption) |

#### Example

```json
{
  "count": 987,
  "label": "xyz789",
  "value": "xyz789"
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
| `code` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The payment method code as defined in the payment gateway |
| `is_visible` - [`Boolean`](#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | Defines the payment intent (Authorize or Capture |
| `payment_source` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The payment source for the payment method |
| `sdk_params` - [`[SDKParams]`](/reference/graphql/2-4-7/types-q-s.md#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The relative order the payment method is displayed on the checkout page |
| `title` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The name displayed for the payment method |

#### Example

```json
{
  "button_styles": ButtonStyles,
  "code": "abc123",
  "is_visible": true,
  "payment_intent": "xyz789",
  "payment_source": "xyz789",
  "sdk_params": [SDKParams],
  "sort_order": "abc123",
  "title": "abc123"
}
```

<HorizontalLine />

### ApplePayMethodInput

Apple Pay inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_source` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The payment services order ID |
| `paypal_order_id` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | PayPal order ID |

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
| `code` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The coupon code the shopper applied to the card. |

#### Example

```json
{"code": "abc123"}
```

<HorizontalLine />

### AppliedGiftCard

Contains an applied gift card with applied and remaining balance.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_balance` - [`Money`](/reference/graphql/2-4-7/types-k-p.md#money) | The amount applied to the current cart. |
| `code` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The gift card account code. |
| `current_balance` - [`Money`](/reference/graphql/2-4-7/types-k-p.md#money) | The remaining balance on the gift card. |
| `expiration_date` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The expiration date of the gift card. |

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

### AppliedStoreCredit

Contains the applied and current balances.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_balance` - [`Money`](/reference/graphql/2-4-7/types-k-p.md#money) | The applied store credit balance to the current cart. |
| `current_balance` - [`Money`](/reference/graphql/2-4-7/types-k-p.md#money) | The current balance remaining on store credit. |
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
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The unique ID of a `Cart` object. |
| `coupon_code` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | A valid coupon code. |

#### Example

```json
{
  "cart_id": "abc123",
  "coupon_code": "abc123"
}
```

<HorizontalLine />

### ApplyCouponToCartOutput

Contains details about the cart after applying a coupon.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | The cart after applying a coupon. |

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
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The unique ID of a `Cart` object. |
| `coupon_codes` - [`[String]!`](/reference/graphql/2-4-7/types-q-s.md#string) | An array of valid coupon codes. |
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
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The unique ID that identifies the customer's cart. |
| `gift_card_code` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The gift card code to be applied to the cart. |

#### Example

```json
{
  "cart_id": "xyz789",
  "gift_card_code": "xyz789"
}
```

<HorizontalLine />

### ApplyGiftCardToCartOutput

Defines the possible output for the `applyGiftCardToCart` mutation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | Describes the contents of the specified shopping cart. |

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
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | The customer cart after reward points are applied. |

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
| `cart_id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The unique ID that identifies the customer's cart. |

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
| `cart` - [`Cart!`](/reference/graphql/2-4-7/types-c-e.md#cart) | The contents of the specified shopping cart. |

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
| `radius` - [`Int!`](/reference/graphql/2-4-7/types-f-i.md#int) | The radius for the search in KM. |
| `search_term` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The country code where search must be performed. Required parameter together with region, city or postcode. |

#### Example

```json
{"radius": 123, "search_term": "abc123"}
```

<HorizontalLine />

### AssignCompareListToCustomerOutput

Contains the results of the request to assign a compare list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `compare_list` - [`CompareList`](/reference/graphql/2-4-7/types-c-e.md#comparelist) | The contents of the customer's compare list. |
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
| `attribute_code` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `attribute_options` - [`[AttributeOption]`](#attributeoption) | Attribute options list. |
| `attribute_type` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The data type of the attribute. |
| `entity_type` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The type of entity that defines the attribute. |
| `input_type` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The frontend input type of the attribute. |
| `storefront_properties` - [`StorefrontProperties`](/reference/graphql/2-4-7/types-q-s.md#storefrontproperties) | Details about the storefront properties configured for the attribute. |

#### Example

```json
{
  "attribute_code": "xyz789",
  "attribute_options": [AttributeOption],
  "attribute_type": "abc123",
  "entity_type": "abc123",
  "input_type": "abc123",
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
  "is_comparable": false,
  "is_filterable": true,
  "is_filterable_in_search": false,
  "is_html_allowed_on_front": false,
  "is_searchable": true,
  "is_used_for_customer_segment": true,
  "is_used_for_price_rules": false,
  "is_used_for_promo_rules": false,
  "is_visible_in_advanced_search": false,
  "is_visible_on_front": true,
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

### AttributeInput

Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `entity_type` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The type of entity that defines the attribute. |

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
| `value` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The attribute option value. |

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
| `code` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `default_value` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | Default attribute value. |
| `entity_type` - [`AttributeEntityTypeEnum!`](#attributeentitytypeenum) | The type of entity that defines the attribute. |
| `frontend_class` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The frontend class of the attribute. |
| `frontend_input` - [`AttributeFrontendInputEnum`](#attributefrontendinputenum) | The frontend input type of the attribute. |
| `is_required` - [`Boolean!`](#boolean) | Whether the attribute value is required. |
| `is_unique` - [`Boolean!`](#boolean) | Whether the attribute value must be unique. |
| `label` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The label assigned to the attribute. |
| `options` - [`[CustomAttributeOptionInterface]!`](/reference/graphql/2-4-7/types-c-e.md#customattributeoptioninterface) | Attribute options. |

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
| `message` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | Attribute metadata retrieval error message. |
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
| `label` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The label assigned to the attribute option. |
| `value` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The attribute option value. |

#### Example

```json
{
  "label": "abc123",
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
| `label` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The label assigned to the attribute option. |
| `value` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The attribute option value. |

#### Example

```json
{
  "is_default": false,
  "label": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### AttributeSelectedOption

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The attribute selected option label. |
| `value` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The attribute selected option value. |

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
| `label` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The attribute selected option label. |
| `value` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The attribute selected option value. |

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
| `code` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The attribute code. |
| `selected_options` - [`[AttributeSelectedOptionInterface]!`](#attributeselectedoptioninterface) |  |

#### Example

```json
{
  "code": "4",
  "selected_options": [AttributeSelectedOptionInterface]
}
```

<HorizontalLine />

### AttributeValue

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The attribute code. |
| `value` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The attribute value. |

#### Example

```json
{
  "code": "4",
  "value": "xyz789"
}
```

<HorizontalLine />

### AttributeValueInput

Specifies the value for attribute.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The code of the attribute. |
| `selected_options` - [`[AttributeInputSelectedOption]`](#attributeinputselectedoption) | An array containing selected options for a select or multiselect attribute. |
| `value` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The value assigned to the attribute. |

#### Example

```json
{
  "attribute_code": "xyz789",
  "selected_options": [AttributeInputSelectedOption],
  "value": "xyz789"
}
```

<HorizontalLine />

### AttributeValueInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The attribute code. |

#### Possible Types

| AttributeValueInterface Types |
|----------------|
| [`AttributeValue`](#attributevalue) |
| [`AttributeSelectedOptions`](#attributeselectedoptions) |

#### Example

```json
{"code": "4"}
```

<HorizontalLine />

### AttributesFormOutput

Metadata of EAV attributes associated to form

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[AttributeMetadataError]!`](#attributemetadataerror) | Errors of retrieving certain attributes metadata. |
| `items` - [`[CustomAttributeMetadataInterface]!`](/reference/graphql/2-4-7/types-c-e.md#customattributemetadatainterface) | Requested attributes metadata. |

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
| `items` - [`[CustomAttributeMetadataInterface]!`](/reference/graphql/2-4-7/types-c-e.md#customattributemetadatainterface) | Requested attributes metadata. |

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
| `code` - [`CurrencyEnum!`](/reference/graphql/2-4-7/types-c-e.md#currencyenum) | 3-letter currency code, for example USD. |
| `symbol` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | Currency symbol, for example $. |

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
| `code` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The payment method code. |
| `is_deferred` - [`Boolean!`](#boolean) | If the payment method is an online integration |
| `title` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The payment method title. |

#### Example

```json
{
  "code": "xyz789",
  "is_deferred": false,
  "title": "xyz789"
}
```

<HorizontalLine />

### AvailableShippingMethod

Contains details about the possible shipping methods and carriers.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](/reference/graphql/2-4-7/types-k-p.md#money) | The cost of shipping using this shipping method. |
| `available` - [`Boolean!`](#boolean) | Indicates whether this shipping method can be applied to the cart. |
| `base_amount` - [`Money`](/reference/graphql/2-4-7/types-k-p.md#money) |  *(Deprecated: The field should not be used on the storefront.)* |
| `carrier_code` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | A string that identifies a commercial carrier or an offline shipping method. |
| `carrier_title` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The label for the carrier code. |
| `error_message` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | Describes an error condition. |
| `method_code` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | A shipping method code associated with a carrier. The value could be null if no method is available. |
| `method_title` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The label for the shipping method code. The value could be null if no method is available. |
| `price_excl_tax` - [`Money!`](/reference/graphql/2-4-7/types-k-p.md#money) | The cost of shipping using this shipping method, excluding tax. |
| `price_incl_tax` - [`Money!`](/reference/graphql/2-4-7/types-k-p.md#money) | The cost of shipping using this shipping method, including tax. |

#### Example

```json
{
  "amount": Money,
  "available": true,
  "base_amount": Money,
  "carrier_code": "xyz789",
  "carrier_title": "abc123",
  "error_message": "abc123",
  "method_code": "abc123",
  "method_title": "abc123",
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
| `address` - [`CartAddressInput`](/reference/graphql/2-4-7/types-c-e.md#cartaddressinput) | Defines a billing address. |
| `customer_address_id` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | An ID from the customer's address book that uniquely identifies the address to be used for billing. |
| `same_as_shipping` - [`Boolean`](#boolean) | Indicates whether to set the billing address to be the same as the existing shipping address on the cart. |
| `use_for_shipping` - [`Boolean`](#boolean) | Indicates whether to set the shipping address to be the same as this billing address. |

#### Example

```json
{
  "address": CartAddressInput,
  "customer_address_id": 123,
  "same_as_shipping": true,
  "use_for_shipping": false
}
```

<HorizontalLine />

### BillingCartAddress

Contains details about the billing address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The company specified for the billing or shipping address. |
| `country` - [`CartAddressCountry!`](/reference/graphql/2-4-7/types-c-e.md#cartaddresscountry) | An object containing the country label and code. |
| `custom_attributes` - [`[AttributeValueInterface]!`](#attributevalueinterface) | The custom attribute values of the billing or shipping address. |
| `customer_notes` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) |  *(Deprecated: The field is used only in shipping address.)* |
| `fax` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The customer's fax number. |
| `firstname` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The first name of the customer or guest. |
| `lastname` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The last name of the customer or guest. |
| `middlename` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CartAddressRegion`](/reference/graphql/2-4-7/types-c-e.md#cartaddressregion) | An object containing the region label and code. |
| `street` - [`[String]!`](/reference/graphql/2-4-7/types-q-s.md#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The telephone number for the billing or shipping address. |
| `uid` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The unique id of the customer address. |
| `vat_id` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The VAT company number for billing or shipping address. |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country": CartAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_notes": "abc123",
  "fax": "xyz789",
  "firstname": "xyz789",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "xyz789",
  "region": CartAddressRegion,
  "street": ["xyz789"],
  "suffix": "abc123",
  "telephone": "xyz789",
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
| `device_data` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) |  |
| `public_hash` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) |  |

#### Example

```json
{
  "device_data": "abc123",
  "public_hash": "abc123"
}
```

<HorizontalLine />

### BraintreeInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `device_data` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. |
| `is_active_payment_token_enabler` - [`Boolean!`](#boolean) | States whether the payment details (Credit/Debit Card, PayPal Account) entered by a customer should be tokenized for later usage. Required only if Vault is enabled for the relevant Braintree payment integration. |
| `payment_method_nonce` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The one-time payment token generated by Braintree payment gateway based on payment details (Card, PayPal). Required field to make sale transaction. |

#### Example

```json
{
  "device_data": "xyz789",
  "is_active_payment_token_enabler": true,
  "payment_method_nonce": "xyz789"
}
```

<HorizontalLine />

### BraintreeVaultInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `device_data` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) |  |
| `public_hash` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) |  |

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
| `category_id` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The ID of the category. *(Deprecated: Use `category_uid` instead.)* |
| `category_level` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The category level. |
| `category_name` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The display name of the category. |
| `category_uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `Breadcrumb` object. |
| `category_url_key` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The URL key of the category. |
| `category_url_path` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The URL path of the category. |

#### Example

```json
{
  "category_id": 123,
  "category_level": 123,
  "category_name": "xyz789",
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
| `available_gift_wrapping` - [`[GiftWrapping]!`](/reference/graphql/2-4-7/types-f-i.md#giftwrapping) | The list of available gift wrapping options for the cart item. |
| `bundle_options` - [`[SelectedBundleOption]!`](/reference/graphql/2-4-7/types-q-s.md#selectedbundleoption) | An array containing the bundle options the shopper selected. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/2-4-7/types-q-s.md#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `discount` - [`[Discount]`](/reference/graphql/2-4-7/types-c-e.md#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](/reference/graphql/2-4-7/types-c-e.md#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](/reference/graphql/2-4-7/types-f-i.md#giftmessage) | The entered gift message for the cart item |
| `gift_wrapping` - [`GiftWrapping`](/reference/graphql/2-4-7/types-f-i.md#giftwrapping) | The selected gift wrapping for the cart item. |
| `id` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) |  *(Deprecated: Use `uid` instead.)* |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | Line item min qty in quote template |
| `note_from_buyer` - [`[ItemNote]`](/reference/graphql/2-4-7/types-f-i.md#itemnote) | The buyer's quote line item note. |
| `note_from_seller` - [`[ItemNote]`](/reference/graphql/2-4-7/types-f-i.md#itemnote) | The seller's quote line item note. |
| `prices` - [`CartItemPrices`](/reference/graphql/2-4-7/types-c-e.md#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](/reference/graphql/2-4-7/types-k-p.md#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](/reference/graphql/2-4-7/types-f-i.md#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `CartItemInterface` object. |

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
  "uid": 4
}
```

<HorizontalLine />

### BundleCreditMemoItem

Defines bundle product options for `CreditMemoItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](/reference/graphql/2-4-7/types-f-i.md#itemselectedbundleoption) | A list of bundle options that are assigned to a bundle product that is part of a credit memo. |
| `discounts` - [`[Discount]`](/reference/graphql/2-4-7/types-c-e.md#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `CreditMemoItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/2-4-7/types-k-p.md#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/2-4-7/types-k-p.md#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of refunded items. |

#### Example

```json
{
  "bundle_options": [ItemSelectedBundleOption],
  "discounts": [Discount],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_refunded": 123.45
}
```

<HorizontalLine />

### BundleInvoiceItem

Defines bundle product options for `InvoiceItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](/reference/graphql/2-4-7/types-f-i.md#itemselectedbundleoption) | A list of bundle options that are assigned to an invoiced bundle product. |
| `discounts` - [`[Discount]`](/reference/graphql/2-4-7/types-c-e.md#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for an `InvoiceItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/2-4-7/types-k-p.md#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/2-4-7/types-k-p.md#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of invoiced items. |

#### Example

```json
{
  "bundle_options": [ItemSelectedBundleOption],
  "discounts": [Discount],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 123.45
}
```

<HorizontalLine />

### BundleItem

Defines an individual item within a bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | An ID assigned to each type of item in a bundle product. *(Deprecated: Use `uid` instead)* |
| `options` - [`[BundleItemOption]`](#bundleitemoption) | An array of additional options for this bundle item. |
| `position` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | A number indicating the sequence order of this item compared to the other bundle items. |
| `price_range` - [`PriceRange!`](/reference/graphql/2-4-7/types-k-p.md#pricerange) | The range of prices for the product |
| `required` - [`Boolean`](#boolean) | Indicates whether the item must be included in the bundle. |
| `sku` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The SKU of the bundle product. |
| `title` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The display name of the item. |
| `type` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The input type that the customer uses to select the item. Examples include radio button and checkbox. |
| `uid` - [`ID`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `BundleItem` object. |

#### Example

```json
{
  "option_id": 123,
  "options": [BundleItemOption],
  "position": 123,
  "price_range": PriceRange,
  "required": false,
  "sku": "xyz789",
  "title": "xyz789",
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
| `id` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The ID assigned to the bundled item option. *(Deprecated: Use `uid` instead)* |
| `is_default` - [`Boolean`](#boolean) | Indicates whether this option is the default option. |
| `label` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The text that identifies the bundled item option. |
| `position` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | When a bundle item contains multiple options, the relative position of this option compared to the other options. |
| `price` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The price of the selected option. |
| `price_type` - [`PriceTypeEnum`](/reference/graphql/2-4-7/types-k-p.md#pricetypeenum) | One of FIXED, PERCENT, or DYNAMIC. |
| `product` - [`ProductInterface`](/reference/graphql/2-4-7/types-k-p.md#productinterface) | Contains details about this product option. |
| `qty` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | Indicates the quantity of this specific bundle item. *(Deprecated: Use `quantity` instead.)* |
| `quantity` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The quantity of this specific bundle item. |
| `uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `BundleItemOption` object. |

#### Example

```json
{
  "can_change_quantity": false,
  "id": 123,
  "is_default": false,
  "label": "abc123",
  "position": 987,
  "price": 123.45,
  "price_type": "FIXED",
  "product": ProductInterface,
  "qty": 123.45,
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
| `id` - [`Int!`](/reference/graphql/2-4-7/types-f-i.md#int) | The ID of the option. |
| `quantity` - [`Float!`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of the selected item to add to the cart. |
| `value` - [`[String]!`](/reference/graphql/2-4-7/types-q-s.md#string) | An array with the chosen value of the option. |

#### Example

```json
{
  "id": 987,
  "quantity": 123.45,
  "value": ["xyz789"]
}
```

<HorizontalLine />

### BundleOrderItem

Defines bundle product options for `OrderItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](/reference/graphql/2-4-7/types-f-i.md#itemselectedbundleoption) | A list of bundle options that are assigned to the bundle product. |
| `discounts` - [`[Discount]`](/reference/graphql/2-4-7/types-c-e.md#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](/reference/graphql/2-4-7/types-k-p.md#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](/reference/graphql/2-4-7/types-f-i.md#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](/reference/graphql/2-4-7/types-f-i.md#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for an `OrderItemInterface` object. |
| `product` - [`ProductInterface`](/reference/graphql/2-4-7/types-k-p.md#productinterface) | The ProductInterface object, which contains details about the base product |
| `product_name` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/2-4-7/types-k-p.md#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The SKU of the base product. |
| `product_type` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of refunded items. |
| `quantity_returned` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](/reference/graphql/2-4-7/types-k-p.md#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The status of the order item. |

#### Example

```json
{
  "bundle_options": [ItemSelectedBundleOption],
  "discounts": [Discount],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "product": ProductInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "xyz789",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
  "quantity_returned": 987.65,
  "quantity_shipped": 123.45,
  "selected_options": [OrderItemOption],
  "status": "abc123"
}
```

<HorizontalLine />

### BundleProduct

Defines basic features of a bundle product and contains multiple BundleItems.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_set_id` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](/reference/graphql/2-4-7/types-c-e.md#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `country_of_manufacture` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The product's country of origin. |
| `created_at` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](/reference/graphql/2-4-7/types-k-p.md#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](/reference/graphql/2-4-7/types-k-p.md#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](/reference/graphql/2-4-7/types-c-e.md#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `dynamic_price` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamic price. |
| `dynamic_sku` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamic SKU. |
| `dynamic_weight` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamically calculated weight. |
| `gift_message_available` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The ID number assigned to the product. *(Deprecated: Use the `uid` field instead.)* |
| `image` - [`ProductImage`](/reference/graphql/2-4-7/types-k-p.md#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | Indicates whether the product can be returned. |
| `items` - [`[BundleItem]`](#bundleitem) | An array containing information about individual bundle items. |
| `manufacturer` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | A number representing the product's manufacturer. *(Deprecated: Use the `custom_attributes` field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](/reference/graphql/2-4-7/types-k-p.md#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](/reference/graphql/2-4-7/types-k-p.md#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use `media_gallery` instead.)* |
| `meta_description` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](/reference/graphql/2-4-7/types-c-e.md#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | If the product has multiple options, determines where they appear on the product page. |
| `price` - [`ProductPrices`](/reference/graphql/2-4-7/types-k-p.md#productprices) | Indicates the price of an item. *(Deprecated: Use `price_range` for product price information.)* |
| `price_details` - [`PriceDetails`](/reference/graphql/2-4-7/types-k-p.md#pricedetails) | The price details of the main product |
| `price_range` - [`PriceRange!`](/reference/graphql/2-4-7/types-k-p.md#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](/reference/graphql/2-4-7/types-t-z.md#tierprice) | An array of `TierPrice` objects. |
| `price_view` - [`PriceViewEnum`](/reference/graphql/2-4-7/types-k-p.md#priceviewenum) | One of PRICE_RANGE or AS_LOW_AS. |
| `product_links` - [`[ProductLinksInterface]`](/reference/graphql/2-4-7/types-k-p.md#productlinksinterface) | An array of `ProductLinks` objects. |
| `rating_summary` - [`Float!`](/reference/graphql/2-4-7/types-f-i.md#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](/reference/graphql/2-4-7/types-f-i.md#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](/reference/graphql/2-4-7/types-k-p.md#productinterface) | An array of related products. |
| `relative_url` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](/reference/graphql/2-4-7/types-f-i.md#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](/reference/graphql/2-4-7/types-k-p.md#productreviews) | The list of products reviews. |
| `ship_bundle_items` - [`ShipBundleItemsEnum`](/reference/graphql/2-4-7/types-q-s.md#shipbundleitemsenum) | Indicates whether to ship bundle items together or individually. |
| `short_description` - [`ComplexTextValue`](/reference/graphql/2-4-7/types-c-e.md#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](/reference/graphql/2-4-7/types-k-p.md#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The discounted price of the product. |
| `special_to_date` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](/reference/graphql/2-4-7/types-k-p.md#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](/reference/graphql/2-4-7/types-k-p.md#productimage) | The relative path to the product's thumbnail image. |
| `tier_price` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](/reference/graphql/2-4-7/types-k-p.md#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](/reference/graphql/2-4-7/types-t-z.md#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use `__typename` instead.)* |
| `uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `ProductInterface` object. |
| `updated_at` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](/reference/graphql/2-4-7/types-k-p.md#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) |  *(Deprecated: Use product's `canonical_url` or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](/reference/graphql/2-4-7/types-t-z.md#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](/reference/graphql/2-4-7/types-t-z.md#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |
| `weight` - [`Float`](/reference/graphql/2-4-7/types-f-i.md#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "attribute_set_id": 987,
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "color": 123,
  "country_of_manufacture": "xyz789",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "dynamic_price": true,
  "dynamic_sku": false,
  "dynamic_weight": false,
  "gift_message_available": "abc123",
  "id": 987,
  "image": ProductImage,
  "is_returnable": "abc123",
  "items": [BundleItem],
  "manufacturer": 123,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "abc123",
  "meta_title": "xyz789",
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
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
  "review_count": 987,
  "reviews": ProductReviews,
  "ship_bundle_items": "TOGETHER",
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 123.45,
  "special_to_date": "xyz789",
  "staged": true,
  "stock_status": "IN_STOCK",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "tier_price": 987.65,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "xyz789",
  "uid": "4",
  "updated_at": "abc123",
  "upsell_products": [ProductInterface],
  "url_key": "xyz789",
  "url_path": "xyz789",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "abc123",
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
| `customizable_options` - [`[CustomizableOptionInput]`](/reference/graphql/2-4-7/types-c-e.md#customizableoptioninput) | The ID and value of the option. |
| `data` - [`CartItemInput!`](/reference/graphql/2-4-7/types-c-e.md#cartiteminput) | The quantity and SKU of the bundle product. |

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
| `bundle_options` - [`[SelectedBundleOption]!`](/reference/graphql/2-4-7/types-q-s.md#selectedbundleoption) | An array of selected options for a bundle product. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/2-4-7/types-q-s.md#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](/reference/graphql/2-4-7/types-k-p.md#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](/reference/graphql/2-4-7/types-f-i.md#float) | The quantity of the product added to the requisition list. |
| `uid` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID of an item in a requisition list. |

#### Example

```json
{
  "bundle_options": [SelectedBundleOption],
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 987.65,
  "uid": 4
}
```

<HorizontalLine />

### BundleShipmentItem

Defines bundle product options for `ShipmentItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](/reference/graphql/2-4-7/types-f-i.md#itemselectedbundleoption) | A list of bundle options that are assigned to a shipped product. |
| `id` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `ShipmentItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/2-4-7/types-k-p.md#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/2-4-7/types-k-p.md#money) | The sale price for the base product. |
| `product_sku` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](/reference/graphql/2-4-7/types-f-i.md#float) | The number of shipped items. |

#### Example

```json
{
  "bundle_options": [ItemSelectedBundleOption],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_shipped": 123.45
}
```

<HorizontalLine />

### BundleWishlistItem

Defines bundle product options for `WishlistItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](/reference/graphql/2-4-7/types-q-s.md#string) | The date and time the item was added to the wish list. |
| `bundle_options` - [`[SelectedBundleOption]`](/reference/graphql/2-4-7/types-q-s.md#selectedbundleoption) | An array containing information about the selected bundle items. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/2-4-7/types-q-s.md#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The description of the item. |
| `id` - [`ID!`](/reference/graphql/2-4-7/types-f-i.md#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface`](/reference/graphql/2-4-7/types-k-p.md#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](/reference/graphql/2-4-7/types-f-i.md#float) | The quantity of this wish list item. |

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
| `color` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The button color |
| `height` - [`Int`](/reference/graphql/2-4-7/types-f-i.md#int) | The button height in pixels |
| `label` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The button label |
| `layout` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The button layout |
| `shape` - [`String`](/reference/graphql/2-4-7/types-q-s.md#string) | The button shape |
| `tagline` - [`Boolean`](#boolean) | Indicates whether the tagline is displayed |
| `use_default_height` - [`Boolean`](#boolean) | Defines if the button uses default height. If the value is false, the value of height is used |

#### Example

```json
{
  "color": "xyz789",
  "height": 123,
  "label": "abc123",
  "layout": "xyz789",
  "shape": "xyz789",
  "tagline": false,
  "use_default_height": true
}
```

<HorizontalLine />
