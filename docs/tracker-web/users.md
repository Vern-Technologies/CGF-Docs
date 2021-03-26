---
id: users
title: Users
slug: /tracker_web/users
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );



The users page is for managing employees at your company that have access to the Tracker Mobile application for your account to process container transactions for pickups and drop offs. Ideally, this would be the truck drives for your company that do the pickups and drop offs of containers.

<img src={require('@site/static/img/tracker-web/users.png').default} alt="Users Page" width="100%"/>

---

### Creating a User

To create a new user, you first need to select on the create user button to open the Create User Form. 

##### Create User Button

<img src={require('@site/static/img/tracker-web/users_buttons_add.png').default} alt="Create User Button" width="30%"/>

<br/><br/>

With the Create User Form opened, enter your user information and select save once all of your user information is entered to add your user to the system.

:::note
The password entered <Highlight color="#25c2a0">**MUST**</Highlight> match in both the Password and Confirm Password text fields. Passwords <Highlight color="#25c2a0">**MUST**</Highlight> also confirm to our [Password Standards](password_standards).
:::

##### Create User Form

<img src={require('@site/static/img/tracker-web/users_create.png').default} alt="Create User Form" width="40%"/>

---

### Removing a User

To remove a user, you first need to select on the remove user button to open the Removing User Form. 

##### Remove User Button

<img src={require('@site/static/img/tracker-web/users_buttons_remove.png').default} alt="Remove User Button" width="30%"/>

<br/><br/>

With the Remove User Form opened, select your user from the User dropdown list and select delete to remove your user from the system. You also have the option of removing your user's history from your account or not. If you remove your user's history from your account their history won't be factored in when the system delivers historical based data.

:::note
Once a User is deleted, this action can't be <Highlight color="#25c2a0">**UNDONE**</Highlight> and the system will no longer process transactions for the deleted user.
:::

##### Remove User Form

<img src={require('@site/static/img/tracker-web/users_remove.png').default} alt="Remove User Form" width="50%"/>

---
