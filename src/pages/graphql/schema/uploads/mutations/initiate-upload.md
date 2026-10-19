---
title: initiateUpload mutation
description: The initiateUpload mutation starts the file upload process by generating a presigned URL for uploading a file to an Amazon S3 bucket. This mutation require...
keywords:
  - REST
  - Integration
---

<Fragment src="../../../../includes/saas-only.md"/>

# initiateUpload mutation

The `initiateUpload` mutation starts the file upload process by generating a presigned URL for uploading a file to an Amazon S3 bucket. This mutation requires the file name (`key`) and media resource type (`media_resource_type`) as input parameters. The `key` value cannot contain slashes. The following media resource types are supported:

* `CUSTOMER_ATTRIBUTE_ADDRESS_FILE`
* `CUSTOMER_ATTRIBUTE_ADDRESS_IMAGE`
* `CUSTOMER_ATTRIBUTE_FILE`
* `CUSTOMER_ATTRIBUTE_IMAGE`
* `NEGOTIABLE_QUOTE_ATTACHMENT`
* `RMA_ATTRIBUTE_FILE`
* `RMA_ATTRIBUTE_IMAGE`

You can also supply an optional `checksum_sha256` value so that Amazon S3 validates the integrity of the uploaded file. See [Checksum validation](#checksum-validation).

When you call this mutation, Commerce uses the AWS SDK to create a presigned URL that allows the client to upload the file directly to a temporary location in the S3 bucket. The presigned URL is valid for a limited time, specified by the `expires_at` field in the response.

The response includes the presigned URL, a unique key for the file, and an expiration time for the URL. The `key` is a hashed value that uniquely identifies the file in the S3 bucket. The client uses the presigned URL to upload the file using a standard HTTP PUT request.

Use the `upload_url` from the response to PUT the file directly to S3. See [Upload files to Amazon S3](../index.md) for an example curl.

After the file is successfully uploaded, use the [`finishUpload` mutation](finish-upload.md) to complete the upload process.

## Checksum validation

To confirm that the file Amazon S3 receives matches the file the client sent, include the optional `checksum_sha256` field in the `initiateUpload` input. Checksum validation is opt-in. If you omit the field, the upload process does not change.

The `checksum_sha256` value must be the Base64-encoded raw 32-byte SHA-256 digest of the file. Do not use the hexadecimal digest that most checksum tools display by default. The client must compute the value from the file before it calls the mutation. For example:

```bash
openssl dgst -sha256 -binary example.png | base64
```

When you supply a checksum, the upload process changes as follows:

* Commerce signs the checksum into the presigned URL. If the value is not a valid Base64-encoded SHA-256 digest, the mutation returns the error `Invalid checksum value. Expected a base64-encoded SHA-256 digest.`
* The client must send the same value in the `x-amz-checksum-sha256` header of the PUT request to the `upload_url`.
* Amazon S3 rejects the upload if the bytes it receives do not match the checksum. The file is not stored.

The `finishUpload` mutation does not revalidate the checksum. It performs the same validation as it does for an upload without a checksum.

## reCAPTCHA validation

You can call the `initiateUpload` for many reasons, for example to attach an image to a return. To limit automated upload requests, merchants can require Google reCAPTCHA validation on this mutation. This setting is disabled by default. To enable it, set [**Enable for Presigned Upload**](https://experienceleague.adobe.com/en/docs/commerce-admin/config/security/google-recaptcha-storefront) in **Stores** > **Configuration** > **Security** > **Google reCAPTCHA Storefront** > **Storefront**.

When working with guest shoppers, call the `initiateUpload` mutation without a customer token.

When the setting is enabled, each `initiateUpload` request must include a valid reCAPTCHA token in the `X-ReCaptcha` HTTP header:

```text
X-ReCaptcha: <reCAPTCHA-token>
```

If the token is missing or invalid, the request fails and Commerce does not issue a presigned URL. The `finishUpload` mutation does not require a reCAPTCHA token because it can only complete an upload that `initiateUpload` started.

For more information about reCAPTCHA headers, see [Protected mutations](../../../usage/protected-mutations.md).

## Syntax

```graphql
mutation {
    initiateUpload(input: initiateUploadInput!): initiateUploadOutput
}
```

## Reference

The [`initiateUpload`](/reference/graphql/saas/mutations.md#initiateupload) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following examples show how to initiate uploads for different types of files and how to supply a checksum.

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
    "initiateUpload": {
        "upload_url": "https://<bucket>.s3.<region>.amazonaws.com/<tenant-id>/example_106d42b2ee34de81db31d958.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=<value>...",
        "key": "example_106d42b2ee34de81db31d958.png",
        "expires_at": "1789433073"
    }
  }
}
```

### Initiate an upload with a checksum

The following mutation initiates an upload for a file named `example.png` and supplies the Base64-encoded SHA-256 digest of the file.

**Request:**

```graphql
mutation {
  initiateUpload(input: {
    key: "example.png",
    media_resource_type: CUSTOMER_ATTRIBUTE_FILE,
    checksum_sha256: "UNhY4JhezH9gQYqvDMWrWH9CwlcKiECVqejMrND2VFw="
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
      "upload_url": "https://<bucket>.s3.<region>.amazonaws.com/<tenant-id>/example_5f2b1c9e8a7d6e4f3c2b1a09.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=<value>...",
      "key": "example_5f2b1c9e8a7d6e4f3c2b1a09.png",
      "expires_at": "1789433073"
    }
  }
}
```

When you upload the file, send the same checksum in the `x-amz-checksum-sha256` header:

```bash
curl --fail --show-error --silent -X PUT \
  --header 'x-amz-checksum-sha256: UNhY4JhezH9gQYqvDMWrWH9CwlcKiECVqejMrND2VFw=' \
  --data-binary @./example.png \
  '<upload_url>'
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

### Initiate an upload for a return item image attribute

Use the `RMA_ATTRIBUTE_IMAGE` and `RMA_ATTRIBUTE_FILE` resource types to attach an image or a file to a return request. Commerce stores these uploads under the `rma_item/` media path.

The following mutation initiates an upload for an image named `damage.png`.

**Request:**

```graphql
mutation {
  initiateUpload(input: {
    key: "damage.png",
    media_resource_type: RMA_ATTRIBUTE_IMAGE
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
      "upload_url": "https://example.com/<temp-location>?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=<value>...",
      "key": "damage_32cb1fe50dab390be841461e.png",
      "expires_at": "1757440423"
    }
  }
}
```

After you call the [`finishUpload` mutation](finish-upload.md) with the same key, assign the key to a return item custom attribute in the [`requestReturn` mutation](../../orders/mutations/request-return.md#request-a-return-with-an-image-attachment).
