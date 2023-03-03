The categories query returns the `CategoryView` object, which implements `CategoryViewInterface`.

### CategoryView type

Field | Data Type | Description
--- | --- | ---
`availableSortBy` | [String] | Lists the available sorting methods.
`children` | [String!] | A list of subcategories within the category.
`defaultSortBy` | String | The default sorting method.
`id` | ID! | The category ID.
`level` | Int | Indicates the depth of the category within the tree.
`name` | String | The category display name.
`parentId` | String! | ID of the parent category.
`path` | String | The path to the category, as a string of category IDs, separated by slashes (/). For example, 1/2/20
`roles` | [String!]! | A comma-separated list of keywords that are visible only to search engines.
`urlKey` | String | The part of the URL that identifies the category.
`urlPath` | String | The URL path for the category.

### CategoryViewInterface attributes

The `CategoryViewInterface`  returns information about the CategoryView

Field | Data Type | Description
--- | --- | ---
`availableSortBy` | String | Lists the available sorting methods.
`defaultSortBy` | String | The default sorting method.
`id` | ID! | The category ID.
`level` | Int | Indicates the depth of the category within the tree.
`name` | String | The category display name.
`path` | String | The path to the category, as a string of category IDs, separated by slashes (/). For example, 1/2/20
`roles` | [String!]! | A comma-separated list of keywords that are visible only to search engines.
`urlKey` | String | The part of the URL that identifies the category.
`urlPath` | String | The URL path for the category.
