## Types

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
  "cart_id": "xyz789",
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
{"products": [4], "uid": 4}
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
  "message": "xyz789",
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
| `carrier_uid` - [`ID!`](#id) | The unique ID for a `ReturnShippingCarrier` object. |
| `return_uid` - [`ID!`](#id) | The unique ID for a `Returns` object. |
| `tracking_number` - [`String!`](#string) | The shipping tracking number for this return request. |

#### Example

```json
{
  "carrier_uid": 4,
  "return_uid": 4,
  "tracking_number": "xyz789"
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `cart_items` - [`[VirtualProductCartItemInput]!`](#virtualproductcartiteminput) | An array of virtual products to add. |

#### Example

```json
{
  "cart_id": "xyz789",
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
| `add_wishlist_items_to_cart_user_errors` - [`[WishlistCartUserInputError]!`](#wishlistcartuserinputerror) | An array of errors encountered while adding products to the customer's cart. |
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to add items to the customer's cart was successful. |
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
  "attribute_code": "xyz789",
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
| `count` - [`Int`](#int) | The number of items that match the aggregation option. |
| `label` - [`String`](#string) | The display label for an aggregation option. |
| `value` - [`String!`](#string) | The internal ID that represents the value of the option. |

#### Example

```json
{
  "count": 123,
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
  "count": 987,
  "label": "abc123",
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
{"includeDirectChildrenOnly": true}
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `coupon_code` - [`String!`](#string) | A valid coupon code. |

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
| `cart` - [`Cart!`](#cart) | The cart after applying a coupon. |

#### Example

```json
{"cart": Cart}
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
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer's cart. |

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
{"radius": 123, "search_term": "xyz789"}
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
  "attribute_type": "abc123",
  "entity_type": "xyz789",
  "input_type": "abc123",
  "storefront_properties": StorefrontProperties
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
  "entity_type": "abc123"
}
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
  "label": "abc123",
  "value": "abc123"
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
  "code": "abc123",
  "is_deferred": true,
  "title": "abc123"
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
  "error_message": "abc123",
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
| `same_as_shipping` - [`Boolean`](#boolean) | Indicates whether to set the billing address to be the same as the existing shipping address on the cart. |
| `use_for_shipping` - [`Boolean`](#boolean) | Indicates whether to set the shipping address to be the same as this billing address. |

#### Example

```json
{
  "address": CartAddressInput,
  "customer_address_id": 123,
  "same_as_shipping": false,
  "use_for_shipping": false
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
| `customer_notes` - [`String`](#string) |  *(Deprecated: The field is used only in shipping address.)* |
| `firstname` - [`String!`](#string) | The first name of the customer or guest. |
| `lastname` - [`String!`](#string) | The last name of the customer or guest. |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `region` - [`CartAddressRegion`](#cartaddressregion) | An object containing the region label and code. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |
| `uid` - [`String!`](#string) | The unique id of the customer address. |
| `vat_id` - [`String`](#string) | The VAT company number for billing or shipping address. |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country": CartAddressCountry,
  "customer_notes": "xyz789",
  "firstname": "abc123",
  "lastname": "xyz789",
  "postcode": "abc123",
  "region": CartAddressRegion,
  "street": ["xyz789"],
  "telephone": "abc123",
  "uid": "xyz789",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### Boolean

The `Boolean` scalar type represents `true` or `false`.

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
  "device_data": "xyz789",
  "public_hash": "xyz789"
}
```

<HorizontalLine />

### BraintreeInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `device_data` - [`String`](#string) | Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. |
| `is_active_payment_token_enabler` - [`Boolean!`](#boolean) | States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. |
| `payment_method_nonce` - [`String!`](#string) | The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. |

#### Example

```json
{
  "device_data": "abc123",
  "is_active_payment_token_enabler": true,
  "payment_method_nonce": "xyz789"
}
```

<HorizontalLine />

### Breadcrumb

Contains details about an individual category that comprises a breadcrumb.

#### Fields

| Field Name | Description |
|------------|-------------|
| `category_id` - [`Int`](#int) | The ID of the category. *(Deprecated: Use `category_uid` instead.)* |
| `category_level` - [`Int`](#int) | The category level. |
| `category_name` - [`String`](#string) | The display name of the category. |
| `category_uid` - [`ID!`](#id) | The unique ID for a `Breadcrumb` object. |
| `category_url_key` - [`String`](#string) | The URL key of the category. |
| `category_url_path` - [`String`](#string) | The URL path of the category. |

#### Example

```json
{
  "category_id": 987,
  "category_level": 123,
  "category_name": "xyz789",
  "category_uid": "4",
  "category_url_key": "xyz789",
  "category_url_path": "xyz789"
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
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message for the cart item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the cart item. |
| `id` - [`String!`](#string) |  *(Deprecated: Use `uid` instead.)* |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a `CartItemInterface` object. |

#### Example

```json
{
  "available_gift_wrapping": [GiftWrapping],
  "bundle_options": [SelectedBundleOption],
  "customizable_options": [SelectedCustomizableOption],
  "errors": [CartItemError],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "xyz789",
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

### BundleInvoiceItem

Defines bundle product options for `InvoiceItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `bundle_options` - [`[ItemSelectedBundleOption]`](#itemselectedbundleoption) | A list of bundle options that are assigned to an invoiced bundle product. |
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
  "discounts": [Discount],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_invoiced": 987.65
}
```

<HorizontalLine />

### BundleItem

Defines an individual item within a bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | An ID assigned to each type of item in a bundle product. *(Deprecated: Use `uid` instead)* |
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
  "option_id": 987,
  "options": [BundleItemOption],
  "position": 987,
  "price_range": PriceRange,
  "required": false,
  "sku": "xyz789",
  "title": "abc123",
  "type": "xyz789",
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
| `id` - [`Int`](#int) | The ID assigned to the bundled item option. *(Deprecated: Use `uid` instead)* |
| `is_default` - [`Boolean`](#boolean) | Indicates whether this option is the default option. |
| `label` - [`String`](#string) | The text that identifies the bundled item option. |
| `position` - [`Int`](#int) | When a bundle item contains multiple options, the relative position of this option compared to the other options. |
| `price` - [`Float`](#float) | The price of the selected option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | One of FIXED, PERCENT, or DYNAMIC. |
| `product` - [`ProductInterface`](#productinterface) | Contains details about this product option. |
| `qty` - [`Float`](#float) | Indicates the quantity of this specific bundle item. *(Deprecated: Use `quantity` instead.)* |
| `quantity` - [`Float`](#float) | The quantity of this specific bundle item. |
| `uid` - [`ID!`](#id) | The unique ID for a `BundleItemOption` object. |

#### Example

```json
{
  "can_change_quantity": false,
  "id": 123,
  "is_default": true,
  "label": "xyz789",
  "position": 123,
  "price": 987.65,
  "price_type": "FIXED",
  "product": ProductInterface,
  "qty": 987.65,
  "quantity": 123.45,
  "uid": "4"
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
  "quantity": 987.65,
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
| `id` - [`ID!`](#id) | The unique ID for an `OrderItemInterface` object. |
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
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "abc123",
  "product_url_key": "abc123",
  "quantity_canceled": 987.65,
  "quantity_invoiced": 123.45,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
  "quantity_returned": 123.45,
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
| `activity` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `category_gear` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `climate` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `collar` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `color` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product's country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `dynamic_price` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamic price. |
| `dynamic_sku` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamic SKU. |
| `dynamic_weight` - [`Boolean`](#boolean) | Indicates whether the bundle product has a dynamically calculated weight. |
| `eco_collection` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `erin_recommends` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `features_bags` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `format` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `gender` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the `uid` field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `items` - [`[BundleItem]`](#bundleitem) | An array containing information about individual bundle items. |
| `manufacturer` - [`Int`](#int) | A number representing the product's manufacturer. *(Deprecated: Use the `custom_attributes` field instead.)* |
| `material` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use `media_gallery` instead.)* |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `pattern` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `performance_fabric` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use `price_range` for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of `TierPrice` objects. |
| `price_view` - [`PriceViewEnum`](#priceviewenum) | One of PRICE_RANGE or AS_LOW_AS. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of `ProductLinks` objects. |
| `purpose` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `sale` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `ship_bundle_items` - [`ShipBundleItemsEnum`](#shipbundleitemsenum) | Indicates whether to ship bundle items together or individually. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `size` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `sleeve` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `strap_bags` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `style_bags` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `style_bottom` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `style_general` - [`String`](#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
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
  "activity": "xyz789",
  "attribute_set_id": 987,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "category_gear": "xyz789",
  "climate": "xyz789",
  "collar": "abc123",
  "color": 987,
  "country_of_manufacture": "xyz789",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "description": ComplexTextValue,
  "dynamic_price": false,
  "dynamic_sku": false,
  "dynamic_weight": true,
  "eco_collection": 123,
  "erin_recommends": 123,
  "features_bags": "abc123",
  "format": 987,
  "gender": "abc123",
  "gift_message_available": "xyz789",
  "id": 987,
  "image": ProductImage,
  "is_returnable": "abc123",
  "items": [BundleItem],
  "manufacturer": 123,
  "material": "abc123",
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "xyz789",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "name": "abc123",
  "new": 987,
  "new_from_date": "abc123",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "pattern": "xyz789",
  "performance_fabric": 987,
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "price_view": "PRICE_RANGE",
  "product_links": [ProductLinksInterface],
  "purpose": 987,
  "rating_summary": 123.45,
  "redirect_code": 987,
  "related_products": [ProductInterface],
  "relative_url": "abc123",
  "review_count": 123,
  "reviews": ProductReviews,
  "sale": 123,
  "ship_bundle_items": "TOGETHER",
  "short_description": ComplexTextValue,
  "size": 123,
  "sku": "abc123",
  "sleeve": "abc123",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 123.45,
  "special_to_date": "abc123",
  "staged": true,
  "stock_status": "IN_STOCK",
  "strap_bags": "abc123",
  "style_bags": "xyz789",
  "style_bottom": "xyz789",
  "style_general": "xyz789",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "tier_price": 987.65,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "abc123",
  "uid": "4",
  "updated_at": "abc123",
  "upsell_products": [ProductInterface],
  "url_key": "xyz789",
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
  "id": 4,
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
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "abc123",
  "bundle_options": [SelectedBundleOption],
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
  "id": 4,
  "product": ProductInterface,
  "quantity": 123.45
}
```

<HorizontalLine />
