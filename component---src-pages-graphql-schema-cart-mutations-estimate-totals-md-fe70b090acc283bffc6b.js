"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5969],{85777:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return p}});var a=t(58168),o=t(80045),m=(t(88763),t(15680)),r=t(83407);const i=["components"],d={},l={_frontmatter:d},s=r.A;function p(e){let{components:n}=e,t=(0,o.A)(e,i);return(0,m.mdx)(s,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"estimatetotals-mutation"},"estimateTotals mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"estimateTotals")," mutation returns information about estimated total cost of items in cart, including taxes."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  estimateTotals(input: EstimateTotalsInput!)\n  {\n      EstimateTotalsOutput!\n  }\n}\n")),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-estimateTotals"},(0,m.mdx)("inlineCode",{parentName:"a"},"estimateTotals"))," reference provides detailed information about the types and fields defined in this mutation."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"In the following example, the customer located in Republic of Ireland wants to check the total estimated cost of the cart (",(0,m.mdx)("inlineCode",{parentName:"p"},"IJGaHxS7p6u5Nu7tQIGQpADRXSoZRbJw"),"). The cart contains two products with the price of 99.00 Euro each,\nand the applied tax amount configured for Republic of Ireland is 10%:"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  estimateTotals(input: {\n    cart_id: "IJGaHxS7p6u5Nu7tQIGQpADRXSoZRbJw",\n    address: {\n      country_code: IE\n    },\n    shipping_method: {\n      carrier_code: "CARRIER",\n      method_code: "example_method_code"\n    }\n  }) {\n    cart {\n      prices {\n        grand_total {\n          value\n          currency\n        }\n        applied_taxes {\n          amount {\n            value\n            currency\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("p",null,"The response contains the calculated total cost based on the selected location and shipping method:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "estimateTotals": {\n      "cart": {\n        "prices": {\n          "grand_total": {\n            "value": 217.8,\n            "currency": "EUR"\n          },\n          "applied_taxes": [\n            {\n              "amount": {\n                "value": 19.8,\n                "currency": "EUR"\n              }\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-estimate-totals-md-fe70b090acc283bffc6b.js.map