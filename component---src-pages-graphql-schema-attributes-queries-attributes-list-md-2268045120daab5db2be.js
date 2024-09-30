"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5436],{78064:function(n,e,a){a.r(e),a.d(e,{_frontmatter:function(){return s},default:function(){return m}});var t=a(58168),l=a(80045),i=(a(88763),a(15680)),r=a(83407);const u=["components"],s={},o={_frontmatter:s},d=r.A;function m(n){let{components:e}=n,a=(0,l.A)(n,u);return(0,i.mdx)(d,(0,t.A)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"attributeslist-query"},"attributesList query"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"attributesList")," query retrieves a list of attributes metadata for a given ",(0,i.mdx)("inlineCode",{parentName:"p"},"entity_type"),"."),(0,i.mdx)("p",null,"The possible values for this attribute are populated by the modules introducing EAV entities, which currently are ",(0,i.mdx)("inlineCode",{parentName:"p"},"CUSTOMER"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"CUSTOMER_ADDRESS"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"CATALOG_PRODUCT")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"RMA_ITEM"),"."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"{attributesList(entityType: AttributeEntityTypeEnum!): {AttributesMetadataOutput}}")),(0,i.mdx)("h2",{id:"reference"},"Reference"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-attributesList"},(0,i.mdx)("inlineCode",{parentName:"a"},"attributesList"))," reference provides detailed information about the types and fields defined in this query."),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("h3",{id:"attributes-list-for-customer"},"Attributes list for ",(0,i.mdx)("inlineCode",{parentName:"h3"},"customer")),(0,i.mdx)("p",null,"The following call returns the list of attributes metadata for a ",(0,i.mdx)("inlineCode",{parentName:"p"},"customer"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  attributesList(entityType: CUSTOMER) {\n    items {\n      code\n      label\n      # other attribute metadata\n    }\n    errors {\n      message\n    }\n  }\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributesList": {\n      "items": [\n        {\n          "code": "website_id",\n          "label": "Associate to Website"\n        },\n        {\n          "code": "created_in",\n          "label": "Created From"\n        },\n        {\n          "code": "firstname",\n          "label": "First Name"\n        },\n        {\n          "code": "lastname",\n          "label": "Last Name"\n        },\n        {\n          "code": "email",\n          "label": "Email"\n        },\n        {\n          "code": "group_id",\n          "label": "Group"\n        },\n        {\n          "code": "disable_auto_group_change",\n          "label": "Disable Automatic Group Change Based on VAT ID"\n        }\n      ],\n      "errors": []\n    }\n  }\n}\n')),(0,i.mdx)("h3",{id:"attributes-list-for-rma_item"},"Attributes list for ",(0,i.mdx)("inlineCode",{parentName:"h3"},"rma_item")),(0,i.mdx)("p",null,"The following call returns the list of attributes metadata for a ",(0,i.mdx)("inlineCode",{parentName:"p"},"rma_item"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  attributesList(entityType: RMA_ITEM) {\n    items {\n      code\n      label\n      default_value\n      frontend_input\n      is_unique\n      is_required\n      options {\n        is_default\n        label\n        value\n      }\n    }\n    errors {\n      type\n      message\n    }\n  }\n} \n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributesList": {\n      "items": [\n        {\n          "code": "resolution",\n          "label": "Resolution",\n          "default_value": null,\n          "frontend_input": "SELECT",\n          "is_unique": false,\n          "is_required": true,\n          "options": [\n            {\n              "is_default": null,\n              "label": "Exchange",\n              "value": "4"\n            },\n            {\n              "is_default": null,\n              "label": "Refund",\n              "value": "5"\n            },\n            {\n              "is_default": null,\n              "label": "Store Credit",\n              "value": "6"\n            }\n          ]\n        },\n        {\n          "code": "condition",\n          "label": "Item Condition",\n          "default_value": null,\n          "frontend_input": "SELECT",\n          "is_unique": false,\n          "is_required": true,\n          "options": [\n            {\n              "is_default": null,\n              "label": "Unopened",\n              "value": "7"\n            },\n            {\n              "is_default": null,\n              "label": "Opened",\n              "value": "8"\n            },\n            {\n              "is_default": null,\n              "label": "Damaged",\n              "value": "9"\n            }\n          ]\n        },\n        {\n          "code": "reason",\n          "label": "Reason to Return",\n          "default_value": null,\n          "frontend_input": "SELECT",\n          "is_unique": false,\n          "is_required": true,\n          "options": [\n            {\n              "is_default": null,\n              "label": "Wrong Color",\n              "value": "10"\n            },\n            {\n              "is_default": null,\n              "label": "Wrong Size",\n              "value": "11"\n            },\n            {\n              "is_default": null,\n              "label": "Out of Service",\n              "value": "12"\n            }\n          ]\n        },\n        {\n          "code": "reason_other",\n          "label": "Other",\n          "default_value": null,\n          "frontend_input": "TEXT",\n          "is_unique": false,\n          "is_required": true,\n          "options": []\n        }\n      ],\n      "errors": []\n    }\n  }\n}\n')),(0,i.mdx)("h3",{id:"apply-a-filter-to-the-attributes-list-query"},"Apply a filter to the attributes list query"),(0,i.mdx)("p",null,"The following call returns the list of attributes metadata for a ",(0,i.mdx)("inlineCode",{parentName:"p"},"catalog_product")," filtered by ",(0,i.mdx)("inlineCode",{parentName:"p"},"is_visible_on_front")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"is_comparable"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n    attributesList(entityType: CATALOG_PRODUCT, filters: {is_visible_on_front:true, is_comparable: true}) {\n        items {\n            code\n            label\n            default_value\n            is_required\n            frontend_class\n            is_unique\n            options {\n                value\n                label\n            }\n        }\n        errors {\n            type\n            message\n        }\n    }\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributesList": {\n      "items": [\n        {\n          "code": "activity",\n          "label": "Activity",\n          "default_value": "",\n          "is_required": false,\n          "frontend_class": null,\n          "is_unique": false,\n          "options": [\n            {\n              "value": "13",\n              "label": "Hike"\n            },\n            {\n              "value": "14",\n              "label": "Outdoor"\n            },\n            {\n              "value": "15",\n              "label": "Running"\n            },\n            {\n              "value": "16",\n              "label": "Warmup"\n            },\n            {\n              "value": "17",\n              "label": "Yoga"\n            },\n            {\n              "value": "18",\n              "label": "Recreation"\n            },\n            {\n              "value": "19",\n              "label": "Lounge"\n            },\n            {\n              "value": "20",\n              "label": "Gym"\n            },\n            {\n              "value": "21",\n              "label": "Climbing"\n            },\n            {\n              "value": "22",\n              "label": "Crosstraining"\n            },\n            {\n              "value": "23",\n              "label": "Post-workout"\n            },\n            {\n              "value": "24",\n              "label": "Cycling"\n            },\n            {\n              "value": "25",\n              "label": "Athletic"\n            },\n            {\n              "value": "26",\n              "label": "Sports"\n            },\n            {\n              "value": "27",\n              "label": "Hiking"\n            },\n            {\n              "value": "28",\n              "label": "Overnight"\n            },\n            {\n              "value": "29",\n              "label": "School"\n            },\n            {\n              "value": "30",\n              "label": "Trail"\n            },\n            {\n              "value": "31",\n              "label": "Travel"\n            },\n            {\n              "value": "32",\n              "label": "Urban"\n            }\n          ]\n        }\n      ],\n      "errors": []\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-attributes-queries-attributes-list-md-2268045120daab5db2be.js.map