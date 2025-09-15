---
title: Upload files to Amazon S3
description: Learn how to manage file and image uploads using GraphQL mutations.
edition: saas
---

# Upload files to Amazon S3

Adobe Commerce as a Cloud Service (SaaS) supports file uploads through GraphQL mutations. This feature allows you to upload files such as images, documents, and other media to the server. Uploading files is a multi-step process, as shown in the following diagram:

![Upload files](../../../_images/upload-file.png)

1. **Inititiate the upload**: The shopper clicks an **Upload File** button on the storefront. The Javascript code on the page uses the [`initiateUpload` mutation](./mutations/initiate-upload.md) to start the uploard process. The mutation specifies the file name provided by the shopper. Commerce uses the AWS SDK to generate the URL to which the file will be uploaded.

1. **Receive the response**: The response from the `initiateUpload` mutation includes a presigned URL, a unique key for the file, and an expiration time for the URL. The client code extracts these values from the response.

1. **Upload the file**: The client code uses the presigned URL to upload the file directly to an Amazon S3 bucket. This is done using a standard HTTP PUT request. The file is uploaded to a temporary location in the S3 bucket.

   The following curl command demonstrates how to upload a file using the presigned URL:

   ```bash
   curl --fail --show-error --silent -X PUT --data-binary @./cat.jpg 'https://s3.amazonaws.com/na1-qa-ccsaas-instance-presigned/<tenant>/cat_106d42b2ee34de81db31d958.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=...&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=...&X-Amz-Date=...&X-Amz-SignedHeaders=host&X-Amz-Expires=...&X-Amz-Signature=...'
   ```

1. **Finalize the upload**: After the file is successfully uploaded to S3, the client code calls the [`finishUpload` mutation](./mutations/finish-upload.md) to complete the upload process. The mutation includes the unique key received from the `initiateUpload` response.

1. **Perform validation**: Commerce validates key and size (HEAD on S3 Temporary).

1. **Move the file**: Commerce performs a `CopyObject` operation to move the file from the temporary location to a permanent location in the S3 bucket.

1. **Receive the final response**: The response from the `finishUpload` mutation includes the unique key for the uploaded file. The client code extracts this key from the response.

1. **Create or update the entity**: After `finishUpload` succeeds, the client creates or updates the entity (such as a customer) using the returned hashed key as the attribute value, not a URL or full S3 path.
