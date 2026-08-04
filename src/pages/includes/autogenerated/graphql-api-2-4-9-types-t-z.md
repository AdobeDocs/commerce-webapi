## Types

### TaxItem

Contains tax item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](/reference/graphql/latest/types-k-p.md#money) | The amount of tax applied to the item. |
| `rate` - [`Float!`](/reference/graphql/latest/types-f-i.md#float) | The rate used to calculate the tax. |
| `title` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | A title that describes the tax. |

#### Example

```json
{
  "amount": Money,
  "rate": 123.45,
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
| `value` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The value can be represented as color (HEX code), image link, or text. |

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
| `discount` - [`ProductDiscount`](/reference/graphql/latest/types-k-p.md#productdiscount) | The price discount that this tier represents. |
| `final_price` - [`Money`](/reference/graphql/latest/types-k-p.md#money) | The price of the product at this tier. |
| `quantity` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | The minimum number of items that must be purchased to qualify for this price tier. |

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
| `cart_id` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | The unique ID of a `Cart` object. |
| `cart_items` - [`[CartItemUpdateInput]!`](/reference/graphql/latest/types-c-e.md#cartitemupdateinput) | An array of items to be updated. |

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
| `cart` - [`Cart!`](/reference/graphql/latest/types-c-e.md#cart) | The cart after updating products. |
| `errors` - [`[CartUserInputError]!`](/reference/graphql/latest/types-c-e.md#cartuserinputerror) | Contains errors encountered while updating an item to the cart. |

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
| `company` - [`Company!`](/reference/graphql/latest/types-c-e.md#company) | The updated company instance. |

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
| `role` - [`CompanyRole!`](/reference/graphql/latest/types-c-e.md#companyrole) | The updated company role instance. |

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
| `company` - [`Company!`](/reference/graphql/latest/types-c-e.md#company) | The updated company instance. |

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
| `team` - [`CompanyTeam!`](/reference/graphql/latest/types-c-e.md#companyteam) | The updated company team instance. |

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
| `user` - [`Customer!`](/reference/graphql/latest/types-c-e.md#customer) | The updated company user instance. |

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
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](/reference/graphql/latest/types-f-i.md#giftregistrydynamicattributeinput) | Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed. |
| `event_name` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The updated name of the event. |
| `message` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The updated message describing the event. |
| `privacy_settings` - [`GiftRegistryPrivacySettings`](/reference/graphql/latest/types-f-i.md#giftregistryprivacysettings) | Indicates whether the gift registry is PRIVATE or PUBLIC. |
| `shipping_address` - [`GiftRegistryShippingAddressInput`](/reference/graphql/latest/types-f-i.md#giftregistryshippingaddressinput) | The updated shipping address for all gift registry items. |
| `status` - [`GiftRegistryStatus`](/reference/graphql/latest/types-f-i.md#giftregistrystatus) | Indicates whether the gift registry is ACTIVE or INACTIVE. |

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
| `gift_registry_item_uid` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID of a `giftRegistryItem` object. |
| `note` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The updated description of the item. |
| `quantity` - [`Float!`](/reference/graphql/latest/types-f-i.md#float) | The updated quantity of the gift registry item. |

#### Example

```json
{
  "gift_registry_item_uid": "4",
  "note": "abc123",
  "quantity": 123.45
}
```

<HorizontalLine />

### UpdateGiftRegistryItemsOutput

Contains the results of a request to update gift registry items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](/reference/graphql/latest/types-f-i.md#giftregistry) | The gift registry after updating updating items. |

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
| `gift_registry` - [`GiftRegistry`](/reference/graphql/latest/types-f-i.md#giftregistry) | The updated gift registry. |

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
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](/reference/graphql/latest/types-f-i.md#giftregistrydynamicattributeinput) | As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed. |
| `email` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The updated email address of the registrant. |
| `firstname` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The updated first name of the registrant. |
| `gift_registry_registrant_uid` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID of a `giftRegistryRegistrant` object. |
| `lastname` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The updated last name of the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryDynamicAttributeInput
  ],
  "email": "abc123",
  "firstname": "abc123",
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
| `gift_registry` - [`GiftRegistry`](/reference/graphql/latest/types-f-i.md#giftregistry) | The gift registry after updating registrants. |

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
| `quote` - [`NegotiableQuote`](/reference/graphql/latest/types-k-p.md#negotiablequote) | The updated negotiable quote. |

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
| `items` - [`[NegotiableQuoteItemQuantityInput]!`](/reference/graphql/latest/types-k-p.md#negotiablequoteitemquantityinput) | An array of items to update. |
| `quote_uid` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID of a `NegotiableQuote` object. |

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
| `quote_template` - [`NegotiableQuoteTemplate`](/reference/graphql/latest/types-k-p.md#negotiablequotetemplate) | The updated negotiable quote template. |

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
| `items` - [`[NegotiableQuoteTemplateItemQuantityInput]!`](/reference/graphql/latest/types-k-p.md#negotiablequotetemplateitemquantityinput) | An array of items to update. |
| `template_id` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID of a `NegotiableQuoteTemplate` object. |

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
| `applies_to` - [`[ID]`](/reference/graphql/latest/types-f-i.md#id) | An updated list of company user role IDs to which this purchase order approval rule should be applied. When an empty array is provided, the rule is applied to all user roles in the system, including those created in the future. |
| `approvers` - [`[ID]`](/reference/graphql/latest/types-f-i.md#id) | An updated list of B2B user roles that can approve this purchase order approval rule. |
| `condition` - [`CreatePurchaseOrderApprovalRuleConditionInput`](/reference/graphql/latest/types-c-e.md#createpurchaseorderapprovalruleconditioninput) | The updated condition of the purchase order approval rule. |
| `description` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The updated approval rule description. |
| `name` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The updated approval rule name. |
| `status` - [`PurchaseOrderApprovalRuleStatus`](/reference/graphql/latest/types-k-p.md#purchaseorderapprovalrulestatus) | The updated status of the purchase order approval rule. |
| `uid` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | Unique identifier for the purchase order approval rule. |

#### Example

```json
{
  "applies_to": ["4"],
  "approvers": [4],
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
| `description` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The updated description of the requisition list. |
| `name` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | The new name of the requisition list. |

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
| `entered_options` - [`[EnteredOptionInput]`](/reference/graphql/latest/types-c-e.md#enteredoptioninput) | An array of customer-entered options. |
| `item_id` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The ID of the requisition list item to update. |
| `quantity` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | The new quantity of the item. |
| `selected_options` - [`[String]`](/reference/graphql/latest/types-q-s.md#string) | An array of selected option IDs. |

#### Example

```json
{
  "entered_options": [EnteredOptionInput],
  "item_id": 4,
  "quantity": 123.45,
  "selected_options": ["abc123"]
}
```

<HorizontalLine />

### UpdateRequisitionListItemsOutput

Output of the request to update items in the specified requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](/reference/graphql/latest/types-q-s.md#requisitionlist) | The requisition list after updating items. |

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
| `requisition_list` - [`RequisitionList`](/reference/graphql/latest/types-q-s.md#requisitionlist) | The renamed requisition list. |

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
| `name` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | The wish list name. |
| `uid` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID of a `Wishlist` object. |
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
| `parameters` - [`[HttpQueryParameter]`](/reference/graphql/latest/types-f-i.md#httpqueryparameter) | An array of request parameters. |
| `url` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The request URL. |

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
| `currentPage` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | Specifies which page of results to return. The default value is 1. |
| `pageSize` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | Specifies the maximum number of results to return at once. This attribute is optional. |
| `sort` - [`[CompaniesSortInput]`](/reference/graphql/latest/types-c-e.md#companiessortinput) | Defines the sorting of the results. |

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
| `items` - [`[CompanyBasicInfo]!`](/reference/graphql/latest/types-c-e.md#companybasicinfo) | An array of companies customer is assigned to. |
| `page_info` - [`SearchResultPageInfo!`](/reference/graphql/latest/types-q-s.md#searchresultpageinfo) | Provides navigation for the query response. |

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
| `message` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | The returned error message. |
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
| `purchase_order_uids` - [`[ID]!`](/reference/graphql/latest/types-f-i.md#id) | An array of the purchase order IDs. |

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
| `purchase_orders` - [`[PurchaseOrder]!`](/reference/graphql/latest/types-k-p.md#purchaseorder) | An array of the purchase orders in the request. |

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
| `value` - [`String`](/reference/graphql/latest/types-q-s.md#string) | Validation rule value. |

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
| `is_vault_enabled` - [`Boolean`](/reference/graphql/latest/types-a-b.md#boolean) | Is vault enabled |
| `sdk_params` - [`[SDKParams]`](/reference/graphql/latest/types-q-s.md#sdkparams) | The parameters required to load the Paypal JS SDK |
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
| `payment_source` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The payment services order ID |
| `paypal_order_id` - [`String`](/reference/graphql/latest/types-q-s.md#string) | PayPal order ID |
| `public_hash` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The public hash of the token. |

#### Example

```json
{
  "payment_source": "xyz789",
  "payments_order_id": "abc123",
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
| `payment_source` - [`PaymentSourceInput!`](/reference/graphql/latest/types-k-p.md#paymentsourceinput) | The payment source information |

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
| `public_hash` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | The public hash of the payment token. |

#### Example

```json
{"public_hash": "xyz789"}
```

<HorizontalLine />

### VirtualCartItem

An implementation for virtual product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/latest/types-q-s.md#selectedcustomizableoption) | An array containing customizable options the shopper selected. |
| `discount` - [`[Discount]`](/reference/graphql/latest/types-c-e.md#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](/reference/graphql/latest/types-c-e.md#cartitemerror) | An array of errors encountered while loading the cart item |
| `id` - [`String!`](/reference/graphql/latest/types-q-s.md#string) |  *(Deprecated: Use `uid` instead.)* |
| `is_available` - [`Boolean!`](/reference/graphql/latest/types-a-b.md#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](/reference/graphql/latest/types-q-s.md#string) | Message to display when the product is not available with this selected option. |
| `note_from_buyer` - [`[ItemNote]`](/reference/graphql/latest/types-f-i.md#itemnote) | The buyer's quote line item note. |
| `note_from_seller` - [`[ItemNote]`](/reference/graphql/latest/types-f-i.md#itemnote) | The seller's quote line item note. |
| `prices` - [`CartItemPrices`](/reference/graphql/latest/types-c-e.md#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](/reference/graphql/latest/types-k-p.md#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](/reference/graphql/latest/types-f-i.md#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID for a `CartItemInterface` object. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "id": "xyz789",
  "is_available": false,
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

### VirtualProduct

Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_set_id` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. |
| `categories` - [`[CategoryInterface]`](/reference/graphql/latest/types-c-e.md#categoryinterface) | The categories assigned to a product. |
| `color` - [`Int`](/reference/graphql/latest/types-f-i.md#int) |  *(Deprecated: Use the `custom_attributes` field instead.)* |
| `country_of_manufacture` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The product's country of origin. |
| `created_at` - [`String`](/reference/graphql/latest/types-q-s.md#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](/reference/graphql/latest/types-k-p.md#productinterface) | An array of cross-sell products. |
| `custom_attributesV2` - [`ProductCustomAttributes`](/reference/graphql/latest/types-k-p.md#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](/reference/graphql/latest/types-c-e.md#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_message_available` - [`Boolean!`](/reference/graphql/latest/types-a-b.md#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](/reference/graphql/latest/types-a-b.md#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](/reference/graphql/latest/types-k-p.md#money) | Returns value and currency indicating gift wrapping price for the product. |
| `id` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | The ID number assigned to the product. *(Deprecated: Use the `uid` field instead.)* |
| `image` - [`ProductImage`](/reference/graphql/latest/types-k-p.md#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](/reference/graphql/latest/types-q-s.md#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | A number representing the product's manufacturer. *(Deprecated: Use the `custom_attributes` field instead.)* |
| `max_sale_qty` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](/reference/graphql/latest/types-k-p.md#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](/reference/graphql/latest/types-k-p.md#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use `media_gallery` instead.)* |
| `meta_description` - [`String`](/reference/graphql/latest/types-q-s.md#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](/reference/graphql/latest/types-q-s.md#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](/reference/graphql/latest/types-q-s.md#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_sale_qty` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | Minimum Qty Allowed in Shopping Cart |
| `name` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](/reference/graphql/latest/types-c-e.md#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](/reference/graphql/latest/types-q-s.md#string) | If the product has multiple options, determines where they appear on the product page. |
| `price` - [`ProductPrices`](/reference/graphql/latest/types-k-p.md#productprices) | Indicates the price of an item. *(Deprecated: Use `price_range` for product price information.)* |
| `price_range` - [`PriceRange!`](/reference/graphql/latest/types-k-p.md#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of `TierPrice` objects. |
| `product_links` - [`[ProductLinksInterface]`](/reference/graphql/latest/types-k-p.md#productlinksinterface) | An array of `ProductLinks` objects. |
| `quantity` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | Amount of available stock |
| `rating_summary` - [`Float!`](/reference/graphql/latest/types-f-i.md#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](/reference/graphql/latest/types-f-i.md#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](/reference/graphql/latest/types-k-p.md#productinterface) | An array of related products. |
| `relative_url` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](/reference/graphql/latest/types-f-i.md#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](/reference/graphql/latest/types-k-p.md#productreviews) | The list of products reviews. |
| `short_description` - [`ComplexTextValue`](/reference/graphql/latest/types-c-e.md#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `sku` - [`String`](/reference/graphql/latest/types-q-s.md#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `small_image` - [`ProductImage`](/reference/graphql/latest/types-k-p.md#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | The discounted price of the product. |
| `special_to_date` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](/reference/graphql/latest/types-a-b.md#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](/reference/graphql/latest/types-k-p.md#productstockstatus) | Stock status of the product |
| `swatch_image` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](/reference/graphql/latest/types-k-p.md#productimage) | The relative path to the product's thumbnail image. |
| `tier_price` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](/reference/graphql/latest/types-k-p.md#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use `price_tiers` for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](/reference/graphql/latest/types-q-s.md#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use `__typename` instead.)* |
| `uid` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID for a `ProductInterface` object. |
| `updated_at` - [`String`](/reference/graphql/latest/types-q-s.md#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](/reference/graphql/latest/types-k-p.md#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](/reference/graphql/latest/types-q-s.md#string) |  *(Deprecated: Use product's `canonical_url` or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |

#### Example

```json
{
  "attribute_set_id": 123,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "color": 987,
  "country_of_manufacture": "xyz789",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_message_available": false,
  "gift_wrapping_available": false,
  "gift_wrapping_price": Money,
  "id": 987,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 987,
  "max_sale_qty": 987.65,
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "xyz789",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "min_sale_qty": 987.65,
  "name": "abc123",
  "new_from_date": "abc123",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "options": [CustomizableOptionInterface],
  "options_container": "xyz789",
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 123.45,
  "rating_summary": 123.45,
  "redirect_code": 987,
  "related_products": [ProductInterface],
  "relative_url": "abc123",
  "review_count": 123,
  "reviews": ProductReviews,
  "short_description": ComplexTextValue,
  "sku": "xyz789",
  "small_image": ProductImage,
  "special_from_date": "abc123",
  "special_price": 123.45,
  "special_to_date": "abc123",
  "staged": false,
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "tier_price": 987.65,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "abc123",
  "uid": "4",
  "updated_at": "abc123",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "abc123",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "abc123",
  "websites": [Website]
}
```

<HorizontalLine />

### VirtualProductCartItemInput

Defines a single product to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customizable_options` - [`[CustomizableOptionInput]`](/reference/graphql/latest/types-c-e.md#customizableoptioninput) | An array that defines customizable options for the product. |
| `data` - [`CartItemInput!`](/reference/graphql/latest/types-c-e.md#cartiteminput) | An object containing the `sku`, `quantity`, and other relevant information about the product. |

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
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/latest/types-q-s.md#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](/reference/graphql/latest/types-k-p.md#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](/reference/graphql/latest/types-f-i.md#float) | The amount added. |
| `uid` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID for the requisition list item. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": "4"
}
```

<HorizontalLine />

### VirtualWishlistItem

Contains a virtual product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/latest/types-q-s.md#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The description of the item. |
| `id` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface`](/reference/graphql/latest/types-k-p.md#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](/reference/graphql/latest/types-f-i.md#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
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
| `code` - [`String`](/reference/graphql/latest/types-q-s.md#string) | A code assigned to the website to identify it. *(Deprecated: The field should not be used on the storefront.)* |
| `default_group_id` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The default group ID of the website. *(Deprecated: The field should not be used on the storefront.)* |
| `id` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | The ID number assigned to the website. *(Deprecated: The field should not be used on the storefront.)* |
| `is_default` - [`Boolean`](/reference/graphql/latest/types-a-b.md#boolean) | Indicates whether this is the default website. *(Deprecated: The field should not be used on the storefront.)* |
| `name` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The website name. Websites use this name to identify it easier. *(Deprecated: The field should not be used on the storefront.)* |
| `sort_order` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | The attribute to use for sorting websites. *(Deprecated: The field should not be used on the storefront.)* |

#### Example

```json
{
  "code": "xyz789",
  "default_group_id": "abc123",
  "id": 987,
  "is_default": false,
  "name": "abc123",
  "sort_order": 987
}
```

<HorizontalLine />

### WishListUserInputError

An error encountered while performing operations with WishList.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`WishListUserInputErrorType!`](#wishlistuserinputerrortype) | A wish list-specific error code. |
| `message` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | A localized error message. |

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
| `id` - [`ID`](/reference/graphql/latest/types-f-i.md#id) | The unique ID for a `Wishlist` object. |
| `items` - [`[WishlistItem]`](#wishlistitem) |  *(Deprecated: Use the `items_v2` field instead.)* |
| `items_count` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | The number of items in the wish list. |
| `items_v2` - [`WishlistItems`](#wishlistitems) | An array of items in the customer's wish list. |
| `name` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The name of the wish list. |
| `sharing_code` - [`String`](/reference/graphql/latest/types-q-s.md#string) | An encrypted code that Magento uses to link to the wish list. |
| `updated_at` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The time of the last modification to the wish list. |
| `visibility` - [`WishlistVisibilityEnum!`](#wishlistvisibilityenum) | Indicates whether the wish list is public or private. |

#### Example

```json
{
  "id": "4",
  "items": [WishlistItem],
  "items_count": 123,
  "items_v2": WishlistItems,
  "name": "xyz789",
  "sharing_code": "abc123",
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
| `message` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | A localized error message. |
| `wishlistId` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID of the `Wishlist` object containing an error. |
| `wishlistItemId` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID of the wish list item containing an error. |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "xyz789",
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
| `added_at` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The time when the customer added the item to the wish list. |
| `description` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The customer's comment about this item. |
| `id` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | The unique ID for a `WishlistItem` object. |
| `product` - [`ProductInterface`](/reference/graphql/latest/types-k-p.md#productinterface) | Details about the wish list item. |
| `qty` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | The quantity of this wish list item |

#### Example

```json
{
  "added_at": "xyz789",
  "description": "xyz789",
  "id": 987,
  "product": ProductInterface,
  "qty": 987.65
}
```

<HorizontalLine />

### WishlistItemCopyInput

Specifies the IDs of items to copy and their quantities.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quantity` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | The quantity of this item to copy to the destination wish list. This value can't be greater than the quantity in the source wish list. |
| `wishlist_item_id` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID of the `WishlistItemInterface` object to be copied. |

#### Example

```json
{
  "quantity": 123.45,
  "wishlist_item_id": "4"
}
```

<HorizontalLine />

### WishlistItemInput

Defines the items to add to a wish list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_options` - [`[EnteredOptionInput]`](/reference/graphql/latest/types-c-e.md#enteredoptioninput) | An array of options that the customer entered. |
| `parent_sku` - [`String`](/reference/graphql/latest/types-q-s.md#string) | For complex product types, the SKU of the parent product. |
| `quantity` - [`Float!`](/reference/graphql/latest/types-f-i.md#float) | The amount or number of items to add. |
| `selected_options` - [`[ID]`](/reference/graphql/latest/types-f-i.md#id) | An array of strings corresponding to options the customer selected. |
| `sku` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | The SKU of the product to add. For complex product types, specify the child product SKU. |

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
| `added_at` - [`String!`](/reference/graphql/latest/types-q-s.md#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](/reference/graphql/latest/types-q-s.md#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The description of the item. |
| `id` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID for a `WishlistItemInterface` object. |
| `product` - [`ProductInterface`](/reference/graphql/latest/types-k-p.md#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](/reference/graphql/latest/types-f-i.md#float) | The quantity of this wish list item. |

#### Possible Types

| WishlistItemInterface Types |
|----------------|
| [`SimpleWishlistItem`](/reference/graphql/latest/types-q-s.md#simplewishlistitem) |
| [`VirtualWishlistItem`](#virtualwishlistitem) |
| [`ConfigurableWishlistItem`](/reference/graphql/latest/types-c-e.md#configurablewishlistitem) |
| [`DownloadableWishlistItem`](/reference/graphql/latest/types-c-e.md#downloadablewishlistitem) |
| [`BundleWishlistItem`](/reference/graphql/latest/types-a-b.md#bundlewishlistitem) |
| [`GiftCardWishlistItem`](/reference/graphql/latest/types-f-i.md#giftcardwishlistitem) |
| [`GroupedProductWishlistItem`](/reference/graphql/latest/types-f-i.md#groupedproductwishlistitem) |

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

### WishlistItemMoveInput

Specifies the IDs of the items to move and their quantities.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quantity` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | The quantity of this item to move to the destination wish list. This value can't be greater than the quantity in the source wish list. |
| `wishlist_item_id` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID of the `WishlistItemInterface` object to be moved. |

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
| `description` - [`String`](/reference/graphql/latest/types-q-s.md#string) | Customer-entered comments about the item. |
| `entered_options` - [`[EnteredOptionInput]`](/reference/graphql/latest/types-c-e.md#enteredoptioninput) | An array of options that the customer entered. |
| `quantity` - [`Float`](/reference/graphql/latest/types-f-i.md#float) | The new amount or number of this item. |
| `selected_options` - [`[ID]`](/reference/graphql/latest/types-f-i.md#id) | An array of strings corresponding to options the customer selected. |
| `wishlist_item_id` - [`ID!`](/reference/graphql/latest/types-f-i.md#id) | The unique ID for a `WishlistItemInterface` object. |

#### Example

```json
{
  "description": "abc123",
  "entered_options": [EnteredOptionInput],
  "quantity": 123.45,
  "selected_options": [4],
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
| `page_info` - [`SearchResultPageInfo`](/reference/graphql/latest/types-q-s.md#searchresultpageinfo) | Contains pagination metadata. |

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
| `items` - [`[WishlistItem]`](#wishlistitem) | An array of items in the customer's wish list *(Deprecated: Use the `Wishlist.items` field instead.)* |
| `items_count` - [`Int`](/reference/graphql/latest/types-f-i.md#int) | The number of items in the wish list. *(Deprecated: Use the `Wishlist.items_count` field instead.)* |
| `name` - [`String`](/reference/graphql/latest/types-q-s.md#string) | When multiple wish lists are enabled, the name the customer assigns to the wishlist. *(Deprecated: This field is related to Commerce functionality and is always `null` in Open Source.)* |
| `sharing_code` - [`String`](/reference/graphql/latest/types-q-s.md#string) | An encrypted code that links to the wish list. *(Deprecated: Use the `Wishlist.sharing_code` field instead.)* |
| `updated_at` - [`String`](/reference/graphql/latest/types-q-s.md#string) | The time of the last modification to the wish list. *(Deprecated: Use the `Wishlist.updated_at` field instead.)* |

#### Example

```json
{
  "items": [WishlistItem],
  "items_count": 987,
  "name": "xyz789",
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
