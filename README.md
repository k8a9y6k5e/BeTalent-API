# BeTalent-API
---
## What is

This project it's a technical project, made in less than one week (03/10/26 to 03/14/26), with the use of Adonisjs to program.

---
## Objective

The project is a RESTful API, multi-gateway payment service, using fall back to control the gateways failures.

---
## Technologies used

- Node.js
- Adonis.JS
- Vine
- Lucid ORM
- MySQL

---
## Routes

| NAME | REQUEST | RESPONSE | URL | METHOD | SECURITY|
|---|---|---|---|---|---|
| Login | [ email, password ] | [ token ] | http://localhost:3333/login | POST | public |
| Product create | [ name, amount(in R$) ] | [ name, amount(in cents) ] | http://localhost:3333/products | POST | private |
| Gateway update | [ isActive, priority ](both nullable) | 'Updated' | http://localhost:3333/gateway/:id | PATCH | private |
| Gateway update | [ isActive, priority ] | 'Updated' | http://localhost:3333/gateway/:id | PUT | private |
| Client create | [ name, email ] | 'Client created' | http://localhost:3333/client | POST | private |
| Client transactions |  | [ object with client and his/her transactions ] | http://localhost:3333/client/:id | GET | private |
| Show all clients |  | [ object with all clients(with pagination) ] | http://localhost:3333/client | GET | private |
| Transaction create | [ clientId, cardNumber, productId, quantity, cvv ] | 'Transaction made' | http://localhost:3333/purchases | POST | public |
| Show detailed transaction |  | [ object with transaction and detailed informations, like user which made or product refered ] | http://localhost:3333/purchases/:id | GET | private |
| Show all transaction |  | [ object with all transactions(with pagination) ] | http://localhost:3333/purchases | GET | private |
| Refund purchase |  | 'Purchase refund' | http://localhost:3333/purchases/:id/refund | POST | private |

---
## How run

1. Install this project
2. Open the terminal inside the project
3. Run 'npm install'
4. Configure the .env
5. Create a connection with one db
6. Install and start the container with 'docker run -p 3001:3001 -p 3002:3002 matheusprotzen/gateways-mock'
7. Run 'node ace migration:run'
8. Run 'node ace db:seed'
9. Run 'npm run start'
10. Use an external application to use the API
11. Use the routes as a guide

---
## How work the multi-gateway

With one db with seeds with the quantity of gateway, get the activity gateways, in order of priority(both can be changed), with it the system make a fetch with the choosed gateway,
if returned an error, that error is saved and is passed to the next gateway, if all saved gateways fail, it return an error to user.

---
## Problem/Difficulties during the production

The main problem which I have while construct it's the difficult to understand the commands and work flow of the adonis, I'm more accustomed with a less abstract programming
use, and to start understanding the use of that framework get one day trying and read how to use it, but, after that time it get much more easily, and, make me to change the use
of express.js to Adonis.js.
