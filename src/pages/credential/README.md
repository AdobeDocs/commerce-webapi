# Credential template ID implementation

The `GetCredentialOAuthS2s` component requires a `template_id` to function properly with Adobe Developer Console. This document outlines the implementation approaches and recommended path forward.

## Original implementation

The component originally used a [hardcoded](https://github.com/AdobeDocs/adobe-dev-console/pull/140/files#diff-38dc7fe67ef001ab68b7a9aabf74b5b6b7113b0e8f7ead09a6413447f5539cf8R9) `template_id` value directly in the code:

```javascript
<GetCredential className="getCredentialContainer" templateId="66576a0de3cedc3a36fc9f28" productName="Firefly Services">
```

**Pros:**

- Simple and straightforward
- No environment configuration needed
- Works immediately for testing

**Cons:**

- Not environment-aware (same ID for staging/production)
- Requires code changes to switch environments, which matters because we need to validate on staging first as part of the test plan

## Preferred approach

Similar to the [AEM team's implementation](https://github.com/AdobeDocs/experience-platform-apis/tree/main/src/pages/credentials), use environment variables to manage different template IDs per environment:

```javascript
// In gatsby-config.js
module.exports = {
  siteMetadata: {
    template_id: process.env.GATSBY_TEMPLATE_ID,
    // ... other metadata
  }
}

// In the component
const { template_id } = data?.site?.siteMetadata || {};
```

**Environment variables:**

- `GATSBY_TEMPLATE_ID_STAGING` - Template ID for staging environment
- `GATSBY_TEMPLATE_ID_PRODUCTION` - Template ID for production environment

**Pros:**

- Environment-specific template IDs
- No code changes needed to switch environments

**Cons:**

- Requires environment configuration
- More complex initial setup
- Unclear how local dev builds should work; maybe use staging ID

## Short-term compromise

To enable immediate testing while planning the full environment variable implementation:

### Option 1: Hardcoded with fallback

```javascript
const { template_id } = data?.site?.siteMetadata || {};
const fallbackTemplateId = "your_staging_template_id_here"; // Replace with actual ID
const finalTemplateId = template_id || fallbackTemplateId;
```

### Option 2: Environment variable with hardcoded fallback

```javascript
// In gatsby-config.js
module.exports = {
  siteMetadata: {
    template_id: process.env.GATSBY_TEMPLATE_ID || "fallback_template_id_here",
    // ... other metadata
  }
}
```

## Implementation plan

### Phase 1: Immediate testing

- Use the short-term compromise approach
- Test component functionality with hardcoded template ID
- Validate the component works as expected

### Phase 2: Environment variable implementation

- Set up environment-specific template IDs
- Update CI/CD pipelines to inject correct environment variables
- Remove hardcoded fallbacks
- Test in staging and production environments

### Phase 3: Documentation and rollout

- Document the environment variable approach
- Train team on the new implementation
- Monitor for any issues in production

## Required actions

1. **Immediate:** Replace the current undefined `template_id` with a hardcoded staging template ID for testing
2. **Short-term:** Coordinate with DevOps to set up environment variables in CI/CD (GitHub secrets vs hardcoded in workflow files)
3. **Long-term:** Implement full environment variable approach across all environments

## Template ID sources

- **Staging:** Adobe Developer Console staging project template ID
- **Production:** Adobe Developer Console production project template ID
- **Local Development:** Use staging template ID for local testing
