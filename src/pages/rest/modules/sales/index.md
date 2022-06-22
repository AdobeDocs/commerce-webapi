---
title: Refunds
description: Issue a refund using the REST API
--- 
 
# Refunds

There are a couple of options to choose when issuing a refund using the Adobe Commerce API.

## salesRefundInvoiceV1 service

With this service, you can initiate and process a refund based on an invoice ID, created using an online payment method.

The `salesRefundInvoice` service allows you to:

*  Create a credit memo (complete or partial) for an invoice
*  Add details about the refunded items to the order
*  Change status and state of an order according to performed actions
*  Notify a customer about the performed refund operation
*  Designate whether the returned items are returned to stock

### Endpoint

`POST V1/invoice/:invoiceId/refund`

<InlineAlert variant="warning" slots="text"/>

If you try to apply the service to an invoice created using an offline payment method, the system will return a validation error.

## salesRefundOrderV1 service

This service performs the same operations as the `salesRefundInvoiceV1` service, but based on an order ID. Use this service if the invoice was created using an offline payment method.

### Endpoint

`POST V1/order/:orderId/refund`

<InlineAlert variant="warning" slots="text"/>

If you try to apply the service to an invoice created using an online payment method, the system will return a validation error.

## Other services for issuing refunds

While we recommend you use the `Refund` services, Commerce also provides the following `CreditmemoManagement` services you can use to issue a credit:

*  `salesCreditmemoManagement`
*  `salesCreditmemoRepository`
