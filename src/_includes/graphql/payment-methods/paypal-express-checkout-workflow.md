1. When the buyer clicks a PayPal button, the frontend executes the [`createPaypalExpressToken`](/src/pages/graphql/schema/checkout/mutations/create-paypal-express-token.md) mutation.

1. The application requests a secure token from PayPal. The application gathers information in the specified cart and sends this information to PayPal as part of a request for a secure token.

1. If the token request succeeds, PayPal returns a token. You must include this token in subsequent steps.

1. The application sends the token to the client. The `createPaypalExpressToken` response includes the token and the PayPal URLs to be used in the next step.

1. Redirect the customer to PayPal for approval. Depending on your implementation, the customer is either redirected to the PayPal login screen, or the customer enters their credentials in-context.

1. If the customer approves the payment, PayPal redirects the customer back to the payment confirmation page. The response includes the secure token and payer ID as GET parameters.

1. Set the payment method. The frontend runs the [`setPaymentMethodOnCart`](/src/pages/graphql/schema/cart/mutations/set-payment-method.md) mutation. The payload includes the PayPal token, the payer ID, and the cart ID. The cart may have been updated since the token was requested, as shipping costs, taxes, and other adjustments might have been applied to the cart. The application submits the updated cart to PayPal.

1. The application returns a `Cart` object.

1. Place the order with the [`placeOrder`](/src/pages/graphql/schema/cart/mutations/place-order.md) mutation.

1. The application sends the secure token, payer ID, and final cart information to PayPal.

1. PayPal captures the payment by transferring the funds from the customer account to the appropriate merchant account.

1. The application creates an order, ready for fulfillment.
