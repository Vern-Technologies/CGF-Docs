---
id: qrcodes
title: QR Codes
slug: /tracker_web/qrcodes
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );



For the Tracker Platform, QR Codes are used as the means to identify and track your containers. To make a container trackable on the Tracker Platform you must first generate a QR Code for your container and then get a label made of your preference with the generated QR Code. Generated QR Codes from the Tracker Platform are what the Tracker Mobile application uses to identify your containers when processing pickups and drop offs. 

---

### Generate QR Codes

To generate QR Codes, you first need to select the generate QR Codes button on the Containers page to open the Generate QR Codes Form. 

##### Generate QR Codes Button

<img src={require('@site/static/img/tracker-web/containers_buttons_qr.png').default} alt="Generate QR Codes Button" width="30%"/>

<br/><br/>

With the Generate QR Codes Form opened, select which containers you want to generate QR codes for and select generate.

:::note
You can search for specific containers by entering the name of the container you're looking for in the Container Name search field. You can also select all your containers at one time by clicking the Select All option at the bottom of the Generate QR Codes Form.
:::

##### Generate QR Codes Form

<img src={require('@site/static/img/tracker-web/containers_qrcodes.png').default} alt="Generate QR Codes Form" width="40%"/>

---

### Downloading QR Codes

Once you have selected which containers you want to generate QR Codes for and selected generate on the Generate QR Codes Form, the generate QR Codes process will start. Once the generate QR Codes process finishes, you will be prompted with your browsers download window to choose where you want to download your generated QR Codes to. Generated QR Codes are returned to you in a ZIP file. To access your generated QR Codes, simply unzip the QRCodes.zip file with your device's file manager.

<img src={require('@site/static/img/tracker-web/containers_qrcodes_files.png').default} alt="QRCodes.zip File" width="40%"/>

---
