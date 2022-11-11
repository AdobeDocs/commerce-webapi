# SpectaQL on single schema

This SpectaQL configuration generates a GraphQL reference documentation from a single schema that was exported in JSON format from the Adobe Commerce with B2B instance using the apollo-cli tool.

## How to preview the website

To vew the generated website, run in this directory:

```
npx serve public
```

## How to get the schema

The website in the public directory was generated for the Adobe Commerce with B2B instance from GraphQL Schema 'schema.json'. The schema was retrieved using the apollo-cli tool:

```
npx apollo-cli download-schema $ENDPOINT_URL --output schema.json
```

where $ENDPOINT_URL is a placeholder for a URL to the endpoint.

## How to generate the website

`config.yml` contains the website's configuration. To regenerate the website after any updates, run:

```
npm run generate:graphql
```

This will regenerate the static/graphql-api.html page.

For more information about SpectaQL, refer to <https://github.com/anvilco/spectaql>.
