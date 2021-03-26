---
id: settings
title: Settings
sidebar_label: Settings
slug: /tracker_web/settings
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

The settings page allows for easily updating and making changes to your user profile

---

### Navigation:

To navigate to the settings page, hover your mouse over the side navigation bar and select the settings icon

<img src={require('@site/static/img/tracker-web/settings_navbar.png').default} alt="Navigation Bar" width="20%"/>

---

### Update Profile Name:

To update your user profile name, enter your new user profile name in the Name text field and select the update button

<img src={require('@site/static/img/tracker-web/settings_name.png').default} alt="User Profile Form" width="70%"/>

---

### Update Profile Email:

To update the email associated with your user profile, enter your new email address in the Email text field and select the update button. This will trigger a confirm email address link to be sent to your newly entered email address that you <Highlight color="#25c2a0">**MUST**</Highlight> confirm before being able to access the Tracker Web Portal again. You will also be logged out and required to log back in with your new email address once it is confirmed from the confirm email address link. 

<img src={require('@site/static/img/tracker-web/settings_email.png').default} alt="User Profile Form" width="70%"/>

---

### Change Password:

To change the password associated with your user profile, enter your new password in the Change Password text field and in the Confirm Password text field. The password entered <Highlight color="#25c2a0">**MUST**</Highlight> match in both the Change Password and Confirm Password text fields. Passwords <Highlight color="#25c2a0">**MUST**</Highlight> also confirm to our [Password Standards](password_standards).

<img src={require('@site/static/img/tracker-web/settings_password.png').default} alt="User Profile Form" width="70%"/>

---
