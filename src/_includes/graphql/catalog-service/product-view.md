The `ProductView` return object is an interface that can contain the following fields. It is implemented by the [`SimpleProductView`](#simpleproductview-type) and [`ComplexProductView`](#complexproductview-type) types.

Field | Data Type | Description
--- | --- | ---
`addToCartAllowed` | Boolean | Indicates whether the product can be added to the cart.
`attributes(roles: [String])` | [`[ProductViewAttribute]`](#productviewattribute-type) | A list of merchant-defined attributes designated for the storefront.
`description` | String | The detailed description of the product.
`externalId`| String | The external ID of the product.
`id` | ID! | The product ID, generated as a composite key, unique per locale.
`images(roles: [String])` | [`[ProductViewImage]`](#productviewimage-type`) | A list of images defined for the product.
`inputOptions` | [`[ProductViewInputOption]`](#productviewinputoption-type) | A list of input options the shopper can supply to customize a product.
`inStock` | Boolean | Indicates whether the product is in stock.
`lastModifiedAt` | DateTime | Date and time when the product was last updated.
`links(linkTypes: [String!])` | [`[ProductViewLink]`](#productviewlink-type) | A list of related, corss-sell, or up-sell products.
`lowStock` | Boolean | Indicates whether the product stock is low.
`metaDescription` | String | A brief overview of the product for search results listings.
`metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines.
`metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists.
`name` | String | Product name.
`shortDescription` | String | A summary of the product.
`sku` | String | Product SKU.
`url` | String | Canonical URL of the product.
`urlKey` | String | URL key of the product.

### ComplexProductView type

The `ComplexProductView` type represents bundle, configurable, and group products. Complex product prices are returned as a price range, because price values can vary based on selected options. The type implements `ProductView`.

Field | Data Type | Description
--- | --- | ---
`addToCartAllowed` | Boolean | Indicates whether the product can be added to the cart.
`attributes(roles: [String])` | [`[ProductViewAttribute]`](#productviewattribute-type) | A list of merchant-defined attributes designated for the storefront.
`description` | String | The detailed description of the product.
`externalId`| String | The external ID of the product.
`id` | ID! | The product ID, generated as a composite key, unique per locale.
`images(roles: [String])` | [`[ProductViewImage]`](#productviewimage-type) | A list of images defined for the product.
`inputOptions` | [`[ProductViewInputOption]`](#productviewinputoption-type) | A list of input options the shopper can supply to customize a product.
`inStock` | Boolean | Indicates whether the product is in stock.
`links(linkTypes: [String!])` | [`[ProductViewLink]`](#productviewlink-type) | A list of product links.
`lowStock` | Boolean | Indicates whether the product stock is low.
`metaDescription` | String | A brief overview of the product for search results listings.
`metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines.
`metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists.
`name` | String | Product name.
`options` | [`[ProductViewOption]`](#productviewoption-type) | A list of selectable options.
`priceRange` | [`ProductViewPriceRange`](#productviewpricerange-type) | A range of possible prices for a complex product.
`shortDescription` | String | A summary of the product.
`sku` | String | Product SKU.
`url` | String | Canonical URL of the product.
`urlKey` | String | URL key of the product.
`videos` | `[ProductViewVideo]`(#productviewvideo-type) | A list of videos linked to the product.

### Price type

The `Price type` defines the price of a simple product or a part of a price range for a complex product. It can include a list of price adjustments.

Field | Data Type | Description
--- | --- | ---
`adjustments` | [`[PriceAdjustment]`](#priceadjustment-type) | A list of price adjustments.
`amount` | [`ProductViewMoney`](#productviewmoney-type) | Contains the monetary value and currency code of a product.

### PriceAdjustment type

The `PriceAdjustment` type specifies the amount and type of a price adjustment. An example code value is `weee`.

Field | Data Type | Description
--- | --- | ---
`amount` | Float | The amount of the price adjustment.
`code` | String | Identifies the type of price adjustment.

### ProductViewAttribute type

The `ProductViewAttribute` type is a container for customer-defined attributes that are displayed the storefront.

Field | Data Type | Description
--- | --- | ---
`label` | String | Label of the attribute.
`name` | String! | Name of an attribute code.
`roles` | [String] | Roles designated for an attribute on the storefront, such as "Show on PLP", "Show in PDP", or "Show in Search".
`value` | JSON | Attribute value, arbitrary of type.

### ProductViewImage type

The `ProductViewImage` type contains details about a product image.

Field | Data Type | Description
--- | --- | ---
`label` | String | The display label of the product image.
`roles` | [String] | A list that describes how the image is used. Can be `image`, `small_image`, or `thumbnail`.
`url` | String! | The URL to the product image.

### ProductViewLink type

The `ProductViewLink` type contains details about product links for related products and cross selling.

Field | Data Type | Description
--- | --- | ---
`linkTypes` | [String!]! | Types of links for this product. Can be `crosssell`, `related`, and `upsell`.
`product` | `ProductView!` | Details about the product in the link.

### ProductViewMoney type

The `ProductViewMoney` type defines a monetary value, including a numeric value and a currency code.

Field | Data Type | Description
--- | --- | ---
`currency` | ProductViewCurrency | A three-letter currency code, such as USD or EUR.
`value` | Float | A number expressing a monetary value.

### ProductViewInputOption type

Product input options provide details about how a shopper can enter customization details for a product. For example, for product personalization the input options might provide the fields for the shopper to add an image or text for a monogram. The input option can include an associated `markupAmount` that is applied to the product price. For additional information, see [Product settings - Customizable Options](https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/products/settings/settings-advanced-custom-options).

Field | Data Type | Description
-- | -- | --
`fileExtensions` | String | A comma separated list of accepted file types for the input option if it has an associated file, for example `png, jpg`.
`id` | ID | The ID of the option value.
`imageSize` | [`ProductViewInputOptionImageSize`](#productviewimagesize-type) | Dimensions of an image associated with the input option.
`markupAmount` | Float | Amount to add or subtract from the product price when the option is configured.
`range` |[`ProductViewInputOptionRange`](#productviewinputoptionrange-type)| Value limits associated with an input option, for example allowed characters or file size.
`required` | Boolean | Indicates whether the option must be supplied.
`sortOrder` | Int | Indicates the order in which the option is displayed if multiple input options are configured.
`suffix` | String | SKU suffix added to the customized product.
`title` | String | The display name of the option value.
`type` | String | The type of control for entering the input option, for example `textfield`, `textarea`, `date`, `date_time`, `time`, `file`.

### ProductViewInputOptionRange type

Lists the value range associated with a `[ProductViewInputOption]`. For example, if the input option is a text field, the range represents the number of characters.

Field | Data Type | Description
-- | -- | --
`from` | Float | Minimum value accepted for the option input.
`to` | Float | Maximum value accepted for the option input.

### ProductViewInputOptionImageSize type

Lists the image dimensions for an image associated with a `[ProductViewInputOption]`.

Field | Data Type | Description
-- | -- | --
`height` | Int | Height of image provided for an input option.
`width` |  Int | Width of image provided for an input option.

### ProductViewOption type

Product options provide a way to configure products by making selections of particular option values predefined for the product. Selecting one or many options points to a specific simple product.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of the option.
`multi` | Boolean | Indicates whether the option allows multiple choices.
`required` | Boolean | Indicates whether the option must be selected.
`title` | String | The display name of the option.
`values` | [`[ProductViewOptionValue!]`](#productviewoptionvalue-Interface) | List of available option values.

### ProductViewOptionValue interface

The `ProductViewOptionValue` interface defines the product fields available to the `ProductViewOptionValueProduct` and `ProductViewOptionValueConfiguration` types.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`inStock` | Boolean | Indicates if the option is in stock.
`title` | String | The display name of the option value.

### ProductViewOptionValueConfiguration type

The `ProductViewOptionValueConfiguration` type is an implementation of `ProductViewOptionValue` for configuration values.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`inStock` | Boolean | Indicates if the option is in stock.
`title` | String | The display name of the option value.

### ProductViewOptionValueProduct type

The `ProductViewOptionValueProduct` type is an implementation of `ProductViewOptionValue` that adds details about a simple product.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`inStock` | Boolean | Indicates if the option is in stock.
`isDefault` | Boolean | Indicates whether the option is the default.
`product` | [`SimpleProductView`](#simpleproductview-type) | Details about a simple product.
`quantity` | [`SimpleProductView`](#simpleproductview-type) | Default quantity of an option value.
`title` | String | The display name of the option value.

### ProductViewOptionValueSwatch type

The `ProductViewOptionValueSwatch` type is an implementation of `ProductViewOptionValue` that adds details about a product swatch.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`inStock` | Boolean | Indicates if the option is in stock.
`title` | String | The display name of the option value.
`type` | SwatchType | Indicates the type of swatch. Can be `TEXT`, `IMAGE`, `COLOR_HEX`, or `CUSTOM`.
`value` | String | The value of the swatch.

### ProductViewPrice type

The `ProductViewPrice` type provides the base product price view, inherent for simple products.

Field | Data Type | Description
--- | --- | ---
`final` | Price | Price value after discounts, excluding personalized promotions.
`regular` | Price | Base product price specified by the merchant.
`roles` | [String] | Determines if the price should be visible or hidden.

### ProductViewPriceRange type

The `ProductViewPriceRange` type lists the minimum and maximum price of a complex product.

Field | Data Type | Description
--- | --- | ---
`maximum` | ProductViewPrice | Maximum price.
`minimum` | ProductViewPrice | Minimum price.

### ProductViewVideo type

Field | Data Type | Description
--- | --- | ---
`url` | String | The URL to link to the product video.
`description` | String | Description of the product video.
`title` | String | Title of the product video.

### SimpleProductView type

The `SimpleProductView` type represents all product types, except bundle, configurable, and group. Simple product prices do not contain price ranges. `SimpleProductView` implements `ProductView`.

Field | Data Type | Description
--- | --- | ---
`addToCartAllowed` | Boolean | Indicates whether the product can be added to the cart.
`attributes(roles: [String])` | [`[ProductViewAttribute]`](#productviewattribute-type) | A list of merchant-defined attributes designated for the storefront.
`description` | String | The detailed description of the product.
`externalId`| String | The external ID of the product.
`id` | ID! | The product ID, generated as a composite key, unique per locale.
`images(roles: [String])` | [`[ProductViewImage]`](#productviewimage-type) | A list of images defined for the product.
`inputOptions` | [`[ProductViewInputOption]`](#productviewinputoption-type) | A list of input options the shopper can supply to customize a product.
`inStock` | Boolean | Indicates whether the product is in stock.
`links(linkTypes: [String!])` | [`[ProductViewLink]`](#productviewlink-type) | A list of product links.
`lowStock` | Boolean | Indicates whether the product stock is low.
`metaDescription` | String | A brief overview of the product for search results listings.
`metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines.
`metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists.
`name` | String | Product name.
`price` | [`ProductViewPrice`](#productviewprice-type) | Base product price view.
`shortDescription` | String | A summary of the product.
`sku` | String | Product SKU.
`url` | String | Canonical URL of the product.
`urlKey` | String | URL key of the product.
