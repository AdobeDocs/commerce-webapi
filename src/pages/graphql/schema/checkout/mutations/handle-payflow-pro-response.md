---
title: handlePayflowProResponse mutation
edition: paas
---

# handlePayflowProResponse mutation

The `handlePayflowProResponse` mutation sends the silent post data that the client received from the Payflow Pro gateway to the application server. The content of this payload varies based on factors such as the merchant's location, the items purchased, and the billing/shipping addresses. The following is an example payload:

```text
'BILLTOCITY=CityM&AMT=0.00&BILLTOSTREET=Green+str,+67&VISACARDLEVEL=12&SHIPTOCITY=CityM'
'&NAMETOSHIP=John+Smith&ZIP=75477&BILLTOLASTNAME=Smith&BILLTOFIRSTNAME=John'
'&RESPMSG=Verified&PROCCVV2=M&STATETOSHIP=AL&NAME=John+Smith&BILLTOZIP=75477&CVV2MATCH=Y'
'&PNREF=B70CCC236815&ZIPTOSHIP=75477&SHIPTOCOUNTRY=US&SHIPTOSTREET=Green+str,+67&CITY=CityM'
'&HOSTCODE=A&LASTNAME=Smith&STATE=AL&SECURETOKEN=MYSECURETOKEN&CITYTOSHIP=CityM&COUNTRYTOSHIP=US'
'&AVSDATA=YNY&ACCT=1111&AUTHCODE=111PNI&FIRSTNAME=John&RESULT=0&IAVS=N&POSTFPSMSG=No+Rules+Triggered&'
'BILLTOSTATE=AL&BILLTOCOUNTRY=US&EXPDATE=0222&CARDTYPE=0&PREFPSMSG=No+Rules+Triggered&SHIPTOZIP=75477&'
'PROCAVS=A&COUNTRY=US&AVSZIP=N&ADDRESS=Green+str,+67&BILLTONAME=John+Smith&'
'ADDRESSTOSHIP=Green+str,+67&'
'AVSADDR=Y&SECURETOKENID=MYSECURETOKENID&SHIPTOSTATE=AL&TRANSTIME=2019-06-24+07%3A53%3A10'
```

See [PayPal Payflow Pro payment method](../../../payment-methods/payflow-pro.md) for detailed information about the workflow of PayPal Payflow Pro transactions.

## Syntax

`handlePayflowProResponse(input: PayflowProResponseInput!): PayflowProResponseOutput`

## Reference

The [`handlePayflowProResponse`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-handlePayflowProResponse) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sends the Payflow Pro payload to Magento:

**Request:**

```graphql
mutation {
  handlePayflowProResponse(
    input: {
      cart_id: "Po1WkfK7d3vZE0qga610NwJIbxgqllpt"
      paypal_payload: "$payload"
    }
  ){
    cart {
      selected_payment_method {
        code
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "handlePayflowProResponse": {
      "cart": {
        "selected_payment_method": {
          "code": "payflowpro",
        }
      }
    }
  }
}
```
