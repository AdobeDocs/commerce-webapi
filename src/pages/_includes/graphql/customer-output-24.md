Attribute |  Data Type | Description
--- | --- | ---
`addresses` | CustomerAddress  | An array containing the customer's shipping and billing addresses
`allow_remote_shopping_assistance` | Boolean! | Indicates whether the customer has enabled remote shopping assistance
`compare_list` | CompareList | The contents of the customer's comparison list
`created_at` | String | Timestamp indicating when the account was created
`custom_attributes(uids: [ID!])` | [AttributeValueInterface](#attributevalueinterface-attributes)| Custom attributes assigned to the customer address
`date_of_birth` | String | The customer's date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.
`default_billing` | String | The ID assigned to the billing address
`default_shipping` | String | The ID assigned to the shipping address
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer's date of birth
`email` | String | The customer's email address
`firstname` | String | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`group_id` | Int | Deprecated. This attribute is not applicable for GraphQL. The group assigned to the user. Default values are 0 (Not logged in), 1 (General), 2 (Wholesale), and 3 (Retailer)
`id` | Int | Deprecated. This attribute is not applicable for GraphQL. The ID assigned to the customer
`is_subscribed` | Boolean | Indicates whether the customer is subscribed to the company's newsletter
`lastname` | String | The customer's family name
`middlename` |String | The customer's middle name
`orders(filter CustomerOrdersFilterInput, currentPage = 1 Int, pageSize = 20 Int)` | [CustomerOrders] | A list of the customer's placed orders
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`return(uid: ID!)` | Return | Gets details about the specified return request
`returns(pageSize: Int = 20 currentPage: Int = 1)` | Returns | Information about the customer's return requests
`reviews(pageSize: Int = 20 currentPage: Int = 1)` | ProductReviews! | The list of reviews of the product
`reward_points` | [RewardPoints] | Details about the customer's reward points
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)
`wishlist` | Wishlist! | Deprecated. Use `wishlist_v2` instead. Contains the contents of the customer's wish lists
`wishlist_v2(id ID!)` | [Wishlist]! | Retrieve the specified wish list identified by the unique ID for a Wishlist object

For B2B, company administrators and users can have the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`job_title` | String | The job title for a B2B company user
`requisition_lists (pageSize = 20 Int, currentPage = 1 Int, filter RequisitionListFilterInput)` | RequisitionLists | Contains the customer's requisition lists
`role`| CompanyRole | The role name and permissions assigned to the company user
`status` | CompanyUserStatusEnum | Indicates whether the company user is ACTIVE or INACTIVE
`team` | CompanyTeam | The team the company user is assigned to
`telephone` | String | The phone number of the company user

### AttributeValueInterface attributes

import BetaNote from '/src/pages/_includes/graphql/notes/beta.md'

<BetaNote />

The `AttributeValueInterface` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The attribute code
`uid` | ID! | The unique ID of an attribute value

Currently, `AttributeValueInterface` has two different implementations: `AttributeValue` and `AttributeSelectedOptions`.

In addition to the attributes described for `AttributeValueInterface`, the `AttributeValue` contains the following:

Attribute |  Data Type | Description
--- | --- | ---
`value` | String! | The attribute value

The `AttributeSelectedOptions` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`selected_options` | [AttributeSelectedOptionInterface!]! | An array containing selected options for a select or multiselect attribute

The `AttributeSelectedOptionInterface` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`label` | String! | The attribute selected option label
`uid` | ID! | The unique ID of an attribute selected option
`value` | String! | The attribute selected option value
