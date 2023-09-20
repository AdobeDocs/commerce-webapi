---
title: NegotiableQuoteAddressInterface attributes and implementations
edition: b2b
---

# NegotiableQuoteAddressInterface attributes and implementations

The `NegotiableQuoteAddressInterface` has the following implementations:

*  NegotiableQuoteBillingAddress
*  NegotiableQuoteShippingAddress

## NegotiableQuoteAddressInterface attributes

The `NegotiableQuoteAddressInterface` and all of its implementations can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`city` | String! | The company's city or town
`company` | String | The company name associated with the shipping/billing address
`country` | [NegotiableQuoteAddressCountry!](#negotiablequoteaddresscountry-object) | The company's country
`firstname` | String! | The first name of the company user
`lastname` | String! | The last name of the company user
`postcode` | String | The company's ZIP or postal code
`region` | [NegotiableQuoteAddressRegion](#negotiablequoteaddressregion-attributes) | An object containing the region name, region code, and region ID
`street` | [String!]! | An array of strings that define the street number and name
`telephone` | String | The customer's telephone number

### NegotiableQuoteAddressCountry object

The `NegotiableQuoteAddressCountry` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`code` |String! | The address country code
`label` | String! | The display name of the region

### NegotiableQuoteAddressRegion attributes

The `NegotiableQuoteAddressRegion` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | The address region code
`label` | String | The display name of the region
`region_id` | Int | The unique ID for a pre-defined region
