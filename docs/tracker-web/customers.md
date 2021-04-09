---
id: customers
title: Customers
slug: /tracker_web/customers
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );



The customers page is for managing the customers that you service. This is how the system tracks data between customers and allows for deeper insights into meta data individualized between your customers.

<img src={require('@site/static/img/tracker-web/customers.png').default} alt="Customers Page" width="100%"/>

---

### Creating a Customer

To create a new customer, you first need to select on the create customer button to open the Create Customer Form. 

##### Create Customer Button

<img src={require('@site/static/img/tracker-web/customers_buttons_add.png').default} alt="Create Customer Button" width="30%"/>

<br/><br/>

With the Create Customer Form opened, enter your customer's information, and select save once all of your customer's information is entered to add your customer to the system.

:::note
The <Highlight color="#25c2a0">**Days Till Pickup**</Highlight> section in the Create Customer Form denotes the amount of days your container is supposed to stay on your customers site. The number of days entered till pickup is how the system calculates pickup due dates for containers and notifies you on when a container is past due.
:::

##### Create Customer Form

<img src={require('@site/static/img/tracker-web/customers_create.png').default} alt="Create Customer Form" width="40%"/>

---

### Removing a Customer

To remove a customer, you first need to select on the remove customer button to open the Removing Customer Form. 

##### Remove Customer Button

<img src={require('@site/static/img/tracker-web/customers_buttons_remove.png').default} alt="Remove Customer Button" width="30%"/>

<br/><br/>

With the Remove Customer Form opened, select your customer from the Customer dropdown list and select delete to remove your customer from the system. You also have the option of removing your customer's history from your account or not. If you remove your customer's history from your account, their history won't be factored in when the system delivers historical based data.

:::note
Once a Customer is deleted, this action can't be <Highlight color="#25c2a0">**UNDONE**</Highlight> and the system will no longer process transactions for the deleted customer.
:::

##### Remove Customer Form

<img src={require('@site/static/img/tracker-web/customers_remove.png').default} alt="Remove Customer Form" width="50%"/>

---
