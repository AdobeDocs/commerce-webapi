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
| Company Management | <code>GET /V1/company/</code> - List all companies<br><code>GET /V1/company/:companyId</code> - Get company by ID<br><code>POST /V1/company/</code> - Create new company<br><code>PUT /V1/company/:companyId</code> - Update company<br><code>DELETE /V1/company/:companyId</code> - Delete company | companyCompanyRepositoryV1 |
| Team Management | <code>GET /V1/team/</code> - List all teams<br><code>GET /V1/team/:teamId</code> - Get team by ID<br><code>POST /V1/team/:companyId</code> - Create new team<br><code>PUT /V1/team/:teamId</code> - Update team<br><code>DELETE /V1/team/:teamId</code> - Delete team | companyTeamRepositoryV1 |
| Role Management | <code>GET /V1/company/role/</code> - List all roles<br><code>GET /V1/company/role/:roleId</code> - Get role by ID<br><code>POST /V1/company/role/</code> - Create new role<br><code>PUT /V1/company/role/:id</code> - Update role<br><code>DELETE /V1/company/role/:roleId</code> - Delete role | companyRoleRepositoryV1 |
| Role Assignment | <code>PUT /V1/company/assignRoles</code> - Assign roles to users<br><code>GET /V1/company/role/:roleId/users</code> - Get users assigned to a specific role | companyAclV1 |
| Customer Management | <code>PUT /V1/customers/me</code> - Update current customer<br><code>PUT /V1/customers/:customerId/companies/:companyId</code> - Assign customer to company<br><code>DELETE /V1/customers/:customerId/companies/:companyId</code> - Unassign customer from company<br><code>GET /V1/customers/:customerId/companies</code> - Get companies assigned to customer | companyCompanyCustomerAssignmentV1 |
| Company User Management | <code>POST /V1/customers/companies</code> - Create company user<br><code>GET /V1/customers/companies</code> - List company users<br><code>GET /V1/customers/:customerId/companies/:companyId</code> - Get company user details | companyCompanyUserRepositoryV1 |
| Company Hierarchy | <code>GET /V1/hierarchy/:id</code> - Get company hierarchy<br><code>PUT /V1/hierarchy/move/:id</code> - Move node in company hierarchy | companyCompanyHierarchyV1 |

For details, see the [company](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/company#operation/GetV1Company) API reference.

### CompanyCredit

Use CompanyCredit endpoints to manage company credit limits, balances, and history in the B2B environment, enabling businesses to control and track credit usage across their organization.

| Use case | Endpoints| Service name |
|----------|---------------------------|--------------|
| Credit Limit Management | - <code>GET /V1/companyCredits/</code> - List all company credits<br>- <code>GET /V1/companyCredits/:creditId</code> - Get specific credit details<br>- <code>PUT /V1/companyCredits/:id</code> - Update credit limit, currency, setting to exceed credit limit<br>- <code>GET /V1/companyCredits/company/:companyId</code> - Get credit limit by company ID | <code>CreditLimitRepositoryInterfaceV1</code><br><code>CreditLimitManagementInterfaceV1</code> |
| Credit Balance Management | - <code>POST /V1/companyCredits/:creditId/increaseBalance</code> - increase credit with an Allocate, Update, Refund, Revert, or Reimburse transaction. <br>- <code>POST /V1/companyCredits/:creditId/decreaseBalance</code> - Decrease credit balance with an Update, Reimburse, or Purchase transaction | <code>CreditBalanceManagementInterfaceV1</code> |
| Credit History Management | - <code>GET /V1/companyCredits/history</code> - Get credit history list <br>- <code>PUT /V1/companyCredits/history/:historyId</code> - Update credit history | <code>CreditHistoryManagementInterfaceV1</code> |

For details, see the [companyCredits](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/companyCredits) API reference.

### Company Relations

Use CompanyRelations endpoints to manage relationships between companies in a B2B organization. It enables administrators to create, view, and delete hierarchical relationships between companies, allowing for complex organizational structures.

 Use Case | Endpoint | Service Name |
|----------|----------|--------------|
| Company Relations Management | <code>GET /V1/company/relations</code> - List company relationships<br><code>POST /V1/company/:parentId/relations</code> - Create company relationship<br><code>DELETE /V1/company/:parentId/relations/:companyId</code> - Delete company relationship | companyRelationRelationManagerV1 |

For details, see the [companyRelations](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/companyrelations#operation/GetV1CompanyRelations) API reference.

### NegotiableQuote

Use NegotableQuote endpoints to manage negotiable quotes, including quote creation, modification, submission, and various cart operations.
    
| Use case | Endpoints | Service name |
|----------|---------------------------|--------------|
| Quote Creation and Management | - <code>POST /V1/negotiableQuote/draft</code> - Create a new draft quote<br>- <code>POST /V1/negotiableQuote/request</code> - Create a new quote request<br>- <code>POST /V1/negotiableQuote/submitToCustomer</code> - Submit quote to customer for review<br>- <code>POST /V1/negotiableQuote/decline</code> - Decline a quote<br>- <code>POST /V1/negotiableQuote/pricesUpdated</code> - Update prices in the quote<br>- <code>PUT /V1/negotiableQuote/:quoteId</code> - Update an existing quote<br>- <code>GET /V1/negotiableQuote/attachmentContent</code> - Retrieve attached documents<br>- <code>GET /V1/negotiableQuote/:quoteId/comments</code> - Get comments on a quote | <code>NegotiableQuoteDraftManagementInterfaceV1</code><br><code>NegotiableQuoteManagementInterfaceV1</code><br><code>NegotiableQuotePriceManagementInterfaceV1</code><br><code>NegotiableCartRepositoryInterfaceV1</code><br><code>AttachmentContentManagementInterfaceV1</code><br><code>CommentLocatorInterfaceV1</code> |
| Shipping Management | - <code>PUT /V1/negotiableQuote/:quoteId/shippingMethod</code> - Set shipping method for quote<br>- <code>POST /V1/negotiable-carts/:cartId/shipping-information</code> - Set shipping address information<br>- <code>POST /V1/negotiable-carts/:cartId/estimate-shipping-methods</code> - Calculate available shipping methods<br>- <code>POST /V1/negotiable-carts/:cartId/estimate-shipping-methods-by-address-id</code> - Calculate shipping methods using saved address | <code>NegotiableQuoteShippingManagementInterfaceV1</code><br><code>ShippingInformationManagementInterfaceV1</code><br><code>ShipmentEstimationInterfaceV1</code><br><code>ShippingMethodManagementInterfaceV1</code> |
| Billing and Payment | - <code>GET /V1/negotiable-carts/:cartId/billing-address</code> - Retrieve billing address<br>- <code>POST /V1/negotiable-carts/:cartId/billing-address</code> - Set billing address<br>- <code>POST /V1/negotiable-carts/:cartId/payment-information</code> - Save payment details and place order<br>- <code>GET /V1/negotiable-carts/:cartId/payment-information</code> - Retrieve payment information<br>- <code>POST /V1/negotiable-carts/:cartId/set-payment-information</code> - Set payment information without placing order | <code>BillingAddressManagementInterfaceV1</code><br><code>PaymentInformationManagementInterfaceV1</code> |
| Cart Operations | - <code>GET /V1/negotiable-carts/:cartId/totals</code> - Calculate and retrieve cart totals<br>- <code>PUT /V1/negotiable-carts/:cartId/coupons/:couponCode</code> - Apply coupon to cart<br>- <code>DELETE /V1/negotiable-carts/:cartId/coupons</code> - Remove applied coupon | <code>CartTotalRepositoryInterfaceV1</code><br><code>CouponManagementInterfaceV1</code> |
| Gift Card Management | - <code>POST /V1/negotiable-carts/:cartId/giftCards</code> - Add gift card to quote<br>- <code>DELETE /V1/negotiable-carts/:cartId/giftCards/:giftCardCode</code> - Remove gift card from quote | <code>GiftCardAccountManagementInterfaceV1</code> |
| Item Notes Management | - <code>GET /V1/negotiable-cart-item-note/:noteId</code> - Retrieve note for specific item<br>- <code>POST /V1/negotiable-cart-item-note</code> - Add note to quote item<br>- <code>DELETE /V1/negotiable-cart-item-note/:noteId</code> - Remove note from quote item<br>- <code>GET /V1/negotiable-cart-item-note/search</code> - Search for item notes | <code>ItemNoteRepositoryInterfaceV1</code> |

For details, see the [negotiableQuote](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/negotiableQuoteattachmentContent#operation/GetV1NegotiableQuoteAttachmentContent) API reference.

### NegotiableQuoteTemplate

Use NegotiableQuoteTemplate endpoints to manage quote templates, enabling businesses to create, store, and reuse standardized quote structures, with support for document references and template lifecycle management in the B2B environment.

| Use case | Endpoints | Service name |
|----------|---------------------------|--------------|
| Template Management | - <code>GET /V1/negotiableQuoteTemplate/:templateId</code> - Get template by ID<br>- <code>GET /V1/negotiableQuoteTemplate</code> - List all templates<br>- <code>POST /V1/negotiableQuoteTemplate/draft</code> - Create draft template<br>- <code>POST /V1/negotiableQuoteTemplate/request</code> - Create template request<br>- <code>PUT /V1/negotiableQuoteTemplate</code> - Update template<br>- <code>DELETE /V1/negotiableQuoteTemplate/:templateId</code> - Delete template | <code>Template\RepositoryInterfaceV1</code><br><code>Template\DraftManagementInterfaceV1</code><br><code>Template\Actions\CreateInterfaceV1</code><br><code>Template\Actions\UpdateInterfaceV1</code><br><code>Template\Actions\DeleteInterfaceV1</code> |
| Template Actions | - <code>POST /V1/negotiableQuoteTemplate/open</code> - Open template<br>- <code>POST /V1/negotiableQuoteTemplate/submitToCustomer</code> - Submit to customer<br>- <code>POST /V1/negotiableQuoteTemplate/submitToSeller</code> - Submit to seller<br>- <code>POST /V1/negotiableQuoteTemplate/decline</code> - Decline template<br>- <code>POST /V1/negotiableQuoteTemplate/accept</code> - Accept template<br>- <code>POST /V1/negotiableQuoteTemplate/generateQuote</code> - Generate quote from template<br>- <code>POST /V1/negotiableQuoteTemplate/cancel</code> - Cancel template | <code>Template\Actions\OpenInterfaceV1</code><br><code>Template\Actions\SellerSendInterfaceV1</code><br><code>Template\Actions\SendInterfaceV1</code><br><code>Template\Actions\DeclineInterfaceV1</code><br><code>Template\Actions\AcceptInterfaceV1</code><br><code>Template\Actions\GenerateQuoteInterfaceV1</code><br><code>Template\Actions\CancelInterfaceV1</code> |
| Reference Document Links | - <code>GET /V1/negotiableQuoteTemplate/referenceDocumentLink/:linkId</code> - Get document link<br>- <code>GET /V1/negotiableQuoteTemplate/referenceDocumentLink</code> - List document links<br>- <code>PUT /V1/negotiableQuoteTemplate/referenceDocumentLink</code> - Update document link<br>- <code>DELETE /V1/negotiableQuoteTemplate/referenceDocumentLink/:linkId</code> - Delete document link | <code>Template\ReferenceDocumentLinkRepositoryInterfaceV1</code> |

For details, see the [negotiableQuoteTemplate](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/negotiableQuoteTemplate#operation/GetV1NegotiableQuoteTemplate) API reference.


### PurchasOrder

Use the PurchaseOrder endpoints to manage purchase orders in a B2B context, including payment information management, shipping method estimation, cart management, and gift card handling

| Use case | Endpoints | Service name |
|----------|---------------------------|--------------|
| Purchase Order Management | - <code>POST /V1/carts/mine/po-payment-information</code> - Save payment information and place purchase order<br>- <code>GET /V1/purchase-order-carts/:cartId/payment-information</code> - Get payment information<br>- <code>POST /V1/purchase-order-carts/:cartId/set-payment-information</code> - Set payment information | <code>PurchaseOrderPaymentInformationManagementInterfaceV1</code> |
| Shipping Management | - <code>POST /V1/purchase-order-carts/:cartId/estimate-shipping-methods</code> - Estimate shipping methods<br>- <code>POST /V1/purchase-order-carts/:cartId/estimate-shipping-methods-by-address-id</code> - Estimate shipping methods by address ID | <code>ShipmentEstimationInterfaceV1</code><br><code>ShippingMethodManagementInterfaceV1</code> |
| Cart Management | - <code>GET /V1/purchase-order-carts/:cartId/totals</code> - Get cart totals<br>- <code>POST /V1/purchase-order-carts/:cartId/billing-address</code> - Set billing address | <code>CartTotalRepositoryInterfaceV1</code><br><code>BillingAddressManagementInterfaceV1</code> |
| Gift Card Management | - <code>POST /V1/purchase-order-carts/:cartId/giftCards</code> - Add gift card to cart<br>- <code>DELETE /V1/purchase-order-carts/:cartId/giftCards/:giftCardCode</code> - Remove gift card from cart | <code>GiftCardAccountManagementInterfaceV1</code> |

For details, see the [purchaseOrders](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/purchase-order-cartscartIdbilling-address) API reference.

### SharedCatalog

Use the SharedCatalog module to manage shared catalogs, including catalog management, company assignments, product management, and category management.

| Use case | Endpoint | Service name |
|----------|----------------------|--------------|
| Shared Catalog Management | <code>GET /V1/sharedCatalog/:sharedCatalogId</code> - Retrieves details of a specific shared catalog by ID<br><code>POST /V1/sharedCatalog</code> - Creates a new shared catalog<br><code>PUT /V1/sharedCatalog/:id</code> - Updates an existing shared catalog<br><code>DELETE /V1/sharedCatalog/:sharedCatalogId</code> - Deletes a shared catalog by ID<br><code>GET /V1/sharedCatalog/</code> - Lists all shared catalogs with pagination support | <code>sharedCatalogSharedCatalogRepositoryV1</code> |
| Company Management | <code>GET /V1/sharedCatalog/:sharedCatalogId/companies</code> - Retrieves list of companies assigned to a shared catalog<br><code>POST /V1/sharedCatalog/:sharedCatalogId/assignCompanies</code> - Assigns companies to a shared catalog<br><code>POST /V1/sharedCatalog/:sharedCatalogId/unassignCompanies</code> - Removes companies from a shared catalog | <code>sharedCatalogCompanyManagementV1</code> |
| Product Management | <code>GET /V1/sharedCatalog/:id/products</code> - Retrieves list of products in a shared catalog<br><code>POST /V1/sharedCatalog/:id/assignProducts</code> - Assigns products to a shared catalog<br><code>POST /V1/sharedCatalog/:id/unassignProducts</code> - Removes products from a shared catalog | <code>sharedCatalogProductManagementV1</code> |
| Category Management | <code>GET /V1/sharedCatalog/:id/categories</code> - Retrieves list of categories in a shared catalog<br><code>POST /V1/sharedCatalog/:id/assignCategories</code> - Assigns categories to a shared catalog<br><code>POST /V1/sharedCatalog/:id/unassignCategories</code> - Removes categories from a shared catalog | <code>sharedCatalogCategoryManagementV1</code> |
| Tier Price Management | <code>POST /V1/sharedCatalog/:sharedCatalogId/assignTierPrices</code> - Assigns tier prices to products in a shared catalog<br><code>POST /V1/sharedCatalog/:sharedCatalogId/resetTierPrices</code> - Resets tier prices for products in a shared catalog | <code>sharedCatalogAssignTierPriceV1</code> |

For details, see the [SharedCatalog](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/sharedCatalog#operation/PostV1SharedCatalog) API reference.

### RequisitionList

Use the `requisition_lists` endpoint to save requisition lists. The RequisitionList module automatically handles:
- Customer ID assignment
- List name processing
- Data validation
- Error handling

| Use Case | Endpoint - Description | Service Name |
|----------|----------------------|--------------|
| Requisition List Management | POST /V1/requisition_lists - Creates or updates a requisition list | requisitionListRequisitionListRepositoryV1 |

For details, see the [requistion_lists](https://adobe-commerce.redoc.ly/2.4.7-admin/tag/requisition_lists#operation/PostV1Requisition_lists) API reference.

