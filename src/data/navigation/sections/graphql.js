module.exports = [
  {
    title: "Introduction",
    path: "/graphql/",
  },
  {
    title: "Usage",
    path: "/graphql/usage/",
    pages: [
      {
        title: "Headers",
        path: "/graphql/usage/headers/",
      },
      {
        title: "Authorization",
        path: "/graphql/usage/authorization-tokens/",
      },
      {
        title: "Protected mutations",
        path: "/graphql/usage/protected-mutations/",
      },
      {
        title: "Security configuration",
        path: "/graphql/usage/security-configuration/",
      },
      {
        title: "Caching",
        path: "/graphql/usage/caching/",
      },
      {
        title: "Filtering with custom attributes",
        path: "/graphql/usage/custom-filters/",
      },
    ],
  },
  {
    title: "Development",
    path: "/graphql/develop/",
    pages: [
      {
        title: "Create a resolver",
        path: "/graphql/develop/resolvers/",
      },
      {
        title: "Extend the existing schema",
        path: "/graphql/develop/extend-existing-schema/",
      },
      {
        title: "Implement an identity class",
        path: "/graphql/develop/identity-class/",
      },
      {
        title: "Create a custom urlResolver service",
        path: "/graphql/develop/create-custom-url-resolver/",
      },
      {
        title: "Debug queries",
        path: "/graphql/develop/debugging/",
      },
      {
        title: "Handle exceptions",
        path: "/graphql/develop/exceptions/",
      },
    ],
  },
  {
    title: "Schema",
    path: "/graphql/schema/",
    pages: [
      {
        title: "Cart",
        path: "/graphql/schema/cart/",
        pages: [
          {
            title: "pickupLocations",
            path: "/graphql/schema/cart/pickup-locations/",
          },
          {
            title: "addBundleProductsToCart",
            path: "/graphql/schema/cart/add-bundle-products/",
          },
          {
            title: "addConfigurableProductsToCart",
            path: "/graphql/schema/cart/add-configurable-products/",
          },
          {
            title: "addDownloadableProductsToCart",
            path: "/graphql/schema/cart/add-downloadable-products/",
          },
          {
            title: "addProductsToCart",
            path: "/graphql/schema/cart/add-products/",
          },
          {
            title: "addSimpleProductsToCart",
            path: "/graphql/schema/cart/add-simple-products/",
          },
          {
            title: "addVirtualProductsToCart",
            path: "/graphql/schema/cart/add-virtual-products",
          },
          {
            title: "applyCouponToCart",
            path: "/graphql/schema/cart/apply-coupon/",
          },
          {
            title: "applyGiftCartToCart",
            path: "/graphql/schema/cart/apply-giftcard/",
          },
          {
            title: "applyRewardPointsToCart",
            path: "/graphql/schema/cart/apply-reward-points/",
          },
          {
            title: "assignCustomerToGuestCart",
            path: "/graphql/schema/cart/assign-customer-to-guest-cart/",
          },
          {
            title: "createEmptyCart",
            path: "/graphql/schema/cart/create-empty-cart/",
          },
          {
            title: "mergeCarts",
            path: "/graphql/schema/cart/merge/",
          },
          {
            title: "placeOrder",
            path: "/graphql/schema/cart/place-order/",
          },
          {
            title: "removeCouponFromCart",
            path: "/graphql/schema/cart/remove-coupon/",
          },
          {
            title: "removeGiftCardFromCart",
            path: "/graphql/schema/cart/remove-giftcard/",
          },
          {
            title: "removeItemFromCart",
            path: "/graphql/schema/cart/remove-item/",
          },
          {
            title: "removeRewardPointsFromCart",
            path: "/graphql/schema/cart/remove-reward-points/",
          },
          {
            title: "removeStoreCreditFromCart",
            path: "/graphql/schema/cart/remove-store-credit/",
          },
          {
            title: "setBillingAddressOnCart",
            path: "/graphql/schema/cart/set-billing-address/",
          },
          {
            title: "setGiftOptionsOnCart",
            path: "/graphql/schema/cart/set-gift-options/",
          },
          {
            title: "setGuestEmailOnCart",
            path: "/graphql/schema/cart/set-guest-email/",
          },
          {
            title: "setPaymentMethodAndPlaceOrder",
            path: "/graphql/schema/cart/set-payment-place-order/",
          },
          {
            title: "setPaymentMethodOnCart",
            path: "/graphql/schema/cart/set-payment-method/",
          },
          {
            title: "setShippingAddressesOnCart",
            path: "/graphql/schema/cart/set-shipping-address/",
          },
          {
            title: "setShippingMethodsOnCart",
            path: "/graphql/schema/cart/set-shipping-method/",
          },
          {
            title: "updateCartItems",
            path: "/graphql/schema/cart/update-items/",
          },
          {
            title: "CartItemInterface",
            path: "/graphql/schema/cart/interface/",
          },
        ],
      },
      {
        title: "Customer",
        path: "/graphql/schema/customer/",
        pages: [
          {
            title: "customerCart",
            path: "/graphql/schema/customer/cart/",
          },
          {
            title: "customerDownloadableProducts",
            path: "/graphql/schema/customer/downloadable-products/",
          },
          {
            title: "customerOrders",
            path: "/graphql/schema/customer/orders/",
          },
          {
            title: "giftCardAccount",
            path: "/graphql/schema/customer/giftcard-account/",
          },
          {
            title: "isEmailAvailable",
            path: "/graphql/schema/customer/is-email-available/",
          },
          {
            title: "assignCompareListToCustomer",
            path: "/graphql/schema/customer/assign-compare-list/",
          },
          {
            title: "changeCustomerPassword",
            path: "/graphql/schema/customer/change-password/",
          },
          {
            title: "createCustomer",
            path: "/graphql/schema/customer/create/",
          },
          {
            title: "createCustomerAddress",
            path: "/graphql/schema/customer/create-address/",
          },
          {
            title: "createCustomerV2",
            path: "/graphql/schema/customer/create-v2/",
          },
          {
            title: "deleteCustomer",
            path: "/graphql/schema/customer/delete/",
          },
          {
            title: "deleteCustomerAddress",
            path: "/graphql/schema/customer/delete-address/",
          },
          {
            title: "generateCustomerToken",
            path: "/graphql/schema/customer/generate-token/",
          },
          {
            title: "generateCustomerTokenAsAdmin",
            path: "/graphql/schema/customer/generate-token-as-admin/",
          },
          {
            title: "redeemGiftCardBalanceAsStoreCredit",
            path: "/graphql/schema/customer/redeem-giftcard-balance/",
          },
          {
            title: "requestPasswordResetEmail",
            path: "/graphql/schema/customer/request-password-reset-email/",
          },
          {
            title: "resetPassword",
            path: "/graphql/schema/customer/reset-password/",
          },
          {
            title: "revokeCustomerToken",
            path: "/graphql/schema/customer/revoke-token/",
          },
          {
            title: "sendEmailToFriend",
            path: "/graphql/schema/customer/send-email-to-friend/",
          },
          {
            title: "subscribeEmailToNewsletter",
            path: "/graphql/schema/customer/subscribe-email-to-newsletter/",
          },
          {
            title: "updateCustomer",
            path: "/graphql/schema/customer/update/",
          },
          {
            title: "updateCustomerAddress",
            path: "/graphql/schema/customer/update-address/",
          },
          {
            title: "updateCustomerEmail",
            path: "/graphql/schema/customer/update-email/",
          },
          {
            title: "updateCustomerV2",
            path: "/graphql/schema/customer/update-v2/",
          },
        ],
      },
      {
        title: "Gift registry",
        path: "/graphql/schema/gift-registry/",
        pages: [
          {
            title: "giftRegistryEmailSearch",
            path: "/graphql/schema/gift-registry/email-search/",
          },
          {
            title: "giftRegistryIdSearch",
            path: "/graphql/schema/gift-registry/id-search/",
          },
          {
            title: "giftRegistryTypes",
            path: "/graphql/schema/gift-registry/types/",
          },
          {
            title: "giftRegistryTypeSearch",
            path: "/graphql/schema/gift-registry/type-search/",
          },
          {
            title: "addGiftRegistryRegistrants",
            path: "/graphql/schema/gift-registry/add-registrants/",
          },
          {
            title: "createGiftRegistry",
            path: "/graphql/schema/gift-registry/create/",
          },
          {
            title: "moveCartItemsToGiftRegistry",
            path: "/graphql/schema/gift-registry/move-cart-items/",
          },
          {
            title: "removeGiftRegistry",
            path: "/graphql/schema/gift-registry/remove/",
          },
          {
            title: "removeGiftRegistryItems",
            path: "/graphql/schema/gift-registry/remove-items/",
          },
          {
            title: "removeGiftRegistryRegistrants",
            path: "/graphql/schema/gift-registry/remove-registrants/",
          },
          {
            title: "updateGiftRegistry",
            path: "/graphql/schema/gift-registry/update/",
          },
          {
            title: "updateGiftRegistryItems",
            path: "/graphql/schema/gift-registry/update-items/",
          },
          {
            title: "updateGiftRegistryRegistrants",
            path: "/graphql/schema/gift-registry/update-registrants/",
          },
        ],
      },
      {
        title: "Orders",
        path: "/graphql/schema/orders/",
        pages: [
          {
            title: "addReturnComment",
            path: "/graphql/schema/orders/add-return-comment/",
          },
          {
            title: "addReturnTracking",
            path: "/graphql/schema/orders/add-return-tracking/",
          },
          {
            title: "removeReturnTracking",
            path: "/graphql/schema/orders/remove-return-tracking/",
          },
          {
            title: "reorderItems",
            path: "/graphql/schema/orders/reorder-items/",
          },
          {
            title: "requestReturn",
            path: "/graphql/schema/orders/request-return/",
          },
          {
            title: "CreditMemoInterface",
            path: "/graphql/schema/orders/credit-memo-item-interface/",
          },
          {
            title: "InvoiceItemInterface",
            path: "/graphql/schema/orders/invoice-item-interface/",
          },
          {
            title: "ShipmentItemInterface",
            path: "/graphql/schema/orders/shipment-item-interface/",
          },
        ],
      },
      {
        title: "Products",
        path: "/graphql/schema/products/",
        pages: [
          {
            title: "categories",
            path: "/graphql/schema/products/categories/",
          },
          {
            title: "category",
            path: "/graphql/schema/products/category/",
          },
          {
            title: "categoryList",
            path: "/graphql/schema/products/category-list/",
          },
          {
            title: "compareList",
            path: "/graphql/schema/products/compare-list/",
          },
          {
            title: "productReviewRatingsMetadata",
            path: "/graphql/schema/products/product-review-ratings-metadata/",
          },
          {
            title: "addProductsToCompareList",
            path: "/graphql/schema/products/add-products-to-compare-list/",
          },
          {
            title: "createCompareList",
            path: "/graphql/schema/products/create-compare-list/",
          },
          {
            title: "createProductReview",
            path: "/graphql/schema/products/create-review/",
          },
          {
            title: "deleteCompareList",
            path: "/graphql/schema/products/delete-compare-list/",
          },
          {
            title: "removeProductsFromCompareList",
            path: "/graphql/schema/products/remove-from-compare-list/",
          },
          {
            title: "Interfaces",
            path: "/graphql/schema/products/interfaces/",
            pages: [
              {
                title: "AttributeMetadata",
                path: "/graphql/schema/products/interfaces/attribute-metadata/",
              },
              {
                title: "CategoryInterface",
                path: "/graphql/schema/products/interfaces/category/",
              },
              {
                title: "CustomizableOptionInterface",
                path: "/graphql/schema/products/interfaces/customizable-option/",
              },
              {
                title: "RoutableInterface",
                path: "/graphql/schema/products/interfaces/routable/",
              },
              {
                title: "ProductInterface implementations",
                path: "/graphql/schema/products/interfaces/types/",
                pages: [
                  {
                    title: "BundleProduct data types",
                    path: "/graphql/schema/products/interfaces/types/bundle/",
                  },
                  {
                    title: "ConfigurableProduct data types",
                    path: "/graphql/schema/products/interfaces/types/configurable/",
                  },
                  {
                    title: "DownloadableProduct data types",
                    path: "/graphql/schema/products/interfaces/types/downloadable/",
                  },
                  {
                    title: "GiftCardProduct data types",
                    path: "/graphql/schema/products/interfaces/types/gift-card/",
                  },
                  {
                    title: "GroupedProduct data types",
                    path: "/graphql/schema/products/interfaces/types/grouped/",
                  },
                  {
                    title: "SimpleProduct data types",
                    path: "/graphql/schema/products/interfaces/types/simple/",
                  },
                  {
                    title: "VirtualProduct data types",
                    path: "/graphql/schema/products/interfaces/types/virtual/",
                  },
                ],
              },
            ],
          },
          {
            title: "PWA implementations",
            path: "/graphql/schema/products/pwa-implementations/",
          },
        ],
      },
      {
        title: "Store",
        path: "/graphql/schema/store/",
        pages: [
          {
            title: "attributesMetadata",
            path: "/graphql/schema/store/attributes-metadata/",
          },
          {
            title: "availableStores",
            path: "/graphql/schema/store/available-stores/",
          },
          {
            title: "cmsBlocks",
            path: "/graphql/schema/store/cms-blocks/",
          },
          {
            title: "cmsPage",
            path: "/graphql/schema/store/cms-page/",
          },
          {
            title: "countries",
            path: "/graphql/schema/store/countries/",
          },
          {
            title: "country",
            path: "/graphql/schema/store/country/",
          },
          {
            title: "currency",
            path: "/graphql/schema/store/currency/",
          },
          {
            title: "customAttributeMetadata",
            path: "/graphql/schema/store/custom-attribute-metadata/",
          },
          {
            title: "dynamicBlocks",
            path: "/graphql/schema/store/dynamic-blocks/",
          },
          {
            title: "reCaptchaV3Config",
            path: "/graphql/schema/store/recaptcha-v3-config/",
          },
          {
            title: "storeConfig",
            path: "/graphql/schema/store/store-config/",
          },
          {
            title: "contactUs",
            path: "/graphql/schema/store/contact-us/",
          },
        ],
      },
      {
        title: "Wishlist",
        path: "/graphql/schema/wishlist/",
        pages: [
          {
            title: "addProductsToWishlist",
            path: "/graphql/schema/wishlist/add-products/",
          },
          {
            title: "addWishlistItemsToCart",
            path: "/graphql/schema/wishlist/add-items-to-cart/",
          },
          {
            title: "copyProductsBetweenWishlists",
            path: "/graphql/schema/wishlist/copy-products/",
          },
          {
            title: "createWishlist",
            path: "/graphql/schema/wishlist/create/",
          },
          {
            title: "deleteWishlist",
            path: "/graphql/schema/wishlist/delete/",
          },
          {
            title: "moveProductsBetweenWishlists",
            path: "/graphql/schema/wishlist/move-products/",
          },
          {
            title: "removeProductsFromWishlist",
            path: "/graphql/schema/wishlist/remove-products/",
          },
          {
            title: "updateProductsInWishlist",
            path: "/graphql/schema/wishlist/update-products/",
          },
          {
            title: "updateWishlist",
            path: "/graphql/schema/wishlist/update/",
          },
          {
            title: "WishlistItemInterface",
            path: "/graphql/schema/wishlist/interface/",
          },
        ],
      },
      {
        title: "Company (B2B)",
        path: "/graphql/schema/b2b/company/",
        pages: [
          {
            title: "isCompanyAdminEmailAvailable",
            path: "/graphql/schema/b2b/company/is-company-admin-email-available/",
          },
          {
            title: "isCompanyEmailAvailable",
            path: "/graphql/schema/b2b/company/is-company-email-available/",
          },
          {
            title: "isCompanyRoleNameAvailable",
            path: "/graphql/schema/b2b/company/is-company-role-name-available/",
          },
          {
            title: "isCompanyUserEmailAvailable",
            path: "/graphql/schema/b2b/company/is-company-user-email-available/",
          },
          {
            title: "createCompany",
            path: "/graphql/schema/b2b/company/create/",
          },
          {
            title: "createCompanyRole",
            path: "/graphql/schema/b2b/company/create-role/",
          },
          {
            title: "createCompanyTeam",
            path: "/graphql/schema/b2b/company/create-team/",
          },
          {
            title: "createCompanyUser",
            path: "/graphql/schema/b2b/company/create-user/",
          },
          {
            title: "deleteCompanyRole",
            path: "/graphql/schema/b2b/company/delete-role/",
          },
          {
            title: "deleteCompanyTeam",
            path: "/graphql/schema/b2b/company/delete-team/",
          },
          {
            title: "deleteCompanyUser",
            path: "/graphql/schema/b2b/company/delete-user",
          },
          {
            title: "updateCompany",
            path: "/graphql/schema/b2b/company/update/",
          },
          {
            title: "updateCompanyRole",
            path: "/graphql/schema/b2b/company/update-role/",
          },
          {
            title: "updateCompanyStructure",
            path: "/graphql/schema/b2b/company/update-structure/",
          },
          {
            title: "updateCompanyTeam",
            path: "/graphql/schema/b2b/company/update-team/",
          },
          {
            title: "updateCompanyUser",
            path: "/graphql/schema/b2b/company/update-user/",
          },
          {
            title: "CompanyStructureEntity",
            path: "/graphql/schema/b2b/company/unions/",
          },
        ],
      },
      {
        title: "Negotiable quotes (B2B)",
        path: "/graphql/schema/b2b/negotiable-quote/",
        pages: [
          {
            title: "negotiableQuotes",
            path: "/graphql/schema/b2b/negotiable-quote/quotes/",
          },
          {
            title: "closeNegotiableQuotes",
            path: "/graphql/schema/b2b/negotiable-quote/close/",
          },
          {
            title: "deleteNegotiableQuotes",
            path: "/graphql/schema/b2b/negotiable-quote/delete/",
          },
          {
            title: "placeNegotiableQuoteOrder",
            path: "/graphql/schema/b2b/negotiable-quote/place-order/",
          },
          {
            title: "removeNegotiableQuoteItems",
            path: "/graphql/schema/b2b/negotiable-quote/remove-items/",
          },
          {
            title: "requestNegotiableQuote",
            path: "/graphql/schema/b2b/negotiable-quote/request/",
          },
          {
            title: "sendNegotiableQuoteForReview",
            path: "/graphql/schema/b2b/negotiable-quote/send-for-review/",
          },
          {
            title: "setNegotiableQuoteBillingAddress",
            path: "/graphql/schema/b2b/negotiable-quote/set-billing-address/",
          },
          {
            title: "setNegotiableQuotePaymentMethod",
            path: "/graphql/schema/b2b/negotiable-quote/set-payment-method/",
          },
          {
            title: "setNegotiableQuoteShippingAddress",
            path: "/graphql/schema/b2b/negotiable-quote/set-shipping-address/",
          },
          {
            title: "setNegotiableQuoteShippingMethods",
            path: "/graphql/schema/b2b/negotiable-quote/set-shipping-methods/",
          },
          {
            title: "updateNegotiableQuoteQuantities",
            path: "/graphql/schema/b2b/negotiable-quote/update-quantities/",
          },
          {
            title: "NegotiableQuoteAddressInterface",
            path: "/graphql/schema/b2b/negotiable-quote/interface/",
          },
        ],
      },
      {
        title: "Requisition lists (B2B)",
        path: "/graphql/schema/b2b/requisition-list/",
        pages: [
          {
            title: "addProductsToRequisitionList",
            path: "/graphql/schema/b2b/requisition-list/add-products/",
          },
          {
            title: "addRequisitionListItemsToCart",
            path: "/graphql/schema/b2b/requisition-list/add-items-to-cart/",
          },
          {
            title: "clearCustomerCart",
            path: "/graphql/schema/b2b/requisition-list/clear-customer-cart/",
          },
          {
            title: "copyItemsBetweenRequisitionLists",
            path: "/graphql/schema/b2b/requisition-list/copy-items/",
          },
          {
            title: "createRequisitionLists",
            path: "/graphql/schema/b2b/requisition-list/create/",
          },
          {
            title: "deleteRequisitionList",
            path: "/graphql/schema/b2b/requisition-list/delete/",
          },
          {
            title: "deleteRequisitionListItems",
            path: "/graphql/schema/b2b/requisition-list/delete-items/",
          },
          {
            title: "moveItemsBetweenRequisitionLists",
            path: "/graphql/schema/b2b/requisition-list/move-items/",
          },
          {
            title: "updateRequisitionList",
            path: "/graphql/schema/b2b/requisition-list/update/",
          },
          {
            title: "updateRequisitionListItems",
            path: "/graphql/schema/b2b/requisition-list/update-items/",
          },
          {
            title: "RequisitionListItemInterface",
            path: "/graphql/schema/b2b/requisition-list/interface/",
          },
        ],
      },
    ],
  },
  {
    title: "Payment methods",
    path: "/graphql/payment-methods/",
    pages: [
      {
        title: "Braintree",
        path: "/graphql/payment-methods/braintree/",
      },
      {
        title: "Braintree vault",
        path: "/graphql/payment-methods/braintree-vault/",
      },
      {
        title: "Klarna",
        path: "/graphql/payment-methods/klarna/",
      },
      {
        title: "PayPal Express Checkout",
        path: "/graphql/payment-methods/paypal-express-checkout/",
      },
      {
        title: "Express Checkout for other PayPal solutions",
        path: "/graphql/payment-methods/payflow-express/",
      },
      {
        title: "PayPal Payflow Link",
        path: "/graphql/payment-methods/payflow-link/",
      },
      {
        title: "PayPal Payflow Pro",
        path: "/graphql/payment-methods/payflow-pro/",
      },
      {
        title: "PayPal Payflow Pro Vault",
        path: "/graphql/payment-methods/payflow-pro-vault/",
      },
      {
        title: "PayPal Payments Advanced",
        path: "/graphql/payment-methods/payments-advanced/",
      },
      {
        title: "PayPal Website Payments Pro Hosted Solution",
        path: "/graphql/payment-methods/hosted-pro/",
      },
    ],
  },
  {
    title: "Tutorial",
    path: "/graphql/tutorials/",
    pages: [
      {
        title: "GraphQL checkout tutorial",
        path: "/graphql/tutorials/checkout/",
      },
      {
        title: "Step 1: Create a customer",
        path: "/graphql/tutorials/checkout/create-customer/"
      },
      {
        title: "Step 2: Create an empty cart",
        path: "/graphql/tutorials/checkout/create-cart/"
      },
      {
        title: "Step 3: Add products to the cart",
        path: "/graphql/tutorials/checkout/add-product-to-cart/"
      },
      {
        title: "Step 4: Set the shipping address",
        path: "/graphql/tutorials/checkout/set-shipping-address/"
      },
      {
        title: "Step 5: Set the billing address",
        path: "/graphql/tutorials/checkout/set-billing-address/"
      },
      {
        title: "Step 6: Set the delivery method",
        path: "/graphql/tutorials/checkout/set-delivery-method/"
      },
      {
        title: "Step 7: Apply a coupon",
        path: "/graphql/tutorials/checkout/apply-coupon/"
      },
      {
        title: "Step 8: Set email on the cart",
        path: "/graphql/tutorials/checkout/set-email-address/"
      },
      {
        title: "Step 9: Set the payment method",
        path: "/graphql/tutorials/checkout/set-payment-method/"
      },
      {
        title: "Step 10: Place the order",
        path: "/graphql/tutorials/checkout/place-order/"
      },
    ],
  },
  {
    title: "Release notes",
    path: "/graphql/release-notes/",
  },
];
