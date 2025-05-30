---
title: B2B integrations
description: Overview of the B2B module
keywords:
  - B2B
  - REST
---

import * as Vars from '../../../data/vars.js';

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# B2B integrations

Unlike the standard business-to-consumer model, <Vars.sitedatavarb2b/> (Business to Business) is designed to meet the needs of sellers (Commerce merchants) whose customers are primarily companies—possibly with complex organizational structures and multiple users with various roles and levels of permission.

There are two basic actors in B2B model:

-  A **seller** is an admin user that accesses the system from the Admin.
-  A **buyer** is any customer associated with a company account who accesses the system from the storefront.

The Company component is the key entity within B2B on which all other features are in some way dependent. It allows joining multiple buyers that belong to the same company into a single company account (or corporate account). The company admin is able to build the company structure (divisions, subdivisions and users) in the appropriate hierarchy and provide different user roles and permissions to the company members. Such a hierarchy allows the company admin to control user activity within an account: ordering, quoting, purchasing, access to company credit info or profile, etc. In addition, a seller can configure how the buying company operates at the website: including the payment methods, pricing levels, the ability to negotiate over prices, and the ability to create requisition lists.

Companies have an option to Pay on Account, or in other words make purchases in credit. The seller allocates credit for a company account and manages credit settings for a company as well as credit reimbursement.

Shared catalogs are the pricing levels that allow setting custom prices per product for different companies on one or multiple websites. By using shared catalogs, a seller can sell this product by applying different pricing levels for different customer groups.

The seller and a buyer representing a company can negotiate the price of an order prior to order placement. This functionality is supported by the Negotiable Quote module. It means that before making an order, the buyer can initiate negotiations with the seller on prices and discounts. Negotiations suggest that the created quote may be submitted, reviewed and modified several times before it is converted into an order.

## B2B Modules

<p><Vars.sitedatavarb2b/> is a set of modules that are installed on top of <Vars.sitedatavaree/>. The following table lists the modules provided with B2B.</p>

Name | Description | REST enabled?
--- | --- | ---
B2b | The base module for B2B. It also provides branding elements. | No
BundleNegotiableQuote | Enables bundle products to be displayed in a negotiable quote in an B2B environment | No
BundleRequisitionList | Enables bundle products to be displayed in a requisition list | No
BundleSharedCatalog | Enables bundle products to be added to a shared catalog in an B2B environment. | No
Company | Allows a seller to create a company account and assign multiple members of the company to the account. | Yes
CompanyCredit | Adds the Payment on Account payment method for B2B companies. | Yes
CompanyPayment | Allows a seller to configure which payment methods are available for B2B companies. | No
ConfigurableNegotiableQuote | Enables configurable products to be displayed in a negotiable quote in an B2B environment | No
ConfigurableRequisitionList | Enables configurable products to be displayed in a requisition list | No
ConfigurableSharedCatalog |Enables configurable products to be added to a shared catalog in an B2B environment. | No
GiftCardNegotiableQuote | Enables gift cards to be displayed in a negotiable quote in an B2B environment | No
GiftCardRequisitionList | Enables gift cards to be displayed in a requisition list | No
GiftCardSharedCatalog | Enables gift cards to be added to a shared catalog in an B2B environment. | No
GroupedRequisitionList | Enables grouped products to be displayed in a requisition list | No
GroupedSharedCatalog | Enables grouped products to be added to a shared catalog in an B2B environment. | No
NegotiableQuote | Allows a buyer and a seller (admin user) to negotiate product and/or shipping prices before the buyer places an order. | Yes
NegotiableQuoteSharedCatalog | Enables the `NegotiableQuote` module to interact with a `SharedCatalog` in an B2B environment. | No
PurchaseOrder | Allows buyers and seller to create a purchase order. | Yes
PurchaseOrderRule | Allows creating and enforcing approval rules for purchase orders. | No
QuickOrder | Allows buyers to create a new order from a list of multiple SKUs. | No
RequisitionList | Allows a buyer to create multiple lists of frequently-purchased items and use those lists for order placement. | No
SharedCatalog | Defines the visibility of products and prices in the catalog and in B2B quotes for different company accounts. | Yes

## Related information

- [Install the B2B extension](https://experienceleague.adobe.com/docs/commerce-admin/b2b/install.html)
- [Getting started with <Vars.sitedatavarb2b/>](https://experienceleague.adobe.com/en/docs/commerce-admin/user-guides/home)
