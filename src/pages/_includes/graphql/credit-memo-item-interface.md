Attribute | Data type | Description
--- | --- | ---
`discounts` | [Discount] | Contains information about the final discount amount for the base product, including discounts on options
`id` | ID! | The unique ID of the credit memo item
`order_item` | [OrderItemInterface](/src/pages/graphql/schema/orders/interfaces/order-item.md) | The order item the credit memo is applied to
`product_name` | String | The name of the base product
`product_sale_price` | Money! | The sale price for the base product, including selected options
`product_sku` | String! | The SKU of the base product
`quantity_refunded` | Float | The number of refunded items
