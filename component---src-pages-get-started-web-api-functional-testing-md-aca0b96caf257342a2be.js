"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3188],{68656:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var a=n(58168),i=n(80045),o=(n(88763),n(15680)),r=n(83407);const s=["components"],l={},p=(d="InlineAlert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var d;const m={_frontmatter:l},u=r.A;function c(e){let{components:t}=e,n=(0,i.A)(e,s);return(0,o.mdx)(u,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"web-api-functional-testing"},"Web API Functional Testing"),(0,o.mdx)("p",null,"The Web API testing framework allows you to test Web APIs from the client application point of view. The tests can be used with either REST or SOAP. The REST or SOAP adapter that runs the tests is specified in PHPUnit configuration. See ",(0,o.mdx)("a",{parentName:"p",href:"#how-to-run-the-tests"},"How to Run the Tests")," for more information."),(0,o.mdx)("p",null,"To run Web API tests for GraphQL, see ",(0,o.mdx)("a",{parentName:"p",href:"../graphql/develop/functional-testing.md"},"GraphQL functional testing"),"."),(0,o.mdx)("h2",{id:"implementation-details"},"Implementation Details"),(0,o.mdx)("p",null,"The Web API functional testing framework depends on the integration testing framework and reuses most of classes implemented there."),(0,o.mdx)("h3",{id:"custom-annotations-for-data-fixtures"},"Custom Annotations for Data Fixtures"),(0,o.mdx)("p",null,"In the Web API functional tests only, the custom annotation  ",(0,o.mdx)("inlineCode",{parentName:"p"},"@magentoApiDataFixture")," is available for declaring fixtures. The difference of this annotation from ",(0,o.mdx)("inlineCode",{parentName:"p"},"@magentoDataFixture")," is that the fixture will be committed and accessible during HTTP requests made within the test body. The usage rules of ",(0,o.mdx)("inlineCode",{parentName:"p"},"@magentoApiDataFixture")," are the same as ",(0,o.mdx)("inlineCode",{parentName:"p"},"@magentoDataFixture")," usage rules."),(0,o.mdx)(p,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If data was added to the DB using ",(0,o.mdx)("inlineCode",{parentName:"p"},"@magentoApiDataFixture"),", it will not be automatically cleared after test execution. The data is cleared when ",(0,o.mdx)("inlineCode",{parentName:"p"},"@magentoDataFixture")," is used."),(0,o.mdx)("p",null,"Do not define fixtures in ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/api-functional"),". Instead, they must be taken from ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/integration"),". The integration framework defines most necessary fixtures, and they should be reused during Web API functional testing. If the existing set of fixtures is insufficient, add new fixtures under ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/integration"),". The fixtures will then be available for both testing frameworks."),(0,o.mdx)("p",null,"To keep your test environment clean, clear all entities created in fixture files or within tests itself from the DB after test execution. This can be done either directly in tearDown or by a corresponding rollback for the fixture file. This file should be named the same as a fixture, but with ",(0,o.mdx)("inlineCode",{parentName:"p"},"_rollback")," suffix."),(0,o.mdx)("h2",{id:"how-to-create-a-new-test"},"How to Create a New Test"),(0,o.mdx)("p",null,"All Web API functional tests should inherit from the generic test case ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\TestFramework\\TestCase\\WebapiAbstract"),". It defines the ",(0,o.mdx)("inlineCode",{parentName:"p"},"_webApiCall()")," method, which should be used to perform Web API calls from tests. Clients of ",(0,o.mdx)("inlineCode",{parentName:"p"},"_webApiCall()")," are unaware of which adapter will be used to perform the remote call."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"namespace Magento\\Webapi\\Routing;\n\nclass CoreRoutingTest extends \\Magento\\TestFramework\\TestCase\\WebapiAbstract\n{\n    public function testBasicRoutingExplicitPath()\n    {\n        $itemId = 1;\n        $serviceInfo = [\n            'rest' => [\n                'resourcePath' => '/V1/testmodule1/' . $itemId,\n                'httpMethod' => \\Magento\\Framework\\Webapi\\Rest\\Request::HTTP_METHOD_GET,\n            ],\n            'soap' => [\n                'service' => 'testModule1AllSoapAndRestV1',\n                'operation' => 'testModule1AllSoapAndRestV1Item',\n            ],\n        ];\n        $requestData = ['itemId' => $itemId];\n        $item = $this->_webApiCall($serviceInfo, $requestData);\n        $this->assertEquals('testProduct1', $item['name'], \"Item was retrieved unsuccessfully\");\n    }\n}\n")),(0,o.mdx)("p",null,"The test above should be able to test SOAP and REST, depending on what adapter is currently used by the testing framework. The format of ",(0,o.mdx)("inlineCode",{parentName:"p"},"$serviceInfo")," is defined by the Web API client adapter interface:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"namespace Magento\\TestFramework\\TestCase\\Webapi;\n\ninterface AdapterInterface\n{\n    /**\n     * Perform call to the specified service method.\n     *\n     * @param array $serviceInfo <pre>\n     * array(\n     *     'rest' => array(\n     *         'resourcePath' => $resourcePath, // e.g. /products/:id\n     *         'httpMethod' => $httpMethod,     // e.g. GET\n     *         'token' => '21hasbtlaqy8t3mj73kjh71cxxkqj4aq'    // optional : for token based Authentication. Will\n     *                                                             override default OAuth based authentication provided\n     *                                                             by test framework\n     *     ),\n     *     'soap' => array(\n     *         'service' => $soapService,    // soap service name with Version suffix e.g. catalogProductV1, customerV2\n     *         'operation' => $operation     // soap operation name e.g. catalogProductCreate\n     *     )\n     * );\n     * </pre>\n     * @param array $arguments\n     * @param string|null $storeCode if store code not provided, default store code will be used\n     * @param \\Magento\\Integration\\Model\\Integration|null $integration\n     * @return array|string|int|float|bool\n     */\n    public function call($serviceInfo, $arguments = [], $storeCode = null, $integration = null);\n}\n")),(0,o.mdx)("h2",{id:"how-to-run-the-tests"},"How to Run the Tests"),(0,o.mdx)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Install the PHP Soap extension."),(0,o.mdx)("p",{parentName:"li"},"Copy ",(0,o.mdx)("inlineCode",{parentName:"p"},"php_soap.dll")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"php_soap.so")," to your PHP extensions directory. Edit your ",(0,o.mdx)("inlineCode",{parentName:"p"},"php.ini")," file and enable the PHP Soap extension. Usually this means deleting the leading semi-colon in front of the extension. Then restart Apache."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"extension=php_soap.dll"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Before running the functional tests you need to clear your cache. Now you are ready to run the tests."))),(0,o.mdx)("h3",{id:"running-the-tests"},"Running the Tests"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Copy ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/api-functional/phpunit_rest.xml.dist")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"phpunit_soap.xml.dist")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/api-functional/phpunit_rest.xml")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"phpunit_soap.xml"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Define the Commerce instance URL as a value of ",(0,o.mdx)("inlineCode",{parentName:"p"},"TESTS_BASE_URL"),", Test Webservice User as value of ",(0,o.mdx)("inlineCode",{parentName:"p"},"TESTS_WEBSERVICE_USER")," and Test Webservice API key as value of ",(0,o.mdx)("inlineCode",{parentName:"p"},"TESTS_WEBSERVICE_APIKEY")," in copied file i.e. ",(0,o.mdx)("inlineCode",{parentName:"p"},"phpunit_rest.xml")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"phpunit_soap.xml"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Copy ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/api-functional/config/install-config-mysql.php.dist")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/api-functional/config/install-config-mysql.php"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Configure your DB connection and install settings in ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/api-functional/config/install-config-mysql.php"),". Specify the Commerce database. The base URL to access this instance must be the same specified in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"phpunit_rest.xml")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"phpunit_soap.xml")," file.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Run ",(0,o.mdx)("inlineCode",{parentName:"p"},"phpunit")," using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/api-functional/phpunit_rest.xml")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/api-functional/phpunit_soap.xml")," configuration file::"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/phpunit --configuration <full xml file path>\n")),(0,o.mdx)("p",{parentName:"li"},"or"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/phpunit -c <full xml file path>\n")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-get-started-web-api-functional-testing-md-aca0b96caf257342a2be.js.map