---
title: Product alerts
description: Use product alert mutations and queries to manage stock and price alert subscriptions for logged-in customers.
---

# Product alerts

Product alerts allow logged-in customers to subscribe to receive notifications when a product's price drops or when an out-of-stock product becomes available again.

These mutations and queries require a valid [customer authentication token](../customer/mutations/generate-token.md).

## Mutations

- [subscribeProductAlertStock mutation](mutations/subscribe-stock.md) — Subscribe to a back-in-stock alert for a product.
- [unsubscribeProductAlertStock mutation](mutations/unsubscribe-stock.md) — Unsubscribe from a back-in-stock alert for a product.
- [unsubscribeProductAlertStockAll mutation](mutations/unsubscribe-stock-all.md) — Unsubscribe from all back-in-stock alerts.
- [subscribeProductAlertPrice mutation](mutations/subscribe-price.md) — Subscribe to a price-drop alert for a product.
- [unsubscribeProductAlertPrice mutation](mutations/unsubscribe-price.md) — Unsubscribe from a price-drop alert for a product.
- [unsubscribeProductAlertPriceAll mutation](mutations/unsubscribe-price-all.md) — Unsubscribe from all price-drop alerts.

## Queries

- [isSubscribedProductAlertStock query](queries/is-subscribed-stock.md) — Check whether the logged-in customer is subscribed to a back-in-stock alert for a product.
- [isSubscribedProductAlertPrice query](queries/is-subscribed-price.md) — Check whether the logged-in customer is subscribed to a price-drop alert for a product.

## Prerequisites

Product alerts must be enabled in the Admin before these operations are available:

- **Stores** > **Configuration** > **Catalog** > **Product Alerts** > **Allow Alert When Product Price Changes** — enables price alerts.
- **Stores** > **Configuration** > **Catalog** > **Product Alerts** > **Allow Alert When Product Comes Back in Stock** — enables stock alerts.
