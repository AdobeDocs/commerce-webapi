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
        title: "Authorization",
        path: "/graphql/usage/authorization-tokens/",
      },
      {
        title: "Caching",
        path: "/graphql/usage/caching/",
      },
      {
        title: "Filtering with custom attributes",
        path: "/graphql/usage/custom-filters/",
      },
      {
        title: "GraphQL status codes and responses",
        path: "/graphql/usage/api-response/"
      },
      {
        title: "Headers",
        path: "/graphql/usage/headers/",
      },
      {
        title: "Introspection queries",
        path: "/graphql/usage/introspection-queries/",
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
        title: "Staging queries",
        path: "/graphql/usage/staging-queries/",
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
      {
        title: "Functional testing",
        path: "/graphql/develop/functional-testing/",
      },
    ],
  },
  {
    title: "Schema",
    path: "/graphql/schema/",
    pages: [
      {
        title: "Attributes",
        path: "/graphql/schema/attributes/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/attributes/queries/",
            pages: [
              {
                title: "attributesForm",
                path: "/graphql/schema/attributes/queries/attributes-form.md"
              },
              {
                title: "attributesList",
                path: "/graphql/schema/attributes/queries/attributes-list.md"
              },
              {
                title: "attributesMetadata",
                path: "/graphql/schema/attributes/queries/attributes-metadata.md"
              },
              {
                title: "customAttributeMetadata",
                path: "/graphql/schema/attributes/queries/custom-attribute-metadata.md"
              },
              {
                title: "customAttributeMetadataV2",
                path: "/graphql/schema/attributes/queries/custom-attribute-metadata-v2.md"
              }
            ]
          },
          {
            title: "Mutations",
            path: "/graphql/schema/attributes/mutations/",
            pages: [
              {
                title: "setCustomAttributesOnCart",
                path: "/graphql/schema/attributes/mutations/set-custom-cart.md"
              },
              {
                title: "setCustomAttributesOnCartItem",
                path: "/graphql/schema/attributes/mutations/set-custom-cart-item.md"
              },
              {
                title: "setCustomAttributesOnCompany",
                path: "/graphql/schema/attributes/mutations/set-custom-company.md"
              },
              {
                title: "setCustomAttributesOnCreditMemo",
                path: "/graphql/schema/attributes/mutations/set-custom-credit-memo.md"
              },
              {
                title: "setCustomAttributesOnCreditMemoItem",
                path: "/graphql/schema/attributes/mutations/set-custom-credit-memo-item.md"
              },
              {
                title: "setCustomAttributesOnInvoice",
                path: "/graphql/schema/attributes/mutations/set-custom-invoice.md"
              },
              {
                title: "setCustomAttributesOnInvoiceItem",
                path: "/graphql/schema/attributes/mutations/set-custom-invoice-item.md"
              },
              {
                title: "setCustomAttributesOnNegotiableQuote",
                path: "/graphql/schema/attributes/mutations/set-custom-negotiable-quote.md"
              }
            ]
          },
          {
            title: "Interfaces",
            path: "/graphql/schema/attributes/interfaces/"
          }
        ]
      },
      {
        title: "Cart",
        path: "/graphql/schema/cart/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/cart/queries/",
            pages: [
              {
                title: "cart",
                path: "/graphql/schema/cart/queries/cart/",
              },
              {
                title: "pickupLocations",
                path: "/graphql/schema/cart/queries/pickup-locations/",
              },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/schema/cart/mutations/",
            pages: [
              {
                title: "addBundleProductsToCart",
                path: "/graphql/schema/cart/mutations/add-bundle-products/",
              },
              {
                title: "addConfigurableProductsToCart",
                path: "/graphql/schema/cart/mutations/add-configurable-products/",
              },
              {
                title: "addDownloadableProductsToCart",
                path: "/graphql/schema/cart/mutations/add-downloadable-products/",
              },
              {
                title: "addProductsToCart",
                path: "/graphql/schema/cart/mutations/add-products/",
              },
              {
                title: "addSimpleProductsToCart",
                path: "/graphql/schema/cart/mutations/add-simple-products/",
              },
              {
                title: "addVirtualProductsToCart",
                path: "/graphql/schema/cart/mutations/add-virtual-products",
              },
              {
                title: "applyCouponToCart",
                path: "/graphql/schema/cart/mutations/apply-coupon/",
              },
              {
                title: "applyCouponsToCart",
                path: "/graphql/schema/cart/mutations/apply-coupons/"
              },
              {
                title: "applyGiftCartToCart",
                path: "/graphql/schema/cart/mutations/apply-giftcard/",
              },
              {
                title: "applyRewardPointsToCart",
                path: "/graphql/schema/cart/mutations/apply-reward-points/",
              },
              {
                title: "applyStoreCreditToCart",
                path: "/graphql/schema/cart/mutations/apply-store-credit/",
              },
              {
                title: "assignCustomerToGuestCart",
                path: "/graphql/schema/cart/mutations/assign-customer-to-guest-cart/",
              },
              {
                title: "clearCart",
                path: "/graphql/schema/cart/mutations/clear-cart/"
              },
              {
                title: "createEmptyCart",
                path: "/graphql/schema/cart/mutations/create-empty-cart/",
              },
              {
                title: "createGuestCart",
                path: "/graphql/schema/cart/mutations/create-guest-cart/",
              },
              {
                title: "mergeCarts",
                path: "/graphql/schema/cart/mutations/merge/",
              },
              {
                title: "placeOrder",
                path: "/graphql/schema/cart/mutations/place-order/",
              },
              {
                title: "redeemGiftCardBalanceAsStoreCredit",
                path: "/graphql/schema/customer/mutations/redeem-giftcard-balance/",
              },
              {
                title: "removeCouponFromCart",
                path: "/graphql/schema/cart/mutations/remove-coupon/",
              },
              {
                title: "removeCouponsFromCart",
                path: "/graphql/schema/cart/mutations/remove-coupons"
              },
              {
                title: "removeGiftCardFromCart",
                path: "/graphql/schema/cart/mutations/remove-giftcard/",
              },
              {
                title: "removeItemFromCart",
                path: "/graphql/schema/cart/mutations/remove-item/",
              },
              {
                title: "removeRewardPointsFromCart",
                path: "/graphql/schema/cart/mutations/remove-reward-points/",
              },
              {
                title: "removeStoreCreditFromCart",
                path: "/graphql/schema/cart/mutations/remove-store-credit/",
              },
              {
                title: "setBillingAddressOnCart",
                path: "/graphql/schema/cart/mutations/set-billing-address/",
              },
              {
                title: "setGiftOptionsOnCart",
                path: "/graphql/schema/cart/mutations/set-gift-options/",
              },
              {
                title: "setGuestEmailOnCart",
                path: "/graphql/schema/cart/mutations/set-guest-email/",
              },
              {
                title: "setPaymentMethodAndPlaceOrder",
                path: "/graphql/schema/cart/mutations/set-payment-place-order/",
              },
              {
                title: "setPaymentMethodOnCart",
                path: "/graphql/schema/cart/mutations/set-payment-method/",
              },
              {
                title: "setShippingAddressesOnCart",
                path: "/graphql/schema/cart/mutations/set-shipping-address/",
              },
              {
                title: "setShippingMethodsOnCart",
                path: "/graphql/schema/cart/mutations/set-shipping-method/",
              },
              {
                title: "updateCartItems",
                path: "/graphql/schema/cart/mutations/update-items/",
              },
            ],
          },
          {
            title: "Interfaces",
            path: "/graphql/schema/cart/interfaces/"
          },
        ],
      },
      {
        title: "Catalog Service",
        path: "/graphql/schema/catalog-service/",
        pages:[
          {
            title: "Queries",
            path: "/graphql/schema/catalog-service/queries/",
            pages: [
              {
                title: "categories",
                path: "/graphql/schema/catalog-service/queries/categories.md",
              },
              {
                title: "products",
                path: "/graphql/schema/catalog-service/queries/products.md"
              },
              {
                title: "productSearch",
                path: "/graphql/schema/live-search/queries/product-search.md",
              },
              {
                title: "refineProduct",
                path: "/graphql/schema/catalog-service/queries/refine-product.md"
              },
              {
                title: "variants",
                path: "/graphql/schema/catalog-service/queries/product-variants.md"
              }
            ],
          },
        ],
      },
      {
        title: "Checkout",
        path: "/graphql/schema/checkout/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/checkout/queries/",
            pages: [
              {
                title: "checkoutAgreements",
                path: "/graphql/schema/checkout/queries/agreements/",
              },
              {
                title: "customerPaymentTokens",
                path: "/graphql/schema/checkout/queries/customer-payment-tokens/",
              },
              {
                title: "getHostedProUrl",
                path: "/graphql/schema/checkout/queries/get-hosted-pro-url/",
              },
              {
                title: "getPayflowLinkToken",
                path: "/graphql/schema/checkout/queries/get-payflow-link-token/",
              },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/schema/checkout/mutations/",
            pages: [
              {
                title: "createBraintreeClientToken",
                path: "/graphql/schema/checkout/mutations/create-braintree-client-token/",
              },
              {
                title: "createKlarnaPaymentsSession",
                path: "/graphql/schema/checkout/mutations/create-klarna-payments-session/",
              },
              {
                title: "createPayflowProToken",
                path: "/graphql/schema/checkout/mutations/create-payflow-pro-token/",
              },
              {
                title: "createPaypalExpressToken",
                path: "/graphql/schema/checkout/mutations/create-paypal-express-token/",
              },
              {
                title: "deletePaymentToken",
                path: "/graphql/schema/checkout/mutations/delete-payment-token/",
              },
              {
                title: "handlePayflowProResponse",
                path: "/graphql/schema/checkout/mutations/handle-payflow-pro-response/",
              },
            ],
          },
        ],
      },
      {
        title: "Company (B2B)",
        path: "/graphql/schema/b2b/company/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/b2b/company/queries/",
            pages: [
              {
                title: "company",
                path: "/graphql/schema/b2b/company/queries/company/",
              },
              {
                title: "isCompanyAdminEmailAvailable",
                path: "/graphql/schema/b2b/company/queries/is-company-admin-email-available/",
              },
              {
                title: "isCompanyEmailAvailable",
                path: "/graphql/schema/b2b/company/queries/is-company-email-available/",
              },
              {
                title: "isCompanyRoleNameAvailable",
                path: "/graphql/schema/b2b/company/queries/is-company-role-name-available/",
              },
              {
                title: "isCompanyUserEmailAvailable",
                path: "/graphql/schema/b2b/company/queries/is-company-user-email-available/",
              },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/schema/b2b/company/mutations/",
            pages: [
              {
                title: "createCompany",
                path: "/graphql/schema/b2b/company/mutations/create/",
              },
              {
                title: "createCompanyRole",
                path: "/graphql/schema/b2b/company/mutations/create-role/",
              },
              {
                title: "createCompanyTeam",
                path: "/graphql/schema/b2b/company/mutations/create-team/",
              },
              {
                title: "createCompanyUser",
                path: "/graphql/schema/b2b/company/mutations/create-user/",
              },
              {
                title: "deleteCompanyRole",
                path: "/graphql/schema/b2b/company/mutations/delete-role/",
              },
              {
                title: "deleteCompanyTeam",
                path: "/graphql/schema/b2b/company/mutations/delete-team/",
              },
              {
                title: "deleteCompanyUser",
                path: "/graphql/schema/b2b/company/mutations/delete-user",
              },
              {
                title: "updateCompany",
                path: "/graphql/schema/b2b/company/mutations/update/",
              },
              {
                title: "updateCompanyRole",
                path: "/graphql/schema/b2b/company/mutations/update-role/",
              },
              {
                title: "updateCompanyStructure",
                path: "/graphql/schema/b2b/company/mutations/update-structure/",
              },
              {
                title: "updateCompanyTeam",
                path: "/graphql/schema/b2b/company/mutations/update-team/",
              },
              {
                title: "updateCompanyUser",
                path: "/graphql/schema/b2b/company/mutations/update-user/",
              },
            ],
          },
          {
            title: "Unions",
            path: "/graphql/schema/b2b/company/unions/",
            pages: [
              {
                title: "CompanyStructureEntity",
                path: "/graphql/schema/b2b/company/unions/structure-entity/",
              },
            ],
          },
        ],
      },
      {
        title: "Customer",
        path: "/graphql/schema/customer/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/customer/queries/",
            pages: [
              {
                title: "customer",
                path: "/graphql/schema/customer/queries/customer/",
              },
              {
                title: "customerCart",
                path: "/graphql/schema/customer/queries/cart/",
              },
              {
                title: "customerDownloadableProducts",
                path: "/graphql/schema/customer/queries/downloadable-products/",
              },
              {
                title: "customerGroup",
                path: "/graphql/schema/customer/queries/customer-group/",
              },
              {
                title: "customerOrders",
                path: "/graphql/schema/customer/queries/orders/",
              },
              {
                title: "customerSegments",
                path: "/graphql/schema/customer/queries/customer-segments/",
              },
              {
                title: "giftCardAccount",
                path: "/graphql/schema/customer/queries/giftcard-account/",
              },
              {
                title: "isEmailAvailable",
                path: "/graphql/schema/customer/queries/is-email-available/",
              },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/schema/customer/mutations/",
            pages: [
              {
                title: "assignCompareListToCustomer",
                path: "/graphql/schema/customer/mutations/assign-compare-list/",
              },
              {
                title: "changeCustomerPassword",
                path: "/graphql/schema/customer/mutations/change-password/",
              },
              {
                title: "confirmEmail",
                path: "/graphql/schema/customer/mutations/confirm-email/",
              },
              {
                title: "createCustomer",
                path: "/graphql/schema/customer/mutations/create/",
              },
              {
                title: "createCustomerAddress",
                path: "/graphql/schema/customer/mutations/create-address/",
              },
              {
                title: "createCustomerV2",
                path: "/graphql/schema/customer/mutations/create-v2/",
              },
              {
                title: "deleteCustomerAddress",
                path: "/graphql/schema/customer/mutations/delete-address/",
              },
              {
                title: "exchangeExternalCustomerToken",
                path: "/graphql/schema/customer/mutations/create-external-customer-token/",
              },
              {
                title: "generateCustomerToken",
                path: "/graphql/schema/customer/mutations/generate-token/",
              },
              {
                title: "generateCustomerTokenAsAdmin",
                path: "/graphql/schema/customer/mutations/generate-token-as-admin/",
              },
              {
                title: "requestPasswordResetEmail",
                path: "/graphql/schema/customer/mutations/request-password-reset-email/",
              },
              {
                title: "resendConfirmationEmail",
                path: "/graphql/schema/customer/mutations/resend-confirmation-email/",
              },
              {
                title: "resetPassword",
                path: "/graphql/schema/customer/mutations/reset-password/",
              },
              {
                title: "revokeCustomerToken",
                path: "/graphql/schema/customer/mutations/revoke-token/",
              },
              {
                title: "sendEmailToFriend",
                path: "/graphql/schema/customer/mutations/send-email-to-friend/",
              },
              {
                title: "subscribeEmailToNewsletter",
                path: "/graphql/schema/customer/mutations/subscribe-email-to-newsletter/",
              },
              {
                title: "updateCustomer",
                path: "/graphql/schema/customer/mutations/update/",
              },
              {
                title: "updateCustomerAddress",
                path: "/graphql/schema/customer/mutations/update-address/",
              },
              {
                title: "updateCustomerEmail",
                path: "/graphql/schema/customer/mutations/update-email/",
              },
              {
                title: "updateCustomerV2",
                path: "/graphql/schema/customer/mutations/update-v2/",
              },
            ],
          },
        ],
      },
      {
        title: "Gift registry",
        path: "/graphql/schema/gift-registry/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/gift-registry/queries/",
            pages: [
              {
                title: "giftRegistry",
                path: "/graphql/schema/gift-registry/queries/gift-registry/",
              },
              {
                title: "giftRegistryEmailSearch",
                path: "/graphql/schema/gift-registry/queries/email-search/",
              },
              {
                title: "giftRegistryIdSearch",
                path: "/graphql/schema/gift-registry/queries/id-search/",
              },
              {
                title: "giftRegistryTypes",
                path: "/graphql/schema/gift-registry/queries/types/",
              },
              {
                title: "giftRegistryTypeSearch",
                path: "/graphql/schema/gift-registry/queries/type-search/",
              },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/schema/gift-registry/mutations/",
            pages: [
              {
                title: "addGiftRegistryRegistrants",
                path: "/graphql/schema/gift-registry/mutations/add-registrants/",
              },
              {
                title: "createGiftRegistry",
                path: "/graphql/schema/gift-registry/mutations/create/",
              },
              {
                title: "moveCartItemsToGiftRegistry",
                path: "/graphql/schema/gift-registry/mutations/move-cart-items/",
              },
              {
                title: "removeGiftRegistry",
                path: "/graphql/schema/gift-registry/mutations/remove/",
              },
              {
                title: "removeGiftRegistryItems",
                path: "/graphql/schema/gift-registry/mutations/remove-items/",
              },
              {
                title: "removeGiftRegistryRegistrants",
                path: "/graphql/schema/gift-registry/mutations/remove-registrants/",
              },
              {
                title: "shareGiftRegistry",
                path: "/graphql/schema/gift-registry/mutations/share/",
              },
              {
                title: "updateGiftRegistry",
                path: "/graphql/schema/gift-registry/mutations/update/",
              },
              {
                title: "updateGiftRegistryItems",
                path: "/graphql/schema/gift-registry/mutations/update-items/",
              },
              {
                title: "updateGiftRegistryRegistrants",
                path: "/graphql/schema/gift-registry/mutations/update-registrants/",
              },
            ],
          },
        ],
      },
      {
        title: "Live Search",
        path: "/graphql/schema/live-search",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/live-search/queries/",
            pages: [
              {
                title: "attributeMetadata",
                path: "/graphql/schema/live-search/queries/attribute-metadata/",
              },
              {
                title: "productSearch",
                path: "/graphql/schema/live-search/queries/product-search/",
              }
            ],
          }
        ]
      },
      {
        title: "Negotiable quotes (B2B)",
        path: "/graphql/schema/b2b/negotiable-quote/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/b2b/negotiable-quote/queries/",
            pages: [
              {
                title: "negotiableQuote",
                path: "/graphql/schema/b2b/negotiable-quote/queries/quote/",
              },
              {
                title: "negotiableQuotes",
                path: "/graphql/schema/b2b/negotiable-quote/queries/quotes/",
              },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/schema/b2b/negotiable-quote/mutations/",
            pages: [
              {
                title: "closeNegotiableQuotes",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/close/",
              },
              {
                title: "deleteNegotiableQuotes",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/delete/",
              },
              {
                title: "placeNegotiableQuoteOrder",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/place-order/",
              },
              {
                title: "removeNegotiableQuoteItems",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/remove-items/",
              },
              {
                title: "requestNegotiableQuote",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/request/",
              },
              {
                title: "sendNegotiableQuoteForReview",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/send-for-review/",
              },
              {
                title: "setNegotiableQuoteBillingAddress",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/set-billing-address/",
              },
              {
                title: "setNegotiableQuotePaymentMethod",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/set-payment-method/",
              },
              {
                title: "setNegotiableQuoteShippingAddress",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/set-shipping-address/",
              },
              {
                title: "setNegotiableQuoteShippingMethods",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/set-shipping-methods/",
              },
              {
                title: "updateNegotiableQuoteQuantities",
                path: "/graphql/schema/b2b/negotiable-quote/mutations/update-quantities/",
              },
            ],
          },
          {
            title: "Interfaces",
            path: "/graphql/schema/b2b/negotiable-quote/interfaces/",
          },
          {
            title: "Unions",
            path: "/graphql/schema/b2b/negotiable-quote/unions/",
          },
        ],
      },
      {
        title: "Orders",
        path: "/graphql/schema/orders/",
        pages: [
          {
            title: "Mutations",
            path: "/graphql/schema/orders/mutations/",
            pages: [
              {
                title: "addReturnComment",
                path: "/graphql/schema/orders/mutations/add-return-comment/",
              },
              {
                title: "addReturnTracking",
                path: "/graphql/schema/orders/mutations/add-return-tracking/",
              },
              {
                title: "cancelOrder",
                path: "/graphql/schema/orders/mutations/cancel-order/",
              },
              {
                title: "confirmCancelOrder",
                path: "/graphql/schema/orders/mutations/confirm-cancel-order/",
              },
              {
                title: "confirmReturn",
                path: "/graphql/schema/orders/mutations/confirm-return/",
              },
              {
                title: "removeReturnTracking",
                path: "/graphql/schema/orders/mutations/remove-return-tracking/",
              },
              {
                title: "reorderItems",
                path: "/graphql/schema/orders/mutations/reorder-items/",
              },
              {
                title: "requestGuestOrderCancel",
                path: "/graphql/schema/orders/mutations/request-guest-order-cancel/",
              },
              {
                title: "requestGuestReturn",
                path: "/graphql/schema/orders/mutations/request-guest-return/",
              },
              {
                title: "requestReturn",
                path: "/graphql/schema/orders/mutations/request-return/",
              },
            ],
          },
          {
            title: "Interfaces",
            path: "/graphql/schema/orders/interfaces/",
            pages: [
              {
                title: "CreditMemoInterface",
                path: "/graphql/schema/orders/interfaces/credit-memo-item/",
              },
              {
                title: "InvoiceItemInterface",
                path: "/graphql/schema/orders/interfaces/invoice-item/",
              },
              {
                title: "OrderItemInterface",
                path: "/graphql/schema/orders/interfaces/order-item/",
              },
              {
                title: "ShipmentItemInterface",
                path: "/graphql/schema/orders/interfaces/shipment-item/",
              },
            ],
          },
          {
            title: "Queries",
            path: "graphql/schema/orders/queries/",
            pages: [
              {
                title: "guestOrder",
                path: "graphql/schema/orders/queries/guest-order"
              },
              {
                title: "guestOrderByToken",
                path: "graphql/schema/orders/queries/guest-order-by-token"
              }
            ]
          }
        ],
      },
      {
        title: "Product Recommendations",
        path: "/graphql/schema/product-recommendations/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/product-recommendations/queries/",
            pages: [
              {
                title: "recommendations",
                path: "/graphql/schema/product-recommendations/queries/recommendations/",
              }
            ]
          },
        ]
      },
      {
        title: "Products",
        path: "/graphql/schema/products/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/products/queries/",
            pages: [
              {
                title: "categories",
                path: "/graphql/schema/products/queries/categories/",
              },
              {
                title: "category",
                path: "/graphql/schema/products/queries/category/",
              },
              {
                title: "categoryList",
                path: "/graphql/schema/products/queries/category-list/",
              },
              {
                title: "compareList",
                path: "/graphql/schema/products/queries/compare-list/",
              },
              {
                title: "products",
                path: "/graphql/schema/products/queries/products/",
              },
              {
                title: "productReviewRatingsMetadata",
                path: "/graphql/schema/products/queries/product-review-ratings-metadata/",
              },
              {
                title: "route",
                path: "/graphql/schema/products/queries/route/",
              },
              {
                title: "urlResolver",
                path: "/graphql/schema/products/queries/url-resolver/",
              },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/schema/products/mutations/",
            pages: [
              {
                title: "addProductsToCompareList",
                path: "/graphql/schema/products/mutations/add-products-to-compare-list/",
              },
              {
                title: "createCompareList",
                path: "/graphql/schema/products/mutations/create-compare-list/",
              },
              {
                title: "createProductReview",
                path: "/graphql/schema/products/mutations/create-review/",
              },
              {
                title: "deleteCompareList",
                path: "/graphql/schema/products/mutations/delete-compare-list/",
              },
              {
                title: "removeProductsFromCompareList",
                path: "/graphql/schema/products/mutations/remove-from-compare-list/",
              },
            ],
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
                title: "ProductInterface",
                path: "/graphql/schema/products/interfaces/attributes/",
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
              {
                title: "PWA implementations",
                path: "/graphql/schema/products/interfaces/pwa-implementations/",
              },
              {
                title: "RoutableInterface",
                path: "/graphql/schema/products/interfaces/routable/",
              },
            ],
          },
        ],
      },
      {
        title: "Purchase orders (B2B)",
        path: "/graphql/schema/b2b/purchase-order/",
        pages: [
          {
            title: "Mutations",
            path: "/graphql/schema/b2b/purchase-order/mutations/",
            pages: [
              {
                title: "addPurchaseOrderComment",
                path: "/graphql/schema/b2b/purchase-order/mutations/add-comment/",
              },
              {
                title: "addPurchaseOrderItemsToCart",
                path: "/graphql/schema/b2b/purchase-order/mutations/add-items-to-cart/",
              },
              {
                title: "approvePurchaseOrders",
                path: "/graphql/schema/b2b/purchase-order/mutations/approve/",
              },
              {
                title: "cancelPurchaseOrders",
                path: "/graphql/schema/b2b/purchase-order/mutations/cancel/",
              },
              {
                title: "placeOrderForPurchaseOrder",
                path: "/graphql/schema/b2b/purchase-order/mutations/place-order/",
              },
              {
                title: "placePurchaseOrder",
                path: "/graphql/schema/b2b/purchase-order/mutations/place-purchase-order/",
              },
              {
                title: "rejectPurchaseOrders",
                path: "/graphql/schema/b2b/purchase-order/mutations/reject/",
              },
            ],
          },
        ],
      },
      {
        title: "Purchase order rules (B2B)",
        path: "/graphql/schema/b2b/purchase-order-rule/",
        pages: [
          {
            title: "Mutations",
            path: "/graphql/schema/b2b/purchase-order-rule/mutations/",
            pages: [
              {
                title: "createPurchaseOrderApprovalRule",
                path: "/graphql/schema/b2b/purchase-order-rule/mutations/create/",
              },
              {
                title: "deletePurchaseOrderApprovalRule",
                path: "/graphql/schema/b2b/purchase-order-rule/mutations/delete/",
              },
              {
                title: "updatePurchaseOrderApprovalRule",
                path: "/graphql/schema/b2b/purchase-order-rule/mutations/update/",
              },
              {
                title: "validatePurchaseOrders",
                path: "/graphql/schema/b2b/purchase-order-rule/mutations/validate/",
              },
            ],
          },
          {
            title: "Interfaces",
            path: "/graphql/schema/b2b/purchase-order-rule/interfaces/",
          },
        ],
      },
      {
        title: "Requisition lists (B2B)",
        path: "/graphql/schema/b2b/requisition-list/",
        pages: [
          {
            title: "Mutations",
            path: "/graphql/schema/b2b/requisition-list/mutations/",
            pages: [
              {
                title: "addProductsToRequisitionList",
                path: "/graphql/schema/b2b/requisition-list/mutations/add-products/",
              },
              {
                title: "addRequisitionListItemsToCart",
                path: "/graphql/schema/b2b/requisition-list/mutations/add-items-to-cart/",
              },
              {
                title: "clearCustomerCart",
                path: "/graphql/schema/b2b/requisition-list/mutations/clear-customer-cart/",
              },
              {
                title: "copyItemsBetweenRequisitionLists",
                path: "/graphql/schema/b2b/requisition-list/mutations/copy-items/",
              },
              {
                title: "createRequisitionLists",
                path: "/graphql/schema/b2b/requisition-list/mutations/create/",
              },
              {
                title: "deleteRequisitionList",
                path: "/graphql/schema/b2b/requisition-list/mutations/delete/",
              },
              {
                title: "deleteRequisitionListItems",
                path: "/graphql/schema/b2b/requisition-list/mutations/delete-items/",
              },
              {
                title: "moveItemsBetweenRequisitionLists",
                path: "/graphql/schema/b2b/requisition-list/mutations/move-items/",
              },
              {
                title: "updateRequisitionList",
                path: "/graphql/schema/b2b/requisition-list/mutations/update/",
              },
              {
                title: "updateRequisitionListItems",
                path: "/graphql/schema/b2b/requisition-list/mutations/update-items/",
              },
            ],
          },
          {
            title: "Interfaces",
            path: "/graphql/schema/b2b/requisition-list/interfaces/"
          },
        ],
      },
      {
        title: "Store",
        path: "/graphql/schema/store/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/store/queries/",
            pages: [
              {
                title: "availableStores",
                path: "/graphql/schema/store/queries/available-stores/",
              },
              {
                title: "cmsBlocks",
                path: "/graphql/schema/store/queries/cms-blocks/",
              },
              {
                title: "cmsPage",
                path: "/graphql/schema/store/queries/cms-page/",
              },
              {
                title: "countries",
                path: "/graphql/schema/store/queries/countries/",
              },
              {
                title: "country",
                path: "/graphql/schema/store/queries/country/",
              },
              {
                title: "currency",
                path: "/graphql/schema/store/queries/currency/",
              },
              {
                title: "dynamicBlocks",
                path: "/graphql/schema/store/queries/dynamic-blocks/",
              },
              {
                title: "reCaptchaV3Config",
                path: "/graphql/schema/store/queries/recaptcha-v3-config/",
              },
              {
                title: "recaptchaFormConfig",
                path: "/graphql/schema/store/queries/recaptcha-form-config/",
              },
              {
                title: "storeConfig",
                path: "/graphql/schema/store/queries/store-config/",
              },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/schema/store/mutations/",
            pages: [
              {
                title: "contactUs",
                path: "/graphql/schema/store/mutations/contact-us/",
              },
            ],
          },
        ],
      },
      {
        title: "Wish list",
        path: "/graphql/schema/wishlist/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/wishlist/queries/",
            pages: [
              {
                title: "wishlist",
                path: "/graphql/schema/wishlist/queries/wishlist/",
              },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/schema/wishlist/mutations/",
            pages: [
              {
                title: "addProductsToWishlist",
                path: "/graphql/schema/wishlist/mutations/add-products/",
              },
              {
                title: "addWishlistItemsToCart",
                path: "/graphql/schema/wishlist/mutations/add-items-to-cart/",
              },
              {
                title: "copyProductsBetweenWishlists",
                path: "/graphql/schema/wishlist/mutations/copy-products/",
              },
              {
                title: "clearWishlist",
                path: "/graphql/schema/wishlist/mutations/clear/",
              },
              {
                title: "createWishlist",
                path: "/graphql/schema/wishlist/mutations/create/",
              },
              {
                title: "deleteWishlist",
                path: "/graphql/schema/wishlist/mutations/delete/",
              },
              {
                title: "moveProductsBetweenWishlists",
                path: "/graphql/schema/wishlist/mutations/move-products/",
              },
              {
                title: "removeProductsFromWishlist",
                path: "/graphql/schema/wishlist/mutations/remove-products/",
              },
              {
                title: "updateProductsInWishlist",
                path: "/graphql/schema/wishlist/mutations/update-products/",
              },
              {
                title: "updateWishlist",
                path: "/graphql/schema/wishlist/mutations/update/",
              },
            ],
          },
          {
            title: "Interfaces",
            path: "/graphql/schema/wishlist/interfaces/",
            pages: [
              {
                title: "WishlistItemInterface",
                path: "/graphql/schema/wishlist/interfaces/wishlist/",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Core payment methods",
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
    title: "Payment Services extension",
    path: "/graphql/payment-services-extension/",
    pages: [
      {
        title: "Workflows",
        path: "/graphql/payment-services-extension/workflows/",
        pages: [
              {
                title: "Checkout",
                path: "/graphql/payment-services-extension/workflows/checkout.md",
              },
              {
                title: "Minicart",
                path: "/graphql/payment-services-extension/workflows/minicart.md",
              },
              {
                title: "Vault a card during a checkout authorization",
                path: "/graphql/payment-services-extension/workflows/vault-with-purchase.md",
              },
              {
                title: "Vault a credit card without a purchase",
                path: "/graphql/payment-services-extension/workflows/vault-without-purchase.md",
              },
              {
                title: "Vaulted card",
                path: "/graphql/payment-services-extension/workflows/vaulted-card.md",
        },
      ],
    },
      {
            title: "Queries",
            path: "/graphql/payment-services-extension/queries/",
            pages: [
                {
                    title: "getPaymentConfig",
                    path: "/graphql/payment-services-extension/queries/get-payment-config/",
                  },
                  {
                    title: "getPaymentOrder",
                    path: "/graphql/payment-services-extension/queries/get-payment-order/",
                  },
                  {
                    title: "getPaymentSDK",
                    path: "/graphql/payment-services-extension/queries/get-payment-sdk/",
                  },
                  {
                    title: "getVaultConfig",
                    path: "/graphql/payment-services-extension/queries/get-vault-config/",
                  },
            ],
          },
          {
            title: "Mutations",
            path: "/graphql/payment-services-extension/mutations/",
            pages: [
              {
                title: "createPaymentOrder",
                path: "/graphql/payment-services-extension/mutations/create-payment-order/",
              },
              {
                title: "createVaultCardPaymentToken",
                path: "/graphql/payment-services-extension/mutations/create-vault-card-payment-token/",
              },
              {
                title: "createVaultCardSetupToken",
                path: "/graphql/payment-services-extension/mutations/create-vault-card-setup-token/",
              },
              {
                title: "syncPaymentOrder",
                path: "/graphql/payment-services-extension/mutations/sync-payment-order/",
              },
            ],
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
    title: "Reference",
    path: "/graphql/",
    pages: [
      {
        title: "SaaS",
        path: "https://developer.adobe.com/commerce/webapi/reference/graphql/saas/",
      },
      {
        title: "2.4.8",
        path: "https://developer.adobe.com/commerce/webapi/reference/graphql/2.4.8/",
      },
      {
        title: "2.4.7",
        path: "https://developer.adobe.com/commerce/webapi/reference/graphql/2.4.7/",
      },
      {
        title: "2.4.6",
        path: "https://developer.adobe.com/commerce/webapi/reference/graphql/2.4.6/",
      },
    ],
  },
  {
    title: "Release notes",
    path: "/graphql/release-notes/",
  },
];
