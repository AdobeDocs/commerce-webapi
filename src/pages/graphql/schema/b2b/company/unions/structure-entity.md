---
title: CompanyStructureEntity union
---

# CompanyStructureEntity union

A GraphQL union represents an object that could be one of several data types, but there is no guarantee that the data types contain fields in common. Use an inline fragment to return details about each possible data type.

See the GraphQL specification for more details about [unions](https://graphql.org/learn/schema/#union-types).

The [`CompanyStructureEntity` union]({{page.baseurl}}/graphql/queries/company.html#CompanyStructureItem) provides details about a node in a company structure.

**Possible types:**

*  `CompanyTeam`
*  `Customer`

**Fields with this union:**

*  `CompanyStructureItem.entity`
