Attribute |  Data Type | Description
--- | --- | ---
`applied_coupon` | [AppliedCoupon][AppliedCoupon] | Deprecated. Use `applied_coupons` instead
`applied_coupons` | [[AppliedCoupon]][AppliedCoupon] | An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code
`applied_gift_cards` | [[AppliedGiftCard]][AppliedGiftCard] | An array of `AppliedGiftCard` objects. An `AppliedGiftCard` object contains the `code` text attribute, which specifies the gift card code. `applied_gift_cards` is a Commerce-only attribute, defined in the GiftCardAccountGraphQl module
`applied_reward_points`| [RewardPointsAmount][RewardPointsAmount] | The amount of reward points applied to the cart
`applied_store_credit` | [AppliedStoreCredit][AppliedStoreCredit] | Contains store credit information applied to the cart. `applied_store_credit` is a Commerce-only attribute, defined in the CustomerBalanceGraphQl module
`available_gift_wrappings` | [[GiftWrapping]][GiftWrapping]! | The list of available gift wrapping options for the cart
`available_payment_methods` | [[AvailablePaymentMethod]][AvailablePaymentMethod] | Available payment methods
`billing_address` | [BillingCartAddress][BillingCartAddress] | Contains the billing address specified in the customer's cart
`email` | String | The customer's email address
`gift_message` | [GiftMessage][GiftMessage] | A gift message added to the cart
`gift_receipt_included` | Boolean! | Indicates if the customer requested a gift receipt for the cart
`gift_wrapping` | [GiftWrapping][GiftWrapping] | The selected gift wrapping for the cart
`id` | ID! | The unique ID of the cart
`is_virtual` | Boolean! | Indicates whether the cart contains only virtual products
`items` | [CartItemInterface][CartItemInterface] | Contains the items in the customer's cart
`prices` | [CartPrices][CartPrices] | Contains subtotals and totals
`printed_card_included` | Boolean! | Indicates if the customer requested a printed card for the cart
`selected_payment_method` | [SelectedPaymentMethod][SelectedPaymentMethod] | Selected payment method
`shipping_addresses` | [ShippingCartAddress][ShippingCartAddress]! | Contains one or more shipping addresses
`total_quantity` | Float! | Total Quantity of products in the cart

[AppliedCoupon]: /src/pages/graphql/schema/cart/queries/cart.md#appliedcoupon-object
[AppliedGiftCard]: /src/pages/graphql/schema/cart/queries/cart.md#appliedgiftcard-object
[AppliedStoreCredit]: /src/pages/graphql/schema/cart/queries/cart.md#appliedstorecredit-object
[AvailablePaymentMethod]: /src/pages/graphql/schema/cart/queries/cart.md#availablepaymentmethod-object
[BillingCartAddress]: /src/pages/graphql/schema/cart/queries/cart.md#billingcartaddress-object
[CartItemInterface]: /src/pages/graphql/schema/cart/queries/cart.md#cartiteminterface
[CartPrices]: /src/pages/graphql/schema/cart/queries/cart.md#cartprices-object
[GiftMessage]: /src/pages/graphql/schema/cart/queries/cart.md#giftmessage-object
[GiftWrapping]: /src/pages/graphql/schema/cart/queries/cart.md#giftwrapping-object
[RewardPointsAmount]: /src/pages/graphql/schema/cart/queries/cart.md#rewardpointsamount
[SelectedPaymentMethod]: /src/pages/graphql/schema/cart/queries/cart.md#selectedpaymentmethod-object
[ShippingCartAddress]: /src/pages/graphql/schema/cart/queries/cart.md#shippingcartaddress-object
