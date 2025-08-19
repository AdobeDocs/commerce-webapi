&#8203;<Edition name="paas" />

| Environment | Endpoint    |
|------------ | ----------: |
| **Testing**    | `https://catalog-service-sandbox.adobe.io/graphql` |
| **Production** | `https://catalog-service.adobe.io/graphql` |

&#8203;<Edition name="saas" />

|  Environment | Endpoint |
| ------------ | --------:|
| Testing | `https://na1-sandbox.api.commerce.adobe.com/{{tenant-id}}/graphql` |
| Production (Not available yet) | `https://na1.api.commerce.adobe.com/{{tenant-id}}/graphql` |

**URL structure for SaaS endpoints**

```text
https://<region>-<environment>.api.commerce.adobe.com/<tenantId>/graphql
```

- `<region>` is the cloud region where your instance is deployed.
- `<environment>` is the environment type, such as `sandbox`. If the environment is production, this value is omitted.
- `<tenantId>` is the unique identifier for your organization's specific instance within the Adobe Experience Cloud.
