### CustomOperatorInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `type` - [`CustomOperatorType`](#customoperatortype) |  |
| `value` - [`[String]`](#string) |  |

#### Example

```json
{
  "type": "UNKNOWN_CUSTOMOPERATOR_TYPE",
  "value": ["abc123"]
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
| `addresses` - [`[CustomerAddress]`](#customeraddress) | An array containing the customer&#x27;s shipping and billing addresses. |
| `addressesV2` - [`CustomerAddresses`](#customeraddresses) | An array containing the customer&#x27;s shipping and billing addresses. |
| `allow_remote_shopping_assistance` - [`Boolean!`](#boolean) | Indicates whether the customer has enabled remote shopping assistance. |
| `companies` - [`UserCompaniesOutput!`](#usercompaniesoutput) | An object that contains a list of companies user is assigned to. |
| `compare_list` - [`CompareList`](#comparelist) | The contents of the customer&#x27;s compare list. |
| `confirmation_status` - [`ConfirmationStatusEnum!`](#confirmationstatusenum) | The customer&#x27;s confirmation status. |
| `created_at` - [`String`](#string) | Timestamp indicating when the account was created. |
| `custom_attributes` - [`[AttributeValueInterface]`](#attributevalueinterface) | Customer&#x27;s custom attributes. |
| `date_of_birth` - [`String`](#string) | The customer&#x27;s date of birth. |
| `default_billing` - [`String`](#string) | The ID assigned to the billing address. |
| `default_shipping` - [`String`](#string) | The ID assigned to the shipping address. |
| `email` - [`String`](#string) | The customer&#x27;s email address. Required. |
| `firstname` - [`String`](#string) | The customer&#x27;s first name. |
| `gender` - [`Int`](#int) | The customer&#x27;s gender (Male - 1, Female - 2). |
| `gift_registries` - [`[GiftRegistry]`](#giftregistry) | Details about all of the customer&#x27;s gift registries. |
| `gift_registry` - [`GiftRegistry`](#giftregistry) | Details about a specific gift registry. |
| `group` - [`CustomerGroupStorefront`](#customergroupstorefront) | Customer group assigned to the customer |
| `id` - [`ID!`](#id) | The unique ID assigned to the customer. *(Deprecated: &#x60;id&#x60; is not needed as part of &#x60;Customer&#x60;, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.)* |
| `is_subscribed` - [`Boolean`](#boolean) | Indicates whether the customer is subscribed to the company&#x27;s newsletter. |
| `job_title` - [`String`](#string) | The job title of a company user. |
| `lastname` - [`String`](#string) | The customer&#x27;s family name. |
| `middlename` - [`String`](#string) | The customer&#x27;s middle name. |
| `orders` - [`CustomerOrders`](#customerorders) |  |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `purchase_order` - [`PurchaseOrder`](#purchaseorder) | Purchase order details. |
| `purchase_order_approval_rule` - [`PurchaseOrderApprovalRule`](#purchaseorderapprovalrule) | Details about a single purchase order approval rule. |
| `purchase_order_approval_rule_metadata` - [`PurchaseOrderApprovalRuleMetadata`](#purchaseorderapprovalrulemetadata) | Purchase order approval rule metadata that can be used for rule edit form rendering. |
| `purchase_order_approval_rules` - [`PurchaseOrderApprovalRules`](#purchaseorderapprovalrules) | A list of purchase order approval rules visible to the customer. |
| `purchase_orders` - [`PurchaseOrders`](#purchaseorders) | A list of purchase orders visible to the customer. |
| `purchase_orders_enabled` - [`Boolean!`](#boolean) | Indicates whether purchase order functionality is enabled for the current customer. Global and company-level settings are factored into the result. |
| `quote_enabled` - [`Boolean!`](#boolean) | Indicates whether negotiable quote functionality is enabled for the current customer. Global and company-level settings are factored into the result. |
| `requisition_lists` - [`RequisitionLists`](#requisitionlists) | An object that contains the customer&#x27;s requisition lists. |
| `return` - [`Return`](#return) | Details about the specified return request from the unique ID for a &#x60;Return&#x60; object. |
| `returns` - [`Returns`](#returns) | Information about the customer&#x27;s return requests. |
| `reward_points` - [`RewardPoints`](#rewardpoints) | Customer reward points details. |
| `role` - [`CompanyRole`](#companyrole) | The role name and permissions assigned to the company user. |
| `segments` - [`[CustomerSegmentStorefront]`](#customersegmentstorefront) | Customer segments associated with the current customer |
| `status` - [`CompanyUserStatusEnum`](#companyuserstatusenum) | Indicates whether the company user is ACTIVE or INACTIVE. |
| `store_credit` - [`CustomerStoreCredit`](#customerstorecredit) | Store credit information applied for the logged in customer. |
| `structure_id` - [`ID!`](#id) | ID of the company structure |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](#string) | The customer&#x27;s Value-added tax (VAT) number (for corporate customers). |
| `team` - [`CompanyTeam`](#companyteam) | The team the company user is assigned to. |
| `telephone` - [`String`](#string) | The phone number of the company user. |
| `wishlist_v2` - [`Wishlist`](#wishlist) | Retrieve the wish list identified by the unique ID for a &#x60;Wishlist&#x60; object. |
| `wishlists` - [`[Wishlist]!`](#wishlist) | An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. |

#### Example

```json
{
  "addresses": [CustomerAddress],
  "addressesV2": CustomerAddresses,
  "allow_remote_shopping_assistance": true,
  "companies": UserCompaniesOutput,
  "compare_list": CompareList,
  "confirmation_status": "ACCOUNT_CONFIRMED",
  "created_at": "xyz789",
  "custom_attributes": [AttributeValueInterface],
  "date_of_birth": "xyz789",
  "default_billing": "xyz789",
  "default_shipping": "abc123",
  "email": "xyz789",
  "firstname": "xyz789",
  "gender": 987,
  "gift_registries": [GiftRegistry],
  "gift_registry": GiftRegistry,
  "group": CustomerGroupStorefront,
  "id": "4",
  "is_subscribed": true,
  "job_title": "xyz789",
  "lastname": "xyz789",
  "middlename": "xyz789",
  "orders": CustomerOrders,
  "prefix": "xyz789",
  "purchase_order": PurchaseOrder,
  "purchase_order_approval_rule": PurchaseOrderApprovalRule,
  "purchase_order_approval_rule_metadata": PurchaseOrderApprovalRuleMetadata,
  "purchase_order_approval_rules": PurchaseOrderApprovalRules,
  "purchase_orders": PurchaseOrders,
  "purchase_orders_enabled": false,
  "quote_enabled": false,
  "requisition_lists": RequisitionLists,
  "return": Return,
  "returns": Returns,
  "reward_points": RewardPoints,
  "role": CompanyRole,
  "segments": [CustomerSegmentStorefront],
  "status": "ACTIVE",
  "store_credit": CustomerStoreCredit,
  "structure_id": 4,
  "suffix": "xyz789",
  "taxvat": "abc123",
  "team": CompanyTeam,
  "telephone": "abc123",
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
| `city` - [`String`](#string) | The customer&#x27;s city or town. |
| `company` - [`String`](#string) | The customer&#x27;s company. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The customer&#x27;s country. |
| `custom_attributesV2` - [`[AttributeValueInterface]!`](#attributevalueinterface) | Custom attributes assigned to the customer address. |
| `default_billing` - [`Boolean`](#boolean) | Indicates whether the address is the customer&#x27;s default billing address. |
| `default_shipping` - [`Boolean`](#boolean) | Indicates whether the address is the customer&#x27;s default shipping address. |
| `extension_attributes` - [`[CustomerAddressAttribute]`](#customeraddressattribute) | Contains any extension attributes for the address. |
| `fax` - [`String`](#string) | The customer&#x27;s fax number. |
| `firstname` - [`String`](#string) | The first name of the person associated with the shipping/billing address. |
| `id` - [`Int`](#int) | The ID of a &#x60;CustomerAddress&#x60; object. *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `lastname` - [`String`](#string) | The family name of the person associated with the shipping/billing address. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the shipping/billing address. |
| `postcode` - [`String`](#string) | The customer&#x27;s ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CustomerAddressRegion`](#customeraddressregion) | An object containing the region name, region code, and region ID. |
| `region_id` - [`Int`](#int) | The unique ID for a pre-defined region. |
| `street` - [`[String]`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |
| `uid` - [`ID`](#id) | The unique ID for a &#x60;CustomerAddress&#x60; object. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Value-added tax (VAT) number (for corporate customers). |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country_code": "AF",
  "custom_attributesV2": [AttributeValueInterface],
  "default_billing": false,
  "default_shipping": true,
  "extension_attributes": [CustomerAddressAttribute],
  "fax": "xyz789",
  "firstname": "xyz789",
  "id": 987,
  "lastname": "abc123",
  "middlename": "xyz789",
  "postcode": "abc123",
  "prefix": "xyz789",
  "region": CustomerAddressRegion,
  "region_id": 987,
  "street": ["xyz789"],
  "suffix": "abc123",
  "telephone": "abc123",
  "uid": 4,
  "vat_id": "xyz789"
}
```

<HorizontalLine />

### CustomerAddressAttribute

Specifies the attribute code and value of a customer address attribute.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute_code` - [`String`](#string) | The name assigned to the customer address attribute. |
| `value` - [`String`](#string) | The value assigned to the customer address attribute. |

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
| `city` - [`String`](#string) | The customer&#x27;s city or town. |
| `company` - [`String`](#string) | The customer&#x27;s company. |
| `country_code` - [`CountryCodeEnum`](#countrycodeenum) | The two-letter code representing the customer&#x27;s country. |
| `custom_attributesV2` - [`[AttributeValueInput]`](#attributevalueinput) | Custom attributes assigned to the customer address. |
| `default_billing` - [`Boolean`](#boolean) | Indicates whether the address is the default billing address. |
| `default_shipping` - [`Boolean`](#boolean) | Indicates whether the address is the default shipping address. |
| `fax` - [`String`](#string) | The customer&#x27;s fax number. |
| `firstname` - [`String`](#string) | The first name of the person associated with the billing/shipping address. |
| `lastname` - [`String`](#string) | The family name of the person associated with the billing/shipping address. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The customer&#x27;s ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`CustomerAddressRegionInput`](#customeraddressregioninput) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "xyz789",
  "country_code": "AF",
  "custom_attributesV2": [AttributeValueInput],
  "default_billing": false,
  "default_shipping": true,
  "fax": "xyz789",
  "firstname": "abc123",
  "lastname": "xyz789",
  "middlename": "xyz789",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": CustomerAddressRegionInput,
  "street": ["abc123"],
  "suffix": "abc123",
  "telephone": "xyz789",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### CustomerAddressRegion

Defines the customer's state or province.

#### Fields

| Field Name | Description |
|------------|-------------|
| `region` - [`String`](#string) | The state or province name. |
| `region_code` - [`String`](#string) | The address region code. |
| `region_id` - [`Int`](#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "region": "xyz789",
  "region_code": "xyz789",
  "region_id": 123
}
```

<HorizontalLine />

### CustomerAddressRegionInput

Defines the customer's state or province.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `region` - [`String`](#string) | The state or province name. |
| `region_code` - [`String`](#string) | The address region code. |
| `region_id` - [`Int`](#int) | The unique ID for a pre-defined region. |

#### Example

```json
{
  "region": "xyz789",
  "region_code": "xyz789",
  "region_id": 987
}
```

<HorizontalLine />

### CustomerAddresses

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[CustomerAddress]`](#customeraddress) | An array containing the customer&#x27;s shipping and billing addresses. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Contains pagination metadata. |
| `total_count` - [`Int`](#int) | The total count of customer addresses. |

#### Example

```json
{
  "items": [CustomerAddress],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### CustomerAttributeMetadata

Customer attribute metadata.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`ID!`](#id) | The unique identifier for an attribute code. This value should be in lowercase letters without spaces. |
| `default_value` - [`String`](#string) | Default attribute value. |
| `entity_type` - [`AttributeEntityTypeEnum!`](#attributeentitytypeenum) | The type of entity that defines the attribute. |
| `frontend_class` - [`String`](#string) | The frontend class of the attribute. |
| `frontend_input` - [`AttributeFrontendInputEnum`](#attributefrontendinputenum) | The frontend input type of the attribute. |
| `input_filter` - [`InputFilterEnum`](#inputfilterenum) | The template used for the input of the attribute (e.g., &#x27;date&#x27;). |
| `is_required` - [`Boolean!`](#boolean) | Whether the attribute value is required. |
| `is_unique` - [`Boolean!`](#boolean) | Whether the attribute value must be unique. |
| `label` - [`String`](#string) | The label assigned to the attribute. |
| `multiline_count` - [`Int`](#int) | The number of lines of the attribute value. |
| `options` - [`[CustomAttributeOptionInterface]!`](#customattributeoptioninterface) | Attribute options. |
| `sort_order` - [`Int`](#int) | The position of the attribute in the form. |
| `validate_rules` - [`[ValidationRule]`](#validationrule) | The validation rules of the attribute value. |

#### Example

```json
{
  "code": 4,
  "default_value": "xyz789",
  "entity_type": "CATALOG_PRODUCT",
  "frontend_class": "abc123",
  "frontend_input": "BOOLEAN",
  "input_filter": "NONE",
  "is_required": true,
  "is_unique": false,
  "label": "xyz789",
  "multiline_count": 987,
  "options": [CustomAttributeOptionInterface],
  "sort_order": 987,
  "validate_rules": [ValidationRule]
}
```

<HorizontalLine />

### CustomerCreateInput

An input object for creating a customer.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `allow_remote_shopping_assistance` - [`Boolean`](#boolean) | Indicates whether the customer has enabled remote shopping assistance. |
| `custom_attributes` - [`[AttributeValueInput]`](#attributevalueinput) | The customer&#x27;s custom attributes. |
| `date_of_birth` - [`String`](#string) | The customer&#x27;s date of birth. |
| `email` - [`String!`](#string) | The customer&#x27;s email address. |
| `firstname` - [`String!`](#string) | The customer&#x27;s first name. |
| `gender` - [`Int`](#int) | The customer&#x27;s gender (Male - 1, Female - 2). |
| `is_subscribed` - [`Boolean`](#boolean) | Indicates whether the customer is subscribed to the company&#x27;s newsletter. |
| `lastname` - [`String!`](#string) | The customer&#x27;s family name. |
| `middlename` - [`String`](#string) | The customer&#x27;s middle name. |
| `password` - [`String`](#string) | The customer&#x27;s password. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "allow_remote_shopping_assistance": true,
  "custom_attributes": [AttributeValueInput],
  "date_of_birth": "abc123",
  "email": "xyz789",
  "firstname": "abc123",
  "gender": 987,
  "is_subscribed": true,
  "lastname": "xyz789",
  "middlename": "xyz789",
  "password": "xyz789",
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
| `date` - [`String`](#string) | The date and time the purchase was made. |
| `download_url` - [`String`](#string) | The fully qualified URL to the download file. |
| `order_increment_id` - [`String`](#string) | The unique ID assigned to the item. |
| `remaining_downloads` - [`String`](#string) | The remaining number of times the customer can download the product. |
| `status` - [`String`](#string) | Indicates when the product becomes available for download. Options are &#x60;Pending&#x60; and &#x60;Invoiced&#x60;. |

#### Example

```json
{
  "date": "xyz789",
  "download_url": "xyz789",
  "order_increment_id": "xyz789",
  "remaining_downloads": "xyz789",
  "status": "abc123"
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
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomerGroup&#x60; object. |

#### Example

```json
{"uid": "4"}
```

<HorizontalLine />

### CustomerOrder

Contains details about each of the customer's orders.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applied_coupons` - [`[AppliedCoupon]!`](#appliedcoupon) | Coupons applied to the order. |
| `applied_gift_cards` - [`[ApplyGiftCardToOrder]`](#applygiftcardtoorder) | An array of gift cards applied to the order. |
| `available_actions` - [`[OrderActionType]!`](#orderactiontype) | List of available order actions. |
| `billing_address` - [`OrderAddress`](#orderaddress) | The billing address for the order. |
| `carrier` - [`String`](#string) | The shipping carrier for the order delivery. |
| `comments` - [`[SalesCommentItem]`](#salescommentitem) | Comments about the order. |
| `credit_memos` - [`[CreditMemo]`](#creditmemo) | A list of credit memos. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the order |
| `customer_info` - [`OrderCustomerInfo!`](#ordercustomerinfo) | Returns customer information from order. |
| `email` - [`String`](#string) | Order customer email. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message for the order |
| `gift_receipt_included` - [`Boolean!`](#boolean) | Indicates whether the customer requested a gift receipt for the order. |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CustomerOrder&#x60; object. |
| `invoices` - [`[Invoice]!`](#invoice) | A list of invoices for the order. |
| `is_virtual` - [`Boolean!`](#boolean) | &#x60;TRUE&#x60; if the order is virtual |
| `items` - [`[OrderItemInterface]`](#orderiteminterface) | An array containing the items purchased in this order. |
| `items_eligible_for_return` - [`[OrderItemInterface]`](#orderiteminterface) | A list of order items eligible to be in a return request. |
| `negotiable_quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote associated with this order. |
| `number` - [`String!`](#string) | The order number. |
| `order_date` - [`String!`](#string) | The date the order was placed. |
| `order_status_change_date` - [`String!`](#string) | The date the order status was last updated. |
| `payment_methods` - [`[OrderPaymentMethod]`](#orderpaymentmethod) | Payment details for the order. |
| `printed_card_included` - [`Boolean!`](#boolean) | Indicates whether the customer requested a printed card for the order. |
| `returns` - [`Returns`](#returns) | Return requests associated with this order. |
| `shipments` - [`[OrderShipment]`](#ordershipment) | A list of shipments for the order. |
| `shipping_address` - [`OrderAddress`](#orderaddress) | The shipping address for the order. |
| `shipping_method` - [`String`](#string) | The delivery method for the order. |
| `status` - [`String!`](#string) | The current status of the order. |
| `token` - [`String!`](#string) | The token that can be used to retrieve the order using order query. |
| `total` - [`OrderTotal`](#ordertotal) | Details about the calculated totals for this order. |

#### Example

```json
{
  "applied_coupons": [AppliedCoupon],
  "applied_gift_cards": [ApplyGiftCardToOrder],
  "available_actions": ["REORDER"],
  "billing_address": OrderAddress,
  "carrier": "abc123",
  "comments": [SalesCommentItem],
  "credit_memos": [CreditMemo],
  "custom_attributes": [CustomAttribute],
  "customer_info": OrderCustomerInfo,
  "email": "xyz789",
  "gift_message": GiftMessage,
  "gift_receipt_included": false,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "invoices": [Invoice],
  "is_virtual": false,
  "items": [OrderItemInterface],
  "items_eligible_for_return": [OrderItemInterface],
  "negotiable_quote": NegotiableQuote,
  "number": "abc123",
  "order_date": "xyz789",
  "order_status_change_date": "abc123",
  "payment_methods": [OrderPaymentMethod],
  "printed_card_included": true,
  "returns": Returns,
  "shipments": [OrderShipment],
  "shipping_address": OrderAddress,
  "shipping_method": "abc123",
  "status": "xyz789",
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
| `sort_direction` - [`SortEnum!`](#sortenum) | This enumeration indicates whether to return results in ascending or descending order |
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
| `date_of_first_order` - [`String`](#string) | Date of the first order placed in the store |
| `items` - [`[CustomerOrder]!`](#customerorder) | An array of customer orders. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Contains pagination metadata. |
| `total_count` - [`Int`](#int) | The total count of customer orders. |

#### Example

```json
{
  "date_of_first_order": "abc123",
  "items": [CustomerOrder],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### CustomerOrdersFilterInput

Identifies the filter to use for filtering orders.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `grand_total` - [`FilterRangeTypeInput`](#filterrangetypeinput) | Filters by order base grand total value. |
| `number` - [`FilterStringTypeInput`](#filterstringtypeinput) | Filters by order number. |
| `order_date` - [`FilterRangeTypeInput`](#filterrangetypeinput) | Filters by order created_at time. |
| `status` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filters by order status. |

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
| `items` - [`[PaymentToken]!`](#paymenttoken) | An array of payment tokens. |

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
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomerSegment&#x60; object. |

#### Example

```json
{"uid": 4}
```

<HorizontalLine />

### CustomerStoreCredit

Contains store credit information with balance and history.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance_history` - [`CustomerStoreCreditHistory`](#customerstorecredithistory) | Contains the customer&#x27;s store credit balance history. If the history or store credit feature is disabled, then a null value will be returned. |
| `current_balance` - [`Money`](#money) | The current balance of store credit. |
| `enabled` - [`Boolean`](#boolean) | Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned. |

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
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Metadata for pagination rendering. |
| `total_count` - [`Int`](#int) | The number of items returned. |

#### Example

```json
{
  "items": [CustomerStoreCreditHistoryItem],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### CustomerStoreCreditHistoryItem

Contains store credit history information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `action` - [`String`](#string) | The action that was made on the store credit. |
| `actual_balance` - [`Money`](#money) | The store credit available to the customer as a result of this action. |
| `balance_change` - [`Money`](#money) | The amount added to or subtracted from the store credit as a result of this action. |
| `date_time_changed` - [`String`](#string) | The date and time when the store credit change was made. |

#### Example

```json
{
  "action": "abc123",
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
| `token` - [`String`](#string) | The customer authorization token. |

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
| `allow_remote_shopping_assistance` - [`Boolean`](#boolean) | Indicates whether the customer has enabled remote shopping assistance. |
| `custom_attributes` - [`[AttributeValueInput]`](#attributevalueinput) | The customer&#x27;s custom attributes. |
| `date_of_birth` - [`String`](#string) | The customer&#x27;s date of birth. |
| `firstname` - [`String`](#string) | The customer&#x27;s first name. |
| `gender` - [`Int`](#int) | The customer&#x27;s gender (Male - 1, Female - 2). |
| `is_subscribed` - [`Boolean`](#boolean) | Indicates whether the customer is subscribed to the company&#x27;s newsletter. |
| `lastname` - [`String`](#string) | The customer&#x27;s family name. |
| `middlename` - [`String`](#string) | The customer&#x27;s middle name. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `taxvat` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "allow_remote_shopping_assistance": false,
  "custom_attributes": [AttributeValueInput],
  "date_of_birth": "xyz789",
  "firstname": "xyz789",
  "gender": 123,
  "is_subscribed": false,
  "lastname": "abc123",
  "middlename": "abc123",
  "prefix": "xyz789",
  "suffix": "abc123",
  "taxvat": "abc123"
}
```

<HorizontalLine />

### CustomizableAreaOption

Contains information about a text area that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `product_sku` - [`String`](#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`CustomizableAreaValue`](#customizableareavalue) | An object that defines a text area. |

#### Example

```json
{
  "product_sku": "abc123",
  "required": false,
  "sort_order": 987,
  "title": "abc123",
  "uid": "4",
  "value": CustomizableAreaValue
}
```

<HorizontalLine />

### CustomizableAreaValue

Defines the price and sku of a product whose page contains a customized text area.

#### Fields

| Field Name | Description |
|------------|-------------|
| `max_characters` - [`Int`](#int) | The maximum number of characters that can be entered for this customizable option. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableAreaValue&#x60; object. |

#### Example

```json
{
  "max_characters": 123,
  "price": 987.65,
  "price_type": "FIXED",
  "sku": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### CustomizableCheckboxOption

Contains information about a set of checkbox values that are defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableCheckboxValue]`](#customizablecheckboxvalue) | An array that defines a set of checkbox values. |

#### Example

```json
{
  "required": true,
  "sort_order": 123,
  "title": "abc123",
  "uid": "4",
  "value": [CustomizableCheckboxValue]
}
```

<HorizontalLine />

### CustomizableCheckboxValue

Defines the price and sku of a product whose page contains a customized set of checkbox values.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](#int) | The ID assigned to the value. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](#int) | The order in which the checkbox value is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableCheckboxValue&#x60; object. |

#### Example

```json
{
  "option_type_id": 123,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "xyz789",
  "sort_order": 987,
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
| `product_sku` - [`String`](#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`CustomizableDateValue`](#customizabledatevalue) | An object that defines a date field in a customizable option. |

#### Example

```json
{
  "product_sku": "xyz789",
  "required": true,
  "sort_order": 123,
  "title": "abc123",
  "uid": 4,
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
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `type` - [`CustomizableDateTypeEnum`](#customizabledatetypeenum) | DATE, DATE_TIME or TIME |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableDateValue&#x60; object. |

#### Example

```json
{
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "abc123",
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
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableDropDownValue]`](#customizabledropdownvalue) | An array that defines the set of options for a drop down menu. |

#### Example

```json
{
  "required": true,
  "sort_order": 987,
  "title": "xyz789",
  "uid": "4",
  "value": [CustomizableDropDownValue]
}
```

<HorizontalLine />

### CustomizableDropDownValue

Defines the price and sku of a product whose page contains a customized drop down menu.

#### Fields

| Field Name | Description |
|------------|-------------|
| `option_type_id` - [`Int`](#int) | The ID assigned to the value. |
| `price` - [`Float`](#float) | The price assigned to this option. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableDropDownValue&#x60; object. |

#### Example

```json
{
  "option_type_id": 123,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "abc123",
  "sort_order": 987,
  "title": "abc123",
  "uid": "4"
}
```

<HorizontalLine />

### CustomizableFieldOption

Contains information about a text field that is defined as part of a customizable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `product_sku` - [`String`](#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`CustomizableFieldValue`](#customizablefieldvalue) | An object that defines a text field. |

#### Example

```json
{
  "product_sku": "abc123",
  "required": false,
  "sort_order": 123,
  "title": "xyz789",
  "uid": "4",
  "value": CustomizableFieldValue
}
```

<HorizontalLine />

### CustomizableFieldValue

Defines the price and sku of a product whose page contains a customized text field.

#### Fields

| Field Name | Description |
|------------|-------------|
| `max_characters` - [`Int`](#int) | The maximum number of characters that can be entered for this customizable option. |
| `price` - [`Float`](#float) | The price of the custom value. |
| `price_type` - [`PriceTypeEnum`](#pricetypeenum) | FIXED, PERCENT, or DYNAMIC. |
| `sku` - [`String`](#string) | The Stock Keeping Unit for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableFieldValue&#x60; object. |

#### Example

```json
{
  "max_characters": 987,
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
| `product_sku` - [`String`](#string) | The Stock Keeping Unit of the base product. |
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`CustomizableFileValue`](#customizablefilevalue) | An object that defines a file value. |

#### Example

```json
{
  "product_sku": "xyz789",
  "required": true,
  "sort_order": 123,
  "title": "xyz789",
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
  "file_extension": "abc123",
  "image_size_x": 987,
  "image_size_y": 123,
  "price": 123.45,
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
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableMultipleValue]`](#customizablemultiplevalue) | An array that defines the set of options for a multiselect. |

#### Example

```json
{
  "required": true,
  "sort_order": 987,
  "title": "xyz789",
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
| `uid` - [`ID`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |
| `value_string` - [`String!`](#string) | The string value of the option. |

#### Example

```json
{
  "uid": "4",
  "value_string": "abc123"
}
```

<HorizontalLine />

### CustomizableOptionInterface

Contains basic information about a customizable option. It can be implemented by several types of configurable options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |

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
  "required": false,
  "sort_order": 123,
  "title": "xyz789",
  "uid": 4
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
| [`BundleProduct`](#bundleproduct) |
| [`ConfigurableProduct`](#configurableproduct) |
| [`DownloadableProduct`](#downloadableproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`SimpleProduct`](#simpleproduct) |
| [`VirtualProduct`](#virtualproduct) |

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
| `required` - [`Boolean`](#boolean) | Indicates whether the option is required. |
| `sort_order` - [`Int`](#int) | The order in which the option is displayed. |
| `title` - [`String`](#string) | The display name for this option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object. |
| `value` - [`[CustomizableRadioValue]`](#customizableradiovalue) | An array that defines a set of radio buttons. |

#### Example

```json
{
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
  "option_type_id": 987,
  "price": 123.45,
  "price_type": "FIXED",
  "sku": "abc123",
  "sort_order": 123,
  "title": "abc123",
  "uid": "4"
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
{"success": false}
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

### DeleteNegotiableQuoteTemplateInput

Specifies the quote template id of the quote template to delete

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{"template_id": "4"}
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
{"requisition_lists": RequisitionLists, "status": true}
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

Specifies the discount type and value for quote line item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount of the discount. |
| `applied_to` - [`CartDiscountType!`](#cartdiscounttype) | The type of the entity the discount is applied to. |
| `coupon` - [`AppliedCoupon`](#appliedcoupon) | The coupon related to the discount. |
| `is_discounting_locked` - [`Boolean`](#boolean) | Is quote discounting locked for line item. |
| `label` - [`String!`](#string) | A description of the discount. |
| `type` - [`String`](#string) | Quote line item discount type. Values: 1 &#x3D; PERCENTAGE_DISCOUNT; 2 &#x3D; AMOUNT_DISCOUNT; 3 &#x3D; PROPOSED_TOTAL. |
| `value` - [`Float`](#float) | Quote line item discount value. |

#### Example

```json
{
  "amount": Money,
  "applied_to": "ITEM",
  "coupon": AppliedCoupon,
  "is_discounting_locked": false,
  "label": "abc123",
  "type": "xyz789",
  "value": 987.65
}
```

<HorizontalLine />

### DownloadableCartItem

An implementation for downloadable product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the cart item |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the links for the downloadable product added to the cart. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](#string) | Message to display when the product is not available with this selected option. |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer&#x27;s quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller&#x27;s quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about samples of the selected downloadable product. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "is_available": true,
  "links": [DownloadableProductLinks],
  "max_qty": 987.65,
  "min_qty": 123.45,
  "not_available_message": "abc123",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "samples": [DownloadableProductSamples],
  "uid": 4
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
| `id` - [`ID!`](#id) | The unique ID for a &#x60;CreditMemoItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item the credit memo is applied to. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_refunded": 987.65
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
| `id` - [`ID!`](#id) | The unique ID for an &#x60;InvoiceItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | Details about an individual order item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "id": 4,
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
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the order item |
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `downloadable_links` - [`[DownloadableItemsLinks]`](#downloadableitemslinks) | A list of downloadable links that are ordered from the downloadable product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
| `prices` - [`OrderItemPrices`](#orderitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface`](#productinterface) | The ProductInterface object, which contains details about the base product *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `product_type` - [`String`](#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |
| `quantity_return_requested` - [`Float`](#float) | The requested return quantity of the item. |
| `quantity_returned` - [`Float`](#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](#string) | The status of the order item. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "downloadable_links": [DownloadableItemsLinks],
  "eligible_for_return": false,
  "entered_options": [OrderItemOption],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "abc123",
  "product_url_key": "xyz789",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 123.45,
  "quantity_ordered": 987.65,
  "quantity_refunded": 987.65,
  "quantity_return_requested": 123.45,
  "quantity_returned": 987.65,
  "quantity_shipped": 987.65,
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
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `downloadable_product_links` - [`[DownloadableProductLinks]`](#downloadableproductlinks) | An array containing information about the links for this downloadable product. |
| `downloadable_product_samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about samples of this downloadable product. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `links_purchased_separately` - [`Int`](#int) | A value of 1 indicates that each link in the array must be purchased separately. |
| `links_title` - [`String`](#string) | The heading above the list of downloadable products. |
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
  "country_of_manufacture": "xyz789",
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
  "gift_wrapping_available": true,
  "gift_wrapping_price": Money,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "links_purchased_separately": 987,
  "links_title": "abc123",
  "manufacturer": 123,
  "max_sale_qty": 987.65,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "xyz789",
  "meta_keyword": "abc123",
  "meta_title": "xyz789",
  "min_sale_qty": 123.45,
  "name": "abc123",
  "new_from_date": "abc123",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 123.45,
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
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "uid": "4",
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
| `price` - [`Float`](#float) | The price of the downloadable product. |
| `sample_url` - [`String`](#string) | The full URL to the downloadable sample. |
| `sort_order` - [`Int`](#int) | A number indicating the sort order. |
| `title` - [`String`](#string) | The display name of the link. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;DownloadableProductLinks&#x60; object. |

#### Example

```json
{
  "price": 987.65,
  "sample_url": "xyz789",
  "sort_order": 123,
  "title": "xyz789",
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
{"link_id": 123}
```

<HorizontalLine />

### DownloadableProductSamples

Defines characteristics of a downloadable product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `sample_url` - [`String`](#string) | The full URL to the downloadable sample. |
| `sort_order` - [`Int`](#int) | A number indicating the sort order. |
| `title` - [`String`](#string) | The display name of the sample. |

#### Example

```json
{
  "sample_url": "xyz789",
  "sort_order": 987,
  "title": "xyz789"
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
| `sku` - [`String!`](#string) | The product SKU. |
| `uid` - [`ID!`](#id) | The unique ID of an item in a requisition list. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "links": [DownloadableProductLinks],
  "product": ProductInterface,
  "quantity": 123.45,
  "samples": [DownloadableProductSamples],
  "sku": "abc123",
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
| `product` - [`ProductInterface!`](#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |
| `samples` - [`[DownloadableProductSamples]`](#downloadableproductsamples) | An array containing information about the selected samples. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": 4,
  "links_v2": [DownloadableProductLinks],
  "product": ProductInterface,
  "quantity": 987.65,
  "samples": [DownloadableProductSamples]
}
```

<HorizontalLine />

### DuplicateNegotiableQuoteInput

Identifies a quote to be duplicated

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `duplicated_quote_uid` - [`ID!`](#id) | ID for the newly duplicated quote. |
| `quote_uid` - [`ID!`](#id) | ID of the quote to be duplicated. |

#### Example

```json
{
  "duplicated_quote_uid": 4,
  "quote_uid": "4"
}
```

<HorizontalLine />

### DuplicateNegotiableQuoteOutput

Contains the newly created negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | Negotiable Quote resulting from duplication operation. |

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
| `attribute_code` - [`String!`](#string) | A string that identifies the entered custom attribute. |
| `value` - [`String!`](#string) | The text or other entered value. |

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
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CustomizableOptionInterface&#x60; object, such as a &#x60;CustomizableFieldOption&#x60;, &#x60;CustomizableFileOption&#x60;, or &#x60;CustomizableAreaOption&#x60; object. |
| `value` - [`String!`](#string) | Text the customer entered. |

#### Example

```json
{"uid": 4, "value": "xyz789"}
```

<HorizontalLine />

### Error

An error encountered while adding an item to the the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`CartUserInputErrorType!`](#cartuserinputerrortype) | A cart-specific error code. |
| `message` - [`String!`](#string) | A localized error message. |

#### Possible Types

| Error Types |
|----------------|
| [`CartUserInputError`](#cartuserinputerror) |
| [`InsufficientStockError`](#insufficientstockerror) |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "abc123"
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
| [`InternalError`](#internalerror) |
| [`NegotiableQuoteInvalidStateError`](#negotiablequoteinvalidstateerror) |
| [`NoSuchEntityUidError`](#nosuchentityuiderror) |

#### Example

```json
{"message": "abc123"}
```

<HorizontalLine />

### EstimateAddressInput

Contains details about an address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `country_code` - [`CountryCodeEnum!`](#countrycodeenum) | The two-letter code representing the customer&#x27;s country. |
| `postcode` - [`String`](#string) | The customer&#x27;s ZIP or postal code. |
| `region` - [`CustomerAddressRegionInput`](#customeraddressregioninput) | An object containing the region name, region code, and region ID. |

#### Example

```json
{
  "country_code": "AF",
  "postcode": "abc123",
  "region": CustomerAddressRegionInput
}
```

<HorizontalLine />

### EstimateTotalsInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`EstimateAddressInput!`](#estimateaddressinput) | Customer&#x27;s address to estimate totals. |
| `cart_id` - [`String!`](#string) | The unique ID of the cart to query. |
| `shipping_method` - [`ShippingMethodInput`](#shippingmethodinput) | Selected shipping method to estimate totals. |

#### Example

```json
{
  "address": EstimateAddressInput,
  "cart_id": "abc123",
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
| `token` - [`String!`](#string) | The customer authorization token. |

#### Example

```json
{
  "customer": Customer,
  "token": "abc123"
}
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

### FastlaneConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | The payment method code as defined in the payment gateway |
| `is_visible` - [`Boolean`](#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](#string) | Defines the payment intent (Authorize or Capture |
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `sdk_params` - [`[SDKParams]`](#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](#string) | The relative order the payment method is displayed on the checkout page |
| `three_ds_mode` - [`ThreeDSMode`](#threedsmode) | 3DS mode |
| `title` - [`String`](#string) | The name displayed for the payment method |

#### Example

```json
{
  "code": "xyz789",
  "is_visible": false,
  "payment_intent": "xyz789",
  "payment_source": "xyz789",
  "sdk_params": [SDKParams],
  "sort_order": "xyz789",
  "three_ds_mode": "OFF",
  "title": "abc123"
}
```

<HorizontalLine />

### FastlaneMethodInput

Fastlane Payment inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `paypal_fastlane_token` - [`String`](#string) | The single use token from Fastlane |

#### Example

```json
{
  "payment_source": "abc123",
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
| `eq` - [`String`](#string) | Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as &#x60;5&#x60;. |
| `in` - [`[String]`](#string) | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of &#x60;[&quot;4&quot;, &quot;5&quot;, &quot;6&quot;]&#x60;. |

#### Example

```json
{
  "eq": "abc123",
  "in": ["abc123"]
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
| `match` - [`String`](#string) | Use this attribute to fuzzy match the specified string. For example, to filter on a specific SKU, specify a value such as &#x60;24-MB01&#x60;. |
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
| `from` - [`String`](#string) | Use this attribute to specify the lowest possible value in the range. |
| `to` - [`String`](#string) | Use this attribute to specify the highest possible value in the range. |

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
| `name` - [`String`](#string) |  |
| `type` - [`FilterRuleType`](#filterruletype) |  |
| `conditions` - [`[ConditionInput]`](#conditioninput) |  |

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
| `eq` - [`String`](#string) | Filters items that are exactly the same as the specified string. |
| `in` - [`[String]`](#string) | Filters items that are exactly the same as entries specified in an array of strings. |
| `match` - [`String`](#string) | Defines a filter that performs a fuzzy search using the specified string. |

#### Example

```json
{
  "eq": "xyz789",
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
| `eq` - [`String`](#string) | Equals. |
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
  "eq": "xyz789",
  "from": "abc123",
  "gt": "abc123",
  "gteq": "abc123",
  "in": ["abc123"],
  "like": "xyz789",
  "lt": "xyz789",
  "lteq": "abc123",
  "moreq": "xyz789",
  "neq": "abc123",
  "nin": ["abc123"],
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
| `attribute` - [`String!`](#string) | The unique identifier for an attribute code. This value should be in lowercase letters and without spaces |
| `frontendInput` - [`String`](#string) | Indicates how field rendered on storefront |
| `label` - [`String`](#string) | The display name assigned to the attribute |
| `numeric` - [`Boolean`](#boolean) | Indicates whether this attribute has a numeric value, such as a price or integer |

#### Example

```json
{
  "attribute": "xyz789",
  "frontendInput": "abc123",
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

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

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

### GenerateNegotiableQuoteFromTemplateInput

Specifies the template id, from which to generate quote from.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |

#### Example

```json
{"template_id": 4}
```

<HorizontalLine />

### GenerateNegotiableQuoteFromTemplateOutput

Contains the generated negotiable quote id.

#### Fields

| Field Name | Description |
|------------|-------------|
| `negotiable_quote_uid` - [`ID!`](#id) | The unique ID of a generated &#x60;NegotiableQuote&#x60; object. |

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
| `sdkParams` - [`[PaymentSDKParamsItem]`](#paymentsdkparamsitem) | The payment SDK parameters |

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
| `website_id` - [`Int`](#int) | The ID of the website that generated the gift card. |
| `website_value` - [`Float`](#float) | The value of the gift card. |

#### Example

```json
{
  "attribute_id": 987,
  "uid": "4",
  "value": 123.45,
  "website_id": 987,
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
| `available_gift_wrapping` - [`[GiftWrapping]!`](#giftwrapping) | The list of available gift wrapping options for the cart item. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the cart item |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array of customizations applied to the gift card. |
| `discount` - [`[Discount]`](#discount) | Contains discount for quote line item. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message data for the gift card cart item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping option for the cart item. |
| `is_available` - [`Boolean!`](#boolean) | True if requested quantity is less than available stock, false otherwise. |
| `max_qty` - [`Float`](#float) | Line item max qty in quote template |
| `message` - [`String`](#string) | The message from the sender to the recipient. |
| `min_qty` - [`Float`](#float) | Line item min qty in quote template |
| `not_available_message` - [`String`](#string) | Message to display when the product is not available with this selected option. |
| `note_from_buyer` - [`[ItemNote]`](#itemnote) | The buyer&#x27;s quote line item note. |
| `note_from_seller` - [`[ItemNote]`](#itemnote) | The seller&#x27;s quote line item note. |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. *(Deprecated: Product information is part of a composable Catalog Service.)* |
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
  "available_gift_wrapping": [GiftWrapping],
  "custom_attributes": [CustomAttribute],
  "customizable_options": [SelectedCustomizableOption],
  "discount": [Discount],
  "errors": [CartItemError],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "is_available": true,
  "max_qty": 123.45,
  "message": "xyz789",
  "min_qty": 987.65,
  "not_available_message": "abc123",
  "note_from_buyer": [ItemNote],
  "note_from_seller": [ItemNote],
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "recipient_email": "xyz789",
  "recipient_name": "xyz789",
  "sender_email": "xyz789",
  "sender_name": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### GiftCardCreditMemoItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the credit memo item |
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
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "gift_card": GiftCardItem,
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
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
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the invoice item |
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
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "gift_card": GiftCardItem,
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "abc123",
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
| `message` - [`String`](#string) | The message from the sender to the recipient. |
| `recipient_email` - [`String`](#string) | The email address of the receiver of a virtual gift card. |
| `recipient_name` - [`String`](#string) | The name of the receiver of a physical or virtual gift card. |
| `sender_email` - [`String`](#string) | The email address of the sender of a virtual gift card. |
| `sender_name` - [`String`](#string) | The name of the sender of a physical or virtual gift card. |

#### Example

```json
{
  "message": "xyz789",
  "recipient_email": "xyz789",
  "recipient_name": "abc123",
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
  "recipient_email": "abc123",
  "recipient_name": "abc123",
  "sender_email": "abc123",
  "sender_name": "xyz789"
}
```

<HorizontalLine />

### GiftCardOrderItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the order item |
| `discounts` - [`[Discount]`](#discount) | The final discount information for the product. |
| `eligible_for_return` - [`Boolean`](#boolean) | Indicates whether the order item is eligible to be in a return request. |
| `entered_options` - [`[OrderItemOption]`](#orderitemoption) | The entered option for the base product, such as a logo or image. |
| `gift_card` - [`GiftCardItem`](#giftcarditem) | Selected gift card properties for an order item. |
| `gift_message` - [`GiftMessage`](#giftmessage) | The selected gift message for the order item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the order item. |
| `id` - [`ID!`](#id) | The unique ID for an &#x60;OrderItemInterface&#x60; object. |
| `prices` - [`OrderItemPrices`](#orderitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface`](#productinterface) | The ProductInterface object, which contains details about the base product *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price of the base product, including selected options. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `product_type` - [`String`](#string) | The type of product, such as simple, configurable, etc. |
| `product_url_key` - [`String`](#string) | URL key of the base product. |
| `quantity_canceled` - [`Float`](#float) | The number of canceled items. |
| `quantity_invoiced` - [`Float`](#float) | The number of invoiced items. |
| `quantity_ordered` - [`Float`](#float) | The number of units ordered for this item. |
| `quantity_refunded` - [`Float`](#float) | The number of refunded items. |
| `quantity_return_requested` - [`Float`](#float) | The requested return quantity of the item. |
| `quantity_returned` - [`Float`](#float) | The number of returned items. |
| `quantity_shipped` - [`Float`](#float) | The number of shipped items. |
| `selected_options` - [`[OrderItemOption]`](#orderitemoption) | The selected options for the base product, such as color or size. |
| `status` - [`String`](#string) | The status of the order item. |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "eligible_for_return": false,
  "entered_options": [OrderItemOption],
  "gift_card": GiftCardItem,
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "4",
  "prices": OrderItemPrices,
  "product": ProductInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "product_type": "abc123",
  "product_url_key": "abc123",
  "quantity_canceled": 123.45,
  "quantity_invoiced": 987.65,
  "quantity_ordered": 123.45,
  "quantity_refunded": 987.65,
  "quantity_return_requested": 123.45,
  "quantity_returned": 987.65,
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
| `allow_message` - [`Boolean`](#boolean) | Indicates whether the customer can provide a message to accompany the gift card. |
| `allow_open_amount` - [`Boolean`](#boolean) | Indicates whether shoppers have the ability to set the value of the gift card. |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | Crosssell Products |
| `custom_attributesV2` - [`ProductCustomAttributes`](#productcustomattributes) | Product custom attributes. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `gift_card_options` - [`[CustomizableOptionInterface]!`](#customizableoptioninterface) | An array of customizable gift card options. |
| `gift_message_available` - [`Boolean!`](#boolean) | Returns a value indicating gift message availability for the product. |
| `gift_wrapping_available` - [`Boolean!`](#boolean) | Returns a value indicating gift wrapping availability for the product. |
| `gift_wrapping_price` - [`Money`](#money) | Returns value and currency indicating gift wrapping price for the product. |
| `giftcard_amounts` - [`[GiftCardAmounts]`](#giftcardamounts) | An array that contains information about the values and ID of a gift card. |
| `giftcard_type` - [`GiftCardTypeEnum`](#giftcardtypeenum) | An enumeration that specifies the type of gift card. |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_redeemable` - [`Boolean`](#boolean) | Indicates whether the customer can redeem the value on the card for cash. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `lifetime` - [`Int`](#int) | The number of days after purchase until the gift card expires. A null value means there is no limit. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. |
| `max_sale_qty` - [`Float`](#float) | Maximum Qty Allowed in Shopping Cart |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `message_max_length` - [`Int`](#int) | The maximum number of characters the gift message can contain. |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `min_sale_qty` - [`Float`](#float) | Minimum Qty Allowed in Shopping Cart |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `open_amount_max` - [`Float`](#float) | The maximum acceptable value of an open amount gift card. |
| `open_amount_min` - [`Float`](#float) | The minimum acceptable value of an open amount gift card. |
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
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "allow_message": false,
  "allow_open_amount": false,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "country_of_manufacture": "abc123",
  "crosssell_products": [ProductInterface],
  "custom_attributesV2": ProductCustomAttributes,
  "description": ComplexTextValue,
  "gift_card_options": [CustomizableOptionInterface],
  "gift_message_available": false,
  "gift_wrapping_available": false,
  "gift_wrapping_price": Money,
  "giftcard_amounts": [GiftCardAmounts],
  "giftcard_type": "VIRTUAL",
  "image": ProductImage,
  "is_redeemable": false,
  "is_returnable": "abc123",
  "lifetime": 987,
  "manufacturer": 987,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "message_max_length": 123,
  "meta_description": "xyz789",
  "meta_keyword": "abc123",
  "meta_title": "xyz789",
  "min_sale_qty": 123.45,
  "name": "xyz789",
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 123.45,
  "open_amount_max": 123.45,
  "open_amount_min": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "abc123",
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "quantity": 123.45,
  "related_products": [ProductInterface],
  "short_description": ComplexTextValue,
  "sku": "xyz789",
  "small_image": ProductImage,
  "special_price": 123.45,
  "special_to_date": "xyz789",
  "stock_status": "IN_STOCK",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "uid": 4,
  "upsell_products": [ProductInterface],
  "url_key": "xyz789",
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
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The amount added. |
| `sku` - [`String!`](#string) | The product SKU. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "gift_card_options": GiftCardOptions,
  "product": ProductInterface,
  "quantity": 123.45,
  "sku": "abc123",
  "uid": 4
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
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_shipped": 987.65
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
| `product` - [`ProductInterface!`](#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
  "gift_card_options": GiftCardOptions,
  "id": "4",
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
| `from` - [`String!`](#string) | Sender name |
| `message` - [`String!`](#string) | Gift message text |
| `to` - [`String!`](#string) | Recipient name |

#### Example

```json
{
  "from": "xyz789",
  "message": "abc123",
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
  "from": "abc123",
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
| `gift_wrapping_for_items` - [`Money`](#money) | Price of the gift wrapping for all individual order items. |
| `gift_wrapping_for_items_incl_tax` - [`Money`](#money) | Price of the gift wrapping for all individual order items including tax. |
| `gift_wrapping_for_order` - [`Money`](#money) | Price of the gift wrapping for the whole order. |
| `gift_wrapping_for_order_incl_tax` - [`Money`](#money) | Price of the gift wrapping for the whole order including tax. |
| `printed_card` - [`Money`](#money) | Price for the printed card. |
| `printed_card_incl_tax` - [`Money`](#money) | Price for the printed card including tax. |

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
  "message": "abc123",
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
| `value` - [`String!`](#string) | A string that describes a dynamic attribute. |

#### Example

```json
{
  "code": "4",
  "value": "xyz789"
}
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
| [`GiftRegistryDynamicAttribute`](#giftregistrydynamicattribute) |
| [`GiftRegistryRegistrantDynamicAttribute`](#giftregistryregistrantdynamicattribute) |

#### Example

```json
{
  "code": 4,
  "label": "abc123",
  "value": "xyz789"
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
  "label": "abc123",
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
  "attribute_group": "xyz789",
  "code": "4",
  "input_type": "xyz789",
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
| `created_at` - [`String!`](#string) | The date the product was added to the gift registry. |
| `note` - [`String`](#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface!`](#productinterface) | Details about the gift registry item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The requested quantity of the product. |
| `quantity_fulfilled` - [`Float!`](#float) | The fulfilled quantity of the product. |
| `uid` - [`ID!`](#id) | The unique ID of a gift registry item. |

#### Example

```json
{
  "created_at": "abc123",
  "note": "abc123",
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
| `created_at` - [`String!`](#string) | The date the product was added to the gift registry. |
| `note` - [`String`](#string) | A brief message about the gift registry item. |
| `product` - [`ProductInterface!`](#productinterface) | Details about the gift registry item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
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
  "note": "abc123",
  "product": ProductInterface,
  "quantity": 123.45,
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
| `status` - [`Boolean!`](#boolean) | Indicates whether the attempt to move the cart items to the gift registry was successful. |
| `user_errors` - [`[GiftRegistryItemsUserError]!`](#giftregistryitemsusererror) | An array of errors encountered while moving items from the cart to the gift registry. |

#### Possible Types

| GiftRegistryItemUserErrorInterface Types |
|----------------|
| [`MoveCartItemsToGiftRegistryOutput`](#movecartitemstogiftregistryoutput) |

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
| `gift_registry_uid` - [`ID`](#id) | The unique ID of the &#x60;GiftRegistry&#x60; object containing an error. |
| `message` - [`String!`](#string) | A localized error message. |
| `product_uid` - [`ID`](#id) | The unique ID of the product containing an error. |

#### Example

```json
{
  "code": "OUT_OF_STOCK",
  "gift_registry_item_uid": 4,
  "gift_registry_uid": "4",
  "message": "abc123",
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
  "firstname": "xyz789",
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
| `label` - [`String!`](#string) | The display name of the dynamic attribute. |
| `value` - [`String!`](#string) | A corresponding value for the code. |

#### Example

```json
{
  "code": 4,
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
| `event_date` - [`String`](#string) | The date of the event. |
| `event_title` - [`String!`](#string) | The title given to the event. |
| `gift_registry_uid` - [`ID!`](#id) | The URL key of the gift registry. |
| `location` - [`String`](#string) | The location of the event. |
| `name` - [`String!`](#string) | The name of the gift registry owner. |
| `type` - [`String`](#string) | The type of event being held. |

#### Example

```json
{
  "event_date": "abc123",
  "event_title": "abc123",
  "gift_registry_uid": 4,
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
| `customer_address_uid` - [`ID`](#id) | The unique ID assigned to this customer address. |

#### Example

```json
{
  "address_data": CustomerAddressInput,
  "address_id": "4",
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
| `label` - [`String!`](#string) | The label assigned to the gift registry type on the Admin. |
| `uid` - [`ID!`](#id) | The unique ID assigned to the gift registry type. |

#### Example

```json
{
  "dynamic_attributes_metadata": [
    GiftRegistryDynamicAttributeMetadataInterface
  ],
  "label": "xyz789",
  "uid": 4
}
```

<HorizontalLine />

### GiftWrapping

Contains details about the selected or available gift wrapping options.

#### Fields

| Field Name | Description |
|------------|-------------|
| `design` - [`String!`](#string) | The name of the gift wrapping design. |
| `image` - [`GiftWrappingImage`](#giftwrappingimage) | The preview image for a gift wrapping option. |
| `price` - [`Money!`](#money) | The gift wrapping price. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;GiftWrapping&#x60; object. |

#### Example

```json
{
  "design": "xyz789",
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
  "label": "xyz789",
  "url": "xyz789"
}
```

<HorizontalLine />

### GooglePayButtonStyles

#### Fields

| Field Name | Description |
|------------|-------------|
| `color` - [`String`](#string) | The button color |
| `height` - [`Int`](#int) | The button height in pixels |
| `type` - [`String`](#string) | The button type |

#### Example

```json
{
  "color": "abc123",
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
| `code` - [`String`](#string) | The payment method code as defined in the payment gateway |
| `is_visible` - [`Boolean`](#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](#string) | Defines the payment intent (Authorize or Capture |
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `sdk_params` - [`[SDKParams]`](#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](#string) | The relative order the payment method is displayed on the checkout page |
| `three_ds_mode` - [`ThreeDSMode`](#threedsmode) | 3DS mode |
| `title` - [`String`](#string) | The name displayed for the payment method |

#### Example

```json
{
  "button_styles": GooglePayButtonStyles,
  "code": "abc123",
  "is_visible": true,
  "payment_intent": "xyz789",
  "payment_source": "abc123",
  "sdk_params": [SDKParams],
  "sort_order": "abc123",
  "three_ds_mode": "OFF",
  "title": "abc123"
}
```

<HorizontalLine />

### GooglePayMethodInput

Google Pay inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](#string) | The payment services order ID |
| `paypal_order_id` - [`String`](#string) | PayPal order ID |

#### Example

```json
{
  "payment_source": "abc123",
  "payments_order_id": "xyz789",
  "paypal_order_id": "abc123"
}
```

<HorizontalLine />

### GroupedProduct

Defines a grouped product, which consists of simple standalone products that are presented as a group.

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
| `items` - [`[GroupedProductItem]`](#groupedproductitem) | An array containing grouped product items. |
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
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "canonical_url": "abc123",
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
  "items": [GroupedProductItem],
  "manufacturer": 123,
  "max_sale_qty": 123.45,
  "media_gallery": [MediaGalleryInterface],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "min_sale_qty": 987.65,
  "name": "abc123",
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 123.45,
  "options_container": "abc123",
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
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "uid": "4",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
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
| `product` - [`ProductInterface!`](#productinterface) | Details about this product option. *(Deprecated: Product information is part of a composable Catalog Service.)* |
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
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface!`](#productinterface) | Product details of the wish list item. *(Deprecated: Product information is part of a composable Catalog Service.)* |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
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
| `reason` - [`String!`](#string) | Cancellation reason. |
| `token` - [`String!`](#string) | Order token. |

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
| `email` - [`String!`](#string) | Order billing address email. |
| `lastname` - [`String!`](#string) | Order billing address lastname. |
| `number` - [`String!`](#string) | Order number. |

#### Example

```json
{
  "email": "abc123",
  "lastname": "abc123",
  "number": "xyz789"
}
```

<HorizontalLine />

### Highlight

An object that provides highlighted text for matched words

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute` - [`String!`](#string) | The product attribute that contains a match for the search phrase |
| `matched_words` - [`[String]!`](#string) | An array of strings |
| `value` - [`String!`](#string) | The matched text, enclosed within emphasis tags |

#### Example

```json
{
  "attribute": "xyz789",
  "matched_words": ["xyz789"],
  "value": "xyz789"
}
```

<HorizontalLine />

### HistoryItemNoteData

Item note data that is added to the negotiable quote history object.

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String!`](#string) | Datetime of the note added. |
| `creator_name` - [`String!`](#string) | Name of the creator. |
| `creator_type` - [`String!`](#string) | Creator type: Buyer or Seller. |
| `item_id` - [`Int!`](#int) | Id of the quote item for which the note has been added. |
| `note` - [`String!`](#string) | The note added by the creator for the item |
| `product_name` - [`String!`](#string) | Name of the quote item product for which note has been added. |

#### Example

```json
{
  "created_at": "xyz789",
  "creator_name": "abc123",
  "creator_type": "xyz789",
  "item_id": 987,
  "note": "abc123",
  "product_name": "abc123"
}
```

<HorizontalLine />

### HostedFieldsConfig

#### Fields

| Field Name | Description |
|------------|-------------|
| `cc_vault_code` - [`String`](#string) | Vault payment method code |
| `code` - [`String`](#string) | The payment method code as defined in the payment gateway |
| `is_vault_enabled` - [`Boolean`](#boolean) | Card vault enabled |
| `is_visible` - [`Boolean`](#boolean) | Indicates whether the payment method is displayed |
| `payment_intent` - [`String`](#string) | Defines the payment intent (Authorize or Capture |
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `requires_card_details` - [`Boolean`](#boolean) | Card and bin details required |
| `sdk_params` - [`[SDKParams]`](#sdkparams) | The PayPal parameters required to load the JS SDK |
| `sort_order` - [`String`](#string) | The relative order the payment method is displayed on the checkout page |
| `three_ds_mode` - [`ThreeDSMode`](#threedsmode) | 3DS mode |
| `title` - [`String`](#string) | The name displayed for the payment method |

#### Example

```json
{
  "cc_vault_code": "abc123",
  "code": "abc123",
  "is_vault_enabled": false,
  "is_visible": false,
  "payment_intent": "xyz789",
  "payment_source": "abc123",
  "requires_card_details": false,
  "sdk_params": [SDKParams],
  "sort_order": "xyz789",
  "three_ds_mode": "OFF",
  "title": "abc123"
}
```

<HorizontalLine />

### HostedFieldsInput

Hosted Fields payment inputs

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cardBin` - [`String`](#string) | Card bin number |
| `cardExpiryMonth` - [`String`](#string) | Expiration month of the card |
| `cardExpiryYear` - [`String`](#string) | Expiration year of the card |
| `cardLast4` - [`String`](#string) | Last four digits of the card |
| `holderName` - [`String`](#string) | Name on the card |
| `is_active_payment_token_enabler` - [`Boolean`](#boolean) | Indicates whether details about the shopper&#x27;s credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the Payment Services payment integration. |
| `payment_source` - [`String`](#string) | The payment source for the payment method |
| `payments_order_id` - [`String`](#string) | The payment services order ID |
| `paypal_order_id` - [`String`](#string) | PayPal order ID |

#### Example

```json
{
  "cardBin": "xyz789",
  "cardExpiryMonth": "abc123",
  "cardExpiryYear": "abc123",
  "cardLast4": "xyz789",
  "holderName": "abc123",
  "is_active_payment_token_enabler": true,
  "payment_source": "xyz789",
  "payments_order_id": "xyz789",
  "paypal_order_id": "xyz789"
}
```

<HorizontalLine />

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

#### Example

```json
"4"
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
| `code` - [`CartUserInputErrorType!`](#cartuserinputerrortype) | A cart-specific error code. |
| `message` - [`String!`](#string) | A localized error message. |
| `quantity` - [`Float`](#float) | Amount of available stock |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "abc123",
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
| `message` - [`String!`](#string) | The returned error message. |

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
| `comments` - [`[SalesCommentItem]`](#salescommentitem) | Comments on the invoice. |
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the invoice |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;Invoice&#x60; object. |
| `items` - [`[InvoiceItemInterface]`](#invoiceiteminterface) | Invoiced product details. |
| `number` - [`String!`](#string) | Sequential invoice number. |
| `total` - [`InvoiceTotal`](#invoicetotal) | Invoice total amount details. |

#### Example

```json
{
  "comments": [SalesCommentItem],
  "custom_attributes": [CustomAttribute],
  "id": "4",
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
| `custom_attributes` - [`[CustomAttributeInput]`](#customattributeinput) | An array of custom attributes for invoice. |
| `invoice_id` - [`String!`](#string) | The invoice ID. |

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
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the invoice item |
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
  "custom_attributes": [CustomAttribute],
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

### InvoiceItemCustomAttributesInput

Defines an invoice item custom attributes.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `custom_attributes` - [`[CustomAttributeInput]`](#customattributeinput) | An array of custom attributes for invoice item. |
| `invoice_id` - [`String!`](#string) | The invoice ID. |
| `invoice_item_id` - [`String!`](#string) | The invoice item ID. |

#### Example

```json
{
  "custom_attributes": [CustomAttributeInput],
  "invoice_id": "abc123",
  "invoice_item_id": "xyz789"
}
```

<HorizontalLine />

### InvoiceItemInterface

Contains detailes about invoiced items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the invoice item |
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
| [`BundleInvoiceItem`](#bundleinvoiceitem) |
| [`DownloadableInvoiceItem`](#downloadableinvoiceitem) |
| [`GiftCardInvoiceItem`](#giftcardinvoiceitem) |
| [`InvoiceItem`](#invoiceitem) |

#### Example

```json
{
  "custom_attributes": [CustomAttribute],
  "discounts": [Discount],
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "abc123",
  "quantity_invoiced": 987.65
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
{"is_email_available": false}
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
{"is_email_available": false}
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
{"is_email_available": true}
```

<HorizontalLine />

### IsOperatorInput

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `type` - [`IsOperatorType`](#isoperatortype) |  |
| `value` - [`Boolean`](#boolean) |  |

#### Example

```json
{"type": "UNKNOWN_ISOPERATOR_TYPE", "value": true}
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
| `isSubscribed` - [`Boolean!`](#boolean) |  |
| `message` - [`String`](#string) |  |

#### Example

```json
{"isSubscribed": true, "message": "xyz789"}
```

<HorizontalLine />

### ItemNote

The note object for quote line item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `created_at` - [`String`](#string) | Timestamp that reflects note creation date. |
| `creator_id` - [`Int`](#int) | ID of the user who submitted a note. |
| `creator_name` - [`String`](#string) | Name of the creator. |
| `creator_type` - [`Int`](#int) | Type of teh user who submitted a note. |
| `negotiable_quote_item_uid` - [`ID`](#id) | The unique ID of a &#x60;CartItemInterface&#x60; object. |
| `note` - [`String`](#string) | Note text. |
| `note_uid` - [`ID`](#id) | The unique ID of a &#x60;ItemNote&#x60; object. |

#### Example

```json
{
  "created_at": "xyz789",
  "creator_id": 123,
  "creator_name": "xyz789",
  "creator_type": 987,
  "negotiable_quote_item_uid": "4",
  "note": "abc123",
  "note_uid": "4"
}
```

<HorizontalLine />

### ItemSelectedBundleOption

A list of options of the selected bundle product.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | The label of the option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOption&#x60; object. |
| `values` - [`[ItemSelectedBundleOptionValue]`](#itemselectedbundleoptionvalue) | A list of products that represent the values of the parent option. |

#### Example

```json
{
  "label": "abc123",
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
| `price` - [`Money!`](#money) | The price of the child bundle product. |
| `product_name` - [`String!`](#string) | The name of the child bundle product. |
| `product_sku` - [`String!`](#string) | The SKU of the child bundle product. |
| `quantity` - [`Float!`](#float) | The number of this bundle product that were ordered. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ItemSelectedBundleOptionValue&#x60; object. |

#### Example

```json
{
  "price": Money,
  "product_name": "xyz789",
  "product_sku": "xyz789",
  "quantity": 987.65,
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
  "name": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### LineItemNoteInput

Sets quote item note.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `note` - [`String`](#string) | The note text to be added. |
| `quote_item_uid` - [`ID!`](#id) | The unique ID of a &#x60;CartLineItem&#x60; object. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "note": "xyz789",
  "quote_item_uid": "4",
  "quote_uid": 4
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
| [`AssetImage`](#assetimage) |
| [`AssetVideo`](#assetvideo) |
| [`ProductImage`](#productimage) |
| [`ProductVideo`](#productvideo) |

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

### MediaResourceType

Enumeration of media resource types

#### Values

| Enum Value | Description |
|------------|-------------|
| `NEGOTIABLE_QUOTE_ATTACHMENT` | Negotiable quote comment file attachment |
| `CUSTOMER_ATTRIBUTE_FILE` | Customer file resource type |
| `CUSTOMER_ATTRIBUTE_IMAGE` | Customer image resource type |
| `CUSTOMER_ATTRIBUTE_ADDRESS_FILE` | Customer file resource type for customer address |
| `CUSTOMER_ATTRIBUTE_ADDRESS_IMAGE` | Customer image resource type for customer address |

#### Example

```json
""NEGOTIABLE_QUOTE_ATTACHMENT""
```

<HorizontalLine />

### MessageStyleLogo

#### Fields

| Field Name | Description |
|------------|-------------|
| `type` - [`String`](#string) | The type of logo for the PayPal Pay Later messaging |

#### Example

```json
{"type": "xyz789"}
```

<HorizontalLine />

### MessageStyles

#### Fields

| Field Name | Description |
|------------|-------------|
| `layout` - [`String`](#string) | The message layout |
| `logo` - [`MessageStyleLogo`](#messagestylelogo) | The message logo |

#### Example

```json
{
  "layout": "xyz789",
  "logo": MessageStyleLogo
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
  "status": true,
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
{"requisitionListItemUids": ["4"]}
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

### MoveLineItemToRequisitionListInput

Move Line Item to Requisition List.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_item_uid` - [`ID!`](#id) | The unique ID of a &#x60;CartLineItem&#x60; object. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |
| `requisition_list_uid` - [`ID!`](#id) | The unique ID of a requisition list. |

#### Example

```json
{
  "quote_item_uid": 4,
  "quote_uid": 4,
  "requisition_list_uid": "4"
}
```

<HorizontalLine />

### MoveLineItemToRequisitionListOutput

Contains the updated negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after moving item to requisition list. |

#### Example

```json
{"quote": NegotiableQuote}
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
| `custom_attributes` - [`[CustomAttribute]`](#customattribute) | The custom attributes for the negotiable quote |
| `email` - [`String`](#string) | The email address of the company user. |
| `expiration_date` - [`String!`](#string) | The expiration period of the negotiable quote. |
| `history` - [`[NegotiableQuoteHistoryEntry]`](#negotiablequotehistoryentry) | A list of status and price changes for the negotiable quote. |
| `is_virtual` - [`Boolean!`](#boolean) | Indicates whether the negotiable quote contains only virtual products. |
| `items` - [`[CartItemInterface]`](#cartiteminterface) | The list of items in the negotiable quote. |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote. |
| `order` - [`CustomerOrder`](#customerorder) | The order created from the negotiable quote. |
| `prices` - [`CartPrices`](#cartprices) | A set of subtotals and totals applied to the negotiable quote. |
| `sales_rep_name` - [`String!`](#string) | The first and last name of the sales representative. |
| `selected_payment_method` - [`SelectedPaymentMethod`](#selectedpaymentmethod) | The payment method that was applied to the negotiable quote. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote. |
| `status` - [`NegotiableQuoteStatus!`](#negotiablequotestatus) | The status of the negotiable quote. |
| `template_id` - [`ID`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |
| `template_name` - [`String`](#string) | The title assigned to the negotiable quote template. |
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
  "custom_attributes": [CustomAttribute],
  "email": "abc123",
  "expiration_date": "abc123",
  "history": [NegotiableQuoteHistoryEntry],
  "is_virtual": false,
  "items": [CartItemInterface],
  "name": "abc123",
  "order": CustomerOrder,
  "prices": CartPrices,
  "sales_rep_name": "xyz789",
  "selected_payment_method": SelectedPaymentMethod,
  "shipping_addresses": [NegotiableQuoteShippingAddress],
  "status": "SUBMITTED",
  "template_id": "4",
  "template_name": "xyz789",
  "total_quantity": 987.65,
  "uid": "4",
  "updated_at": "xyz789"
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
  "label": "xyz789"
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
| `custom_attributes` - [`[AttributeValueInput]`](#attributevalueinput) | The custom attribute values of the billing or shipping negotiable quote address. |
| `fax` - [`String`](#string) | The fax number of the customer. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`String`](#string) | A string that defines the state or province of the billing or shipping address. |
| `region_id` - [`Int`](#int) | An integer that defines the state or province of the billing or shipping address. |
| `save_in_address_book` - [`Boolean`](#boolean) | Determines whether to save the address in the customer&#x27;s address book. The default value is true. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "city": "abc123",
  "company": "xyz789",
  "country_code": "xyz789",
  "custom_attributes": [AttributeValueInput],
  "fax": "abc123",
  "firstname": "xyz789",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "xyz789",
  "prefix": "xyz789",
  "region": "xyz789",
  "region_id": 123,
  "save_in_address_book": true,
  "street": ["abc123"],
  "suffix": "xyz789",
  "telephone": "xyz789",
  "vat_id": "xyz789"
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
| `custom_attributes` - [`[AttributeValueInterface]`](#attributevalueinterface) | The custom attribute values of the billing or shipping negotiable quote address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer&#x27;s address book that uniquely identifies the address. |
| `fax` - [`String`](#string) | The fax number of the customer. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The company&#x27;s ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |
| `uid` - [`ID!`](#id) | The unique identifier of the negotiable quote address. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Possible Types

| NegotiableQuoteAddressInterface Types |
|----------------|
| [`NegotiableQuoteBillingAddress`](#negotiablequotebillingaddress) |
| [`NegotiableQuoteShippingAddress`](#negotiablequoteshippingaddress) |

#### Example

```json
{
  "city": "abc123",
  "company": "abc123",
  "country": NegotiableQuoteAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": "4",
  "fax": "abc123",
  "firstname": "xyz789",
  "lastname": "abc123",
  "middlename": "xyz789",
  "postcode": "xyz789",
  "prefix": "abc123",
  "region": NegotiableQuoteAddressRegion,
  "street": ["xyz789"],
  "suffix": "xyz789",
  "telephone": "xyz789",
  "uid": "4",
  "vat_id": "abc123"
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
  "region_id": 987
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
| `custom_attributes` - [`[AttributeValueInterface]`](#attributevalueinterface) | The custom attribute values of the billing or shipping negotiable quote address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer&#x27;s address book that uniquely identifies the address. |
| `fax` - [`String`](#string) | The fax number of the customer. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The company&#x27;s ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |
| `uid` - [`ID!`](#id) | The unique identifier of the negotiable quote address. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "city": "xyz789",
  "company": "abc123",
  "country": NegotiableQuoteAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": "4",
  "fax": "abc123",
  "firstname": "xyz789",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "xyz789",
  "region": NegotiableQuoteAddressRegion,
  "street": ["abc123"],
  "suffix": "abc123",
  "telephone": "abc123",
  "uid": "4",
  "vat_id": "abc123"
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
  "same_as_shipping": true,
  "use_for_shipping": false
}
```

<HorizontalLine />

### NegotiableQuoteComment

Contains a single plain text comment from either the buyer or seller.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attachments` - [`[NegotiableQuoteCommentAttachment]!`](#negotiablequotecommentattachment) | Negotiable quote comment file attachments. |
| `author` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The first and last name of the commenter. |
| `created_at` - [`String!`](#string) | Timestamp indicating when the comment was created. |
| `creator_type` - [`NegotiableQuoteCommentCreatorType!`](#negotiablequotecommentcreatortype) | Indicates whether a buyer or seller commented. |
| `text` - [`String!`](#string) | The plain text comment. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteComment&#x60; object. |

#### Example

```json
{
  "attachments": [NegotiableQuoteCommentAttachment],
  "author": NegotiableQuoteUser,
  "created_at": "xyz789",
  "creator_type": "BUYER",
  "text": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### NegotiableQuoteCommentAttachment

Negotiable quote comment file attachment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String!`](#string) | Negotiable quote comment attachment file name. |
| `url` - [`String!`](#string) | Negotiable quote comment attachment file url. |

#### Example

```json
{
  "name": "abc123",
  "url": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteCommentAttachmentInput

Negotiable quote comment file attachment.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `key` - [`String!`](#string) | Negotiable quote comment attachment file key. |

#### Example

```json
{"key": "abc123"}
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
| `attachments` - [`[NegotiableQuoteCommentAttachmentInput]`](#negotiablequotecommentattachmentinput) | Negotiable quote comment file attachments. |
| `comment` - [`String!`](#string) | The comment provided by the buyer. |

#### Example

```json
{
  "attachments": [NegotiableQuoteCommentAttachmentInput],
  "comment": "abc123"
}
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
  "new_value": "abc123",
  "old_value": "xyz789",
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
{"comment": "xyz789"}
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
| `item_note` - [`HistoryItemNoteData`](#historyitemnotedata) | Item note data that is added to the negotiable quote history object. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteHistoryEntry&#x60; object. |

#### Example

```json
{
  "author": NegotiableQuoteUser,
  "change_type": "CREATED",
  "changes": NegotiableQuoteHistoryChanges,
  "created_at": "abc123",
  "item_note": HistoryItemNoteData,
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
  "new_expiration": "abc123",
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
| `products_removed_from_quote` - [`[ProductInterface]`](#productinterface) | A list of products removed from the negotiable quote by either the buyer or the seller. *(Deprecated: Product information is part of a composable Catalog Service.)* |

#### Example

```json
{
  "products_removed_from_catalog": ["4"],
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
{"quantity": 123.45, "quote_item_uid": 4}
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
  "code": "abc123",
  "purchase_order_number": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteReferenceDocumentLink

Contains a reference document link for a negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `document_identifier` - [`String`](#string) | The identifier of the reference document. |
| `document_name` - [`String!`](#string) | The title of the reference document. |
| `link_id` - [`ID!`](#id) | The unique ID of a reference document link. |
| `reference_document_url` - [`String!`](#string) | The URL of the reference document. |

#### Example

```json
{
  "document_identifier": "abc123",
  "document_name": "abc123",
  "link_id": "4",
  "reference_document_url": "abc123"
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
| `custom_attributes` - [`[AttributeValueInterface]`](#attributevalueinterface) | The custom attribute values of the billing or shipping negotiable quote address. |
| `customer_address_uid` - [`ID`](#id) | The unique ID from the customer&#x27;s address book that uniquely identifies the address. |
| `fax` - [`String`](#string) | The fax number of the customer. |
| `firstname` - [`String!`](#string) | The first name of the company user. |
| `lastname` - [`String!`](#string) | The last name of the company user. |
| `middlename` - [`String`](#string) | The middle name of the person associated with the billing/shipping address. |
| `postcode` - [`String`](#string) | The company&#x27;s ZIP or postal code. |
| `prefix` - [`String`](#string) | An honorific, such as Dr., Mr., or Mrs. |
| `region` - [`NegotiableQuoteAddressRegion`](#negotiablequoteaddressregion) | An object containing the region name, region code, and region ID. |
| `selected_shipping_method` - [`SelectedShippingMethod`](#selectedshippingmethod) | The selected shipping method. |
| `street` - [`[String]!`](#string) | An array of strings that define the street number and name. |
| `suffix` - [`String`](#string) | A value such as Sr., Jr., or III. |
| `telephone` - [`String`](#string) | The customer&#x27;s telephone number. |
| `uid` - [`ID!`](#id) | The unique identifier of the negotiable quote address. |
| `vat_id` - [`String`](#string) | The customer&#x27;s Tax/VAT number (for corporate customers). |

#### Example

```json
{
  "available_shipping_methods": [AvailableShippingMethod],
  "city": "abc123",
  "company": "abc123",
  "country": NegotiableQuoteAddressCountry,
  "custom_attributes": [AttributeValueInterface],
  "customer_address_uid": "4",
  "fax": "abc123",
  "firstname": "abc123",
  "lastname": "xyz789",
  "middlename": "abc123",
  "postcode": "abc123",
  "prefix": "abc123",
  "region": NegotiableQuoteAddressRegion,
  "selected_shipping_method": SelectedShippingMethod,
  "street": ["xyz789"],
  "suffix": "abc123",
  "telephone": "xyz789",
  "uid": "4",
  "vat_id": "abc123"
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
  "customer_address_uid": 4,
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
| `DRAFT` |  |

#### Example

```json
""SUBMITTED""
```

<HorizontalLine />

### NegotiableQuoteTemplate

Contains details about a negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `buyer` - [`NegotiableQuoteUser!`](#negotiablequoteuser) | The first and last name of the buyer. |
| `comments` - [`[NegotiableQuoteComment]`](#negotiablequotecomment) | A list of comments made by the buyer and seller. |
| `created_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote template was created. |
| `expiration_date` - [`String!`](#string) | The expiration period of the negotiable quote template. |
| `history` - [`[NegotiableQuoteHistoryEntry]`](#negotiablequotehistoryentry) | A list of status and price changes for the negotiable quote template. |
| `historyV2` - [`[NegotiableQuoteTemplateHistoryEntry]`](#negotiablequotetemplatehistoryentry) |  |
| `is_min_max_qty_used` - [`Boolean!`](#boolean) | Indicates whether the minimum and maximum quantity settings are used. |
| `is_virtual` - [`Boolean!`](#boolean) | Indicates whether the negotiable quote template contains only virtual products. |
| `items` - [`[CartItemInterface]`](#cartiteminterface) | The list of items in the negotiable quote template. |
| `max_order_commitment` - [`Int!`](#int) | Commitment for maximum orders |
| `min_order_commitment` - [`Int!`](#int) | Commitment for minimum orders |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote template. |
| `notifications` - [`[QuoteTemplateNotificationMessage]`](#quotetemplatenotificationmessage) | A list of notifications for the negotiable quote template. |
| `prices` - [`CartPrices`](#cartprices) | A set of subtotals and totals applied to the negotiable quote template. |
| `reference_document_links` - [`[NegotiableQuoteReferenceDocumentLink]`](#negotiablequotereferencedocumentlink) | A list of reference document links for the negotiable quote template. |
| `sales_rep_name` - [`String!`](#string) | The first and last name of the sales representative. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddress]!`](#negotiablequoteshippingaddress) | A list of shipping addresses applied to the negotiable quote template. |
| `status` - [`String!`](#string) | The status of the negotiable quote template. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |
| `total_quantity` - [`Float!`](#float) | The total number of items in the negotiable quote template. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |
| `updated_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote template was updated. |

#### Example

```json
{
  "buyer": NegotiableQuoteUser,
  "comments": [NegotiableQuoteComment],
  "created_at": "abc123",
  "expiration_date": "abc123",
  "history": [NegotiableQuoteHistoryEntry],
  "historyV2": [NegotiableQuoteTemplateHistoryEntry],
  "is_min_max_qty_used": false,
  "is_virtual": true,
  "items": [CartItemInterface],
  "max_order_commitment": 987,
  "min_order_commitment": 987,
  "name": "xyz789",
  "notifications": [QuoteTemplateNotificationMessage],
  "prices": CartPrices,
  "reference_document_links": [
    NegotiableQuoteReferenceDocumentLink
  ],
  "sales_rep_name": "xyz789",
  "shipping_addresses": [NegotiableQuoteShippingAddress],
  "status": "abc123",
  "template_id": 4,
  "total_quantity": 123.45,
  "uid": 4,
  "updated_at": "xyz789"
}
```

<HorizontalLine />

### NegotiableQuoteTemplateFilterInput

Defines a filter to limit the negotiable quotes to return.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `state` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by state of one or more negotiable quote templates. |
| `status` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter by status of one or more negotiable quote templates. |

#### Example

```json
{
  "state": FilterEqualTypeInput,
  "status": FilterEqualTypeInput
}
```

<HorizontalLine />

### NegotiableQuoteTemplateGridItem

Contains data for a negotiable quote template in a grid.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activated_at` - [`String!`](#string) | The date and time the negotiable quote template was activated. |
| `company_name` - [`String!`](#string) | Company name the quote template is assigned to |
| `created_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote template was created. |
| `expiration_date` - [`String!`](#string) | The expiration period of the negotiable quote template. |
| `is_min_max_qty_used` - [`Boolean!`](#boolean) | Indicates whether the minimum and maximum quantity settings are used. |
| `last_ordered_at` - [`String!`](#string) | Timestamp indicating when the last negotiable quote template order was placed. |
| `last_shared_at` - [`String!`](#string) | The date and time the negotiable quote template was last shared. |
| `max_order_commitment` - [`Int!`](#int) | Commitment for maximum orders |
| `min_negotiated_grand_total` - [`Float!`](#float) | The minimum negotiated grand total of the negotiable quote template. |
| `min_order_commitment` - [`Int!`](#int) | Commitment for minimum orders |
| `name` - [`String!`](#string) | The title assigned to the negotiable quote template. |
| `orders_placed` - [`Int!`](#int) | The number of orders placed for the negotiable quote template. |
| `prices` - [`CartPrices`](#cartprices) | A set of subtotals and totals applied to the negotiable quote template. |
| `sales_rep_name` - [`String!`](#string) | The first and last name of the sales representative. |
| `state` - [`String!`](#string) | State of the negotiable quote template. |
| `status` - [`String!`](#string) | The status of the negotiable quote template. |
| `submitted_by` - [`String!`](#string) | The first and last name of the buyer. |
| `template_id` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuoteTemplate&#x60; object. |
| `updated_at` - [`String!`](#string) | Timestamp indicating when the negotiable quote template was updated. |

#### Example

```json
{
  "activated_at": "abc123",
  "company_name": "abc123",
  "created_at": "xyz789",
  "expiration_date": "xyz789",
  "is_min_max_qty_used": false,
  "last_ordered_at": "abc123",
  "last_shared_at": "xyz789",
  "max_order_commitment": 987,
  "min_negotiated_grand_total": 123.45,
  "min_order_commitment": 123,
  "name": "xyz789",
  "orders_placed": 123,
  "prices": CartPrices,
  "sales_rep_name": "abc123",
  "state": "abc123",
  "status": "xyz789",
  "submitted_by": "abc123",
  "template_id": 4,
  "uid": 4,
  "updated_at": "abc123"
}
```

<HorizontalLine />

### NegotiableQuoteTemplateHistoryChanges

Contains a list of changes to a negotiable quote template.

#### Fields

| Field Name | Description |
|------------|-------------|
| `comment_added` - [`NegotiableQuoteHistoryCommentChange`](#negotiablequotehistorycommentchange) | The comment provided with a change in the negotiable quote history. |
| `custom_changes` - [`NegotiableQuoteCustomLogChange`](#negotiablequotecustomlogchange) | Lists log entries added by third-party extensions. |
| `expiration` - [`NegotiableQuoteHistoryExpirationChange`](#negotiablequotehistoryexpirationchange) | The expiration date of the negotiable quote before and after a change in the quote history. |
| `products_removed` - [`NegotiableQuoteHistoryProductsRemovedChange`](#negotiablequotehistoryproductsremovedchange) | Lists products that were removed as a result of a change in the quote history. |
| `statuses` - [`NegotiableQuoteTemplateHistoryStatusesChange`](#negotiablequotetemplatehistorystatuseschange) | The status before and after a change in the negotiable quote template history. |
| `total` - [`NegotiableQuoteHistoryTotalChange`](#negotiablequotehistorytotalchange) | The total amount of the negotiable quote before and after a change in the quote history. |

#### Example

```json
{
  "comment_added": NegotiableQuoteHistoryCommentChange,
  "custom_changes": NegotiableQuoteCustomLogChange,
  "expiration": NegotiableQuoteHistoryExpirationChange,
  "products_removed": NegotiableQuoteHistoryProductsRemovedChange,
  "statuses": NegotiableQuoteTemplateHistoryStatusesChange,
  "total": NegotiableQuoteHistoryTotalChange
}
```

<HorizontalLine />
