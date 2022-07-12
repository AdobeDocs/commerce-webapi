---
title: Integrate with the SharedCatalog module
description: Overview of the SharedCatalog module
ee_only: True
---

import * as Vars from '../../../../data/vars.js';

# Integrate with the SharedCatalog module

A shared catalog is an entity that allows a seller to set special rules for the products that company users (buyers) can purchase. By using shared catalogs, a seller can apply different pricing levels for different companies. Also, shared catalogs allow a seller to configure the visibility of categories and products specifically for different companies.

Products and categories are not created or stored within a shared catalog. The products are defined in the master catalog. (The master catalog is the Magento standard product catalog and is visible to the seller only.) The categories are created within the Categories page, and the seller determines whether a category should be displayed in each shared catalog.

Custom shared catalogs can be assigned to companies only. They cannot be set for individual users. A company can be assigned only one shared catalog.

<Vars.sitedatavarb2b/> provides two types of shared catalog: public and custom. A public catalog is the default shared catalog. It is automatically displayed to all guest customers and to logged-in customers that are not company users, though a company can be assigned the public catalog. The seller assigns a custom shared catalog to specific companies. There can only be one public catalog, and it cannot be deleted.

## Related information

*  [Manage shared catalogs](shared-cat-manage.md)
*  [Assign categories and products](shared-cat-product-assign.md)
*  [Assign companies](shared-cat-company.md)
*  [Manage prices for multiple products](https://developer.adobe.com/commerce/webapi/rest/modules/catalog/catalog-pricing)
