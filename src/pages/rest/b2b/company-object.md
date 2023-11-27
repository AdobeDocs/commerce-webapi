---
title: Manage company objects
description: Describes REST endpoints used to manage company objects
edition: ee
keywords:
  - B2B
  - REST
---

# Manage company objects

This section describes the REST endpoints used to manage `Company` objects.

**Service Name:**

`companyCompanyRepositoryV1`

**REST Endpoints:**

```json
POST /V1/company/
PUT /V1/company/:companyId
GET /V1/company/:companyId
DELETE /V1/company/:companyId
GET /V1/company/
```

**CompanyInterface Parameters:**

The following table lists the parameters defined in `CompanyInterface`.

Name | Description | Format | Requirements
--- | --- | --- | ---
`id` | System-generated company ID | integer | Required for updates and deletes.
`status` | 0 - Pending approval<br/>1 - Approved<br/>2 - Rejected<br/>3 - Blocked | integer | Optional
`company_name` | Company name  | string  | Required to create or update a company.
`legal_name`  | Legal name  | string  | Optional
`company_email`  | Official e-mail address of the company. It does not have to be unique.  | string | Required to create or update a company.
`vat_tax_id`  | The company's Value Added Tax ID  | string  | Optional
`reseller_id`  | Unique ID of the company reseller  | string  | Optional
`comment`  | Additional details about the company | string | Optional
`street` | Street address where the company is registered. The array can contain one or two lines. | Array[string] | Required to create or update a company.
`city` | The company's city  | string  | Required to create or update a company.
`country_id` | The country where the company is registered. | string  | Required to create or update a company.
`region` | State or province | string | Required to create or update a company.
`region_id` | An ID assigned to a state or province | string  | Optional
`postcode` | The company's ZIP or postal code | string  | Required to create or update a company.
`telephone` | The company contact's phone number | string | Required to create or update a company.
`customer_group_id`  | Defines the company's shared catalog. A value of `1` assigns the default shared catalog. | integer | Required to create or update a company.
`sales_representative_id` | User ID of the Sales Representative for the company | integer | Optional
`reject_reason` | Specifies why a company's request to be a B2B customer is rejected | string | Optional
`rejected_at` | A timestamp indicating when the company was rejected. | string | Optional
`super_user_id` | The `customer_id` of the company administrator. When creating a company, the `customer_id` must already exist.  | integer | Required to create or update a company.

### Create a company

The following example creates a company and assigns the default shared catalog (`customer_group_id`). The company admin (`super_user_id`) must be a previously-defined `customer_id`.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/company/`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "company": {
    "company_name": "Test company",
    "company_email": "newemail@example.com",
    "street":[
    "100 Big Tree Avenue"
    ],
    "city": "San Francisco",
    "country_id": "US",
    "region": "CA",
    "region_id": "12",
    "postcode": "99999",
    "telephone": "4155551212",
    "super_user_id": 5,
    "customer_group_id": 1
  }
}
```

#### Response

```json
{
  "id": 2,
  "company_name": "Test company",
  "company_email": "newemail@example.com",
  "street": [
    "100 Big Tree Avenue"
  ],
  "city": "San Francisco",
  "country_id": "US",
  "region": "California",
  "region_id": "12",
  "postcode": "99999",
  "telephone": "4155551212",
  "customer_group_id": 1,
  "sales_representative_id": 1,
  "reject_reason": null,
  "rejected_at": null,
  "super_user_id": 5,
  "extension_attributes": {
    "quote_config": {
      "company_id": "2",
      "is_quote_enabled": false
    }
  }
}
```

### Update the company

The following call changes the company status to Rejected (`2`) and explains why.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/company/2`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "company": {
    "id": 2,
    "company_name": "Test company",
    "company_email": "newemail@example.com",
    "customer_group_id": 1,
    "street":[
        "100 Big Tree Avenue"
    ],
    "city": "San Francisco",
    "country_id": "US",
    "region": "CA",
    "region_id": "12",
    "postcode": "99999",
    "telephone": "4155551212",
    "super_user_id": 5,
    "status": 2,
    "reject_reason": "Failed background check."
  }
}
```

#### Response

```json
{
  "id": 2,
  "company_name": "Test company",
  "company_email": "newemail@example.com",
  "street": [
    "100 Big Tree Avenue"
  ],
  "city": "San Francisco",
  "country_id": "US",
  "region": "California",
  "region_id": "12",
  "postcode": "99999",
  "telephone": "4155551212",
  "customer_group_id": 1,
  "sales_representative_id": 1,
  "reject_reason": null,
  "rejected_at": null,
  "super_user_id": 5,
  "extension_attributes": {
    "quote_config": {
      "company_id": "2",
      "is_quote_enabled": true
    }
  }
}
```

### Return all information about a company

This call returns detailed information about the specified company.
**Sample Usage:**

`GET <host>/rest/<store_code>/V1/company/2`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### payload

```json
// none
```

#### Response

```json
{
  "id": 2,
  "status": 0,
  "company_name": "Test company",
  "company_email": "newemail@example.com",
  "street": [
    "100 Big Tree Avenue"
  ],
  "city": "San Francisco",
  "country_id": "US",
  "region": "California",
  "region_id": "12",
  "postcode": "99999",
  "telephone": "4155551212",
  "customer_group_id": 1,
  "sales_representative_id": 1,
  "reject_reason": null,
  "rejected_at": null,
  "super_user_id": 5,
  "extension_attributes": {
    "quote_config": {
      "company_id": "2",
      "is_quote_enabled": true
    }
  }
}
```

### Delete a company

When you delete a company, Adobe Commerce assigns the "Inactive" status to all company members. The system also removes company ID from the customer profile of all company members.

**Sample Usage:**

`DELETE <host>/rest/<store_code>/V1/company/2`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### payload

```json
// none
```

#### Response

```json
// `true`, indicating the request was successful
```

### Search for companies

The following call returns all companies that are located in California (`region_id` = `12`)

See [Search using REST APIs](../use-rest/performing-searches.md) for information about constructing a search query.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/company?searchCriteria[filter_groups][0][filters][0][field]=region_id&searchCriteria[filter_groups][0][filters][0][value]=12&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### payload

```json
// none
```

#### Response

```json
{
    "items": [
        {
            "id": 2,
            "status": 1,
            "company_name": "Test Company",
            "legal_name": "Test Company",
            "company_email": "newemail@example.com",
            "street": [
                "100 Big Tree Avenue"
            ],
            "city": "San Francisco",
            "country_id": "US",
            "region": "California",
            "region_id": "12",
            "postcode": "99999",
            "telephone": "4155551212",
            "customer_group_id": 1,
            "sales_representative_id": 1,
            "reject_reason": null,
            "rejected_at": null,
            "super_user_id": 3,
            "extension_attributes": {
                "applicable_payment_method": 0,
                "available_payment_methods": "banktransfer,cashondelivery,checkmo,payflowpro,payflow_advanced,payflow_link,braintree,cybersource,eway,authorizenet_directpost,free,braintree_paypal,paypal_billing_agreement,payflow_express_bml,paypal_express_bml,paypal_express,payflow_express,hosted_pro,worldpay,companycredit,purchaseorder,braintree_paypal_vault,braintree_cc_vault,payflowpro_cc_vault",
                "use_config_settings": 1,
                "quote_config": {
                    "is_quote_enabled": true
                }
            }
        },
        {
            "id": 3,
            "status": 1,
            "company_name": "Widgets, Inc",
            "legal_name": "Widgets, Inc",
            "company_email": "widgetsinc@example.com",
            "street": [
                "8383 Wilshire Blvd",
                "Ste 1500"
            ],
            "city": "Beverly Hills",
            "country_id": "US",
            "region": "California",
            "region_id": "12",
            "postcode": "90211",
            "telephone": "(310) 555-0000",
            "customer_group_id": 1,
            "sales_representative_id": 1,
            "reject_reason": null,
            "rejected_at": null,
            "super_user_id": 10,
            "extension_attributes": {
                "applicable_payment_method": 0,
                "available_payment_methods": "banktransfer,cashondelivery,checkmo,payflowpro,payflow_advanced,payflow_link,braintree,cybersource,eway,authorizenet_directpost,free,braintree_paypal,paypal_billing_agreement,payflow_express_bml,paypal_express_bml,paypal_express,payflow_express,hosted_pro,worldpay,companycredit,purchaseorder,braintree_paypal_vault,braintree_cc_vault,payflowpro_cc_vault",
                "use_config_settings": 1,
                "quote_config": {
                    "is_quote_enabled": true
                }
            }
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "region_id",
                        "value": "12",
                        "condition_type": "eq"
                    }
                ]
            }
        ]
    },
    "total_count": 2
}
```
