## Types

### CancelNegotiableQuoteTemplateInput

Specifies the quote template id of the quote template to cancel

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancellation_comment` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A comment to provide reason of cancellation. |
| `template_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{
  "cancellation_comment": "xyz789",
  "template_id": 4
}
```

<HorizontalLine />

### CancelOrderError

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CancelOrderErrorCode!`](#cancelordererrorcode) | An error code that is specific to cancel order. |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A localized error message. |

#### Example

```json
{
  "code": "ORDER_CANCELLATION_DISABLED",
  "message": "abc123"
}
```

<HorizontalLine />

### CancelOrderErrorCode

#### Values

| Enum Value | Description |
|------------|-------------|
| `ORDER_CANCELLATION_DISABLED` |  |
| `UNDEFINED` |  |
| `UNAUTHORISED` |  |
| `ORDER_NOT_FOUND` |  |
| `PARTIAL_ORDER_ITEM_SHIPPED` |  |
| `INVALID_ORDER_STATUS` |  |

#### Example

```json
""ORDER_CANCELLATION_DISABLED""
```

<HorizontalLine />

### CancelOrderInput

Defines the order to cancel.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `order_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of an `Order` type. |
| `reason` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Cancellation reason. |

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
| `error` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Error encountered while cancelling the order. |
| `errorV2` - [`CancelOrderError`](#cancelordererror) |  |
| `order` - [`CustomerOrder`](#customerorder) | Updated customer order. |

#### Example

```json
{
  "error": "abc123",
  "errorV2": CancelOrderError,
  "order": CustomerOrder
}
```

<HorizontalLine />

### CancellationReason

#### Fields

| Field Name | Description |
|------------|-------------|
| `description` - [`String!`](/reference/graphql/saas/types-q-s.md#string) |  |

#### Example

```json
{"description": "abc123"}
```

<HorizontalLine />

### Card

#### Fields

| Field Name | Description |
|------------|-------------|
| `authentication_result` - [`AuthenticationResult`](/reference/graphql/saas/types-a-b.md#authenticationresult) | Authentication result |
| `bin_details` - [`CardBin`](#cardbin) | Card bin details |
| `card_expiry_month` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Expiration month of the card |
| `card_expiry_year` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Expiration year of the card |
| `last_digits` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Last four digits of the card |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Name on the card |

#### Example

```json
{
  "authentication_result": AuthenticationResult,
  "bin_details": CardBin,
  "card_expiry_month": "xyz789",
  "card_expiry_year": "xyz789",
  "last_digits": "xyz789",
  "name": "abc123"
}
```

<HorizontalLine />

### CardBin

#### Fields

| Field Name | Description |
|------------|-------------|
| `bin` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Card bin number |

#### Example

```json
{"bin": "xyz789"}
```

<HorizontalLine />

### CardPaymentSourceInput

The card payment source information

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `billing_address` - [`BillingAddressPaymentSourceInput!`](/reference/graphql/saas/types-a-b.md#billingaddresspaymentsourceinput) | The billing address of the card |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name on the cardholder |

#### Example

```json
{
  "billing_address": BillingAddressPaymentSourceInput,
  "name": "abc123"
}
```

<HorizontalLine />

### CardPaymentSourceOutput

The card payment source information

#### Fields

| Field Name | Description |
|------------|-------------|
| `brand` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The brand of the card |
| `expiry` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The expiry of the card |
| `last_digits` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The last digits of the card |

#### Example

```json
{
  "brand": "abc123",
  "expiry": "abc123",
  "last_digits": "xyz789"
}
```

<HorizontalLine />

### Cart

Contains the contents and other details about a guest or customer cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_coupons` - [`[AppliedCoupon]`](/reference/graphql/saas/types-a-b.md#appliedcoupon) | An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code. |
| `applied_gift_cards` - [`[AppliedGiftCard]`](/reference/graphql/saas/types-a-b.md#appliedgiftcard) | An array of gift card items applied to the cart. |
| `applied_reward_points` - [`RewardPointsAmount`](/reference/graphql/saas/types-q-s.md#rewardpointsamount) | The amount of reward points applied to the cart. |
| `applied_store_credit` - [`AppliedStoreCredit`](/reference/graphql/saas/types-a-b.md#appliedstorecredit) | Store credit information applied to the cart. |
| `available_gift_wrappings` - [`[GiftWrapping]!`](/reference/graphql/saas/types-f-i.md#giftwrapping) | The list of available gift wrapping options for the cart. |
| `available_payment_methods` - [`[AvailablePaymentMethod]`](/reference/graphql/saas/types-a-b.md#availablepaymentmethod) | An array of available payment methods. |
| `billing_address` - [`BillingCartAddress`](/reference/graphql/saas/types-a-b.md#billingcartaddress) | The billing address assigned to the cart. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the cart |
| `email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the guest or customer. |
| `gift_message` - [`GiftMessage`](/reference/graphql/saas/types-f-i.md#giftmessage) | The entered gift message for the cart |
| `gift_receipt_included` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the shopper requested gift receipt for the cart. |
| `gift_wrapping` - [`GiftWrapping`](/reference/graphql/saas/types-f-i.md#giftwrapping) | The selected gift wrapping for the cart. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `Cart` object. |
| `is_virtual` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the cart contains only virtual products. |
| `itemsV2` - [`CartItems`](#cartitems) |  |
| `prices` - [`CartPrices`](#cartprices) | Pricing details for the quote. |
| `printed_card_included` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the shopper requested a printed card for the cart. |
| `rules` - [`[CartRuleStorefront]`](#cartrulestorefront) | Provides applied cart rules in the current active cart |
| `selected_payment_method` - [`SelectedPaymentMethod`](/reference/graphql/saas/types-q-s.md#selectedpaymentmethod) | Indicates which payment method was applied to the cart. |
| `shipping_addresses` - [`[ShippingCartAddress]!`](/reference/graphql/saas/types-q-s.md#shippingcartaddress) | An array of shipping addresses assigned to the cart. |
| `total_quantity` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | The total number of items in the cart. |

#### Example

```json
{
  "applied_coupons": [AppliedCoupon],
  "applied_gift_cards": [AppliedGiftCard],
  "applied_reward_points": RewardPointsAmount,
  "applied_store_credit": AppliedStoreCredit,
  "available_gift_wrappings": [GiftWrapping],
  "available_payment_methods": [AvailablePaymentMethod],
  "billing_address": BillingCartAddress,
  "custom_attributes": [CustomAttribute],
  "email": "abc123",
  "gift_message": GiftMessage,
  "gift_receipt_included": true,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "is_virtual": false,
  "itemsV2": CartItems,
  "prices": CartPrices,
  "printed_card_included": true,
  "rules": [CartRuleStorefront],
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
| `code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The country code. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The display label for the country. |

#### Example

```json
{
  "code": "xyz789",
  "label": "xyz789"
}
```

<HorizontalLine />

### CartAddressInput

Defines the billing or shipping address to be applied to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company specified for the billing or shipping address. |
| `country_code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The country code and label for the billing or shipping address. |
| `custom_attributes` - [`[AttributeValueInput]`](/reference/graphql/saas/types-a-b.md#attributevalueinput) | The custom attribute values of the billing or shipping address. |
| `fax` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's fax number. |
| `firstname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The first name of the customer or guest. |
| `lastname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The last name of the customer or guest. |
| `middlename` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A string that defines the state or province of the billing or shipping address. |
| `region_id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | An integer that defines the state or province of the billing or shipping address. |
| `save_in_address_book` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Determines whether to save the address in the customer's address book. The default value is true. |
| `street` - [`[String]!`](/reference/graphql/saas/types-q-s.md#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The telephone number for the billing or shipping address. |
| `vat_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The VAT company number for billing or shipping address. |

#### Example

```json
{
  "city": "xyz789",
  "company": "abc123",
  "country_code": "abc123",
  "custom_attributes": [AttributeValueInput],
  "fax": "xyz789",
  "firstname": "xyz789",
  "lastname": "abc123",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "xyz789",
  "region": "abc123",
  "region_id": 123,
  "save_in_address_book": true,
  "street": ["abc123"],
  "suffix": "abc123",
  "telephone": "xyz789",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### CartAddressInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company specified for the billing or shipping address. |
| `country` - [`CartAddressCountry!`](#cartaddresscountry) | An object containing the country label and code. |
| `custom_attributes` - [`[AttributeValueInterface]!`](/reference/graphql/saas/types-a-b.md#attributevalueinterface) | The custom attribute values of the billing or shipping address. |
| `customer_address_uid` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The unique ID from the customer's address book that uniquely identifies the address. |
| `fax` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's fax number. |
| `firstname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The first name of the customer or guest. |
| `id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | Id of the customer address. *(Deprecated: Use `customer_address_uid` instead.)* |
| `lastname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The last name of the customer or guest. |
| `middlename` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CartAddressRegion`](#cartaddressregion) | An object containing the region label and code. |
| `street` - [`[String]!`](/reference/graphql/saas/types-q-s.md#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The telephone number for the billing or shipping address. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique id of the customer cart address. |
| `vat_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The VAT company number for billing or shipping address. |

#### Possible Types

| CartAddressInterface Types |
|----------------|
| [`BillingCartAddress`](/reference/graphql/saas/types-a-b.md#billingcartaddress) |
| [`ShippingCartAddress`](/reference/graphql/saas/types-q-s.md#shippingcartaddress) |

#### Example

```json
{
  "city": "xyz789",
  "company": "abc123",
  "country": CartAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": "4",
  "fax": "abc123",
  "firstname": "xyz789",
  "id": 987,
  "lastname": "abc123",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "abc123",
  "region": CartAddressRegion,
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "xyz789",
  "uid": "4",
  "vat_id": "xyz789"
}
```

<HorizontalLine />

### CartAddressRegion

Contains details about the region in a billing or shipping address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The state or province code. |
| `label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display label for the region. |
| `region_id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "code": "abc123",
  "label": "abc123",
  "region_id": 123
}
```

<HorizontalLine />

### CartCustomAttributesInput

Defines a cart custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The cart ID. |
| `custom_attributes` - [`[CustomAttributeInput]`](#customattributeinput) | An array of custom attributes for cart. |

#### Example

```json
{
  "cart_id": "abc123",
  "custom_attributes": [CustomAttributeInput]
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

### CartItemCustomAttributesInput

Defines a cart item custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The cart ID. |
| `cart_item_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The cart item ID. |
| `custom_attributes` - [`[CustomAttributeInput]`](#customattributeinput) | An array of custom attributes for cart item. |

#### Example

```json
{
  "cart_id": "xyz789",
  "cart_item_id": "abc123",
  "custom_attributes": [CustomAttributeInput]
}
```

<HorizontalLine />

### CartItemError

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CartItemErrorType!`](#cartitemerrortype) | An error code that describes the error encountered |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A localized error message |

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
| `parent_sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | For a child product, the SKU of its parent product. |
| `quantity` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | The amount or number of an item to add. |
| `selected_options` - [`[ID]`](/reference/graphql/saas/types-f-i.md#id) | The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. |
| `sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the product. |

#### Example

```json
{
  "entered_options": [EnteredOptionInput],
  "parent_sku": "xyz789",
  "quantity": 987.65,
  "selected_options": [4],
  "sku": "xyz789"
}
```

<HorizontalLine />

### CartItemInterface

An interface for products in a cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `backorder_message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Customer-facing hint when the line is salable on notify backorders with insufficient physical quantity; null otherwise. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the cart item |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `is_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | True if requested quantity is less than available stock, false otherwise. *(Deprecated: Use `is_salable` instead. It indicates whether the line can be purchased, including backorder configuration.)* |
| `is_salable` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | True when the item can be purchased and should not block checkout: stock status is in stock and either physical quantity covers the requested quantity or backorders are allowed. |
| `max_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Shortage or unavailability message for the line; null when the item is salable. |
| `note_from_buyer` - [`[ItemNote]`](/reference/graphql/saas/types-f-i.md#itemnote) | The buyer's quote line item note. |
| `note_from_seller` - [`[ItemNote]`](/reference/graphql/saas/types-f-i.md#itemnote) | The seller's quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about an item in the cart. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CartItemInterface` object. |

#### Possible Types

| CartItemInterface Types |
|----------------|
| [`BundleCartItem`](/reference/graphql/saas/types-a-b.md#bundlecartitem) |
| [`ConfigurableCartItem`](#configurablecartitem) |
| [`DownloadableCartItem`](#downloadablecartitem) |
| [`GiftCardCartItem`](/reference/graphql/saas/types-f-i.md#giftcardcartitem) |
| [`SimpleCartItem`](/reference/graphql/saas/types-q-s.md#simplecartitem) |
| [`VirtualCartItem`](/reference/graphql/saas/types-t-z.md#virtualcartitem) |

#### Example

```json
{
  "backorder_message": "xyz789",
  "custom_attributes": [CustomAttribute],
  "discount": [Discount],
  "errors": [CartItemError],
  "is_available": false,
  "is_salable": true,
  "max_qty": 123.45,
  "min_qty": 123.45,
  "not_available_message": "xyz789",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "uid": "4"
}
```

<HorizontalLine />

### CartItemPrices

Contains details about the price of the item, including taxes and discounts.

#### Fields

| Field Name | Description |
|------------|-------------|
| `catalog_discount` - [`ProductDiscount`](/reference/graphql/saas/types-k-p.md#productdiscount) | The price discount for the unit price of the item represents the difference between its regular price and final price. |
| `discounts` - [`[Discount]`](#discount) | An array of discounts to be applied to the cart item. |
| `fixed_product_taxes` - [`[FixedProductTax]`](/reference/graphql/saas/types-f-i.md#fixedproducttax) | An array of FPTs applied to the cart item. |
| `original_item_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The value of the original unit price for the item, including discounts. |
| `original_row_total` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The value of the original price multiplied by the quantity of the item. |
| `price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. |
| `price_including_tax` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. |
| `row_catalog_discount` - [`ProductDiscount`](/reference/graphql/saas/types-k-p.md#productdiscount) | The price discount multiplied by the item quantity represents the total difference between the regular price and the final price for the entire quote item. |
| `row_total` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The value of the price multiplied by the quantity of the item. |
| `row_total_including_tax` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The value of `row_total` plus the tax applied to the item. |
| `total_item_discount` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The total of all discounts applied to the item. |

#### Example

```json
{
  "catalog_discount": ProductDiscount,
  "discounts": [Discount],
  "fixed_product_taxes": [FixedProductTax],
  "original_item_price": Money,
  "original_row_total": Money,
  "price": Money,
  "price_including_tax": Money,
  "row_catalog_discount": ProductDiscount,
  "row_total": Money,
  "row_total_including_tax": Money,
  "total_item_discount": Money
}
```

<HorizontalLine />

### CartItemSelectedOptionValuePrice

Contains details about the price of a selected customizable value.

#### Fields

| Field Name | Description |
|------------|-------------|
| `type` - [`PriceTypeEnum!`](/reference/graphql/saas/types-k-p.md#pricetypeenum) | Indicates whether the price type is fixed, percent, or dynamic. |
| `units` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A string that describes the unit of the value. |
| `value` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | A price value. |

#### Example

```json
{
  "type": "FIXED",
  "units": "abc123",
  "value": 987.65
}
```

<HorizontalLine />

### CartItemUpdateInput

A single item to be updated.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_item_uid` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CartItemInterface` object. |
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | An array that defines customizable options for the product. |
| `gift_message` - [`GiftMessageInput`](/reference/graphql/saas/types-f-i.md#giftmessageinput) | Gift message details for the cart item |
| `gift_wrapping_id` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `GiftWrapping` object to be used for the cart item. |
| `quantity` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The new quantity of the item. |

#### Example

```json
{
  "cart_item_uid": "4",
  "customizable_options": [CustomizableOptionInput],
  "gift_message": GiftMessageInput,
  "gift_wrapping_id": 4,
  "quantity": 123.45
}
```

<HorizontalLine />

### CartItems

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CartItemInterface]!`](#cartiteminterface) | An array of products that have been added to the cart. |
| `page_info` - [`SearchResultPageInfo`](/reference/graphql/saas/types-q-s.md#searchresultpageinfo) | Metadata for pagination rendering. |
| `total_count` - [`Int!`](/reference/graphql/saas/types-f-i.md#int) | The number of returned cart items. |

#### Example

```json
{
  "items": [CartItemInterface],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### CartPrices

Contains details about the final price of items in the cart, including discount and tax information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_taxes` - [`[CartTaxItem]`](#carttaxitem) | An array containing the names and amounts of taxes applied to each item in the cart. |
| `custom_fees` - [`[OopeCustomFee]`](/reference/graphql/saas/types-k-p.md#oopecustomfee) | Custom fees applied to the cart via out-of-process webhooks. |
| `discounts` - [`[Discount]`](#discount) | An array containing cart rule discounts, store credit and gift cards applied to the cart. |
| `gift_options` - [`GiftOptionsPrices`](/reference/graphql/saas/types-f-i.md#giftoptionsprices) | The list of prices for the selected gift options. |
| `grand_total` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The total, including discounts, taxes, shipping, and other fees. |
| `grand_total_excluding_tax` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The total of the cart, including discounts, shipping, and other fees without tax. |
| `subtotal_excluding_tax` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The subtotal without any applied taxes. |
| `subtotal_including_tax` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The subtotal including any applied taxes. |
| `subtotal_with_discount_excluding_tax` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The subtotal with any discounts applied, but not taxes. |

#### Example

```json
{
  "applied_taxes": [CartTaxItem],
  "custom_fees": [OopeCustomFee],
  "discounts": [Discount],
  "gift_options": GiftOptionsPrices,
  "grand_total": Money,
  "grand_total_excluding_tax": Money,
  "subtotal_excluding_tax": Money,
  "subtotal_including_tax": Money,
  "subtotal_with_discount_excluding_tax": Money
}
```

<HorizontalLine />

### CartRuleStorefront

#### Fields

| Field Name | Description |
|------------|-------------|
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CartRule` object. |

#### Example

```json
{"uid": 4}
```

<HorizontalLine />

### CartTaxItem

Contains tax information about an item in the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The amount of tax applied to the item. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The description of the tax. |

#### Example

```json
{
  "amount": Money,
  "label": "abc123"
}
```

<HorizontalLine />

### CartUserInputError

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CartUserInputErrorType!`](#cartuserinputerrortype) | A cart-specific error code. |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A localized error message. |

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
| `COULD_NOT_FIND_CART_ITEM` |  |
| `REQUIRED_PARAMETER_MISSING` |  |
| `INVALID_PARAMETER_VALUE` |  |
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
| `code` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `default_value` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Default attribute value. |
| `entity_type` - [`AttributeEntityTypeEnum!`](/reference/graphql/saas/types-a-b.md#attributeentitytypeenum) | The type of entity that defines the attribute. |
| `frontend_class` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The frontend class of the attribute. |
| `frontend_input` - [`AttributeFrontendInputEnum`](/reference/graphql/saas/types-a-b.md#attributefrontendinputenum) | The frontend input type of the attribute. |
| `is_comparable` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute can be compared against another or not. |
| `is_filterable` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute can be filtered or not. |
| `is_filterable_in_search` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute can be filtered in search or not. |
| `is_html_allowed_on_front` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute can use HTML on front or not. |
| `is_required` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Whether the attribute value is required. |
| `is_searchable` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute can be searched or not. |
| `is_unique` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Whether the attribute value must be unique. |
| `is_used_for_price_rules` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute can be used for price rules or not. |
| `is_used_for_promo_rules` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute is used for promo rules or not. |
| `is_visible_in_advanced_search` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute is visible in advanced search or not. |
| `is_visible_on_front` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute is visible on front or not. |
| `is_wysiwyg_enabled` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute has WYSIWYG enabled or not. |
| `label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The label assigned to the attribute. |
| `options` - [`[CustomAttributeOptionInterface]!`](#customattributeoptioninterface) | Attribute options. |
| `swatch_input_type` - [`SwatchInputTypeEnum`](/reference/graphql/saas/types-q-s.md#swatchinputtypeenum) | Input type of the swatch attribute option. |
| `update_product_preview_image` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether update product preview image or not. |
| `use_product_image_for_swatch` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether use product image for swatch or not. |
| `used_in_product_listing` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Whether a product or category attribute is used in product listing or not. |

#### Example

```json
{
  "apply_to": ["SIMPLE"],
  "code": 4,
  "default_value": "xyz789",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "xyz789",
  "frontend_input": "BOOLEAN",
  "is_comparable": false,
  "is_filterable": false,
  "is_filterable_in_search": true,
  "is_html_allowed_on_front": true,
  "is_required": true,
  "is_searchable": true,
  "is_unique": false,
  "is_used_for_price_rules": false,
  "is_used_for_promo_rules": true,
  "is_visible_in_advanced_search": true,
  "is_visible_on_front": true,
  "is_wysiwyg_enabled": false,
  "label": "abc123",
  "options": [CustomAttributeOptionInterface],
  "swatch_input_type": "BOOLEAN",
  "update_product_preview_image": true,
  "use_product_image_for_swatch": false,
  "used_in_product_listing": true
}
```

<HorizontalLine />

### CategoryBucket

New category bucket for federation

#### Fields

| Field Name | Description |
|------------|-------------|
| `count` - [`Int!`](/reference/graphql/saas/types-f-i.md#int) |  |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) |  |
| `path` - [`String!`](/reference/graphql/saas/types-q-s.md#string) |  |
| `title` - [`String!`](/reference/graphql/saas/types-q-s.md#string) |  |

#### Example

```json
{
  "count": 123,
  "id": "4",
  "path": "abc123",
  "title": "xyz789"
}
```

<HorizontalLine />

### CategoryBucketInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) |  |

#### Possible Types

| CategoryBucketInterface Types |
|----------------|
| [`CategoryBucket`](#categorybucket) |

#### Example

```json
{"id": 4}
```

<HorizontalLine />

### CategoryInterface

Contains the full set of attributes that can be returned in a category search.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_sort_by` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) |  |
| `breadcrumbs` - [`[Breadcrumb]`](/reference/graphql/saas/types-a-b.md#breadcrumb) | An array of breadcrumb items. |
| `canonical_url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. |
| `children_count` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `custom_layout_update_file` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `default_sort_by` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The attribute to use for sorting. |
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An optional description of the category. |
| `display_mode` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `filter_price_range` - [`Float`](/reference/graphql/saas/types-f-i.md#float) |  |
| `image` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `include_in_menu` - [`Int`](/reference/graphql/saas/types-f-i.md#int) |  |
| `is_anchor` - [`Int`](/reference/graphql/saas/types-f-i.md#int) |  |
| `landing_page` - [`Int`](/reference/graphql/saas/types-f-i.md#int) |  |
| `level` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The depth of the category within the tree. |
| `meta_description` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `meta_keywords` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `meta_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name of the category. |
| `path` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The full category path. |
| `path_in_store` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The category path within the store. |
| `position` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The position of the category relative to other categories at the same level in tree. |
| `product_count` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CategoryInterface` object. |
| `url_key` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The URL key assigned to the category. |
| `url_path` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The URL path assigned to the category. |

#### Possible Types

| CategoryInterface Types |
|----------------|
| [`CategoryTree`](#categorytree) |

#### Example

```json
{
  "available_sort_by": ["abc123"],
  "breadcrumbs": [Breadcrumb],
  "canonical_url": "abc123",
  "children_count": "xyz789",
  "custom_layout_update_file": "xyz789",
  "default_sort_by": "abc123",
  "description": "abc123",
  "display_mode": "xyz789",
  "filter_price_range": 123.45,
  "image": "xyz789",
  "include_in_menu": 987,
  "is_anchor": 123,
  "landing_page": 987,
  "level": 123,
  "meta_description": "xyz789",
  "meta_keywords": "abc123",
  "meta_title": "xyz789",
  "name": "abc123",
  "path": "xyz789",
  "path_in_store": "xyz789",
  "position": 123,
  "product_count": 987,
  "uid": 4,
  "url_key": "xyz789",
  "url_path": "xyz789"
}
```

<HorizontalLine />

### CategoryTree

Contains the hierarchy of categories.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_sort_by` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) |  |
| `breadcrumbs` - [`[Breadcrumb]`](/reference/graphql/saas/types-a-b.md#breadcrumb) | An array of breadcrumb items. |
| `canonical_url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. |
| `children_count` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `custom_layout_update_file` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `default_sort_by` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The attribute to use for sorting. |
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An optional description of the category. |
| `display_mode` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `filter_price_range` - [`Float`](/reference/graphql/saas/types-f-i.md#float) |  |
| `image` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `include_in_menu` - [`Int`](/reference/graphql/saas/types-f-i.md#int) |  |
| `is_anchor` - [`Int`](/reference/graphql/saas/types-f-i.md#int) |  |
| `landing_page` - [`Int`](/reference/graphql/saas/types-f-i.md#int) |  |
| `level` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The depth of the category within the tree. |
| `meta_description` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `meta_keywords` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `meta_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name of the category. |
| `path` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The full category path. |
| `path_in_store` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The category path within the store. |
| `position` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The position of the category relative to other categories at the same level in tree. |
| `product_count` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CategoryInterface` object. |
| `url_key` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The URL key assigned to the category. |
| `url_path` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The URL path assigned to the category. |

#### Example

```json
{
  "available_sort_by": ["xyz789"],
  "breadcrumbs": [Breadcrumb],
  "canonical_url": "xyz789",
  "children_count": "abc123",
  "custom_layout_update_file": "xyz789",
  "default_sort_by": "xyz789",
  "description": "abc123",
  "display_mode": "xyz789",
  "filter_price_range": 987.65,
  "image": "abc123",
  "include_in_menu": 123,
  "is_anchor": 987,
  "landing_page": 987,
  "level": 123,
  "meta_description": "xyz789",
  "meta_keywords": "xyz789",
  "meta_title": "abc123",
  "name": "xyz789",
  "path": "xyz789",
  "path_in_store": "xyz789",
  "position": 123,
  "product_count": 987,
  "uid": "4",
  "url_key": "xyz789",
  "url_path": "abc123"
}
```

<HorizontalLine />

### CategoryView

Represents a category. Contains information about a category, including the category ID, the category name, the category path, the category URL key, the category URL path, and the category roles.

#### Fields

| Field Name | Description |
|------------|-------------|
| `availableSortBy` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | List of available sort by options. For example, `name`, `position` or `size`. |
| `children` - [`[String!]`](/reference/graphql/saas/types-q-s.md#string) | List of child category IDs. For example, `123`, `456` or `789`. |
| `defaultSortBy` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Default sort by option. For example, `name`, `position` or `size`. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | Category ID. For example, `123`, `456` or `789`. *(Deprecated: 'CategoryView' is deprecated for use as a Bucket in 'productSearch' facet (to be removed after Sep 1, 2024). Use 'CategoryBucket' instead.)* |
| `level` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The level of the category. The root category is a level 1 category. For example, men -> level 1, men/clothing -> level 2, men/clothing/shorts -> level 3 |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Category name. For example, `Electronics`, `Clothing` or `Books`. |
| `parentId` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Parent category ID. For example, `123`, `456` or `789`. |
| `position` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The position of the category in sort order. For example, `1`, `2`, `3` or `10`. |
| `path` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Category path. For example, `/electronics/laptops`, `/clothing/shirts` or `/books/fiction`. *(Deprecated: 'CategoryView' is deprecated for use as a Bucket in 'productSearch' facet (to be removed after Sep 1, 2024). Use 'CategoryBucket' instead.)* |
| `roles` - [`[String!]!`](/reference/graphql/saas/types-q-s.md#string) | List of roles for the category. For example, `show_on_plp`, `show_in_pdp` or `show_in_search`. |
| `urlKey` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Category URL key. For example, `electronics`, `clothing` or `books`. |
| `urlPath` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Category URL path. For example, `/electronics/laptops`, `/clothing/shirts` or `/books/fiction`. |
| `count` - [`Int!`](/reference/graphql/saas/types-f-i.md#int) |  *(Deprecated: 'CategoryView' is deprecated for use as a Bucket in 'productSearch' facet (to be removed after Sep 1, 2024). Use 'CategoryBucket' instead.)* |
| `title` - [`String!`](/reference/graphql/saas/types-q-s.md#string) |  *(Deprecated: 'CategoryView' is deprecated for use as a Bucket in 'productSearch' facet (to be removed after Sep 1, 2024). Use 'CategoryBucket' instead.)* |

#### Example

```json
{
  "availableSortBy": ["abc123"],
  "children": ["xyz789"],
  "defaultSortBy": "xyz789",
  "id": 4,
  "level": 123,
  "name": "xyz789",
  "parentId": "xyz789",
  "position": 987,
  "path": "xyz789",
  "roles": ["xyz789"],
  "urlKey": "abc123",
  "urlPath": "xyz789",
  "count": 123,
  "title": "abc123"
}
```

<HorizontalLine />

### CategoryViewInterface

Base interface defining essential category fields shared across all category views.

#### Fields

| Field Name | Description |
|------------|-------------|
| `availableSortBy` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | List of available sort by options. For example, name, size or position. |
| `defaultSortBy` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Default sort by option. For example, name, size or position. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | Category ID. For example, `123`, `456` or `789`. *(Deprecated: 'CategoryView' is deprecated for use as a Bucket in 'productSearch' facet (to be removed after Sep 1, 2024). Use 'CategoryBucket' instead.)* |
| `level` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The level of the category. The root category is a level 1 category. For example, men -> level 1, men/clothing -> level 2, men/clothing/shorts -> level 3 |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Category name. For example, `Electronics`, `Clothing` or `Books`. |
| `path` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Category path. For example, `/electronics/laptops`, `/clothing/shirts` or `/books/fiction`. |
| `roles` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | List of roles for the category. For example, `show_on_plp`, `show_in_pdp` or `show_in_search`. |
| `urlKey` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Category URL key. For example, `electronics`, `clothing` or `books`. |
| `urlPath` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Category URL path. For example, `/electronics/laptops`, `/clothing/shirts` or `/books/fiction`. |

#### Possible Types

| CategoryViewInterface Types |
|----------------|
| [`CategoryView`](#categoryview) |

#### Example

```json
{
  "availableSortBy": ["xyz789"],
  "defaultSortBy": "xyz789",
  "id": "4",
  "level": 123,
  "name": "abc123",
  "path": "xyz789",
  "roles": ["abc123"],
  "urlKey": "abc123",
  "urlPath": "abc123"
}
```

<HorizontalLine />

### CheckoutAgreement

Defines details about an individual checkout agreement.

#### Fields

| Field Name | Description |
|------------|-------------|
| `agreement_id` - [`Int!`](/reference/graphql/saas/types-f-i.md#int) | The ID for a checkout agreement. |
| `checkbox_text` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The checkbox text for the checkout agreement. |
| `content` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Required. The text of the agreement. |
| `content_height` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The height of the text box where the Terms and Conditions statement appears during checkout. |
| `is_html` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the `content` text is in HTML format. |
| `mode` - [`CheckoutAgreementMode!`](#checkoutagreementmode) | Indicates whether agreements are accepted automatically or manually. |
| `name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name given to the condition. |

#### Example

```json
{
  "agreement_id": 123,
  "checkbox_text": "xyz789",
  "content": "xyz789",
  "content_height": "abc123",
  "is_html": false,
  "mode": "AUTO",
  "name": "xyz789"
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
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A localized error message. |
| `path` - [`[String]!`](/reference/graphql/saas/types-q-s.md#string) | The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors |

#### Example

```json
{
  "code": "REORDER_NOT_AVAILABLE",
  "message": "abc123",
  "path": ["xyz789"]
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

### ClearCustomerCartOutput

Output of the request to clear the customer cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart`](#cart) | The cart after clearing items. |
| `status` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether cart was cleared. |

#### Example

```json
{"cart": Cart, "status": false}
```

<HorizontalLine />

### CloseNegotiableQuoteError

#### Types

| Union Types |
|-------------|
| [`NegotiableQuoteInvalidStateError`](/reference/graphql/saas/types-k-p.md#negotiablequoteinvalidstateerror) |
| [`NoSuchEntityUidError`](/reference/graphql/saas/types-k-p.md#nosuchentityuiderror) |
| [`InternalError`](/reference/graphql/saas/types-f-i.md#internalerror) |

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
| `quote_uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of a `NegotiableQuote` object. |

#### Example

```json
{
  "errors": [NegotiableQuoteInvalidStateError],
  "quote_uid": "4"
}
```

<HorizontalLine />

### CloseNegotiableQuoteOperationResult

#### Types

| Union Types |
|-------------|
| [`NegotiableQuoteUidOperationSuccess`](/reference/graphql/saas/types-k-p.md#negotiablequoteuidoperationsuccess) |
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
| `quote_uids` - [`[ID]!`](/reference/graphql/saas/types-f-i.md#id) | A list of unique IDs from `NegotiableQuote` objects. |

#### Example

```json
{"quote_uids": [4]}
```

<HorizontalLine />

### CloseNegotiableQuotesOutput

Contains the closed negotiable quotes and other negotiable quotes the company user can view.

#### Fields

| Field Name | Description |
|------------|-------------|
| `negotiable_quotes` - [`NegotiableQuotesOutput`](/reference/graphql/saas/types-k-p.md#negotiablequotesoutput) | A list of negotiable quotes that can be viewed by the logged-in customer |
| `operation_results` - [`[CloseNegotiableQuoteOperationResult]!`](#closenegotiablequoteoperationresult) | An array of closed negotiable quote UIDs and details about any errors. |
| `result_status` - [`BatchMutationStatus!`](/reference/graphql/saas/types-a-b.md#batchmutationstatus) | The status of the request to close one or more negotiable quotes. |

#### Example

```json
{
  "negotiable_quotes": NegotiableQuotesOutput,
  "operation_results": [
    NegotiableQuoteUidOperationSuccess
  ],
  "result_status": "SUCCESS"
}
```

<HorizontalLine />

### ColorSwatchData

#### Fields

| Field Name | Description |
|------------|-------------|
| `value` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The value can be represented as color (HEX code), image link, or text. |

#### Example

```json
{"value": "abc123"}
```

<HorizontalLine />

### CommerceOptimizerContext

Commerce Optimizer entities

#### Fields

| Field Name | Description |
|------------|-------------|
| `priceBookId` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The priceBookId for current customer session. |

#### Example

```json
{"priceBookId": "4"}
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
| `order` - [`SortEnum!`](/reference/graphql/saas/types-q-s.md#sortenum) | Indicates whether to return results in ascending or descending order. |

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
| `available_payment_methods` - [`[AvailablePaymentMethod]`](/reference/graphql/saas/types-a-b.md#availablepaymentmethod) | Available payment methods for the company with proper B2B configuration and company-specific filtering. |
| `available_shipping_methods` - [`[CompanyAvailableShippingMethod]`](#companyavailableshippingmethod) | Available shipping carriers for the company with proper B2B configuration and company-specific filtering. |
| `company_admin` - [`Customer`](#customer) | An object containing information about the company administrator. |
| `credit` - [`CompanyCredit!`](#companycredit) | Company credit balances and limits. |
| `credit_history` - [`CompanyCreditHistory!`](#companycredithistory) | Details about the history of company credit operations. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the company |
| `email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the company contact. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of a `Company` object. |
| `legal_address` - [`CompanyLegalAddress`](#companylegaladdress) | The address where the company is registered to conduct business. |
| `legal_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The full legal name of the company. |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the company. |
| `payment_methods` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | The list of payment methods available to a company. |
| `reseller_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The resale number that is assigned to the company for tax reporting purposes. |
| `role` - [`CompanyRole`](#companyrole) | A company role filtered by the unique ID of a `CompanyRole` object. |
| `roles` - [`CompanyRoles!`](#companyroles) | An object that contains a list of company roles. |
| `sales_representative` - [`CompanySalesRepresentative`](#companysalesrepresentative) | An object containing information about the company sales representative. |
| `status` - [`CompanyStatusEnum`](#companystatusenum) | The current status of the company. |
| `structure` - [`CompanyStructure`](#companystructure) | The company structure of teams and customers in depth-first order. |
| `team` - [`CompanyTeam`](#companyteam) | The company team data filtered by the unique ID for a `CompanyTeam` object. |
| `user` - [`Customer`](#customer) | A company user filtered by the unique ID of a `Customer` object. |
| `users` - [`CompanyUsers`](#companyusers) | An object that contains a list of company users based on activity status. |
| `vat_tax_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes. |

#### Example

```json
{
  "acl_resources": [CompanyAclResource],
  "available_payment_methods": [AvailablePaymentMethod],
  "available_shipping_methods": [
    CompanyAvailableShippingMethod
  ],
  "company_admin": Customer,
  "credit": CompanyCredit,
  "credit_history": CompanyCreditHistory,
  "custom_attributes": [CustomAttribute],
  "email": "xyz789",
  "id": "4",
  "legal_address": CompanyLegalAddress,
  "legal_name": "abc123",
  "name": "abc123",
  "payment_methods": ["abc123"],
  "reseller_id": "xyz789",
  "role": CompanyRole,
  "roles": CompanyRoles,
  "sales_representative": CompanySalesRepresentative,
  "status": "PENDING",
  "structure": CompanyStructure,
  "team": CompanyTeam,
  "user": Customer,
  "users": CompanyUsers,
  "vat_tax_id": "abc123"
}
```

<HorizontalLine />

### CompanyAclResource

Contains details about the access control list settings of a resource.

#### Fields

| Field Name | Description |
|------------|-------------|
| `children` - [`[CompanyAclResource]`](#companyaclresource) | An array of sub-resources. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CompanyAclResource` object. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The sort order of an ACL resource. |
| `text` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The label assigned to the ACL resource. |

#### Example

```json
{
  "children": [CompanyAclResource],
  "id": "4",
  "sort_order": 123,
  "text": "abc123"
}
```

<HorizontalLine />

### CompanyAdminInput

Defines the input schema for creating a company administrator.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `custom_attributes` - [`[AttributeValueInput]`](/reference/graphql/saas/types-a-b.md#attributevalueinput) | The company administrator's custom attributes. |
| `email` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The email address of the company administrator. |
| `firstname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The company administrator's first name. |
| `gender` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The company administrator's gender (Male - 1, Female - 2, Not Specified - 3). |
| `job_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The job title of the company administrator. |
| `lastname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The company administrator's last name. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The phone number of the company administrator. |

#### Example

```json
{
  "custom_attributes": [AttributeValueInput],
  "email": "abc123",
  "firstname": "xyz789",
  "gender": 123,
  "job_title": "abc123",
  "lastname": "abc123",
  "telephone": "xyz789"
}
```

<HorizontalLine />

### CompanyAvailableShippingMethod

Describes a carrier-level shipping option available to the company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) |  |
| `title` - [`String!`](/reference/graphql/saas/types-q-s.md#string) |  |

#### Example

```json
{
  "code": "xyz789",
  "title": "xyz789"
}
```

<HorizontalLine />

### CompanyBasicInfo

The minimal required information to identify and display the company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of a `Company` object. |
| `is_admin` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the company is the admin (parent) company in the returned relation hierarchy. |
| `legal_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The full legal name of the company. |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the company. |
| `status` - [`CompanyStatusEnum`](#companystatusenum) | The current status of the company. |

#### Example

```json
{
  "id": 4,
  "is_admin": true,
  "legal_name": "xyz789",
  "name": "abc123",
  "status": "PENDING"
}
```

<HorizontalLine />

### CompanyCreateInput

Defines the input schema for creating a new company.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `company_admin` - [`CompanyAdminInput!`](#companyadmininput) | Defines the company administrator. |
| `company_email` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The email address of the company contact. |
| `company_name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the company to create. |
| `legal_address` - [`CompanyLegalAddressCreateInput!`](#companylegaladdresscreateinput) | Defines legal address data of the company. |
| `legal_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The full legal name of the company. |
| `reseller_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The resale number that is assigned to the company for tax reporting purposes. |
| `vat_tax_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes. |

#### Example

```json
{
  "company_admin": CompanyAdminInput,
  "company_email": "abc123",
  "company_name": "abc123",
  "legal_address": CompanyLegalAddressCreateInput,
  "legal_name": "xyz789",
  "reseller_id": "xyz789",
  "vat_tax_id": "xyz789"
}
```

<HorizontalLine />

### CompanyCredit

Contains company credit balances and limits.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_credit` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sum of the credit limit and the outstanding balance. If the company has exceeded the credit limit, the amount is as a negative value. |
| `credit_limit` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The amount of credit extended to the company. |
| `exceed_limit` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether company credit functionality is allowed to exceed current company credit limit. |
| `outstanding_balance` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The amount reimbursed, less the total due from all orders placed using the Payment on Account payment method. The amount can be a positive or negative value. |

#### Example

```json
{
  "available_credit": Money,
  "credit_limit": Money,
  "exceed_limit": false,
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
| `page_info` - [`SearchResultPageInfo!`](/reference/graphql/saas/types-q-s.md#searchresultpageinfo) | Metadata for pagination rendering. |
| `total_count` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The number of the company credit operations matching the specified filter. |

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
| `custom_reference_number` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The purchase order number associated with the company credit operation. |
| `operation_type` - [`CompanyCreditOperationType`](#companycreditoperationtype) | The type of the company credit operation. |
| `updated_by` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the person submitting the company credit operation. |

#### Example

```json
{
  "custom_reference_number": "abc123",
  "operation_type": "ALLOCATION",
  "updated_by": "abc123"
}
```

<HorizontalLine />

### CompanyCreditOperation

Contains details about a single company credit operation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The amount of the company credit operation. |
| `balance` - [`CompanyCredit!`](#companycredit) | The credit balance as a result of the operation. |
| `custom_reference_number` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The purchase order number associated with the company credit operation. |
| `date` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date the operation occurred. |
| `type` - [`CompanyCreditOperationType!`](#companycreditoperationtype) | The type of the company credit operation. |
| `updated_by` - [`CompanyCreditOperationUser!`](#companycreditoperationuser) | The company user that submitted the company credit operation. |

#### Example

```json
{
  "amount": Money,
  "balance": CompanyCredit,
  "custom_reference_number": "xyz789",
  "date": "abc123",
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
| `name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the company user submitting the company credit operation. |
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

### CompanyHierarchy

Defines a parent company and its direct child companies.

#### Fields

| Field Name | Description |
|------------|-------------|
| `children` - [`[CompanyBasicInfo]!`](#companybasicinfo) | An array of direct child companies. |
| `parent` - [`CompanyBasicInfo`](#companybasicinfo) | The parent company in the relation hierarchy. Null if the company has no parent. |

#### Example

```json
{
  "children": [CompanyBasicInfo],
  "parent": CompanyBasicInfo
}
```

<HorizontalLine />

### CompanyInvitationInput

Defines the input schema for accepting the company invitation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The invitation code. |
| `role_id` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The company role id. |
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
| `success` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer was added to the company successfully. |

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
| `company_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The company unique identifier. |
| `customer_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The customer unique identifier. |
| `job_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The job title of a company user. |
| `status` - [`CompanyUserStatusEnum`](#companyuserstatusenum) | Indicates whether the company user is ACTIVE or INACTIVE. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The phone number of the company user. |

#### Example

```json
{
  "company_id": 4,
  "customer_id": 4,
  "job_title": "abc123",
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
| `city` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The city where the company is registered to conduct business. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The country code of the company's legal address. |
| `postcode` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company's postal code. |
| `region` - [`CustomerAddressRegion`](#customeraddressregion) | An object containing region data for the company. |
| `street` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | An array of strings that define the company's street address. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company's phone number. |

#### Example

```json
{
  "city": "abc123",
  "country_code": "AF",
  "postcode": "abc123",
  "region": CustomerAddressRegion,
  "street": ["abc123"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### CompanyLegalAddressCreateInput

Defines the input schema for defining a company's legal address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The city where the company is registered to conduct business. |
| `country_id` - [`CountryCodeEnum!`](#countrycodeenum) | The company's country ID. Use the `countries` query to get this value. |
| `postcode` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The postal code of the company. |
| `region` - [`CustomerAddressRegionInput!`](#customeraddressregioninput) | An object containing the region name and/or region ID where the company is registered to conduct business. |
| `street` - [`[String]!`](/reference/graphql/saas/types-q-s.md#string) | An array of strings that define the street address where the company is registered to conduct business. |
| `telephone` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The primary phone number of the company. |

#### Example

```json
{
  "city": "xyz789",
  "country_id": "AF",
  "postcode": "abc123",
  "region": CustomerAddressRegionInput,
  "street": ["abc123"],
  "telephone": "abc123"
}
```

<HorizontalLine />

### CompanyLegalAddressUpdateInput

Defines the input schema for updating a company's legal address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The city where the company is registered to conduct business. |
| `country_id` - [`CountryCodeEnum`](#countrycodeenum) | The unique ID for a `Country` object. |
| `postcode` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The postal code of the company. |
| `region` - [`CustomerAddressRegionInput`](#customeraddressregioninput) | An object containing the region name and/or region ID where the company is registered to conduct business. |
| `street` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | An array of strings that define the street address where the company is registered to conduct business. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The primary phone number of the company. |

#### Example

```json
{
  "city": "xyz789",
  "country_id": "AF",
  "postcode": "abc123",
  "region": CustomerAddressRegionInput,
  "street": ["abc123"],
  "telephone": "abc123"
}
```

<HorizontalLine />

### CompanyRole

Contails details about a single role.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CompanyRole` object. |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name assigned to the role. |
| `permissions` - [`[CompanyAclResource]`](#companyaclresource) | A list of permission resources defined for a role. |
| `users_count` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The total number of users assigned the specified role. |

#### Example

```json
{
  "id": 4,
  "name": "abc123",
  "permissions": [CompanyAclResource],
  "users_count": 987
}
```

<HorizontalLine />

### CompanyRoleCreateInput

Defines the input schema for creating a company role.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the role to create. |
| `permissions` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | A list of resources the role can access. |

#### Example

```json
{
  "name": "abc123",
  "permissions": ["abc123"]
}
```

<HorizontalLine />

### CompanyRoleUpdateInput

Defines the input schema for updating a company role.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CompanyRole` object. |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the role to update. |
| `permissions` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | A list of resources the role can access. |

#### Example

```json
{
  "id": 4,
  "name": "xyz789",
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
| `page_info` - [`SearchResultPageInfo`](/reference/graphql/saas/types-q-s.md#searchresultpageinfo) | Pagination metadata. |
| `total_count` - [`Int!`](/reference/graphql/saas/types-f-i.md#int) | The total number of objects matching the specified filter. |

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
| `email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the company sales representative. |
| `firstname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company sales representative's first name. |
| `lastname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company sales representative's last name. |

#### Example

```json
{
  "email": "abc123",
  "firstname": "xyz789",
  "lastname": "abc123"
}
```

<HorizontalLine />

### CompanyStatusEnum

Defines the list of company status values.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PENDING` | Company is pending approval. |
| `APPROVED` | Company is approved. |
| `REJECTED` | Company is rejected. |
| `BLOCKED` | Company is blocked. |

#### Example

```json
""PENDING""
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
| `entity` - [`CompanyStructureEntity`](#companystructureentity) | A union of `CompanyTeam` and `Customer` objects. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CompanyStructureItem` object. |
| `parent_id` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The ID of the parent item in the company hierarchy. |

#### Example

```json
{
  "entity": CompanyTeam,
  "id": "4",
  "parent_id": "4"
}
```

<HorizontalLine />

### CompanyStructureUpdateInput

Defines the input schema for updating the company structure.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `parent_tree_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The ID of a company that will be the new parent. |
| `tree_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The ID of the company team that is being moved to another parent. |

#### Example

```json
{"parent_tree_id": 4, "tree_id": 4}
```

<HorizontalLine />

### CompanyTeam

Describes a company team.

#### Fields

| Field Name | Description |
|------------|-------------|
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An optional description of the team. |
| `id` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CompanyTeam` object. |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name of the team. |
| `structure_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | ID of the company structure |

#### Example

```json
{
  "description": "abc123",
  "id": 4,
  "name": "xyz789",
  "structure_id": 4
}
```

<HorizontalLine />

### CompanyTeamCreateInput

Defines the input schema for creating a company team.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An optional description of the team. |
| `name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The display name of the team. |
| `target_id` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The ID of a node within a company's structure. This ID will be the parent of the created team. |

#### Example

```json
{
  "description": "xyz789",
  "name": "xyz789",
  "target_id": 4
}
```

<HorizontalLine />

### CompanyTeamUpdateInput

Defines the input schema for updating a company team.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An optional description of the team. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of the `CompanyTeam` object to update. |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name of the team. |

#### Example

```json
{
  "description": "abc123",
  "id": 4,
  "name": "xyz789"
}
```

<HorizontalLine />

### CompanyUpdateInput

Defines the input schema for updating a company.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `company_email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the company contact. |
| `company_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the company to update. |
| `legal_address` - [`CompanyLegalAddressUpdateInput`](#companylegaladdressupdateinput) | The legal address data of the company. |
| `legal_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The full legal name of the company. |
| `reseller_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The resale number that is assigned to the company for tax reporting purposes. |
| `vat_tax_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes. |

#### Example

```json
{
  "company_email": "xyz789",
  "company_name": "xyz789",
  "legal_address": CompanyLegalAddressUpdateInput,
  "legal_name": "xyz789",
  "reseller_id": "xyz789",
  "vat_tax_id": "abc123"
}
```

<HorizontalLine />

### CompanyUserCreateInput

Defines the input schema for creating a company user.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The company user's email address |
| `firstname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The company user's first name. |
| `job_title` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The company user's job title or function. |
| `lastname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The company user's last name. |
| `role_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CompanyRole` object. |
| `status` - [`CompanyUserStatusEnum!`](#companyuserstatusenum) | Indicates whether the company user is ACTIVE or INACTIVE. |
| `target_id` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The ID of a node within a company's structure. This ID will be the parent of the created company user. |
| `telephone` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The company user's phone number. |

#### Example

```json
{
  "email": "xyz789",
  "firstname": "xyz789",
  "job_title": "abc123",
  "lastname": "abc123",
  "role_id": "4",
  "status": "ACTIVE",
  "target_id": 4,
  "telephone": "abc123"
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
| `email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company user's email address. |
| `firstname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company user's first name. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of a `Customer` object. |
| `job_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company user's job title or function. |
| `lastname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company user's last name. |
| `role_id` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CompanyRole` object. |
| `status` - [`CompanyUserStatusEnum`](#companyuserstatusenum) | Indicates whether the company user is ACTIVE or INACTIVE. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The company user's phone number. |

#### Example

```json
{
  "email": "xyz789",
  "firstname": "xyz789",
  "id": "4",
  "job_title": "xyz789",
  "lastname": "xyz789",
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
| `items` - [`[Customer]!`](#customer) | An array of `CompanyUser` objects that match the specified filter criteria. |
| `page_info` - [`SearchResultPageInfo`](/reference/graphql/saas/types-q-s.md#searchresultpageinfo) | Pagination metadata. |
| `total_count` - [`Int!`](/reference/graphql/saas/types-f-i.md#int) | The number of objects returned. |

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
| `code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | An attribute code that is enabled for product comparisons. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The label of the attribute code. |

#### Example

```json
{
  "code": "xyz789",
  "label": "abc123"
}
```

<HorizontalLine />

### ComparableItem

Defines an object used to iterate through items for product comparisons.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attributes` - [`[ProductAttribute]!`](/reference/graphql/saas/types-k-p.md#productattribute) | An array of product attributes that can be used to compare products. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about a product in a compare list. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of an item in a compare list. |

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
| `item_count` - [`Int!`](/reference/graphql/saas/types-f-i.md#int) | The number of items in the compare list. |
| `items` - [`[ComparableItem]`](#comparableitem) | An array of products to compare. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID assigned to the compare list. |

#### Example

```json
{
  "attributes": [ComparableAttribute],
  "item_count": 987,
  "items": [ComparableItem],
  "uid": "4"
}
```

<HorizontalLine />

### CompleteOrderInput

Update the quote and complete the order

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cartId` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The customer cart ID |
| `id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | PayPal order ID |

#### Example

```json
{
  "cartId": "xyz789",
  "id": "xyz789"
}
```

<HorizontalLine />

### ComplexProductView

Represents all product types, except simple products. Complex product prices are returned as a price range, because price values can vary based on selected options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `addToCartAllowed` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | A flag stating if the product can be added to cart *(Deprecated: This field is deprecated and will be removed.)* |
| `inStock` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | A flag stating if the product is in stock *(Deprecated: This field is deprecated and will be removed.)* |
| `lowStock` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the remaining quantity of the product has reached the Only X Left threshold. *(Deprecated: This field is deprecated and will be removed.)* |
| `attributes` - [`[ProductViewAttribute]`](/reference/graphql/saas/types-k-p.md#productviewattribute) | A list of merchant-defined attributes designated for the storefront. They can be filtered by roles and names. |
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The detailed description of the product. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The product ID, generated as a composite key, unique per locale. |
| `images` - [`[ProductViewImage]`](/reference/graphql/saas/types-k-p.md#productviewimage) | A list of images defined for the product. Possible values include `image`, `small_image` or `swatch`. |
| `videos` - [`[ProductViewVideo]`](/reference/graphql/saas/types-k-p.md#productviewvideo) | A list of videos defined for the product. |
| `lastModifiedAt` - [`DateTime`](#datetime) | Date and time when the product was last updated. |
| `metaDescription` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A brief overview of the product for search results listings. |
| `metaKeyword` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `metaTitle` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Product name. |
| `inputOptions` - [`[ProductViewInputOption]`](/reference/graphql/saas/types-k-p.md#productviewinputoption) | A list of input options. *(Deprecated: This field is deprecated and will be removed.)* |
| `options` - [`[ProductViewOption]`](/reference/graphql/saas/types-k-p.md#productviewoption) | A list of selectable options. |
| `priceRange` - [`ProductViewPriceRange`](/reference/graphql/saas/types-k-p.md#productviewpricerange) | A range of possible prices for a complex product. |
| `shortDescription` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A summary of the product. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A unique code used for identification of a product. |
| `externalId` - [`String`](/reference/graphql/saas/types-q-s.md#string) | External Id *(Deprecated: This field is deprecated and will be removed.)* |
| `url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Canonical URL of the product. *(Deprecated: This field is deprecated and will be removed.)* |
| `urlKey` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The URL key of the product. |
| `links` - [`[ProductViewLink]`](/reference/graphql/saas/types-k-p.md#productviewlink) | A list of product links. Links are used to navigate from one product to another. |
| `queryType` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Indicates if the product was retrieved from the primary or the backup query |
| `visibility` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Visibility setting of the product |

#### Example

```json
{
  "addToCartAllowed": false,
  "inStock": false,
  "lowStock": false,
  "attributes": [ProductViewAttribute],
  "description": "xyz789",
  "id": 4,
  "images": [ProductViewImage],
  "videos": [ProductViewVideo],
  "lastModifiedAt": "2007-12-03T10:15:30Z",
  "metaDescription": "xyz789",
  "metaKeyword": "xyz789",
  "metaTitle": "abc123",
  "name": "abc123",
  "inputOptions": [ProductViewInputOption],
  "options": [ProductViewOption],
  "priceRange": ProductViewPriceRange,
  "shortDescription": "abc123",
  "sku": "abc123",
  "externalId": "xyz789",
  "url": "abc123",
  "urlKey": "xyz789",
  "links": [ProductViewLink],
  "queryType": "xyz789",
  "visibility": "xyz789"
}
```

<HorizontalLine />

### ComplexTextValue

#### Fields

| Field Name | Description |
|------------|-------------|
| `html` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Text that can contain HTML tags. |

#### Example

```json
{"html": "xyz789"}
```

<HorizontalLine />

### ConditionInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `field` - [`Field`](/reference/graphql/saas/types-f-i.md#field) |  |
| `operator` - [`OperatorInput`](/reference/graphql/saas/types-k-p.md#operatorinput) |  |
| `enabled` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) |  |

#### Example

```json
{
  "field": "UNKNOWN_FIELD",
  "operator": OperatorInput,
  "enabled": false
}
```

<HorizontalLine />

### ConfigurableAttributeOption

Contains details about a configurable product attribute option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The ID assigned to the attribute. |
| `label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A string that describes the configurable attribute option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `ConfigurableAttributeOption` object. |
| `value_index` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | A unique index number assigned to the configurable product option. |

#### Example

```json
{
  "code": "xyz789",
  "label": "abc123",
  "uid": "4",
  "value_index": 987
}
```

<HorizontalLine />

### ConfigurableCartItem

An implementation for configurable product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_gift_wrapping` - [`[GiftWrapping]!`](/reference/graphql/saas/types-f-i.md#giftwrapping) | The list of available gift wrapping options for the cart item. |
| `backorder_message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Customer-facing hint when the line is salable on notify backorders with insufficient physical quantity; null otherwise. |
| `configurable_options` - [`[SelectedConfigurableOption]!`](/reference/graphql/saas/types-q-s.md#selectedconfigurableoption) | An array containing the configuranle options the shopper selected. |
| `configured_variant` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Product details of the cart item. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the cart item |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](/reference/graphql/saas/types-f-i.md#giftmessage) | The entered gift message for the cart item |
| `gift_wrapping` - [`GiftWrapping`](/reference/graphql/saas/types-f-i.md#giftwrapping) | The selected gift wrapping for the cart item. |
| `is_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | True if requested quantity is less than available stock, false otherwise. *(Deprecated: Use `is_salable` instead. It indicates whether the line can be purchased, including backorder configuration.)* |
| `is_salable` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | True when the item can be purchased and should not block checkout: stock status is in stock and either physical quantity covers the requested quantity or backorders are allowed. |
| `max_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Shortage or unavailability message for the line; null when the item is salable. |
| `note_from_buyer` - [`[ItemNote]`](/reference/graphql/saas/types-f-i.md#itemnote) | The buyer's quote line item note. |
| `note_from_seller` - [`[ItemNote]`](/reference/graphql/saas/types-f-i.md#itemnote) | The seller's quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about an item in the cart. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CartItemInterface` object. |

#### Example

```json
{
  "available_gift_wrapping": [GiftWrapping],
  "backorder_message": "abc123",
  "configurable_options": [SelectedConfigurableOption],
  "configured_variant": ProductInterface,
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
  "uid": 4
}
```

<HorizontalLine />

### ConfigurableOptionAvailableForSelection

Describes configurable options that have been selected and can be selected as a result of the previous selections.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | An attribute code that uniquely identifies a configurable option. |
| `option_value_uids` - [`[ID]!`](/reference/graphql/saas/types-f-i.md#id) | An array of selectable option value IDs. |

#### Example

```json
{
  "attribute_code": "abc123",
  "option_value_uids": ["4"]
}
```

<HorizontalLine />

### ConfigurableOrderItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the order item |
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](/reference/graphql/saas/types-k-p.md#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](/reference/graphql/saas/types-f-i.md#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](/reference/graphql/saas/types-f-i.md#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for an `OrderItemInterface` object. |
| `parent_sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The SKU of parent product. |
| `prices` - [`OrderItemPrices`](/reference/graphql/saas/types-k-p.md#orderitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface`](/reference/graphql/saas/types-k-p.md#productinterface) | The ProductInterface object, which contains details about the base product *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `product_type` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](/reference/graphql/saas/types-q-s.md#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of refunded items. |
| `quantity_return_requested` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The requested return quantity of the item. |
| `quantity_returned` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](/reference/graphql/saas/types-k-p.md#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The status of the order item. |

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
  "parent_sku": "abc123",
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "abc123",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 123.45,
  "quantity_refunded": 123.45,
  "quantity_return_requested": 987.65,
  "quantity_returned": 987.65,
  "quantity_shipped": 987.65,
  "selected_options": [OrderItemOption],
  "status": "xyz789"
}
```

<HorizontalLine />

### ConfigurableProduct

Defines basic features of a configurable product and its simple product variants.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `configurable_options` - [`[ConfigurableProductOptions]`](#configurableproductoptions) | An array of options for the configurable product. |
| `configurable_product_options_selection` - [`ConfigurableProductOptionsSelection`](#configurableproductoptionsselection) | An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. |
| `country_of_manufacture` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The product's country of origin. |
| `crosssell_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](/reference/graphql/saas/types-k-p.md#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | A number representing the product's manufacturer. |
| `max_sale_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](/reference/graphql/saas/types-k-p.md#mediagalleryinterface) | An array of media gallery objects. |
| `meta_description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_sale_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Minimum Qty Allowed in Shopping Cart |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](/reference/graphql/saas/types-q-s.md#string) | If the product has multiple options, determines where they appear on the product page. |
| `price_range` - [`PriceRange!`](/reference/graphql/saas/types-k-p.md#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](/reference/graphql/saas/types-t-z.md#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](/reference/graphql/saas/types-k-p.md#productlinksinterface) | An array of `ProductLinks` objects. |
| `quantity` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | An array of products to be displayed in a Related Products block. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The discounted price of the product. |
| `special_to_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The end date for a product with a special price. |
| `stock_status` - [`ProductStockStatus`](/reference/graphql/saas/types-k-p.md#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the product's thumbnail image. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `ProductInterface` object. |
| `upsell_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | Upsell Products |
| `url_key` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The part of the URL that identifies the product |
| `variants` - [`[ConfigurableVariant]`](#configurablevariant) | An array of simple product variants. |
| `weight` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "configurable_options": [ConfigurableProductOptions],
  "configurable_product_options_selection": ConfigurableProductOptionsSelection,
  "country_of_manufacture": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": true,
  "gift_wrapping_available": true,
  "gift_wrapping_price": Money,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 987,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "min_sale_qty": 123.45,
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 123.45,
  "related_products": [ProductInterface],
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_price": 123.45,
  "special_to_date": "abc123",
  "stock_status": "IN_STOCK",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "uid": 4,
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "variants": [ConfigurableVariant],
  "weight": 123.45
}
```

<HorizontalLine />

### ConfigurableProductOption

Contains details about configurable product options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | An attribute code that uniquely identifies a configurable option. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The display name of the option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of the configurable option. |
| `values` - [`[ConfigurableProductOptionValue]`](#configurableproductoptionvalue) | An array of values that are applicable for this option. |

#### Example

```json
{
  "attribute_code": "xyz789",
  "label": "abc123",
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
| `is_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the product is available with this selected option. |
| `is_use_default` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the value is the default. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The display name of the value. |
| `swatch` - [`SwatchDataInterface`](/reference/graphql/saas/types-q-s.md#swatchdatainterface) | The URL assigned to the thumbnail of the swatch image. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of the value. |

#### Example

```json
{
  "is_available": true,
  "is_use_default": true,
  "label": "xyz789",
  "swatch": SwatchDataInterface,
  "uid": "4"
}
```

<HorizontalLine />

### ConfigurableProductOptions

Defines configurable attributes for the specified product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A string that identifies the attribute. |
| `attribute_uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for an `Attribute` object. |
| `label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A displayed string that describes the configurable product option. |
| `position` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | A number that indicates the order in which the attribute is displayed. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `ConfigurableProductOptions` object. |
| `use_default` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is the default. |
| `values` - [`[ConfigurableProductOptionsValues]`](#configurableproductoptionsvalues) | An array that defines the `value_index` codes assigned to the configurable product. |

#### Example

```json
{
  "attribute_code": "abc123",
  "attribute_uid": 4,
  "label": "abc123",
  "position": 987,
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
| `media_gallery` - [`[MediaGalleryInterface]`](/reference/graphql/saas/types-k-p.md#mediagalleryinterface) | Product images and videos corresponding to the specified configurable options selection. |
| `options_available_for_selection` - [`[ConfigurableOptionAvailableForSelection]`](#configurableoptionavailableforselection) | The configurable options available for further selection based on the current selection. |
| `variant` - [`SimpleProduct`](/reference/graphql/saas/types-q-s.md#simpleproduct) | A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. |

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
| `default_label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The label of the product on the default store. |
| `label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The label of the product. |
| `store_label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The label of the product on the current store. |
| `swatch_data` - [`SwatchDataInterface`](/reference/graphql/saas/types-q-s.md#swatchdatainterface) | Swatch data for a configurable product option. |
| `uid` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `ConfigurableProductOptionsValues` object. |
| `use_default_value` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether to use the default_label. |

#### Example

```json
{
  "default_label": "abc123",
  "label": "xyz789",
  "store_label": "xyz789",
  "swatch_data": SwatchDataInterface,
  "uid": "4",
  "use_default_value": false
}
```

<HorizontalLine />

### ConfigurableRequisitionListItem

Contains details about configurable products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `configurable_options` - [`[SelectedConfigurableOption]`](/reference/graphql/saas/types-q-s.md#selectedconfigurableoption) | Selected configurable options for an item in the requisition list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | The quantity of the product added to the requisition list. |
| `sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The product SKU. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of an item in a requisition list. |

#### Example

```json
{
  "configurable_options": [SelectedConfigurableOption],
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 123.45,
  "sku": "abc123",
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
| `product` - [`SimpleProduct`](/reference/graphql/saas/types-q-s.md#simpleproduct) | An array of linked simple products. |

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
| `added_at` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date and time the item was added to the wish list. |
| `configurable_options` - [`[SelectedConfigurableOption]`](/reference/graphql/saas/types-q-s.md#selectedconfigurableoption) | An array of selected configurable options. |
| `configured_variant` - [`ProductInterface`](/reference/graphql/saas/types-k-p.md#productinterface) | Product details of the selected variant. The value is null if some options are not configured. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The description of the item. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
  "configurable_options": [SelectedConfigurableOption],
  "configured_variant": ProductInterface,
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
  "id": "4",
  "product": ProductInterface,
  "quantity": 123.45
}
```

<HorizontalLine />

### ConfirmCancelOrderInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `confirmation_key` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Confirmation Key to cancel the order. |
| `order_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of an `Order` type. |

#### Example

```json
{
  "confirmation_key": "abc123",
  "order_id": 4
}
```

<HorizontalLine />

### ConfirmEmailInput

Contains details about a customer email address to confirm.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `confirmation_key` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The key to confirm the email address. |
| `email` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The email address to be confirmed. |

#### Example

```json
{
  "confirmation_key": "abc123",
  "email": "xyz789"
}
```

<HorizontalLine />

### ConfirmReturnInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `confirmation_key` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Confirmation Key to return order. |
| `order_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of an `Order` type. |

#### Example

```json
{
  "confirmation_key": "abc123",
  "order_id": "4"
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
| `comment` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The shopper's comment to the merchant. |
| `email` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The email address of the shopper. |
| `name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The full name of the shopper. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The shopper's telephone number. |

#### Example

```json
{
  "comment": "xyz789",
  "email": "abc123",
  "name": "xyz789",
  "telephone": "abc123"
}
```

<HorizontalLine />

### ContactUsOutput

Contains the status of the request.

#### Fields

| Field Name | Description |
|------------|-------------|
| `status` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the request was successful. |

#### Example

```json
{"status": true}
```

<HorizontalLine />

### CopyItemsBetweenRequisitionListsInput

An input object that defines the items in a requisition list to be copied.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `requisitionListItemUids` - [`[ID]!`](/reference/graphql/saas/types-f-i.md#id) | An array of IDs representing products copied from one requisition list to another. |

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
| `requisition_list` - [`RequisitionList`](/reference/graphql/saas/types-q-s.md#requisitionlist) | The destination requisition list after the items were copied. |

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
| `destination_wishlist` - [`Wishlist!`](/reference/graphql/saas/types-t-z.md#wishlist) | The destination wish list containing the copied products. |
| `source_wishlist` - [`Wishlist!`](/reference/graphql/saas/types-t-z.md#wishlist) | The wish list that the products were copied from. |
| `user_errors` - [`[WishListUserInputError]!`](/reference/graphql/saas/types-t-z.md#wishlistuserinputerror) | An array of errors encountered while copying products in a wish list. |

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
| `available_regions` - [`[Region]`](/reference/graphql/saas/types-q-s.md#region) | An array of regions within a particular country. |
| `full_name_english` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the country in English. |
| `full_name_locale` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the country in the current locale. |
| `id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The unique ID for a `Country` object. |
| `three_letter_abbreviation` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The three-letter abbreviation of the country, such as USA. |
| `two_letter_abbreviation` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The two-letter abbreviation of the country, such as US. |

#### Example

```json
{
  "available_regions": [Region],
  "full_name_english": "abc123",
  "full_name_locale": "abc123",
  "id": "abc123",
  "three_letter_abbreviation": "abc123",
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
| `AG` | Antigua & Barbuda |
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
| `BA` | Bosnia & Herzegovina |
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
| `HM` | Heard &amp; McDonald Islands |
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
| `ST` | São Tomé & Príncipe |
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
| `GS` | South Georgia & South Sandwich Islands |
| `KR` | South Korea |
| `ES` | Spain |
| `LK` | Sri Lanka |
| `BL` | St. Barthélemy |
| `SH` | St. Helena |
| `KN` | St. Kitts & Nevis |
| `LC` | St. Lucia |
| `MF` | St. Martin |
| `PM` | St. Pierre & Miquelon |
| `VC` | St. Vincent & Grenadines |
| `SD` | Sudan |
| `SR` | Suriname |
| `SJ` | Svalbard & Jan Mayen |
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
| `TT` | Trinidad & Tobago |
| `TN` | Tunisia |
| `TR` | Turkey |
| `TM` | Turkmenistan |
| `TC` | Turks & Caicos Islands |
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
| `WF` | Wallis & Futuna |
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
| `products` - [`[ID]`](/reference/graphql/saas/types-f-i.md#id) | An array of product IDs to add to the compare list. |

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
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](/reference/graphql/saas/types-f-i.md#giftregistrydynamicattributeinput) | Additional attributes specified as a code-value pair. |
| `event_name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the event. |
| `gift_registry_type_uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The ID of the selected event type. |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A message describing the event. |
| `privacy_settings` - [`GiftRegistryPrivacySettings!`](/reference/graphql/saas/types-f-i.md#giftregistryprivacysettings) | Indicates whether the registry is PRIVATE or PUBLIC. |
| `registrants` - [`[AddGiftRegistryRegistrantInput]!`](/reference/graphql/saas/types-a-b.md#addgiftregistryregistrantinput) | The list of people who receive notifications about the registry. |
| `shipping_address` - [`GiftRegistryShippingAddressInput`](/reference/graphql/saas/types-f-i.md#giftregistryshippingaddressinput) | The shipping address for all gift registry items. |
| `status` - [`GiftRegistryStatus!`](/reference/graphql/saas/types-f-i.md#giftregistrystatus) | Indicates whether the registry is ACTIVE or INACTIVE. |

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
| `gift_registry` - [`GiftRegistry`](/reference/graphql/saas/types-f-i.md#giftregistry) | The newly-created gift registry. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### CreateGuestCartInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_uid` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | Optional client-generated ID |

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

### CreatePaymentOrderInput

Contains payment order details that are used while processing the payment order

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cartId` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The customer cart ID |
| `location` - [`PaymentLocation!`](/reference/graphql/saas/types-k-p.md#paymentlocation) | Defines the origin location for that payment request |
| `methodCode` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The code for the payment method used in the order |
| `paymentSource` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The identifiable payment source for the payment method |
| `vaultIntent` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the payment information should be vaulted |

#### Example

```json
{
  "cartId": "xyz789",
  "location": "PRODUCT_DETAIL",
  "methodCode": "abc123",
  "paymentSource": "abc123",
  "vaultIntent": true
}
```

<HorizontalLine />

### CreatePaymentOrderOutput

Contains payment order details that are used while processing the payment order

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The amount of the payment order |
| `currency_code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The currency of the payment order |
| `id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | PayPal order ID |
| `mp_order_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The order ID generated by Payment Services |
| `status` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The status of the payment order |

#### Example

```json
{
  "amount": 987.65,
  "currency_code": "xyz789",
  "id": "abc123",
  "mp_order_id": "abc123",
  "status": "xyz789"
}
```

<HorizontalLine />

### CreatePurchaseOrderApprovalRuleConditionAmountInput

Specifies the amount and currency to evaluate.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `currency` - [`CurrencyEnum!`](#currencyenum) | Purchase order approval rule condition amount currency. |
| `value` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | Purchase order approval rule condition amount value. |

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
| `attribute` - [`PurchaseOrderApprovalRuleType!`](/reference/graphql/saas/types-k-p.md#purchaseorderapprovalruletype) | The type of approval rule. |
| `operator` - [`PurchaseOrderApprovalRuleConditionOperator!`](/reference/graphql/saas/types-k-p.md#purchaseorderapprovalruleconditionoperator) | Defines how to evaluate an amount or quantity in a purchase order. |
| `quantity` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The quantity to be compared in a purchase order approval rule. This field is mutually exclusive with condition amount. |

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
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An optional description of the requisition list. |
| `name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name assigned to the requisition list. |

#### Example

```json
{
  "description": "abc123",
  "name": "xyz789"
}
```

<HorizontalLine />

### CreateRequisitionListOutput

Output of the request to create a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](/reference/graphql/saas/types-q-s.md#requisitionlist) | The created requisition list. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### CreateVaultCardPaymentTokenInput

Describe the variables needed to create a vault payment token

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `card_description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Description of the vaulted card |
| `setup_token_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The setup token obtained by the createVaultCardSetupToken endpoint |

#### Example

```json
{
  "card_description": "xyz789",
  "setup_token_id": "abc123"
}
```

<HorizontalLine />

### CreateVaultCardPaymentTokenOutput

The vault token id and information about the payment source

#### Fields

| Field Name | Description |
|------------|-------------|
| `payment_source` - [`PaymentSourceOutput!`](/reference/graphql/saas/types-k-p.md#paymentsourceoutput) | The payment source information |
| `vault_token_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The vault payment token information |

#### Example

```json
{
  "payment_source": PaymentSourceOutput,
  "vault_token_id": "xyz789"
}
```

<HorizontalLine />

### CreateVaultCardSetupTokenInput

Describe the variables needed to create a vault card setup token

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `setup_token` - [`VaultSetupTokenInput!`](/reference/graphql/saas/types-t-z.md#vaultsetuptokeninput) | The setup token information |
| `three_ds_mode` - [`ThreeDSMode`](/reference/graphql/saas/types-t-z.md#threedsmode) | The 3DS mode |

#### Example

```json
{
  "setup_token": VaultSetupTokenInput,
  "three_ds_mode": "OFF"
}
```

<HorizontalLine />

### CreateVaultCardSetupTokenOutput

The setup token id information

#### Fields

| Field Name | Description |
|------------|-------------|
| `setup_token` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The setup token id |

#### Example

```json
{"setup_token": "abc123"}
```

<HorizontalLine />

### CreateWishlistInput

Defines the name and visibility of a new wish list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the new wish list. |
| `visibility` - [`WishlistVisibilityEnum!`](/reference/graphql/saas/types-t-z.md#wishlistvisibilityenum) | Indicates whether the wish list is public or private. |

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
| `wishlist` - [`Wishlist!`](/reference/graphql/saas/types-t-z.md#wishlist) | The newly-created wish list |

#### Example

```json
{"wishlist": Wishlist}
```

<HorizontalLine />

### CreditMemo

Contains credit memo details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comments` - [`[SalesCommentItem]`](/reference/graphql/saas/types-q-s.md#salescommentitem) | Comments on the credit memo. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the credit memo |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CreditMemo` object. |
| `items` - [`[CreditMemoItemInterface]`](#creditmemoiteminterface) | An array containing details about refunded items. |
| `number` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The sequential credit memo number. |
| `total` - [`CreditMemoTotal`](#creditmemototal) | Details about the total refunded amount. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "custom_attributes": [CustomAttribute],
  "id": 4,
  "items": [CreditMemoItemInterface],
  "number": "abc123",
  "total": CreditMemoTotal
}
```

<HorizontalLine />

### CreditMemoCustomAttributesInput

Defines a credit memo item's custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `credit_memo_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The credit memo ID. |
| `custom_attributes` - [`[CustomAttributeInput]`](#customattributeinput) | An array of custom attributes for the credit memo. |

#### Example

```json
{
  "credit_memo_id": "abc123",
  "custom_attributes": [CustomAttributeInput]
}
```

<HorizontalLine />

### CreditMemoItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the credit memo item |
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CreditMemoItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of refunded items. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_refunded": 987.65
}
```

<HorizontalLine />

### CreditMemoItemCustomAttributesInput

Defines a credit memo's custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `credit_memo_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The credit memo ID. |
| `credit_memo_item_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The credit memo item ID. |
| `custom_attributes` - [`[CustomAttributeInput]`](#customattributeinput) | An array of custom attributes for the credit memo item. |

#### Example

```json
{
  "credit_memo_id": "abc123",
  "credit_memo_item_id": "abc123",
  "custom_attributes": [CustomAttributeInput]
}
```

<HorizontalLine />

### CreditMemoItemInterface

Credit memo item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the credit memo item |
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CreditMemoItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of refunded items. |

#### Possible Types

| CreditMemoItemInterface Types |
|----------------|
| [`BundleCreditMemoItem`](/reference/graphql/saas/types-a-b.md#bundlecreditmemoitem) |
| [`CreditMemoItem`](#creditmemoitem) |
| [`DownloadableCreditMemoItem`](#downloadablecreditmemoitem) |
| [`GiftCardCreditMemoItem`](/reference/graphql/saas/types-f-i.md#giftcardcreditmemoitem) |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_refunded": 123.45
}
```

<HorizontalLine />

### CreditMemoOutput

Contains details about the credit memo after adding custom attributes to it.

#### Fields

| Field Name | Description |
|------------|-------------|
| `credit_memo` - [`CreditMemo!`](#creditmemo) | The custom attributes to credit memo have been added. |

#### Example

```json
{"credit_memo": CreditMemo}
```

<HorizontalLine />

### CreditMemoTotal

Contains credit memo price details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `adjustment` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | An adjustment manually applied to the order. |
| `base_grand_total` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The final base grand total amount in the base currency. |
| `discounts` - [`[Discount]`](#discount) | The applied discounts to the credit memo. |
| `grand_total` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The final total amount, including shipping, discounts, and taxes. |
| `shipping_handling` - [`ShippingHandling`](/reference/graphql/saas/types-q-s.md#shippinghandling) | Details about the shipping and handling costs for the credit memo. |
| `subtotal` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The subtotal of the invoice, excluding shipping, discounts, and taxes. |
| `taxes` - [`[TaxItem]`](/reference/graphql/saas/types-t-z.md#taxitem) | The credit memo tax details. |
| `total_shipping` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The shipping amount for the credit memo. |
| `total_tax` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The amount of tax applied to the credit memo. |

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
| `available_currency_codes` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | An array of three-letter currency codes accepted by the store, such as USD and EUR. |
| `base_currency_code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The base currency set for the store, such as USD. |
| `base_currency_symbol` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The symbol for the specified base currency, such as $. |
| `default_display_currency_code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The currency that is displayed by default, such as USD. |
| `default_display_currency_symbol` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The currency symbol that is displayed by default, such as $. |
| `exchange_rates` - [`[ExchangeRate]`](#exchangerate) | An array of exchange rates for currencies defined in the store. |

#### Example

```json
{
  "available_currency_codes": ["xyz789"],
  "base_currency_code": "abc123",
  "base_currency_symbol": "xyz789",
  "default_display_currency_code": "abc123",
  "default_display_currency_symbol": "xyz789",
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

### CurrentProductInput

Attributes of the product currently being viewed on PDP

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | SKU of the current product |
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Resolved display price of the current product (specialPrice ?? regularPrice) |

#### Example

```json
{"sku": "abc123", "price": 987.65}
```

<HorizontalLine />

### CustomAttribute

Specifies the custom attribute code and value.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The custom attribute code. |
| `value` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The custom attribute code value. |

#### Example

```json
{
  "attribute_code": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### CustomAttributeInput

Defines a custom attribute.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Attribute Code. |
| `value` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Attribute Value. |

#### Example

```json
{
  "attribute_code": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### CustomAttributeMetadataInterface

An interface containing fields that define the EAV attribute.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `default_value` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Default attribute value. |
| `entity_type` - [`AttributeEntityTypeEnum!`](/reference/graphql/saas/types-a-b.md#attributeentitytypeenum) | The type of entity that defines the attribute. |
| `frontend_class` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The frontend class of the attribute. |
| `frontend_input` - [`AttributeFrontendInputEnum`](/reference/graphql/saas/types-a-b.md#attributefrontendinputenum) | The frontend input type of the attribute. |
| `is_required` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Whether the attribute value is required. |
| `is_unique` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Whether the attribute value must be unique. |
| `label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The label assigned to the attribute. |
| `options` - [`[CustomAttributeOptionInterface]!`](#customattributeoptioninterface) | Attribute options. |

#### Possible Types

| CustomAttributeMetadataInterface Types |
|----------------|
| [`AttributeMetadata`](/reference/graphql/saas/types-a-b.md#attributemetadata) |
| [`CatalogAttributeMetadata`](#catalogattributemetadata) |
| [`CustomerAttributeMetadata`](#customerattributemetadata) |
| [`ReturnItemAttributeMetadata`](/reference/graphql/saas/types-q-s.md#returnitemattributemetadata) |

#### Example

```json
{
  "code": 4,
  "default_value": "xyz789",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "xyz789",
  "frontend_input": "BOOLEAN",
  "is_required": false,
  "is_unique": true,
  "label": "xyz789",
  "options": [CustomAttributeOptionInterface]
}
```

<HorizontalLine />

### CustomAttributeOptionInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_default` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Is the option value default. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The label assigned to the attribute option. |
| `value` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The attribute option value. |

#### Possible Types

| CustomAttributeOptionInterface Types |
|----------------|
| [`AttributeOptionMetadata`](/reference/graphql/saas/types-a-b.md#attributeoptionmetadata) |

#### Example

```json
{
  "is_default": true,
  "label": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### CustomConfigKeyValue

A simple key value object.

#### Fields

| Field Name | Description |
|------------|-------------|
| `key` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `value` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |

#### Example

```json
{
  "key": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### CustomOperatorInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `type` - [`CustomOperatorType`](#customoperatortype) |  |
| `value` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) |  |

#### Example

```json
{
  "type": "UNKNOWN_CUSTOMOPERATOR_TYPE",
  "value": ["xyz789"]
}
```

<HorizontalLine />

### CustomOperatorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNKNOWN_CUSTOMOPERATOR_TYPE` |  |
| `CUSTOM` |  |

#### Example

```json
""UNKNOWN_CUSTOMOPERATOR_TYPE""
```

<HorizontalLine />

### Customer

Defines the customer name, addresses, and other details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `addresses` - [`[CustomerAddress]`](#customeraddress) | An array containing the customer's shipping and billing addresses. |
| `addressesV2` - [`CustomerAddresses`](#customeraddresses) | An array containing the customer's shipping and billing addresses. |
| `admin_assistance_actions` - [`AdminAssistanceActions!`](/reference/graphql/saas/types-a-b.md#adminassistanceactions) | Actions performed by an admin on behalf of the customer (Login as Customer logging). |
| `allow_remote_shopping_assistance` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer has enabled remote shopping assistance. |
| `companies` - [`UserCompaniesOutput!`](/reference/graphql/saas/types-t-z.md#usercompaniesoutput) | An object that contains a list of companies user is assigned to. |
| `company_hierarchy` - [`[CompanyHierarchy]`](#companyhierarchy) | The company relation hierarchies for all companies. Only available to the company administrator. |
| `compare_list` - [`CompareList`](#comparelist) | The contents of the customer's compare list. |
| `confirmation_status` - [`ConfirmationStatusEnum!`](#confirmationstatusenum) | The customer's confirmation status. |
| `created_at` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Timestamp indicating when the account was created. |
| `custom_attributes` - [`[AttributeValueInterface]`](/reference/graphql/saas/types-a-b.md#attributevalueinterface) | Customer's custom attributes. |
| `date_of_birth` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's date of birth. |
| `default_billing` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The ID assigned to the billing address. |
| `default_shipping` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The ID assigned to the shipping address. |
| `email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's email address. Required. |
| `firstname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's first name. |
| `gender` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The customer's gender (Male - 1, Female - 2). |
| `gift_registries` - [`[GiftRegistry]`](/reference/graphql/saas/types-f-i.md#giftregistry) | Details about all of the customer's gift registries. |
| `gift_registry` - [`GiftRegistry`](/reference/graphql/saas/types-f-i.md#giftregistry) | Details about a specific gift registry. |
| `group` - [`CustomerGroupStorefront`](#customergroupstorefront) | Customer group assigned to the customer |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID assigned to the customer. *(Deprecated: `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.)* |
| `is_subscribed` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer is subscribed to the company's newsletter. |
| `job_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The job title of a company user. |
| `lastname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's family name. |
| `middlename` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's middle name. |
| `orders` - [`CustomerOrders`](#customerorders) |  |
| `prefix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An honorific, such as Dr., Mr., or Mrs. |
| `purchase_order` - [`PurchaseOrder`](/reference/graphql/saas/types-k-p.md#purchaseorder) | Purchase order details. |
| `purchase_order_approval_rule` - [`PurchaseOrderApprovalRule`](/reference/graphql/saas/types-k-p.md#purchaseorderapprovalrule) | Details about a single purchase order approval rule. |
| `purchase_order_approval_rule_metadata` - [`PurchaseOrderApprovalRuleMetadata`](/reference/graphql/saas/types-k-p.md#purchaseorderapprovalrulemetadata) | Purchase order approval rule metadata that can be used for rule edit form rendering. |
| `purchase_order_approval_rules` - [`PurchaseOrderApprovalRules`](/reference/graphql/saas/types-k-p.md#purchaseorderapprovalrules) | A list of purchase order approval rules visible to the customer. |
| `purchase_orders` - [`PurchaseOrders`](/reference/graphql/saas/types-k-p.md#purchaseorders) | A list of purchase orders visible to the customer. |
| `purchase_orders_enabled` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether purchase order functionality is enabled for the current customer. Global and company-level settings are factored into the result. |
| `quote_enabled` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether negotiable quote functionality is enabled for the current customer. Global and company-level settings are factored into the result. |
| `requisition_lists` - [`RequisitionLists`](/reference/graphql/saas/types-q-s.md#requisitionlists) | An object that contains the customer's requisition lists. |
| `return` - [`Return`](/reference/graphql/saas/types-q-s.md#return) | Details about the specified return request from the unique ID for a `Return` object. |
| `returns` - [`Returns`](/reference/graphql/saas/types-q-s.md#returns) | Information about the customer's return requests. |
| `reward_points` - [`RewardPoints`](/reference/graphql/saas/types-q-s.md#rewardpoints) | Customer reward points details. |
| `role` - [`CompanyRole`](#companyrole) | The role name and permissions assigned to the company user. |
| `segments` - [`[CustomerSegmentStorefront]`](#customersegmentstorefront) | Customer segments associated with the current customer |
| `status` - [`CompanyUserStatusEnum`](#companyuserstatusenum) | Indicates whether the company user is ACTIVE or INACTIVE. |
| `store_credit` - [`CustomerStoreCredit`](#customerstorecredit) | Store credit information applied for the logged in customer. |
| `structure_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | ID of the company structure |
| `suffix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's Value-added tax (VAT) number (for corporate customers). |
| `team` - [`CompanyTeam`](#companyteam) | The team the company user is assigned to. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The phone number of the company user. |
| `wishlist_v2` - [`Wishlist`](/reference/graphql/saas/types-t-z.md#wishlist) | Retrieve the wish list identified by the unique ID for a `Wishlist` object. |
| `wishlists` - [`[Wishlist]!`](/reference/graphql/saas/types-t-z.md#wishlist) | An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. |

#### Example

```json
{
  "addresses": [CustomerAddress],
  "addressesV2": CustomerAddresses,
  "admin_assistance_actions": AdminAssistanceActions,
  "allow_remote_shopping_assistance": false,
  "companies": UserCompaniesOutput,
  "company_hierarchy": [CompanyHierarchy],
  "compare_list": CompareList,
  "confirmation_status": "ACCOUNT_CONFIRMED",
  "created_at": "abc123",
  "custom_attributes": [AttributeValueInterface],
  "date_of_birth": "abc123",
  "default_billing": "xyz789",
  "default_shipping": "abc123",
  "email": "abc123",
  "firstname": "xyz789",
  "gender": 987,
  "gift_registries": [GiftRegistry],
  "gift_registry": GiftRegistry,
  "group": CustomerGroupStorefront,
  "id": 4,
  "is_subscribed": false,
  "job_title": "abc123",
  "lastname": "xyz789",
  "middlename": "xyz789",
  "orders": CustomerOrders,
  "prefix": "xyz789",
  "purchase_order": PurchaseOrder,
  "purchase_order_approval_rule": PurchaseOrderApprovalRule,
  "purchase_order_approval_rule_metadata": PurchaseOrderApprovalRuleMetadata,
  "purchase_order_approval_rules": PurchaseOrderApprovalRules,
  "purchase_orders": PurchaseOrders,
  "purchase_orders_enabled": true,
  "quote_enabled": false,
  "requisition_lists": RequisitionLists,
  "return": Return,
  "returns": Returns,
  "reward_points": RewardPoints,
  "role": CompanyRole,
  "segments": [CustomerSegmentStorefront],
  "status": "ACTIVE",
  "store_credit": CustomerStoreCredit,
  "structure_id": "4",
  "suffix": "xyz789",
  "taxvat": "abc123",
  "team": CompanyTeam,
  "telephone": "xyz789",
  "wishlist_v2": Wishlist,
  "wishlists": [Wishlist]
}
```

<HorizontalLine />

### CustomerAddress

Contains detailed information about a customer's billing or shipping address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's city or town. |
| `company` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's company. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The customer's country. |
| `custom_attributesV2` - [`[AttributeValueInterface]!`](/reference/graphql/saas/types-a-b.md#attributevalueinterface) | Custom attributes assigned to the customer address. |
| `default_billing` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the address is the customer's default billing address. |
| `default_shipping` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the address is the customer's default shipping address. |
| `extension_attributes` - [`[CustomerAddressAttribute]`](#customeraddressattribute) | Contains any extension attributes for the address. |
| `fax` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's fax number. |
| `firstname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The first name of the person associated with the shipping/billing address. |
| `id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The ID of a `CustomerAddress` object. *(Deprecated: Use `uid` instead.)* |
| `lastname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The family name of the person associated with the shipping/billing address. |
| `middlename` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The middle name of the person associated with the shipping/billing address. |
| `postcode` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's ZIP or postal code. |
| `prefix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CustomerAddressRegion`](#customeraddressregion) | An object containing the region name, region code, and region ID. |
| `region_id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The unique ID for a pre-defined region. |
| `street` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's telephone number. |
| `uid` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomerAddress` object. |
| `vat_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's Value-added tax (VAT) number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country_code": "AF",
  "custom_attributesV2": [AttributeValueInterface],
  "default_billing": false,
  "default_shipping": false,
  "extension_attributes": [CustomerAddressAttribute],
  "fax": "xyz789",
  "firstname": "abc123",
  "id": 123,
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "xyz789",
  "region": CustomerAddressRegion,
  "region_id": 123,
  "street": ["abc123"],
  "suffix": "xyz789",
  "telephone": "xyz789",
  "uid": "4",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### CustomerAddressAttribute

Specifies the attribute code and value of a customer address attribute.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name assigned to the customer address attribute. |
| `value` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The value assigned to the customer address attribute. |

#### Example

```json
{
  "attribute_code": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### CustomerAddressInput

Contains details about a billing or shipping address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's city or town. |
| `company` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's company. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The two-letter code representing the customer's country. |
| `custom_attributesV2` - [`[AttributeValueInput]`](/reference/graphql/saas/types-a-b.md#attributevalueinput) | Custom attributes assigned to the customer address. |
| `default_billing` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the address is the default billing address. |
| `default_shipping` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the address is the default shipping address. |
| `fax` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's fax number. |
| `firstname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The first name of the person associated with the billing/shipping address. |
| `lastname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The family name of the person associated with the billing/shipping address. |
| `middlename` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's ZIP or postal code. |
| `prefix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CustomerAddressRegionInput`](#customeraddressregioninput) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's telephone number. |
| `vat_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country_code": "AF",
  "custom_attributesV2": [AttributeValueInput],
  "default_billing": true,
  "default_shipping": false,
  "fax": "xyz789",
  "firstname": "xyz789",
  "lastname": "xyz789",
  "middlename": "xyz789",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": CustomerAddressRegionInput,
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "abc123",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### CustomerAddressRegion

Defines the customer's state or province.

#### Fields

| Field Name | Description |
|------------|-------------|
| `region` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The state or province name. |
| `region_code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The address region code. |
| `region_id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "region": "xyz789",
  "region_code": "xyz789",
  "region_id": 987
}
```

<HorizontalLine />

### CustomerAddressRegionInput

Defines the customer's state or province.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `region` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The state or province name. |
| `region_code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The address region code. |
| `region_id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "region": "xyz789",
  "region_code": "abc123",
  "region_id": 123
}
```

<HorizontalLine />

### CustomerAddresses

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CustomerAddress]`](#customeraddress) | An array containing the customer's shipping and billing addresses. |
| `page_info` - [`SearchResultPageInfo`](/reference/graphql/saas/types-q-s.md#searchresultpageinfo) | Contains pagination metadata. |
| `total_count` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The total count of customer addresses. |

#### Example

```json
{
  "items": [CustomerAddress],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### CustomerAttributeMetadata

Customer attribute metadata.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `default_value` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Default attribute value. |
| `entity_type` - [`AttributeEntityTypeEnum!`](/reference/graphql/saas/types-a-b.md#attributeentitytypeenum) | The type of entity that defines the attribute. |
| `frontend_class` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The frontend class of the attribute. |
| `frontend_input` - [`AttributeFrontendInputEnum`](/reference/graphql/saas/types-a-b.md#attributefrontendinputenum) | The frontend input type of the attribute. |
| `input_filter` - [`InputFilterEnum`](/reference/graphql/saas/types-f-i.md#inputfilterenum) | The template used for the input of the attribute (e.g., 'date'). |
| `is_required` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Whether the attribute value is required. |
| `is_unique` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Whether the attribute value must be unique. |
| `label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The label assigned to the attribute. |
| `multiline_count` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The number of lines of the attribute value. |
| `options` - [`[CustomAttributeOptionInterface]!`](#customattributeoptioninterface) | Attribute options. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The position of the attribute in the form. |
| `validate_rules` - [`[ValidationRule]`](/reference/graphql/saas/types-t-z.md#validationrule) | The validation rules of the attribute value. |

#### Example

```json
{
  "code": "4",
  "default_value": "abc123",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "xyz789",
  "frontend_input": "BOOLEAN",
  "input_filter": "NONE",
  "is_required": false,
  "is_unique": true,
  "label": "abc123",
  "multiline_count": 987,
  "options": [CustomAttributeOptionInterface],
  "sort_order": 123,
  "validate_rules": [ValidationRule]
}
```

<HorizontalLine />

### CustomerCreateInput

An input object for creating a customer.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `allow_remote_shopping_assistance` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer has enabled remote shopping assistance. |
| `custom_attributes` - [`[AttributeValueInput]`](/reference/graphql/saas/types-a-b.md#attributevalueinput) | The customer's custom attributes. |
| `date_of_birth` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's date of birth. |
| `email` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The customer's email address. |
| `firstname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The customer's first name. |
| `gender` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The customer's gender (Male - 1, Female - 2). |
| `is_subscribed` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer is subscribed to the company's newsletter. |
| `lastname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The customer's family name. |
| `middlename` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's middle name. |
| `password` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's password. |
| `prefix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An honorific, such as Dr., Mr., or Mrs. |
| `suffix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "allow_remote_shopping_assistance": false,
  "custom_attributes": [AttributeValueInput],
  "date_of_birth": "xyz789",
  "email": "xyz789",
  "firstname": "abc123",
  "gender": 987,
  "is_subscribed": false,
  "lastname": "xyz789",
  "middlename": "xyz789",
  "password": "abc123",
  "prefix": "xyz789",
  "suffix": "xyz789",
  "taxvat": "abc123"
}
```

<HorizontalLine />

### CustomerDownloadableProduct

Contains details about a single downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The date and time the purchase was made. |
| `download_url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The fully qualified URL to the download file. |
| `order_increment_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The unique ID assigned to the item. |
| `remaining_downloads` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The remaining number of times the customer can download the product. |
| `status` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Indicates when the product becomes available for download. Options are `Pending` and `Invoiced`. |

#### Example

```json
{
  "date": "abc123",
  "download_url": "abc123",
  "order_increment_id": "xyz789",
  "remaining_downloads": "xyz789",
  "status": "xyz789"
}
```

<HorizontalLine />

### CustomerDownloadableProducts

Contains a list of downloadable products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CustomerDownloadableProduct]`](#customerdownloadableproduct) | An array of purchased downloadable items. |

#### Example

```json
{"items": [CustomerDownloadableProduct]}
```

<HorizontalLine />

### CustomerGroupStorefront

Data of customer group.

#### Fields

| Field Name | Description |
|------------|-------------|
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomerGroup` object. |

#### Example

```json
{"uid": 4}
```

<HorizontalLine />

### CustomerOrder

Contains details about each of the customer's orders.

#### Fields

| Field Name | Description |
|------------|-------------|
| `admin_assisted_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | Admin user id when the order was placed with assistance (Login as Customer); null if not assisted. |
| `applied_coupons` - [`[AppliedCoupon]!`](/reference/graphql/saas/types-a-b.md#appliedcoupon) | Coupons applied to the order. |
| `applied_gift_cards` - [`[ApplyGiftCardToOrder]`](/reference/graphql/saas/types-a-b.md#applygiftcardtoorder) | An array of gift cards applied to the order. |
| `available_actions` - [`[OrderActionType]!`](/reference/graphql/saas/types-k-p.md#orderactiontype) | List of available order actions. |
| `billing_address` - [`OrderAddress`](/reference/graphql/saas/types-k-p.md#orderaddress) | The billing address for the order. |
| `carrier` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The shipping carrier for the order delivery. |
| `comments` - [`[SalesCommentItem]`](/reference/graphql/saas/types-q-s.md#salescommentitem) | Comments about the order. |
| `credit_memos` - [`[CreditMemo]`](#creditmemo) | A list of credit memos. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the order |
| `customer_info` - [`OrderCustomerInfo!`](/reference/graphql/saas/types-k-p.md#ordercustomerinfo) | Returns customer information from order. |
| `email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Order customer email. |
| `gift_message` - [`GiftMessage`](/reference/graphql/saas/types-f-i.md#giftmessage) | The entered gift message for the order |
| `gift_receipt_included` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer requested a gift receipt for the order. |
| `gift_wrapping` - [`GiftWrapping`](/reference/graphql/saas/types-f-i.md#giftwrapping) | The selected gift wrapping for the order. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomerOrder` object. |
| `invoices` - [`[Invoice]!`](/reference/graphql/saas/types-f-i.md#invoice) | A list of invoices for the order. |
| `is_virtual` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | `TRUE` if the order is virtual |
| `items` - [`[OrderItemInterface]`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | An array containing the items purchased in this order. |
| `items_eligible_for_return` - [`[OrderItemInterface]`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | A list of order items eligible to be in a return request. |
| `negotiable_quote` - [`NegotiableQuote`](/reference/graphql/saas/types-k-p.md#negotiablequote) | The negotiable quote associated with this order. |
| `number` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The order number. |
| `order_date` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date the order was placed. |
| `order_status_change_date` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date the order status was last updated. |
| `payment_methods` - [`[OrderPaymentMethod]`](/reference/graphql/saas/types-k-p.md#orderpaymentmethod) | Payment details for the order. |
| `printed_card_included` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer requested a printed card for the order. |
| `returns` - [`Returns`](/reference/graphql/saas/types-q-s.md#returns) | Return requests associated with this order. |
| `shipments` - [`[OrderShipment]`](/reference/graphql/saas/types-k-p.md#ordershipment) | A list of shipments for the order. |
| `shipping_address` - [`OrderAddress`](/reference/graphql/saas/types-k-p.md#orderaddress) | The shipping address for the order. |
| `shipping_method` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The delivery method for the order. |
| `status` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The current status of the order. |
| `token` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The token that can be used to retrieve the order using order query. |
| `total` - [`OrderTotal`](/reference/graphql/saas/types-k-p.md#ordertotal) | Details about the calculated totals for this order. |

#### Example

```json
{
  "admin_assisted_order": 987,
  "applied_coupons": [AppliedCoupon],
  "applied_gift_cards": [ApplyGiftCardToOrder],
  "available_actions": ["REORDER"],
  "billing_address": OrderAddress,
  "carrier": "xyz789",
  "comments": [SalesCommentItem],
  "credit_memos": [CreditMemo],
  "custom_attributes": [CustomAttribute],
  "customer_info": OrderCustomerInfo,
  "email": "abc123",
  "gift_message": GiftMessage,
  "gift_receipt_included": false,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "invoices": [Invoice],
  "is_virtual": true,
  "items": [OrderItemInterface],
  "items_eligible_for_return": [OrderItemInterface],
  "negotiable_quote": NegotiableQuote,
  "number": "abc123",
  "order_date": "abc123",
  "order_status_change_date": "xyz789",
  "payment_methods": [OrderPaymentMethod],
  "printed_card_included": false,
  "returns": Returns,
  "shipments": [OrderShipment],
  "shipping_address": OrderAddress,
  "shipping_method": "abc123",
  "status": "abc123",
  "token": "xyz789",
  "total": OrderTotal
}
```

<HorizontalLine />

### CustomerOrderSortInput

CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sort_direction` - [`SortEnum!`](/reference/graphql/saas/types-q-s.md#sortenum) | This enumeration indicates whether to return results in ascending or descending order |
| `sort_field` - [`CustomerOrderSortableField!`](#customerordersortablefield) | Specifies the field to use for sorting |

#### Example

```json
{"sort_direction": "ASC", "sort_field": "NUMBER"}
```

<HorizontalLine />

### CustomerOrderSortableField

Specifies the field to use for sorting

#### Values

| Enum Value | Description |
|------------|-------------|
| `NUMBER` | Sorts customer orders by number |
| `CREATED_AT` | Sorts customer orders by created_at field |

#### Example

```json
""NUMBER""
```

<HorizontalLine />

### CustomerOrders

The collection of orders that match the conditions defined in the filter.

#### Fields

| Field Name | Description |
|------------|-------------|
| `date_of_first_order` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Date of the first order placed in the store |
| `items` - [`[CustomerOrder]!`](#customerorder) | An array of customer orders. |
| `page_info` - [`SearchResultPageInfo`](/reference/graphql/saas/types-q-s.md#searchresultpageinfo) | Contains pagination metadata. |
| `total_count` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The total count of customer orders. |

#### Example

```json
{
  "date_of_first_order": "xyz789",
  "items": [CustomerOrder],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### CustomerOrdersFilterInput

Identifies the filter to use for filtering orders.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `grand_total` - [`FilterRangeTypeInput`](/reference/graphql/saas/types-f-i.md#filterrangetypeinput) | Filters by order base grand total value. |
| `number` - [`FilterStringTypeInput`](/reference/graphql/saas/types-f-i.md#filterstringtypeinput) | Filters by order number. |
| `order_date` - [`FilterRangeTypeInput`](/reference/graphql/saas/types-f-i.md#filterrangetypeinput) | Filters by order created_at time. |
| `status` - [`FilterEqualTypeInput`](/reference/graphql/saas/types-f-i.md#filterequaltypeinput) | Filters by order status. |

#### Example

```json
{
  "grand_total": FilterRangeTypeInput,
  "number": FilterStringTypeInput,
  "order_date": FilterRangeTypeInput,
  "status": FilterEqualTypeInput
}
```

<HorizontalLine />

### CustomerOutput

Contains details about a newly-created or updated customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customer` - [`Customer!`](#customer) | Customer details after creating or updating a customer. |

#### Example

```json
{"customer": Customer}
```

<HorizontalLine />

### CustomerPaymentTokens

Contains payment tokens stored in the customer's vault.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[PaymentToken]!`](/reference/graphql/saas/types-k-p.md#paymenttoken) | An array of payment tokens. |

#### Example

```json
{"items": [PaymentToken]}
```

<HorizontalLine />

### CustomerSegmentStorefront

Customer segment details

#### Fields

| Field Name | Description |
|------------|-------------|
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomerSegment` object. |

#### Example

```json
{"uid": "4"}
```

<HorizontalLine />

### CustomerStoreCredit

Contains store credit information with balance and history.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance_history` - [`CustomerStoreCreditHistory`](#customerstorecredithistory) | Contains the customer's store credit balance history. If the history or store credit feature is disabled, then a null value will be returned. |
| `current_balance` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The current balance of store credit. |
| `enabled` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned. |

#### Example

```json
{
  "balance_history": CustomerStoreCreditHistory,
  "current_balance": Money,
  "enabled": false
}
```

<HorizontalLine />

### CustomerStoreCreditHistory

Lists changes to the amount of store credit available to the customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CustomerStoreCreditHistoryItem]`](#customerstorecredithistoryitem) | An array containing information about changes to the store credit available to the customer. |
| `page_info` - [`SearchResultPageInfo`](/reference/graphql/saas/types-q-s.md#searchresultpageinfo) | Metadata for pagination rendering. |
| `total_count` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The number of items returned. |

#### Example

```json
{
  "items": [CustomerStoreCreditHistoryItem],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### CustomerStoreCreditHistoryItem

Contains store credit history information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `action` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The action that was made on the store credit. |
| `actual_balance` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The store credit available to the customer as a result of this action. |
| `balance_change` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The amount added to or subtracted from the store credit as a result of this action. |
| `date_time_changed` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The date and time when the store credit change was made. |

#### Example

```json
{
  "action": "xyz789",
  "actual_balance": Money,
  "balance_change": Money,
  "date_time_changed": "xyz789"
}
```

<HorizontalLine />

### CustomerToken

Contains a customer authorization token.

#### Fields

| Field Name | Description |
|------------|-------------|
| `token` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer authorization token. |

#### Example

```json
{"token": "abc123"}
```

<HorizontalLine />

### CustomerUpdateInput

An input object for updating a customer.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `allow_remote_shopping_assistance` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer has enabled remote shopping assistance. |
| `custom_attributes` - [`[AttributeValueInput]`](/reference/graphql/saas/types-a-b.md#attributevalueinput) | The customer's custom attributes. |
| `date_of_birth` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's date of birth. |
| `firstname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's first name. |
| `gender` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The customer's gender (Male - 1, Female - 2). |
| `is_subscribed` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer is subscribed to the company's newsletter. |
| `lastname` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's family name. |
| `middlename` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's middle name. |
| `prefix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | An honorific, such as Dr., Mr., or Mrs. |
| `suffix` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "allow_remote_shopping_assistance": false,
  "custom_attributes": [AttributeValueInput],
  "date_of_birth": "abc123",
  "firstname": "xyz789",
  "gender": 987,
  "is_subscribed": true,
  "lastname": "abc123",
  "middlename": "abc123",
  "prefix": "xyz789",
  "suffix": "xyz789",
  "taxvat": "abc123"
}
```

<HorizontalLine />

### CustomizableAreaOption

Contains information about a text area that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `product_sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object. |
| `value` - [`CustomizableAreaValue`](#customizableareavalue) | An object that defines a text area. |

#### Example

```json
{
  "product_sku": "abc123",
  "required": false,
  "sort_order": 987,
  "title": "xyz789",
  "uid": 4,
  "value": CustomizableAreaValue
}
```

<HorizontalLine />

### CustomizableAreaValue

Defines the price and sku of a product whose page contains a customized text area.

#### Fields

| Field Name | Description |
|------------|-------------|
| `max_characters` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The maximum number of characters that can be entered for this customizable option. |
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](/reference/graphql/saas/types-k-p.md#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableAreaValue` object. |

#### Example

```json
{
  "max_characters": 987,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableCheckboxOption

Contains information about a set of checkbox values that are defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `required` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object. |
| `value` - [`[CustomizableCheckboxValue]`](#customizablecheckboxvalue) | An array that defines a set of checkbox values. |

#### Example

```json
{
  "required": true,
  "sort_order": 987,
  "title": "xyz789",
  "uid": 4,
  "value": [CustomizableCheckboxValue]
}
```

<HorizontalLine />

### CustomizableCheckboxValue

Defines the price and sku of a product whose page contains a customized set of checkbox values.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The ID assigned to the value. |
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](/reference/graphql/saas/types-k-p.md#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the checkbox value is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableCheckboxValue` object. |

#### Example

```json
{
  "option_type_id": 987,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "abc123",
  "sort_order": 123,
  "title": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableDateOption

Contains information about a date picker that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `product_sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object. |
| `value` - [`CustomizableDateValue`](#customizabledatevalue) | An object that defines a date field in a customizable option. |

#### Example

```json
{
  "product_sku": "abc123",
  "required": false,
  "sort_order": 987,
  "title": "abc123",
  "uid": "4",
  "value": CustomizableDateValue
}
```

<HorizontalLine />

### CustomizableDateTypeEnum

Defines the customizable date type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `DATE` |  |
| `DATE_TIME` |  |
| `TIME` |  |

#### Example

```json
""DATE""
```

<HorizontalLine />

### CustomizableDateValue

Defines the price and sku of a product whose page contains a customized date picker.

#### Fields

| Field Name | Description |
|------------|-------------|
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](/reference/graphql/saas/types-k-p.md#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit for this option. |
| `type` - [`CustomizableDateTypeEnum`](#customizabledatetypeenum) | DATE, DATE_TIME or TIME |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableDateValue` object. |

#### Example

```json
{
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "xyz789",
  "type": "DATE",
  "uid": "4"
}
```

<HorizontalLine />

### CustomizableDropDownOption

Contains information about a drop down menu that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `required` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object. |
| `value` - [`[CustomizableDropDownValue]`](#customizabledropdownvalue) | An array that defines the set of options for a drop down menu. |

#### Example

```json
{
  "required": true,
  "sort_order": 987,
  "title": "xyz789",
  "uid": 4,
  "value": [CustomizableDropDownValue]
}
```

<HorizontalLine />

### CustomizableDropDownValue

Defines the price and sku of a product whose page contains a customized drop down menu.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The ID assigned to the value. |
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](/reference/graphql/saas/types-k-p.md#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableDropDownValue` object. |

#### Example

```json
{
  "option_type_id": 987,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "abc123",
  "sort_order": 987,
  "title": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableFieldOption

Contains information about a text field that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `product_sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object. |
| `value` - [`CustomizableFieldValue`](#customizablefieldvalue) | An object that defines a text field. |

#### Example

```json
{
  "product_sku": "xyz789",
  "required": false,
  "sort_order": 123,
  "title": "xyz789",
  "uid": 4,
  "value": CustomizableFieldValue
}
```

<HorizontalLine />

### CustomizableFieldValue

Defines the price and sku of a product whose page contains a customized text field.

#### Fields

| Field Name | Description |
|------------|-------------|
| `max_characters` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The maximum number of characters that can be entered for this customizable option. |
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The price of the custom value. |
| `price_type` - [`PriceTypeEnum`](/reference/graphql/saas/types-k-p.md#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableFieldValue` object. |

#### Example

```json
{
  "max_characters": 123,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### CustomizableFileOption

Contains information about a file picker that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `product_sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object. |
| `value` - [`CustomizableFileValue`](#customizablefilevalue) | An object that defines a file value. |

#### Example

```json
{
  "product_sku": "abc123",
  "required": true,
  "sort_order": 123,
  "title": "xyz789",
  "uid": 4,
  "value": CustomizableFileValue
}
```

<HorizontalLine />

### CustomizableFileValue

Defines the price and sku of a product whose page contains a customized file picker.

#### Fields

| Field Name | Description |
|------------|-------------|
| `file_extension` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The file extension to accept. |
| `image_size_x` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The maximum width of an image. |
| `image_size_y` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The maximum height of an image. |
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](/reference/graphql/saas/types-k-p.md#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableFileValue` object. |

#### Example

```json
{
  "file_extension": "xyz789",
  "image_size_x": 987,
  "image_size_y": 987,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableMultipleOption

Contains information about a multiselect that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `required` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object. |
| `value` - [`[CustomizableMultipleValue]`](#customizablemultiplevalue) | An array that defines the set of options for a multiselect. |

#### Example

```json
{
  "required": false,
  "sort_order": 987,
  "title": "abc123",
  "uid": "4",
  "value": [CustomizableMultipleValue]
}
```

<HorizontalLine />

### CustomizableMultipleValue

Defines the price and sku of a product whose page contains a customized multiselect.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The ID assigned to the value. |
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](/reference/graphql/saas/types-k-p.md#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableMultipleValue` object. |

#### Example

```json
{
  "option_type_id": 987,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "xyz789",
  "sort_order": 987,
  "title": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableOptionInput

Defines a customizable option.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `uid` - [`ID`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CartItemInterface` object. |
| `value_string` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The string value of the option. |

#### Example

```json
{"uid": 4, "value_string": "xyz789"}
```

<HorizontalLine />

### CustomizableOptionInterface

Contains basic information about a customizable option. It can be implemented by several types of configurable options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `required` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object. |

#### Possible Types

| CustomizableOptionInterface Types |
|----------------|
| [`CustomizableAreaOption`](#customizableareaoption) |
| [`CustomizableCheckboxOption`](#customizablecheckboxoption) |
| [`CustomizableDateOption`](#customizabledateoption) |
| [`CustomizableDropDownOption`](#customizabledropdownoption) |
| [`CustomizableFieldOption`](#customizablefieldoption) |
| [`CustomizableFileOption`](#customizablefileoption) |
| [`CustomizableMultipleOption`](#customizablemultipleoption) |
| [`CustomizableRadioOption`](#customizableradiooption) |

#### Example

```json
{
  "required": true,
  "sort_order": 987,
  "title": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### CustomizableProductInterface

Contains information about customizable product options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |

#### Possible Types

| CustomizableProductInterface Types |
|----------------|
| [`BundleProduct`](/reference/graphql/saas/types-a-b.md#bundleproduct) |
| [`ConfigurableProduct`](#configurableproduct) |
| [`DownloadableProduct`](#downloadableproduct) |
| [`GiftCardProduct`](/reference/graphql/saas/types-f-i.md#giftcardproduct) |
| [`SimpleProduct`](/reference/graphql/saas/types-q-s.md#simpleproduct) |
| [`VirtualProduct`](/reference/graphql/saas/types-t-z.md#virtualproduct) |

#### Example

```json
{"options": [CustomizableOptionInterface]}
```

<HorizontalLine />

### CustomizableRadioOption

Contains information about a set of radio buttons that are defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `required` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the option is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object. |
| `value` - [`[CustomizableRadioValue]`](#customizableradiovalue) | An array that defines a set of radio buttons. |

#### Example

```json
{
  "required": true,
  "sort_order": 987,
  "title": "xyz789",
  "uid": 4,
  "value": [CustomizableRadioValue]
}
```

<HorizontalLine />

### CustomizableRadioValue

Defines the price and sku of a product whose page contains a customized set of radio buttons.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The ID assigned to the value. |
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](/reference/graphql/saas/types-k-p.md#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | The order in which the radio button is displayed. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name for this option. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableRadioValue` object. |

#### Example

```json
{
  "option_type_id": 987,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "xyz789",
  "sort_order": 123,
  "title": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### DateTime

A slightly refined version of RFC-3339 compliant DateTime Scalar

#### Example

```json
"2007-12-03T10:15:30Z"
```

<HorizontalLine />

### DeleteCompanyRoleOutput

Contains the response to the request to delete the company role.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | SIndicates whether the company role has been deleted successfully. |

#### Example

```json
{"success": true}
```

<HorizontalLine />

### DeleteCompanyTeamOutput

Contains the status of the request to delete a company team.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the delete operation succeeded. |

#### Example

```json
{"success": false}
```

<HorizontalLine />

### DeleteCompanyUserOutput

Contains the response to the request to delete the company user.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the company user has been deactivated successfully. |

#### Example

```json
{"success": false}
```

<HorizontalLine />

### DeleteCompareListOutput

Contains the results of the request to delete a compare list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `result` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the compare list was successfully deleted. |

#### Example

```json
{"result": false}
```

<HorizontalLine />

### DeleteNegotiableQuoteError

#### Types

| Union Types |
|-------------|
| [`NegotiableQuoteInvalidStateError`](/reference/graphql/saas/types-k-p.md#negotiablequoteinvalidstateerror) |
| [`NoSuchEntityUidError`](/reference/graphql/saas/types-k-p.md#nosuchentityuiderror) |
| [`InternalError`](/reference/graphql/saas/types-f-i.md#internalerror) |

#### Example

```json
NegotiableQuoteInvalidStateError
```

<HorizontalLine />

### DeleteNegotiableQuoteOperationFailure

Contains details about a failed delete operation on a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[DeleteNegotiableQuoteError]!`](#deletenegotiablequoteerror) |  |
| `quote_uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of a `NegotiableQuote` object. |

#### Example

```json
{
  "errors": [NegotiableQuoteInvalidStateError],
  "quote_uid": "4"
}
```

<HorizontalLine />

### DeleteNegotiableQuoteOperationResult

#### Types

| Union Types |
|-------------|
| [`NegotiableQuoteUidOperationSuccess`](/reference/graphql/saas/types-k-p.md#negotiablequoteuidoperationsuccess) |
| [`DeleteNegotiableQuoteOperationFailure`](#deletenegotiablequoteoperationfailure) |

#### Example

```json
NegotiableQuoteUidOperationSuccess
```

<HorizontalLine />

### DeleteNegotiableQuoteTemplateInput

Specifies the quote template id of the quote template to delete

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{"template_id": "4"}
```

<HorizontalLine />

### DeleteNegotiableQuotesInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_uids` - [`[ID]!`](/reference/graphql/saas/types-f-i.md#id) | A list of unique IDs for `NegotiableQuote` objects to delete. |

#### Example

```json
{"quote_uids": [4]}
```

<HorizontalLine />

### DeleteNegotiableQuotesOutput

Contains a list of undeleted negotiable quotes the company user can view.

#### Fields

| Field Name | Description |
|------------|-------------|
| `negotiable_quotes` - [`NegotiableQuotesOutput`](/reference/graphql/saas/types-k-p.md#negotiablequotesoutput) | A list of negotiable quotes that the customer can view |
| `operation_results` - [`[DeleteNegotiableQuoteOperationResult]!`](#deletenegotiablequoteoperationresult) | An array of deleted negotiable quote UIDs and details about any errors. |
| `result_status` - [`BatchMutationStatus!`](/reference/graphql/saas/types-a-b.md#batchmutationstatus) | The status of the request to delete one or more negotiable quotes. |

#### Example

```json
{
  "negotiable_quotes": NegotiableQuotesOutput,
  "operation_results": [
    NegotiableQuoteUidOperationSuccess
  ],
  "result_status": "SUCCESS"
}
```

<HorizontalLine />

### DeletePaymentTokenOutput

Indicates whether the request succeeded and returns the remaining customer payment tokens.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customerPaymentTokens` - [`CustomerPaymentTokens`](#customerpaymenttokens) | A container for the customer's remaining payment tokens. |
| `result` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the request succeeded. |

#### Example

```json
{
  "customerPaymentTokens": CustomerPaymentTokens,
  "result": false
}
```

<HorizontalLine />

### DeletePurchaseOrderApprovalRuleError

Contains details about an error that occurred when deleting an approval rule .

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The text of the error message. |
| `type` - [`DeletePurchaseOrderApprovalRuleErrorType`](#deletepurchaseorderapprovalruleerrortype) | The error type. |

#### Example

```json
{"message": "abc123", "type": "UNDEFINED"}
```

<HorizontalLine />

### DeletePurchaseOrderApprovalRuleErrorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNDEFINED` |  |
| `NOT_FOUND` |  |

#### Example

```json
""UNDEFINED""
```

<HorizontalLine />

### DeletePurchaseOrderApprovalRuleInput

Specifies the IDs of the approval rules to delete.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `approval_rule_uids` - [`[ID]!`](/reference/graphql/saas/types-f-i.md#id) | An array of purchase order approval rule IDs. |

#### Example

```json
{"approval_rule_uids": ["4"]}
```

<HorizontalLine />

### DeletePurchaseOrderApprovalRuleOutput

Contains any errors encountered while attempting to delete approval rules.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[DeletePurchaseOrderApprovalRuleError]!`](#deletepurchaseorderapprovalruleerror) | An array of error messages encountered while performing the operation. |

#### Example

```json
{"errors": [DeletePurchaseOrderApprovalRuleError]}
```

<HorizontalLine />

### DeleteRequisitionListItemsOutput

Output of the request to remove items from the requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](/reference/graphql/saas/types-q-s.md#requisitionlist) | The requisition list after removing items. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### DeleteRequisitionListOutput

Indicates whether the request to delete the requisition list was successful.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_lists` - [`RequisitionLists`](/reference/graphql/saas/types-q-s.md#requisitionlists) | The customer's requisition lists after deleting a requisition list. |
| `status` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the request to delete the requisition list was successful. |

#### Example

```json
{"requisition_lists": RequisitionLists, "status": false}
```

<HorizontalLine />

### DeleteWishlistOutput

Contains the status of the request to delete a wish list and an array of the customer's remaining wish lists.

#### Fields

| Field Name | Description |
|------------|-------------|
| `status` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the wish list was deleted. |
| `wishlists` - [`[Wishlist]!`](/reference/graphql/saas/types-t-z.md#wishlist) | A list of undeleted wish lists. |

#### Example

```json
{"status": true, "wishlists": [Wishlist]}
```

<HorizontalLine />

### Discount

Specifies the discount type and value for quote line item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The amount of the discount. |
| `applied_to` - [`CartDiscountType!`](#cartdiscounttype) | The type of the entity the discount is applied to. |
| `coupon` - [`AppliedCoupon`](/reference/graphql/saas/types-a-b.md#appliedcoupon) | The coupon related to the discount. |
| `is_discounting_locked` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Is quote discounting locked for line item. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A description of the discount. |
| `type` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Quote line item discount type. Values: 1 = PERCENTAGE_DISCOUNT; 2 = AMOUNT_DISCOUNT; 3 = PROPOSED_TOTAL. |
| `value` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Quote line item discount value. |

#### Example

```json
{
  "amount": Money,
  "applied_to": "ITEM",
  "coupon": AppliedCoupon,
  "is_discounting_locked": true,
  "label": "xyz789",
  "type": "abc123",
  "value": 987.65
}
```

<HorizontalLine />

### DownloadableCartItem

An implementation for downloadable product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `backorder_message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Customer-facing hint when the line is salable on notify backorders with insufficient physical quantity; null otherwise. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the cart item |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `is_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | True if requested quantity is less than available stock, false otherwise. *(Deprecated: Use `is_salable` instead. It indicates whether the line can be purchased, including backorder configuration.)* |
| `is_salable` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | True when the item can be purchased and should not block checkout: stock status is in stock and either physical quantity covers the requested quantity or backorders are allowed. |
| `links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the links for the downloadable product added to the cart. |
| `max_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Shortage or unavailability message for the line; null when the item is salable. |
| `note_from_buyer` - [`[ItemNote]`](/reference/graphql/saas/types-f-i.md#itemnote) | The buyer's quote line item note. |
| `note_from_seller` - [`[ItemNote]`](/reference/graphql/saas/types-f-i.md#itemnote) | The seller's quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about an item in the cart. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | The quantity of this item in the cart. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about samples of the selected downloadable product. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CartItemInterface` object. |

#### Example

```json
{
  "backorder_message": "xyz789",
  "custom_attributes": [CustomAttribute],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "is_available": false,
  "is_salable": true,
  "links": [DownloadableProductLinks],
  "max_qty": 987.65,
  "min_qty": 987.65,
  "not_available_message": "xyz789",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 123.45,
  "samples": [DownloadableProductSamples],
  "uid": "4"
}
```

<HorizontalLine />

### DownloadableCreditMemoItem

Defines downloadable product options for `CreditMemoItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the credit memo item |
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are refunded from the downloadable product. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CreditMemoItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of refunded items. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_refunded": 123.45
}
```

<HorizontalLine />

### DownloadableInvoiceItem

Defines downloadable product options for `InvoiceItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the invoice item |
| `discounts` - [`[Discount]`](#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are invoiced from the downloadable product. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for an `InvoiceItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of invoiced items. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_invoiced": 123.45
}
```

<HorizontalLine />

### DownloadableItemsLinks

Defines characteristics of the links for downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | A number indicating the sort order. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name of the link. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `DownloadableItemsLinks` object. |

#### Example

```json
{
  "sort_order": 123,
  "title": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### DownloadableOrderItem

Defines downloadable product options for `OrderItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the order item |
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are ordered from the downloadable product. |
| `eligible_for_return` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](/reference/graphql/saas/types-k-p.md#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](/reference/graphql/saas/types-f-i.md#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](/reference/graphql/saas/types-f-i.md#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for an `OrderItemInterface` object. |
| `prices` - [`OrderItemPrices`](/reference/graphql/saas/types-k-p.md#orderitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface`](/reference/graphql/saas/types-k-p.md#productinterface) | The ProductInterface object, which contains details about the base product *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `product_type` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](/reference/graphql/saas/types-q-s.md#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of refunded items. |
| `quantity_return_requested` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The requested return quantity of the item. |
| `quantity_returned` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](/reference/graphql/saas/types-k-p.md#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The status of the order item. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
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

### DownloadableProduct

Defines a product that the shopper downloads.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The product's country of origin. |
| `crosssell_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](/reference/graphql/saas/types-k-p.md#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `downloadable_product_links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the links for this downloadable product. |
| `downloadable_product_samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about samples of this downloadable product. |
| `gift_message_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Indicates whether the product can be returned. |
| `links_purchased_separately` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | A value of 1 indicates that each link in the array must be purchased separately. |
| `links_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The heading above the list of downloadable products. |
| `manufacturer` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | A number representing the product's manufacturer. |
| `max_sale_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](/reference/graphql/saas/types-k-p.md#mediagalleryinterface) | An array of media gallery objects. |
| `meta_description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_sale_qty` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Minimum Qty Allowed in Shopping Cart |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](/reference/graphql/saas/types-q-s.md#string) | If the product has multiple options, determines where they appear on the product page. |
| `price_range` - [`PriceRange!`](/reference/graphql/saas/types-k-p.md#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](/reference/graphql/saas/types-t-z.md#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](/reference/graphql/saas/types-k-p.md#productlinksinterface) | An array of `ProductLinks` objects. |
| `quantity` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | An array of products to be displayed in a Related Products block. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The discounted price of the product. |
| `special_to_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The end date for a product with a special price. |
| `stock_status` - [`ProductStockStatus`](/reference/graphql/saas/types-k-p.md#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the product's thumbnail image. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `ProductInterface` object. |
| `upsell_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | Upsell Products |
| `url_key` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The part of the URL that identifies the product |

#### Example

```json
{
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "country_of_manufacture": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "downloadable_product_links": [
    DownloadableProductLinks
  ],
  "downloadable_product_samples": [
    DownloadableProductSamples
  ],
  "gift_message_available": false,
  "gift_wrapping_available": false,
  "gift_wrapping_price": Money,
  "image": ProductImage,
  "is_returnable": "abc123",
  "links_purchased_separately": 123,
  "links_title": "abc123",
  "manufacturer": 987,
  "max_sale_qty": 987.65,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "abc123",
  "min_sale_qty": 123.45,
  "name": "xyz789",
  "new_from_date": "abc123",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "options": [CustomizableOptionInterface],
  "options_container": "xyz789",
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
  "uid": 4,
  "upsell_products": [ProductInterface],
  "url_key": "abc123"
}
```

<HorizontalLine />

### DownloadableProductCartItemInput

Defines a single downloadable product.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | The ID and value of the option. |
| `data` - [`CartItemInput!`](#cartiteminput) | The quantity and SKU of the downloadable product. |
| `downloadable_product_links` - [`[DownloadableProductLinksInput]`](#downloadableproductlinksinput) | An array of objects containing the link_id of the downloadable product link. |

#### Example

```json
{
  "customizable_options": [CustomizableOptionInput],
  "data": CartItemInput,
  "downloadable_product_links": [
    DownloadableProductLinksInput
  ]
}
```

<HorizontalLine />

### DownloadableProductLinks

Defines characteristics of a downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `price` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The price of the downloadable product. |
| `sample_url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The full URL to the downloadable sample. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | A number indicating the sort order. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name of the link. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `DownloadableProductLinks` object. |

#### Example

```json
{
  "price": 987.65,
  "sample_url": "abc123",
  "sort_order": 123,
  "title": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### DownloadableProductLinksInput

Contains the link ID for the downloadable product.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `link_id` - [`Int!`](/reference/graphql/saas/types-f-i.md#int) | The unique ID of the downloadable product link. |

#### Example

```json
{"link_id": 123}
```

<HorizontalLine />

### DownloadableProductSamples

Defines characteristics of a downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `sample_url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The full URL to the downloadable sample. |
| `sort_order` - [`Int`](/reference/graphql/saas/types-f-i.md#int) | A number indicating the sort order. |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name of the sample. |

#### Example

```json
{
  "sample_url": "abc123",
  "sort_order": 987,
  "title": "abc123"
}
```

<HorizontalLine />

### DownloadableRequisitionListItem

Contains details about downloadable products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array of links for downloadable products in the requisition list. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | The quantity of the product added to the requisition list. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array of links to downloadable product samples. |
| `sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The product SKU. |
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID of an item in a requisition list. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "links": [DownloadableProductLinks],
  "product": ProductInterface,
  "quantity": 123.45,
  "samples": [DownloadableProductSamples],
  "sku": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### DownloadableWishlistItem

A downloadable product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The description of the item. |
| `id` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `WishlistItemInterface` object. |
| `links_v2` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the selected links. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](/reference/graphql/saas/types-f-i.md#float) | The quantity of this wish list item. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about the selected samples. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": "4",
  "links_v2": [DownloadableProductLinks],
  "product": ProductInterface,
  "quantity": 123.45,
  "samples": [DownloadableProductSamples]
}
```

<HorizontalLine />

### DuplicateNegotiableQuoteInput

Identifies a quote to be duplicated

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `duplicated_quote_uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | ID for the newly duplicated quote. |
| `quote_uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | ID of the quote to be duplicated. |

#### Example

```json
{"duplicated_quote_uid": 4, "quote_uid": 4}
```

<HorizontalLine />

### DuplicateNegotiableQuoteOutput

Contains the newly created negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](/reference/graphql/saas/types-k-p.md#negotiablequote) | Negotiable Quote resulting from duplication operation. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### EnteredCustomAttributeInput

Contains details about a custom text attribute that the buyer entered.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A string that identifies the entered custom attribute. |
| `value` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The text or other entered value. |

#### Example

```json
{
  "attribute_code": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### EnteredOptionInput

Defines a customer-entered option.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `uid` - [`ID!`](/reference/graphql/saas/types-f-i.md#id) | The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. |
| `value` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Text the customer entered. |

#### Example

```json
{"uid": 4, "value": "abc123"}
```

<HorizontalLine />

### Error

An error encountered while adding an item to the the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CartUserInputErrorType!`](#cartuserinputerrortype) | A cart-specific error code. |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A localized error message. |

#### Possible Types

| Error Types |
|----------------|
| [`CartUserInputError`](#cartuserinputerror) |
| [`InsufficientStockError`](/reference/graphql/saas/types-f-i.md#insufficientstockerror) |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "xyz789"
}
```

<HorizontalLine />

### ErrorInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The returned error message. |

#### Possible Types

| ErrorInterface Types |
|----------------|
| [`InternalError`](/reference/graphql/saas/types-f-i.md#internalerror) |
| [`NegotiableQuoteInvalidStateError`](/reference/graphql/saas/types-k-p.md#negotiablequoteinvalidstateerror) |
| [`NoSuchEntityUidError`](/reference/graphql/saas/types-k-p.md#nosuchentityuiderror) |

#### Example

```json
{"message": "xyz789"}
```

<HorizontalLine />

### EstimateAddressInput

Contains details about an address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `country_code` - [`CountryCodeEnum!`](#countrycodeenum) | The two-letter code representing the customer's country. |
| `postcode` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The customer's ZIP or postal code. |
| `region` - [`CustomerAddressRegionInput`](#customeraddressregioninput) | An object containing the region name, region code, and region ID. |

#### Example

```json
{
  "country_code": "AF",
  "postcode": "xyz789",
  "region": CustomerAddressRegionInput
}
```

<HorizontalLine />

### EstimateTotalsInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`EstimateAddressInput!`](#estimateaddressinput) | Customer's address to estimate totals. |
| `cart_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The unique ID of the cart to query. |
| `shipping_method` - [`ShippingMethodInput`](/reference/graphql/saas/types-q-s.md#shippingmethodinput) | Selected shipping method to estimate totals. |

#### Example

```json
{
  "address": EstimateAddressInput,
  "cart_id": "xyz789",
  "shipping_method": ShippingMethodInput
}
```

<HorizontalLine />

### EstimateTotalsOutput

Estimate totals output.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart`](#cart) | Cart after totals estimation |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### ExchangeExternalCustomerTokenInput

Contains details about external customer.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customer` - [`CustomerCreateInput!`](#customercreateinput) | An input object that defines the customer characteristics to update. |

#### Example

```json
{"customer": CustomerCreateInput}
```

<HorizontalLine />

### ExchangeExternalCustomerTokenOutput

Contains customer token for external customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customer` - [`Customer!`](#customer) | Return detailed information about a customer account. |
| `token` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The customer authorization token. |

#### Example

```json
{
  "customer": Customer,
  "token": "xyz789"
}
```

<HorizontalLine />

### ExchangeRate

Lists the exchange rate.

#### Fields

| Field Name | Description |
|------------|-------------|
| `currency_to` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Specifies the store’s default currency to exchange to. |
| `rate` - [`Float`](/reference/graphql/saas/types-f-i.md#float) | The exchange rate for the store’s default currency. |

#### Example

```json
{"currency_to": "xyz789", "rate": 987.65}
```

<HorizontalLine />
