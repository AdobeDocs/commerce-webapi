## Types

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

### UnassignChildCompanyInput

Defines the input schema for unassigning a child company from its parent company.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `child_company_id` - [`ID!`](#id) | The unique ID of the child company. |

#### Example

```json
{"child_company_id": 4}
```

<HorizontalLine />

### UnassignChildCompanyOutput

Contains the response to the request to unassign a child company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `company_hierarchy` - [`CompanyHierarchy!`](#companyhierarchy) | The updated company relation hierarchy for the current company. |

#### Example

```json
{"company_hierarchy": CompanyHierarchy}
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
  "unitName": "xyz789",
  "storefrontLabel": "xyz789",
  "pagePlacement": "xyz789",
  "displayNumber": 123,
  "pageType": "xyz789",
  "unitStatus": "abc123",
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
| `cart_id` - [`String!`](#string) | The unique ID of a `Cart` object. |
| `cart_items` - [`[CartItemUpdateInput]!`](#cartitemupdateinput) | An array of items to be updated. |

#### Example

```json
{
  "cart_id": "xyz789",
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
| `gift_registry_item_uid` - [`ID!`](#id) | The unique ID of a `giftRegistryItem` object. |
| `note` - [`String`](#string) | The updated description of the item. |
| `quantity` - [`Float!`](#float) | The updated quantity of the gift registry item. |

#### Example

```json
{
  "gift_registry_item_uid": 4,
  "note": "abc123",
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
| `gift_registry_registrant_uid` - [`ID!`](#id) | The unique ID of a `giftRegistryRegistrant` object. |
| `lastname` - [`String`](#string) | The updated last name of the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryDynamicAttributeInput
  ],
  "email": "abc123",
  "firstname": "abc123",
  "gift_registry_registrant_uid": 4,
  "lastname": "abc123"
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
| `quote_uid` - [`ID!`](#id) | The unique ID of a `NegotiableQuote` object. |

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
| `template_id` - [`ID!`](#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

#### Example

```json
{
  "items": [NegotiableQuoteTemplateItemQuantityInput],
  "template_id": "4"
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
  "description": "abc123",
  "name": "abc123",
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
| `uid` - [`ID!`](#id) | The unique ID of a `Wishlist` object. |
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
  "is_vault_enabled": true,
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
  "payments_order_id": "xyz789",
  "paypal_order_id": "xyz789",
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
  "sku": "xyz789"
}
```

<HorizontalLine />

### VirtualCartItem

An implementation for virtual product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `backorder_message` - [`String`](#string) | Customer-facing hint when the line is salable on notify backorders with insufficient physical quantity; null otherwise. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the cart item |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
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
  "backorder_message": "abc123",
  "custom_attributes": [CustomAttribute],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "is_available": false,
  "is_salable": true,
  "max_qty": 987.65,
  "min_qty": 123.45,
  "not_available_message": "abc123",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### VirtualProduct

Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory.

#### Fields

| Field Name | Description |
|------------|-------------|
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](#string) | The product's country of origin. |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
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
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of `ProductLinks` objects. |
| `quantity` - [`Float`](#float) | Quantity of available stock |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of products to be displayed in a Related Products block. |
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
  "gift_wrapping_available": false,
  "gift_wrapping_price": Money,
  "image": ProductImage,
  "is_returnable": "abc123",
  "manufacturer": 123,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "abc123",
  "meta_keyword": "abc123",
  "meta_title": "xyz789",
  "min_sale_qty": 987.65,
  "name": "xyz789",
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "xyz789",
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 123.45,
  "related_products": [ProductInterface],
  "short_description": ComplexTextValue,
  "sku": "abc123",
  "small_image": ProductImage,
  "special_price": 987.65,
  "special_to_date": "abc123",
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
  "uid": "4"
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
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
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
| `id` - [`ID`](#id) | The unique ID for a `Wishlist` object. |
| `items_count` - [`Int`](#int) | The number of items in the wish list. |
| `items_v2` - [`WishlistItems`](#wishlistitems) | An array of items in the customer's wish list. |
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
  "updated_at": "abc123",
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
| `wishlistId` - [`ID!`](#id) | The unique ID of the `Wishlist` object containing an error. |
| `wishlistItemId` - [`ID!`](#id) | The unique ID of the wish list item containing an error. |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "xyz789",
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
| `quantity` - [`Float`](#float) | The quantity of this item to copy to the destination wish list. This value can't be greater than the quantity in the source wish list. |
| `wishlist_item_id` - [`ID!`](#id) | The unique ID of the `WishlistItemInterface` object to be copied. |

#### Example

```json
{"quantity": 987.65, "wishlist_item_id": 4}
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
| `id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |
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
  "added_at": "xyz789",
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
| `quantity` - [`Float`](#float) | The quantity of this item to move to the destination wish list. This value can't be greater than the quantity in the source wish list. |
| `wishlist_item_id` - [`ID!`](#id) | The unique ID of the `WishlistItemInterface` object to be moved. |

#### Example

```json
{
  "quantity": 987.65,
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
| `wishlist_item_id` - [`ID!`](#id) | The unique ID for a `WishlistItemInterface` object. |

#### Example

```json
{
  "description": "xyz789",
  "entered_options": [EnteredOptionInput],
  "quantity": 123.45,
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
