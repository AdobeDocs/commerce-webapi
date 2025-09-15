---
title: Upload files to Amazon S3
description: Learn how to manage file and image uploads using GraphQL mutations.
edition: saas
keywords:
  - REST
  - Integration
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

1. **Receive the create/update response**: The response from the create or update mutation includes the details of the created or updated entity.

## Add the uploaded file to an entity

Your Adobe Commerce instance must define a customer custom attribute that has an input type of `file` or `image`. Navigate to **Stores** > **Attributes** > **Customer** in the Admin and click **Add Attribute**. Your custom attribute must have the following properties:

* **Attribute Code**: A unique identifier for the attribute, such as `profile_picture`.

* **Input Type**: Set to **File (attachment)** or **Image file**.

* **Maximum File Size**: The default file size limit on S3 is 16 MB (16777216 bytes).

Once the custom attribute is created, you can use the key returned by the `finishUpload` mutation to set the value of the attribute when creating or updating a customer. For example, if the custom attribute code is `profile_picture`, you would include it in the input of the `createCustomerV2` mutation as follows:

```graphql
mutation {
  createCustomerV2(
    input: {
      email: "john.doe@example.com"
      firstname: "John"
      lastname: "Doe"
      password: "wzB43LF4svFd"
            custom_attributes: [
                {
                    attribute_code: "profile-picture"
                    value: "cat_106d42b2ee34de81db31d958.jpg"
                }
            ]
    }
  ) {
    customer {
      email
      firstname
      lastname
    }
    }
  }
```
