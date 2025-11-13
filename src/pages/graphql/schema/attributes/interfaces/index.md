---
title: Attribute Interfaces and Implementations
---

import CustomAttributeCustomer from '/src/_includes/graphql/examples/custom-attribute-customer.md'
import CustomAttributeFilterProduct from '/src/_includes/graphql/examples/custom-attribute-filter-product.md'

# Attribute interfaces and implementations

Adobe Commerce provides the following interfaces to access system attributes and custom attributes defined by the merchant.

Interface | Implementations
--- | ---
[`AttributeSelectedOptionInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeSelectedOptionInterface) | [`AttributeSelectedOption`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeSelectedOption)
[`AttributeValueInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeValueInterface) | [`AttributeValue`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeValue) <br/>[`AttributeSelectedOptions`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeSelectedOptions)
[`CustomAttributeMetadataInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CustomerAttributeMetadata) | [`AttributeMetadata`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeMetadata)
[`CustomAttributeOptionInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CustomAttributeOptionInterface) | [`AttributeOptionMetadata`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeOptionMetadata).

## Example usage

### Retrieve custom attributes metadata from a customer

< CustomAttributeCustomer />

### Filter `custom_attributesV2` of a product

< CustomAttributeFilterProduct />
