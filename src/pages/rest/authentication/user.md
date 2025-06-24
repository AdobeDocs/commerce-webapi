---
title: User authentication
description: Learn about REST API authentication in Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - REST
  - Integration
--- 
 
# Create server-to-server integration

This guide provides practical steps for implementing server-to-server integration with Adobe Commerce as a Cloud Service REST APIs using OAuth server-to-server authentication. This type of integration enables automated system-to-system communication without user intervention, which is ideal for the following use cases:

- Background processes and automated tasks
- Data synchronization services
- Automated reporting systems
- Microservices architecture integration

## Prerequisites

Before starting implementation, ensure you have:

- Access to [Adobe Developer Console](https://developer.adobe.com/console)
- Completed the Server Authentication Setup
- A development environment with:
  - HTTP client library
  - Environment variables or secure secrets management
  - SSL/TLS support
  - JSON parsing capabilities

## Implementation steps

Use the following steps to implement server-to-server integration with Adobe Commerce as a Cloud Service REST APIs:

### Step 1: Generate service credentials

If you have already completed the Server Authentication Setup, as mentioned in prerequisites, you can skip this step. Otherwise, follow these steps:

1. Navigate to your project in the Adobe Developer Console
2. Add Adobe Commerce as a Cloud Service API
3. Choose OAuth Server-to-Server credentials and click next
4. Provide a credential name
5. Choose ACCS Product Profiles and click Save credentials
5. Make a note of the following:
   - Client ID
   - Client Secret

### Step 2: Configure your environment

1. Create an `.env` file with the following contents:

   ```text
   IMS_CLIENT_ID=your_client_id
   IMS_CLIENT_SECRET=your_client_secret
   ```

2. Add the `.env` file to your project's `.gitignore` file

### Step 3: Implement token generation

The IMS admin token is required for all API calls. It is generated using the client credentials and has a limited lifetime. The following example implementation uses JavaScript and Node.js to generate a token.

Ensure you have the `axios` library installed in your project.

```javascript
// tokenManager.js
const axios = require('axios');
require('dotenv').config();

class TokenManager {
  constructor() {
    this.token = null;
    this.tokenExpiry = null;
  }

  async getValidToken() {
    if (this.isTokenValid()) {
      return this.token;
    }
    return await this.generateToken();
  }

  isTokenValid() {
    return this.token && this.tokenExpiry && Date.now() < this.tokenExpiry;
  }

  async generateToken() {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://ims-na1.adobelogin.com/ims/token/v3',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: new URLSearchParams({
          client_id: process.env.IMS_CLIENT_ID,
          client_secret: process.env.IMS_CLIENT_SECRET,
          grant_type: 'client_credentials',
          scope: 'openid,AdobeID,email,profile,additional_info.roles,additional_info.projectedProductContext'  // required scopes
        })
      });

      this.token = response.data.access_token;
      this.tokenExpiry = Date.now() + (response.data.expires_in * 1000);
      return this.token;
    } catch (error) {
      console.error('Token generation failed:', error.message);
      throw error;
    }
  }
}

module.exports = TokenManager;
```

### Step 4: Create an API Client

Create an API client that handles authentication and makes requests. This client uses the token manager to retrieve valid access tokens and handle API calls.

```javascript
// accsClient.js
const axios = require('axios');
const TokenManager = require('./tokenManager');

class ACCSApiClient {
  constructor() {
    this.baseURL = process.env.API_ENDPOINT;
    this.tokenManager = new TokenManager();
  }

  async request(method, endpoint, data = null) {
    const accessToken = await this.tokenManager.getValidToken();
    
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'x-api-key': process.env.IMS_CLIENT_ID,
      'Content-Type': 'application/json'
    };

    try {
      const response = await axios({
        method,
        url: `${this.baseURL}${endpoint}`,
        headers,
        data,
        validateStatus: status => status < 500
      });

      if (response.status === 429) {
        // Handle rate limiting
        const retryAfter = response.headers['retry-after'] || 5;
        await this.sleep(retryAfter * 1000);
        return this.request(method, endpoint, data);
      }

      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response?.status === 401) {
      this.tokenManager.token = null;
    }
    throw error;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports = ACCSApiClient;
```

### Step 5: Use the API client

Now that you have the `ACCSApiClient` set up, you can use it to make API calls to Adobe Commerce as a Cloud Service REST APIs. The client automatically handles token generation and refresh, so you can focus on your application logic.

```javascript
// example-usage.js
const ACCSApiClient = require('./accsClient');

async function main() {
  const client = new ACCSApiClient();
  
  try {
    // Example API call using a real ACCS REST API endpoint
    const response = await client.request('GET', '/V1/products');
    console.log('Products:', response);

    // Another example with a specific product SKU
    const productSku = 'example-sku';
    const productDetails = await client.request('GET', `/V1/products/${productSku}`);
    console.log('Product Details:', productDetails);
  } catch (error) {
    console.error('API call failed:', error.message);
  }
}

main();
```

## Best practices

Adobe recommends following these best practices when implementing user integration with Adobe Commerce as a Cloud Service REST APIs:

### Security

- Store all sensitive credentials and secrets in a secure environment variable system or in a dedicated secrets management service
- Never store sensitive credentials or secrets in your codebase
- Implement regular client secret rotation to minimize security risks
- Use environment variables for all configuration values to maintain flexibility across different environments
- Maintain comprehensive error logs with appropriate security context while being careful not to expose sensitive information

### Performance

- Implement token caching to reuse valid access tokens until they approach expiration, reducing unnecessary token generation requests
- Use connection pooling in your HTTP client to efficiently manage multiple concurrent requests and reduce resource overhead

### Monitoring

- Set up comprehensive logging for API response times to track performance trends and identify potential issues early
- Implement monitoring for token refresh events to detect authentication-related problems

## Python implementation

The following Python implementation provides a similar functionality to the JavaScript example above, using the `requests` library for HTTP requests and `dotenv` for environment variable management.

```python
import os
import time
import requests
from urllib.parse import urlencode
from dotenv import load_dotenv

load_dotenv()

class ACCSTokenManager:
    def __init__(self):
        self.token = None
        self.token_expiry = None
        self.client_id = os.getenv('IMS_CLIENT_ID')
        self.client_secret = os.getenv('IMS_CLIENT_SECRET')
        self.org_id = os.getenv('IMS_ORG_ID')
    
    def is_token_valid(self):
        return self.token and self.token_expiry and time.time() < self.token_expiry
    
    def get_valid_token(self):
        if self.is_token_valid():
            return self.token
        return self.generate_token()
    
    def generate_token(self):
        url = 'https://ims-na1.adobelogin.com/ims/token/v3'
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        data = {
            'client_id': self.client_id,
            'client_secret': self.client_secret,
            'grant_type': 'client_credentials',
            'scope': 'openid,AdobeID,email,profile,additional_info.roles,additional_info.projectedProductContext'
        }
        
        try:
            response = requests.post(url, headers=headers, data=urlencode(data))
            response.raise_for_status()
            
            token_data = response.json()
            self.token = token_data['access_token']
            self.token_expiry = time.time() + token_data['expires_in']
            
            return self.token
        except requests.RequestException as e:
            print(f"Token generation failed: {e}")
            raise
    
    def make_api_call(self, method, endpoint, data=None):
        access_token = self.get_valid_token()
        base_url = os.getenv('API_ENDPOINT')
        
        headers = {
            'Authorization': f'Bearer {access_token}',
            'x-api-key': self.client_id,
            'Content-Type': 'application/json'
        }
        
        try:
            response = requests.request(
                method=method,
                url=f"{base_url}{endpoint}",
                headers=headers,
                json=data
            )
            
            if response.status_code == 401:
                self.token = None  # Force token refresh on next call
            
            response.raise_for_status()
            return response.json()
            
        except requests.RequestException as e:
            print(f"API call failed: {e}")
            raise

# Usage example
token_manager = ACCSTokenManager()
products = token_manager.make_api_call('GET', '/V1/products')
print(products)
```

## Troubleshooting

If you encounter issues during the implementation of server-to-server integration, consider the following common problems and their solutions:

### 401 Unauthorized Error

- Verify your client credentials are correct.
- Check that your token hasn't expired.
- Ensure proper scopes are included in token generation.

### 403 Forbidden Error

- Verify your Organization ID is correct.
- Check that your integration has the necessary permissions.

### Token Generation Fails

- Verify your client ID and secret are valid.
- Check that your OAuth Server-to-Server credentials are properly configured.
- Ensure you're using the correct IMS endpoint.
