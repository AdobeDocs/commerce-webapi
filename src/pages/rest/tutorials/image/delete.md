---
title: Step 4. Delete an image 
description: We will learn how to delete an existing image.
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/
keywords:
  - REST
--- 

# Step 4. Delete an image

In this step, we will delete an image from a SKU. In this example, we'll use the image `id` of `695`. Use the [list API call](../image/list.md) to see image IDs for your SKU.

Run the following command to delete an image from the specified SKU:

**Endpoint:**

```html
DELETE http://domain.com/rest/default/V1/products/MJ03/media/695
```

The payload must be empty.

**Response:**

```json
true
```

The request might take 30 seconds or so depending on the host.

## Verify this step

Refresh the `MJ03` product page and see if your image was deleted.

![Deleted Image](../../../_images/delete-image-frontend.png).

You can re-run this call to verify that the image can no longer be found. You should receive the following message: `No image with the provided ID was found. Verify the ID and try again`.
