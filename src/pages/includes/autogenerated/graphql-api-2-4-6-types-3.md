### ProductInterface

Contains fields that are common to all types of products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activity` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `category_gear` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `climate` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `collar` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `eco_collection` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `erin_recommends` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `features_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `format` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gender` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `material` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `pattern` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `performance_fabric` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `purpose` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `sale` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `size` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `sleeve` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `strap_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bottom` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_general` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product&#x27;s thumbnail image. |
| `tier_price` - [`Float`](#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `type_id` - [`String`](#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use &#x60;__typename&#x60; instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](#string) |  *(Deprecated: Use product&#x27;s &#x60;canonical_url&#x60; or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |

#### Possible Types

| ProductInterface Types |
|----------------|
| [`VirtualProduct`](#virtualproduct) |
| [`SimpleProduct`](#simpleproduct) |
| [`DownloadableProduct`](#downloadableproduct) |
| [`BundleProduct`](#bundleproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`GroupedProduct`](#groupedproduct) |
| [`ConfigurableProduct`](#configurableproduct) |

#### Example

```json
{
  "activity": "abc123",
  "attribute_set_id": 123,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "category_gear": "xyz789",
  "climate": "xyz789",
  "collar": "abc123",
  "color": 987,
  "country_of_manufacture": "abc123",
  "created_at": "xyz789",
  "crosssell_products": [ProductInterface],
  "description": ComplexTextValue,
  "eco_collection": 987,
  "erin_recommends": 987,
  "features_bags": "xyz789",
  "format": 123,
  "gender": "xyz789",
  "gift_message_available": "xyz789",
  "id": 123,
  "image": ProductImage,
  "is_returnable": "abc123",
  "manufacturer": 123,
  "material": "abc123",
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "name": "abc123",
  "new": 987,
  "new_from_date": "xyz789",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 987.65,
  "options_container": "xyz789",
  "pattern": "abc123",
  "performance_fabric": 987,
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "purpose": 123,
  "rating_summary": 123.45,
  "related_products": [ProductInterface],
  "review_count": 123,
  "reviews": ProductReviews,
  "sale": 123,
  "short_description": ComplexTextValue,
  "size": 123,
  "sku": "abc123",
  "sleeve": "abc123",
  "small_image": ProductImage,
  "special_from_date": "abc123",
  "special_price": 123.45,
  "special_to_date": "abc123",
  "staged": false,
  "stock_status": "IN_STOCK",
  "strap_bags": "abc123",
  "style_bags": "xyz789",
  "style_bottom": "xyz789",
  "style_general": "abc123",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type_id": "xyz789",
  "uid": 4,
  "updated_at": "xyz789",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "xyz789",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "xyz789",
  "websites": [Website]
}
```

<HorizontalLine />

### ProductLinks

An implementation of `ProductLinksInterface`.

#### Fields

| Field Name | Description |
|------------|-------------|
| `link_type` - [`String`](#string) | One of related, associated, upsell, or crosssell. |
| `linked_product_sku` - [`String`](#string) | The SKU of the linked product. |
| `linked_product_type` - [`String`](#string) | The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). |
| `position` - [`Int`](#int) | The position within the list of product links. |
| `sku` - [`String`](#string) | The identifier of the linked product. |

#### Example

```json
{
  "link_type": "abc123",
  "linked_product_sku": "abc123",
  "linked_product_type": "xyz789",
  "position": 987,
  "sku": "abc123"
}
```

<HorizontalLine />

### ProductLinksInterface

Contains information about linked products, including the link type and product type of each item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `link_type` - [`String`](#string) | One of related, associated, upsell, or crosssell. |
| `linked_product_sku` - [`String`](#string) | The SKU of the linked product. |
| `linked_product_type` - [`String`](#string) | The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). |
| `position` - [`Int`](#int) | The position within the list of product links. |
| `sku` - [`String`](#string) | The identifier of the linked product. |

#### Possible Types

| ProductLinksInterface Types |
|----------------|
| [`ProductLinks`](#productlinks) |

#### Example

```json
{
  "link_type": "abc123",
  "linked_product_sku": "abc123",
  "linked_product_type": "abc123",
  "position": 987,
  "sku": "xyz789"
}
```

<HorizontalLine />

### ProductMediaGalleryEntriesContent

Contains an image in base64 format and basic information about the image.

#### Fields

| Field Name | Description |
|------------|-------------|
| `base64_encoded_data` - [`String`](#string) | The image in base64 format. |
| `name` - [`String`](#string) | The file name of the image. |
| `type` - [`String`](#string) | The MIME type of the file, such as image/png. |

#### Example

```json
{
  "base64_encoded_data": "abc123",
  "name": "xyz789",
  "type": "abc123"
}
```

<HorizontalLine />

### ProductMediaGalleryEntriesVideoContent

Contains a link to a video file and basic information about the video.

#### Fields

| Field Name | Description |
|------------|-------------|
| `media_type` - [`String`](#string) | Must be external-video. |
| `video_description` - [`String`](#string) | A description of the video. |
| `video_metadata` - [`String`](#string) | Optional data about the video. |
| `video_provider` - [`String`](#string) | Describes the video source. |
| `video_title` - [`String`](#string) | The title of the video. |
| `video_url` - [`String`](#string) | The URL to the video. |

#### Example

```json
{
  "media_type": "abc123",
  "video_description": "abc123",
  "video_metadata": "xyz789",
  "video_provider": "xyz789",
  "video_title": "xyz789",
  "video_url": "abc123"
}
```

<HorizontalLine />

### ProductPrice

Represents a product price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discount` - [`ProductDiscount`](#productdiscount) | The price discount. Represents the difference between the regular and final price. |
| `final_price` - [`Money!`](#money) | The final price of the product after applying discounts. |
| `fixed_product_taxes` - [`[FixedProductTax]`](#fixedproducttax) | An array of the multiple Fixed Product Taxes that can be applied to a product price. |
| `regular_price` - [`Money!`](#money) | The regular price of the product. |

#### Example

```json
{
  "discount": ProductDiscount,
  "final_price": Money,
  "fixed_product_taxes": [FixedProductTax],
  "regular_price": Money
}
```

<HorizontalLine />

### ProductPrices

Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price.

#### Fields

| Field Name | Description |
|------------|-------------|
| `maximalPrice` - [`Price`](#price) | The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the &#x60;to&#x60; value. *(Deprecated: Use &#x60;PriceRange.maximum_price&#x60; instead.)* |
| `minimalPrice` - [`Price`](#price) | The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the &#x60;from&#x60; value. *(Deprecated: Use &#x60;PriceRange.minimum_price&#x60; instead.)* |
| `regularPrice` - [`Price`](#price) | The base price of a product. *(Deprecated: Use &#x60;regular_price&#x60; from &#x60;PriceRange.minimum_price&#x60; or &#x60;PriceRange.maximum_price&#x60; instead.)* |

#### Example

```json
{
  "maximalPrice": Price,
  "minimalPrice": Price,
  "regularPrice": Price
}
```

<HorizontalLine />

### ProductReview

Contains details of a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `average_rating` - [`Float!`](#float) | The average of all ratings for this product. |
| `created_at` - [`String!`](#string) | The date the review was created. |
| `nickname` - [`String!`](#string) | The customer&#x27;s nickname. Defaults to the customer name, if logged in. |
| `product` - [`ProductInterface!`](#productinterface) | The reviewed product. |
| `ratings_breakdown` - [`[ProductReviewRating]!`](#productreviewrating) | An array of ratings by rating category, such as quality, price, and value. |
| `summary` - [`String!`](#string) | The summary (title) of the review. |
| `text` - [`String!`](#string) | The review text. |

#### Example

```json
{
  "average_rating": 123.45,
  "created_at": "xyz789",
  "nickname": "xyz789",
  "product": ProductInterface,
  "ratings_breakdown": [ProductReviewRating],
  "summary": "xyz789",
  "text": "abc123"
}
```

<HorizontalLine />

### ProductReviewRating

Contains data about a single aspect of a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String!`](#string) | The label assigned to an aspect of a product that is being rated, such as quality or price. |
| `value` - [`String!`](#string) | The rating value given by customer. By default, possible values range from 1 to 5. |

#### Example

```json
{
  "name": "abc123",
  "value": "abc123"
}
```

<HorizontalLine />

### ProductReviewRatingInput

Contains the reviewer's rating for a single aspect of a review.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `id` - [`String!`](#string) | An encoded rating ID. |
| `value_id` - [`String!`](#string) | An encoded rating value ID. |

#### Example

```json
{
  "id": "abc123",
  "value_id": "xyz789"
}
```

<HorizontalLine />

### ProductReviewRatingMetadata

Contains details about a single aspect of a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`String!`](#string) | An encoded rating ID. |
| `name` - [`String!`](#string) | The label assigned to an aspect of a product that is being rated, such as quality or price. |
| `values` - [`[ProductReviewRatingValueMetadata]!`](#productreviewratingvaluemetadata) | List of product review ratings sorted by position. |

#### Example

```json
{
  "id": "xyz789",
  "name": "xyz789",
  "values": [ProductReviewRatingValueMetadata]
}
```

<HorizontalLine />

### ProductReviewRatingValueMetadata

Contains details about a single value in a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `value` - [`String!`](#string) | A ratings scale, such as the number of stars awarded. |
| `value_id` - [`String!`](#string) | An encoded rating value ID. |

#### Example

```json
{
  "value": "xyz789",
  "value_id": "xyz789"
}
```

<HorizontalLine />

### ProductReviewRatingsMetadata

Contains an array of metadata about each aspect of a product review.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[ProductReviewRatingMetadata]!`](#productreviewratingmetadata) | An array of product reviews sorted by position. |

#### Example

```json
{"items": [ProductReviewRatingMetadata]}
```

<HorizontalLine />

### ProductReviews

Contains an array of product reviews.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[ProductReview]!`](#productreview) | An array of product reviews. |
| `page_info` - [`SearchResultPageInfo!`](#searchresultpageinfo) | Metadata for pagination rendering. |

#### Example

```json
{
  "items": [ProductReview],
  "page_info": SearchResultPageInfo
}
```

<HorizontalLine />

### ProductStockStatus

This enumeration states whether a product stock status is in stock or out of stock

#### Values

| Enum Value | Description |
|------------|-------------|
| `IN_STOCK` |  |
| `OUT_OF_STOCK` |  |

#### Example

```json
""IN_STOCK""
```

<HorizontalLine />

### ProductTierPrices

Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customer_group_id` - [`String`](#string) | The ID of the customer group. *(Deprecated: Not relevant for the storefront.)* |
| `percentage_value` - [`Float`](#float) | The percentage discount of the item. *(Deprecated: Use &#x60;TierPrice.discount&#x60; instead.)* |
| `qty` - [`Float`](#float) | The number of items that must be purchased to qualify for tier pricing. *(Deprecated: Use &#x60;TierPrice.quantity&#x60; instead.)* |
| `value` - [`Float`](#float) | The price of the fixed price item. *(Deprecated: Use &#x60;TierPrice.final_price&#x60; instead.)* |
| `website_id` - [`Float`](#float) | The ID assigned to the website. *(Deprecated: Not relevant for the storefront.)* |

#### Example

```json
{
  "customer_group_id": "abc123",
  "percentage_value": 123.45,
  "qty": 123.45,
  "value": 987.65,
  "website_id": 987.65
}
```

<HorizontalLine />

### ProductVideo

Contains information about a product video.

#### Fields

| Field Name | Description |
|------------|-------------|
| `disabled` - [`Boolean`](#boolean) | Indicates whether the image is hidden from view. |
| `label` - [`String`](#string) | The label of the product image or video. |
| `position` - [`Int`](#int) | The media item&#x27;s position after it has been sorted. |
| `url` - [`String`](#string) | The URL of the product image or video. |
| `video_content` - [`ProductMediaGalleryEntriesVideoContent`](#productmediagalleryentriesvideocontent) | Contains a &#x60;ProductMediaGalleryEntriesVideoContent&#x60; object. |

#### Example

```json
{
  "disabled": false,
  "label": "abc123",
  "position": 123,
  "url": "xyz789",
  "video_content": ProductMediaGalleryEntriesVideoContent
}
```

<HorizontalLine />

### Products

Contains the results of a `products` query.

#### Fields

| Field Name | Description |
|------------|-------------|
| `aggregations` - [`[Aggregation]`](#aggregation) | A bucket that contains the attribute code and label for each filterable option. |
| `filters` - [`[LayerFilter]`](#layerfilter) | Layered navigation filters array. *(Deprecated: Use &#x60;aggregations&#x60; instead.)* |
| `items` - [`[ProductInterface]`](#productinterface) | An array of products that match the specified search criteria. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | An object that includes the page_info and currentPage values specified in the query. |
| `sort_fields` - [`SortFields`](#sortfields) | An object that includes the default sort field and all available sort fields. |
| `suggestions` - [`[SearchSuggestion]`](#searchsuggestion) | An array of search suggestions for case when search query have no results. |
| `total_count` - [`Int`](#int) | The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. |

#### Example

```json
{
  "aggregations": [Aggregation],
  "filters": [LayerFilter],
  "items": [ProductInterface],
  "page_info": SearchResultPageInfo,
  "sort_fields": SortFields,
  "suggestions": [SearchSuggestion],
  "total_count": 123
}
```

<HorizontalLine />

### PurchaseOrder

Contains details about a purchase order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `approval_flow` - [`[PurchaseOrderRuleApprovalFlow]!`](#purchaseorderruleapprovalflow) | The approval flows for each applied rules. |
| `available_actions` - [`[PurchaseOrderAction]!`](#purchaseorderaction) | Purchase order actions available to the customer. Can be used to display action buttons on the client. |
| `comments` - [`[PurchaseOrderComment]!`](#purchaseordercomment) | The set of comments applied to the purchase order. |
| `created_at` - [`String!`](#string) | The date the purchase order was created. |
| `created_by` - [`Customer`](#customer) | The company user who created the purchase order. |
| `history_log` - [`[PurchaseOrderHistoryItem]!`](#purchaseorderhistoryitem) | The log of the events related to the purchase order. |
| `number` - [`String!`](#string) | The purchase order number. |
| `order` - [`CustomerOrder`](#customerorder) | The reference to the order placed based on the purchase order. |
| `quote` - [`Cart`](#cart) | The quote related to the purchase order. |
| `status` - [`PurchaseOrderStatus!`](#purchaseorderstatus) | The current status of the purchase order. |
| `uid` - [`ID!`](#id) | A unique identifier for the purchase order. |
| `updated_at` - [`String!`](#string) | The date the purchase order was last updated. |

#### Example

```json
{
  "approval_flow": [PurchaseOrderRuleApprovalFlow],
  "available_actions": ["REJECT"],
  "comments": [PurchaseOrderComment],
  "created_at": "xyz789",
  "created_by": Customer,
  "history_log": [PurchaseOrderHistoryItem],
  "number": "abc123",
  "order": CustomerOrder,
  "quote": Cart,
  "status": "PENDING",
  "uid": "4",
  "updated_at": "xyz789"
}
```

<HorizontalLine />

### PurchaseOrderAction

#### Values

| Enum Value | Description |
|------------|-------------|
| `REJECT` |  |
| `CANCEL` |  |
| `VALIDATE` |  |
| `APPROVE` |  |
| `PLACE_ORDER` |  |

#### Example

```json
""REJECT""
```

<HorizontalLine />

### PurchaseOrderActionError

Contains details about a failed action.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |
| `type` - [`PurchaseOrderErrorType!`](#purchaseordererrortype) | The error type. |

#### Example

```json
{"message": "abc123", "type": "NOT_FOUND"}
```

<HorizontalLine />

### PurchaseOrderApprovalFlowEvent

Contains details about a single event in the approval flow of the purchase order.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String`](#string) | A formatted message. |
| `name` - [`String`](#string) | The approver name. |
| `role` - [`String`](#string) | The approver role. |
| `status` - [`PurchaseOrderApprovalFlowItemStatus`](#purchaseorderapprovalflowitemstatus) | The status related to the event. |
| `updated_at` - [`String`](#string) | The date and time the event was updated. |

#### Example

```json
{
  "message": "abc123",
  "name": "abc123",
  "role": "abc123",
  "status": "PENDING",
  "updated_at": "xyz789"
}
```

<HorizontalLine />

### PurchaseOrderApprovalFlowItemStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `PENDING` |  |
| `APPROVED` |  |
| `REJECTED` |  |

#### Example

```json
""PENDING""
```

<HorizontalLine />

### PurchaseOrderApprovalRule

Contains details about a purchase order approval rule.

#### Fields

| Field Name | Description |
|------------|-------------|
| `applies_to_roles` - [`[CompanyRole]!`](#companyrole) | The name of the user(s) affected by the the purchase order approval rule. |
| `approver_roles` - [`[CompanyRole]!`](#companyrole) | The name of the user who needs to approve purchase orders that trigger the approval rule. |
| `condition` - [`PurchaseOrderApprovalRuleConditionInterface`](#purchaseorderapprovalruleconditioninterface) | Condition which triggers the approval rule. |
| `created_at` - [`String!`](#string) | The date the purchase order rule was created. |
| `created_by` - [`String!`](#string) | The name of the user who created the purchase order approval rule. |
| `description` - [`String`](#string) | Description of the purchase order approval rule. |
| `name` - [`String!`](#string) | The name of the purchase order approval rule. |
| `status` - [`PurchaseOrderApprovalRuleStatus!`](#purchaseorderapprovalrulestatus) | The status of the purchase order approval rule. |
| `uid` - [`ID!`](#id) | The unique identifier for the purchase order approval rule. |
| `updated_at` - [`String!`](#string) | The date the purchase order rule was last updated. |

#### Example

```json
{
  "applies_to_roles": [CompanyRole],
  "approver_roles": [CompanyRole],
  "condition": PurchaseOrderApprovalRuleConditionInterface,
  "created_at": "xyz789",
  "created_by": "xyz789",
  "description": "xyz789",
  "name": "abc123",
  "status": "ENABLED",
  "uid": 4,
  "updated_at": "xyz789"
}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleConditionAmount

Contains approval rule condition details, including the amount to be evaluated.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount to be be used for evaluation of the approval rule condition. |
| `attribute` - [`PurchaseOrderApprovalRuleType`](#purchaseorderapprovalruletype) | The type of purchase order approval rule. |
| `operator` - [`PurchaseOrderApprovalRuleConditionOperator`](#purchaseorderapprovalruleconditionoperator) | The operator to be used for evaluating the approval rule condition. |

#### Example

```json
{
  "amount": Money,
  "attribute": "GRAND_TOTAL",
  "operator": "MORE_THAN"
}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleConditionInterface

Purchase order rule condition details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute` - [`PurchaseOrderApprovalRuleType`](#purchaseorderapprovalruletype) | The type of purchase order approval rule. |
| `operator` - [`PurchaseOrderApprovalRuleConditionOperator`](#purchaseorderapprovalruleconditionoperator) | The operator to be used for evaluating the approval rule condition. |

#### Possible Types

| PurchaseOrderApprovalRuleConditionInterface Types |
|----------------|
| [`PurchaseOrderApprovalRuleConditionAmount`](#purchaseorderapprovalruleconditionamount) |
| [`PurchaseOrderApprovalRuleConditionQuantity`](#purchaseorderapprovalruleconditionquantity) |

#### Example

```json
{"attribute": "GRAND_TOTAL", "operator": "MORE_THAN"}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleConditionOperator

#### Values

| Enum Value | Description |
|------------|-------------|
| `MORE_THAN` |  |
| `LESS_THAN` |  |
| `MORE_THAN_OR_EQUAL_TO` |  |
| `LESS_THAN_OR_EQUAL_TO` |  |

#### Example

```json
""MORE_THAN""
```

<HorizontalLine />

### PurchaseOrderApprovalRuleConditionQuantity

Contains approval rule condition details, including the quantity to be evaluated.

#### Fields

| Field Name | Description |
|------------|-------------|
| `attribute` - [`PurchaseOrderApprovalRuleType`](#purchaseorderapprovalruletype) | The type of purchase order approval rule. |
| `operator` - [`PurchaseOrderApprovalRuleConditionOperator`](#purchaseorderapprovalruleconditionoperator) | The operator to be used for evaluating the approval rule condition. |
| `quantity` - [`Int`](#int) | The quantity to be used for evaluation of the approval rule condition. |

#### Example

```json
{"attribute": "GRAND_TOTAL", "operator": "MORE_THAN", "quantity": 123}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleInput

Defines a new purchase order approval rule.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `applies_to` - [`[ID]!`](#id) | A list of company user role IDs to which this purchase order approval rule should be applied. When an empty array is provided, the rule is applied to all user roles in the system, including those created in the future. |
| `approvers` - [`[ID]!`](#id) | A list of B2B user roles that can approve this purchase order approval rule. |
| `condition` - [`CreatePurchaseOrderApprovalRuleConditionInput!`](#createpurchaseorderapprovalruleconditioninput) | The condition of the purchase order approval rule. |
| `description` - [`String`](#string) | A summary of the purpose of the purchase order approval rule. |
| `name` - [`String!`](#string) | The purchase order approval rule name. |
| `status` - [`PurchaseOrderApprovalRuleStatus!`](#purchaseorderapprovalrulestatus) | The status of the purchase order approval rule. |

#### Example

```json
{
  "applies_to": [4],
  "approvers": [4],
  "condition": CreatePurchaseOrderApprovalRuleConditionInput,
  "description": "abc123",
  "name": "abc123",
  "status": "ENABLED"
}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleMetadata

Contains metadata that can be used to render rule edit forms.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_applies_to` - [`[CompanyRole]!`](#companyrole) | A list of B2B user roles that the rule can be applied to. |
| `available_condition_currencies` - [`[AvailableCurrency]!`](#availablecurrency) | A list of currencies that can be used to create approval rules based on amounts, for example shipping cost rules. |
| `available_requires_approval_from` - [`[CompanyRole]!`](#companyrole) | A list of B2B user roles that can be specified as approvers for the approval rules. |

#### Example

```json
{
  "available_applies_to": [CompanyRole],
  "available_condition_currencies": [AvailableCurrency],
  "available_requires_approval_from": [CompanyRole]
}
```

<HorizontalLine />

### PurchaseOrderApprovalRuleStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `ENABLED` |  |
| `DISABLED` |  |

#### Example

```json
""ENABLED""
```

<HorizontalLine />

### PurchaseOrderApprovalRuleType

#### Values

| Enum Value | Description |
|------------|-------------|
| `GRAND_TOTAL` |  |
| `SHIPPING_INCL_TAX` |  |
| `NUMBER_OF_SKUS` |  |

#### Example

```json
""GRAND_TOTAL""
```

<HorizontalLine />

### PurchaseOrderApprovalRules

Contains the approval rules that the customer can see.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[PurchaseOrderApprovalRule]!`](#purchaseorderapprovalrule) | A list of purchase order approval rules visible to the customer. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Result pagination details. |
| `total_count` - [`Int`](#int) | The total number of purchase order approval rules visible to the customer. |

#### Example

```json
{
  "items": [PurchaseOrderApprovalRule],
  "page_info": SearchResultPageInfo,
  "total_count": 987
}
```

<HorizontalLine />

### PurchaseOrderComment

Contains details about a comment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `author` - [`Customer`](#customer) | The user who left the comment. |
| `created_at` - [`String!`](#string) | The date and time when the comment was created. |
| `text` - [`String!`](#string) | The text of the comment. |
| `uid` - [`ID!`](#id) | A unique identifier of the comment. |

#### Example

```json
{
  "author": Customer,
  "created_at": "xyz789",
  "text": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### PurchaseOrderErrorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `NOT_FOUND` |  |
| `OPERATION_NOT_APPLICABLE` |  |
| `COULD_NOT_SAVE` |  |
| `NOT_VALID_DATA` |  |
| `UNDEFINED` |  |

#### Example

```json
""NOT_FOUND""
```

<HorizontalLine />

### PurchaseOrderHistoryItem

Contains details about a status change.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activity` - [`String!`](#string) | The activity type of the event. |
| `created_at` - [`String!`](#string) | The date and time when the event happened. |
| `message` - [`String!`](#string) | The message representation of the event. |
| `uid` - [`ID!`](#id) | A unique identifier of the purchase order history item. |

#### Example

```json
{
  "activity": "xyz789",
  "created_at": "abc123",
  "message": "xyz789",
  "uid": "4"
}
```

<HorizontalLine />

### PurchaseOrderRuleApprovalFlow

Contains details about approval roles applied to the purchase order and status changes.

#### Fields

| Field Name | Description |
|------------|-------------|
| `events` - [`[PurchaseOrderApprovalFlowEvent]!`](#purchaseorderapprovalflowevent) | The approval flow event related to the rule. |
| `rule_name` - [`String!`](#string) | The name of the applied rule. |

#### Example

```json
{
  "events": [PurchaseOrderApprovalFlowEvent],
  "rule_name": "xyz789"
}
```

<HorizontalLine />

### PurchaseOrderStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `PENDING` |  |
| `APPROVAL_REQUIRED` |  |
| `APPROVED` |  |
| `ORDER_IN_PROGRESS` |  |
| `ORDER_PLACED` |  |
| `ORDER_FAILED` |  |
| `REJECTED` |  |
| `CANCELED` |  |
| `APPROVED_PENDING_PAYMENT` |  |

#### Example

```json
""PENDING""
```

<HorizontalLine />

### PurchaseOrders

Contains a list of purchase orders.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[PurchaseOrder]!`](#purchaseorder) | Purchase orders matching the search criteria. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Page information of search result&#x27;s current page. |
| `total_count` - [`Int`](#int) | Total number of purchase orders found matching the search criteria. |

#### Example

```json
{
  "items": [PurchaseOrder],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### PurchaseOrdersActionInput

Defines which purchase orders to act on.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `purchase_order_uids` - [`[ID]!`](#id) | An array of of purchase order UIDs. |

#### Example

```json
{"purchase_order_uids": ["4"]}
```

<HorizontalLine />

### PurchaseOrdersActionOutput

Returns a list of updated purchase orders and any error messages.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[PurchaseOrderActionError]!`](#purchaseorderactionerror) | An array of error messages encountered while performing the operation. |
| `purchase_orders` - [`[PurchaseOrder]!`](#purchaseorder) | A list of purchase orders. |

#### Example

```json
{
  "errors": [PurchaseOrderActionError],
  "purchase_orders": [PurchaseOrder]
}
```

<HorizontalLine />

### PurchaseOrdersFilterInput

Defines the criteria to use to filter the list of purchase orders.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `company_purchase_orders` - [`Boolean`](#boolean) | Include only purchase orders made by subordinate company users. |
| `created_date` - [`FilterRangeTypeInput`](#filterrangetypeinput) | Filter by the creation date of the purchase order. |
| `require_my_approval` - [`Boolean`](#boolean) | Include only purchase orders that are waiting for the customer’s approval. |
| `status` - [`PurchaseOrderStatus`](#purchaseorderstatus) | Filter by the status of the purchase order. |

#### Example

```json
{
  "company_purchase_orders": true,
  "created_date": FilterRangeTypeInput,
  "require_my_approval": false,
  "status": "PENDING"
}
```

<HorizontalLine />

### Region

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | The two-letter code for the region, such as TX for Texas. |
| `id` - [`Int`](#int) | The unique ID for a &#x60;Region&#x60; object. |
| `name` - [`String`](#string) | The name of the region, such as Texas. |

#### Example

```json
{
  "code": "xyz789",
  "id": 987,
  "name": "abc123"
}
```

<HorizontalLine />

### RemoveCouponFromCartInput

Specifies the cart from which to remove a coupon.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |

#### Example

```json
{"cart_id": "xyz789"}
```

<HorizontalLine />

### RemoveCouponFromCartOutput

Contains details about the cart after removing a coupon.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart`](#cart) | The cart after removing a coupon. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### RemoveGiftCardFromCartInput

Defines the input required to run the `removeGiftCardFromCart` mutation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |
| `gift_card_code` - [`String!`](#string) | The gift card code to be removed to the cart. |

#### Example

```json
{
  "cart_id": "abc123",
  "gift_card_code": "abc123"
}
```

<HorizontalLine />

### RemoveGiftCardFromCartOutput

Defines the possible output for the `removeGiftCardFromCart` mutation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The contents of the specified shopping cart. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### RemoveGiftRegistryItemsOutput

Contains the results of a request to remove an item from a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry after removing items. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### RemoveGiftRegistryOutput

Contains the results of a request to delete a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `success` - [`Boolean!`](#boolean) | Indicates whether the gift registry was successfully deleted. |

#### Example

```json
{"success": true}
```

<HorizontalLine />

### RemoveGiftRegistryRegistrantsOutput

Contains the results of a request to delete a registrant.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry after deleting registrants. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### RemoveItemFromCartInput

Specifies which items to remove from the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `cart_item_id` - [`Int`](#int) | Deprecated. Use &#x60;cart_item_uid&#x60; instead. |
| `cart_item_uid` - [`ID`](#id) | Required field. The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "cart_id": "abc123",
  "cart_item_id": 987,
  "cart_item_uid": "4"
}
```

<HorizontalLine />

### RemoveItemFromCartOutput

Contains details about the cart after removing an item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after removing an item. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### RemoveNegotiableQuoteItemsInput

Defines the items to remove from the specified negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_item_uids` - [`[ID]!`](#id) | An array of IDs indicating which items to remove from the negotiable quote. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{"quote_item_uids": ["4"], "quote_uid": 4}
```

<HorizontalLine />

### RemoveNegotiableQuoteItemsOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after removing items. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### RemoveProductsFromCompareListInput

Defines which products to remove from a compare list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `products` - [`[ID]!`](#id) | An array of product IDs to remove from the compare list. |
| `uid` - [`ID!`](#id) | The unique identifier of the compare list to modify. |

#### Example

```json
{
  "products": ["4"],
  "uid": "4"
}
```

<HorizontalLine />

### RemoveProductsFromWishlistOutput

Contains the customer's wish list and any errors encountered.

#### Fields

| Field Name | Description |
|------------|-------------|
| `user_errors` - [`[WishListUserInputError]!`](#wishlistuserinputerror) | An array of errors encountered while deleting products from a wish list. |
| `wishlist` - [`Wishlist!`](#wishlist) | Contains the wish list with after items were successfully deleted. |

#### Example

```json
{
  "user_errors": [WishListUserInputError],
  "wishlist": Wishlist
}
```

<HorizontalLine />

### RemoveReturnTrackingInput

Defines the tracking information to delete.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `return_shipping_tracking_uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnShippingTracking&#x60; object. |

#### Example

```json
{"return_shipping_tracking_uid": "4"}
```

<HorizontalLine />

### RemoveReturnTrackingOutput

Contains the response after deleting tracking information.

#### Fields

| Field Name | Description |
|------------|-------------|
| `return` - [`Return`](#return) | Contains details about the modified return. |

#### Example

```json
{"return": Return}
```

<HorizontalLine />

### RemoveRewardPointsFromCartOutput

Contains the customer cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The customer cart after reward points are removed. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### RemoveStoreCreditFromCartInput

Defines the input required to run the `removeStoreCreditFromCart` mutation.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the customer&#x27;s cart. |

#### Example

```json
{"cart_id": "xyz789"}
```

<HorizontalLine />

### RemoveStoreCreditFromCartOutput

Defines the possible output for the `removeStoreCreditFromCart` mutation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The contents of the specified shopping cart. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### ReorderItemsOutput

Contains the cart and any errors after adding products.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | Detailed information about the customer&#x27;s cart. |
| `userInputErrors` - [`[CheckoutUserInputError]!`](#checkoutuserinputerror) | An array of reordering errors. |

#### Example

```json
{
  "cart": Cart,
  "userInputErrors": [CheckoutUserInputError]
}
```

<HorizontalLine />

### RequestNegotiableQuoteInput

Defines properties of a negotiable quote request.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`ID!`](#id) | The cart ID of the buyer requesting a new negotiable quote. |
| `comment` - [`NegotiableQuoteCommentInput!`](#negotiablequotecommentinput) | Comments the buyer entered to describe the request. |
| `quote_name` - [`String!`](#string) | The name the buyer assigned to the negotiable quote request. |

#### Example

```json
{
  "cart_id": 4,
  "comment": NegotiableQuoteCommentInput,
  "quote_name": "xyz789"
}
```

<HorizontalLine />

### RequestNegotiableQuoteOutput

Contains the `NegotiableQuote` object generated when a buyer requests a negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | Details about the negotiable quote. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### RequestReturnInput

Contains information needed to start a return request.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment_text` - [`String`](#string) | Text the buyer entered that describes the reason for the refund request. |
| `contact_email` - [`String`](#string) | The email address the buyer enters to receive notifications about the status of the return. |
| `items` - [`[RequestReturnItemInput]!`](#requestreturniteminput) | An array of items to be returned. |
| `order_uid` - [`ID!`](#id) | The unique ID for a &#x60;Order&#x60; object. |

#### Example

```json
{
  "comment_text": "abc123",
  "contact_email": "xyz789",
  "items": [RequestReturnItemInput],
  "order_uid": 4
}
```

<HorizontalLine />

### RequestReturnItemInput

Contains details about an item to be returned.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_custom_attributes` - [`[EnteredCustomAttributeInput]`](#enteredcustomattributeinput) | Details about a custom attribute that was entered. |
| `order_item_uid` - [`ID!`](#id) | The unique ID for a &#x60;OrderItemInterface&#x60; object. |
| `quantity_to_return` - [`Float!`](#float) | The quantity of the item to be returned. |
| `selected_custom_attributes` - [`[SelectedCustomAttributeInput]`](#selectedcustomattributeinput) | An array of selected custom option IDs associated with the item to be returned. For example, the IDs for the selected color and size of a configurable product. |

#### Example

```json
{
  "entered_custom_attributes": [
    EnteredCustomAttributeInput
  ],
  "order_item_uid": "4",
  "quantity_to_return": 987.65,
  "selected_custom_attributes": [
    SelectedCustomAttributeInput
  ]
}
```

<HorizontalLine />

### RequestReturnOutput

Contains the response to a return request.

#### Fields

| Field Name | Description |
|------------|-------------|
| `return` - [`Return`](#return) | Details about a single return request. |
| `returns` - [`Returns`](#returns) | An array of return requests. |

#### Example

```json
{
  "return": Return,
  "returns": Returns
}
```

<HorizontalLine />

### RequisitionList

Defines the contents of a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `description` - [`String`](#string) | Optional text that describes the requisition list. |
| `items` - [`RequistionListItems`](#requistionlistitems) | An array of products added to the requisition list. |
| `items_count` - [`Int!`](#int) | The number of items in the list. |
| `name` - [`String!`](#string) | The requisition list name. |
| `uid` - [`ID!`](#id) | The unique requisition list ID. |
| `updated_at` - [`String`](#string) | The time of the last modification of the requisition list. |

#### Example

```json
{
  "description": "abc123",
  "items": RequistionListItems,
  "items_count": 123,
  "name": "abc123",
  "uid": "4",
  "updated_at": "xyz789"
}
```

<HorizontalLine />

### RequisitionListFilterInput

Defines requisition list filters.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `name` - [`FilterMatchTypeInput`](#filtermatchtypeinput) | Filter by the display name of the requisition list. |
| `uids` - [`FilterEqualTypeInput`](#filterequaltypeinput) | Filter requisition lists by one or more requisition list IDs. |

#### Example

```json
{
  "name": FilterMatchTypeInput,
  "uids": FilterEqualTypeInput
}
```

<HorizontalLine />

### RequisitionListItemInterface

The interface for requisition list items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The amount added. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Possible Types

| RequisitionListItemInterface Types |
|----------------|
| [`SimpleRequisitionListItem`](#simplerequisitionlistitem) |
| [`VirtualRequisitionListItem`](#virtualrequisitionlistitem) |
| [`DownloadableRequisitionListItem`](#downloadablerequisitionlistitem) |
| [`BundleRequisitionListItem`](#bundlerequisitionlistitem) |
| [`ConfigurableRequisitionListItem`](#configurablerequisitionlistitem) |
| [`GiftCardRequisitionListItem`](#giftcardrequisitionlistitem) |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": "4"
}
```

<HorizontalLine />

### RequisitionListItemsInput

Defines the items to add.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_options` - [`[EnteredOptionInput]`](#enteredoptioninput) | Entered option IDs. |
| `parent_sku` - [`String`](#string) | For configurable products, the SKU of the parent product. |
| `quantity` - [`Float`](#float) | The quantity of the product to add. |
| `selected_options` - [`[String]`](#string) | Selected option IDs. |
| `sku` - [`String!`](#string) | The product SKU. |

#### Example

```json
{
  "entered_options": [EnteredOptionInput],
  "parent_sku": "abc123",
  "quantity": 987.65,
  "selected_options": ["abc123"],
  "sku": "abc123"
}
```

<HorizontalLine />

### RequisitionLists

Defines customer requisition lists.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[RequisitionList]`](#requisitionlist) | An array of requisition lists. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `total_count` - [`Int`](#int) | The number of returned requisition lists. |

#### Example

```json
{
  "items": [RequisitionList],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### RequistionListItems

Contains an array of items added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[RequisitionListItemInterface]!`](#requisitionlistiteminterface) | An array of items in the requisition list. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `total_pages` - [`Int!`](#int) | The number of pages returned. |

#### Example

```json
{
  "items": [RequisitionListItemInterface],
  "page_info": SearchResultPageInfo,
  "total_pages": 123
}
```

<HorizontalLine />

### Return

Contains details about a return.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_shipping_carriers` - [`[ReturnShippingCarrier]`](#returnshippingcarrier) | A list of shipping carriers available for returns. |
| `comments` - [`[ReturnComment]`](#returncomment) | A list of comments posted for the return request. |
| `created_at` - [`String!`](#string) | The date the return was requested. |
| `customer` - [`ReturnCustomer!`](#returncustomer) | Data from the customer who created the return request. |
| `items` - [`[ReturnItem]`](#returnitem) | A list of items being returned. |
| `number` - [`String!`](#string) | A human-readable return number. |
| `order` - [`CustomerOrder`](#customerorder) | The order associated with the return. |
| `shipping` - [`ReturnShipping`](#returnshipping) | Shipping information for the return. |
| `status` - [`ReturnStatus`](#returnstatus) | The status of the return request. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;Return&#x60; object. |

#### Example

```json
{
  "available_shipping_carriers": [ReturnShippingCarrier],
  "comments": [ReturnComment],
  "created_at": "xyz789",
  "customer": ReturnCustomer,
  "items": [ReturnItem],
  "number": "abc123",
  "order": CustomerOrder,
  "shipping": ReturnShipping,
  "status": "PENDING",
  "uid": "4"
}
```

<HorizontalLine />

### ReturnComment

Contains details about a return comment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `author_name` - [`String!`](#string) | The name or author who posted the comment. |
| `created_at` - [`String!`](#string) | The date and time the comment was posted. |
| `text` - [`String!`](#string) | The contents of the comment. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnComment&#x60; object. |

#### Example

```json
{
  "author_name": "abc123",
  "created_at": "abc123",
  "text": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### ReturnCustomAttribute

Contains details about a `ReturnCustomerAttribute` object.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | A description of the attribute. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnCustomAttribute&#x60; object. |
| `value` - [`String!`](#string) | A JSON-encoded value of the attribute. |

#### Example

```json
{
  "label": "abc123",
  "uid": 4,
  "value": "xyz789"
}
```

<HorizontalLine />

### ReturnCustomer

The customer information for the return.

#### Fields

| Field Name | Description |
|------------|-------------|
| `email` - [`String!`](#string) | The email address of the customer. |
| `firstname` - [`String`](#string) | The first name of the customer. |
| `lastname` - [`String`](#string) | The last name of the customer. |

#### Example

```json
{
  "email": "xyz789",
  "firstname": "xyz789",
  "lastname": "xyz789"
}
```

<HorizontalLine />

### ReturnItem

Contains details about a product being returned.

#### Fields

| Field Name | Description |
|------------|-------------|
| `custom_attributes` - [`[ReturnCustomAttribute]`](#returncustomattribute) | Return item custom attributes that are visible on the storefront. |
| `order_item` - [`OrderItemInterface!`](#orderiteminterface) | Provides access to the product being returned, including information about selected and entered options. |
| `quantity` - [`Float!`](#float) | The quantity of the item the merchant authorized to be returned. |
| `request_quantity` - [`Float!`](#float) | The quantity of the item requested to be returned. |
| `status` - [`ReturnItemStatus!`](#returnitemstatus) | The return status of the item. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnItem&#x60; object. |

#### Example

```json
{
  "custom_attributes": [ReturnCustomAttribute],
  "order_item": OrderItemInterface,
  "quantity": 987.65,
  "request_quantity": 987.65,
  "status": "PENDING",
  "uid": "4"
}
```

<HorizontalLine />

### ReturnItemStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `PENDING` |  |
| `AUTHORIZED` |  |
| `RECEIVED` |  |
| `APPROVED` |  |
| `REJECTED` |  |
| `DENIED` |  |

#### Example

```json
""PENDING""
```

<HorizontalLine />

### ReturnShipping

Contains details about the return shipping address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `address` - [`ReturnShippingAddress`](#returnshippingaddress) | The merchant-defined return shipping address. |
| `tracking` - [`[ReturnShippingTracking]`](#returnshippingtracking) | The unique ID for a &#x60;ReturnShippingTracking&#x60; object. If a single UID is specified, the array contains a single tracking record. Otherwise, array contains all tracking information. |

#### Example

```json
{
  "address": ReturnShippingAddress,
  "tracking": [ReturnShippingTracking]
}
```

<HorizontalLine />

### ReturnShippingAddress

Contains details about the shipping address used for receiving returned items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `city` - [`String!`](#string) | The city for product returns. |
| `contact_name` - [`String`](#string) | The merchant&#x27;s contact person. |
| `country` - [`Country!`](#country) | An object that defines the country for product returns. |
| `postcode` - [`String!`](#string) | The postal code for product returns. |
| `region` - [`Region!`](#region) | An object that defines the state or province for product returns. |
| `street` - [`[String]!`](#string) | The street address for product returns. |
| `telephone` - [`String`](#string) | The telephone number for product returns. |

#### Example

```json
{
  "city": "xyz789",
  "contact_name": "xyz789",
  "country": Country,
  "postcode": "xyz789",
  "region": Region,
  "street": ["xyz789"],
  "telephone": "abc123"
}
```

<HorizontalLine />

### ReturnShippingCarrier

Contains details about the carrier on a return.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String!`](#string) | A description of the shipping carrier. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnShippingCarrier&#x60; object assigned to the shipping carrier. |

#### Example

```json
{"label": "abc123", "uid": 4}
```

<HorizontalLine />

### ReturnShippingTracking

Contains shipping and tracking details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `carrier` - [`ReturnShippingCarrier!`](#returnshippingcarrier) | Contains details of a shipping carrier. |
| `status` - [`ReturnShippingTrackingStatus`](#returnshippingtrackingstatus) | Details about the status of a shipment. |
| `tracking_number` - [`String!`](#string) | A tracking number assigned by the carrier. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ReturnShippingTracking&#x60; object assigned to the tracking item. |

#### Example

```json
{
  "carrier": ReturnShippingCarrier,
  "status": ReturnShippingTrackingStatus,
  "tracking_number": "abc123",
  "uid": 4
}
```

<HorizontalLine />

### ReturnShippingTrackingStatus

Contains the status of a shipment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `text` - [`String!`](#string) | Text that describes the status. |
| `type` - [`ReturnShippingTrackingStatusType!`](#returnshippingtrackingstatustype) | Indicates whether the status type is informational or an error. |

#### Example

```json
{"text": "abc123", "type": "INFORMATION"}
```

<HorizontalLine />

### ReturnShippingTrackingStatusType

#### Values

| Enum Value | Description |
|------------|-------------|
| `INFORMATION` |  |
| `ERROR` |  |

#### Example

```json
""INFORMATION""
```

<HorizontalLine />

### ReturnStatus

#### Values

| Enum Value | Description |
|------------|-------------|
| `PENDING` |  |
| `AUTHORIZED` |  |
| `PARTIALLY_AUTHORIZED` |  |
| `RECEIVED` |  |
| `PARTIALLY_RECEIVED` |  |
| `APPROVED` |  |
| `PARTIALLY_APPROVED` |  |
| `REJECTED` |  |
| `PARTIALLY_REJECTED` |  |
| `DENIED` |  |
| `PROCESSED_AND_CLOSED` |  |
| `CLOSED` |  |

#### Example

```json
""PENDING""
```

<HorizontalLine />

### Returns

Contains a list of customer return requests.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[Return]`](#return) | A list of return requests. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Pagination metadata. |
| `total_count` - [`Int`](#int) | The total number of return requests. |

#### Example

```json
{
  "items": [Return],
  "page_info": SearchResultPageInfo,
  "total_count": 123
}
```

<HorizontalLine />

### RevokeCustomerTokenOutput

Contains the result of a request to revoke a customer token.

#### Fields

| Field Name | Description |
|------------|-------------|
| `result` - [`Boolean!`](#boolean) | The result of a request to revoke a customer token. |

#### Example

```json
{"result": false}
```

<HorizontalLine />

### RewardPoints

Contains details about a customer's reward points.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance` - [`RewardPointsAmount`](#rewardpointsamount) | The current balance of reward points. |
| `balance_history` - [`[RewardPointsBalanceHistoryItem]`](#rewardpointsbalancehistoryitem) | The balance history of reward points. If the ability for customers to view the balance history has been disabled in the Admin, this field will be set to null. |
| `exchange_rates` - [`RewardPointsExchangeRates`](#rewardpointsexchangerates) | The current exchange rates for reward points. |
| `subscription_status` - [`RewardPointsSubscriptionStatus`](#rewardpointssubscriptionstatus) | The subscription status of emails related to reward points. |

#### Example

```json
{
  "balance": RewardPointsAmount,
  "balance_history": [RewardPointsBalanceHistoryItem],
  "exchange_rates": RewardPointsExchangeRates,
  "subscription_status": RewardPointsSubscriptionStatus
}
```

<HorizontalLine />

### RewardPointsAmount

#### Fields

| Field Name | Description |
|------------|-------------|
| `money` - [`Money!`](#money) | The reward points amount in store currency. |
| `points` - [`Float!`](#float) | The reward points amount in points. |

#### Example

```json
{"money": Money, "points": 123.45}
```

<HorizontalLine />

### RewardPointsBalanceHistoryItem

Contain details about the reward points transaction.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance` - [`RewardPointsAmount`](#rewardpointsamount) | The award points balance after the completion of the transaction. |
| `change_reason` - [`String!`](#string) | The reason the balance changed. |
| `date` - [`String!`](#string) | The date of the transaction. |
| `points_change` - [`Float!`](#float) | The number of points added or deducted in the transaction. |

#### Example

```json
{
  "balance": RewardPointsAmount,
  "change_reason": "xyz789",
  "date": "xyz789",
  "points_change": 987.65
}
```

<HorizontalLine />

### RewardPointsExchangeRates

Lists the reward points exchange rates. The values depend on the customer group.

#### Fields

| Field Name | Description |
|------------|-------------|
| `earning` - [`RewardPointsRate`](#rewardpointsrate) | How many points are earned for a given amount spent. |
| `redemption` - [`RewardPointsRate`](#rewardpointsrate) | How many points must be redeemed to get a given amount of currency discount at the checkout. |

#### Example

```json
{
  "earning": RewardPointsRate,
  "redemption": RewardPointsRate
}
```

<HorizontalLine />

### RewardPointsRate

Contains details about customer's reward points rate.

#### Fields

| Field Name | Description |
|------------|-------------|
| `currency_amount` - [`Float!`](#float) | The money value for the exchange rate. For earnings, this is the amount spent to earn the specified points. For redemption, this is the amount of money the number of points represents. |
| `points` - [`Float!`](#float) | The number of points for an exchange rate. For earnings, this is the number of points earned. For redemption, this is the number of points needed for redemption. |

#### Example

```json
{"currency_amount": 987.65, "points": 123.45}
```

<HorizontalLine />

### RewardPointsSubscriptionStatus

Indicates whether the customer subscribes to reward points emails.

#### Fields

| Field Name | Description |
|------------|-------------|
| `balance_updates` - [`RewardPointsSubscriptionStatusesEnum!`](#rewardpointssubscriptionstatusesenum) | Indicates whether the customer subscribes to &#x27;Reward points balance updates&#x27; emails. |
| `points_expiration_notifications` - [`RewardPointsSubscriptionStatusesEnum!`](#rewardpointssubscriptionstatusesenum) | Indicates whether the customer subscribes to &#x27;Reward points expiration notifications&#x27; emails. |

#### Example

```json
{
  "balance_updates": "SUBSCRIBED",
  "points_expiration_notifications": "SUBSCRIBED"
}
```

<HorizontalLine />

### RewardPointsSubscriptionStatusesEnum

#### Values

| Enum Value | Description |
|------------|-------------|
| `SUBSCRIBED` |  |
| `NOT_SUBSCRIBED` |  |

#### Example

```json
""SUBSCRIBED""
```

<HorizontalLine />

### RoutableInterface

Routable entities serve as the model for a rendered page.

#### Fields

| Field Name | Description |
|------------|-------------|
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |

#### Possible Types

| RoutableInterface Types |
|----------------|
| [`CmsPage`](#cmspage) |
| [`CategoryTree`](#categorytree) |
| [`VirtualProduct`](#virtualproduct) |
| [`SimpleProduct`](#simpleproduct) |
| [`DownloadableProduct`](#downloadableproduct) |
| [`BundleProduct`](#bundleproduct) |
| [`GiftCardProduct`](#giftcardproduct) |
| [`GroupedProduct`](#groupedproduct) |
| [`ConfigurableProduct`](#configurableproduct) |

#### Example

```json
{
  "redirect_code": 123,
  "relative_url": "xyz789",
  "type": "CMS_PAGE"
}
```

<HorizontalLine />

### SalesCommentItem

Contains details about a comment.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The text of the message. |
| `timestamp` - [`String!`](#string) | The timestamp of the comment. |

#### Example

```json
{
  "message": "abc123",
  "timestamp": "xyz789"
}
```

<HorizontalLine />

### ScopeTypeEnum

This enumeration defines the scope type for customer orders.

#### Values

| Enum Value | Description |
|------------|-------------|
| `GLOBAL` |  |
| `WEBSITE` |  |
| `STORE` |  |

#### Example

```json
""GLOBAL""
```

<HorizontalLine />

### SearchResultPageInfo

Provides navigation for the query response.

#### Fields

| Field Name | Description |
|------------|-------------|
| `current_page` - [`Int`](#int) | The specific page to return. |
| `page_size` - [`Int`](#int) | The maximum number of items to return per page of results. |
| `total_pages` - [`Int`](#int) | The total number of pages in the response. |

#### Example

```json
{"current_page": 123, "page_size": 123, "total_pages": 987}
```

<HorizontalLine />

### SearchSuggestion

A string that contains search suggestion

#### Fields

| Field Name | Description |
|------------|-------------|
| `search` - [`String!`](#string) | The search suggestion of existing product. |

#### Example

```json
{"search": "abc123"}
```

<HorizontalLine />

### SelectedBundleOption

Contains details about a selected bundle option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;uid&#x60; instead)* |
| `label` - [`String!`](#string) | The display name of the selected bundle product option. |
| `type` - [`String!`](#string) | The type of selected bundle product option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;SelectedBundleOption&#x60; object |
| `values` - [`[SelectedBundleOptionValue]!`](#selectedbundleoptionvalue) | An array of selected bundle option values. |

#### Example

```json
{
  "id": 987,
  "label": "xyz789",
  "type": "abc123",
  "uid": 4,
  "values": [SelectedBundleOptionValue]
}
```

<HorizontalLine />

### SelectedBundleOptionValue

Contains details about a value for a selected bundle option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`Int!`](#int) | Use &#x60;uid&#x60; instead |
| `label` - [`String!`](#string) | The display name of the value for the selected bundle product option. |
| `price` - [`Float!`](#float) | The price of the value for the selected bundle product option. |
| `quantity` - [`Float!`](#float) | The quantity of the value for the selected bundle product option. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;SelectedBundleOptionValue&#x60; object |

#### Example

```json
{
  "id": 123,
  "label": "xyz789",
  "price": 987.65,
  "quantity": 987.65,
  "uid": "4"
}
```

<HorizontalLine />

### SelectedConfigurableOption

Contains details about a selected configurable option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `configurable_product_option_uid` - [`ID!`](#id) | The unique ID for a &#x60;ConfigurableProductOptions&#x60; object. |
| `configurable_product_option_value_uid` - [`ID!`](#id) | The unique ID for a &#x60;ConfigurableProductOptionsValues&#x60; object. |
| `id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;SelectedConfigurableOption.configurable_product_option_uid&#x60; instead.)* |
| `option_label` - [`String!`](#string) | The display text for the option. |
| `value_id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;SelectedConfigurableOption.configurable_product_option_value_uid&#x60; instead.)* |
| `value_label` - [`String!`](#string) | The display name of the selected configurable option. |

#### Example

```json
{
  "configurable_product_option_uid": "4",
  "configurable_product_option_value_uid": 4,
  "id": 987,
  "option_label": "abc123",
  "value_id": 123,
  "value_label": "xyz789"
}
```

<HorizontalLine />

### SelectedCustomAttributeInput

Contains details about an attribute the buyer selected.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `attribute_code` - [`String!`](#string) | A string that identifies the selected attribute. |
| `value` - [`ID!`](#id) | The unique ID for a &#x60;CustomAttribute&#x60; object of a selected custom attribute. |

#### Example

```json
{
  "attribute_code": "abc123",
  "value": "4"
}
```

<HorizontalLine />

### SelectedCustomizableOption

Identifies a customized product that has been placed in a cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_option_uid` - [`ID!`](#id) | The unique ID for a specific &#x60;CustomizableOptionInterface&#x60; object, such as a &#x60;CustomizableFieldOption&#x60;, &#x60;CustomizableFileOption&#x60;, or &#x60;CustomizableAreaOption&#x60; object. |
| `id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;SelectedCustomizableOption.customizable_option_uid&#x60; instead.)* |
| `is_required` - [`Boolean!`](#boolean) | Indicates whether the customizable option is required. |
| `label` - [`String!`](#string) | The display name of the selected customizable option. |
| `sort_order` - [`Int!`](#int) | A value indicating the order to display this option. |
| `type` - [`String!`](#string) | The type of &#x60;CustomizableOptionInterface&#x60; object. |
| `values` - [`[SelectedCustomizableOptionValue]!`](#selectedcustomizableoptionvalue) | An array of selectable values. |

#### Example

```json
{
  "customizable_option_uid": 4,
  "id": 123,
  "is_required": false,
  "label": "xyz789",
  "sort_order": 987,
  "type": "abc123",
  "values": [SelectedCustomizableOptionValue]
}
```

<HorizontalLine />

### SelectedCustomizableOptionValue

Identifies the value of the selected customized option.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_option_value_uid` - [`ID!`](#id) | The unique ID for a value object that corresponds to the object represented by the &#x60;customizable_option_uid&#x60; attribute. |
| `id` - [`Int!`](#int) |  *(Deprecated: Use &#x60;SelectedCustomizableOptionValue.customizable_option_value_uid&#x60; instead.)* |
| `label` - [`String!`](#string) | The display name of the selected value. |
| `price` - [`CartItemSelectedOptionValuePrice!`](#cartitemselectedoptionvalueprice) | The price of the selected customizable value. |
| `value` - [`String!`](#string) | The text identifying the selected value. |

#### Example

```json
{
  "customizable_option_value_uid": 4,
  "id": 987,
  "label": "xyz789",
  "price": CartItemSelectedOptionValuePrice,
  "value": "xyz789"
}
```

<HorizontalLine />

### SelectedPaymentMethod

Describes the payment method the shopper selected.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String!`](#string) | The payment method code. |
| `purchase_order_number` - [`String`](#string) | The purchase order number. |
| `title` - [`String!`](#string) | The payment method title. |

#### Example

```json
{
  "code": "xyz789",
  "purchase_order_number": "xyz789",
  "title": "abc123"
}
```

<HorizontalLine />

### SelectedShippingMethod

Contains details about the selected shipping method and carrier.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The cost of shipping using this shipping method. |
| `base_amount` - [`Money`](#money) |  *(Deprecated: The field should not be used on the storefront.)* |
| `carrier_code` - [`String!`](#string) | A string that identifies a commercial carrier or an offline shipping method. |
| `carrier_title` - [`String!`](#string) | The label for the carrier code. |
| `method_code` - [`String!`](#string) | A shipping method code associated with a carrier. |
| `method_title` - [`String!`](#string) | The label for the method code. |
| `price_excl_tax` - [`Money!`](#money) | The cost of shipping using this shipping method, excluding tax. |
| `price_incl_tax` - [`Money!`](#money) | The cost of shipping using this shipping method, including tax. |

#### Example

```json
{
  "amount": Money,
  "base_amount": Money,
  "carrier_code": "abc123",
  "carrier_title": "abc123",
  "method_code": "xyz789",
  "method_title": "abc123",
  "price_excl_tax": Money,
  "price_incl_tax": Money
}
```

<HorizontalLine />

### SendEmailToFriendInput

Defines the referenced product and the email sender and recipients.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `product_id` - [`Int!`](#int) | The ID of the product that the sender is referencing. |
| `recipients` - [`[SendEmailToFriendRecipientInput]!`](#sendemailtofriendrecipientinput) | An array containing information about each recipient. |
| `sender` - [`SendEmailToFriendSenderInput!`](#sendemailtofriendsenderinput) | Information about the customer and the content of the message. |

#### Example

```json
{
  "product_id": 123,
  "recipients": [SendEmailToFriendRecipientInput],
  "sender": SendEmailToFriendSenderInput
}
```

<HorizontalLine />

### SendEmailToFriendOutput

Contains information about the sender and recipients.

#### Fields

| Field Name | Description |
|------------|-------------|
| `recipients` - [`[SendEmailToFriendRecipient]`](#sendemailtofriendrecipient) | An array containing information about each recipient. |
| `sender` - [`SendEmailToFriendSender`](#sendemailtofriendsender) | Information about the customer and the content of the message. |

#### Example

```json
{
  "recipients": [SendEmailToFriendRecipient],
  "sender": SendEmailToFriendSender
}
```

<HorizontalLine />

### SendEmailToFriendRecipient

An output object that contains information about the recipient.

#### Fields

| Field Name | Description |
|------------|-------------|
| `email` - [`String!`](#string) | The email address of the recipient. |
| `name` - [`String!`](#string) | The name of the recipient. |

#### Example

```json
{
  "email": "xyz789",
  "name": "abc123"
}
```

<HorizontalLine />

### SendEmailToFriendRecipientInput

Contains details about a recipient.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](#string) | The email address of the recipient. |
| `name` - [`String!`](#string) | The name of the recipient. |

#### Example

```json
{
  "email": "xyz789",
  "name": "abc123"
}
```

<HorizontalLine />

### SendEmailToFriendSender

An output object that contains information about the sender.

#### Fields

| Field Name | Description |
|------------|-------------|
| `email` - [`String!`](#string) | The email address of the sender. |
| `message` - [`String!`](#string) | The text of the message to be sent. |
| `name` - [`String!`](#string) | The name of the sender. |

#### Example

```json
{
  "email": "xyz789",
  "message": "xyz789",
  "name": "abc123"
}
```

<HorizontalLine />

### SendEmailToFriendSenderInput

Contains details about the sender.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](#string) | The email address of the sender. |
| `message` - [`String!`](#string) | The text of the message to be sent. |
| `name` - [`String!`](#string) | The name of the sender. |

#### Example

```json
{
  "email": "abc123",
  "message": "xyz789",
  "name": "abc123"
}
```

<HorizontalLine />

### SendFriendConfiguration

Contains details about the configuration of the Email to a Friend feature.

#### Fields

| Field Name | Description |
|------------|-------------|
| `enabled_for_customers` - [`Boolean!`](#boolean) | Indicates whether the Email to a Friend feature is enabled. |
| `enabled_for_guests` - [`Boolean!`](#boolean) | Indicates whether the Email to a Friend feature is enabled for guests. |

#### Example

```json
{"enabled_for_customers": true, "enabled_for_guests": true}
```

<HorizontalLine />

### SendNegotiableQuoteForReviewInput

Specifies which negotiable quote to send for review.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `comment` - [`NegotiableQuoteCommentInput`](#negotiablequotecommentinput) | A comment for the seller to review. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{"comment": NegotiableQuoteCommentInput, "quote_uid": 4}
```

<HorizontalLine />

### SendNegotiableQuoteForReviewOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after sending for seller review. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetBillingAddressOnCartInput

Sets the billing address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `billing_address` - [`BillingAddressInput!`](#billingaddressinput) | The billing address. |
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |

#### Example

```json
{
  "billing_address": BillingAddressInput,
  "cart_id": "xyz789"
}
```

<HorizontalLine />

### SetBillingAddressOnCartOutput

Contains details about the cart after setting the billing address.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the billing address. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetGiftOptionsOnCartInput

Defines the gift options applied to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID that identifies the shopper&#x27;s cart. |
| `gift_message` - [`GiftMessageInput`](#giftmessageinput) | Gift message details for the cart. |
| `gift_receipt_included` - [`Boolean!`](#boolean) | Whether customer requested gift receipt for the cart. |
| `gift_wrapping_id` - [`ID`](#id) | The unique ID for a &#x60;GiftWrapping&#x60; object to be used for the cart. |
| `printed_card_included` - [`Boolean!`](#boolean) | Whether customer requested printed card for the cart. |

#### Example

```json
{
  "cart_id": "abc123",
  "gift_message": GiftMessageInput,
  "gift_receipt_included": false,
  "gift_wrapping_id": 4,
  "printed_card_included": true
}
```

<HorizontalLine />

### SetGiftOptionsOnCartOutput

Contains the cart after gift options have been applied.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The modified cart object. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetGuestEmailOnCartInput

Defines the guest email and cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `email` - [`String!`](#string) | The email address of the guest. |

#### Example

```json
{
  "cart_id": "xyz789",
  "email": "abc123"
}
```

<HorizontalLine />

### SetGuestEmailOnCartOutput

Contains details about the cart after setting the email of a guest.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the guest email. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetNegotiableQuoteBillingAddressInput

Sets the billing address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `billing_address` - [`NegotiableQuoteBillingAddressInput!`](#negotiablequotebillingaddressinput) | The billing address to be added. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "billing_address": NegotiableQuoteBillingAddressInput,
  "quote_uid": 4
}
```

<HorizontalLine />

### SetNegotiableQuoteBillingAddressOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after assigning a billing address. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetNegotiableQuotePaymentMethodInput

Defines the payment method of the specified negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `payment_method` - [`NegotiableQuotePaymentMethodInput!`](#negotiablequotepaymentmethodinput) | The payment method to be assigned to the negotiable quote. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "payment_method": NegotiableQuotePaymentMethodInput,
  "quote_uid": "4"
}
```

<HorizontalLine />

### SetNegotiableQuotePaymentMethodOutput

Contains details about the negotiable quote after setting the payment method.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The updated negotiable quote. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetNegotiableQuoteShippingAddressInput

Defines the shipping address to assign to the negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customer_address_id` - [`ID`](#id) | The unique ID of a &#x60;CustomerAddress&#x60; object. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |
| `shipping_addresses` - [`[NegotiableQuoteShippingAddressInput]`](#negotiablequoteshippingaddressinput) | An array of shipping addresses to apply to the negotiable quote. |

#### Example

```json
{
  "customer_address_id": 4,
  "quote_uid": "4",
  "shipping_addresses": [
    NegotiableQuoteShippingAddressInput
  ]
}
```

<HorizontalLine />

### SetNegotiableQuoteShippingAddressOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after assigning a shipping address. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetNegotiableQuoteShippingMethodsInput

Defines the shipping method to apply to the negotiable quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |
| `shipping_methods` - [`[ShippingMethodInput]!`](#shippingmethodinput) | An array of shipping methods to apply to the negotiable quote. |

#### Example

```json
{
  "quote_uid": "4",
  "shipping_methods": [ShippingMethodInput]
}
```

<HorizontalLine />

### SetNegotiableQuoteShippingMethodsOutput

Contains the negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The negotiable quote after applying shipping methods. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### SetPaymentMethodAndPlaceOrderInput

Applies a payment method to the quote.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `payment_method` - [`PaymentMethodInput!`](#paymentmethodinput) | The payment method data to apply to the cart. |

#### Example

```json
{
  "cart_id": "xyz789",
  "payment_method": PaymentMethodInput
}
```

<HorizontalLine />

### SetPaymentMethodOnCartInput

Applies a payment method to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `payment_method` - [`PaymentMethodInput!`](#paymentmethodinput) | The payment method data to apply to the cart. |

#### Example

```json
{
  "cart_id": "abc123",
  "payment_method": PaymentMethodInput
}
```

<HorizontalLine />

### SetPaymentMethodOnCartOutput

Contains details about the cart after setting the payment method.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the payment method. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetShippingAddressesOnCartInput

Specifies an array of addresses to use for shipping.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `shipping_addresses` - [`[ShippingAddressInput]!`](#shippingaddressinput) | An array of shipping addresses. |

#### Example

```json
{
  "cart_id": "abc123",
  "shipping_addresses": [ShippingAddressInput]
}
```

<HorizontalLine />

### SetShippingAddressesOnCartOutput

Contains details about the cart after setting the shipping addresses.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the shipping addresses. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### SetShippingMethodsOnCartInput

Applies one or shipping methods to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `shipping_methods` - [`[ShippingMethodInput]!`](#shippingmethodinput) | An array of shipping methods. |

#### Example

```json
{
  "cart_id": "abc123",
  "shipping_methods": [ShippingMethodInput]
}
```

<HorizontalLine />

### SetShippingMethodsOnCartOutput

Contains details about the cart after setting the shipping methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after setting the shipping methods. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### ShareGiftRegistryInviteeInput

Defines a gift registry invitee.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `email` - [`String!`](#string) | The email address of the gift registry invitee. |
| `name` - [`String!`](#string) | The name of the gift registry invitee. |

#### Example

```json
{
  "email": "abc123",
  "name": "xyz789"
}
```

<HorizontalLine />

### ShareGiftRegistryOutput

Contains the results of a request to share a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `is_shared` - [`Boolean!`](#boolean) | Indicates whether the gift registry was successfully shared. |

#### Example

```json
{"is_shared": true}
```

<HorizontalLine />

### ShareGiftRegistrySenderInput

Defines the sender of an invitation to view a gift registry.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `message` - [`String!`](#string) | A brief message from the sender. |
| `name` - [`String!`](#string) | The sender of the gift registry invitation. |

#### Example

```json
{
  "message": "xyz789",
  "name": "xyz789"
}
```

<HorizontalLine />

### ShipBundleItemsEnum

Defines whether bundle items must be shipped together.

#### Values

| Enum Value | Description |
|------------|-------------|
| `TOGETHER` |  |
| `SEPARATELY` |  |

#### Example

```json
""TOGETHER""
```

<HorizontalLine />

### ShipmentItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ShipmentItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Example

```json
{
  "id": 4,
  "order_item": OrderItemInterface,
  "product_name": "abc123",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_shipped": 123.45
}
```

<HorizontalLine />

### ShipmentItemInterface

Order shipment item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID!`](#id) | The unique ID for a &#x60;ShipmentItemInterface&#x60; object. |
| `order_item` - [`OrderItemInterface`](#orderiteminterface) | The order item associated with the shipment item. |
| `product_name` - [`String`](#string) | The name of the base product. |
| `product_sale_price` - [`Money!`](#money) | The sale price for the base product. |
| `product_sku` - [`String!`](#string) | The SKU of the base product. |
| `quantity_shipped` - [`Float!`](#float) | The number of shipped items. |

#### Possible Types

| ShipmentItemInterface Types |
|----------------|
| [`BundleShipmentItem`](#bundleshipmentitem) |
| [`GiftCardShipmentItem`](#giftcardshipmentitem) |
| [`ShipmentItem`](#shipmentitem) |

#### Example

```json
{
  "id": "4",
  "order_item": OrderItemInterface,
  "product_name": "xyz789",
  "product_sale_price": Money,
  "product_sku": "xyz789",
  "quantity_shipped": 123.45
}
```

<HorizontalLine />

### ShipmentTracking

Contains order shipment tracking details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `carrier` - [`String!`](#string) | The shipping carrier for the order delivery. |
| `number` - [`String`](#string) | The tracking number of the order shipment. |
| `title` - [`String!`](#string) | The shipment tracking title. |

#### Example

```json
{
  "carrier": "xyz789",
  "number": "abc123",
  "title": "abc123"
}
```

<HorizontalLine />

### ShippingAddressInput

Defines a single shipping address.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `address` - [`CartAddressInput`](#cartaddressinput) | Defines a shipping address. |
| `customer_address_id` - [`Int`](#int) | An ID from the customer&#x27;s address book that uniquely identifies the address to be used for shipping. |
| `customer_notes` - [`String`](#string) | Text provided by the shopper. |
| `pickup_location_code` - [`String`](#string) | The code of Pickup Location which will be used for In-Store Pickup. |

#### Example

```json
{
  "address": CartAddressInput,
  "customer_address_id": 987,
  "customer_notes": "xyz789",
  "pickup_location_code": "abc123"
}
```

<HorizontalLine />

### ShippingCartAddress

Contains shipping addresses and methods.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_shipping_methods` - [`[AvailableShippingMethod]`](#availableshippingmethod) | An array that lists the shipping methods that can be applied to the cart. |
| `cart_items` - [`[CartItemQuantity]`](#cartitemquantity) |  *(Deprecated: Use &#x60;cart_items_v2&#x60; instead.)* |
| `cart_items_v2` - [`[CartItemInterface]`](#cartiteminterface) | An array that lists the items in the cart. |
| `city` - [`String!`](#string) | The city specified for the billing or shipping address. |
| `company` - [`String`](#string) | The company specified for the billing or shipping address. |
| `country` - [`CartAddressCountry!`](#cartaddresscountry) | An object containing the country label and code. |
| `customer_notes` - [`String`](#string) | Text provided by the shopper. |
| `firstname` - [`String!`](#string) | The first name of the customer or guest. |
| `items_weight` - [`Float`](#float) |  *(Deprecated: This information should not be exposed on the frontend.)* |
| `lastname` - [`String!`](#string) | The last name of the customer or guest. |
| `pickup_location_code` - [`String`](#string) |  |
| `postcode` - [`String`](#string) | The ZIP or postal code of the billing or shipping address. |
| `region` - [`CartAddressRegion`](#cartaddressregion) | An object containing the region label and code. |
| `selected_shipping_method` - [`SelectedShippingMethod`](#selectedshippingmethod) | An object that describes the selected shipping method. |
| `street` - [`[String]!`](#string) | An array containing the street for the billing or shipping address. |
| `telephone` - [`String`](#string) | The telephone number for the billing or shipping address. |
| `uid` - [`String!`](#string) | The unique id of the customer address. |
| `vat_id` - [`String`](#string) | The VAT company number for billing or shipping address. |

#### Example

```json
{
  "available_shipping_methods": [AvailableShippingMethod],
  "cart_items": [CartItemQuantity],
  "cart_items_v2": [CartItemInterface],
  "city": "xyz789",
  "company": "abc123",
  "country": CartAddressCountry,
  "customer_notes": "abc123",
  "firstname": "abc123",
  "items_weight": 987.65,
  "lastname": "xyz789",
  "pickup_location_code": "xyz789",
  "postcode": "abc123",
  "region": CartAddressRegion,
  "selected_shipping_method": SelectedShippingMethod,
  "street": ["abc123"],
  "telephone": "abc123",
  "uid": "xyz789",
  "vat_id": "abc123"
}
```

<HorizontalLine />

### ShippingDiscount

Defines an individual shipping discount. This discount can be applied to shipping.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount of the discount. |

#### Example

```json
{"amount": Money}
```

<HorizontalLine />

### ShippingHandling

Contains details about shipping and handling costs.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount_excluding_tax` - [`Money`](#money) | The shipping amount, excluding tax. |
| `amount_including_tax` - [`Money`](#money) | The shipping amount, including tax. |
| `discounts` - [`[ShippingDiscount]`](#shippingdiscount) | The applied discounts to the shipping. |
| `taxes` - [`[TaxItem]`](#taxitem) | Details about taxes applied for shipping. |
| `total_amount` - [`Money!`](#money) | The total amount for shipping. |

#### Example

```json
{
  "amount_excluding_tax": Money,
  "amount_including_tax": Money,
  "discounts": [ShippingDiscount],
  "taxes": [TaxItem],
  "total_amount": Money
}
```

<HorizontalLine />

### ShippingMethodInput

Defines the shipping carrier and method.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `carrier_code` - [`String!`](#string) | A string that identifies a commercial carrier or an offline delivery method. |
| `method_code` - [`String!`](#string) | A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. |

#### Example

```json
{
  "carrier_code": "abc123",
  "method_code": "abc123"
}
```

<HorizontalLine />

### SimpleCartItem

An implementation for simple product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `available_gift_wrapping` - [`[GiftWrapping]!`](#giftwrapping) | The list of available gift wrapping options for the cart item. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing the customizable options the shopper selected. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `gift_message` - [`GiftMessage`](#giftmessage) | The entered gift message for the cart item |
| `gift_wrapping` - [`GiftWrapping`](#giftwrapping) | The selected gift wrapping for the cart item. |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "available_gift_wrapping": [GiftWrapping],
  "customizable_options": [SelectedCustomizableOption],
  "errors": [CartItemError],
  "gift_message": GiftMessage,
  "gift_wrapping": GiftWrapping,
  "id": "abc123",
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": "4"
}
```

<HorizontalLine />

### SimpleProduct

Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activity` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `category_gear` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `climate` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `collar` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `eco_collection` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `erin_recommends` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `features_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `format` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gender` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `material` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `pattern` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `performance_fabric` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `purpose` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `sale` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `size` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `sleeve` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `strap_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bottom` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_general` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product&#x27;s thumbnail image. |
| `tier_price` - [`Float`](#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use &#x60;__typename&#x60; instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](#string) |  *(Deprecated: Use product&#x27;s &#x60;canonical_url&#x60; or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |
| `weight` - [`Float`](#float) | The weight of the item, in units defined by the store. |

#### Example

```json
{
  "activity": "abc123",
  "attribute_set_id": 123,
  "canonical_url": "xyz789",
  "categories": [CategoryInterface],
  "category_gear": "abc123",
  "climate": "abc123",
  "collar": "abc123",
  "color": 987,
  "country_of_manufacture": "xyz789",
  "created_at": "abc123",
  "crosssell_products": [ProductInterface],
  "description": ComplexTextValue,
  "eco_collection": 987,
  "erin_recommends": 987,
  "features_bags": "abc123",
  "format": 123,
  "gender": "xyz789",
  "gift_message_available": "xyz789",
  "id": 123,
  "image": ProductImage,
  "is_returnable": "xyz789",
  "manufacturer": 987,
  "material": "xyz789",
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "xyz789",
  "meta_keyword": "xyz789",
  "meta_title": "xyz789",
  "name": "xyz789",
  "new": 123,
  "new_from_date": "abc123",
  "new_to_date": "xyz789",
  "only_x_left_in_stock": 987.65,
  "options": [CustomizableOptionInterface],
  "options_container": "xyz789",
  "pattern": "abc123",
  "performance_fabric": 987,
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "purpose": 987,
  "rating_summary": 123.45,
  "redirect_code": 123,
  "related_products": [ProductInterface],
  "relative_url": "abc123",
  "review_count": 123,
  "reviews": ProductReviews,
  "sale": 123,
  "short_description": ComplexTextValue,
  "size": 123,
  "sku": "xyz789",
  "sleeve": "xyz789",
  "small_image": ProductImage,
  "special_from_date": "xyz789",
  "special_price": 987.65,
  "special_to_date": "xyz789",
  "staged": true,
  "stock_status": "IN_STOCK",
  "strap_bags": "xyz789",
  "style_bags": "xyz789",
  "style_bottom": "xyz789",
  "style_general": "xyz789",
  "swatch_image": "abc123",
  "thumbnail": ProductImage,
  "tier_price": 123.45,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "abc123",
  "uid": 4,
  "updated_at": "abc123",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "xyz789",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "abc123",
  "websites": [Website],
  "weight": 123.45
}
```

<HorizontalLine />

### SimpleProductCartItemInput

Defines a single product to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | An array that defines customizable options for the product. |
| `data` - [`CartItemInput!`](#cartiteminput) | An object containing the &#x60;sku&#x60;, &#x60;quantity&#x60;, and other relevant information about the product. |

#### Example

```json
{
  "customizable_options": [CustomizableOptionInput],
  "data": CartItemInput
}
```

<HorizontalLine />

### SimpleRequisitionListItem

Contains details about simple products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The amount added. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 123.45,
  "uid": 4
}
```

<HorizontalLine />

### SimpleWishlistItem

Contains a simple product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "xyz789",
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
  "id": "4",
  "product": ProductInterface,
  "quantity": 987.65
}
```

<HorizontalLine />

### SortEnum

Indicates whether to return results in ascending or descending order.

#### Values

| Enum Value | Description |
|------------|-------------|
| `ASC` |  |
| `DESC` |  |

#### Example

```json
""ASC""
```

<HorizontalLine />

### SortField

Defines a possible sort field.

#### Fields

| Field Name | Description |
|------------|-------------|
| `label` - [`String`](#string) | The label of the sort field. |
| `value` - [`String`](#string) | The attribute code of the sort field. |

#### Example

```json
{
  "label": "xyz789",
  "value": "xyz789"
}
```

<HorizontalLine />

### SortFields

Contains a default value for sort fields and all available sort fields.

#### Fields

| Field Name | Description |
|------------|-------------|
| `default` - [`String`](#string) | The default sort field value. |
| `options` - [`[SortField]`](#sortfield) | An array of possible sort fields. |

#### Example

```json
{
  "default": "abc123",
  "options": [SortField]
}
```

<HorizontalLine />

### StoreConfig

Contains information about a store's configuration.

#### Fields

| Field Name | Description |
|------------|-------------|
| `absolute_footer` - [`String`](#string) | Contains scripts that must be included in the HTML before the closing &#x60;&lt;body&gt;&#x60; tag. |
| `allow_gift_receipt` - [`String`](#string) | Indicates if the gift sender has the option to send a gift receipt. Possible values: 1 (Yes) and 0 (No). |
| `allow_gift_wrapping_on_order` - [`String`](#string) | Indicates whether gift wrapping can be added for the entire order. Possible values: 1 (Yes) and 0 (No). |
| `allow_gift_wrapping_on_order_items` - [`String`](#string) | Indicates whether gift wrapping can be added for individual order items. Possible values: 1 (Yes) and 0 (No). |
| `allow_guests_to_write_product_reviews` - [`String`](#string) | Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). |
| `allow_items` - [`String`](#string) | The value of the Allow Gift Messages for Order Items option |
| `allow_order` - [`String`](#string) | The value of the Allow Gift Messages on Order Level option |
| `allow_printed_card` - [`String`](#string) | Indicates if a printed card can accompany an order. Possible values: 1 (Yes) and 0 (No). |
| `autocomplete_on_storefront` - [`Boolean`](#boolean) | Indicates whether to enable autocomplete on login and forgot password forms. |
| `base_currency_code` - [`String`](#string) | The base currency code. |
| `base_link_url` - [`String`](#string) | A fully-qualified URL that is used to create relative links to the &#x60;base_url&#x60;. |
| `base_media_url` - [`String`](#string) | The fully-qualified URL that specifies the location of media files. |
| `base_static_url` - [`String`](#string) | The fully-qualified URL that specifies the location of static view files. |
| `base_url` - [`String`](#string) | The store’s fully-qualified base URL. |
| `braintree_cc_vault_active` - [`String`](#string) | Braintree cc vault status. |
| `cart_gift_wrapping` - [`String`](#string) | Indicates if gift wrapping prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). |
| `cart_printed_card` - [`String`](#string) | Indicates if printed card prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). |
| `catalog_default_sort_by` - [`String`](#string) | The default sort order of the search results list. |
| `category_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the &#x27;Display Prices In Product Lists&#x27; field in the Admin. It indicates how FPT information is displayed on category pages. |
| `category_url_suffix` - [`String`](#string) | The suffix applied to category pages, such as &#x60;.htm&#x60; or &#x60;.html&#x60;. |
| `check_money_order_enable_for_specific_countries` - [`Boolean`](#boolean) | Indicates whether only specific countries can use this payment method. |
| `check_money_order_enabled` - [`Boolean`](#boolean) | Indicates whether the Check/Money Order payment method is enabled. |
| `check_money_order_make_check_payable_to` - [`String`](#string) | The name of the party to whom the check must be payable. |
| `check_money_order_max_order_total` - [`String`](#string) | The maximum order amount required to qualify for the Check/Money Order payment method. |
| `check_money_order_min_order_total` - [`String`](#string) | The minimum order amount required to qualify for the Check/Money Order payment method. |
| `check_money_order_new_order_status` - [`String`](#string) | The status of new orders placed using the Check/Money Order payment method. |
| `check_money_order_payment_from_specific_countries` - [`String`](#string) | A comma-separated list of specific countries allowed to use the Check/Money Order payment method. |
| `check_money_order_send_check_to` - [`String`](#string) | The full street address or PO Box where the checks are mailed. |
| `check_money_order_sort_order` - [`Int`](#int) | A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout. |
| `check_money_order_title` - [`String`](#string) | The title of the Check/Money Order payment method displayed on the storefront. |
| `cms_home_page` - [`String`](#string) | The name of the CMS page that identifies the home page for the store. |
| `cms_no_cookies` - [`String`](#string) | A specific CMS page that displays when cookies are not enabled for the browser. |
| `cms_no_route` - [`String`](#string) | A specific CMS page that displays when a 404 &#x27;Page Not Found&#x27; error occurs. |
| `code` - [`String`](#string) | A code assigned to the store to identify it. *(Deprecated: Use &#x60;store_code&#x60; instead.)* |
| `configurable_thumbnail_source` - [`String`](#string) | Indicates whether the &#x60;parent&#x60; or child (&#x60;itself&#x60;) thumbnail should be used in the cart for configurable products. |
| `copyright` - [`String`](#string) | The copyright statement that appears at the bottom of each page. |
| `default_description` - [`String`](#string) | The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length. |
| `default_display_currency_code` - [`String`](#string) | The default display currency code. |
| `default_keywords` - [`String`](#string) | A series of keywords that describe your store, each separated by a comma. |
| `default_title` - [`String`](#string) | The title that appears at the title bar of each page when viewed in a browser. |
| `demonotice` - [`Int`](#int) | Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes). |
| `enable_multiple_wishlists` - [`String`](#string) | Indicates whether customers can have multiple wish lists. Possible values: 1 (Yes) and 0 (No). |
| `front` - [`String`](#string) | The landing page that is associated with the base URL. |
| `grid_per_page` - [`Int`](#int) | The default number of products per page in Grid View. |
| `grid_per_page_values` - [`String`](#string) | A list of numbers that define how many products can be displayed in Grid View. |
| `head_includes` - [`String`](#string) | Scripts that must be included in the HTML before the closing &#x60;&lt;head&gt;&#x60; tag. |
| `head_shortcut_icon` - [`String`](#string) | The small graphic image (favicon) that appears in the address bar and tab of the browser. |
| `header_logo_src` - [`String`](#string) | The path to the logo that appears in the header. |
| `id` - [`Int`](#int) | The ID number assigned to the store. *(Deprecated: Use &#x60;store_code&#x60; instead.)* |
| `is_default_store` - [`Boolean`](#boolean) | Indicates whether the store view has been designated as the default within the store group. |
| `is_default_store_group` - [`Boolean`](#boolean) | Indicates whether the store group has been designated as the default within the website. |
| `is_negotiable_quote_active` - [`Boolean`](#boolean) | Indicates whether negotiable quote functionality is enabled. |
| `is_requisition_list_active` - [`String`](#string) | Indicates whether requisition lists are enabled. Possible values: 1 (Yes) and 0 (No). |
| `list_mode` - [`String`](#string) | The format of the search results list. |
| `list_per_page` - [`Int`](#int) | The default number of products per page in List View. |
| `list_per_page_values` - [`String`](#string) | A list of numbers that define how many products can be displayed in List View. |
| `locale` - [`String`](#string) | The store locale. |
| `logo_alt` - [`String`](#string) | The Alt text that is associated with the logo. |
| `logo_height` - [`Int`](#int) | The height of the logo image, in pixels. |
| `logo_width` - [`Int`](#int) | The width of the logo image, in pixels. |
| `magento_reward_general_is_enabled` - [`String`](#string) | Indicates whether reward points functionality is enabled. Possible values: 1 (Enabled) and 0 (Disabled). |
| `magento_reward_general_is_enabled_on_front` - [`String`](#string) | Indicates whether reward points functionality is enabled on the storefront. Possible values: 1 (Enabled) and 0 (Disabled). |
| `magento_reward_general_min_points_balance` - [`String`](#string) | The minimum point balance customers must have before they can redeem them. A null value indicates no minimum. |
| `magento_reward_general_publish_history` - [`String`](#string) | When enabled, customers can see a detailed history of their reward points. Possible values: 1 (Enabled) and 0 (Disabled). |
| `magento_reward_points_invitation_customer` - [`String`](#string) | The number of points for a referral when an invitee registers on the site. |
| `magento_reward_points_invitation_customer_limit` - [`String`](#string) | The maximum number of registration referrals that will qualify for rewards. A null value indicates no limit. |
| `magento_reward_points_invitation_order` - [`String`](#string) | The number of points for a referral, when an invitee places their first order on the site. |
| `magento_reward_points_invitation_order_limit` - [`String`](#string) | The number of order conversions that can earn points for the customer who sends the invitation. A null value indicates no limit. |
| `magento_reward_points_newsletter` - [`String`](#string) | The number of points earned by registered customers who subscribe to a newsletter. |
| `magento_reward_points_order` - [`String`](#string) | Indicates customers earn points for shopping according to the reward point exchange rate. In Luma, this also controls whether to show a message in the shopping cart about the rewards points earned for the purchase, as well as the customer’s current reward point balance. |
| `magento_reward_points_register` - [`String`](#string) | The number of points customer gets for registering. |
| `magento_reward_points_review` - [`String`](#string) | The number of points for writing a review. |
| `magento_reward_points_review_limit` - [`String`](#string) | The maximum number of reviews that will qualify for the rewards. A null value indicates no limit. |
| `magento_wishlist_general_is_enabled` - [`String`](#string) | Indicates whether wishlists are enabled (1) or disabled (0). |
| `maximum_number_of_wishlists` - [`String`](#string) | If multiple wish lists are enabled, the maximum number of wish lists the customer can have. |
| `minimum_password_length` - [`String`](#string) | The minimum number of characters required for a valid password. |
| `no_route` - [`String`](#string) | The default page that displays when a 404 &#x27;Page not Found&#x27; error occurs. |
| `payment_payflowpro_cc_vault_active` - [`String`](#string) | Payflow Pro vault status. |
| `printed_card_price` - [`String`](#string) | The default price of a printed card that accompanies an order. |
| `product_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the &#x27;Display Prices On Product View Page&#x27; field in the Admin. It indicates how FPT information is displayed on product pages. |
| `product_reviews_enabled` - [`String`](#string) | Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). |
| `product_url_suffix` - [`String`](#string) | The suffix applied to product pages, such as &#x60;.htm&#x60; or &#x60;.html&#x60;. |
| `required_character_classes_number` - [`String`](#string) | The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. |
| `returns_enabled` - [`String!`](#string) | Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled. |
| `root_category_id` - [`Int`](#int) | The ID of the root category. *(Deprecated: Use &#x60;root_category_uid&#x60; instead.)* |
| `root_category_uid` - [`ID`](#id) | The unique ID for a &#x60;CategoryInterface&#x60; object. |
| `sales_fixed_product_tax_display_setting` - [`FixedProductTaxDisplaySettings`](#fixedproducttaxdisplaysettings) | Corresponds to the &#x27;Display Prices In Sales Modules&#x27; field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. |
| `sales_gift_wrapping` - [`String`](#string) | Indicates if gift wrapping prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `sales_printed_card` - [`String`](#string) | Indicates if printed card prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). |
| `secure_base_link_url` - [`String`](#string) | A secure fully-qualified URL that is used to create relative links to the &#x60;base_url&#x60;. |
| `secure_base_media_url` - [`String`](#string) | The secure fully-qualified URL that specifies the location of media files. |
| `secure_base_static_url` - [`String`](#string) | The secure fully-qualified URL that specifies the location of static view files. |
| `secure_base_url` - [`String`](#string) | The store’s fully-qualified secure base URL. |
| `send_friend` - [`SendFriendConfiguration`](#sendfriendconfiguration) | Email to a Friend configuration. |
| `show_cms_breadcrumbs` - [`Int`](#int) | Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes). |
| `store_code` - [`ID`](#id) | The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the &#x60;Store&#x60; header to provide the scope. |
| `store_group_code` - [`ID`](#id) | The unique ID assigned to the store group. In the Admin, this is called the Store Name. |
| `store_group_name` - [`String`](#string) | The label assigned to the store group. |
| `store_name` - [`String`](#string) | The label assigned to the store view. |
| `store_sort_order` - [`Int`](#int) | The store view sort order. |
| `timezone` - [`String`](#string) | The time zone of the store. |
| `title_prefix` - [`String`](#string) | A prefix that appears before the title to create a two- or three-part title. |
| `title_separator` - [`String`](#string) | The character that separates the category name and subcategory in the browser title bar. |
| `title_suffix` - [`String`](#string) | A suffix that appears after the title to create a two- or three-part title. |
| `use_store_in_url` - [`Boolean`](#boolean) | Indicates whether the store code should be used in the URL. |
| `website_code` - [`ID`](#id) | The unique ID for the website. |
| `website_id` - [`Int`](#int) | The ID number assigned to the website store. *(Deprecated: The field should not be used on the storefront.)* |
| `website_name` - [`String`](#string) | The label assigned to the website. |
| `weight_unit` - [`String`](#string) | The unit of weight. |
| `welcome` - [`String`](#string) | Text that appears in the header of the page and includes the name of the logged in customer. |
| `zero_subtotal_enable_for_specific_countries` - [`Boolean`](#boolean) | Indicates whether only specific countries can use this payment method. |
| `zero_subtotal_enabled` - [`Boolean`](#boolean) | Indicates whether the Zero Subtotal payment method is enabled. |
| `zero_subtotal_new_order_status` - [`String`](#string) | The status of new orders placed using the Zero Subtotal payment method. |
| `zero_subtotal_payment_action` - [`String`](#string) | When the new order status is &#x27;Processing&#x27;, this can be set to &#x60;authorize_capture&#x60; to automatically invoice all items that have a zero balance. |
| `zero_subtotal_payment_from_specific_countries` - [`String`](#string) | A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. |
| `zero_subtotal_sort_order` - [`Int`](#int) | A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. |
| `zero_subtotal_title` - [`String`](#string) | The title of the Zero Subtotal payment method displayed on the storefront. |

#### Example

```json
{
  "absolute_footer": "xyz789",
  "allow_gift_receipt": "xyz789",
  "allow_gift_wrapping_on_order": "xyz789",
  "allow_gift_wrapping_on_order_items": "xyz789",
  "allow_guests_to_write_product_reviews": "xyz789",
  "allow_items": "abc123",
  "allow_order": "abc123",
  "allow_printed_card": "xyz789",
  "autocomplete_on_storefront": true,
  "base_currency_code": "abc123",
  "base_link_url": "xyz789",
  "base_media_url": "xyz789",
  "base_static_url": "xyz789",
  "base_url": "abc123",
  "braintree_cc_vault_active": "abc123",
  "cart_gift_wrapping": "xyz789",
  "cart_printed_card": "abc123",
  "catalog_default_sort_by": "xyz789",
  "category_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "category_url_suffix": "abc123",
  "check_money_order_enable_for_specific_countries": false,
  "check_money_order_enabled": true,
  "check_money_order_make_check_payable_to": "xyz789",
  "check_money_order_max_order_total": "xyz789",
  "check_money_order_min_order_total": "xyz789",
  "check_money_order_new_order_status": "abc123",
  "check_money_order_payment_from_specific_countries": "xyz789",
  "check_money_order_send_check_to": "abc123",
  "check_money_order_sort_order": 123,
  "check_money_order_title": "xyz789",
  "cms_home_page": "xyz789",
  "cms_no_cookies": "xyz789",
  "cms_no_route": "xyz789",
  "code": "abc123",
  "configurable_thumbnail_source": "abc123",
  "copyright": "abc123",
  "default_description": "abc123",
  "default_display_currency_code": "xyz789",
  "default_keywords": "xyz789",
  "default_title": "xyz789",
  "demonotice": 987,
  "enable_multiple_wishlists": "abc123",
  "front": "abc123",
  "grid_per_page": 123,
  "grid_per_page_values": "abc123",
  "head_includes": "abc123",
  "head_shortcut_icon": "abc123",
  "header_logo_src": "xyz789",
  "id": 123,
  "is_default_store": true,
  "is_default_store_group": true,
  "is_negotiable_quote_active": true,
  "is_requisition_list_active": "abc123",
  "list_mode": "xyz789",
  "list_per_page": 123,
  "list_per_page_values": "xyz789",
  "locale": "abc123",
  "logo_alt": "xyz789",
  "logo_height": 123,
  "logo_width": 123,
  "magento_reward_general_is_enabled": "xyz789",
  "magento_reward_general_is_enabled_on_front": "xyz789",
  "magento_reward_general_min_points_balance": "xyz789",
  "magento_reward_general_publish_history": "abc123",
  "magento_reward_points_invitation_customer": "abc123",
  "magento_reward_points_invitation_customer_limit": "abc123",
  "magento_reward_points_invitation_order": "xyz789",
  "magento_reward_points_invitation_order_limit": "abc123",
  "magento_reward_points_newsletter": "abc123",
  "magento_reward_points_order": "abc123",
  "magento_reward_points_register": "abc123",
  "magento_reward_points_review": "xyz789",
  "magento_reward_points_review_limit": "abc123",
  "magento_wishlist_general_is_enabled": "xyz789",
  "maximum_number_of_wishlists": "abc123",
  "minimum_password_length": "abc123",
  "no_route": "xyz789",
  "payment_payflowpro_cc_vault_active": "abc123",
  "printed_card_price": "abc123",
  "product_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "product_reviews_enabled": "abc123",
  "product_url_suffix": "abc123",
  "required_character_classes_number": "abc123",
  "returns_enabled": "xyz789",
  "root_category_id": 123,
  "root_category_uid": "4",
  "sales_fixed_product_tax_display_setting": "INCLUDE_FPT_WITHOUT_DETAILS",
  "sales_gift_wrapping": "xyz789",
  "sales_printed_card": "abc123",
  "secure_base_link_url": "abc123",
  "secure_base_media_url": "xyz789",
  "secure_base_static_url": "abc123",
  "secure_base_url": "xyz789",
  "send_friend": SendFriendConfiguration,
  "show_cms_breadcrumbs": 123,
  "store_code": 4,
  "store_group_code": 4,
  "store_group_name": "xyz789",
  "store_name": "abc123",
  "store_sort_order": 987,
  "timezone": "abc123",
  "title_prefix": "xyz789",
  "title_separator": "xyz789",
  "title_suffix": "abc123",
  "use_store_in_url": true,
  "website_code": 4,
  "website_id": 123,
  "website_name": "xyz789",
  "weight_unit": "abc123",
  "welcome": "xyz789",
  "zero_subtotal_enable_for_specific_countries": true,
  "zero_subtotal_enabled": true,
  "zero_subtotal_new_order_status": "xyz789",
  "zero_subtotal_payment_action": "abc123",
  "zero_subtotal_payment_from_specific_countries": "abc123",
  "zero_subtotal_sort_order": 987,
  "zero_subtotal_title": "xyz789"
}
```

<HorizontalLine />

### StorefrontProperties

Indicates where an attribute can be displayed.

#### Fields

| Field Name | Description |
|------------|-------------|
| `position` - [`Int`](#int) | The relative position of the attribute in the layered navigation block. |
| `use_in_layered_navigation` - [`UseInLayeredNavigationOptions`](#useinlayerednavigationoptions) | Indicates whether the attribute is filterable with results, without results, or not at all. |
| `use_in_product_listing` - [`Boolean`](#boolean) | Indicates whether the attribute is displayed in product listings. |
| `use_in_search_results_layered_navigation` - [`Boolean`](#boolean) | Indicates whether the attribute can be used in layered navigation on search results pages. |
| `visible_on_catalog_pages` - [`Boolean`](#boolean) | Indicates whether the attribute is displayed on product pages. |

#### Example

```json
{
  "position": 123,
  "use_in_layered_navigation": "NO",
  "use_in_product_listing": true,
  "use_in_search_results_layered_navigation": false,
  "visible_on_catalog_pages": true
}
```

<HorizontalLine />

### String

The `String` scalar type represents textual data, represented as UTF-8
character sequences. The String type is most often used by GraphQL to
represent free-form human-readable text.

#### Example

```json
"abc123"
```

<HorizontalLine />

### SubscribeEmailToNewsletterOutput

Contains the result of the `subscribeEmailToNewsletter` operation.

#### Fields

| Field Name | Description |
|------------|-------------|
| `status` - [`SubscriptionStatusesEnum`](#subscriptionstatusesenum) | The status of the subscription request. |

#### Example

```json
{"status": "NOT_ACTIVE"}
```

<HorizontalLine />

### SubscriptionStatusesEnum

Indicates the status of the request.

#### Values

| Enum Value | Description |
|------------|-------------|
| `NOT_ACTIVE` |  |
| `SUBSCRIBED` |  |
| `UNSUBSCRIBED` |  |
| `UNCONFIRMED` |  |

#### Example

```json
""NOT_ACTIVE""
```

<HorizontalLine />

### SwatchData

Describes the swatch type and a value.

#### Fields

| Field Name | Description |
|------------|-------------|
| `type` - [`String`](#string) | The type of swatch filter item: 1 - text; 2 - image. |
| `value` - [`String`](#string) | The value for the swatch item. It could be text or an image link. |

#### Example

```json
{
  "type": "xyz789",
  "value": "abc123"
}
```

<HorizontalLine />

### SwatchDataInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `value` - [`String`](#string) | The value can be represented as color (HEX code), image link, or text. |

#### Possible Types

| SwatchDataInterface Types |
|----------------|
| [`ImageSwatchData`](#imageswatchdata) |
| [`TextSwatchData`](#textswatchdata) |
| [`ColorSwatchData`](#colorswatchdata) |

#### Example

```json
{"value": "xyz789"}
```

<HorizontalLine />

### SwatchLayerFilterItem

#### Fields

| Field Name | Description |
|------------|-------------|
| `items_count` - [`Int`](#int) | The count of items per filter. *(Deprecated: Use &#x60;AggregationOption.count&#x60; instead.)* |
| `label` - [`String`](#string) | The label for a filter. *(Deprecated: Use &#x60;AggregationOption.label&#x60; instead.)* |
| `swatch_data` - [`SwatchData`](#swatchdata) | Data required to render a swatch filter item. |
| `value_string` - [`String`](#string) | The value of a filter request variable to be used in query. *(Deprecated: Use &#x60;AggregationOption.value&#x60; instead.)* |

#### Example

```json
{
  "items_count": 987,
  "label": "xyz789",
  "swatch_data": SwatchData,
  "value_string": "abc123"
}
```

<HorizontalLine />

### SwatchLayerFilterItemInterface

#### Fields

| Field Name | Description |
|------------|-------------|
| `swatch_data` - [`SwatchData`](#swatchdata) | Data required to render a swatch filter item. |

#### Possible Types

| SwatchLayerFilterItemInterface Types |
|----------------|
| [`SwatchLayerFilterItem`](#swatchlayerfilteritem) |

#### Example

```json
{"swatch_data": SwatchData}
```

<HorizontalLine />

### TaxItem

Contains tax item details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `amount` - [`Money!`](#money) | The amount of tax applied to the item. |
| `rate` - [`Float!`](#float) | The rate used to calculate the tax. |
| `title` - [`String!`](#string) | A title that describes the tax. |

#### Example

```json
{
  "amount": Money,
  "rate": 123.45,
  "title": "abc123"
}
```

<HorizontalLine />

### TextSwatchData

#### Fields

| Field Name | Description |
|------------|-------------|
| `value` - [`String`](#string) | The value can be represented as color (HEX code), image link, or text. |

#### Example

```json
{"value": "xyz789"}
```

<HorizontalLine />

### TierPrice

Defines a price based on the quantity purchased.

#### Fields

| Field Name | Description |
|------------|-------------|
| `discount` - [`ProductDiscount`](#productdiscount) | The price discount that this tier represents. |
| `final_price` - [`Money`](#money) | The price of the product at this tier. |
| `quantity` - [`Float`](#float) | The minimum number of items that must be purchased to qualify for this price tier. |

#### Example

```json
{
  "discount": ProductDiscount,
  "final_price": Money,
  "quantity": 987.65
}
```

<HorizontalLine />

### UpdateCartItemsInput

Modifies the specified items in the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String!`](#string) | The unique ID of a &#x60;Cart&#x60; object. |
| `cart_items` - [`[CartItemUpdateInput]!`](#cartitemupdateinput) | An array of items to be updated. |

#### Example

```json
{
  "cart_id": "xyz789",
  "cart_items": [CartItemUpdateInput]
}
```

<HorizontalLine />

### UpdateCartItemsOutput

Contains details about the cart after updating items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `cart` - [`Cart!`](#cart) | The cart after updating products. |

#### Example

```json
{"cart": Cart}
```

<HorizontalLine />

### UpdateCompanyOutput

Contains the response to the request to update the company.

#### Fields

| Field Name | Description |
|------------|-------------|
| `company` - [`Company!`](#company) | The updated company instance. |

#### Example

```json
{"company": Company}
```

<HorizontalLine />

### UpdateCompanyRoleOutput

Contains the response to the request to update the company role.

#### Fields

| Field Name | Description |
|------------|-------------|
| `role` - [`CompanyRole!`](#companyrole) | The updated company role instance. |

#### Example

```json
{"role": CompanyRole}
```

<HorizontalLine />

### UpdateCompanyStructureOutput

Contains the response to the request to update the company structure.

#### Fields

| Field Name | Description |
|------------|-------------|
| `company` - [`Company!`](#company) | The updated company instance. |

#### Example

```json
{"company": Company}
```

<HorizontalLine />

### UpdateCompanyTeamOutput

Contains the response to the request to update a company team.

#### Fields

| Field Name | Description |
|------------|-------------|
| `team` - [`CompanyTeam!`](#companyteam) | The updated company team instance. |

#### Example

```json
{"team": CompanyTeam}
```

<HorizontalLine />

### UpdateCompanyUserOutput

Contains the response to the request to update the company user.

#### Fields

| Field Name | Description |
|------------|-------------|
| `user` - [`Customer!`](#customer) | The updated company user instance. |

#### Example

```json
{"user": Customer}
```

<HorizontalLine />

### UpdateGiftRegistryInput

Defines updates to a `GiftRegistry` object.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](#giftregistrydynamicattributeinput) | Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed. |
| `event_name` - [`String`](#string) | The updated name of the event. |
| `message` - [`String`](#string) | The updated message describing the event. |
| `privacy_settings` - [`GiftRegistryPrivacySettings`](#giftregistryprivacysettings) | Indicates whether the gift registry is PRIVATE or PUBLIC. |
| `shipping_address` - [`GiftRegistryShippingAddressInput`](#giftregistryshippingaddressinput) | The updated shipping address for all gift registry items. |
| `status` - [`GiftRegistryStatus`](#giftregistrystatus) | Indicates whether the gift registry is ACTIVE or INACTIVE. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryDynamicAttributeInput
  ],
  "event_name": "xyz789",
  "message": "xyz789",
  "privacy_settings": "PRIVATE",
  "shipping_address": GiftRegistryShippingAddressInput,
  "status": "ACTIVE"
}
```

<HorizontalLine />

### UpdateGiftRegistryItemInput

Defines updates to an item in a gift registry.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `gift_registry_item_uid` - [`ID!`](#id) | The unique ID of a &#x60;giftRegistryItem&#x60; object. |
| `note` - [`String`](#string) | The updated description of the item. |
| `quantity` - [`Float!`](#float) | The updated quantity of the gift registry item. |

#### Example

```json
{
  "gift_registry_item_uid": "4",
  "note": "xyz789",
  "quantity": 987.65
}
```

<HorizontalLine />

### UpdateGiftRegistryItemsOutput

Contains the results of a request to update gift registry items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry after updating updating items. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### UpdateGiftRegistryOutput

Contains the results of a request to update a gift registry.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The updated gift registry. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### UpdateGiftRegistryRegistrantInput

Defines updates to an existing registrant.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `dynamic_attributes` - [`[GiftRegistryDynamicAttributeInput]`](#giftregistrydynamicattributeinput) | As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed. |
| `email` - [`String`](#string) | The updated email address of the registrant. |
| `firstname` - [`String`](#string) | The updated first name of the registrant. |
| `gift_registry_registrant_uid` - [`ID!`](#id) | The unique ID of a &#x60;giftRegistryRegistrant&#x60; object. |
| `lastname` - [`String`](#string) | The updated last name of the registrant. |

#### Example

```json
{
  "dynamic_attributes": [
    GiftRegistryDynamicAttributeInput
  ],
  "email": "abc123",
  "firstname": "xyz789",
  "gift_registry_registrant_uid": "4",
  "lastname": "xyz789"
}
```

<HorizontalLine />

### UpdateGiftRegistryRegistrantsOutput

Contains the results a request to update registrants.

#### Fields

| Field Name | Description |
|------------|-------------|
| `gift_registry` - [`GiftRegistry`](#giftregistry) | The gift registry after updating registrants. |

#### Example

```json
{"gift_registry": GiftRegistry}
```

<HorizontalLine />

### UpdateNegotiableQuoteItemsQuantityOutput

Contains the updated negotiable quote.

#### Fields

| Field Name | Description |
|------------|-------------|
| `quote` - [`NegotiableQuote`](#negotiablequote) | The updated negotiable quote. |

#### Example

```json
{"quote": NegotiableQuote}
```

<HorizontalLine />

### UpdateNegotiableQuoteQuantitiesInput

Specifies the items to update.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `items` - [`[NegotiableQuoteItemQuantityInput]!`](#negotiablequoteitemquantityinput) | An array of items to update. |
| `quote_uid` - [`ID!`](#id) | The unique ID of a &#x60;NegotiableQuote&#x60; object. |

#### Example

```json
{
  "items": [NegotiableQuoteItemQuantityInput],
  "quote_uid": 4
}
```

<HorizontalLine />

### UpdateProductsInWishlistOutput

Contains the customer's wish list and any errors encountered.

#### Fields

| Field Name | Description |
|------------|-------------|
| `user_errors` - [`[WishListUserInputError]!`](#wishlistuserinputerror) | An array of errors encountered while updating products in a wish list. |
| `wishlist` - [`Wishlist!`](#wishlist) | Contains the wish list with all items that were successfully updated. |

#### Example

```json
{
  "user_errors": [WishListUserInputError],
  "wishlist": Wishlist
}
```

<HorizontalLine />

### UpdatePurchaseOrderApprovalRuleInput

Defines the changes to be made to an approval rule.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `applies_to` - [`[ID]`](#id) | An updated list of company user role IDs to which this purchase order approval rule should be applied. When an empty array is provided, the rule is applied to all user roles in the system, including those created in the future. |
| `approvers` - [`[ID]`](#id) | An updated list of B2B user roles that can approve this purchase order approval rule. |
| `condition` - [`CreatePurchaseOrderApprovalRuleConditionInput`](#createpurchaseorderapprovalruleconditioninput) | The updated condition of the purchase order approval rule. |
| `description` - [`String`](#string) | The updated approval rule description. |
| `name` - [`String`](#string) | The updated approval rule name. |
| `status` - [`PurchaseOrderApprovalRuleStatus`](#purchaseorderapprovalrulestatus) | The updated status of the purchase order approval rule. |
| `uid` - [`ID!`](#id) | Unique identifier for the purchase order approval rule. |

#### Example

```json
{
  "applies_to": ["4"],
  "approvers": ["4"],
  "condition": CreatePurchaseOrderApprovalRuleConditionInput,
  "description": "xyz789",
  "name": "abc123",
  "status": "ENABLED",
  "uid": "4"
}
```

<HorizontalLine />

### UpdateRequisitionListInput

An input object that defines which requistion list characteristics to update.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `description` - [`String`](#string) | The updated description of the requisition list. |
| `name` - [`String!`](#string) | The new name of the requisition list. |

#### Example

```json
{
  "description": "abc123",
  "name": "xyz789"
}
```

<HorizontalLine />

### UpdateRequisitionListItemsInput

Defines which items in a requisition list to update.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_options` - [`[EnteredOptionInput]`](#enteredoptioninput) | An array of customer-entered options. |
| `item_id` - [`ID!`](#id) | The ID of the requisition list item to update. |
| `quantity` - [`Float`](#float) | The new quantity of the item. |
| `selected_options` - [`[String]`](#string) | An array of selected option IDs. |

#### Example

```json
{
  "entered_options": [EnteredOptionInput],
  "item_id": 4,
  "quantity": 123.45,
  "selected_options": ["abc123"]
}
```

<HorizontalLine />

### UpdateRequisitionListItemsOutput

Output of the request to update items in the specified requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](#requisitionlist) | The requisition list after updating items. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### UpdateRequisitionListOutput

Output of the request to rename the requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `requisition_list` - [`RequisitionList`](#requisitionlist) | The renamed requisition list. |

#### Example

```json
{"requisition_list": RequisitionList}
```

<HorizontalLine />

### UpdateWishlistOutput

Contains the name and visibility of an updated wish list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `name` - [`String!`](#string) | The wish list name. |
| `uid` - [`ID!`](#id) | The unique ID of a &#x60;Wishlist&#x60; object. |
| `visibility` - [`WishlistVisibilityEnum!`](#wishlistvisibilityenum) | Indicates whether the wish list is public or private. |

#### Example

```json
{
  "name": "xyz789",
  "uid": "4",
  "visibility": "PUBLIC"
}
```

<HorizontalLine />

### UrlRewrite

Contains URL rewrite details.

#### Fields

| Field Name | Description |
|------------|-------------|
| `parameters` - [`[HttpQueryParameter]`](#httpqueryparameter) | An array of request parameters. |
| `url` - [`String`](#string) | The request URL. |

#### Example

```json
{
  "parameters": [HttpQueryParameter],
  "url": "xyz789"
}
```

<HorizontalLine />

### UrlRewriteEntityTypeEnum

This enumeration defines the entity type.

#### Values

| Enum Value | Description |
|------------|-------------|
| `CMS_PAGE` |  |
| `PRODUCT` |  |
| `CATEGORY` |  |

#### Example

```json
""CMS_PAGE""
```

<HorizontalLine />

### UseInLayeredNavigationOptions

Defines whether the attribute is filterable in layered navigation.

#### Values

| Enum Value | Description |
|------------|-------------|
| `NO` |  |
| `FILTERABLE_WITH_RESULTS` |  |
| `FILTERABLE_NO_RESULT` |  |

#### Example

```json
""NO""
```

<HorizontalLine />

### ValidatePurchaseOrderError

Contains details about a failed validation attempt.

#### Fields

| Field Name | Description |
|------------|-------------|
| `message` - [`String!`](#string) | The returned error message. |
| `type` - [`ValidatePurchaseOrderErrorType!`](#validatepurchaseordererrortype) | Error type. |

#### Example

```json
{"message": "xyz789", "type": "NOT_FOUND"}
```

<HorizontalLine />

### ValidatePurchaseOrderErrorType

#### Values

| Enum Value | Description |
|------------|-------------|
| `NOT_FOUND` |  |
| `OPERATION_NOT_APPLICABLE` |  |
| `COULD_NOT_SAVE` |  |
| `NOT_VALID_DATA` |  |
| `UNDEFINED` |  |

#### Example

```json
""NOT_FOUND""
```

<HorizontalLine />

### ValidatePurchaseOrdersInput

Defines the purchase orders to be validated.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `purchase_order_uids` - [`[ID]!`](#id) | An array of the purchase order IDs. |

#### Example

```json
{"purchase_order_uids": [4]}
```

<HorizontalLine />

### ValidatePurchaseOrdersOutput

Contains the results of validation attempts.

#### Fields

| Field Name | Description |
|------------|-------------|
| `errors` - [`[ValidatePurchaseOrderError]!`](#validatepurchaseordererror) | An array of error messages encountered while performing the operation. |
| `purchase_orders` - [`[PurchaseOrder]!`](#purchaseorder) | An array of the purchase orders in the request. |

#### Example

```json
{
  "errors": [ValidatePurchaseOrderError],
  "purchase_orders": [PurchaseOrder]
}
```

<HorizontalLine />

### VaultTokenInput

Contains required input for payment methods with Vault support.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `public_hash` - [`String!`](#string) | The public hash of the payment token. |

#### Example

```json
{"public_hash": "xyz789"}
```

<HorizontalLine />

### VirtualCartItem

An implementation for virtual product cart items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | An array containing customizable options the shopper selected. |
| `errors` - [`[CartItemError]`](#cartitemerror) | An array of errors encountered while loading the cart item |
| `id` - [`String!`](#string) |  *(Deprecated: Use &#x60;uid&#x60; instead.)* |
| `prices` - [`CartItemPrices`](#cartitemprices) | Contains details about the price of the item, including taxes and discounts. |
| `product` - [`ProductInterface!`](#productinterface) | Details about an item in the cart. |
| `quantity` - [`Float!`](#float) | The quantity of this item in the cart. |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;CartItemInterface&#x60; object. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "errors": [CartItemError],
  "id": "abc123",
  "prices": CartItemPrices,
  "product": ProductInterface,
  "quantity": 987.65,
  "uid": "4"
}
```

<HorizontalLine />

### VirtualProduct

Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory.

#### Fields

| Field Name | Description |
|------------|-------------|
| `activity` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `attribute_set_id` - [`Int`](#int) | The attribute set assigned to the product. *(Deprecated: The field should not be used on the storefront.)* |
| `canonical_url` - [`String`](#string) | The relative canonical URL. This value is returned only if the system setting &#x27;Use Canonical Link Meta Tag For Products&#x27; is enabled. |
| `categories` - [`[CategoryInterface]`](#categoryinterface) | The categories assigned to a product. |
| `category_gear` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `climate` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `collar` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `color` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `country_of_manufacture` - [`String`](#string) | The product&#x27;s country of origin. |
| `created_at` - [`String`](#string) | Timestamp indicating when the product was created. *(Deprecated: The field should not be used on the storefront.)* |
| `crosssell_products` - [`[ProductInterface]`](#productinterface) | An array of cross-sell products. |
| `description` - [`ComplexTextValue`](#complextextvalue) | Detailed information about the product. The value can include simple HTML tags. |
| `eco_collection` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `erin_recommends` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `features_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `format` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gender` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `gift_message_available` - [`String`](#string) | Indicates whether a gift message is available. |
| `id` - [`Int`](#int) | The ID number assigned to the product. *(Deprecated: Use the &#x60;uid&#x60; field instead.)* |
| `image` - [`ProductImage`](#productimage) | The relative path to the main image on the product page. |
| `is_returnable` - [`String`](#string) | Indicates whether the product can be returned. |
| `manufacturer` - [`Int`](#int) | A number representing the product&#x27;s manufacturer. *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `material` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `media_gallery` - [`[MediaGalleryInterface]`](#mediagalleryinterface) | An array of media gallery objects. |
| `media_gallery_entries` - [`[MediaGalleryEntry]`](#mediagalleryentry) | An array of MediaGalleryEntry objects. *(Deprecated: Use &#x60;media_gallery&#x60; instead.)* |
| `meta_description` - [`String`](#string) | A brief overview of the product for search results listings, maximum 255 characters. |
| `meta_keyword` - [`String`](#string) | A comma-separated list of keywords that are visible only to search engines. |
| `meta_title` - [`String`](#string) | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` - [`String`](#string) | The product name. Customers use this name to identify the product. |
| `new` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `new_from_date` - [`String`](#string) | The beginning date for new product listings, and determines if the product is featured as a new product. |
| `new_to_date` - [`String`](#string) | The end date for new product listings. |
| `only_x_left_in_stock` - [`Float`](#float) | Product stock only x left count |
| `options` - [`[CustomizableOptionInterface]`](#customizableoptioninterface) | An array of options for a customizable product. |
| `options_container` - [`String`](#string) | If the product has multiple options, determines where they appear on the product page. |
| `pattern` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `performance_fabric` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `price` - [`ProductPrices`](#productprices) | Indicates the price of an item. *(Deprecated: Use &#x60;price_range&#x60; for product price information.)* |
| `price_range` - [`PriceRange!`](#pricerange) | The range of prices for the product |
| `price_tiers` - [`[TierPrice]`](#tierprice) | An array of &#x60;TierPrice&#x60; objects. |
| `product_links` - [`[ProductLinksInterface]`](#productlinksinterface) | An array of &#x60;ProductLinks&#x60; objects. |
| `purpose` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `rating_summary` - [`Float!`](#float) | The average of all the ratings given to the product. |
| `redirect_code` - [`Int!`](#int) | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. |
| `related_products` - [`[ProductInterface]`](#productinterface) | An array of related products. |
| `relative_url` - [`String`](#string) | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. |
| `review_count` - [`Int!`](#int) | The total count of all the reviews given to the product. |
| `reviews` - [`ProductReviews!`](#productreviews) | The list of products reviews. |
| `sale` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `short_description` - [`ComplexTextValue`](#complextextvalue) | A short description of the product. Its use depends on the theme. |
| `size` - [`Int`](#int) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `sku` - [`String`](#string) | A number or code assigned to a product to identify the product, options, price, and manufacturer. |
| `sleeve` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `small_image` - [`ProductImage`](#productimage) | The relative path to the small image, which is used on catalog pages. |
| `special_from_date` - [`String`](#string) | The beginning date that a product has a special price. *(Deprecated: The field should not be used on the storefront.)* |
| `special_price` - [`Float`](#float) | The discounted price of the product. |
| `special_to_date` - [`String`](#string) | The end date for a product with a special price. |
| `staged` - [`Boolean!`](#boolean) | Indicates whether the product is staged for a future campaign. |
| `stock_status` - [`ProductStockStatus`](#productstockstatus) | Stock status of the product |
| `strap_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bags` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_bottom` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `style_general` - [`String`](#string) |  *(Deprecated: Use the &#x60;custom_attributes&#x60; field instead.)* |
| `swatch_image` - [`String`](#string) | The file name of a swatch image. |
| `thumbnail` - [`ProductImage`](#productimage) | The relative path to the product&#x27;s thumbnail image. |
| `tier_price` - [`Float`](#float) | The price when tier pricing is in effect and the items purchased threshold has been reached. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `tier_prices` - [`[ProductTierPrices]`](#producttierprices) | An array of ProductTierPrices objects. *(Deprecated: Use &#x60;price_tiers&#x60; for product tier price information.)* |
| `type` - [`UrlRewriteEntityTypeEnum`](#urlrewriteentitytypeenum) | One of PRODUCT, CATEGORY, or CMS_PAGE. |
| `type_id` - [`String`](#string) | One of simple, virtual, bundle, downloadable, grouped, or configurable. *(Deprecated: Use &#x60;__typename&#x60; instead.)* |
| `uid` - [`ID!`](#id) | The unique ID for a &#x60;ProductInterface&#x60; object. |
| `updated_at` - [`String`](#string) | Timestamp indicating when the product was updated. *(Deprecated: The field should not be used on the storefront.)* |
| `upsell_products` - [`[ProductInterface]`](#productinterface) | An array of up-sell products. |
| `url_key` - [`String`](#string) | The part of the URL that identifies the product |
| `url_path` - [`String`](#string) |  *(Deprecated: Use product&#x27;s &#x60;canonical_url&#x60; or url rewrites instead)* |
| `url_rewrites` - [`[UrlRewrite]`](#urlrewrite) | URL rewrites list |
| `url_suffix` - [`String`](#string) | The part of the product URL that is appended after the url key |
| `websites` - [`[Website]`](#website) | An array of websites in which the product is available. *(Deprecated: The field should not be used on the storefront.)* |

#### Example

```json
{
  "activity": "abc123",
  "attribute_set_id": 987,
  "canonical_url": "abc123",
  "categories": [CategoryInterface],
  "category_gear": "abc123",
  "climate": "xyz789",
  "collar": "abc123",
  "color": 123,
  "country_of_manufacture": "xyz789",
  "created_at": "xyz789",
  "crosssell_products": [ProductInterface],
  "description": ComplexTextValue,
  "eco_collection": 987,
  "erin_recommends": 987,
  "features_bags": "xyz789",
  "format": 987,
  "gender": "xyz789",
  "gift_message_available": "abc123",
  "id": 123,
  "image": ProductImage,
  "is_returnable": "abc123",
  "manufacturer": 987,
  "material": "xyz789",
  "media_gallery": [MediaGalleryInterface],
  "media_gallery_entries": [MediaGalleryEntry],
  "meta_description": "abc123",
  "meta_keyword": "abc123",
  "meta_title": "abc123",
  "name": "xyz789",
  "new": 987,
  "new_from_date": "xyz789",
  "new_to_date": "abc123",
  "only_x_left_in_stock": 123.45,
  "options": [CustomizableOptionInterface],
  "options_container": "xyz789",
  "pattern": "xyz789",
  "performance_fabric": 123,
  "price": ProductPrices,
  "price_range": PriceRange,
  "price_tiers": [TierPrice],
  "product_links": [ProductLinksInterface],
  "purpose": 123,
  "rating_summary": 123.45,
  "redirect_code": 123,
  "related_products": [ProductInterface],
  "relative_url": "xyz789",
  "review_count": 987,
  "reviews": ProductReviews,
  "sale": 987,
  "short_description": ComplexTextValue,
  "size": 123,
  "sku": "abc123",
  "sleeve": "abc123",
  "small_image": ProductImage,
  "special_from_date": "abc123",
  "special_price": 123.45,
  "special_to_date": "xyz789",
  "staged": false,
  "stock_status": "IN_STOCK",
  "strap_bags": "xyz789",
  "style_bags": "abc123",
  "style_bottom": "xyz789",
  "style_general": "xyz789",
  "swatch_image": "xyz789",
  "thumbnail": ProductImage,
  "tier_price": 987.65,
  "tier_prices": [ProductTierPrices],
  "type": "CMS_PAGE",
  "type_id": "abc123",
  "uid": 4,
  "updated_at": "xyz789",
  "upsell_products": [ProductInterface],
  "url_key": "abc123",
  "url_path": "xyz789",
  "url_rewrites": [UrlRewrite],
  "url_suffix": "abc123",
  "websites": [Website]
}
```

<HorizontalLine />

### VirtualProductCartItemInput

Defines a single product to add to the cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `customizable_options` - [`[CustomizableOptionInput]`](#customizableoptioninput) | An array that defines customizable options for the product. |
| `data` - [`CartItemInput!`](#cartiteminput) | An object containing the &#x60;sku&#x60;, &#x60;quantity&#x60;, and other relevant information about the product. |

#### Example

```json
{
  "customizable_options": [CustomizableOptionInput],
  "data": CartItemInput
}
```

<HorizontalLine />

### VirtualRequisitionListItem

Contains details about virtual products added to a requisition list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Selected custom options for an item in the requisition list. |
| `product` - [`ProductInterface!`](#productinterface) | Details about a requisition list item. |
| `quantity` - [`Float!`](#float) | The amount added. |
| `uid` - [`ID!`](#id) | The unique ID for the requisition list item. |

#### Example

```json
{
  "customizable_options": [SelectedCustomizableOption],
  "product": ProductInterface,
  "quantity": 987.65,
  "uid": "4"
}
```

<HorizontalLine />

### VirtualWishlistItem

Contains a virtual product wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Example

```json
{
  "added_at": "abc123",
  "customizable_options": [SelectedCustomizableOption],
  "description": "xyz789",
  "id": "4",
  "product": ProductInterface,
  "quantity": 987.65
}
```

<HorizontalLine />

### Website

Deprecated. It should not be used on the storefront. Contains information about a website.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`String`](#string) | A code assigned to the website to identify it. *(Deprecated: The field should not be used on the storefront.)* |
| `default_group_id` - [`String`](#string) | The default group ID of the website. *(Deprecated: The field should not be used on the storefront.)* |
| `id` - [`Int`](#int) | The ID number assigned to the website. *(Deprecated: The field should not be used on the storefront.)* |
| `is_default` - [`Boolean`](#boolean) | Indicates whether this is the default website. *(Deprecated: The field should not be used on the storefront.)* |
| `name` - [`String`](#string) | The website name. Websites use this name to identify it easier. *(Deprecated: The field should not be used on the storefront.)* |
| `sort_order` - [`Int`](#int) | The attribute to use for sorting websites. *(Deprecated: The field should not be used on the storefront.)* |

#### Example

```json
{
  "code": "abc123",
  "default_group_id": "abc123",
  "id": 123,
  "is_default": true,
  "name": "xyz789",
  "sort_order": 987
}
```

<HorizontalLine />

### WishListUserInputError

An error encountered while performing operations with WishList.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`WishListUserInputErrorType!`](#wishlistuserinputerrortype) | A wish list-specific error code. |
| `message` - [`String!`](#string) | A localized error message. |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "abc123"
}
```

<HorizontalLine />

### WishListUserInputErrorType

A list of possible error types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRODUCT_NOT_FOUND` |  |
| `UNDEFINED` |  |

#### Example

```json
""PRODUCT_NOT_FOUND""
```

<HorizontalLine />

### Wishlist

Contains a customer wish list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `id` - [`ID`](#id) | The unique ID for a &#x60;Wishlist&#x60; object. |
| `items` - [`[WishlistItem]`](#wishlistitem) |  *(Deprecated: Use the &#x60;items_v2&#x60; field instead.)* |
| `items_count` - [`Int`](#int) | The number of items in the wish list. |
| `items_v2` - [`WishlistItems`](#wishlistitems) | An array of items in the customer&#x27;s wish list. |
| `name` - [`String`](#string) | The name of the wish list. |
| `sharing_code` - [`String`](#string) | An encrypted code that Magento uses to link to the wish list. |
| `updated_at` - [`String`](#string) | The time of the last modification to the wish list. |
| `visibility` - [`WishlistVisibilityEnum!`](#wishlistvisibilityenum) | Indicates whether the wish list is public or private. |

#### Example

```json
{
  "id": 4,
  "items": [WishlistItem],
  "items_count": 987,
  "items_v2": WishlistItems,
  "name": "abc123",
  "sharing_code": "xyz789",
  "updated_at": "xyz789",
  "visibility": "PUBLIC"
}
```

<HorizontalLine />

### WishlistCartUserInputError

Contains details about errors encountered when a customer added wish list items to the cart.

#### Fields

| Field Name | Description |
|------------|-------------|
| `code` - [`WishlistCartUserInputErrorType!`](#wishlistcartuserinputerrortype) | An error code that describes the error encountered. |
| `message` - [`String!`](#string) | A localized error message. |
| `wishlistId` - [`ID!`](#id) | The unique ID of the &#x60;Wishlist&#x60; object containing an error. |
| `wishlistItemId` - [`ID!`](#id) | The unique ID of the wish list item containing an error. |

#### Example

```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "xyz789",
  "wishlistId": 4,
  "wishlistItemId": "4"
}
```

<HorizontalLine />

### WishlistCartUserInputErrorType

A list of possible error types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PRODUCT_NOT_FOUND` |  |
| `NOT_SALABLE` |  |
| `INSUFFICIENT_STOCK` |  |
| `UNDEFINED` |  |

#### Example

```json
""PRODUCT_NOT_FOUND""
```

<HorizontalLine />

### WishlistItem

Contains details about a wish list item.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String`](#string) | The time when the customer added the item to the wish list. |
| `description` - [`String`](#string) | The customer&#x27;s comment about this item. |
| `id` - [`Int`](#int) | The unique ID for a &#x60;WishlistItem&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Details about the wish list item. |
| `qty` - [`Float`](#float) | The quantity of this wish list item |

#### Example

```json
{
  "added_at": "xyz789",
  "description": "abc123",
  "id": 123,
  "product": ProductInterface,
  "qty": 987.65
}
```

<HorizontalLine />

### WishlistItemCopyInput

Specifies the IDs of items to copy and their quantities.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quantity` - [`Float`](#float) | The quantity of this item to copy to the destination wish list. This value can&#x27;t be greater than the quantity in the source wish list. |
| `wishlist_item_id` - [`ID!`](#id) | The unique ID of the &#x60;WishlistItemInterface&#x60; object to be copied. |

#### Example

```json
{
  "quantity": 123.45,
  "wishlist_item_id": "4"
}
```

<HorizontalLine />

### WishlistItemInput

Defines the items to add to a wish list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `entered_options` - [`[EnteredOptionInput]`](#enteredoptioninput) | An array of options that the customer entered. |
| `parent_sku` - [`String`](#string) | For complex product types, the SKU of the parent product. |
| `quantity` - [`Float!`](#float) | The amount or number of items to add. |
| `selected_options` - [`[ID]`](#id) | An array of strings corresponding to options the customer selected. |
| `sku` - [`String!`](#string) | The SKU of the product to add. For complex product types, specify the child product SKU. |

#### Example

```json
{
  "entered_options": [EnteredOptionInput],
  "parent_sku": "xyz789",
  "quantity": 123.45,
  "selected_options": ["4"],
  "sku": "abc123"
}
```

<HorizontalLine />

### WishlistItemInterface

The interface for wish list items.

#### Fields

| Field Name | Description |
|------------|-------------|
| `added_at` - [`String!`](#string) | The date and time the item was added to the wish list. |
| `customizable_options` - [`[SelectedCustomizableOption]!`](#selectedcustomizableoption) | Custom options selected for the wish list item. |
| `description` - [`String`](#string) | The description of the item. |
| `id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |
| `product` - [`ProductInterface`](#productinterface) | Product details of the wish list item. |
| `quantity` - [`Float!`](#float) | The quantity of this wish list item. |

#### Possible Types

| WishlistItemInterface Types |
|----------------|
| [`SimpleWishlistItem`](#simplewishlistitem) |
| [`VirtualWishlistItem`](#virtualwishlistitem) |
| [`DownloadableWishlistItem`](#downloadablewishlistitem) |
| [`BundleWishlistItem`](#bundlewishlistitem) |
| [`GiftCardWishlistItem`](#giftcardwishlistitem) |
| [`GroupedProductWishlistItem`](#groupedproductwishlistitem) |
| [`ConfigurableWishlistItem`](#configurablewishlistitem) |

#### Example

```json
{
  "added_at": "xyz789",
  "customizable_options": [SelectedCustomizableOption],
  "description": "abc123",
  "id": "4",
  "product": ProductInterface,
  "quantity": 123.45
}
```

<HorizontalLine />

### WishlistItemMoveInput

Specifies the IDs of the items to move and their quantities.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `quantity` - [`Float`](#float) | The quantity of this item to move to the destination wish list. This value can&#x27;t be greater than the quantity in the source wish list. |
| `wishlist_item_id` - [`ID!`](#id) | The unique ID of the &#x60;WishlistItemInterface&#x60; object to be moved. |

#### Example

```json
{"quantity": 987.65, "wishlist_item_id": 4}
```

<HorizontalLine />

### WishlistItemUpdateInput

Defines updates to items in a wish list.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `description` - [`String`](#string) | Customer-entered comments about the item. |
| `entered_options` - [`[EnteredOptionInput]`](#enteredoptioninput) | An array of options that the customer entered. |
| `quantity` - [`Float`](#float) | The new amount or number of this item. |
| `selected_options` - [`[ID]`](#id) | An array of strings corresponding to options the customer selected. |
| `wishlist_item_id` - [`ID!`](#id) | The unique ID for a &#x60;WishlistItemInterface&#x60; object. |

#### Example

```json
{
  "description": "abc123",
  "entered_options": [EnteredOptionInput],
  "quantity": 123.45,
  "selected_options": [4],
  "wishlist_item_id": "4"
}
```

<HorizontalLine />

### WishlistItems

Contains an array of items in a wish list.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[WishlistItemInterface]!`](#wishlistiteminterface) | A list of items in the wish list. |
| `page_info` - [`SearchResultPageInfo`](#searchresultpageinfo) | Contains pagination metadata. |

#### Example

```json
{
  "items": [WishlistItemInterface],
  "page_info": SearchResultPageInfo
}
```

<HorizontalLine />

### WishlistOutput

Deprecated: Use the `Wishlist` type instead.

#### Fields

| Field Name | Description |
|------------|-------------|
| `items` - [`[WishlistItem]`](#wishlistitem) | An array of items in the customer&#x27;s wish list *(Deprecated: Use the &#x60;Wishlist.items&#x60; field instead.)* |
| `items_count` - [`Int`](#int) | The number of items in the wish list. *(Deprecated: Use the &#x60;Wishlist.items_count&#x60; field instead.)* |
| `name` - [`String`](#string) | When multiple wish lists are enabled, the name the customer assigns to the wishlist. *(Deprecated: This field is related to Commerce functionality and is always &#x60;null&#x60; in Open Source.)* |
| `sharing_code` - [`String`](#string) | An encrypted code that links to the wish list. *(Deprecated: Use the &#x60;Wishlist.sharing_code&#x60; field instead.)* |
| `updated_at` - [`String`](#string) | The time of the last modification to the wish list. *(Deprecated: Use the &#x60;Wishlist.updated_at&#x60; field instead.)* |

#### Example

```json
{
  "items": [WishlistItem],
  "items_count": 987,
  "name": "xyz789",
  "sharing_code": "xyz789",
  "updated_at": "xyz789"
}
```

<HorizontalLine />

### WishlistVisibilityEnum

Defines the wish list visibility types.

#### Values

| Enum Value | Description |
|------------|-------------|
| `PUBLIC` |  |
| `PRIVATE` |  |

#### Example

```json
""PUBLIC""
```

<HorizontalLine />

### createEmptyCartInput

Assigns a specific `cart_id` to the empty cart.

#### Input Fields

| Input Field | Description |
|-------------|-------------|
| `cart_id` - [`String`](#string) | The ID to assign to the cart. |

#### Example

```json
{"cart_id": "abc123"}
```
