module.exports = [
  {
    title: "Introduction",
    path: "/graphql/",
  },
  {
    title: "Schema",
    path: "/graphql/schema/",
    pages: [
      {
        title: "Catalog Service",
        path: "/graphql/schema/catalog-service/",
        pages: [
          {
            title: "Queries",
            path: "/graphql/schema/catalog-service/index.md",
            pages: [
              {
                title: "products",
                path: "/graphql/schema/catalog-service/products"
              },
              {
                title: "productSearch",
                path: "/graphql/schema/catalog-service/product-search"
              },
              {
                title: "refineProduct",
                path: "/graphql/schema/catalog-service/refine-product"
              },
            ],
          },
        ],
      },
    ],
  }
];
