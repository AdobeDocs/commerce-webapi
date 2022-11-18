# Adobe I/O Documentation Template

This is a site template built with the [Adobe I/O Theme](https://github.com/adobe/aio-theme).

View the [demo](https://adobedocs.github.io/dev-site-documentation-template/) running on Github Pages.  

## Where to ask for help

The slack channel #adobeio-onsite-onboarding is our main point of contact for help. Feel free to join the channel and ask any questions.

## How to develop

For local development, simply use :

```shell
$ yarn
$ yarn dev
```

For the documentation developer, please read these sections on how to:

- [Arrange the structure content of your docs](https://github.com/adobe/aio-theme#content-structure)
- [Linking to pages](https://github.com/adobe/aio-theme#links)
- [Using assets](https://github.com/adobe/aio-theme-aio#assets)
- [Setting Global Navigation](https://github.com/adobe/aio-theme#global-navigation)
- [Setting Side Navigation](https://github.com/adobe/aio-theme#side-navigation)
- [Using content blocks](https://github.com/adobe/aio-theme#jsx-blocks)
- [Notes on using Markdown](https://github.com/adobe/aio-theme#writing-enhanced-markdown)

For more in-depth [instructions](https://github.com/adobe/aio-theme#getting-started).

## How to deploy

For any team that wishes to deploy to the adobe.io and stage.adobe.io website, they must be in contact with the dev-site team. Teams will be given a path that will follow the pattern `adobe.io/{product}/`. This will allow doc developers to setup their subpaths to look something like:

```text
adobe.io/{product}/docs
adobe.io/{product}/community
adobe.io/{product}/community/code_of_conduct
adobe.io/{product}/community/contribute
```

### Launching a deploy

You can deploy using the GitHub actions deploy workflow see [deploy instructions](https://github.com/adobe/aio-theme#deploy-to-azure-storage-static-websites).

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

## How to get the schema

The website in the public directory was generated for the Adobe Commerce with B2B instance from GraphQL Schema 'schema.json'. The schema was retrieved using the apollo-cli tool:

```shell
npx apollo-cli download-schema $ENDPOINT_URL --output schema.json
```

where `$ENDPOINT_URL` is a placeholder for a URL's endpoint.

For more information about SpectaQL, refer to <https://github.com/anvilco/spectaql>.
