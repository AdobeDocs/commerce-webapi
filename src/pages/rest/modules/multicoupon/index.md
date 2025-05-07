import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# Multiple coupons

As of Adobe Commerce 2.4.7, merchants can allow shoppers to apply multiple coupons to a cart. To enable this feature, set the **Stores** > Settings > **Configuration** > **Sales** > **Sales** > **Multicoupon Settings** > **Maximum number of coupons per order** field to a value greater than one.

The multi-coupon endpoint routes contain the string `V2` instead of `V1`. These endpoints are meant to supersede the `V1` versions of the endpoints and are available only in Adobe Commerce. The `V1` endpoints have not been deprecated and can be used by all merchants.

## Retrieve applied coupons

The `GET /V2/carts/<cartId>/coupons` and `GET /V2/carts/mine/coupons` endpoints provide a RESTful way to retrieve the coupons applied to a specified cart or to the cart of the currently logged in customer, respectively.

## Append coupons

The `POST /V2/carts/:cartId/coupons` and `POST /V2/carts/mine/coupons` endpoints add additional discount coupons to a specified cart or to the cart of the currently logged in customer, respectively. Previously-applied coupons remain.

### Payload

```json
{
  "couponCodes": [
    "COUPON-2", "COUPON-3"
  ]
}
```

## Replace coupons

The `PUT /V2/carts/:cartId/coupons` and `PUT /V2/carts/mine/coupons` endpoints replace discount coupons applied to a specified cart or to the cart of the currently logged in customer, respectively.

### Payload

```json
{
  "couponCodes": [
    "COUPON-2", "COUPON-3"
  ]
}
```

## Delete coupons

The `POST /V2/carts/:cartId/deleteByCodes` and `POST /V2/carts/mine/deleteByCodes` endpoints can be used to delete discount coupons applied to a specified cart or to the cart of the currently logged in customer, respectively.

### Payload

```json
{
  "couponCodes": [
    "COUPON-2", "COUPON-3"
  ]
}
```
