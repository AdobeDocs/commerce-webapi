The `Categories` return object is an interface that can contain the following fields. It is implemented by the [`CategoryView`](#categoryview-type) and [`CategoryViewInterface`](#categoryviewinterface-attributes) types.

### CategoryView type

Field | Data Type | Description
--- | --- | ---
`children` | [String!] | A list of subcategories within the category.
`id` | ID! | The category ID.
`level` | Int | Indicates the depth of the category within the tree.
`name` | String | The category display name.
`parentId` | String! | ID of the parent category.
`path` | String | The path to the category, as a string of category IDs, separated by slashes (/). For example, 1/2/20
`roles` | [String!]! | A comma-separated list of keywords that are visible only to search engines.
`urlPath` | String | The URL path for the category.
`urlKey` | String | The part of the URL that identifies the category.

### CategoryViewInterface attributes

The `CategoryViewInterface`  returns information about the CategoryView

Field | Data Type | Description
--- | --- | ---
`id` | ID! | The category ID.
`level` | Int | Indicates the depth of the category within the tree.
`name` | String | The category display name.
`path` | String | The path to the category, as a string of category IDs, separated by slashes (/). For example, 1/2/20
`roles` | [String!]! | A comma-separated list of keywords that are visible only to search engines.
`urlPath` | String | The URL path for the category.
`urlKey` | String | The part of the URL that identifies the category.