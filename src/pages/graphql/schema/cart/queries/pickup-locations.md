---
title: pickupLocations query
contributor_name: Oleksandr Kravchuk
contributor_link: https://github.com/swnsma
---

# pickupLocations query

Use the `pickupLocations` query to retrieve a list of available pickup locations.

The `pickupLocations` query supports the following types of filters.

*  Area filters allow you to specify a location and a radius to find all locations within that radius. The `search_term` field must contain a either the region, city, or postcode, followed by a colon and the country code. This value determines the location to use as the center of the search radius.  Valid search terms include Texas:US, Austin:US, and 78740:US. The two-letter country code must be uppercase.

*  Attribute filters allow you to return locations within a specified country, postal code, region, city, street, street, name, and pickup location code.

You can specify multiple filters in a query.

<InlineAlert variant="info" slots="text" />

The `pickupLocations` query does not support searching by SKU assignment intersections.

If no filters are provided, the query returns a list of pickup locations, assigned to the Sales Channel that is used by the store.

The `ProductInfoInput` object can contain a list of SKUs. If this object is provided in the query, then the response contains locations where all the products are available for in-store pickup. If even one product in the list cannot be used as an in-store pickup location, that location will not be included in the response.

The query supports pagination and sorting (including sorting by distance if area filtering was applied).

The query returns a `PickupLocations` object, which contains information about pagination and list of `PickupLocation` items.

## Syntax

```graphql
pickupLocations (area: AreaInput filters: PickupLocationFilterInput sort: PickupLocationSortInput pageSize: Int currentPage: Int): PickupLocations
```

## Reference

The [`pickupLocations`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-pickupLocations) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns the closest pickup location to `Austin` with limitation in 1500 KM.
Because `pageSize` is set to 1 and distance by `distance` is applied, result will return the closest pickup location.

**Request:**

```graphql
{
  pickupLocations(
    area:{
      radius: 1500
      search_term: "Austin:US"
    }
    pageSize: 1
    currentPage: 1
    sort: {distance: ASC},
    productsInfo: [
        {
            sku: "SKU-1"
        }
    ]
  ) {
    items {
      pickup_location_code
      name
      email
      fax
      description
      latitude
      longitude
      country_id
      region_id
      region
      city
      street
      postcode
      phone
    },
    total_count
    page_info {
      page_size
      current_page
      total_pages
    }
  }
}
```

**Response:**

If the Pickup location is not available for the given search term, the response will be empty.
For the available Pickup location, the response would look like:

```json
{
  "data": {
    "pickupLocations": {
      "items": [
        {
          "pickup_location_code": "txspeqs",
          "name": "Sport Equipment Store",
          "email": "sales@company.com",
          "fax": null,
          "description": "Sport Equipment Store description",
          "latitude": 29.7543,
          "longitude": -95.3609,
          "country_id": "US",
          "region_id": 57,
          "region": "Texas",
          "city": "Houston",
          "street": "4631 Airport Blvd #125",
          "postcode": "77010",
          "phone": "(555) 555-5555"
        }
      ],
      "total_count": 1,
      "page_info": {
        "page_size": 1,
        "current_page": 1,
        "total_pages": 1
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Field AreaInput.radius of required type Int! was not provided` | The value specified in the `AreaInput.radius` argument is empty.
`Field AreaInput.search_term of required type String! was not provided` | The value specified in the `AreaInput.search_term` argument is empty.
