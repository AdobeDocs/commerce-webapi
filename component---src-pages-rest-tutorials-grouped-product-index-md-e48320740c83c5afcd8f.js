"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9637],{32845:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return l}});var a=n(58168),o=n(80045),d=(n(88763),n(15680)),r=n(83407);const i=["components"],p={},s=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)});var m;const u={_frontmatter:p},c=r.A;function l(e){let{components:t}=e,n=(0,o.A)(e,i);return(0,d.mdx)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"create-and-manage-grouped-products-tutorial"},"Create and manage grouped products tutorial"),(0,d.mdx)("p",null,"A grouped product consists of simple standalone products that are presented as a group. A group can contain variations of a single product or a collection of products that are to be sold together."),(0,d.mdx)("p",null,"This tutorial describes how you can use the Adobe Commerce REST API to create and manage grouped products."),(0,d.mdx)("h3",{id:"before-you-begin"},"Before you begin"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Install a Commerce instance with sample data. The sample data defines a functional store, called Luma, that sells fitness clothing and accessories.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Install a REST client. You can use any REST client to send calls to Commerce. ",(0,d.mdx)("a",{parentName:"p",href:"https://www.getpostman.com/"},"Postman")," is recommended.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Obtain an admin authorization token. All calls in this tutorial require administrator privileges. See ",(0,d.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/prerequisite-tasks/"},"Generate the admin token")," for more information."))),(0,d.mdx)("h3",{id:"other-resources"},"Other resources"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/commerce-webapi/rest/tutorials/index/"},"REST Tutorials")," provides additional information about completing any Commerce REST tutorial.")),(0,d.mdx)("h2",{id:"1-create-an-empty-grouped-product"},"1. Create an empty grouped product"),(0,d.mdx)("p",null,"The first step is to create the grouped product container. In the next step, we'll add individual products to the grouped product."),(0,d.mdx)("h3",{id:"endpoint"},"Endpoint"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST V1/products")),(0,d.mdx)("h3",{id:"payload"},"Payload"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"attribute_set_id: 11")," line corresponds to gear. The value of ",(0,d.mdx)("inlineCode",{parentName:"p"},"4")," for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"visibility")," attribute indicates the product will be displayed on the storefront and can be searched."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'    {\n       "product":{\n          "sku":"new-grouped",\n          "name":"New Grouped Product",\n          "attribute_set_id":11,\n          "type_id":"grouped",\n          "visibility":4\n       }\n    }\n')),(0,d.mdx)("h3",{id:"response"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 2053,\n    "sku": "new-grouped",\n    "name": "New Grouped Product",\n    "attribute_set_id": 11,\n    "status": 1,\n    "visibility": 4,\n    "type_id": "grouped",\n    "created_at": "2019-08-15 17:51:13",\n    "updated_at": "2019-08-15 17:51:13",\n    "extension_attributes": {\n        "website_ids": [\n            1\n        ],\n        "stock_item": {\n            "item_id": 2053,\n            "product_id": 2053,\n            "stock_id": 1,\n            "qty": 0,\n            "is_in_stock": false,\n            "is_qty_decimal": false,\n            "show_default_notification_message": false,\n            "use_config_min_qty": true,\n            "min_qty": 0,\n            "use_config_min_sale_qty": 1,\n            "min_sale_qty": 1,\n            "use_config_max_sale_qty": true,\n            "max_sale_qty": 10000,\n            "use_config_backorders": true,\n            "backorders": 0,\n            "use_config_notify_stock_qty": true,\n            "notify_stock_qty": 1,\n            "use_config_qty_increments": true,\n            "qty_increments": 0,\n            "use_config_enable_qty_inc": true,\n            "enable_qty_increments": false,\n            "use_config_manage_stock": true,\n            "manage_stock": true,\n            "low_stock_date": null,\n            "is_decimal_divided": false,\n            "stock_status_changed_auto": 0\n        }\n    },\n    "product_links": [],\n    "options": [],\n    "media_gallery_entries": [],\n    "tier_prices": [],\n    "custom_attributes": [\n        {\n            "attribute_code": "options_container",\n            "value": "container2"\n        },\n        {\n            "attribute_code": "url_key",\n            "value": "new-grouped-product"\n        },\n        {\n            "attribute_code": "required_options",\n            "value": "0"\n        },\n        {\n            "attribute_code": "has_options",\n            "value": "0"\n        },\n        {\n            "attribute_code": "category_ids",\n            "value": []\n        }\n    ]\n}\n')),(0,d.mdx)("h2",{id:"2-populate-the-grouped-product-with-simple-products"},"2. Populate the grouped product with simple products"),(0,d.mdx)("p",null,"Now that we have created a grouped product, we need to add simple items to it. In this example, we add three types of backpacks."),(0,d.mdx)("h3",{id:"endpoint-1"},"Endpoint"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST V1/products/new-grouped/links")),(0,d.mdx)("h3",{id:"payload-1"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'    {\n       "items":[\n          {\n             "sku":"new-grouped",\n             "link_type":"associated",\n             "linked_product_sku":"24-WB01",\n             "linked_product_type":"simple",\n             "position":1,\n             "extension_attributes":{\n                "qty":1\n             }\n          },\n          {\n             "sku":"new-grouped",\n             "link_type":"associated",\n             "linked_product_sku":"24-WB02",\n             "linked_product_type":"simple",\n             "position":2,\n             "extension_attributes":{\n                "qty":1\n             }\n          },\n          {\n             "sku":"new-grouped",\n             "link_type":"associated",\n             "linked_product_sku":"24-WB05",\n             "linked_product_type":"simple",\n             "position":3,\n             "extension_attributes":{\n                "qty":1\n             }\n          }\n       ]\n    }\n')),(0,d.mdx)("h3",{id:"response-1"},"Response"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"true")),(0,d.mdx)("h2",{id:"3-add-another-simple-product-to-the-grouped-product"},"3. Add another simple product to the grouped product"),(0,d.mdx)("p",null,"This step uses the ",(0,d.mdx)("inlineCode",{parentName:"p"},"PUT /V1/products/new-grouped/links")," endpoint to add an item to the grouped product."),(0,d.mdx)("h3",{id:"endpoint-2"},"Endpoint"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"PUT /V1/products/new-grouped/links")),(0,d.mdx)("h3",{id:"payload-2"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'    {\n       "entity":{\n          "sku":"new-grouped",\n          "link_type":"associated",\n          "linked_product_sku":"24-UG01",\n          "linked_product_type":"simple",\n          "position":4,\n          "extension_attributes":{\n             "qty":1\n          }\n       }\n    }\n')),(0,d.mdx)("h3",{id:"response-2"},"Response"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"true")),(0,d.mdx)(s,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"You also can use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"DELETE")," endpoint to delete a simple product from the group product:\n",(0,d.mdx)("inlineCode",{parentName:"p"},"DELETE /V1/products/{sku}/links/{type}/{linkedProductSku}")),(0,d.mdx)("h2",{id:"verify-the-steps"},"Verify the steps"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Log into the Admin.")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Select ",(0,d.mdx)("strong",{parentName:"p"},"Catalog > Products"),".")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Click on the ",(0,d.mdx)("strong",{parentName:"p"},"New Grouped Product")," grouped product and expand the ",(0,d.mdx)("strong",{parentName:"p"},"Grouped Products")," section."),(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1043px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/14afb9bf33df0bcdce36421caef1a851/5530d/new-grouped-product.webp 320w","/commerce-webapi/static/14afb9bf33df0bcdce36421caef1a851/0c8fb/new-grouped-product.webp 640w","/commerce-webapi/static/14afb9bf33df0bcdce36421caef1a851/39914/new-grouped-product.webp 1043w"],sizes:"(max-width: 1043px) 100vw, 1043px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/14afb9bf33df0bcdce36421caef1a851/dd4a7/new-grouped-product.png 320w","/commerce-webapi/static/14afb9bf33df0bcdce36421caef1a851/0f09e/new-grouped-product.png 640w","/commerce-webapi/static/14afb9bf33df0bcdce36421caef1a851/0b8c0/new-grouped-product.png 1043w"],sizes:"(max-width: 1043px) 100vw, 1043px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/14afb9bf33df0bcdce36421caef1a851/0b8c0/new-grouped-product.png",alt:"New grouped product",title:"New grouped product",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,d.mdx)("h2",{id:"add-a-grouped-product-to-a-cart"},"Add a grouped product to a cart"),(0,d.mdx)("p",null,"Customers can now add this grouped products to their carts, as shown below."),(0,d.mdx)("p",null,"Refer to the ",(0,d.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/orders/"},"Order processing tutorial")," for more information about how to add items to a cart with REST."),(0,d.mdx)("h3",{id:"endpoint-3"},"Endpoint"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST /V1/carts/mine/items")),(0,d.mdx)("h3",{id:"payload-3"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "cartItem": {\n   "sku": "new-grouped",\n   "qty": 1,\n   "quote_id": "3"\n   }\n}\n')),(0,d.mdx)("h3",{id:"response-3"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "item_id": 5,\n   "sku": "24-WB01",\n   "qty": 1,\n   "name": "Voyage Yoga Bag",\n   "price": 32,\n   "product_type": "grouped",\n   "quote_id": "3"\n}\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-grouped-product-index-md-e48320740c83c5afcd8f.js.map