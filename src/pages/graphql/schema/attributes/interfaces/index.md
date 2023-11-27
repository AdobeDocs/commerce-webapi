---
title: Attribute Interfaces and Implementations
---

import BetaNote from '/src/_includes/graphql/notes/beta.md'
import CustomAttributeCustomer from '/src/_includes/graphql/examples/custom-attribute-customer.md'
import CustomAttributeFilterProduct from '/src/_includes/graphql/examples/custom-attribute-filter-product.md'

# Attribute interfaces and implementations

<BetaNote />

Adobe Commerce provides the following interfaces to access system attributes and custom attributes defined by the merchant.

Interface | Implementations
--- | ---
[`AttributeSelectedOptionInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-AttributeSelectedOptionInterface) | [`AttributeSelectedOption`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-AttributeSelectedOption)
[`AttributeValueInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-AttributeValueInterface) | [`AttributeValue`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-AttributeValue) <br/>[`AttributeSelectedOptions`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-AttributeSelectedOptions)
[`CustomAttributeMetadataInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-CustomerAttributeMetadata) | [`AttributeMetadata`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-AttributeMetadata)
[`CustomAttributeOptionInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-CustomAttributeOptionInterface) | [`AttributeOptionMetadata`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-AttributeOptionMetadata).

## Example usage

### Retrieve custom attributes metadata from a customer

< CustomAttributeCustomer />

### Filter `custom_attributesV2` of a product

< CustomAttributeFilterProduct />
