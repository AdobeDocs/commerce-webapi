The following query returns the presigned URL of any file or image that a customer [uploaded to Amazon S3](../../uploads/index.md).

**Request:**

```graphql
{
  customer {
    custom_attributes {
      code
      ... on AttributeFile {
        url
        value
      }
      ... on AttributeImage {
        url
        value
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "firstname": "John",
      "lastname": "Doe",
      "custom_attributes": [
        {
          "code": "profile_picture",
          "url": "https://your-bucket.s3.amazonaws.com/path/to/file.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=..."
        }
      ]
    }
  }
}
```
