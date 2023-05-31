The `Recommendations` object contains details about recommended products for a given SKU. It contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`results` | [RecommendationUnit] | List of recommendation units for recommended products
`totalResults` | Int | Total number of recommendation units for returned recommendation

### RecommendationUnit attributes

Attribute |  Data Type | Description
--- | --- | ---
`displayOrder` | Int | Order in which recommendation units are displayed
`pageType` | String | Page Type
`productsView` | [ProductView] | List of product view
`storefrontLabel` | String | Storefront label to be displayed on the storefront
`totalProducts` | Int | Total number of products returned for a recommendation
`typeId` | String | Type of recommendation
`unitId` | String | Id of the preconfigured unit
`unitName` | String | Name of the preconfigured unit

### ProductView interface

Attribute |  Data Type | Description
--- | --- | ---
`categories` | [String] | List of categories to which the product belongs
`rank` | Int | Rank given to a product
`queryType` | String | Indicates if the product was retrieved from the primary or backup query
`score` | Float | Score indicating relevance of the product to the recommendation type
`sku` | String! | The product SKU
`visibility` | String | Visibility setting of the product

### SimpleProductView attributes

`SimpleProductView` implements `ProductView` with `@key(fields: "sku")`.

Attribute |  Data Type | Description
--- | --- | ---
`categories` | [String] | List of categories to which the product belongs
`rank` | Int | Rank given to a product
`queryType` | String | Indicates if the product was retrieved from the primary or backup query
`score` | Float | Score indicating relevance of the product to the recommendation type
`sku` | String! | The product SKU
`visibility` | String | Visibility setting of the product

### ComplexProductView attributes

`SimpleProductView` implements `ProductView` with `@key(fields: "sku")`.

Attribute |  Data Type | Description
--- | --- | ---
`categories` | [String] | List of categories to which the product belongs
`rank` | Int | Rank given to a product
`queryType` | String | Indicates if the product was retrieved from the primary or backup query
`score` | Float | Score indicating relevance of the product to the recommendation type
`sku` | String! | The product SKU
`visibility` | String | Visibility setting of the product
