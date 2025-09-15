---
title: initiateUpload mutation
edition: saas
---


# initiateUpload mutation

The `initiateUpload` mutation starts the file upload process by generating a presigned URL for uploading a file to an Amazon S3 bucket. This mutation requires the file name (`key`) and media resource type (`media_resource_type`) as input parameters. The `key` value cannot contain slashes. Currently, the only supported media resource types are `CUSTOMER_ATTRIBUTE_FILE` and `CUSTOMER_ATTRIBUTE_IMAGE`.

When you call this mutation, Commerce uses the AWS SDK to create a presigned URL that allows the client to upload the file directly to a temporary location in the S3 bucket. The presigned URL is valid for a limited time, specified by the `expires_at` field in the response.

The response includes the presigned URL, a unique key for the file, and an expiration time for the URL. The `key` is a hashed value that uniquely identifies the file in the S3 bucket. The client uses the presigned URL to upload the file using a standard HTTP PUT request.

You must make a REST call to the S3 server that includes the `upload_url` and `key` values from the response to upload the file. See [Upload files to Amazon S3](../index.md) for details about the call.

After the file is successfully uploaded, use the [`finishUpload` mutation](finish-upload.md) to complete the upload process.

## Syntax

```graphql
mutation {
    initiateUpload(input: initiateUploadInput!): initiateUploadOutput
}
```

<!--
## Reference

The [`initiateUpload`](https://developer.adobe.com/commerce/services/graphql/reference/saas-api/index.html#mutation-initiateUpload) reference provides detailed information about the types and fields defined in this mutation.
-->

## Example usage

The following mutation initiates an upload for a file named `example.png`.

**Request:**

```graphql
mutation {
    initiateUpload("input": {
        "key": "example.jpg",
        "media_resource_type": "CUSTOMER_ATTRIBUTE_FILE"
    }){
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
    "initiateUploadOutput": {
        "upload_url": "https://<bucket>.s3.<region>.amazonaws.com/<temp-location>?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=...",
        "key": "customer/attribute/<hashed-key>",
        "expires_at": "2024-09-30T12:34:56Z
    }
  }
}
```
