---
title: Custom attribute mutations
---

# Custom attribute mutations

<InlineAlert variant="important" slots="text" />

This functionality is automatically available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) (SaaS) projects. Adobe Commerce on-premises and Cloud infrastructure (PaaS) projects can [install separate modules](./index.md) to provide this functionality.

Custom attributes can extend the core data model in Adobe Commerce, allowing you to add additional attributes to entities without requiring code or database schema changes. Consider a situation where you want to specify a `duns_number` or `industry_type` information for a company. Custom attributes make this possible.

These custom attributes operate independently of the EAV (Entity-Attribute-Value) attributes, which are defined in the Admin. They do not apply to products, categories, or customers.

The following mutations allow you to set custom attributes:

* [`setCustomAttributesOnCart`](set-custom-cart.md)
* [`setCustomAttributesOnCartItem`](set-custom-cart-item.md)
* &#8203;<Edition name="saas" /> [`setCustomAttributesOnCompany`](set-custom-company.md)
* [`setCustomAttributesOnCreditMemo`](set-custom-credit-memo.md)
* [`setCustomAttributesOnCreditMemoItem`](set-custom-credit-memo-item.md)
* [`setCustomAttributesOnInvoice`](set-custom-invoice.md)
* [`setCustomAttributesOnInvoiceItem`](set-custom-invoice-item.md)
* &#8203;<Edition name="saas" /> [`setCustomAttributesOnNegotiableQuote`](set-custom-negotiable-quote.md)

The following entities now support custom attributes:

* `Cart`
* `CartItemInterface`
* &#8203;<Edition name="saas" /> `Company`
* `CreditMemo`
* `CreditMemoItem`
* `CreditMemoItemInterface`
* `CustomerOrder`
* `Invoice`
* `InvoiceItem`
* `InvoiceItemInterface`
* &#8203;<Edition name="saas" /> `NegotiableQuote`
* `Order`
* `OrderItem`
* `OrderItemInterface`
* `Quote`
* `QuoteItem`

## Install custom attribute support

import InstallCustomAttributes from '/src/_includes/custom-attribute-installation.md'

<InstallCustomAttributes />