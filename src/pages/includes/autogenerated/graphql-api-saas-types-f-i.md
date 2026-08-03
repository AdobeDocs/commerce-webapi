## Types

### FastlaneConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment method code as defined in the payment gateway |
| `is_visible` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Defines the payment intent (Authorize or Capture |
| `payment_source` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment source for the payment method |
| `sdk_params` - [`[SDKParams]`](/reference/graphql/saas/types-q-s.md#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The relative order the payment method is displayed on the checkout page |
| `three_ds_mode` - [`ThreeDSMode`](/reference/graphql/saas/types-t-z.md#threedsmode) | 3DS mode |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name displayed for the payment method |

#### Example

```json
{
  "code": "xyz789",
  "is_visible": true,
  "payment_intent": "abc123",
  "payment_source": "xyz789",
  "sdk_params": [SDKParams],
  "sort_order": "xyz789",
  "three_ds_mode": "OFF",
  "title": "xyz789"
}
```

<HorizontalLine />

### FastlaneMethodInput

Fastlane Payment inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_source` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment source for the payment method |
| `paypal_fastlane_token` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The single use token from Fastlane |

#### Example

```json
{
  "payment_source": "xyz789",
  "paypal_fastlane_token": "abc123"
}
```

<HorizontalLine />

### Field

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNKNOWN_FIELD` |  |
| `CATEGORY` |  |
| `PRICE` |  |
| `PRODUCT` |  |
| `OUT_OF_STOCK` |  |
| `LOW_STOCK` |  |
| `TYPE` |  |
| `VISIBILITY` |  |

#### Example

```json
""UNKNOWN_FIELD""
```

<HorizontalLine />

### FilterEqualTypeInput

Defines a filter that matches the input exactly.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. |
| `in` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. |

#### Example

```json
{
  "eq": "abc123",
  "in": ["xyz789"]
}
```

<HorizontalLine />

### FilterMatchTypeEnum

#### Values

| Enum Value | Description |
|------------|-------------|
| `FULL` |  |
| `PARTIAL` |  |

#### Example

```json
""FULL""
```

<HorizontalLine />

### FilterMatchTypeInput

Defines a filter that performs a fuzzy search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `match` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Use this attribute to fuzzy match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. |
| `match_type` - [`FilterMatchTypeEnum`](#filtermatchtypeenum) | Filter match type for fine-tuned results. Possible values FULL or PARTIAL. If match_type is not provided, returned results will default to FULL match. |

#### Example

```json
{"match": "xyz789", "match_type": "FULL"}
```

<HorizontalLine />

### FilterRangeTypeInput

Defines a filter that matches a range of values, such as prices or dates.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `from` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Use this attribute to specify the lowest possible value in the range. |
| `to` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Use this attribute to specify the highest possible value in the range. |

#### Example

```json
{
  "from": "abc123",
  "to": "abc123"
}
```

<HorizontalLine />

### FilterRuleInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |
| `type` - [`FilterRuleType`](#filterruletype) |  |
| `conditions` - [`[ConditionInput]`](/reference/graphql/saas/types-c-e.md#conditioninput) |  |

#### Example

```json
{
  "name": "xyz789",
  "type": "UNKNOWN_FILTER_RULE_TYPE",
  "conditions": [ConditionInput]
}
```

<HorizontalLine />

### FilterRuleType

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNKNOWN_FILTER_RULE_TYPE` |  |
| `INCLUSION` |  |
| `EXCLUSION` |  |

#### Example

```json
""UNKNOWN_FILTER_RULE_TYPE""
```

<HorizontalLine />

### FilterStringTypeInput

Defines a filter for an input string.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Filters items that are exactly the same as the specified string. |
| `in` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | Filters items that are exactly the same as entries specified in an array of strings. |
| `match` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Defines a filter that performs a fuzzy search using the specified string. |

#### Example

```json
{
  "eq": "xyz789",
  "in": ["abc123"],
  "match": "xyz789"
}
```

<HorizontalLine />

### FilterTypeInput

Defines the comparison operators that can be used in a filter.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Equals. |
| `from` - [`String`](/reference/graphql/saas/types-q-s.md#string) | From. Must be used with the `to` field. |
| `gt` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Greater than. |
| `gteq` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Greater than or equal to. |
| `in` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | In. The value can contain a set of comma-separated values. |
| `like` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. |
| `lt` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Less than. |
| `lteq` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Less than or equal to. |
| `moreq` - [`String`](/reference/graphql/saas/types-q-s.md#string) | More than or equal to. |
| `neq` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Not equal to. |
| `nin` - [`[String]`](/reference/graphql/saas/types-q-s.md#string) | Not in. The value can contain a set of comma-separated values. |
| `notnull` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Not null. |
| `null` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Is null. |
| `to` - [`String`](/reference/graphql/saas/types-q-s.md#string) | To. Must be used with the `from` field. |

#### Example

```json
{
  "eq": "abc123",
  "from": "abc123",
  "gt": "abc123",
  "gteq": "xyz789",
  "in": ["abc123"],
  "like": "xyz789",
  "lt": "xyz789",
  "lteq": "abc123",
  "moreq": "xyz789",
  "neq": "xyz789",
  "nin": ["xyz789"],
  "notnull": "xyz789",
  "null": "xyz789",
  "to": "abc123"
}
```

<HorizontalLine />

### FilterableInSearchAttribute

Contains product attributes that can be used for filtering in a `productSearch` query

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The unique identifier for an attribute code. This value should be in lowercase letters and without spaces |
| `frontendInput` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Indicates how field rendered on storefront |
| `label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display name assigned to the attribute |
| `numeric` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether this attribute has a numeric value, such as a price or integer |

#### Example

```json
{
  "attribute": "xyz789",
  "frontendInput": "xyz789",
  "label": "abc123",
  "numeric": false
}
```

<HorizontalLine />

### FixedProductTax

A single FPT that can be applied to a product price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The amount of the Fixed Product Tax. |
| `label` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The display label assigned to the Fixed Product Tax. |

#### Example

```json
{
  "amount": Money,
  "label": "xyz789"
}
```

<HorizontalLine />

### FixedProductTaxDisplaySettings

Lists display settings for the Fixed Product Tax.

#### Values

| Enum Value | Description |
|------------|-------------|
| `INCLUDE_FPT_WITHOUT_DETAILS` | The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'. |
| `INCLUDE_FPT_WITH_DETAILS` | The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'. |
| `EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS` | The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.' |
| `EXCLUDE_FPT_WITHOUT_DETAILS` | The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'. |
| `FPT_DISABLED` | The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query. |

#### Example

```json
""INCLUDE_FPT_WITHOUT_DETAILS""
```

<HorizontalLine />

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

#### Example

```json
123.45
```

<HorizontalLine />

### GenerateCustomerTokenAsAdminInput

Identifies which customer requires remote shopping assistance.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customer_email` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The email address of the customer requesting remote shopping assistance. |

#### Example

```json
{"customer_email": "xyz789"}
```

<HorizontalLine />

### GenerateCustomerTokenAsAdminOutput

Contains the generated customer token.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customer_token` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The generated customer token. |

#### Example

```json
{"customer_token": "abc123"}
```

<HorizontalLine />

### GenerateNegotiableQuoteFromTemplateInput

Specifies the template id, from which to generate quote from.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{"template_id": "4"}
```

<HorizontalLine />

### GenerateNegotiableQuoteFromTemplateOutput

Contains the generated negotiable quote id.

#### Fields

| Field Name | Description |
|------------|-------------|
| `negotiable_quote_uid` - [`ID!`](#id) | The unique ID of a generated `NegotiableQuote` object. |

#### Example

```json
{"negotiable_quote_uid": "4"}
```

<HorizontalLine />

### GetPaymentSDKOutput

Gets the payment SDK URLs and values

#### Fields

| Field Name | Description |
|------------|-------------|
| `sdkParams` - [`[PaymentSDKParamsItem]`](/reference/graphql/saas/types-k-p.md#paymentsdkparamsitem) | The payment SDK parameters |

#### Example

```json
{"sdkParams": [PaymentSDKParamsItem]}
```

<HorizontalLine />

### GiftCardAccount

Contains details about the gift card account.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The balance remaining on the gift card. |
| `code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The gift card account code. |
| `expiration_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The expiration date of the gift card. |

#### Example

```json
{
  "balance": Money,
  "code": "abc123",
  "expiration_date": "xyz789"
}
```

<HorizontalLine />

### GiftCardAccountInput

Contains the gift card code.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `gift_card_code` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The applied gift card code. |

#### Example

```json
{"gift_card_code": "abc123"}
```

<HorizontalLine />

### GiftCardAmounts

Contains the value of a gift card, the website that generated the card, and related information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_id` - [`Int`](#int) | An internal attribute ID. |
| `uid` - [`ID!`](#id) | The unique ID for a `GiftCardAmounts` object. |
| `value` - [`Float`](#float) | The value of the gift card. |
| `website_id` - [`Int`](#int) | The ID of the website that generated the gift card. |
| `website_value` - [`Float`](#float) | The value of the gift card. |

#### Example

```json
{
  "attribute_id": 123,
  "uid": 4,
  "value": 987.65,
  "website_id": 123,
  "website_value": 987.65
}
```

<HorizontalLine />

### GiftCardCartItem

Contains details about a gift card that has been added to a cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The amount and currency of the gift card. |
| `available_gift_wrapping` - [`[GiftWrapping]!`](#giftwrapping) | The list of available gift wrapping options for the cart item. |
| `backorder_message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Customer-facing hint when the line is salable on notify backorders with insufficient physical quantity; null otherwise. |
| `custom_attributes` - [`[CustomAttribute]`](/reference/graphql/saas/types-c-e.md#customattribute) | The custom attributes for the cart item |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | An array of customizations applied to the gift card. |
| `discount` - [`[Discount]`](/reference/graphql/saas/types-c-e.md#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](/reference/graphql/saas/types-c-e.md#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message data for the gift card cart item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping option for the cart item. |
| `is_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | True if requested quantity is less than available stock, false otherwise. *(Deprecated: Use `is_salable` instead. It indicates whether the line can be purchased, including backorder configuration.)* |
| `is_salable` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | True when the item can be purchased and should not block checkout: stock status is in stock and either physical quantity covers the requested quantity or backorders are allowed. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The message from the sender to the recipient. |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Shortage or unavailability message for the line; null when the item is salable. |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer's quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller's quote line item note. |
| `prices` - [`CartItemPrices`](/reference/graphql/saas/types-c-e.md#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about an item in the cart. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `recipient_email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the person receiving the gift card. |
| `recipient_name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the person receiving the gift card. |
| `sender_email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the sender. |
| `sender_name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the sender. |
| `uid` - [`ID!`](#id) | The unique ID for a `CartItemInterface` object. |

#### Example

```json
{
  "amount": Money,
  "available_gift_wrapping": [GiftWrapping],
  "backorder_message": "abc123",
  "custom_attributes": [CustomAttribute],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "is_available": false,
  "is_salable": false,
  "max_qty": 123.45,
  "message": "xyz789",
  "min_qty": 987.65,
  "not_available_message": "xyz789",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "recipient_email": "abc123",
  "recipient_name": "xyz789",
  "sender_email": "abc123",
  "sender_name": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### GiftCardCreditMemoItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](/reference/graphql/saas/types-c-e.md#customattribute) | The custom attributes for the credit memo item |
| `discounts` - [`[Discount]`](/reference/graphql/saas/types-c-e.md#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for a credit memo item. |
| `id` - [`ID!`](#id) | The unique ID for a `CreditMemoItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "gift_card": GiftCardItem,
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_refunded": 123.45
}
```

<HorizontalLine />

### GiftCardInvoiceItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](/reference/graphql/saas/types-c-e.md#customattribute) | The custom attributes for the invoice item |
| `discounts` - [`[Discount]`](/reference/graphql/saas/types-c-e.md#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for an invoice item. |
| `id` - [`ID!`](#id) | The unique ID for an `InvoiceItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "gift_card": GiftCardItem,
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_invoiced": 987.65
}
```

<HorizontalLine />

### GiftCardItem

Contains details about a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The message from the sender to the recipient. |
| `recipient_email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the receiver of a virtual gift card. |
| `recipient_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the receiver of a physical or virtual gift card. |
| `sender_email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the sender of a virtual gift card. |
| `sender_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the sender of a physical or virtual gift card. |

#### Example

```json
{
  "message": "abc123",
  "recipient_email": "xyz789",
  "recipient_name": "xyz789",
  "sender_email": "xyz789",
  "sender_name": "xyz789"
}
```

<HorizontalLine />

### GiftCardOptions

Contains details about the sender, recipient, and amount of a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The amount and currency of the gift card. |
| `custom_giftcard_amount` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | The custom amount and currency of the gift card. |
| `message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A message to the recipient. |
| `recipient_email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the person receiving the gift card. |
| `recipient_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the person receiving the gift card. |
| `sender_email` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The email address of the person sending the gift card. |
| `sender_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the person sending the gift card. |

#### Example

```json
{
  "amount": Money,
  "custom_giftcard_amount": Money,
  "message": "xyz789",
  "recipient_email": "xyz789",
  "recipient_name": "abc123",
  "sender_email": "xyz789",
  "sender_name": "abc123"
}
```

<HorizontalLine />

### GiftCardOrderItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](/reference/graphql/saas/types-c-e.md#customattribute) | The custom attributes for the order item |
| `discounts` - [`[Discount]`](/reference/graphql/saas/types-c-e.md#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](/reference/graphql/saas/types-k-p.md#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for an order item. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an `OrderItemInterface` object. |
| `prices` - [`OrderItemPrices`](/reference/graphql/saas/types-k-p.md#orderitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface`](/reference/graphql/saas/types-k-p.md#productinterface) | The ProductInterface object, which contains details about the base product *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `product_type` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](/reference/graphql/saas/types-q-s.md#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |
| `quantity_return_requested` - [`Float`](#float) | The requested return quantity of the item. |
| `quantity_returned` - [`Float`](#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](/reference/graphql/saas/types-k-p.md#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The status of the order item. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_card": GiftCardItem,
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "abc123",
  "product_url_key": "xyz789",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 987.65,
  "quantity_refunded": 123.45,
  "quantity_return_requested": 123.45,
  "quantity_returned": 123.45,
  "quantity_shipped": 123.45,
  "selected_options": [OrderItemOption],
  "status": "abc123"
}
```

<HorizontalLine />

### GiftCardProduct

Defines properties of a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `allow_message` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer can provide a message to accompany the gift card. |
| `allow_open_amount` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether shoppers have the ability to set the value of the gift card. |
| `canonical_url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](/reference/graphql/saas/types-c-e.md#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The product's country of origin. |
| `crosssell_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](/reference/graphql/saas/types-k-p.md#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](/reference/graphql/saas/types-c-e.md#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_card_options` - [`[CustomizableOptionInterface]!`](/reference/graphql/saas/types-c-e.md#customizableoptioninterface) | An array of customizable gift card options. |
| `gift_message_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Returns value and currency indicating gift wrapping price for the product. |
| `giftcard_amounts` - [`[GiftCardAmounts]`](#giftcardamounts) | An array that contains information about the values and ID of a gift card. |
| `giftcard_type` - [`GiftCardTypeEnum`](#giftcardtypeenum) | An enumeration that specifies the type of gift card. |
| `image` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the main image on the product page. |
| `is_redeemable` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the customer can redeem the value on the card for cash. |
| `is_returnable` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Indicates whether the product can be returned. |
| `lifetime` - [`Int`](#int) | The number of days after purchase until the gift card expires. A null value means there is no limit. |
| `manufacturer` - [`Int`](#int) | A number representing the product's manufacturer. |
| `max_sale_qty` - [`Float`](#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](/reference/graphql/saas/types-k-p.md#mediagalleryinterface) | An array of media gallery objects. |
| `message_max_length` - [`Int`](#int) | The maximum number of characters the gift message can contain. |
| `meta_description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_sale_qty` - [`Float`](#float) | Minimum Qty Allowed in Shopping Cart |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `open_amount_max` - [`Float`](#float) | The maximum acceptable value of an open amount gift card. |
| `open_amount_min` - [`Float`](#float) | The minimum acceptable value of an open amount gift card. |
| `options` - [`[CustomizableOptionInterface]`](/reference/graphql/saas/types-c-e.md#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](/reference/graphql/saas/types-q-s.md#string) | If the product has multiple options, determines where they appear on the product page. |
| `price_range` - [`PriceRange!`](/reference/graphql/saas/types-k-p.md#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](/reference/graphql/saas/types-t-z.md#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](/reference/graphql/saas/types-k-p.md#productlinksinterface) | An array of `ProductLinks` objects. |
| `quantity` - [`Float`](#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | An array of products to be displayed in a Related Products block. |
| `short_description` - [`ComplexTextValue`](/reference/graphql/saas/types-c-e.md#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The end date for a product with a special price. |
| `stock_status` - [`ProductStockStatus`](/reference/graphql/saas/types-k-p.md#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the product's thumbnail image. |
| `uid` - [`ID!`](#id) | The unique ID for a `ProductInterface` object. |
| `upsell_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | Upsell Products |
| `url_key` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The part of the URL that identifies the product |
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "allow_message": false,
  "allow_open_amount": false,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "country_of_manufacture": "xyz789",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_card_options": [CustomizableOptionInterface],
  "gift_message_available": true,
  "gift_wrapping_available": true,
  "gift_wrapping_price": Money,
  "giftcard_amounts": [GiftCardAmounts],
  "giftcard_type": "VIRTUAL",
  "image": ProductImage,
  "is_redeemable": true,
  "is_returnable": "abc123",
  "lifetime": 123,
  "manufacturer": 123,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "message_max_length": 987,
  "meta_description": "abc123",
  "meta_keyword": "abc123",
  "meta_title": "abc123",
  "min_sale_qty": 987.65,
  "name": "abc123",
  "new_from_date": "abc123",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 123.45,
  "open_amount_max": 987.65,
  "open_amount_min": 123.45,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 987.65,
  "related_products": [ProductInterface],
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_price": 123.45,
  "special_to_date": "xyz789",
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "uid": 4,
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "weight": 123.45
}
```

<HorizontalLine />

### GiftCardRequisitionListItem

Contains details about gift cards added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `gift_card_options` - [`GiftCardOptions!`](#giftcardoptions) | An array that defines gift card properties. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about a requisition list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The amount added. |
| `sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The product SKU. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "gift_card_options": GiftCardOptions,
  "product": ProductInterface,
  "quantity": 123.45,
  "sku": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### GiftCardShipmentItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for a shipment item. |
| `id` - [`ID!`](#id) | The unique ID for a `ShipmentItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price for the base product. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Example

```json
{
  "gift_card": GiftCardItem,
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_shipped": 123.45
}
```

<HorizontalLine />

### GiftCardTypeEnum

Specifies the gift card type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `VIRTUAL` |  |
| `PHYSICAL` |  |
| `COMBINED` |  |

#### Example

```json
""VIRTUAL""
```

<HorizontalLine />

### GiftCardWishlistItem

A single gift card added to a wish list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The description of the item. |
| `gift_card_options` - [`GiftCardOptions!`](#giftcardoptions) | Details about a gift card. |
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
  "gift_card_options": GiftCardOptions,
  "id": 4,
  "product": ProductInterface,
  "quantity": 987.65
}
```

<HorizontalLine />

### GiftMessage

Contains the text of a gift message, its sender, and recipient

#### Fields

| Field Name | Description |
|------------|-------------|
| `from` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Sender name |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Gift message text |
| `to` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Recipient name |

#### Example

```json
{
  "from": "xyz789",
  "message": "xyz789",
  "to": "xyz789"
}
```

<HorizontalLine />

### GiftMessageInput

Defines a gift message.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `from` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the sender. |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The text of the gift message. |
| `to` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the recepient. |

#### Example

```json
{
  "from": "xyz789",
  "message": "xyz789",
  "to": "xyz789"
}
```

<HorizontalLine />

### GiftOptionsPrices

Contains prices for gift wrapping options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_wrapping_for_items` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Price of the gift wrapping for all individual order items. |
| `gift_wrapping_for_items_incl_tax` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Price of the gift wrapping for all individual order items including tax. |
| `gift_wrapping_for_order` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Price of the gift wrapping for the whole order. |
| `gift_wrapping_for_order_incl_tax` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Price of the gift wrapping for the whole order including tax. |
| `printed_card` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Price for the printed card. |
| `printed_card_incl_tax` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Price for the printed card including tax. |

#### Example

```json
{
  "gift_wrapping_for_items": Money,
  "gift_wrapping_for_items_incl_tax": Money,
  "gift_wrapping_for_order": Money,
  "gift_wrapping_for_order_incl_tax": Money,
  "printed_card": Money,
  "printed_card_incl_tax": Money
}
```

<HorizontalLine />

### GiftRegistry

Contains details about a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date on which the gift registry was created. Only the registry owner can access this attribute. |
| `dynamic_attributes` - [`[GiftRegistryDynamicAttribute]`](#giftregistrydynamicattribute) | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. |
| `event_name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the event. |
| `items` - [`[GiftRegistryItemInterface]`](#giftregistryiteminterface) | An array of products added to the gift registry. |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The message text the customer entered to describe the event. |
| `owner_name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The customer who created the gift registry. |
| `privacy_settings` - [`GiftRegistryPrivacySettings!`](#giftregistryprivacysettings) | An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute. |
| `registrants` - [`[GiftRegistryRegistrant]`](#giftregistryregistrant) | Contains details about each registrant for the event. |
| `shipping_address` - [`CustomerAddress`](/reference/graphql/saas/types-c-e.md#customeraddress) | Contains the customer's shipping address. Only the registry owner can access this attribute. |
| `status` - [`GiftRegistryStatus!`](#giftregistrystatus) | An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute. |
| `type` - [`GiftRegistryType`](#giftregistrytype) | The type of gift registry. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the gift registry. |

#### Example

```json
{
  "created_at": "xyz789",
  "dynamic_attributes": [GiftRegistryDynamicAttribute],
  "event_name": "xyz789",
  "items": [GiftRegistryItemInterface],
  "message": "abc123",
  "owner_name": "xyz789",
  "privacy_settings": "PRIVATE",
  "registrants": [GiftRegistryRegistrant],
  "shipping_address": CustomerAddress,
  "status": "ACTIVE",
  "type": GiftRegistryType,
  "uid": 4
}
```

<HorizontalLine />

### GiftRegistryDynamicAttribute

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `group` - [`GiftRegistryDynamicAttributeGroup!`](#giftregistrydynamicattributegroup) | Indicates which group the dynamic attribute is a member of. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A corresponding value for the code. |

#### Example

```json
{
  "code": 4,
  "group": "EVENT_INFORMATION",
  "label": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeGroup

Defines the group type of a gift registry dynamic attribute.

#### Values

| Enum Value | Description |
|------------|-------------|
| `EVENT_INFORMATION` |  |
| `PRIVACY_SETTINGS` |  |
| `REGISTRANT` |  |
| `GENERAL_INFORMATION` |  |
| `DETAILED_INFORMATION` |  |
| `SHIPPING_ADDRESS` |  |

#### Example

```json
""EVENT_INFORMATION""
```

<HorizontalLine />

### GiftRegistryDynamicAttributeInput

Defines a dynamic attribute.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `code` - [`ID!`](#id) | A unique key for an additional attribute of the event. |
| `value` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A string that describes a dynamic attribute. |

#### Example

```json
{"code": 4, "value": "xyz789"}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A corresponding value for the code. |

#### Possible Types

| GiftRegistryDynamicAttributeInterface Types |
|----------------|
| [`GiftRegistryDynamicAttribute`](#giftregistrydynamicattribute) |
| [`GiftRegistryRegistrantDynamicAttribute`](#giftregistryregistrantdynamicattribute) |

#### Example

```json
{
  "code": 4,
  "label": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeMetadata

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_group` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Indicates which group the dynamic attribute a member of. |
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `input_type` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The selected input type for this dynamic attribute. The value can be one of several static or custom types. |
| `is_required` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the dynamic attribute is required. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The display name of the dynamic attribute. |
| `sort_order` - [`Int`](#int) | The order in which to display the dynamic attribute. |

#### Example

```json
{
  "attribute_group": "abc123",
  "code": 4,
  "input_type": "xyz789",
  "is_required": false,
  "label": "xyz789",
  "sort_order": 123
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeMetadataInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_group` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Indicates which group the dynamic attribute a member of. |
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `input_type` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The selected input type for this dynamic attribute. The value can be one of several static or custom types. |
| `is_required` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the dynamic attribute is required. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The display name of the dynamic attribute. |
| `sort_order` - [`Int`](#int) | The order in which to display the dynamic attribute. |

#### Possible Types

| GiftRegistryDynamicAttributeMetadataInterface Types |
|----------------|
| [`GiftRegistryDynamicAttributeMetadata`](#giftregistrydynamicattributemetadata) |

#### Example

```json
{
  "attribute_group": "xyz789",
  "code": 4,
  "input_type": "abc123",
  "is_required": false,
  "label": "xyz789",
  "sort_order": 987
}
```

<HorizontalLine />

### GiftRegistryItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date the product was added to the gift registry. |
| `note` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about the gift registry item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The requested quantity of the product. |
| `quantity_fulfilled` - [`Float!`](#float) | The fulfilled quantity of the product. |
| `uid` - [`ID!`](#id) | The unique ID of a gift registry item. |

#### Example

```json
{
  "created_at": "xyz789",
  "note": "abc123",
  "product": ProductInterface,
  "quantity": 987.65,
  "quantity_fulfilled": 123.45,
  "uid": "4"
}
```

<HorizontalLine />

### GiftRegistryItemInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date the product was added to the gift registry. |
| `note` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about the gift registry item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The requested quantity of the product. |
| `quantity_fulfilled` - [`Float!`](#float) | The fulfilled quantity of the product. |
| `uid` - [`ID!`](#id) | The unique ID of a gift registry item. |

#### Possible Types

| GiftRegistryItemInterface Types |
|----------------|
| [`GiftRegistryItem`](#giftregistryitem) |

#### Example

```json
{
  "created_at": "abc123",
  "note": "xyz789",
  "product": ProductInterface,
  "quantity": 987.65,
  "quantity_fulfilled": 987.65,
  "uid": "4"
}
```

<HorizontalLine />

### GiftRegistryItemUserErrorInterface

Contains the status and any errors that encountered with the customer's gift register item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `status` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the attempt to move the cart items to the gift registry was successful. |
| `user_errors` - [`[GiftRegistryItemsUserError]!`](#giftregistryitemsusererror) | An array of errors encountered while moving items from the cart to the gift registry. |

#### Possible Types

| GiftRegistryItemUserErrorInterface Types |
|----------------|
| [`MoveCartItemsToGiftRegistryOutput`](/reference/graphql/saas/types-k-p.md#movecartitemstogiftregistryoutput) |

#### Example

```json
{
  "status": true,
  "user_errors": [GiftRegistryItemsUserError]
}
```

<HorizontalLine />

### GiftRegistryItemsUserError

Contains details about an error that occurred when processing a gift registry item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`GiftRegistryItemsUserErrorType!`](#giftregistryitemsusererrortype) | An error code that describes the error encountered. |
| `gift_registry_item_uid` - [`ID`](#id) | The unique ID of the gift registry item containing an error. |
| `gift_registry_uid` - [`ID`](#id) | The unique ID of the `GiftRegistry` object containing an error. |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A localized error message. |
| `product_uid` - [`ID`](#id) | The unique ID of the product containing an error. |

#### Example

```json
{
  "code": "OUT_OF_STOCK",
  "gift_registry_item_uid": "4",
  "gift_registry_uid": "4",
  "message": "xyz789",
  "product_uid": "4"
}
```

<HorizontalLine />

### GiftRegistryItemsUserErrorType

Defines the error type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `OUT_OF_STOCK` | Used for handling out of stock products. |
| `NOT_FOUND` | Used for exceptions like EntityNotFound. |
| `UNDEFINED` | Used for other exceptions, such as database connection failures. |

#### Example

```json
""OUT_OF_STOCK""
```

<HorizontalLine />

### GiftRegistryOutputInterface

Contains the customer's gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry. |

#### Possible Types

| GiftRegistryOutputInterface Types |
|----------------|
| [`MoveCartItemsToGiftRegistryOutput`](/reference/graphql/saas/types-k-p.md#movecartitemstogiftregistryoutput) |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### GiftRegistryPrivacySettings

Defines the privacy setting of the gift registry.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRIVATE` |  |
| `PUBLIC` |  |

#### Example

```json
""PRIVATE""
```

<HorizontalLine />

### GiftRegistryRegistrant

Contains details about a registrant.

#### Fields

| Field Name | Description |
|------------|-------------|
| `dynamic_attributes` - [`[GiftRegistryRegistrantDynamicAttribute]`](#giftregistryregistrantdynamicattribute) | An array of dynamic attributes assigned to the registrant. |
| `email` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The email address of the registrant. Only the registry owner can access this attribute. |
| `firstname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The first name of the registrant. |
| `lastname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The last name of the registrant. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryRegistrantDynamicAttribute
  ],
  "email": "abc123",
  "firstname": "abc123",
  "lastname": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### GiftRegistryRegistrantDynamicAttribute

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A corresponding value for the code. |

#### Example

```json
{
  "code": "4",
  "label": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### GiftRegistrySearchResult

Contains the results of a gift registry search.

#### Fields

| Field Name | Description |
|------------|-------------|
| `event_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The date of the event. |
| `event_title` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The title given to the event. |
| `gift_registry_uid` - [`ID!`](#id) | The URL key of the gift registry. |
| `location` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The location of the event. |
| `name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the gift registry owner. |
| `type` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The type of event being held. |

#### Example

```json
{
  "event_date": "abc123",
  "event_title": "xyz789",
  "gift_registry_uid": "4",
  "location": "abc123",
  "name": "abc123",
  "type": "abc123"
}
```

<HorizontalLine />

### GiftRegistryShippingAddressInput

Defines a shipping address for a gift registry. Specify either `address_data` or the `address_id`. If both are provided, validation will fail.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address_data` - [`CustomerAddressInput`](/reference/graphql/saas/types-c-e.md#customeraddressinput) | Defines the shipping address for this gift registry. |
| `address_id` - [`ID`](#id) | The ID assigned to this customer address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID assigned to this customer address. |

#### Example

```json
{
  "address_data": CustomerAddressInput,
  "address_id": 4,
  "customer_address_uid": "4"
}
```

<HorizontalLine />

### GiftRegistryStatus

Defines the status of the gift registry.

#### Values

| Enum Value | Description |
|------------|-------------|
| `ACTIVE` |  |
| `INACTIVE` |  |

#### Example

```json
""ACTIVE""
```

<HorizontalLine />

### GiftRegistryType

Contains details about a gift registry type.

#### Fields

| Field Name | Description |
|------------|-------------|
| `dynamic_attributes_metadata` - [`[GiftRegistryDynamicAttributeMetadataInterface]`](#giftregistrydynamicattributemetadatainterface) | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. |
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The label assigned to the gift registry type on the Admin. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the gift registry type. |

#### Example

```json
{
  "dynamic_attributes_metadata": [
    GiftRegistryDynamicAttributeMetadataInterface
  ],
  "label": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### GiftWrapping

Contains details about the selected or available gift wrapping options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `design` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the gift wrapping design. |
| `image` - [`GiftWrappingImage`](#giftwrappingimage) | The preview image for a gift wrapping option. |
| `price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The gift wrapping price. |
| `uid` - [`ID!`](#id) | The unique ID for a `GiftWrapping` object. |

#### Example

```json
{
  "design": "abc123",
  "image": GiftWrappingImage,
  "price": Money,
  "uid": "4"
}
```

<HorizontalLine />

### GiftWrappingImage

Points to an image associated with a gift wrapping option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The gift wrapping preview image label. |
| `url` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The gift wrapping preview image URL. |

#### Example

```json
{
  "label": "xyz789",
  "url": "xyz789"
}
```

<HorizontalLine />

### GooglePayButtonStyles

#### Fields

| Field Name | Description |
|------------|-------------|
| `color` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The button color |
| `height` - [`Int`](#int) | The button height in pixels |
| `type` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The button type |

#### Example

```json
{
  "color": "xyz789",
  "height": 123,
  "type": "abc123"
}
```

<HorizontalLine />

### GooglePayConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `button_styles` - [`GooglePayButtonStyles`](#googlepaybuttonstyles) | The styles for the GooglePay Button configuration |
| `code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment method code as defined in the payment gateway |
| `google_pay_mode` - [`GooglePayMode`](#googlepaymode) | Google Pay mode |
| `is_visible` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Defines the payment intent (Authorize or Capture |
| `payment_source` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment source for the payment method |
| `sdk_params` - [`[SDKParams]`](/reference/graphql/saas/types-q-s.md#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The relative order the payment method is displayed on the checkout page |
| `three_ds_mode` - [`ThreeDSMode`](/reference/graphql/saas/types-t-z.md#threedsmode) | 3DS mode |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name displayed for the payment method |

#### Example

```json
{
  "button_styles": GooglePayButtonStyles,
  "code": "xyz789",
  "google_pay_mode": "TEST",
  "is_visible": true,
  "payment_intent": "abc123",
  "payment_source": "xyz789",
  "sdk_params": [SDKParams],
  "sort_order": "xyz789",
  "three_ds_mode": "OFF",
  "title": "xyz789"
}
```

<HorizontalLine />

### GooglePayMethodInput

Google Pay inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_source` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment services order ID |
| `paypal_order_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | PayPal order ID |

#### Example

```json
{
  "payment_source": "xyz789",
  "payments_order_id": "abc123",
  "paypal_order_id": "abc123"
}
```

<HorizontalLine />

### GooglePayMode

Google Pay mode.

#### Values

| Enum Value | Description |
|------------|-------------|
| `TEST` |  |
| `PRODUCTION` |  |

#### Example

```json
""TEST""
```

<HorizontalLine />

### GroupedProduct

Defines a grouped product, which consists of simple standalone products that are presented as a group.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](/reference/graphql/saas/types-c-e.md#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The product's country of origin. |
| `crosssell_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](/reference/graphql/saas/types-k-p.md#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](/reference/graphql/saas/types-c-e.md#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](/reference/graphql/saas/types-k-p.md#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Indicates whether the product can be returned. |
| `items` - [`[GroupedProductItem]`](#groupedproductitem) | An array containing grouped product items. |
| `manufacturer` - [`Int`](#int) | A number representing the product's manufacturer. |
| `max_sale_qty` - [`Float`](#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](/reference/graphql/saas/types-k-p.md#mediagalleryinterface) | An array of media gallery objects. |
| `meta_description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_sale_qty` - [`Float`](#float) | Minimum Qty Allowed in Shopping Cart |
| `name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options_container` - [`String`](/reference/graphql/saas/types-q-s.md#string) | If the product has multiple options, determines where they appear on the product page. |
| `price_range` - [`PriceRange!`](/reference/graphql/saas/types-k-p.md#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](/reference/graphql/saas/types-t-z.md#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](/reference/graphql/saas/types-k-p.md#productlinksinterface) | An array of `ProductLinks` objects. |
| `quantity` - [`Float`](#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | An array of products to be displayed in a Related Products block. |
| `short_description` - [`ComplexTextValue`](/reference/graphql/saas/types-c-e.md#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](/reference/graphql/saas/types-q-s.md#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The end date for a product with a special price. |
| `stock_status` - [`ProductStockStatus`](/reference/graphql/saas/types-k-p.md#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](/reference/graphql/saas/types-k-p.md#productimage) | The relative path to the product's thumbnail image. |
| `uid` - [`ID!`](#id) | The unique ID for a `ProductInterface` object. |
| `upsell_products` - [`[ProductInterface]`](/reference/graphql/saas/types-k-p.md#productinterface) | Upsell Products |
| `url_key` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The part of the URL that identifies the product |
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

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
  "is_returnable": "abc123",
  "items": [GroupedProductItem],
  "manufacturer": 123,
  "max_sale_qty": 987.65,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "xyz789",
  "meta_keyword": "xyz789",
  "meta_title": "abc123",
  "min_sale_qty": 987.65,
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
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
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "uid": "4",
  "upsell_products": [ProductInterface],
  "url_key": "xyz789",
  "weight": 123.45
}
```

<HorizontalLine />

### GroupedProductItem

Contains information about an individual grouped product item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `position` - [`Int`](#int) | The relative position of this item compared to the other group items. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Details about this product option. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `qty` - [`Float`](#float) | The quantity of this grouped product item. |

#### Example

```json
{
  "position": 123,
  "product": ProductInterface,
  "qty": 987.65
}
```

<HorizontalLine />

### GroupedProductWishlistItem

A grouped product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/saas/types-q-s.md#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface!`](/reference/graphql/saas/types-k-p.md#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": "4",
  "product": ProductInterface,
  "quantity": 123.45
}
```

<HorizontalLine />

### GuestOrderCancelInput

Input to retrieve a guest order based on token.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `reason` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Cancellation reason. |
| `token` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Order token. |

#### Example

```json
{
  "reason": "abc123",
  "token": "xyz789"
}
```

<HorizontalLine />

### GuestOrderInformationInput

Input to retrieve an order based on details.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Order billing address email. |
| `lastname` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Order billing address lastname. |
| `number` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Order number. |

#### Example

```json
{
  "email": "abc123",
  "lastname": "xyz789",
  "number": "abc123"
}
```

<HorizontalLine />

### Highlight

An object that provides highlighted text for matched words

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The product attribute that contains a match for the search phrase |
| `matched_words` - [`[String]!`](/reference/graphql/saas/types-q-s.md#string) | An array of strings |
| `value` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The matched text, enclosed within emphasis tags |

#### Example

```json
{
  "attribute": "xyz789",
  "matched_words": ["abc123"],
  "value": "abc123"
}
```

<HorizontalLine />

### HistoryItemNoteData

Item note data that is added to the negotiable quote history object.

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Datetime of the note added. |
| `creator_name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Name of the creator. |
| `creator_type` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Creator type: Buyer or Seller. |
| `item_id` - [`Int!`](#int) | Id of the quote item for which the note has been added. |
| `note` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The note added by the creator for the item |
| `product_name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Name of the quote item product for which note has been added. |

#### Example

```json
{
  "created_at": "abc123",
  "creator_name": "xyz789",
  "creator_type": "xyz789",
  "item_id": 123,
  "note": "abc123",
  "product_name": "abc123"
}
```

<HorizontalLine />

### HostedFieldsConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `cc_vault_code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Vault payment method code |
| `code` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment method code as defined in the payment gateway |
| `is_vault_enabled` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Card vault enabled |
| `is_visible` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Defines the payment intent (Authorize or Capture |
| `payment_source` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment source for the payment method |
| `requires_card_details` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Card and bin details required |
| `sdk_params` - [`[SDKParams]`](/reference/graphql/saas/types-q-s.md#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The relative order the payment method is displayed on the checkout page |
| `three_ds_mode` - [`ThreeDSMode`](/reference/graphql/saas/types-t-z.md#threedsmode) | 3DS mode |
| `title` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name displayed for the payment method |

#### Example

```json
{
  "cc_vault_code": "abc123",
  "code": "xyz789",
  "is_vault_enabled": true,
  "is_visible": true,
  "payment_intent": "xyz789",
  "payment_source": "xyz789",
  "requires_card_details": false,
  "sdk_params": [SDKParams],
  "sort_order": "abc123",
  "three_ds_mode": "OFF",
  "title": "xyz789"
}
```

<HorizontalLine />

### HostedFieldsInput

Hosted Fields payment inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cardBin` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Card bin number |
| `cardExpiryMonth` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Expiration month of the card |
| `cardExpiryYear` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Expiration year of the card |
| `cardLast4` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Last four digits of the card |
| `holderName` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Name on the card |
| `is_active_payment_token_enabler` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the Payment Services payment integration. |
| `payment_source` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The payment services order ID |
| `paypal_order_id` - [`String`](/reference/graphql/saas/types-q-s.md#string) | PayPal order ID |

#### Example

```json
{
  "cardBin": "abc123",
  "cardExpiryMonth": "xyz789",
  "cardExpiryYear": "xyz789",
  "cardLast4": "abc123",
  "holderName": "xyz789",
  "is_active_payment_token_enabler": false,
  "payment_source": "abc123",
  "payments_order_id": "abc123",
  "paypal_order_id": "abc123"
}
```

<HorizontalLine />

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

#### Example

```json
4
```

<HorizontalLine />

### ImageSwatchData

#### Fields

| Field Name | Description |
|------------|-------------|
| `thumbnail` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The URL assigned to the thumbnail of the swatch image. |
| `value` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The value can be represented as color (HEX code), image link, or text. |

#### Example

```json
{
  "thumbnail": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### ImportSharedRequisitionListOutput

Result of importing a shared requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](/reference/graphql/saas/types-q-s.md#requisitionlist) | The imported requisition list for the current customer. |
| `user_errors` - [`[ShareRequisitionListUserError]!`](/reference/graphql/saas/types-q-s.md#sharerequisitionlistusererror) | Validation or import issues. |

#### Example

```json
{
  "requisition_list": RequisitionList,
  "user_errors": [ShareRequisitionListUserError]
}
```

<HorizontalLine />

### InputFilterEnum

List of templates/filters applied to customer attribute input.

#### Values

| Enum Value | Description |
|------------|-------------|
| `NONE` | There are no templates or filters to be applied. |
| `DATE` | Forces attribute input to follow the date format. |
| `TRIM` | Strip whitespace (or other characters) from the beginning and end of the input. |
| `STRIPTAGS` | Strip HTML Tags. |
| `ESCAPEHTML` | Escape HTML Entities. |

#### Example

```json
""NONE""
```

<HorizontalLine />

### InsufficientStockError

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CartUserInputErrorType!`](/reference/graphql/saas/types-c-e.md#cartuserinputerrortype) | A cart-specific error code. |
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | A localized error message. |
| `quantity` - [`Float`](#float) | Amount of available stock |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "xyz789",
  "quantity": 123.45
}
```

<HorizontalLine />

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

#### Example

```json
987
```

<HorizontalLine />

### InternalError

Contains an error message when an internal error occurred.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The returned error message. |

#### Example

```json
{"message": "xyz789"}
```

<HorizontalLine />

### Invoice

Contains invoice details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comments` - [`[SalesCommentItem]`](/reference/graphql/saas/types-q-s.md#salescommentitem) | Comments on the invoice. |
| `custom_attributes` - [`[CustomAttribute]`](/reference/graphql/saas/types-c-e.md#customattribute) | The custom attributes for the invoice |
| `id` - [`ID!`](#id) | The unique ID for a `Invoice` object. |
| `items` - [`[InvoiceItemInterface]`](#invoiceiteminterface) | Invoiced product details. |
| `number` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | Sequential invoice number. |
| `total` - [`InvoiceTotal`](#invoicetotal) | Invoice total amount details. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "custom_attributes": [CustomAttribute],
  "id": 4,
  "items": [InvoiceItemInterface],
  "number": "abc123",
  "total": InvoiceTotal
}
```

<HorizontalLine />

### InvoiceCustomAttributesInput

Defines an invoice custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `custom_attributes` - [`[CustomAttributeInput]`](/reference/graphql/saas/types-c-e.md#customattributeinput) | An array of custom attributes for invoice. |
| `invoice_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The invoice ID. |

#### Example

```json
{
  "custom_attributes": [CustomAttributeInput],
  "invoice_id": "abc123"
}
```

<HorizontalLine />

### InvoiceItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](/reference/graphql/saas/types-c-e.md#customattribute) | The custom attributes for the invoice item |
| `discounts` - [`[Discount]`](/reference/graphql/saas/types-c-e.md#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for an `InvoiceItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 987.65
}
```

<HorizontalLine />

### InvoiceItemCustomAttributesInput

Defines an invoice item custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `custom_attributes` - [`[CustomAttributeInput]`](/reference/graphql/saas/types-c-e.md#customattributeinput) | An array of custom attributes for invoice item. |
| `invoice_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The invoice ID. |
| `invoice_item_id` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The invoice item ID. |

#### Example

```json
{
  "custom_attributes": [CustomAttributeInput],
  "invoice_id": "xyz789",
  "invoice_item_id": "xyz789"
}
```

<HorizontalLine />

### InvoiceItemInterface

Contains detailes about invoiced items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](/reference/graphql/saas/types-c-e.md#customattribute) | The custom attributes for the invoice item |
| `discounts` - [`[Discount]`](/reference/graphql/saas/types-c-e.md#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for an `InvoiceItemInterface` object. |
| `order_item` - [`OrderItemInterface`](/reference/graphql/saas/types-k-p.md#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Possible Types

| InvoiceItemInterface Types |
|----------------|
| [`BundleInvoiceItem`](/reference/graphql/saas/types-a-b.md#bundleinvoiceitem) |
| [`DownloadableInvoiceItem`](/reference/graphql/saas/types-c-e.md#downloadableinvoiceitem) |
| [`GiftCardInvoiceItem`](#giftcardinvoiceitem) |
| [`InvoiceItem`](#invoiceitem) |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
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

### InvoiceOutput

Contains details about the invoice after adding custom attributes to it.

#### Fields

| Field Name | Description |
|------------|-------------|
| `invoice` - [`Invoice!`](#invoice) | The custom attributes to invoice have been added. |

#### Example

```json
{"invoice": Invoice}
```

<HorizontalLine />

### InvoiceTotal

Contains price details from an invoice.

#### Fields

| Field Name | Description |
|------------|-------------|
| `base_grand_total` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The final base grand total amount in the base currency. |
| `discounts` - [`[Discount]`](/reference/graphql/saas/types-c-e.md#discount) | The applied discounts to the invoice. |
| `grand_total` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The final total amount, including shipping, discounts, and taxes. |
| `shipping_handling` - [`ShippingHandling`](/reference/graphql/saas/types-q-s.md#shippinghandling) | Details about the shipping and handling costs for the invoice. |
| `subtotal` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The subtotal of the invoice, excluding shipping, discounts, and taxes. |
| `taxes` - [`[TaxItem]`](/reference/graphql/saas/types-t-z.md#taxitem) | The invoice tax details. |
| `total_shipping` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The shipping amount for the invoice. |
| `total_tax` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The amount of tax applied to the invoice. |

#### Example

```json
{
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

### IsCompanyAdminEmailAvailableOutput

Contains the response of a company admin email validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_email_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the specified email address can be used to create a company administrator. |

#### Example

```json
{"is_email_available": false}
```

<HorizontalLine />

### IsCompanyEmailAvailableOutput

Contains the response of a company email validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_email_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the specified email address can be used to create a company. |

#### Example

```json
{"is_email_available": false}
```

<HorizontalLine />

### IsCompanyRoleNameAvailableOutput

Contains the response of a role name validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_role_name_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the specified company role name is available. |

#### Example

```json
{"is_role_name_available": true}
```

<HorizontalLine />

### IsCompanyUserEmailAvailableOutput

Contains the response of a company user email validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_email_available` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the specified email address can be used to create a company user. |

#### Example

```json
{"is_email_available": true}
```

<HorizontalLine />

### IsEmailAvailableOutput

Contains the result of the `isEmailAvailable` query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_email_available` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) | Indicates whether the specified email address can be used to create a customer. |

#### Example

```json
{"is_email_available": true}
```

<HorizontalLine />

### IsOperatorInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `type` - [`IsOperatorType`](#isoperatortype) |  |
| `value` - [`Boolean`](/reference/graphql/saas/types-a-b.md#boolean) |  |

#### Example

```json
{"type": "UNKNOWN_ISOPERATOR_TYPE", "value": false}
```

<HorizontalLine />

### IsOperatorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `UNKNOWN_ISOPERATOR_TYPE` |  |
| `IS` |  |

#### Example

```json
""UNKNOWN_ISOPERATOR_TYPE""
```

<HorizontalLine />

### IsProductAlertSubscriptionResult

#### Fields

| Field Name | Description |
|------------|-------------|
| `isSubscribed` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) |  |
| `message` - [`String`](/reference/graphql/saas/types-q-s.md#string) |  |

#### Example

```json
{"isSubscribed": false, "message": "xyz789"}
```

<HorizontalLine />

### ItemNote

The note object for quote line item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Timestamp that reflects note creation date. |
| `creator_id` - [`Int`](#int) | ID of the user who submitted a note. |
| `creator_name` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Name of the creator. |
| `creator_type` - [`Int`](#int) | Type of teh user who submitted a note. |
| `negotiable_quote_item_uid` - [`ID`](#id) | The unique ID of a `CartItemInterface` object. |
| `note` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Note text. |
| `note_uid` - [`ID`](#id) | The unique ID of a `ItemNote` object. |

#### Example

```json
{
  "created_at": "abc123",
  "creator_id": 123,
  "creator_name": "xyz789",
  "creator_type": 123,
  "negotiable_quote_item_uid": "4",
  "note": "xyz789",
  "note_uid": "4"
}
```

<HorizontalLine />

### ItemSelectedBundleOption

A list of options of the selected bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The label of the option. |
| `uid` - [`ID!`](#id) | The unique ID for a `ItemSelectedBundleOption` object. |
| `values` - [`[ItemSelectedBundleOptionValue]`](#itemselectedbundleoptionvalue) | A list of products that represent the values of the parent option. |

#### Example

```json
{
  "label": "xyz789",
  "uid": "4",
  "values": [ItemSelectedBundleOptionValue]
}
```

<HorizontalLine />

### ItemSelectedBundleOptionValue

A list of values for the selected bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `price` - [`Money!`](/reference/graphql/saas/types-k-p.md#money) | The price of the child bundle product. |
| `product_name` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the child bundle product. |
| `product_sku` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The SKU of the child bundle product. |
| `quantity` - [`Float!`](#float) | The number of this bundle product that were ordered. |
| `uid` - [`ID!`](#id) | The unique ID for a `ItemSelectedBundleOptionValue` object. |

#### Example

```json
{
  "price": Money,
  "product_name": "abc123",
  "product_sku": "abc123",
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### JSON

A JSON scalar

#### Example

```json
{}
```

<HorizontalLine />

### finishUploadInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `key` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The unique key identifier from the upload |
| `media_resource_type` - [`MediaResourceType!`](/reference/graphql/saas/types-k-p.md#mediaresourcetype) | The type of media resource being uploaded |

#### Example

```json
{
  "key": "xyz789",
  "media_resource_type": "NEGOTIABLE_QUOTE_ATTACHMENT"
}
```

<HorizontalLine />

### finishUploadOutput

#### Fields

| Field Name | Description |
|------------|-------------|
| `key` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The unique key identifier |
| `message` - [`String`](/reference/graphql/saas/types-q-s.md#string) | Additional information about the confirmation |
| `success` - [`Boolean!`](/reference/graphql/saas/types-a-b.md#boolean) | Whether the confirmation was successful |

#### Example

```json
{
  "key": "xyz789",
  "message": "abc123",
  "success": false
}
```

<HorizontalLine />

### initiateUploadInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `key` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The name of the file to be uploaded, cannot contain slashes |
| `media_resource_type` - [`MediaResourceType!`](/reference/graphql/saas/types-k-p.md#mediaresourcetype) | The type of media resource being uploaded |

#### Example

```json
{
  "key": "xyz789",
  "media_resource_type": "NEGOTIABLE_QUOTE_ATTACHMENT"
}
```

<HorizontalLine />

### initiateUploadOutput

#### Fields

| Field Name | Description |
|------------|-------------|
| `expires_at` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The expiration timestamp of the URL |
| `key` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The unique key identifier for the upload |
| `upload_url` - [`String!`](/reference/graphql/saas/types-q-s.md#string) | The presigned URL for uploading the file |

#### Example

```json
{
  "expires_at": "xyz789",
  "key": "abc123",
  "upload_url": "abc123"
}
```
