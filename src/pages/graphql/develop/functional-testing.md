---
title: GraphQL functional testing
description: Learn how to use the Adobe Commerce and Magento Open Source test framework to create fixtures, define exceptions, and run finctional tests.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - GraphQL
---

# GraphQL functional testing

Adobe Commerce and Magento Open Source provide API functional tests that can verify extension points in GraphQL. These tests serve as an example for exposing new queries via GraphQL.

## Creating a new GraphQL functional test

All GraphQL functional tests should be located in the `dev/tests/api-functional/testsuite/Magento/GraphQl/` directory and inherit from the generic test case `Magento\TestFramework\TestCase\GraphQlAbstract`. It defines the `graphQlQuery()` and `graphQlMutation()` methods, which should be used to perform Web API calls from tests.

The following test verifies that the schema returns the correct attribute type, given the `attribute_code` and corresponding `entity_type`.

```php
namespace Magento\GraphQl\Catalog;

use Magento\TestFramework\TestCase\GraphQlAbstract;

class ProductAttributeTypeTest extends GraphQlAbstract
{
    public function testAttributeTypeResolver()
    {
        $query
            = <<<QUERY
{
  customAttributeMetadata(attributes:
  [
    {
      attribute_code:"description",
      entity_type:"catalog_product"
    },
    {
      attribute_code:"status",
      entity_type:"catalog_product"
    },
    {
      attribute_code:"special_price",
      entity_type:"catalog_product"
    },
    {
      attribute_code:"disable_auto_group_change",
      entity_type:"customer"
    }
    {
      attribute_code:"special_price",
      entity_type:"Magento\\\\Catalog\\\\Api\\\\Data\\\\ProductInterface"
    }
  ]
  )
  {
    items
    {
      attribute_code
      attribute_type
      entity_type
      input_type
    }
  }
 }
QUERY;
        $response = $this->graphQlQuery($query);
        $expectedAttributeCodes = [
            'description',
            'status',
            'special_price',
            'disable_auto_group_change',
            'special_price'
        ];
        $entityType = [
            'catalog_product',
            'catalog_product',
            'catalog_product',
            'customer',
            \Magento\Catalog\Api\Data\ProductInterface::class
        ];
        $attributeTypes = ['String', 'Int', 'Float','Boolean', 'Float'];
        $inputTypes = ['textarea', 'select', 'price', 'boolean', 'price'];
        $this->assertAttributeType($attributeTypes, $expectedAttributeCodes, $entityType, $inputTypes, $response);
    }
```

## Using the default GraphQlQueryTest

The `\Magento\GraphQl\TestModule\GraphQlQueryTest.php` test case uses two test modules to determine whether the mechanisms for GraphQL extensibility work as expected. It illustrates best practices for extending an existing GraphQL endpoint.

*  `TestModuleGraphQlQuery` - This bare-bones module defines a `testItem` endpoint with the queryable attributes `item_id` and `name`. It's located at `<installdir>/dev/tests/api-functional/_files/TestModuleGraphQlQuery`.
*  `TestModuleGraphQlQueryExtension` - This module extends `TestModuleGraphQlQuery`, adding the `integer_list` extension attribute. It's located at `<installdir>/dev/tests/api-functional/_files/TestModuleGraphQlQueryExtension`.

## Data and config fixtures

<InlineAlert variant="warning" slots="text" />

Fixture and rollback files are deprecated and should not be used for new WebAPI tests. All new WebAPI tests should use data and config fixtures classes.

To execute your tests, you often need to populate some data in your testing environment or set up particular config settings. Use data fixtures to create objects and config fixtures to define configuration settings.

Data fixtures are special classes that allow you to create one or more instances of objects, such as `Customer`, `Cart` or `Product`. [Data fixture attribute](https://developer.adobe.com/commerce/testing/guide/integration/attributes/data-fixture/) in the _Application Testing Guide_ describes how to create and use data fixtures in your WebAPI tests.

[Configuration fixture attribute](https://developer.adobe.com/commerce/testing/guide/integration/attributes/config-fixture/) describes config fixtures.

## Defining expected exceptions

Your functional tests should include events that cause exceptions. Since your tests expect an exception to occur, set up your tests so that they elicit the proper responses. You can define expected exception messages either in:

*  The body of the test
*  The test function annotation

<InlineAlert variant="success" slots="text" />

We recommend that you declare expected exceptions in the test method body, as declaring expected exceptions with annotations has been deprecated in PHPUnit 8. Existing tests that use annotations will have to be updated when Adobe Commerce or Magento Open Source require that version of PHPUnit or higher.

### Exception messages in the body of a test

The following examples show two ways you can use the `expectExceptionMessage` function to define an expected exception message.

```php
public function testMyExceptionTest()
{
    ...

    self::expectExceptionMessage("Expected exception message goes here...");

    ...
}

```

or

```php
public function testMyExceptionTest()
{
    ...

    $this->expectExceptionMessage("Expected exception message goes here...");

    ...
}
```

<InlineAlert variant="info" slots="text" />

Define the exception message before invoking logic that generates the exception.

As an example, consider the case where Customer A tries to retrieve information about Customer B's cart. In this situation, Customer A gets this error:

```terminal
The current user cannot perform operations on cart "XXXXX"
```

`XXXXX` is the unique ID of Customer B's cart.

The following sample shows how to cover this scenario using an `expectExceptionMessage` function:

```php
    /**
     * @magentoApiDataFixture Magento/Checkout/_files/quote_with_items_saved.php
     */
    public function testGetCartFromAnotherCustomer()
    {
        $reservedOrderId = 'test_order_item_with_items';
        $this->quoteResource->load(
            $this->quote,
            $reservedOrderId,
            'reserved_order_id'
        );
        $maskedQuoteId = $this->quoteIdToMaskedId->execute((int)$this->quote->getId());
        $query = $this->prepareGetCartQuery($maskedQuoteId);
        self::expectExceptionMessage("The current user cannot perform operations on cart \"$maskedQuoteId\"");
        $this->graphQlQuery($query);
    }
```

### Exception messages in the annotation of a test function

You can also use a predefined directive such as `@expectedExceptionMessage` as an alternative way to call the `expectExceptionMessage` method:

```php
    /**
     * @expectedException \Exception
     * @expectedExceptionMessage Expected exception message goes here...
     */
```

In the following query, a customer provides an incorrect cart ID while trying to retrieve information about his own cart.

**Query:**

```text
{
  cart(cart_id: "YYYYY") {
    items {
      __typename
      id
      qty
    }
  }
}
```

**Result:**

```json
{
  "errors": [
    {
      "message": "Could not find a cart with ID \"YYYYY\"",
      "category": "graphql-no-such-entity",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "cart"
      ]
    }
  ],
  "data": {
    "cart": null
  }
}
```

The `@expectExceptionMessage` annotation provides the text for the exception in this test.

```php
    /**
     * @expectedException \Exception
     * @expectedExceptionMessage Could not find a cart with ID "non_existent_masked_id"
     */
    public function testGetNonExistentCart()
    {
        $maskedQuoteId = 'non_existent_masked_id';
        $query = $this->prepareGetCartQuery($maskedQuoteId);

        $this->graphQlQuery($query);
    }
```

Use the following functions to cover expected exceptions:

*  `expectException`
*  `expectExceptionCode`
*  `expectExceptionMessage`
*  `expectExceptionMessageRegExp`
*  `expectExceptionObject`

## Run functional tests

### Configure your instance

1. Change directories to `dev/tests/api-functional/` and copy the `phpunit_graphql.xml.dist` file to `phpunit_graphql.xml`.

   ```bash
   cp phpunit_graphql.xml.dist phpunit_graphql.xml
   ```

1. Edit `phpunit_graphql.xml` to set values for the TESTS_BASE_URL, TESTS_WEBSERVICE_USER, TESTS_WEBSERVICE_APIKEY options:

   ```xml
   ...
   <!-- Webserver URL -->
   <const name="TESTS_BASE_URL" value="http://magento.url"/>
   <!-- Webserver API user -->
   <const name="TESTS_WEBSERVICE_USER" value="admin"/>
   <!-- Webserver API key -->
   <const name="TESTS_WEBSERVICE_APIKEY" value="123123q"/>
   ...
   ```

### Run all tests in a API functional test suite

**Syntax:**

```bash
vendor/bin/phpunit -c dev/tests/api-functional/phpunit_graphql.xml dev/tests/api-functional/testsuite/<Vendor>/<Module>/<TestFile>.php
```

**Example:**

To run all tests from [dev/tests/api-functional/testsuite/Magento/GraphQl/Customer/GenerateCustomerTokenTest.php](https://github.com/magento/magento2/blob/2.3.1/dev/tests/api-functional/testsuite/Magento/GraphQl/Customer/GenerateCustomerTokenTest.php), run the following command:

```bash
vendor/bin/phpunit -c dev/tests/api-functional/phpunit_graphql.xml dev/tests/api-functional/testsuite/Magento/GraphQl/Customer/GenerateCustomerTokenTest.php
```

### Run a single test in a API functional test suite

**Syntax:**

```bash
vendor/bin/phpunit -c dev/tests/api-functional/phpunit_graphql.xml --filter <testFunctionName> dev/tests/api-functional/testsuite/<Vendor>/<Module>/<TestFile>.php
```

**Example:**

To run `testGenerateCustomerValidToken` test from [dev/tests/api-functional/testsuite/Magento/GraphQl/Customer/GenerateCustomerTokenTest.php](https://github.com/magento/magento2/blob/2.3.1/dev/tests/api-functional/testsuite/Magento/GraphQl/Customer/GenerateCustomerTokenTest.php), run the following command:

```bash
vendor/bin/phpunit -c dev/tests/api-functional/phpunit_graphql.xml --filter testGenerateCustomerValidToken dev/tests/api-functional/testsuite/Magento/GraphQl/Customer/GenerateCustomerTokenTest.php
```

### Run a selected group of tests in an API functional test suite

Use the `@group` directive in the test annotation to add the ability to run a group tests.

**Syntax:**

```bash
vendor/bin/phpunit -c dev/tests/api-functional/phpunit_graphql.xml --group <TEST_GROUP_ALIAS> dev/tests/api-functional/testsuite/<Vendor>/<Module>/<TestFile>.php
```

**Example:**

The `testGetCartTotalsWithNoAddressSet` test is marked with `@group recent`:

```php
<?php

namespace Magento\GraphQl;

class MyTest extends \Magento\TestFramework\TestCase\GraphQlAbstract

    /**
     * @group my_test_group
     */
    public function testFunction1()
    {
        ...
    }

    /**
     * @group my_test_group
     */
    public function testFunction2()
    {
        ...
    }

    /**
     *
     */
    public function testFunction3()
    {
        ...
    }
}
```

To run the `testFunction1` and `testFunction2` tests, which are part of the `my_test_group` group, use the following command:

```bash
vendor/bin/phpunit -c dev/tests/api-functional/phpunit_graphql.xml --group my_test_group dev/tests/api-functional/testsuite/Magento/GraphQl/MyTest.php
```
