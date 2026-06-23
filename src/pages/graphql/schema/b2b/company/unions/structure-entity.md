---
title: CompanyStructureEntity union
description: A GraphQL union represents an object that could be one of several data types, but there is no guarantee that the data types contain fields in common. Use a...
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# CompanyStructureEntity union

A GraphQL union represents an object that could be one of several data types, but there is no guarantee that the data types contain fields in common. Use an inline fragment to return details about each possible data type.

See the GraphQL specification for more details about [unions](https://graphql.org/learn/schema/#union-types).

The `CompanyStructureEntity` union provides details about a node in a company structure.

## Reference

The `CompanyStructureEntity` reference provides detailed information about the types and fields defined in this union.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/types-c-e.md#companystructureentity)

* [On-Premises/Cloud](/reference/graphql/latest/types-c-e.md#companystructureentity)

**Possible types:**

*  `CompanyTeam`
*  `Customer`

**Fields with this union:**

*  `CompanyStructureItem.entity`
