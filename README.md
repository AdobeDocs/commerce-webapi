# Adobe Commerce Developer Documentation

Welcome! This site contains the latest Adobe Commerce and Magento Open Source developer documentation for ongoing releases of both products. For additional information, see our [Contribution Guide](https://developer.adobe.com/commerce/contributor/).

## Contributors

Our goal is to provide the Adobe Commerce and Magento Open Source communities with comprehensive and quality technical documentation. We believe that to accomplish that goal we need experts from the community to share their knowledge with us and each other. We are thankful to all of our contributors for improving the documentation.

![Commerce contributors](https://raw.githubusercontent.com/wiki/magento/magento2/images/dev_docs_contributors.png)

## Local development

This is a [Gatsby](https://www.gatsbyjs.com/) project that uses the [Adobe I/O Theme](https://github.com/adobe/aio-theme).

To build the site locally:

1. Clone this repo.
1. Install project dependencies.

   ```bash
   yarn install
   ```

1. Launch the project in development mode.

   ```bash
   yarn dev
   ```

## Resources

See the following resources to learn more about using the theme:

- [Arranging content structure](https://github.com/adobe/aio-theme#content-structure)
- [Linking to pages](https://github.com/adobe/aio-theme#links)
- [Using assets](https://github.com/adobe/aio-theme#assets)
- [Configuring global navigation](https://github.com/adobe/aio-theme#global-navigation)
- [Configuring side navigation](https://github.com/adobe/aio-theme#side-navigation)
- [Using content blocks](https://github.com/adobe/aio-theme#jsx-blocks)
- [Writing enhanced Markdown](https://github.com/adobe/aio-theme#writing-enhanced-markdown)
- [Deploying the site](https://github.com/adobe/aio-theme#deploy-to-azure-storage-static-websites) _(Adobe employees only)_

If you have questions, open an issue and ask us. We look forward to hearing from you!

## GraphQL API reference generator

The GraphQL API reference is generated using an open-source tool [SpectaQL](https://github.com/anvilco/spectaql). The data required for the generator is located at the `spectaql` directory:

- `adobe-theme`: [custom theme](https://github.com/anvilco/spectaql/blob/main/examples/themes/README.md).
- `config.yml`: [configuration file](https://github.com/anvilco/spectaql#yaml-options).
- `schema.json`: the GraphQL schema extracted from the Adobe Commerce (B2B) instance.

The resulted GraphQL API reference lives in the `static/graphql-api/` directory.
It is embedded into the `/graphql/reference` page using the `frameSrc` feature on the DevSite.

To rebuild the GraphQL API reference after any updates, run:

```shell
yarn build:spectaql
```

To run SpectaQL in the development mode:

```shell
yarn dev:spectaql
```

### How to get the schema

The website in the public directory was generated for the Adobe Commerce with B2B instance from GraphQL Schema 'schema.json'. The schema was retrieved using the apollo-cli tool:

```shell
npx apollo-cli download-schema $ENDPOINT_URL --output schema.json
```

where `$ENDPOINT_URL` is a placeholder for a URL's endpoint.

For more information about SpectaQL, refer to <https://github.com/anvilco/spectaql>.
