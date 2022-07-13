---
title: Manage company users
description: Manage which companies a user belongs to
ee_only: true
---

import * as Vars from '../../../data/vars.js';

# Manage company users

A company user is a customer (buyer) that is assigned extended attributes that identify the company the user belongs to. Use the `POST /V1/customers` call, which is included with <Vars.sitedatavarce/> and <Vars.sitedatavaree/>, to create the user. After the user is created, you can use the `PUT /V1/customers/:customer_id` call to set their company data with the `company_attributes` extended attributes.

<InlineAlert variant="info" slots="text"/>

This topic discusses only the features of the `customerCustomerRepositoryV1` service that are specific to B2B. See [Create a customer](https://developer.adobe.com/commerce/webapi/rest/tutorials/orders/order-create-customer.html) for an example of creating a standard customer.

## Managing company users with REST

This section describes the REST endpoints used to manage company users.

**Service Name:**

`customerCustomerRepositoryV1`

**REST Endpoints:**

```terminal
POST /V1/customers/
PUT /V1/customers/:customerId
```

**Company user parameters:**

The following table lists the parameters that can be used to set company data for a user.

Name | Description | Format | Requirements
--- | --- | --- | ---
`customer_id` | System-generated customer ID. | integer | Not applicable for create operations.
`company_id` | System-generated company ID. | integer | Required to create or update a company user.
`job_title` | A string that describes the company user's responsibilities. | string | Required to create or update a company.
`status` | Indicates whether the company user is active or inactive | integer | `0` - inactive; `1` - active
`telephone`  |  Telephone number | string | Required to create a company user.

### Create a company user

The `POST /V1/customers` call creates an Adobe Commerce customer. B2B extends the `customerAccountManagementV1` service so that you can create a company user.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/customers`

First, create the standard customer. Their `company_id` will initially be set to `0`.

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "customer": {
    "email": "mshaw@example.com",
    "firstname": "Melanie",
    "lastname": "Shaw"
  }
}
```

#### Response

```json
{
  "id": 13,
  "group_id": 1,
  "created_at": "2017-05-18 16:47:44",
  "updated_at": "2017-05-18 16:47:44",
  "created_in": "Default Store View",
  "email": "mshaw@example.com",
  "firstname": "Melanie",
  "lastname": "Shaw",
  "store_id": 1,
  "website_id": 1,
  "addresses": [],
  "disable_auto_group_change": 0,
  "extension_attributes": {
    "company_attributes": {
      "customer_id": 13,
      "company_id": 0
    }
  }
}
```

If you create a user from the admin dashboard, you can also set their company data at the same time.

### Modify a company user

The following example assigns the user to a company, sets their status to inactive and also sets their `job_title` and `telephone`.

If you change the `status` to inactive, the account is locked. If the company user has child users, the system re-assigns the child users to the parent of the deactivated user.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/customers/13`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "customer": {
    "id": 13,
    "email": "mshaw@example.com",
    "firstname": "Melanie",
    "lastname": "Shaw",
    "website_id": 1,
    "extension_attributes": {
      "company_attributes": {
        "company_id": 2,
        "status": 0,
        "job_title": "Sales Rep",
        "telephone": "512-555-3322"
        }
      }
  }
}
```

#### Response

```json
{
  "id": 13,
  "group_id": 1,
  "created_at": "2017-05-18 16:47:44",
  "updated_at": "2017-05-18 18:50:58",
  "created_in": "Default Store View",
  "email": "mshaw@example.com",
  "firstname": "Melanie",
  "lastname": "Shaw",
  "store_id": 1,
  "website_id": 1,
  "addresses": [],
  "disable_auto_group_change": 0,
  "extension_attributes": {
    "company_attributes": {
      "customer_id": 13,
      "company_id": 2,
      "status": 0,
      "job_title": "Sales Rep",
      "telephone": "512-555-3322"
    },
    "is_subscribed": false
  }
}
```

### Delete a company user

If the specified company user has child users, the system re-assigns the child users to the parent of the deleted user. The user account is deleted from Commerce with all of its content, except quotes and orders. The user's orders and quotes remain visible to the seller.

Commerce locks the deleted user's quotes and changes their status to Closed. The system does not allow to make changes on such quotes.

**Sample Usage:**

`DELETE <host>/rest/<store_code>/V1/customers/13`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
// Not applicable
```

#### Response

```json
// `true`, indicating the request was successful
```
