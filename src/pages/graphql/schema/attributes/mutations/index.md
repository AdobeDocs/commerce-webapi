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

<Edition name="paas" />

### Prerequisites

* Adobe Commerce on cloud infrastructure or on-premises: 2.4.5+
* PHP 8.1+
* Magento Open Source is not supported.

To install custom attributes in Adobe Commerce:

1. Run the following command to install the modules:

   ```bash
   composer require magento/out-of-process-custom-attributes=^0.2.0  --with-dependencies
   ```

1. Enable the new module:

   ```bash
   bin/magento module:enable Magento_OutOfProcessCustomAttributes
   ```

1. For on-premises installations, run the following command to upgrade Adobe Commerce and clear the cache.

   ```bash
   bin/magento setup:upgrade && bin/magento cache:clean
   ```
