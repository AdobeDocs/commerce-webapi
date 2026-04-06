---
title: Manage product images at the store view level
description: Learn how to use the Adobe Commerce REST API to preserve, override, and restore product image gallery settings per store view in a multi-store setup.
keywords:
  - REST
---

# Manage product images at the store view level

This page explains how product image gallery inheritance works in a multi-store Adobe Commerce setup and how to control it using the REST API. These behaviours only apply when your installation has multiple store views. In a single-store setup, all requests target the global scope and inheritance does not apply.

If you are new to the product media API, complete the [Add and manage product images tutorial](/rest/tutorials/image/) first.

## Before you begin

*  An Adobe Commerce instance with at least two store views configured. The examples use `default` and a second store view. See [Add a store view](https://experienceleague.adobe.com/docs/commerce-admin/stores-sales/site-store/store-views.html) in the Admin documentation.

*  A product with images in all store views, where images currently use the default value (the **Use Default Value** checkbox is enabled in Admin) in each store view.

*  An admin access token. See [Generate an admin token](../../../get-started/authentication/gs-authentication-token.md).

*  A REST client, such as Postman.

## Preserve images during a product update

When you update a product at the store view level, you can control whether the request affects the product's media gallery.

### Omit media_gallery_entries

If the `media_gallery_entries` field is not present in the payload, no changes are made to the product images in that scope. All store views continue to use the default value.

**Endpoint:**

```html
POST http://domain.com/rest/default/V1/products
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "product": {
    "sku": "MJ03",
    "name": "product name override in default store view"
  }
}
```

#### Response

```json
{
  "sku": "MJ03",
  "name": "product name override in default store view",
  "media_gallery_entries": [
    {
      "id": 709,
      "media_type": "image",
      "label": "",
      "position": 1,
      "disabled": false,
      "types": [
        "image",
        "small_image",
        "thumbnail"
      ],
      "file": "\/m\/j\/mj03-black_main_12.jpg"
    },
    {
      "id": 710,
      "media_type": "image",
      "label": "",
      "position": 2,
      "disabled": false,
      "types": [],
      "file": "\/m\/j\/mj03-black_alt1_12.jpg"
    },
    {
      "id": 711,
      "media_type": "image",
      "label": "",
      "position": 3,
      "disabled": false,
      "types": [],
      "file": "\/m\/j\/mj03-black_back_12.jpg"
    }
  ]
}
```

After this call, images in each store view continue to use the **Use Default Value** setting.

### Set media_gallery_entries to null

Explicitly setting `media_gallery_entries` to `null` has the same effect as omitting the field — the product's existing media gallery is left unchanged.

**Endpoint:**

```html
POST http://domain.com/rest/default/V1/products
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "product": {
    "sku": "MJ03",
    "name": "product name override in default store view",
    "media_gallery_entries": null
  }
}
```

#### Response

```json
{
  "sku": "MJ03",
  "name": "product name override in default store view",
  "media_gallery_entries": [
    {
      "id": 709,
      "media_type": "image",
      "label": "",
      "position": 1,
      "disabled": false,
      "types": [
        "image",
        "small_image",
        "thumbnail"
      ],
      "file": "\/m\/j\/mj03-black_main_12.jpg"
    },
    {
      "id": 710,
      "media_type": "image",
      "label": "",
      "position": 2,
      "disabled": false,
      "types": [],
      "file": "\/m\/j\/mj03-black_alt1_12.jpg"
    },
    {
      "id": 711,
      "media_type": "image",
      "label": "",
      "position": 3,
      "disabled": false,
      "types": [],
      "file": "\/m\/j\/mj03-black_back_12.jpg"
    }
  ]
}
```

<InlineAlert variant="info" slots="text"/>

Setting `media_gallery_entries` to `null` and omitting the field are equivalent. Neither modifies the images currently configured for any store view.

<InlineAlert variant="warning" slots="text"/>

Setting `media_gallery_entries` to an empty array `[]` is **not** the same as `null`. An empty array is treated as an explicit instruction to remove all gallery entries from all store views. Always use `null` or omit the field when you do not intend to modify images.

## Override store view image fields

When you retrieve a product and POST it back with the `media_gallery_entries` array populated, the store view fields are explicitly set — overriding any inherited values.

**Step 1.** Retrieve the full product data from the store view you want to update.

**Endpoint:**

```html
GET http://domain.com/rest/default/V1/products/MJ03
```

**Step 2.** Use the `media_gallery_entries` from the GET response in an update call.

**Endpoint:**

```html
POST http://domain.com/rest/default/V1/products
```

After this call:

*  In the **default store view**: image sort order, label, visibility, and roles are no longer using the default value (**Use Default Value** is unchecked).

*  In the **second store view**: image fields continue to use the default value (unaffected).

## Restore inheritance by setting fields to null

Setting individual image fields to `null` restores the **Use Default Value** state for those fields — equivalent to re-enabling the **Use Default Value** checkbox in the Admin product editor.

The following fields support `null` to restore inheritance:

| Field | Effect of `null` |
|---|---|
| `label` | Reverts to the global alt text |
| `position` | Reverts to the global display order |
| `disabled` | Reverts to the global visibility setting |
| `extension_attributes.video_content.video_title` | Reverts to the global video title (video entries only) |
| `extension_attributes.video_content.video_description` | Reverts to the global video description (video entries only) |

**Endpoint:**

```html
POST http://domain.com/rest/default/V1/products
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "product": {
    "sku": "MJ03",
    "media_gallery_entries": [
      {
        "id": 709,
        "media_type": "image",
        "label": null,
        "position": null,
        "disabled": null,
        "types": [
          "image",
          "small_image",
          "thumbnail"
        ],
        "file": "\/m\/j\/mj03-black_main_12.jpg"
      },
      {
        "id": 710,
        "media_type": "image",
        "label": null,
        "position": null,
        "disabled": null,
        "types": [],
        "file": "\/m\/j\/mj03-black_alt1_12.jpg"
      },
      {
        "id": 711,
        "media_type": "image",
        "label": null,
        "position": null,
        "disabled": null,
        "types": [],
        "file": "\/m\/j\/mj03-black_back_12.jpg"
      }
    ]
  }
}
```

#### Response

```json
{
  "sku": "MJ03",
  "name": "product name override in default store view",
  "media_gallery_entries": [
    {
      "id": 709,
      "media_type": "image",
      "label": "",
      "position": 1,
      "disabled": false,
      "types": [
        "image",
        "small_image",
        "thumbnail"
      ],
      "file": "\/m\/j\/mj03-black_main_12.jpg"
    },
    {
      "id": 710,
      "media_type": "image",
      "label": "",
      "position": 2,
      "disabled": false,
      "types": [],
      "file": "\/m\/j\/mj03-black_alt1_12.jpg"
    },
    {
      "id": 711,
      "media_type": "image",
      "label": "",
      "position": 3,
      "disabled": false,
      "types": [],
      "file": "\/m\/j\/mj03-black_back_12.jpg"
    }
  ]
}
```

After this call, the **Use Default Value** checkbox is re-enabled for all specified fields in each store view.

## Add a new image at the store view level

When you add a new image using the media endpoint, it becomes visible in all store views.

**Endpoint:**

```html
POST http://domain.com/rest/default/V1/products/MJ03/media
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "entry": {
    "media_type": "image",
    "label": "New image label",
    "position": 4,
    "disabled": false,
    "content": {
      "base64_encoded_data": "<base64-encoded-image-data>",
      "type": "image/png",
      "name": "new-image.png"
    },
    "types": []
  }
}
```

#### Response

```json
3434
```

The response returns the new image `id`.

After this call:

*  The new image is visible in all store views.

*  In the **default store view**: Images sort order is no longer using the default value. The new image's `label` and `disabled` are not inheriting.

*  In the **second store view**: all image fields continue to use the default value.

## Update a media entry at the store view level

To update a specific image, first retrieve its current data, then send an update.

**Step 1.** Retrieve the image entry.

**Endpoint:**

```html
GET http://domain.com/rest/default/V1/products/MJ03/media/3434
```

**Step 2.** Update the entry with the modified fields.

**Endpoint:**

```html
PUT http://domain.com/rest/default/V1/products/MJ03/media/3434
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "entry": {
    "id": 3434,
    "media_type": "image",
    "label": "Updated label for default store view",
    "position": 4,
    "disabled": false,
    "types": [],
    "file": "\/n\/e\/new-image.png"
  }
}
```

#### Response

```json
true
```

After this call:

*  The image is updated in the **default store view**.
*  In the **default store view**: Images sort order continues to not use the default value.
*  The **second store view** continues to use the default value (unaffected).

## Delete a media entry

Deleting an image entry removes it from the product across all store views.

**Endpoint:**

```html
DELETE http://domain.com/rest/default/V1/products/MJ03/media/3434
```

**Response:**

```json
true
```

After this call:

*  The image is deleted from **all store views**
*  In the **default store view**: Existing images sort order will go back to using default value.
*  The **second store view** continues to use the default value (unaffected).

## Related resources

*  [Add and manage product images tutorial](/rest/tutorials/image/)

*  [Step 2. Add a new image](new.md)

*  [Step 3. Update an image](update.md)
