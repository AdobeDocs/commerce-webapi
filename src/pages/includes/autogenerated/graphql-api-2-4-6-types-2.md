### CustomizableFileOption

Contains information about a file picker that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `product_sku` - [`String`](#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`CustomizableFileValue`](#customizablefilevalue) | An object that defines a file value. |

#### Example

```json
{
  "option_id": 123,
  "product_sku": "xyz789",
  "required": false,
  "sort_order": 987,
  "title": "abc123",
  "uid": "4",
  "value": CustomizableFileValue
}
```

<HorizontalLine />

### CustomizableFileValue

Defines the price and sku of a product whose page contains a customized file picker.

#### Fields

| Field Name | Description |
|------------|-------------|
| `file_extension` - [`String`](#string) | The file extension to accept. |
| `image_size_x` - [`Int`](#int) | The maximum width of an image. |
| `image_size_y` - [`Int`](#int) | The maximum height of an image. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableFileValue&#x60; object. |

#### Example

```json
{
  "file_extension": "xyz789",
  "image_size_x": 123,
  "image_size_y": 987,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableMultipleOption

Contains information about a multiselect that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableMultipleValue]`](#customizablemultiplevalue) | An array that defines the set of options for a multiselect. |

#### Example

```json
{
  "option_id": 123,
  "required": false,
  "sort_order": 123,
  "title": "xyz789",
  "uid": 4,
  "value": [CustomizableMultipleValue]
}
```

<HorizontalLine />

### CustomizableMultipleValue

Defines the price and sku of a product whose page contains a customized multiselect.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](#int) | The ID assigned to the value. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableMultipleValue&#x60; object. |

#### Example

```json
{
  "option_type_id": 123,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "abc123",
  "sort_order": 987,
  "title": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableOptionInput

Defines a customizable option.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `id` - [`Int`](#int) | The customizable option ID of the product. |
| `value_string` - [`String!`](#string) | The string value of the option. |

#### Example

```json
{"id": 987, "value_string": "xyz789"}
```

<HorizontalLine />

### CustomizableOptionInterface

Contains basic information about a customizable option. It can be implemented by several types of configurable options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |

#### Possible Types

| CustomizableOptionInterface Types |
|----------------|
| [`CustomizableAreaOption`](#customizableareaoption) |
| [`CustomizableDateOption`](#customizabledateoption) |
| [`CustomizableDropDownOption`](#customizabledropdownoption) |
| [`CustomizableMultipleOption`](#customizablemultipleoption) |
| [`CustomizableFieldOption`](#customizablefieldoption) |
| [`CustomizableFileOption`](#customizablefileoption) |
| [`CustomizableRadioOption`](#customizableradiooption) |
| [`CustomizableCheckboxOption`](#customizablecheckboxoption) |

#### Example

```json
{
  "option_id": 123,
  "required": false,
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
| [`VirtualProduct`](#virtualproduct) |
| [`SimpleProduct`](#simpleproduct) |
| [`DownloadableProduct`](#downloadableproduct) |
| [`BundleProduct`](#bundleproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`ConfigurableProduct`](#configurableproduct) |

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
| `option_id` - [`Int`](#int) | Option ID. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableRadioValue]`](#customizableradiovalue) | An array that defines a set of radio buttons. |

#### Example

```json
{
  "option_id": 123,
  "required": false,
  "sort_order": 123,
  "title": "xyz789",
  "uid": "4",
  "value": [CustomizableRadioValue]
}
```

<HorizontalLine />

### CustomizableRadioValue

Defines the price and sku of a product whose page contains a customized set of radio buttons.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](#int) | The ID assigned to the value. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](#int) | The order in which the radio button is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableRadioValue&#x60; object. |

#### Example

```json
{
  "option_type_id": 123,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "xyz789",
  "sort_order": 123,
  "title": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### DeleteCompanyRoleOutput

Contains the response to the request to delete the company role.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](#boolean) | SIndicates whether the company role has been deleted successfully. |

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
| `success` - [`Boolean!`](#boolean) | Indicates whether the delete operation succeeded. |

#### Example

```json
{"success": true}
```

<HorizontalLine />

### DeleteCompanyUserOutput

Contains the response to the request to delete the company user.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](#boolean) | Indicates whether the company user has been deactivated successfully. |

#### Example

```json
{"success": true}
```

<HorizontalLine />

### DeleteCompareListOutput

Contains the results of the request to delete a compare list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `result` - [`Boolean!`](#boolean) | Indicates whether the compare list was successfully deleted. |

#### Example

```json
{"result": true}
```

<HorizontalLine />

### DeleteNegotiableQuoteError

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

### DeleteNegotiableQuoteOperationFailure

Contains details about a failed delete operation on a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[DeleteNegotiableQuoteError]!`](#deletenegotiablequoteerror) |  |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "errors": [NegotiableQuoteInvalidStateError],
  "quote_uid": 4
}
```

<HorizontalLine />

### DeleteNegotiableQuoteOperationResult

#### Types

| Union Types |
|-------------|
| [`NegotiableQuoteUidOperationSuccess`](#negotiablequoteuidoperationsuccess) |
| [`DeleteNegotiableQuoteOperationFailure`](#deletenegotiablequoteoperationfailure) |

#### Example

```json
NegotiableQuoteUidOperationSuccess
```

<HorizontalLine />

### DeleteNegotiableQuotesInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_uids` - [`[ID]!`](#id) | A list of unique IDs for &#x60;NegotiableQuote&#x60; objects to delete. |

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
| `negotiable_quotes` - [`NegotiableQuotesOutput`](#negotiablequotesoutput) | A list of negotiable quotes that the customer can view |
| `operation_results` - [`[DeleteNegotiableQuoteOperationResult]!`](#deletenegotiablequoteoperationresult) | An array of deleted negotiable quote UIDs and details about any errors. |
| `result_status` - [`BatchMutationStatus!`](#batchmutationstatus) | The status of the request to delete one or more negotiable quotes. |

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
| `customerPaymentTokens` - [`CustomerPaymentTokens`](#customerpaymenttokens) | A container for the customer&#x27;s remaining payment tokens. |
| `result` - [`Boolean!`](#boolean) | Indicates whether the request succeeded. |

#### Example

```json
{
  "customerPaymentTokens": CustomerPaymentTokens,
  "result": true
}
```

<HorizontalLine />

### DeletePurchaseOrderApprovalRuleError

Contains details about an error that occurred when deleting an approval rule .

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String`](#string) | The text of the error message. |
| `type` - [`DeletePurchaseOrderApprovalRuleErrorType`](#deletepurchaseorderapprovalruleerrortype) | The error type. |

#### Example

```json
{"message": "xyz789", "type": "UNDEFINED"}
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
| `approval_rule_uids` - [`[ID]!`](#id) | An array of purchase order approval rule IDs. |

#### Example

```json
{"approval_rule_uids": [4]}
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
| `requisition_list` - [`RequisitionList`](#requisitionlist) | The requisition list after removing items. |

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
| `requisition_lists` - [`RequisitionLists`](#requisitionlists) | The customer&#x27;s requisition lists after deleting a requisition list. |
| `status` - [`Boolean!`](#boolean) | Indicates whether the request to delete the requisition list was successful. |

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
| `status` - [`Boolean!`](#boolean) | Indicates whether the wish list was deleted. |
| `wishlists` - [`[Wishlist]!`](#wishlist) | A list of undeleted wish lists. |

#### Example

```json
{"status": false, "wishlists": [Wishlist]}
```

<HorizontalLine />

### Discount

Defines an individual discount. A discount can be applied to the cart as a whole or to an item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount of the discount. |
| `label` - [`String!`](#string) | A description of the discount. |

#### Example

```json
{
  "amount": Money,
  "label": "xyz789"
}
```

<HorizontalLine />

### DownloadableCartItem

An implementation for downloadable product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the links for the downloadable product added to the cart. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about samples of the selected downloadable product. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "errors": [CartItemError],
  "id": "xyz789",
  "links": [DownloadableProductLinks],
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
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are refunded from the downloadable product. |
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
  "downloadable_links": [DownloadableItemsLinks],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_refunded": 987.65
}
```

<HorizontalLine />

### DownloadableFileTypeEnum

#### Values

| Enum Value | Description |
|------------|-------------|
| `FILE` |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `URL` |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |

#### Example

```json
""FILE""
```

<HorizontalLine />

### DownloadableInvoiceItem

Defines downloadable product options for `InvoiceItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are invoiced from the downloadable product. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;InvoiceItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 123.45
}
```

<HorizontalLine />

### DownloadableItemsLinks

Defines characteristics of the links for downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `sort_order` - [`Int`](#int) | A number indicating the sort order. |
| `title` - [`String`](#string) | The display name of the link. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;DownloadableItemsLinks&#x60; object. |

#### Example

```json
{
  "sort_order": 987,
  "title": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### DownloadableOrderItem

Defines downloadable product options for `OrderItemInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are ordered from the downloadable product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
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
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "xyz789",
  "product_url_key": "abc123",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 123.45,
  "quantity_refunded": 987.65,
  "quantity_returned": 123.45,
  "quantity_shipped": 123.45,
  "selected_options": [OrderItemOption],
  "status": "xyz789"
}
```

<HorizontalLine />

### DownloadableProduct

Defines a product that the shopper downloads.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activity` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `category_gear` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `climate` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `collar` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `downloadable_product_links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the links for this downloadable product. |
| `downloadable_product_samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about samples of this downloadable product. |
| `eco_collection` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `erin_recommends` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `features_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `format` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gender` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `links_purchased_separately` - [`Int`](#int) | A value of 1 indicates that each link in the array must be purchased separately. |
| `links_title` - [`String`](#string) | The heading above the list of downloadable products. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `material` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `pattern` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `performance_fabric` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `purpose` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `sale` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `size` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `sleeve` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `strap_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bottom` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_general` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
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
  "activity": "xyz789",
  "attribute_set_id": 123,
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "category_gear": "xyz789",
  "climate": "abc123",
  "collar": "xyz789",
  "color": 123,
  "country_of_manufacture": "abc123",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "description": ComplexTextValue,
  "downloadable_product_links": [
    DownloadableProductLinks
  ],
  "downloadable_product_samples": [
    DownloadableProductSamples
  ],
  "eco_collection": 123,
  "erin_recommends": 987,
  "features_bags": "xyz789",
  "format": 123,
  "gender": "xyz789",
  "gift_message_available": "xyz789",
  "id": 123,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "links_purchased_separately": 123,
  "links_title": "xyz789",
  "manufacturer": 123,
  "material": "xyz789",
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "name": "xyz789",
  "new": 987,
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "pattern": "xyz789",
  "performance_fabric": 123,
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "purpose": 987,
  "rating_summary": 123.45,
  "redirect_code": 987,
  "related_products": [ProductInterface],
  "relative_url": "xyz789",
  "review_count": 987,
  "reviews": ProductReviews,
  "sale": 987,
  "short_description": ComplexTextValue,
  "size": 123,
  "sku": "xyz789",
  "sleeve": "abc123",
  "small_image": ProductImage,
  "special_from_date": "abc123",
  "special_price": 123.45,
  "special_to_date": "abc123",
  "staged": true,
  "stock_status": "IN_STOCK",
  "strap_bags": "xyz789",
  "style_bags": "abc123",
  "style_bottom": "abc123",
  "style_general": "xyz789",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "abc123",
  "uid": 4,
  "updated_at": "xyz789",
  "upsell_products": [ProductInterface],
  "url_key": "xyz789",
  "url_path": "abc123",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website]
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
| `id` - [`Int`](#int) |  *(Deprecated: This information should not be exposed on frontend.)* |
| `is_shareable` - [`Boolean`](#boolean) |  *(Deprecated: This information should not be exposed on frontend.)* |
| `link_type` - [`DownloadableFileTypeEnum`](#downloadablefiletypeenum) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `number_of_downloads` - [`Int`](#int) |  *(Deprecated: This information should not be exposed on frontend.)* |
| `price` - [`Float`](#float) | The price of the downloadable product. |
| `sample_file` - [`String`](#string) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `sample_type` - [`DownloadableFileTypeEnum`](#downloadablefiletypeenum) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `sample_url` - [`String`](#string) | The full URL to the downloadable sample. |
| `sort_order` - [`Int`](#int) | A number indicating the sort order. |
| `title` - [`String`](#string) | The display name of the link. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;DownloadableProductLinks&#x60; object. |

#### Example

```json
{
  "id": 987,
  "is_shareable": true,
  "link_type": "FILE",
  "number_of_downloads": 987,
  "price": 123.45,
  "sample_file": "xyz789",
  "sample_type": "FILE",
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
| `link_id` - [`Int!`](#int) | The unique ID of the downloadable product link. |

#### Example

```json
{"link_id": 987}
```

<HorizontalLine />

### DownloadableProductSamples

Defines characteristics of a downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`Int`](#int) |  *(Deprecated: This information should not be exposed on frontend.)* |
| `sample_file` - [`String`](#string) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `sample_type` - [`DownloadableFileTypeEnum`](#downloadablefiletypeenum) |  *(Deprecated: &#x60;sample_url&#x60; serves to get the downloadable sample)* |
| `sample_url` - [`String`](#string) | The full URL to the downloadable sample. |
| `sort_order` - [`Int`](#int) | A number indicating the sort order. |
| `title` - [`String`](#string) | The display name of the sample. |

#### Example

```json
{
  "id": 987,
  "sample_file": "xyz789",
  "sample_type": "FILE",
  "sample_url": "abc123",
  "sort_order": 123,
  "title": "abc123"
}
```

<HorizontalLine />

### DownloadableRequisitionListItem

Contains details about downloadable products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array of links for downloadable products in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The quantity of the product added to the requisition list. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array of links to downloadable product samples. |
| `uid` - [`ID!`](#id) | The unique ID of an item in a requisition list. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "links": [DownloadableProductLinks],
  "product": ProductInterface,
  "quantity": 987.65,
  "samples": [DownloadableProductSamples],
  "uid": "4"
}
```

<HorizontalLine />

### DownloadableWishlistItem

A downloadable product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `links_v2` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the selected links. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about the selected samples. |

#### Example

```json
{
  "added_at": "xyz789",
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
  "id": 4,
  "links_v2": [DownloadableProductLinks],
  "product": ProductInterface,
  "quantity": 123.45,
  "samples": [DownloadableProductSamples]
}
```

<HorizontalLine />

### DynamicBlock

Contains a single dynamic block.

#### Fields

| Field Name | Description |
|------------|-------------|
| `content` - [`ComplexTextValue!`](#complextextvalue) | The renderable HTML code of the dynamic block. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;DynamicBlock&#x60; object. |

#### Example

```json
{
  "content": ComplexTextValue,
  "uid": "4"
}
```

<HorizontalLine />

### DynamicBlockLocationEnum

Indicates the locations the dynamic block can be placed. If this field is not specified, the query returns all locations.

#### Values

| Enum Value | Description |
|------------|-------------|
| `CONTENT` |  |
| `HEADER` |  |
| `FOOTER` |  |
| `LEFT` |  |
| `RIGHT` |  |

#### Example

```json
""CONTENT""
```

<HorizontalLine />

### DynamicBlockTypeEnum

Indicates the selected Dynamic Blocks Rotator inline widget.

#### Values

| Enum Value | Description |
|------------|-------------|
| `SPECIFIED` |  |
| `CART_PRICE_RULE_RELATED` |  |
| `CATALOG_PRICE_RULE_RELATED` |  |

#### Example

```json
""SPECIFIED""
```

<HorizontalLine />

### DynamicBlocks

Contains an array of dynamic blocks.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[DynamicBlock]!`](#dynamicblock) | An array containing individual dynamic blocks. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Metadata for pagination rendering. |
| `total_count` - [`Int!`](#int) | The number of returned dynamic blocks. |

#### Example

```json
{
  "items": [DynamicBlock],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### DynamicBlocksFilterInput

Defines the dynamic block filter. The filter can identify the block type, location and IDs to return.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `dynamic_block_uids` - [`[ID]`](#id) | An array of dynamic block UIDs to filter on. |
| `locations` - [`[DynamicBlockLocationEnum]`](#dynamicblocklocationenum) | An array indicating the locations the dynamic block can be placed. |
| `type` - [`DynamicBlockTypeEnum!`](#dynamicblocktypeenum) | A value indicating the type of dynamic block to filter on. |

#### Example

```json
{
  "dynamic_block_uids": ["4"],
  "locations": ["CONTENT"],
  "type": "SPECIFIED"
}
```

<HorizontalLine />

### EnteredCustomAttributeInput

Contains details about a custom text attribute that the buyer entered.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String!`](#string) | A string that identifies the entered custom attribute. |
| `value` - [`String!`](#string) | The text or other entered value. |

#### Example

```json
{
  "attribute_code": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### EnteredOptionInput

Defines a customer-entered option.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object, such as a &#x60;CustomizableFieldOption&#x60;, &#x60;CustomizableFileOption&#x60;, or &#x60;CustomizableAreaOption&#x60; object. |
| `value` - [`String!`](#string) | Text the customer entered. |

#### Example

```json
{
  "uid": "4",
  "value": "xyz789"
}
```

<HorizontalLine />

### EntityUrl

Contains the `uid`, `relative_url`, and `type` attributes.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](#string) |  *(Deprecated: Use &#x60;relative_url&#x60; instead.)* |
| `entity_uid` - [`ID`](#id) | The unique ID for a &#x60;ProductInterface&#x60;, &#x60;CategoryInterface&#x60;, &#x60;CmsPage&#x60;, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. |
| `id` - [`Int`](#int) | The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID. *(Deprecated: Use &#x60;entity_uid&#x60; instead.)* |
| `redirectCode` - [`Int`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |

#### Example

```json
{
  "canonical_url": "abc123",
  "entity_uid": 4,
  "id": 123,
  "redirectCode": 123,
  "relative_url": "abc123",
  "type": "CMS_PAGE"
}
```

<HorizontalLine />

### ErrorInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |

#### Possible Types

| ErrorInterface Types |
|----------------|
| [`NoSuchEntityUidError`](#nosuchentityuiderror) |
| [`InternalError`](#internalerror) |
| [`NegotiableQuoteInvalidStateError`](#negotiablequoteinvalidstateerror) |

#### Example

```json
{"message": "abc123"}
```

<HorizontalLine />

### ExchangeRate

Lists the exchange rate.

#### Fields

| Field Name | Description |
|------------|-------------|
| `currency_to` - [`String`](#string) | Specifies the store’s default currency to exchange to. |
| `rate` - [`Float`](#float) | The exchange rate for the store’s default currency. |

#### Example

```json
{"currency_to": "xyz789", "rate": 987.65}
```

<HorizontalLine />

### FilterEqualTypeInput

Defines a filter that matches the input exactly.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](#string) | Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as &#x60;5&#x60;. |
| `in` - [`[String]`](#string) | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of &#x60;[&quot;4&quot;, &quot;5&quot;, &quot;6&quot;]&#x60;. |

#### Example

```json
{
  "eq": "xyz789",
  "in": ["xyz789"]
}
```

<HorizontalLine />

### FilterMatchTypeInput

Defines a filter that performs a fuzzy search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `match` - [`String`](#string) | Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as &#x60;24-MB01&#x60;. |

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
| `from` - [`String`](#string) | Use this attribute to specify the lowest possible value in the range. |
| `to` - [`String`](#string) | Use this attribute to specify the highest possible value in the range. |

#### Example

```json
{
  "from": "xyz789",
  "to": "xyz789"
}
```

<HorizontalLine />

### FilterStringTypeInput

Defines a filter for an input string.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](#string) | Filters items that are exactly the same as the specified string. |
| `in` - [`[String]`](#string) | Filters items that are exactly the same as entries specified in an array of strings. |
| `match` - [`String`](#string) | Defines a filter that performs a fuzzy search using the specified string. |

#### Example

```json
{
  "eq": "abc123",
  "in": ["xyz789"],
  "match": "abc123"
}
```

<HorizontalLine />

### FilterTypeInput

Defines the comparison operators that can be used in a filter.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `eq` - [`String`](#string) | Equals. |
| `finset` - [`[String]`](#string) |  |
| `from` - [`String`](#string) | From. Must be used with the &#x60;to&#x60; field. |
| `gt` - [`String`](#string) | Greater than. |
| `gteq` - [`String`](#string) | Greater than or equal to. |
| `in` - [`[String]`](#string) | In. The value can contain a set of comma-separated values. |
| `like` - [`String`](#string) | Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. |
| `lt` - [`String`](#string) | Less than. |
| `lteq` - [`String`](#string) | Less than or equal to. |
| `moreq` - [`String`](#string) | More than or equal to. |
| `neq` - [`String`](#string) | Not equal to. |
| `nin` - [`[String]`](#string) | Not in. The value can contain a set of comma-separated values. |
| `notnull` - [`String`](#string) | Not null. |
| `null` - [`String`](#string) | Is null. |
| `to` - [`String`](#string) | To. Must be used with the &#x60;from&#x60; field. |

#### Example

```json
{
  "eq": "abc123",
  "finset": ["xyz789"],
  "from": "xyz789",
  "gt": "xyz789",
  "gteq": "xyz789",
  "in": ["xyz789"],
  "like": "xyz789",
  "lt": "xyz789",
  "lteq": "xyz789",
  "moreq": "abc123",
  "neq": "xyz789",
  "nin": ["abc123"],
  "notnull": "xyz789",
  "null": "abc123",
  "to": "abc123"
}
```

<HorizontalLine />

### FixedProductTax

A single FPT that can be applied to a product price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](#money) | The amount of the Fixed Product Tax. |
| `label` - [`String`](#string) | The display label assigned to the Fixed Product Tax. |

#### Example

```json
{
  "amount": Money,
  "label": "abc123"
}
```

<HorizontalLine />

### FixedProductTaxDisplaySettings

Lists display settings for the Fixed Product Tax.

#### Values

| Enum Value | Description |
|------------|-------------|
| `INCLUDE_FPT_WITHOUT_DETAILS` | The displayed price includes the FPT amount without displaying the &#x60;ProductPrice.fixed_product_taxes&#x60; values. This value corresponds to &#x27;Including FPT only&#x27;. |
| `INCLUDE_FPT_WITH_DETAILS` | The displayed price includes the FPT amount while displaying the values of &#x60;ProductPrice.fixed_product_taxes&#x60; separately. This value corresponds to &#x27;Including FPT and FPT description&#x27;. |
| `EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS` | The displayed price does not include the FPT amount. The values of &#x60;ProductPrice.fixed_product_taxes&#x60; and the price including the FPT are displayed separately. This value corresponds to &#x27;Excluding FPT, Including FPT description and final price.&#x27; |
| `EXCLUDE_FPT_WITHOUT_DETAILS` | The displayed price does not include the FPT amount. The values from &#x60;ProductPrice.fixed_product_taxes&#x60; are not displayed. This value corresponds to &#x27;Excluding FPT&#x27;. |
| `FPT_DISABLED` | The FPT feature is not enabled. You can omit &#x60;ProductPrice.fixed_product_taxes&#x60; from your query. |

#### Example

```json
""INCLUDE_FPT_WITHOUT_DETAILS""
```

<HorizontalLine />

### Float

The `Float` scalar type represents signed double-precision fractional
values as specified by
[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 

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
| `customer_email` - [`String!`](#string) | The email address of the customer requesting remote shopping assistance. |

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
| `customer_token` - [`String!`](#string) | The generated customer token. |

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
| `balance` - [`Money`](#money) | The balance remaining on the gift card. |
| `code` - [`String`](#string) | The gift card account code. |
| `expiration_date` - [`String`](#string) | The expiration date of the gift card. |

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
| `gift_card_code` - [`String!`](#string) | The applied gift card code. |

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
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;GiftCardAmounts&#x60; object. |
| `value` - [`Float`](#float) | The value of the gift card. |
| `value_id` - [`Int`](#int) | An ID that is assigned to each unique gift card amount. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `website_id` - [`Int`](#int) | The ID of the website that generated the gift card. |
| `website_value` - [`Float`](#float) | The value of the gift card. |

#### Example

```json
{
  "attribute_id": 987,
  "uid": "4",
  "value": 987.65,
  "value_id": 987,
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
| `amount` - [`Money!`](#money) | The amount and currency of the gift card. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array of customizations applied to the gift card. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `message` - [`String`](#string) | The message from the sender to the recipient. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `recipient_email` - [`String`](#string) | The email address of the person receiving the gift card. |
| `recipient_name` - [`String!`](#string) | The name of the person receiving the gift card. |
| `sender_email` - [`String`](#string) | The email address of the sender. |
| `sender_name` - [`String!`](#string) | The name of the sender. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "amount": Money,
  "customizable_options": [SelectedCustomizableOption],
  "errors": [CartItemError],
  "id": "abc123",
  "message": "abc123",
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "recipient_email": "xyz789",
  "recipient_name": "abc123",
  "sender_email": "abc123",
  "sender_name": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### GiftCardCreditMemoItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Details about the final discount amount for the base product, including discounts on options. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for a credit memo item. |
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
  "gift_card": GiftCardItem,
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_refunded": 123.45
}
```

<HorizontalLine />

### GiftCardInvoiceItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for an invoice item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;InvoiceItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
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
| `message` - [`String`](#string) | The message from the sender to the recipient. |
| `recipient_email` - [`String`](#string) | The email address of the receiver of a virtual gift card. |
| `recipient_name` - [`String`](#string) | The name of the receiver of a physical or virtual gift card. |
| `sender_email` - [`String`](#string) | The email address of the sender of a virtual gift card. |
| `sender_name` - [`String`](#string) | The name of the sender of a physical or virtual gift card. |

#### Example

```json
{
  "message": "xyz789",
  "recipient_email": "abc123",
  "recipient_name": "xyz789",
  "sender_email": "abc123",
  "sender_name": "abc123"
}
```

<HorizontalLine />

### GiftCardOptions

Contains details about the sender, recipient, and amount of a gift card.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](#money) | The amount and currency of the gift card. |
| `custom_giftcard_amount` - [`Money`](#money) | The custom amount and currency of the gift card. |
| `message` - [`String`](#string) | A message to the recipient. |
| `recipient_email` - [`String`](#string) | The email address of the person receiving the gift card. |
| `recipient_name` - [`String`](#string) | The name of the person receiving the gift card. |
| `sender_email` - [`String`](#string) | The email address of the person sending the gift card. |
| `sender_name` - [`String`](#string) | The name of the person sending the gift card. |

#### Example

```json
{
  "amount": Money,
  "custom_giftcard_amount": Money,
  "message": "xyz789",
  "recipient_email": "xyz789",
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
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for an order item. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
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
  "discounts": [Discount],
  "eligible_for_return": true,
  "entered_options": [OrderItemOption],
  "gift_card": GiftCardItem,
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "abc123",
  "product_url_key": "xyz789",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 987.65,
  "quantity_refunded": 123.45,
  "quantity_returned": 123.45,
  "quantity_shipped": 987.65,
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
| `activity` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `allow_message` - [`Boolean`](#boolean) | Indicates whether the customer can provide a message to accompany the gift card. |
| `allow_open_amount` - [`Boolean`](#boolean) | Indicates whether shoppers have the ability to set the value of the gift card. |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `category_gear` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `climate` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `collar` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `eco_collection` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `erin_recommends` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `features_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `format` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gender` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gift_card_options` - [`[CustomizableOptionInterface]!`](#customizableoptioninterface) | An array of customizable gift card options. |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `giftcard_amounts` - [`[GiftCardAmounts]`](#giftcardamounts) | An array that contains information about the values and ID of a gift card. |
| `giftcard_type` - [`GiftCardTypeEnum`](#giftcardtypeenum) | An enumeration that specifies the type of gift card. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_redeemable` - [`Boolean`](#boolean) | Indicates whether the customer can redeem the value on the card for cash. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `lifetime` - [`Int`](#int) | The number of days after purchase until the gift card expires. A null value means there is no limit. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `material` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `message_max_length` - [`Int`](#int) | The maximum number of characters the gift message can contain. |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `open_amount_max` - [`Float`](#float) | The maximum acceptable value of an open amount gift card. |
| `open_amount_min` - [`Float`](#float) | The minimum acceptable value of an open amount gift card. |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `pattern` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `performance_fabric` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `purpose` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `sale` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `size` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `sleeve` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `strap_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bottom` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_general` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
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
  "activity": "abc123",
  "allow_message": true,
  "allow_open_amount": false,
  "attribute_set_id": 123,
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "category_gear": "abc123",
  "climate": "xyz789",
  "collar": "xyz789",
  "color": 123,
  "country_of_manufacture": "abc123",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "description": ComplexTextValue,
  "eco_collection": 123,
  "erin_recommends": 987,
  "features_bags": "abc123",
  "format": 987,
  "gender": "xyz789",
  "gift_card_options": [CustomizableOptionInterface],
  "gift_message_available": "abc123",
  "giftcard_amounts": [GiftCardAmounts],
  "giftcard_type": "VIRTUAL",
  "id": 987,
  "image": ProductImage,
  "is_redeemable": true,
  "is_returnable": "abc123",
  "lifetime": 123,
  "manufacturer": 987,
  "material": "abc123",
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "message_max_length": 987,
  "meta_description": "abc123",
  "meta_keyword": "abc123",
  "meta_title": "abc123",
  "name": "xyz789",
  "new": 123,
  "new_from_date": "abc123",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 987.65,
  "open_amount_max": 987.65,
  "open_amount_min": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "pattern": "xyz789",
  "performance_fabric": 123,
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "purpose": 987,
  "rating_summary": 123.45,
  "redirect_code": 123,
  "related_products": [ProductInterface],
  "relative_url": "abc123",
  "review_count": 987,
  "reviews": ProductReviews,
  "sale": 987,
  "short_description": ComplexTextValue,
  "size": 123,
  "sku": "xyz789",
  "sleeve": "xyz789",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 123.45,
  "special_to_date": "xyz789",
  "staged": false,
  "stock_status": "IN_STOCK",
  "strap_bags": "abc123",
  "style_bags": "xyz789",
  "style_bottom": "xyz789",
  "style_general": "xyz789",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "xyz789",
  "uid": "4",
  "updated_at": "xyz789",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "abc123",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website],
  "weight": 987.65
}
```

<HorizontalLine />

### GiftCardRequisitionListItem

Contains details about gift cards added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `gift_card_options` - [`GiftCardOptions!`](#giftcardoptions) | An array that defines gift card properties. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The amount added. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "gift_card_options": GiftCardOptions,
  "product": ProductInterface,
  "quantity": 987.65,
  "uid": "4"
}
```

<HorizontalLine />

### GiftCardShipmentItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for a shipment item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ShipmentItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Example

```json
{
  "gift_card": GiftCardItem,
  "id": 4,
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
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `gift_card_options` - [`GiftCardOptions!`](#giftcardoptions) | Details about a gift card. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
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
| `from` - [`String!`](#string) | Sender name |
| `message` - [`String!`](#string) | Gift message text |
| `to` - [`String!`](#string) | Recipient name |

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
| `from` - [`String!`](#string) | The name of the sender. |
| `message` - [`String!`](#string) | The text of the gift message. |
| `to` - [`String!`](#string) | The name of the recepient. |

#### Example

```json
{
  "from": "xyz789",
  "message": "abc123",
  "to": "xyz789"
}
```

<HorizontalLine />

### GiftOptionsPrices

Contains prices for gift wrapping options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_wrapping_for_items` - [`Money`](#money) | Price of the gift wrapping for all individual order items. |
| `gift_wrapping_for_order` - [`Money`](#money) | Price of the gift wrapping for the whole order. |
| `printed_card` - [`Money`](#money) | Price for the printed card. |

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
| `created_at` - [`String!`](#string) | The date on which the gift registry was created. Only the registry owner can access this attribute. |
| `dynamic_attributes` - [`[GiftRegistryDynamicAttribute]`](#giftregistrydynamicattribute) | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. |
| `event_name` - [`String!`](#string) | The name of the event. |
| `items` - [`[GiftRegistryItemInterface]`](#giftregistryiteminterface) | An array of products added to the gift registry. |
| `message` - [`String!`](#string) | The message text the customer entered to describe the event. |
| `owner_name` - [`String!`](#string) | The customer who created the gift registry. |
| `privacy_settings` - [`GiftRegistryPrivacySettings!`](#giftregistryprivacysettings) | An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute. |
| `registrants` - [`[GiftRegistryRegistrant]`](#giftregistryregistrant) | Contains details about each registrant for the event. |
| `shipping_address` - [`CustomerAddress`](#customeraddress) | Contains the customer&#x27;s shipping address. Only the registry owner can access this attribute. |
| `status` - [`GiftRegistryStatus!`](#giftregistrystatus) | An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute. |
| `type` - [`GiftRegistryType`](#giftregistrytype) | The type of gift registry. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the gift registry. |

#### Example

```json
{
  "created_at": "abc123",
  "dynamic_attributes": [GiftRegistryDynamicAttribute],
  "event_name": "abc123",
  "items": [GiftRegistryItemInterface],
  "message": "xyz789",
  "owner_name": "xyz789",
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
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](#string) | A corresponding value for the code. |

#### Example

```json
{
  "code": "4",
  "group": "EVENT_INFORMATION",
  "label": "abc123",
  "value": "xyz789"
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
| `value` - [`String!`](#string) | A string that describes a dynamic attribute. |

#### Example

```json
{"code": 4, "value": "abc123"}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](#string) | A corresponding value for the code. |

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
| `attribute_group` - [`String!`](#string) | Indicates which group the dynamic attribute a member of. |
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `input_type` - [`String!`](#string) | The selected input type for this dynamic attribute. The value can be one of several static or custom types. |
| `is_required` - [`Boolean!`](#boolean) | Indicates whether the dynamic attribute is required. |
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `sort_order` - [`Int`](#int) | The order in which to display the dynamic attribute. |

#### Example

```json
{
  "attribute_group": "xyz789",
  "code": "4",
  "input_type": "xyz789",
  "is_required": true,
  "label": "xyz789",
  "sort_order": 123
}
```

<HorizontalLine />

### GiftRegistryDynamicAttributeMetadataInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_group` - [`String!`](#string) | Indicates which group the dynamic attribute a member of. |
| `code` - [`ID!`](#id) | The internal ID of the dynamic attribute. |
| `input_type` - [`String!`](#string) | The selected input type for this dynamic attribute. The value can be one of several static or custom types. |
| `is_required` - [`Boolean!`](#boolean) | Indicates whether the dynamic attribute is required. |
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `sort_order` - [`Int`](#int) | The order in which to display the dynamic attribute. |

#### Possible Types

| GiftRegistryDynamicAttributeMetadataInterface Types |
|----------------|
| [`GiftRegistryDynamicAttributeMetadata`](#giftregistrydynamicattributemetadata) |

#### Example

```json
{
  "attribute_group": "abc123",
  "code": "4",
  "input_type": "abc123",
  "is_required": false,
  "label": "xyz789",
  "sort_order": 123
}
```

<HorizontalLine />

### GiftRegistryItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](#string) | The date the product was added to the gift registry. |
| `note` - [`String`](#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface`](#productinterface) | Details about the gift registry item. |
| `quantity` - [`Float!`](#float) | The requested quantity of the product. |
| `quantity_fulfilled` - [`Float!`](#float) | The fulfilled quantity of the product. |
| `uid` - [`ID!`](#id) | The unique ID of a gift registry item. |

#### Example

```json
{
  "created_at": "xyz789",
  "note": "abc123",
  "product": ProductInterface,
  "quantity": 123.45,
  "quantity_fulfilled": 123.45,
  "uid": "4"
}
```

<HorizontalLine />

### GiftRegistryItemInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](#string) | The date the product was added to the gift registry. |
| `note` - [`String`](#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface`](#productinterface) | Details about the gift registry item. |
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
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to move the cart items to the gift registry was successful. |
| `user_errors` - [`[GiftRegistryItemsUserError]!`](#giftregistryitemsusererror) | An array of errors encountered while moving items from the cart to the gift registry. |

#### Possible Types

| GiftRegistryItemUserErrorInterface Types |
|----------------|
| [`MoveCartItemsToGiftRegistryOutput`](#movecartitemstogiftregistryoutput) |

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
| `gift_registry_uid` - [`ID`](#id) | The unique ID of the &#x60;GiftRegistry&#x60; object containing an error. |
| `message` - [`String!`](#string) | A localized error message. |
| `product_uid` - [`ID`](#id) | The unique ID of the product containing an error. |

#### Example

```json
{
  "code": "OUT_OF_STOCK",
  "gift_registry_item_uid": 4,
  "gift_registry_uid": "4",
  "message": "xyz789",
  "product_uid": 4
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
| [`MoveCartItemsToGiftRegistryOutput`](#movecartitemstogiftregistryoutput) |

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
| `email` - [`String!`](#string) | The email address of the registrant. Only the registry owner can access this attribute. |
| `firstname` - [`String!`](#string) | The first name of the registrant. |
| `lastname` - [`String!`](#string) | The last name of the registrant. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryRegistrantDynamicAttribute
  ],
  "email": "xyz789",
  "firstname": "abc123",
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
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](#string) | A corresponding value for the code. |

#### Example

```json
{
  "code": 4,
  "label": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### GiftRegistrySearchResult

Contains the results of a gift registry search.

#### Fields

| Field Name | Description |
|------------|-------------|
| `event_date` - [`String`](#string) | The date of the event. |
| `event_title` - [`String!`](#string) | The title given to the event. |
| `gift_registry_uid` - [`ID!`](#id) | The URL key of the gift registry. |
| `location` - [`String`](#string) | The location of the event. |
| `name` - [`String!`](#string) | The name of the gift registry owner. |
| `type` - [`String`](#string) | The type of event being held. |

#### Example

```json
{
  "event_date": "xyz789",
  "event_title": "xyz789",
  "gift_registry_uid": "4",
  "location": "xyz789",
  "name": "xyz789",
  "type": "abc123"
}
```

<HorizontalLine />

### GiftRegistryShippingAddressInput

Defines a shipping address for a gift registry. Specify either `address_data` or the `address_id`. If both are provided, validation will fail.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address_data` - [`CustomerAddressInput`](#customeraddressinput) | Defines the shipping address for this gift registry. |
| `address_id` - [`ID`](#id) | The ID assigned to this customer address. |

#### Example

```json
{
  "address_data": CustomerAddressInput,
  "address_id": "4"
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
| `label` - [`String!`](#string) | The label assigned to the gift registry type on the Admin. |
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
| `design` - [`String!`](#string) | The name of the gift wrapping design. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;GiftWrapping&#x60; object. *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `image` - [`GiftWrappingImage`](#giftwrappingimage) | The preview image for a gift wrapping option. |
| `price` - [`Money!`](#money) | The gift wrapping price. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;GiftWrapping&#x60; object. |

#### Example

```json
{
  "design": "xyz789",
  "id": 4,
  "image": GiftWrappingImage,
  "price": Money,
  "uid": 4
}
```

<HorizontalLine />

### GiftWrappingImage

Points to an image associated with a gift wrapping option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The gift wrapping preview image label. |
| `url` - [`String!`](#string) | The gift wrapping preview image URL. |

#### Example

```json
{
  "label": "abc123",
  "url": "xyz789"
}
```

<HorizontalLine />

### GroupedProduct

Defines a grouped product, which consists of simple standalone products that are presented as a group.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activity` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `category_gear` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `climate` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `collar` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `eco_collection` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `erin_recommends` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `features_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `format` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gender` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `items` - [`[GroupedProductItem]`](#groupedproductitem) | An array containing grouped product items. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `material` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `pattern` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `performance_fabric` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `purpose` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `sale` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `size` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `sleeve` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `strap_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bottom` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_general` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
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
  "activity": "abc123",
  "attribute_set_id": 987,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "category_gear": "xyz789",
  "climate": "abc123",
  "collar": "xyz789",
  "color": 123,
  "country_of_manufacture": "abc123",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "description": ComplexTextValue,
  "eco_collection": 123,
  "erin_recommends": 123,
  "features_bags": "abc123",
  "format": 987,
  "gender": "xyz789",
  "gift_message_available": "xyz789",
  "id": 987,
  "image": ProductImage,
  "is_returnable": "abc123",
  "items": [GroupedProductItem],
  "manufacturer": 987,
  "material": "xyz789",
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "abc123",
  "name": "xyz789",
  "new": 123,
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 123.45,
  "options_container": "xyz789",
  "pattern": "xyz789",
  "performance_fabric": 123,
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "purpose": 123,
  "rating_summary": 123.45,
  "redirect_code": 987,
  "related_products": [ProductInterface],
  "relative_url": "abc123",
  "review_count": 123,
  "reviews": ProductReviews,
  "sale": 123,
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
  "strap_bags": "xyz789",
  "style_bags": "abc123",
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
  "url_path": "abc123",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website],
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
| `product` - [`ProductInterface`](#productinterface) | Details about this product option. |
| `qty` - [`Float`](#float) | The quantity of this grouped product item. |

#### Example

```json
{
  "position": 987,
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
  "quantity": 987.65
}
```

<HorizontalLine />

### HostedProInput

Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `return_url` - [`String!`](#string) | The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |

#### Example

```json
{
  "cancel_url": "xyz789",
  "return_url": "abc123"
}
```

<HorizontalLine />

### HostedProUrl

Contains the secure URL used for the Payments Pro Hosted Solution payment method.

#### Fields

| Field Name | Description |
|------------|-------------|
| `secure_form_url` - [`String`](#string) | The secure URL generated by PayPal. |

#### Example

```json
{"secure_form_url": "xyz789"}
```

<HorizontalLine />

### HostedProUrlInput

Contains the required input to request the secure URL for Payments Pro Hosted Solution payment.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the shopper&#x27;s cart. |

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
| `name` - [`String`](#string) | A parameter name. |
| `value` - [`String`](#string) | A parameter value. |

#### Example

```json
{
  "name": "xyz789",
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
| `thumbnail` - [`String`](#string) | The URL assigned to the thumbnail of the swatch image. |
| `value` - [`String`](#string) | The value can be represented as color (HEX code), image link, or text. |

#### Example

```json
{
  "thumbnail": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### Int

The `Int` scalar type represents non-fractional signed whole numeric
values. Int can represent values between -(2^31) and 2^31 - 1. 

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
| `message` - [`String!`](#string) | The returned error message. |

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
| `comments` - [`[SalesCommentItem]`](#salescommentitem) | Comments on the invoice. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;Invoice&#x60; object. |
| `items` - [`[InvoiceItemInterface]`](#invoiceiteminterface) | Invoiced product details. |
| `number` - [`String!`](#string) | Sequential invoice number. |
| `total` - [`InvoiceTotal`](#invoicetotal) | Invoice total amount details. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "id": 4,
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

### InvoiceItemInterface

Contains detailes about invoiced items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | Information about the final discount amount for the base product, including discounts on options. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;InvoiceItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Possible Types

| InvoiceItemInterface Types |
|----------------|
| [`DownloadableInvoiceItem`](#downloadableinvoiceitem) |
| [`BundleInvoiceItem`](#bundleinvoiceitem) |
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
| `base_grand_total` - [`Money!`](#money) | The final base grand total amount in the base currency. |
| `discounts` - [`[Discount]`](#discount) | The applied discounts to the invoice. |
| `grand_total` - [`Money!`](#money) | The final total amount, including shipping, discounts, and taxes. |
| `shipping_handling` - [`ShippingHandling`](#shippinghandling) | Details about the shipping and handling costs for the invoice. |
| `subtotal` - [`Money!`](#money) | The subtotal of the invoice, excluding shipping, discounts, and taxes. |
| `taxes` - [`[TaxItem]`](#taxitem) | The invoice tax details. |
| `total_shipping` - [`Money!`](#money) | The shipping amount for the invoice. |
| `total_tax` - [`Money!`](#money) | The amount of tax applied to the invoice. |

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
| `is_email_available` - [`Boolean!`](#boolean) | Indicates whether the specified email address can be used to create a company administrator. |

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
| `is_email_available` - [`Boolean!`](#boolean) | Indicates whether the specified email address can be used to create a company. |

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
| `is_role_name_available` - [`Boolean!`](#boolean) | Indicates whether the specified company role name is available. |

#### Example

```json
{"is_role_name_available": false}
```

<HorizontalLine />

### IsCompanyUserEmailAvailableOutput

Contains the response of a company user email validation query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_email_available` - [`Boolean!`](#boolean) | Indicates whether the specified email address can be used to create a company user. |

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
| `is_email_available` - [`Boolean`](#boolean) | Indicates whether the specified email address can be used to create a customer. |

#### Example

```json
{"is_email_available": false}
```

<HorizontalLine />

### ItemSelectedBundleOption

A list of options of the selected bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOption&#x60; object. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `label` - [`String!`](#string) | The label of the option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOption&#x60; object. |
| `values` - [`[ItemSelectedBundleOptionValue]`](#itemselectedbundleoptionvalue) | A list of products that represent the values of the parent option. |

#### Example

```json
{
  "id": "4",
  "label": "xyz789",
  "uid": 4,
  "values": [ItemSelectedBundleOptionValue]
}
```

<HorizontalLine />

### ItemSelectedBundleOptionValue

A list of values for the selected bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOptionValue&#x60; object. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `price` - [`Money!`](#money) | The price of the child bundle product. |
| `product_name` - [`String!`](#string) | The name of the child bundle product. |
| `product_sku` - [`String!`](#string) | The SKU of the child bundle product. |
| `quantity` - [`Float!`](#float) | The number of this bundle product that were ordered. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOptionValue&#x60; object. |

#### Example

```json
{
  "id": "4",
  "price": Money,
  "product_name": "abc123",
  "product_sku": "abc123",
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### KeyValue

Contains a key-value pair.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String`](#string) | The name part of the key/value pair. |
| `value` - [`String`](#string) | The value part of the key/value pair. |

#### Example

```json
{
  "name": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### LayerFilter

Contains information for rendering layered navigation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `filter_items` - [`[LayerFilterItemInterface]`](#layerfilteriteminterface) | An array of filter items. *(Deprecated: Use &#x60;Aggregation.options&#x60; instead.)* |
| `filter_items_count` - [`Int`](#int) | The count of filter items in filter group. *(Deprecated: Use &#x60;Aggregation.count&#x60; instead.)* |
| `name` - [`String`](#string) | The name of a layered navigation filter. *(Deprecated: Use &#x60;Aggregation.label&#x60; instead.)* |
| `request_var` - [`String`](#string) | The request variable name for a filter query. *(Deprecated: Use &#x60;Aggregation.attribute_code&#x60; instead.)* |

#### Example

```json
{
  "filter_items": [LayerFilterItemInterface],
  "filter_items_count": 123,
  "name": "abc123",
  "request_var": "abc123"
}
```

<HorizontalLine />

### LayerFilterItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `items_count` - [`Int`](#int) | The count of items per filter. *(Deprecated: Use &#x60;AggregationOption.count&#x60; instead.)* |
| `label` - [`String`](#string) | The label for a filter. *(Deprecated: Use &#x60;AggregationOption.label&#x60; instead.)* |
| `value_string` - [`String`](#string) | The value of a filter request variable to be used in query. *(Deprecated: Use &#x60;AggregationOption.value&#x60; instead.)* |

#### Example

```json
{
  "items_count": 123,
  "label": "abc123",
  "value_string": "xyz789"
}
```

<HorizontalLine />

### LayerFilterItemInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `items_count` - [`Int`](#int) | The count of items per filter. *(Deprecated: Use &#x60;AggregationOption.count&#x60; instead.)* |
| `label` - [`String`](#string) | The label for a filter. *(Deprecated: Use &#x60;AggregationOption.label&#x60; instead.)* |
| `value_string` - [`String`](#string) | The value of a filter request variable to be used in query. *(Deprecated: Use &#x60;AggregationOption.value&#x60; instead.)* |

#### Possible Types

| LayerFilterItemInterface Types |
|----------------|
| [`LayerFilterItem`](#layerfilteritem) |
| [`SwatchLayerFilterItem`](#swatchlayerfilteritem) |

#### Example

```json
{
  "items_count": 987,
  "label": "abc123",
  "value_string": "xyz789"
}
```

<HorizontalLine />

### MediaGalleryEntry

Defines characteristics about images and videos associated with a specific product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `content` - [`ProductMediaGalleryEntriesContent`](#productmediagalleryentriescontent) | Details about the content of the media gallery item. |
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `file` - [`String`](#string) | The path of the image on the server. |
| `id` - [`Int`](#int) | The identifier assigned to the object. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `label` - [`String`](#string) | The alt text displayed on the storefront when the user points to the image. |
| `media_type` - [`String`](#string) | Either &#x60;image&#x60; or &#x60;video&#x60;. |
| `position` - [`Int`](#int) | The media item&#x27;s position after it has been sorted. |
| `types` - [`[String]`](#string) | Array of image types. It can have the following values: image, small_image, thumbnail. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;MediaGalleryEntry&#x60; object. |
| `video_content` - [`ProductMediaGalleryEntriesVideoContent`](#productmediagalleryentriesvideocontent) | Details about the content of a video item. |

#### Example

```json
{
  "content": ProductMediaGalleryEntriesContent,
  "disabled": false,
  "file": "xyz789",
  "id": 123,
  "label": "xyz789",
  "media_type": "abc123",
  "position": 987,
  "types": ["abc123"],
  "uid": "4",
  "video_content": ProductMediaGalleryEntriesVideoContent
}
```

<HorizontalLine />

### MediaGalleryInterface

Contains basic information about a product image or video.

#### Fields

| Field Name | Description |
|------------|-------------|
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](#string) | The label of the product image or video. |
| `position` - [`Int`](#int) | The media item&#x27;s position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |

#### Possible Types

| MediaGalleryInterface Types |
|----------------|
| [`ProductImage`](#productimage) |
| [`ProductVideo`](#productvideo) |

#### Example

```json
{
  "disabled": true,
  "label": "abc123",
  "position": 123,
  "url": "xyz789"
}
```

<HorizontalLine />

### Money

Defines a monetary value, including a numeric value and a currency code.

#### Fields

| Field Name | Description |
|------------|-------------|
| `currency` - [`CurrencyEnum`](#currencyenum) | A three-letter currency code, such as USD or EUR. |
| `value` - [`Float`](#float) | A number expressing a monetary value. |

#### Example

```json
{"currency": "AFN", "value": 123.45}
```

<HorizontalLine />

### MoveCartItemsToGiftRegistryOutput

Contains the customer's gift registry and any errors encountered.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry. |
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to move the cart items to the gift registry was successful. |
| `user_errors` - [`[GiftRegistryItemsUserError]!`](#giftregistryitemsusererror) | An array of errors encountered while moving items from the cart to the gift registry. |

#### Example

```json
{
  "gift_registry": GiftRegistry,
  "status": false,
  "user_errors": [GiftRegistryItemsUserError]
}
```

<HorizontalLine />

### MoveItemsBetweenRequisitionListsInput

An input object that defines the items in a requisition list to be moved.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `requisitionListItemUids` - [`[ID]!`](#id) | An array of IDs representing products moved from one requisition list to another. |

#### Example

```json
{"requisitionListItemUids": [4]}
```

<HorizontalLine />

### MoveItemsBetweenRequisitionListsOutput

Output of the request to move items to another requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `destination_requisition_list` - [`RequisitionList`](#requisitionlist) | The destination requisition list after moving items. |
| `source_requisition_list` - [`RequisitionList`](#requisitionlist) | The source requisition list after moving items. |

#### Example

```json
{
  "destination_requisition_list": RequisitionList,
  "source_requisition_list": RequisitionList
}
```

<HorizontalLine />

### MoveProductsBetweenWishlistsOutput

Contains the source and target wish lists after moving products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `destination_wishlist` - [`Wishlist!`](#wishlist) | The destination wish list after receiving products moved from the source wish list. |
| `source_wishlist` - [`Wishlist!`](#wishlist) | The source wish list after moving products from it. |
| `user_errors` - [`[WishListUserInputError]!`](#wishlistuserinputerror) | An array of errors encountered while moving products to a wish list. |

#### Example

```json
{
  "destination_wishlist": Wishlist,
  "source_wishlist": Wishlist,
  "user_errors": [WishListUserInputError]
}
```

<HorizontalLine />

### NegotiableQuote

Contains details about a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_payment_methods` - [`[AvailablePaymentMethod]`](#availablepaymentmethod) | An array of payment methods that can be applied to the negotiable quote. |
| `billing_address` - [`NegotiableQuoteBillingAddress`](#negotiablequotebillingaddress) | The billing address applied to the negotiable quote. |
| `buyer` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The first and last name of the buyer. |
| `comments` - [`[NegotiableQuoteComment]`](#negotiablequotecomment) | A list of comments made by the buyer and seller. |
| `created_at` - [`String`](#string) | Timestamp indicating when the negotiable quote was created. |
| `email` - [`String`](#string) | The email address of the company user. |
| `history` - [`[NegotiableQuoteHistoryEntry]`](#negotiablequotehistoryentry) | A list of status and price changes for the negotiable quote. |
| `is_virtual` - [`Boolean!`](#boolean) | Indicates whether the negotiable quote contains only virtual products. |
| `items` - [`[CartItemInterface]`](#cartiteminterface) | The list of items in the negotiable quote. |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote. |
| `prices` - [`CartPrices`](#cartprices) | A set of subtotals and totals applied to the negotiable quote. |
| `selected_payment_method` - [`SelectedPaymentMethod`](#selectedpaymentmethod) | The payment method that was applied to the negotiable quote. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote. |
| `status` - [`NegotiableQuoteStatus!`](#negotiablequotestatus) | The status of the negotiable quote. |
| `total_quantity` - [`Float!`](#float) | The total number of items in the negotiable quote. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the negotiable quote was updated. |

#### Example

```json
{
  "available_payment_methods": [AvailablePaymentMethod],
  "billing_address": NegotiableQuoteBillingAddress,
  "buyer": NegotiableQuoteUser,
  "comments": [NegotiableQuoteComment],
  "created_at": "xyz789",
  "email": "xyz789",
  "history": [NegotiableQuoteHistoryEntry],
  "is_virtual": true,
  "items": [CartItemInterface],
  "name": "abc123",
  "prices": CartPrices,
  "selected_payment_method": SelectedPaymentMethod,
  "shipping_addresses": [NegotiableQuoteShippingAddress],
  "status": "SUBMITTED",
  "total_quantity": 123.45,
  "uid": 4,
  "updated_at": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteAddressCountry

Defines the company's country.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The address country code. |
| `label` - [`String!`](#string) | The display name of the region. |

#### Example

```json
{
  "code": "xyz789",
  "label": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteAddressInput

Defines the billing or shipping address to be applied to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`String!`](#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](#string) | The company name. |
| `country_code` - [`String!`](#string) | The country code and label for the billing or shipping address. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `region` - [`String`](#string) | A string that defines the state or province of the billing or shipping address. |
| `region_id` - [`Int`](#int) | An integer that defines the state or province of the billing or shipping address. |
| `save_in_address_book` - [`Boolean`](#boolean) | Determines whether to save the address in the customer&#x27;s address book. The default value is true. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country_code": "abc123",
  "firstname": "xyz789",
  "lastname": "abc123",
  "postcode": "abc123",
  "region": "xyz789",
  "region_id": 123,
  "save_in_address_book": false,
  "street": ["xyz789"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteAddressInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The company&#x27;s city or town. |
| `company` - [`String`](#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company&#x27;s country. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `postcode` - [`String`](#string) | The company&#x27;s ZIP or postal code. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |

#### Possible Types

| NegotiableQuoteAddressInterface Types |
|----------------|
| [`NegotiableQuoteShippingAddress`](#negotiablequoteshippingaddress) |
| [`NegotiableQuoteBillingAddress`](#negotiablequotebillingaddress) |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "xyz789",
  "lastname": "xyz789",
  "postcode": "xyz789",
  "region": NegotiableQuoteAddressRegion,
  "street": ["abc123"],
  "telephone": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteAddressRegion

Defines the company's state or province.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | The address region code. |
| `label` - [`String`](#string) | The display name of the region. |
| `region_id` - [`Int`](#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "code": "abc123",
  "label": "xyz789",
  "region_id": 123
}
```

<HorizontalLine />

### NegotiableQuoteBillingAddress

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The company&#x27;s city or town. |
| `company` - [`String`](#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company&#x27;s country. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `postcode` - [`String`](#string) | The company&#x27;s ZIP or postal code. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "abc123",
  "lastname": "xyz789",
  "postcode": "abc123",
  "region": NegotiableQuoteAddressRegion,
  "street": ["xyz789"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteBillingAddressInput

Defines the billing address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | Defines a billing address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID of a &#x60;CustomerAddress&#x60; object. |
| `same_as_shipping` - [`Boolean`](#boolean) | Indicates whether to set the billing address to be the same as the existing shipping address on the negotiable quote. |
| `use_for_shipping` - [`Boolean`](#boolean) | Indicates whether to set the shipping address to be the same as this billing address. |

#### Example

```json
{
  "address": NegotiableQuoteAddressInput,
  "customer_address_uid": 4,
  "same_as_shipping": false,
  "use_for_shipping": true
}
```

<HorizontalLine />

### NegotiableQuoteComment

Contains a single plain text comment from either the buyer or seller.

#### Fields

| Field Name | Description |
|------------|-------------|
| `author` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The first and last name of the commenter. |
| `created_at` - [`String!`](#string) | Timestamp indicating when the comment was created. |
| `creator_type` - [`NegotiableQuoteCommentCreatorType!`](#negotiablequotecommentcreatortype) | Indicates whether a buyer or seller commented. |
| `text` - [`String!`](#string) | The plain text comment. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteComment&#x60; object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "created_at": "xyz789",
  "creator_type": "BUYER",
  "text": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### NegotiableQuoteCommentCreatorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `BUYER` |  |
| `SELLER` |  |

#### Example

```json
""BUYER""
```

<HorizontalLine />

### NegotiableQuoteCommentInput

Contains the commend provided by the buyer.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment` - [`String!`](#string) | The comment provided by the buyer. |

#### Example

```json
{"comment": "xyz789"}
```

<HorizontalLine />

### NegotiableQuoteCustomLogChange

Contains custom log entries added by third-party extensions.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_value` - [`String!`](#string) | The new entry content. |
| `old_value` - [`String`](#string) | The previous entry in the custom log. |
| `title` - [`String!`](#string) | The title of the custom log entry. |

#### Example

```json
{
  "new_value": "xyz789",
  "old_value": "abc123",
  "title": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteFilterInput

Defines a filter to limit the negotiable quotes to return.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `ids` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by the ID of one or more negotiable quotes. |
| `name` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Filter by the negotiable quote name. |

#### Example

```json
{
  "ids": FilterEqualTypeInput,
  "name": FilterMatchTypeInput
}
```

<HorizontalLine />

### NegotiableQuoteHistoryChanges

Contains a list of changes to a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comment_added` - [`NegotiableQuoteHistoryCommentChange`](#negotiablequotehistorycommentchange) | The comment provided with a change in the negotiable quote history. |
| `custom_changes` - [`NegotiableQuoteCustomLogChange`](#negotiablequotecustomlogchange) | Lists log entries added by third-party extensions. |
| `expiration` - [`NegotiableQuoteHistoryExpirationChange`](#negotiablequotehistoryexpirationchange) | The expiration date of the negotiable quote before and after a change in the quote history. |
| `products_removed` - [`NegotiableQuoteHistoryProductsRemovedChange`](#negotiablequotehistoryproductsremovedchange) | Lists products that were removed as a result of a change in the quote history. |
| `statuses` - [`NegotiableQuoteHistoryStatusesChange`](#negotiablequotehistorystatuseschange) | The status before and after a change in the negotiable quote history. |
| `total` - [`NegotiableQuoteHistoryTotalChange`](#negotiablequotehistorytotalchange) | The total amount of the negotiable quote before and after a change in the quote history. |

#### Example

```json
{
  "comment_added": NegotiableQuoteHistoryCommentChange,
  "custom_changes": NegotiableQuoteCustomLogChange,
  "expiration": NegotiableQuoteHistoryExpirationChange,
  "products_removed": NegotiableQuoteHistoryProductsRemovedChange,
  "statuses": NegotiableQuoteHistoryStatusesChange,
  "total": NegotiableQuoteHistoryTotalChange
}
```

<HorizontalLine />

### NegotiableQuoteHistoryCommentChange

Contains a comment submitted by a seller or buyer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comment` - [`String!`](#string) | A plain text comment submitted by a seller or buyer. |

#### Example

```json
{"comment": "abc123"}
```

<HorizontalLine />

### NegotiableQuoteHistoryEntry

Contains details about a change for a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `author` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The person who made a change in the status of the negotiable quote. |
| `change_type` - [`NegotiableQuoteHistoryEntryChangeType!`](#negotiablequotehistoryentrychangetype) | An enum that describes the why the entry in the negotiable quote history changed status. |
| `changes` - [`NegotiableQuoteHistoryChanges`](#negotiablequotehistorychanges) | The set of changes in the negotiable quote. |
| `created_at` - [`String`](#string) | Timestamp indicating when the negotiable quote entry was created. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteHistoryEntry&#x60; object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "change_type": "CREATED",
  "changes": NegotiableQuoteHistoryChanges,
  "created_at": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### NegotiableQuoteHistoryEntryChangeType

#### Values

| Enum Value | Description |
|------------|-------------|
| `CREATED` |  |
| `UPDATED` |  |
| `CLOSED` |  |
| `UPDATED_BY_SYSTEM` |  |

#### Example

```json
""CREATED""
```

<HorizontalLine />

### NegotiableQuoteHistoryExpirationChange

Contains a new expiration date and the previous date.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_expiration` - [`String`](#string) | The expiration date after the change. The value will be &#x27;null&#x27; if not set. |
| `old_expiration` - [`String`](#string) | The previous expiration date. The value will be &#x27;null&#x27; if not previously set. |

#### Example

```json
{
  "new_expiration": "xyz789",
  "old_expiration": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteHistoryProductsRemovedChange

Contains lists of products that have been removed from the catalog and negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `products_removed_from_catalog` - [`[ID]`](#id) | A list of product IDs the seller removed from the catalog. |
| `products_removed_from_quote` - [`[ProductInterface]`](#productinterface) | A list of products removed from the negotiable quote by either the buyer or the seller. |

#### Example

```json
{
  "products_removed_from_catalog": [4],
  "products_removed_from_quote": [ProductInterface]
}
```

<HorizontalLine />

### NegotiableQuoteHistoryStatusChange

Lists a new status change applied to a negotiable quote and the previous status.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_status` - [`NegotiableQuoteStatus!`](#negotiablequotestatus) | The updated status. |
| `old_status` - [`NegotiableQuoteStatus`](#negotiablequotestatus) | The previous status. The value will be null for the first history entry in a negotiable quote. |

#### Example

```json
{"new_status": "SUBMITTED", "old_status": "SUBMITTED"}
```

<HorizontalLine />

### NegotiableQuoteHistoryStatusesChange

Contains a list of status changes that occurred for the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `changes` - [`[NegotiableQuoteHistoryStatusChange]!`](#negotiablequotehistorystatuschange) | A list of status changes. |

#### Example

```json
{"changes": [NegotiableQuoteHistoryStatusChange]}
```

<HorizontalLine />

### NegotiableQuoteHistoryTotalChange

Contains a new price and the previous price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `new_price` - [`Money`](#money) | The total price as a result of the change. |
| `old_price` - [`Money`](#money) | The previous total price on the negotiable quote. |

#### Example

```json
{
  "new_price": Money,
  "old_price": Money
}
```

<HorizontalLine />

### NegotiableQuoteInvalidStateError

An error indicating that an operation was attempted on a negotiable quote in an invalid state.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |

#### Example

```json
{"message": "abc123"}
```

<HorizontalLine />

### NegotiableQuoteItemQuantityInput

Specifies the updated quantity of an item.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quantity` - [`Float!`](#float) | The new quantity of the negotiable quote item. |
| `quote_item_uid` - [`ID!`](#id) | The unique ID of a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{"quantity": 987.65, "quote_item_uid": 4}
```

<HorizontalLine />

### NegotiableQuotePaymentMethodInput

Defines the payment method to be applied to the negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `code` - [`String!`](#string) | Payment method code |
| `purchase_order_number` - [`String`](#string) | The purchase order number. Optional for most payment methods. |

#### Example

```json
{
  "code": "xyz789",
  "purchase_order_number": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteShippingAddress

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_shipping_methods` - [`[AvailableShippingMethod]`](#availableshippingmethod) | An array of shipping methods available to the buyer. |
| `city` - [`String!`](#string) | The company&#x27;s city or town. |
| `company` - [`String`](#string) | The company name associated with the shipping/billing address. |
| `country` - [`NegotiableQuoteAddressCountry!`](#negotiablequoteaddresscountry) | The company&#x27;s country. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `postcode` - [`String`](#string) | The company&#x27;s ZIP or postal code. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `selected_shipping_method` - [`SelectedShippingMethod`](#selectedshippingmethod) | The selected shipping method. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |

#### Example

```json
{
  "available_shipping_methods": [AvailableShippingMethod],
  "city": "xyz789",
  "company": "xyz789",
  "country": NegotiableQuoteAddressCountry,
  "firstname": "xyz789",
  "lastname": "xyz789",
  "postcode": "abc123",
  "region": NegotiableQuoteAddressRegion,
  "selected_shipping_method": SelectedShippingMethod,
  "street": ["xyz789"],
  "telephone": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteShippingAddressInput

Defines shipping addresses for the negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`NegotiableQuoteAddressInput`](#negotiablequoteaddressinput) | A shipping address. |
| `customer_address_uid` - [`ID`](#id) | An ID from the company user&#x27;s address book that uniquely identifies the address to be used for shipping. |
| `customer_notes` - [`String`](#string) | Text provided by the company user. |

#### Example

```json
{
  "address": NegotiableQuoteAddressInput,
  "customer_address_uid": "4",
  "customer_notes": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteSortInput

Defines the field to use to sort a list of negotiable quotes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sort_direction` - [`SortEnum!`](#sortenum) | Whether to return results in ascending or descending order. |
| `sort_field` - [`NegotiableQuoteSortableField!`](#negotiablequotesortablefield) | The specified sort field. |

#### Example

```json
{"sort_direction": "ASC", "sort_field": "QUOTE_NAME"}
```

<HorizontalLine />

### NegotiableQuoteSortableField

#### Values

| Enum Value | Description |
|------------|-------------|
| `QUOTE_NAME` | Sorts negotiable quotes by name. |
| `CREATED_AT` | Sorts negotiable quotes by the dates they were created. |
| `UPDATED_AT` | Sorts negotiable quotes by the dates they were last modified. |

#### Example

```json
""QUOTE_NAME""
```

<HorizontalLine />

### NegotiableQuoteStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `SUBMITTED` |  |
| `PENDING` |  |
| `UPDATED` |  |
| `OPEN` |  |
| `ORDERED` |  |
| `CLOSED` |  |
| `DECLINED` |  |
| `EXPIRED` |  |

#### Example

```json
""SUBMITTED""
```

<HorizontalLine />

### NegotiableQuoteUidNonFatalResultInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Possible Types

| NegotiableQuoteUidNonFatalResultInterface Types |
|----------------|
| [`NegotiableQuoteUidOperationSuccess`](#negotiablequoteuidoperationsuccess) |

#### Example

```json
{"quote_uid": "4"}
```

<HorizontalLine />

### NegotiableQuoteUidOperationSuccess

Contains details about a successful operation on a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{"quote_uid": 4}
```

<HorizontalLine />

### NegotiableQuoteUser

A limited view of a Buyer or Seller in the negotiable quote process.

#### Fields

| Field Name | Description |
|------------|-------------|
| `firstname` - [`String!`](#string) | The first name of the buyer or seller making a change. |
| `lastname` - [`String!`](#string) | The buyer&#x27;s or seller&#x27;s last name. |

#### Example

```json
{
  "firstname": "abc123",
  "lastname": "abc123"
}
```

<HorizontalLine />

### NegotiableQuotesOutput

Contains a list of negotiable that match the specified filter.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[NegotiableQuote]!`](#negotiablequote) | A list of negotiable quotes |
| `page_info` - [`SearchResultPageInfo!`](#searchresultpageinfo) | Contains pagination metadata |
| `sort_fields` - [`SortFields`](#sortfields) | Contains the default sort field and all available sort fields. |
| `total_count` - [`Int!`](#int) | The number of negotiable quotes returned |

#### Example

```json
{
  "items": [NegotiableQuote],
  "page_info": SearchResultPageInfo,
  "sort_fields": SortFields,
  "total_count": 987
}
```

<HorizontalLine />

### NoSuchEntityUidError

Contains an error message when an invalid UID was specified.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |
| `uid` - [`ID!`](#id) | The specified invalid unique ID of an object. |

#### Example

```json
{"message": "xyz789", "uid": 4}
```

<HorizontalLine />

### Order

Contains the order ID.

#### Fields

| Field Name | Description |
|------------|-------------|
| `order_id` - [`String`](#string) |  *(Deprecated: Use &#x60;order_number&#x60; instead.)* |
| `order_number` - [`String!`](#string) | The unique ID for an &#x60;Order&#x60; object. |

#### Example

```json
{
  "order_id": "xyz789",
  "order_number": "abc123"
}
```

<HorizontalLine />

### OrderAddress

Contains detailed information about an order's billing and shipping addresses.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The city or town. |
| `company` - [`String`](#string) | The customer&#x27;s company. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The customer&#x27;s country. |
| `fax` - [`String`](#string) | The fax number. |
| `firstname` - [`String!`](#string) | The first name of the person associated with the shipping/billing address. |
| `lastname` - [`String!`](#string) | The family name of the person associated with the shipping/billing address. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the shipping/billing address. |
| `postcode` - [`String`](#string) | The customer&#x27;s ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`String`](#string) | The state or province name. |
| `region_id` - [`ID`](#id) | The unique ID for a &#x60;Region&#x60; object of a pre-defined region. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Value-added tax (VAT) number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "abc123",
  "country_code": "AF",
  "fax": "xyz789",
  "firstname": "abc123",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": "abc123",
  "region_id": 4,
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "abc123",
  "vat_id": "xyz789"
}
```

<HorizontalLine />

### OrderItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
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
  "discounts": [Discount],
  "eligible_for_return": false,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": 4,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "xyz789",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 123.45,
  "quantity_refunded": 123.45,
  "quantity_returned": 123.45,
  "quantity_shipped": 987.65,
  "selected_options": [OrderItemOption],
  "status": "xyz789"
}
```

<HorizontalLine />

### OrderItemInterface

Order item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
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

#### Possible Types

| OrderItemInterface Types |
|----------------|
| [`DownloadableOrderItem`](#downloadableorderitem) |
| [`BundleOrderItem`](#bundleorderitem) |
| [`GiftCardOrderItem`](#giftcardorderitem) |
| [`OrderItem`](#orderitem) |

#### Example

```json
{
  "discounts": [Discount],
  "eligible_for_return": false,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "product_type": "xyz789",
  "product_url_key": "abc123",
  "quantity_canceled": 987.65,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 987.65,
  "quantity_refunded": 123.45,
  "quantity_returned": 987.65,
  "quantity_shipped": 123.45,
  "selected_options": [OrderItemOption],
  "status": "abc123"
}
```

<HorizontalLine />

### OrderItemOption

Represents order item options like selected or entered.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The name of the option. |
| `value` - [`String!`](#string) | The value of the option. |

#### Example

```json
{
  "label": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### OrderPaymentMethod

Contains details about the payment method used to pay for the order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `additional_data` - [`[KeyValue]`](#keyvalue) | Additional data per payment method type. |
| `name` - [`String!`](#string) | The label that describes the payment method. |
| `type` - [`String!`](#string) | The payment method code that indicates how the order was paid for. |

#### Example

```json
{
  "additional_data": [KeyValue],
  "name": "abc123",
  "type": "xyz789"
}
```

<HorizontalLine />

### OrderShipment

Contains order shipment details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comments` - [`[SalesCommentItem]`](#salescommentitem) | Comments added to the shipment. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;OrderShipment&#x60; object. |
| `items` - [`[ShipmentItemInterface]`](#shipmentiteminterface) | An array of items included in the shipment. |
| `number` - [`String!`](#string) | The sequential credit shipment number. |
| `tracking` - [`[ShipmentTracking]`](#shipmenttracking) | An array of shipment tracking details. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "id": 4,
  "items": [ShipmentItemInterface],
  "number": "xyz789",
  "tracking": [ShipmentTracking]
}
```

<HorizontalLine />

### OrderTotal

Contains details about the sales total amounts used to calculate the final price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `base_grand_total` - [`Money!`](#money) | The final base grand total amount in the base currency. |
| `discounts` - [`[Discount]`](#discount) | The applied discounts to the order. |
| `grand_total` - [`Money!`](#money) | The final total amount, including shipping, discounts, and taxes. |
| `shipping_handling` - [`ShippingHandling`](#shippinghandling) | Details about the shipping and handling costs for the order. |
| `subtotal` - [`Money!`](#money) | The subtotal of the order, excluding shipping, discounts, and taxes. |
| `taxes` - [`[TaxItem]`](#taxitem) | The order tax details. |
| `total_giftcard` - [`Money`](#money) | The gift card balance applied to the order. |
| `total_shipping` - [`Money!`](#money) | The shipping amount for the order. |
| `total_tax` - [`Money!`](#money) | The amount of tax applied to the order. |

#### Example

```json
{
  "base_grand_total": Money,
  "discounts": [Discount],
  "grand_total": Money,
  "shipping_handling": ShippingHandling,
  "subtotal": Money,
  "taxes": [TaxItem],
  "total_giftcard": Money,
  "total_shipping": Money,
  "total_tax": Money
}
```

<HorizontalLine />

### PayflowExpressInput

Contains required input for Payflow Express Checkout payments.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payer_id` - [`String!`](#string) | The unique ID of the PayPal user. |
| `token` - [`String!`](#string) | The token returned by the createPaypalExpressToken mutation. |

#### Example

```json
{
  "payer_id": "xyz789",
  "token": "abc123"
}
```

<HorizontalLine />

### PayflowLinkInput

A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `error_url` - [`String!`](#string) | The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. |
| `return_url` - [`String!`](#string) | The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |

#### Example

```json
{
  "cancel_url": "xyz789",
  "error_url": "abc123",
  "return_url": "abc123"
}
```

<HorizontalLine />

### PayflowLinkMode

Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods.

#### Values

| Enum Value | Description |
|------------|-------------|
| `TEST` |  |
| `LIVE` |  |

#### Example

```json
""TEST""
```

<HorizontalLine />

### PayflowLinkToken

Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `mode` - [`PayflowLinkMode`](#payflowlinkmode) | The mode for the Payflow transaction. |
| `paypal_url` - [`String`](#string) | The PayPal URL used for requesting a Payflow form. |
| `secure_token` - [`String`](#string) | The secure token generated by PayPal. |
| `secure_token_id` - [`String`](#string) | The secure token ID generated by PayPal. |

#### Example

```json
{
  "mode": "TEST",
  "paypal_url": "abc123",
  "secure_token": "abc123",
  "secure_token_id": "xyz789"
}
```

<HorizontalLine />

### PayflowLinkTokenInput

Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |

#### Example

```json
{"cart_id": "abc123"}
```

<HorizontalLine />

### PayflowProInput

Contains input for the Payflow Pro and Payments Pro payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cc_details` - [`CreditCardDetailsInput!`](#creditcarddetailsinput) | Required input for credit card related information. |
| `is_active_payment_token_enabler` - [`Boolean`](#boolean) | Indicates whether details about the shopper&#x27;s credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. |

#### Example

```json
{
  "cc_details": CreditCardDetailsInput,
  "is_active_payment_token_enabler": true
}
```

<HorizontalLine />

### PayflowProResponseInput

Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the shopper&#x27;s cart. |
| `paypal_payload` - [`String!`](#string) | The payload returned from PayPal. |

#### Example

```json
{
  "cart_id": "abc123",
  "paypal_payload": "abc123"
}
```

<HorizontalLine />

### PayflowProResponseOutput

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart with the updated selected payment method. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### PayflowProTokenInput

Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the shopper&#x27;s cart. |
| `urls` - [`PayflowProUrlInput!`](#payflowprourlinput) | A set of relative URLs that PayPal uses for callback. |

#### Example

```json
{
  "cart_id": "abc123",
  "urls": PayflowProUrlInput
}
```

<HorizontalLine />

### PayflowProUrlInput

Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `error_url` - [`String!`](#string) | The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. |
| `return_url` - [`String!`](#string) | The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |

#### Example

```json
{
  "cancel_url": "xyz789",
  "error_url": "abc123",
  "return_url": "xyz789"
}
```

<HorizontalLine />

### PaymentMethodInput

Defines the payment method.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `braintree` - [`BraintreeInput`](#braintreeinput) |  |
| `braintree_cc_vault` - [`BraintreeCcVaultInput`](#braintreeccvaultinput) |  |
| `code` - [`String!`](#string) | The internal name for the payment method. |
| `hosted_pro` - [`HostedProInput`](#hostedproinput) | Required input for PayPal Hosted pro payments. |
| `payflow_express` - [`PayflowExpressInput`](#payflowexpressinput) | Required input for Payflow Express Checkout payments. |
| `payflow_link` - [`PayflowLinkInput`](#payflowlinkinput) | Required input for PayPal Payflow Link and Payments Advanced payments. |
| `payflowpro` - [`PayflowProInput`](#payflowproinput) | Required input for PayPal Payflow Pro and Payment Pro payments. |
| `payflowpro_cc_vault` - [`VaultTokenInput`](#vaulttokeninput) | Required input for PayPal Payflow Pro vault payments. |
| `paypal_express` - [`PaypalExpressInput`](#paypalexpressinput) | Required input for Express Checkout and Payments Standard payments. |
| `purchase_order_number` - [`String`](#string) | The purchase order number. Optional for most payment methods. |

#### Example

```json
{
  "braintree": BraintreeInput,
  "braintree_cc_vault": BraintreeCcVaultInput,
  "code": "xyz789",
  "hosted_pro": HostedProInput,
  "payflow_express": PayflowExpressInput,
  "payflow_link": PayflowLinkInput,
  "payflowpro": PayflowProInput,
  "payflowpro_cc_vault": VaultTokenInput,
  "paypal_express": PaypalExpressInput,
  "purchase_order_number": "abc123"
}
```

<HorizontalLine />

### PaymentToken

The stored payment method available to the customer.

#### Fields

| Field Name | Description |
|------------|-------------|
| `details` - [`String`](#string) | A description of the stored account details. |
| `payment_method_code` - [`String!`](#string) | The payment method code associated with the token. |
| `public_hash` - [`String!`](#string) | The public hash of the token. |
| `type` - [`PaymentTokenTypeEnum!`](#paymenttokentypeenum) | Specifies the payment token type. |

#### Example

```json
{
  "details": "xyz789",
  "payment_method_code": "abc123",
  "public_hash": "xyz789",
  "type": "card"
}
```

<HorizontalLine />

### PaymentTokenTypeEnum

The list of available payment token types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `card` | phpcs:ignore Magento2.GraphQL.ValidArgumentName |
| `account` | phpcs:ignore Magento2.GraphQL.ValidArgumentName |

#### Example

```json
""card""
```

<HorizontalLine />

### PaypalExpressInput

Contains required input for Express Checkout and Payments Standard payments.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payer_id` - [`String!`](#string) | The unique ID of the PayPal user. |
| `token` - [`String!`](#string) | The token returned by the &#x60;createPaypalExpressToken&#x60; mutation. |

#### Example

```json
{
  "payer_id": "abc123",
  "token": "abc123"
}
```

<HorizontalLine />

### PaypalExpressTokenInput

Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |
| `code` - [`String!`](#string) | The payment method code. |
| `express_button` - [`Boolean`](#boolean) | Indicates whether the buyer selected the quick checkout button. The default value is false. |
| `urls` - [`PaypalExpressUrlsInput!`](#paypalexpressurlsinput) | A set of relative URLs that PayPal uses in response to various actions during the authorization process. |
| `use_paypal_credit` - [`Boolean`](#boolean) | Indicates whether the buyer clicked the PayPal credit button. The default value is false. |

#### Example

```json
{
  "cart_id": "xyz789",
  "code": "xyz789",
  "express_button": true,
  "urls": PaypalExpressUrlsInput,
  "use_paypal_credit": true
}
```

<HorizontalLine />

### PaypalExpressTokenOutput

Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `paypal_urls` - [`PaypalExpressUrlList`](#paypalexpressurllist) | A set of URLs that allow the buyer to authorize payment and adjust checkout details. |
| `token` - [`String`](#string) | The token returned by PayPal. |

#### Example

```json
{
  "paypal_urls": PaypalExpressUrlList,
  "token": "xyz789"
}
```

<HorizontalLine />

### PaypalExpressUrlList

Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions.

#### Fields

| Field Name | Description |
|------------|-------------|
| `edit` - [`String`](#string) | The PayPal URL that allows the buyer to edit their checkout details. |
| `start` - [`String`](#string) | The URL to the PayPal login page. |

#### Example

```json
{
  "edit": "abc123",
  "start": "xyz789"
}
```

<HorizontalLine />

### PaypalExpressUrlsInput

Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cancel_url` - [`String!`](#string) | The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. |
| `pending_url` - [`String`](#string) | The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. |
| `return_url` - [`String!`](#string) | The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. |
| `success_url` - [`String`](#string) | The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. |

#### Example

```json
{
  "cancel_url": "xyz789",
  "pending_url": "abc123",
  "return_url": "xyz789",
  "success_url": "xyz789"
}
```

<HorizontalLine />

### PhysicalProductInterface

Contains attributes specific to tangible products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Possible Types

| PhysicalProductInterface Types |
|----------------|
| [`SimpleProduct`](#simpleproduct) |
| [`BundleProduct`](#bundleproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`GroupedProduct`](#groupedproduct) |
| [`ConfigurableProduct`](#configurableproduct) |

#### Example

```json
{"weight": 123.45}
```

<HorizontalLine />

### PickupLocation

Defines Pickup Location information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String`](#string) |  |
| `contact_name` - [`String`](#string) |  |
| `country_id` - [`String`](#string) |  |
| `description` - [`String`](#string) |  |
| `email` - [`String`](#string) |  |
| `fax` - [`String`](#string) |  |
| `latitude` - [`Float`](#float) |  |
| `longitude` - [`Float`](#float) |  |
| `name` - [`String`](#string) |  |
| `phone` - [`String`](#string) |  |
| `pickup_location_code` - [`String`](#string) |  |
| `postcode` - [`String`](#string) |  |
| `region` - [`String`](#string) |  |
| `region_id` - [`Int`](#int) |  |
| `street` - [`String`](#string) |  |

#### Example

```json
{
  "city": "xyz789",
  "contact_name": "xyz789",
  "country_id": "xyz789",
  "description": "abc123",
  "email": "abc123",
  "fax": "xyz789",
  "latitude": 987.65,
  "longitude": 123.45,
  "name": "xyz789",
  "phone": "xyz789",
  "pickup_location_code": "abc123",
  "postcode": "abc123",
  "region": "abc123",
  "region_id": 987,
  "street": "abc123"
}
```

<HorizontalLine />

### PickupLocationFilterInput

PickupLocationFilterInput defines the list of attributes and filters for the search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`FilterTypeInput`](#filtertypeinput) | Filter by city. |
| `country_id` - [`FilterTypeInput`](#filtertypeinput) | Filter by country. |
| `name` - [`FilterTypeInput`](#filtertypeinput) | Filter by pickup location name. |
| `pickup_location_code` - [`FilterTypeInput`](#filtertypeinput) | Filter by pickup location code. |
| `postcode` - [`FilterTypeInput`](#filtertypeinput) | Filter by postcode. |
| `region` - [`FilterTypeInput`](#filtertypeinput) | Filter by region. |
| `region_id` - [`FilterTypeInput`](#filtertypeinput) | Filter by region id. |
| `street` - [`FilterTypeInput`](#filtertypeinput) | Filter by street. |

#### Example

```json
{
  "city": FilterTypeInput,
  "country_id": FilterTypeInput,
  "name": FilterTypeInput,
  "pickup_location_code": FilterTypeInput,
  "postcode": FilterTypeInput,
  "region": FilterTypeInput,
  "region_id": FilterTypeInput,
  "street": FilterTypeInput
}
```

<HorizontalLine />

### PickupLocationSortInput

PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `city` - [`SortEnum`](#sortenum) | City where pickup location is placed. |
| `contact_name` - [`SortEnum`](#sortenum) | Name of the contact person. |
| `country_id` - [`SortEnum`](#sortenum) | Id of the country in two letters. |
| `description` - [`SortEnum`](#sortenum) | Description of the pickup location. |
| `distance` - [`SortEnum`](#sortenum) | Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. |
| `email` - [`SortEnum`](#sortenum) | Contact email of the pickup location. |
| `fax` - [`SortEnum`](#sortenum) | Contact fax of the pickup location. |
| `latitude` - [`SortEnum`](#sortenum) | Geographic latitude where pickup location is placed. |
| `longitude` - [`SortEnum`](#sortenum) | Geographic longitude where pickup location is placed. |
| `name` - [`SortEnum`](#sortenum) | The pickup location name. Customer use this to identify the pickup location. |
| `phone` - [`SortEnum`](#sortenum) | Contact phone number of the pickup location. |
| `pickup_location_code` - [`SortEnum`](#sortenum) | A code assigned to pickup location to identify the source. |
| `postcode` - [`SortEnum`](#sortenum) | Postcode where pickup location is placed. |
| `region` - [`SortEnum`](#sortenum) | Name of the region. |
| `region_id` - [`SortEnum`](#sortenum) | Id of the region. |
| `street` - [`SortEnum`](#sortenum) | Street where pickup location is placed. |

#### Example

```json
{
  "city": "ASC",
  "contact_name": "ASC",
  "country_id": "ASC",
  "description": "ASC",
  "distance": "ASC",
  "email": "ASC",
  "fax": "ASC",
  "latitude": "ASC",
  "longitude": "ASC",
  "name": "ASC",
  "phone": "ASC",
  "pickup_location_code": "ASC",
  "postcode": "ASC",
  "region": "ASC",
  "region_id": "ASC",
  "street": "ASC"
}
```

<HorizontalLine />

### PickupLocations

Top level object returned in a pickup locations search.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[PickupLocation]`](#pickuplocation) | An array of pickup locations that match the specific search request. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | An object that includes the page_info and currentPage values specified in the query. |
| `total_count` - [`Int`](#int) | The number of products returned. |

#### Example

```json
{
  "items": [PickupLocation],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### PlaceNegotiableQuoteOrderInput

Specifies the negotiable quote to convert to an order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{"quote_uid": 4}
```

<HorizontalLine />

### PlaceNegotiableQuoteOrderOutput

An output object that returns the generated order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `order` - [`Order!`](#order) | Contains the generated order number. |

#### Example

```json
{"order": Order}
```

<HorizontalLine />

### PlaceOrderForPurchaseOrderInput

Specifies the purchase order to convert to an order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `purchase_order_uid` - [`ID!`](#id) | The unique ID of a purchase order. |

#### Example

```json
{"purchase_order_uid": "4"}
```

<HorizontalLine />

### PlaceOrderForPurchaseOrderOutput

Contains the results of the request to place an order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `order` - [`CustomerOrder!`](#customerorder) | Placed order. |

#### Example

```json
{"order": CustomerOrder}
```

<HorizontalLine />

### PlaceOrderInput

Specifies the quote to be converted to an order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |

#### Example

```json
{"cart_id": "abc123"}
```

<HorizontalLine />

### PlaceOrderOutput

Contains the results of the request to place an order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `order` - [`Order!`](#order) | The ID of the order. |

#### Example

```json
{"order": Order}
```

<HorizontalLine />

### PlacePurchaseOrderInput

Specifies the quote to be converted to a purchase order.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |

#### Example

```json
{"cart_id": "abc123"}
```

<HorizontalLine />

### PlacePurchaseOrderOutput

Contains the results of the request to place a purchase order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `purchase_order` - [`PurchaseOrder!`](#purchaseorder) | Placed purchase order. |

#### Example

```json
{"purchase_order": PurchaseOrder}
```

<HorizontalLine />

### Price

Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments.

#### Fields

| Field Name | Description |
|------------|-------------|
| `adjustments` - [`[PriceAdjustment]`](#priceadjustment) | An array that provides information about tax, weee, or weee_tax adjustments. *(Deprecated: Use &#x60;ProductPrice&#x60; instead.)* |
| `amount` - [`Money`](#money) | The price of a product plus a three-letter currency code. *(Deprecated: Use &#x60;ProductPrice&#x60; instead.)* |

#### Example

```json
{
  "adjustments": [PriceAdjustment],
  "amount": Money
}
```

<HorizontalLine />

### PriceAdjustment

Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money`](#money) | The amount of the price adjustment and its currency code. |
| `code` - [`PriceAdjustmentCodesEnum`](#priceadjustmentcodesenum) | Indicates whether the adjustment involves tax, weee, or weee_tax. *(Deprecated: &#x60;PriceAdjustment&#x60; is deprecated.)* |
| `description` - [`PriceAdjustmentDescriptionEnum`](#priceadjustmentdescriptionenum) | Indicates whether the entity described by the code attribute is included or excluded from the adjustment. *(Deprecated: &#x60;PriceAdjustment&#x60; is deprecated.)* |

#### Example

```json
{
  "amount": Money,
  "code": "TAX",
  "description": "INCLUDED"
}
```

<HorizontalLine />

### PriceAdjustmentCodesEnum

`PriceAdjustment.code` is deprecated.

#### Values

| Enum Value | Description |
|------------|-------------|
| `TAX` |  *(Deprecated: &#x60;PriceAdjustmentCodesEnum&#x60; is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog.)* |
| `WEEE` |  *(Deprecated: WEEE code is deprecated. Use &#x60;fixed_product_taxes.label&#x60; instead.)* |
| `WEEE_TAX` |  *(Deprecated: Use &#x60;fixed_product_taxes&#x60; instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog.)* |

#### Example

```json
""TAX""
```

<HorizontalLine />

### PriceAdjustmentDescriptionEnum

`PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded.

#### Values

| Enum Value | Description |
|------------|-------------|
| `INCLUDED` |  |
| `EXCLUDED` |  |

#### Example

```json
""INCLUDED""
```

<HorizontalLine />

### PriceRange

Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same.

#### Fields

| Field Name | Description |
|------------|-------------|
| `maximum_price` - [`ProductPrice`](#productprice) | The highest possible price for the product. |
| `minimum_price` - [`ProductPrice!`](#productprice) | The lowest possible price for the product. |

#### Example

```json
{
  "maximum_price": ProductPrice,
  "minimum_price": ProductPrice
}
```

<HorizontalLine />

### PriceTypeEnum

Defines the price type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `FIXED` |  |
| `PERCENT` |  |
| `DYNAMIC` |  |

#### Example

```json
""FIXED""
```

<HorizontalLine />

### PriceViewEnum

Defines whether a bundle product's price is displayed as the lowest possible value or as a range.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRICE_RANGE` |  |
| `AS_LOW_AS` |  |

#### Example

```json
""PRICE_RANGE""
```

<HorizontalLine />

### ProductAttribute

Contains a product attribute code and value.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The unique identifier for a product attribute code. |
| `value` - [`String!`](#string) | The display value of the attribute. |

#### Example

```json
{
  "code": "abc123",
  "value": "xyz789"
}
```

<HorizontalLine />

### ProductAttributeFilterInput

Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `activity` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Activity |
| `category_gear` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Category Gear |
| `category_id` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Deprecated: use &#x60;category_uid&#x60; to filter product by category ID. |
| `category_uid` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter product by the unique ID for a &#x60;CategoryInterface&#x60; object. |
| `climate` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Climate |
| `collar` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Collar |
| `color` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Color |
| `description` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Attribute label: Description |
| `eco_collection` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Eco Collection |
| `erin_recommends` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Erin Recommends |
| `features_bags` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Features |
| `format` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Format |
| `gender` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Gender |
| `material` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Material |
| `name` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Attribute label: Product Name |
| `new` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: New |
| `pattern` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Pattern |
| `performance_fabric` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Performance Fabric |
| `price` - [`FilterRangeTypeInput`](#filterrangetypeinput) | Attribute label: Price |
| `purpose` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Purpose |
| `sale` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Sale |
| `short_description` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Attribute label: Short Description |
| `size` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Size |
| `sku` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: SKU |
| `sleeve` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Sleeve |
| `strap_bags` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Strap/Handle |
| `style_bags` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Style Bags |
| `style_bottom` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Style Bottom |
| `style_general` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Attribute label: Style General |
| `url_key` - [`FilterEqualTypeInput`](#filterequaltypeinput) | The part of the URL that identifies the product |

#### Example

```json
{
  "activity": FilterEqualTypeInput,
  "category_gear": FilterEqualTypeInput,
  "category_id": FilterEqualTypeInput,
  "category_uid": FilterEqualTypeInput,
  "climate": FilterEqualTypeInput,
  "collar": FilterEqualTypeInput,
  "color": FilterEqualTypeInput,
  "description": FilterMatchTypeInput,
  "eco_collection": FilterEqualTypeInput,
  "erin_recommends": FilterEqualTypeInput,
  "features_bags": FilterEqualTypeInput,
  "format": FilterEqualTypeInput,
  "gender": FilterEqualTypeInput,
  "material": FilterEqualTypeInput,
  "name": FilterMatchTypeInput,
  "new": FilterEqualTypeInput,
  "pattern": FilterEqualTypeInput,
  "performance_fabric": FilterEqualTypeInput,
  "price": FilterRangeTypeInput,
  "purpose": FilterEqualTypeInput,
  "sale": FilterEqualTypeInput,
  "short_description": FilterMatchTypeInput,
  "size": FilterEqualTypeInput,
  "sku": FilterEqualTypeInput,
  "sleeve": FilterEqualTypeInput,
  "strap_bags": FilterEqualTypeInput,
  "style_bags": FilterEqualTypeInput,
  "style_bottom": FilterEqualTypeInput,
  "style_general": FilterEqualTypeInput,
  "url_key": FilterEqualTypeInput
}
```

<HorizontalLine />

### ProductAttributeSortInput

Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `name` - [`SortEnum`](#sortenum) | Attribute label: Product Name |
| `position` - [`SortEnum`](#sortenum) | Sort by the position assigned to each product. |
| `price` - [`SortEnum`](#sortenum) | Attribute label: Price |
| `relevance` - [`SortEnum`](#sortenum) | Sort by the search relevance score (default). |

#### Example

```json
{"name": "ASC", "position": "ASC", "price": "ASC", "relevance": "ASC"}
```

<HorizontalLine />

### ProductDiscount

Contains the discount applied to a product price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount_off` - [`Float`](#float) | The actual value of the discount. |
| `percent_off` - [`Float`](#float) | The discount expressed a percentage. |

#### Example

```json
{"amount_off": 123.45, "percent_off": 987.65}
```

<HorizontalLine />

### ProductFilterInput

ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `category_id` - [`FilterTypeInput`](#filtertypeinput) | The category ID the product belongs to. |
| `country_of_manufacture` - [`FilterTypeInput`](#filtertypeinput) | The product&#x27;s country of origin. |
| `created_at` - [`FilterTypeInput`](#filtertypeinput) | The timestamp indicating when the product was created. |
| `custom_layout` - [`FilterTypeInput`](#filtertypeinput) | The name of a custom layout. |
| `custom_layout_update` - [`FilterTypeInput`](#filtertypeinput) | XML code that is applied as a layout update to the product page. |
| `description` - [`FilterTypeInput`](#filtertypeinput) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`FilterTypeInput`](#filtertypeinput) | Indicates whether a gift message is available. |
| `has_options` - [`FilterTypeInput`](#filtertypeinput) | Indicates whether additional attributes have been created for the product. |
| `image` - [`FilterTypeInput`](#filtertypeinput) | The relative path to the main image on the product page. |
| `image_label` - [`FilterTypeInput`](#filtertypeinput) | The label assigned to a product image. |
| `is_returnable` - [`FilterTypeInput`](#filtertypeinput) | Indicates whether the product can be returned. |
| `manufacturer` - [`FilterTypeInput`](#filtertypeinput) | A number representing the product&#x27;s manufacturer. |
| `max_price` - [`FilterTypeInput`](#filtertypeinput) | The numeric maximal price of the product. Do not include the currency code. |
| `meta_description` - [`FilterTypeInput`](#filtertypeinput) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`FilterTypeInput`](#filtertypeinput) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`FilterTypeInput`](#filtertypeinput) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_price` - [`FilterTypeInput`](#filtertypeinput) | The numeric minimal price of the product. Do not include the currency code. |
| `name` - [`FilterTypeInput`](#filtertypeinput) | The product name. Customers use this name to identify the product. |
| `news_from_date` - [`FilterTypeInput`](#filtertypeinput) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `news_to_date` - [`FilterTypeInput`](#filtertypeinput) | The end date for new product listings. |
| `options_container` - [`FilterTypeInput`](#filtertypeinput) | If the product has multiple options, determines where they appear on the product page. |
| `or` - [`ProductFilterInput`](#productfilterinput) | The keyword required to perform a logical OR comparison. |
| `price` - [`FilterTypeInput`](#filtertypeinput) | The price of an item. |
| `required_options` - [`FilterTypeInput`](#filtertypeinput) | Indicates whether the product has required options. |
| `short_description` - [`FilterTypeInput`](#filtertypeinput) | A short description of the product. Its use depends on the theme. |
| `sku` - [`FilterTypeInput`](#filtertypeinput) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`FilterTypeInput`](#filtertypeinput) | The relative path to the small image, which is used on catalog pages. |
| `small_image_label` - [`FilterTypeInput`](#filtertypeinput) | The label assigned to a product&#x27;s small image. |
| `special_from_date` - [`FilterTypeInput`](#filtertypeinput) | The beginning date that a product has a special price. |
| `special_price` - [`FilterTypeInput`](#filtertypeinput) | The discounted price of the product. Do not include the currency code. |
| `special_to_date` - [`FilterTypeInput`](#filtertypeinput) | The end date that a product has a special price. |
| `swatch_image` - [`FilterTypeInput`](#filtertypeinput) | The file name of a swatch image. |
| `thumbnail` - [`FilterTypeInput`](#filtertypeinput) | The relative path to the product&#x27;s thumbnail image. |
| `thumbnail_label` - [`FilterTypeInput`](#filtertypeinput) | The label assigned to a product&#x27;s thumbnail image. |
| `tier_price` - [`FilterTypeInput`](#filtertypeinput) | The price when tier pricing is in effect and the items purchased threshold has been reached. |
| `updated_at` - [`FilterTypeInput`](#filtertypeinput) | The timestamp indicating when the product was updated. |
| `url_key` - [`FilterTypeInput`](#filtertypeinput) | The part of the URL that identifies the product |
| `url_path` - [`FilterTypeInput`](#filtertypeinput) |  |
| `weight` - [`FilterTypeInput`](#filtertypeinput) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "category_id": FilterTypeInput,
  "country_of_manufacture": FilterTypeInput,
  "created_at": FilterTypeInput,
  "custom_layout": FilterTypeInput,
  "custom_layout_update": FilterTypeInput,
  "description": FilterTypeInput,
  "gift_message_available": FilterTypeInput,
  "has_options": FilterTypeInput,
  "image": FilterTypeInput,
  "image_label": FilterTypeInput,
  "is_returnable": FilterTypeInput,
  "manufacturer": FilterTypeInput,
  "max_price": FilterTypeInput,
  "meta_description": FilterTypeInput,
  "meta_keyword": FilterTypeInput,
  "meta_title": FilterTypeInput,
  "min_price": FilterTypeInput,
  "name": FilterTypeInput,
  "news_from_date": FilterTypeInput,
  "news_to_date": FilterTypeInput,
  "options_container": FilterTypeInput,
  "or": ProductFilterInput,
  "price": FilterTypeInput,
  "required_options": FilterTypeInput,
  "short_description": FilterTypeInput,
  "sku": FilterTypeInput,
  "small_image": FilterTypeInput,
  "small_image_label": FilterTypeInput,
  "special_from_date": FilterTypeInput,
  "special_price": FilterTypeInput,
  "special_to_date": FilterTypeInput,
  "swatch_image": FilterTypeInput,
  "thumbnail": FilterTypeInput,
  "thumbnail_label": FilterTypeInput,
  "tier_price": FilterTypeInput,
  "updated_at": FilterTypeInput,
  "url_key": FilterTypeInput,
  "url_path": FilterTypeInput,
  "weight": FilterTypeInput
}
```

<HorizontalLine />

### ProductImage

Contains product image information, including the image URL and label.

#### Fields

| Field Name | Description |
|------------|-------------|
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](#string) | The label of the product image or video. |
| `position` - [`Int`](#int) | The media item&#x27;s position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |

#### Example

```json
{
  "disabled": false,
  "label": "abc123",
  "position": 987,
  "url": "abc123"
}
```

<HorizontalLine />

### ProductInfoInput

Product Information used for Pickup Locations search.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `sku` - [`String!`](#string) | Product SKU. |

#### Example

```json
{"sku": "xyz789"}
```

<HorizontalLine />
