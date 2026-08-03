## Types

### FilterEqualTypeInput

Defines a filter that matches the input exactly.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](types-q-s.md#string) | Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. |
| `in` - [`[String]`](types-q-s.md#string) | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. |

#### Example

```json
{
  "eq": "abc123",
  "in": ["xyz789"]
}
```

<HorizontalLine />

### FilterMatchTypeInput

Defines a filter that performs a fuzzy search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `match` - [`String`](types-q-s.md#string) | Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. |

#### Example

```json
{"match": "abc123"}
```

<HorizontalLine />

### FilterRangeTypeInput

Defines a filter that matches a range of values, such as prices or dates.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `from` - [`String`](types-q-s.md#string) | Use this attribute to specify the lowest possible value in the range. |
| `to` - [`String`](types-q-s.md#string) | Use this attribute to specify the highest possible value in the range. |

#### Example

```json
{
  "from": "xyz789",
  "to": "abc123"
}
```

<HorizontalLine />

### FilterStringTypeInput

Defines a filter for an input string.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](types-q-s.md#string) | Filters items that are exactly the same as the specified string. |
| `in` - [`[String]`](types-q-s.md#string) | Filters items that are exactly the same as entries specified in an array of strings. |
| `match` - [`String`](types-q-s.md#string) | Defines a filter that performs a fuzzy search using the specified string. |

#### Example

```json
{
  "eq": "abc123",
  "in": ["abc123"],
  "match": "abc123"
}
```

<HorizontalLine />

### FilterTypeInput

Defines the comparison operators that can be used in a filter.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](types-q-s.md#string) | Equals. |
| `finset` - [`[String]`](types-q-s.md#string) |  |
| `from` - [`String`](types-q-s.md#string) | From. Must be used with the `to` field. |
| `gt` - [`String`](types-q-s.md#string) | Greater than. |
| `gteq` - [`String`](types-q-s.md#string) | Greater than or equal to. |
| `in` - [`[String]`](types-q-s.md#string) | In. The value can contain a set of comma-separated values. |
| `like` - [`String`](types-q-s.md#string) | Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. |
| `lt` - [`String`](types-q-s.md#string) | Less than. |
| `lteq` - [`String`](types-q-s.md#string) | Less than or equal to. |
| `moreq` - [`String`](types-q-s.md#string) | More than or equal to. |
| `neq` - [`String`](types-q-s.md#string) | Not equal to. |
| `nin` - [`[String]`](types-q-s.md#string) | Not in. The value can contain a set of comma-separated values. |
| `notnull` - [`String`](types-q-s.md#string) | Not null. |
| `null` - [`String`](types-q-s.md#string) | Is null. |
| `to` - [`String`](types-q-s.md#string) | To. Must be used with the `from` field. |

#### Example

```json
{
  "eq": "abc123",
  "finset": ["xyz789"],
  "from": "xyz789",
  "gt": "xyz789",
  "gteq": "abc123",
  "in": ["xyz789"],
  "like": "xyz789",
  "lt": "xyz789",
  "lteq": "abc123",
  "moreq": "abc123",
  "neq": "abc123",
  "nin": ["abc123"],
  "notnull": "xyz789",
  "null": "xyz789",
  "to": "abc123"
}
```

<HorizontalLine />

### FixedProductTax

A single FPT that can be applied to a product price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](types-k-p.md#money) | The amount of the Fixed Product Tax. |
| `label` - [`String`](types-q-s.md#string) | The display label assigned to the Fixed Product Tax. |

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

The `Float` scalar type represents signed double-precision fractional
values as specified by
[IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

#### Example

```json
987.65
```

<HorizontalLine />

### GenerateCustomerTokenAsAdminInput

Identifies which customer requires remote shopping assistance.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customer_email` - [`String!`](types-q-s.md#string) | The email address of the customer requesting remote shopping assistance. |

#### Example

```json
{"customer_email": "abc123"}
```

<HorizontalLine />

### GenerateCustomerTokenAsAdminOutput

Contains the generated customer token.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customer_token` - [`String!`](types-q-s.md#string) | The generated customer token. |

#### Example

```json
{"customer_token": "xyz789"}
```

<HorizontalLine />

### GiftCardAccount

Contains details about the gift card account.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance` - [`Money`](types-k-p.md#money) | The balance remaining on the gift card. |
| `code` - [`String`](types-q-s.md#string) | The gift card account code. |
| `expiration_date` - [`String`](types-q-s.md#string) | The expiration date of the gift card. |

#### Example

```json
{
  "balance": Money,
  "code": "xyz789",
  "expiration_date": "abc123"
}
```

<HorizontalLine />

### GiftCardAccountInput

Contains the gift card code.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `gift_card_code` - [`String!`](types-q-s.md#string) | The applied gift card code. |

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
| `value_id` - [`Int`](#int) | An ID that is assigned to each unique gift card amount. *(Deprecated: Use `uid` instead)* |
| `website_id` - [`Int`](#int) | The ID of the website that generated the gift card. |
| `website_value` - [`Float`](#float) | The value of the gift card. |

#### Example

```json
{
  "attribute_id": 987,
  "uid": 4,
  "value": 123.45,
  "value_id": 123,
  "website_id": 123,
  "website_value": 123.45
}
```

<HorizontalLine />

### GiftCardCartItem

Contains details about a gift card that has been added to a cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](types-k-p.md#money) | The amount and currency of the gift card. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](types-q-s.md#selectedcustomizableoption) | An array of customizations applied to the gift card. |
| `errors` - [`[CartItemError]`](types-c-e.md#cartitemerror) | An array of errors encountered while loading the cart item |
| `id` - [`String!`](types-q-s.md#string) |  *(Deprecated: Use `uid` instead.)* |
| `message` - [`String`](types-q-s.md#string) | The message from the sender to the recipient. |
| `prices` - [`CartItemPrices`](types-c-e.md#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](types-k-p.md#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `recipient_email` - [`String`](types-q-s.md#string) | The email address of the person receiving the gift card. |
| `recipient_name` - [`String!`](types-q-s.md#string) | The name of the person receiving the gift card. |
| `sender_email` - [`String`](types-q-s.md#string) | The email address of the sender. |
| `sender_name` - [`String!`](types-q-s.md#string) | The name of the sender. |
| `uid` - [`ID!`](#id) | The unique ID for a `CartItemInterface` object. |

#### Example

```json
{
  "amount": Money,
  "customizable_options": [SelectedCustomizableOption],
  "errors": [CartItemError],
  "id": "abc123",
  "message": "xyz789",
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "recipient_email": "xyz789",
  "recipient_name": "abc123",
  "sender_email": "xyz789",
  "sender_name": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### GiftCardCreditMemoItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](types-c-e.md#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for a credit memo item. |
| `id` - [`ID!`](#id) | The unique ID for a `CreditMemoItemInterface` object. |
| `order_item` - [`OrderItemInterface`](types-k-p.md#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](types-k-p.md#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](types-q-s.md#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |

#### Example

```json
{
  "discounts": [Discount],
  "gift_card": GiftCardItem,
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_refunded": 987.65
}
```

<HorizontalLine />

### GiftCardInvoiceItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](types-c-e.md#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for an invoice item. |
| `id` - [`ID!`](#id) | The unique ID for an `InvoiceItemInterface` object. |
| `order_item` - [`OrderItemInterface`](types-k-p.md#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](types-k-p.md#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](types-q-s.md#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
  "discounts": [Discount],
  "gift_card": GiftCardItem,
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 123.45
}
```

<HorizontalLine />

### GiftCardItem

Contains details about a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String`](types-q-s.md#string) | The message from the sender to the recipient. |
| `recipient_email` - [`String`](types-q-s.md#string) | The email address of the receiver of a virtual gift card. |
| `recipient_name` - [`String`](types-q-s.md#string) | The name of the receiver of a physical or virtual gift card. |
| `sender_email` - [`String`](types-q-s.md#string) | The email address of the sender of a virtual gift card. |
| `sender_name` - [`String`](types-q-s.md#string) | The name of the sender of a physical or virtual gift card. |

#### Example

```json
{
  "message": "abc123",
  "recipient_email": "abc123",
  "recipient_name": "xyz789",
  "sender_email": "xyz789",
  "sender_name": "abc123"
}
```

<HorizontalLine />

### GiftCardOptions

Contains details about the sender, recipient, and amount of a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](types-k-p.md#money) | The amount and currency of the gift card. |
| `custom_giftcard_amount` - [`Money`](types-k-p.md#money) | The custom amount and currency of the gift card. |
| `message` - [`String`](types-q-s.md#string) | A message to the recipient. |
| `recipient_email` - [`String`](types-q-s.md#string) | The email address of the person receiving the gift card. |
| `recipient_name` - [`String`](types-q-s.md#string) | The name of the person receiving the gift card. |
| `sender_email` - [`String`](types-q-s.md#string) | The email address of the person sending the gift card. |
| `sender_name` - [`String`](types-q-s.md#string) | The name of the person sending the gift card. |

#### Example

```json
{
  "amount": Money,
  "custom_giftcard_amount": Money,
  "message": "abc123",
  "recipient_email": "abc123",
  "recipient_name": "xyz789",
  "sender_email": "abc123",
  "sender_name": "abc123"
}
```

<HorizontalLine />

### GiftCardOrderItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](types-c-e.md#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](types-k-p.md#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for an order item. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an `OrderItemInterface` object. |
| `product_name` - [`String`](types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](types-k-p.md#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](types-q-s.md#string) | The SKU of the base product. |
| `product_type` - [`String`](types-q-s.md#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](types-q-s.md#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |
| `quantity_returned` - [`Float`](#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](types-k-p.md#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](types-q-s.md#string) | The status of the order item. |

#### Example

```json
{
  "discounts": [Discount],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_card": GiftCardItem,
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "abc123",
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

### GiftCardProduct

Defines properties of a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activity` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `allow_message` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the customer can provide a message to accompany the gift card. |
| `allow_open_amount` - [`Boolean`](types-a-b.md#boolean) | Indicates whether shoppers have the ability to set the value of the gift card. |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](types-c-e.md#categoryinterface) | The categories assigned to a product. |
| `category_gear` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `climate` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `collar` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `color` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `country_of_manufacture` - [`String`](types-q-s.md#string) | The product's country of origin. |
| `created_at` - [`String`](types-q-s.md#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](types-k-p.md#productinterface) | An array of cross-sell products. |
| `description` - [`ComplexTextValue`](types-c-e.md#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `eco_collection` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `erin_recommends` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `features_bags` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `format` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `gender` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `gift_card_options` - [`[CustomizableOptionInterface]!`](types-c-e.md#customizableoptioninterface) | An array of customizable gift card options. |
| `gift_message_available` - [`String`](types-q-s.md#string) | Indicates whether a gift message is available. |
| `giftcard_amounts` - [`[GiftCardAmounts]`](#giftcardamounts) | An array that contains information about the values and ID of a gift card. |
| `giftcard_type` - [`GiftCardTypeEnum`](#giftcardtypeenum) | An enumeration that specifies the type of gift card. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the `uid` field instead.)* |
| `image` - [`ProductImage`](types-k-p.md#productimage) | The relative path to the main image on the product page. |
| `is_redeemable` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the customer can redeem the value on the card for cash. |
| `is_returnable` - [`String`](types-q-s.md#string) | Indicates whether the product can be returned. |
| `lifetime` - [`Int`](#int) | The number of days after purchase until the gift card expires. A null value means there is no limit. |
| `manufacturer` - [`Int`](#int) | A number representing the product's manufacturer. *(Deprecated: Use the `custom_attributes` field instead.)* |
| `material` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](types-k-p.md#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](types-k-p.md#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use `media_gallery` instead.)* |
| `message_max_length` - [`Int`](#int) | The maximum number of characters the gift message can contain. |
| `meta_description` - [`String`](types-q-s.md#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](types-q-s.md#string) | The product name. Customers use this name to identify the product. |
| `new` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `new_from_date` - [`String`](types-q-s.md#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](types-q-s.md#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `open_amount_max` - [`Float`](#float) | The maximum acceptable value of an open amount gift card. |
| `open_amount_min` - [`Float`](#float) | The minimum acceptable value of an open amount gift card. |
| `options` - [`[CustomizableOptionInterface]`](types-c-e.md#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](types-q-s.md#string) | If the product has multiple options, determines where they appear on the product page. |
| `pattern` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `performance_fabric` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `price` - [`ProductPrices`](types-k-p.md#productprices) | Indicates the price of an item. *(Deprecated: Use `price_range` for product price information.)* |
| `price_range` - [`PriceRange!`](types-k-p.md#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](types-t-z.md#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](types-k-p.md#productlinksinterface) | An array of `ProductLinks` objects. |
| `purpose` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](types-k-p.md#productinterface) | An array of related products. |
| `relative_url` - [`String`](types-q-s.md#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](types-k-p.md#productreviews) | The list of products reviews. |
| `sale` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `short_description` - [`ComplexTextValue`](types-c-e.md#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `size` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `sku` - [`String`](types-q-s.md#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `sleeve` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `small_image` - [`ProductImage`](types-k-p.md#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](types-q-s.md#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](types-q-s.md#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](types-k-p.md#productstockstatus) | Stock status of the product |
| `strap_bags` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `style_bags` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `style_bottom` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `style_general` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `swatch_image` - [`String`](types-q-s.md#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](types-k-p.md#productimage) | The relative path to the product's thumbnail image. |
| `tier_price` - [`Float`](#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](types-k-p.md#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](types-t-z.md#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](types-q-s.md#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use `__typename` instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a `ProductInterface` object. |
| `updated_at` - [`String`](types-q-s.md#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](types-k-p.md#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](types-q-s.md#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](types-q-s.md#string) |  *(Deprecated: Use product's `canonical_url` or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](types-t-z.md#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](types-q-s.md#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](types-t-z.md#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "activity": "xyz789",
  "allow_message": true,
  "allow_open_amount": false,
  "attribute_set_id": 123,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "category_gear": "abc123",
  "climate": "abc123",
  "collar": "xyz789",
  "color": 987,
  "country_of_manufacture": "abc123",
  "created_at": "xyz789",
  "crosssell_products": [ProductInterface],
  "description": ComplexTextValue,
  "eco_collection": 987,
  "erin_recommends": 987,
  "features_bags": "xyz789",
  "format": 123,
  "gender": "xyz789",
  "gift_card_options": [CustomizableOptionInterface],
  "gift_message_available": "xyz789",
  "giftcard_amounts": [GiftCardAmounts],
  "giftcard_type": "VIRTUAL",
  "id": 123,
  "image": ProductImage,
  "is_redeemable": true,
  "is_returnable": "abc123",
  "lifetime": 123,
  "manufacturer": 123,
  "material": "abc123",
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "message_max_length": 123,
  "meta_description": "xyz789",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "name": "abc123",
  "new": 123,
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "open_amount_max": 123.45,
  "open_amount_min": 123.45,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "pattern": "abc123",
  "performance_fabric": 987,
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "purpose": 987,
  "rating_summary": 123.45,
  "redirect_code": 123,
  "related_products": [ProductInterface],
  "relative_url": "xyz789",
  "review_count": 123,
  "reviews": ProductReviews,
  "sale": 123,
  "short_description": ComplexTextValue,
  "size": 987,
  "sku": "xyz789",
  "sleeve": "abc123",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 987.65,
  "special_to_date": "abc123",
  "staged": true,
  "stock_status": "IN_STOCK",
  "strap_bags": "abc123",
  "style_bags": "abc123",
  "style_bottom": "abc123",
  "style_general": "abc123",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "xyz789",
  "uid": "4",
  "updated_at": "xyz789",
  "upsell_products": [ProductInterface],
  "url_key": "xyz789",
  "url_path": "xyz789",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website],
  "weight": 123.45
}
```

<HorizontalLine />

### GiftCardRequisitionListItem

Contains details about gift cards added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](types-q-s.md#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `gift_card_options` - [`GiftCardOptions!`](#giftcardoptions) | An array that defines gift card properties. |
| `product` - [`ProductInterface!`](types-k-p.md#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The amount added. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "gift_card_options": GiftCardOptions,
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### GiftCardShipmentItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for a shipment item. |
| `id` - [`ID!`](#id) | The unique ID for a `ShipmentItemInterface` object. |
| `order_item` - [`OrderItemInterface`](types-k-p.md#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](types-k-p.md#money) | The sale price for the base product. |
| `product_sku` - [`String!`](types-q-s.md#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Example

```json
{
  "gift_card": GiftCardItem,
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
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
| `added_at` - [`String!`](types-q-s.md#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](types-q-s.md#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](types-q-s.md#string) | The description of the item. |
| `gift_card_options` - [`GiftCardOptions!`](#giftcardoptions) | Details about a gift card. |
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface`](types-k-p.md#productinterface) | Product details of the wish list item. |
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
  "quantity": 123.45
}
```

<HorizontalLine />

### GiftMessage

Contains the text of a gift message, its sender, and recipient

#### Fields

| Field Name | Description |
|------------|-------------|
| `from` - [`String!`](types-q-s.md#string) | Sender name |
| `message` - [`String!`](types-q-s.md#string) | Gift message text |
| `to` - [`String!`](types-q-s.md#string) | Recipient name |

#### Example

```json
{
  "from": "xyz789",
  "message": "xyz789",
  "to": "abc123"
}
```

<HorizontalLine />

### GiftMessageInput

Defines a gift message.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `from` - [`String!`](types-q-s.md#string) | The name of the sender. |
| `message` - [`String!`](types-q-s.md#string) | The text of the gift message. |
| `to` - [`String!`](types-q-s.md#string) | The name of the recepient. |

#### Example

```json
{
  "from": "xyz789",
  "message": "abc123",
  "to": "abc123"
}
```

<HorizontalLine />

### GiftOptionsPrices

Contains prices for gift wrapping options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_wrapping_for_items` - [`Money`](types-k-p.md#money) | Price of the gift wrapping for all individual order items. |
| `gift_wrapping_for_order` - [`Money`](types-k-p.md#money) | Price of the gift wrapping for the whole order. |
| `printed_card` - [`Money`](types-k-p.md#money) | Price for the printed card. |

#### Example

```json
{
  "gift_wrapping_for_items": Money,
  "gift_wrapping_for_order": Money,
  "printed_card": Money
}
```

<HorizontalLine />

### GiftRegistry

Contains details about a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](types-q-s.md#string) | The date on which the gift registry was created. Only the registry owner can access this attribute. |
| `dynamic_attributes` - [`[GiftRegistryDynamicAttribute]`](#giftregistrydynamicattribute) | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. |
| `event_name` - [`String!`](types-q-s.md#string) | The name of the event. |
| `items` - [`[GiftRegistryItemInterface]`](#giftregistryiteminterface) | An array of products added to the gift registry. |
| `message` - [`String!`](types-q-s.md#string) | The message text the customer entered to describe the event. |
| `owner_name` - [`String!`](types-q-s.md#string) | The customer who created the gift registry. |
| `privacy_settings` - [`GiftRegistryPrivacySettings!`](#giftregistryprivacysettings) | An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute. |
| `registrants` - [`[GiftRegistryRegistrant]`](#giftregistryregistrant) | Contains details about each registrant for the event. |
| `shipping_address` - [`CustomerAddress`](types-c-e.md#customeraddress) | Contains the customer's shipping address. Only the registry owner can access this attribute. |
| `status` - [`GiftRegistryStatus!`](#giftregistrystatus) | An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute. |
| `type` - [`GiftRegistryType`](#giftregistrytype) | The type of gift registry. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the gift registry. |

#### Example

```json
{
  "created_at": "xyz789",
  "dynamic_attributes": [GiftRegistryDynamicAttribute],
  "event_name": "abc123",
  "items": [GiftRegistryItemInterface],
  "message": "xyz789",
  "owner_name": "abc123",
  "privacy_settings": "PRIVATE",
  "registrants": [GiftRegistryRegistrant],
  "shipping_address": CustomerAddress,
  "status": "ACTIVE",
  "type": GiftRegistryType,
  "uid": "4"
}
```

<HorizontalLine />

### GiftRegistryDynamicAttribute

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `group` - [`GiftRegistryDynamicAttributeGroup!`](#giftregistrydynamicattributegroup) | Indicates which group the dynamic attribute is a member of. |
| `label` - [`String!`](types-q-s.md#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](types-q-s.md#string) | A corresponding value for the code. |

#### Example

```json
{
  "code": "4",
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
| `value` - [`String!`](types-q-s.md#string) | A string that describes a dynamic attribute. |

#### Example

```json
{
  "code": "4",
  "value": "abc123"
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `label` - [`String!`](types-q-s.md#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](types-q-s.md#string) | A corresponding value for the code. |

#### Possible Types

| GiftRegistryDynamicAttributeInterface Types |
|----------------|
| [`GiftRegistryRegistrantDynamicAttribute`](#giftregistryregistrantdynamicattribute) |
| [`GiftRegistryDynamicAttribute`](#giftregistrydynamicattribute) |

#### Example

```json
{
  "code": "4",
  "label": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeMetadata

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_group` - [`String!`](types-q-s.md#string) | Indicates which group the dynamic attribute a member of. |
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `input_type` - [`String!`](types-q-s.md#string) | The selected input type for this dynamic attribute. The value can be one of several static or custom types. |
| `is_required` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the dynamic attribute is required. |
| `label` - [`String!`](types-q-s.md#string) | The display name of the dynamic attribute. |
| `sort_order` - [`Int`](#int) | The order in which to display the dynamic attribute. |

#### Example

```json
{
  "attribute_group": "xyz789",
  "code": 4,
  "input_type": "xyz789",
  "is_required": false,
  "label": "abc123",
  "sort_order": 123
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeMetadataInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_group` - [`String!`](types-q-s.md#string) | Indicates which group the dynamic attribute a member of. |
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `input_type` - [`String!`](types-q-s.md#string) | The selected input type for this dynamic attribute. The value can be one of several static or custom types. |
| `is_required` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the dynamic attribute is required. |
| `label` - [`String!`](types-q-s.md#string) | The display name of the dynamic attribute. |
| `sort_order` - [`Int`](#int) | The order in which to display the dynamic attribute. |

#### Possible Types

| GiftRegistryDynamicAttributeMetadataInterface Types |
|----------------|
| [`GiftRegistryDynamicAttributeMetadata`](#giftregistrydynamicattributemetadata) |

#### Example

```json
{
  "attribute_group": "abc123",
  "code": 4,
  "input_type": "abc123",
  "is_required": true,
  "label": "abc123",
  "sort_order": 987
}
```

<HorizontalLine />

### GiftRegistryItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](types-q-s.md#string) | The date the product was added to the gift registry. |
| `note` - [`String`](types-q-s.md#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface`](types-k-p.md#productinterface) | Details about the gift registry item. |
| `quantity` - [`Float!`](#float) | The requested quantity of the product. |
| `quantity_fulfilled` - [`Float!`](#float) | The fulfilled quantity of the product. |
| `uid` - [`ID!`](#id) | The unique ID of a gift registry item. |

#### Example

```json
{
  "created_at": "abc123",
  "note": "xyz789",
  "product": ProductInterface,
  "quantity": 987.65,
  "quantity_fulfilled": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### GiftRegistryItemInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](types-q-s.md#string) | The date the product was added to the gift registry. |
| `note` - [`String`](types-q-s.md#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface`](types-k-p.md#productinterface) | Details about the gift registry item. |
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
  "created_at": "xyz789",
  "note": "abc123",
  "product": ProductInterface,
  "quantity": 987.65,
  "quantity_fulfilled": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### GiftRegistryItemUserErrorInterface

Contains the status and any errors that encountered with the customer's gift register item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `status` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the attempt to move the cart items to the gift registry was successful. |
| `user_errors` - [`[GiftRegistryItemsUserError]!`](#giftregistryitemsusererror) | An array of errors encountered while moving items from the cart to the gift registry. |

#### Possible Types

| GiftRegistryItemUserErrorInterface Types |
|----------------|
| [`MoveCartItemsToGiftRegistryOutput`](types-k-p.md#movecartitemstogiftregistryoutput) |

#### Example

```json
{
  "status": false,
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
| `message` - [`String!`](types-q-s.md#string) | A localized error message. |
| `product_uid` - [`ID`](#id) | The unique ID of the product containing an error. |

#### Example

```json
{
  "code": "OUT_OF_STOCK",
  "gift_registry_item_uid": 4,
  "gift_registry_uid": 4,
  "message": "abc123",
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
| [`MoveCartItemsToGiftRegistryOutput`](types-k-p.md#movecartitemstogiftregistryoutput) |

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
| `email` - [`String!`](types-q-s.md#string) | The email address of the registrant. Only the registry owner can access this attribute. |
| `firstname` - [`String!`](types-q-s.md#string) | The first name of the registrant. |
| `lastname` - [`String!`](types-q-s.md#string) | The last name of the registrant. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryRegistrantDynamicAttribute
  ],
  "email": "xyz789",
  "firstname": "xyz789",
  "lastname": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### GiftRegistryRegistrantDynamicAttribute

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `label` - [`String!`](types-q-s.md#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](types-q-s.md#string) | A corresponding value for the code. |

#### Example

```json
{
  "code": "4",
  "label": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### GiftRegistrySearchResult

Contains the results of a gift registry search.

#### Fields

| Field Name | Description |
|------------|-------------|
| `event_date` - [`String`](types-q-s.md#string) | The date of the event. |
| `event_title` - [`String!`](types-q-s.md#string) | The title given to the event. |
| `gift_registry_uid` - [`ID!`](#id) | The URL key of the gift registry. |
| `location` - [`String`](types-q-s.md#string) | The location of the event. |
| `name` - [`String!`](types-q-s.md#string) | The name of the gift registry owner. |
| `type` - [`String`](types-q-s.md#string) | The type of event being held. |

#### Example

```json
{
  "event_date": "abc123",
  "event_title": "xyz789",
  "gift_registry_uid": "4",
  "location": "abc123",
  "name": "xyz789",
  "type": "xyz789"
}
```

<HorizontalLine />

### GiftRegistryShippingAddressInput

Defines a shipping address for a gift registry. Specify either `address_data` or the `address_id`. If both are provided, validation will fail.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address_data` - [`CustomerAddressInput`](types-c-e.md#customeraddressinput) | Defines the shipping address for this gift registry. |
| `address_id` - [`ID`](#id) | The ID assigned to this customer address. |

#### Example

```json
{"address_data": CustomerAddressInput, "address_id": 4}
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
| `label` - [`String!`](types-q-s.md#string) | The label assigned to the gift registry type on the Admin. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the gift registry type. |

#### Example

```json
{
  "dynamic_attributes_metadata": [
    GiftRegistryDynamicAttributeMetadataInterface
  ],
  "label": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### GiftWrapping

Contains details about the selected or available gift wrapping options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `design` - [`String!`](types-q-s.md#string) | The name of the gift wrapping design. |
| `id` - [`ID!`](#id) | The unique ID for a `GiftWrapping` object. *(Deprecated: Use `uid` instead)* |
| `image` - [`GiftWrappingImage`](#giftwrappingimage) | The preview image for a gift wrapping option. |
| `price` - [`Money!`](types-k-p.md#money) | The gift wrapping price. |
| `uid` - [`ID!`](#id) | The unique ID for a `GiftWrapping` object. |

#### Example

```json
{
  "design": "xyz789",
  "id": "4",
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
| `label` - [`String!`](types-q-s.md#string) | The gift wrapping preview image label. |
| `url` - [`String!`](types-q-s.md#string) | The gift wrapping preview image URL. |

#### Example

```json
{
  "label": "xyz789",
  "url": "xyz789"
}
```

<HorizontalLine />

### GroupedProduct

Defines a grouped product, which consists of simple standalone products that are presented as a group.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activity` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](types-c-e.md#categoryinterface) | The categories assigned to a product. |
| `category_gear` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `climate` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `collar` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `color` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `country_of_manufacture` - [`String`](types-q-s.md#string) | The product's country of origin. |
| `created_at` - [`String`](types-q-s.md#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](types-k-p.md#productinterface) | An array of cross-sell products. |
| `description` - [`ComplexTextValue`](types-c-e.md#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `eco_collection` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `erin_recommends` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `features_bags` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `format` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `gender` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `gift_message_available` - [`String`](types-q-s.md#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the `uid` field instead.)* |
| `image` - [`ProductImage`](types-k-p.md#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](types-q-s.md#string) | Indicates whether the product can be returned. |
| `items` - [`[GroupedProductItem]`](#groupedproductitem) | An array containing grouped product items. |
| `manufacturer` - [`Int`](#int) | A number representing the product's manufacturer. *(Deprecated: Use the `custom_attributes` field instead.)* |
| `material` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](types-k-p.md#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](types-k-p.md#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use `media_gallery` instead.)* |
| `meta_description` - [`String`](types-q-s.md#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](types-q-s.md#string) | The product name. Customers use this name to identify the product. |
| `new` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `new_from_date` - [`String`](types-q-s.md#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](types-q-s.md#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options_container` - [`String`](types-q-s.md#string) | If the product has multiple options, determines where they appear on the product page. |
| `pattern` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `performance_fabric` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `price` - [`ProductPrices`](types-k-p.md#productprices) | Indicates the price of an item. *(Deprecated: Use `price_range` for product price information.)* |
| `price_range` - [`PriceRange!`](types-k-p.md#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](types-t-z.md#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](types-k-p.md#productlinksinterface) | An array of `ProductLinks` objects. |
| `purpose` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](types-k-p.md#productinterface) | An array of related products. |
| `relative_url` - [`String`](types-q-s.md#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](types-k-p.md#productreviews) | The list of products reviews. |
| `sale` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `short_description` - [`ComplexTextValue`](types-c-e.md#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `size` - [`Int`](#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `sku` - [`String`](types-q-s.md#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `sleeve` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `small_image` - [`ProductImage`](types-k-p.md#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](types-q-s.md#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](types-q-s.md#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](types-k-p.md#productstockstatus) | Stock status of the product |
| `strap_bags` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `style_bags` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `style_bottom` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `style_general` - [`String`](types-q-s.md#string) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `swatch_image` - [`String`](types-q-s.md#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](types-k-p.md#productimage) | The relative path to the product's thumbnail image. |
| `tier_price` - [`Float`](#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](types-k-p.md#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](types-t-z.md#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](types-q-s.md#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use `__typename` instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a `ProductInterface` object. |
| `updated_at` - [`String`](types-q-s.md#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](types-k-p.md#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](types-q-s.md#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](types-q-s.md#string) |  *(Deprecated: Use product's `canonical_url` or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](types-t-z.md#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](types-q-s.md#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](types-t-z.md#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "activity": "xyz789",
  "attribute_set_id": 987,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "category_gear": "abc123",
  "climate": "xyz789",
  "collar": "abc123",
  "color": 123,
  "country_of_manufacture": "xyz789",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "description": ComplexTextValue,
  "eco_collection": 987,
  "erin_recommends": 987,
  "features_bags": "abc123",
  "format": 987,
  "gender": "abc123",
  "gift_message_available": "abc123",
  "id": 123,
  "image": ProductImage,
  "is_returnable": "abc123",
  "items": [GroupedProductItem],
  "manufacturer": 987,
  "material": "xyz789",
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "abc123",
  "meta_title": "abc123",
  "name": "abc123",
  "new": 987,
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 123.45,
  "options_container": "xyz789",
  "pattern": "abc123",
  "performance_fabric": 123,
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "purpose": 123,
  "rating_summary": 987.65,
  "redirect_code": 987,
  "related_products": [ProductInterface],
  "relative_url": "xyz789",
  "review_count": 123,
  "reviews": ProductReviews,
  "sale": 987,
  "short_description": ComplexTextValue,
  "size": 123,
  "sku": "abc123",
  "sleeve": "xyz789",
  "small_image": ProductImage,
  "special_from_date": "abc123",
  "special_price": 123.45,
  "special_to_date": "abc123",
  "staged": true,
  "stock_status": "IN_STOCK",
  "strap_bags": "xyz789",
  "style_bags": "xyz789",
  "style_bottom": "abc123",
  "style_general": "abc123",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "abc123",
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

### GroupedProductItem

Contains information about an individual grouped product item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `position` - [`Int`](#int) | The relative position of this item compared to the other group items. |
| `product` - [`ProductInterface`](types-k-p.md#productinterface) | Details about this product option. |
| `qty` - [`Float`](#float) | The quantity of this grouped product item. |

#### Example

```json
{
  "position": 987,
  "product": ProductInterface,
  "qty": 123.45
}
```

<HorizontalLine />

### GroupedProductWishlistItem

A grouped product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](types-q-s.md#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](types-q-s.md#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](types-q-s.md#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface`](types-k-p.md#productinterface) | Product details of the wish list item. |
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

### HostedProInput

Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](types-q-s.md#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `return_url` - [`String!`](types-q-s.md#string) | The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |

#### Example

```json
{
  "cancel_url": "abc123",
  "return_url": "xyz789"
}
```

<HorizontalLine />

### HostedProUrl

Contains the secure URL used for the Payments Pro Hosted Solution payment method.

#### Fields

| Field Name | Description |
|------------|-------------|
| `secure_form_url` - [`String`](types-q-s.md#string) | The secure URL generated by PayPal. |

#### Example

```json
{"secure_form_url": "abc123"}
```

<HorizontalLine />

### HostedProUrlInput

Contains the required input to request the secure URL for Payments Pro Hosted Solution payment.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](types-q-s.md#string) | The unique ID that identifies the shopper's cart. |

#### Example

```json
{"cart_id": "xyz789"}
```

<HorizontalLine />

### HttpQueryParameter

Contains target path parameters.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String`](types-q-s.md#string) | A parameter name. |
| `value` - [`String`](types-q-s.md#string) | A parameter value. |

#### Example

```json
{
  "name": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### ID

The `ID` scalar type represents a unique identifier, often used to
refetch an object or as key for a cache. The ID type appears in a JSON
response as a String; however, it is not intended to be human-readable.
When expected as an input type, any string (such as `"4"`) or integer
(such as `4`) input value will be accepted as an ID.

#### Example

```json
4
```

<HorizontalLine />

### ImageSwatchData

#### Fields

| Field Name | Description |
|------------|-------------|
| `thumbnail` - [`String`](types-q-s.md#string) | The URL assigned to the thumbnail of the swatch image. |
| `value` - [`String`](types-q-s.md#string) | The value can be represented as color (HEX code), image link, or text. |

#### Example

```json
{
  "thumbnail": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### Int

The `Int` scalar type represents non-fractional signed whole numeric
values. Int can represent values between -(2^31) and 2^31 - 1.

#### Example

```json
123
```

<HorizontalLine />

### InternalError

Contains an error message when an internal error occurred.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](types-q-s.md#string) | The returned error message. |

#### Example

```json
{"message": "abc123"}
```

<HorizontalLine />

### Invoice

Contains invoice details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comments` - [`[SalesCommentItem]`](types-q-s.md#salescommentitem) | Comments on the invoice. |
| `id` - [`ID!`](#id) | The unique ID for a `Invoice` object. |
| `items` - [`[InvoiceItemInterface]`](#invoiceiteminterface) | Invoiced product details. |
| `number` - [`String!`](types-q-s.md#string) | Sequential invoice number. |
| `total` - [`InvoiceTotal`](#invoicetotal) | Invoice total amount details. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "id": "4",
  "items": [InvoiceItemInterface],
  "number": "abc123",
  "total": InvoiceTotal
}
```

<HorizontalLine />

### InvoiceItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](types-c-e.md#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for an `InvoiceItemInterface` object. |
| `order_item` - [`OrderItemInterface`](types-k-p.md#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](types-k-p.md#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](types-q-s.md#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
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

### InvoiceItemInterface

Contains detailes about invoiced items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](types-c-e.md#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for an `InvoiceItemInterface` object. |
| `order_item` - [`OrderItemInterface`](types-k-p.md#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](types-q-s.md#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](types-k-p.md#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](types-q-s.md#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Possible Types

| InvoiceItemInterface Types |
|----------------|
| [`DownloadableInvoiceItem`](types-c-e.md#downloadableinvoiceitem) |
| [`BundleInvoiceItem`](types-a-b.md#bundleinvoiceitem) |
| [`GiftCardInvoiceItem`](#giftcardinvoiceitem) |
| [`InvoiceItem`](#invoiceitem) |

#### Example

```json
{
  "discounts": [Discount],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_invoiced": 123.45
}
```

<HorizontalLine />

### InvoiceTotal

Contains price details from an invoice.

#### Fields

| Field Name | Description |
|------------|-------------|
| `base_grand_total` - [`Money!`](types-k-p.md#money) | The final base grand total amount in the base currency. |
| `discounts` - [`[Discount]`](types-c-e.md#discount) | The applied discounts to the invoice. |
| `grand_total` - [`Money!`](types-k-p.md#money) | The final total amount, including shipping, discounts, and taxes. |
| `shipping_handling` - [`ShippingHandling`](types-q-s.md#shippinghandling) | Details about the shipping and handling costs for the invoice. |
| `subtotal` - [`Money!`](types-k-p.md#money) | The subtotal of the invoice, excluding shipping, discounts, and taxes. |
| `taxes` - [`[TaxItem]`](types-t-z.md#taxitem) | The invoice tax details. |
| `total_shipping` - [`Money!`](types-k-p.md#money) | The shipping amount for the invoice. |
| `total_tax` - [`Money!`](types-k-p.md#money) | The amount of tax applied to the invoice. |

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
| `is_email_available` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the specified email address can be used to create a company administrator. |

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
| `is_email_available` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the specified email address can be used to create a company. |

#### Example

```json
{"is_email_available": true}
```

<HorizontalLine />

### IsCompanyRoleNameAvailableOutput

Contains the response of a role name validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_role_name_available` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the specified company role name is available. |

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
| `is_email_available` - [`Boolean!`](types-a-b.md#boolean) | Indicates whether the specified email address can be used to create a company user. |

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
| `is_email_available` - [`Boolean`](types-a-b.md#boolean) | Indicates whether the specified email address can be used to create a customer. |

#### Example

```json
{"is_email_available": true}
```

<HorizontalLine />

### ItemSelectedBundleOption

A list of options of the selected bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a `ItemSelectedBundleOption` object. *(Deprecated: Use `uid` instead.)* |
| `label` - [`String!`](types-q-s.md#string) | The label of the option. |
| `uid` - [`ID!`](#id) | The unique ID for a `ItemSelectedBundleOption` object. |
| `values` - [`[ItemSelectedBundleOptionValue]`](#itemselectedbundleoptionvalue) | A list of products that represent the values of the parent option. |

#### Example

```json
{
  "id": 4,
  "label": "abc123",
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
| `id` - [`ID!`](#id) | The unique ID for a `ItemSelectedBundleOptionValue` object. *(Deprecated: Use `uid` instead.)* |
| `price` - [`Money!`](types-k-p.md#money) | The price of the child bundle product. |
| `product_name` - [`String!`](types-q-s.md#string) | The name of the child bundle product. |
| `product_sku` - [`String!`](types-q-s.md#string) | The SKU of the child bundle product. |
| `quantity` - [`Float!`](#float) | The number of this bundle product that were ordered. |
| `uid` - [`ID!`](#id) | The unique ID for a `ItemSelectedBundleOptionValue` object. |

#### Example

```json
{
  "id": 4,
  "price": Money,
  "product_name": "abc123",
  "product_sku": "abc123",
  "quantity": 123.45,
  "uid": "4"
}
```

<HorizontalLine />
