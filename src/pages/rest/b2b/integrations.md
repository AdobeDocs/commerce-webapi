---
title: Integrate with B2B using REST
description: A description of available rest endpoints and integrations in the B2B module
edition: ee
keywords:
  - B2B
  - REST
---

import * as Vars from '../../../data/vars.js';

# Integrate with B2B using REST

This topic lists the REST endpoints and services that are provided with <Vars.sitedatavarb2b/>.

## List of REST endpoints by module

### Company

Use Company endpoints to manage B2B companies, including company profiles, teams, roles, and customer assignments. It enables administrators to create and manage company structures, assign roles and permissions, and handle customer-company relationships.

| Use case | Endpoints | Service name |
|----------|----------|--------------|
| Company Management | `GET /V1/company/` - List all companies<br>`GET /V1/company/:companyId` - Get company by ID<br>`POST /V1/company/` - Create new company<br>`PUT /V1/company/:companyId` - Update company<br />`DELETE /V1/company/:companyId` - Delete company | `companyCompanyRepositoryV1` |
| Team Management | `GET /V1/team/` - List all teams<br>`GET /V1/team/:teamId` - Get team by ID<br>`POST /V1/team/:companyId` - Create new team<br>`PUT /V1/team/:teamId` - Update team<br>`DELETE /V1/team/:teamId` - Delete team | `companyTeamRepositoryV1` |
| Role Management | `GET /V1/company/role/` - List all roles<br>`GET /V1/company/role/:roleId` - Get role by ID<br>`POST /V1/company/role/` - Create new role<br>`PUT /V1/company/role/:id` - Update role<br>`DELETE /V1/company/role/:roleId` - Delete role | `companyRoleRepositoryV1` |
| Role Assignment | `PUT /V1/company/assignRoles` - Assign roles to users<br>`GET /V1/company/role/:roleId/users` - Get users assigned to a specific role | `companyAclV1` |
| Customer Management | `PUT /V1/customers/me` - Update current customer<br>`PUT /V1/customers/:customerId/companies/:companyId` - Assign customer to company<br>`DELETE /V1/customers/:customerId/companies/:companyId` - Unassign customer from company<br>`GET /V1/customers/:customerId/companies` - Get companies assigned to customer | `companyCompanyCustomerAssignmentV1` |
| Company User Management | `POST /V1/customers/companies` - Create company user<br>`GET /V1/customers/companies` - List company users<br>`GET /V1/customers/:customerId/companies/:companyId` - Get company user details | `companyCompanyUserRepositoryV1` |
| Company Hierarchy | `GET /V1/hierarchy/:id` - Get company hierarchy<br>`PUT /V1/hierarchy/move/:id` - Move node in company hierarchy | `companyCompanyHierarchyV1` |

For details, see the [company](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/company#operation/GetV1Company) API reference.

### CompanyCredit

Use `companyCredit` endpoints to manage company credit limits, balances, and history in the B2B environment, enabling businesses to control and track credit usage across their organization.

| Use case | Endpoints| Service name |
|----------|---------------------------|--------------|
| Credit Limit Management | - `GET /V1/companyCredits/` - List all company credits<br>- `GET /V1/companyCredits/:creditId` - Get specific credit details<br>- `PUT /V1/companyCredits/:id` - Update credit limit, currency, setting to exceed credit limit<br>- `GET /V1/companyCredits/company/:companyId` - Get credit limit by company ID | `CreditLimitRepositoryInterfaceV1`<br>`CreditLimitManagementInterfaceV1` |
| Credit Balance Management | - `POST /V1/companyCredits/:creditId/increaseBalance` - increase credit with an Allocate, Update, Refund, Revert, or Reimburse transaction. <br>- `POST /V1/companyCredits/:creditId/decreaseBalance` - Decrease credit balance with an Update, Reimburse, or Purchase transaction | `CreditBalanceManagementInterfaceV1` |
| Credit History Management | - `GET /V1/companyCredits/history` - Get credit history list <br>- `PUT /V1/companyCredits/history/:historyId` - Update credit history | `CreditHistoryManagementInterfaceV1` |

For details, see the [companyCredits](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/companyCredits) API reference.

### CompanyRelation

Use `company/relations` endpoints to manage relationships between companies in a B2B organization. These endpoints enable administrators to create, view, and delete hierarchical relationships between companies, allowing for complex organizational structures.

 Use Case | Endpoint | Service Name |
|----------|----------|--------------|
| Company Relations Management | `GET /V1/company/relations` - List company relationships<br>`POST /V1/company/:parentId/relations` - Create company relationship<br>`DELETE /V1/company/:parentId/relations/:companyId` - Delete company relationship | `companyRelationRelationManagerV1` |

For details, see the [companyRelations](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/companyrelations#operation/GetV1CompanyRelations) API reference.

### NegotiableQuote

Use `negotableQuote` endpoints to manage negotiable quotes, including quote creation, modification, submission, and various cart operations.

| Use case | Endpoints | Service name |
|----------|---------------------------|--------------|
| Quote Creation and Management | - `POST /V1/negotiableQuote/draft` - Create a new draft quote<br>- `POST /V1/negotiableQuote/request` - Create a new quote request<br>- `POST /V1/negotiableQuote/submitToCustomer` - Submit quote to customer for review<br>- `POST /V1/negotiableQuote/decline` - Decline a quote<br>- `POST /V1/negotiableQuote/pricesUpdated` - Update prices in the quote<br>- `PUT /V1/negotiableQuote/:quoteId` - Update an existing quote<br>- `GET /V1/negotiableQuote/attachmentContent` - Retrieve attached documents<br>- `GET /V1/negotiableQuote/:quoteId/comments` - Get comments on a quote | `NegotiableQuoteDraftManagementInterfaceV1`<br>`NegotiableQuoteManagementInterfaceV1`<br>`NegotiableQuotePriceManagementInterfaceV1`<br>`NegotiableCartRepositoryInterfaceV1`<br>`AttachmentContentManagementInterfaceV1`<br>`CommentLocatorInterfaceV1` |
| Shipping Management | - `PUT /V1/negotiableQuote/:quoteId/shippingMethod` - Set shipping method for quote<br>- `POST /V1/negotiable-carts/:cartId/shipping-information` - Set shipping address information<br>- `POST /V1/negotiable-carts/:cartId/estimate-shipping-methods` - Calculate available shipping methods<br>- `POST /V1/negotiable-carts/:cartId/estimate-shipping-methods-by-address-id` - Calculate shipping methods using saved address | `NegotiableQuoteShippingManagementInterfaceV1`<br>`ShippingInformationManagementInterfaceV1`<br>`ShipmentEstimationInterfaceV1`<br>`ShippingMethodManagementInterfaceV1` |
| Billing and Payment | - `GET /V1/negotiable-carts/:cartId/billing-address` - Retrieve billing address<br>- `POST /V1/negotiable-carts/:cartId/billing-address` - Set billing address<br>- `POST /V1/negotiable-carts/:cartId/payment-information` - Save payment details and place order<br>- `GET /V1/negotiable-carts/:cartId/payment-information` - Retrieve payment information<br>- `POST /V1/negotiable-carts/:cartId/set-payment-information` - Set payment information without placing order | `BillingAddressManagementInterfaceV1`<br>`PaymentInformationManagementInterfaceV1` |
| Cart Operations | - `GET /V1/negotiable-carts/:cartId/totals` - Calculate and retrieve cart totals<br>- `PUT /V1/negotiable-carts/:cartId/coupons/:couponCode` - Apply coupon to cart<br>- `DELETE /V1/negotiable-carts/:cartId/coupons` - Remove applied coupon | `CartTotalRepositoryInterfaceV1`<br>`CouponManagementInterfaceV1` |
| Gift Card Management | - `POST /V1/negotiable-carts/:cartId/giftCards` - Add gift card to quote<br>- `DELETE /V1/negotiable-carts/:cartId/giftCards/:giftCardCode` - Remove gift card from quote | `GiftCardAccountManagementInterfaceV1` |
| Item Notes Management | - `GET /V1/negotiable-cart-item-note/:noteId` - Retrieve note for specific item<br>- `POST /V1/negotiable-cart-item-note` - Add note to quote item<br>- `DELETE /V1/negotiable-cart-item-note/:noteId` - Remove note from quote item<br>- `GET /V1/negotiable-cart-item-note/search` - Search for item notes | `ItemNoteRepositoryInterfaceV1` |

For details, see the [negotiableQuote](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/negotiableQuoteattachmentContent#operation/GetV1NegotiableQuoteAttachmentContent) API reference.

### NegotiableQuoteTemplate

Use `negotiableQuoteTemplate` endpoints to manage quote templates, enabling businesses to create, store, and reuse standardized quote structures, with support for document references and template lifecycle management in the B2B environment.

| Use case | Endpoints | Service name |
|----------|---------------------------|--------------|
| Template Management | - `GET /V1/negotiableQuoteTemplate/:templateId` - Get template by ID<br>- `GET /V1/negotiableQuoteTemplate` - List all templates<br>- `POST /V1/negotiableQuoteTemplate/draft` - Create draft template<br>- `POST /V1/negotiableQuoteTemplate/request` - Create template request<br>- `PUT /V1/negotiableQuoteTemplate` - Update template<br>- `DELETE /V1/negotiableQuoteTemplate/:templateId` - Delete template | `RepositoryInterfaceV1`<br>`DraftManagementInterfaceV1`<br>`CreateInterfaceV1`<br>`Template\Actions\UpdateInterfaceV1`<br>`DeleteInterfaceV1` |
| Template Actions | - `POST /V1/negotiableQuoteTemplate/open` - Open template<br>- `POST /V1/negotiableQuoteTemplate/submitToCustomer` - Submit to customer<br>- `POST /V1/negotiableQuoteTemplate/submitToSeller` - Submit to seller<br>- `POST /V1/negotiableQuoteTemplate/decline` - Decline template<br>- `POST /V1/negotiableQuoteTemplate/accept` - Accept template<br>- `POST /V1/negotiableQuoteTemplate/generateQuote` - Generate quote from template<br>- `POST /V1/negotiableQuoteTemplate/cancel` - Cancel template | `OpenInterfaceV1`<br>`SellerSendInterfaceV1`<br>`SendInterfaceV1`<br>`DeclineInterfaceV1`<br>`AcceptInterfaceV1`<br>`GenerateQuoteInterfaceV1`<br>`CancelInterfaceV1` |
| Reference Document Links | - `GET /V1/negotiableQuoteTemplate/referenceDocumentLink/:linkId` - Get document link<br>- `GET /V1/negotiableQuoteTemplate/referenceDocumentLink` - List document links<br>- `PUT referenceDocumentLink` - Update document link<br>- `DELETE /V1/negotiableQuoteTemplate/referenceDocumentLink/:linkId` - Delete document link | `ReferenceDocumentLinkRepositoryInterfaceV1` |

For details, see the [negotiableQuoteTemplate](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/negotiableQuoteTemplate#operation/GetV1NegotiableQuoteTemplate) API reference.

### PurchasOrder

Use the `purchaseOrder` endpoints to manage purchase orders in a B2B context, including payment information management, shipping method estimation, cart management, and gift card handling

| Use case | Endpoints | Service name |
|----------|---------------------------|--------------|
| Purchase Order Management | - `POST /V1/carts/mine/po-payment-information` - Save payment information and place purchase order<br>- `GET /V1/purchase-order-carts/:cartId/payment-information` - Get payment information<br>- `POST /V1/purchase-order-carts/:cartId/set-payment-information` - Set payment information | `PurchaseOrderPaymentInformationManagementInterfaceV1` |
| Shipping Management | - `POST /V1/purchase-order-carts/:cartId/estimate-shipping-methods` - Estimate shipping methods<br>- `POST /V1/purchase-order-carts/:cartId/estimate-shipping-methods-by-address-id` - Estimate shipping methods by address ID | `ShipmentEstimationInterfaceV1`<br>`ShippingMethodManagementInterfaceV1` |
| Cart Management | - `GET /V1/purchase-order-carts/:cartId/totals` - Get cart totals<br>- `POST /V1/purchase-order-carts/:cartId/billing-address` - Set billing address | `CartTotalRepositoryInterfaceV1`<br>`BillingAddressManagementInterfaceV1` |
| Gift Card Management | - `POST /V1/purchase-order-carts/:cartId/giftCards` - Add gift card to cart<br>- `DELETE /V1/purchase-order-carts/:cartId/giftCards/:giftCardCode` - Remove gift card from cart | `GiftCardAccountManagementInterfaceV1` |

For details, see the [purchaseOrders](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/purchase-order-cartscartIdbilling-address) API reference.

### SharedCatalog

Use `sharedCatalog` endpoints to manage shared catalogs, including catalog management, company assignments, product management, and category management.

| Use case | Endpoint | Service name |
|----------|----------------------|--------------|
| Shared Catalog Management | `GET /V1/sharedCatalog/:sharedCatalogId` - Retrieves details of a specific shared catalog by ID<br>`POST /V1/sharedCatalog` - Creates a new shared catalog<br>`PUT /V1/sharedCatalog/:id` - Updates an existing shared catalog<br>`DELETE /V1/sharedCatalog/:sharedCatalogId` - Deletes a shared catalog by ID<br>`GET /V1/sharedCatalog/` - Lists all shared catalogs with pagination support | `sharedCatalogSharedCatalogRepositoryV1` |
| Company Management | `GET /V1/sharedCatalog/:sharedCatalogId/companies` - Retrieves list of companies assigned to a shared catalog<br>`POST /V1/sharedCatalog/:sharedCatalogId/assignCompanies` - Assigns companies to a shared catalog<br>`POST /V1/sharedCatalog/:sharedCatalogId/unassignCompanies` - Removes companies from a shared catalog | `sharedCatalogCompanyManagementV1` |
| Product Management | `GET /V1/sharedCatalog/:id/products` - Retrieves list of products in a shared catalog<br>`POST /V1/sharedCatalog/:id/assignProducts` - Assigns products to a shared catalog<br>`POST /V1/sharedCatalog/:id/unassignProducts` - Removes products from a shared catalog | `sharedCatalogProductManagementV1` |
| Category Management | `GET /V1/sharedCatalog/:id/categories` - Retrieves list of categories in a shared catalog<br>`POST /V1/sharedCatalog/:id/assignCategories` - Assigns categories to a shared catalog<br>`POST /V1/sharedCatalog/:id/unassignCategories` - Removes categories from a shared catalog | `sharedCatalogCategoryManagementV1` |
| Tier Price Management | `POST /V1/sharedCatalog/:sharedCatalogId/assignTierPrices` - Assigns tier prices to products in a shared catalog<br>`POST /V1/sharedCatalog/:sharedCatalogId/resetTierPrices` - Resets tier prices for products in a shared catalog | `sharedCatalogAssignTierPriceV1` |

For details, see the [sharedCatalog](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/sharedCatalog#operation/PostV1SharedCatalog) API reference.

### RequisitionList

Use the `requisition_lists` endpoint to save requisition lists to create and manage lists of products for future purpose. The RequisitionList module automatically handles:

- Customer ID assignment
- List name processing
- Data validation
- Error handling

| Use Case | Endpoint - Description | Service Name |
|----------|----------------------|--------------|
| Requisition List Management | POST /V1/requisition_lists - Creates or updates a requisition list | `requisitionListRequisitionListRepositoryV1` |

For details, see the [requistion_lists](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/requisition_lists#operation/PostV1Requisition_lists) API reference.
