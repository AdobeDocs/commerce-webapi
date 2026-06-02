### SimpleProduct

Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities.

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
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `max_sale_qty` - [`Float`](#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
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
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
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
  "color": 123,
  "country_of_manufacture": "abc123",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": true,
  "gift_wrapping_available": true,
  "gift_wrapping_price": Money,
  "id": 987,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 987,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "xyz789",
  "meta_keyword": "abc123",
  "meta_title": "abc123",
  "min_sale_qty": 123.45,
  "name": "xyz789",
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 123.45,
  "rating_summary": 123.45,
  "redirect_code": 123,
  "related_products": [ProductInterface],
  "relative_url": "abc123",
  "review_count": 987,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "xyz789",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
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
  "updated_at": "xyz789",
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

### SimpleProductCartItemInput

Defines a single product to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | An array that defines customizable options for the product. |
| `data` - [`CartItemInput!`](#cartiteminput) | An object containing the &#x60;sku&#x60;, &#x60;quantity&#x60;, and other relevant information about the product. |

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
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
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
  "app_switch_when_available": true,
  "button_styles": ButtonStyles,
  "code": "abc123",
  "display_message": false,
  "display_venmo": true,
  "is_visible": true,
  "message_styles": MessageStyles,
  "payment_intent": "abc123",
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
| `absolute_footer` - [`String`](#string) | Contains scripts that must be included in the HTML before the closing &#x60;&lt;body&gt;&#x60; tag. |
| `allow_gift_receipt` - [`String`](#string) | Indicates if the gift sender has the option to send a gift receipt. Possible values: 1 (Yes) and 0 (No). |
| `allow_gift_wrapping_on_order` - [`String`](#string) | Indicates whether gift wrapping can be added for the entire order. Possible values: 1 (Yes) and 0 (No). |
| `allow_gift_wrapping_on_order_items` - [`String`](#string) | Indicates whether gift wrapping can be added for individual order items. Possible values: 1 (Yes) and 0 (No). |
| `allow_guests_to_write_product_reviews` - [`String`](#string) | Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). |
| `allow_items` - [`String`](#string) | The value of the Allow Gift Messages for Order Items option |
| `allow_order` - [`String`](#string) | The value of the Allow Gift Messages on Order Level option |
| `allow_printed_card` - [`String`](#string) | Indicates if a printed card can accompany an order. Possible values: 1 (Yes) and 0 (No). |
| `autocomplete_on_storefront` - [`Boolean`](#boolean) | Indicates whether to enable autocomplete on login and forgot password forms. |
| `base_currency_code` - [`String`](#string) | The base currency code. |
| `base_link_url` - [`String`](#string) | A fully-qualified URL that is used to create relative links to the &#x60;base_url&#x60;. |
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
| `braintree_paypal_button_location_cart_type_credit_color` - [`String`](#string) | Braintree PayPal Credit mini-cart &amp; cart button style color. |
| `braintree_paypal_button_location_cart_type_credit_label` - [`String`](#string) | Braintree PayPal Credit mini-cart &amp; cart button style label. |
| `braintree_paypal_button_location_cart_type_credit_shape` - [`String`](#string) | Braintree PayPal Credit mini-cart &amp; cart button style shape. |
| `braintree_paypal_button_location_cart_type_credit_show` - [`Boolean`](#boolean) | Braintree PayPal Credit mini-cart &amp; cart button show status. |
| `braintree_paypal_button_location_cart_type_messaging_layout` - [`String`](#string) | Braintree PayPal Pay Later messaging mini-cart &amp; cart style layout. |
| `braintree_paypal_button_location_cart_type_messaging_logo` - [`String`](#string) | Braintree PayPal Pay Later messaging mini-cart &amp; cart style logo. |
| `braintree_paypal_button_location_cart_type_messaging_logo_position` - [`String`](#string) | Braintree PayPal Pay Later messaging mini-cart &amp; cart style logo position. |
| `braintree_paypal_button_location_cart_type_messaging_show` - [`Boolean`](#boolean) | Braintree PayPal Pay Later messaging mini-cart &amp; cart show status. |
| `braintree_paypal_button_location_cart_type_messaging_text_color` - [`String`](#string) | Braintree PayPal Pay Later messaging checkout style text color. |
| `braintree_paypal_button_location_cart_type_paylater_color` - [`String`](#string) | Braintree PayPal Pay Later mini-cart &amp; cart button style color. |
| `braintree_paypal_button_location_cart_type_paylater_label` - [`String`](#string) | Braintree PayPal Pay Later mini-cart &amp; cart button style label. |
| `braintree_paypal_button_location_cart_type_paylater_shape` - [`String`](#string) | Braintree PayPal Pay Later mini-cart &amp; cart button style shape. |
| `braintree_paypal_button_location_cart_type_paylater_show` - [`Boolean`](#boolean) | Braintree PayPal Pay Later mini-cart &amp; cart button show status. |
| `braintree_paypal_button_location_cart_type_paypal_color` - [`String`](#string) | Braintree PayPal mini-cart &amp; cart button style color. |
| `braintree_paypal_button_location_cart_type_paypal_label` - [`String`](#string) | Braintree PayPal mini-cart &amp; cart button style label. |
| `braintree_paypal_button_location_cart_type_paypal_shape` - [`String`](#string) | Braintree PayPal mini-cart &amp; cart button style shape. |
| `braintree_paypal_button_location_cart_type_paypal_show` - [`Boolean`](#boolean) | Braintree PayPal mini-cart &amp; cart button show. |
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
| `braintree_paypal_display_on_shopping_cart` - [`Boolean`](#boolean) | Should display Braintree PayPal in mini-cart &amp; cart? |
| `braintree_paypal_merchant_country` - [`String`](#string) | Braintree PayPal merchant&#x27;s country. |
| `braintree_paypal_merchant_name_override` - [`String`](#string) | Braintree PayPal override for Merchant Name. |
| `braintree_paypal_require_billing_address` - [`Boolean`](#boolean) | Does Braintree PayPal require the customer&#x27;s billing address? |
| `braintree_paypal_send_cart_line_items` - [`Boolean`](#boolean) | Does Braintree PayPal require the order line items? |
| `braintree_paypal_vault_active` - [`Boolean`](#boolean) | Braintree PayPal vault status. |
| `cart_expires_in_days` - [`Int`](#int) | checkout/cart/delete_quote_after: quote lifetime in days. |
| `cart_gift_wrapping` - [`String`](#string) | Indicates if gift wrapping prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). |
| `cart_merge_preference` - [`String!`](#string) | Configuration data from checkout/cart/cart_merge_preference |
| `cart_printed_card` - [`String`](#string) | Indicates if printed card prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). |
| `cart_summary_display_quantity` - [`Int`](#int) | checkout/cart_link/use_qty: what to show in the display cart summary, number of items or item quantities. |
| `catalog_default_sort_by` - [`String`](#string) | The default sort order of the search results list. |
| `category_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the &#x27;Display Prices In Product Lists&#x27; field in the Admin. It indicates how FPT information is displayed on category pages. |
| `category_url_suffix` - [`String`](#string) | The suffix applied to category pages, such as &#x60;.htm&#x60; or &#x60;.html&#x60;. |
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
| `cms_no_route` - [`String`](#string) | A specific CMS page that displays when a 404 &#x27;Page Not Found&#x27; error occurs. |
| `code` - [`String`](#string) | A code assigned to the store to identify it. *(Deprecated: Use &#x60;store_code&#x60; instead.)* |
| `configurable_product_image` - [`ProductImageThumbnail!`](#productimagethumbnail) | checkout/cart/configurable_product_image: which image to use for configurable products. |
| `configurable_thumbnail_source` - [`String`](#string) | Indicates whether the &#x60;parent&#x60; or child (&#x60;itself&#x60;) thumbnail should be used in the cart for configurable products. |
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
| `head_includes` - [`String`](#string) | Scripts that must be included in the HTML before the closing &#x60;&lt;head&gt;&#x60; tag. |
| `head_shortcut_icon` - [`String`](#string) | The small graphic image (favicon) that appears in the address bar and tab of the browser. |
| `header_logo_src` - [`String`](#string) | The path to the logo that appears in the header. |
| `id` - [`Int`](#int) | The ID number assigned to the store. *(Deprecated: Use &#x60;store_code&#x60; instead.)* |
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
| `no_route` - [`String`](#string) | The default page that displays when a 404 &#x27;Page not Found&#x27; error occurs. |
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
| `product_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the &#x27;Display Prices On Product View Page&#x27; field in the Admin. It indicates how FPT information is displayed on product pages. |
| `product_reviews_enabled` - [`String`](#string) | Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). |
| `product_url_suffix` - [`String`](#string) | The suffix applied to product pages, such as &#x60;.htm&#x60; or &#x60;.html&#x60;. |
| `quickorder_active` - [`Boolean!`](#boolean) | Indicates whether quick order functionality is enabled. |
| `required_character_classes_number` - [`String`](#string) | The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. |
| `returns_enabled` - [`String!`](#string) | Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled. |
| `root_category_id` - [`Int`](#int) | The ID of the root category. *(Deprecated: Use &#x60;root_category_uid&#x60; instead.)* |
| `root_category_uid` - [`ID`](#id) | The unique ID for a &#x60;CategoryInterface&#x60; object. |
| `sales_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the &#x27;Display Prices In Sales Modules&#x27; field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. |
| `sales_gift_wrapping` - [`String`](#string) | Indicates if gift wrapping prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `sales_printed_card` - [`String`](#string) | Indicates if printed card prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `secure_base_link_url` - [`String`](#string) | A secure fully-qualified URL that is used to create relative links to the &#x60;base_url&#x60;. |
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
| `store_code` - [`ID`](#id) | The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the &#x60;Store&#x60; header to provide the scope. |
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
| `zero_subtotal_payment_action` - [`String`](#string) | When the new order status is &#x27;Processing&#x27;, this can be set to &#x60;authorize_capture&#x60; to automatically invoice all items that have a zero balance. |
| `zero_subtotal_payment_from_specific_countries` - [`String`](#string) | A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. |
| `zero_subtotal_sort_order` - [`Int`](#int) | A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. |
| `zero_subtotal_title` - [`String`](#string) | The title of the Zero Subtotal payment method displayed on the storefront. |

#### Example

```json
{
  "absolute_footer": "xyz789",
  "allow_gift_receipt": "xyz789",
  "allow_gift_wrapping_on_order": "abc123",
  "allow_gift_wrapping_on_order_items": "xyz789",
  "allow_guests_to_write_product_reviews": "abc123",
  "allow_items": "xyz789",
  "allow_order": "xyz789",
  "allow_printed_card": "abc123",
  "autocomplete_on_storefront": true,
  "base_currency_code": "xyz789",
  "base_link_url": "abc123",
  "base_media_url": "xyz789",
  "base_static_url": "xyz789",
  "base_url": "xyz789",
  "braintree_3dsecure_allowspecific": true,
  "braintree_3dsecure_always_request_3ds": true,
  "braintree_3dsecure_specificcountry": "abc123",
  "braintree_3dsecure_threshold_amount": "xyz789",
  "braintree_3dsecure_verify_3dsecure": false,
  "braintree_ach_direct_debit_vault_active": false,
  "braintree_applepay_merchant_name": "xyz789",
  "braintree_applepay_vault_active": true,
  "braintree_cc_vault_active": "xyz789",
  "braintree_cc_vault_cvv": true,
  "braintree_environment": "abc123",
  "braintree_googlepay_btn_color": "abc123",
  "braintree_googlepay_cctypes": "xyz789",
  "braintree_googlepay_merchant_id": "abc123",
  "braintree_googlepay_vault_active": true,
  "braintree_local_payment_allowed_methods": "abc123",
  "braintree_local_payment_fallback_button_text": "abc123",
  "braintree_local_payment_redirect_on_fail": "abc123",
  "braintree_merchant_account_id": "xyz789",
  "braintree_paypal_button_location_cart_type_credit_color": "abc123",
  "braintree_paypal_button_location_cart_type_credit_label": "xyz789",
  "braintree_paypal_button_location_cart_type_credit_shape": "xyz789",
  "braintree_paypal_button_location_cart_type_credit_show": true,
  "braintree_paypal_button_location_cart_type_messaging_layout": "abc123",
  "braintree_paypal_button_location_cart_type_messaging_logo": "xyz789",
  "braintree_paypal_button_location_cart_type_messaging_logo_position": "xyz789",
  "braintree_paypal_button_location_cart_type_messaging_show": true,
  "braintree_paypal_button_location_cart_type_messaging_text_color": "xyz789",
  "braintree_paypal_button_location_cart_type_paylater_color": "xyz789",
  "braintree_paypal_button_location_cart_type_paylater_label": "xyz789",
  "braintree_paypal_button_location_cart_type_paylater_shape": "xyz789",
  "braintree_paypal_button_location_cart_type_paylater_show": false,
  "braintree_paypal_button_location_cart_type_paypal_color": "xyz789",
  "braintree_paypal_button_location_cart_type_paypal_label": "xyz789",
  "braintree_paypal_button_location_cart_type_paypal_shape": "xyz789",
  "braintree_paypal_button_location_cart_type_paypal_show": true,
  "braintree_paypal_button_location_checkout_type_credit_color": "abc123",
  "braintree_paypal_button_location_checkout_type_credit_label": "xyz789",
  "braintree_paypal_button_location_checkout_type_credit_shape": "xyz789",
  "braintree_paypal_button_location_checkout_type_credit_show": true,
  "braintree_paypal_button_location_checkout_type_messaging_layout": "xyz789",
  "braintree_paypal_button_location_checkout_type_messaging_logo": "xyz789",
  "braintree_paypal_button_location_checkout_type_messaging_logo_position": "xyz789",
  "braintree_paypal_button_location_checkout_type_messaging_show": true,
  "braintree_paypal_button_location_checkout_type_messaging_text_color": "xyz789",
  "braintree_paypal_button_location_checkout_type_paylater_color": "xyz789",
  "braintree_paypal_button_location_checkout_type_paylater_label": "xyz789",
  "braintree_paypal_button_location_checkout_type_paylater_shape": "abc123",
  "braintree_paypal_button_location_checkout_type_paylater_show": true,
  "braintree_paypal_button_location_checkout_type_paypal_color": "xyz789",
  "braintree_paypal_button_location_checkout_type_paypal_label": "abc123",
  "braintree_paypal_button_location_checkout_type_paypal_shape": "abc123",
  "braintree_paypal_button_location_checkout_type_paypal_show": false,
  "braintree_paypal_button_location_productpage_type_credit_color": "xyz789",
  "braintree_paypal_button_location_productpage_type_credit_label": "abc123",
  "braintree_paypal_button_location_productpage_type_credit_shape": "xyz789",
  "braintree_paypal_button_location_productpage_type_credit_show": true,
  "braintree_paypal_button_location_productpage_type_messaging_layout": "xyz789",
  "braintree_paypal_button_location_productpage_type_messaging_logo": "abc123",
  "braintree_paypal_button_location_productpage_type_messaging_logo_position": "abc123",
  "braintree_paypal_button_location_productpage_type_messaging_show": true,
  "braintree_paypal_button_location_productpage_type_messaging_text_color": "xyz789",
  "braintree_paypal_button_location_productpage_type_paylater_color": "xyz789",
  "braintree_paypal_button_location_productpage_type_paylater_label": "abc123",
  "braintree_paypal_button_location_productpage_type_paylater_shape": "abc123",
  "braintree_paypal_button_location_productpage_type_paylater_show": false,
  "braintree_paypal_button_location_productpage_type_paypal_color": "abc123",
  "braintree_paypal_button_location_productpage_type_paypal_label": "xyz789",
  "braintree_paypal_button_location_productpage_type_paypal_shape": "xyz789",
  "braintree_paypal_button_location_productpage_type_paypal_show": true,
  "braintree_paypal_credit_uk_merchant_name": "abc123",
  "braintree_paypal_display_on_shopping_cart": false,
  "braintree_paypal_merchant_country": "abc123",
  "braintree_paypal_merchant_name_override": "xyz789",
  "braintree_paypal_require_billing_address": false,
  "braintree_paypal_send_cart_line_items": true,
  "braintree_paypal_vault_active": false,
  "cart_expires_in_days": 123,
  "cart_gift_wrapping": "xyz789",
  "cart_merge_preference": "xyz789",
  "cart_printed_card": "abc123",
  "cart_summary_display_quantity": 987,
  "catalog_default_sort_by": "xyz789",
  "category_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "category_url_suffix": "xyz789",
  "check_money_order_enable_for_specific_countries": true,
  "check_money_order_enabled": true,
  "check_money_order_make_check_payable_to": "abc123",
  "check_money_order_max_order_total": "abc123",
  "check_money_order_min_order_total": "xyz789",
  "check_money_order_new_order_status": "xyz789",
  "check_money_order_payment_from_specific_countries": "abc123",
  "check_money_order_send_check_to": "abc123",
  "check_money_order_sort_order": 123,
  "check_money_order_title": "abc123",
  "cms_home_page": "abc123",
  "cms_no_cookies": "abc123",
  "cms_no_route": "xyz789",
  "code": "abc123",
  "configurable_product_image": "ITSELF",
  "configurable_thumbnail_source": "abc123",
  "contact_enabled": false,
  "copyright": "xyz789",
  "countries_with_required_region": "abc123",
  "create_account_confirmation": true,
  "customer_access_token_lifetime": 987.65,
  "default_country": "xyz789",
  "default_description": "xyz789",
  "default_display_currency_code": "xyz789",
  "default_keywords": "xyz789",
  "default_title": "abc123",
  "demonotice": 987,
  "display_product_prices_in_catalog": 987,
  "display_shipping_prices": 987,
  "display_state_if_optional": true,
  "enable_multiple_wishlists": "xyz789",
  "fixed_product_taxes_apply_tax_to_fpt": true,
  "fixed_product_taxes_display_prices_in_emails": 987,
  "fixed_product_taxes_display_prices_in_product_lists": 123,
  "fixed_product_taxes_display_prices_in_sales_modules": 987,
  "fixed_product_taxes_display_prices_on_product_view_page": 123,
  "fixed_product_taxes_enable": true,
  "fixed_product_taxes_include_fpt_in_subtotal": false,
  "front": "xyz789",
  "graphql_share_customer_group": true,
  "grid_per_page": 987,
  "grid_per_page_values": "xyz789",
  "grouped_product_image": "ITSELF",
  "head_includes": "abc123",
  "head_shortcut_icon": "xyz789",
  "header_logo_src": "abc123",
  "id": 123,
  "is_checkout_agreements_enabled": true,
  "is_default_store": true,
  "is_default_store_group": false,
  "is_guest_checkout_enabled": false,
  "is_negotiable_quote_active": true,
  "is_one_page_checkout_enabled": true,
  "is_requisition_list_active": "abc123",
  "list_mode": "abc123",
  "list_per_page": 987,
  "list_per_page_values": "xyz789",
  "locale": "abc123",
  "logo_alt": "abc123",
  "logo_height": 987,
  "logo_width": 123,
  "magento_reward_general_is_enabled": "abc123",
  "magento_reward_general_is_enabled_on_front": "xyz789",
  "magento_reward_general_min_points_balance": "abc123",
  "magento_reward_general_publish_history": "xyz789",
  "magento_reward_points_invitation_customer": "abc123",
  "magento_reward_points_invitation_customer_limit": "abc123",
  "magento_reward_points_invitation_order": "xyz789",
  "magento_reward_points_invitation_order_limit": "abc123",
  "magento_reward_points_newsletter": "abc123",
  "magento_reward_points_order": "xyz789",
  "magento_reward_points_register": "abc123",
  "magento_reward_points_review": "abc123",
  "magento_reward_points_review_limit": "abc123",
  "magento_wishlist_general_is_enabled": "abc123",
  "max_items_in_order_summary": 987,
  "maximum_number_of_wishlists": "abc123",
  "minicart_display": false,
  "minicart_max_items": 123,
  "minimum_password_length": "abc123",
  "newsletter_enabled": false,
  "no_route": "xyz789",
  "optional_zip_countries": "xyz789",
  "order_cancellation_enabled": true,
  "order_cancellation_reasons": [CancellationReason],
  "orders_invoices_credit_memos_display_full_summary": true,
  "orders_invoices_credit_memos_display_grandtotal": false,
  "orders_invoices_credit_memos_display_price": 123,
  "orders_invoices_credit_memos_display_shipping_amount": 987,
  "orders_invoices_credit_memos_display_subtotal": 987,
  "orders_invoices_credit_memos_display_zero_tax": true,
  "payment_payflowpro_cc_vault_active": "abc123",
  "printed_card_price": "abc123",
  "printed_card_priceV2": Money,
  "product_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "product_reviews_enabled": "xyz789",
  "product_url_suffix": "xyz789",
  "quickorder_active": true,
  "required_character_classes_number": "xyz789",
  "returns_enabled": "xyz789",
  "root_category_id": 123,
  "root_category_uid": 4,
  "sales_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "sales_gift_wrapping": "abc123",
  "sales_printed_card": "xyz789",
  "secure_base_link_url": "abc123",
  "secure_base_media_url": "abc123",
  "secure_base_static_url": "abc123",
  "secure_base_url": "abc123",
  "send_friend": SendFriendConfiguration,
  "share_active_segments": true,
  "share_applied_cart_rule": false,
  "shopping_cart_display_full_summary": false,
  "shopping_cart_display_grand_total": false,
  "shopping_cart_display_price": 123,
  "shopping_cart_display_shipping": 987,
  "shopping_cart_display_subtotal": 123,
  "shopping_cart_display_tax_gift_wrapping": "DISPLAY_EXCLUDING_TAX",
  "shopping_cart_display_zero_tax": false,
  "show_cms_breadcrumbs": 987,
  "store_code": 4,
  "store_group_code": 4,
  "store_group_name": "xyz789",
  "store_name": "abc123",
  "store_sort_order": 987,
  "timezone": "xyz789",
  "title_prefix": "abc123",
  "title_separator": "xyz789",
  "title_suffix": "abc123",
  "use_store_in_url": false,
  "website_code": "4",
  "website_id": 123,
  "website_name": "abc123",
  "weight_unit": "abc123",
  "welcome": "abc123",
  "zero_subtotal_enable_for_specific_countries": false,
  "zero_subtotal_enabled": false,
  "zero_subtotal_new_order_status": "xyz789",
  "zero_subtotal_payment_action": "xyz789",
  "zero_subtotal_payment_from_specific_countries": "abc123",
  "zero_subtotal_sort_order": 987,
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
"abc123"
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
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{
  "comment": "abc123",
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
  "type": "xyz789",
  "value": "xyz789"
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
{"value": "abc123"}
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
| `items_count` - [`Int`](#int) | The count of items per filter. *(Deprecated: Use &#x60;AggregationOption.count&#x60; instead.)* |
| `label` - [`String`](#string) | The label for a filter. *(Deprecated: Use &#x60;AggregationOption.label&#x60; instead.)* |
| `swatch_data` - [`SwatchData`](#swatchdata) | Data required to render a swatch filter item. |
| `value_string` - [`String`](#string) | The value of a filter request variable to be used in query. *(Deprecated: Use &#x60;AggregationOption.value&#x60; instead.)* |

#### Example

```json
{
  "items_count": 123,
  "label": "abc123",
  "swatch_data": SwatchData,
  "value_string": "abc123"
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
  "id": "abc123"
}
```

<HorizontalLine />

### TaxItem

Contains tax item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount of tax applied to the item. |
| `rate` - [`Float!`](#float) | The rate used to calculate the tax. |
| `title` - [`String!`](#string) | A title that describes the tax. |

#### Example

```json
{
  "amount": Money,
  "rate": 987.65,
  "title": "xyz789"
}
```

<HorizontalLine />

### TaxWrappingEnum

#### Values

| Enum Value | Description |
|------------|-------------|
| `DISPLAY_EXCLUDING_TAX` |  |
| `DISPLAY_INCLUDING_TAX` |  |
| `DISPLAY_TYPE_BOTH` |  |

#### Example

```json
""DISPLAY_EXCLUDING_TAX""
```

<HorizontalLine />

### TextSwatchData

#### Fields

| Field Name | Description |
|------------|-------------|
| `value` - [`String`](#string) | The value can be represented as color (HEX code), image link, or text. |

#### Example

```json
{"value": "abc123"}
```

<HorizontalLine />

### ThreeDSMode

3D Secure mode.

#### Values

| Enum Value | Description |
|------------|-------------|
| `OFF` |  |
| `SCA_WHEN_REQUIRED` |  |
| `SCA_ALWAYS` |  |

#### Example

```json
""OFF""
```

<HorizontalLine />

### TierPrice

Defines a price based on the quantity purchased.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discount` - [`ProductDiscount`](#productdiscount) | The price discount that this tier represents. |
| `final_price` - [`Money`](#money) | The price of the product at this tier. |
| `quantity` - [`Float`](#float) | The minimum number of items that must be purchased to qualify for this price tier. |

#### Example

```json
{
  "discount": ProductDiscount,
  "final_price": Money,
  "quantity": 123.45
}
```

<HorizontalLine />

### UpdateCartItemsInput

Modifies the specified items in the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `cart_items` - [`[CartItemUpdateInput]!`](#cartitemupdateinput) | An array of items to be updated. |

#### Example

```json
{
  "cart_id": "abc123",
  "cart_items": [CartItemUpdateInput]
}
```

<HorizontalLine />

### UpdateCartItemsOutput

Contains details about the cart after updating items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after updating products. |
| `errors` - [`[CartUserInputError]!`](#cartuserinputerror) | Contains errors encountered while updating an item to the cart. |

#### Example

```json
{
  "cart": Cart,
  "errors": [CartUserInputError]
}
```

<HorizontalLine />

### UpdateCompanyOutput

Contains the response to the request to update the company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `company` - [`Company!`](#company) | The updated company instance. |

#### Example

```json
{"company": Company}
```

<HorizontalLine />

### UpdateCompanyRoleOutput

Contains the response to the request to update the company role.

#### Fields

| Field Name | Description |
|------------|-------------|
| `role` - [`CompanyRole!`](#companyrole) | The updated company role instance. |

#### Example

```json
{"role": CompanyRole}
```

<HorizontalLine />

### UpdateCompanyStructureOutput

Contains the response to the request to update the company structure.

#### Fields

| Field Name | Description |
|------------|-------------|
| `company` - [`Company!`](#company) | The updated company instance. |

#### Example

```json
{"company": Company}
```

<HorizontalLine />

### UpdateCompanyTeamOutput

Contains the response to the request to update a company team.

#### Fields

| Field Name | Description |
|------------|-------------|
| `team` - [`CompanyTeam!`](#companyteam) | The updated company team instance. |

#### Example

```json
{"team": CompanyTeam}
```

<HorizontalLine />

### UpdateCompanyUserOutput

Contains the response to the request to update the company user.

#### Fields

| Field Name | Description |
|------------|-------------|
| `user` - [`Customer!`](#customer) | The updated company user instance. |

#### Example

```json
{"user": Customer}
```

<HorizontalLine />

### UpdateGiftRegistryInput

Defines updates to a `GiftRegistry` object.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](#giftregistrydynamicattributeinput) | Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed. |
| `event_name` - [`String`](#string) | The updated name of the event. |
| `message` - [`String`](#string) | The updated message describing the event. |
| `privacy_settings` - [`GiftRegistryPrivacySettings`](#giftregistryprivacysettings) | Indicates whether the gift registry is PRIVATE or PUBLIC. |
| `shipping_address` - [`GiftRegistryShippingAddressInput`](#giftregistryshippingaddressinput) | The updated shipping address for all gift registry items. |
| `status` - [`GiftRegistryStatus`](#giftregistrystatus) | Indicates whether the gift registry is ACTIVE or INACTIVE. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryDynamicAttributeInput
  ],
  "event_name": "xyz789",
  "message": "xyz789",
  "privacy_settings": "PRIVATE",
  "shipping_address": GiftRegistryShippingAddressInput,
  "status": "ACTIVE"
}
```

<HorizontalLine />

### UpdateGiftRegistryItemInput

Defines updates to an item in a gift registry.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `gift_registry_item_uid` - [`ID!`](#id) | The unique ID of a &#x60;giftRegistryItem&#x60; object. |
| `note` - [`String`](#string) | The updated description of the item. |
| `quantity` - [`Float!`](#float) | The updated quantity of the gift registry item. |

#### Example

```json
{
  "gift_registry_item_uid": "4",
  "note": "xyz789",
  "quantity": 123.45
}
```

<HorizontalLine />

### UpdateGiftRegistryItemsOutput

Contains the results of a request to update gift registry items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry after updating updating items. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### UpdateGiftRegistryOutput

Contains the results of a request to update a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The updated gift registry. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### UpdateGiftRegistryRegistrantInput

Defines updates to an existing registrant.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](#giftregistrydynamicattributeinput) | As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed. |
| `email` - [`String`](#string) | The updated email address of the registrant. |
| `firstname` - [`String`](#string) | The updated first name of the registrant. |
| `gift_registry_registrant_uid` - [`ID!`](#id) | The unique ID of a &#x60;giftRegistryRegistrant&#x60; object. |
| `lastname` - [`String`](#string) | The updated last name of the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryDynamicAttributeInput
  ],
  "email": "xyz789",
  "firstname": "xyz789",
  "gift_registry_registrant_uid": 4,
  "lastname": "xyz789"
}
```

<HorizontalLine />

### UpdateGiftRegistryRegistrantsOutput

Contains the results a request to update registrants.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry after updating registrants. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### UpdateNegotiableQuoteItemsQuantityOutput

Contains the updated negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The updated negotiable quote. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### UpdateNegotiableQuoteQuantitiesInput

Specifies the items to update.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `items` - [`[NegotiableQuoteItemQuantityInput]!`](#negotiablequoteitemquantityinput) | An array of items to update. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "items": [NegotiableQuoteItemQuantityInput],
  "quote_uid": "4"
}
```

<HorizontalLine />

### UpdateNegotiableQuoteTemplateItemsQuantityOutput

Contains the updated negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote_template` - [`NegotiableQuoteTemplate`](#negotiablequotetemplate) | The updated negotiable quote template. |

#### Example

```json
{"quote_template": NegotiableQuoteTemplate}
```

<HorizontalLine />

### UpdateNegotiableQuoteTemplateQuantitiesInput

Specifies the items to update.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `items` - [`[NegotiableQuoteTemplateItemQuantityInput]!`](#negotiablequotetemplateitemquantityinput) | An array of items to update. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{
  "items": [NegotiableQuoteTemplateItemQuantityInput],
  "template_id": 4
}
```

<HorizontalLine />

### UpdateProductsInWishlistOutput

Contains the customer's wish list and any errors encountered.

#### Fields

| Field Name | Description |
|------------|-------------|
| `user_errors` - [`[WishListUserInputError]!`](#wishlistuserinputerror) | An array of errors encountered while updating products in a wish list. |
| `wishlist` - [`Wishlist!`](#wishlist) | Contains the wish list with all items that were successfully updated. |

#### Example

```json
{
  "user_errors": [WishListUserInputError],
  "wishlist": Wishlist
}
```

<HorizontalLine />

### UpdatePurchaseOrderApprovalRuleInput

Defines the changes to be made to an approval rule.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `applies_to` - [`[ID]`](#id) | An updated list of company user role IDs to which this purchase order approval rule should be applied. When an empty array is provided, the rule is applied to all user roles in the system, including those created in the future. |
| `approvers` - [`[ID]`](#id) | An updated list of B2B user roles that can approve this purchase order approval rule. |
| `condition` - [`CreatePurchaseOrderApprovalRuleConditionInput`](#createpurchaseorderapprovalruleconditioninput) | The updated condition of the purchase order approval rule. |
| `description` - [`String`](#string) | The updated approval rule description. |
| `name` - [`String`](#string) | The updated approval rule name. |
| `status` - [`PurchaseOrderApprovalRuleStatus`](#purchaseorderapprovalrulestatus) | The updated status of the purchase order approval rule. |
| `uid` - [`ID!`](#id) | Unique identifier for the purchase order approval rule. |

#### Example

```json
{
  "applies_to": [4],
  "approvers": ["4"],
  "condition": CreatePurchaseOrderApprovalRuleConditionInput,
  "description": "xyz789",
  "name": "xyz789",
  "status": "ENABLED",
  "uid": 4
}
```

<HorizontalLine />

### UpdateRequisitionListInput

An input object that defines which requistion list characteristics to update.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `description` - [`String`](#string) | The updated description of the requisition list. |
| `name` - [`String!`](#string) | The new name of the requisition list. |

#### Example

```json
{
  "description": "xyz789",
  "name": "xyz789"
}
```

<HorizontalLine />

### UpdateRequisitionListItemsInput

Defines which items in a requisition list to update.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_options` - [`[EnteredOptionInput]`](#enteredoptioninput) | An array of customer-entered options. |
| `item_id` - [`ID!`](#id) | The ID of the requisition list item to update. |
| `quantity` - [`Float`](#float) | The new quantity of the item. |
| `selected_options` - [`[String]`](#string) | An array of selected option IDs. |

#### Example

```json
{
  "entered_options": [EnteredOptionInput],
  "item_id": 4,
  "quantity": 987.65,
  "selected_options": ["abc123"]
}
```

<HorizontalLine />

### UpdateRequisitionListItemsOutput

Output of the request to update items in the specified requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](#requisitionlist) | The requisition list after updating items. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### UpdateRequisitionListOutput

Output of the request to rename the requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](#requisitionlist) | The renamed requisition list. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### UpdateWishlistOutput

Contains the name and visibility of an updated wish list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String!`](#string) | The wish list name. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;Wishlist&#x60; object. |
| `visibility` - [`WishlistVisibilityEnum!`](#wishlistvisibilityenum) | Indicates whether the wish list is public or private. |

#### Example

```json
{
  "name": "abc123",
  "uid": "4",
  "visibility": "PUBLIC"
}
```

<HorizontalLine />

### UrlRewrite

Contains URL rewrite details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `parameters` - [`[HttpQueryParameter]`](#httpqueryparameter) | An array of request parameters. |
| `url` - [`String`](#string) | The request URL. |

#### Example

```json
{
  "parameters": [HttpQueryParameter],
  "url": "abc123"
}
```

<HorizontalLine />

### UrlRewriteEntityTypeEnum

This enumeration defines the entity type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `CMS_PAGE` |  |
| `PRODUCT` |  |
| `CATEGORY` |  |

#### Example

```json
""CMS_PAGE""
```

<HorizontalLine />

### UseInLayeredNavigationOptions

Defines whether the attribute is filterable in layered navigation.

#### Values

| Enum Value | Description |
|------------|-------------|
| `NO` |  |
| `FILTERABLE_WITH_RESULTS` |  |
| `FILTERABLE_NO_RESULT` |  |

#### Example

```json
""NO""
```

<HorizontalLine />

### UserCompaniesInput

Defines the input for returning matching companies the customer is assigned to.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `currentPage` - [`Int`](#int) | Specifies which page of results to return. The default value is 1. |
| `pageSize` - [`Int`](#int) | Specifies the maximum number of results to return at once. This attribute is optional. |
| `sort` - [`[CompaniesSortInput]`](#companiessortinput) | Defines the sorting of the results. |

#### Example

```json
{
  "currentPage": 987,
  "pageSize": 123,
  "sort": [CompaniesSortInput]
}
```

<HorizontalLine />

### UserCompaniesOutput

An object that contains a list of companies customer is assigned to.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CompanyBasicInfo]!`](#companybasicinfo) | An array of companies customer is assigned to. |
| `page_info` - [`SearchResultPageInfo!`](#searchresultpageinfo) | Provides navigation for the query response. |

#### Example

```json
{
  "items": [CompanyBasicInfo],
  "page_info": SearchResultPageInfo
}
```

<HorizontalLine />

### ValidatePurchaseOrderError

Contains details about a failed validation attempt.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |
| `type` - [`ValidatePurchaseOrderErrorType!`](#validatepurchaseordererrortype) | Error type. |

#### Example

```json
{"message": "xyz789", "type": "NOT_FOUND"}
```

<HorizontalLine />

### ValidatePurchaseOrderErrorType

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

### ValidatePurchaseOrdersInput

Defines the purchase orders to be validated.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `purchase_order_uids` - [`[ID]!`](#id) | An array of the purchase order IDs. |

#### Example

```json
{"purchase_order_uids": [4]}
```

<HorizontalLine />

### ValidatePurchaseOrdersOutput

Contains the results of validation attempts.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[ValidatePurchaseOrderError]!`](#validatepurchaseordererror) | An array of error messages encountered while performing the operation. |
| `purchase_orders` - [`[PurchaseOrder]!`](#purchaseorder) | An array of the purchase orders in the request. |

#### Example

```json
{
  "errors": [ValidatePurchaseOrderError],
  "purchase_orders": [PurchaseOrder]
}
```

<HorizontalLine />

### ValidationRule

Defines a customer attribute validation rule.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`ValidationRuleEnum`](#validationruleenum) | Validation rule name applied to a customer attribute. |
| `value` - [`String`](#string) | Validation rule value. |

#### Example

```json
{
  "name": "DATE_RANGE_MAX",
  "value": "abc123"
}
```

<HorizontalLine />

### ValidationRuleEnum

List of validation rule names applied to a customer attribute.

#### Values

| Enum Value | Description |
|------------|-------------|
| `DATE_RANGE_MAX` |  |
| `DATE_RANGE_MIN` |  |
| `FILE_EXTENSIONS` |  |
| `INPUT_VALIDATION` |  |
| `MAX_TEXT_LENGTH` |  |
| `MIN_TEXT_LENGTH` |  |
| `MAX_FILE_SIZE` |  |
| `MAX_IMAGE_HEIGHT` |  |
| `MAX_IMAGE_WIDTH` |  |

#### Example

```json
""DATE_RANGE_MAX""
```

<HorizontalLine />

### VaultConfigOutput

Retrieves the vault configuration

#### Fields

| Field Name | Description |
|------------|-------------|
| `credit_card` - [`VaultCreditCardConfig`](#vaultcreditcardconfig) | Credit card vault method configuration |

#### Example

```json
{"credit_card": VaultCreditCardConfig}
```

<HorizontalLine />

### VaultCreditCardConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_vault_enabled` - [`Boolean`](#boolean) | Is vault enabled |
| `sdk_params` - [`[SDKParams]`](#sdkparams) | The parameters required to load the Paypal JS SDK |
| `three_ds_mode` - [`ThreeDSMode`](#threedsmode) | 3DS mode |

#### Example

```json
{
  "is_vault_enabled": false,
  "sdk_params": [SDKParams],
  "three_ds_mode": "OFF"
}
```

<HorizontalLine />

### VaultMethodInput

Vault payment inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](#string) | The payment services order ID |
| `paypal_order_id` - [`String`](#string) | PayPal order ID |
| `public_hash` - [`String`](#string) | The public hash of the token. |

#### Example

```json
{
  "payment_source": "abc123",
  "payments_order_id": "abc123",
  "paypal_order_id": "abc123",
  "public_hash": "abc123"
}
```

<HorizontalLine />

### VaultSetupTokenInput

The payment source information

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_source` - [`PaymentSourceInput!`](#paymentsourceinput) | The payment source information |

#### Example

```json
{"payment_source": PaymentSourceInput}
```

<HorizontalLine />

### VaultTokenInput

Contains required input for payment methods with Vault support.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `public_hash` - [`String!`](#string) | The public hash of the payment token. |

#### Example

```json
{"public_hash": "abc123"}
```

<HorizontalLine />

### VirtualCartItem

An implementation for virtual product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](#string) | Message to display when the product is not available with this selected option. |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer&#x27;s quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller&#x27;s quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "id": "abc123",
  "is_available": false,
  "max_qty": 987.65,
  "min_qty": 987.65,
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

### VirtualProduct

Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory.

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
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `max_sale_qty` - [`Float`](#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
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
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
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

#### Example

```json
{
  "attribute_set_id": 123,
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "color": 987,
  "country_of_manufacture": "xyz789",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": true,
  "gift_wrapping_available": true,
  "gift_wrapping_price": Money,
  "id": 987,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 987,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "abc123",
  "meta_title": "xyz789",
  "min_sale_qty": 987.65,
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 987.65,
  "rating_summary": 987.65,
  "redirect_code": 987,
  "related_products": [ProductInterface],
  "relative_url": "abc123",
  "review_count": 987,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "xyz789",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 987.65,
  "special_to_date": "abc123",
  "staged": false,
  "stock_status": "IN_STOCK",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "xyz789",
  "uid": 4,
  "updated_at": "abc123",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "abc123",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website]
}
```

<HorizontalLine />

### VirtualProductCartItemInput

Defines a single product to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | An array that defines customizable options for the product. |
| `data` - [`CartItemInput!`](#cartiteminput) | An object containing the &#x60;sku&#x60;, &#x60;quantity&#x60;, and other relevant information about the product. |

#### Example

```json
{
  "customizable_options": [CustomizableOptionInput],
  "data": CartItemInput
}
```

<HorizontalLine />

### VirtualRequisitionListItem

Contains details about virtual products added to a requisition list.

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

### VirtualWishlistItem

Contains a virtual product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": 4,
  "product": ProductInterface,
  "quantity": 123.45
}
```

<HorizontalLine />

### Website

Deprecated. It should not be used on the storefront. Contains information about a website.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | A code assigned to the website to identify it. *(Deprecated: The field should not be used on the storefront.)* |
| `default_group_id` - [`String`](#string) | The default group ID of the website. *(Deprecated: The field should not be used on the storefront.)* |
| `id` - [`Int`](#int) | The ID number assigned to the website. *(Deprecated: The field should not be used on the storefront.)* |
| `is_default` - [`Boolean`](#boolean) | Indicates whether this is the default website. *(Deprecated: The field should not be used on the storefront.)* |
| `name` - [`String`](#string) | The website name. Websites use this name to identify it easier. *(Deprecated: The field should not be used on the storefront.)* |
| `sort_order` - [`Int`](#int) | The attribute to use for sorting websites. *(Deprecated: The field should not be used on the storefront.)* |

#### Example

```json
{
  "code": "xyz789",
  "default_group_id": "xyz789",
  "id": 987,
  "is_default": true,
  "name": "xyz789",
  "sort_order": 123
}
```

<HorizontalLine />

### WishListUserInputError

An error encountered while performing operations with WishList.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`WishListUserInputErrorType!`](#wishlistuserinputerrortype) | A wish list-specific error code. |
| `message` - [`String!`](#string) | A localized error message. |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "abc123"
}
```

<HorizontalLine />

### WishListUserInputErrorType

A list of possible error types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRODUCT_NOT_FOUND` |  |
| `UNDEFINED` |  |

#### Example

```json
""PRODUCT_NOT_FOUND""
```

<HorizontalLine />

### Wishlist

Contains a customer wish list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The unique ID for a &#x60;Wishlist&#x60; object. |
| `items` - [`[WishlistItem]`](#wishlistitem) |  *(Deprecated: Use the &#x60;items_v2&#x60; field instead.)* |
| `items_count` - [`Int`](#int) | The number of items in the wish list. |
| `items_v2` - [`WishlistItems`](#wishlistitems) | An array of items in the customer&#x27;s wish list. |
| `name` - [`String`](#string) | The name of the wish list. |
| `sharing_code` - [`String`](#string) | An encrypted code that Magento uses to link to the wish list. |
| `updated_at` - [`String`](#string) | The time of the last modification to the wish list. |
| `visibility` - [`WishlistVisibilityEnum!`](#wishlistvisibilityenum) | Indicates whether the wish list is public or private. |

#### Example

```json
{
  "id": "4",
  "items": [WishlistItem],
  "items_count": 987,
  "items_v2": WishlistItems,
  "name": "xyz789",
  "sharing_code": "xyz789",
  "updated_at": "xyz789",
  "visibility": "PUBLIC"
}
```

<HorizontalLine />

### WishlistCartUserInputError

Contains details about errors encountered when a customer added wish list items to the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`WishlistCartUserInputErrorType!`](#wishlistcartuserinputerrortype) | An error code that describes the error encountered. |
| `message` - [`String!`](#string) | A localized error message. |
| `wishlistId` - [`ID!`](#id) | The unique ID of the &#x60;Wishlist&#x60; object containing an error. |
| `wishlistItemId` - [`ID!`](#id) | The unique ID of the wish list item containing an error. |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "abc123",
  "wishlistId": "4",
  "wishlistItemId": 4
}
```

<HorizontalLine />

### WishlistCartUserInputErrorType

A list of possible error types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRODUCT_NOT_FOUND` |  |
| `REQUIRED_PARAMETER_MISSING` |  |
| `NOT_SALABLE` |  |
| `INSUFFICIENT_STOCK` |  |
| `UNDEFINED` |  |

#### Example

```json
""PRODUCT_NOT_FOUND""
```

<HorizontalLine />

### WishlistItem

Contains details about a wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String`](#string) | The time when the customer added the item to the wish list. |
| `description` - [`String`](#string) | The customer&#x27;s comment about this item. |
| `id` - [`Int`](#int) | The unique ID for a &#x60;WishlistItem&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Details about the wish list item. |
| `qty` - [`Float`](#float) | The quantity of this wish list item |

#### Example

```json
{
  "added_at": "xyz789",
  "description": "xyz789",
  "id": 123,
  "product": ProductInterface,
  "qty": 123.45
}
```

<HorizontalLine />

### WishlistItemCopyInput

Specifies the IDs of items to copy and their quantities.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quantity` - [`Float`](#float) | The quantity of this item to copy to the destination wish list. This value can&#x27;t be greater than the quantity in the source wish list. |
| `wishlist_item_id` - [`ID!`](#id) | The unique ID of the &#x60;WishlistItemInterface&#x60; object to be copied. |

#### Example

```json
{
  "quantity": 987.65,
  "wishlist_item_id": "4"
}
```

<HorizontalLine />

### WishlistItemInput

Defines the items to add to a wish list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_options` - [`[EnteredOptionInput]`](#enteredoptioninput) | An array of options that the customer entered. |
| `parent_sku` - [`String`](#string) | For complex product types, the SKU of the parent product. |
| `quantity` - [`Float!`](#float) | The amount or number of items to add. |
| `selected_options` - [`[ID]`](#id) | An array of strings corresponding to options the customer selected. |
| `sku` - [`String!`](#string) | The SKU of the product to add. For complex product types, specify the child product SKU. |

#### Example

```json
{
  "entered_options": [EnteredOptionInput],
  "parent_sku": "abc123",
  "quantity": 123.45,
  "selected_options": ["4"],
  "sku": "xyz789"
}
```

<HorizontalLine />

### WishlistItemInterface

The interface for wish list items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Possible Types

| WishlistItemInterface Types |
|----------------|
| [`SimpleWishlistItem`](#simplewishlistitem) |
| [`VirtualWishlistItem`](#virtualwishlistitem) |
| [`ConfigurableWishlistItem`](#configurablewishlistitem) |
| [`DownloadableWishlistItem`](#downloadablewishlistitem) |
| [`BundleWishlistItem`](#bundlewishlistitem) |
| [`GiftCardWishlistItem`](#giftcardwishlistitem) |
| [`GroupedProductWishlistItem`](#groupedproductwishlistitem) |

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

### WishlistItemMoveInput

Specifies the IDs of the items to move and their quantities.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quantity` - [`Float`](#float) | The quantity of this item to move to the destination wish list. This value can&#x27;t be greater than the quantity in the source wish list. |
| `wishlist_item_id` - [`ID!`](#id) | The unique ID of the &#x60;WishlistItemInterface&#x60; object to be moved. |

#### Example

```json
{"quantity": 123.45, "wishlist_item_id": 4}
```

<HorizontalLine />

### WishlistItemUpdateInput

Defines updates to items in a wish list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `description` - [`String`](#string) | Customer-entered comments about the item. |
| `entered_options` - [`[EnteredOptionInput]`](#enteredoptioninput) | An array of options that the customer entered. |
| `quantity` - [`Float`](#float) | The new amount or number of this item. |
| `selected_options` - [`[ID]`](#id) | An array of strings corresponding to options the customer selected. |
| `wishlist_item_id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |

#### Example

```json
{
  "description": "xyz789",
  "entered_options": [EnteredOptionInput],
  "quantity": 123.45,
  "selected_options": ["4"],
  "wishlist_item_id": "4"
}
```

<HorizontalLine />

### WishlistItems

Contains an array of items in a wish list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[WishlistItemInterface]!`](#wishlistiteminterface) | A list of items in the wish list. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Contains pagination metadata. |

#### Example

```json
{
  "items": [WishlistItemInterface],
  "page_info": SearchResultPageInfo
}
```

<HorizontalLine />

### WishlistOutput

Deprecated: Use the `Wishlist` type instead.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[WishlistItem]`](#wishlistitem) | An array of items in the customer&#x27;s wish list *(Deprecated: Use the &#x60;Wishlist.items&#x60; field instead.)* |
| `items_count` - [`Int`](#int) | The number of items in the wish list. *(Deprecated: Use the &#x60;Wishlist.items_count&#x60; field instead.)* |
| `name` - [`String`](#string) | When multiple wish lists are enabled, the name the customer assigns to the wishlist. *(Deprecated: This field is related to Commerce functionality and is always &#x60;null&#x60; in Open Source.)* |
| `sharing_code` - [`String`](#string) | An encrypted code that links to the wish list. *(Deprecated: Use the &#x60;Wishlist.sharing_code&#x60; field instead.)* |
| `updated_at` - [`String`](#string) | The time of the last modification to the wish list. *(Deprecated: Use the &#x60;Wishlist.updated_at&#x60; field instead.)* |

#### Example

```json
{
  "items": [WishlistItem],
  "items_count": 123,
  "name": "abc123",
  "sharing_code": "xyz789",
  "updated_at": "abc123"
}
```

<HorizontalLine />

### WishlistVisibilityEnum

Defines the wish list visibility types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PUBLIC` |  |
| `PRIVATE` |  |

#### Example

```json
""PUBLIC""
```

<HorizontalLine />

### createEmptyCartInput

Assigns a specific `cart_id` to the empty cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String`](#string) | The ID to assign to the cart. |

#### Example

```json
{"cart_id": "abc123"}
```
