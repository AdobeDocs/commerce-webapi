---
title: Attribute Interfaces and Implementations
---

import CustomAttributeCustomer from '/src/_includes/graphql/examples/custom-attribute-customer.md'
import CustomAttributeFilterProduct from '/src/_includes/graphql/examples/custom-attribute-filter-product.md'
import CustomerS3Download from '/src/_includes/graphql/examples/customer-s3-download.md'

# Attribute interfaces and implementations

Adobe Commerce provides the following interfaces to access system attributes and custom attributes defined by the merchant.

Interface | Implementations
--- | ---
[`AttributeSelectedOptionInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeSelectedOptionInterface) | [`AttributeSelectedOption`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeSelectedOption)
[`AttributeValueInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeValueInterface) | [`AttributeValue`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeValue) <br/>[`AttributeSelectedOptions`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeSelectedOptions) <br/>`AttributeFile` (SaaS only) <br/>`AttributeImage` (SaaS only)
[`CustomAttributeMetadataInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CustomerAttributeMetadata) | [`AttributeMetadata`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeMetadata)
[`CustomAttributeOptionInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CustomAttributeOptionInterface) | [`AttributeOptionMetadata`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-AttributeOptionMetadata).

<InlineAlert variant="info" slots="text"/>

Adobe Commerce as a Cloud Service (SaaS) provides two additional implementations of the `AttributeValueInterface` interface (`AttributeFile` and `AttributeImage`) to handle files and images uploaded to Amazon S3. If you are migrating from Adobe Commerce on Cloud Infrastructure or on-premise, these changes represent a backward incompatible change. If your project uses custom attributes for files or images, you must update your code to use the new implementations.

## Example usage

### Retrieve custom attributes metadata from a customer

< CustomAttributeCustomer />

### Filter `custom_attributesV2` of a product

< CustomAttributeFilterProduct />

### Retrieve a file uploaded to Amazon S3

<Edition name="saas" />

< CustomerS3Download />
