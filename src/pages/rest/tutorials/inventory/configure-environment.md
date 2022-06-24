---
title: Step 1. Configure your environment
description: In this step of the tutorial you will configure your environment
--- 

# Step 1. Configure your environment

This step guides you through the process of configuring your Adobe Commerce instance so that you can perform the Order Processing with Inventory Management tutorial.

## Configure payment and delivery methods

For this tutorial, we'll assume that payment and delivery methods are configured globally. You can also make configuration changes at the website or store view level.

### Set the payment method

If an order contains one or more physical products, then the customer must either specify a delivery method or select a location for in-store pickup. Downloadable items cannot be shipped, and Magento does not calculate shipping charges for downloadable items.

Since we are not actually shipping any products in this tutorial, we do not need to set up an account with a shipping company such as UPS or Federal Express. Instead, we can use the offline delivery methods that are configured by default.

Shipping type | Configuration name | Enabled by default?
--- | --- | ---
Flat rate | `flatrate` | Yes
Table rate | `tablerate` | Yes
Free shipping | `freeshipping` | No
In-store pickup | `pickup`| No

To change which offline delivery methods are available:

1. Select **Stores** > **Settings** > **Configuration** > **Sales** > **Delivery Methods** in Admin.
1. Enable the In-store pickup delivery method and adjust the status of any other delivery method, as desired.
1. Click **Save Config**.

### Configure supported delivery methods

Since the Luma store is for demonstration purposes only, it is not set up to handle credit card payments. However, it can simulate any of the following offline payment methods:

Payment type | Configuration name | Enabled by default?
--- | --- | ---
Check/Money Order | `checkmo` | Yes
Bank Transfer Payment | `banktransfer` | No
Cash on Delivery | `cashondelivery` | No
Purchase Order | `purchaseorder` | No
Zero Subtotal Checkout | `free` | Yes

In this tutorial, configure Magento to accept bank transfer payments. To allow bank transfer payments (or any other offline payment method) as a payment method:

1. Log in to [Admin](https://glossary.magento.com/admin) and select **Stores** > **Settings** > **Configuration** > **Sales** > **Payment Methods**.
1. Enable the [payment method](https://glossary.magento.com/payment-method).
1. Click **Save Config**.

### Configure distance calculations

This tutorial uses an offline method to calculate distances for shipping and in-store pickup.

1. Set the **Stores** > Settings > **Catalog** > **Inventory** > **Distance Provider for Distance Based SSA** > **Provider** field to **Offline calculation**.

1. Run the following command to import US geocodes:

   `bin/magento inventory-geonames:import us`

   [Inventory CLI reference](https://devdocs.magento.com/guides/v2.4/inventory/inventory-cli-reference.html#import-geocodes) provides additional information about this command.

## Deactivate a cart price rule

By default, the Luma store includes a promotion where shipping is free if you spend at least $50. Since this tutorial shows shipping calculations, we need to deactivate this promotion. The promotion is defined in a cart price rule, which is also known as a sales rule. When you deactivate the cart price rule, shipping is charged at a flat rate of $5 per item.

To disable this cart price rule, select **Marketing** > Promotions > **Cart Price Rules**. Then edit rule ID 2 (Spend $50 or more - shipping is free!), and toggle the Active switch to No. Be sure to save the change.

## Flush the cache

Run the following command to cache the changes in configuration.

```bash
bin/magento cache:flush
```

## Verify this step

Click **Stores** > Settings > **All Stores**. The websites, stores, and store views are displayed in the grid.
