---
title: initiateUpload mutation
edition: saas
keywords:
  - REST
  - Integration
---

# initiateUpload mutation

The `initiateUpload` mutation starts the file upload process by generating a presigned URL for uploading a file to an Amazon S3 bucket. This mutation requires the file name (`key`) and media resource type (`media_resource_type`) as input parameters. The `key` value cannot contain slashes. The following media resource types are supported:

* `CUSTOMER_ATTRIBUTE_ADDRESS_FILE`
* `CUSTOMER_ATTRIBUTE_ADDRESS_IMAGE`
* `CUSTOMER_ATTRIBUTE_FILE`
* `CUSTOMER_ATTRIBUTE_IMAGE`
* `NEGOTIABLE_QUOTE_ATTACHMENT`

When you call this mutation, Commerce uses the AWS SDK to create a presigned URL that allows the client to upload the file directly to a temporary location in the S3 bucket. The presigned URL is valid for a limited time, specified by the `expires_at` field in the response.

The response includes the presigned URL, a unique key for the file, and an expiration time for the URL. The `key` is a hashed value that uniquely identifies the file in the S3 bucket. The client uses the presigned URL to upload the file using a standard HTTP PUT request.

Use the `upload_url` from the response to PUT the file directly to S3. See [Upload files to Amazon S3](../index.md) for an example curl.

After the file is successfully uploaded, use the [`finishUpload` mutation](finish-upload.md) to complete the upload process.

## Syntax

```graphql
mutation {
    initiateUpload(input: initiateUploadInput!): initiateUploadOutput
}
```

<!--
## Reference

The [`initiateUpload`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-initiateUpload) reference provides detailed information about the types and fields defined in this mutation.
-->

## Example usage

The following examples show how to initiate an upload different types of files.

### Initiate an upload for a customer attribute file

The following mutation initiates an upload for a file named `example.png`.

**Request:**

```graphql
mutation Initiate($input: initiateUploadInput!) {
  initiateUpload(input: $input) {
    upload_url
    key
    expires_at
  }
}
```

The `$input` variable contains:

```json
{
  "input": {
    "key": "example.png",
    "media_resource_type": "CUSTOMER_ATTRIBUTE_FILE"
  }
}
```

**Response:**

```json
{
  "data": {
    "initiateUploadOutput": {
        "upload_url": "https://<bucket>.s3.<region>.amazonaws.com/<temp-location>?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=<value>...",
        "key": "customer/attribute/<hashed-key>",
        "expires_at": "2024-09-30T12:34:56Z"
    }
  }
}
```

### Initiate an upload for a negotiable quote attachment

The following mutation initiates an upload for a file named `test-document1.txt`.

**Request:**

```graphql
mutation {
  initiateUpload(input: {
    key: "test-document1.txt",
    media_resource_type: NEGOTIABLE_QUOTE_ATTACHMENT
  }) {
    upload_url
    key
    expires_at
  }
}
```

**Response:**

```json
{
  "data": {
    "initiateUpload": {
      "upload_url": "http://s3mock:9000/bucket1-presigned/tenant1/test-document1_32cb1fe50dab390be841461e.txt?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIOSFODNN7EXAMPLE%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T160343Z&X-Amz-SignedHeaders=host&X-Amz-Expires=6600&X-Amz-Signature=5bc33cbdb2c93680a64dd9ef49d62ef34250faaafae1c6b0c17ac493f65b112d",
      "key": "test-document1_32cb1fe50dab390be841461e.txt",
      "expires_at": "1757440423"
    }
  }
}
```
