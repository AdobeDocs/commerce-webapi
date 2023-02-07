---
title: Delete an image 
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/
description: We will learn how to delete an existing image 
--- 

# Delete an image

We will delete an image with **id=695**. You can see image IDs by using a list API call - see a previous [step](https://developer.adobe.com/commerce/webapi/rest/tutorials/image/list/).

**Endpoint:**

```html
DELETE http://domain.com/rest/default/V1/products/MJ03/media/695
```

The payload is empty.

**Response:**

```json
true
```

## Verify this step

Open `MJ03` on the frontend and notice the image has been deleted.

![Deleted Image](../../../_images/delete-image-frontend.png).
