module.exports = [
    {
       title: "Overview",
       path: "/rest/", 
    },
    {
      title: "Quick reference",
      path: "/rest/quick-reference/",
      pages: [
        {
        title: "REST Endpoints (ReDoc)",
        path: "/rest/quick-reference/",
        pages: [
            {
                title: "Admin REST endpoints",
                path: "https://magento.redoc.ly/2.4.4-admin/",
            },
            {
                title: "Customer REST endpoints",
                path: "https://magento.redoc.ly/2.4.4-customer/",
            },
            {
                title: "Guest REST endpoints",
                path: "https://magento.redoc.ly/2.4.4-guest/",
            },
        ],
        },       
        {
            title: "Generate a local API Reference",
            path: "/rest/quick-reference/generate-local.md",
        },
      ],
    },
  {
    title: "Use REST endpoints",
    path: "/rest/use-rest/",
    pages: [
        {
          title: "Search using REST",
          path: "/rest/use-rest/performing-searches.md",
        },
        {
          title: "Search with the /search endpoint",
          path: "/rest/use-rest/search-endpoint.md",
        },
        {
          title: "Retrieve filtered search responses",
          path: "/rest/use-rest/retrieve-filtered-responses.md",
        },
        {
          title: "Protected endpoints",
          path: "/rest/use-rest/protected-endpoints.md",
        
        },
        {
          title: "Restricting access to anonymous web APIs",
          path: "/rest/use-rest/anonymous-api-security.md",
        },
        {
          title: "Asynchronous web endpoints",
          path: "/rest/use-rest/asynchronous-web-endpoints.md",
        },
        {
          title: "Bulk endpoints",
          path: "/rest/use-rest/bulk-endpoints.md",
        },
        {
          title: "Bulk operation status endpoints",
          path: "/rest/use-rest/operation-status-endpoints.md",
        },
        {
          title: "Search for the status of a bulk operation",
          path: "/rest/use-rest/operation-status-search.md",
        },
        {
          title: "API usage notes",
          path: "/rest/use-rest/notes.md",
        },
    ],
  },
  {
    title: "Tutorials",
    path: "/rest/tutorials/",
    pages: [
        {
            title: "Prerequisite tasks",
            path: "/rest/tutorials/prerequisite-tasks/",
        },
        {
            title: "Order processing",
            path: "/rest/tutorials/orders/",
            pages: [
            {
                title: "Order processing tutorial",
                path: "/rest/tutorials/orders/",
            },
            {
                title: "Step 1. Configure the store",
                path: "/rest/tutorials/orders/order-config-store.md",
            },
            {
                title: "Step 2. Get the admin token",
                path: "/rest/tutorials/orders/order-admin-token.md",
            },
            {
                title: "Step 3. Create a customer",
                path: "/rest/tutorials/orders/order-create-customer.md",
            },
            {
                title: "Step 4. Create a quote",
                path: "/rest/tutorials/orders/order-create-quote.md",
            },      
            {
                title: "Step 5. Add items to the cart",
                path: "/rest/tutorials/orders/order-add-items.md",
            },
            {
                title: "Step 6. Prepare for checkout",
                path: "/rest/tutorials/orders/order-prepare-checkout.md",
            },
            {
                title: "Step 7. Create an order",
                path: "/rest/tutorials/orders/order-create-order.md",
            },
            {
                title: "Step 8. Create an invoice",
                path: "/rest/tutorials/orders/order-create-invoice.md",
            },
            {
                title: "Step 9. Create a shipment",
                path: "/rest/tutorials/orders/order-create-shipment.md",
            },
            {
                title: "Step 10. Issue a partial refund",
                path: "/rest/tutorials/orders/order-issue-refund.md",
            },
            ]
        },
        {
            title: "Order processing with Inventory Management",
            path: "/rest/tutorials/inventory/",
            pages: [
            {
                title: "Order processing with Inventory Management tutorial",
                path: "/rest/tutorials/inventory/",
            },
            {
                title: "Step 1. Configure your environment",
                path: "/rest/tutorials/inventory/configure-environment.md",
            },
            {
                title: "Step 2. Create sources",
                path: "/rest/tutorials/inventory/create-sources.md",
            },
            {
                title: "Step 3. Create stocks",
                path: "/rest/tutorials/inventory/create-stock.md",
            },
            {
                title: "Step 4. Link stocks and sources",
                path: "/rest/tutorials/inventory/assign-source-to-stock.md",
            },
            {
                title: "Step 5. Reassign products to custom sources",
                path: "/rest/tutorials/inventory/reassign-products-to-another-source.md",
            },
            {
                title: "Step 6. Create a customer and generate a customer token",
                path: "/rest/tutorials/inventory/create-customer.md",
            },
            {
                title: "Step 7. Create a cart and add products to it",
                path: "/rest/tutorials/inventory/create-cart-add-products.md",
            },
            {
                title: "Step 8. Prepare for checkout",
                path: "rest/tutorials/inventory/prepare-for-checkout.md",
            },
            {
                title: "Step 9. Create an order",
                path: "/rest/tutorials/inventory/create-order.md",
            },
            {
                title: "Step 10. Create an invoice",
                path: "/rest/tutorials/inventory/create-invoice.md",
            },
            {
                title: "Step 11. Run the Source Selection Algorithms",
                path: "/rest/tutorials/inventory/run-ssa.md",
            },
            {
                title: "Step 12. Create a shipment",
                path: "/rest/tutorials/inventory/create-shipment.md",
            },
            {
                title: "Step 13. Bulk transfer products",
                path: "/rest/tutorials/inventory/bulk-transfer-products.md",
            },
            {
                title: "Step 14. Create an order for in-store pickup (optional)",
                path: "/rest/tutorials/inventory/in-store-pickup.md",
            },
            ]
        },
        {
            title: "Create configurable products",
            path: "/rest/tutorials/configurable-product/",
            pages: [
            {
                title: "Create configurable products tutorial",
                path: "/rest/tutorials/configurable-product/",
            },
            {
                title: "Step 1. Plan the product",
                path: "/rest/tutorials/configurable-product/plan-product.md",
            },
            {
                title: "Step 2. Create the configurable product",
                path: "/rest/tutorials/configurable-product/create-configurable-product.md",
            },
            {
                title: "Step 3. Create the simple products",
                path: "/rest/tutorials/configurable-product/create-simple-products.md",
            },
            {
                title: "Step 4. Define configurable product options",
                path: "/rest/tutorials/configurable-product/define-config-product-options.md",
            },
            {
                title: "Step 5. Create the personalization option",
                path: "/rest/tutorials/configurable-product/create-personalization-option.md",
            },
            ]
        },
        {
            title: "Create a configurable product using bulk APIs",
            path: "/rest/tutorials/bulk-configurable-product/",
            pages: [
            {
                title: "Create a configurable product using bulk APIs tutorial",
                path: "/rest/tutorials/bulk-configurable-product/",
            },
            {
                title: "Step 1. Plan the product",
                path: "/rest/tutorials/bulk-configurable-product/plan-product.md",
            },
            {
                title: "Step 2. Create the configurable and simple products",
                path: "/rest/tutorials/bulk-configurable-product/create-configurable-simple-products.md",
            },
            {
                title: "Step 3. Define configurable product options",
                path: "/rest/tutorials/bulk-configurable-product/define-config-product-options.md",
            },
            {
                title: "Step 4. Create the personalization option",
                path: "/rest/tutorials/bulk-configurable-product/create-personalization-option.md",
            },
            ]
        },
        {
            title: "Create and manage grouped products",
            path: "/rest/tutorials/grouped-product/index.md",
        },
        {
            title: "Create bundle products",
            path: "/rest/tutorials/bundle-product/",
            pages: [
            {
                title: "Create bundle products tutorial",
                path: "/rest/tutorials/bundle-product/",
            },
            {
                title: "Step 1. Plan the product",
                path: "/rest/tutorials/bundle-product/plan-product.md",
            },
            {
                title: "Step 2. Create the simple products",
                path: "/rest/tutorials/bundle-product/create-simple-products.md",
            },
            {
                title: "Step 3. Create the bundle product",
                path: "/rest/tutorials/bundle-product/create-bundle-product.md",
            },
            ],
        },
    ],
  },
  {
    title: "Modules",
    path: "/rest/modules/",
    pages: [
        {
            title: "Catalog",
            path: "/rest/modules/catalog/",
            pages: [
            {
                title: "Catalog Module",
                path: "/rest/modules/catalog/",
            },
            {
                title: "Manage prices for multiple products",
                path: "/rest/modules/catalog/catalog-pricing.md",
            },
            ]
        },
        {
            title: "Inventory",
            path: "/rest/modules/inventory/",
            pages: [
            {
            title: "Manage sources",
            path: "/rest/modules/inventory/",
            },
            {
            title: "Manage stocks",
            path: "/rest/modules/inventory/manage-stocks.md",
            },
            {
            title: "Link and unlink stocks and sources",
            path: "/rest/modules/inventory/link-stocks-sources.md",
            },
            {
            title: "Manage source items",
            path: "/rest/modules/inventory/manage-source-items.md",
            },
            {
            title: "Perform bulk actions",
            path: "/rest/modules/inventory/bulk-inventory.md",
            },
            {
            title: "Manage low-quantity notifications",
            path: "/rest/modules/inventory/manage-low-quantity.md",
            },
            {
            title: "Check salable quantities",
            path: "/rest/modules/inventory/check-salable-quantity.md",
            },
            {
            title: "Manage source selection algorithms",
            path: "/rest/modules/inventory/manage-source-selection.md",
            },
            {
            title: "In-Store Pickup",
            path: "/rest/modules/inventory/in-store-pickup.md",
            },
        ],
    },
    {
        title: "Sales Refunds",
        path: "/rest/modules/sales/",
    },
  ],
  },
  ];
  