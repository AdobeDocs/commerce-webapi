module.exports = [
  {
    title: "Introduction",
    path: "/graphql/index.md",
  },
  {
    title: "Schema",
    path: "/graphql/schema/index.md",
    pages: [
      {
        title: "Catalog Service",
        path: "/graphql/schema/catalog-service/index.md",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/catalog-service/index.md",
            pages: [
              {
                title: "products",
                path: "/graphql/schema/catalog-service/products.md"
              },
              {
                title: "productSearch",
                path: "/graphql/schema/catalog-service/product-search.md"
              },
              {
                title: "refineProduct",
                path: "/graphql/schema/catalog-service/refine-product.md"
              }
            ],
          },
        ],
      },

    ],
  }
];
