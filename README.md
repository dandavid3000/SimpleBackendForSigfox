> This is a simple server build a simple downlink service using NodeJs

## Table of contents
* [Installation](#installation)
* [Run](#run)
* [Modification](#modification)
* [Testing](#testing)


## Installation

Clone the project using Webstorm. 
  * Open `Webstorm`
  * Choose `Check out from Version Control` -> `Git`
  * Put the git URL and Directory to save the project
  * Click `Clone`

## Run

To run the server
  * Right click on `www` file in `bin` folder
  * Choose `Run bin\www`
  * Server is running on `localhost` port `3000`
  
    ```
    Server is running on 3000
    ```
    
## Modification
* To modify the downlink value:
  * Access to `downlink.js` file in `routes` directory.
  * modify `0102030405060708` value in `{'downlinkData':'0102030405060708'}`. This is the DL value (8 byte) to return to Sigfox backend.
  * Remember to trigger `ack=true` from your device to get back the downlink. 
  
* Server supports only `HTTP GET`. 
  
 ## Testing
 Test the server is Postman to ensure it's running correctly.
  ```
  localhost:3000/downlink?device=1234&ack=true
  ```
  
The returned value
  ```
  {
      "1234": {
          "downlinkData": "0102030405060708"
      }
  }
  ```
 
  
