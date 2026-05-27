The `categories` query returns the `CategoryView` object, which implements `CategoryViewInterface`.

### CategoryView type

Field | Data type | Description
--- | --- | ---
`availableSortBy` | [String] | List of available sort by options. For example, `name`, `position`, or `size`.
`children` | [String!] | List of child category IDs. For example, `123`, `456`, or `789`.
`defaultSortBy` | String | Default sort by option. For example, `name`, `position`, or `size`.
`id` | ID! | Category ID. For example, `123`, `456`, or `789`.
`level` | Int | The level of the category. The root category is a level 1 category. For example, `men` is level 1, `men/clothing` is level 2, and `men/clothing/shorts` is level 3.
`name` | String | Category name. For example, `Electronics`, `Clothing`, or `Books`.
`parentId` | String! | Parent category ID. For example, `123`, `456`, or `789`.
`path` | String | Category path as a string of category IDs separated by slashes (`/`). For example, `1/2/20`.
`position` | Int | The position of the category relative to other categories at the same level in the tree. Merchants set this value in the Admin to control display order in storefront navigation. A lower value means the category appears first. For example, `1`, `2`, `3`, or `10`.
`roles` | [String!]! | List of roles for the category. For example, `show_on_plp`, `show_in_pdp`, or `show_in_search`.
`urlKey` | String | Category URL key. For example, `electronics`, `clothing`, or `books`.
`urlPath` | String | Category URL path. For example, `men/bottoms-men` or `men/tops-men/jackets-men`.

### CategoryViewInterface attributes

`CategoryViewInterface` is the base interface defining essential category fields shared across all category views.

Field | Data Type | Description
--- | --- | ---
`availableSortBy` | [String] | List of available sort by options. For example, `name`, `position`, or `size`.
`defaultSortBy` | String | Default sort by option. For example, `name`, `position`, or `size`.
`id` | ID! | Category ID. For example, `123`, `456`, or `789`.
`level` | Int | The level of the category. The root category is a level 1 category. For example, `men` is level 1, `men/clothing` is level 2, and `men/clothing/shorts` is level 3.
`name` | String | Category name. For example, `Electronics`, `Clothing`, or `Books`.
`path` | String | Category path. For example, `1/2/20` or `/electronics/laptops`.
`position` | Int | The position of the category relative to other categories at the same level in the tree. For example, `1`, `2`, `3`, or `10`.
`roles` | [String] | List of roles for the category. For example, `show_on_plp`, `show_in_pdp`, or `show_in_search`.
`urlKey` | String | Category URL key. For example, `electronics`, `clothing`, or `books`.
`urlPath` | String | Category URL path. For example, `/electronics/laptops`, `/clothing/shirts`, or `/books/fiction`.
