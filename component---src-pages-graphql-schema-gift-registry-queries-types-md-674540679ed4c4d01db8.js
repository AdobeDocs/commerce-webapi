"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6928],{59210:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return o}});var r=t(58168),a=t(80045),i=(t(88763),t(15680)),u=t(83407);const d=["components"],l={},p={_frontmatter:l},s=u.A;function o(e){let{components:n}=e,t=(0,a.A)(e,d);return(0,i.mdx)(s,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"giftregistrytypes-query"},"giftRegistryTypes query"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"giftRegistryTypes")," query returns a list of available gift registry types."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"giftRegistryTypes: [GiftRegistryType]\n")),(0,i.mdx)("h2",{id:"reference"},"Reference"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-giftRegistryTypes"},(0,i.mdx)("inlineCode",{parentName:"a"},"giftRegistryTypes"))," reference provides detailed information about the types and fields defined in this query."),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,"The following example returns information about the list of available gift registry types."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query{\n  giftRegistryTypes{\n    label\n    uid\n    dynamic_attributes_metadata {\n      label\n      input_type\n      is_required\n      code\n    }\n  }\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "giftRegistryTypes": [\n      {\n        "label": "Birthday",\n        "uid": "MQ==",\n        "dynamic_attributes_metadata": [\n          {\n            "label": "Country",\n            "input_type": "country",\n            "is_required": true,\n            "code": "event_country"\n          },\n          {\n            "label": "Event Date",\n            "input_type": "date",\n            "is_required": true,\n            "code": "event_date"\n          }\n        ]\n      },\n      {\n        "label": "Baby Registry",\n        "uid": "Mg==",\n        "dynamic_attributes_metadata": [\n          {\n            "label": "Role",\n            "input_type": "select",\n            "is_required": true,\n            "code": "role"\n          },\n          {\n            "label": "Country",\n            "input_type": "country",\n            "is_required": true,\n            "code": "event_country"\n          },\n          {\n            "label": "Baby Gender",\n            "input_type": "select",\n            "is_required": true,\n            "code": "baby_gender"\n          }\n        ]\n      },\n      {\n        "label": "Wedding",\n        "uid": "Mw==",\n        "dynamic_attributes_metadata": [\n          {\n            "label": "Role",\n            "input_type": "select",\n            "is_required": true,\n            "code": "role"\n          },\n          {\n            "label": "Country",\n            "input_type": "country",\n            "is_required": true,\n            "code": "event_country"\n          },\n          {\n            "label": "Wedding Date",\n            "input_type": "date",\n            "is_required": true,\n            "code": "event_date"\n          },\n          {\n            "label": "Location",\n            "input_type": "text",\n            "is_required": true,\n            "code": "event_location"\n          },\n          {\n            "label": "Number of Guests",\n            "input_type": "text",\n            "is_required": true,\n            "code": "number_of_guests"\n          }\n        ]\n      }\n    ]\n  }\n}\n')))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-gift-registry-queries-types-md-674540679ed4c4d01db8.js.map