"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6333],{90200:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return x}});var n=a(58168),r=a(80045),m=(a(88763),a(15680)),d=a(83407);const o=["components"],i={},l=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var s;const u={_frontmatter:i},p=d.A;function x(e){let{components:t}=e,a=(0,r.A)(e,o);return(0,m.mdx)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"updatecustomer-mutation"},"updateCustomer mutation"),(0,m.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"We recommend using the ",(0,m.mdx)("a",{parentName:"p",href:"update-v2.md"},"updateCustomerV2 mutation")," to update a customer."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateCustomer")," mutation updates the customer's personal information."),(0,m.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"mutation: {updateCustomer(input: CustomerInput!) {CustomerOutput}}")),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCustomer"},(0,m.mdx)("inlineCode",{parentName:"a"},"updateCustomer"))," reference provides detailed information about the types and fields defined in this mutation."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following call updates the first name and email address for a specific customer."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCustomer(\n    input: {\n      firstname: "Rob"\n      email: "robloblaw@example.com"\n    }\n  ) {\n    customer {\n      firstname\n      email\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCustomer": {\n      "customer": {\n        "firstname": "Rob",\n        "email": "robloblaw@example.com"\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'"input" value should be specified')),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"input")," argument is empty.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'"Email" is not a valid email address.')),(0,m.mdx)("td",{parentName:"tr",align:null},"The value provided in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument has an invalid format.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Provide the current "password" to change "email".')),(0,m.mdx)("td",{parentName:"tr",align:null},"To change an email address, specify the correct customer password in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"password")," argument.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"A customer with the same email address already exists in an associated website.")),(0,m.mdx)("td",{parentName:"tr",align:null},"You cannot apply a new email address to a current customer because another user has the same email address.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Invalid login or password.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"password")," argument is incorrect.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The current customer is not currently logged in, or the customer's token does not exist in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table.")))),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"create.md"},"createCustomer mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"create-address.md"},"createCustomerAddress mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"update-address.md"},"updateCustomerAddress mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"delete-address.md"},"deleteCustomerAddress mutation"))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-update-md-c5097f7d25b4c43680f1.js.map