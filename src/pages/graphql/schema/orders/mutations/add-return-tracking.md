---
title: addReturnTracking mutation
---

# addReturnTracking mutation

The `addReturnTracking` mutation adds customer-entered shipping tracking information to the specified return request. Use the `available_shipping_carriers` object in the [`customer` query](../../customer/queries/customer.md) to retrieve valid `carrier_uid` values.

## Syntax

```graphql
mutation: {
    addReturnTracking(input: AddReturnTrackingInput!): AddReturnTrackingOutput
}
```

## Reference

The [`addReturnTracking`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addReturnTracking) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds the shipping carrier and a tracking number for the specified return request.

**Request:**

```graphql
mutation{
  addReturnTracking(input: {
    return_uid: "Mw=="
    carrier_uid: "dXBzLTE="
    tracking_number: "1Z9876543"
  }){
    return_shipping_tracking {
      uid
      carrier {
        uid
        label
      }
      tracking_number
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addReturnTracking": {
      "return_shipping_tracking": {
        "uid": "Mw==",
        "carrier": {
          "uid": "dXBzLTE=",
          "label": "United Parcel Service"
        },
        "tracking_number": "1Z9876543"
      }
    }
  }
}
```

## Related topics

*  [`requestReturn` mutation](request-return.md)
*  [`addReturnComment` mutation](add-return-comment.md)
*  [`removeReturnTracking` mutation](remove-return-tracking.md)
