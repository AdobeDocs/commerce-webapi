---
title: CategoryInterface attributes
description: CategoryInterface defines attributes that can be returned in the categoryList query, categories query, and the products query.
---

# CategoryInterface attributes

[`CategoryInterface`](/reference/graphql/latest/types-c-e.md#categoryinterface) defines attributes that can be returned in the [`categoryList` query](../queries/category-list.md), [`categories` query](../queries/categories.md), and the [`products` query](../queries/products.md).

## AEM Assets category images

<Fragment src="/_includes/saas-only.md"/>

On Adobe Commerce as a Cloud Service, the `CategoryInterface` interface and the `CategoryTree` type include the following field:

| Field | Type | Description |
|---|---|---|
| `asset_role_image` | String | The URL of the category image assigned from AEM Assets |

The field returns `null` in the following cases:

*  The **Visualization Owner** setting of the AEM Assets integration is set to **Adobe Commerce**.
*  The category image is not an AEM Assets asset.
