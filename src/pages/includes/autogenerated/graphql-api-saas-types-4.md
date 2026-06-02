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
| `base_link_url` - [`String`](#string) | A fully-qualified URL that is used to create relative links to the &#x60;base_url&#x60;. |
| `base_media_url` - [`String`](#string) | The fully-qualified URL that specifies the location of media files. |
| `base_static_url` - [`String`](#string) | The fully-qualified URL that specifies the location of static view files. |
| `base_url` - [`String`](#string) | The store’s fully-qualified base URL. |
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
| `company_credit_enabled` - [`Boolean!`](#boolean) | Indicates if company credit is enabled. |
| `company_enabled` - [`Boolean!`](#boolean) | Indicates if B2B company functionality is enabled |
| `configurable_product_image` - [`ProductImageThumbnail!`](#productimagethumbnail) | checkout/cart/configurable_product_image: which image to use for configurable products. |
| `configurable_thumbnail_source` - [`String`](#string) | Indicates whether the &#x60;parent&#x60; or child (&#x60;itself&#x60;) thumbnail should be used in the cart for configurable products. |
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
| `product_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the &#x27;Display Prices On Product View Page&#x27; field in the Admin. It indicates how FPT information is displayed on product pages. |
| `product_url_suffix` - [`String`](#string) | The suffix applied to product pages, such as &#x60;.htm&#x60; or &#x60;.html&#x60;. |
| `quickorder_active` - [`Boolean!`](#boolean) | Indicates whether quick order functionality is enabled. |
| `quote_minimum_amount` - [`Float`](#float) | Minimum order total for quote request. |
| `quote_minimum_amount_message` - [`String`](#string) | A message that will be shown in the cart when the subtotal (after discount) is lower than the minimum allowed amount. |
| `required_character_classes_number` - [`String`](#string) | The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. |
| `returns_enabled` - [`String!`](#string) | Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled. |
| `root_category_uid` - [`ID`](#id) | The unique ID for a &#x60;CategoryInterface&#x60; object. |
| `sales_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the &#x27;Display Prices In Sales Modules&#x27; field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. |
| `sales_gift_wrapping` - [`String`](#string) | Indicates if gift wrapping prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `sales_printed_card` - [`String`](#string) | Indicates if printed card prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `secure_base_link_url` - [`String`](#string) | A secure fully-qualified URL that is used to create relative links to the &#x60;base_url&#x60;. |
| `secure_base_media_url` - [`String`](#string) | The secure fully-qualified URL that specifies the location of media files. |
| `secure_base_static_url` - [`String`](#string) | The secure fully-qualified URL that specifies the location of static view files. |
| `secure_base_url` - [`String`](#string) | The store’s fully-qualified secure base URL. |
| `share_active_segments` - [`Boolean!`](#boolean) | Configuration data from customer/magento_customersegment/share_active_segments |
| `share_applied_cart_rule` - [`Boolean!`](#boolean) | Configuration data from promo/graphql/share_applied_cart_rule |
| `shopping_cart_display_full_summary` - [`Boolean`](#boolean) | Extended Config Data - tax/cart_display/full_summary |
| `shopping_cart_display_grand_total` - [`Boolean`](#boolean) | Extended Config Data - tax/cart_display/grandtotal |
| `shopping_cart_display_price` - [`Int`](#int) | Extended Config Data - tax/cart_display/price |
| `shopping_cart_display_shipping` - [`Int`](#int) | Extended Config Data - tax/cart_display/shipping |
| `shopping_cart_display_subtotal` - [`Int`](#int) | Extended Config Data - tax/cart_display/subtotal |
| `shopping_cart_display_tax_gift_wrapping` - [`TaxWrappingEnum`](#taxwrappingenum) | Extended Config Data - tax/cart_display/gift_wrapping |
| `shopping_cart_display_zero_tax` - [`Boolean`](#boolean) | Extended Config Data - tax/cart_display/zero_tax |
| `store_code` - [`ID`](#id) | The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the &#x60;Store&#x60; header to provide the scope. |
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
| `zero_subtotal_payment_action` - [`String`](#string) | When the new order status is &#x27;Processing&#x27;, this can be set to &#x60;authorize_capture&#x60; to automatically invoice all items that have a zero balance. |
| `zero_subtotal_payment_from_specific_countries` - [`String`](#string) | A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. |
| `zero_subtotal_sort_order` - [`Int`](#int) | A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. |
| `zero_subtotal_title` - [`String`](#string) | The title of the Zero Subtotal payment method displayed on the storefront. |

#### Example

```json
{
  "allow_company_registration": true,
  "allow_gift_receipt": "xyz789",
  "allow_gift_wrapping_on_order": "xyz789",
  "allow_gift_wrapping_on_order_items": "xyz789",
  "allow_items": "abc123",
  "allow_order": "abc123",
  "allow_printed_card": "abc123",
  "autocomplete_on_storefront": false,
  "base_currency_code": "abc123",
  "base_link_url": "xyz789",
  "base_media_url": "xyz789",
  "base_static_url": "abc123",
  "base_url": "xyz789",
  "cart_expires_in_days": 123,
  "cart_gift_wrapping": "abc123",
  "cart_merge_preference": "xyz789",
  "cart_printed_card": "xyz789",
  "cart_summary_display_quantity": 987,
  "catalog_default_sort_by": "xyz789",
  "category_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "category_url_suffix": "abc123",
  "check_money_order_enable_for_specific_countries": true,
  "check_money_order_enabled": false,
  "check_money_order_make_check_payable_to": "abc123",
  "check_money_order_max_order_total": "xyz789",
  "check_money_order_min_order_total": "abc123",
  "check_money_order_new_order_status": "xyz789",
  "check_money_order_payment_from_specific_countries": "xyz789",
  "check_money_order_send_check_to": "xyz789",
  "check_money_order_sort_order": 987,
  "check_money_order_title": "abc123",
  "company_credit_enabled": true,
  "company_enabled": false,
  "configurable_product_image": "ITSELF",
  "configurable_thumbnail_source": "xyz789",
  "contact_enabled": false,
  "countries_with_required_region": "xyz789",
  "create_account_confirmation": false,
  "customer_access_token_lifetime": 123.45,
  "default_country": "abc123",
  "default_display_currency_code": "abc123",
  "display_product_prices_in_catalog": 987,
  "display_shipping_prices": 123,
  "display_state_if_optional": true,
  "enable_multiple_wishlists": "abc123",
  "fixed_product_taxes_apply_tax_to_fpt": true,
  "fixed_product_taxes_display_prices_in_emails": 123,
  "fixed_product_taxes_display_prices_in_product_lists": 987,
  "fixed_product_taxes_display_prices_in_sales_modules": 987,
  "fixed_product_taxes_display_prices_on_product_view_page": 987,
  "fixed_product_taxes_enable": false,
  "fixed_product_taxes_include_fpt_in_subtotal": false,
  "graphql_share_customer_group": true,
  "grid_per_page": 123,
  "grid_per_page_values": "xyz789",
  "grouped_product_image": "ITSELF",
  "is_checkout_agreements_enabled": false,
  "is_default_store": true,
  "is_default_store_group": false,
  "is_guest_checkout_enabled": false,
  "is_negotiable_quote_active": false,
  "is_one_page_checkout_enabled": false,
  "is_requisition_list_active": "abc123",
  "list_mode": "xyz789",
  "list_per_page": 987,
  "list_per_page_values": "xyz789",
  "locale": "xyz789",
  "magento_reward_general_is_enabled": "abc123",
  "magento_reward_general_is_enabled_on_front": "xyz789",
  "magento_reward_general_min_points_balance": "xyz789",
  "magento_reward_general_publish_history": "abc123",
  "magento_reward_points_invitation_customer": "xyz789",
  "magento_reward_points_invitation_customer_limit": "abc123",
  "magento_reward_points_invitation_order": "abc123",
  "magento_reward_points_invitation_order_limit": "xyz789",
  "magento_reward_points_newsletter": "xyz789",
  "magento_reward_points_order": "xyz789",
  "magento_reward_points_register": "abc123",
  "magento_reward_points_review": "abc123",
  "magento_reward_points_review_limit": "abc123",
  "magento_wishlist_general_is_enabled": "abc123",
  "max_items_in_order_summary": 987,
  "maximum_number_of_wishlists": "abc123",
  "minicart_display": true,
  "minicart_max_items": 987,
  "minimum_password_length": "abc123",
  "newsletter_enabled": false,
  "optional_zip_countries": "xyz789",
  "order_cancellation_enabled": true,
  "order_cancellation_reasons": [CancellationReason],
  "orders_invoices_credit_memos_display_full_summary": false,
  "orders_invoices_credit_memos_display_grandtotal": true,
  "orders_invoices_credit_memos_display_price": 987,
  "orders_invoices_credit_memos_display_shipping_amount": 987,
  "orders_invoices_credit_memos_display_subtotal": 123,
  "orders_invoices_credit_memos_display_zero_tax": false,
  "printed_card_priceV2": Money,
  "product_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "product_url_suffix": "abc123",
  "quickorder_active": true,
  "quote_minimum_amount": 123.45,
  "quote_minimum_amount_message": "xyz789",
  "required_character_classes_number": "xyz789",
  "returns_enabled": "abc123",
  "root_category_uid": 4,
  "sales_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "sales_gift_wrapping": "abc123",
  "sales_printed_card": "abc123",
  "secure_base_link_url": "xyz789",
  "secure_base_media_url": "abc123",
  "secure_base_static_url": "abc123",
  "secure_base_url": "xyz789",
  "share_active_segments": false,
  "share_applied_cart_rule": true,
  "shopping_cart_display_full_summary": true,
  "shopping_cart_display_grand_total": false,
  "shopping_cart_display_price": 987,
  "shopping_cart_display_shipping": 987,
  "shopping_cart_display_subtotal": 987,
  "shopping_cart_display_tax_gift_wrapping": "DISPLAY_EXCLUDING_TAX",
  "shopping_cart_display_zero_tax": true,
  "store_code": "4",
  "store_group_code": "4",
  "store_group_name": "abc123",
  "store_name": "xyz789",
  "store_sort_order": 123,
  "timezone": "xyz789",
  "title_separator": "xyz789",
  "use_store_in_url": false,
  "website_code": 4,
  "website_name": "abc123",
  "weight_unit": "xyz789",
  "zero_subtotal_enable_for_specific_countries": true,
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
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{
  "attachments": [NegotiableQuoteCommentAttachmentInput],
  "comment": "xyz789",
  "max_order_commitment": 123,
  "min_order_commitment": 987,
  "name": "abc123",
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
| `depth` - [`Int!`](#int) | The depth of the subcategories to retrieve. For example, a value of &#x60;2&#x60; returns two levels of subcategories beneath the value specified in &#x60;startLevel&#x60;. |
| `startLevel` - [`Int!`](#int) | The level of the category tree to use as the starting point of the query. For example, &#x60;1&#x60; indicates the topmost category is the starting point. |

#### Example

```json
{"depth": 987, "startLevel": 123}
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
  "title": "abc123"
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
{"value": "xyz789"}
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

### UnitConfigInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `unitName` - [`String`](#string) |  |
| `storefrontLabel` - [`String`](#string) |  |
| `pagePlacement` - [`String`](#string) |  |
| `displayNumber` - [`Int`](#int) |  |
| `pageType` - [`String`](#string) |  |
| `unitStatus` - [`String`](#string) |  |
| `typeId` - [`String`](#string) |  |
| `filterRules` - [`[FilterRuleInput]`](#filterruleinput) |  |

#### Example

```json
{
  "unitName": "abc123",
  "storefrontLabel": "abc123",
  "pagePlacement": "abc123",
  "displayNumber": 987,
  "pageType": "abc123",
  "unitStatus": "xyz789",
  "typeId": "xyz789",
  "filterRules": [FilterRuleInput]
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
  "event_name": "abc123",
  "message": "abc123",
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
  "gift_registry_item_uid": 4,
  "note": "xyz789",
  "quantity": 987.65
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
  "quote_uid": 4
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
  "applies_to": ["4"],
  "approvers": [4],
  "condition": CreatePurchaseOrderApprovalRuleConditionInput,
  "description": "xyz789",
  "name": "abc123",
  "status": "ENABLED",
  "uid": "4"
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
  "name": "abc123"
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
  "quantity": 123.45,
  "selected_options": ["xyz789"]
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
  "name": "xyz789",
  "uid": 4,
  "visibility": "PUBLIC"
}
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
  "currentPage": 123,
  "pageSize": 987,
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
{"message": "abc123", "type": "NOT_FOUND"}
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
{"purchase_order_uids": ["4"]}
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
  "value": "xyz789"
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
  "payment_source": "xyz789",
  "payments_order_id": "abc123",
  "paypal_order_id": "abc123",
  "public_hash": "xyz789"
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

### ViewHistory

User view history

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `date` - [`DateTime`](#datetime) |  |
| `sku` - [`String!`](#string) |  |

#### Example

```json
{
  "date": "2007-12-03T10:15:30Z",
  "sku": "abc123"
}
```

<HorizontalLine />

### ViewHistoryInput

User view history

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `dateTime` - [`DateTime`](#datetime) |  |
| `sku` - [`String!`](#string) |  |

#### Example

```json
{
  "dateTime": "2007-12-03T10:15:30Z",
  "sku": "abc123"
}
```

<HorizontalLine />

### VirtualCartItem

An implementation for virtual product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the cart item |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](#string) | Message to display when the product is not available with this selected option. |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer&#x27;s quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller&#x27;s quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "is_available": false,
  "max_qty": 123.45,
  "min_qty": 123.45,
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

### VirtualProduct

Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. |
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
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `quantity` - [`Float`](#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of products to be displayed in a Related Products block. |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product&#x27;s thumbnail image. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | Upsell Products |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |

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
  "manufacturer": 123,
  "max_sale_qty": 987.65,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "abc123",
  "meta_keyword": "abc123",
  "meta_title": "abc123",
  "min_sale_qty": 987.65,
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 987.65,
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
  "special_price": 987.65,
  "special_to_date": "xyz789",
  "stock_status": "IN_STOCK",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "uid": 4,
  "upsell_products": [ProductInterface],
  "url_key": "xyz789"
}
```

<HorizontalLine />

### VirtualRequisitionListItem

Contains details about virtual products added to a requisition list.

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
  "quantity": 123.45,
  "sku": "xyz789",
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
| `product` - [`ProductInterface!`](#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
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
  "items_count": 123,
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
  "wishlistId": 4,
  "wishlistItemId": "4"
}
```

<HorizontalLine />

### WishlistCartUserInputErrorType

A list of possible error types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRODUCT_NOT_FOUND` |  |
| `NOT_SALABLE` |  |
| `INSUFFICIENT_STOCK` |  |
| `UNDEFINED` |  |
| `REQUIRED_PARAMETER_MISSING` |  |

#### Example

```json
""PRODUCT_NOT_FOUND""
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
  "parent_sku": "xyz789",
  "quantity": 987.65,
  "selected_options": [4],
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
| `product` - [`ProductInterface!`](#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Possible Types

| WishlistItemInterface Types |
|----------------|
| [`BundleWishlistItem`](#bundlewishlistitem) |
| [`ConfigurableWishlistItem`](#configurablewishlistitem) |
| [`DownloadableWishlistItem`](#downloadablewishlistitem) |
| [`GiftCardWishlistItem`](#giftcardwishlistitem) |
| [`GroupedProductWishlistItem`](#groupedproductwishlistitem) |
| [`SimpleWishlistItem`](#simplewishlistitem) |
| [`VirtualWishlistItem`](#virtualwishlistitem) |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": 4,
  "product": ProductInterface,
  "quantity": 987.65
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
{
  "quantity": 123.45,
  "wishlist_item_id": "4"
}
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
  "quantity": 987.65,
  "selected_options": ["4"],
  "wishlist_item_id": 4
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

### finishUploadInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `key` - [`String!`](#string) | The unique key identifier from the upload |
| `media_resource_type` - [`MediaResourceType!`](#mediaresourcetype) | The type of media resource being uploaded |

#### Example

```json
{
  "key": "abc123",
  "media_resource_type": "NEGOTIABLE_QUOTE_ATTACHMENT"
}
```

<HorizontalLine />

### finishUploadOutput

#### Fields

| Field Name | Description |
|------------|-------------|
| `key` - [`String!`](#string) | The unique key identifier |
| `message` - [`String`](#string) | Additional information about the confirmation |
| `success` - [`Boolean!`](#boolean) | Whether the confirmation was successful |

#### Example

```json
{
  "key": "abc123",
  "message": "abc123",
  "success": true
}
```

<HorizontalLine />

### initiateUploadInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `key` - [`String!`](#string) | The name of the file to be uploaded, cannot contain slashes |
| `media_resource_type` - [`MediaResourceType!`](#mediaresourcetype) | The type of media resource being uploaded |

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
| `expires_at` - [`String!`](#string) | The expiration timestamp of the URL |
| `key` - [`String!`](#string) | The unique key identifier for the upload |
| `upload_url` - [`String!`](#string) | The presigned URL for uploading the file |

#### Example

```json
{
  "expires_at": "abc123",
  "key": "xyz789",
  "upload_url": "abc123"
}
```
