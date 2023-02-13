---
title: Step 2. Add a new image 
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/
description: We will learn how to add a new image to a product.
--- 

# Step 2. Add a new image

In this step, we will add the following image to the product with SKU `MJ03`.

![New Image](../../../_images/api-new-image.png)

We need to convert this image into a `base64` string.

1. Open a bash terminal and use the `base64` command to convert the image into `base64`.

    Command:

    ```bash
    base64 -i ~/Desktop/new-image.png
    ```

    Response:

    ```bash
    iVBORw0KGgoAAAANSUhEUgAAAc4AAAFmCAYAAADkqXozAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU8kax+fem16AkBABKaE3QToBpITQQpcONkISIJQQA0HFriwu4FpQEcGKLooouBZA1oootkWxANYNsqgo62LBhsq7wCG4+85777zvnDnzu//7zTffzJm557sAUNX4UmkmrAZAliRXFhngw4pPSGThnwIyIAIacAYIX5Aj5UREhADUJvq/2/tOAI32t61HY/37+/9qNKEoRwAAFIFysjBHkIXycbS9EEhluQAgu1HdaEGudJRbUWbI0ARR7h7l1HEeGOXkMcaAMZ/oSC7KDAAIFD5flgoAhYXqrDxBKhqH4o2yrUQolqAsRdkzKytbiPIRlM1RH1SjjMZnJ38XJ/VvMZOVMfn8VCWPr2XMCL7iHGkmf9H/uR3/27Iy5RNzmKKNkiYLjER7dXTPujOyg5UsSQ4Ln2CxcMx/jNPkgTETLMjhJk6wkO8brBybGRYywSlif54yTi4veoJFOX5REyzLjlTOlSLjciaYL5ucV54Ro9TTRDxl/Py06LgJzhPHhk1wTkZU8KQPV6nL5JHK/EWSAJ/Jef2Va8/K+W69Yp5y..........[more characters]
    ```

1. Copy the `base64` string and use it in the following API call.

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
        "label": "Custom Image Number 1",
        "position": 1,
        "disabled": false,
        "types": [],
        "content": {
            "base64_encoded_data": "iVBORw0KGgoAAAANSUhEUgAAAc4AAAFmCAYAAADkqXozAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU8kax+fem16AkBABKaE3QToBpITQQpcONkISIJQQA0HFriwu4FpQEcGKLooouBZA1oootkWxANYNsqgo62LBhsq7wCG4+85..........[more characters]",
            "type": "image/png",
            "name": "custom_image_1.png"
        }
    }
}
```

#### Response

```json
"3418"
```

The request might take 30 seconds or so depending on the host.

The response provides the new image `id` for the added image.

## Verify this step

Refresh the `MJ03` product page and see if your new image was added.

![New Product Image](../../../_images/api-frontend-new-image.png)
