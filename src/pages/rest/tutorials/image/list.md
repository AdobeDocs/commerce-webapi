---
title: Getting a list of product images 
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/
description: We will learn how to get a list of all product images.
--- 

# Getting a list of product images

We will get all image information for product with SKU `MJ03`.

**Endpoint:**

```html
GET http://domain.com/rest/default/V1/products/MJ03/media
```

**Response:**

```json
[
    {
        "id": 694,
        "media_type": "image",
        "label": "",
        "position": 1,
        "disabled": false,
        "types": [
            "image",
            "small_image",
            "thumbnail"
        ],
        "file": "/m/j/mj03-black_main_1.jpg"
    },
    {
        "id": 695,
        "media_type": "image",
        "label": "",
        "position": 2,
        "disabled": false,
        "types": [],
        "file": "/m/j/mj03-black_alt1_1.jpg"
    },
    {
        "id": 696,
        "media_type": "image",
        "label": "",
        "position": 3,
        "disabled": false,
        "types": [],
        "file": "/m/j/mj03-black_back_1.jpg"
    }
]
```

We will use image **id** for later steps.

## Verify this step

1. On the frontend page, search for `MJ03` and open up the product.
    ![Product](../../../_images/list-product-images.png)
2. There should be three images.
