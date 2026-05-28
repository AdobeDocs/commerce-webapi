The customer group code is the encrypted value of the customer group ID, which determines discounts and tax class for pricing contexts. For B2B implementations, the customer group ID also determines the Shared Catalog context.

Use one of the following codes for a default customer group based on your requirements.

Customer Group | Code
---------------| -----------------
**NOT LOGGED IN** | `b6589fc6ab0dc82cf12099d1c2d40ab994e8410c`
**General** | `356a192b7913b04c54574d18c28d46e6395428ab`
**Wholesale** | `da4b9237bacccdf19c0760cab7aec4a8359010b0`
**Retailer** |`77de68daecd823babbb58edb1c8e14d7106e83bb`

For merchant-defined groups, the customer group code is the encrypted value of the ID, `sha1(<customer_group_id>)`.

For B2B implementations, the customer group code is the encrypted value of the customer group ID associated with the shared catalog, `sha1(<customer_group_id>)`.

<InlineAlert variant="info" slots="text"/>

Find a list of available customer group IDs from the Admin (**Customers** > **Customer Groups**). For details, see [Customer Groups](https://experienceleague.adobe.com/en/docs/commerce-admin/customers/customer-groups) and [Shared Catalogs](https://experienceleague.adobe.com/en/docs/commerce-admin/b2b/shared-catalogs/catalog-shared) in the _Merchant Guide_.
