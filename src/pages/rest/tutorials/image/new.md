---
title: Add a new image 
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/
description: We will learn how to add a new image to a product 
--- 

# Add a new image

In this step, we will add the following image to the product with SKU `MJ03`.

![New Image](../../../_images/api-new-image.png)

Firstly, we need to convert a new image into a **base64-encoded** string.

We will use _base64_ command line utility available on most Linux distributions.

```bash
base64 -i ~/Desktop/new-image.png
iVBORw0KGgoAAAANSUhEUgAAAc4AAAFmCAYAAADkqXozAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU8kax+fem16AkBABKaE3QToBpITQQpcONkISIJQQA0HFriwu4FpQEcGKLooouBZA1oootkWxANYNsqgo62LBhsq7wCG4+85777zvnDnzu//7zTffzJm557sAUNX4UmkmrAZAliRXFhngw4pPSGThnwIyIAIacAYIX5Aj5UREhADUJvq/2/tOAI32t61HY/37+/9qNKEoRwAAFIFysjBHkIXycbS9EEhluQAgu1HdaEGudJRbUWbI0ARR7h7l1HEeGOXkMcaAMZ/oSC7KDAAIFD5flgoAhYXqrDxBKhqH4o2yrUQolqAsRdkzKytbiPIRlM1RH1SjjMZnJ38XJ/VvMZOVMfn8VCWPr2XMCL7iHGkmf9H/uR3/27Iy5RNzmKKNkiYLjER7dXTPujOyg5UsSQ4Ln2CxcMx/jNPkgTETLMjhJk6wkO8brBybGRYywSlif54yTi4veoJFOX5REyzLjlTOlSLjciaYL5ucV54Ro9TTRDxl/Py06LgJzhPHhk1wTkZU8KQPV6nL5JHK/EWSAJ/Jef2Va8/K+W69Yp5y..........[more characters]
```

Then we will take that **base64-encoded** string and use it in an API call.

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
            "base64_encoded_data": "iVBORw0KGgoAAAANSUhEUgAAAc4AAAFmCAYAAADkqXozAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU8kax+fem16AkBABKaE3QToBpITQQpcONkISIJQQA0HFriwu4FpQEcGKLooouBZA1oootkWxANYNsqgo62LBhsq7wCG4+85777zvnDnzu//7zTffzJm557sAUNX4UmkmrAZAliRXFhngw4pPSGThnwIyIAIacAYIX5Aj5UREhADUJvq/2/tOAI32t61HY/37+/9qNKEoRwAAFIFysjBHkIXycbS9EEhluQAgu1HdaEGudJRbUWbI0ARR7h7l1HEeGOXkMcaAMZ/oSC7KDAAIFD5flgoAhYXqrDxBKhqH4o2yrUQolqAsRdkzKytbiPIRlM1RH1SjjMZnJ38XJ/VvMZOVMfn8VCWPr2XMCL7iHGkmf9H/uR3/27Iy5RNzmKKNkiYLjER7dXTPujOyg5UsSQ4Ln2CxcMx/jNPkgTETLMjhJk6wkO8brBybGRYywSlif54yTi4veoJFOX5REyzLjlTOlSLjciaYL5ucV54Ro9TTRDxl/Py06LgJzhPHhk1wTkZU8KQPV6nL5JHK/EWSAJ/Jef2Va8/K+W69Yp5y..........[more characters]",
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

What we got in response is a new image **id** .

## Verify this step

Open `MJ03` product and notice a new image was added.

![New Product Image](../../../_images/api-frontend-new-image.png)
