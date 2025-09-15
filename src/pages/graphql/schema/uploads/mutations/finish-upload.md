---
title: finishUpload mutation
edition: saas
---


# finishUpload mutation

The `finishUpload` mutation completes the file upload process initiated by the [`initiateUpload` mutation](initiate-upload.md). The `finishUpload` mutation requires the unique key generated during the initiation step as an input parameter. This key identifies the file that was uploaded to the Amazon S3 bucket.

When you call this mutation, Commerce verifies that the file associated with the provided key has been successfully uploaded to the S3 bucket. If the upload is confirmed, Commerce finalizes the upload process and makes the file available for use within the system. The response from the `finishUpload` mutation includes the unique key for the uploaded file. This key can be used to reference the file in subsequent operations, such as associating it with a customer file.

## Syntax

```graphql
mutation {
    finishUpload(input: finishUploadInput!): finishUploadOutput
}
```

<!--
## Reference

The [`finishUpload`](https://developer.adobe.com/commerce/services/graphql/reference/saas-api/index.html#mutation-finishUpload) reference provides detailed information about the types and fields defined in this mutation.
-->

## Example usage

The following mutation finalize an upload for a file with a key value of `cat_106d42b2ee34de81db31d958.jpg`.

**Request:**

```graphql
mutation {
    finishUpload("input": {
        "key": "cat_106d42b2ee34de81db31d958.jpg",
        "media_resource_type": "CUSTOMER_ATTRIBUTE_FILE"
    }){
        success
        key
        message
    }
}
```

**Response:**

```json
{
  "data": {
    "finishUploadOutput": {
        "success": true,
        "key": "cat_106d42b2ee34de81db31d958.jpg",
        "message": "Upload completed successfully."
    }
  }
}
```
