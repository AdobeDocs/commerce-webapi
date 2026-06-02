## Mutations

### acceptCompanyInvitation

Accept invitation to the company.

**Response:** [`CompanyInvitationOutput`](#companyinvitationoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyInvitationInput!`](#companyinvitationinput) |  |

#### Example

##### Query

```graphql
mutation acceptCompanyInvitation($input: CompanyInvitationInput!) {
  acceptCompanyInvitation(input: $input) {
    success
  }
}
```

##### Variables

```json
{"input": CompanyInvitationInput}
```

##### Response

```json
{"data": {"acceptCompanyInvitation": {"success": false}}}
```

<HorizontalLine />

### acceptNegotiableQuoteTemplate

Update an existing negotiable quote template.

**Response:** [`NegotiableQuoteTemplate`](#negotiablequotetemplate)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AcceptNegotiableQuoteTemplateInput!`](#acceptnegotiablequotetemplateinput) | An input object that contains the data to update a negotiable quote template. |

#### Example

##### Query

```graphql
mutation acceptNegotiableQuoteTemplate($input: AcceptNegotiableQuoteTemplateInput!) {
  acceptNegotiableQuoteTemplate(input: $input) {
    buyer {
      ...NegotiableQuoteUserFragment
    }
    comments {
      ...NegotiableQuoteCommentFragment
    }
    expiration_date
    history {
      ...NegotiableQuoteHistoryEntryFragment
    }
    is_min_max_qty_used
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    max_order_commitment
    min_order_commitment
    name
    notifications {
      ...QuoteTemplateNotificationMessageFragment
    }
    prices {
      ...CartPricesFragment
    }
    reference_document_links {
      ...NegotiableQuoteReferenceDocumentLinkFragment
    }
    shipping_addresses {
      ...NegotiableQuoteShippingAddressFragment
    }
    status
    template_id
    total_quantity
  }
}
```

##### Variables

```json
{"input": AcceptNegotiableQuoteTemplateInput}
```

##### Response

```json
{
  "data": {
    "acceptNegotiableQuoteTemplate": {
      "buyer": NegotiableQuoteUser,
      "comments": [NegotiableQuoteComment],
      "expiration_date": "xyz789",
      "history": [NegotiableQuoteHistoryEntry],
      "is_min_max_qty_used": true,
      "is_virtual": true,
      "items": [CartItemInterface],
      "max_order_commitment": 123,
      "min_order_commitment": 123,
      "name": "abc123",
      "notifications": [QuoteTemplateNotificationMessage],
      "prices": CartPrices,
      "reference_document_links": [
        NegotiableQuoteReferenceDocumentLink
      ],
      "shipping_addresses": [
        NegotiableQuoteShippingAddress
      ],
      "status": "abc123",
      "template_id": "4",
      "total_quantity": 987.65
    }
  }
}
```

<HorizontalLine />

### addBundleProductsToCart

Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead.

**Response:** [`AddBundleProductsToCartOutput`](#addbundleproductstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddBundleProductsToCartInput`](#addbundleproductstocartinput) | An input object that defines which bundle products to add to the cart. |

#### Example

##### Query

```graphql
mutation addBundleProductsToCart($input: AddBundleProductsToCartInput) {
  addBundleProductsToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": AddBundleProductsToCartInput}
```

##### Response

```json
{"data": {"addBundleProductsToCart": {"cart": Cart}}}
```

<HorizontalLine />

### addConfigurableProductsToCart

Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead.

**Response:** [`AddConfigurableProductsToCartOutput`](#addconfigurableproductstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddConfigurableProductsToCartInput`](#addconfigurableproductstocartinput) | An input object that defines which configurable products to add to the cart. |

#### Example

##### Query

```graphql
mutation addConfigurableProductsToCart($input: AddConfigurableProductsToCartInput) {
  addConfigurableProductsToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": AddConfigurableProductsToCartInput}
```

##### Response

```json
{
  "data": {
    "addConfigurableProductsToCart": {"cart": Cart}
  }
}
```

<HorizontalLine />

### addDownloadableProductsToCart

Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead.

**Response:** [`AddDownloadableProductsToCartOutput`](#adddownloadableproductstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddDownloadableProductsToCartInput`](#adddownloadableproductstocartinput) | An input object that defines which downloadable products to add to the cart. |

#### Example

##### Query

```graphql
mutation addDownloadableProductsToCart($input: AddDownloadableProductsToCartInput) {
  addDownloadableProductsToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": AddDownloadableProductsToCartInput}
```

##### Response

```json
{
  "data": {
    "addDownloadableProductsToCart": {"cart": Cart}
  }
}
```

<HorizontalLine />

### addGiftRegistryRegistrants

Add registrants to the specified gift registry.

**Response:** [`AddGiftRegistryRegistrantsOutput`](#addgiftregistryregistrantsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `giftRegistryUid` - [`ID!`](#id) | The unique ID of the gift registry. |
| `registrants` - [`[AddGiftRegistryRegistrantInput!]!`](#addgiftregistryregistrantinput) | An array registrants to add. |

#### Example

##### Query

```graphql
mutation addGiftRegistryRegistrants(
  $giftRegistryUid: ID!,
  $registrants: [AddGiftRegistryRegistrantInput!]!
) {
  addGiftRegistryRegistrants(
    giftRegistryUid: $giftRegistryUid,
    registrants: $registrants
  ) {
    gift_registry {
      ...GiftRegistryFragment
    }
  }
}
```

##### Variables

```json
{
  "giftRegistryUid": 4,
  "registrants": [AddGiftRegistryRegistrantInput]
}
```

##### Response

```json
{
  "data": {
    "addGiftRegistryRegistrants": {
      "gift_registry": GiftRegistry
    }
  }
}
```

<HorizontalLine />

### addProductsToCart

Add any type of product to the cart.

**Response:** [`AddProductsToCartOutput`](#addproductstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `cartId` - [`String!`](#string) | The cart ID of the shopper. |
| `cartItems` - [`[CartItemInput!]!`](#cartiteminput) | An array that defines the products to add to the cart. |

#### Example

##### Query

```graphql
mutation addProductsToCart(
  $cartId: String!,
  $cartItems: [CartItemInput!]!
) {
  addProductsToCart(
    cartId: $cartId,
    cartItems: $cartItems
  ) {
    cart {
      ...CartFragment
    }
    user_errors {
      ...ErrorFragment
    }
  }
}
```

##### Variables

```json
{
  "cartId": "xyz789",
  "cartItems": [CartItemInput]
}
```

##### Response

```json
{
  "data": {
    "addProductsToCart": {
      "cart": Cart,
      "user_errors": [Error]
    }
  }
}
```

<HorizontalLine />

### addProductsToCompareList

Add products to the specified compare list.

**Response:** [`CompareList`](#comparelist)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddProductsToCompareListInput`](#addproductstocomparelistinput) | An input object that defines which products to add to an existing compare list. |

#### Example

##### Query

```graphql
mutation addProductsToCompareList($input: AddProductsToCompareListInput) {
  addProductsToCompareList(input: $input) {
    attributes {
      ...ComparableAttributeFragment
    }
    item_count
    items {
      ...ComparableItemFragment
    }
    uid
  }
}
```

##### Variables

```json
{"input": AddProductsToCompareListInput}
```

##### Response

```json
{
  "data": {
    "addProductsToCompareList": {
      "attributes": [ComparableAttribute],
      "item_count": 123,
      "items": [ComparableItem],
      "uid": "4"
    }
  }
}
```

<HorizontalLine />

### addProductsToNewCart

Creates a new cart and add any type of product to it

**Response:** [`AddProductsToNewCartOutput`](#addproductstonewcartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `cartItems` - [`[CartItemInput!]!`](#cartiteminput) | An array that defines the products to add to the new cart |

#### Example

##### Query

```graphql
mutation addProductsToNewCart($cartItems: [CartItemInput!]!) {
  addProductsToNewCart(cartItems: $cartItems) {
    cart {
      ...CartFragment
    }
    user_errors {
      ...CartUserInputErrorFragment
    }
  }
}
```

##### Variables

```json
{"cartItems": [CartItemInput]}
```

##### Response

```json
{
  "data": {
    "addProductsToNewCart": {
      "cart": Cart,
      "user_errors": [CartUserInputError]
    }
  }
}
```

<HorizontalLine />

### addProductsToRequisitionList

Add items to the specified requisition list.

**Response:** [`AddProductsToRequisitionListOutput`](#addproductstorequisitionlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `requisitionListUid` - [`ID!`](#id) | The unique ID of the requisition list. |
| `requisitionListItems` - [`[RequisitionListItemsInput!]!`](#requisitionlistitemsinput) | An array of products to be added to the requisition list. |

#### Example

##### Query

```graphql
mutation addProductsToRequisitionList(
  $requisitionListUid: ID!,
  $requisitionListItems: [RequisitionListItemsInput!]!
) {
  addProductsToRequisitionList(
    requisitionListUid: $requisitionListUid,
    requisitionListItems: $requisitionListItems
  ) {
    requisition_list {
      ...RequisitionListFragment
    }
  }
}
```

##### Variables

```json
{
  "requisitionListUid": "4",
  "requisitionListItems": [RequisitionListItemsInput]
}
```

##### Response

```json
{
  "data": {
    "addProductsToRequisitionList": {
      "requisition_list": RequisitionList
    }
  }
}
```

<HorizontalLine />

### addProductsToWishlist

Add one or more products to the specified wish list. This mutation supports all product types.

**Response:** [`AddProductsToWishlistOutput`](#addproductstowishlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `wishlistId` - [`ID!`](#id) | The ID of a wish list. |
| `wishlistItems` - [`[WishlistItemInput!]!`](#wishlistiteminput) | An array of products to add to the wish list. |

#### Example

##### Query

```graphql
mutation addProductsToWishlist(
  $wishlistId: ID!,
  $wishlistItems: [WishlistItemInput!]!
) {
  addProductsToWishlist(
    wishlistId: $wishlistId,
    wishlistItems: $wishlistItems
  ) {
    user_errors {
      ...WishListUserInputErrorFragment
    }
    wishlist {
      ...WishlistFragment
    }
  }
}
```

##### Variables

```json
{
  "wishlistId": "4",
  "wishlistItems": [WishlistItemInput]
}
```

##### Response

```json
{
  "data": {
    "addProductsToWishlist": {
      "user_errors": [WishListUserInputError],
      "wishlist": Wishlist
    }
  }
}
```

<HorizontalLine />

### addPurchaseOrderComment

Add a comment to an existing purchase order.

**Response:** [`AddPurchaseOrderCommentOutput`](#addpurchaseordercommentoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddPurchaseOrderCommentInput!`](#addpurchaseordercommentinput) |  |

#### Example

##### Query

```graphql
mutation addPurchaseOrderComment($input: AddPurchaseOrderCommentInput!) {
  addPurchaseOrderComment(input: $input) {
    comment {
      ...PurchaseOrderCommentFragment
    }
  }
}
```

##### Variables

```json
{"input": AddPurchaseOrderCommentInput}
```

##### Response

```json
{
  "data": {
    "addPurchaseOrderComment": {
      "comment": PurchaseOrderComment
    }
  }
}
```

<HorizontalLine />

### addPurchaseOrderItemsToCart

Add purchase order items to the shopping cart.

**Response:** [`AddProductsToCartOutput`](#addproductstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddPurchaseOrderItemsToCartInput!`](#addpurchaseorderitemstocartinput) |  |

#### Example

##### Query

```graphql
mutation addPurchaseOrderItemsToCart($input: AddPurchaseOrderItemsToCartInput!) {
  addPurchaseOrderItemsToCart(input: $input) {
    cart {
      ...CartFragment
    }
    user_errors {
      ...ErrorFragment
    }
  }
}
```

##### Variables

```json
{"input": AddPurchaseOrderItemsToCartInput}
```

##### Response

```json
{
  "data": {
    "addPurchaseOrderItemsToCart": {
      "cart": Cart,
      "user_errors": [Error]
    }
  }
}
```

<HorizontalLine />

### addRequisitionListItemsToCart

Add items in the requisition list to the customer's cart.

**Response:** [`AddRequisitionListItemsToCartOutput`](#addrequisitionlistitemstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `requisitionListUid` - [`ID!`](#id) | The unique ID of the requisition list. |
| `requisitionListItemUids` - [`[ID!]`](#id) | An array of UIDs presenting products to be added to the cart. If no UIDs are specified, all items in the requisition list will be added to the cart. |

#### Example

##### Query

```graphql
mutation addRequisitionListItemsToCart(
  $requisitionListUid: ID!,
  $requisitionListItemUids: [ID!]
) {
  addRequisitionListItemsToCart(
    requisitionListUid: $requisitionListUid,
    requisitionListItemUids: $requisitionListItemUids
  ) {
    add_requisition_list_items_to_cart_user_errors {
      ...AddRequisitionListItemToCartUserErrorFragment
    }
    cart {
      ...CartFragment
    }
    status
  }
}
```

##### Variables

```json
{
  "requisitionListUid": "4",
  "requisitionListItemUids": [4]
}
```

##### Response

```json
{
  "data": {
    "addRequisitionListItemsToCart": {
      "add_requisition_list_items_to_cart_user_errors": [
        AddRequisitionListItemToCartUserError
      ],
      "cart": Cart,
      "status": false
    }
  }
}
```

<HorizontalLine />

### addReturnComment

Add a comment to an existing return.

**Response:** [`AddReturnCommentOutput`](#addreturncommentoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddReturnCommentInput!`](#addreturncommentinput) | An input object that defines a return comment. |

#### Example

##### Query

```graphql
mutation addReturnComment($input: AddReturnCommentInput!) {
  addReturnComment(input: $input) {
    return {
      ...ReturnFragment
    }
  }
}
```

##### Variables

```json
{"input": AddReturnCommentInput}
```

##### Response

```json
{"data": {"addReturnComment": {"return": Return}}}
```

<HorizontalLine />

### addReturnTracking

Add tracking information to the return.

**Response:** [`AddReturnTrackingOutput`](#addreturntrackingoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddReturnTrackingInput!`](#addreturntrackinginput) | An input object that defines tracking information. |

#### Example

##### Query

```graphql
mutation addReturnTracking($input: AddReturnTrackingInput!) {
  addReturnTracking(input: $input) {
    return {
      ...ReturnFragment
    }
    return_shipping_tracking {
      ...ReturnShippingTrackingFragment
    }
  }
}
```

##### Variables

```json
{"input": AddReturnTrackingInput}
```

##### Response

```json
{
  "data": {
    "addReturnTracking": {
      "return": Return,
      "return_shipping_tracking": ReturnShippingTracking
    }
  }
}
```

<HorizontalLine />

### addSimpleProductsToCart

Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead.

**Response:** [`AddSimpleProductsToCartOutput`](#addsimpleproductstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddSimpleProductsToCartInput`](#addsimpleproductstocartinput) | An input object that defines which simple products to add to the cart. |

#### Example

##### Query

```graphql
mutation addSimpleProductsToCart($input: AddSimpleProductsToCartInput) {
  addSimpleProductsToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": AddSimpleProductsToCartInput}
```

##### Response

```json
{"data": {"addSimpleProductsToCart": {"cart": Cart}}}
```

<HorizontalLine />

### addVirtualProductsToCart

Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead.

**Response:** [`AddVirtualProductsToCartOutput`](#addvirtualproductstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`AddVirtualProductsToCartInput`](#addvirtualproductstocartinput) | An input object that defines which virtual products to add to the cart. |

#### Example

##### Query

```graphql
mutation addVirtualProductsToCart($input: AddVirtualProductsToCartInput) {
  addVirtualProductsToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": AddVirtualProductsToCartInput}
```

##### Response

```json
{"data": {"addVirtualProductsToCart": {"cart": Cart}}}
```

<HorizontalLine />

### addWishlistItemsToCart

Add items in the specified wishlist to the customer's cart.

**Response:** [`AddWishlistItemsToCartOutput`](#addwishlistitemstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `wishlistId` - [`ID!`](#id) | The unique ID of the wish list |
| `wishlistItemIds` - [`[ID!]`](#id) | An array of IDs representing products to be added to the cart. If no IDs are specified, all items in the wishlist will be added to the cart |

#### Example

##### Query

```graphql
mutation addWishlistItemsToCart(
  $wishlistId: ID!,
  $wishlistItemIds: [ID!]
) {
  addWishlistItemsToCart(
    wishlistId: $wishlistId,
    wishlistItemIds: $wishlistItemIds
  ) {
    add_wishlist_items_to_cart_user_errors {
      ...WishlistCartUserInputErrorFragment
    }
    status
    wishlist {
      ...WishlistFragment
    }
  }
}
```

##### Variables

```json
{"wishlistId": 4, "wishlistItemIds": [4]}
```

##### Response

```json
{
  "data": {
    "addWishlistItemsToCart": {
      "add_wishlist_items_to_cart_user_errors": [
        WishlistCartUserInputError
      ],
      "status": false,
      "wishlist": Wishlist
    }
  }
}
```

<HorizontalLine />

### applyCouponToCart

Apply a pre-defined coupon code to the specified cart.

**Response:** [`ApplyCouponToCartOutput`](#applycoupontocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ApplyCouponToCartInput`](#applycoupontocartinput) | An input object that defines the coupon code to apply to the cart. |

#### Example

##### Query

```graphql
mutation applyCouponToCart($input: ApplyCouponToCartInput) {
  applyCouponToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": ApplyCouponToCartInput}
```

##### Response

```json
{"data": {"applyCouponToCart": {"cart": Cart}}}
```

<HorizontalLine />

### applyCouponsToCart

Apply a pre-defined coupon code to the specified cart.

**Response:** [`ApplyCouponToCartOutput`](#applycoupontocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ApplyCouponsToCartInput`](#applycouponstocartinput) | An input object that defines the coupon code to apply to the cart. |

#### Example

##### Query

```graphql
mutation applyCouponsToCart($input: ApplyCouponsToCartInput) {
  applyCouponsToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": ApplyCouponsToCartInput}
```

##### Response

```json
{"data": {"applyCouponsToCart": {"cart": Cart}}}
```

<HorizontalLine />

### applyGiftCardToCart

Apply a pre-defined gift card code to the specified cart.

**Response:** [`ApplyGiftCardToCartOutput`](#applygiftcardtocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ApplyGiftCardToCartInput`](#applygiftcardtocartinput) | An input object that specifies the gift card code and cart. |

#### Example

##### Query

```graphql
mutation applyGiftCardToCart($input: ApplyGiftCardToCartInput) {
  applyGiftCardToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": ApplyGiftCardToCartInput}
```

##### Response

```json
{"data": {"applyGiftCardToCart": {"cart": Cart}}}
```

<HorizontalLine />

### applyRewardPointsToCart

Apply all available points, up to the cart total. Partial redemption is not available.

**Response:** [`ApplyRewardPointsToCartOutput`](#applyrewardpointstocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `cartId` - [`ID!`](#id) |  |

#### Example

##### Query

```graphql
mutation applyRewardPointsToCart($cartId: ID!) {
  applyRewardPointsToCart(cartId: $cartId) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"cartId": 4}
```

##### Response

```json
{"data": {"applyRewardPointsToCart": {"cart": Cart}}}
```

<HorizontalLine />

### applyStoreCreditToCart

Apply store credit to the specified cart.

**Response:** [`ApplyStoreCreditToCartOutput`](#applystorecredittocartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ApplyStoreCreditToCartInput!`](#applystorecredittocartinput) | An input object that specifies the cart ID. |

#### Example

##### Query

```graphql
mutation applyStoreCreditToCart($input: ApplyStoreCreditToCartInput!) {
  applyStoreCreditToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": ApplyStoreCreditToCartInput}
```

##### Response

```json
{"data": {"applyStoreCreditToCart": {"cart": Cart}}}
```

<HorizontalLine />

### approvePurchaseOrders

Approve purchase orders.

**Response:** [`PurchaseOrdersActionOutput`](#purchaseordersactionoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PurchaseOrdersActionInput!`](#purchaseordersactioninput) |  |

#### Example

##### Query

```graphql
mutation approvePurchaseOrders($input: PurchaseOrdersActionInput!) {
  approvePurchaseOrders(input: $input) {
    errors {
      ...PurchaseOrderActionErrorFragment
    }
    purchase_orders {
      ...PurchaseOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": PurchaseOrdersActionInput}
```

##### Response

```json
{
  "data": {
    "approvePurchaseOrders": {
      "errors": [PurchaseOrderActionError],
      "purchase_orders": [PurchaseOrder]
    }
  }
}
```

<HorizontalLine />

### assignCompareListToCustomer

Assign the specified compare list to the logged in customer.

**Response:** [`AssignCompareListToCustomerOutput`](#assigncomparelisttocustomeroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `uid` - [`ID!`](#id) | The unique ID of the compare list to be assigned. |

#### Example

##### Query

```graphql
mutation assignCompareListToCustomer($uid: ID!) {
  assignCompareListToCustomer(uid: $uid) {
    compare_list {
      ...CompareListFragment
    }
    result
  }
}
```

##### Variables

```json
{"uid": "4"}
```

##### Response

```json
{
  "data": {
    "assignCompareListToCustomer": {
      "compare_list": CompareList,
      "result": false
    }
  }
}
```

<HorizontalLine />

### assignCustomerToGuestCart

Assign a logged-in customer to the specified guest shopping cart.

**Response:** [`Cart!`](#cart)

#### Arguments

| Name | Description |
|------|-------------|
| `cart_id` - [`String!`](#string) |  |

#### Example

##### Query

```graphql
mutation assignCustomerToGuestCart($cart_id: String!) {
  assignCustomerToGuestCart(cart_id: $cart_id) {
    applied_coupon {
      ...AppliedCouponFragment
    }
    applied_coupons {
      ...AppliedCouponFragment
    }
    applied_gift_cards {
      ...AppliedGiftCardFragment
    }
    applied_reward_points {
      ...RewardPointsAmountFragment
    }
    applied_store_credit {
      ...AppliedStoreCreditFragment
    }
    available_gift_wrappings {
      ...GiftWrappingFragment
    }
    available_payment_methods {
      ...AvailablePaymentMethodFragment
    }
    billing_address {
      ...BillingCartAddressFragment
    }
    email
    gift_message {
      ...GiftMessageFragment
    }
    gift_receipt_included
    gift_wrapping {
      ...GiftWrappingFragment
    }
    id
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    itemsV2 {
      ...CartItemsFragment
    }
    prices {
      ...CartPricesFragment
    }
    printed_card_included
    rules {
      ...CartRuleStorefrontFragment
    }
    selected_payment_method {
      ...SelectedPaymentMethodFragment
    }
    shipping_addresses {
      ...ShippingCartAddressFragment
    }
    total_quantity
  }
}
```

##### Variables

```json
{"cart_id": "abc123"}
```

##### Response

```json
{
  "data": {
    "assignCustomerToGuestCart": {
      "applied_coupon": AppliedCoupon,
      "applied_coupons": [AppliedCoupon],
      "applied_gift_cards": [AppliedGiftCard],
      "applied_reward_points": RewardPointsAmount,
      "applied_store_credit": AppliedStoreCredit,
      "available_gift_wrappings": [GiftWrapping],
      "available_payment_methods": [
        AvailablePaymentMethod
      ],
      "billing_address": BillingCartAddress,
      "email": "abc123",
      "gift_message": GiftMessage,
      "gift_receipt_included": true,
      "gift_wrapping": GiftWrapping,
      "id": "4",
      "is_virtual": false,
      "items": [CartItemInterface],
      "itemsV2": CartItems,
      "prices": CartPrices,
      "printed_card_included": true,
      "rules": [CartRuleStorefront],
      "selected_payment_method": SelectedPaymentMethod,
      "shipping_addresses": [ShippingCartAddress],
      "total_quantity": 987.65
    }
  }
}
```

<HorizontalLine />

### cancelNegotiableQuoteTemplate

Cancel a negotiable quote template

**Response:** [`NegotiableQuoteTemplate`](#negotiablequotetemplate)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CancelNegotiableQuoteTemplateInput!`](#cancelnegotiablequotetemplateinput) | An input object that cancels a negotiable quote template. |

#### Example

##### Query

```graphql
mutation cancelNegotiableQuoteTemplate($input: CancelNegotiableQuoteTemplateInput!) {
  cancelNegotiableQuoteTemplate(input: $input) {
    buyer {
      ...NegotiableQuoteUserFragment
    }
    comments {
      ...NegotiableQuoteCommentFragment
    }
    expiration_date
    history {
      ...NegotiableQuoteHistoryEntryFragment
    }
    is_min_max_qty_used
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    max_order_commitment
    min_order_commitment
    name
    notifications {
      ...QuoteTemplateNotificationMessageFragment
    }
    prices {
      ...CartPricesFragment
    }
    reference_document_links {
      ...NegotiableQuoteReferenceDocumentLinkFragment
    }
    shipping_addresses {
      ...NegotiableQuoteShippingAddressFragment
    }
    status
    template_id
    total_quantity
  }
}
```

##### Variables

```json
{"input": CancelNegotiableQuoteTemplateInput}
```

##### Response

```json
{
  "data": {
    "cancelNegotiableQuoteTemplate": {
      "buyer": NegotiableQuoteUser,
      "comments": [NegotiableQuoteComment],
      "expiration_date": "xyz789",
      "history": [NegotiableQuoteHistoryEntry],
      "is_min_max_qty_used": false,
      "is_virtual": true,
      "items": [CartItemInterface],
      "max_order_commitment": 987,
      "min_order_commitment": 987,
      "name": "abc123",
      "notifications": [QuoteTemplateNotificationMessage],
      "prices": CartPrices,
      "reference_document_links": [
        NegotiableQuoteReferenceDocumentLink
      ],
      "shipping_addresses": [
        NegotiableQuoteShippingAddress
      ],
      "status": "abc123",
      "template_id": 4,
      "total_quantity": 123.45
    }
  }
}
```

<HorizontalLine />

### cancelOrder

Cancel the specified customer order.

**Response:** [`CancelOrderOutput`](#cancelorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CancelOrderInput!`](#cancelorderinput) |  |

#### Example

##### Query

```graphql
mutation cancelOrder($input: CancelOrderInput!) {
  cancelOrder(input: $input) {
    error
    errorV2 {
      ...CancelOrderErrorFragment
    }
    order {
      ...CustomerOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": CancelOrderInput}
```

##### Response

```json
{
  "data": {
    "cancelOrder": {
      "error": "xyz789",
      "errorV2": CancelOrderError,
      "order": CustomerOrder
    }
  }
}
```

<HorizontalLine />

### cancelPurchaseOrders

Cancel purchase orders.

**Response:** [`PurchaseOrdersActionOutput`](#purchaseordersactionoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PurchaseOrdersActionInput!`](#purchaseordersactioninput) |  |

#### Example

##### Query

```graphql
mutation cancelPurchaseOrders($input: PurchaseOrdersActionInput!) {
  cancelPurchaseOrders(input: $input) {
    errors {
      ...PurchaseOrderActionErrorFragment
    }
    purchase_orders {
      ...PurchaseOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": PurchaseOrdersActionInput}
```

##### Response

```json
{
  "data": {
    "cancelPurchaseOrders": {
      "errors": [PurchaseOrderActionError],
      "purchase_orders": [PurchaseOrder]
    }
  }
}
```

<HorizontalLine />

### changeCustomerPassword

Change the password for the logged-in customer.

**Response:** [`Customer`](#customer)

#### Arguments

| Name | Description |
|------|-------------|
| `currentPassword` - [`String!`](#string) | The customer&#x27;s original password. |
| `newPassword` - [`String!`](#string) | The customer&#x27;s updated password. |

#### Example

##### Query

```graphql
mutation changeCustomerPassword(
  $currentPassword: String!,
  $newPassword: String!
) {
  changeCustomerPassword(
    currentPassword: $currentPassword,
    newPassword: $newPassword
  ) {
    addresses {
      ...CustomerAddressFragment
    }
    addressesV2 {
      ...CustomerAddressesFragment
    }
    allow_remote_shopping_assistance
    companies {
      ...UserCompaniesOutputFragment
    }
    compare_list {
      ...CompareListFragment
    }
    confirmation_status
    created_at
    custom_attributes {
      ...AttributeValueInterfaceFragment
    }
    date_of_birth
    default_billing
    default_shipping
    dob
    email
    firstname
    gender
    gift_registries {
      ...GiftRegistryFragment
    }
    gift_registry {
      ...GiftRegistryFragment
    }
    group {
      ...CustomerGroupStorefrontFragment
    }
    group_id
    id
    is_subscribed
    job_title
    lastname
    middlename
    orders {
      ...CustomerOrdersFragment
    }
    prefix
    purchase_order {
      ...PurchaseOrderFragment
    }
    purchase_order_approval_rule {
      ...PurchaseOrderApprovalRuleFragment
    }
    purchase_order_approval_rule_metadata {
      ...PurchaseOrderApprovalRuleMetadataFragment
    }
    purchase_order_approval_rules {
      ...PurchaseOrderApprovalRulesFragment
    }
    purchase_orders {
      ...PurchaseOrdersFragment
    }
    purchase_orders_enabled
    requisition_lists {
      ...RequisitionListsFragment
    }
    return {
      ...ReturnFragment
    }
    returns {
      ...ReturnsFragment
    }
    reviews {
      ...ProductReviewsFragment
    }
    reward_points {
      ...RewardPointsFragment
    }
    role {
      ...CompanyRoleFragment
    }
    segments {
      ...CustomerSegmentStorefrontFragment
    }
    status
    store_credit {
      ...CustomerStoreCreditFragment
    }
    structure_id
    suffix
    taxvat
    team {
      ...CompanyTeamFragment
    }
    telephone
    wishlist {
      ...WishlistFragment
    }
    wishlist_v2 {
      ...WishlistFragment
    }
    wishlists {
      ...WishlistFragment
    }
  }
}
```

##### Variables

```json
{
  "currentPassword": "abc123",
  "newPassword": "abc123"
}
```

##### Response

```json
{
  "data": {
    "changeCustomerPassword": {
      "addresses": [CustomerAddress],
      "addressesV2": CustomerAddresses,
      "allow_remote_shopping_assistance": true,
      "companies": UserCompaniesOutput,
      "compare_list": CompareList,
      "confirmation_status": "ACCOUNT_CONFIRMED",
      "created_at": "abc123",
      "custom_attributes": [AttributeValueInterface],
      "date_of_birth": "abc123",
      "default_billing": "abc123",
      "default_shipping": "xyz789",
      "dob": "xyz789",
      "email": "abc123",
      "firstname": "xyz789",
      "gender": 987,
      "gift_registries": [GiftRegistry],
      "gift_registry": GiftRegistry,
      "group": CustomerGroupStorefront,
      "group_id": 123,
      "id": "4",
      "is_subscribed": true,
      "job_title": "abc123",
      "lastname": "abc123",
      "middlename": "xyz789",
      "orders": CustomerOrders,
      "prefix": "abc123",
      "purchase_order": PurchaseOrder,
      "purchase_order_approval_rule": PurchaseOrderApprovalRule,
      "purchase_order_approval_rule_metadata": PurchaseOrderApprovalRuleMetadata,
      "purchase_order_approval_rules": PurchaseOrderApprovalRules,
      "purchase_orders": PurchaseOrders,
      "purchase_orders_enabled": false,
      "requisition_lists": RequisitionLists,
      "return": Return,
      "returns": Returns,
      "reviews": ProductReviews,
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
      "wishlist": Wishlist,
      "wishlist_v2": Wishlist,
      "wishlists": [Wishlist]
    }
  }
}
```

<HorizontalLine />

### clearCart

Remove all items from the specified cart.

**Response:** [`ClearCartOutput!`](#clearcartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ClearCartInput!`](#clearcartinput) | An input object that defines cart ID of the shopper. |

#### Example

##### Query

```graphql
mutation clearCart($input: ClearCartInput!) {
  clearCart(input: $input) {
    cart {
      ...CartFragment
    }
    errors {
      ...ClearCartErrorFragment
    }
  }
}
```

##### Variables

```json
{"input": ClearCartInput}
```

##### Response

```json
{
  "data": {
    "clearCart": {
      "cart": Cart,
      "errors": [ClearCartError]
    }
  }
}
```

<HorizontalLine />

### clearCustomerCart

Remove all items from the specified cart.

**Response:** [`ClearCustomerCartOutput`](#clearcustomercartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `cartUid` - [`String!`](#string) | The masked ID of the cart. |

#### Example

##### Query

```graphql
mutation clearCustomerCart($cartUid: String!) {
  clearCustomerCart(cartUid: $cartUid) {
    cart {
      ...CartFragment
    }
    status
  }
}
```

##### Variables

```json
{"cartUid": "xyz789"}
```

##### Response

```json
{
  "data": {
    "clearCustomerCart": {"cart": Cart, "status": false}
  }
}
```

<HorizontalLine />

### clearWishlist

Remove all the products from the specified wish list.

**Response:** [`RemoveProductsFromWishlistOutput`](#removeproductsfromwishlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `wishlistId` - [`ID!`](#id) | The ID of a wish list. |

#### Example

##### Query

```graphql
mutation clearWishlist($wishlistId: ID!) {
  clearWishlist(wishlistId: $wishlistId) {
    user_errors {
      ...WishListUserInputErrorFragment
    }
    wishlist {
      ...WishlistFragment
    }
  }
}
```

##### Variables

```json
{"wishlistId": 4}
```

##### Response

```json
{
  "data": {
    "clearWishlist": {
      "user_errors": [WishListUserInputError],
      "wishlist": Wishlist
    }
  }
}
```

<HorizontalLine />

### closeNegotiableQuotes

Mark a negotiable quote as closed. The negotiable quote is still visible on the storefront.

**Response:** [`CloseNegotiableQuotesOutput`](#closenegotiablequotesoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CloseNegotiableQuotesInput!`](#closenegotiablequotesinput) | An input object that closes a negotiable quote. |

#### Example

##### Query

```graphql
mutation closeNegotiableQuotes($input: CloseNegotiableQuotesInput!) {
  closeNegotiableQuotes(input: $input) {
    closed_quotes {
      ...NegotiableQuoteFragment
    }
    negotiable_quotes {
      ...NegotiableQuotesOutputFragment
    }
    operation_results {
      ... on NegotiableQuoteUidOperationSuccess {
        ...NegotiableQuoteUidOperationSuccessFragment
      }
      ... on CloseNegotiableQuoteOperationFailure {
        ...CloseNegotiableQuoteOperationFailureFragment
      }
    }
    result_status
  }
}
```

##### Variables

```json
{"input": CloseNegotiableQuotesInput}
```

##### Response

```json
{
  "data": {
    "closeNegotiableQuotes": {
      "closed_quotes": [NegotiableQuote],
      "negotiable_quotes": NegotiableQuotesOutput,
      "operation_results": [
        NegotiableQuoteUidOperationSuccess
      ],
      "result_status": "SUCCESS"
    }
  }
}
```

<HorizontalLine />

### completeOrder

Synchronizes order details and place the order

**Response:** [`PlaceOrderOutput`](#placeorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompleteOrderInput`](#completeorderinput) | Describes the variables needed to complete or place the order |

#### Example

##### Query

```graphql
mutation completeOrder($input: CompleteOrderInput) {
  completeOrder(input: $input) {
    errors {
      ...PlaceOrderErrorFragment
    }
    order {
      ...OrderFragment
    }
    orderV2 {
      ...CustomerOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": CompleteOrderInput}
```

##### Response

```json
{
  "data": {
    "completeOrder": {
      "errors": [PlaceOrderError],
      "order": Order,
      "orderV2": CustomerOrder
    }
  }
}
```

<HorizontalLine />

### confirmCancelOrder

Cancel the specified guest customer order.

**Response:** [`CancelOrderOutput`](#cancelorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ConfirmCancelOrderInput!`](#confirmcancelorderinput) |  |

#### Example

##### Query

```graphql
mutation confirmCancelOrder($input: ConfirmCancelOrderInput!) {
  confirmCancelOrder(input: $input) {
    error
    errorV2 {
      ...CancelOrderErrorFragment
    }
    order {
      ...CustomerOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": ConfirmCancelOrderInput}
```

##### Response

```json
{
  "data": {
    "confirmCancelOrder": {
      "error": "abc123",
      "errorV2": CancelOrderError,
      "order": CustomerOrder
    }
  }
}
```

<HorizontalLine />

### confirmEmail

Confirms the email address for a customer.

**Response:** [`CustomerOutput`](#customeroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ConfirmEmailInput!`](#confirmemailinput) | An input object to identify the customer to confirm the email. |

#### Example

##### Query

```graphql
mutation confirmEmail($input: ConfirmEmailInput!) {
  confirmEmail(input: $input) {
    customer {
      ...CustomerFragment
    }
  }
}
```

##### Variables

```json
{"input": ConfirmEmailInput}
```

##### Response

```json
{"data": {"confirmEmail": {"customer": Customer}}}
```

<HorizontalLine />

### confirmReturn

Confirm the return.

**Response:** [`RequestReturnOutput`](#requestreturnoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ConfirmReturnInput!`](#confirmreturninput) |  |

#### Example

##### Query

```graphql
mutation confirmReturn($input: ConfirmReturnInput!) {
  confirmReturn(input: $input) {
    return {
      ...ReturnFragment
    }
    returns {
      ...ReturnsFragment
    }
  }
}
```

##### Variables

```json
{"input": ConfirmReturnInput}
```

##### Response

```json
{
  "data": {
    "confirmReturn": {
      "return": Return,
      "returns": Returns
    }
  }
}
```

<HorizontalLine />

### contactUs

Send a 'Contact Us' email to the merchant.

**Response:** [`ContactUsOutput`](#contactusoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ContactUsInput!`](#contactusinput) | An input object that defines shopper information. |

#### Example

##### Query

```graphql
mutation contactUs($input: ContactUsInput!) {
  contactUs(input: $input) {
    status
  }
}
```

##### Variables

```json
{"input": ContactUsInput}
```

##### Response

```json
{"data": {"contactUs": {"status": true}}}
```

<HorizontalLine />

### copyItemsBetweenRequisitionLists

Copy items from one requisition list to another.

**Response:** [`CopyItemsFromRequisitionListsOutput`](#copyitemsfromrequisitionlistsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `sourceRequisitionListUid` - [`ID!`](#id) | The unique ID of the source requisition list. |
| `destinationRequisitionListUid` - [`ID`](#id) | The unique ID of the destination requisition list. If null, a new requisition list will be created. |
| `requisitionListItem` - [`CopyItemsBetweenRequisitionListsInput`](#copyitemsbetweenrequisitionlistsinput) | The list of products to copy. |

#### Example

##### Query

```graphql
mutation copyItemsBetweenRequisitionLists(
  $sourceRequisitionListUid: ID!,
  $destinationRequisitionListUid: ID,
  $requisitionListItem: CopyItemsBetweenRequisitionListsInput
) {
  copyItemsBetweenRequisitionLists(
    sourceRequisitionListUid: $sourceRequisitionListUid,
    destinationRequisitionListUid: $destinationRequisitionListUid,
    requisitionListItem: $requisitionListItem
  ) {
    requisition_list {
      ...RequisitionListFragment
    }
  }
}
```

##### Variables

```json
{
  "sourceRequisitionListUid": 4,
  "destinationRequisitionListUid": "4",
  "requisitionListItem": CopyItemsBetweenRequisitionListsInput
}
```

##### Response

```json
{
  "data": {
    "copyItemsBetweenRequisitionLists": {
      "requisition_list": RequisitionList
    }
  }
}
```

<HorizontalLine />

### copyProductsBetweenWishlists

Copy products from one wish list to another. The original wish list is unchanged.

**Response:** [`CopyProductsBetweenWishlistsOutput`](#copyproductsbetweenwishlistsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `sourceWishlistUid` - [`ID!`](#id) | The ID of the original wish list. |
| `destinationWishlistUid` - [`ID!`](#id) | The ID of the target wish list. |
| `wishlistItems` - [`[WishlistItemCopyInput!]!`](#wishlistitemcopyinput) | An array of items to copy. |

#### Example

##### Query

```graphql
mutation copyProductsBetweenWishlists(
  $sourceWishlistUid: ID!,
  $destinationWishlistUid: ID!,
  $wishlistItems: [WishlistItemCopyInput!]!
) {
  copyProductsBetweenWishlists(
    sourceWishlistUid: $sourceWishlistUid,
    destinationWishlistUid: $destinationWishlistUid,
    wishlistItems: $wishlistItems
  ) {
    destination_wishlist {
      ...WishlistFragment
    }
    source_wishlist {
      ...WishlistFragment
    }
    user_errors {
      ...WishListUserInputErrorFragment
    }
  }
}
```

##### Variables

```json
{
  "sourceWishlistUid": "4",
  "destinationWishlistUid": 4,
  "wishlistItems": [WishlistItemCopyInput]
}
```

##### Response

```json
{
  "data": {
    "copyProductsBetweenWishlists": {
      "destination_wishlist": Wishlist,
      "source_wishlist": Wishlist,
      "user_errors": [WishListUserInputError]
    }
  }
}
```

<HorizontalLine />

### createBraintreeClientToken

Creates Client Token for Braintree Javascript SDK initialization.

**Response:** [`String!`](#string)

#### Example

##### Query

```graphql
mutation createBraintreeClientToken {
  createBraintreeClientToken
}
```

##### Response

```json
{
  "data": {
    "createBraintreeClientToken": "xyz789"
  }
}
```

<HorizontalLine />

### createBraintreePayPalClientToken

Creates Client Token for Braintree PayPal Javascript SDK initialization.

**Response:** [`String!`](#string)

#### Example

##### Query

```graphql
mutation createBraintreePayPalClientToken {
  createBraintreePayPalClientToken
}
```

##### Response

```json
{
  "data": {
    "createBraintreePayPalClientToken": "xyz789"
  }
}
```

<HorizontalLine />

### createBraintreePayPalVaultClientToken

Creates Client Token for Braintree PayPal Vault Javascript SDK initialization.

**Response:** [`String!`](#string)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`BraintreeVaultInput`](#braintreevaultinput) |  |

#### Example

##### Query

```graphql
mutation createBraintreePayPalVaultClientToken($input: BraintreeVaultInput) {
  createBraintreePayPalVaultClientToken(input: $input)
}
```

##### Variables

```json
{"input": BraintreeVaultInput}
```

##### Response

```json
{
  "data": {
    "createBraintreePayPalVaultClientToken": "abc123"
  }
}
```

<HorizontalLine />

### createCompany

Create a company at the request of either a customer or a guest.

**Response:** [`CreateCompanyOutput`](#createcompanyoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyCreateInput!`](#companycreateinput) |  |

#### Example

##### Query

```graphql
mutation createCompany($input: CompanyCreateInput!) {
  createCompany(input: $input) {
    company {
      ...CompanyFragment
    }
  }
}
```

##### Variables

```json
{"input": CompanyCreateInput}
```

##### Response

```json
{"data": {"createCompany": {"company": Company}}}
```

<HorizontalLine />

### createCompanyRole

Create a new company role.

**Response:** [`CreateCompanyRoleOutput`](#createcompanyroleoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyRoleCreateInput!`](#companyrolecreateinput) |  |

#### Example

##### Query

```graphql
mutation createCompanyRole($input: CompanyRoleCreateInput!) {
  createCompanyRole(input: $input) {
    role {
      ...CompanyRoleFragment
    }
  }
}
```

##### Variables

```json
{"input": CompanyRoleCreateInput}
```

##### Response

```json
{"data": {"createCompanyRole": {"role": CompanyRole}}}
```

<HorizontalLine />

### createCompanyTeam

Create a new team for the customer's company within the current company context.

**Response:** [`CreateCompanyTeamOutput`](#createcompanyteamoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyTeamCreateInput!`](#companyteamcreateinput) |  |

#### Example

##### Query

```graphql
mutation createCompanyTeam($input: CompanyTeamCreateInput!) {
  createCompanyTeam(input: $input) {
    team {
      ...CompanyTeamFragment
    }
  }
}
```

##### Variables

```json
{"input": CompanyTeamCreateInput}
```

##### Response

```json
{"data": {"createCompanyTeam": {"team": CompanyTeam}}}
```

<HorizontalLine />

### createCompanyUser

Create a new company user at the request of an existing customer.

**Response:** [`CreateCompanyUserOutput`](#createcompanyuseroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyUserCreateInput!`](#companyusercreateinput) |  |

#### Example

##### Query

```graphql
mutation createCompanyUser($input: CompanyUserCreateInput!) {
  createCompanyUser(input: $input) {
    user {
      ...CustomerFragment
    }
  }
}
```

##### Variables

```json
{"input": CompanyUserCreateInput}
```

##### Response

```json
{"data": {"createCompanyUser": {"user": Customer}}}
```

<HorizontalLine />

### createCompareList

Create a new compare list. The compare list is saved for logged in customers.

**Response:** [`CompareList`](#comparelist)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CreateCompareListInput`](#createcomparelistinput) |  |

#### Example

##### Query

```graphql
mutation createCompareList($input: CreateCompareListInput) {
  createCompareList(input: $input) {
    attributes {
      ...ComparableAttributeFragment
    }
    item_count
    items {
      ...ComparableItemFragment
    }
    uid
  }
}
```

##### Variables

```json
{"input": CreateCompareListInput}
```

##### Response

```json
{
  "data": {
    "createCompareList": {
      "attributes": [ComparableAttribute],
      "item_count": 123,
      "items": [ComparableItem],
      "uid": 4
    }
  }
}
```

<HorizontalLine />

### createCustomer

*Deprecated*

Use `createCustomerV2` instead.

**Response:** [`CustomerOutput`](#customeroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CustomerInput!`](#customerinput) | An input object that defines the customer to be created. |

#### Example

##### Query

```graphql
mutation createCustomer($input: CustomerInput!) {
  createCustomer(input: $input) {
    customer {
      ...CustomerFragment
    }
  }
}
```

##### Variables

```json
{"input": CustomerInput}
```

##### Response

```json
{"data": {"createCustomer": {"customer": Customer}}}
```

<HorizontalLine />

### createCustomerAddress

Create a billing or shipping address for a customer or guest.

**Response:** [`CustomerAddress`](#customeraddress)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CustomerAddressInput!`](#customeraddressinput) |  |

#### Example

##### Query

```graphql
mutation createCustomerAddress($input: CustomerAddressInput!) {
  createCustomerAddress(input: $input) {
    city
    company
    country_code
    country_id
    custom_attributes {
      ...CustomerAddressAttributeFragment
    }
    custom_attributesV2 {
      ...AttributeValueInterfaceFragment
    }
    customer_id
    default_billing
    default_shipping
    extension_attributes {
      ...CustomerAddressAttributeFragment
    }
    fax
    firstname
    id
    lastname
    middlename
    postcode
    prefix
    region {
      ...CustomerAddressRegionFragment
    }
    region_id
    street
    suffix
    telephone
    uid
    vat_id
  }
}
```

##### Variables

```json
{"input": CustomerAddressInput}
```

##### Response

```json
{
  "data": {
    "createCustomerAddress": {
      "city": "xyz789",
      "company": "xyz789",
      "country_code": "AF",
      "country_id": "abc123",
      "custom_attributes": [CustomerAddressAttribute],
      "custom_attributesV2": [AttributeValueInterface],
      "customer_id": 123,
      "default_billing": false,
      "default_shipping": false,
      "extension_attributes": [CustomerAddressAttribute],
      "fax": "abc123",
      "firstname": "xyz789",
      "id": 123,
      "lastname": "xyz789",
      "middlename": "xyz789",
      "postcode": "abc123",
      "prefix": "abc123",
      "region": CustomerAddressRegion,
      "region_id": 987,
      "street": ["xyz789"],
      "suffix": "xyz789",
      "telephone": "xyz789",
      "uid": 4,
      "vat_id": "xyz789"
    }
  }
}
```

<HorizontalLine />

### createCustomerV2

Create a customer account.

**Response:** [`CustomerOutput`](#customeroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CustomerCreateInput!`](#customercreateinput) | An input object that defines the customer to be created. |

#### Example

##### Query

```graphql
mutation createCustomerV2($input: CustomerCreateInput!) {
  createCustomerV2(input: $input) {
    customer {
      ...CustomerFragment
    }
  }
}
```

##### Variables

```json
{"input": CustomerCreateInput}
```

##### Response

```json
{"data": {"createCustomerV2": {"customer": Customer}}}
```

<HorizontalLine />

### createEmptyCart

*Deprecated*

Use `Mutation.createGuestCart` or `Query.customerCart` for logged in customer

Create an empty shopping cart for a guest or logged in user

**Response:** [`String`](#string)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`createEmptyCartInput`](#createemptycartinput) | An optional input object that assigns the specified ID to the cart. |

#### Example

##### Query

```graphql
mutation createEmptyCart($input: createEmptyCartInput) {
  createEmptyCart(input: $input)
}
```

##### Variables

```json
{"input": createEmptyCartInput}
```

##### Response

```json
{"data": {"createEmptyCart": "abc123"}}
```

<HorizontalLine />

### createGiftRegistry

Create a gift registry on behalf of the customer.

**Response:** [`CreateGiftRegistryOutput`](#creategiftregistryoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `giftRegistry` - [`CreateGiftRegistryInput!`](#creategiftregistryinput) | An input object that defines a new gift registry. |

#### Example

##### Query

```graphql
mutation createGiftRegistry($giftRegistry: CreateGiftRegistryInput!) {
  createGiftRegistry(giftRegistry: $giftRegistry) {
    gift_registry {
      ...GiftRegistryFragment
    }
  }
}
```

##### Variables

```json
{"giftRegistry": CreateGiftRegistryInput}
```

##### Response

```json
{
  "data": {
    "createGiftRegistry": {"gift_registry": GiftRegistry}
  }
}
```

<HorizontalLine />

### createGuestCart

Create a new shopping cart

**Response:** [`CreateGuestCartOutput`](#createguestcartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CreateGuestCartInput`](#createguestcartinput) |  |

#### Example

##### Query

```graphql
mutation createGuestCart($input: CreateGuestCartInput) {
  createGuestCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": CreateGuestCartInput}
```

##### Response

```json
{"data": {"createGuestCart": {"cart": Cart}}}
```

<HorizontalLine />

### createPayflowProToken

Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods

**Response:** [`CreatePayflowProTokenOutput`](#createpayflowprotokenoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PayflowProTokenInput!`](#payflowprotokeninput) | An input object that defines the requirements to fetch payment token information. |

#### Example

##### Query

```graphql
mutation createPayflowProToken($input: PayflowProTokenInput!) {
  createPayflowProToken(input: $input) {
    response_message
    result
    result_code
    secure_token
    secure_token_id
  }
}
```

##### Variables

```json
{"input": PayflowProTokenInput}
```

##### Response

```json
{
  "data": {
    "createPayflowProToken": {
      "response_message": "xyz789",
      "result": 123,
      "result_code": 987,
      "secure_token": "abc123",
      "secure_token_id": "abc123"
    }
  }
}
```

<HorizontalLine />

### createPaymentOrder

Creates a payment order for further payment processing

**Response:** [`CreatePaymentOrderOutput`](#createpaymentorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CreatePaymentOrderInput!`](#createpaymentorderinput) | Contains payment order details that are used while processing the payment order |

#### Example

##### Query

```graphql
mutation createPaymentOrder($input: CreatePaymentOrderInput!) {
  createPaymentOrder(input: $input) {
    amount
    currency_code
    id
    mp_order_id
    status
  }
}
```

##### Variables

```json
{"input": CreatePaymentOrderInput}
```

##### Response

```json
{
  "data": {
    "createPaymentOrder": {
      "amount": 123.45,
      "currency_code": "abc123",
      "id": "xyz789",
      "mp_order_id": "abc123",
      "status": "abc123"
    }
  }
}
```

<HorizontalLine />

### createPaypalExpressToken

Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods.

**Response:** [`PaypalExpressTokenOutput`](#paypalexpresstokenoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PaypalExpressTokenInput!`](#paypalexpresstokeninput) | An input object that defines the requirements to receive a payment token. |

#### Example

##### Query

```graphql
mutation createPaypalExpressToken($input: PaypalExpressTokenInput!) {
  createPaypalExpressToken(input: $input) {
    paypal_urls {
      ...PaypalExpressUrlListFragment
    }
    token
  }
}
```

##### Variables

```json
{"input": PaypalExpressTokenInput}
```

##### Response

```json
{
  "data": {
    "createPaypalExpressToken": {
      "paypal_urls": PaypalExpressUrlList,
      "token": "abc123"
    }
  }
}
```

<HorizontalLine />

### createProductReview

Create a product review for the specified product.

**Response:** [`CreateProductReviewOutput!`](#createproductreviewoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CreateProductReviewInput!`](#createproductreviewinput) | An input object that contains the details necessary to create a product review. |

#### Example

##### Query

```graphql
mutation createProductReview($input: CreateProductReviewInput!) {
  createProductReview(input: $input) {
    review {
      ...ProductReviewFragment
    }
  }
}
```

##### Variables

```json
{"input": CreateProductReviewInput}
```

##### Response

```json
{
  "data": {
    "createProductReview": {"review": ProductReview}
  }
}
```

<HorizontalLine />

### createPurchaseOrderApprovalRule

Create a purchase order approval rule.

**Response:** [`PurchaseOrderApprovalRule`](#purchaseorderapprovalrule)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PurchaseOrderApprovalRuleInput!`](#purchaseorderapprovalruleinput) |  |

#### Example

##### Query

```graphql
mutation createPurchaseOrderApprovalRule($input: PurchaseOrderApprovalRuleInput!) {
  createPurchaseOrderApprovalRule(input: $input) {
    applies_to_roles {
      ...CompanyRoleFragment
    }
    approver_roles {
      ...CompanyRoleFragment
    }
    condition {
      ...PurchaseOrderApprovalRuleConditionInterfaceFragment
    }
    created_at
    created_by
    description
    name
    status
    uid
    updated_at
  }
}
```

##### Variables

```json
{"input": PurchaseOrderApprovalRuleInput}
```

##### Response

```json
{
  "data": {
    "createPurchaseOrderApprovalRule": {
      "applies_to_roles": [CompanyRole],
      "approver_roles": [CompanyRole],
      "condition": PurchaseOrderApprovalRuleConditionInterface,
      "created_at": "xyz789",
      "created_by": "abc123",
      "description": "abc123",
      "name": "xyz789",
      "status": "ENABLED",
      "uid": 4,
      "updated_at": "abc123"
    }
  }
}
```

<HorizontalLine />

### createRequisitionList

Create an empty requisition list.

**Response:** [`CreateRequisitionListOutput`](#createrequisitionlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CreateRequisitionListInput`](#createrequisitionlistinput) |  |

#### Example

##### Query

```graphql
mutation createRequisitionList($input: CreateRequisitionListInput) {
  createRequisitionList(input: $input) {
    requisition_list {
      ...RequisitionListFragment
    }
  }
}
```

##### Variables

```json
{"input": CreateRequisitionListInput}
```

##### Response

```json
{
  "data": {
    "createRequisitionList": {
      "requisition_list": RequisitionList
    }
  }
}
```

<HorizontalLine />

### createVaultCardPaymentToken

Creates a vault payment token

**Response:** [`CreateVaultCardPaymentTokenOutput`](#createvaultcardpaymenttokenoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CreateVaultCardPaymentTokenInput!`](#createvaultcardpaymenttokeninput) | Describe the variables needed to create a vault card payment token |

#### Example

##### Query

```graphql
mutation createVaultCardPaymentToken($input: CreateVaultCardPaymentTokenInput!) {
  createVaultCardPaymentToken(input: $input) {
    payment_source {
      ...PaymentSourceOutputFragment
    }
    vault_token_id
  }
}
```

##### Variables

```json
{"input": CreateVaultCardPaymentTokenInput}
```

##### Response

```json
{
  "data": {
    "createVaultCardPaymentToken": {
      "payment_source": PaymentSourceOutput,
      "vault_token_id": "xyz789"
    }
  }
}
```

<HorizontalLine />

### createVaultCardSetupToken

Creates a vault card setup token

**Response:** [`CreateVaultCardSetupTokenOutput`](#createvaultcardsetuptokenoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CreateVaultCardSetupTokenInput!`](#createvaultcardsetuptokeninput) | Describe the variables needed to create a vault card setup token |

#### Example

##### Query

```graphql
mutation createVaultCardSetupToken($input: CreateVaultCardSetupTokenInput!) {
  createVaultCardSetupToken(input: $input) {
    setup_token
  }
}
```

##### Variables

```json
{"input": CreateVaultCardSetupTokenInput}
```

##### Response

```json
{
  "data": {
    "createVaultCardSetupToken": {
      "setup_token": "xyz789"
    }
  }
}
```

<HorizontalLine />

### createWishlist

Create a new wish list.

**Response:** [`CreateWishlistOutput`](#createwishlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CreateWishlistInput!`](#createwishlistinput) | An input object that defines a new wish list. |

#### Example

##### Query

```graphql
mutation createWishlist($input: CreateWishlistInput!) {
  createWishlist(input: $input) {
    wishlist {
      ...WishlistFragment
    }
  }
}
```

##### Variables

```json
{"input": CreateWishlistInput}
```

##### Response

```json
{"data": {"createWishlist": {"wishlist": Wishlist}}}
```

<HorizontalLine />

### deleteCompanyRole

Delete the specified company role.

**Response:** [`DeleteCompanyRoleOutput`](#deletecompanyroleoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `id` - [`ID!`](#id) |  |

#### Example

##### Query

```graphql
mutation deleteCompanyRole($id: ID!) {
  deleteCompanyRole(id: $id) {
    success
  }
}
```

##### Variables

```json
{"id": 4}
```

##### Response

```json
{"data": {"deleteCompanyRole": {"success": true}}}
```

<HorizontalLine />

### deleteCompanyTeam

Delete the specified company team.

**Response:** [`DeleteCompanyTeamOutput`](#deletecompanyteamoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `id` - [`ID!`](#id) |  |

#### Example

##### Query

```graphql
mutation deleteCompanyTeam($id: ID!) {
  deleteCompanyTeam(id: $id) {
    success
  }
}
```

##### Variables

```json
{"id": 4}
```

##### Response

```json
{"data": {"deleteCompanyTeam": {"success": false}}}
```

<HorizontalLine />

### deleteCompanyUser

*Deprecated*

Use deleteCompanyUserV2 instead. The current method only deactivates the user account associated with the company.

Delete the specified company user.

**Response:** [`DeleteCompanyUserOutput`](#deletecompanyuseroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `id` - [`ID!`](#id) |  |

#### Example

##### Query

```graphql
mutation deleteCompanyUser($id: ID!) {
  deleteCompanyUser(id: $id) {
    success
  }
}
```

##### Variables

```json
{"id": 4}
```

##### Response

```json
{"data": {"deleteCompanyUser": {"success": true}}}
```

<HorizontalLine />

### deleteCompanyUserV2

Delete the specified company user.

**Response:** [`DeleteCompanyUserOutput`](#deletecompanyuseroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `id` - [`ID!`](#id) |  |

#### Example

##### Query

```graphql
mutation deleteCompanyUserV2($id: ID!) {
  deleteCompanyUserV2(id: $id) {
    success
  }
}
```

##### Variables

```json
{"id": 4}
```

##### Response

```json
{"data": {"deleteCompanyUserV2": {"success": true}}}
```

<HorizontalLine />

### deleteCompareList

Delete the specified compare list.

**Response:** [`DeleteCompareListOutput`](#deletecomparelistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `uid` - [`ID!`](#id) | The unique ID of the compare list to be deleted. |

#### Example

##### Query

```graphql
mutation deleteCompareList($uid: ID!) {
  deleteCompareList(uid: $uid) {
    result
  }
}
```

##### Variables

```json
{"uid": "4"}
```

##### Response

```json
{"data": {"deleteCompareList": {"result": false}}}
```

<HorizontalLine />

### deleteCustomer

Delete customer account

**Response:** [`Boolean`](#boolean)

#### Example

##### Query

```graphql
mutation deleteCustomer {
  deleteCustomer
}
```

##### Response

```json
{"data": {"deleteCustomer": false}}
```

<HorizontalLine />

### deleteCustomerAddress

*Deprecated*

Use `deleteCustomerAddressV2` instead.

Delete the billing or shipping address of a customer.

**Response:** [`Boolean`](#boolean)

#### Arguments

| Name | Description |
|------|-------------|
| `id` - [`Int!`](#int) | The ID of the customer address to be deleted. |

#### Example

##### Query

```graphql
mutation deleteCustomerAddress($id: Int!) {
  deleteCustomerAddress(id: $id)
}
```

##### Variables

```json
{"id": 987}
```

##### Response

```json
{"data": {"deleteCustomerAddress": true}}
```

<HorizontalLine />

### deleteCustomerAddressV2

Delete the billing or shipping address of a customer.

**Response:** [`Boolean`](#boolean)

#### Arguments

| Name | Description |
|------|-------------|
| `uid` - [`ID!`](#id) | The unique ID of the customer address to be deleted. |

#### Example

##### Query

```graphql
mutation deleteCustomerAddressV2($uid: ID!) {
  deleteCustomerAddressV2(uid: $uid)
}
```

##### Variables

```json
{"uid": "4"}
```

##### Response

```json
{"data": {"deleteCustomerAddressV2": false}}
```

<HorizontalLine />

### deleteNegotiableQuoteTemplate

Delete a negotiable quote template

**Response:** [`Boolean!`](#boolean)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`DeleteNegotiableQuoteTemplateInput!`](#deletenegotiablequotetemplateinput) | An input object that cancels a negotiable quote template. |

#### Example

##### Query

```graphql
mutation deleteNegotiableQuoteTemplate($input: DeleteNegotiableQuoteTemplateInput!) {
  deleteNegotiableQuoteTemplate(input: $input)
}
```

##### Variables

```json
{"input": DeleteNegotiableQuoteTemplateInput}
```

##### Response

```json
{"data": {"deleteNegotiableQuoteTemplate": true}}
```

<HorizontalLine />

### deleteNegotiableQuotes

Delete a negotiable quote. The negotiable quote will not be displayed on the storefront.

**Response:** [`DeleteNegotiableQuotesOutput`](#deletenegotiablequotesoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`DeleteNegotiableQuotesInput!`](#deletenegotiablequotesinput) | An input object that deletes a negotiable quote. |

#### Example

##### Query

```graphql
mutation deleteNegotiableQuotes($input: DeleteNegotiableQuotesInput!) {
  deleteNegotiableQuotes(input: $input) {
    negotiable_quotes {
      ...NegotiableQuotesOutputFragment
    }
    operation_results {
      ... on NegotiableQuoteUidOperationSuccess {
        ...NegotiableQuoteUidOperationSuccessFragment
      }
      ... on DeleteNegotiableQuoteOperationFailure {
        ...DeleteNegotiableQuoteOperationFailureFragment
      }
    }
    result_status
  }
}
```

##### Variables

```json
{"input": DeleteNegotiableQuotesInput}
```

##### Response

```json
{
  "data": {
    "deleteNegotiableQuotes": {
      "negotiable_quotes": NegotiableQuotesOutput,
      "operation_results": [
        NegotiableQuoteUidOperationSuccess
      ],
      "result_status": "SUCCESS"
    }
  }
}
```

<HorizontalLine />

### deletePaymentToken

Delete a customer's payment token.

**Response:** [`DeletePaymentTokenOutput`](#deletepaymenttokenoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `public_hash` - [`String!`](#string) | The reusable payment token securely stored in the vault. |

#### Example

##### Query

```graphql
mutation deletePaymentToken($public_hash: String!) {
  deletePaymentToken(public_hash: $public_hash) {
    customerPaymentTokens {
      ...CustomerPaymentTokensFragment
    }
    result
  }
}
```

##### Variables

```json
{"public_hash": "abc123"}
```

##### Response

```json
{
  "data": {
    "deletePaymentToken": {
      "customerPaymentTokens": CustomerPaymentTokens,
      "result": true
    }
  }
}
```

<HorizontalLine />

### deletePurchaseOrderApprovalRule

Delete existing purchase order approval rules.

**Response:** [`DeletePurchaseOrderApprovalRuleOutput`](#deletepurchaseorderapprovalruleoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`DeletePurchaseOrderApprovalRuleInput!`](#deletepurchaseorderapprovalruleinput) |  |

#### Example

##### Query

```graphql
mutation deletePurchaseOrderApprovalRule($input: DeletePurchaseOrderApprovalRuleInput!) {
  deletePurchaseOrderApprovalRule(input: $input) {
    errors {
      ...DeletePurchaseOrderApprovalRuleErrorFragment
    }
  }
}
```

##### Variables

```json
{"input": DeletePurchaseOrderApprovalRuleInput}
```

##### Response

```json
{
  "data": {
    "deletePurchaseOrderApprovalRule": {
      "errors": [DeletePurchaseOrderApprovalRuleError]
    }
  }
}
```

<HorizontalLine />

### deleteRequisitionList

Delete a requisition list.

**Response:** [`DeleteRequisitionListOutput`](#deleterequisitionlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `requisitionListUid` - [`ID!`](#id) | The unique ID of the requisition list. |

#### Example

##### Query

```graphql
mutation deleteRequisitionList($requisitionListUid: ID!) {
  deleteRequisitionList(requisitionListUid: $requisitionListUid) {
    requisition_lists {
      ...RequisitionListsFragment
    }
    status
  }
}
```

##### Variables

```json
{"requisitionListUid": "4"}
```

##### Response

```json
{
  "data": {
    "deleteRequisitionList": {
      "requisition_lists": RequisitionLists,
      "status": false
    }
  }
}
```

<HorizontalLine />

### deleteRequisitionListItems

Delete items from a requisition list.

**Response:** [`DeleteRequisitionListItemsOutput`](#deleterequisitionlistitemsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `requisitionListUid` - [`ID!`](#id) | The unique ID of the requisition list. |
| `requisitionListItemUids` - [`[ID!]!`](#id) | An array of UIDs representing products to be removed from the requisition list. |

#### Example

##### Query

```graphql
mutation deleteRequisitionListItems(
  $requisitionListUid: ID!,
  $requisitionListItemUids: [ID!]!
) {
  deleteRequisitionListItems(
    requisitionListUid: $requisitionListUid,
    requisitionListItemUids: $requisitionListItemUids
  ) {
    requisition_list {
      ...RequisitionListFragment
    }
  }
}
```

##### Variables

```json
{
  "requisitionListUid": "4",
  "requisitionListItemUids": [4]
}
```

##### Response

```json
{
  "data": {
    "deleteRequisitionListItems": {
      "requisition_list": RequisitionList
    }
  }
}
```

<HorizontalLine />

### deleteWishlist

Delete the specified wish list. You cannot delete the customer's default (first) wish list.

**Response:** [`DeleteWishlistOutput`](#deletewishlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `wishlistId` - [`ID!`](#id) | The ID of the wish list to delete. |

#### Example

##### Query

```graphql
mutation deleteWishlist($wishlistId: ID!) {
  deleteWishlist(wishlistId: $wishlistId) {
    status
    wishlists {
      ...WishlistFragment
    }
  }
}
```

##### Variables

```json
{"wishlistId": 4}
```

##### Response

```json
{
  "data": {
    "deleteWishlist": {
      "status": false,
      "wishlists": [Wishlist]
    }
  }
}
```

<HorizontalLine />

### duplicateNegotiableQuote

Negotiable Quote resulting from duplication operation.

**Response:** [`DuplicateNegotiableQuoteOutput`](#duplicatenegotiablequoteoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`DuplicateNegotiableQuoteInput!`](#duplicatenegotiablequoteinput) | An input object that defines ID of the quote to be duplicated. |

#### Example

##### Query

```graphql
mutation duplicateNegotiableQuote($input: DuplicateNegotiableQuoteInput!) {
  duplicateNegotiableQuote(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": DuplicateNegotiableQuoteInput}
```

##### Response

```json
{
  "data": {
    "duplicateNegotiableQuote": {"quote": NegotiableQuote}
  }
}
```

<HorizontalLine />

### estimateShippingMethods

Estimate shipping method(s) for cart based on address

**Response:** [`[AvailableShippingMethod]`](#availableshippingmethod)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`EstimateTotalsInput!`](#estimatetotalsinput) | An input object that specifies details for estimation of available shipping methods |

#### Example

##### Query

```graphql
mutation estimateShippingMethods($input: EstimateTotalsInput!) {
  estimateShippingMethods(input: $input) {
    amount {
      ...MoneyFragment
    }
    available
    base_amount {
      ...MoneyFragment
    }
    carrier_code
    carrier_title
    error_message
    method_code
    method_title
    price_excl_tax {
      ...MoneyFragment
    }
    price_incl_tax {
      ...MoneyFragment
    }
  }
}
```

##### Variables

```json
{"input": EstimateTotalsInput}
```

##### Response

```json
{
  "data": {
    "estimateShippingMethods": [
      {
        "amount": Money,
        "available": true,
        "base_amount": Money,
        "carrier_code": "xyz789",
        "carrier_title": "xyz789",
        "error_message": "xyz789",
        "method_code": "xyz789",
        "method_title": "xyz789",
        "price_excl_tax": Money,
        "price_incl_tax": Money
      }
    ]
  }
}
```

<HorizontalLine />

### estimateTotals

Estimate totals for cart based on the address

**Response:** [`EstimateTotalsOutput!`](#estimatetotalsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`EstimateTotalsInput!`](#estimatetotalsinput) | An input object that specifies details for cart totals estimation |

#### Example

##### Query

```graphql
mutation estimateTotals($input: EstimateTotalsInput!) {
  estimateTotals(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": EstimateTotalsInput}
```

##### Response

```json
{"data": {"estimateTotals": {"cart": Cart}}}
```

<HorizontalLine />

### exchangeExternalCustomerToken

Generate a token for specified customer.

**Response:** [`ExchangeExternalCustomerTokenOutput`](#exchangeexternalcustomertokenoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ExchangeExternalCustomerTokenInput`](#exchangeexternalcustomertokeninput) | Contains details about external customer. |

#### Example

##### Query

```graphql
mutation exchangeExternalCustomerToken($input: ExchangeExternalCustomerTokenInput) {
  exchangeExternalCustomerToken(input: $input) {
    customer {
      ...CustomerFragment
    }
    token
  }
}
```

##### Variables

```json
{"input": ExchangeExternalCustomerTokenInput}
```

##### Response

```json
{
  "data": {
    "exchangeExternalCustomerToken": {
      "customer": Customer,
      "token": "xyz789"
    }
  }
}
```

<HorizontalLine />

### generateCustomerToken

Generate a token for specified customer.

**Response:** [`CustomerToken`](#customertoken)

#### Arguments

| Name | Description |
|------|-------------|
| `email` - [`String!`](#string) | The customer&#x27;s email address. |
| `password` - [`String!`](#string) | The customer&#x27;s password. |

#### Example

##### Query

```graphql
mutation generateCustomerToken(
  $email: String!,
  $password: String!
) {
  generateCustomerToken(
    email: $email,
    password: $password
  ) {
    token
  }
}
```

##### Variables

```json
{
  "email": "xyz789",
  "password": "abc123"
}
```

##### Response

```json
{
  "data": {
    "generateCustomerToken": {
      "token": "abc123"
    }
  }
}
```

<HorizontalLine />

### generateCustomerTokenAsAdmin

Request a customer token so that an administrator can perform remote shopping assistance.

**Response:** [`GenerateCustomerTokenAsAdminOutput`](#generatecustomertokenasadminoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`GenerateCustomerTokenAsAdminInput!`](#generatecustomertokenasadmininput) | An input object that defines the customer email address. |

#### Example

##### Query

```graphql
mutation generateCustomerTokenAsAdmin($input: GenerateCustomerTokenAsAdminInput!) {
  generateCustomerTokenAsAdmin(input: $input) {
    customer_token
  }
}
```

##### Variables

```json
{"input": GenerateCustomerTokenAsAdminInput}
```

##### Response

```json
{
  "data": {
    "generateCustomerTokenAsAdmin": {
      "customer_token": "xyz789"
    }
  }
}
```

<HorizontalLine />

### generateNegotiableQuoteFromTemplate

Generate a negotiable quote from an accept quote template.

**Response:** [`GenerateNegotiableQuoteFromTemplateOutput`](#generatenegotiablequotefromtemplateoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`GenerateNegotiableQuoteFromTemplateInput!`](#generatenegotiablequotefromtemplateinput) | An input object that contains the data to generate a negotiable quote from quote template. |

#### Example

##### Query

```graphql
mutation generateNegotiableQuoteFromTemplate($input: GenerateNegotiableQuoteFromTemplateInput!) {
  generateNegotiableQuoteFromTemplate(input: $input) {
    negotiable_quote_uid
  }
}
```

##### Variables

```json
{"input": GenerateNegotiableQuoteFromTemplateInput}
```

##### Response

```json
{"data": {"generateNegotiableQuoteFromTemplate": {"negotiable_quote_uid": 4}}}
```

<HorizontalLine />

### handlePayflowProResponse

Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods.

**Response:** [`PayflowProResponseOutput`](#payflowproresponseoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PayflowProResponseInput!`](#payflowproresponseinput) | An input object that includes the payload returned by PayPal and the cart ID. |

#### Example

##### Query

```graphql
mutation handlePayflowProResponse($input: PayflowProResponseInput!) {
  handlePayflowProResponse(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": PayflowProResponseInput}
```

##### Response

```json
{"data": {"handlePayflowProResponse": {"cart": Cart}}}
```

<HorizontalLine />

### mergeCarts

Transfer the contents of a guest cart into the cart of a logged-in customer.

**Response:** [`Cart!`](#cart)

#### Arguments

| Name | Description |
|------|-------------|
| `source_cart_id` - [`String!`](#string) | The guest&#x27;s cart ID before they login. |
| `destination_cart_id` - [`String`](#string) | The cart ID after the guest logs in. |

#### Example

##### Query

```graphql
mutation mergeCarts(
  $source_cart_id: String!,
  $destination_cart_id: String
) {
  mergeCarts(
    source_cart_id: $source_cart_id,
    destination_cart_id: $destination_cart_id
  ) {
    applied_coupon {
      ...AppliedCouponFragment
    }
    applied_coupons {
      ...AppliedCouponFragment
    }
    applied_gift_cards {
      ...AppliedGiftCardFragment
    }
    applied_reward_points {
      ...RewardPointsAmountFragment
    }
    applied_store_credit {
      ...AppliedStoreCreditFragment
    }
    available_gift_wrappings {
      ...GiftWrappingFragment
    }
    available_payment_methods {
      ...AvailablePaymentMethodFragment
    }
    billing_address {
      ...BillingCartAddressFragment
    }
    email
    gift_message {
      ...GiftMessageFragment
    }
    gift_receipt_included
    gift_wrapping {
      ...GiftWrappingFragment
    }
    id
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    itemsV2 {
      ...CartItemsFragment
    }
    prices {
      ...CartPricesFragment
    }
    printed_card_included
    rules {
      ...CartRuleStorefrontFragment
    }
    selected_payment_method {
      ...SelectedPaymentMethodFragment
    }
    shipping_addresses {
      ...ShippingCartAddressFragment
    }
    total_quantity
  }
}
```

##### Variables

```json
{
  "source_cart_id": "xyz789",
  "destination_cart_id": "xyz789"
}
```

##### Response

```json
{
  "data": {
    "mergeCarts": {
      "applied_coupon": AppliedCoupon,
      "applied_coupons": [AppliedCoupon],
      "applied_gift_cards": [AppliedGiftCard],
      "applied_reward_points": RewardPointsAmount,
      "applied_store_credit": AppliedStoreCredit,
      "available_gift_wrappings": [GiftWrapping],
      "available_payment_methods": [
        AvailablePaymentMethod
      ],
      "billing_address": BillingCartAddress,
      "email": "xyz789",
      "gift_message": GiftMessage,
      "gift_receipt_included": false,
      "gift_wrapping": GiftWrapping,
      "id": 4,
      "is_virtual": false,
      "items": [CartItemInterface],
      "itemsV2": CartItems,
      "prices": CartPrices,
      "printed_card_included": true,
      "rules": [CartRuleStorefront],
      "selected_payment_method": SelectedPaymentMethod,
      "shipping_addresses": [ShippingCartAddress],
      "total_quantity": 987.65
    }
  }
}
```

<HorizontalLine />

### moveCartItemsToGiftRegistry

Move all items from the cart to a gift registry.

**Response:** [`MoveCartItemsToGiftRegistryOutput`](#movecartitemstogiftregistryoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `cartUid` - [`ID!`](#id) | The unique ID of the cart containing items to be moved to a gift registry. |
| `giftRegistryUid` - [`ID!`](#id) | The unique ID of the target gift registry. |

#### Example

##### Query

```graphql
mutation moveCartItemsToGiftRegistry(
  $cartUid: ID!,
  $giftRegistryUid: ID!
) {
  moveCartItemsToGiftRegistry(
    cartUid: $cartUid,
    giftRegistryUid: $giftRegistryUid
  ) {
    gift_registry {
      ...GiftRegistryFragment
    }
    status
    user_errors {
      ...GiftRegistryItemsUserErrorFragment
    }
  }
}
```

##### Variables

```json
{
  "cartUid": "4",
  "giftRegistryUid": "4"
}
```

##### Response

```json
{
  "data": {
    "moveCartItemsToGiftRegistry": {
      "gift_registry": GiftRegistry,
      "status": true,
      "user_errors": [GiftRegistryItemsUserError]
    }
  }
}
```

<HorizontalLine />

### moveItemsBetweenRequisitionLists

Move Items from one requisition list to another.

**Response:** [`MoveItemsBetweenRequisitionListsOutput`](#moveitemsbetweenrequisitionlistsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `sourceRequisitionListUid` - [`ID!`](#id) | The unique ID of the source requisition list. |
| `destinationRequisitionListUid` - [`ID`](#id) | The unique ID of the destination requisition list. If null, a new requisition list will be created. |
| `requisitionListItem` - [`MoveItemsBetweenRequisitionListsInput`](#moveitemsbetweenrequisitionlistsinput) | The list of products to move. |

#### Example

##### Query

```graphql
mutation moveItemsBetweenRequisitionLists(
  $sourceRequisitionListUid: ID!,
  $destinationRequisitionListUid: ID,
  $requisitionListItem: MoveItemsBetweenRequisitionListsInput
) {
  moveItemsBetweenRequisitionLists(
    sourceRequisitionListUid: $sourceRequisitionListUid,
    destinationRequisitionListUid: $destinationRequisitionListUid,
    requisitionListItem: $requisitionListItem
  ) {
    destination_requisition_list {
      ...RequisitionListFragment
    }
    source_requisition_list {
      ...RequisitionListFragment
    }
  }
}
```

##### Variables

```json
{
  "sourceRequisitionListUid": "4",
  "destinationRequisitionListUid": "4",
  "requisitionListItem": MoveItemsBetweenRequisitionListsInput
}
```

##### Response

```json
{
  "data": {
    "moveItemsBetweenRequisitionLists": {
      "destination_requisition_list": RequisitionList,
      "source_requisition_list": RequisitionList
    }
  }
}
```

<HorizontalLine />

### moveLineItemToRequisitionList

Move negotiable quote item to requisition list.

**Response:** [`MoveLineItemToRequisitionListOutput`](#movelineitemtorequisitionlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`MoveLineItemToRequisitionListInput!`](#movelineitemtorequisitionlistinput) | An input object that defines the quote item and requisition list moved to. |

#### Example

##### Query

```graphql
mutation moveLineItemToRequisitionList($input: MoveLineItemToRequisitionListInput!) {
  moveLineItemToRequisitionList(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": MoveLineItemToRequisitionListInput}
```

##### Response

```json
{
  "data": {
    "moveLineItemToRequisitionList": {
      "quote": NegotiableQuote
    }
  }
}
```

<HorizontalLine />

### moveProductsBetweenWishlists

Move products from one wish list to another.

**Response:** [`MoveProductsBetweenWishlistsOutput`](#moveproductsbetweenwishlistsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `sourceWishlistUid` - [`ID!`](#id) | The ID of the original wish list. |
| `destinationWishlistUid` - [`ID!`](#id) | The ID of the target wish list. |
| `wishlistItems` - [`[WishlistItemMoveInput!]!`](#wishlistitemmoveinput) | An array of items to move. |

#### Example

##### Query

```graphql
mutation moveProductsBetweenWishlists(
  $sourceWishlistUid: ID!,
  $destinationWishlistUid: ID!,
  $wishlistItems: [WishlistItemMoveInput!]!
) {
  moveProductsBetweenWishlists(
    sourceWishlistUid: $sourceWishlistUid,
    destinationWishlistUid: $destinationWishlistUid,
    wishlistItems: $wishlistItems
  ) {
    destination_wishlist {
      ...WishlistFragment
    }
    source_wishlist {
      ...WishlistFragment
    }
    user_errors {
      ...WishListUserInputErrorFragment
    }
  }
}
```

##### Variables

```json
{
  "sourceWishlistUid": "4",
  "destinationWishlistUid": 4,
  "wishlistItems": [WishlistItemMoveInput]
}
```

##### Response

```json
{
  "data": {
    "moveProductsBetweenWishlists": {
      "destination_wishlist": Wishlist,
      "source_wishlist": Wishlist,
      "user_errors": [WishListUserInputError]
    }
  }
}
```

<HorizontalLine />

### openNegotiableQuoteTemplate

Open an existing negotiable quote template.

**Response:** [`NegotiableQuoteTemplate`](#negotiablequotetemplate)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`OpenNegotiableQuoteTemplateInput!`](#opennegotiablequotetemplateinput) | An input object that contains the data to open a negotiable quote template. |

#### Example

##### Query

```graphql
mutation openNegotiableQuoteTemplate($input: OpenNegotiableQuoteTemplateInput!) {
  openNegotiableQuoteTemplate(input: $input) {
    buyer {
      ...NegotiableQuoteUserFragment
    }
    comments {
      ...NegotiableQuoteCommentFragment
    }
    expiration_date
    history {
      ...NegotiableQuoteHistoryEntryFragment
    }
    is_min_max_qty_used
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    max_order_commitment
    min_order_commitment
    name
    notifications {
      ...QuoteTemplateNotificationMessageFragment
    }
    prices {
      ...CartPricesFragment
    }
    reference_document_links {
      ...NegotiableQuoteReferenceDocumentLinkFragment
    }
    shipping_addresses {
      ...NegotiableQuoteShippingAddressFragment
    }
    status
    template_id
    total_quantity
  }
}
```

##### Variables

```json
{"input": OpenNegotiableQuoteTemplateInput}
```

##### Response

```json
{
  "data": {
    "openNegotiableQuoteTemplate": {
      "buyer": NegotiableQuoteUser,
      "comments": [NegotiableQuoteComment],
      "expiration_date": "xyz789",
      "history": [NegotiableQuoteHistoryEntry],
      "is_min_max_qty_used": true,
      "is_virtual": false,
      "items": [CartItemInterface],
      "max_order_commitment": 123,
      "min_order_commitment": 987,
      "name": "abc123",
      "notifications": [QuoteTemplateNotificationMessage],
      "prices": CartPrices,
      "reference_document_links": [
        NegotiableQuoteReferenceDocumentLink
      ],
      "shipping_addresses": [
        NegotiableQuoteShippingAddress
      ],
      "status": "abc123",
      "template_id": "4",
      "total_quantity": 123.45
    }
  }
}
```

<HorizontalLine />

### placeNegotiableQuoteOrder

Convert a negotiable quote into an order.

**Response:** [`PlaceNegotiableQuoteOrderOutput`](#placenegotiablequoteorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PlaceNegotiableQuoteOrderInput!`](#placenegotiablequoteorderinput) | An input object that specifies the negotiable quote. |

#### Example

##### Query

```graphql
mutation placeNegotiableQuoteOrder($input: PlaceNegotiableQuoteOrderInput!) {
  placeNegotiableQuoteOrder(input: $input) {
    order {
      ...OrderFragment
    }
  }
}
```

##### Variables

```json
{"input": PlaceNegotiableQuoteOrderInput}
```

##### Response

```json
{"data": {"placeNegotiableQuoteOrder": {"order": Order}}}
```

<HorizontalLine />

### placeOrder

Convert the quote into an order.

**Response:** [`PlaceOrderOutput`](#placeorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PlaceOrderInput`](#placeorderinput) | An input object that defines the shopper&#x27;s cart ID. |

#### Example

##### Query

```graphql
mutation placeOrder($input: PlaceOrderInput) {
  placeOrder(input: $input) {
    errors {
      ...PlaceOrderErrorFragment
    }
    order {
      ...OrderFragment
    }
    orderV2 {
      ...CustomerOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": PlaceOrderInput}
```

##### Response

```json
{
  "data": {
    "placeOrder": {
      "errors": [PlaceOrderError],
      "order": Order,
      "orderV2": CustomerOrder
    }
  }
}
```

<HorizontalLine />

### placeOrderForPurchaseOrder

Convert the purchase order into an order.

**Response:** [`PlaceOrderForPurchaseOrderOutput`](#placeorderforpurchaseorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PlaceOrderForPurchaseOrderInput!`](#placeorderforpurchaseorderinput) |  |

#### Example

##### Query

```graphql
mutation placeOrderForPurchaseOrder($input: PlaceOrderForPurchaseOrderInput!) {
  placeOrderForPurchaseOrder(input: $input) {
    order {
      ...CustomerOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": PlaceOrderForPurchaseOrderInput}
```

##### Response

```json
{
  "data": {
    "placeOrderForPurchaseOrder": {"order": CustomerOrder}
  }
}
```

<HorizontalLine />

### placePurchaseOrder

Place a purchase order.

**Response:** [`PlacePurchaseOrderOutput`](#placepurchaseorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PlacePurchaseOrderInput!`](#placepurchaseorderinput) |  |

#### Example

##### Query

```graphql
mutation placePurchaseOrder($input: PlacePurchaseOrderInput!) {
  placePurchaseOrder(input: $input) {
    purchase_order {
      ...PurchaseOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": PlacePurchaseOrderInput}
```

##### Response

```json
{
  "data": {
    "placePurchaseOrder": {
      "purchase_order": PurchaseOrder
    }
  }
}
```

<HorizontalLine />

### redeemGiftCardBalanceAsStoreCredit

Redeem a gift card for store credit.

**Response:** [`GiftCardAccount`](#giftcardaccount)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`GiftCardAccountInput!`](#giftcardaccountinput) | An input object that specifies the gift card code to redeem. |

#### Example

##### Query

```graphql
mutation redeemGiftCardBalanceAsStoreCredit($input: GiftCardAccountInput!) {
  redeemGiftCardBalanceAsStoreCredit(input: $input) {
    balance {
      ...MoneyFragment
    }
    code
    expiration_date
  }
}
```

##### Variables

```json
{"input": GiftCardAccountInput}
```

##### Response

```json
{
  "data": {
    "redeemGiftCardBalanceAsStoreCredit": {
      "balance": Money,
      "code": "abc123",
      "expiration_date": "xyz789"
    }
  }
}
```

<HorizontalLine />

### rejectPurchaseOrders

Reject purchase orders.

**Response:** [`PurchaseOrdersActionOutput`](#purchaseordersactionoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`PurchaseOrdersActionInput!`](#purchaseordersactioninput) |  |

#### Example

##### Query

```graphql
mutation rejectPurchaseOrders($input: PurchaseOrdersActionInput!) {
  rejectPurchaseOrders(input: $input) {
    errors {
      ...PurchaseOrderActionErrorFragment
    }
    purchase_orders {
      ...PurchaseOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": PurchaseOrdersActionInput}
```

##### Response

```json
{
  "data": {
    "rejectPurchaseOrders": {
      "errors": [PurchaseOrderActionError],
      "purchase_orders": [PurchaseOrder]
    }
  }
}
```

<HorizontalLine />

### removeCouponFromCart

Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon.

**Response:** [`RemoveCouponFromCartOutput`](#removecouponfromcartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RemoveCouponFromCartInput`](#removecouponfromcartinput) | An input object that defines which coupon code to remove from the cart. |

#### Example

##### Query

```graphql
mutation removeCouponFromCart($input: RemoveCouponFromCartInput) {
  removeCouponFromCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": RemoveCouponFromCartInput}
```

##### Response

```json
{"data": {"removeCouponFromCart": {"cart": Cart}}}
```

<HorizontalLine />

### removeCouponsFromCart

Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon.

**Response:** [`RemoveCouponFromCartOutput`](#removecouponfromcartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RemoveCouponsFromCartInput`](#removecouponsfromcartinput) | An input object that defines which coupon code to remove from the cart. |

#### Example

##### Query

```graphql
mutation removeCouponsFromCart($input: RemoveCouponsFromCartInput) {
  removeCouponsFromCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": RemoveCouponsFromCartInput}
```

##### Response

```json
{"data": {"removeCouponsFromCart": {"cart": Cart}}}
```

<HorizontalLine />

### removeGiftCardFromCart

Removes a gift card from the cart.

**Response:** [`RemoveGiftCardFromCartOutput`](#removegiftcardfromcartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RemoveGiftCardFromCartInput`](#removegiftcardfromcartinput) | An input object that specifies which gift card code to remove from the cart. |

#### Example

##### Query

```graphql
mutation removeGiftCardFromCart($input: RemoveGiftCardFromCartInput) {
  removeGiftCardFromCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": RemoveGiftCardFromCartInput}
```

##### Response

```json
{"data": {"removeGiftCardFromCart": {"cart": Cart}}}
```

<HorizontalLine />

### removeGiftRegistry

Delete the specified gift registry.

**Response:** [`RemoveGiftRegistryOutput`](#removegiftregistryoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `giftRegistryUid` - [`ID!`](#id) | The unique ID of the gift registry to delete. |

#### Example

##### Query

```graphql
mutation removeGiftRegistry($giftRegistryUid: ID!) {
  removeGiftRegistry(giftRegistryUid: $giftRegistryUid) {
    success
  }
}
```

##### Variables

```json
{"giftRegistryUid": "4"}
```

##### Response

```json
{"data": {"removeGiftRegistry": {"success": false}}}
```

<HorizontalLine />

### removeGiftRegistryItems

Delete the specified items from a gift registry.

**Response:** [`RemoveGiftRegistryItemsOutput`](#removegiftregistryitemsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `giftRegistryUid` - [`ID!`](#id) | The unique ID of the gift registry. |
| `itemsUid` - [`[ID!]!`](#id) | An array of item IDs to remove from the gift registry. |

#### Example

##### Query

```graphql
mutation removeGiftRegistryItems(
  $giftRegistryUid: ID!,
  $itemsUid: [ID!]!
) {
  removeGiftRegistryItems(
    giftRegistryUid: $giftRegistryUid,
    itemsUid: $itemsUid
  ) {
    gift_registry {
      ...GiftRegistryFragment
    }
  }
}
```

##### Variables

```json
{"giftRegistryUid": 4, "itemsUid": ["4"]}
```

##### Response

```json
{
  "data": {
    "removeGiftRegistryItems": {
      "gift_registry": GiftRegistry
    }
  }
}
```

<HorizontalLine />

### removeGiftRegistryRegistrants

Removes registrants from a gift registry.

**Response:** [`RemoveGiftRegistryRegistrantsOutput`](#removegiftregistryregistrantsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `giftRegistryUid` - [`ID!`](#id) | The unique ID of the gift registry. |
| `registrantsUid` - [`[ID!]!`](#id) | An array of registrant IDs to remove. |

#### Example

##### Query

```graphql
mutation removeGiftRegistryRegistrants(
  $giftRegistryUid: ID!,
  $registrantsUid: [ID!]!
) {
  removeGiftRegistryRegistrants(
    giftRegistryUid: $giftRegistryUid,
    registrantsUid: $registrantsUid
  ) {
    gift_registry {
      ...GiftRegistryFragment
    }
  }
}
```

##### Variables

```json
{
  "giftRegistryUid": "4",
  "registrantsUid": ["4"]
}
```

##### Response

```json
{
  "data": {
    "removeGiftRegistryRegistrants": {
      "gift_registry": GiftRegistry
    }
  }
}
```

<HorizontalLine />

### removeItemFromCart

Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist.

**Response:** [`RemoveItemFromCartOutput`](#removeitemfromcartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RemoveItemFromCartInput`](#removeitemfromcartinput) | An input object that defines which products to remove from the cart. |

#### Example

##### Query

```graphql
mutation removeItemFromCart($input: RemoveItemFromCartInput) {
  removeItemFromCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": RemoveItemFromCartInput}
```

##### Response

```json
{"data": {"removeItemFromCart": {"cart": Cart}}}
```

<HorizontalLine />

### removeNegotiableQuoteItems

Remove one or more products from a negotiable quote.

**Response:** [`RemoveNegotiableQuoteItemsOutput`](#removenegotiablequoteitemsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RemoveNegotiableQuoteItemsInput!`](#removenegotiablequoteitemsinput) | An input object that removes one or more items from a negotiable quote. |

#### Example

##### Query

```graphql
mutation removeNegotiableQuoteItems($input: RemoveNegotiableQuoteItemsInput!) {
  removeNegotiableQuoteItems(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": RemoveNegotiableQuoteItemsInput}
```

##### Response

```json
{
  "data": {
    "removeNegotiableQuoteItems": {
      "quote": NegotiableQuote
    }
  }
}
```

<HorizontalLine />

### removeNegotiableQuoteTemplateItems

Remove one or more products from a negotiable quote template.

**Response:** [`NegotiableQuoteTemplate`](#negotiablequotetemplate)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RemoveNegotiableQuoteTemplateItemsInput!`](#removenegotiablequotetemplateitemsinput) | An input object that removes one or more items from a negotiable quote template. |

#### Example

##### Query

```graphql
mutation removeNegotiableQuoteTemplateItems($input: RemoveNegotiableQuoteTemplateItemsInput!) {
  removeNegotiableQuoteTemplateItems(input: $input) {
    buyer {
      ...NegotiableQuoteUserFragment
    }
    comments {
      ...NegotiableQuoteCommentFragment
    }
    expiration_date
    history {
      ...NegotiableQuoteHistoryEntryFragment
    }
    is_min_max_qty_used
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    max_order_commitment
    min_order_commitment
    name
    notifications {
      ...QuoteTemplateNotificationMessageFragment
    }
    prices {
      ...CartPricesFragment
    }
    reference_document_links {
      ...NegotiableQuoteReferenceDocumentLinkFragment
    }
    shipping_addresses {
      ...NegotiableQuoteShippingAddressFragment
    }
    status
    template_id
    total_quantity
  }
}
```

##### Variables

```json
{"input": RemoveNegotiableQuoteTemplateItemsInput}
```

##### Response

```json
{
  "data": {
    "removeNegotiableQuoteTemplateItems": {
      "buyer": NegotiableQuoteUser,
      "comments": [NegotiableQuoteComment],
      "expiration_date": "abc123",
      "history": [NegotiableQuoteHistoryEntry],
      "is_min_max_qty_used": true,
      "is_virtual": false,
      "items": [CartItemInterface],
      "max_order_commitment": 987,
      "min_order_commitment": 123,
      "name": "xyz789",
      "notifications": [QuoteTemplateNotificationMessage],
      "prices": CartPrices,
      "reference_document_links": [
        NegotiableQuoteReferenceDocumentLink
      ],
      "shipping_addresses": [
        NegotiableQuoteShippingAddress
      ],
      "status": "abc123",
      "template_id": 4,
      "total_quantity": 987.65
    }
  }
}
```

<HorizontalLine />

### removeProductsFromCompareList

Remove products from the specified compare list.

**Response:** [`CompareList`](#comparelist)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RemoveProductsFromCompareListInput`](#removeproductsfromcomparelistinput) | An input object that defines which products to remove from a compare list. |

#### Example

##### Query

```graphql
mutation removeProductsFromCompareList($input: RemoveProductsFromCompareListInput) {
  removeProductsFromCompareList(input: $input) {
    attributes {
      ...ComparableAttributeFragment
    }
    item_count
    items {
      ...ComparableItemFragment
    }
    uid
  }
}
```

##### Variables

```json
{"input": RemoveProductsFromCompareListInput}
```

##### Response

```json
{
  "data": {
    "removeProductsFromCompareList": {
      "attributes": [ComparableAttribute],
      "item_count": 123,
      "items": [ComparableItem],
      "uid": "4"
    }
  }
}
```

<HorizontalLine />

### removeProductsFromWishlist

Remove one or more products from the specified wish list.

**Response:** [`RemoveProductsFromWishlistOutput`](#removeproductsfromwishlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `wishlistId` - [`ID!`](#id) | The ID of a wish list. |
| `wishlistItemsIds` - [`[ID!]!`](#id) | An array of item IDs representing products to be removed. |

#### Example

##### Query

```graphql
mutation removeProductsFromWishlist(
  $wishlistId: ID!,
  $wishlistItemsIds: [ID!]!
) {
  removeProductsFromWishlist(
    wishlistId: $wishlistId,
    wishlistItemsIds: $wishlistItemsIds
  ) {
    user_errors {
      ...WishListUserInputErrorFragment
    }
    wishlist {
      ...WishlistFragment
    }
  }
}
```

##### Variables

```json
{"wishlistId": 4, "wishlistItemsIds": ["4"]}
```

##### Response

```json
{
  "data": {
    "removeProductsFromWishlist": {
      "user_errors": [WishListUserInputError],
      "wishlist": Wishlist
    }
  }
}
```

<HorizontalLine />

### removeReturnTracking

Remove a tracked shipment from a return.

**Response:** [`RemoveReturnTrackingOutput`](#removereturntrackingoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RemoveReturnTrackingInput!`](#removereturntrackinginput) | An input object that removes tracking information. |

#### Example

##### Query

```graphql
mutation removeReturnTracking($input: RemoveReturnTrackingInput!) {
  removeReturnTracking(input: $input) {
    return {
      ...ReturnFragment
    }
  }
}
```

##### Variables

```json
{"input": RemoveReturnTrackingInput}
```

##### Response

```json
{"data": {"removeReturnTracking": {"return": Return}}}
```

<HorizontalLine />

### removeRewardPointsFromCart

Cancel the application of reward points to the cart.

**Response:** [`RemoveRewardPointsFromCartOutput`](#removerewardpointsfromcartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `cartId` - [`ID!`](#id) |  |

#### Example

##### Query

```graphql
mutation removeRewardPointsFromCart($cartId: ID!) {
  removeRewardPointsFromCart(cartId: $cartId) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"cartId": "4"}
```

##### Response

```json
{"data": {"removeRewardPointsFromCart": {"cart": Cart}}}
```

<HorizontalLine />

### removeStoreCreditFromCart

Remove store credit that has been applied to the specified cart.

**Response:** [`RemoveStoreCreditFromCartOutput`](#removestorecreditfromcartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RemoveStoreCreditFromCartInput!`](#removestorecreditfromcartinput) | An input object that specifies the cart ID. |

#### Example

##### Query

```graphql
mutation removeStoreCreditFromCart($input: RemoveStoreCreditFromCartInput!) {
  removeStoreCreditFromCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": RemoveStoreCreditFromCartInput}
```

##### Response

```json
{"data": {"removeStoreCreditFromCart": {"cart": Cart}}}
```

<HorizontalLine />

### renameNegotiableQuote

Rename negotiable quote.

**Response:** [`RenameNegotiableQuoteOutput`](#renamenegotiablequoteoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RenameNegotiableQuoteInput!`](#renamenegotiablequoteinput) | An input object that defines the quote item name and comment. |

#### Example

##### Query

```graphql
mutation renameNegotiableQuote($input: RenameNegotiableQuoteInput!) {
  renameNegotiableQuote(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": RenameNegotiableQuoteInput}
```

##### Response

```json
{
  "data": {
    "renameNegotiableQuote": {"quote": NegotiableQuote}
  }
}
```

<HorizontalLine />

### reorderItems

Add all products from a customer's previous order to the cart.

**Response:** [`ReorderItemsOutput`](#reorderitemsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `orderNumber` - [`String!`](#string) |  |

#### Example

##### Query

```graphql
mutation reorderItems($orderNumber: String!) {
  reorderItems(orderNumber: $orderNumber) {
    cart {
      ...CartFragment
    }
    userInputErrors {
      ...CheckoutUserInputErrorFragment
    }
  }
}
```

##### Variables

```json
{"orderNumber": "xyz789"}
```

##### Response

```json
{
  "data": {
    "reorderItems": {
      "cart": Cart,
      "userInputErrors": [CheckoutUserInputError]
    }
  }
}
```

<HorizontalLine />

### requestGuestOrderCancel

Request to cancel specified guest order.

**Response:** [`CancelOrderOutput`](#cancelorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`GuestOrderCancelInput!`](#guestordercancelinput) |  |

#### Example

##### Query

```graphql
mutation requestGuestOrderCancel($input: GuestOrderCancelInput!) {
  requestGuestOrderCancel(input: $input) {
    error
    errorV2 {
      ...CancelOrderErrorFragment
    }
    order {
      ...CustomerOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": GuestOrderCancelInput}
```

##### Response

```json
{
  "data": {
    "requestGuestOrderCancel": {
      "error": "abc123",
      "errorV2": CancelOrderError,
      "order": CustomerOrder
    }
  }
}
```

<HorizontalLine />

### requestGuestReturn

**Response:** [`RequestReturnOutput`](#requestreturnoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RequestGuestReturnInput!`](#requestguestreturninput) | An input object that contains the fields needed to start a return request for guest. |

#### Example

##### Query

```graphql
mutation requestGuestReturn($input: RequestGuestReturnInput!) {
  requestGuestReturn(input: $input) {
    return {
      ...ReturnFragment
    }
    returns {
      ...ReturnsFragment
    }
  }
}
```

##### Variables

```json
{"input": RequestGuestReturnInput}
```

##### Response

```json
{
  "data": {
    "requestGuestReturn": {
      "return": Return,
      "returns": Returns
    }
  }
}
```

<HorizontalLine />

### requestNegotiableQuote

Request a new negotiable quote on behalf of the buyer.

**Response:** [`RequestNegotiableQuoteOutput`](#requestnegotiablequoteoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RequestNegotiableQuoteInput!`](#requestnegotiablequoteinput) | An input object that contains a request to initiate a negotiable quote. |

#### Example

##### Query

```graphql
mutation requestNegotiableQuote($input: RequestNegotiableQuoteInput!) {
  requestNegotiableQuote(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": RequestNegotiableQuoteInput}
```

##### Response

```json
{
  "data": {
    "requestNegotiableQuote": {"quote": NegotiableQuote}
  }
}
```

<HorizontalLine />

### requestNegotiableQuoteTemplateFromQuote

Request a new negotiable quote on behalf of the buyer.

**Response:** [`NegotiableQuoteTemplate`](#negotiablequotetemplate)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RequestNegotiableQuoteTemplateInput!`](#requestnegotiablequotetemplateinput) | An input object that contains a request to initiate a negotiable quote template. |

#### Example

##### Query

```graphql
mutation requestNegotiableQuoteTemplateFromQuote($input: RequestNegotiableQuoteTemplateInput!) {
  requestNegotiableQuoteTemplateFromQuote(input: $input) {
    buyer {
      ...NegotiableQuoteUserFragment
    }
    comments {
      ...NegotiableQuoteCommentFragment
    }
    expiration_date
    history {
      ...NegotiableQuoteHistoryEntryFragment
    }
    is_min_max_qty_used
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    max_order_commitment
    min_order_commitment
    name
    notifications {
      ...QuoteTemplateNotificationMessageFragment
    }
    prices {
      ...CartPricesFragment
    }
    reference_document_links {
      ...NegotiableQuoteReferenceDocumentLinkFragment
    }
    shipping_addresses {
      ...NegotiableQuoteShippingAddressFragment
    }
    status
    template_id
    total_quantity
  }
}
```

##### Variables

```json
{"input": RequestNegotiableQuoteTemplateInput}
```

##### Response

```json
{
  "data": {
    "requestNegotiableQuoteTemplateFromQuote": {
      "buyer": NegotiableQuoteUser,
      "comments": [NegotiableQuoteComment],
      "expiration_date": "abc123",
      "history": [NegotiableQuoteHistoryEntry],
      "is_min_max_qty_used": true,
      "is_virtual": false,
      "items": [CartItemInterface],
      "max_order_commitment": 987,
      "min_order_commitment": 987,
      "name": "abc123",
      "notifications": [QuoteTemplateNotificationMessage],
      "prices": CartPrices,
      "reference_document_links": [
        NegotiableQuoteReferenceDocumentLink
      ],
      "shipping_addresses": [
        NegotiableQuoteShippingAddress
      ],
      "status": "abc123",
      "template_id": 4,
      "total_quantity": 123.45
    }
  }
}
```

<HorizontalLine />

### requestPasswordResetEmail

Request an email with a reset password token for the registered customer identified by the specified email.

**Response:** [`Boolean`](#boolean)

#### Arguments

| Name | Description |
|------|-------------|
| `email` - [`String!`](#string) | The customer&#x27;s email address. |

#### Example

##### Query

```graphql
mutation requestPasswordResetEmail($email: String!) {
  requestPasswordResetEmail(email: $email)
}
```

##### Variables

```json
{"email": "abc123"}
```

##### Response

```json
{"data": {"requestPasswordResetEmail": false}}
```

<HorizontalLine />

### requestReturn

Initiates a buyer's request to return items for replacement or refund.

**Response:** [`RequestReturnOutput`](#requestreturnoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`RequestReturnInput!`](#requestreturninput) | An input object that contains the fields needed to start a return request. |

#### Example

##### Query

```graphql
mutation requestReturn($input: RequestReturnInput!) {
  requestReturn(input: $input) {
    return {
      ...ReturnFragment
    }
    returns {
      ...ReturnsFragment
    }
  }
}
```

##### Variables

```json
{"input": RequestReturnInput}
```

##### Response

```json
{
  "data": {
    "requestReturn": {
      "return": Return,
      "returns": Returns
    }
  }
}
```

<HorizontalLine />

### resendConfirmationEmail

Resends the confirmation email to a customer.

**Response:** [`Boolean`](#boolean)

#### Arguments

| Name | Description |
|------|-------------|
| `email` - [`String!`](#string) | The email address to send the confirmation email to. |

#### Example

##### Query

```graphql
mutation resendConfirmationEmail($email: String!) {
  resendConfirmationEmail(email: $email)
}
```

##### Variables

```json
{"email": "abc123"}
```

##### Response

```json
{"data": {"resendConfirmationEmail": false}}
```

<HorizontalLine />

### resetPassword

Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`.

**Response:** [`Boolean`](#boolean)

#### Arguments

| Name | Description |
|------|-------------|
| `email` - [`String!`](#string) | The customer&#x27;s email address. |
| `resetPasswordToken` - [`String!`](#string) | A runtime token generated by the &#x60;requestPasswordResetEmail&#x60; mutation. |
| `newPassword` - [`String!`](#string) | The customer&#x27;s new password. |

#### Example

##### Query

```graphql
mutation resetPassword(
  $email: String!,
  $resetPasswordToken: String!,
  $newPassword: String!
) {
  resetPassword(
    email: $email,
    resetPasswordToken: $resetPasswordToken,
    newPassword: $newPassword
  )
}
```

##### Variables

```json
{
  "email": "abc123",
  "resetPasswordToken": "xyz789",
  "newPassword": "xyz789"
}
```

##### Response

```json
{"data": {"resetPassword": false}}
```

<HorizontalLine />

### revokeCustomerToken

Revoke the customer token.

**Response:** [`RevokeCustomerTokenOutput`](#revokecustomertokenoutput)

#### Example

##### Query

```graphql
mutation revokeCustomerToken {
  revokeCustomerToken {
    result
  }
}
```

##### Response

```json
{"data": {"revokeCustomerToken": {"result": true}}}
```

<HorizontalLine />

### sendEmailToFriend

Send a message on behalf of a customer to the specified email addresses.

**Response:** [`SendEmailToFriendOutput`](#sendemailtofriendoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SendEmailToFriendInput`](#sendemailtofriendinput) | An input object that defines sender, recipients, and product. |

#### Example

##### Query

```graphql
mutation sendEmailToFriend($input: SendEmailToFriendInput) {
  sendEmailToFriend(input: $input) {
    recipients {
      ...SendEmailToFriendRecipientFragment
    }
    sender {
      ...SendEmailToFriendSenderFragment
    }
  }
}
```

##### Variables

```json
{"input": SendEmailToFriendInput}
```

##### Response

```json
{
  "data": {
    "sendEmailToFriend": {
      "recipients": [SendEmailToFriendRecipient],
      "sender": SendEmailToFriendSender
    }
  }
}
```

<HorizontalLine />

### sendNegotiableQuoteForReview

Send the negotiable quote to the seller for review.

**Response:** [`SendNegotiableQuoteForReviewOutput`](#sendnegotiablequoteforreviewoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SendNegotiableQuoteForReviewInput!`](#sendnegotiablequoteforreviewinput) | An input object that sends a request for the merchant to review a negotiable quote. |

#### Example

##### Query

```graphql
mutation sendNegotiableQuoteForReview($input: SendNegotiableQuoteForReviewInput!) {
  sendNegotiableQuoteForReview(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": SendNegotiableQuoteForReviewInput}
```

##### Response

```json
{
  "data": {
    "sendNegotiableQuoteForReview": {
      "quote": NegotiableQuote
    }
  }
}
```

<HorizontalLine />

### setBillingAddressOnCart

Set the billing address on a specific cart.

**Response:** [`SetBillingAddressOnCartOutput`](#setbillingaddressoncartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetBillingAddressOnCartInput`](#setbillingaddressoncartinput) | An input object that defines the billing address to be assigned to the cart. |

#### Example

##### Query

```graphql
mutation setBillingAddressOnCart($input: SetBillingAddressOnCartInput) {
  setBillingAddressOnCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": SetBillingAddressOnCartInput}
```

##### Response

```json
{"data": {"setBillingAddressOnCart": {"cart": Cart}}}
```

<HorizontalLine />

### setCartAsInactive

Sets the cart as inactive

**Response:** [`SetCartAsInactiveOutput`](#setcartasinactiveoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `cartId` - [`String!`](#string) | The customer cart ID |

#### Example

##### Query

```graphql
mutation setCartAsInactive($cartId: String!) {
  setCartAsInactive(cartId: $cartId) {
    error
    success
  }
}
```

##### Variables

```json
{"cartId": "abc123"}
```

##### Response

```json
{
  "data": {
    "setCartAsInactive": {
      "error": "abc123",
      "success": true
    }
  }
}
```

<HorizontalLine />

### setGiftOptionsOnCart

Set gift options, including gift messages, gift wrapping, gift receipts, and printed cards.

**Response:** [`SetGiftOptionsOnCartOutput`](#setgiftoptionsoncartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetGiftOptionsOnCartInput`](#setgiftoptionsoncartinput) | An input object that defines the selected gift options. |

#### Example

##### Query

```graphql
mutation setGiftOptionsOnCart($input: SetGiftOptionsOnCartInput) {
  setGiftOptionsOnCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": SetGiftOptionsOnCartInput}
```

##### Response

```json
{"data": {"setGiftOptionsOnCart": {"cart": Cart}}}
```

<HorizontalLine />

### setGuestEmailOnCart

Assign the email address of a guest to the cart.

**Response:** [`SetGuestEmailOnCartOutput`](#setguestemailoncartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetGuestEmailOnCartInput`](#setguestemailoncartinput) | An input object that defines a guest email address. |

#### Example

##### Query

```graphql
mutation setGuestEmailOnCart($input: SetGuestEmailOnCartInput) {
  setGuestEmailOnCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": SetGuestEmailOnCartInput}
```

##### Response

```json
{"data": {"setGuestEmailOnCart": {"cart": Cart}}}
```

<HorizontalLine />

### setLineItemNote

Add buyer's note to a negotiable quote item.

**Response:** [`SetLineItemNoteOutput`](#setlineitemnoteoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`LineItemNoteInput!`](#lineitemnoteinput) | An input object that defines the quote item note. |

#### Example

##### Query

```graphql
mutation setLineItemNote($input: LineItemNoteInput!) {
  setLineItemNote(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": LineItemNoteInput}
```

##### Response

```json
{"data": {"setLineItemNote": {"quote": NegotiableQuote}}}
```

<HorizontalLine />

### setNegotiableQuoteBillingAddress

Assign a billing address to a negotiable quote.

**Response:** [`SetNegotiableQuoteBillingAddressOutput`](#setnegotiablequotebillingaddressoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetNegotiableQuoteBillingAddressInput!`](#setnegotiablequotebillingaddressinput) | An input object that defines the billing address to be assigned to a negotiable quote. |

#### Example

##### Query

```graphql
mutation setNegotiableQuoteBillingAddress($input: SetNegotiableQuoteBillingAddressInput!) {
  setNegotiableQuoteBillingAddress(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": SetNegotiableQuoteBillingAddressInput}
```

##### Response

```json
{
  "data": {
    "setNegotiableQuoteBillingAddress": {
      "quote": NegotiableQuote
    }
  }
}
```

<HorizontalLine />

### setNegotiableQuotePaymentMethod

Set the payment method on a negotiable quote.

**Response:** [`SetNegotiableQuotePaymentMethodOutput`](#setnegotiablequotepaymentmethodoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetNegotiableQuotePaymentMethodInput!`](#setnegotiablequotepaymentmethodinput) | An input object that defines the payment method for the specified negotiable quote. |

#### Example

##### Query

```graphql
mutation setNegotiableQuotePaymentMethod($input: SetNegotiableQuotePaymentMethodInput!) {
  setNegotiableQuotePaymentMethod(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": SetNegotiableQuotePaymentMethodInput}
```

##### Response

```json
{
  "data": {
    "setNegotiableQuotePaymentMethod": {
      "quote": NegotiableQuote
    }
  }
}
```

<HorizontalLine />

### setNegotiableQuoteShippingAddress

Assign a previously-defined address as the shipping address for a negotiable quote.

**Response:** [`SetNegotiableQuoteShippingAddressOutput`](#setnegotiablequoteshippingaddressoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetNegotiableQuoteShippingAddressInput!`](#setnegotiablequoteshippingaddressinput) | An input object that defines the shipping address to be assigned to a negotiable quote. |

#### Example

##### Query

```graphql
mutation setNegotiableQuoteShippingAddress($input: SetNegotiableQuoteShippingAddressInput!) {
  setNegotiableQuoteShippingAddress(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": SetNegotiableQuoteShippingAddressInput}
```

##### Response

```json
{
  "data": {
    "setNegotiableQuoteShippingAddress": {
      "quote": NegotiableQuote
    }
  }
}
```

<HorizontalLine />

### setNegotiableQuoteShippingMethods

Assign the shipping methods on the negotiable quote.

**Response:** [`SetNegotiableQuoteShippingMethodsOutput`](#setnegotiablequoteshippingmethodsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetNegotiableQuoteShippingMethodsInput!`](#setnegotiablequoteshippingmethodsinput) | An input object that defines the shipping methods to be assigned to a negotiable quote. |

#### Example

##### Query

```graphql
mutation setNegotiableQuoteShippingMethods($input: SetNegotiableQuoteShippingMethodsInput!) {
  setNegotiableQuoteShippingMethods(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": SetNegotiableQuoteShippingMethodsInput}
```

##### Response

```json
{
  "data": {
    "setNegotiableQuoteShippingMethods": {
      "quote": NegotiableQuote
    }
  }
}
```

<HorizontalLine />

### setNegotiableQuoteTemplateShippingAddress

Assign a previously-defined address as the shipping address for a negotiable quote template.

**Response:** [`NegotiableQuoteTemplate`](#negotiablequotetemplate)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetNegotiableQuoteTemplateShippingAddressInput!`](#setnegotiablequotetemplateshippingaddressinput) | An input object that defines the shipping address to be assigned to a negotiable quote template. |

#### Example

##### Query

```graphql
mutation setNegotiableQuoteTemplateShippingAddress($input: SetNegotiableQuoteTemplateShippingAddressInput!) {
  setNegotiableQuoteTemplateShippingAddress(input: $input) {
    buyer {
      ...NegotiableQuoteUserFragment
    }
    comments {
      ...NegotiableQuoteCommentFragment
    }
    expiration_date
    history {
      ...NegotiableQuoteHistoryEntryFragment
    }
    is_min_max_qty_used
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    max_order_commitment
    min_order_commitment
    name
    notifications {
      ...QuoteTemplateNotificationMessageFragment
    }
    prices {
      ...CartPricesFragment
    }
    reference_document_links {
      ...NegotiableQuoteReferenceDocumentLinkFragment
    }
    shipping_addresses {
      ...NegotiableQuoteShippingAddressFragment
    }
    status
    template_id
    total_quantity
  }
}
```

##### Variables

```json
{"input": SetNegotiableQuoteTemplateShippingAddressInput}
```

##### Response

```json
{
  "data": {
    "setNegotiableQuoteTemplateShippingAddress": {
      "buyer": NegotiableQuoteUser,
      "comments": [NegotiableQuoteComment],
      "expiration_date": "abc123",
      "history": [NegotiableQuoteHistoryEntry],
      "is_min_max_qty_used": true,
      "is_virtual": false,
      "items": [CartItemInterface],
      "max_order_commitment": 123,
      "min_order_commitment": 123,
      "name": "abc123",
      "notifications": [QuoteTemplateNotificationMessage],
      "prices": CartPrices,
      "reference_document_links": [
        NegotiableQuoteReferenceDocumentLink
      ],
      "shipping_addresses": [
        NegotiableQuoteShippingAddress
      ],
      "status": "xyz789",
      "template_id": "4",
      "total_quantity": 123.45
    }
  }
}
```

<HorizontalLine />

### setPaymentMethodAndPlaceOrder

*Deprecated*

Should use setPaymentMethodOnCart and placeOrder mutations in single request.

Set the cart payment method and convert the cart into an order.

**Response:** [`PlaceOrderOutput`](#placeorderoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetPaymentMethodAndPlaceOrderInput`](#setpaymentmethodandplaceorderinput) |  |

#### Example

##### Query

```graphql
mutation setPaymentMethodAndPlaceOrder($input: SetPaymentMethodAndPlaceOrderInput) {
  setPaymentMethodAndPlaceOrder(input: $input) {
    errors {
      ...PlaceOrderErrorFragment
    }
    order {
      ...OrderFragment
    }
    orderV2 {
      ...CustomerOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": SetPaymentMethodAndPlaceOrderInput}
```

##### Response

```json
{
  "data": {
    "setPaymentMethodAndPlaceOrder": {
      "errors": [PlaceOrderError],
      "order": Order,
      "orderV2": CustomerOrder
    }
  }
}
```

<HorizontalLine />

### setPaymentMethodOnCart

Apply a payment method to the cart.

**Response:** [`SetPaymentMethodOnCartOutput`](#setpaymentmethodoncartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetPaymentMethodOnCartInput`](#setpaymentmethodoncartinput) | An input object that defines which payment method to apply to the cart. |

#### Example

##### Query

```graphql
mutation setPaymentMethodOnCart($input: SetPaymentMethodOnCartInput) {
  setPaymentMethodOnCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": SetPaymentMethodOnCartInput}
```

##### Response

```json
{"data": {"setPaymentMethodOnCart": {"cart": Cart}}}
```

<HorizontalLine />

### setQuoteTemplateLineItemNote

Add buyer's note to a negotiable quote template item.

**Response:** [`NegotiableQuoteTemplate`](#negotiablequotetemplate)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`QuoteTemplateLineItemNoteInput!`](#quotetemplatelineitemnoteinput) | An input object that defines the quote template item note. |

#### Example

##### Query

```graphql
mutation setQuoteTemplateLineItemNote($input: QuoteTemplateLineItemNoteInput!) {
  setQuoteTemplateLineItemNote(input: $input) {
    buyer {
      ...NegotiableQuoteUserFragment
    }
    comments {
      ...NegotiableQuoteCommentFragment
    }
    expiration_date
    history {
      ...NegotiableQuoteHistoryEntryFragment
    }
    is_min_max_qty_used
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    max_order_commitment
    min_order_commitment
    name
    notifications {
      ...QuoteTemplateNotificationMessageFragment
    }
    prices {
      ...CartPricesFragment
    }
    reference_document_links {
      ...NegotiableQuoteReferenceDocumentLinkFragment
    }
    shipping_addresses {
      ...NegotiableQuoteShippingAddressFragment
    }
    status
    template_id
    total_quantity
  }
}
```

##### Variables

```json
{"input": QuoteTemplateLineItemNoteInput}
```

##### Response

```json
{
  "data": {
    "setQuoteTemplateLineItemNote": {
      "buyer": NegotiableQuoteUser,
      "comments": [NegotiableQuoteComment],
      "expiration_date": "xyz789",
      "history": [NegotiableQuoteHistoryEntry],
      "is_min_max_qty_used": false,
      "is_virtual": false,
      "items": [CartItemInterface],
      "max_order_commitment": 123,
      "min_order_commitment": 987,
      "name": "xyz789",
      "notifications": [QuoteTemplateNotificationMessage],
      "prices": CartPrices,
      "reference_document_links": [
        NegotiableQuoteReferenceDocumentLink
      ],
      "shipping_addresses": [
        NegotiableQuoteShippingAddress
      ],
      "status": "xyz789",
      "template_id": "4",
      "total_quantity": 123.45
    }
  }
}
```

<HorizontalLine />

### setShippingAddressesOnCart

Set one or more shipping addresses on a specific cart.

**Response:** [`SetShippingAddressesOnCartOutput`](#setshippingaddressesoncartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetShippingAddressesOnCartInput`](#setshippingaddressesoncartinput) | An input object that defines one or more shipping addresses to be assigned to the cart. |

#### Example

##### Query

```graphql
mutation setShippingAddressesOnCart($input: SetShippingAddressesOnCartInput) {
  setShippingAddressesOnCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": SetShippingAddressesOnCartInput}
```

##### Response

```json
{"data": {"setShippingAddressesOnCart": {"cart": Cart}}}
```

<HorizontalLine />

### setShippingMethodsOnCart

Set one or more delivery methods on a cart.

**Response:** [`SetShippingMethodsOnCartOutput`](#setshippingmethodsoncartoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SetShippingMethodsOnCartInput`](#setshippingmethodsoncartinput) | An input object that applies one or more shipping methods to the cart. |

#### Example

##### Query

```graphql
mutation setShippingMethodsOnCart($input: SetShippingMethodsOnCartInput) {
  setShippingMethodsOnCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
```

##### Variables

```json
{"input": SetShippingMethodsOnCartInput}
```

##### Response

```json
{"data": {"setShippingMethodsOnCart": {"cart": Cart}}}
```

<HorizontalLine />

### shareGiftRegistry

Send an email about the gift registry to a list of invitees.

**Response:** [`ShareGiftRegistryOutput`](#sharegiftregistryoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `giftRegistryUid` - [`ID!`](#id) | The unique ID of the gift registry. |
| `sender` - [`ShareGiftRegistrySenderInput!`](#sharegiftregistrysenderinput) | The sender&#x27;s email address and gift message. |
| `invitees` - [`[ShareGiftRegistryInviteeInput!]!`](#sharegiftregistryinviteeinput) | An array containing invitee names and email addresses. |

#### Example

##### Query

```graphql
mutation shareGiftRegistry(
  $giftRegistryUid: ID!,
  $sender: ShareGiftRegistrySenderInput!,
  $invitees: [ShareGiftRegistryInviteeInput!]!
) {
  shareGiftRegistry(
    giftRegistryUid: $giftRegistryUid,
    sender: $sender,
    invitees: $invitees
  ) {
    is_shared
  }
}
```

##### Variables

```json
{
  "giftRegistryUid": "4",
  "sender": ShareGiftRegistrySenderInput,
  "invitees": [ShareGiftRegistryInviteeInput]
}
```

##### Response

```json
{"data": {"shareGiftRegistry": {"is_shared": true}}}
```

<HorizontalLine />

### submitNegotiableQuoteTemplateForReview

Accept an existing negotiable quote template.

**Response:** [`NegotiableQuoteTemplate`](#negotiablequotetemplate)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SubmitNegotiableQuoteTemplateForReviewInput!`](#submitnegotiablequotetemplateforreviewinput) | An input object that contains the data to update a negotiable quote template. |

#### Example

##### Query

```graphql
mutation submitNegotiableQuoteTemplateForReview($input: SubmitNegotiableQuoteTemplateForReviewInput!) {
  submitNegotiableQuoteTemplateForReview(input: $input) {
    buyer {
      ...NegotiableQuoteUserFragment
    }
    comments {
      ...NegotiableQuoteCommentFragment
    }
    expiration_date
    history {
      ...NegotiableQuoteHistoryEntryFragment
    }
    is_min_max_qty_used
    is_virtual
    items {
      ...CartItemInterfaceFragment
    }
    max_order_commitment
    min_order_commitment
    name
    notifications {
      ...QuoteTemplateNotificationMessageFragment
    }
    prices {
      ...CartPricesFragment
    }
    reference_document_links {
      ...NegotiableQuoteReferenceDocumentLinkFragment
    }
    shipping_addresses {
      ...NegotiableQuoteShippingAddressFragment
    }
    status
    template_id
    total_quantity
  }
}
```

##### Variables

```json
{"input": SubmitNegotiableQuoteTemplateForReviewInput}
```

##### Response

```json
{
  "data": {
    "submitNegotiableQuoteTemplateForReview": {
      "buyer": NegotiableQuoteUser,
      "comments": [NegotiableQuoteComment],
      "expiration_date": "xyz789",
      "history": [NegotiableQuoteHistoryEntry],
      "is_min_max_qty_used": true,
      "is_virtual": false,
      "items": [CartItemInterface],
      "max_order_commitment": 123,
      "min_order_commitment": 123,
      "name": "xyz789",
      "notifications": [QuoteTemplateNotificationMessage],
      "prices": CartPrices,
      "reference_document_links": [
        NegotiableQuoteReferenceDocumentLink
      ],
      "shipping_addresses": [
        NegotiableQuoteShippingAddress
      ],
      "status": "xyz789",
      "template_id": "4",
      "total_quantity": 987.65
    }
  }
}
```

<HorizontalLine />

### subscribeEmailToNewsletter

Subscribe the specified email to the store's newsletter.

**Response:** [`SubscribeEmailToNewsletterOutput`](#subscribeemailtonewsletteroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `email` - [`String!`](#string) | The email address that will receive the store&#x27;s newsletter. |

#### Example

##### Query

```graphql
mutation subscribeEmailToNewsletter($email: String!) {
  subscribeEmailToNewsletter(email: $email) {
    status
  }
}
```

##### Variables

```json
{"email": "xyz789"}
```

##### Response

```json
{"data": {"subscribeEmailToNewsletter": {"status": "NOT_ACTIVE"}}}
```

<HorizontalLine />

### syncPaymentOrder

Synchronizes the payment order details for further payment processing

**Response:** [`Boolean`](#boolean)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`SyncPaymentOrderInput`](#syncpaymentorderinput) | Describes the variables needed to synchronize the payment order details |

#### Example

##### Query

```graphql
mutation syncPaymentOrder($input: SyncPaymentOrderInput) {
  syncPaymentOrder(input: $input)
}
```

##### Variables

```json
{"input": SyncPaymentOrderInput}
```

##### Response

```json
{"data": {"syncPaymentOrder": true}}
```

<HorizontalLine />

### updateCartItems

Modify items in the cart.

**Response:** [`UpdateCartItemsOutput`](#updatecartitemsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`UpdateCartItemsInput`](#updatecartitemsinput) | An input object that defines products to be updated. |

#### Example

##### Query

```graphql
mutation updateCartItems($input: UpdateCartItemsInput) {
  updateCartItems(input: $input) {
    cart {
      ...CartFragment
    }
    errors {
      ...CartUserInputErrorFragment
    }
  }
}
```

##### Variables

```json
{"input": UpdateCartItemsInput}
```

##### Response

```json
{
  "data": {
    "updateCartItems": {
      "cart": Cart,
      "errors": [CartUserInputError]
    }
  }
}
```

<HorizontalLine />

### updateCompany

Update company information.

**Response:** [`UpdateCompanyOutput`](#updatecompanyoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyUpdateInput!`](#companyupdateinput) |  |

#### Example

##### Query

```graphql
mutation updateCompany($input: CompanyUpdateInput!) {
  updateCompany(input: $input) {
    company {
      ...CompanyFragment
    }
  }
}
```

##### Variables

```json
{"input": CompanyUpdateInput}
```

##### Response

```json
{"data": {"updateCompany": {"company": Company}}}
```

<HorizontalLine />

### updateCompanyRole

Update company role information.

**Response:** [`UpdateCompanyRoleOutput`](#updatecompanyroleoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyRoleUpdateInput!`](#companyroleupdateinput) |  |

#### Example

##### Query

```graphql
mutation updateCompanyRole($input: CompanyRoleUpdateInput!) {
  updateCompanyRole(input: $input) {
    role {
      ...CompanyRoleFragment
    }
  }
}
```

##### Variables

```json
{"input": CompanyRoleUpdateInput}
```

##### Response

```json
{"data": {"updateCompanyRole": {"role": CompanyRole}}}
```

<HorizontalLine />

### updateCompanyStructure

Change the parent node of a company team within the current company context.

**Response:** [`UpdateCompanyStructureOutput`](#updatecompanystructureoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyStructureUpdateInput!`](#companystructureupdateinput) |  |

#### Example

##### Query

```graphql
mutation updateCompanyStructure($input: CompanyStructureUpdateInput!) {
  updateCompanyStructure(input: $input) {
    company {
      ...CompanyFragment
    }
  }
}
```

##### Variables

```json
{"input": CompanyStructureUpdateInput}
```

##### Response

```json
{"data": {"updateCompanyStructure": {"company": Company}}}
```

<HorizontalLine />

### updateCompanyTeam

Update company team data.

**Response:** [`UpdateCompanyTeamOutput`](#updatecompanyteamoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyTeamUpdateInput!`](#companyteamupdateinput) |  |

#### Example

##### Query

```graphql
mutation updateCompanyTeam($input: CompanyTeamUpdateInput!) {
  updateCompanyTeam(input: $input) {
    team {
      ...CompanyTeamFragment
    }
  }
}
```

##### Variables

```json
{"input": CompanyTeamUpdateInput}
```

##### Response

```json
{"data": {"updateCompanyTeam": {"team": CompanyTeam}}}
```

<HorizontalLine />

### updateCompanyUser

Update an existing company user.

**Response:** [`UpdateCompanyUserOutput`](#updatecompanyuseroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CompanyUserUpdateInput!`](#companyuserupdateinput) |  |

#### Example

##### Query

```graphql
mutation updateCompanyUser($input: CompanyUserUpdateInput!) {
  updateCompanyUser(input: $input) {
    user {
      ...CustomerFragment
    }
  }
}
```

##### Variables

```json
{"input": CompanyUserUpdateInput}
```

##### Response

```json
{"data": {"updateCompanyUser": {"user": Customer}}}
```

<HorizontalLine />

### updateCustomer

*Deprecated*

Use `updateCustomerV2` instead.

**Response:** [`CustomerOutput`](#customeroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CustomerInput!`](#customerinput) | An input object that defines the customer characteristics to update. |

#### Example

##### Query

```graphql
mutation updateCustomer($input: CustomerInput!) {
  updateCustomer(input: $input) {
    customer {
      ...CustomerFragment
    }
  }
}
```

##### Variables

```json
{"input": CustomerInput}
```

##### Response

```json
{"data": {"updateCustomer": {"customer": Customer}}}
```

<HorizontalLine />

### updateCustomerAddress

*Deprecated*

Use `updateCustomerAddressV2` instead.

Update the billing or shipping address of a customer or guest.

**Response:** [`CustomerAddress`](#customeraddress)

#### Arguments

| Name | Description |
|------|-------------|
| `id` - [`Int!`](#int) | The ID assigned to the customer address. |
| `input` - [`CustomerAddressInput`](#customeraddressinput) | An input object that contains changes to the customer address. |

#### Example

##### Query

```graphql
mutation updateCustomerAddress(
  $id: Int!,
  $input: CustomerAddressInput
) {
  updateCustomerAddress(
    id: $id,
    input: $input
  ) {
    city
    company
    country_code
    country_id
    custom_attributes {
      ...CustomerAddressAttributeFragment
    }
    custom_attributesV2 {
      ...AttributeValueInterfaceFragment
    }
    customer_id
    default_billing
    default_shipping
    extension_attributes {
      ...CustomerAddressAttributeFragment
    }
    fax
    firstname
    id
    lastname
    middlename
    postcode
    prefix
    region {
      ...CustomerAddressRegionFragment
    }
    region_id
    street
    suffix
    telephone
    uid
    vat_id
  }
}
```

##### Variables

```json
{"id": 987, "input": CustomerAddressInput}
```

##### Response

```json
{
  "data": {
    "updateCustomerAddress": {
      "city": "xyz789",
      "company": "xyz789",
      "country_code": "AF",
      "country_id": "abc123",
      "custom_attributes": [CustomerAddressAttribute],
      "custom_attributesV2": [AttributeValueInterface],
      "customer_id": 123,
      "default_billing": true,
      "default_shipping": true,
      "extension_attributes": [CustomerAddressAttribute],
      "fax": "abc123",
      "firstname": "abc123",
      "id": 987,
      "lastname": "abc123",
      "middlename": "abc123",
      "postcode": "abc123",
      "prefix": "xyz789",
      "region": CustomerAddressRegion,
      "region_id": 987,
      "street": ["xyz789"],
      "suffix": "abc123",
      "telephone": "xyz789",
      "uid": 4,
      "vat_id": "abc123"
    }
  }
}
```

<HorizontalLine />

### updateCustomerAddressV2

Update the billing or shipping address of a customer or guest.

**Response:** [`CustomerAddress`](#customeraddress)

#### Arguments

| Name | Description |
|------|-------------|
| `uid` - [`ID!`](#id) | The unique ID of the customer address. |
| `input` - [`CustomerAddressInput`](#customeraddressinput) | An input object that contains changes to the customer address. |

#### Example

##### Query

```graphql
mutation updateCustomerAddressV2(
  $uid: ID!,
  $input: CustomerAddressInput
) {
  updateCustomerAddressV2(
    uid: $uid,
    input: $input
  ) {
    city
    company
    country_code
    country_id
    custom_attributes {
      ...CustomerAddressAttributeFragment
    }
    custom_attributesV2 {
      ...AttributeValueInterfaceFragment
    }
    customer_id
    default_billing
    default_shipping
    extension_attributes {
      ...CustomerAddressAttributeFragment
    }
    fax
    firstname
    id
    lastname
    middlename
    postcode
    prefix
    region {
      ...CustomerAddressRegionFragment
    }
    region_id
    street
    suffix
    telephone
    uid
    vat_id
  }
}
```

##### Variables

```json
{
  "uid": "4",
  "input": CustomerAddressInput
}
```

##### Response

```json
{
  "data": {
    "updateCustomerAddressV2": {
      "city": "abc123",
      "company": "xyz789",
      "country_code": "AF",
      "country_id": "xyz789",
      "custom_attributes": [CustomerAddressAttribute],
      "custom_attributesV2": [AttributeValueInterface],
      "customer_id": 123,
      "default_billing": true,
      "default_shipping": true,
      "extension_attributes": [CustomerAddressAttribute],
      "fax": "xyz789",
      "firstname": "abc123",
      "id": 987,
      "lastname": "abc123",
      "middlename": "xyz789",
      "postcode": "xyz789",
      "prefix": "abc123",
      "region": CustomerAddressRegion,
      "region_id": 123,
      "street": ["xyz789"],
      "suffix": "xyz789",
      "telephone": "abc123",
      "uid": 4,
      "vat_id": "xyz789"
    }
  }
}
```

<HorizontalLine />

### updateCustomerEmail

Change the email address for the logged-in customer.

**Response:** [`CustomerOutput`](#customeroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `email` - [`String!`](#string) | The customer&#x27;s email address. |
| `password` - [`String!`](#string) | The customer&#x27;s password. |

#### Example

##### Query

```graphql
mutation updateCustomerEmail(
  $email: String!,
  $password: String!
) {
  updateCustomerEmail(
    email: $email,
    password: $password
  ) {
    customer {
      ...CustomerFragment
    }
  }
}
```

##### Variables

```json
{
  "email": "xyz789",
  "password": "abc123"
}
```

##### Response

```json
{"data": {"updateCustomerEmail": {"customer": Customer}}}
```

<HorizontalLine />

### updateCustomerV2

Update the customer's personal information.

**Response:** [`CustomerOutput`](#customeroutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`CustomerUpdateInput!`](#customerupdateinput) | An input object that defines the customer characteristics to update. |

#### Example

##### Query

```graphql
mutation updateCustomerV2($input: CustomerUpdateInput!) {
  updateCustomerV2(input: $input) {
    customer {
      ...CustomerFragment
    }
  }
}
```

##### Variables

```json
{"input": CustomerUpdateInput}
```

##### Response

```json
{"data": {"updateCustomerV2": {"customer": Customer}}}
```

<HorizontalLine />

### updateGiftRegistry

Update the specified gift registry.

**Response:** [`UpdateGiftRegistryOutput`](#updategiftregistryoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `giftRegistryUid` - [`ID!`](#id) | The unique ID of an existing gift registry. |
| `giftRegistry` - [`UpdateGiftRegistryInput!`](#updategiftregistryinput) | An input object that defines which fields to update. |

#### Example

##### Query

```graphql
mutation updateGiftRegistry(
  $giftRegistryUid: ID!,
  $giftRegistry: UpdateGiftRegistryInput!
) {
  updateGiftRegistry(
    giftRegistryUid: $giftRegistryUid,
    giftRegistry: $giftRegistry
  ) {
    gift_registry {
      ...GiftRegistryFragment
    }
  }
}
```

##### Variables

```json
{
  "giftRegistryUid": "4",
  "giftRegistry": UpdateGiftRegistryInput
}
```

##### Response

```json
{
  "data": {
    "updateGiftRegistry": {"gift_registry": GiftRegistry}
  }
}
```

<HorizontalLine />

### updateGiftRegistryItems

Update the specified items in the gift registry.

**Response:** [`UpdateGiftRegistryItemsOutput`](#updategiftregistryitemsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `giftRegistryUid` - [`ID!`](#id) | The unique ID of the gift registry. |
| `items` - [`[UpdateGiftRegistryItemInput!]!`](#updategiftregistryiteminput) | An array of items to be updated. |

#### Example

##### Query

```graphql
mutation updateGiftRegistryItems(
  $giftRegistryUid: ID!,
  $items: [UpdateGiftRegistryItemInput!]!
) {
  updateGiftRegistryItems(
    giftRegistryUid: $giftRegistryUid,
    items: $items
  ) {
    gift_registry {
      ...GiftRegistryFragment
    }
  }
}
```

##### Variables

```json
{
  "giftRegistryUid": "4",
  "items": [UpdateGiftRegistryItemInput]
}
```

##### Response

```json
{
  "data": {
    "updateGiftRegistryItems": {
      "gift_registry": GiftRegistry
    }
  }
}
```

<HorizontalLine />

### updateGiftRegistryRegistrants

Modify the properties of one or more gift registry registrants.

**Response:** [`UpdateGiftRegistryRegistrantsOutput`](#updategiftregistryregistrantsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `giftRegistryUid` - [`ID!`](#id) | The unique ID of the gift registry. |
| `registrants` - [`[UpdateGiftRegistryRegistrantInput!]!`](#updategiftregistryregistrantinput) | An array of registrants to update. |

#### Example

##### Query

```graphql
mutation updateGiftRegistryRegistrants(
  $giftRegistryUid: ID!,
  $registrants: [UpdateGiftRegistryRegistrantInput!]!
) {
  updateGiftRegistryRegistrants(
    giftRegistryUid: $giftRegistryUid,
    registrants: $registrants
  ) {
    gift_registry {
      ...GiftRegistryFragment
    }
  }
}
```

##### Variables

```json
{
  "giftRegistryUid": "4",
  "registrants": [UpdateGiftRegistryRegistrantInput]
}
```

##### Response

```json
{
  "data": {
    "updateGiftRegistryRegistrants": {
      "gift_registry": GiftRegistry
    }
  }
}
```

<HorizontalLine />

### updateNegotiableQuoteQuantities

Change the quantity of one or more items in an existing negotiable quote.

**Response:** [`UpdateNegotiableQuoteItemsQuantityOutput`](#updatenegotiablequoteitemsquantityoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`UpdateNegotiableQuoteQuantitiesInput!`](#updatenegotiablequotequantitiesinput) | An input object that changes the quantity of one or more items in a negotiable quote. |

#### Example

##### Query

```graphql
mutation updateNegotiableQuoteQuantities($input: UpdateNegotiableQuoteQuantitiesInput!) {
  updateNegotiableQuoteQuantities(input: $input) {
    quote {
      ...NegotiableQuoteFragment
    }
  }
}
```

##### Variables

```json
{"input": UpdateNegotiableQuoteQuantitiesInput}
```

##### Response

```json
{
  "data": {
    "updateNegotiableQuoteQuantities": {
      "quote": NegotiableQuote
    }
  }
}
```

<HorizontalLine />

### updateNegotiableQuoteTemplateQuantities

Change the quantity of one or more items in an existing negotiable quote template.

**Response:** [`UpdateNegotiableQuoteTemplateItemsQuantityOutput`](#updatenegotiablequotetemplateitemsquantityoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`UpdateNegotiableQuoteTemplateQuantitiesInput!`](#updatenegotiablequotetemplatequantitiesinput) | An input object that changes the quantity of one or more items in a negotiable quote template. |

#### Example

##### Query

```graphql
mutation updateNegotiableQuoteTemplateQuantities($input: UpdateNegotiableQuoteTemplateQuantitiesInput!) {
  updateNegotiableQuoteTemplateQuantities(input: $input) {
    quote_template {
      ...NegotiableQuoteTemplateFragment
    }
  }
}
```

##### Variables

```json
{"input": UpdateNegotiableQuoteTemplateQuantitiesInput}
```

##### Response

```json
{
  "data": {
    "updateNegotiableQuoteTemplateQuantities": {
      "quote_template": NegotiableQuoteTemplate
    }
  }
}
```

<HorizontalLine />

### updateProductsInWishlist

Update one or more products in the specified wish list.

**Response:** [`UpdateProductsInWishlistOutput`](#updateproductsinwishlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `wishlistId` - [`ID!`](#id) | The ID of a wish list. |
| `wishlistItems` - [`[WishlistItemUpdateInput!]!`](#wishlistitemupdateinput) | An array of items to be updated. |

#### Example

##### Query

```graphql
mutation updateProductsInWishlist(
  $wishlistId: ID!,
  $wishlistItems: [WishlistItemUpdateInput!]!
) {
  updateProductsInWishlist(
    wishlistId: $wishlistId,
    wishlistItems: $wishlistItems
  ) {
    user_errors {
      ...WishListUserInputErrorFragment
    }
    wishlist {
      ...WishlistFragment
    }
  }
}
```

##### Variables

```json
{
  "wishlistId": "4",
  "wishlistItems": [WishlistItemUpdateInput]
}
```

##### Response

```json
{
  "data": {
    "updateProductsInWishlist": {
      "user_errors": [WishListUserInputError],
      "wishlist": Wishlist
    }
  }
}
```

<HorizontalLine />

### updatePurchaseOrderApprovalRule

Update existing purchase order approval rules.

**Response:** [`PurchaseOrderApprovalRule`](#purchaseorderapprovalrule)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`UpdatePurchaseOrderApprovalRuleInput!`](#updatepurchaseorderapprovalruleinput) |  |

#### Example

##### Query

```graphql
mutation updatePurchaseOrderApprovalRule($input: UpdatePurchaseOrderApprovalRuleInput!) {
  updatePurchaseOrderApprovalRule(input: $input) {
    applies_to_roles {
      ...CompanyRoleFragment
    }
    approver_roles {
      ...CompanyRoleFragment
    }
    condition {
      ...PurchaseOrderApprovalRuleConditionInterfaceFragment
    }
    created_at
    created_by
    description
    name
    status
    uid
    updated_at
  }
}
```

##### Variables

```json
{"input": UpdatePurchaseOrderApprovalRuleInput}
```

##### Response

```json
{
  "data": {
    "updatePurchaseOrderApprovalRule": {
      "applies_to_roles": [CompanyRole],
      "approver_roles": [CompanyRole],
      "condition": PurchaseOrderApprovalRuleConditionInterface,
      "created_at": "xyz789",
      "created_by": "xyz789",
      "description": "abc123",
      "name": "xyz789",
      "status": "ENABLED",
      "uid": "4",
      "updated_at": "xyz789"
    }
  }
}
```

<HorizontalLine />

### updateRequisitionList

Rename a requisition list and change its description.

**Response:** [`UpdateRequisitionListOutput`](#updaterequisitionlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `requisitionListUid` - [`ID!`](#id) | The unique ID of the requisition list. |
| `input` - [`UpdateRequisitionListInput`](#updaterequisitionlistinput) |  |

#### Example

##### Query

```graphql
mutation updateRequisitionList(
  $requisitionListUid: ID!,
  $input: UpdateRequisitionListInput
) {
  updateRequisitionList(
    requisitionListUid: $requisitionListUid,
    input: $input
  ) {
    requisition_list {
      ...RequisitionListFragment
    }
  }
}
```

##### Variables

```json
{
  "requisitionListUid": "4",
  "input": UpdateRequisitionListInput
}
```

##### Response

```json
{
  "data": {
    "updateRequisitionList": {
      "requisition_list": RequisitionList
    }
  }
}
```

<HorizontalLine />

### updateRequisitionListItems

Update items in a requisition list.

**Response:** [`UpdateRequisitionListItemsOutput`](#updaterequisitionlistitemsoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `requisitionListUid` - [`ID!`](#id) | The unique ID of the requisition list. |
| `requisitionListItems` - [`[UpdateRequisitionListItemsInput!]!`](#updaterequisitionlistitemsinput) | Items to be updated in the requisition list. |

#### Example

##### Query

```graphql
mutation updateRequisitionListItems(
  $requisitionListUid: ID!,
  $requisitionListItems: [UpdateRequisitionListItemsInput!]!
) {
  updateRequisitionListItems(
    requisitionListUid: $requisitionListUid,
    requisitionListItems: $requisitionListItems
  ) {
    requisition_list {
      ...RequisitionListFragment
    }
  }
}
```

##### Variables

```json
{
  "requisitionListUid": 4,
  "requisitionListItems": [
    UpdateRequisitionListItemsInput
  ]
}
```

##### Response

```json
{
  "data": {
    "updateRequisitionListItems": {
      "requisition_list": RequisitionList
    }
  }
}
```

<HorizontalLine />

### updateWishlist

Change the name and visibility of the specified wish list.

**Response:** [`UpdateWishlistOutput`](#updatewishlistoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `wishlistId` - [`ID!`](#id) | The ID of the wish list to update. |
| `name` - [`String`](#string) | The name assigned to the wish list. |
| `visibility` - [`WishlistVisibilityEnum`](#wishlistvisibilityenum) | Indicates the visibility of the wish list. |

#### Example

##### Query

```graphql
mutation updateWishlist(
  $wishlistId: ID!,
  $name: String,
  $visibility: WishlistVisibilityEnum
) {
  updateWishlist(
    wishlistId: $wishlistId,
    name: $name,
    visibility: $visibility
  ) {
    name
    uid
    visibility
  }
}
```

##### Variables

```json
{
  "wishlistId": 4,
  "name": "abc123",
  "visibility": "PUBLIC"
}
```

##### Response

```json
{
  "data": {
    "updateWishlist": {
      "name": "abc123",
      "uid": 4,
      "visibility": "PUBLIC"
    }
  }
}
```

<HorizontalLine />

### validatePurchaseOrders

Validate purchase orders.

**Response:** [`ValidatePurchaseOrdersOutput`](#validatepurchaseordersoutput)

#### Arguments

| Name | Description |
|------|-------------|
| `input` - [`ValidatePurchaseOrdersInput!`](#validatepurchaseordersinput) |  |

#### Example

##### Query

```graphql
mutation validatePurchaseOrders($input: ValidatePurchaseOrdersInput!) {
  validatePurchaseOrders(input: $input) {
    errors {
      ...ValidatePurchaseOrderErrorFragment
    }
    purchase_orders {
      ...PurchaseOrderFragment
    }
  }
}
```

##### Variables

```json
{"input": ValidatePurchaseOrdersInput}
```

##### Response

```json
{
  "data": {
    "validatePurchaseOrders": {
      "errors": [ValidatePurchaseOrderError],
      "purchase_orders": [PurchaseOrder]
    }
  }
}
```
