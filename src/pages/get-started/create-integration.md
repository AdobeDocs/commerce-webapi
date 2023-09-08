---
title: Create an Integration
description: Explains how to create an integration.
keywords:
  - Integration
  - REST
---

# Create an integration

An **integration** enables third-party services to call the Adobe Commerce and Magento Open Source web APIs. The APIs currently support external software, such as Accounting, Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), Product Information Management (PIM), and marketing automation systems out of the box.

Implementing a simple integration requires little knowledge of PHP or Commerce internal processes. However, you will need a working knowledge of

*  [Commerce REST or SOAP Web APIs](../get-started/)
*  [Web API authentication](./authentication/)
*  [OAuth-based authentication](./authentication/gs-authentication-oauth.md)

Before you begin creating a module, make sure that you have a working installation that meets the [System Requirements](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/system-requirements.html).

To create an integration, follow these general steps:

## Create a skeletal module

To develop a module, you must:

1. **Create the module file structure.** The module for an integration, like any other of your custom modules, should be placed under `<base_dir>/app/code/app/code/<vendor_name>/<module_name>`. E.g. `<base_dir>/app/code/Vendor1/Module1`

   Also create  `etc`, `etc/integration`, and `Setup` subdirectories under `<base_dir>/app/code/<vendor_name>/<module_name>`, as shown in the following example:

   ```bash
   cd <base_dir>
   ```

   ```bash
   mkdir -p app/code/<vendor_name>/<module_name>/etc/integration
   ```

   ```bash
   mkdir -p app/code/<vendor_name>/<module_name>/Setup
   ```

   For more detailed information, see [Create your component file structure](https://developer.adobe.com/commerce/php/development/build/component-file-structure/).

1. **Define your module configuration file.** The `etc/module.xml` file provides basic information about the module. Change directories to the `etc` directory and create the `module.xml` file. You must specify values for the following attributes:

   <table>
   <tr>
   <th>Attribute</th><th>Description</th>
   </tr>
   <tr>
   <td>name</td>
   <td>A string that uniquely identifies the module.</td>
   </tr>
   <tr>
   <td>setup_version</td>
   <td>The version of Commerce the component uses</td>
   </tr>
   </table>
   The following example shows an example `etc/module.xml` file.

   ```xml
   <?xml version="1.0"?>
      <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
          <module name="Vendor1_Module1" setup_version="2.0.0">
               <sequence>
                   <module name="Magento_Integration"/>
               </sequence>
          </module>
        </config>
   ```

   Module `Magento_Integration` is added to "sequence" to be loaded first. It helps to avoid the issue, when a module with integration config loaded, that leads to a malfunction.

1. **Add your module's `composer.json` file.** Composer is a dependency manager for PHP. You must create a `composer.json` file for your module so that Composer can install and update the libraries your module relies on. Place the `composer.json` file in the `module-<module_name>` directory.

   The following example demonstrates a minimal `composer.json` file.

   ```json
     {
        "name": "Vendor1_Module1",
        "description": "create integration from config",
        "require": {
           "php": "~7.2.0|~7.3.0",
           "magento/framework": "2.0.0",
           "magento/module-integration": "2.0.0"
        },
        "type": "magento2-module",
        "version": "1.0",
        "autoload": {
           "files": [ "registration.php" ],
           "psr-4": {
              "Vendor1\\Module1\\": ""
           }
        }
     }
     
   ```

    For more information, see [Create a component](https://developer.adobe.com/commerce/php/development/build/component-name/).

1. **Create a `registration.php` file** The `registration.php` registers the module with the system. It must be placed in the module's root directory.

   ```php
   <?php
   \Magento\Framework\Component\ComponentRegistrar::register(
   \Magento\Framework\Component\ComponentRegistrar::MODULE,
   'Vendor1_Module1',
   __DIR__
   );
   ```

1. **Create an install class.** Change directories to your `Setup` directory. Create a `InstallData.php` file that installs the integration configuration data into the Commerce integration table.

   The following sample is boilerplate and requires minor changes to make your integration work.

   ```php
   <?php
   namespace Vendor1\Module1\Setup;

   use Magento\Framework\Setup\ModuleContextInterface;
   use Magento\Framework\Setup\ModuleDataSetupInterface;
   use Magento\Integration\Model\ConfigBasedIntegrationManager;
   use Magento\Framework\Setup\InstallDataInterface;

   class InstallData implements InstallDataInterface
   {
       /**
        * @var ConfigBasedIntegrationManager
        */

       private $integrationManager;

       /**
        * @param ConfigBasedIntegrationManager $integrationManager
        */

       public function __construct(ConfigBasedIntegrationManager $integrationManager)
       {
           $this->integrationManager = $integrationManager;
       }

       /**
        * {@inheritdoc}
        */

       public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
       {
           $this->integrationManager->processIntegrationConfig(['TestIntegration']);
       }
   }
   ```

    In the following line

    `$this->integrationManager->processIntegrationConfig(['testIntegration']);`

    `testIntegration` must refer to your `etc/integration/config.xml` file, and the integration name value must be the same.

    The following example demonstrates a minimal `config.xml` file.

    ```xml
    <integrations>
       <integration name="TestIntegration">
          <email>someone@example.com</email>
          <endpoint_url>https://example.com</endpoint_url>
          <identity_link_url>https://example.com/identity_link_url</identity_link_url>
       </integration>
    </integrations>
    ```

    Also, be sure to change the path after `namespace` for your vendor and module names.

## Create integration files

The Integration module simplifies the process of defining your integration. This module automatically performs functions such as:

*  Managing the third-party account that connects to Commerce.
*  Maintaining OAuth authorizations and user data.
*  Managing security tokens and requests.

To customize your module, you must create multiple XML files and read through other files to determine what resources existing modules have access to.

The process for customizing your module includes

*  [Define the required resources](#define-the-required-resources)
*  [Pre-configure the integration](#pre-configure-the-integration)

### Define the required resources

The `etc/integration/api.xml` file defines which API resources the integration has access to.

To determine which resources an integration needs access to, review the permissions defined in each module's `etc/acl.xml` file.

In the following example, the test integration requires access to the following resources in the Sales module:

```xml
<integrations>
    <integration name="TestIntegration">
        <resources>
            <!-- To grant permission to Magento_Log::online, its parent Magento_Customer::customer needs to be declared as well-->
            <resource name="Magento_Customer::customer" />
            <resource name="Magento_Log::online" />
            <!-- To grant permission to Magento_Sales::reorder, all its parent resources need to be declared-->    
            <resource name="Magento_Sales::sales" />
            <resource name="Magento_Sales::sales_operation" />
            <resource name="Magento_Sales::sales_order" />
            <resource name="Magento_Sales::actions" />
            <resource name="Magento_Sales::reorder" />
        </resources>
    </integration>
</integrations>
```

### Pre-configure the integration

Your module can optionally provide values in configuration file `config.xml`, so that the integration can be automatically pre-configured with default values. To enable this feature, update the `config.xml` file in the `etc/integration` directory.

<InlineAlert variant="info" slots="text"/>

If you pre-configure the integration, the values cannot be edited from the admin panel.

The file defines which API resources the integration has access to.

```xml
<integrations>
   <integration name="TestIntegration">
       <email></email>
       <endpoint_url></endpoint_url>
       <identity_link_url></identity_link_url>
   </integration>
</integrations>
```

<table>
<tr>
<th>Element</th>
<th>Description</th>
</tr>
<tr>
<td>integrations</td>
<td>Contains one or more integration definitions.</td>
</tr>
<tr>
<td>integration name=""</td>
<td>Defines an integration. The <inlineCode class="spectrum-Body--sizeS">name</inlineCode> must be specified.</td>
</tr>
<tr>
<td>email</td>
<td>An email to associate with this integration.</td>
</tr>
<tr>
<td>endpoint_url</td>
<td><p>Optional. The URL where OAuth credentials can be sent when using OAuth for token exchange. We strongly recommend using <inlineCode class="spectrum-Body--sizeS">https://</inlineCode>.</p>
<p>See <a href="./authentication/gs-authentication-oauth">OAuth-based authentication</a> for details.</p></td>
</tr>
<tr>
<td>identity_link_url</td>
<td>Optional. The URL that redirects the user to link their 3rd party account with the Commerce integration.</td>
</tr>
</table>

## Install your module

Use the following steps to install your module:

1. Run the following command to update the database schema and data.

   ```bash
   bin/magento setup:upgrade
   ```

1. Run the following command to generate the new code.

   **Note:** In Production mode, you may receive a message to 'Please rerun Magento compile command'.  Enter the command below. You are not prompted to run the compile command in Developer mode.

   ```bash
   bin/magento setup:di:compile
   ```

1. Run the following command to clean the cache.

   ```bash
   bin/magento cache:clean
   ```

## Check your integration

Log in to the Admin and navigate to **System > Extensions > Integrations**. The integration should be displayed in the grid.

## Integrate with your application

Before you can activate your integration, you must create two pages on your application to handle OAuth communications.

*  The location specified in the `identity_link_url` parameter must point to a page that can handle login requests.

*  The location specified in the `endpoint_url` parameter (**Callback URL** in Admin) must be able to process OAuth token exchanges.

### Login page

When a merchant clicks the **Activate** button in Admin, a pop-up login page for the third-party application displays. Commerce sends values for `oauth_consumer_key` and `success_call_back` parameters. The application must store the value for `oauth_consumer_key` to tie it to the login ID. Use the `success_call_back` parameter to return control back to Commerce.

### Callback page

The callback page must be able to perform the following tasks:

*  Receive an initial HTTPS POST that Commerce sends when the merchant activates integration. This post contains the Commerce store URL, an `oauth_verifier`, the OAuth consumer key, and the OAuth consumer secret. The consumer key and secret are generated when the integration is created.

*  Ask for a request token. A request token is a temporary token that the user exchanges for an access token. Use the following API to get a request token:

   `POST /oauth/token/request`

   See [Get a request token](./authentication/gs-authentication-oauth.md#get-a-request-token) for more details about this call.

*  Parse the request token response. The response contains an `oauth_token` and `oauth_token_secret`.

*  Ask for an access token. The request token must be exchanged for an access token. Use the following API to get a request token:

   `POST /oauth/token/access`

   See [Get an access token](./authentication/gs-authentication-oauth.md#get-an-access-token/) for more details about this call.

*  Parse the access token response. The response contains an `oauth_token` and `oauth_token_secret`. These values will be different than those provided in the request token response.

*  Save the access token and other OAuth parameters. The access token and OAuth parameters must be specified in the `Authorization` header in each call to Commerce.

## Related Topics

*  [Web API authentication](./authentication/)
*  [OAuth-based authentication](./authentication/gs-authentication-oauth.md)
*  [System Requirements](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/system-requirements.html)
*  [Create the module file structure](https://developer.adobe.com/commerce/php/development/build/component-file-structure/)
*  [Create a component](https://developer.adobe.com/commerce/php/development/build/component-name/)
