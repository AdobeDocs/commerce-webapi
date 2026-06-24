---
title: Attribute Interfaces and Implementations
description: Adobe Commerce on cloud and on-premises (PaaS) provides the following interfaces to access system attributes and custom attributes defined by the merchant.
---

# Attribute interfaces and implementations

Adobe Commerce on cloud and on-premises (PaaS) provides the following interfaces to access system attributes and custom attributes defined by the merchant.

| Interface | Implementations |
| --- | --- |
| [`AttributeSelectedOptionInterface`](/reference/graphql/latest/types-a-b.md#attributeselectedoptioninterface) | [`AttributeSelectedOption`](/reference/graphql/latest/types-a-b.md#attributeselectedoption) |
| [`AttributeValueInterface`](/reference/graphql/latest/types-a-b.md#attributevalueinterface) | [`AttributeValue`](/reference/graphql/latest/types-a-b.md#attributevalue) \<br/\>[`AttributeSelectedOptions`](/reference/graphql/latest/types-a-b.md#attributeselectedoptions) |
| [`CustomAttributeMetadataInterface`](/reference/graphql/latest/types-c-e.md#customerattributemetadata) | [`AttributeMetadata`](/reference/graphql/latest/types-a-b.md#attributemetadata) |
| [`CustomAttributeOptionInterface`](/reference/graphql/latest/types-c-e.md#customattributeoptioninterface) | [`AttributeOptionMetadata`](/reference/graphql/latest/types-a-b.md#attributeoptionmetadata). |

The following table lists the same interfaces and implementations with links to the **Adobe Commerce as a Cloud Service (SaaS)** GraphQL reference.

| Interface | Implementations |
| --- | --- |
| [`AttributeSelectedOptionInterface`](/reference/graphql/saas/types-a-b.md#attributeselectedoptioninterface) | [`AttributeSelectedOption`](/reference/graphql/saas/types-a-b.md#attributeselectedoption) |
| [`AttributeValueInterface`](/reference/graphql/saas/types-a-b.md#attributevalueinterface) | [`AttributeValue`](/reference/graphql/saas/types-a-b.md#attributevalue) \<br/\>[`AttributeSelectedOptions`](/reference/graphql/saas/types-a-b.md#attributeselectedoptions) \<br/\>[`AttributeFile`](/reference/graphql/saas/types-a-b.md#attributefile) \<br/\>[`AttributeImage`](/reference/graphql/saas/types-a-b.md#attributeimage) |
| [`CustomAttributeMetadataInterface`](/reference/graphql/saas/types-c-e.md#customerattributemetadata) | [`AttributeMetadata`](/reference/graphql/saas/types-a-b.md#attributemetadata) |
| [`CustomAttributeOptionInterface`](/reference/graphql/saas/types-c-e.md#customattributeoptioninterface) | [`AttributeOptionMetadata`](/reference/graphql/saas/types-a-b.md#attributeoptionmetadata). |

<InlineAlert variant="info" slots="text"/>

SaaS provides two additional implementations of the `AttributeValueInterface` interface (`AttributeFile` and `AttributeImage`) to handle files and images uploaded to Amazon S3. If you are migrating from Adobe Commerce on Cloud Infrastructure or on-premise, these changes represent a backward incompatible change. If your project uses custom attributes for files or images, you must update your code to use the new implementations.

## Example usage

### Retrieve custom attributes metadata from a customer

<Fragment src="../../../../includes/graphql/examples/custom-attribute-customer.md" />

### Filter `custom_attributesV2` of a product

<Fragment src="../../../../includes/graphql/examples/custom-attribute-filter-product.md" />

### Retrieve a file uploaded to Amazon S3

<Fragment src="../../../../includes/saas-only.md"/>

<Fragment src="../../../../includes/graphql/examples/customer-s3-download.md" />
