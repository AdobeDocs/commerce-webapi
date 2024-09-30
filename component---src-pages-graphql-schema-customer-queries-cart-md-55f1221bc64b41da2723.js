"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2841],{66791:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return c}});var r=t(58168),a=t(80045),o=(t(88763),t(15680)),m=t(83407);const i=["components"],d={},u=(l="InlineAlert",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var l;const s={_frontmatter:d},p=m.A;function c(e){let{components:n}=e,t=(0,a.A)(e,i);return(0,o.mdx)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"customercart-query"},"customerCart query"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"customerCart")," query returns the active cart for the logged-in customer. If the cart does not exist, the query creates one. The customer's authorization token must be specified in the headers."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"customerCart")," query differs from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"cart")," query in the following ways:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"customerCart")," query must be run on behalf of a logged-in customer. If you run this query on behalf of a guest, an exception will be thrown."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"cart")," query requires a ",(0,o.mdx)("inlineCode",{parentName:"li"},"cart_id")," value as input. The ",(0,o.mdx)("inlineCode",{parentName:"li"},"customerCart")," query does not take any input parameters.")),(0,o.mdx)("p",null,"You can define the query to return the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," attribute. You can use the value of this attribute as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"destination_cart_id")," input parameter in the ",(0,o.mdx)("a",{parentName:"p",href:"../../cart/mutations/merge.md"},(0,o.mdx)("inlineCode",{parentName:"a"},"mergeCarts")," mutation"),". (The ",(0,o.mdx)("inlineCode",{parentName:"p"},"mergeCarts")," mutation provides the ability to merge a guest cart with the logged-in customer's cart.)"),(0,o.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If you know the value of the logged-in customer's cart ID, you can allow the customer to start an order on one device and complete it on another."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"customerCart: Cart!")),(0,o.mdx)("h2",{id:"reference"},"Reference"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customerCart"},(0,o.mdx)("inlineCode",{parentName:"a"},"customerCart"))," reference provides detailed information about the types and fields defined in this query."),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"The following query lists the products in the logged-in customer's cart:"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  customerCart {\n    id\n    items {\n      id\n      product {\n        name\n        sku\n      }\n      quantity\n    }\n  }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customerCart": {\n      "id": "CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43",\n      "items": [\n        {\n           "uid": "MjI=",\n          "product": {\n            "name": "Strive Shoulder Pack",\n            "sku": "24-MB04"\n          },\n          "quantity": 1\n        },\n        {\n          "uid": "MjQ=",\n          "product": {\n            "name": "Radiant Tee",\n            "sku": "WS12"\n          },\n          "quantity": 1\n        }\n      ]\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-queries-cart-md-55f1221bc64b41da2723.js.map