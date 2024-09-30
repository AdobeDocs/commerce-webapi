"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[408],{49988:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return u}});var m=t(58168),a=t(80045),r=(t(88763),t(15680)),i=t(83407);const d=["components"],o={},l={_frontmatter:o},p=i.A;function u(e){let{components:n}=e,t=(0,a.A)(e,d);return(0,r.mdx)(p,(0,m.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"creditmemoiteminterface-attributes-and-implementations"},"CreditMemoItemInterface attributes and implementations"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"CreditMemoItemInterface")," provides details about items in a customer's order history that were refunded. It has the following implementations:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"BundleCreditMemoItem")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"CreditMemoItem")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"DownloadableCreditMemoItem")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"GiftCardCreditMemoItem"))),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CreditMemoItemInterface"},(0,r.mdx)("inlineCode",{parentName:"a"},"CreditMemoItemInterface"))," reference provides detailed information about the types and fields defined in this interface."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following query returns items that were refunded in order ID ",(0,r.mdx)("inlineCode",{parentName:"p"},"000000005"),". The ",(0,r.mdx)("inlineCode",{parentName:"p"},"BundleOrderItem")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"DownloadableOrderItem")," fragments can contain item-specific information, but the only refunded item is a configurable product."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  customer {\n    firstname\n    lastname\n    email\n    orders(\n      filter: {\n        number: {\n          match: "000000005"\n        }\n      }) {\n      items {\n        id\n        credit_memos {\n          id\n          items {\n            id\n            product_sku\n            product_name\n            order_item {\n              product_type\n            }\n            quantity_refunded\n            ... on BundleCreditMemoItem {\n              bundle_options {\n                id\n                values {\n                  id\n                  product_name\n                  product_sku\n                  quantity\n                  price {\n                    value\n                    currency\n                  }\n                }\n              }\n            }\n            ... on DownloadableCreditMemoItem {\n              downloadable_links {\n                uid\n                title\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "firstname": "Roni",\n      "lastname": "Costello",\n      "email": "roni_cost@example.com",\n      "orders": {\n        "items": [\n          {\n            "id": "NQ==",\n            "credit_memos": [\n              {\n                "id": "Mg==",\n                "items": [\n                  {\n                    "id": "Mg==",\n                    "product_sku": "WS12-XS-Orange",\n                    "product_name": "Radiant Tee",\n                    "order_item": {\n                      "product_type": "configurable"\n                    },\n                    "quantity_refunded": 1\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-orders-interfaces-credit-memo-item-md-3247fd8cc6935b5f5628.js.map