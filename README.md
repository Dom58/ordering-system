# ordering-system
Create a service for an ordering system

## TEST: 

Create a service for an ordering system to:
1. View Orders
2. Create Orders
3. Update Order Status

``All endpoints should be protected using JWT authorization.``

## Prerequisites
  * Node
  * Postman
  * Postgres
  * SailsJs
  
## Technology used

### Backend
  * Nodejs
  * jsonwebtoken
  * bcryptjs

  ## Setup
  1. Clone the repository
     ```https://github.com/Dom58/ordering-system.git```
     
  2. Install dependencies
  
     1. ```npm install sails -g``` read more here [Visit the link]( https://sailsjs.com/get-started)
     2. ```npm install```
     
  3. Start development server
  
     ```nodemon app.js```
  
  4. Use Postman to test api on ```localhost:7000```


## API Endpoints

### Version 1 Endpoints

| Method         | Endpoint             | Description  |
| ---         |     ---      |          --- |
| GET   | /    | Home  |
| POST   | /api/auth/signup    | Create an account   |
| POST     | /api/auth/login      | Sign in      |
| GET   | /api/items    | Get all items    |
| POST     | /api/items/create      | Create Items      |
| POST     | /api/orders/create      | Create Order      |
| GET     | /api/orders     | Get All Orders     |
| PATCH     | /api/orders/:id    | Update Order Status     |
| GET     |  /api/orders/me/:id    | Get all my Orders     |

## HEROKU  & Swagger API Documentation 
* You may read the ordering system documentation using this Heroku URL [Visit the link]( https://ordering-system-api.herokuapp.com/) or copy this link `https://ordering-system-api.herokuapp.com/`


### Version info

This app was originally generated on Mon Jan 04 2021 21:44:55 GMT+0200 (Central Africa Time) using Sails v1.4.0.

## Author
Ndahimana Dominique Xavier
