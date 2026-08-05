---
title: Order Management REST Endpoints
description: Learn how to manage the full order chain and edit existing orders programmatically with the order management REST APIs in Adobe Commerce as a Cloud Service.
keywords:
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# Order management API

Adobe Commerce as a Cloud Service provides REST APIs for advanced order operations that go beyond the standard order endpoints. Use these APIs to manage the full chain of orders produced by order edits and to edit an existing order programmatically.

These two capabilities work together: editing an order produces a chain of linked orders, and the order chain endpoints let you continue to act on that order by its original ID.

## Manage the full order chain

When you edit an order, Commerce cancels the original order and creates a new child order that is linked to its predecessor by the original order's increment ID. Across multiple edits, these orders form an order chain. The order chain endpoints let integrations act on an order using its ID and automatically resolve the operation across the full chain of edited orders, so you do not have to track the latest child order yourself.

<InlineAlert variant="warning" slots="text" />

This feature is experimental and is disabled by default. This feature is subject to change based on future development. To request access, contact your Adobe Commerce Customer Success Manager or create a support ticket.

The `orderChain` endpoints extend the standard order management endpoints, so each request and response body matches its standard `/V1/order/{id}/...` counterpart.

| Method | Endpoint | Description | Role resource |
| --- | --- | --- | --- |
| `POST` | `/V1/orderChain/{orderId}/invoice` | Create an invoice for the order, resolving the items to invoice across the order chain. | `Magento_Sales::invoice` |
| `POST` | `/V1/orderChain/{id}/cancel` | Cancel the current order in the chain. | `Magento_Sales::cancel` |
| `POST` | `/V1/orderChain/{id}/hold` | Place the order on hold. | `Magento_Sales::hold` |
| `POST` | `/V1/orderChain/{id}/unhold` | Remove the hold from the order. | `Magento_Sales::unhold` |
| `POST` | `/V1/orderChain/{id}/emails` | Send an order email notification. | `Magento_Sales::emails` |
| `POST` | `/V1/orderChain/{id}/comments` | Add a comment to the order. | `Magento_Sales::comment` |
| `GET` | `/V1/orderChain/{id}/comments` | Retrieve the order comments. | `Magento_Sales::actions_view` |
| `GET` | `/V1/orderChain/{id}/statuses` | Retrieve the current order status. | `Magento_Sales::actions_view` |

### Order chain examples

The following examples call each `orderChain` endpoint using order ID `42`. When the specified order is part of a chain, Commerce automatically resolves the request to the latest order in that chain.

#### Example: create an invoice

Request:

```http
POST /rest/V1/orderChain/42/invoice
```

Request body:

```json
{
  "items": [
    {
      "order_item_id": 3,
      "qty": 1
    }
  ],
  "notify": true,
  "comment": {
    "comment": "Invoice created after payment confirmation.",
    "is_visible_on_front": 1
  }
}
```

The response returns the ID of the new invoice:

```json
31
```

#### Example: cancel an order

Request:

```http
POST /rest/V1/orderChain/42/cancel
```

The response confirms the cancellation:

```json
true
```

#### Example: place an order on hold

Request:

```http
POST /rest/V1/orderChain/42/hold
```

The response confirms the hold:

```json
true
```

#### Example: release an order from hold

Request:

```http
POST /rest/V1/orderChain/42/unhold
```

The response confirms the order was released from hold:

```json
true
```

#### Example: send an order email

Request:

```http
POST /rest/V1/orderChain/42/emails
```

The response confirms the notification was sent:

```json
true
```

#### Example: add a comment to an order

Request:

```http
POST /rest/V1/orderChain/42/comments
```

Request body:

```json
{
  "statusHistory": {
    "comment": "Contacted the customer to confirm the delivery window.",
    "is_customer_notified": 1,
    "is_visible_on_front": 1,
    "parent_id": 42,
    "status": "processing"
  }
}
```

The response confirms the comment was added:

```json
true
```

#### Example: retrieve order comments

Request:

```http
GET /rest/V1/orderChain/42/comments
```

The response returns the comments for every order in the chain:

```json
{
  "items": [
    {
      "comment": "Contacted the customer to confirm the delivery window.",
      "created_at": "2026-07-20 14:32:10",
      "entity_id": 12,
      "entity_name": "order",
      "is_customer_notified": 1,
      "is_visible_on_front": 1,
      "parent_id": 42,
      "status": "processing"
    }
  ],
  "search_criteria": {},
  "total_count": 1
}
```

#### Example: retrieve the order status

Request:

```http
GET /rest/V1/orderChain/42/statuses
```

The response returns the status of the latest order in the chain:

```json
"processing"
```

### Filter order documents by original order ID

The following `GET` endpoints support an `order_original_id` search filter:

*  `GET /V1/invoices`
*  `GET /V1/shipments`
*  `GET /V1/creditmemo`
*  `GET /V1/returns`

Filtering by `order_original_id` returns documents for the entire order chain, not just a single order. The following example returns every invoice in the chain for the original order ID `100000042`:

```http
GET /V1/invoices?searchCriteria[filterGroups][0][filters][0][field]=order_original_id&searchCriteria[filterGroups][0][filters][0][value]=100000042
```

## Edit orders

The following REST endpoints replicate the Commerce Admin **Edit Order** feature, allowing integrations to edit an existing order programmatically. Editing an order copies it into a new cart, then submits the modified cart as a new order that replaces the original.

<InlineAlert variant="warning" slots="text" />

This feature is experimental and is disabled by default. This feature is subject to change based on future development. To request access, contact your Adobe Commerce Customer Success Manager or create a support ticket.

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/V1/orders/{orderId}/edit/start` | Copy the order into a new editable cart and return the cart ID. |
| `POST` | `/V1/orders/{orderId}/edit/submit` | Submit the modified cart as a new order and cancel the original order. |

Both endpoints require the `Magento_Sales::actions_edit` role resource.

### Edit an order

To edit an existing order:

1. Call `POST /V1/orders/{orderId}/edit/start`.

   Commerce copies the order's items, addresses, shipping method, coupon code, and payment method into a new cart and returns the cart ID.

1. Modify the cart using the standard cart REST endpoints, such as adding or removing items, updating addresses, or changing the payment method.

1. Call `POST /V1/orders/{orderId}/edit/submit` with the cart ID in the `quoteId` field.

The new order inherits the original order's payment method unless you override it through the cart. Commerce creates the new order as a linked replacement for the canceled original and assigns it an increment ID of the form `{original}-1`, `{original}-2`, and so on.

#### Example: start an edit

Request:

```http
POST /rest/V1/orders/42/edit/start
```

The response returns the cart ID to modify and submit:

```json
17
```

#### Example: submit an edit

Request:

```http
POST /rest/V1/orders/42/edit/submit
```

Request body:

```json
{
  "quoteId": 17
}
```

The response returns the ID of the new order:

```json
55
```
