---
title: Multicoupon API
description: Add multiple coupons to a cart using REST.
edition: ee
keywords:
  - REST
---

# Retrieve applied coupons

The `GET /V2/carts/<cartId>/coupons` and `GET /V2/carts/mine/coupons` endpoints provide a RESTful way to retrieve the coupons applied to a specified cart or the current logged in customer cart, respectively.

# Append coupons

The `POST /V2/carts/:cartId/coupons` and `POST /V2/carts/mine/coupons` endpoints can be used to add additional discount coupons to a specified cart or the current logged in customer cart, respectively, keeping previously applied ones, if any.

## Payload

```json
{
  "couponCodes":[
    "COUPON-2", "COUPON-3"
  ]
}
```

# Replace coupons

The `PUT /V2/carts/:cartId/coupons` and `PUT /V2/carts/mine/coupons` endpoints can be used to replace discount coupons applied to a specified cart or the current logged in customer cart, respectively.

## Payload

```json
{
  "couponCodes":[
    "COUPON-2", "COUPON-3"
  ]
}
```

# Delete coupons

The `POST /V2/carts/:cartId/deleteByCodes` and `POST /V2/carts/mine/deleteByCodes` endpoints can be used to delete discount coupons applied to a specified cart or the current logged in customer cart, respectively.

## Payload

```json
{
  "couponCodes":[
    "COUPON-2", "COUPON-3"
  ]
}
```
