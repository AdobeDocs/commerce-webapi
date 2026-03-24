---
title: Login as Customer REST API
description: Learn how to generate a one-time code for a customer using the Login as Customer REST API in Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - REST
  - Integration
---

# Login as Customer

The Login as Customer feature allows administrators to generate a one-time code (OTC) for a customer, then exchange it for a customer access token. This is useful for support sessions, admin UIs, scripts, or third-party integrations that need to act on behalf of a customer.

## Generate a one-time code using the REST API

The POST `V1/customer/:customerId/otp` endpoint provides a programmatic way to generate an OTC for a customer. This is useful for admin UIs, scripts, or third-party integrations that need to trigger OTC issuance consistently.

| Item | Value |
|---|---|
| **Method** | POST |
| **URL** | `/rest/V1/customer/:customerId/otp` |
| **Authentication** | Admin token (Bearer). Required ACL: `Magento_LoginAsCustomer::login`. |
| **Request body** | JSON with `reason` field. Used for auditing and logging. |
| **Success response** | HTTP 200, JSON with `otp` (32-character hex string). |
| **Error responses** | Standard Web API errors (for example, 401, 403). If Login as Customer assistance is disabled for the customer, the response might surface as 500 or a mapped exception. |

### Example request

```bash
curl -X POST "https://<host>/rest/V1/customer/:customerId/otp" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <admin-token>" \
     -d '{"reason": "Support session"}'
```

### Example response

```json
{"otp": "a1b2c3d4e5f6789012345678abcdef01"}
```

## Next steps

After generating an OTC, you exchange it for a customer access token using one of the available GraphQL mutations. See [Login as Customer GraphQL](/graphql/saas-integrations/login-as-customer/) for details.
