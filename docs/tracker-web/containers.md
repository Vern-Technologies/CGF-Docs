---
id: containers
title: Containers
slug: /tracker_web/containers
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );



The containers page is for managing your container assets that you service to your customers. This is how the system tracks data between containers and allows for deeper insights into meta data individualized between your containers.

The containers page breaks containers down into three sections.

  - **Past Due:** Is the containers that are currently at a customer's location past their designated pickup date.
  - **Due in:** Is the containers that are currently at a customer's location within their designated pickup date.
  - **Not Working:** Is the containers that aren't currently at a customer's location and aren't in service.

<img src="../../static/img/tracker-web/containers.png" alt="Containers Page" width="100%"/>

---

### Creating a Container

To create a new container, you first need to select on the create container button to open the Create Container Form. 

##### Create Container Button

<img src="../../static/img/tracker-web/containers_buttons_add.png" alt="Create Container Button" width="30%"/>

<br/><br/>

With the Create Container Form opened, enter your containers information and select save once all of your containers information is entered to add your container to the system.

##### Create Container Form

<img src="../../static/img/tracker-web/containers_create.png" alt="Create Container Form" width="40%"/>

---

### Removing a Container

To remove a container, you first need to select on the remove container button to open the Removing Container Form. 

##### Remove Container Button

<img src="../../static/img/tracker-web/containers_buttons_remove.png" alt="Remove Container Button" width="30%"/>

<br/><br/>

With the Remove Container Form opened, select your container from the Container dropdown list and select delete to remove your container from the system. You also have the option of removing your container's history from your account or not. If you remove your container's history from your account it's history won't be factored in when the system delivers historical based data.

:::note
Once a Container is deleted, this action can't be <Highlight color="#25c2a0">**UNDONE**</Highlight> and the system will no longer process transactions for the deleted container.
:::

##### Remove Container Form

<img src="../../static/img/tracker-web/containers_remove.png" alt="Remove Container Form" width="50%"/>

---
