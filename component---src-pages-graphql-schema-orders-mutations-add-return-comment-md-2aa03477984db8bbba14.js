"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4036],{89814:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return p}});var a=t(58168),m=t(80045),r=(t(88763),t(15680)),d=t(83407);const u=["components"],o={},i={_frontmatter:o},l=d.A;function p(e){let{components:n}=e,t=(0,m.A)(e,u);return(0,r.mdx)(l,(0,a.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"addreturncomment-mutation"},"addReturnComment mutation"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"addReturnComment")," mutation adds a comment to an existing return request."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation: {\n    addReturnComment(input: AddReturnCommentInput!): AddReturnCommentOutput\n}\n")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addReturnComment"},(0,r.mdx)("inlineCode",{parentName:"a"},"addReturnComment"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example adds a comment in response to the merchant."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation{\n  addReturnComment(input: {\n    return_uid: "Mw=="\n    comment_text: "I\'d like a refund"})\n    {\n    return {\n      uid\n      status\n      comments {\n        uid\n        author_name\n        text\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addReturnComment": {\n      "return": {\n        "uid": "Mw==",\n        "status": "PENDING",\n        "comments": [\n          {\n            "uid": "NQ==",\n            "author_name": "Customer Service",\n            "text": "We placed your Return request."\n          },\n          {\n            "uid": "Ng==",\n            "author_name": "Bob Loblaw",\n            "text": "I want to return the shirt because I don\'t like the texture of the fabric"\n          },\n          {\n            "uid": "Nw==",\n            "author_name": "Customer Service",\n            "text": "OK. Would you like a refund or store credit?"\n          },\n          {\n            "uid": "OA==",\n            "author_name": "Bob Loblaw",\n            "text": "I\'d like a refund"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"related-topics"},"Related topics"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"request-return.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"requestReturn")," mutation")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"add-return-tracking.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"addReturnTracking")," mutation")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"remove-return-tracking.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"removeReturnTracking")," mutation"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-orders-mutations-add-return-comment-md-2aa03477984db8bbba14.js.map