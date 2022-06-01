module.exports = [
  {
    title: "Introduction",
    path: "/get-started.md",
  },
  {
    title: "Use REST APIs",
    path: "/get-started/api-security.md",
    header: true,
    pages: [
        {
            title: "API security",
            path: "/get-started/api-security.md",
        },
        {
            title: "Construct a request",
            path: "/get-started/gs-web-api-request.md",
        },
        {
            title: "Use cURL to run the request",
            path: "/get-started/gs-curl.md"
        },
        {
          title: "Status codes and responses",
          path: "/get-started/gs-web-api-response.md",
        }, 
    ],
},
{
  title: "Use SOAP services",
  path: "/get-started/soap-web-api-calls.md",
},
{
  title: "Authentication",
  path: "/get-started/authentication.md",
  header: true,
  pages: [
      {
          title: "Token-based authentication",
          path: "/get-started/authentication/gs-authentication-token.md",
      },
      {
        title: "OAuth-based authentication",
        path: "/get-started/authentication/gs-authentication-oauth.md",
      },
      {
        title: "OAuth error codes",
        path: "/get-started/authentication/oauth-errors.md",
      
      },
      {
        title: "Session-based authentication",
        path: "/get-started/authentication/gs-authentication-session.md",
      },
  ],
},
{
  title: "Create an integration",
  path: "/get-started/create-integration.md",
},
{
  title: "Web API functional testing",
  path: "/get-started/web-api-functional-testing.md",
},
];
