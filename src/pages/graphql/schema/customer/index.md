---
title: Customer
description: A customer is a shopper who has created an account for the store.
---

# Customer

A customer is a shopper who has created an account for the store.

To return or modify information about a customer, we recommend you use [customer tokens](../../usage/authorization-tokens.md) in the header of your GraphQL calls. However, you also can use [session authentication](/get-started/authentication/gs-authentication-session.md).

B2B for Adobe Commerce adds the following top-level fields to the [`Customer`](/reference/graphql/latest/types-c-e.md#customer) object for company administrators and users.

* `job_title`
* `requisition_lists`
* `role`
* `status`
* `team`
* `telephone`
