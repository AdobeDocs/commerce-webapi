1. On the checkout page, the customer selects **Credit Card** as the payment method and enters the credit card information as well as the billing and shipping addresses. When the customer clicks **Place Order**, the PWA client uses the [`setPaymentMethodOnCart`](/src/pages/graphql/schema/cart/mutations/set-payment-method.md) mutation to set the payment method to `payflowpro`.

1. The mutation returns a `Cart` object.

1. The client runs the [`createPayflowProToken`](/src/pages/graphql/schema/checkout/mutations/create-payflow-pro-token.md) mutation to initiate a transaction.

1. The application requests a secure token from the PayPal gateway. The request also contains billing and shipping information, which the application extracts from the `Cart` object.

1. The gateway response includes a secure token, a secure token ID, and result codes and descriptions.

1. The application returns the secure token, a secure token ID, and result codes and descriptions in response to the `createPayflowProToken` mutation.

1. The client uses a hidden iframe to send a silent post request directly to the PayPal gateway for account verification. For live requests, send the silent post to `https://payflowlink.paypal.com`. Send test requests to `https://pilot-payflowlink.paypal.com`.

1. The gateway responds directly to the client. The response contains a payload that includes secure token information and billing and shipping information.

1. The client uses the [`handlePayflowProResponse`](/src/pages/graphql/schema/checkout/mutations/handle-payflow-pro-response.md) mutation to send the payload to the applicaion. The application stores this information without modifying the cart.

1. The mutation returns a `Cart` object.

1. The client runs the [`placeOrder`](/src/pages/graphql/schema/cart/mutations/place-order.md) mutation, which creates an order and begins the authorization process.

1. The application sends an authorization request to the gateway.

1. The gateway sends the response to Magento.

1. The application creates an order and sends an order ID in response to the `placeOrder` mutation.
