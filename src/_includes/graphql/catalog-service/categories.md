The `categories` query returns a list of `CategoryView` objects. Each `CategoryView` describes a category in the catalog tree, including identifiers, hierarchy, URL segments, display sort options, and storefront roles. It implements `CategoryViewInterface` for the shared field set documented below.

### CategoryView type

Field | Data type | Description
--- | --- | ---
`availableSortBy` | [String] | List of available sort by options. For example, `name`, `position`, or `size`. Maps to the category configuration *Display Settings > Available Product List Sort By* in the Commerce Admin.
`children` | [String!] | List of subcategories by category ID. For example, `123`, `456`, or `789`.
`defaultSortBy` | String | Default sort by option. For example, `name`, `position`, or `size`. Maps to the category configuration `Display Settings > Available Product List Sort By` in the Commerce Admin.
`id` | ID! | The category ID. For example, `123`, `456`, or `789`. Maps to Display Settings > Default Product List Sort By in the Admin.
`level` | Int | Indicates the depth of the category within the tree. The root category is a level 1 category. For example, `men` is level 1, `men/clothing` is level 2, and `men/clothing/shorts` is level 3.
`name` | String | The category display name. For example, `Electronics`, `Clothing`, or `Books`.
`parentId` | String! | ID of the parent. For example, `123`, `456`, or `789`.
`path` | String | The path to the category as a string of category IDs separated by slashes (`/`). For example, `1/2/20`.
`position` | Int | The position of the category relative to other categories at the same level in the tree. Merchants set this value in the Admin to control display order in storefront navigation. A lower value means the category appears first. For example, `1`, `2`, `3`, or `10`.
`roles` | [String!]! | Storefront labels assigned during category ingestion that describe visibility and placement. Use them in your storefront logic (for example, show only `active` categories in navigation) or pass matching values in the query `roles` argument to filter results. For example, `active`, `show_in_menu`, `show_on_plp`, or `show_in_search`.
`urlKey` | String | The part of the URL that identifies the category. For example, `electronics`, `clothing`, or `books`.
`urlPath` | String | The URL path for the category URL path. For example, `men/bottoms-men` or `men/tops-men/jackets-men`.

### CategoryViewInterface attributes

`CategoryViewInterface` defines the shared category metadata that `CategoryView` implements: identity and hierarchy (`id`, `name`, `level`, `path`, `position`), URL segments (`urlKey`, `urlPath`), product listing sort options (`availableSortBy`, `defaultSortBy`), and storefront roles (`roles`). The `CategoryView` type adds tree-navigation fields (`children`, `parentId`) that are not on the interface.

Field | Data Type | Description
--- | --- | ---
`availableSortBy` | [String] | List of available sort by options. For example, `name`, `position`, or `size`.
`defaultSortBy` | String | Default sort by option. For example, `name`, `position`, or `size`.
`id` | ID! | Category ID. For example, `123`, `456`, or `789`.
`level` | Int | The level of the category. The root category is a level 1 category. For example, `men` is level 1, `men/clothing` is level 2, and `men/clothing/shorts` is level 3.
`name` | String | Category name. For example, `Electronics`, `Clothing`, or `Books`.
`path` | String | Category path. For example, `1/2/20` or `/electronics/laptops`.
`position` | Int | The position of the category relative to other categories at the same level in the tree. For example, `1`, `2`, `3`, or `10`.
`roles` | [String] | Storefront labels assigned during category ingestion that describe visibility and placement. Use them in your storefront logic (for example, show only `active` categories in navigation) or pass matching values in the query `roles` argument to filter results. For example, `active`, `show_in_menu`, `show_on_plp`, or `show_in_search`.
`urlKey` | String | Category URL key. For example, `electronics`, `clothing`, or `books`.
`urlPath` | String | Category URL path. For example, `/electronics/laptops`, `/clothing/shirts`, or `/books/fiction`.
